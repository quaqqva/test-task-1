import { DOMComponent, ElementParameters } from './dom-component';

type LinkParameters = Pick<
  ElementParameters,
  'textContent' | 'classList' | 'children'
> & {
  url: string;
};

export function a({ url, textContent, classList, children }: LinkParameters) {
  return new DOMComponent<HTMLHeadingElement>({
    tag: `a`,
    textContent,
    classList,
    children,
    attributes: {
      href: url,
    },
  });
}
