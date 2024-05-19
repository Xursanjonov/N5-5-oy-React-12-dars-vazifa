import React, { memo, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axiosUrl from '../../../config'

let postUser = {
    fullName: "",
    username: "",
    email: "",
    age: '',
    phoneNumber: "",
    img: "https://img.freepik.com/premium-photo/smiling-little-student-boy-blue-polo-t-shirt-with-books-bag_38045-939.jpg",
}

const CreateUsers = ({ setOpen }) => {
    const [newUser, setNewUser] = useState(postUser)
    const navigate = useNavigate()

    const handaleSubmit = (e) => {
        e.preventDefault();
        axiosUrl.post(`/fsfj/users`, newUser).then(res => {
            toast.success('OK 201 Create new User 🔥')
            setOpen(prev => !prev)
            navigate('/admin/users')
        }).catch(err => {
            toast(err)
            console.error(err);
        })
        console.log(newUser);
    }

    return (
        <div className='h-[520px] mx-auto'>
            <form onSubmit={handaleSubmit} className='w-[500px] px-8 border-[1px] mx-auto mt-10 font-semibold grid gap-2 rounded-xl shadow-md'>
                <h1 className='text-2xl my-2.5 font-bold text-center text-blue-500'>Create New Product</h1>
                <input
                    required value={newUser.fullName} onChange={e => setNewUser(prev => ({ ...prev, fullName: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Full Name' />
                <input
                    required value={newUser.username} onChange={e => setNewUser(prev => ({ ...prev, username: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='username' />
                <input
                    required value={newUser.email} onChange={e => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='email' />
                <input
                    required value={newUser.age} onChange={e => setNewUser(prev => ({ ...prev, age: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Age' />
                <input
                    required value={newUser.phoneNumber} onChange={e => setNewUser(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Phone Number' />
                <input
                    required value={newUser.img} onChange={e => setNewUser(prev => ({ ...prev, img: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Image' />
                <button className='w-full mb-4 mt-1.5 btn btn-success' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default memo(CreateUsers)