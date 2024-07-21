export const REQUIRED_VALIDATOR = (value: unknown) =>
  value ? undefined : 'Пожалуйста, заполните это поле';

export const MINLENGTH_VALIDATOR = (min: number) => (value: string) => {
  if (!value) return undefined;
  return value.length >= min ? undefined : `Минимальная длина - ${min} символа`;
};

export const PATTERN_VALIDATOR =
  (pattern: RegExp, message = 'Неверное значение') =>
  (value: string) => {
    if (!value) return undefined;
    return pattern.test(value) ? undefined : message;
  };

export const composeValidators =
  (...validators: ((value: string) => string | undefined)[]) =>
  (value: string) =>
    validators.reduce(
      (prevError: string | undefined, validator) =>
        prevError || validator(value),
      undefined,
    );
