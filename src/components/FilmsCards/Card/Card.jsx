import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Card.module.css';
import Places from '../../Places/Places';
import state from '../../../redux/state';


const Card = (props) => {
    function getPlaces(){
        state.places = props.film.places;
        console.log(state.places)
    }
    return (
       
        <div className={s.wrapper}>     
            <img  className={s.img} />
            {/* <NavLink to={`/films/${props.film.name}`}><strong className={s.title}>{props.film.name}</strong> </NavLink> */}
            <NavLink to={`/chosePlace`}><strong onClick={getPlaces} className={s.title}>{props.film.name}</strong> </NavLink>
            <div  className="prices">
                <p>{props.film.time}</p>
            </div>
            
            {/* <Places places = {props.film.places} /> */}
            
        </div>
       
    )
}

export default Card;