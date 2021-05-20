import React, { useState } from 'react';
import "./styles.css";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";
function App(props){
  const[notes,setNotes]=useState([]);
  
  function addNote(newNote){
    setNotes((prevValue)=>{
      return [...prevValue,newNote];
    });
  }
  function deleteNotes(id){
    setNotes(preValue=>{
      return [...preValue.filter((note,index)=>
        index!==id)];
    });
  }
  return(
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=> (
        <Note 
        key={index}
        id={index}
        title={note.title} 
        content={note.content}
        onDelete={deleteNotes}
         />
      ))}
    </div>
  );
}
export default App;