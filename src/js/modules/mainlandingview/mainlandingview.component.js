import html from './mainlandingview.component.html';
import css from './mainlandingview.component.css';

export class MainlandingviewWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        const comenzar = this.shadowRoot.querySelector("#comenzar");
        const conocer = this.shadowRoot.querySelector("#conocer");
        
       
       


    
    }

   



}
customElements.define('fa-mainlandingview', MainlandingviewWebComponent);