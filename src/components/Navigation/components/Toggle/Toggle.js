import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Dropdown, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logos.png';

export default function Toggle () {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className='d-flex flex-row align-items-center justify-content-between'>
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
                    
                >
                    <FontAwesomeIcon icon={faBars} />
                </Dropdown.Toggle>
                <Dropdown.Menu show={showDropdown}>
                    <Dropdown.Item>
                        <Link to='/' className='f-dropdown'>Home</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to='/' className='f-dropdown'>Register</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to='/' className='f-dropdown' >Login</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Navbar.Brand>
                <Link to='/' className='f-link'>
                    <Image 
                        src={logo} 
                        alt='Mug Life' 
                        width='30' 
                    />
                    <span className="mx-2 f-brand">Mug Life</span>
                </Link>
            </Navbar.Brand>
        </div>
    );
}