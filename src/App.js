import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';

const ROUTES = Object.freeze({
  SIGN_IN: 'SIGN_IN',
  REGISTER: 'REGISTER',
  AUTHENTICATED: 'AUTHENTICATED',
});

function App() {
  const [imgURL, setImgURL] = useState('');
  const [route, setRoute] = useState(ROUTES.SIGN_IN);

  const handleURLChange = (url) => {
    setImgURL((prev) => url);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setRoute(ROUTES.AUTHENTICATED);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    setRoute(ROUTES.SIGN_IN);
  };

  return (
    <div className='App'>
      <Navigation handleSignOut={handleSignOut} />
      <Logo />
      {route === ROUTES.SIGN_IN && <SignIn handleSignIn={handleSignIn} />}
      {route === ROUTES.AUTHENTICATED && (
        <>
          <ImageLinkForm handleURLSubmit={handleURLChange} />
          <FaceRecognition imgURL={imgURL} />
        </>
      )}
    </div>
  );
}

export default App;
