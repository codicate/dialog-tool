import { useRef } from 'react';
import getRefCurrent from 'functions/getRefCurrent';
import useEventListener from 'hooks/useEventListener';

const useDrag = (
  eventTarget,
  movingTarget = eventTarget,
  scale = { current: 1 },
  mousedownCallback = () => { }

) => {

  const dragable = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEventListener(eventTarget, 'mousedown', (e) => {
    mousedownCallback();

    e.stopPropagation();
    dragable.current = true;

    const movingElement = getRefCurrent(movingTarget);

    pos.current = {
      x: e.clientX / scale.current,
      y: e.clientY / scale.current
    };

    offset.current = {
      x: pos.current.x - movingElement.offsetLeft,
      y: pos.current.y - movingElement.offsetTop
    };
  });

  useEventListener(document, 'mouseup', () => {
    dragable.current = false;
  });

  useEventListener(document, 'mousemove', (e) => {
    e.preventDefault();

    const movingElement = getRefCurrent(movingTarget);

    if (dragable.current) {
      pos.current = {
        x: e.clientX / scale.current,
        y: e.clientY / scale.current
      };

      movingElement.style.left = pos.current.x - offset.current.x + 'px';
      movingElement.style.top = pos.current.y - offset.current.y + 'px';
    }
  });
};

export default useDrag;