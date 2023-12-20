import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Unlock Learning',
  description: 'Doing math to unlock smart p',
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }



export default function RootLayout({ children, }: { children: React.ReactNode
 }) {
  return (
    <div className="flex h-screen bg-yellow-500">
    <div className="w-64 p-6 bg-black text-yellow-300">
      <Link href="/">
        <h3 className="block mb-4">Home</h3>
      </Link>
      <Link href="/game">
        <h3 className="block mb-4">Game Mode</h3>
      </Link>
      <Link href="/scores">
        <h3 className="block mb-4">Past Scores</h3>
      </Link>
    </div>
    <div className="flex-grow bg-yellow-500 p-6">
      {children}
    </div>
  </div>
);
}