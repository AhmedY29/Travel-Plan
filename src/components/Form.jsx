import React, { useEffect, useState } from 'react'
import Radio from './Radio'
import { chatSession } from '../AIModel'

function Form() {
    const [formDate , setFormDate] = useState({
        location:'',
        days: '',
        cost: '',
        withWho: ''
    })
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
                <h3>أخبرنا عن رحلتك القادمة🏕️🌴</h3>
                <p>لدينا بعض الاسألة الاساسية من أجل توليد خطة ممتازة.</p>
            </div>
            <div className="costs">
                <div className="input-number">
                    <p>ماهي الوجهة التي تخطط لها ؟</p>
                    <input onChange={(t)=> setFormDate({...formDate,location:t.target.value})} type="text" placeholder='مثلا الرياض' />
                </div>
            </div>
            <div className="costs">
                <div className="input-number">
                    <p>ماهي المدة التي ستقضيها ؟</p>
                    <input onChange={(t)=> setFormDate({...formDate, days:t.target.value})} type="number" placeholder='مثلا 4' min={1} />
                </div>
            </div>
            <div className="costs">
                <p>ماهي ميزانيتك ؟</p>
                <div className="radio-group">
                    <Radio onCh={handelCheckedCost} id={'cheep'} name={'cost'} icon={'💵'} label={'اقتصادي'}/>
                    <Radio onCh={handelCheckedCost}  id={'mid'} name={'cost'} icon={'💰'} label={'متوسط'}/>
                    <Radio onCh={handelCheckedCost} id={'lux'} name={'cost'} icon={'💸'} label={'غالي'}/>
                </div>
            </div>
            <div className="costs">
                <p>تخطط لـ السفر مع ؟</p>
                <div className="radio-group">
                    <Radio onCh={handelCheckedWithWho} id={'alone'} name={'planWith'} icon={'✈️'} label={'بمفردي'}/>
                    <Radio onCh={handelCheckedWithWho} id={'couple'} name={'planWith'} icon={'🧑‍🤝‍🧑'} label={'زوجان'}/>
                    <Radio onCh={handelCheckedWithWho} id={'family'} name={'planWith'} icon={'👨‍👩‍👧‍👦'} label={'مع العائلة'}/>
                    <Radio onCh={handelCheckedWithWho} id={'friend'} name={'planWith'} icon={'🚢'} label={'مع الاصدقاء'}/>
                </div>
            </div>
            <div className="submit">
                <button onClick={async() =>{
                    // console.log(Final_Prompt);
                    const res = await chatSession.sendMessage(Final_Prompt);
                    console.log(res.response.text())
                }}>أصنع الخطة</button>
            </div>
        </div>
    </section>
  )
}

export default Form