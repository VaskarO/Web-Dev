import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Header from './components/Header'
import Advertisements from './pages/Advertisements'


const App = () => {
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route  path='/' element= {<Home/>}/>
        <Route  path='/about' element= {<About/>}/>
        <Route  path='/profile' element= {<Profile/>}/>
        <Route  path='/signup' element= {<Signup/>}/>
        <Route  path='/signin' element= {<Signin/>}/>
        <Route path = '/advertisements' element = {<Advertisements/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App