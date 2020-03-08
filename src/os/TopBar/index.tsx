import { h } from 'util/hyperbridge';
import './index.scss';

export function TopBar() {
  function OpenMenu(e: MouseEvent) {



  }

  return (
    <div className="topbarContainer">
      <div id="topbar">
        <div onclick={OpenMenu} id="menuButton">
          menu
        </div>
      </div>
    </div>
  );
}

function TopBarMenu() {

  return (
    <div>
      <p>open terminal</p>
    </div>
  )
}