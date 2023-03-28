import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function SearchForm({ onClose }) {
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for: ${searchText}`);
        // TODO: Add logic to handle search
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleFormSubmit(event);
        }
    };

    const handleSearchClose = (event) => {
        onClose();
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <div className="position-relative">
                <Form.Control
                    type='text'
                    placeholder='Search'
                    value={searchText}
                    onChange={handleSearchTextChange}
                    onKeyPress={handleKeyPress}
                />
                {onClose && 
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        className='f-brand position-absolute end-0 mx-2 top-50 translate-middle-y' 
                        onClick={handleSearchClose} 
                    />
                }
            </div>
        </Form>
    );
}
