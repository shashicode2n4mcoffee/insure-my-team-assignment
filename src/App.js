import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import ItemList from './Components/ItemList';
import Paginate from './Components/Paginate';
import SearchBar from './Components/SearchBar';

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);

  const fetch = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setItems(res.data);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    const filtered = items.filter((data) => {
      if (search === '') {
        return data;
      } else if (data.title.toLowerCase().includes(search.toLowerCase())) {
        return data;
      }
    });
    setFilter(filtered);
  }, [items, search]);

  // useEffect(() => {
  //   let arr = new Array(filter.length / 4);

  //   for (let i = 1; i <= arr.length; i++) {
  //     arr.push(i);
  //   }
  //   console.log('Array', arr);
  // }, [filter]);

  return (
    <div className='App'>
      <div className='title'>
        <h1>Insure My Team Assignment</h1>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <h3>Contents</h3>
      <ItemList itemList={filter} searchValue={search} />
    </div>
  );
}

export default App;
