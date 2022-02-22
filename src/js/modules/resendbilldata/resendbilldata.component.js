import html from './resendbilldata.component.html';
import css from './resendbilldata.component.css';

export class resendbilldataWebComponent extends HTMLElement {
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
customElements.define('fa-resendbilldata', resendbilldataWebComponent);