import React from 'react'

export default function AppHeader() {
  return (
    <header className=" bg-gray-600 text-white py-2">
    <div className=" max-w-7xl mx-auto flex items-center gap-9">
      <p className="text-sm">Invoice Generator</p>
      <ul className="flex text-sm gap-3 items-center">
        <li>Help</li>
        <li>Invoicing Guide</li>
        <li>Sign In</li>
        <li>
          <button className="bg-blue-800 px-3 py-1 rounded-full hover:bg-blue-600 hover:shadow-md">Sign Up</button>
        </li>
      </ul>
    </div>
  </header>
  )
}
