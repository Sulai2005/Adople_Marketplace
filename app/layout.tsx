import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Adople AI Marketplace for software deals and resources",
  generator: "Adople AI",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}
