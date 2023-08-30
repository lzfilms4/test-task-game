import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const MenuHeader = () => (
  <Header style={{ display: 'flex', alignItems: 'center' }}>
    <h1 style={{ color: '#fff' }}>Avito</h1>
  </Header>
);

export default MenuHeader;
