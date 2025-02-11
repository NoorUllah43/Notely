import React, { useContext } from 'react';
import logo2 from '../assets/logo.svg';
import { IoIosStarOutline } from 'react-icons/io';
import { AppContext } from '../context/context';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

const Sidebar = () => {
  const { isDarkMode, menu } = useContext(AppContext);
  const animate = (delay) => ({
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay, duration: 1 },
  });

  return (
    <aside className={`w-[250px] min-h-screen relative z-10 top-0 ${menu ? 'left-0' : 'left-[-100%] '} sm:left-0 pt-10 flex flex-col items-center transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-200 text-black'}`}>

      <motion.div {...animate(.5)} className='w-[80%] h-16 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={logo2} alt='Notely' className='w-10 h-10' />
          <h1 className='text-2xl font-extrabold font-mono'>Notely</h1>
        </div>
      </motion.div>

      <motion.div {...animate(.8)} className='w-[80%] h-12 flex items-center justify-center mt-4'>
        <NavLink to={'/addnewitem'} className={`w-full `}>
          <button className={`h-10 w-full rounded-md ${isDarkMode ? 'bg-blue-400 text-white' : 'bg-blue-500 text-white'}`}>+ New Note</button>
        </NavLink>
      </motion.div>

      <ul className='w-[80%] gap-1 mt-10 flex flex-col'>
        <NavLink to={'/'}>
          <motion.li {...animate(1)} className={`w-full h-8 ps-3 flex items-center justify-start hover:text-blue-500 duration-100 rounded-lg gap-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-[rgba(20,35,246,0.1)]'}`}>
            <span><img src={logo2} alt='Notely' className='w-5 h-5' /></span>
            All Notes
          </motion.li>
        </NavLink>

        <NavLink to={'/favorites'}>
          <motion.li {...animate(1.3)} className={`w-full h-8 ps-3 flex items-center justify-start hover:text-blue-500 duration-100 rounded-lg gap-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-[rgba(20,35,246,0.1)]'}`}>
            <span className='w-5 h-5 text-blue-500'><IoIosStarOutline /></span>
            Favorites
          </motion.li>
        </NavLink>

      </ul>
    </aside>
  );
};

export default Sidebar;