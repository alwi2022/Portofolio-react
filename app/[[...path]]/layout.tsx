import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from '@/components/portfolio/intl-provider';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navbar, Footer } from '@/components/portfolio/chrome';
import { resolveRoute } from '@/lib/routes';
import en from '@/messages/en.json';
import id from '@/messages/id.json';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ path?: string[] }> }) {
  const route = resolveRoute((await params).path);
  const lang = route?.lang ?? 'id';
  return <html lang={lang} suppressHydrationWarning>
    <body className={`${inter.className} relative isolate grid min-h-screen grid-rows-[auto_1fr_auto]`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#D8E5F2B3_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_75%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[20px_20px] dark:bg-[radial-gradient(#ffffff25_1px,transparent_1px)]" />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <NextIntlClientProvider locale={lang} timeZone="Asia/Jakarta" messages={lang === 'id' ? id : en}>
          <Navbar lang={lang} page={route?.page ?? 'home'} />
          {children}
          <Footer lang={lang} />
        </NextIntlClientProvider>
      </ThemeProvider>
    </body>
  </html>;
}
