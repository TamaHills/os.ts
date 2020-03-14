import { WindowApp } from 'os/Window/WindowCanvas/window-app'


export class Term extends WindowApp {
  w = 600
  h = 400
  scrollText = ["Welcome to SalukiOS 0.1a", "Type 'help' for a list of commands"]
  shellText = "shell ~>"
  setup() {
    this.ctx.size(this.w, this.h);
    this.ctx.background = '#303030';
    this.ctx.fill = 'whitesmoke';
    this.ctx.font = 'VT323';
    this.ctx.fontSize = 16;
    this.printScroll()
  }

  draw() {
  }

  printScroll() {
    this.ctx.clear();
    this.scrollText.forEach((t, i) => {
      this.ctx.text(t, 5, (i + 1) * 20);
    })
  }
}


// export function term(
//   win: WindowConstructor,
//   ctx: CanvasObject,
// ): [CanvasFn, CanvasFn] {
//   let width = 600;
//   let height = 400;
//   let scrollText = [
//     'Welcome to SalukiOS 0.1a',
//     '',
//     'Type `hirematt` to get started.',
//     'Or type `help` for a full list of commands.',
//     '',
//   ];
//   function inputReturn(e: KeyboardEvent) {
//     if (e.key === 'Enter') {
//       if (scrollText.length > 20) {
//         scrollText.shift();
//         ctx.clear();
//         scrollText.forEach((text, i) => {
//           ctx.text(text, 5, (i + 1) * 18);
//         })
//       }
//       scrollText.push(win.stdin.value);
//       win.input = '';
//       win.stdin.value = '';
//     }
//   }

//   win.stdin.addEventListener('keypress', inputReturn);

//   function windowSetup() {
//     ctx.size(width, height);
//     ctx.background = '#303030';
//     ctx.fill = 'whitesmoke';
//     ctx.font = 'VT323';
//     ctx.fontSize = 16;
//   }

//   let count = 0;
//   let printIndex = 0;

//   function windowDraw() {
//     count += 1;
//     if (count % 5 === 0) {
//       if (printIndex < scrollText.length) {
//         ctx.clear();
//         for (let i = 0; i <= printIndex; i++) {
//           ctx.text(scrollText[i], 5, (i + 1) * 18);
//         }
//         printIndex += 1;
//       } else {
//         clearLine(printIndex);
//         ctx.fill = 'whitesmoke';
//         let first = win.input;
//         let second = '';

//         let { selectionStart } = win.stdin;

//         if (selectionStart) {
//           first = win.input.substr(0, selectionStart);
//           second = win.input.substr(selectionStart);
//         }
//         ctx.text(
//           `shell -> ${first}${
//             win.stdin.isSameNode(document.activeElement) ? '|' : ''
//           }${second}`,
//           5,
//           (printIndex + 1) * 18,
//         );
//       }
//     }
//   }

//   function clearLine(height: number) {
//     let oldFill = ctx.fill;
//     ctx.fill = '#303030';
//     ctx.rect(0, height * 18, 600, 21);
//     ctx.fill = oldFill;
//   }

//   return [windowSetup, windowDraw];
// }
