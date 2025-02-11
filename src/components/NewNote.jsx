import { useContext, useState } from "react";
import { AppContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";


const NewNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { isDarkMode, allNotes, setAllNotes } = useContext(AppContext);
  const navigateTo = useNavigate();

  const countSpaces = (str) => {
    return (str.match(/ /g) || []).length;
  };
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); // Returns date & time in local format
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      description,
      date: getCurrentDateTime(),
      id: uuidv4()
    };


    const updatedNotes = [newNote, ...allNotes]; // Store updated notes in a variable
    setAllNotes(updatedNotes); // Update state
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Save to localStorage
    toast.success('Note added');
    navigateTo('/')

  };


  return (
    <div
      className={`w-full h-full p-5 absolute top-0 right-0 sm:rounded-tl-md overflow-x-hidden overflow-y-auto flex items-start justify-center sm:justify-start gap-3 flex-wrap ${isDarkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-full h-full p-6 rounded-2xl shadow-lg ${isDarkMode ? "bg-gray-600 text-gray-200" : "bg-gray-100 text-gray-800"
          }`}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="title"
            id="title"
            className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${isDarkMode
              ? "text-gray-200 border-gray-500 focus:border-gray-300"
              : "text-gray-800 border-gray-300 focus:border-gray-700"
              }`}
            placeholder=" "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label
            htmlFor="title"
            className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? "text-gray-400 peer-focus:text-gray-300" : "text-gray-500 peer-focus:text-gray-700"
              }`}
          >
            Title
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="description"
            id="description"
            className={`block py-2.5 px-0 w-full h-80 text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer resize-none ${isDarkMode
              ? "text-gray-200 border-gray-500 focus:border-gray-300"
              : "text-gray-800 border-gray-300 focus:border-gray-700"
              }`}
            placeholder=" "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <label
            htmlFor="description"
            className={`peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? "text-gray-400 peer-focus:text-gray-300" : "text-gray-500 peer-focus:text-gray-700"
              }`}
          >
            Description
          </label>
        </div>


        <div className="flex justify-between items-center mt-4">
          <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {countSpaces(description)} words
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => navigateTo('/')}
              className={`px-4 py-2 rounded-md ${isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Note
            </button>
          </div>
        </div>
      </form>
    </div >
  );
};

export default NewNote;
