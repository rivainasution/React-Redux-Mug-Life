import React from 'react'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Category } from '../../assets/data'

function Sidebar() {

    const listHandle = (menu) => {
        return menu.map(items=>(
          <ul key={items.id}>
            <li className='f-list'>
              <Link to={`/${items.link}`} className='f-heading f-heading6 f-link'>
                {items.title}
              </Link>
            </li>
          </ul>
        ))
    }

    return (
        <div>
            <div className='f-sidebar-primary p-2'>
                <span className='f-heading f-heading4'>Kategori</span>
            </div>
            <div className='py-2'>
                <Accordion defaultActiveKey={0} flush>
                    {Category.map((item) => (
                    <Accordion.Item eventKey={item.id} key={item.id}>
                        <Accordion.Header>{item.value}</Accordion.Header>
                        <Accordion.Body>
                        {listHandle(item.item)}
                        </Accordion.Body>
                    </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Sidebar