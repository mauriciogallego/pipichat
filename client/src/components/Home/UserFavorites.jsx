import React, {useState} from 'react';
import PropTypes from 'prop-types';


const UserFavorites = props => {

    const[favoriteItineraries=  [{city:'Buenos Aires',
    name: 'Me cago en Buenos Aires',
    user: 'El que le gusta Buenos Aires'},
    {city:'Formosa',
    name: 'NEA o Taiwan?',
    user: 'El taiwa que toma terere'}

]]=useState()
    return (
        <>
          <div>
             <h3>Your favorite Itineraries</h3> 
            {favoriteItineraries.map(item=>
            <div className="row">
            <p>{item.city}</p>
            <p>{item.name}</p>
            <p>{item.user}</p>
            </div>)}
         </div>  
        </>
    );
};

UserFavorites.propTypes = {
    
};

export default UserFavorites;