import { h } from 'util/hyperbridge';
import { CanvasObject, CanvasFn } from 'util/canvas-api';
import { WindowConstructor } from 'os/Window';

export type WindowApp = (win: WindowConstructor) => [CanvasFn, CanvasFn];

export interface WindowCanvasProps {
  app: WindowApp;
  win: WindowConstructor;
}

// Handles setup and creation of window canvas
export function WindowCanvas({ app, win }: WindowCanvasProps) {
  let canvas = <canvas />;

  let [setup, draw] = app(win);

  CanvasObject.initCanvas(setup, draw, canvas);

  return canvas;
}
