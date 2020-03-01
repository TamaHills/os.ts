import { h } from 'util/hyperbridge';
import { WindowConstructor } from 'os/Window';
import { WindowApp } from 'os/Window/WindowCanvas';
import { term } from 'apps/term';

class WindowManagerObject {
  element: HTMLDivElement;

  constructor() {
    this.element = <div id="windowManager" />;

    this.newWindow('terminal', term);
  }

  newWindow(title: string, app: WindowApp) {
    let w = new WindowConstructor(10, 50, this.element, title, app);
    this.element.appendChild(w.element);
  }

  focusWindow(node: HTMLDivElement) {
    this.element.appendChild(node);
  }
}

export const WindowManager = new WindowManagerObject();
