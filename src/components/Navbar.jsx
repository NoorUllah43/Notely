import React, { useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import ThemeToggle from './ThemeToggle';
import { AppContext } from '../context/context';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { motion } from 'motion/react';


const Navbar = () => {
  const { isDarkMode, menu, setMenu,searchInput, setSearchInput } = useContext(AppContext);

  
  const animate = (delay) => ({
    initial: {opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay, duration: 2 },
    
  });


  return (
    <nav className={`w-full sm:w-[calc(100%-250px)] h-12 flex items-center justify-between sm:px-10 px-5 border-none absolute top-0 right-0 transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-200 text-black'}`}>
      <button onClick={() => setMenu(!menu)} className={`sm:hidden z-20 `} >
        {!menu ? <TiThMenu /> : <RxCross2 />}
      </button>

      <motion.div {...animate(.5)} className={`w-[60%] h-10 flex items-center justify-center rounded-md transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
        <label htmlFor='searchInput' className='w-10 h-full flex items-center justify-center'>
          <IoIosSearch />
        </label>
        <input
          type='search'
          name='searchInput'
          id='searchInput'
          value={searchInput}
          onChange={(e)=> setSearchInput(e.target.value)}
          placeholder='search note'
          className={`h-full w-[calc(100%-45px)] outline-none border-none bg-transparent transition-all duration-300 ${isDarkMode ? 'text-white placeholder-gray-200' : 'text-black placeholder-gray-500'}`}
        />
      </motion.div>

      <motion.div {...animate(.5)} className='flex items-center gap-4'>
        <ThemeToggle />
        <div className='profile'></div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
