import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Detail } from './pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ data, originalPrice, salePrice, rating, discount, sale }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const ratingHandle = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={solidStar} className='text-warning' />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={halfStar} className='text-warning' />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon icon={solidStar} className='text-secondary' />);
    }

    return stars;
  }

  return (
    <div>
      <Card className="shadow p-2" onClick={handleShow}>
        <div className="position-relative">
          <Card.Img variant="top" src={data.image} className="zoomable-img f-card-image" />
          <div className="position-absolute top-0 end-0 p-2 bg-danger text-white rounded-start">{discount}% OFF</div>
        </div>
          <div className='d-flex flex-column mt-3'>
            <span className='f-heading f-heading4 mb-2'>{data.title}</span>
            <div className='d-flex justify-content-between'>
              <span className='f-heading f-heading6'><del>${originalPrice.toFixed(2)}</del></span>
              <span className='f-heading f-heading5'>${salePrice.toFixed(2)}</span>
            </div>
            <div className=''>
                <span className='f-heading f-heading6'>
                  {ratingHandle(rating)}
                </span>
                <span className='f-heading6 mx-1'>
                  {sale} terjual
                </span>
            </div>
          </div>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Detail
          data={data} 
          show={show}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );
};

export default ProductCard;
