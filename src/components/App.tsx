import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import { noteProps } from "./CreateArea";
import Footer from "./Footer";
// import Note from "./Note";
import "../index.css";

function App() {
  const [notes, setNotes] = React.useState([]);


  function addNote(note: noteProps) {
    // setNotes((prevNotes) => {
    //   return [...prevNotes, note];
    // });
    setNotes((prevNotes) => ({
      ...prevNotes, note
    }
    ))
    console.log(typeof notes);
    console.log(notes);
    
  }

  // function deleteNote(id) {
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((currItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // console.log("Inside delete " + id);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {notes.map()}
      <Note /> */}
      <Footer />
    </div>
  );
}

export default App;
