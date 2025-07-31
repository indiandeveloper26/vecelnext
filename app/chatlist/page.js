'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const dummyChats = [
  {
    adduser: 'Alice',
    lastMessage: 'Hey, how are you?',
    unreadCount: 2,
    isOnline: true,
  },
  {
    adduser: 'Bob',
    lastMessage: 'Let\'s meet tomorrow.',
    unreadCount: 0,
    isOnline: false,
  },
  {
    adduser: 'Charlie',
    lastMessage: 'I sent the files.',
    unreadCount: 1,
    isOnline: true,
  },
]

export default function page() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername('JohnDoe') // TODO: Replace with session/user context
  }, [])

  const handleLogout = () => {
    alert('Logged out!')
    // TODO: clear cookie/session & redirect
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-black to-gray-900 shadow">
        <button
          onClick={handleLogout}
          className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
        >
          🔒 Logout
        </button>
        <h1 className="text-lg font-bold">Hi 👋 {username}</h1>
        <Link href="/search" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
          🔍
        </Link>
      </header>

      {/* Chat List */}
      <div className="px-4 py-6 space-y-4 max-w-xl mx-auto">
        {dummyChats.length === 0 ? (
          <p className="text-center text-gray-400">No chats yet. Search and start!</p>
        ) : (
          dummyChats.map((chat, idx) => (
            <Link
              key={idx}
              href={`/chat/${chat.adduser}`}
              className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-800 to-black hover:bg-gray-700 transition"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold">
                  {chat.adduser[0]}
                  <span
                    className={`absolute bottom-0 right-0 block w-3 h-3 rounded-full border-2 border-black ${
                      chat.isOnline ? 'bg-green-500' : 'bg-gray-500'
                    }`}
                  ></span>
                </div>
                <div>
                  <p className="font-semibold">{chat.adduser}</p>
                  <p className="text-gray-400 text-sm">{chat.lastMessage}</p>
                </div>
              </div>
              {chat.unreadCount > 0 && (
                <span className="bg-green-500 text-xs text-white font-bold px-2 py-1 rounded-full">
                  {chat.unreadCount}
                </span>
              )}
            </Link>
          ))
        )}
      </div>

      {/* Go Premium Floating Button */}
      <Link
        href="/premium"
        className="fixed bottom-8 right-8 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-full shadow-lg"
      >
        Go Premium
      </Link>
    </main>
  )
}
