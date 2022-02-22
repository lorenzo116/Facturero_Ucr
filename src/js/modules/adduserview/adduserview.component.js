import html from './adduserview.component.html';
import css from './adduserview.component.css';

export class AddUserViewWebComponent extends HTMLElement {
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

customElements.define('fa-adduserview', AddUserViewWebComponent)
