import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
// import "./App.css";
import Testing from "./component/Testing";
import ChooseComponent from "./component/ChooseComponent";
import LinkJS from "./component/LinkJS";
function App() {
  return (
    <>
      <LinkJS />
      <ChooseComponent />;
    </>
  );
}

export default App;
