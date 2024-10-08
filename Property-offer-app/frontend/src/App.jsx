import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Header from './components/Header'
import Advertisements from './pages/Advertisements'
import AdDetail from './pages/AdDetail'
import UserContextProvider from './contexts/UserContextProvider'
import Search from './pages/Search'
import CreateAdvertisement from './pages/CreateAdvertisement'
import AdvertisementsByUser from './pages/AdvertisementsByUser'
import UpdateAdvertisement from './pages/UpdateAdvertisement'
import CreateAppointment from './pages/CreateAppointment'
const App = () => {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route  path='/' element= {<Home/>}/>
        <Route  path='/about' element= {<About/>}/>
        <Route  path='/profile' element= {<Profile/>}/>
        <Route  path='/signup' element= {<Signup/>}/>
        <Route  path='/signin' element= {<Signin/>}/>
        <Route path = '/advertisements' element = {<Advertisements/>}/>
        <Route path = '/adDetails/:id' element = {<AdDetail/>}/>
        <Route path = '/search/:query' element = {<Search/>}/>
        <Route path = '/createAdvertisement' element = {<CreateAdvertisement/>}/>
        <Route path = '/adUpdate/:id' element = {<UpdateAdvertisement/>}/>
        <Route path = '/yourAdvertisements' element = {<AdvertisementsByUser/>}/>
        <Route path='/createAppointment' element = {<CreateAppointment/>}/>
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  )
}

export default App