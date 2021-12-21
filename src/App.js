// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light') // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 1000);

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Enable","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enable","success")
    }
  }
  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3" >

  <TextForm heading="Enter the Text below" mode={mode} showAlert={showAlert}/>
  
  </div>

    </>
  );
}

export default App;
