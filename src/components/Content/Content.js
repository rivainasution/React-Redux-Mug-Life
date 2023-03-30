import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../Card/Card';
import { Paginations } from '..';

function Content({data, title}) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const contentHandle = (item) => {
        if (title === 'Product Pilihan'){
            return (
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
            );
        } else {
            return (
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
            )
        }
    }


    return (
        <div>
            <Row>
                {currentItems.map((item) => (
                    contentHandle(item)
                ))}
            </Row>
            <Paginations
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                currentPage={currentPage}
                onPageChange={paginate}
            />
        </div>
    );
}

export default Content;
