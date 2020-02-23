import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import ArticleList from "./container/ArticleListView";
import CustomLayout from "./container/CustomLayout";

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleList />
      </CustomLayout>
    </div>
  );
}

export default App;
