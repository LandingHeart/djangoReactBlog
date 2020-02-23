import React from "react";
import { Route } from "react-router-dom";
import ArticleListView from "./container/ArticleListView";
import ArticleDetailView from "./container/ArticleDetailView";
export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={ArticleListView} />
      <Route exact path="/:articleID" component={ArticleDetailView} />
    </div>
  );
}
