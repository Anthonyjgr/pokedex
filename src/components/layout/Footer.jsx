import React, { useEffect, useState } from "react";
import Pokeball from "../common/Pokeball";

const Footer = () => {
  const [location , setLocation] = useState()

  useEffect(()=>{
    setLocation(window.location?.pathname === "/")
  },[])

  return (
    <>
      {!location ? (
        <div className="flex flex-row items-center justify-between max-w-[1440px]  w-full p-10 py-10 text-sm">
            <a href="https://www.linkedin.com/in/anthony-guzman-840449135/" target="_blank">Developed and Designed by Anthony Guzman</a>
            <a href="https://www.linkedin.com/in/anthony-guzman-840449135/" target="_blank">Get in Touch</a>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
