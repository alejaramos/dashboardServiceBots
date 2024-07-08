import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const Header = () => {
    const title = "Dashboard de mensajes"
  return (
    <header className="header">
      <h1>{title}</h1>
      <Tooltip title="Ultima actualizacion a las 8:52 del viernes 5 de julio.">
        <QuestionCircleOutlined className="info-icon" />
      </Tooltip>
    </header>
  );
};

export default Header;
