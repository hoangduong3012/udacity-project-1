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
        if (value && value !== 'none') {
            const bookChange  = listData.find(ele => ele.id === id);
            props.updateData(value, bookChange);
            setListData([...listData.filter((b) => b.id !== bookChange.id), {...bookChange, shelf: value}]);
            //searchData(searchInput);
        }
    }

    async function searchData(conditionSearch) {
        const listBook =  await search(conditionSearch);
        if (Array.isArray(listBook)) {
            listBook.map(book => {
                const bookFound = listData.find(data => data.id === book.id );
                if (bookFound) {
                    book.shelf = bookFound.shelf;
                } else {
                    book.shelf = 'none';
                }
                return book;
            });
            setListData(listBook);
        } else {
            setListData([]);
        }
    }

    useEffect(()=> {
        setListData(props.listData);
    }, [props.listData])
    
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
  