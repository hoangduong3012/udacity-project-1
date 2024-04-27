import React  from "react";
import BookShelf from "../books";
import { Link } from "react-router-dom";

export default function Home(props) {
    const listData = props.listData;
    return (
        <div className="list-books">
        <Link to="/search">Search book</Link>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          
          {listData && listData.length > 0  && <div>
            <BookShelf handleChangeSelect={props.handleChangeSelect} title={'Currently Reading'} list={listData} statusGet={"currentlyReading"}/>
            <BookShelf handleChangeSelect={props.handleChangeSelect} title={'Want to Read'} list={listData} statusGet={"wantToRead"}/>
            <BookShelf handleChangeSelect={props.handleChangeSelect} title={'Read'} list={listData} statusGet={"read"}/>
          </div>}
        </div>
      </div>
    )
  }
  