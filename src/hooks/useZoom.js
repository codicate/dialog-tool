import useEventListener from 'hooks/useEventListener';
import getRefCurrent from 'functions/getRefCurrent';
import clamp from 'functions/clamp';
import { useRef } from 'react';

const useZoom = (
  eventTarget,
  movingTarget = eventTarget, {
    zoomSpeed = 0.05,
    minScale = 0.125,
    maxScale = 4
  } = {}

) => {

  const scale = useRef(1);
  const pointer = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEventListener(eventTarget, 'wheel', (e) => {
    const movingElement = getRefCurrent(movingTarget);
    
    pointer.current = {
      x: e.clientX - movingElement.offsetLeft,
      y: e.clientY - movingElement.offsetTop
    };

    target.current = {
      x: (pointer.current.x - pos.current.x) / scale.current,
      y: (pointer.current.y - pos.current.y) / scale.current
    };

    scale.current = clamp(
      scale.current + Math.sign(e.deltaY) * -zoomSpeed,
      minScale, maxScale
    );

    pos.current = {
      x: -target.current.x * scale.current + pointer.current.x,
      y: -target.current.y * scale.current + pointer.current.y
    };

    movingElement.style.transform = `
      translate(${pos.current.x}px, ${pos.current.y}px) 
      scale(${scale.current})
    `;
  }, true);

  return scale;
};

export default useZoom;