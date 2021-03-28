import { useEffect, useRef } from 'react';
import getElement from 'functions/getElement';

const useEventListener = (eventTarget, eventType, handler, options = {}) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = getElement(eventTarget);
    if (!element || !element.addEventListener) return;

    const listener = (event) => savedHandler.current(event);
    element.addEventListener(eventType, listener, options);

    return () => element.removeEventListener(eventType, listener, options);
  }, [eventTarget, eventType, handler, options]);
};

export default useEventListener;