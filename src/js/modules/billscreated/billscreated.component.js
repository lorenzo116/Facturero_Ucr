import html from './billscreated.component.html';
import css from './billscreated.component.css';
export class BillscreatedWebComponent extends HTMLElement {
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
customElements.define('fa-billscreated', BillscreatedWebComponent);