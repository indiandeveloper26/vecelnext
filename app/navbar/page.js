'use client'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MyApp</div>
      <div className="space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link href="/signup" className="text-gray-700 hover:text-blue-600">Signup</Link>
      </div>
    </nav>
  );
}
