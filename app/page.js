// app/page.js

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            MyApp
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
          <button className="md:hidden text-gray-600 focus:outline-none">
            ☰
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          This is a Next.js App
        </h1>
        <p className="text-lg md:text-xl text-center max-w-xl">
          यह एक शानदार responsive Next.js UI है जिसमें Tailwind CSS से styling की गई है।
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Download App
        </button>
      </div>
    </main>
  );
}

