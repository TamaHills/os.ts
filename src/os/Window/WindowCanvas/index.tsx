import { h } from 'util/hyperbridge';
import { CanvasObject, CanvasFn } from 'util/canvas-api';
import { WindowConstructor } from 'os/Window';

export type WindowApp = (win: WindowConstructor, ctx: CanvasObject) => [CanvasFn, CanvasFn];

export interface WindowCanvasProps {
  app: WindowApp;
  win: WindowConstructor;
}

// Handles setup and creation of window canvas
export function WindowCanvas({ app, win }: WindowCanvasProps) {
  let canvas = <canvas />;
  let ctx = new CanvasObject(canvas)
  let [setup, draw] = app(win, ctx);
  
  ctx.initCanvas(setup, draw);

  return canvas;
}
