import React, { useState } from 'react'
import AllNotes from './AllNotes';

import Print from './Print'
import styles from './NoteFinder.css'

export default function NoteFinder(props) {
  const { data } = props;
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [printing, setPrinting] = useState(false);


  const scrollIn = () => {
    // scroll to noteArea
    document.querySelector('.notes-area').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const printAll = () => {
    setPrinting(true);
    console.log(filteredData)
  }

  const closeModal = () => {
    setPrinting(false);
  }

  const handleDateSearch = (e) => {

    scrollIn();
    let date = e.target.value;

    setSearch(date);
    setFilteredData(
      // filter the data by date given plus 7 days
      data.filter(item => {
        // convert the date to a date object
        let itemDate = new Date(item.date);
        let newDate = new Date(date);

        // subtract 7 days to the date object
        newDate.setDate(newDate.getDate() - 7);

        // if the date of the item is between the given date and the date minus 7 days, return the item
        return itemDate <= new Date(date) && itemDate >= newDate;
      }));

  };


  return (
    <div className='note-finder'>
      <div className='searches'>
        {filteredData.length > 0 && <button onClick={printAll}>Print all notes for selected week</button>}
        {filteredData.length <= 0 && <button className='dis' disabled onClick={printAll}>Print Week <small>Please select a date to start from</small></button>}
        <label>
          Retrieve notes for a week from date selected:
          <input
            type='date'
            placeholder='Search By Date '
            value={search}
            onChange={handleDateSearch}
          />
        </label>
      </div>
      {filteredData.length > 0 ? <AllNotes allnotes={filteredData} /> : <div className='notes-area'><p>No notes found</p></div>}
      {printing && <div className='modal' ><span className='closer' onClick={closeModal}>X</span><Print data={filteredData} /></div>}
    </div>

  )
}

