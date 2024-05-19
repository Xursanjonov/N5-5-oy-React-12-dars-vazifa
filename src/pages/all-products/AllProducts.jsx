import React from 'react'
import useRefAxios from '../../hooks/useRef'
import ProductItem from '../../components/products/ProductItem'

const AllProducts = () => {
    const { data, loading } = useRefAxios('/products')

    return (
        <div className='w-[1519px] px-14 mx-auto py-10 grid grid-cols-4 gap-6 text-white'>
            {
                loading ? <h1 className='text-3xl font-bold'>Loading...</h1> : (
                    data?.map(product => <ProductItem data={product} key={product.id} />)
                )
            }
        </div>
    )
}

export default AllProducts