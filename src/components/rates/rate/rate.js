import React from 'react';
import style from './rate.module.css'

const Rate = ({name, price}) => {
    return (
        <div className={style.rate}>
            <div className={style.price}>{price}</div>
            <div className={style.name}>{name}</div>
        </div>
    );
};

export default Rate;