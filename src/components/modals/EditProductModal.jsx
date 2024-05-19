import React, { Fragment, memo } from 'react'

const EditProductModal = ({ setEditProduct, children }) => {

    return (
        <Fragment>
            <div onClick={() => setEditProduct(null)} className='fixed z-30 top-0 left-0 w-[100%] h-screen bg-[#0005]'></div>
            <div className='w-[500px] h-[560px] top-[10%] left-[30%] z-50 translate-[-50%, -50%] fixed'> {children} </div>
        </Fragment>
    )
}

export default memo(EditProductModal)