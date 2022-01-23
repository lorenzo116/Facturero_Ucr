import html from './logo.component.html';
import css from './logo.component.css';

export class LogoWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-logo', LogoWebComponent)