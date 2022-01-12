import React from 'react';

export default function Navigation({
  isSignedIn,
  handleSignOut,
  navToSignIn,
  navToRegister,
}) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {isSignedIn ? (
        <p
          className='f3 link dim black underline pa3 pointer'
          onClick={handleSignOut}>
          Sign Out
        </p>
      ) : (
        <>
          <p
            className='f3 link dim black underline pa3 pointer'
            onClick={navToSignIn}>
            Sign In
          </p>
          <p
            className='f3 link dim black underline pa3 pointer'
            onClick={navToRegister}>
            Register
          </p>
        </>
      )}
    </nav>
  );
}
