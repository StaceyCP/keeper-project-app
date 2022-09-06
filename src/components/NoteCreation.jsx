import React, { useState } from "react";

export default function NoteCreation(props) {
    const {addClicked} = props;
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChangeTitle = (e) => {
        setNote({
            ...note,
            title: e.target.value
        })
    }

    const handleChangeContent = (e) => {
        setNote({
            ...note,
            content: e.target.value
        })
    }
    
    return (
        <div className="noteForm">
            <form>
                <input onChange={handleChangeTitle} name="title" placeholder="Note Title" value={note.title}></input>
                <textarea onChange={handleChangeContent} name="content" placeholder="Write your note" row="3" value={note.content}></textarea>
                <button onClick={(e) => {
                    e.preventDefault();
                    setNote({
                        title: "",
                        content: ""
                    });
                    addClicked(note);
                }}>Add</button>
            </form>
        </div>
    );
} 