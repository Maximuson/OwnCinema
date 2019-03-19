import React from 'react';
import s from './ListBrone.module.css';
import { broneManyPlaces } from '../../../redux/state';



const ListBrone = (props)=>{

function brone(){
    broneManyPlaces(props.places.brone)
}

    let broneItem = props.places.brone.map( (e) => {
        return (
            <li>{e}</li>
        )
    })
    return(
    <div className={s.wrapper}>
    <ul>
       { broneItem}
    </ul> 
    <button onClick={brone}>Забронировать</button>
    </div>
    )
    
}

export default ListBrone