import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  );
}
export default App;
