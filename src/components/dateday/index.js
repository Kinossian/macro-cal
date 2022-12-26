import React from 'react';
import dateFormater from '../../utils/time/date-formateur';
import timeToday from '../../utils/time/today';
import style from "./style.module.css";

const DateDay = () => {

    return (
        <>
            <p className={style.date}>{dateFormater(timeToday())}</p>
        </>
    );
};

export default DateDay;