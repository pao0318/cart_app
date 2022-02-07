
import React from "react";
import { Link } from "react-router-dom";
import { CartState } from '../context/Valcontext';

import {
    Badge,
    Navbar,
    Dropdown,
    Container,
} from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'

function Header() {
    const { data, setData } = CartState()
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Shopping Cart</Link>
                    </Navbar.Brand>

                    <Dropdown >
                        <Dropdown.Toggle variant="success" >
                            <FaShoppingCart color='white' fontSize="25px" />
                            Orders

                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 100 }}>
                            {data.products && data.products.map((item, index) => (

                                <div key={index}>
                                    <Dropdown.Item href="#/action-1">{item.title} {item.currency} {item.price} </Dropdown.Item>
                                    <span></span>
                                </div>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

