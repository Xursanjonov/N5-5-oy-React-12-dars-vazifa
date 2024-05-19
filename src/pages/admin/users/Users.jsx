import React, { useState } from 'react'
import AdminNavbar from '../admin-navbar/AdminNavbar'
import useRefAxios from '../../../hooks/useRef'
import UserItem from '../../../components/products/UserItem';
import { nanoid } from 'nanoid';
import CreateUser from './CreateUser';

const Users = () => {
    const { data, loading } = useRefAxios('/users');
    const [open, setOpen] = useState(false)

    return (
        <div>
            <AdminNavbar title={'Users'} link={'/admin/users'} setOpen={setOpen} open={open} key={nanoid()} />
            {
                open ? <CreateUser setOpen={setOpen} /> : (
                    <div className="w-full mx-auto mt-5 flex flex-wrap items-center justify-center gap-3">
                        {loading ? <h2 className='text-2xl text-white'>Loading...</h2> : (
                            data?.map(product => <UserItem admin={true} key={product.id} data={product} />)
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default Users