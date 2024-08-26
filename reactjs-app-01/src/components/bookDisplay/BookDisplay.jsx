import React from 'react'
import { useContext } from 'react'
import {StoreContext} from '../../contexts/StoreContext.jsx' 
import BookItem from '../bookItem.jsx/BookItem.jsx'
const BookDisplay = ({category}) => {

    const {book_list} = useContext(StoreContext)
  return (
    <div className='flex flex-col justify-center items-center container w-full'>
      <h1 className='text-2xl text-blue-600'>Top selling product right now.</h1>
      <div className='flex justify-center gap-6 pt-6 pb-6 w-5/6 flex-wrap'>
        {book_list.map((item, index)=>{
          console.log(category, item.category)
          if(category ==='all' || category === item.category){
            return <BookItem key={index} item = {item}/>
          }
        })}
      </div>
    </div>
  )
}

export default BookDisplay