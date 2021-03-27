import useEventListener from 'hooks/useEventListener';
import getElement from 'functions/getElement';

const useZoom = (
  eventTarget,
  movingTarget = eventTarget,
  {
    zoomSpeed = 0.05,
    minScale = 0.125,
    maxScale = 4
  } = {}

) => {

  let scale = 1;
  let pointer = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  useEventListener(eventTarget, 'wheel', (e) => {
    const movingElement = getElement(movingTarget);

    pointer.x = e.clientX - movingElement.offsetLeft;
    pointer.y = e.clientY - movingElement.offsetTop;

    target.x = (pointer.x - pos.x) / scale;
    target.y = (pointer.y - pos.y) / scale;

    scale = Math.min(Math.max(
      scale + Math.sign(e.deltaY) * -zoomSpeed,
      minScale), maxScale
    );

    pos.x = -target.x * scale + pointer.x;
    pos.y = -target.y * scale + pointer.y;

    movingElement.style.transform = `
      translate(${pos.x}px, ${pos.y}px) 
      scale(${scale})
    `;
  });

  return scale;
};

export default useZoom;