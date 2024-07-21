import React, { forwardRef } from 'react';
import './TextInput.scss';
import { FieldMetaState } from 'react-final-form';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  id: string;
  labelText: string;
  metaState: FieldMetaState<string>;
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
      metaState,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <div
      className={`text-input ${metaState.touched ? 'text-input_touched' : ''} 
        ${metaState.invalid ? 'text-input_invalid' : 'text-input_valid'} 
        ${metaState.dirty ? 'text-input_dirty' : ''}`}
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
        {metaState.touched || metaState.dirty ? (
          <span className="text-input__validity-icon">
            {metaState.invalid ? (
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
        {metaState.touched || (metaState.dirty && metaState.error)
          ? metaState.error
          : initialHelperText}
      </span>
    </div>
  ),
);

TextInput.displayName = 'TextInput';
