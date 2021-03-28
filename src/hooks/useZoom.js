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

  let pointer = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  useEventListener(eventTarget, 'wheel', (e) => {
    const movingElement = getRefCurrent(movingTarget);

    pointer.x = e.clientX - movingElement.offsetLeft;
    pointer.y = e.clientY - movingElement.offsetTop;

    target.x = (pointer.x - pos.x) / scale.current;
    target.y = (pointer.y - pos.y) / scale.current;

    scale.current = clamp(
      scale.current + Math.sign(e.deltaY) * -zoomSpeed,
      minScale, maxScale
    );

    pos.x = -target.x * scale.current + pointer.x;
    pos.y = -target.y * scale.current + pointer.y;

    console.log(scale.current)

    movingElement.style.transform = `
      translate(${pos.x}px, ${pos.y}px) 
      scale(${scale.current})
    `;
  }, true);

  return scale;
};

export default useZoom;