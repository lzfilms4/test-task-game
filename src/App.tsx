import React from 'react';

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);
const App = () => (
  <RouterProvider router={router} />
)

export default App;
