import html from './btn.component.html';
import css from './btn.component.css';

export class BtnWebComponent extends HTMLElement {
    set count(count) {
        this._count = count;
    }

    get count() {
        return this._count;
    }
    constructor() {
        super();
        this._count = 0;
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        /*this.shadowRoot.querySelector('button').onclick = (e) => {
            this._count++;
            this.shadowRoot.querySelector('button').innerHTML = this._count;

        }*/
        this.shadowRoot.querySelector("button").addEventListener("click", this);
    }
    handleEvent(event) {
        if (event.type === "click") {
            this._count++;
            this.shadowRoot.querySelector('button').innerHTML = this._count;
            const MessageEvent = new CustomEvent("message", {
                detail: { 
                    count: this._count
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(MessageEvent);
        }
    }
}

customElements.define('fa-btn', BtnWebComponent);
