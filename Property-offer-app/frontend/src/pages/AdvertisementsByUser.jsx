import React, {useState, useEffect} from 'react'

const AdvertisementsByUser = () => {
    const [ad, setAd] = useState([])
    useEffect(()=> {
       fetch('/api/advertiseList/yourAdvertisements')
      .then(response=>response.json())
      .then(data =>setAd(data?.advertisements))
      .catch(err=>console.log(err))
    }, [])
  return (
    <div>{console.log(ad)}</div>
  )
}

export default AdvertisementsByUser