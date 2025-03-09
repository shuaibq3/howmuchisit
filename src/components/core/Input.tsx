import React from 'react'

type InputComponentProps = {
    value: string | number;
    handleChange?: <InputType>(value: InputType) => void;
    placeholder?: string;
    inputType?: 'text' | 'number';
    classNames?: string[];
};

const Input = ({value, handleChange, inputType, placeholder, classNames}: InputComponentProps) => {
  return (
    <div className={classNames?.join(' ')}>
      <input 
        type={inputType || 'text'}
        value={value} 
        onChange={handleChange}
        placeholder={placeholder || ''}
      />
    </div>
  )
}

export default Input