import { WindowContext } from 'os/Window';
import { CanvasObject } from 'util/canvas-api';

export class WindowApp {
    win: WindowContext;
    ctx: CanvasObject;
    constructor(win: WindowContext, ctx: CanvasObject) {
      this.win = win;
      this.ctx = ctx;
    }
    draw() {
  
    }
    setup() {
      this.ctx.size(0, 0)
    }
    init = () => {
      this.setup() 
    }
    render = () => {
      this.draw()
    }
  }