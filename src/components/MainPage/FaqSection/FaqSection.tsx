import React from 'react';
import { Accordion } from '../../shared/Accordion/Accordion';
import './FaqSection.scss';

let questions = [
  {
    question:
      'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
  },
  {
    question: 'Прототип нового сервиса - это как трубный призыв?',
  },
  {
    question: 'Частокол на границе продолжает удивлять?',
    answer:
      'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
  },
  {
    question: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
  },
  {
    question:
      'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
  },
  {
    question:
      'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
  },
  {
    question: 'Высококачественный прототип будущего проекта обнадёживает?',
  },
];

questions = questions.map((question) => ({
  ...question,
  answer:
    question.answer ||
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odit modi reprehenderit at! Ea incidunt, neque natus qui quo nemo voluptas quia expedita amet in saepe illo ipsam officiis. Amet qui in voluptate placeat officiis porro soluta sed vero quas. Magnam libero ipsam assumenda accusamus, quidem magni eveniet. Sit iste ullam nemo dolore, libero accusamus, ducimus animi, eos deleniti maxime fugit similique enim quam aliquid beatae expedita. Harum voluptate natus distinctio et, sed, id dolores, iste nesciunt incidunt quae facere cumque assumenda voluptatem esse? At officiis libero ducimus accusantium illum unde rerum, neque suscipit reprehenderit perspiciatis sapiente natus modi doloribus?',
}));

export const FaqSection = () => (
  <section id="faq" className="faq-section">
    <h2 className="faq-section__heading">Вопросы и ответы</h2>
    <Accordion
      items={questions.map((question) => ({
        title: question.question,
        content: <p>{question.answer}</p>,
      }))}
    />
  </section>
);
