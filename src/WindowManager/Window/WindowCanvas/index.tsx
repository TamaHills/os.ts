import { h } from "../../../util/hyperbridge";
import { CanvasObject, CanvasFn } from "./canvas-api";

export type WindowApp = () => [CanvasFn, CanvasFn];

export interface WindowCanvasProps {
  app: WindowApp;
}

export function WindowCanvas({ app }: WindowCanvasProps) {
  let canvas = <canvas />;

  let [setup, draw] = app();

  CanvasObject.initCanvas(setup, draw, canvas);

  return canvas;
}

export { CanvasObject, CanvasFn };
