import html from './itemlist.component.html';
import css from './itemlist.component.css';

export class ItemListWebComponent extends HTMLElement {
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
customElements.define('fa-itemlist', ItemListWebComponent);