import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    let { pathname } = useLocation()
    let isLogin = localStorage.getItem('x-auth-token')

    if (pathname.includes('login') || pathname.includes('admin')) return <></>

    return (
        <header className='w-[1519px] z-50 mx-auto border-b-2 px-14 py-4 flex items-center justify-between shadow-md shadow-gray-500 bg-white'>
            <div className="flex items-center justify-center gap-7">
                <NavLink to={'/'} className='text-3xl font-bold text-black'>Logo</NavLink>
                <NavLink to={'/all-products'} className='ms-5 text-xl font-bold text-blue-500'>Porducts</NavLink>
            </div>
            <Link to={isLogin ? '/admin/create' : '/login'} className='px-4 text-xl py-1 font-semibold shadow-sm shadow-blue-500 rounded-md text-blue-600'>
                {isLogin ? 'Account' : 'Login'}
            </Link>
        </header>
    )
}

export default Navbar