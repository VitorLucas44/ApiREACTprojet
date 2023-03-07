import React from 'react'
import { Routes, Route } from "react-router-dom";

import DetailHome from './components/pages/DetailHome'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

const MyRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<DetailHome />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default MyRoutes
