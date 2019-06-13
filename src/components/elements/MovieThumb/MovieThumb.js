import React from 'react';
import './MovieThumb.css';
import { Link } from 'react-router-dom';

const MovieThumb = (props) =>{
    return(
    <div className='rmdb-moviethumb'>
        { props.clickable ? 
         <Link to={{pathname:`/${props.movieId}`,movieName:`${props.movieName}`}}> {/* we use curly braces for JS and double curly braces becoz object inside that Js */}
            <img src={props.image} alt='MovieThumb' /> 
         </Link>
         :
         <img src={props.image} alt='MovieThumb' />
        }

    </div>
    )}

export default MovieThumb;
