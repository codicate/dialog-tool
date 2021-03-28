import { useRef } from 'react';
import getRefCurrent from '../functions/getRefCurrent';
import useEventListener from './useEventListener';

const useDrag = (
  eventTarget,
  movingTarget = eventTarget,
  scale = { current: 1 }

) => {

  const dragable = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  console.log(eventTarget)

  useEventListener(eventTarget, 'mousedown', (e) => {
    const movingElement = getRefCurrent(movingTarget);
    dragable.current = true;

    pos.current = {
      x: e.clientX / scale.current,
      y: e.clientY / scale.current
    };

    offset.current = {
      x: movingElement.offsetLeft - pos.current.x,
      y: movingElement.offsetTop - pos.current.y
    };
  });

  useEventListener(document, 'mouseup', () => {
    dragable.current = false;
  });

  useEventListener(document, 'mousemove', (e) => {
    const movingElement = getRefCurrent(movingTarget);
    e.preventDefault();

    if (dragable.current) {
      pos.current = {
        x: e.clientX / scale.current,
        y: e.clientY / scale.current
      };

      movingElement.style.left = pos.current.x + offset.current.x + 'px';
      movingElement.style.top = pos.current.y + offset.current.y + 'px';
    }
  });
};

export default useDrag;