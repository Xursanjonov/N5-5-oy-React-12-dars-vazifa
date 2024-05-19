import React, { Fragment, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import AdminHeader from '../../components/admin-header/AdminHeader'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    const [close, setClose] = useState(false)

    return (
        <Fragment>
            <div className={`flex justify-end ${close ? "" : "w-[1519px] flex items-start"}`}>
                <Sidebar />
                <div className='w-[1215px] flex flex-col'>
                    <AdminHeader setClose={setClose} />
                    <div className="w-[1215px] text-white">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Admin