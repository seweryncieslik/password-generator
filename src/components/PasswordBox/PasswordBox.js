import './PasswordBox.scss';
import React, { useState } from 'react';

export function PasswordBox(props) {

  const { colorOption, passwordLength, updatePassword, copyPassword, generatedPassword } = props;

  return (
    <React.Fragment>
      <div
        className='password-wrapper'>
        <div className='password-box'>
          <div className='password-field'>
            <h1>{generatedPassword}</h1>
          </div>
          <div className='password-buttons'>
            <span
              className='material-icons md-48'
              onClick={copyPassword}
            >
              content_copy
            </span>
            <span className='material-icons md-48'
              onClick={updatePassword}
            >
              cached
            </span>
          </div>
        </div>
        <div
          className='password-box_strength_wrapper'>
          <div
            className={'password-box_strength' + colorOption}>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
};