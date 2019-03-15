import React from 'react';
import '../Places.css';


const Place = (props) => {
    let clas;

    function infoMe(){
        alert(props.place.placeNum)
    }
     
    if(props.place.isBrone) {
        clas = 'brone'
    }
    else{
        clas = 'list-item'
    }
    return (
        <li>
            <div onClick={infoMe} className={clas}>
                <strong className='placeNum'>{props.place.placeNum}</strong>            
            </div>
        </li>
    )
}

export default Place;