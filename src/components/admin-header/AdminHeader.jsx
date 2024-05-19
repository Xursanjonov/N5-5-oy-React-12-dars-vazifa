import { IoIosMenu } from "react-icons/io";
import React from 'react'

const AdminHeader = () => {
    return (
        <div className="admin__header w-[1215px] px-9 py-2 flex items-center justify-between shadow-md shadow-gray-400 bg-white">
            <button
            className="p-1 btn-outline border-2 border-gray-400 rounded-md text-black bg-transparent hover:btn-outline hover:text-black">
                <IoIosMenu fontSize={30} />
            </button>
            <div className="px-3 py-1 flex items-center justify-center gap-5 bg-transparent font-semibold text-black">
                <p className="text-lg">John doe</p>
                <figure className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-300">
                    <img className="w-[45px] rounded-full" src="https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.jpg" alt="" />
                </figure>
            </div>
        </div>
    )
}

export default AdminHeader