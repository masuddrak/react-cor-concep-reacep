import React from 'react';
import { add, multiply } from '../../utilitis/math';
import PhoneDetails from '../PhoneDetails/PhoneDetails';

const Phone = (props) => {
    const totala=add(20,30)
    const multiplys=multiply(20,30)
    return (
        <div>
            <h2>Phone Name:{props.name}</h2>
            <PhoneDetails price={props.price}></PhoneDetails>
            <h2>TOtal:{totala}</h2>
            <h2>Multply:{multiplys}</h2>
        </div>
    );
};

export default Phone;