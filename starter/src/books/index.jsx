import React  from "react";
import BookStore from "./bookstore";

export default function BookShelf(props) {
    return (
        props.list ? <BookStore listCurrentRead={props.isSearch ? props.list : props.list.filter(ele => ele.status === props.statusGet)} {...props}/> : <></>
    )
  }
  