import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // استيراد ملف التهيئة
import Cookies from "js-cookie";
import Home from "./components/Home.jsx";
import './style.css'
import { Navigate, Route, Routes } from 'react-router-dom';

import Form from "./components/Form";
import Plan from "./components/Plan.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  let lng = Cookies.get('i18next') || 'ar'
  useEffect(() => {
    window.document.dir = i18n.dir()
  }, [lng])
  

  return (
    <div>
      {/* <h2>{t("Welcome to React")}</h2> */}
      <button className="btnLan" onClick={() => changeLanguage(lng == 'ar' ? 'en' : 'ar')}>{lng == 'ar' ? 'En' : 'Ar'}</button>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/form"  element={<Form/>} />
      <Route path="/plan"  element={<Plan/>} />
    </Routes>
    <Footer/>
    </div>
  );
}
