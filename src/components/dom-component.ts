export type ElementParameters = {
  tag: string;
  textContent?: string;
  classList?: string[];
  attributes?: Record<string, string>;
  parent?: DOMComponent<HTMLElement>;
  children?: DOMComponent<HTMLElement>[];
};

export class DOMComponent<T extends HTMLElement> {
  protected element: T;

  public static FromHTML<T extends HTMLElement>(html: string): DOMComponent<T> {
    const template = document.createElement('template');
    template.insertAdjacentHTML('afterbegin', html);
    const element = template.firstChild as T;
    const component = new DOMComponent<T>({ tag: element.tagName });
    component.element = element;
    return component;
  }

  public static FromElement<T extends HTMLElement>(element: T): DOMComponent<T> {
    const component = new DOMComponent<T>({ tag: element.tagName });
    component.element = element;
    return component;
  }

  public constructor({ tag, textContent, classList, attributes, parent, children }: ElementParameters) {
    this.element = document.createElement(tag) as T;

    if (textContent) this.textContent = textContent;

    if (classList) this.addClass(...classList);

    if (attributes) {
      Object.keys(attributes).forEach((attribute) => {
        this.setAttribute(attribute, attributes[attribute]);
      });
    }

    if (parent) parent.append(this.element);

    if (children) children.forEach((child) => this.append(child));
  }

  public get HTML(): string {
    return this.element.outerHTML;
  }

  public get textContent(): string {
    return this.element.innerText;
  }

  public set textContent(value: string) {
    this.element.innerText = value;
  }

  public insertBeforeNode(node: Node) {
    node.parentNode?.insertBefore(this.element, node);
  }

  public append(...elements: (HTMLElement | DOMComponent<HTMLElement>)[]): void {
    elements.forEach((element) => {
      if (element instanceof DOMComponent) this.element.append(element.element);
      else this.element.append(element);
    });
  }

  public clear(): void {
    this.element.innerHTML = '';
  }

  public addClass(...classNames: string[]): void {
    classNames.forEach((className) => this.element.classList.add(className));
  }

  public removeClass(...classNames: string[]): void {
    classNames.forEach((className) => this.element.classList.remove(className));
  }

  public checkSelectorMatch(selector: string): boolean {
    try {
      return this.element.matches(selector);
    } catch {
      return false;
    }
  }

  public setAttribute(attributeName: string, attributeValue: string): void {
    this.element.setAttribute(attributeName, attributeValue);
  }

  public removeAttribute(attributeName: string): void {
    this.element.removeAttribute(attributeName);
  }

  public addEventListener(event: string, listener: (e: Event) => void): void {
    this.element.addEventListener(event, listener);
  }

  public removeEventListener(event: string, listener: (e: Event) => void): void {
    this.element.removeEventListener(event, listener);
  }

  public addText(text: string) {
    this.element.append(document.createTextNode(text));
  }

  public removeFromDOM(): void {
    this.element.remove();
  }
}
