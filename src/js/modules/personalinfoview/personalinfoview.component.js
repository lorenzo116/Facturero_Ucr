import html from './personalinfoview.component.html';
import css from './personalinfoview.component.css';

export class PersonlInfoViewWebComponent extends HTMLElement {
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
customElements.define('fa-personalinfoview', PersonlInfoViewWebComponent);