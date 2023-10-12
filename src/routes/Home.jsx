import { useEffect, useRef, useState } from 'react';
// import './Home.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PageBar from '../components/PageBar';
import AnimeLoop from '../components/AnimeLoop';

function Home(props) {
    const param = useLocation();
    var [page, setPage] = useState(! isNaN(parseInt(param.pathname.replace('/', ''))) ? parseInt(param.pathname.replace('/', '')) : 1);
    const [AllData, setData] = useState('Loading...');

    const reloadData = async (num) => { // Used for changing pages
        const apiUrl = props.url + num;

        await fetch(apiUrl)
        .then(response => response.json())    
        .then(data => {
                setData(data.results);
            })
            .catch(error => {
                console.error('Error fetching anime data:', error);
            });
    }
    useEffect(function (){
        reloadData(page);
    }, []);


  return (
    <>
    <p style={{fontSize: '2em', color: 'green'}}>{props.title}</p>
    <Link to={'/' + 1} className="text-light float-start arrow" onClick={() => { //paginate left
                if (page > 1 ){
                    setPage(page - 1);
                }
                reloadData(page - 1);
            }}><i class="fa-solid fa-circle-chevron-left"></i> Previous</Link>
            <Link to={'/' + (page + 1)} className="text-light float-end arrow"  onClick={() => { //Paginate right
                setPage(page + 1);
                reloadData(page + 1);
            }}>Next <i class="fa-solid fa-circle-chevron-right"></i></Link>
            <PageBar page={page} />
            <AnimeLoop data={AllData} />
    </>
  );
}

export default Home;
