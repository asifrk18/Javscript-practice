import Fetch from "./Componets/Fetch/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header/index";

function App() {
  return (
    <>

      <Header/>
    
        <Fetch />
    </>
      
    
  );
}

export default App;
