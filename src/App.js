import './App.css';
import { useState } from 'react'
import Dialog from './Component/Dialog';
import Router from './Router';

function App() {
  const [dialogProps, setDialogProps] = useState({
    isOpen: false,
    msg: ""
  });

  return (
    <div>
      <Router setDialogProps={setDialogProps} />
      {dialogProps.isOpen && <Dialog msg={dialogProps.msg} setDialogProps={setDialogProps} />}
    </div>
  );
}

export default App;
