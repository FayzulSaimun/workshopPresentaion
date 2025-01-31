import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Workshop Presentation',
  description: 'Building Energy Management Presentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// filepath: /tailwind.config.ts
