import { useEffect, useState } from 'react';
import './App.css';
import IndividualMovie from './movies/individualMovie';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';

function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timeId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
          id: 1,
          title: 'Black Adam',
          poster: 'https://jovemnerd.com.br/wp-content/uploads/2022/06/imagem_2022_06_04_124345740__o2zb82lr-760x1160.png',
        },
        {
          id: 2,
          title: 'Luca',
          poster: 'https://lumiere-a.akamaihd.net/v1/images/poster_002_ffcbf145.png',
        },
        {
          id: 3,
          title: 'O Poderoso Chefão',
          poster: 'https://imagens.lelivros.org/2014/05/Download-O-Poderoso-Chefao-Mario-Puzo-em-ePUB-mobi-e-pdf.jpg',
        }
      ],
      upcomingRealeases: [
        {
        id: 4,
        title: 'O Poderoso Chefão',
        poster: 'https://imagens.lelivros.org/2014/05/Download-O-Poderoso-Chefao-Mario-Puzo-em-ePUB-mobi-e-pdf.jpg',
      },
      {
        id: 5,
        title: 'Luca',
        poster: 'https://lumiere-a.akamaihd.net/v1/images/poster_002_ffcbf145.png',
      },
      {
        id: 6,
        title: 'Black Adam',
        poster: 'https://jovemnerd.com.br/wp-content/uploads/2022/06/imagem_2022_06_04_124345740__o2zb82lr-760x1160.png',
      }
    ]
      })
    },1000);
    return ()=>clearTimeout(timeId);
  },[])





  return (
    <div className='body'>
    <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters}/>
    <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingRealeases}/>
    </div>
  );
}

export default App;
