import { h } from "./util/hyperbridge";
import "./index.scss";
import { WindowManager } from "./WindowManager";
import { TopBar } from "./TopBar";

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
