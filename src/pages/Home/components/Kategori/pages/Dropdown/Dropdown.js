import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dropdowns({icons, values, item}) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Dropdown
            onMouseLeave={() => setShowDropdown(false)}
            onMouseOver={() => setShowDropdown(true)}
            className='p-2'
        >
            <Dropdown.Toggle 
                style={{ 
                    border: 'none', 
                    background: 'none', 
                    outline: 'none'
                }}  
                className='shadow-sm cards my-2'      
            >
                <FontAwesomeIcon icon={icons} size='2x' className='p-2 f-kategori' />
                <h3 className='f-heading5 f-kategori-text text-center'>{values}</h3>
            </Dropdown.Toggle>
            <Dropdown.Menu show={showDropdown}>
                {item.map(menu=>(
                    <Dropdown.Item key={menu.id}>
                        <Link to={menu.link} className='f-dropdown'>{menu.title}</Link>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Dropdowns