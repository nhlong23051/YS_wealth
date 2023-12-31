import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

export default function index() {
    return (
        <div className='h-[4000px] w-full'>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
