import { createContext, useState } from "react";


export const AppContext = createContext();


const colors = [
    "bg-red-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-yellow-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-teal-300",
    "bg-cyan-300",
    "bg-lime-300",
];


const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;
const bgColor = colors[getRandomNumber()];

export const AppContextProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [menu, setMenu] = useState(false);
    const [allNotes, setAllNotes] = useState([]);
    const [favNotes, setFavNotes] = useState([]);
    const [searchInput, setSearchInput] = useState('');



    const value = {
        isDarkMode, setIsDarkMode, menu, setMenu, allNotes, setAllNotes, favNotes, setFavNotes, bgColor, searchInput, setSearchInput
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
