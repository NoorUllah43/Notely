import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../context/context';



const CardContainner = () => {

  const { allNotes, setAllNotes, searchInput, setSearchInput } = useContext(AppContext);
  const { isDarkMode } = useContext(AppContext)


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setAllNotes(savedNotes);

  }, [])


  return (
    <div className={`w-full h-full p-5 ${isDarkMode ? 'bg-gray-700 ' : 'bg-gray-300 '} absolute top-0 right-0 sm:rounded-tl-md overflow-x-hidden overflow-y-auto flex items-start justify-center sm:justify-start gap-3 flex-wrap `}>
      {
        allNotes.filter((value, ind) =>
          value.title.includes(searchInput)
        )
          .map((note, index) =>
            <Card
              key={index}
              index={index}
              title={note.title}
              description={note.description}
              date={note.date}
              id={note.id}
            />

          )
      }
      {allNotes.length == 0 && (
        <h1 className='text-xl font-bold font-mono w-full text-center '>No Notes</h1>
      )}
    </div>
  )
}

export default CardContainner
