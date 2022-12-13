import Information from "./components/Information/Information";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Quiz from "./components/Quiz/Quiz";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div className="container">
        <Registration />
      </div> */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="info" element={<Information />} />
        <Route path="quiz" element={<Quiz />} />

      </Routes>
    </div>
  );
}

export default App;
