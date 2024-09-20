import React from 'react'
import SearchComponent from '../components/SearchComponent'

const Search = () => {
  return (
    <div>
        <div className='text-3xl font-semibold text-blue-900'>Your search result for "SearchWord"</div>
        <SearchComponent/>
    </div>
  )
}

export default Search