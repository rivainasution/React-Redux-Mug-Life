import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../components';
import { getIces, iceSelector } from '../../features/ice/iceSlice';

function IceCoffee() {
  const dispatch = useDispatch();
  const ice = useSelector(iceSelector.selectAll);

  useEffect(()=>{
    dispatch(getIces());
  }, [dispatch]);

  return (
    <Category 
      title='Ice Coffee'
      data={ice}
    />
  )
}

export default IceCoffee;