import React from 'react';
import PhoneDetails from '../PhoneDetails/PhoneDetails';

const Phone = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Phone Name:{props.name}</h2>
            <PhoneDetails price={props.price}></PhoneDetails>
        </div>
    );
};

export default Phone;