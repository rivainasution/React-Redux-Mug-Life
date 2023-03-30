import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Detail = ({data, show, handleClose}) => {
  const ingredients = data.ingredients;

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className='d-flex flex-column'>
            <span className='f-heading f-heading3 mx-1'>
              {data.title}
            </span>
            <div>
              {ingredients.map(item=>(
                <span className='f-heading f-heading5' key={item}>
                  <Badge bg='secondary' className='mx-1'>{item}</Badge>
                </span>
              ))}
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={data.image} alt={data.title} className="f-banner rounded mb-3" />
        <p className='p-1'>{data.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to='/' className="mx-2 f-button f-button-login p-2">Order</Link>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

      </Modal.Footer>
    </>
  );
};

export default Detail;
