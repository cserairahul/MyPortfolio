import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSignSolid } from "react-icons/lia";
import DarkModeToggle from '../darkMode/darkMode';

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <nav className='bg-[#1C352D] dark:bg-gray-900'>
     <div className='h-16 items-center flex justify-between'>
       {/*logo*/}
       <div className='text-3xl text-white dark:text-gray-200 font-bold px-4'>
         <LiaSignSolid />
       </div>

       {/*links*/}
       <div className='hidden sm:block'>
        <a href="#home" className='text-gray-300 dark:text-gray-100 text-lg px-4'>Home</a>
        <a href="#about" className='text-gray-300 dark:text-gray-100 text-lg px-4'>About</a>
        <a href="#projects" className='text-gray-300 dark:text-gray-100 text-lg px-4'>Project</a>
        <a href="#certificates" className='text-gray-300 dark:text-gray-100 text-lg px-4'>Certificate</a>
        <a href="#contact" className='text-gray-300 dark:text-gray-100 text-lg px-4'>Contact</a>
       </div>

       {/*dark mode toggle*/}
       <DarkModeToggle />

       {/*hamburger*/}
       <button 
         onClick={() =>setIsOpen(!isOpen)} 
         className='block sm:hidden px-4 text-3xl text-white dark:text-gray-200'
       >
         <GiHamburgerMenu />
       </button>
     </div>

     {/*mobile menu*/}
     <div className={`${isOpen ? "block":"hidden"} block sm:hidden bg-gray-100 dark:bg-gray-800 space-y-2 pb-3`}>
        <a href="#home" className='text-gray-600 dark:text-gray-100 text-lg px-4 block'>Home</a>
        <a href="#about" className='text-gray-600 dark:text-gray-100 text-lg px-4 block'>About</a>
        <a href="#projects" className='text-gray-600 dark:text-gray-100 text-lg px-4 block'>Project</a>
        <a href="#certificates" className='text-gray-600 dark:text-gray-100 text-lg px-4 block'>Certificate</a>
        <a href="#contact" className='text-gray-600 dark:text-gray-100 text-lg px-4 block'>Contact</a>
     </div>
    </nav>
  )
}

export default Navbar
