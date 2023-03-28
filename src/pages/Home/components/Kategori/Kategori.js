import React from 'react';
import { 
    faBreadSlice, 
    faCalendar, 
    faCocktail, 
    faCoffee, 
    faCoins, 
    faLeaf, 
    faMugHot, 
    faWineGlassAlt 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Kategori = () => {
    const kategori = [
        {
            id: 0,
            value: 'Kategori',
            icon: faCoffee
        },
        {
            id: 1,
            value: 'Rasa',
            icon: faCocktail
        },{
            id: 2,
            value: 'Teh',
            icon: faLeaf
        },{
            id: 3,
            value: 'Coldrink',
            icon: faMugHot
        },{
            id: 4,
            value: 'Makanan',
            icon: faBreadSlice
        },{
            id: 5,
            value: 'Ukuran',
            icon: faWineGlassAlt
        },{
            id: 6,
            value: 'Harga',
            icon: faCoins
        },
        {
            id: 7,
            value: 'Event',
            icon: faCalendar
        }
    ]

    return (
        <Row className='bg-light mx-0 my-2  p-2 rounded'>
            {kategori.map(menu=>(
                <Col lg={3} md={3} sm={3} xs={3} key={menu.id}>
                    <Link to='/' className='d-flex flex-column align-items-center justify-content-center shadow-sm cards my-2 f-kategori'>
                        <FontAwesomeIcon icon={menu.icon} size='2x' className='p-2' />
                        <h3 className='f-heading5 f-kategori-text text-center'>{menu.value}</h3>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}

export default Kategori;