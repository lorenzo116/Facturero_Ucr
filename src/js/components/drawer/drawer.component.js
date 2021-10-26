import html from './drawer.component.html';
import css from './drawer.component.css';
import {MDCDrawer} from "@material/drawer";



export class DrawerWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    }
}
customElements.define('fa-drawer', DrawerWebComponent);