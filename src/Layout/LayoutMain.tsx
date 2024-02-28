// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
export const LayoutMain = () => {
  return (
    <div>
        <Header />
        <div className='main-content'>
            <Outlet />
        </div>
        <Footer />
    </div>   
  )
}
