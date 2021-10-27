import html from './radiobutton.component.html';
import css from './radiobutton.component.css';
export class RadiobuttonWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        for (const iterator of Array.from(this.querySelectorAll('input'))) {
            this.shadowRoot.querySelector('select').add(iterator)
        }
    }
}
customElements.define('fa-radiobutton', RadiobuttonWebComponent);