import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../components';
import { getHots, hotSelector } from '../../features/hot/hotSlice';
import { getIces, iceSelector } from '../../features/ice/iceSlice';

function Categorys() {
  const dispatch = useDispatch();
  const hot = useSelector(hotSelector.selectAll);
  const ice = useSelector(iceSelector.selectAll);

  useEffect(() => {
    dispatch(getHots());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIces());
  }, [dispatch]);

  const kategori = hot.concat(ice);

  return (
    <Category 
        title='Kategori'
        data={kategori}
    />
  );
}

export default Categorys;
