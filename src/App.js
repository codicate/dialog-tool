import './App.css';

import Dialog from './components/dialog';
import Card from './components/card';
import { useEffect, useRef } from 'react';
import { useZoom } from './hooks/transform';

function App() {
  useEffect(() => {
    console.log(useZoom)
  }, []);

  return (
    <>
      <Dialog
        type='response'
      />
    </>
  );
}

export default App;
