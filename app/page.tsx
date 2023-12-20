

import { Metadata } from 'next';


import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
};


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className=" flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
       Check
      </div>
      
    </main>
  );
}
