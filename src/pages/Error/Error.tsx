import React from 'react';
import { FloatButton } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      Данной страницы не найдено :(
      <FloatButton onClick={() => navigate('/')} icon={<LeftOutlined />} />

    </div>
  )
};

export default Error;
