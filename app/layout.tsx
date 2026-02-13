import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Ege Ünlü - Frontend Developer at FuEnergy',
  description: 'Senior Computer Engineering student at İzmir Institute of Technology. I specialize in UI/UX Design and build scalable websites, dashboards, and mobile apps using React, Next.js, and TypeScript.',
  keywords: [
    'Ege Ünlü',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'UI/UX Designer',
    'Computer Engineering',
    'IYTE',
    'İzmir Institute of Technology',
    'FuEnergy',
    'React Native',
    'Tailwind CSS',
    'JavaScript',
    'Portfolio'
  ],
  authors: [{ name: 'Ege Ünlü', url: 'https://github.com/EgeUnlu35' }],
  creator: 'Ege Ünlü',
  publisher: 'Ege Ünlü',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://egeunlu.dev'), // Update this with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://egeunlu.dev', // Update this with your actual domain
    siteName: 'Ege Ünlü Portfolio',
    title: 'Ege Ünlü - Frontend Developer at FuEnergy',
    description: 'Senior Computer Engineering student specializing in UI/UX Design. Building scalable web applications with React, Next.js, and TypeScript.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/123566485?v=4',
        width: 460,
        height: 460,
        alt: 'Ege Ünlü - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@egeunluu',
    creator: '@egeunluu',
    title: 'Ege Ünlü - Frontend Developer at FuEnergy',
    description: 'Senior Computer Engineering student specializing in UI/UX Design. Building scalable web applications with React, Next.js, and TypeScript.',
    images: ['https://avatars.githubusercontent.com/u/123566485?v=4'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
