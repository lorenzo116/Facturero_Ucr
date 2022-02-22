import html from './suscriptionregistration.component.html';
import css from './suscriptionregistration.component.css';

export class suscriptionregistrationWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
    }
}
customElements.define('fa-suscriptionregistration', suscriptionregistrationWebComponent);