// import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

const JobPage = () => {
    // const [job, setJob] = useState({})
    const {id} = useParams()
    const job = useLoaderData();
//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const res = await fetch(`http://localhost:8000/jobs/${id}`)
//             const data = await res.json()
//             setJob(data)
//             console.log(job)
//             }catch(error){
//                 console.log(error.message)
//             }
//         }
//         fetchData()
//     },
// [])

  return (
    <div>{job.title}</div>
  )
}

const jobLoader = async ({params})=>{
    const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader};