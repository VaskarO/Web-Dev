import React from 'react'

const Pagination = ({pages,currentPage, handlePageChange}) => {
    const pageList = []
    for (let i=1; i<=pages;i++){
        pageList.push(i)
    }
  return (
    <nav>
        <ul className="inline-flex -space-x-px text-sm my-10">
        <li>
            <a onClick={()=>handlePageChange(currentPage>1?currentPage-1:1)}  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        {pageList.map((page, index)=>(
            <li  key={index}>
            <a onClick={()=>handlePageChange(page)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 ${page ===currentPage?
            'bg-blue-300':'bg-white'
            } border  border-gray-300 hover:bg-gray-100 hover:text-gray-700`}>{page}</a>
            </li>
        ))}
           

        <li>
            <a onClick={()=>handlePageChange(currentPage< pageList[pageList.length-1]?currentPage+1:pageList[pageList.length-1])} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
        </ul>
    </nav>
  )
}

export default Pagination