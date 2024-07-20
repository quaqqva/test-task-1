import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import { Button } from '../../shared/Button/Button';
import { Checkbox } from '../../shared/inputs/Checkbox/Checkbox';
import './FormSection.scss';
import { TextInput } from '../../shared/inputs/TextInput/TextInput';

type FormSectionValues = {
  name: string;
  phoneNumber: string;
  isAgreeing: boolean;
};

export const FormSection = () => {
  const { ...methods } = useForm<FormSectionValues>({
    mode: 'all',
    defaultValues: {
      name: '',
    },
  });
  const { register, handleSubmit } = methods;
  const registerWithMask = useHookFormMask(register);

  const onSubmit = handleSubmit(() => {});

  return (
    <section id="form" className="form-section">
      <h2 className="form-section__heading">Отправь форму</h2>
      <FormProvider {...methods}>
        <form className="form-section__form" onSubmit={onSubmit}>
          <Controller
            name="name"
            rules={{
              minLength: {
                value: 3,
                message: 'Введите как минимум 3 символа',
              },
            }}
            render={({ field }) => (
              <TextInput id="name" labelText="Имя" {...field} />
            )}
          ></Controller>
          <TextInput
            id="phoneNumber"
            labelText="Телефон"
            type="tel"
            {...registerWithMask('phoneNumber', ['+7 (999) 999-99-99'], {
              pattern: {
                value: /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/,
                message: 'Пожалуйста, заполните поле полностью',
              },
            })}
          />
          <label className="form-section__checkbox-wrapper" htmlFor="agree">
            <Checkbox id="agree" />
            Согласен, отказываюсь
          </label>
          <Button severity="primary" type="submit">
            Отправить
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};
