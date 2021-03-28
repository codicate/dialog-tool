import React, { useRef } from 'react';
import useDrag from 'hooks/useDrag';

export default function Dialog(props) {
  const dialog = useRef(null);
  useDrag(dialog, undefined, props.scale);

  return (
    <div ref={dialog} className={'card dialog ' + props.type}>
      <p className='msg'>{props.msg}</p>
    </div>
  );
}
