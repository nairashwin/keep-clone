import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import { noteProps } from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import "../index.css";

function App() {
  const [notes, setNotes] = React.useState<noteProps[]>([]);


  function addNote(note: noteProps) {
    // setNotes((prevNotes) => {
    //   return [...prevNotes, note];
    // });
    setNotes((prevNotes) => (
      [...prevNotes, note]
    ))
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) => {
      return prevNotes.filter((currItem, index) => {
        return index !== id;
      });
    });
    console.log("Inside delete " + id);
  }

  console.log(notes);
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, noteID) => {
        return (
          <Note
            key={noteID}
            id={noteID}
            content={note.noteBody}
            title={note.noteHead}
            onDelete={deleteNote} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;