import React, { useContext, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { AppContext } from "../context/context";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";




const Card = ({ title, description, date, index, id }) => {

  const navigateTo = useNavigate();



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { allNotes, setAllNotes, favNotes, setFavNotes, bgColor } = useContext(AppContext)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // delete note 
  const deleteNote = (id) => {
    const updatedNotes = allNotes.filter((note, ind) => {
      return note.id !== id;
    })
    const favNote = favNotes.filter((item, ind) => {
      return item.id === id;
    }
    )
    // delet from favNotes if exist 
    if (favNote.length == 1) {
      const favoriteNotes = favNotes.filter((note, ind) => {
        return note.id !== id;
      })
      localStorage.setItem('favNotes', JSON.stringify(favoriteNotes));

      setFavNotes(favoriteNotes);
    }

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    setAllNotes(updatedNotes);
    setIsMenuOpen(!isMenuOpen);
    toast.success('Note deleted succefully');


  };


  // Add favorite note 
  const addFavNote = (id) => {
    const isAlreadyExist = favNotes.filter((note) => {
      return note.id === id;
    }
    )
    if (isAlreadyExist.length !== 0) {
      return toast.error('note already exist in favorite Notes')
    }
    const [favNote] = allNotes.filter((note, ind) => {
      return note.id === id;
    })

    localStorage.setItem('favNotes', JSON.stringify([favNote, ...favNotes]));

    setFavNotes([favNote, ...favNotes]);
    setIsMenuOpen(!isMenuOpen);
    toast.success('Note added Favorite');

  };

  const animate = (delay) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay, duration: .5 },
  });


  return (
    <motion.div {...animate(.5)} className={`rounded-lg w-80 shadow-md p-6 relative transition-all duration-300 text-white ${bgColor}`}>


      {/* Menu Icon */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-ful text-black bg-opacity-20 hover:bg-opacity-40 focus:outline-none"
        >
          <HiDotsVertical />
        </button>

        {/* Edit, Favorite and Delete Buttons */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-12 bg-gray-800 text-white rounded-md shadow-lg z-10">
            <button
              onClick={() => addFavNote(id)}
              className="block w-full px-4 py-2 text-sm hover:bg-gray-700 transition duration-200 ease-in-out"
            >
              <FaHeartCirclePlus className="w-4 h-4 mx-auto" />
            </button>
            <button
              onClick={() => navigateTo(`/editnote/${id}`)}
              className="block w-full px-4 py-2 text-sm hover:bg-gray-700 transition duration-200 ease-in-out"
            >
              <FaEdit className="w-4 h-4 mx-auto" />
            </button>
            <button
              onClick={() => deleteNote(id)}
              className="block w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition duration-200 ease-in-out"
            >
              <FaTrash className="w-4 h-4 mx-auto" />
            </button>
          </div>
        )}
      </div>

      {/* number box  */}
      <div className="absolute bottom-4 right-4 w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center text-gray-900 ">{index + 1}</div>

      {/* Card Content */}
      <h2 className='text-xl font-bold mb-2 text-gray-900'>{title}</h2>
      <p className="mb-4 text-gray-900 ">{description}</p>
      <p className="text-sm text-gray-900 ">{date}</p>
    </motion.div>
  );
};

export default Card;
