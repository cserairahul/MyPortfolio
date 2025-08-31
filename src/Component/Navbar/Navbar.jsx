import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSignSolid } from "react-icons/lia";


const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <nav className='bg-[#1C352D]'>
     <div className='h-16 items-center flex justify-between'>
     { /*logo*/}
       <div className='text-3xl text-white font-bold px-4'><LiaSignSolid /></div>
    {/*button*/}
      <div className='hidden sm:block'>
        <a href="#home" className='text-gray-300 text-lg px-4'>Home</a>
        <a href="#about"className='text-gray-300 text-lg px-4'>About</a>
        <a href="#projects"className='text-gray-300 text-lg px-4'>Project</a>
        <a href="#certificates"className='text-gray-300 text-lg px-4'>Certificate</a>
        <a href="#contact"className='text-gray-300 text-lg px-4'>Contact</a>
      </div>
      <button onClick={() =>setIsOpen(!isOpen)} className='block sm:hidden px-4 text-3xl text-white'><GiHamburgerMenu /></button>
     </div>
      {/*mobile button*/}
      <div className={`${isOpen ? "block":"hidden"} block sm:hidden bg-gray-100 space-y-2 pb-3`}>
        <a href="#home" className='text-gray-600 text-lg px-4 block'>Home</a>
        <a href="#about"className='text-gray-600 text-lg px-4 block'>About</a>
        <a href="#projects"className='text-gray-600 text-lg px-4 block'>Project</a>
        <a href="#certificates"className='text-gray-600 text-lg px-4 block'>Certificate</a>
        <a href="#contact"className='text-gray-600 text-lg px-4 block'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar