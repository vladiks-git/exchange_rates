import React from 'react';
import style from './rate.module.css'

const Rate = ({name, price, code}) => {
    return (
        <div className={style.rate}>
            <div className={style.code}>{code}</div>
            <div className={style.name}>{name}</div>
            <div className={style.price}>{price}</div>
        </div>
    );
};

export default Rate;