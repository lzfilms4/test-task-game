import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Game from '../pages/Game/Game';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/game/:id',
    element: <Game />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

export default router
