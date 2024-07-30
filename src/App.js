import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "../src/Home"


function App() {


  return (

    <div className="App">
      <Routes path="/myPortfolio">

        <Route index element={<Home />}></Route>
      </Routes>

    </div>


  );
}

export default App;
