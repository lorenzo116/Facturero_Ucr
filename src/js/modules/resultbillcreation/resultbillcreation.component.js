import html from './resultbillcreation.component.html';
import css from './resultbillcreation.component.css';
export class ResultbillcreationWebComponent extends HTMLElement {
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
customElements.define('fa-resultbillcreation', ResultbillcreationWebComponent);