import "./App.css";
import React, { useEffect, useState }  from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./books/search.jsx"
import Home from "./home"
import { getAll, update } from "./BooksAPI"

function App() {
  const [listData, setListData] = useState([]);
  const handleChangeSelect = (value, id) => {
    updateData(value, id)
  }

  async function fetchData() {
    const listBook =  await getAll();
    setListData(listBook);
  }

  async function updateData(value, id) {
   await  update({id}, value)
   await fetchData();
  }

  useEffect(()=> {
    fetchData();
    
  }, [])

  return (
    <div className="app">
       <Routes>
        <Route exact path="/" element={(
        <Home listData={listData} handleChangeSelect={handleChangeSelect} fetchData={fetchData}/>
      )}>
        </Route>
        <Route path="/search" element={ <Search fetchData={fetchData} listData={listData} updateData={updateData}/>}>
           
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
