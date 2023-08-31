import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { CardType } from '../../redux/types/CardTypes';

const { Meta } = Card;

interface CardItemProps {
  item: CardType
}
const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const getDate = React.useCallback((date: string) => new Date(date).toLocaleString('ru').split(',')[0], [])
  return (
    <Link to={`/game/${item.id}`}>
      <Card
        style={{ width: 300, marginBottom: 15, marginRight: 15 }}
        cover={(
          <img
            alt="example"
            src={item.thumbnail}
          />
          )}
      >
        <Meta
          title={item.title}
          description={`${item.platform} /  ${getDate(item.release_date)} / ${item.genre} / ${item.publisher}`}
        />
      </Card>
    </Link>
  )
};

export default CardItem;
