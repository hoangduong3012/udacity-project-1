import React, { useState, useEffect }  from "react";
import BookShelf from "./";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI"

export default function Search(props) {
    const [searchInput, setSearchInput] = useState('');
    // const [searchCategory, setSearchCategory] = useState('NONE');
    const [listData, setListData] = useState(props.listData);

    const handleChangeSelect = (value, id) => {
        // setSearchCategory(value);
        props.updateData(value, id);
        searchData(searchInput);
    }

    async function searchData(conditionSearch) {
        const listBook =  await search(conditionSearch);
        listBook.map(book => {
            const bookFound = listData.find(data => data.id === book.id );
            if (bookFound) {
                book.shelf = bookFound.shelf
            }
            return book;
        });
        if (Array.isArray(listBook)) {
            setListData(listBook);
        } else {
            setListData([]);
        }
    }

    useEffect(()=> {
        setListData(props.listData);
    }, [])
    
    const handleChangeSearch = async (e) => {
        setSearchInput(e.target.value)
        await searchData(e.target.value);
    }

    return (
        <div>
       <div style={{display: "flex", alignItems: "center"}}><Link className="close-search" to="/"></Link><span>BACK</span></div>
       <input onChange={handleChangeSearch} value={searchInput}/>
       <BookShelf handleChangeSelect={handleChangeSelect} title={'All book'} list={listData} statusGet={"CURR_READ"} isSearch={true}/>
       </div>
    )
  }
  