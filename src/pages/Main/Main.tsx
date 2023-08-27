import React from 'react';
import {
  Layout,
} from 'antd';
import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';

const Main = () => (
  <Layout>
    <Sidebar />
    <List />
  </Layout>
)

export default Main;
