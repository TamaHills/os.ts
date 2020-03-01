import { h } from "../util/hyperbridge";
import { WindowConstructor } from "./Window";
import { WindowApp } from "./Window/WindowCanvas";
import { term } from "../apps/term";

class WindowManagerConstuctor {
  element: HTMLDivElement;

  constructor() {
    this.element = (
      <div id="windowManager">
        <button
          onclick={() => {
            this.newWindow("Terminal", term);
          }}
          style={{ margin: "20px 5px" }}
        >
          new term
        </button>
      </div>
    );
  }

  newWindow(title: string, app: WindowApp) {
    let w = new WindowConstructor(10, 50, this.element, title, app);
    this.element.appendChild(w.element);
  }

  focusWindow(node: HTMLDivElement) {
    this.element.appendChild(node);
  }
}

export const WindowManager = new WindowManagerConstuctor();
