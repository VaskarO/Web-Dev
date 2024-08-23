import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import JobPage  from "./pages/JobPage"
import { jobLoader } from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import NotFoundPage from "./pages/NotFoundPage"
import EditJobPage from "./pages/EditJobPage"

function App() {
  const addJob = async (newJob)=>{
    const res = await fetch('http://localhost:8000/jobs', {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newJob)
    });
    return;
  }

  const updateJob = async (job)=>{
    const res = await fetch(`http://localhost:8000/jobs/${job.id}`, {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job)
    })
  }
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element= {<HomePage/>}/>
        <Route path= "jobs" element= {<JobsPage/>}/>
        <Route path = "/jobs/:id" element ={<JobPage/>} loader= {jobLoader} />
        <Route path = "/edit-job/:id" element ={<EditJobPage updateJob= {updateJob}/>} loader= {jobLoader} />
        <Route path = "/add-job" element = {<AddJobPage addJobSubmit = {addJob}/>} />
        <Route path = "*" element= {<NotFoundPage/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router = {router}/>
  </>
  )
}


export default App
