import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import JobPage  from "./pages/JobPage"
import { jobLoader } from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import NotFoundPage from "./pages/NotFoundPage"


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element= {<HomePage/>}/>
      <Route path= "jobs" element= {<JobsPage/>}/>
      <Route path = "/jobs/:id" element ={<JobPage/>} loader= {jobLoader} />
      <Route path = "/add-job" element = {<AddJobPage/>} />
      <Route path = "*" element= {<NotFoundPage/>}/>
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router = {router}/>

  </>
  )
}


export default App
