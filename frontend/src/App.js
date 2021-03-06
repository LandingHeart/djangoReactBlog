import React from "react";
import CustomLayout from "./container/CustomLayout";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <Routes />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
