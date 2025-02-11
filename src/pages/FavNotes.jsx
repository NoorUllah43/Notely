import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/context'
import FavNotesCont from '../components/FavNotesCont'


const FavNotes = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-gray-900' : 'bg-slate-200  '}`}>
      <Sidebar />
      <Navbar />
      <div className={`w-full sm:w-[calc(100%-250px)] h-[calc(100%-48px)] ${isDarkMode ? 'bg-gray-500 ' : 'bg-gray-300 '} absolute top-12 right-0 sm:rounded-tl-md overflow-x-hidden overflow-y-auto `}>

        <FavNotesCont />
      </div>
    </div>
  )
}

export default FavNotes;
