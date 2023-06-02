import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "./Pages/ListPage";
import Summary from "./Pages/Summary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
