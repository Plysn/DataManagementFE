import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LineChartOutlined,
  UserOutlined,
  ReadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Row, theme, Col, Avatar } from "antd";
import PrivateRoute from "../router/PrivateRoute";
import { pathRouters, routers } from "../router";
import Content from "./Content";

const { Header, Sider, Footer } = Layout;

function DashboardPage() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${pathRouters.USER}`]}
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              key: `${pathRouters.USER}`,
              icon: <UserOutlined />,
              label: "User",
            },
            {
              key: `${pathRouters.LIST}`,
              icon: <ReadOutlined />,
              label: "List Data",
            },
            {
              key: `${pathRouters.COMPARE}`,
              icon: <LineChartOutlined />,
              label: "Price Comparing",
            },
            {
              key: `${pathRouters.LOGIN}`,
              icon: <LogoutOutlined />,
              label: "Log Out",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row>
            <Col md={18}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            {/* <Col md={6}>
              <div>
                <Avatar
                  size="default"
                  icon={<UserOutlined />}
                  onClick={() => navigate(pathRouters.USER)}
                ></Avatar>
                Nguyen Van A
              </div>
            </Col> */}
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
