import React from 'react';
import { Field, Form } from 'react-final-form';
import { withMask } from 'use-mask-input';
import { toast } from 'react-toastify';
import { Button } from '../../shared/Button/Button';
import { Checkbox } from '../../shared/inputs/Checkbox/Checkbox';
import { TextInput } from '../../shared/inputs/TextInput/TextInput';
import {
  composeValidators,
  MINLENGTH_VALIDATOR,
  PATTERN_VALIDATOR,
  REQUIRED_VALIDATOR,
} from '../../../utils/form-validators';
import './FormSection.scss';

type FormSectionData = {
  name: string;
  phoneNumber: string;
  agreed: boolean;
};

export const FormSection: React.FC = () => {
  const onSubmit = async (data: FormSectionData) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          toast('Форма успешно отправлена', {
            type: 'success',
          });
        } else throw Error('Ошибка. Попробуйте позже');
      })
      .catch((error) => {
        toast(error.message, {
          type: 'error',
        });
      });
  };

  return (
    <section id="form" className="form-section">
      <h2 className="form-section__heading">Отправь форму</h2>
      <Form
        validateOnBlur={false}
        onSubmit={onSubmit}
        initialValues={{
          agreed: false,
        }}
        render={({ handleSubmit }) => (
          <form className="form-section__form" onSubmit={handleSubmit}>
            <Field
              name="name"
              validate={composeValidators(
                REQUIRED_VALIDATOR,
                MINLENGTH_VALIDATOR(3),
              )}
              render={({ input, meta }) => (
                <TextInput
                  id="name"
                  labelText="Имя"
                  metaState={meta}
                  {...input}
                />
              )}
            />
            <Field
              name="phoneNumber"
              validate={composeValidators(
                REQUIRED_VALIDATOR,
                PATTERN_VALIDATOR(
                  /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/,
                  'Пожалуйста, заполните поле полностью',
                ),
              )}
              render={({ input, meta }) => (
                <TextInput
                  id="phoneNumber"
                  labelText="Телефон"
                  type="tel"
                  metaState={meta}
                  ref={withMask(['+7 (999) 999-99-99'])}
                  {...input}
                />
              )}
            />
            <Field
              id="agreed"
              name="agreed"
              type="checkbox"
              render={({ input }) => (
                <label
                  className="form-section__checkbox-wrapper"
                  htmlFor="agree"
                >
                  <Checkbox {...input} id="agree" />
                  Согласен, отказываюсь
                </label>
              )}
            />
            <Button severity="primary" type="submit">
              Отправить
            </Button>
          </form>
        )}
      />
    </section>
  );
};
