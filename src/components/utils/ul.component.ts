import { DOMComponent, ElementParameters } from './dom-component';

type UnorderedListParameters = Pick<
  ElementParameters,
  'classList' | 'children'
>;

export function ul({
  classList,
  children,
}: UnorderedListParameters): DOMComponent<HTMLUListElement> {
  return new DOMComponent<HTMLUListElement>({
    tag: `ul`,
    classList,
    children: children?.map((child) => {
      return new DOMComponent<HTMLLIElement>({
        tag: `li`,
        children: [child],
      });
    }),
  });
}
