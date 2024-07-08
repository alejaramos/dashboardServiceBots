import React from "react";
import { Layout, Row, Col } from "antd";

import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

function FooterServiceBots() {
  return (
    <Footer
      style={{ background: "#e0e0e0", color: "#aaa", padding: "20px 50px" }}
    >
      <Row>
        <Col span={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <EnvironmentOutlined
              style={{
                color: "#e67c0b",
                fontSize: "24px",
                marginRight: "10px",
              }}
            />
            <div>
              <p style={{ margin: 0 }}>123 Bella suiza</p>
              <p style={{ margin: 0, fontWeight: "bold" }}>Bogota, Colombia</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <PhoneOutlined
              style={{
                color: "#e67c0b",
                fontSize: "24px",
                marginRight: "10px",
              }}
            />
            <div>
              <p style={{ margin: 0 }}>+57 555 123456</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MailOutlined
              style={{
                color: "#e67c0b",
                fontSize: "24px",
                marginRight: "10px",
              }}
            />
            <div>
              <p style={{ margin: 0, color: "#8d5dbd" }}>
                support@servicebots.com
              </p>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div style={{ marginBottom: "10px" }}>
            <h3 style={{ color: "#e67c0b" }}>About the company</h3>
            <p style={{ color: "#aaa" }}>
              Lorem ipsum dolor sit amet, consectateur adiscing elit. Fusce
              eismod convallis velit, eu auctor lacus vehicula sit amet. Lorem
              ipsum dolor sit amet, consectateur adiscing elit. Fusce eismod
              convallis velit, eu auctor lacus vehicula sit amet.
            </p>
          </div>
          <div>
            <a
              href="https://tutorials"
              style={{ color: "#8d5dbd", marginRight: "10px" }}
            >
              Tutoriales
            </a>
            <a
              href="https://documentation"
              style={{ color: "#8d5dbd", marginRight: "10px" }}
            >
              Documentacion
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterServiceBots;
