import 'App.scss';

import Dialog from 'components/Dialog';
// import Card from 'components/Card';
import {useRef } from 'react';
import useZoom from 'hooks/useZoom';
import useDrag from 'hooks/useDrag';

function App() {
  const canvas = useRef(null);
  const scale = useZoom(document.body, canvas);
  useDrag(document.body, canvas);

  const highestZ = useRef(0)

  return (
    <>
      <div id='canvas' ref={canvas}>
        <Dialog
          scale={scale}
          highestZ={highestZ}
          type='response'
        />
        <Dialog
          scale={scale}
          highestZ={highestZ}
          type='response'
        />
        <Dialog
          scale={scale}
          highestZ={highestZ}
          type='response'
        />
        <Dialog
          scale={scale}
          highestZ={highestZ}
          type='response'
        />
      </div>
    </>
  );
}

export default App;
