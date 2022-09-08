import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {
    const {title, content, noteDelete, id} = props;
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => {
                noteDelete(id);
            }}>
                <DeleteIcon/>
            </button>
        </div>
    );
}