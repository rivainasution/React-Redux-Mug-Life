import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getHots, hotSelector } from '../../features/hot/hotSlice';
import { Carousels, Kategori } from './components';
import { Banner, Diskon } from '../../assets/img';
import { CategoryContent } from '../../components';

const Home = () => {
    const dispatch = useDispatch();
    const hot = useSelector(hotSelector.selectAll);

    useEffect(()=>{
        dispatch(getHots());
    }, [dispatch]);

    return (
        <Container>
            <div className='my-3 p-2'>
                <Carousels data={Banner} />
            </div>
            <div className='d-flex flex-lg-row flex-column my-3'>
                <div className='col-lg-4 col-12 my-1 p-2'>
                    <span className='f-heading f-heading3'>Kategori</span>
                    <Kategori />
                </div>
                <div className='col-lg-8 col-12 my-1 mx-3 p-2 '>
                    <span className='f-heading f-heading3'>Diskon</span>
                    <Carousels data={Diskon} />
                </div>
            </div>

            <div className='my-3 p-2'>
                <span className='f-heading f-heading3'>Produk Pilihan</span>
                <CategoryContent data={hot} title='Product Pilihan' />
            </div>
        </Container>
    )
}

export default Home;
