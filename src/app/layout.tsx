import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'eun-jee.com',
  description: '프론트엔드 개발자 이은지의 개발 블로그',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
          <Link href="/search">Search</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
