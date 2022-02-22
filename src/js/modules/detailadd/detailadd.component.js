import html from './detailadd.component.html';
import css from './detailadd.component.css';
export class DetailAddWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback(){

    }
}
customElements.define('fa-detailadd', DetailAddWebComponent);