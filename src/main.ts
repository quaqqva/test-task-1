import { AppComponent } from './components/app.component';
import { DOMComponent } from './components/utils/dom-component';
import './global-styles/styles.scss';

DOMComponent.FromElement(document.body).append(new AppComponent());
