import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light"); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "#082e46";
      showAlert("Successfully enabled Dark mode", "success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Successfully enabled Light mode", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/> */}
          <TextForm showAlert={showAlert} heading="Enter the text here to manipulate" mode={mode}/>
          {/* <Route path="/about" element={<About mode={mode}/>}/>  */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
