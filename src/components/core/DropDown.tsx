import React from 'react'

type DropdownOption = { id: string, text: string, selected?: boolean }
type DropdownProps = {
  options: DropdownOption[]
  onSelected?: (selectedOption: string) => void
}

export const DropDown = ({ options, onSelected } : DropdownProps) => {
  return (
    <div>
      <select defaultValue={options.find(option => option.selected)?.id} onChange={event => onSelected?.(event.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}