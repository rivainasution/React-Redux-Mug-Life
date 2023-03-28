import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Category } from '../../../../assets/data';
import { Dropdowns } from './pages';

const Kategori = () => {

    return (
        <Row className='bg-light mx-0 my-2  p-2 rounded'>
            {Category.map(menu=>(
                <Col lg={3} md={3} sm={3} xs={3} key={menu.id}>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <Dropdowns 
                            icons={menu.icon}
                            values={menu.value}
                            item={menu.item}
                        />
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default Kategori;