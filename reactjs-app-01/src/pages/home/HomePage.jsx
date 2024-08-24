import React, { useState } from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import ExploreCategory from '../../components/exploreCategory/ExploreCategory'
const HomePage = () => {
  const [category,setCategory] = useState('all')
  return (
    <>
    <Header/>
    <ExploreCategory category = {category} setCategory = {setCategory}/>
    </>
  )
}

export default HomePage