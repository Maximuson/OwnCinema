import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import s from './FilmsCards.module.css';
import Card from './Card/Card';


const FilmsCards = (props) =>{
    let items = props.films.map(i=>{
        return <Card  film={i} />
    })
    return(
        <div className={s.wrapper}>
           { items}

        </div>
    )
}

export default FilmsCards;