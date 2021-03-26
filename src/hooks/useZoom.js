import { useEffect, useRef, useState } from "react";

const useZoom = (

  targetElement,
  movingElement = targetElement,
  zoomSpeed = 0.05,
  minScale = 0.125,
  maxScale = 4

) => {
  console.log(targetElement);
  console.log(movingElement);

  const getViewportWidth = () => {
    let e = window,
      a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    return e[a + "Width"];
  };

  const [viewportWidth, setViewportWidth] = useState(getViewportWidth())

  useEffect(() => {
    // We're going to create an 'onResize' event handler which will update our state
    const setFromEvent = () => setViewportWidth(getViewportWidth());
    
    // Add an event listener for resize, which will update our state
    window.addEventListener('resize', setFromEvent)
    
    //Finally, remember to unbind the event listener on unmount
    return () => {
      window.removeEventListner('resize', setFromEvent)
    }
  }, []); // Empty parentheses will cause this to run once at mount

};

export default useZoom;