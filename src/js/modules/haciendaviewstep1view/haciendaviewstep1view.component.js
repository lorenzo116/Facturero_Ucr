import html from './haciendaviewstep1view.component.html';
import css from './haciendaviewstep1view.component.css';

export class haciendaviewstep1viewWebComponent extends HTMLElement {
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
customElements.define('fa-haciendaviewstep1view', haciendaviewstep1viewWebComponent);