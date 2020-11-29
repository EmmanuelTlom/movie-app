import React from 'react';



const IMG_API = 'https://image.tmdb.org/t/p/w500';


const setVote = vote => {
    if(vote >= 8){
        return 'green';
    }else if(vote >= 6){
        return 'orange';
    }else{
        return 'red';
    }
} 

const movie = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className="movies">
            <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=740&q=80'} alt={title}/>

            <div className="info">
                <h3>{title}</h3>
                <p className={`tag ${setVote(vote_average)}`}>{vote_average}</p>
            </div>

            <div className="over">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default movie
