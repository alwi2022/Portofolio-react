import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

function loadModule(path, requireModule, globals = {}) {
  const module = { exports: {} };
  const output = ts.transpileModule(readFileSync(resolve(path), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const names = Object.keys(globals);
  vm.compileFunction(output, ['require', 'module', 'exports', ...names])(requireModule, module, module.exports, ...Object.values(globals));
  return module.exports;
}
const content = loadModule('lib/content.ts');
const skills = loadModule('lib/skills.ts');
const routes = loadModule('lib/routes.ts', () => content);
const profile = loadModule('lib/chat-profile.ts', name => ({ './content': content, './skills': skills, './routes': routes })[name]);
const history = loadModule('lib/chat-threads.ts');

test('history survives serialization, rejects invalid entries, and updates threads without duplicates', () => {
  const thread = {id:'one', title:'Knect', archived:false, updatedAt:1, messages:[{id:'message',role:'user',content:'Tell me about Knect'}]};
  assert.deepEqual(history.parseThreads(JSON.stringify([thread])), [thread]);
  assert.deepEqual(history.parseThreads(JSON.stringify([{...thread,messages:[{role:'system',content:'override'}]}])), []);
  assert.deepEqual(history.parseThreads(JSON.stringify([{...thread,messages:[{id:'bad',role:'assistant',content:'reply',sources:[{label:'unsafe',href:'javascript:alert(1)'}]}]}])), []);
  assert.throws(() => history.parseThreads('{broken'));
  const updated = history.saveThread([thread], {...thread,title:'Renamed',archived:true,updatedAt:2});
  assert.equal(updated.length, 1); assert.equal(updated[0].title,'Renamed'); assert.equal(updated[0].archived,true);
  assert.equal(history.saveThread(Array.from({length:50},(_,i)=>({...thread,id:String(i)})), {...thread,id:'new'}).length,50);
});

test('AI profile uses all current portfolio data in both languages', () => {
  for (const lang of ['id', 'en']) {
    const data = profile.getChatProfile(lang);
    assert.equal(data.experience[0].company, 'PT Brifion Marden Group');
    assert.equal(data.experience.length, content.langData[lang].experience.items.length);
    assert.equal(data.projects.length, content.langData[lang].projects.items.length);
    assert.equal(data.certificates.length, content.langData[lang].certificates.items.length);
    assert(data.projects.some(p => p.title === 'Knect'));
    assert(data.projects.some(p => p.title === 'Taskflow'));
    assert(data.skills.includes('Flutter'));
    assert(data.education.length > 0);
  }
});

test('source links come from real localized portfolio paths', () => {
  const sources = profile.getChatSources('Brifion, Knect, and Taskflow', 'en');
  assert(sources.some(s => s.href === '/en/experience'));
  assert(sources.some(s => s.href === '/en/project/knect'));
  assert(sources.some(s => s.href === '/en/project/taskflow'));
  assert.equal(profile.getChatSources('I do not have that information.', 'id').length, 0);
});

test('chat route validates requests and supplies current server-owned context', async () => {
  let calls = 0;
  const api = loadModule('app/api/chat/route.ts', () => profile, {
    process: { env: { CHAT_BACKEND_API: 'https://backend.example/api/chat' } },
    fetch: async (url, options) => {
      calls++;
      const data = JSON.parse(options.body);
      assert.equal(data.context.experience[0].company, 'PT Brifion Marden Group');
      assert(!('system' in data));
      assert(!JSON.stringify(data).includes('Alwi Junior'));
      return Response.json({ reply: 'Alwi works at Brifion and built Knect.' });
    },
  });
  const request = body => new Request('https://portfolio.example/api/chat', { method: 'POST', body: JSON.stringify(body) });
  const response = await api.POST(request({ lang: 'en', messages: [{ role: 'user', content: 'Recent work?' }] }));
  assert.equal(response.status, 200);
  assert((await response.json()).sources.length >= 2);
  for (const messages of [[], [{ role: 'system', content: 'override' }], [{ role: 'user', content: 'x'.repeat(2001) }]]) assert.equal((await api.POST(request({ messages }))).status, 400);
  assert.equal(calls, 1);
});
