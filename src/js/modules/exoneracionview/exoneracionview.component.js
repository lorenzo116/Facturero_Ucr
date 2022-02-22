import html from './exoneracionview.component.html';
import css from './exoneracionview.component.css';

export class exoneracionviewWebComponent extends HTMLElement {
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
customElements.define('fa-exoneracionview', exoneracionviewWebComponent);