import React, { useState } from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import ExploreCategory from '../../components/exploreCategory/ExploreCategory'
import BookDisplay from '../../components/bookDisplay/BookDisplay'
const HomePage = () => {
  const [category,setCategory] = useState('all')
  return (
    <>
    <Header/>
    <ExploreCategory category = {category} setCategory = {setCategory}/>
    <BookDisplay category = {category}/>
    </>
  )
}

export default HomePage