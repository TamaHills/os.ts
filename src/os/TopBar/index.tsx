import { h } from 'util/hyperbridge';
// @ts-ignore
import term from 'assets/term.png'
import './index.scss';


export function TopBar() {
  let menu: HTMLDivElement = <TopBarMenu />
  
  function OpenMenu() {
    let menuDisplay = menu.style.display === 'flex' ? 'none': 'flex';
    menu.style.display = menuDisplay
  }

  return (
    <div className="topbarContainer">
      <div id="topbar">
        <div onclick={OpenMenu} id="menuButton">
          menu
        </div>
      </div>
      {menu}
    </div>
  );
}

function TopBarMenu() {
  return (
    <div id="menu">
      <p><img src={term} />open terminal</p>
    </div>
  );
}
