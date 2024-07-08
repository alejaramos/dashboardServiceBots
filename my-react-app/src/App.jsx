import React from 'react';
import { Layout, Row, Col } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import 'antd/dist/reset.css';
import './App.css';
import FooterServiceBots from './components/FooterServiceBots';
const { Content} = Layout;



function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: '16px' }}>
          <Dashboard />
        </Content>
        <FooterServiceBots></FooterServiceBots>
      </Layout>
      
    </Layout>
  );
}

export default App;
