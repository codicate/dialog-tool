import { useEffect, useRef } from 'react';

const useEventListener = (target, eventType, handler, options = {}) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = target.hasOwnProperty("current")
      ? target.current
      : target;

    if (!element || !element.addEventListener) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventType, eventListener, options);

    return () => element.removeEventListener(eventType, eventListener, options);
  }, [target, eventType, handler, options]);
};

export default useEventListener;