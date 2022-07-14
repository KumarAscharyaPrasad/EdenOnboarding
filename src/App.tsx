import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FourthPage from "./containers/FourthPage";
import ThirdPage from "./containers/ThirdPage";
import SecondPage from "./containers/SecondPage";
import WelcomePage from "./containers/WelcomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/third-page" element={<ThirdPage />} />
          <Route path="/fourth-page" element={<FourthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
