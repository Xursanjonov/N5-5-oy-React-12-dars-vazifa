import React from 'react'
import notImg from '../../assets/images/404.jpg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navigate = useNavigate();

    return (
        <div className='w-[1519px] h-screen flex items-center justify-center gap-[10rem] text-black bg-white'>
            <div className="flex flex-col gap-5">
                <h1 className='text-3xl'>Page Not Found</h1>
                <div className="flex items-center justify-center gap-5">
                    <button onClick={() => navigate('/')} className='px-5 btn text-[1.1rem] text-white btn-success font-bold'>Go Home</button>
                    <button onClick={() => navigate(-1)} className='px-5 btn text-[1.1rem] text-black btn-info font-bold'>Go Back</button>
                </div>
            </div>
            <figure className='w-[50%] flex items-center justify-center'> <img className='w-[755px] h-[700px] object-contain' src={notImg} alt="" /> </figure>
        </div>
    )
}

export default NotFound