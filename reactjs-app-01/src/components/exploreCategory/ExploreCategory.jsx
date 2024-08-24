import React from 'react'
import { category_list } from '../../assets/assets'
import './ExploreCategory.css'
const ExploreCategory = ({category, setCategory}) => {
  return (
    <div className='explore-category' id='explore-category'>
        <h1>Explore category you love.</h1>
        <p className='explore-category-text'>Wide range of genre to explore on offer for you.</p>
        <div className="explore-category-list">
          {category_list.map((item, index)=>{
            return (<div onClick={() => (setCategory(prev=>prev === item.category_name?'all':item.category_name))} key={index} className='explore-category-list-item'> 
            <img className={category===item.category_name?'active':''} src={item.category_image} alt="" />
            <p>{item.category_name}</p>
            </div>)
          })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreCategory