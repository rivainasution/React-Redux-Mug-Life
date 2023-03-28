import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Title } from '../../components';
import { Content, Sidebar } from './pages';

function HotCoffee() {
  const title = 'Hot Coffee';
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isShow, setIsShow] = useState(false);

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

  return (
    <Container>
      <Title title={title}  />
      {isLargeScreen ? 
        <div>
          <div className='d-flex justify-content-between my-2'>
            <span className='f-heading f-heading3'>{title}</span>
          </div>
          <Row>
            <Col lg={3} className='f-sidebar mb-5 py-3'>
              <Sidebar />
            </Col>
            <Col lg={9}>
              <Content />
            </Col>
          </Row>
        </div>
      : 
        <div>
          <div className='d-flex justify-content-between align-items-center my-2'>
            <span className='f-heading f-heading3'>{title}</span>
            <FontAwesomeIcon icon={faFilter} size='lg' onClick={()=>setIsShow(!isShow)} className='f-button' />
          </div>
          {isShow && <Sidebar />}
          <Row>
            <Col lg={12}>
              <Content />
            </Col>
          </Row>
        </div>
      }
    </Container>
  )
}

export default HotCoffee;