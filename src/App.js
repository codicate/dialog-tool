import { useRef } from 'react';
import 'App.scss';

import dialogDict from 'documents/dialogDict';
import useZoom from 'hooks/useZoom';
import useDrag from 'hooks/useDrag';

import Nav from 'components/Nav';
import Card from 'components/Card';

function App() {
  const highestZ = useRef(1);

  const canvas = useRef(null);
  const scale = useZoom(document.body, canvas);
  useDrag(document.body, canvas);

  return (
    <>
      <div id='canvas' ref={canvas}>
        {
          dialogDict.map((dialog) => (
            <Card
              key={dialog.id}
              content={dialog.choice || dialog.msg}

              scale={scale}
              highestZ={highestZ}
            />
          ))
        }
      </div>
      <Nav />
    </>
  );
}

export default App;
