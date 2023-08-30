import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  FloatButton, Carousel, Card, Spin,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useGetGameQuery } from '../../redux/slices/gamesApi';

const { Meta } = Card;

const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetGameQuery(id || '1')

  if ((!isLoading && data === undefined) || isError) return <div>Ошибка запроса</div>
  if (isLoading) return <Spin />

  return (
    <div>
      <Card
        style={{ width: 300, marginBottom: 15, marginRight: 15 }}
        cover={(
          <img
            alt="example"
            src={data?.thumbnail}
          />
            )}
      >
        <Meta
          title={data?.title}
          description={`${data?.platform} /  ${data?.release_date} / ${data?.genre} / ${data?.publisher}`}
        />
      </Card>
      <Card
        style={{ width: 300, marginBottom: 15, marginRight: 15 }}
      >
        {
              data?.minimum_system_requirements
                ? Object.entries(data?.minimum_system_requirements)
                  .map(([key, value]) => (
                    <div key={key}>
                      {key}
                      {' '}
                      /
                      {' '}
                      {value}
                      {' '}
                    </div>
                  )) : <div>Системных требований не найдено</div>
          }
      </Card>
      <Carousel autoplay>
        {data?.screenshots.map((el) => <img src={el.image} key={el.id} alt="GameImg" />)}
      </Carousel>
      <FloatButton onClick={() => navigate('/')} icon={<LeftOutlined />} />
    </div>
  );
};

export default Game;
