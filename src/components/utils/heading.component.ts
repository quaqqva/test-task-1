import { DOMComponent, ElementParameters } from './dom-component';

type HeadingParameters = Pick<
  ElementParameters,
  'textContent' | 'classList'
> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export function heading({ level, textContent, classList }: HeadingParameters) {
  return new DOMComponent<HTMLHeadingElement>({
    tag: `h${level}`,
    textContent,
    classList,
  });
}
