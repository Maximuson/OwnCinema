import React from 'react';
import './Places.css';
import Place from './Place/Place';



const Places = (props) => {
    
 
    let elements = props.places.places.map(e => {      
       return <Place place={e}  />
    });
 
    return (
        <div>
        
            <a className='list-item screen' href=''>
                <strong>Films</strong>
            </a>
        
       
            <ul>
                {elements}
            </ul>
        </div>
    )

}
export default Places;