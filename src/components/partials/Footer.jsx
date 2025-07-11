import React from 'react'

const Footer = () => {
  return (
    <>
       {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="hover:text-blue-400 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                TikTok
              </a>
            </div>
            <p className="mb-4">© 2023 Urban Plaza. All rights reserved.</p>
            <div className="text-sm text-gray-400">
              <a href="#" className="hover:text-white transition mr-4">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition mr-4">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Accessibility
              </a>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
