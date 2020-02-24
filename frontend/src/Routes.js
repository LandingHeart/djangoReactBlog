import React from "react";
import { Route } from "react-router-dom";
import ArticleListView from "./container/ArticleListView";
import ArticleDetailView from "./container/ArticleDetailView";
import AddArticle from './container/AddArticle';
export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={ArticleListView} />
      <Route exact path="/post" component={AddArticle} />
      <Route exact path="/:articleID" component={ArticleDetailView} />
    </div>
  );
}
