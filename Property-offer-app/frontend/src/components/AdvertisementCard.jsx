import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import thumbnail from '../assets/images/300x200.png'
import { FaMapMarkerAlt  } from 'react-icons/fa'
import UserContext from '../contexts/UserContext'
const AdvertisementCard = ({item}) => {
  const {loggedIn} = useContext(UserContext)
  const {setLoggedIn} = useContext(UserContext)
  const {setUserInfo} = useContext(UserContext)
  const [userId, setUserId] = useState(null)
  const [adId, setAdId] = useState('')
  useEffect(()=>{
    fetch(`/api/auth/getUser`)
    .then(response => response.json())
    .then(data =>{data._id?(setUserInfo(data),setAdId(data._id), setLoggedIn(true)):"", setUserId(data._id)} )
    .catch(error=>console.log(error.message))
  }, [loggedIn])

  const handleRemove = async ()=>{
    try{
    const res = await fetch(`/api/advertiseList/delete/${adId}`, {
      method:'GET'},).then(data=>data.json())

    if(res.success ===false){
      alert('Error on deleting advertisement'. res.message)
    }      
    if(res.success === true){
      navigate(`/advertisements}`)
      alert('Advertisement deleted successfully.')
    }
  }catch(err){
    console.log(err)
  }
}

  return (
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 bg-slate-200 p-4 shadow-md rounded-lg">
  <img className="rounded-lg shadow-sm w-full h-40 object-cover" src={thumbnail} alt="" />
  
  <h2 className="text-lg font-semibold pt-3">{item.title}</h2>
  <p className="text-sm text-gray-600">{item.description}</p>

  <div className="flex justify-center gap-2 items-center pt-2 text-sm font-semibold text-gray-800">
    <FaMapMarkerAlt className="text-red-500" />
    <p>Street, City, ST</p>
  </div>

  <Link to={`/adDetails/${item._id}`}>
    <button className="bg-blue-900 text-white w-full mt-3 py-2 rounded-md font-semibold hover:bg-blue-800 hover:text-gray-200">
      More details
    </button>
  </Link>
  {loggedIn && userId === item.createdBy && (
  <>
        <Link to={`/adUpdate/${item._id}`}>
    <button className="bg-green-900 text-white w-full mt-3 py-2 rounded-md font-semibold hover:bg-green-800 hover:text-gray-200">
      Edit Advertisement
    </button>
  </Link>
    <Link onClick={handleRemove}>
    <button className="bg-red-900 text-white w-full mt-3 py-2 rounded-md font-semibold hover:bg-red-800 hover:text-gray-200">
      Remove Advertisement
    </button>
  </Link>
  </>
  
  )}
</div>

  )
}

export default AdvertisementCard