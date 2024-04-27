// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import Header from "@/components/shared/Header";

// const poppins = Poppins({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
//  });

// export const metadata: Metadata = {
//   title: "EventMaster",
//   description: "Eventt Management System",
//   viewport: "width=device-width, initial-scale=1",
//   icons: {
//     icon: "/assests/images/logo.svg",
//   },
// };



// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body className={poppins.variable}>{children}</body>
//       <Header />
//     </html>
//    </ClerkProvider>
//   );
// }
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Event-Master',
  description: 'Event-Master is a platform for event management.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

