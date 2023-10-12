
import { Link } from "react-router-dom";
function AnimeLoop(props) {
    return (
        <div className="d-flex justify-content-center">
        <div id="animeList" style={{maxWidth: '100%'}} className="row">
            {Array.isArray(props.data) ?
            props.data.map((anime) => {
                return(
                <div className="col-6 col-lg-4 show-box">
                    <Link to={'/show/' + anime.id}>
                        <p className="title">{anime.title}</p>
                        <p class="ep">Episode: {anime.episodeNumber}</p>
                        <img src={anime.image}  class="w-100"/>
                    </Link>
                </div>
                )
            }) : props.data}
        </div>
        </div>
    );
}

export default AnimeLoop;
