import React from 'react'
import styles from './NoteFinder.css'

export default function AllNotes(props) {
  const { allnotes } = props;
  return (
    <div className='notes-area'>
      {allnotes.map(note => (
        <div className='note-card' key={note.id}>
          <p>ID: {note.id}</p>
          <h3>{note.title}</h3>
          <p className='desc'>{note.description}</p>
          <div>
            {note.urgency === 'high' ? <span className='high-urgency'></span> : null}
            {note.urgency === 'medium' ? <span className='medium-urgency'></span> : null}
            {note.urgency === 'low' ? <span className='low-urgency'></span> : null}
          </div>

          <p className='date'>{note.date}</p>
        </div>
      ))}
    </div>
  )
}
