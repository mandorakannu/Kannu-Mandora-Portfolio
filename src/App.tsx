import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Entry from "./components/Entry";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Entry />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
