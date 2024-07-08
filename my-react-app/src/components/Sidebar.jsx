import React, { useState, useEffect } from "react";
import { Menu, Layout, Button } from "antd";
import {
  DashboardOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  TeamOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
      if (!e.matches) {
        setMenuOpen(false);
      }
    };

    handleMediaQueryChange(mediaQuery); // Initial check
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <Button onClick={toggleMenu}>
            {menuOpen ? (
              <CloseOutlined style={{ color: "#9b51e0" }} />
            ) : (
              <MenuOutlined style={{ color: "#9b51e0" }} />
            )}
          </Button>
          {menuOpen && (
            <Menu
              mode="vertical"
              defaultSelectedKeys={["dashboard"]}
              className="mobile-menu"
            >
              <Menu.Item
                key="dashboard"
                icon={
                  <DashboardOutlined
                    style={{ fontSize: "22px", color: "#9b51e0" }}
                  />
                }
              >
                Dashboard
              </Menu.Item>
              <Menu.Item
                key="questionnaire"
                icon={
                  <QuestionCircleOutlined
                    style={{ fontSize: "22px", color: "#9b51e0" }}
                  />
                }
              >
                Cuestionario AI
              </Menu.Item>
              <Menu.Item
                key="chat"
                icon={
                  <MessageOutlined
                    style={{ fontSize: "22px", color: "#9b51e0" }}
                  />
                }
              >
                Chat
              </Menu.Item>
              <Menu.Item
                key="agents"
                icon={
                  <TeamOutlined
                    style={{ fontSize: "22px", color: "#9b51e0" }}
                  />
                }
              >
                Agentes
              </Menu.Item>
            </Menu>
          )}
        </>
      ) : (
        <Sider
          width={250}
          className="custom-sider"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo">
            <img src="src/assets/servicebots.png" alt="ServiceBots" />
          </div>
          <Menu mode="vertical" defaultSelectedKeys={["dashboard"]}>
            <Menu.Item
              key="dashboard"
              icon={
                <DashboardOutlined
                  style={{ fontSize: "22px", color: "#9b51e0" }}
                />
              }
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="questionnaire"
              icon={
                <QuestionCircleOutlined
                  style={{ fontSize: "22px", color: "#9b51e0" }}
                />
              }
            >
              Cuestionario AI
            </Menu.Item>
            <Menu.Item
              key="chat"
              icon={
                <MessageOutlined
                  style={{ fontSize: "22px", color: "#9b51e0" }}
                />
              }
            >
              Chat
            </Menu.Item>
            <Menu.Item
              key="agents"
              icon={
                <TeamOutlined style={{ fontSize: "22px", color: "#9b51e0" }} />
              }
            >
              Agentes
            </Menu.Item>
          </Menu>
        </Sider>
      )}
    </>
  );
};

export default Sidebar;
