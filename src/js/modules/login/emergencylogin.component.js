import html from './emergencylogin.component.html';
import css from './emergencylogin.component.css';

export class EmergencyloginWebComponent extends HTMLElement {
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

customElements.define('fa-emergencylogin', EmergencyloginWebComponent)
