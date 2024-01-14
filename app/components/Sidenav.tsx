// Sidenav.tsx
import Link from 'next/link';
import Links from './links';
export default function Sidenav() {
  return (
    <Links />
    // <div className="w-64 p-6 bg-black text-yellow-500">
    //   <div className="block mb-4 text-lg font-bold text-yellow-500 hover:text-white">
    //     <Link href="/">Home</Link>
    //   </div>
    //   <div className="block mb-4 text-lg font-bold text-yellow-500 hover:text-white">
    //     <Link href="/game">Game Mode</Link>
    //   </div>
    //   <div className="block mb-4 text-lg font-bold text-yellow-500 hover:text-white">
    //     <Link href="/scores">Past Scores</Link>
    //   </div>
    // </div>
  );
}