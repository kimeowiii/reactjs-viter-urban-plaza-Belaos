import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-blue-800 text-white p-4 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaShoppingBag className="text-2xl" />
              <h1 className="text-xl font-bold">Urban Plaza</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-blue-200 transition">
                Home
              </a>
              <a href="#stores" className="hover:text-blue-200 transition">
                Stores
              </a>
              <a href="#services" className="hover:text-blue-200 transition">
                Services
              </a>
              <a href="#contact" className="hover:text-blue-200 transition">
                Contact
              </a>
            </div>
            <button className="md:hidden text-xl">☰</button>
          </div>
        </nav>
    </>
  )
}

export default Header
