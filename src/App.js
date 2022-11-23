// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';
//let name ="sanjay";
import React ,{useState} from 'react'

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode =()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#303131e3';
      showAlert("Dark mode Enabled!!","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enabled!!","success");

    }
  }
  //setMode('light');
  return (
  <>
  
   {/* <Navbar title="Reduxx" AboutText="About Us"/>  */}
   <Navbar title="TextTools" mode={mode} togglemode={togglemode}  /> 
   <Alert alert={alert} />
   {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div> */}
   {/* <Navbar/> */}
   <div className="container my-5" >
   <TextForm heading="Enter the text" showAlert={showAlert} mode={mode}/>
   {/* <About/> */}
   </div>
  </>
  );
}

 export default App;
