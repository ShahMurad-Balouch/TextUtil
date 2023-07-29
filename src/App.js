import React, { useState } from 'react';
import './App.css';
import About from './Component/About';
import Ha from './Component/Head';
import Text from './Component/Text';
import Alert from './Component/Alert';
import Contact from './Component/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import Home from './Component/Home';

// import Main from './Component/Body';
// import {Grt} from './Component/Greet';
function App() {
  // it is used to apply dark mode in the web page
  const [mode,setMode] = useState('light')
  // it is used to show any alert msg
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
         setAlert({
          msg : message,
          type : type
         }) 
         setTimeout(()=>{
          setAlert(null);
         },1500
         );
  }
  const togglemode = () =>{
    if(mode === 'dark'){
      setMode ('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has enable','success');
      // these interval is used to show the attract the users
      setInterval(() => {
        document.title = 'My App is Amazing';
      },1400);

      setInterval(() => {
        document.title = 'Download My App';
      },2000);

    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has enable','success');
    }
  }
  return (
    
    <>
    <Router>
    <Ha title='TextUtiles' mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
              <div className='container'>
              <Routes>
          <Route path="/About" element={<About />} />
          <Route path='/Contact' element={<Contact mode={mode} togglemode={togglemode} show={showAlert} />}/>

          <Route path="/" element={<Text heading='Enter Text to Analyze' mode={mode} togglemode={togglemode} show={showAlert}/>} />
        </Routes> 
          </div>
        {/* <Main/> */}
        </Router>
       </>
  );
}
export default App;
