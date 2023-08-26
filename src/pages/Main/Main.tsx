import React from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';

const Main = () => {
  const count = useAppSelector((state) => state.counter.value)
  return (
    <div>
      main
      {count}
    </div>
  )
}

export default Main;
