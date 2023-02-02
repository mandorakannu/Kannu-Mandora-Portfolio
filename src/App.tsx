import { lazy } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const Entry= lazy(()=> import("./components/Entry"));
const ScrollUpBtn = lazy(()=> import('./components/tsx/ScrollUpBtn'))
const ScrollOnPage = lazy(()=> import('./components/ScrollOnPage'))
const App = () => {
  return (
    <>
      <Router>
        <ScrollUpBtn />
        <ScrollOnPage />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Entry />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
