import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Landing() {
  const boxRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      opacity: 1,
      y: 15,
      duration: 2,
      ease: "power2.out",
    });
  }, []);
  const go = () => {
    gsap.to(btnRef.current, {
      // position: "absolute",
      // top: "0",
      height: "100vh",
      width: "100vw",
      duration: 1,
      ease: "power1.in",
    });
  };
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const navigator = useNavigate();

  const toForm = () => {
    setTimeout(() => {
      navigator("/form");
    }, 1000);
  };
  return (
    <section className="landing">
      <div className="container">
        <div style={{ opacity: 0 }} ref={boxRef} className="hero">
          <h1>{t("Plan Your Trip, Enjoy the Journey")}</h1>
          <p>{t("Tagline")}</p>
          <button
            ref={btnRef}
            onClick={() => {
              go();
              toForm();
            }}
            className={click ? "clicks" : ""}
          >
            {t("Build Plan")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
