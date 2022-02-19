import html from './updateusersection.component.html';
import css from './updateusersection.component.css';
export class UpdateusersectionWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {}
    connectedCallback() {}
    disconnectedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
    static get observedAttributes() {
        return [];
    }
}
customElements.define('fa-updateusersection', UpdateusersectionWebComponent);