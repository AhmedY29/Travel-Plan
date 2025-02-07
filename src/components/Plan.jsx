import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from "js-cookie";
import Img from '../../public/assets/images/Tabuk.jpeg'
import { useTranslation } from 'react-i18next';


function Plan() {
  const [response, setResponse] = useState()
  const { t } = useTranslation();
  const [data, setData] = useState({
    location: '',
    budget: '',
    duration: '',
    itinerary: '',
    hotels: '',    
  })
  const [hotels, setHotels] = useState([{
    HotelName: '',
    description: '',
    rating: '',
    HotelAddress: '',
    Price: '',    
    geoCoordinates: '',    
  }])
  const [itinerary, setItinerary] = useState([{
    day: '',
    places: [{
      placeName: {
        ar:'',
        en:'',
      },
      placeDetails: {
        ar:'',
        en:'',
      },
      ticketPricing: {
        ar:'',
        en:'',
      },
    }],
    theme: '',
    HotelAddress: '',
    Price: '',    
    geoCoordinates: '',    
  }])
  const [itineraries, setItineraries] = useState([{
    day: '',
    places: [{
      placeName: {
        ar:'',
        en:'',
      },
      placeDetails: {
        ar:'',
        en:'',
      },
      ticketPricing: {
        ar:'',
        en:'',
      },
    }],
    theme: '',
    HotelAddress: '',
    Price: '',    
    geoCoordinates: '',    
  }])
  const location = useLocation();
  const res = location.state || {}
  useEffect(() => {
    if(!response)return
    setData({...data , 
      location:response.travelPlan.location,
      budget: response.travelPlan.budget,
      duration:response.travelPlan.duration,
      itinerary: lng == 'en' ? response.travelPlan.itinerary : response.travelPlan.itinerary,
      hotels:response.travelPlan.hotels 
    })
    setHotels(response.travelPlan.hotels)
    setItinerary(response.travelPlan.itinerary)

    console.log(data)
    console.log(hotels)
    console.log(itinerary)
    const itineraryDays = Object.keys(itinerary).map(dayKey => ({
      day: dayKey,
      ...itinerary[dayKey]
    }))
    setItineraries(itineraryDays)
    console.log(itineraryDays)
  }, [response , itinerary])
  useEffect(() => {
    console.log(itineraries , 'here')

  }, [data , itineraries])
  useEffect(() => {
    setResponse(JSON.parse(res))
  }, [])
  let lng = Cookies.get('i18next') || 'ar'
  if(!itineraries || !response || !hotels){
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
              <h3>{ lng == 'en' ? data.location.en : data.location.ar}</h3>
              <h3>{`${lng == 'en' ? data.budget.en : data.budget.ar} ${data.budget.en == 'Luxury' ? '💸' : data.budget.en == 'Cheep' ? '💵' : '💰'} `}</h3>
              <h3>{`${lng == 'en' ? data.duration.en : data.duration.ar} 📅`}</h3>
            </div>
            <div className="hotels">
                <h2>{t('hotels')}</h2>
                <div className="cards">
                  {
                    hotels && hotels.map((hotel) => (
                      <div className="card">
                      <div className="title">
                      <h4>{lng == 'en' ? hotel.HotelName.en :hotel.HotelName.ar }</h4>
                      <h4>{lng == 'en' ? hotel.Price.en : hotel.Price.ar}💵</h4>
                      </div>
                      <div className="details">
                      <p>📄{lng == 'en' ? hotel.description.en : hotel.description.ar}</p>
                      <p>📌 {lng == 'en' ? hotel.HotelAddress.en : hotel.HotelAddress.ar}</p>
                      <p>🌟 {lng == 'en' ? hotel.rating.en : hotel.rating.ar}</p>
                      </div>
                    </div>
                  ))
                  }
                </div>
            </div>
            <div className="itinerary">
                <h2>{t('itinerary')}</h2>
                <div className="days">
                  {
                    itineraries && itineraries.map((itinerary , index) => (
                      <div key={index} className="card">
                      <div className="title">
                      <h4>{lng == 'en' ? `Day ${index + 1}` : `اليوم ${index + 1}` }</h4>
                      <h4>{lng == 'en' ? itinerary.theme.en : itinerary.theme.ar}</h4>
                      </div>
                      <div className="places">

                      {
                       itinerary && itinerary?.places?.map((place, index) =>(
                          <div key={index} className="place">
                          <h4>{lng == 'en' ? place.placeName.en : place.placeName.ar}</h4>
                          <p> {lng == 'en' ? place.placeDetails.en : place.placeDetails.ar}</p>
                          <p>💵 {lng == 'en' ? place.ticketPricing.en : place.ticketPricing.ar}</p>
                          </div>
                        ))
                      }
                      </div>
                    </div>
                  ))
                  }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan