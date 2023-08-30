import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { CardType } from '../../redux/types/CardTypes';

const { Meta } = Card;

interface CardItemProps {
  item: CardType
}
const CardItem: React.FC<CardItemProps> = ({ item }) => (
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
        description={`${item.platform} /  ${item.release_date} / ${item.genre} / ${item.publisher}`}
      />
    </Card>
  </Link>
);

export default CardItem;
