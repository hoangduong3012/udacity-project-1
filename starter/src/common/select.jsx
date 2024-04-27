import React  from "react";

export default function Select(props) {
    const handleChange = (e) => {
        // eslint-disable-next-line no-unused-expressions
        props.handleChangeSelect(e.target.value)
    };
    return (
        <select value={props.value} onChange={handleChange}>
            <option value="none" disabled>
                Move to...
            </option>
            <option value="CURR_READ">
                Currently Reading
            </option>
            <option value="WANT_READ">Want to Read</option>
            <option value="READ">Read</option>
            <option value="NONE">None</option>
        </select>
    )
  }
  