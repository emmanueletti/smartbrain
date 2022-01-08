import React from 'react';
import './faceRecognition.css';

export default function FaceRecognition({ imgURL }) {
  return (
    <div className='image-container'>
      {imgURL ? (
        <img
          className='image-container__image'
          src={imgURL}
          alt='face recognized'
        />
      ) : (
        <p>Enter image URL</p>
      )}
    </div>
  );
}
