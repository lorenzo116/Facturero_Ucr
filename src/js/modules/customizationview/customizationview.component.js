import html from './customizationview.component.html';
import css from './customizationview.component.css';

export class customizationviewWebComponent extends HTMLElement {
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
customElements.define('fa-customizationview', customizationviewWebComponent);