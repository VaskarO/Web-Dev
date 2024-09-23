import React, {useState, useEffect} from 'react'
import SearchComponent from '../components/SearchComponent'
import { useParams,useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
const Search = () => {

  const {query} = useParams()
  const [advertise, setAdvertise] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState(0)
  const [limit, setLimit] = useState(4)


  const pages =Math.ceil(totalData/limit)
  // console.log(id)
  useEffect(()=>{
    fetch(`/api/search?searchQuery=${query}&page=${currentPage}&limit=${limit}`)
    .then(response => response.json())
    .then(data =>(setAdvertise(data.searchList), setTotalData(data.dataCount)))
    .catch(error=>console.log(error))
  }, [query,currentPage, limit])
  console.log(totalData)
  console.log(currentPage)
  if(advertise === 'No search result'){
    return (
      <div className='flex flex-col  mt-10 items-center justify-center mx-auto'>

      <SearchBar/>
      <div className='text-3xl text-center mt-10 font-semibold text-blue-900'>Your search result for <i className='text-blue-600'>"{query}" not found.</i></div>
      </div>
    )
  }

  const handlePageChange =(e)=>{
     setCurrentPage(e);
  }
  const handleLimit = (e)=>{
    setLimit(e.target.value)
  }

  return (
    <div className='flex flex-col  mt-10 items-center justify-center mx-auto'>
    <SearchBar/>
    <div className='bg-blue-300 px-3 py-2 mt-1'>
      <label htmlFor="items">Advertise per page:</label>
      <select onChange={handleLimit} value={limit} name="" id="">
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
      </select>
    </div>
    {console.log(limit)}
    <div className='flex flex-col items-center text-center justify-center mx-auto'>
        <div className='text-3xl text-center mt-10 font-semibold text-blue-900'>Your search result for <i className='text-blue-600'>"{query}"</i></div>
        <div className='text-xl text-center mt-5 font-semibold text-blue-900'>Matching results: <i className='text-blue-800'>"{totalData}"</i></div>
        <div className='flex flex-wrap gap-5 items-center mx-auto justify-around mt-10'>
        {advertise?.map((item, key)=>(
            <SearchComponent key={item._id} item= {item}/>
          ))}
        </div>
    </div>

    <Pagination pages={pages} currentPage= {currentPage} handlePageChange= {handlePageChange}/>
    </div>
  )
}

export default Search