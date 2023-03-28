import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'

function Title(props) {
    const title = props.title;

    return (
        <div className='d-flex flex-row justify-content-end align-items-center my-3'>
            <Link to='/' className='f-link f-kategori'>
                <FontAwesomeIcon icon={faHome}  />
            </Link>
            <FontAwesomeIcon icon={faAngleRight} className='mx-3' />
            <span className='f-heading f-heading5'>{title}</span>
        </div>
    )
}

export default Title