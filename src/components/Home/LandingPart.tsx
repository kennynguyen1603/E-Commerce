import React from 'react'
import "@/styles/LandingPart.css";

export default function LandingPart() {
  return (
    <>
      <div className="lg:h-screen bg-color lg:flex lg:items-center overflow-clip">
        <div className="lg:w-1/2 flex-shrink-0 text-white pt-32 px-10 lg:pl-48 ">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Discover premium, dependable, and budget-friendly Apple products here</h1>
          <p className="font-semibold text-gray-500 text-sm lg:text-lg mb-10 lg:mb-3">Our priority is product excellence, offering a comprehensive range of Apple's lineup, including discontinued items. Don't hesitate, shop now and experience the best of Apple!</p>
          <div className="flex justify-between rounded-2xl py-2 pl-2 lg:pl-5 pr-2 bg-white font-semibold">
            <div className="flex items-center lg:gap-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-2xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

              </svg>
              <input type="text" placeholder="Find the best product" className="text-black outline-none w-full" />
            </div>
            <button className="btn-blue">Search</button>
          </div>
        </div>
        <img src="./src/assets/iphone-fde203ab.png" className="lg:w-[1200px] lg:-ml-32 lg:mt-16" alt="Bg Image" />
      </div>

    </>
  )
}
