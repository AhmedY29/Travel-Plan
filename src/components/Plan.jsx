import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from "js-cookie";
import Img from '../../public/assets/images/Tabuk.jpeg'


function Plan() {
  const [response, setResponse] = useState()
  const [budget, setBudget] = useState()
  const [data, setData] = useState({
    location: '',
    budget: '',
    duration: '',
    itinerary: '',
    hotels: '',    
  })
  const location = useLocation();
  const res = location.state || {}
  useEffect(() => {
    if(!response)return
    setData({...data , 
      location: lng == 'en' ? response.travelPlan.location.en : response.travelPlan.location.ar,
      budget: lng == 'en' ? response.travelPlan.budget.en : response.travelPlan.budget.ar,
      duration: lng == 'en' ? response.travelPlan.duration.en : response.travelPlan.duration.ar,
      itinerary: lng == 'en' ? response.travelPlan.itinerary : response.travelPlan.itinerary,
      hotels: lng == 'en' ? response.travelPlan.hotels : response.travelPlan.hotels
    })
    console.log(data)
  }, [response])
  useEffect(() => {
    setResponse(JSON.parse(res))
  }, [])
  let lng = Cookies.get('i18next') || 'ar'
  if(!response){
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="plan">
        <div className="container">
          <div className="plan-content">
            <div className="city-img">
              <img src={Img} alt={data.location} />
            </div>
            <div className="text">
              <h3>{data.location}</h3>
              <h3>{`${data.budget} ${data.budget == 'Luxury' ? '💸' : data.budget == 'Cheep' ? '💵' : '💰'} `}</h3>
              <h3>{`${data.duration} 📅`}</h3>
            </div>
            <div className="hotels">
                <h2>الفنادق</h2>
                <div className="cards">
                  <div className="card">
                    <div className="title">
                    <h4> 📍هيلتون جاردن إن تبوك </h4>
                    <h4>600 - 800 ريال سعودي لليلة الواحدة 💵</h4>
                    </div>
                    <div className="details">
                    <p>📄وفر إقامة فاخرة مع وسائل راحة حديثة وخدمات عالية الجودة. تشتهر بغرفها المريحة وخيارات الطعام الجيدة.</p>
                    <p>📌 طريق الملك فيصل، تبوك، المملكة العربية السعودية</p>
                    <p>🌟 4 نجوم</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="title">
                    <h4> 📍هيلتون جاردن إن تبوك </h4>
                    <h4>600 - 800 ريال سعودي لليلة الواحدة 💵</h4>
                    </div>
                    <div className="details">
                    <p>📄وفر إقامة فاخرة مع وسائل راحة حديثة وخدمات عالية الجودة. تشتهر بغرفها المريحة وخيارات الطعام الجيدة.</p>
                    <p>📌 طريق الملك فيصل، تبوك، المملكة العربية السعودية</p>
                    <p>🌟 4 نجوم</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="title">
                    <h4> 📍هيلتون جاردن إن تبوك </h4>
                    <h4>600 - 800 ريال سعودي لليلة الواحدة 💵</h4>
                    </div>
                    <div className="details">
                    <p>📄وفر إقامة فاخرة مع وسائل راحة حديثة وخدمات عالية الجودة. تشتهر بغرفها المريحة وخيارات الطعام الجيدة.</p>
                    <p>📌 طريق الملك فيصل، تبوك، المملكة العربية السعودية</p>
                    <p>🌟 4 نجوم</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan