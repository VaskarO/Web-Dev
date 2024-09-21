import React, {useState, useEffect} from 'react'
import SearchComponent from '../components/SearchComponent'
import { useParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
const Search = () => {

  const {query} = useParams()
  const [advertise, setAdvertise] = useState([])
  // console.log(id)
  useEffect(()=>{
    fetch(`/api/search?searchQuery=${query}`)
    .then(response => response.json())
    .then(data =>setAdvertise(data.searchList))
    .catch(error=>console.log(error))
  }, [query])
  console.log(advertise)
  return (
    <div className='flex flex-col  mt-10 items-center justify-center mx-auto'>
    <SearchBar/>
    <div className='flex flex-col items-center text-center justify-center mx-auto'>
        <div className='text-3xl text-center mt-10 font-semibold text-blue-900'>Your search result for <i className='text-blue-600'>"{query}"</i></div>
        <div className='flex gap-5 items-center mx-auto justify-around mt-10'>
        {advertise?.map((item, key)=>(
            <SearchComponent key={item._id} item= {item}/>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Search