import React from 'react';

import s from './FilmsCards.module.css';
import Card from './Card/Card';


const FilmsCards = (props) =>{
    let items = props.films.map(i=>{
        return <Card state={props.state} film={i} />
    })
    return(
        <div className={s.wrapper}>
           { items}

        </div>
    )
}

export default FilmsCards;