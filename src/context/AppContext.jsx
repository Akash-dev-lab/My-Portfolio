import React, { createContext, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Swiper from "swiper";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    // Initialize LocomotiveScroll
    const scrollContainer = document.querySelector('#main');
    if (scrollContainer) {
      const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
      });

      // Clean up on unmount
      return () => {
        scroll.destroy();
      };
    } else {
      console.error("Element with id 'main' not found.");
    }
  }, []); // Runs only once on component mount

  // // Page 4 Animation
  // const page4Animation = () => {
  //   const elemC = document.querySelector("#elem-container");
  //   const fixed = document.querySelector("#fixed-image");
  //   if (elemC && fixed) {
  //     elemC.addEventListener("mouseenter", () => (fixed.style.display = "block"));
  //     elemC.addEventListener("mouseleave", () => (fixed.style.display = "none"));
  //   }

  //   const elems = document.querySelectorAll(".elem");
  //   elems.forEach((e) => {
  //     e.addEventListener("mouseenter", () => {
  //       const image = e.getAttribute("data-image");
  //       fixed.style.backgroundImage = `url(${image})`;
  //     });
  //   });
  // };

  // // Swiper Animation
  // const swiperAnimation = () => {
  //   new Swiper(".mySwiper", {
  //     slidesPerView: "auto",
  //     centeredSlides: true,
  //     spaceBetween: 100,
  //   });
  // };

  // // Menu Animation
  // const menuAnimation = () => {
  //   const menu = document.querySelector("nav h3");
  //   const full = document.querySelector("#full-scr");
  //   const navimg = document.querySelector("nav img");
  //   let flag = 0;

  //   menu.addEventListener("click", () => {
  //     if (flag === 0) {
  //       full.style.top = 0;
  //       navimg.style.opacity = 0;
  //       flag = 1;
  //     } else {
  //       full.style.top = "-100%";
  //       navimg.style.opacity = 1;
  //       flag = 0;
  //     }
  //   });
  // };
 

  // Loader Animation
  const loaderAnimation = () => {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
      if (loader) loader.style.bottom = "100%";
    }, 4200);
  };

  useEffect(() => {
    // Run animations when components mount
    // swiperAnimation();
    // page4Animation();
    // menuAnimation();
    loaderAnimation();
  }, []);


  // Context Value
  return (
    <AppContext.Provider value={{ scrollInstance, loaderAnimation }}>
      {children}
    </AppContext.Provider>
  );
};

// Add in AppContext value, when app is complete
//  page4Animation, swiperAnimation, menuAnimation,