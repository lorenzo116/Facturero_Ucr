/*
* Minuto 09:05 del vídeo de tour
*/

import html from './persontaxpayeradd.component.html';
import css from './persontaxpayeradd.component.css';
export class PersontaxpayeraddWebComponent extends HTMLElement {
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
customElements.define('fa-persontaxpayeradd', PersontaxpayeraddWebComponent);