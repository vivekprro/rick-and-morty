import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios';

import './App.css';
import EpisodeLists from './EpisodeLists'

function App() {
  
  const URL = 'https://rickandmortyapi.com/api/episode/';

  const [url, setUrl] = useState(URL);
  const [info, setInfo] = useState({});
  const [lists, setLists] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(url)
    .then(response => {
        setLists(response.data.results);
        setInfo(response.data.info);
    })
    .catch(error => {
      console.log(error);
    })

  }, [url, search]);

  const onSearchHandler = (e) => {
    setSearch(e.target.value);
    setUrl(`${URL}?name=${e.target.value}`);
  }

  const previousPage = () => {
    setUrl(info.prev)
  };

  const nextPage = () => {
    setUrl(info.next)
  };

  return (
    <div className="App">
      <h1>Rick and Morty Episodes</h1>
      <form>
        <input
          type="text"
          value={search}
          placeholder="Seach Episodes By name"
          onChange={onSearchHandler} />
      </form>
      <EpisodeLists lists={lists} />
      <div className="buttons">
        <Button onClick={previousPage}>Previous</Button>
        <Button onClick={nextPage}>Next</Button>
      </div> 
    </div>
  );
}

export default App;
