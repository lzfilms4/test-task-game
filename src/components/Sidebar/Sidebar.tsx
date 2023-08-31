import React from 'react';
import { Layout, Select } from 'antd';
import { CategorySelectors, PlatformSelectors, SortBy } from '../../helpers/SelectorsData/SelectorsData';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setCategory, setPlatform, setSortBy } from '../../redux/slices/searchParams/searchParamsSlice';

import cls from './Sidebar.module.scss'
import getSearchParams from '../../redux/slices/searchParams/selectors/selectors';

const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const searchParams = useAppSelector(getSearchParams)
  const handleChangePlatform = (value: string | undefined) => {
    dispatch(setPlatform(value))
  };
  const handleChangeCategory = (value: string | undefined) => {
    dispatch(setCategory(value))
  };
  const handleChangeSortBy = (value: string | undefined) => {
    dispatch(setSortBy(value))
  };
  return (
    <Sider className={cls.Sider}>
      <Select
        data-testid="platform"
        placeholder="Платформа"
        onChange={handleChangePlatform}
        allowClear
        value={searchParams.platform}
        options={
            PlatformSelectors.map((el) => ({ value: el }))
        }
        className={cls.Select}
      />
      <Select
        data-testid="category"
        placeholder="Жанр"
        onChange={handleChangeCategory}
        allowClear
        value={searchParams.category}
        options={
          CategorySelectors.map((el) => ({ value: el }))
        }
        className={cls.Select}
      />
      <Select
        data-testid="sortBy"
        placeholder="Сортировать по"
        onChange={handleChangeSortBy}
        allowClear
        value={searchParams.sortBy}
        options={
            SortBy.map((el) => ({ value: el }))
        }
        className={cls.Select}
      />
    </Sider>
  )
}

export default Sidebar;
