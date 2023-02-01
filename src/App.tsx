import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Entry from "./components/Entry";
import ScrollUpBtn from "./components/tsx/ScrollUpBtn";
import ScrollOnPage from "./components/ScrollOnPage";
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
