import React from 'react'
import { useContext } from 'react'
import {StoreContext} from '../../contexts/StoreContext.jsx' 

const BookDisplay = () => {

    const {book_list} = useContext(StoreContext)
  return (
    <div className='flex direction-col justify-center '>
      <h1 className='text-2xl text-blue-600'>Top selling product right now.</h1>
      <div>
        {book_list.map((item, index)=>{
          console.log(item.name)
        })}
      </div>
    </div>
  )
}

export default BookDisplay