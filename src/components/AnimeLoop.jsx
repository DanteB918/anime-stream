
import { Link } from "react-router-dom";
function AnimeLoop(props) {
    console.log(props.data);
    return (
        <div id="animeList" className="row">
            {Array.isArray(props.data) ?
            props.data.map((anime) => {
                return(
                <div className="col-md-6 col-lg-4 show-box">
                    <Link to={'/show/' + anime.id}>
                        <h2>{anime.title}</h2>
                        <p class="ep">Episode: {anime.episodeNumber}</p>
                        <img src={anime.image}  class="w-100"/>
                        <p>Rating: {anime.rating}</p>
                    </Link>
                </div>
                )
            }) : props.data}
        </div>
    );
}

export default AnimeLoop;
