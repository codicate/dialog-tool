import 'App.scss';

import Dialog from 'components/Dialog';
import Card from 'components/Card';
import { useEffect, useRef } from 'react';
import useZoom from 'hooks/useZoom';

function App() {

  const canvas = useRef();
  const scale = useZoom(document.body, canvas);
  console.log(scale);

  return (
    <div id='canvas' ref={canvas}>
      <Dialog
        type='response'
      />
    </div>
  );
}

export default App;
