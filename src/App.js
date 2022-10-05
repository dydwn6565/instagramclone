
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Side from "./components/Side";
import StoriesActivity from "./components/StoriesActivity";

function App() {
  const [blurBackground, setBlurBackground] = useState(false);
  return (
    <div className={blurBackground ? "App" : ""}>
      <Header setBlurBackground={setBlurBackground} />

      <div className="main-page-grid">
        <div className="main-page">
          <StoriesActivity />
          <Main setBlurBackground={setBlurBackground} />
        </div>
        <div className="main-page-side">
          <Side />
        </div>
      </div>
    </div>
  );
}

export default App;
