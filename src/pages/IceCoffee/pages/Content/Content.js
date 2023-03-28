import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getIces, iceSelector } from '../../../../features/ice/iceSlice';
import { ProductCard } from '../../../Home/components'

function Content() {
    const dispatch = useDispatch();
    const hot = useSelector(iceSelector.selectAll);

    useEffect(()=>{
        dispatch(getIces());
      }, [dispatch]);

    return (
        <Row>
            {hot.map(item=>(
                <Col lg={3} md={3} sm={4} xs={6} key={item.id} className='my-3 f-card'>
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
    )
}

export default Content