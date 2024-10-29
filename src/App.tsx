import React, { useState } from "react";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Menu, Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;

import "./styles/index.css";

const App: React.FC = () => {
    const [selectedKeys, setSelectedKeys] = useState(["1"]);

    const onClick: MenuProps["onClick"] = (e) => {
        setSelectedKeys([e.key]);
    };
    return (
        <Layout className="layout window-layout">
            <Header>
                <div className="logo"></div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.SubMenu key="file-menu" title="File">
                        <Menu.Item key="new">New Project</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="edit-menu" title="Edit"></Menu.SubMenu>
                    <Menu.SubMenu key="view-menu" title="View"></Menu.SubMenu>
                    <Menu.SubMenu key="Help-menu" title="Help"></Menu.SubMenu>
                </Menu>
            </Header>
            <Layout>
                <Content>
                    <div className="site-layout-content">
                        <div className="main-content">
                            <div className="work-panel"></div>
                        </div>
                        <div className="audio-player">
                            <audio controls>
                                Your browser does not support the audio tag.
                            </audio>
                        </div>
                    </div>
                </Content>
                <Sider></Sider>
            </Layout>
            <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
    );
};

export default App;
