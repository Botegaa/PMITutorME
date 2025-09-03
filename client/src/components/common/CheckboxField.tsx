import { InlineIcon } from "@iconify/react";

import "@/styles/components/CheckboxField.css";

type CheckboxProps = {
  id: string;
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  required?: "true";
  checked?: "true";
  disabled?: "true";
};

export default function CheckboxField({
  id,
  name,
  label,
  description,
  required,
  disabled,
}: CheckboxProps) {
  return (
    <div className="checkbox-group">
      <label htmlFor={id}>
        <div className="checkbox-input">
          <InlineIcon icon="ic:round-check" className="check-ic" />
          <input
            type="checkbox"
            name={name}
            id={id}
            required={required ? true : false}
            disabled={disabled ? true : false}
          />
        </div>
        {label}
      </label>
      <p className="checkbox-desc">{description}</p>
    </div>
  );
}
