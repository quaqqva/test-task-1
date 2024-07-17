import { DOMComponent, ElementParameters } from './dom-component';

type DivParameters = Omit<ElementParameters, 'tag'>;

export function div(params: DivParameters) {
  return new DOMComponent<HTMLParagraphElement>({
    tag: 'div',
    ...params,
  });
}
