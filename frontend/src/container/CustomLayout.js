import { Layout, Menu, Breadcrumb, Icon, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const CustomLayout = props => {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/post">Post</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};
export default CustomLayout;
