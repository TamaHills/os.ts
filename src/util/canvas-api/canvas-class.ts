type fillStyle = string | CanvasGradient | CanvasPattern;

export type CanvasFn = (canvas: CanvasObject) => boolean | void;

interface GradientProperties {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  colorOne?: string;
  colorTwo?: string;
}

interface RadialGradientProperties extends GradientProperties {
  startR: number;
  endR: number;
}

export class CanvasObject {
  private ctx: CanvasRenderingContext2D;
  private backgroundStyle: fillStyle | null = null;
  private fontStyle = ['10px', 'sans-serif'];

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  get width() {
    return this.ctx.canvas.width;
  }
  get height() {
    return this.ctx.canvas.height;
  }

  get rawContext() {
    return this.ctx;
  }

  get fill() {
    return this.ctx.fillStyle;
  }

  get background() {
    if (this.backgroundStyle) {
      return this.backgroundStyle;
    } else {
      return '';
    }
  }

  set fill(value: fillStyle) {
    this.ctx.fillStyle = value;
  }

  set background(value: fillStyle) {
    this.backgroundStyle = value;
    this.drawBackground();
  }

  set font(fontName: string) {
    this.fontStyle[1] = fontName;
  }

  set fontSize(size: string | number) {
    this.fontStyle[0] = typeof size === 'number' ? `${size}px` : size;
  }

  private drawBackground() {
    if (this.backgroundStyle) {
      let oldFill = this.ctx.fillStyle;
      this.ctx.fillStyle = this.backgroundStyle;
      this.rect(0, 0, this.width, this.height);
      this.ctx.fillStyle = oldFill;
    }
  }

  rect(x: number, y: number, w: number, h: number) {
    this.ctx.fillRect(x, y, w, h);
  }

  text(textString: string, x: number, y: number) {
    this.ctx.font = this.fontStyle.join(' ');
    this.ctx.fillText(textString, x, y);
  }

  size(x: number, y: number) {
    this.ctx.canvas.height = y;
    this.ctx.canvas.width = x;
  }

  clear(x = 0, y = 0, w = this.width, h = this.height) {
    this.ctx.clearRect(x, y, w, h);
    this.drawBackground();
  }
  linearGradient(props: GradientProperties) {
    let gradient = this.ctx.createLinearGradient(
      props.startX,
      props.startY,
      props.endX,
      props.endY,
    );
    if (props.colorOne) {
      gradient.addColorStop(0, props.colorOne);
    }
    if (props.colorTwo) {
      gradient.addColorStop(1, props.colorTwo);
    }
    return gradient;
  }
  radialGradient(props: RadialGradientProperties) {
    let gradient = this.ctx.createRadialGradient(
      props.startX,
      props.startY,
      props.startR,
      props.endX,
      props.endY,
      props.endR,
    );
    if (props.colorOne) {
      gradient.addColorStop(0, props.colorOne);
    }
    if (props.colorTwo) {
      gradient.addColorStop(1, props.colorTwo);
    }
    return gradient;
  }
  static initCanvas(
    setup: CanvasFn,
    draw: CanvasFn,
    canvas: HTMLCanvasElement,
  ) {
    let ctx: CanvasObject | null = null;
    function drawOnCanvas() {
      if (ctx) {
        draw(ctx);
      } else {
        ctx = new CanvasObject(canvas);
        setup(ctx);
      }
      window.requestAnimationFrame(drawOnCanvas);
    }
    window.requestAnimationFrame(drawOnCanvas);
  }
}
