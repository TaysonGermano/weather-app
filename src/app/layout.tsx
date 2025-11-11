import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import PageContainer from '../components/layout/PageContainer/PageContainer';
import QueryProvider from '@/tanstack-query/QueryProvider';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'A simple weather application built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={`${roboto.variable} antialiased bg-bg-base`}>
          <PageContainer>{children}</PageContainer>
        </body>
      </QueryProvider>
    </html>
  );
}
