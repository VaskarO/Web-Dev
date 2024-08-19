import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"

function App() {
  return (
    <>
    <Navbar/>
    <Hero title = "React Dev Community" description = "Find the React job that fits your skills and needs"/>

    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}


export default App
