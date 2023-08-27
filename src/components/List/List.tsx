import React from 'react';
import { Layout, Pagination } from 'antd';
import Card from '../Card/Card';
import { useGetGamesListQuery } from '../../redux/slices/gamesApi';

const { Content } = Layout
const List = () => {
  const { data, isLoading } = useGetGamesListQuery()
  // const [data, setData] = React.useState<CardType[]>([])
  const [page, setPage] = React.useState(1)
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {!isLoading && (
        <>
          {data?.slice((page - 1) * 10, (page - 1) * 10 + 10).map((el) => (
            <Card item={el} key={el.id} />
          ))}
          <Pagination defaultCurrent={page} onChange={setPage} total={data?.length} pageSize={10} />
        </>
        )}

      </Content>

    </Layout>
  )
};

export default List;
