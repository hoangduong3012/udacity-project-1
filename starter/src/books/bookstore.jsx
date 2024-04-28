import React from "react";
import Select from "../common/select";

export default function BookStore(props) {
  const handleChangeSelect = (value, id) => {
    props.handleChangeSelect(value, id)
  }
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.listCurrentRead && props.listCurrentRead.map(ele => (
            <li key={ele.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      `url(${ele.imageLinks?.thumbnail ? ele.imageLinks.thumbnail : ''})`
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <Select value={ele.shelf} handleChangeSelect={(value) => handleChangeSelect(value, ele.id)}/>
                </div>
              </div>
              <div className="book-title">{ele.title}</div>
              {ele.authors && <div className="book-authors">{ele.authors}</div>}
            </div>
          </li>
          ))} 
        </ol>
      </div>
    </div>
    )
  }
  