import './PasswordOptions.scss';
import React, { useState } from 'react';

export function PasswordOptions(props) {

  const { setPasswordLength, passwordLength, updatePassword, isChecked, setIsChecked } = props;


  return (
    < React.Fragment >
      <div className='password-options'>
        <div className='password-options_slider'>
          <span
            className='password-options_slider_span'>
            {passwordLength}
          </span>
          <input
            type='range'
            min='1'
            max='25'
            value={passwordLength}
            onClick={(v) => {
              setPasswordLength(v.target.value)
              updatePassword();
            }}
            onChange={(v) => {
              setPasswordLength(v.target.value)
              updatePassword();
            }}
            className='password-options_slider' />
        </div>
        <div className='password-options_checkboxes'>
          <input
            type='checkbox'
            checked={isChecked.uppercase}
            onChange={() => {
              const obj = isChecked;
              obj.uppercase = !obj.uppercase;
              setIsChecked(obj);
              updatePassword();

            }}
          />
          <span>Uppercase</span>
          <input
            type='checkbox'
            checked={isChecked.lowercase}
            onChange={() => {
              const obj = isChecked;
              obj.lowercase = !obj.lowercase;
              setIsChecked(obj);
              updatePassword();
            }}
          />
          <span>Lowercase</span>
          <input
            type='checkbox'
            checked={isChecked.numbers}
            onChange={() => {
              const obj = isChecked;
              obj.numbers = !obj.numbers;
              setIsChecked(obj);
              updatePassword();
            }} />
          <span>Numbers</span>
          <input
            type='checkbox'
            checked={isChecked.symbols}
            onChange={() => {
              const obj = isChecked;
              obj.symbols = !obj.symbols;
              setIsChecked(obj);
              updatePassword();

            }} />
          <span>Symbols</span>
        </div>
      </div>
    </React.Fragment >
  )
}