import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getHots, hotSelector } from '../../features/hot/hotSlice';
import { Carousels, Kategori, ProductCard } from './components';
import { Banner, Diskon } from '../../assets/img';

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
                <div className='col-lg-8 col-12 my-1 p-2 '>
                    <span className='f-heading f-heading3'>Diskon</span>
                    <Carousels data={Diskon} />
                </div>
            </div>

            <div className='my-3 p-2'>
                <span className='f-heading f-heading3'>Produk Pilihan</span>
            
                <Row>
                    {hot.map(item=>(
                        <Col lg={2} md={3} sm={4} xs={6} key={item.id} className='my-3 f-card'>
                            <ProductCard
                                data={item}
                                originalPrice={50}
                                salePrice={30}
                                rating={4.3}
                                discount={40}
                                sale={50}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default Home;
