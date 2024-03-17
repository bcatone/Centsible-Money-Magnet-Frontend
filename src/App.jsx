import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="login/" />
          <Route path="create-account/" />
          <Route path="verified-user/" />
          <Route path="accounts/" />
          <Route path="transactions/" />
          <Route path="budget/" />
          <Route path="expenses/" />
          <Route path="goals/" />
          <Route path="investments/" />
          <Route path="advice/" />
        </Route>
        <Route path={"*"} />
      </Routes>
    </>
  );
}

export default App;
