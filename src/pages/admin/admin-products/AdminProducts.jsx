import React from 'react'
import AdminNavbar from '../admin-navbar/AdminNavbar'
import useRefAxios from '../../../hooks/useRef'

const AdminProducts = () => {
    const { data, loading } = useRefAxios('/products')
    console.log(data);

    return (
        <div className='admin__products'>
            <AdminNavbar title={'Overview'} link='/admin/create-product' />
            <div className="w-full">
                {loading ? <h2 className='text-2xl text-white'>Loading...</h2> : (
                    data?.map(product => <ProductItem admin={true} key={product.id} data={product} />)
                )}
            </div>
        </div>
    )
}

export default AdminProducts