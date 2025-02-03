import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Landing() {
      const { t } = useTranslation();
      const [click, setClick] = useState(false)
      const navigator = useNavigate()
      const toForm = () =>{
        setTimeout(() => {
          navigator('/form')
        }, 450);
      }
  return (
    <section className='landing'>
        <div className="container">
            <div className="hero">
                <h1>{t('Plan Your Trip, Enjoy the Journey')}</h1>
                <p>{t("Tagline")}</p>
                <button onClick={() =>{setClick(true);
                toForm()
                }} className={click ? 'clicks' : ''}>{t("Build Plan")}</button>
            </div>
        </div>
    </section>
  )
}

export default Landing