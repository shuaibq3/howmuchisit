import React from 'react';

type InputComponentProps = {
    value: string | number;
    placeholder?: string;
    inputType?: 'text' | 'number';
    classNames?: string[];
};

const Input = ({value, inputType, placeholder, classNames}: InputComponentProps) => {
  return (
    <div className={classNames?.join(' ')}>
      <input 
        type={inputType || 'text'}
        value={value} 
        placeholder={placeholder || ''}
      />
    </div>
  );
};

export default Input;