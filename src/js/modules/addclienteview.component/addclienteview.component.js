import html from './addclienteview.component.html';
import css from './addclienteview.component.css';

export class AddClienteViewWebComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
    }
}

customElements.define('fa-addclienteview', AddClienteViewWebComponent)
