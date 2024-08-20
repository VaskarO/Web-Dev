import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const JobPage = () => {
    const [job, setJob] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await fetch(`http://localhost:8000/jobs/${id}`)
            const data = await res.json()
            setJob(data)
            console.log(job)
            }catch(error){
                console.log(error.message)
            }
        }
        fetchData()
    },
[])
  return (
    <div>{job.title}</div>
  )
}

export default JobPage