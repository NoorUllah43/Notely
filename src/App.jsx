import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { AppContext } from './context/context'
import CardContainner from './components/CardContainner'
import NewNote from './components/NewNote'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllNotes from './pages/AllNotes'
import Newitem from './pages/NewItem'
import FavNotes from './pages/FavNotes'
import EditNotePage from './pages/EditNotePage'

const App = () => {

  const { isDarkMode } = useContext(AppContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AllNotes />
    },
    {
      path: '/addnewitem',
      element: <Newitem />
    },
    {
      path: '/favorites',
      element: <FavNotes/>
    },
    {
      path: '/editnote/:id',
      element: <EditNotePage/>
    },

  ]);


  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App


