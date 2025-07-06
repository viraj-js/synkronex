import * as React from 'react';

export interface DropdownProps {
  options: { label: string; value: string }[];
  multiple?: boolean;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, multiple, value, onChange }) => (
  <select
    multiple={multiple}
    value={value}
    onChange={e => {
      if (multiple) {
        const selected = Array.from(e.target.selectedOptions, option => option.value);
        onChange(selected);
      } else {
        onChange(e.target.value);
      }
    }}
  >
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>{opt.label}</option>
    ))}
  </select>
);
