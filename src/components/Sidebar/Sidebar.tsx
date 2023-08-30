import React from 'react';
import { Layout, Select } from 'antd';
import { CategorySelectors, PlatformSelectors, SortBy } from '../helpers/SelectorsData/SelectorsData';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setCategory, setPlatform, setSortBy } from '../../redux/slices/searchParams/searchParamsSlice';

import cls from './Sidebar.module.scss'

const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useAppDispatch()
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
        placeholder="Платформа"
        onChange={handleChangePlatform}
        allowClear
        options={
            PlatformSelectors.map((el) => ({ value: el }))
        }
        className={cls.Select}
      />
      <Select
        placeholder="Жанр"
        onChange={handleChangeCategory}
        allowClear
        options={
          CategorySelectors.map((el) => ({ value: el }))
        }
        className={cls.Select}
      />
      <Select
        placeholder="Сортировать по"
        onChange={handleChangeSortBy}
        allowClear
        options={
            SortBy.map((el) => ({ value: el }))
        }
        className={cls.Select}
      />
    </Sider>
  )
}

export default Sidebar;
