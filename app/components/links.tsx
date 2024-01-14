// Links.tsx
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Links() {
  const pathname = usePathname()

  return (
    <nav className="w-64 p-6 bg-black text-yellow-500">
      <ul>
        <li className={`block mb-4 text-lg font-bold ${pathname === '/' ? 'text-white' : 'text-yellow-500 hover:text-white'}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`block mb-4 text-lg font-bold ${pathname === '/game' ? 'text-white' : 'text-yellow-500 hover:text-white'}`}>
          <Link href="/game">Game Mode</Link>
        </li>
        <li className={`block mb-4 text-lg font-bold ${pathname === '/scores' ? 'text-white' : 'text-yellow-500 hover:text-white'}`}>
          <Link href="/scores">Past Scores</Link>
        </li>
      </ul>
    </nav>
  )
}