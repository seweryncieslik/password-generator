import React, { useState } from "react";
import { PasswordBox } from '../../components/PasswordBox/PasswordBox';
import { PasswordOptions } from '../../components/PasswordOptions/PasswordOptions';
import { generatePassword } from '../../services/passwordGenerator';


export function PasswordPage() {
  const [isChecked, setIsChecked] = useState(
    { uppercase: true, lowercase: true, numbers: true, symbols: true });
  const [passwordLength, setPasswordLength] = useState('11');
  const [colorOption, setColorOption] = useState('_11');
  const [generatedPassword, setGeneratedPassword] = useState(generatePassword(passwordLength, isChecked));


  const updatePassword = () => {

    if (passwordLength >= 10) {
      setColorOption('_11');
    }
    if (passwordLength >= 9 && passwordLength < 10) {
      setColorOption('_9');
    }
    if (passwordLength >= 8 && passwordLength < 9) {
      setColorOption('_8');
    }
    if (passwordLength >= 6 && passwordLength < 8) {
      setColorOption('_6');
    }
    if (passwordLength >= 3 && passwordLength < 6) {
      setColorOption('_3');
    }
    if (passwordLength < 3) {
      setColorOption('');
    }

    setGeneratedPassword(generatePassword(passwordLength, isChecked));


  }
  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
  }

  return (
    <React.Fragment>
      <PasswordBox
        passwordLength={passwordLength}
        updatePassword={updatePassword}
        copyPassword={copyPassword}
        generatedPassword={generatedPassword}
        colorOption={colorOption}
      />
      <PasswordOptions
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        updatePassword={updatePassword}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </React.Fragment>
  )
}