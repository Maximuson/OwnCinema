import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Card.module.css';
import Places from '../../Places/Places';
import state from '../../../redux/state';


const Card = (props) => {

    /*
    * Функция подставляет все места фильма в глобальный state.places
    * при изменении глобального places изменяется places конкретного фильма
    */
    function bookPlace() {
        state.places = props.film.places;
        console.log(state.places)
    }
    return (

        <div className={s.wrapper}>
            <img className={s.img} />
            <NavLink  className={s.title} to={`/chosePlace`}>
                <strong onClick={bookPlace}>
                    {props.film.name}
                </strong> </NavLink>
            <div className={s.time}>
                <p>{props.film.time}</p>
            </div>
        </div>

    )
}

export default Card;