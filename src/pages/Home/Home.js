import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getHots, hotSelector } from '../../features/hot/hotSlice';
import { Carousels, Kategori, ProductCard } from './components';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';
import banner5 from '../../assets/banner5.jpg';
import banner6 from '../../assets/banner6.jpg';
import diskon1 from '../../assets/diskon1.jpg';
import diskon2 from '../../assets/diskon2.jpg';
import diskon3 from '../../assets/diskon3.jpg';

const Home = () => {
    const dispatch = useDispatch();
    const hot = useSelector(hotSelector.selectAll);

    useEffect(()=>{
        dispatch(getHots());
    }, [dispatch]);

    const banner = [
        {
            id: 0,
            value: banner1
        },
        {
            id: 1,
            value: banner2
        },
        {
            id: 2,
            value: banner3
        },
        {
            id: 3,
            value: banner4
        },
        {
            id: 4,
            value: banner5
        },
        {
            id: 5,
            value: banner6
        }
    ]

    const diskon = [
        {
            id: 0,
            value: diskon1
        },
        {
            id: 1,
            value: diskon2
        },
        {
            id: 2,
            value: diskon3
        }
    ]

    return (
        <Container>
            <div className='my-3 p-2'>
                <Carousels data={banner} />
            </div>
            <div className='d-flex flex-lg-row flex-column my-3'>
                <div className='col-lg-4 col-12 my-1 p-2'>
                    <span className='f-heading f-heading3'>Kategori</span>
                    <Kategori />
                </div>
                <div className='col-lg-8 col-12 my-1 p-2 '>
                    <span className='f-heading f-heading3'>Diskon</span>
                    <Carousels data={diskon} />
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
