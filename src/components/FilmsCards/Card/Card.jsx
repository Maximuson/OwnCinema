import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Card.module.css';
import { changeFilm } from '../../../redux/state';




const Card = (props) => {

    /*
    * Функция подставляет все места фильма в глобальный state.places
    * при изменении глобального places изменяется places конкретного фильма
    */
    // function changeFilm1() {
    //     props.state.places = props.film.places;
    //     console.log(props.state.places)
    // }
   const changeFilm1 = () =>{
       let places = props.film.places
        changeFilm(places)
    }
    return (

        <div className={s.wrapper}>
            <img className={s.img} />
            <NavLink  className={s.title} to={`/chosePlace`}>
                <strong onClick={changeFilm1}>
                    {props.film.name}
                </strong> </NavLink>
            <div className={s.time}>
                <p>{props.film.time}</p>
            </div>
        </div>

    )
}

export default Card;