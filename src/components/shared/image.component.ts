import { DOMComponent, ElementParameters } from './dom-component';

type ImageParameters = Pick<ElementParameters, 'classList'> & {
  src: string;
  alt: string;
};

export function image({ src, alt, classList }: ImageParameters) {
  return new DOMComponent<HTMLImageElement>({
    tag: 'img',
    classList,
    attributes: {
      src,
      alt,
    },
  });
}
