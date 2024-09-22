import React, {useState, useEffect} from 'react'
import SearchComponent from '../components/SearchComponent'
import { useParams,useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
const Search = () => {

  const {query} = useParams()
  const [searchParams] = useSearchParams()
  const [advertise, setAdvertise] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [totalData, setTotalData] = useState(0)


  const limit = 4
  const pages =Math.ceil(totalData/limit)
  // console.log(id)
  useEffect(()=>{
    fetch(`/api/search?searchQuery=${query}&page=${currentPage}&limit=${limit}`)
    .then(response => response.json())
    .then(data =>(setAdvertise(data.searchList), setTotalData(data.dataCount)))
    .catch(error=>console.log(error))
  }, [query,currentPage])
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

    <Pagination pages={pages} currentPage= {currentPage} handlePageChange= {handlePageChange}/>
    </div>
  )
}

export default Search