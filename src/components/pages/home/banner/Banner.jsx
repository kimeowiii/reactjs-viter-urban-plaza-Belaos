import React from 'react'

const Banner = () => {
  return (
    <>
       {/* Hero Section */}
      <section
                id="home"
                className="relative h-screen flex items-center justify-center bg-gray-900 text-white"
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <img
                  src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Urban Plaza mall interior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="container mx-auto text-center relative z-10 px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-600">
                    Welcome to Urban Plaza
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-black">
                    The ultimate shopping experience in the heart of the city
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                      Explore Stores
                    </button>
                    <button className="bg-transparent hover:bg-white hover:text-blue-800 text-blue-800 border-2 border-blue-800 py-3 px-6 rounded-lg font-medium transition duration-300">
                      View Events
                    </button>
                  </div>
                </div>
              </section>
    </>
  )
}

export default Banner
