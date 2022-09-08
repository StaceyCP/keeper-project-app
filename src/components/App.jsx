import React from "react";
import Header from "./Header";
import Note from "./Note";
import NoteCreation from "./NoteCreation";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNote = (note) => {
    setNoteItems([...noteItems, note])
  }

  const handleDeleteNote = (id) => {
    setNoteItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app">
      <Header/>
      <NoteCreation 
        addClicked={handleAddNote}
      />
      <div className="notesContainer">
        {noteItems.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            noteDelete={handleDeleteNote}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
