import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

import Add from "./Add.js";
import Vote from "./vote.js";
import Result from "./result.js";

function App() {
  return (
    <div className="contain">
      <p align="center">
        <Link to="/a1">후보등록</Link>
        {" | "}
        <Link to="/a2">투표하기</Link>
        {" | "}
        <Link to="/a3">결과보기</Link>
      </p>
      <div>
        <Routes>
          <Route path="/a1" element={<Add />} />
          <Route path="/a2" element={<Vote />} />
          <Route path="/a3" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
