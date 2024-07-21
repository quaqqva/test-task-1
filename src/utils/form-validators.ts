type ValidatorFunction = (value: string) => string | undefined;

export const REQUIRED_VALIDATOR: ValidatorFunction = (value: unknown) =>
  value ? undefined : 'Пожалуйста, заполните это поле';

export const MINLENGTH_VALIDATOR: (min: number) => ValidatorFunction =
  (min: number) => (value: string) => {
    if (!value) return undefined;
    return value.length >= min
      ? undefined
      : `Минимальная длина - ${min} символа`;
  };

export const PATTERN_VALIDATOR: (
  pattern: RegExp,
  message: string,
) => ValidatorFunction =
  (pattern: RegExp, message = 'Неверное значение') =>
  (value: string) => {
    if (!value) return undefined;
    return pattern.test(value) ? undefined : message;
  };

export const composeValidators =
  (...validators: ValidatorFunction[]) =>
  (value: string) =>
    validators.reduce(
      (prevError: string | undefined, validator) =>
        prevError || validator(value),
      undefined,
    );
