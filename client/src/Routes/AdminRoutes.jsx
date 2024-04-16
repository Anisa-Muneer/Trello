import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Boards from '../components/Admin/Boards'
import Layout from '../pages/Admin/Layout'


export default function AdminRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Layout></Layout>} >
                <Route index element={<Boards />} />
            </Route>
        </Routes >
    )
}
