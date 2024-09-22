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
  if(advertise === 'No search result'){
    return (
      <div className='flex flex-col  mt-10 items-center justify-center mx-auto'>

      <SearchBar/>
      <div className='text-3xl text-center mt-10 font-semibold text-blue-900'>Your search result for <i className='text-blue-600'>"{query}" not found.</i></div>
      </div>
    )
  }
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



    <nav>
  <ul class="inline-flex -space-x-px text-sm my-10">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    </div>
  )
}

export default Search