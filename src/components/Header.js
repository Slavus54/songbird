import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Nav className="nav">
            <Nav.Item>
            <Nav.Link className="href"><Link to={{pathname: '/'}}>Forest birds</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="href"><Link to={{pathname: '/tits'}}>Tits birds</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="href"><Link to={{pathname: '/ocean'}}>Ocean birds</Link></Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
    )
}

export default Header