import React, { useContext } from 'react'
import {StoreContext} from '../../contexts/StoreContext'


const CartPage = () => {
  const {cartItem, book_list,setCartItem,  removeFromCart} = useContext(StoreContext)
  let totalPrice = 0;
  const handleRemove = (obj, propKey)=>{
    return delete obj.propKey
  }

  return (
    <>
    {console.log(cartItem)}
      <div className='flex items-center justify-center m-auto my-9 w-2/3'>
        <table className='bg-slate-100 w-full border-b-2'>
          <thead className='py-3 border-b-2 bg-slate-200'>
            <tr className='text-md text-start'>
              <th className='py-3'>Item</th>
              <th>Tite</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
              </tr>
          </thead>
          
            {book_list.map((item,index)=>{
              if(cartItem[item._id]>0){
                totalPrice += (item.price*cartItem[item._id])

                return(
                  <tr key={index} className='border-b-2'>
                  <td className=' text-center p-3 drop-shadow-lg' ><img className='mx-auto w-9 h-9' src={item.img} alt="" /></td>
                  <td className=' text-center p-3'>{item.name}</td>
                  <td className=' text-center p-3'>{item.price}</td>
                  <td className=' text-center p-3'>{cartItem[item._id]}</td>
                  <td className=' text-center p-3'>{item.price * cartItem[item._id] }</td>
                  <td onClick={()=>( setCartItem((prev)=>({...prev, [item._id]:0})))} className=' text-center p-3 text-red-600 cursor-pointer'>Remove</td>
                  </tr>
                )
              }
            })}
           
        </table>
      </div>
      <div className='flex w-2/3 justify-center my-6 mx-auto'>
        <div className='flex flex-col w-1/2  justify-start float-left'>
          <h1 className='text-xl'>Cart total:</h1>
          <table className='bg-slate-100 w-full border-b-2'>
          <thead className='py-3 border-b-2 bg-slate-200'>
            <tr className='text-md text-start'>
              <th className='py-3'>Sub-total</th>
              <th>Delivary charge</th>
              <th>Total</th>
              </tr>
          </thead>
         
            {Object.keys(cartItem).length<1?(
              <tr className='border-b-2'>
              <td className=' text-center p-3' >-</td>
              <td className=' text-center p-3'>-</td>
              <td className=' text-center p-3'>-</td>
              </tr>
            ):(
               <tr className='border-b-2'>
                     <td className=' text-center p-3' >$. {totalPrice==0?"-":totalPrice}</td>
                     <td className=' text-center p-3'>$. {totalPrice>0?"15":"-"}</td>
                     <td className=' text-center p-3'>$.{totalPrice>0?15+totalPrice:"-"}</td>
                     </tr>
            )}
      
       
     
        </table>
        </div>
        <div className='w-1/2 my-6 mx-auto pl-3'>
          <form action="" className='flex pt-1'>
            <input type="text" placeholder='promocode' className='bg-slate-200 px-3'/>
            <button className='bg-blue-800 text-white px-3 py-3 hover:bg-blue-950'>Submit</button>
          </form>
        </div>
      </div>
      <div className='flex float-end mb-6'>
      <button className='bg-green-600 drop-shadow-xl text-xl text-white px-9 py-3 hover:bg-blue-950'>Check-out</button>
      </div>
      <div>
        { 
        // console.log(cartItem)
          // book_list.map((item, index)=>{
          //   if(cartItem[item._id]>0){
          //     return (
          //       <div>
          //         <p>{item.name}</p>
          //         {console.log(item)}
          //       </div>
          //     )
          //   }
          // })
        }
      </div>
    </>
  )
}

export default CartPage