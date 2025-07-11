import React from 'react'

const CardService = ({ Icon, title, description }) => {
  return (
    <>
       {/* Service 1 */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <Icon className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">
             {description}
            </p>
        </div>
    </>
  )
}

export default CardService
