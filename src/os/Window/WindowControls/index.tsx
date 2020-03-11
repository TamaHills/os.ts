import { h } from 'util/hyperbridge';
// @ts-ignore
import close from 'assets/close.png';
// @ts-ignore
import min from 'assets/min.png';
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
      <img src={min} alt=""/>
      </button>
      <button onclick={closeHandler} className="close">
      <img src={close} alt=""/>
      </button>
    </div>
  );
}
