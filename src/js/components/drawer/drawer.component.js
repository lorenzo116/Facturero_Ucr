import html from './drawer.component.html';
import css from './drawer.component.css';
import "wc-menu-button";


export class DrawerWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
 

    connectedCallback() {
   
        const menuButton = this.shadowRoot.querySelector("#menuButton");
        const drawer = this.shadowRoot.querySelector("#drawer");

        menuButton.addEventListener("opened", ev => {
          drawer.open = true;
        });

        drawer.addEventListener("open", ev => {
          menuButton.open = true;
        });

        drawer.addEventListener("close", ev => {
          menuButton.open = false;
        });

    }
}
customElements.define('fa-drawer', DrawerWebComponent);