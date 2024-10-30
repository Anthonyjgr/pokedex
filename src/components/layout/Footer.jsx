import React, { useEffect, useState } from "react";
import Pokeball from "../common/Pokeball";

const Footer = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    setLocation(window.location?.pathname === "/");
  }, []);

  return (
    <>
      {!location ? (
        <div className="flex-col-center w-full p-10 text-sm dark:bg-gray-900 dark:text-gray-200">
          <div className="w-full max-w-[1440px] flex flex-row items-center justify-between">
            <a
              href="https://www.linkedin.com/in/anthony-guzman-840449135/"
              target="_blank"
            >
              Developed and Designed by Anthony Guzman
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-guzman-840449135/"
              target="_blank"
            >
              Get in Touch
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
