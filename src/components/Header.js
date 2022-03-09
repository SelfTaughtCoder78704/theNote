import React from 'react'
import styles from './Header.css'
export default function Header(props) {
  const { avatar, name } = props;
  return (
    <header className='header'>
      <div className='left'>
        <h1>ThesisNote</h1>
      </div>
      <div className='right'>
        <div className='avatar'>
          <img src={avatar} alt={name} />
        </div>
        <div className='name'>
          <h2>@{name}</h2>
        </div>
      </div>
    </header>
  )
}
