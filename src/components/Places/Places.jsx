import React from 'react';
import s from './Places.module.css';
import Place from './Place/Place';
import ListBrone from './ListBrone/ListBrone';



const Places = (props) => {
    
 
 let elements = props.places.places.map(e => {      
    return <Place place={e}  />
 });

    // let elements = props.places.map(e => {  
          
    //     return <Place place={e}  />
    //  });
 
    return (
        <div className={s.wrapper}>
            <a className={[s.listItem, s.screen].join(' ') } href=''>
                <strong>Films</strong>
            </a>

            <ul className={s.ulPlaces}>
                {elements}
            </ul>
            <ListBrone places={props.places}/>
        </div>
    )

}
export default Places;