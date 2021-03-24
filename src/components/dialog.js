import React from 'react';

export default function Dialog(props) {
  return (
    <div className={'card dialog ' + props.type}>
      <p className='msg'>{props.msg}</p>
    </div>
  );
}
