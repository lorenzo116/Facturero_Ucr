import html from './link.component.html';
import css from './link.component.css';
export class LinkWebComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector("a").href = this.getAttribute('href');

        //this.shadowRoot.querySelector("a").addEventListener("click", this);
        this.shadowRoot.querySelector("a").addEventListener("click", (event) => {

            event.preventDefault();

            console.log(this.getAttribute('href'));
            const MessageEvent = new CustomEvent("message", {
                detail: {
                    href: this.getAttribute('href'),
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(MessageEvent);
        })
    }
    disconnectedCallback() { }
    attributeChangedCallback(name, oldValue, newValue) { }
    static get observedAttributes() {
        return [];
    }

}
customElements.define('fa-link', LinkWebComponent);