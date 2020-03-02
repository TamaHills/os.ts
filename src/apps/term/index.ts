import { CanvasObject, CanvasFn } from '../../util/canvas-api';
import { WindowConstructor } from 'os/Window';

export function term(win: WindowConstructor): [CanvasFn, CanvasFn] {
  let width = 600;
  let height = 400;

  let scrollText = [
    'Welcome to SalukiOS 0.1a',
    '',
    'Type `hirematt` to get started.',
    'Or type `help` for a full list of commands.',
    '',
  ];

  function windowSetup(ctx: CanvasObject) {
    ctx.size(width, height);
    ctx.background = '#303030';
    ctx.fill = 'whitesmoke';
    ctx.font = 'VT323';
    ctx.fontSize = 16;
  }

  let count = 0;
  let printIndex = 0;

  function windowDraw(ctx: CanvasObject) {
    count += 1;
    if (count % 5 === 0) {
      if (printIndex < scrollText.length) {
        ctx.clear();
        for (let i = 0; i <= printIndex; i++) {
          ctx.text(scrollText[i], 5, (i + 1) * 18);
        }
        printIndex += 1;
      } else {
        ctx.fill = '#303030';
        ctx.rect(0, printIndex * 18, 400, 21);
        ctx.fill = 'whitesmoke';

        ctx.text(`shell -> ${win.input}|`, 5, (printIndex + 1) * 18);
      }
    }
  }

  return [windowSetup, windowDraw];
}
