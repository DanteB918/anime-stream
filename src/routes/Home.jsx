import { useEffect, useState } from 'react';
// import './Home.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PageBar from '../components/PageBar';
import AnimeLoop from '../components/AnimeLoop';

function Home(props) {
    const param = useLocation();
    var [page, setPage] = useState(param.page ? param.page : 2);
    const [AllData, setData] = useState('Loading...');

    const reloadData = async (num) => { // Used for changing pages
        // const apiUrl = props.url + '?page=' + num;
        const apiUrl = props.url.includes('page') ? props.url + num : props.url + '?page=' + num;

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
        reloadData();
    }, []);


  return (
    <>
    <p style={{fontSize: '2em', color: 'green'}}>{props.title}</p>
    <Link to={'/' + page} className="text-light float-start arrow" onClick={() => { //paginate left
                var intPage = parseInt(page); 
                if (intPage > 1 ){
                    setPage(intPage -= 1);
                }
                reloadData(page);
            }}><i class="fa-solid fa-circle-chevron-left"></i></Link>
            <Link to={'/' + page} className="text-light float-end arrow"  onClick={() => { //Paginate right
                var intPage = parseInt(page); 
                setPage(intPage += 1);
                console.log(page);
                reloadData(page);
            }}><i class="fa-solid fa-circle-chevron-right"></i></Link>
            <PageBar page={page} />
            <AnimeLoop data={AllData} />
    </>
  );
}

export default Home;
