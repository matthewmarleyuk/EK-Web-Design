import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'East Kilbride Web Design | Professional Web Development Services',
  description: 'East Kilbride Web Design offers professional web development services, creating stunning and functional websites tailored to your business needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="ue4Hu8mn7EdzlJJSWYhykL-xXjwprfaOjzTlVhNctT0" />
      </head>
      <body className={inter.className}>
        <div className="bg-gradient-to-br from-[#120826] to-[#1e0e38] min-h-screen bg-fixed">
          {children}
        </div>
      </body>
    </html>
  );
} 