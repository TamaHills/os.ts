import { h } from 'util/hyperbridge';
//import close from './assets/close.png';
//import min from './assets/min.png';
import './index.scss';

interface WindowControlProps {
  closeHandler: () => void;
}

export function WindowControls({ closeHandler }: WindowControlProps) {
  return (
    <div
      /* 
      Stop progation on mousedown this prevents listeners on the window from 
      blocking window control events 
      */
      onmousedown={(e: MouseEvent) => e.stopPropagation()}
      className="windowControls"
    >
      <button className="min">
      </button>
      <button onclick={closeHandler} className="close">
      </button>
    </div>
  );
}
