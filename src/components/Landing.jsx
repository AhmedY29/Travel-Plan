import React from 'react'
import { useTranslation } from 'react-i18next';

function Landing() {
      const { t } = useTranslation();
  return (
    <section className='landing'>
        <div className="container">
            <div className="hero">
                <h1>{t('Plan Your Trip, Enjoy the Journey')}</h1>
                <p>{t("Tagline")}</p>
                <button>{t("Build Plan")}</button>
            </div>
        </div>
    </section>
  )
}

export default Landing