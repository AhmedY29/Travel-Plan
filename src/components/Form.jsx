import React, { useEffect, useState } from 'react'
import Radio from './Radio'
import { chatSession } from '../AIModel'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { GetPlaceDetails } from '../infoSearch';

function Form() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false)
    const [formDate , setFormDate] = useState({
        location:'',
        days: '',
        cost: '',
        withWho: ''
    })
    const navigator = useNavigate()
    function handelCheckedCost(e) {
        setFormDate({...formDate, cost:e.target.id})
    }
    function handelCheckedWithWho(e) {
        setFormDate({...formDate, withWho:e.target.id})
    }
    useEffect(() => {
        console.log(formDate)
    }, [formDate])

    const Final_Prompt = `generate travel plan for location: ${formDate.location}, for ${formDate.days} days for ${formDate.withWho} with a ${formDate.cost} budget, give me a Hotels options list with HotelName, HotelAddress, Price, HotelImageUrl, geoCoordinates, rating, descriptions and suggest itinerary with placeName, placeDetails, placeImageUrl, geo Coordinates, ticketPricing, Time to travel each of location for ${formDate.days} days with each day plan with best time to visit in json format key in English and value is Arabic "I want real images"`
    
  return (
    <section className='form'>
        <div className="container">
            <div className="tellUs">
                <h3>{t('tellUs')}</h3>
                <p>{t('someQuestions')}</p>
            </div>
            <div className="costs">
                <div className="input-number">
                    <p>{t('destination')}</p>
                    <input onChange={(t)=> setFormDate({...formDate,location:t.target.value})} type="text" placeholder={t('destinationSelect')} />
                </div>
            </div>
            <div className="costs">
                <div className="input-number">
                    <p>{t('days')}</p>
                    <input onChange={(t)=> setFormDate({...formDate, days:t.target.value})} type="number" placeholder={t('daysSelect')} min={1} />
                </div>
            </div>
            <div className="costs">
                <p>{t('budget')}</p>
                <div className="radio-group">
                    <Radio onCh={handelCheckedCost} id={'cheep'} name={'cost'} icon={'💵'} label={t('budgetCheep')}/>
                    <Radio onCh={handelCheckedCost}  id={'mid'} name={'cost'} icon={'💰'} label={t('budgetModerate')}/>
                    <Radio onCh={handelCheckedCost} id={'lux'} name={'cost'} icon={'💸'} label={t('budgetLuxury')}/>
                </div>
            </div>
            <div className="costs">
                <p>{t('withWho')}</p>
                <div className="radio-group">
                    <Radio onCh={handelCheckedWithWho} id={'alone'} name={'planWith'} icon={'✈️'} label={t('withWhoJustMe')}/>
                    <Radio onCh={handelCheckedWithWho} id={'couple'} name={'planWith'} icon={'🧑‍🤝‍🧑'} label={t('withWhoCouple')}/>
                    <Radio onCh={handelCheckedWithWho} id={'family'} name={'planWith'} icon={'👨‍👩‍👧‍👦'} label={t('withWhoFamily')}/>
                    <Radio onCh={handelCheckedWithWho} id={'friend'} name={'planWith'} icon={'🚢'} label={t('withWhoFriends')}/>
                </div>
            </div>
            <div className="submit">
                <button disabled={loading} onClick={async() =>{
                    // console.log(Final_Prompt);
                    setLoading(true);
                    if(formDate.location == "" || formDate.cost == "" || formDate.days == "" || formDate.withWho == ""){
                        setLoading(false)
                        alert('Please Fill Fields')
                    }else{
                        
                        const res = await chatSession.sendMessage(Final_Prompt);
                        console.log(res.response.text())
                        setLoading(false)
                        // GetPlacePhoto()
                        navigator('/plan')
                    }
                }}>{loading ? 'Loading...':t('buildPlan')}</button>
            </div>
        </div>
    </section>
  )
}

export default Form