import { h } from 'util/hyperbridge';
import './index.scss';
import { WindowManager } from 'os/WindowManager';
import { TopBar } from 'os/TopBar';

function App() {
  let container: HTMLDivElement = (
    <div className="desktopContainer">
      {WindowManager.element}
      <TopBar />
    </div>
  );
  return container;
}

document.body.prepend(<App />);
