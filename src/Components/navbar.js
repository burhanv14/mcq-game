import React from 'react'
import signbur from './signbur.png'

export const Navbar = () => {
  return (
    <nav class=" bg-gray-800 w-full lg:max-h-28 lg:h-28 md:h-auto sm:h-auto  lg:flex sm:flex md:flex md:justify-between lg:justify-between">
        <h1 class="lg:text-5xl md:text-4xl sm:text-4xl lg:p-7 text-center text-white font-serif sm:flex-col md:flex-col lg :flex-row">M.C.Q. Game</h1>
        <img class="m-5 max-h-16 w-auto" src={signbur} alt="signature"/>
    </nav>   
  )
}
