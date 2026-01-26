import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SSA - Social Security Administration',
  description: 'Official Social Security Administration website - Access your benefits, apply for services, and get information about Social Security programs.',
  keywords: 'Social Security, SSA, benefits, retirement, disability, Medicare',
  authors: [{ name: 'SSA' }],
  openGraph: {
    title: 'SSA - Social Security Administration',
    description: 'Official Social Security Administration website',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GovernmentOrganization',
              name: 'Social Security Administration',
              url: 'https://www.ssa.gov',
              description: 'Official Social Security Administration website',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
