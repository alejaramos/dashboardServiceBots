import React, { useState, useEffect, useCallback } from "react";
import { Tabs, Col, Row, Layout } from "antd";
const { Content } = Layout;
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  LabelList,
} from "recharts";

import ResumeData from "./ResumeData";

import "antd/dist/reset.css";

const { TabPane } = Tabs;

const dataJantoJul = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const data = [
  { name: "Cali", value: 6000, fill: "#3498db" },
  { name: "Medellin", value: 4000, fill: "#e67c0b" },
  { name: "Bogota", value: 10000, fill: "#77417b" },
  { name: "Cartagena", value: 12000, fill: "#8d5dbd" },
];

const renderCustomizedLabelPercentage = (data, total = 32000) => {
  let percentageCalculated = (data.value / total) * 100;
  return percentageCalculated.toFixed(2).replace(".", ",").toString() + "%";
};
const Dashboard = () => {
  const renderLabel = useCallback((piePiece) => {
    return piePiece.name;
  }, []);

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
    <div className="dashboard-content">
      <Tabs defaultActiveKey="1" centered>
        <TabPane className="tab-pane" tab="Chats" key="1"></TabPane>
        <TabPane className="tab-pane" tab="Mensajes" key="2"></TabPane>
        <TabPane className="tab-pane" tab="Pedidos" key="3"></TabPane>
      </Tabs>

      <ResumeData></ResumeData>

      <Layout>
        <Content style={{ padding: "24px" }}>
          <Row gutter={[50, 50]} justify="space-around">
            <Col xs={24} sm={24} md={24} lg={8}>
              <Col
                className="card"
                xs={24}
                sm={24}
                md={24}
                lg={24}
                style={{ backgroundColor: "#2c3e50", height: "420px" }}
              >
                <div style={{ paddingTop: "5%", color: "white" }}>
                  <h2>Mensajes por cuidad</h2>
                </div>
                <ResponsiveContainer width="100%" height="90%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={data}
                      label={renderLabel}
                      cx="50%"
                      cy="50%"
                      outerRadius={"60%"}
                      nameKey="name"
                      activeShape={(props) =>
                        renderActiveShape(props, showSubchart)
                      }
                    >
                      <LabelList
                        dy={-3}
                        fill="white"
                        dataKey={renderCustomizedLabelPercentage}
                        position="inside"
                        angle="0"
                        stroke="none"
                        className="label-percentage"
                      />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Col>
            </Col>
            <Col
              style={{
                backgroundColor: "white",
                color: "#fff",
                borderRadius: "10px",
                padding: "15px",
                height: "420px",
              }}
              xs={24}
              sm={24}
              md={24}
              lg={15}
            >
              <div style={{ color: "black" }}>
                <h2>Mensajes por mes</h2>
              </div>
              <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                  width={730}
                  height={250}
                  data={dataJantoJul}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8d5dbd" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8d5dbd" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e67c0b" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#e67c0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Dashboard;
