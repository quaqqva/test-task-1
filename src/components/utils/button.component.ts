import { DOMComponent, ElementParameters } from './dom-component';

type ButtonParameters = Pick<
  ElementParameters,
  'textContent' | 'classList' | 'attributes'
> & {
  severity: 'primary' | 'secondary';
  clickHandler?: () => void;
};

export function button({ textContent, classList, severity }: ButtonParameters) {
  return new DOMComponent<HTMLHeadingElement>({
    tag: `button`,
    textContent,
    classList: ['button', `button_${severity}`, ...(classList || [])],
  });
}
