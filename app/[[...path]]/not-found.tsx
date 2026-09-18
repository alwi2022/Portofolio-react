import Link from 'next/link';
export default function NotFound() {
  return <main className="mx-auto w-full max-w-xl px-8 py-20"><h1 className="mb-4 text-xl font-medium">404, Page not found</h1><Link href="/" className="underline underline-offset-4">Back to portfolio</Link></main>;
}
