import React, {useEffect, useState} from 'react';
import style from './rates.module.css'
import Axios from 'axios'
import Rate from "./rate/rate";
import {Link} from "react-router-dom";



const Rates = () => {

    const [rates, setRates] = useState([])
    const [currentDate, setCurrentDate] = useState(null)

    useEffect(() => {
        const fetchRates = async () => {
            const response = await Axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            const data = response.data
            const date = new Date(data.Date)
            setCurrentDate(date.toString())
            for(let key in data.Valute){
                setRates(prevState => {
                    return [...prevState,data.Valute[key]]
                })
            }

        }
        fetchRates()
    }, [])

    const renderRates = () => {
        return rates.map((item, index) => {
            return(
                <Rate key={index} name={item.Name} price={item.Value} code={item.CharCode}/>
            )
        })
    }

    return (
        <div style={{width: '100%'}}>
            <Link to={'/converter'}><p className={style.link}>Конвертер</p></Link>
            <h1>Текущие курсы относительно рубля</h1>
            <span>Последнее обновление данных - {currentDate}</span>
            <div className={style.content}>
                <div style={{width: '100%'}}>
                    <div className={style.titles}>

                        <div className={style.code}>Буквенный код</div>
                        <div className={style.valute}>Валюта</div>
                        <div className={style.curse}>Курс</div>
                    </div>
                    {renderRates()}
                </div>
            </div>

        </div>
    );
};

export default Rates;