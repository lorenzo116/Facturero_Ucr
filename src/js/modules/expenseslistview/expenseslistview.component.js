import html from './expenseslistview.component.html';
import css from './expenseslistview.component.css';

export class expenseslistviewComponent extends HTMLElement {
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
customElements.define('fa-expenseslistview', expenseslistviewComponent);