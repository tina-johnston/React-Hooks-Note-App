import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notesReducer'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const App = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, [])

  //read notes from localstorage
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))
    if (notesData) {
      notesDispatch({ type: 'POPULATE_NOTES', notes: notesData })
      //setNotes(notesData)
    }
  }, []) //renders just the first time

  // call useEffect to update local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]) //use effect [] dependent on notes

  return (
    <NotesContext.Provider value={{ notes, notesDispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  )
}

export default App
