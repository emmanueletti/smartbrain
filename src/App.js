import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import { ROUTES } from './lib/contants';

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

  const navToRegister = () => {
    setRoute(ROUTES.REGISTER);
  };
  const navToSignIn = () => {
    setRoute(ROUTES.SIGN_IN);
  };

  const isSignedIn = route === ROUTES.AUTHENTICATED;

  return (
    <div className='App'>
      <Navigation
        handleSignOut={handleSignOut}
        isSignedIn={isSignedIn}
        navToRegister={navToRegister}
        navToSignIn={navToSignIn}
      />
      <Logo />
      {route === ROUTES.SIGN_IN && (
        <SignIn handleSignIn={handleSignIn} navToRegister={navToRegister} />
      )}
      {route === ROUTES.REGISTER && <Register />}
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
