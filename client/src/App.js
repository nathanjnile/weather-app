import React from 'react';
import Appnavbar from "./components/AppNavbar/Appnavbar";
import Mainbody from "./components/Mainbody/Mainbody";

function App() {
  return (
    <div style={{backgroundColor: "lightgrey", minHeight: "100vh"  ,height: "100%"}}>
      <Appnavbar/>
      <Mainbody/>
    </div>
  );
}

export default App;
