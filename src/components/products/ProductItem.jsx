import React, { Fragment, memo, useState } from 'react'
import axiosUrl from '../../config'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaCartShopping, FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import EditProductModal from '../modals/EditProductModal';

const ProductItem = ({ data, admin, setReload }) => {
    const [editProduct, setEditProduct] = useState(null)

    const handaleUpdateProduct = e => {
        e.preventDefault();
        axiosUrl.put(`/products/${data.id}`, editProduct).then(res => {
            toast.success('OK 200 Product Update'); console.log(res); setReload(p => !p); setEditProduct(null)
        }).catch(er => console.log(er))
    }

    const deleteItem = (id) => {
        if (!confirm(`Id => ${id} Mahsulot o'chirilsinmi ?`)) return null
        axiosUrl.delete(`/products/${id}`).then(res => {
            toast.success(`Id => ${id} Mahsulot o'chirildi...`)
            console.log(res);
            setEditProduct(null)
        }).catch(err => console.log(err))
    }

    return (
        <Fragment>
            <div className='w-[280px] h-[400px] flex flex-col items-center justify-start gap-4 rounded-xl shadow-md bg-white'>
                <Link className='w-[280px] h-[250px]'>
                    <img className='w-[280px] h-[250px] object-cover rounded-t-xl' src={data.img} alt={data.title} />
                </Link>
                <div className="w-full px-2 flex flex-col items-start justify-between">
                    <div className="w-full flex flex-col items-start justify-between">
                        <p className='text-lg font-semibold text-black'>{data.brand}</p>
                        <h3 className='text-md font-medium text-blue-500' title={data.title}>{data.title}</h3>
                        <p className='text-md text-red-500'>Price:  ${data.price}</p>
                    </div>
                    <div className="w-full px-3 mt-2 flex items-center justify-end">
                        {
                            admin ? (
                                <div className='w-full flex items-center justify-end gap-4'>
                                    <button onClick={() => setEditProduct(data)} className='btn-outline p-2 border-2 rounded-md  text-white border-orange-500 bg-orange-500'> <FaPenToSquare /> </button>
                                    <button onClick={() => deleteItem(data.id)} className='btn-outline p-2 border-2 rounded-md  text-white border-red-500 bg-red-500'> <FaTrashCan /> </button>
                                </div>
                            ) : <button className='btn-outline p-2 border-2 rounded-md text-white border-green-500 bg-green-500'> <FaCartShopping /> </button>
                        }
                    </div>
                </div>
            </div>
            {editProduct ? (
                <EditProductModal setEditProduct={setEditProduct}>
                    <form onSubmit={handaleUpdateProduct} className='w-[500px] px-8 border-[1px] mx-auto mt-10 font-semibold grid gap-2 rounded-xl shadow-md bg-white'>
                        <div className="flex items-center justify-between">
                            <h1 className='text-2xl my-2.5 font-bold text-center text-blue-500'>Create New Product</h1>
                            <button onClick={()=> setEditProduct(null)} className='text-2xl font-extrabold text-red-600'>X</button>
                        </div>
                        <input
                            required value={editProduct.title} onChange={e => setEditProduct(prev => ({ ...prev, title: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Title' />
                        <input
                            required value={editProduct.brand} onChange={e => setEditProduct(prev => ({ ...prev, brand: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Brand' />
                        <input
                            required value={editProduct.category} onChange={e => setEditProduct(prev => ({ ...prev, category: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Category' />
                        <input
                            required value={editProduct.price} onChange={e => setEditProduct(prev => ({ ...prev, price: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Price' />
                        <input
                            required value={editProduct.info} onChange={e => setEditProduct(prev => ({ ...prev, info: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Info' />
                        <input
                            required value={editProduct.count} onChange={e => setEditProduct(prev => ({ ...prev, count: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Count' />
                        <input
                            required value={editProduct.img} onChange={e => setEditProduct(prev => ({ ...prev, img: e.target.value }))}
                            className='w-full input input-info px-4 py-2 text-black bg-white'
                            type="text" placeholder='Image' />
                        <button className='w-full mb-4 mt-1.5 btn btn-success' type='submit'>Create</button>
                    </form>
                </EditProductModal>) : <></>}
        </Fragment>
    )
}

export default memo(ProductItem)