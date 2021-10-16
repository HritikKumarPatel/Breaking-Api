import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from 'axios'
import Grid from "./components/Grid";
import Search from "./components/Search";


function App() {

  const [items, setitems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState("");


  useEffect(()=>{
    const fetchItems = async()=>{
      const a = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
     
      setitems(a.data);
      setisLoading(false);

    }
    fetchItems();
  }, [query])

  return <div className="container">
    <Header/>
    <Search getQuery = {(q)=>{
      setQuery(q);
    }}/>
    <Grid items = {items} isLoading = {isLoading} />
    </div>;
}
export default App;
