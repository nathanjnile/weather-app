import React from 'react';
import Appnavbar from "./components/AppNavbar/Appnavbar";
import Mainbody from "./components/Mainbody/Mainbody";

function App() {
  return (
    <div style={{backgroundColor: "lightgrey", height: "100vh"}}>
      <Appnavbar/>
      <Mainbody/>
    </div>
  );
}

export default App;
