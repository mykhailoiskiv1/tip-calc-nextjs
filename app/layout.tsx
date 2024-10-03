import type { Metadata } from 'next';
import './globals.css';
import { TipProvider } from '../app/context/TipContext';

export const metadata: Metadata = {
  title: 'Splitter',
  description: 'Tip splitting application',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/favicon.ico"/>
      </head>
      <body>
        <TipProvider>
          {children}
        </TipProvider>
      </body>
    </html>
  );
}