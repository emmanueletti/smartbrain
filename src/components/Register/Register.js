// Copied from Tachyons
import React from 'react';
import './register.css';

export default function Register({ handleSignIn }) {
  return (
    <main className='pa4 black-80'>
      <form className='tachyons-ovveride__sign-in-form measure center'>
        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
          <legend className='f4 fw6 ph0 mh0'>Sign In</legend>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6' htmlFor='email-address'>
              Name
            </label>
            <input
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='email'
              name='email-address'
              id='email-address'
            />
          </div>
          <div className='mv3'>
            <label className='db fw6 lh-copy f6' htmlFor='password'>
              Email
            </label>
            <input
              className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='password'
              name='password'
              id='password'
            />
          </div>
        </fieldset>
        <div>
          <input
            className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
            type='submit'
            value='Register'
            onClick={handleSignIn}
          />
        </div>
      </form>
    </main>
  );
}
