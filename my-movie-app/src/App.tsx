import React, {useState} from 'react';
import "./App.css";
import MovieList from './components/MovieList';
import Footer from './components/footer';


const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "FIFA 25",
      genre: "Deporte",
      image: "FC25_.jpg",
    },
    {
      id: 2,
      title: "THE LAST OF US",
      genre: "Terror",
      image: "the-last-of-us.jpg",
    },
    {
      id: 3,
      title: "MAFIA 3",
      genre: "Action",
      image: "mafia3-.jpg",
    },
    {
      id: 4,
      title: "UFC",
      genre: "Deporte",
      image: "ea-sports-ufc-3-xbox-one.jpg",

    },
    {
      id: 5,
      title: "UFL",
      genre: "Deporte",
      image: "ufl.jpg",

    },     
    {
      id: 6,
      title: "RESIDEN EVIL 2",
      genre: "Terror",
      image: "resident-evil-2-remake.jpg",

    },     
    {
      id: 7,
      title: "UNCHARTERD 4",
      genre: "Accion",
      image: "uncharterd_4.jpg",

    },     
    {
      id: 8,
      title: "HITMAN",
      genre: "Accion",
      image: "hitman.jpg",

    },     
    {
      id: 9,
      title: "FORNITE",
      genre: "Accion",
      image: "fornite.jpg",

    },     
    {
      id: 10,
      title: "CALL OF DUTY",
      genre: "Accion",
      image: "call_of_duty.jpg",

    },     
    {
      id: 11,
      title: "ASTROBOT",
      genre: "Accion",
      image: "astrobot.jpg",

    },     
    {
      id: 12,
      title: "DRAGON BALL Z",
      genre: "Accion",
      image: "dragon_ball.jpg",

    },        

  ]);
  return(
    <div className="app-container">
      <h1 className="app-title">🎬 Movie List</h1>
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
};

export default App;