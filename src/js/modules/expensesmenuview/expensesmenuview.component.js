import html from './expensesmenuview.component.html';
import css from './expensesmenuview.component.css';

export class expensesmenuviewWebComponent extends HTMLElement {
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
customElements.define('fa-expensesmenuview', expensesmenuviewWebComponent);