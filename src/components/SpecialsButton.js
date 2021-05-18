import React from 'react';

const SpecialsButton = props => (
    <button className="special" onClick={props.click}>{props.active ? "← BACK" : "SPECIALS"} </button>
)

export default SpecialsButton;