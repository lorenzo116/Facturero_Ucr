import html from './createaccountview.component.html';
import css from './createaccountview.component.css';

export class CreateaccountviewWebComponent extends HTMLElement {
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
customElements.define('fa-createaccountview', CreateaccountviewWebComponent);