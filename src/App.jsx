import React from "react";
import {Form} from "./Form/Form";
import {DetailsPage} from "./Form/DetailsPage"
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">  
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details/:emailId" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
