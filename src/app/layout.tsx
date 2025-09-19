import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import './globals.css'
import { WalletProvider } from '@/context/walletContext'


export const metadata: Metadata = {
  title: 'ZamaDex',
  description: 'Seamless crypto trading on ZamaDex.',
  keywords: ['swap', 'liquidity', 'porfolio', 'lauchpad'],
  authors: [{ name: 'Sypher3Labs Inc' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        <WalletProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  )
}