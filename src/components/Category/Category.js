import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CategoryContent, CategorySidebar, Title } from '..';

function Categorys({title, data }) {
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
              <CategorySidebar />
            </Col>
            <Col lg={9}>
              <CategoryContent data={data} />
            </Col>
          </Row>
        </div>
      : 
        <div>
          <div className='d-flex justify-content-between align-items-center my-2'>
            <span className='f-heading f-heading3'>{title}</span>
            <FontAwesomeIcon icon={faFilter} size='lg' onClick={()=>setIsShow(!isShow)} className='f-button' />
          </div>
          {isShow && <CategorySidebar />}
          <Row>
            <Col lg={12}>
              <CategoryContent data={data} />
            </Col>
          </Row>
        </div>
      }
    </Container>
  );
}

export default Categorys;
