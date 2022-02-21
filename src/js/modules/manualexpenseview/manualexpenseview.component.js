import html from './manualexpenseview.component.html';
import css from './manualexpenseview.component.css';

export class ManualExpenseViewWebComponent extends HTMLElement {
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
customElements.define('fa-manualexpenseview', ManualExpenseViewWebComponent);