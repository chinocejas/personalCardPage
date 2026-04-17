import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "nico.cejas",
  description: "Personal presentation card and portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_TRACKING_KEY && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_KEY} />
        )}
      </body>
    </html>
  )
}
