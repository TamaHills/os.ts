import { h } from 'util/hyperbridge';
import { WindowContext } from 'os/Window';
import { WindowApp } from 'os/Window/WindowCanvas/window-app';
import { Term } from 'apps/term';

class WindowManagerObject {
  element: HTMLDivElement;

  constructor() {
    this.element = <div id="windowManager" />;
  }

  newWindow(title: string, app: typeof WindowApp) {
    let w = new WindowContext(10, 50, this.element, title, app);
    this.element.appendChild(w.element);
  }

  focusWindow(node: HTMLDivElement) {
    this.element.appendChild(node);
  }
}

export const WindowManager = new WindowManagerObject();
