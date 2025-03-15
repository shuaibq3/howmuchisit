import React from 'react'

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button = ({ onClick, label, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default Button