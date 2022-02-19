import html from './title.component.html';
import css from './title.component.css';
export class TitleWebComponent extends HTMLElement {
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
customElements.define('fa-title', TitleWebComponent);