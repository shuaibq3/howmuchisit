import React, { ChangeEvent } from 'react'

type InputComponentProps = {
    value?: string;
    errorMessage?: string;
    handleChange?: (value: string) => void;
    placeholderText?: string;
    inputType?: 'text' | 'number';
    classNames?: string[];
};

const Input = ({ value = '', errorMessage, handleChange, inputType, placeholderText = '', classNames }: InputComponentProps) => {
  return (
    <div className={classNames?.join(' ')} style={{ display: 'flex', flexDirection: 'column' }}>
      {errorMessage && <span className="error-label">{errorMessage}</span>}
      <input 
        type={inputType}
        value={value} 
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange?.(event.target.value)}
        placeholder={placeholderText}
        autoFocus
      />
    </div>
  )
}

export default Input