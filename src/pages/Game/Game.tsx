import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FloatButton } from 'antd';
import { useGetGameQuery } from '../../redux/slices/gamesApi';

const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetGameQuery(id || '1')
  console.log(isSuccess, data)
  // if (isSuccess && data === undefined) return navigate('/error')
  return (
    <div>
      {!isLoading && data.title}
      <FloatButton onClick={() => navigate('/')} />
    </div>
  );
};

export default Game;
