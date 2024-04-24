// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";

import Header from "@/components/shared/Header";
import { ClerkProvider } from "@clerk/nextjs";

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
//   icon: "assests/images/logo.svg",
//   }
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className = "flex h-screen flex-col">
        <Header />
      <main className = "flex-1"> </main>
    </div>
  )
}
