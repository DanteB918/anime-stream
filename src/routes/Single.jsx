import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Single.css';
import {
    useParams
  } from "react-router-dom";

function Single() {

    const id = useParams().id;

    const [AllData, setData] = useState('Loading...');

    const getData = async () => {
        // JavaScript to fetch and display anime data from the Gogoanime API
        
         const apiUrl = `https://api.consumet.org/anime/gogoanime/info/${id}`; 
         const response = await fetch(apiUrl);
         if (!response.ok) {
            throw new Error("Something went wrong");
          }
         return response.json();
    }

    useEffect(function (){
        getData()
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching anime data:', error);
            });
    }, [])

  return (
    <div className='anime-single'>
        <div className='row mb-4'>
            <div className='col-md-6'>
                <img src={AllData.image} alt={AllData.title} className='w-100'/>
            </div>
            <div className='col-md-6' style={{textAlign: 'left'}}>
                <span className='title'>{AllData.title}</span> <br />
                <span className='alt-title'>Alt. Name: {AllData.otherName}</span><br />
                {AllData.subOrDub}<br />
                <div className="genres mb-2">
                    Genres:
                    {Array.isArray(AllData.genres) ? AllData.genres.map((genre) => {
                        return( <span className="inner-genre">{' ' + genre}</span>)
                    }) : ''}
                </div>
                {AllData.description}<br /><br />
                Type: {AllData.type}<br />
                Released: {AllData.releaseDate}<br />
                Status: {AllData.status}<br />
                {AllData.totalEpisodes} {AllData.totalEpisodes > 1 ? 'Episodes' : 'Episode' }
            </div>
        </div>
        {/* <div className='watch-gogo'>
            <a href={AllData.url}>
                Watch on GoGoAnime now!
            </a>
        </div> */}
        Epsiodes: <br />
        <div className='episode-list'>
            {Array.isArray(AllData.episodes) ? AllData.episodes.map((episode) => {
                return(<a href={episode.url} className='ep' target="_blank">{episode.number}</a>)
            }) : ''}
        </div>
        

    </div>
  );
}

export default Single;
