import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NasaApodPage from "./containers/NasaApodPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NasaApodPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));










