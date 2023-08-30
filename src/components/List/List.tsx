import React from 'react';
import { Layout, Pagination, Spin } from 'antd';
import Card from '../Card/Card';
import { useGetGamesListQuery } from '../../redux/slices/gamesApi';
import { useAppSelector } from '../../redux/hooks/hooks';
import getSearchParams from '../../redux/slices/searchParams/selectors/selectors';

const { Content } = Layout
const List = () => {
  const searchParams = useAppSelector(getSearchParams)
  const { data, isLoading } = useGetGamesListQuery(searchParams)
  const [page, setPage] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(10)

  if (isLoading) return <Spin />

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {data?.slice((page - 1) * 10, (page - 1) * 10 + pageCount).map((el) => (
          <Card item={el} key={el.id} />
        ))}
      </Content>
      <Pagination
        defaultCurrent={page}
        onChange={setPage}
        total={data?.length}
        pageSize={pageCount}
        onShowSizeChange={(_, count) => setPageCount(count)}
      />
    </Layout>
  )
};

export default List;
