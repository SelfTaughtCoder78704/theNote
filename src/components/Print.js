import React from 'react'
import PrintNotes from './PrintNotes';
export default function Print(props) {
  const { data } = props;
  return (

    <PrintNotes allnotes={data} />

  )
}
