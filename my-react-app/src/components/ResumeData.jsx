import React, { useState, useEffect } from "react";
import { Tabs, Col, Row, Button, Popover, Layout, Flex } from "antd";
const { Content } = Layout;

const ResumeData = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Row
      className="cards"
      style={{ marginLeft: "35px", marginRight: "35px" }}
      gutter={[32, 16]}
    >
      <Col
        className="card"
        style={{
          backgroundColor: "#2C3E50",
          color: "#fff",
          borderRadius: "10px",
          padding: "20px",
        }}
        xs={24}
        sm={24}
        md={5}
        offset={isMobile ? 0 : 1}
      >
        <Row justify="space-between" align="middle" style={{ height: "100%" }}>
          <Col>
            <h1 style={{ margin: "5px", fontSize: "4em", fontWeight: "bold" }}>
              50k
            </h1>
            <p style={{ fontSize: "1em" }}>mensajes recibidos</p>
          </Col>
          <Col>
            <p style={{ margin: 0, fontSize: "2em" }}>
              (-5%){" "}
              <span
                style={{
                  color: "red",
                  display: "inline-block",
                  transform: "rotate(45deg)",
                  fontWeight: "bold",
                }}
              >
                ↓
              </span>
            </p>
          </Col>
        </Row>
      </Col>
      <Col
        className="card"
        style={{ backgroundColor: "#3498DB", color: "#fff" }}
        xs={24}
        sm={24}
        md={5}
        offset={isMobile ? 0 : 3}
      >
        <Row justify="space-between" align="middle" style={{ height: "100%" }}>
          <Col>
            <h1 style={{ margin: "5px", fontSize: "4em", fontWeight: "bold" }}>
              46k
            </h1>
            <p style={{ fontSize: "1em" }}>mensajes respondidos</p>
          </Col>
          <Col>
            <p style={{ margin: 0, fontSize: "2em" }}>
              (-3%){" "}
              <span
                style={{
                  color: "red",
                  display: "inline-block",
                  transform: "rotate(45deg)",
                  fontWeight: "bold",
                }}
              >
                ↓
              </span>
            </p>
          </Col>
        </Row>
      </Col>
      <Col
        className="card"
        style={{ backgroundColor: "#8D5DBD", color: "#fff" }}
        xs={24}
        sm={24}
        md={5}
        offset={isMobile ? 0 : 3}
      >
        <Row justify="space-between" align="middle" style={{ height: "100%" }}>
          <Col>
            <h1 style={{ margin: "5px", fontSize: "4em", fontWeight: "bold" }}>
              18k
            </h1>
            <p style={{ fontSize: "1em" }}>mensajes fuera de horario</p>
          </Col>
          <Col>
            <p style={{ margin: 0, fontSize: "2em" }}>
              (8%){" "}
              <span
                style={{
                  color: "greenyellow",
                  display: "inline-block",
                  transform: "rotate(180deg)",
                  fontWeight: "bold",
                }}
              >
                ↓
              </span>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ResumeData;
