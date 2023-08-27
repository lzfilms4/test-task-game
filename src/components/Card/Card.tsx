import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
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
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={item.title}
        description={item.platform}
      />
    </Card>
  </Link>
);

export default CardItem;
