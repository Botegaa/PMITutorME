import { InlineIcon } from "@iconify/react";
import { type UserDTO } from "@/types/UserDTO";

import "@/styles/components/InputField.css";

type InputProps = {
  type: string;
  id: string;
  name: keyof UserDTO;
  customValue?: string;
  label?: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
  icon?: string;
  iconHidden?: "true";
  customClass?: string;
  required?: "true";
  disabled?: "true";
  changeFn?: (field: keyof UserDTO, value: string) => void;
};

export default function InputField({
  type,
  id,
  name,
  customValue,
  label,
  description,
  placeholder,
  defaultValue,
  icon,
  iconHidden,
  customClass,
  required,
  disabled,
  changeFn
}: InputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <p className="input-desc">{description}</p>
      <div className="input-wrapper">
        <input
          type={type}
          id={id}
          name={name}
          value={customValue ? customValue : undefined}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={customClass}
          required={required ? true : false}
          disabled={disabled ? true : false}
          onChange={changeFn ? (e) => changeFn(name, e.target.value) : undefined}
        />
        {icon ? (
          <InlineIcon icon={icon} aria-hidden={iconHidden ? true : false} />
        ) : null}
      </div>
    </div>
  );
}
