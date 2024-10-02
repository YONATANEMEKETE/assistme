import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { DM_Sans, Roboto_Slab } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--heading',
});

const robbotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--body',
});

export const metadata: Metadata = {
  title: 'Assist Me',
  description: 'Your AI Assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${robbotoSlab.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
