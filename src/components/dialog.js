import CardControl from 'components/CardControl';
import { useState } from 'react';

export default function Dialog({ type, msg }) {
  const [hover, setHover] = useState(false);

  return (
    <div className={'dialog ' + type}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className='msg'>{msg}</p>
      {hover && <CardControl />}
    </div>
  );
}
