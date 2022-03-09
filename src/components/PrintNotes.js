import React from 'react'
import styles from './NoteFinder.css'

export default function AllNotes(props) {
  const { allnotes } = props;
  return (
    <div className='print-area' >
      {allnotes.map(note => (
        <div className='note-line' key={note.id}>
          <div className='status'>
            <small>Status</small>
            {note.urgency === 'high' ? <span className='high-urgency'></span> : null}
            {note.urgency === 'medium' ? <span className='medium-urgency'></span> : null}
            {note.urgency === 'low' ? <span className='low-urgency'></span> : null}
          </div>
          <h3>Title: {note.title}</h3>
          <p className='desc'><b>Description:</b> {note.description}</p>


          <p className='date'>{note.date}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
