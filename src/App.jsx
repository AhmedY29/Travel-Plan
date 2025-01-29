import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // استيراد ملف التهيئة
import Cookies from "js-cookie";
import Home from "./components/Home";
import './style.css'
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
      {/* <h2>{t("Welcome to React")}</h2>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button> */}
      <Home/>
    </div>
  );
}
