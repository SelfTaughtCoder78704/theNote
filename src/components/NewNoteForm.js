import React, { useState } from 'react'
import AllNotes from './AllNotes'
import NoteFinder from './NoteFinder'
import styles from './NewNoteForm.css'
import dataNotes from '../data/note-data'

export default function NewNoteForm() {
  const [showing, setShowing] = useState(true);
  const [oneChecked, setOneChecked] = useState(false)
  const [notes, setNotes] = useState(dataNotes || []);
  const [note, setNote] = useState({
    id: '',
    title: '',
    description: '',
    urgency: '',
    date: '',
  })

  const handleTitle = (e) => {
    setNote({
      ...note,
      title: e.target.value
    })

  }

  const handleDescription = (e) => {
    setNote({
      ...note,
      description: e.target.value
    })
  }

  const handleUrgency = (e) => {
    setNote({
      ...note,
      urgency: e.target.value,
      date: new Date().toISOString().substr(0, 10),
      id: (notes.length + 1).toString(),
    })
    setOneChecked(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    runChecks()
    if (oneChecked) {
      saveNote(note)

      alert('Note Saved')
    } else {
      dontSaveNote()
      alert("Note not saved")
    }

    setOneChecked(false)
  }

  const dontSaveNote = () => {
    document.querySelector('.grouped').classList.add('warning')
    document.querySelectorAll('.fField').forEach(field => field.classList.add('warning'))
    return
  }

  const saveNote = (note) => {
    document.querySelector('.grouped').classList.remove('warning')
    document.querySelectorAll('.fField').forEach(field => field.classList.remove('warning'))
    setNotes([...notes, note])
    document.querySelector('#theTitle').value = ''
    document.querySelector('#theDescription').value = ''
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false)
  }

  const runChecks = () => {
    if (document.querySelector('#theTitle').value === '' || document.querySelector('#theDescription').value === '') {
      alert('Please fill out all fields')
      return
    }

    if (note.title === '' || note.description === '' || note.urgency === '') {
      alert('Please fill out all fields')
      return
    }
  }


  const toggleShow = () => {

    setShowing(!showing)
  }

  return (
    <div className='note-form'>

      <h3 onClick={toggleShow}>{showing ? <img src="/images/minus.svg" /> : <img src="/images/plus.svg" />
      } {showing ? 'Hide Form' : 'Add New Note'}</h3>

      {showing && <form className='theForm'>
        <input className='fField' type="text" placeholder="Title" id='theTitle' onChange={handleTitle} />
        <textarea className='fField' placeholder="Description" id='theDescription' onChange={handleDescription} />
        <div className='urgency'>
          <p>Set Urgency</p>
          <div className='grouped'>
            <label >
              High
              <input type="radio" className='active' id="high" name="urgency" value="high" onChange={handleUrgency} />
            </label>
            <label >
              Medium
              <input type="radio" id="medium" name="urgency" value="medium" onChange={handleUrgency} />
            </label>
            <label >
              Low
              <input type="radio" id="low" name="urgency" value="low" onChange={handleUrgency} />
            </label>
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>}
      <NoteFinder data={notes} />
    </div>
  )
}
