import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Login, SearchForm, Toggle } from './components';

export default function Navigation() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [showSearchForm, setShowSearchForm] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);

        handleResize(); // inisialisasi nilai pada saat komponen pertama kali dimuat

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearchClose = () => {
        setShowSearchForm(false);
    };

    const toggleSearchForm = () => {
        setShowSearchForm(true);
    };

    return (
        <div className='f-background-color'>
            <Container>
                <Row className='align-items-center'>
                {isLargeScreen ?
                    <Row className='align-items-center'>
                        <Col md={2}>
                            <Toggle />
                        </Col>
                        <Col md={7}>
                            <SearchForm />
                        </Col>
                        <Col md={3}>
                            <Login />
                        </Col>
                    </Row> :
                    <div className='d-flex align-items-center justify-content-between'>
                        <Toggle />
                        {showSearchForm ? (
                            <SearchForm onClose={handleSearchClose} />
                        ) : (
                            <FontAwesomeIcon
                                icon={faSearch}
                                className='f-brand'
                                onClick={toggleSearchForm}
                            />
                        )}
                    </div>
                }
                </Row>
                
                <style type="text/css">
                    {`
                        .dropdown-toggle::after {
                            display: none;
                        }
                    `}
                </style>
            </Container>
        </div>
    );
}
