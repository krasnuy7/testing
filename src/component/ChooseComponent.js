import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Testing from "./Testing";
function ChooseComponent() {
  return (
    <Switch>
      <Route path="/testing" exact component={Testing} />
    </Switch>
  );
}

export default ChooseComponent;
