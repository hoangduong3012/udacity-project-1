import "./App.css";
import React, { useEffect, useState }  from "react";
import BookShelf from "./books";
import { mockListData } from "./data";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./books/search.jsx"

function App() {
  const [listData, setListData] = useState(mockListData);
  const handleChangeSelect = (value, id) => {
    const data = listData.map(ele => {if (ele.id === id) {
      ele.status = value;
      return {...ele, status: value}
   } return ele})
    localStorage.setItem('data', JSON.stringify(data));
    setListData(data);
  }
  useEffect(()=> {
    const listHydrate = localStorage.getItem('data');
    if (listHydrate) {
      setListData(JSON.parse(listHydrate))
    }
  }, [])

  return (
    <div className="app">
       <Routes>
        <Route exact path="/" element={(
        <div className="list-books">
          <Link to="/search">Search book</Link>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            
            {listData && listData.length > 0  && <div>
              <BookShelf handleChangeSelect={handleChangeSelect} title={'Currently Reading'} list={listData} statusGet={"CURR_READ"}/>
              <BookShelf handleChangeSelect={handleChangeSelect} title={'Want to Read'} list={listData} statusGet={"WANT_READ"}/>
              <BookShelf handleChangeSelect={handleChangeSelect} title={'Read'} list={listData} statusGet={"READ"}/>
            </div>}
          </div>
        </div>
      )}>
        {/* (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {listData && listData.length > 0  && <div>
              <BookShelf handleChangeSelect={handleChangeSelect} title={'Currently Reading'} list={listData} statusGet={"CURR_READ"}/>
              <BookShelf handleChangeSelect={handleChangeSelect} title={'Want to Read'} list={listData} statusGet={"WANT_READ"}/>
              <BookShelf handleChangeSelect={handleChangeSelect} title={'Read'} list={listData} statusGet={"READ"}/>
            </div>}
          </div>
          <div className="open-search">
            <Link to="/search">About</Link>
          </div>
        </div>
      ) */}
        </Route>
        <Route path="/search" element={ <Search />}>
           
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
