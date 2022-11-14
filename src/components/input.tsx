import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input(props: Props) {
  const { label, name, value, type, placeholder, onChange } = props;

  return (
    <span className="flex flex-col gap-8">
      <label htmlFor={name} className="text-baseGrey text-smd font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="text-baseGrey text-normal font-smd py-8 px-8 border-baseGrey border-2 rounded-small w-100"
      />
    </span>
  );
}

export default Input;
