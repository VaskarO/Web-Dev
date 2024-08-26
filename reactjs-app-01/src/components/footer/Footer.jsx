import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between p-9 text-white flex-wrap w-full min-h-80 bg-blue-400'>
        <div className='flex flex-col sm:w-1/3 justify-end'>
            <h1 className='text-3xl mb-9'>BOOK STORE</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis repellendus tempora fugiat aperiam ipsum enim adipisci asperiores magni iusto sit ullam voluptate, autem sint, cum, cupiditate fugit provident neque. Consequatur?</p>
        </div>
        <div className='sm:w-1/3 flex flex-col justify-end items-center'>
            <h1 className='text-2xl mb-9'>Find us on:</h1>
            <h2 className='text-xl'>Facebook</h2>
            <h2 className='text-xl'>Twitter</h2>
            <h2 className='text-xl'>Linkedin</h2>
        </div>
        <div className='sm:w-1/3 flex flex-col justify-end items-end'>
            <h1 className='text-2xl mb-9'>Links:</h1>
            <h2 className='text-xl'>Home</h2>
            <h2 className='text-xl'>Store</h2>
            <h2 className='text-xl'>App</h2>
        </div>
        
    </div>
  )
}

export default Footer