import React from 'react'
import Note from './Note.js'
import AddNote from './AddNote.js'

export default function NoteList({notes,addNote,noteText,handleNoteText,handleDeleteNote}) {
  return (
    <div className='notes-container'>
        <AddNote noteText={noteText} handleNoteText={handleNoteText} addNote={addNote}/>
        {notes.map(note=><Note handleDeleteNote={handleDeleteNote} note={note}/>)}
    </div>
  )
}
