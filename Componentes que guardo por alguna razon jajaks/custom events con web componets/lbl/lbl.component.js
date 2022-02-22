import html from './lbl.component.html';
import css from './lbl.component.css';

export class LblWebComponent extends HTMLElement {
    constructor() {
        super();
        this._count = 0;
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
        this.shadowRoot.querySelector('p').innerHTML = this.count;
        this.addEventListener("message", this);
    }
    handleEvent(event) {
        if (event.type === "message") {
            console.log(event);
        }
    }
    get count(){
        return this._count;
    }
    set count(count){
        this._count = count;
        this.shadowRoot.querySelector('p').innerHTML = this._count;
    }

}

customElements.define('fa-lbl', LblWebComponent);