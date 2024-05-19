import React, { memo } from 'react'
import useRefAxios from '../../hooks/useRef';
import UserItem from '../../components/products/UserItem';
import { nanoid } from 'nanoid';

const Home = () => {
    const { data, loading } = useRefAxios('users')

    return (
        <div className='w-[1519px] px-14 mx-auto pt-10 text-white'>
            <h1 className='text-center text-4xl font-bold mb-5'>Users</h1>
            <div className="w-full px-14 py-3 grid grid-cols-4 gap-6">
                {
                    loading ? <h1 className='text-3xl font-bold'>Loading...</h1> : (data?.map(product => <UserItem data={product} key={nanoid()} />))
                }
            </div>
        </div>
    )
}

export default memo(Home)