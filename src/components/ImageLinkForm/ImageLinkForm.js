import React, { useState } from 'react';
import './imageLinkForm.css';

export default function ImageLinkForm({ handleURLSubmit }) {
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    setValue((prev) => e.target.value);
  };

  const handleSubmit = () => {
    handleURLSubmit(value);
  };

  return (
    <div className='mt5'>
      <p className='f3 '>Magic brain will detect faces in your pictures</p>
      <div className='center input-container'>
        <input
          type='text'
          className='input f4 pa2 w-70 center'
          value={value}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSubmit}
          className='submit-btn pointer w-30 f4 link ph3 pv2 dib white bg-black'>
          Detect
        </button>
      </div>
    </div>
  );
}
