import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/context'
import FavCard from './FavCard'
import { motion } from 'motion/react'

const FavNotesCont = () => {

    const { favNotes, setFavNotes, isDarkMode } = useContext(AppContext)

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('favNotes')) || [];
        setFavNotes(savedNotes);
    }, [])

    const animate = (delay) => ({
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { delay, duration: .5 },
    });

    return (
        <motion.div {...animate(.5)} className={`w-full h-full p-5 ${isDarkMode ? 'bg-gray-700 ' : 'bg-gray-300 '} absolute top-0 right-0 sm:rounded-tl-md overflow-x-hidden overflow-y-auto flex items-start justify-center sm:justify-start gap-3 flex-wrap `}>
            {favNotes.map((note, index) =>
                <FavCard
                    key={index}
                    index={index}
                    title={note.title}
                    description={note.description}
                    date={note.date}
                    id={note.id}
                />

            )}
            {favNotes.length == 0 && (
                <h1 className='text-xl font-bold font-mono w-full text-center '>No Favorite Notes</h1>
            )}
        </motion.div>
    )
}

export default FavNotesCont;
