import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function NoteCreation(props) {
    const {addClicked} = props;
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const [expandCreation, setExpandCreation] = useState(false);

    const handleExpand = () => {
      setExpandCreation(true);
    }

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
            <form className="createNote">
                {expandCreation && <input onChange={handleChangeTitle} name="title" placeholder="Note Title" value={note.title}></input>}
                <textarea 
                    onChange={handleChangeContent} 
                    onFocus={handleExpand}
                    name="content" 
                    placeholder="Write your note" 
                    rows={expandCreation ? "3" : "1"} 
                    value={note.content}>
                </textarea>
                {expandCreation && <Zoom in={true}>
                    <Fab
                        className="addButton"
                        size="medium"
                        onClick={(e) => {
                            e.preventDefault();
                            setNote({
                                title: "",
                                content: ""
                            });
                            addClicked(note);
                        }}>
                            <AddIcon/>
                    </Fab>
                </Zoom>}
            </form>
        </div>
    );
} 