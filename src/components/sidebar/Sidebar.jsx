import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaPen } from "react-icons/fa";


const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <div className={`sidebar w-[300px] h-screen sticky top-0 left-0 overflow-hidden bg-gray-700 text-white`}>
            <div className="w-full h-screen flex flex-col items-center justify-between">
                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <h2 className='w-[100%] h-[74px] mx-auto flex items-center justify-center gap-4 shadow-sm shadow-gray-100'>
                        <span className='text-2xl'>Dashboard</span>
                    </h2>
                    <div className="w-full flex flex-col gap-1">
                        <NavLink to={"create"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><FaPen /></span>
                            <span>Create and Products</span>
                        </NavLink>
                        <NavLink to={"users"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><FaPen /></span>
                            <span>Create and Users</span>
                        </NavLink>
                        <NavLink to={"posts"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><FaPen /></span>
                            <span>Create and Posts</span>
                        </NavLink>
                        <NavLink to={"contacts"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><FaPen /></span>
                            <span>Create and Contacts</span>
                        </NavLink>
                        <NavLink to={"agents"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><FaPen /></span>
                            <span>Create and Agents</span>
                        </NavLink>
                        <NavLink to={"articles"} className={"w-full h-[60px] ps-8 text-lg flex items-center justify-start gap-5 font-semibold"}>
                            <span className='w-[20px]'><FaPen /></span>
                            <span>Create and Articles</span>
                        </NavLink>
                    </div>
                </div>
                <div className="w-full px-4 mb-4 flex items-center font-bold justify-between">
                    <button onClick={() => navigate("/")} className='btn-outline w-[120px] py-1 bg-white text-black rounded-md text-md'>
                        Go Home
                    </button>
                    <button onClick={handleLogOut} className='btn-outline w-[120px] py-1 bg-white text-black rounded-md text-md'>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(Sidebar)