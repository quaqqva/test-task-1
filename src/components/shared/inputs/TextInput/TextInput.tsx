import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import './TextInput.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  id: string;
  labelText: string;
  helperText?: string;
};

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      helperText: initialHelperText = '',
      id,
      name,
      labelText,
      helperText,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const { getFieldState } = useFormContext();
    const fieldState = getFieldState(name);

    return (
      <div
        className={`text-input ${fieldState.isTouched ? 'text-input_touched' : ''} 
        ${fieldState.invalid ? 'text-input_invalid' : 'text-input_valid'} 
        ${fieldState.isDirty ? 'text-input_dirty' : ''}`}
      >
        <label htmlFor={id} className="text-input__label">
          <span className="text-input__label-text">{labelText}</span>
          <input
            id={id}
            name={name}
            className="text-input__field"
            ref={ref}
            {...props}
          />
          {fieldState.isTouched ? (
            <span className="text-input__validity-icon">
              {fieldState.invalid ? (
                <i className="fi fi-sr-cross-circle"></i>
              ) : (
                <i className="fi fi-sr-check-circle"></i>
              )}
            </span>
          ) : (
            <></>
          )}
        </label>
        <span className="text-input__helper-text">
          {fieldState.error?.message || initialHelperText}
        </span>
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
