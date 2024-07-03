import React from 'react';
import Info from './Info';

function Card() {
    const monthString = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }

    const date =new Date();
    const year = date.getFullYear();
    const month = monthString[date.getMonth()];
    const day = date.getDate();    

    return (
        <>
            <div className='info'>
                <Info />
                <h4 id='Date'>{month} {day} {year}</h4>            
            </div>

        </>
    )
}

export default Card;