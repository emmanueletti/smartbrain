import React from 'react';
import './logo.css';
import brain from './brain.png';

export default function Logo() {
  return (
    <div className='logo'>
      <img src={brain} alt='brain logo' />
    </div>
  );
}
