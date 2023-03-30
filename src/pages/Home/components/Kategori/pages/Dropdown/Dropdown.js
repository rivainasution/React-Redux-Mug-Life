import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Dropdowns({icons, values, item}) {
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownHandle = (link) => {
        return console.log(link)
    }

    const navigateTo = (link) => {
        window.location.href = link;
    }
      

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
                        <span className='f-dropdown' onClick={() => navigateTo(menu.link)}>
                            {menu.title}
                        </span>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Dropdowns