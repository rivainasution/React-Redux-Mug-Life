import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../components';
import { getHots, hotSelector } from '../../features/hot/hotSlice';

function HotCoffee() {
  const dispatch = useDispatch();
  const hot = useSelector(hotSelector.selectAll);

  useEffect(()=>{
    dispatch(getHots());
  }, [dispatch]);

  return (
    <Category 
      title='Hot Coffee'
      data={hot}
    />
  )
}

export default HotCoffee;