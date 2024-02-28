// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
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
