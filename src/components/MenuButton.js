import React from 'react';

const MenuButton = props => (
    <button className="menu" onClick={props.click}>{props.active ? "← BACK" : "MENU"}</button>
)

export default MenuButton;