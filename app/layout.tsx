import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
 
export const metadata: Metadata = {
  title: 'Unlock Learning',
  description: 'A must-have tool for every student',
}
import Sidenav from './components/Sidenav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-yellow-500">
      <Sidenav />
      <div className="flex-grow bg-yellow-500 p-6">
        {children}
      </div>
    </div>
  );
}