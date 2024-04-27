import React, { useState, useEffect }  from "react";
import BookShelf from "./";
import { mockListData } from "../data"
import { Link } from "react-router-dom";
import Select from "../common/select";
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
        if (Array.isArray(listBook)) {
            setListData(listBook);
        } else {
            setListData([]);
        }
    
    }

    // useEffect(()=> {
    //     searchData(searchInput)
    // }, [searchInput])

    useEffect(()=> {
        setListData(props.listData);
      }, [props.listData])

    const handleChangeSearch = async (e) => {
        setSearchInput(e.target.value)
        await searchData(e.target.value);
    }

    // const handleChangeSelectCategory = (value) => {
    //     setSearchCategory(value)
    // }

    return (
        <div>
       <div style={{display: "flex", alignItems: "center"}}><Link className="close-search" to="/"></Link><span>BACK</span></div>
       <input onChange={handleChangeSearch} value={searchInput}/>
       <BookShelf handleChangeSelect={handleChangeSelect} title={'All book'} list={listData} statusGet={"CURR_READ"} isSearch={true}/>
       </div>
    )
  }
  