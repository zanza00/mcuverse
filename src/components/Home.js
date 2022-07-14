import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.scss';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};
const getRandomQuote = (movies) => {
    let line = '';
    let randMovie = null;
    let randQuote = null;
    while (line.split(' ').length <= 4 || line.substring(0,1) !== line.substring(0,1).toUpperCase()) {
        randMovie = movies[getRandomInt(movies.length)];
        randQuote = randMovie.subs[getRandomInt(randMovie.subs.length)];
        line = randQuote.sub.join(' ');
    }
    return {title: randMovie.title, line: randQuote.sub.join(' '), time: randQuote.time}
};

const Home = ({movies}) => {
    const [quote, setQuote] = useState(getRandomQuote(movies));
    const randomize = () => {setQuote(getRandomQuote(movies));};
  
    return (
      <div className="home">
        <div className="randomQuote" onClick={randomize}>
          <p>{quote.line} <i>({quote.title} {quote.time})</i> &nbsp; <FontAwesomeIcon icon={faShuffle} /> </p>
        </div>
        <div className="credits">
          Originariamente sviluppato da /u/shonnyboymushi, espanso, tradotto e adattato da timendum.<br/>
          Ultimo film aggiunto: Doctor Strange nel Multiverso della Follia.
        </div>
      </div>
    );
};

export { Home };