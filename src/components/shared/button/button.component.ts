import { DOMComponent, ElementParameters } from '../dom-component';
import './button.component.scss';

type ButtonParameters = Pick<
  ElementParameters,
  'textContent' | 'classList' | 'attributes'
> & {
  severity?: 'primary' | 'default';
  clickHandler?: () => void;
};

export function button({
  textContent,
  classList,
  severity = 'default',
}: ButtonParameters) {
  return new DOMComponent<HTMLHeadingElement>({
    tag: `button`,
    textContent,
    classList: ['button', `button_${severity}`, ...(classList || [])],
  });
}
