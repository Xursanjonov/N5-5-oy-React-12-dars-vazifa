import React, { Fragment, memo, useState } from 'react'
import { toast } from 'react-toastify'
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import axiosUrl from '../../config';
import EditProductModal from '../modals/EditProductModal';
import { Link } from 'react-router-dom';

const UserItem = ({ data, admin }) => {
    const [editUser, setEditUser] = useState(null)

    const handaleUpdateUser = e => {
        e.preventDefault();
        axiosUrl.put(`/users/${data.id}`, editUser).then(res => { toast.success('OK 200 User Update'); console.log(res); setEditUser(null) }).catch(er => console.log(er));
    }
    const deleteItem = (id) => {
        if (!confirm(`${id} User o'chirilsinmi ?`)) return null
        axiosUrl.delete(`/users/${id}`).then(res => {
            toast.success(`Id: ${id} User o'chirildi...`)
            console.log(res);
            setEditUser(null)
        }).catch(err => console.log(err))
    }

    return (
        <Fragment>
            <div
                className={`w-[270px] ${admin ? 'h-[430px]' : 'h-[400px]'} flex flex-col items-center justify-start gap-4 rounded-xl shadow-md text-black bg-white`}>
                <Link className='w-[270px] h-[250px]'>
                    <img className='w-[270px] h-[250px] object-cover rounded-t-xl' src={data.img} alt={data.title} />
                </Link>
                <div className="w-full px-2 flex flex-col items-start justify-between">
                    <div className="w-full flex flex-col items-center  justify-between gap-1">
                        <p className='text-lg font-semibold'>{data.fullName}</p>
                        <h3 className='text-md font-medium text-blue-500'>{data.email}</h3>
                        <h3 className='text-md font-medium text-blue-500'>{data.username}</h3>
                        <h3 className='text-md font-medium text-blue-500'>{data.phoneNumber}</h3>
                    </div>
                    <div className="w-full px-3 mt-2 flex items-center justify-end">
                        {
                            admin ? (
                                <div className='w-full flex items-center justify-end gap-4'>
                                    <button onClick={() => setEditUser(data)}
                                        className='btn-outline p-2 border-2 rounded-md  text-white border-orange-500 bg-orange-500'>
                                        <FaPenToSquare />
                                    </button>
                                    <button onClick={() => deleteItem(data.id)}
                                        className='btn-outline p-2 border-2 rounded-md  text-white border-red-500 bg-red-500'>
                                        <FaTrashCan />
                                    </button>
                                </div>
                            ) : <></>
                        }
                    </div>
                </div>
            </div>
            {editUser ? (
                <EditProductModal setEditUser={setEditUser}>
                    <form onSubmit={handaleUpdateUser} className='w-[500px] px-8 border-[1px] mx-auto mt-10 font-semibold grid gap-2 rounded-xl bg-white'>
                        <h1 className='text-2xl my-2.5 font-bold text-center text-blue-500'>Create New User</h1>
                        <input
                            required value={editUser.fullName} onChange={e => setEditUser(prev => ({ ...prev, fullName: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Full Name' />
                        <input
                            required value={editUser.username} onChange={e => setEditUser(prev => ({ ...prev, username: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='username' />
                        <input
                            required value={editUser.email} onChange={e => setEditUser(prev => ({ ...prev, email: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='email' />
                        <input
                            required value={editUser.age} onChange={e => setEditUser(prev => ({ ...prev, age: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Age' />
                        <input
                            required value={editUser.phoneNumber} onChange={e => setEditUser(prev => ({ ...prev, phoneNumber: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Phone Number' />
                        <input
                            required value={editUser.img} onChange={e => setEditUser(prev => ({ ...prev, img: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Image' />
                        <button className='w-full mb-4 mt-1.5 btn text-lg btn-success' type='submit'>Update New User</button>
                    </form>
                </EditProductModal>) : <></>}
        </Fragment>
    )
}

export default memo(UserItem)