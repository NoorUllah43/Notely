import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context';
import { HiDotsVertical } from "react-icons/hi";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaHeartCircleMinus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const FavCard = ({ title, description, date, index, id }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigateTo = useNavigate();
    const { bgColor, setAllNotes, allNotes, setFavNotes, favNotes } = useContext(AppContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    // unFavNote note 
    const unFavNote = (id) => {
        const favoriteNotes = favNotes.filter((note, ind) => {
            return note.id !== id;
        })
        localStorage.setItem('favNotes', JSON.stringify(favoriteNotes));

        setFavNotes(favoriteNotes);
        setIsMenuOpen(!isMenuOpen);

    };

    // delete note 
    const deleteNote = (id) => {
        const updatedNotes = allNotes.filter((note, ind) => {
            return note.id !== id;
        })
        localStorage.setItem('notes', JSON.stringify(updatedNotes));

        setAllNotes(updatedNotes);
        setIsMenuOpen(!isMenuOpen);
        unFavNote(id);

    };



    return (
        <div className={`rounded-lg w-80 shadow-md p-6 relative transition-all duration-300 text-white ${bgColor}`}>


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
                            onClick={() => unFavNote(id)}
                            className="block w-full px-4 py-2 text-sm hover:bg-gray-700 transition duration-200 ease-in-out"
                        >
                            <FaHeartCircleMinus className="w-5 h-5 mx-auto" />
                        </button>
                        <button
                            onClick={() => navigateTo(`/editnote/${id}`)}
                            className="block w-full px-4 py-2 text-sm hover:bg-gray-700 transition duration-200 ease-in-out"
                        >
                            <FaEdit className="w-5 h-5 mx-auto" />
                        </button>
                        <button
                            onClick={() => deleteNote(id)}
                            className="block w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition duration-200 ease-in-out"
                        >
                            <FaTrash className="w-5 h-5 mx-auto" />
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
        </div>
    );
}

export default FavCard
