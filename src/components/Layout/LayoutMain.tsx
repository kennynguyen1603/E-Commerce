// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

export const LayoutMain = () => {
  return (
    <div>
        <div className='main-content'>
            <Outlet />
        </div>
        <Footer />
    </div>   
  )
}
