'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function page({ params }) {
  const otherUser = params.username
  const myUsername = 'JohnDoe' // TODO: session से लो

  const [messages, setMessages] = useState([
    { id: 1, from: otherUser, message: 'Hi there!' },
    { id: 2, from: myUsername, message: 'Hello 👋' },
  ])
  const [input, setInput] = useState('')
  const [typingUser, setTypingUser] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const flatRef = useRef(null)

  useEffect(() => {
    flatRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), from: myUsername, message: input }])
    setInput('')
    setShowEmoji(false)
  }

  return (
    <main className="flex flex-col min-h-screen bg-black text-white p-4">
      {/* Chat bubbles */}
      <div className="flex flex-col flex-1 overflow-y-auto mb-28">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`my-1 max-w-[70%] px-4 py-2 rounded-2xl ${
              msg.from === myUsername
                ? 'bg-green-600 self-end rounded-br-none'
                : 'bg-gray-700 self-start rounded-bl-none'
            }`}
          >
            {msg.message}
          </div>
        ))}

        {typingUser === otherUser && (
          <div className="bg-gray-700 self-start px-4 py-2 rounded-2xl rounded-bl-none">
            <TypingDots />
          </div>
        )}

        <div ref={flatRef}></div>
      </div>

      {/* Emoji Picker */}
      {showEmoji && (
        <div className="absolute bottom-20 left-4 right-4 bg-gray-800 p-4 rounded-lg grid grid-cols-8 gap-2 overflow-y-auto max-h-60">
          {['😀','😁','😂','🤣','😍','😎','😭','😡','👍','🙏','🔥','💯'].map(e => (
            <button
              key={e}
              onClick={() => setInput(prev => prev + e)}
              className="text-2xl"
            >
              {e}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="fixed bottom-4 left-4 right-4 bg-gray-900 flex items-center rounded-full px-4 py-2">
        <button onClick={() => setShowEmoji(!showEmoji)} className="mr-2 text-2xl">😊</button>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type something..."
          className="flex-1 bg-transparent outline-none px-2"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 px-4 py-2 rounded-full ml-2"
        >
          Send
        </button>
      </div>

      {/* Premium Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-80 text-center">
            <h2 className="font-bold mb-2">🚫 Partner Not Premium</h2>
            <p className="mb-4">This partner does not have premium. Pay to unblock chat or continue with ads.</p>
            <Link href={`/partner/${otherUser}`} className="block bg-pink-600 text-white py-2 rounded-full mb-2">
              Pay Now Only 9
            </Link>
            <button onClick={() => setShowModal(false)} className="block bg-gray-300 py-2 rounded-full w-full">Close</button>
          </div>
        </div>
      )}
    </main>
  )
}

function TypingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></span>
      ))}
    </div>
  )
}
