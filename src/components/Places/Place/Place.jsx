import React from 'react';
import s from '../Places.module.css';


const Place = (props) => {
    let clas;
    
//по клику на ячейку бронируем место(изменяем свойство isBrone в главном state)
    function brone(){
        console.log(props.place.placeNum)
        props.place.isBrone = true;
    }
     
    if(props.place.isBrone) {
        clas = s.brone
    }
    else{
        clas = s.listItem
    }
    return (
        <li>
            <div onClick={brone} className={clas}>
                <strong className={s.placeNum}>{props.place.placeNum}</strong>            
            </div>
        </li>
    )
}

export default Place;