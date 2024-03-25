import Home from "./screens/Home";
import { useContext } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Research from "./screens/Research";
import Planning from "./screens/Planning";
import Designing from "./screens/Designing";
import Manufacturing from "./screens/Manufacturing";
import Sales from "./screens/Sales";
import External from "./components/External";
import Internal from "./components/Internal";
import Prd from "./components/Prd";
import Specs from "./components/Specs";
import Hardware from "./components/Hardware";
import Software from "./components/Software";
import Material from "./components/Material";
import Production from "./components/Production";
import Online from "./components/Online";
import Dealership from "./components/Dealership";




function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/research" element={<Research />}></Route>
          <Route exact path="/planning" element={<Planning />}></Route>
          <Route exact path="/designing" element={<Designing />}></Route>
          <Route
            exact
            path="/manufacturing"
            element={<Manufacturing />}
          ></Route>
          <Route exact path="/sales" element={<Sales />}></Route>
          <Route exact path="/research/external" element={<External />}></Route>
          <Route exact path="/research/internal" element={<Internal />}></Route>
          <Route exact path="/planning/prd" element={<Prd />}></Route>
          <Route exact path="/planning/specs" element={<Specs />}></Route>
          <Route
            exact
            path="/designing/hardware"
            element={<Hardware />}
          ></Route>
          <Route
            exact
            path="/designing/software"
            element={<Software />}
          ></Route>
          <Route
            exact
            path="/manufacturing/material"
            element={<Material />}
          ></Route>
          <Route
            exact
            path="/manufacturing/production"
            element={<Production />}
          ></Route>
          <Route exact path="/sales/online" element={<Online />}></Route>
          <Route
            exact
            path="/sales/dealership"
            element={<Dealership />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
