import React,{useState, useEffect}  from 'react';

import './App.css';
import MovieRow from './component/RowMovie';

import axios from 'axios';
function App() {
  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [FilteredMovie, setFilteredMovie] = useState([]); 

  const API_KEY = 'f5a78298d04f27ec5a6aa1757f23260c'  

  function handlerSearch (e) {
    console.log(setSearch(e.target.value))
  } 
      
  useEffect( () => {
    axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`)
    .then(response => {
      setData(response.data.results);
    })
    .catch(err => {
      console.log(err)
    })
  }, [search]);

  useEffect(() => {
    setFilteredMovie(
      data.filter(movie =>{
        return movie.title.toLowerCase().includes(search.toLowerCase()) 
      })
    )
  }, [search, data])
  
  

  return(
 <div>
   <table className="titleBar">
     <tbody>
       <tr>
         <td>
           <img alt="app icon" width="140" src="fleet-logo-300.png"/>
         </td>
       </tr>
     </tbody>
   </table>

   <input style={{
     fontSize:24,
     display:'block',
     width: "99%",
     paddingTop: 8,
     paddingBottom: 8,
     paddingLeft: 16
     }} onChange={handlerSearch}  placeholder="Search your movies"/>

   <div>
   {FilteredMovie.map((movie, id) => <MovieRow key={id} movie={movie}/>)}
   </div>
    </div>
  );



}
export default App;
