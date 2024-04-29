import React  from "react";

export default function Select(props) {
    const handleChange = (e) => {
        // eslint-disable-next-line no-unused-expressions
        props.handleChangeSelect(e.target.value)
    };
    return (
        <select value={props.value ? props.value : 'none'} onChange={handleChange}>
            <option disabled>
                Move to...
            </option>
            <option value="currentlyReading">
                Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
  }
  