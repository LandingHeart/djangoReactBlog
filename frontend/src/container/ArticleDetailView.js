import React, { Component } from "react";
import axios from "axios";
import { Card } from "antd";
export default class ArticleDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;

    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p className="p-title">{this.state.article.content}</p>
        </Card>
      </div>
    );
  }
}
