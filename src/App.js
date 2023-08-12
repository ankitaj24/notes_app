import React,{useState} from 'react';
import NoteList from "./components/NoteList";
import Search from './components/Search';
import Header from './components/Header'
import {nanoid} from 'nanoid';

function App() {
  let [noteText,setNoteText]=useState('');
  let [searchText,setSearchText]=useState('');
  let [darkMode,setDarkMode]=useState(false);
  const [notes,setNotes] = useState([
  
  ])

  function addNote(){
    if(noteText.trim().length>0){
      setNoteText('')
      const newNote={
      text:noteText,
      date:new Date().toLocaleDateString(),
      id:nanoid()
    }
    const updatedNotes=[...notes,newNote]
    setNotes(updatedNotes);
    }else{
      alert("Add some note");
      setNoteText('');
    }
  }
  function handleNoteText(text){
    setNoteText(text);
  }
  function handleDeleteNote(id){
    console.log(id);
    const updatedNotes=notes.filter(note=>(note.id!==id));
    setNotes(updatedNotes);
  }
  function handleSearchText(text){
    setSearchText(text)
  }
  return (
    <div className={darkMode&&'dark-mode'}>
    <Header setDarkMode={setDarkMode}/>
    <Search searchText={searchText} handleSearchText={handleSearchText}/>
    <NoteList handleDeleteNote={handleDeleteNote} addNote={addNote} handleNoteText={handleNoteText} noteText={noteText} notes={notes.filter(note=>note.text.includes(searchText))}/>
    </div>
  );
}

export default App;
