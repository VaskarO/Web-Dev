import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../contexts/StoreContext'

const BookItem = ({item}) => {
    const [itemCount, setItemCount] = useState(0)

    const {cartItem, addToCart, removeFromCart} = useContext(StoreContext)
  return (
    <>
        <div className="flex flex-col items-center min-w-48 shadow-lg min-h-60 w-40">
            <img src={item.img} alt="" className='p-2 shadow-lg' />
            {
                !cartItem[item._id]?<img  className='bg-white w-6 my-3' onClick={()=>addToCart(item._id)} src= {assets.add} />:
                <div className='flex justify-center items-center my-3'>
                    <img src={assets.minus} className='w-6 mx-3' onClick={()=>removeFromCart(item._id)} alt="" />
                    <p>{cartItem[item._id]}</p>
                    <img src={assets.plus} className='w-5 mx-3' onClick={()=>addToCart(item._id)} alt="" />
                </div>
            }
            <h1 className='text-lg text-center'>{item.name}</h1>
            <h2 className='text-sm text-center text-blue-700'>{item.categroy}</h2>
            <p className='text-center text-md'> {item.description}</p>
            <button className='bg-blue-900 mx-3 p-3 mb-6 mt-3 text-white '>View More</button>
        </div>
    </>
  )
}

export default BookItem