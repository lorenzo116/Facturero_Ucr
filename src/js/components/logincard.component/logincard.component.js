import html from './logincard.component.html';
import css from './logincard.component.css';

export class LoginCardWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-logincard', LoginCardWebComponent)
