import { CanvasObject, CanvasFn } from '../../util/canvas-api';
import { WindowConstructor } from 'os/Window';

export function term(win: WindowConstructor,ctx: CanvasObject): [CanvasFn, CanvasFn] {
  let width = 600;
  let height = 400;

  let scrollText = [
    'Welcome to SalukiOS 0.1a',
    '',
    'Type `hirematt` to get started.',
    'Or type `help` for a full list of commands.',
    '',
  ];

  function windowSetup() {
    ctx.size(width, height);
    ctx.background = '#303030';
    ctx.fill = 'whitesmoke';
    ctx.font = 'VT323';
    ctx.fontSize = 16;
  }

  let count = 0;
  let printIndex = 0;

  function windowDraw() {
    count += 1;
    if (count % 5 === 0) {
      if (printIndex < scrollText.length) {
        ctx.clear();
        for (let i = 0; i <= printIndex; i++) {
          ctx.text(scrollText[i], 5, (i + 1) * 18);
        }
        printIndex += 1;
      } else {
        clearLine(printIndex)
        ctx.fill = 'whitesmoke';
        let first = win.input
        let second = ''
        
        let {selectionStart} = win.stdin

        if (selectionStart) {
          first = win.input.substr(0, selectionStart)
          second = win.input.substr(selectionStart)
        }
        ctx.text(`shell -> ${first}${win.stdin.isSameNode(document.activeElement) ? '|': ""}${second}`, 5, (printIndex + 1) * 18);
      }
    }
  }

  function clearLine(height: number) {
    let oldFill = ctx.fill
    ctx.fill = '#303030';
    ctx.rect(0, height * 18, 600, 21);
    ctx.fill = oldFill
  }

  return [windowSetup, windowDraw];
}
