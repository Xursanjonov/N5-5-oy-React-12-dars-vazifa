import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = ({ title, link, setOpen, open }) => {
    return (
        <div className='w-full h-[50px] mt-5 px-9 py-2 flex items-center justify-between'>
            <h2 className='text-3xl font-semibold text-white'>{title}</h2>
            <div className="flex items-center justify-center gap-8">
                <button className='w-[70px] h-[40px] group flex btn-outline items-center justify-center gap-1 border-[1px] rounded-md bg-gray-100'>
                    <p className='w-[8px] h-[8px] border-2 group-hover:bg-white rounded-sm bg-gray-400'></p>
                    <p className='w-[8px] h-[8px] border-2 group-hover:bg-white rounded-sm bg-gray-400'></p>
                    <p className='w-[8px] h-[8px] border-2 group-hover:bg-white rounded-sm bg-gray-400'></p>
                </button>
                <Link to={`${link ? link : '/admin/create'}`} title={'Create new Data'} onClick={() => setOpen(!open)}
                    className='btn-outline px-7 py-2 text-lg font-bold rounded-md text-black bg-green-500'>
                    {open ? 'X' : 'Add'}
                </Link>
            </div>
        </div>
    )
}

export default AdminNavbar