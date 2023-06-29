import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/common/Header/Header';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import Footer from '@/components/common/Footer/Footer';

const pretendard = localFont({
  src: [
    {
      path: '../font/Pretendard-Thin.woff2',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../font/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'extra-light',
    },
    {
      path: '../font/Pretendard-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../font/Pretendard-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../font/Pretendard-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../font/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../font/Pretendard-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../font/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'extra-bold',
    },
    {
      path: '../font/Pretendard-ExtraLight.woff2',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'eunjee blog',
  description: '프론트엔드 개발자 이은지의 개발 블로그',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${pretendard.variable} font-sans`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className="flex flex-col justify-center items-center font-light leading-7 w-full bg-bg text-text">
          <Header />
          <main className="xl:max-w-[768px] xl:w-[768px] md:max-w-[512px] md:w-[512px] w-[90%] max-w-[512px] mb-[256px]">
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
