import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Bca from './components/Pages//BCA/Bca.jsx'
import PL from './components/Pages//Programming Language/PL.jsx'
import Btech from './components/Pages/BTech/Btech.jsx'
import CardsSection from './components/Pages/Courses/Card.jsx'
import Mca from './components/Pages/MCA/Mca.jsx'
import RoadMap from './components/RoadMap/RoadMap.jsx'
import './index.css'
import Layout from './Layout.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='roadMap' element={<RoadMap />} />
      <Route path="/" element={<CardsSection/>} />
      <Route path="/btech" element={<Btech />} />
      <Route path="/mca" element={<Mca />} />
      <Route path="/bca" element={<Bca />} />
      <Route path="/Programming-Language" element={<PL />} />
     
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
