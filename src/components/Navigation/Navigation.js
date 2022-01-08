import React from 'react';

export default function Navigation({ handleSignOut }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        className='f3 link dim black underline pa3 pointer'
        onClick={handleSignOut}>
        Sign Out
      </p>
    </nav>
  );
}
