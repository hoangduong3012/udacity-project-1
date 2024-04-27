import React  from "react";
import { BrowserRouter} from "react-router-dom";

export default function RouterApp(props) {
    return (
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
    )
  }
  