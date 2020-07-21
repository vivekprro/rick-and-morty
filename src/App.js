import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios';

import './App.css';
import EpisodeLists from './EpisodeLists'

function App() {

  const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode/?name=')
  const [lists, setLists] = useState([]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(true);


  useEffect(() => {

  })

    useEffect(() => {
      axios.get(`${url}${search}`)
      .then(response => {
          setLists(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
    }, [url, search]);

    const onSearchHandler = (e) => {
      setSearch(e.target.value);
      setShow(false);
    }

    console.log(search);

    const previousPage = () => {
      setUrl('https://rickandmortyapi.com/api/episode/?page=1');
    }

    const nextPage = () => {
      setUrl('https://rickandmortyapi.com/api/episode/?page=2');
    }



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
      {show ?
        <div className="buttons">
          <Button onClick={previousPage}>Previous</Button>
          <Button onClick={nextPage}>Next</Button>
        </div> : null
      }
    </div>
  );
}

export default App;
