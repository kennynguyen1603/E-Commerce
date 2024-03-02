// import React from 'react'
// import { Outlet } from 'react-router-dom'
export const LayoutMain = () => {
  return (
    <div>
        <LayoutHeader />
        <div className='main-content'>
            <Outlet />
        </div>
        <LayoutFooter />
    </div>   
  )
}

export default LayoutMain