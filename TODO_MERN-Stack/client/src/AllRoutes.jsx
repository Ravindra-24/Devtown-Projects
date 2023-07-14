import React from 'react'
import {Routes, Route, Router} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './components/NotFound'

const AllRoutes = () => {
   return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<NotFound/>}/>
    </Routes>
   )
}

export default AllRoutes
