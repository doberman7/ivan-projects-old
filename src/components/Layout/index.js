import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const LayoutApp = ({ children }) => {
  return (
    <Layout className="layout">
      <br />
      <Content style={{ padding: "0 50px", height: "calc(100vh - 153.6px)" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default LayoutApp;
