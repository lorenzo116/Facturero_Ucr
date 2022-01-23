import html from './label.component.html';
import css from './label.component.css';
export class LabelWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        if(this.getAttribute('mode')=== 'title'){
            this.shadowRoot.querySelector('label').classList.add('title')
        }
    }
}
customElements.define('fa-label', LabelWebComponent);