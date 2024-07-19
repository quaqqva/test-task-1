import React from 'react';
import './Accordion.scss';

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion__item ${activeIndex === index ? 'accordion__item_active' : ''}`}
        >
          <div
            className="accordion__heading"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <p className="accordion__title">{item.title}</p>
            <span className="accordion__status-icon">
              <i className="fi fi-sr-plus-small"></i>
            </span>
          </div>
          <div
            className={`accordion__content ${activeIndex === index ? 'accordion__content_active' : ''}`}
          >
            <div className="accordion__content-inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
