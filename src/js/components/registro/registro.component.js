import html from './registro.component.html';
import css from './registro.component.css';

export class RegistroWebComponent extends HTMLElement {
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

customElements.define('fa-registro', RegistroWebComponent)
