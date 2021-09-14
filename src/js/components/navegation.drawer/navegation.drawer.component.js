import html from './navegation.drawer.component.html';
import css from './navegation.drawer.component.css';

export class NavegationDrawerWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

customElements.define('fa-navdrawer', NavegationDrawerWebComponent)
