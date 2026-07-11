import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Syed Muhammad Shahid — Software Engineer / AI & ML',
  description:
    'Portfolio of Syed Muhammad Shahid, Software Engineering graduate specializing in AI/ML applications, chatbots, and Flutter development. IBM-certified via the NAVTTC BIITT program.',
  generator: 'v0.app',
  keywords: [
    'Syed Muhammad Shahid',
    'Software Engineer',
    'AI',
    'Machine Learning',
    'Flutter',
    'Portfolio',
    'IBM Certified',
    'NAVTTC',
  ],
  openGraph: {
    title: 'Syed Muhammad Shahid — Software Engineer / AI & ML',
    description:
      'Building intelligent applications — from conversational chatbots to on-device emotion recognition.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#07070c',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
