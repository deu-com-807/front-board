import './App.css';
import { useState } from 'react'
import Dialog from './Component/Dialog';
import Router from './Router';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <div>
      <Router />
      {isDialogOpen && <Dialog />}
    </div>
  );
}

export default App;
