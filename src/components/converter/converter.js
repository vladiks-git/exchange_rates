import React, {useEffect, useState} from 'react';
import Axios from "axios";
import style from './converter.module.css'

const Converter = () => {

    const [rates, setRates] = useState([])
    const [curse, setCurse] = useState(1)
    const [rub, setRub] = useState()
    const [res, setRes] = useState()


    useEffect(() => {
        const fetchRates = async () => {
            const response = await Axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            const data = response.data
            for(let key in data.Valute){
                setRates(prevState => {
                    return [...prevState,data.Valute[key]]
                })
            }

        }
        fetchRates()
    }, [])


    const onChangeHandler = (value) => {
        setRub(value)
    }

    const renderOptions = () => {
        return rates.map((item, index) => {
            return(
                <option key={index}>
                    {item.Name}
                </option>
            )
        })
    }

    const onSelectHandler = value => {
        let res = rates.filter(i => i.Name === value)
        let curse = res[0].Value
        setCurse(curse)
    }

    const doResult = () => {
        const r = curse * rub
        setRes(r)
    }


    return (
        <div>
            <input onChange={event => onChangeHandler(event.target.value)} min={1} type={'number'} placeholder={'Введите сумму'}/>
            <select onChange={event => onSelectHandler(event.target.value)}>
                {rates? renderOptions() : null}
            </select>
            <button onClick={doResult}>Конвертировать</button>
            <hr/>
            {res ? res : <span>Для отображения результата введите корректные данные</span>}
        </div>
    );
};

export default Converter;