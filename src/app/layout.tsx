import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider, ToastProvider } from '@/context';
import {
  Navbar,
  Footer,
  CursorGlow,
  ScrollProgress,
  BackToTop,
} from '@/components';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prajwal-yj-31.github.io/portfolio_v1'),
  title: 'Prajwal Y J | Software Engineer & Full-Stack Developer',
  description: 'Personal portfolio of Prajwal Y J - Software Engineer specializing in modern Full-Stack development, AI systems, cloud microservices, and intuitive web interfaces.',
  keywords: [
    'Prajwal Y J',
    'Software Engineer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'AI Systems',
    'Web Developer Portfolio'
  ],
  authors: [{ name: 'Prajwal Y J', url: 'https://github.com/Prajwal-YJ-31' }],
  creator: 'Prajwal Y J',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/Prajwal-YJ-31/portfolio_v1',
    title: 'Prajwal Y J | Software Engineer & Full-Stack Developer',
    description: 'Explore projects, technical skills, and software engineering experience of Prajwal Y J.',
    siteName: "Prajwal Y J's Portfolio",
    images: [
      {
        url: '/images/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Prajwal Y J',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prajwal Y J | Software Engineer & Full-Stack Developer',
    description: 'Explore projects, technical skills, and software engineering experience of Prajwal Y J.',
    images: ['/images/avatar.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <ToastProvider>
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <main id="main-content">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
