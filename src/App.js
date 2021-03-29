import { useRef } from 'react';
import 'App.scss';

import dialogDict from 'documents/dialog';
import useZoom from 'hooks/useZoom';
import useDrag from 'hooks/useDrag';

import Dialog from 'components/Dialog';
import Card from 'components/Card';

function App() {
  const canvas = useRef(null);
  const scale = useZoom(document.body, canvas);
  useDrag(document.body, canvas);

  const highestZ = useRef(1);

  return (
    <>
      <div id='canvas' ref={canvas}>
        <Dialog
          scale={scale}
          highestZ={highestZ}
          type='reply'
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
