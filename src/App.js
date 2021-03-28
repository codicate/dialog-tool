import 'App.scss';

import Dialog from 'components/Dialog';
import Card from 'components/Card';
import { useEffect, useRef } from 'react';
import useZoom from 'hooks/useZoom';
import useDrag from 'hooks/useDrag';

function App() {
  const canvas = useRef(null);
  const scale = useZoom(document.body, canvas);
  useDrag(document.body, canvas);

  return (
    <>
      <div id='canvas' ref={canvas}>
        <Dialog
          scale={scale}
          type='response'
        />
        <Dialog
          scale={scale}
          type='response'
        />
        <Dialog
          scale={scale}
          type='response'
        />
        <Dialog
          scale={scale}
          type='response'
        />
      </div>
    </>
  );
}

export default App;
