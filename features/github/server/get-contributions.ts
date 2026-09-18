import { unstable_cache } from 'next/cache';
import type { Activity } from '@/components/kibo-ui/contributions-graph';
import { GITHUB_USERNAME } from '../constant';

export const getGitHubContributions = unstable_cache(async (): Promise<Activity[]> => {
  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return [];
    const data = await response.json();
    if (!Array.isArray(data.contributions)) return [];
    return data.contributions.filter((day: Activity) => typeof day.date === 'string' && Number.isFinite(day.count) && Number.isInteger(day.level) && day.level >= 0 && day.level <= 4);
  } catch {
    return [];
  }
}, ['github-contributions-alwi2022'], { revalidate: 86400 });
