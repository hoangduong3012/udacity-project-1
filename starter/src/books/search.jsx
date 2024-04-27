import React, { useState, useEffect }  from "react";
import BookShelf from "./";
import { mockListData } from "../data"
import { Link } from "react-router-dom";
import Select from "../common/select";

export default function Search(props) {
    const [searchInput, setSearchInput] = useState('');
    const [searchCategory, setSearchCategory] = useState('NONE');
    const [listData, setListData] = useState(mockListData);

    const handleChangeSelect = (value, id) => {
      const data = mockListData.map(ele => {if (ele.id === id) {
        ele.status = value;
        return {...ele, status: value}
     } return ele})
      localStorage.setItem('data', JSON.stringify(data));
      setListData(mockListData.filter(ele => ele.status === searchCategory));
    }
    useEffect(()=> {
      const listHydrate = localStorage.getItem('data');
      if (listHydrate) {
        setListData(JSON.parse(listHydrate))
      }
    }, [])
  
    const handleChangeSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value)
        if (value) {
            setListData(mockListData.filter(ele => ele.title.includes(value) || ele.author.includes(value)));
        } else {
            setListData([])
        }
    }

    const handleChangeSelectCategory = (value) => {
        setSearchCategory(value)
        setListData(mockListData.filter(ele => ele.status === value));
    }

    return (
        <div>
       <div style={{display: "flex", alignItems: "center"}}><Link className="close-search" to="/"></Link><span>BACK</span></div>
       <input onChange={handleChangeSearch} value={searchInput}/>
       <Select value={searchCategory} handleChangeSelect={handleChangeSelectCategory}/>
       <BookShelf handleChangeSelect={handleChangeSelect} title={'Currently Reading'} list={listData} statusGet={"CURR_READ"} isSearch={true}/>
       </div>
    )
  }
  