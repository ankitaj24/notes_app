import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
export default function Note({note,handleDeleteNote}) {
  return (
    <div className="note">
        <span>{note.text}</span>
        <div className='note-footer'>
            <small className='date'>{note.date}</small>
            <button className='delete-btn' onClick={()=>handleDeleteNote(note.id)}><FaTrashAlt/></button>
        </div>
    </div>
  )
}

