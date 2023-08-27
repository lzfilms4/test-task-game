import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Layout } from 'antd';
import MenuHeader from './components/Header/MenuHeader';
import router from './routes/routes';

const App = () => (
  <Layout>
    <MenuHeader />
    <RouterProvider router={router} />
  </Layout>
)

export default App;
