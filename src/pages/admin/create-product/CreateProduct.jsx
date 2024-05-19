import React, { memo, useState } from 'react'
import AdminNavbar from '../admin-navbar/AdminNavbar'
import useRefAxios from '../../../hooks/useRef'
import ProductItem from '../../../components/products/ProductItem'
import Create from './Create'
import { nanoid } from 'nanoid'

const CreateProduct = () => {
    const [reload, setReload] = useState(true)
    const { data, loading } = useRefAxios('/products', reload)
    const [open, setOpen] = useState(false)

    return (
        <div className='w-full'>
            <AdminNavbar title={'Overview'} setOpen={setOpen} open={open} key={nanoid()} />
            {
                open ? <Create setOpen={setOpen} /> :
                    <div className="w-[1160px] mx-auto my-10 grid grid-cols-4 items-start justify-center gap-4">
                        {
                            loading ? <h2 className='text-3xl font-medium text-white'>Loading...</h2> : (
                                data?.map(product => <ProductItem admin={true} setReload={setReload} key={product.id} data={product} />)
                            )
                        }
                    </div>
            }
        </div>
    )
}

export default memo(CreateProduct)