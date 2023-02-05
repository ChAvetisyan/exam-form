import React from "react";
import { HomePage } from "./Pages/HomePage";
import { FormPage } from "./Pages/FormPage";
import { ProfilesPage } from "./Pages/ProfilesPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
