import React from 'react'

const Maintainuser = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
     
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">name</h2> 
        <div className="flex mb-4">
          <span className="text-gray-600">Location:</span>
          <span className="ml-2">vendorlocation</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Update
        </button>
      </div>
    </div>
  )
}

export default Maintainuser