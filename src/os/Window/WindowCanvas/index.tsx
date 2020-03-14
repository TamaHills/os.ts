import { h } from 'util/hyperbridge';
import { CanvasObject, CanvasFn } from 'util/canvas-api';
import { WindowContext } from 'os/Window';
import { WindowApp } from './window-app'

export interface WindowCanvasProps {
  app: typeof WindowApp;
  win: WindowContext;
}

// Handles setup and creation of window canvas
export function WindowCanvas({ app, win }: WindowCanvasProps) {
  let canvas = <canvas />;
  let ctx = new CanvasObject(canvas)
  let windowApp = new app(win, ctx);
    
  
  ctx.initCanvas(windowApp.init, windowApp.render);

  return canvas;
}
