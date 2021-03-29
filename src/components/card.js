import React, { useRef } from 'react';
import useDrag from 'hooks/useDrag';
import Dialog from 'components/Dialog';

export default function Card({ content, scale, highestZ }) {
  const card = useRef(null);
  useDrag(card, undefined, scale);

  return (
    <div className='card' ref={card}
      onMouseEnter={() => {
        if (card.current.style.zIndex !== highestZ.current.toString()) {
          highestZ.current++;
          card.current.style.zIndex = highestZ.current;
        };
      }}
    >
      {
        typeof content === 'object'
          ? <div className='replyPanel'>
            {content.map((reply, index) => (
              <Dialog type='reply' key={index} msg={reply.msg} />
            ))}
          </div>
          : <Dialog type='response' msg={content} />
      }
    </div>
  );
}
