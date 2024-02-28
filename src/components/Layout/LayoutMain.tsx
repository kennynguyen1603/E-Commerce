// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
