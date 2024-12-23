import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div className="flex flex-col w-full h-full">
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/pastes",
      element:
      <div className="flex flex-col w-full h-full">
          <Navbar/>
          <Paste/>
        </div>
    },
    {
      path: "/pastes/:id",
      element:
      <div className="flex flex-col w-full h-full">
          <Navbar/>
          <ViewPaste/>

        </div>
    },
  ]
)

function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
