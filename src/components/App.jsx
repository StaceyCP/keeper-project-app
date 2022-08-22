import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notesObjects";

const createNote = noted => 
( <Note
    key={noted.key}
    title={noted.title}
    content={noted.content}
  /> 
);

function App() {
  return (
    <div className="app">
      <Header />
      <div className="notesContainer">
        {notes.map(createNote)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
