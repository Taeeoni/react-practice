import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

import Add from "./Add.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to="/a1">후보등록</Link>
          {" | "}
          <a
            className="App-link"
            href="/add.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            투표하기
          </a>
          {" | "}
          <a
            className="App-link"
            href="/add.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            결과보기
          </a>
        </p>
      </header>
      <div>
        <Routes>
          <Route path="/a1" element={<Add />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
