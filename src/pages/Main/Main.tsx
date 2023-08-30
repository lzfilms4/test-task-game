import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';

import cls from './Main.module.scss'

const Main = () => (
  <Layout className={cls.Layout}>
    <Sidebar />
    <List />
  </Layout>
)

export default Main;
