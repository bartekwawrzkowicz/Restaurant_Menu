import React from 'react';
import './Menu.css';

const Menu = props => (
    <>
        <li><strong>{props.name}</strong>
            <br /><strong>{props.price}</strong> PLN
            <br />✯
    </li>
        <br />
    </>
)

export default Menu;