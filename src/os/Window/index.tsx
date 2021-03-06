import { h } from 'util/hyperbridge';

import { WindowControls } from './WindowControls';
import { WindowCanvas } from './WindowCanvas';
import { WindowApp } from './WindowCanvas/window-app'
import './index.scss';

export class WindowContext {
  element: HTMLDivElement;
  stdin: HTMLInputElement;
  input = '';
  constructor(
    startX: number,
    startY: number,
    manager: HTMLDivElement,
    windowTitle = 'window',
    app: typeof WindowApp,
  ) {
    let closeHandler = () => {
      this.close(manager);
    };
    this.stdin = <StdIn />;
    this.element = (
      <div className="windowContainer">
        {this.stdin}
        <div className="header">
          {windowTitle}
          <WindowControls closeHandler={closeHandler} />
        </div>
        <WindowCanvas win={this} app={app} />
      </div>
    );

    this.element.style.top = `${startY}px`;
    this.element.style.left = `${startX}px`;
    this.listeners(manager);
  }

  private close(manager: HTMLDivElement) {
    manager.removeChild(this.element);
  }

  private listeners(manager: HTMLDivElement) {
    let w = this.element;
    let stdin = this.stdin;
    let win = this;
    let clickPosition = { x: 0, y: 0 };

    function grab(e: MouseEvent) {
      let { offsetTop, offsetLeft } = w;
      let { pageX, pageY } = e;

      clickPosition = { x: pageX - offsetLeft, y: pageY - offsetTop };

      window.addEventListener('mousemove', drag);
      window.addEventListener('mouseup', drop);
      manager.appendChild(w);
      stdin.style.zIndex = '-1';
    }

    function drag(e: MouseEvent) {
      w.style.top = `${e.pageY - clickPosition.y}px`;
      w.style.left = `${e.pageX - clickPosition.x}px`;
    }

    function drop() {
      window.removeEventListener('mousemove', drag);
      window.removeEventListener('mouseup', drop);
      stdin.focus();
    }

    function input() {
      win.input = stdin.value;
    }

    
    stdin.addEventListener('input', input);

    w.addEventListener('mousedown', grab);
  }
}

let StdInStyles = {
  opacity: '0',
  position: 'absolute',
  bottom: '10',
  left: '10',
};

function StdIn() {
  return <input style={StdInStyles} type="text" value="" />;
}
