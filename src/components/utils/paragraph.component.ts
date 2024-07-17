import { DOMComponent, ElementParameters } from './dom-component';

type ParagraphParameters = Pick<ElementParameters, 'textContent' | 'classList'>;

export function p({ textContent, classList }: ParagraphParameters) {
  return new DOMComponent<HTMLParagraphElement>({
    tag: 'p',
    textContent,
    classList,
  });
}
