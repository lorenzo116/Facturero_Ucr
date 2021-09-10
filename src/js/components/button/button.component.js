import html from './button.component.html';
import css from './button.component.css';

export class ButtonWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-button', ButtonWebComponent)
