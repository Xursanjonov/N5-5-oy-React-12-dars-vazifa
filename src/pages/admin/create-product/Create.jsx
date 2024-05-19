import React, { memo, useState } from 'react'
import axiosUrl from '../../../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

let postProduct = {
    title: "",
    brand: "",
    category: "",
    price: '',
    info: "",
    count: '',
    img: "https://i.pinimg.com/736x/3a/8c/95/3a8c957d7a6a6540510c45b99c8ff3d5.jpg",
}

const Create = ({ setOpen }) => {
    const [newProduct, setNewProduct] = useState(postProduct)
    const navigate = useNavigate()

    const handaleSubmit = (e) => {
        e.preventDefault();
        axiosUrl.post(`/products`, newProduct).then(res => {
            console.log(res);
            toast.success('OK 201 Create new Product 🔥')
            setOpen(prev => !prev)
            navigate('/admin/create')
        }).catch(err => console.error(err))
        console.log(newProduct);
    }

    return (
        <div className='h-[520px] mx-auto'>
            <form onSubmit={handaleSubmit} className='w-[500px] px-8 border-[1px] mx-auto mt-10 font-semibold grid gap-2 rounded-xl shadow-md'>
                <h1 className='text-2xl my-2.5 font-bold text-center text-blue-500'>Create New Product</h1>
                <input
                    required value={newProduct.title} onChange={e => setNewProduct(prev => ({ ...prev, title: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Title' />
                <input
                    required value={newProduct.brand} onChange={e => setNewProduct(prev => ({ ...prev, brand: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Brand' />
                <input
                    required value={newProduct.category} onChange={e => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Category' />
                <input
                    required value={newProduct.price} onChange={e => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Price' />
                <input
                    required value={newProduct.info} onChange={e => setNewProduct(prev => ({ ...prev, info: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Info' />
                <input
                    required value={newProduct.count} onChange={e => setNewProduct(prev => ({ ...prev, count: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Count' />
                <input
                    required value={newProduct.img} onChange={e => setNewProduct(prev => ({ ...prev, img: e.target.value }))}
                    className='w-full input input-info px-4 py-2 text-black bg-white'
                    type="text" placeholder='Image' />
                <button className='w-full mb-4 mt-1.5 btn btn-success' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default memo(Create)