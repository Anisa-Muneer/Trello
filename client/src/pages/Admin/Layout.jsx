import React from 'react'
import { ComplexNavbar } from '../../components/Common/Admin/AdminNav'
import AdminSidebar from '../../components/Common/Admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className=' bg-black shadow-black'>
            <div className='h-screen flex flex-col'>
                <ComplexNavbar />
                <div className='flex flex-grow md:flex-row bg-black h-screen overflow-x-auto'>
                    <div className='hidden md:flex'>
                        <AdminSidebar />
                    </div>
                    <div className='flex-grow '>
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout
