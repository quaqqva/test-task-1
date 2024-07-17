import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DOMComponent } from './shared/dom-component';

export class AppComponent extends DOMComponent<HTMLElement> {
  public constructor() {
    super({
      tag: 'div',
      classList: ['app'],
      children: [new HeaderComponent(), new MainPageComponent()],
    });
  }
}
