import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'

const Note = ({ note }) => {
  const { notesDispatch } = useContext(NotesContext)
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button
        onClick={() =>
          notesDispatch({ type: 'REMOVE_NOTE', title: note.title })
        }
      >
        delete
      </button>
    </div>
  )
}

export default Note
