import html from './taxpayeredit.component.html';
import css from './taxpayeredit.component.css';

export class TaxpayereditWebComponent extends HTMLElement {
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
customElements.define('fa-taxpayeredit', TaxpayereditWebComponent);