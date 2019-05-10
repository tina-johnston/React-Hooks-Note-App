import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
  const { notesDispatch } = useContext(NotesContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = e => {
    e.preventDefault()
    notesDispatch({ type: 'ADD_NOTE', title, body })
    //clear input
    setTitle('')
    setBody('')
  }
  return (
    <>
      <h1>Add Note</h1>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
    </>
  )
}
export default AddNoteForm
