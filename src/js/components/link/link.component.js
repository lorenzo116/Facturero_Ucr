import html from './link.component.html';
import css from './link.component.css';
export class LinkWebComponent extends HTMLElement {
    constructor() {
        super();
        this._id = 0;
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector("a").href = this.getAttribute('href');

        if (this.getAttribute('backLink')) {
            //console.log(window.history);
            console.log("jdnj");
        }

        if (this.getAttribute('type')) {
            if (this.getAttribute('type') === 'button') {
                //this.shadowRoot.querySelector('input').classList.add('numberInput');
                this.shadowRoot.querySelector('a').classList.add('button');
            }
            if(this.getAttribute('type') === 'secondaryButton'){
                //this.shadowRoot.querySelector('input').classList.add('numberInput');
                this.shadowRoot.querySelector('a').classList.add('secondaryButton');
            }
            if(this.getAttribute('type') === 'secondaryButtonLarge'){
                //this.shadowRoot.querySelector('input').classList.add('numberInput');
                this.shadowRoot.querySelector('a').classList.add('secondaryButtonLarge');
            }


        }


        //this.shadowRoot.querySelector("a").addEventListener("click", this);
        this.shadowRoot.querySelector("a").addEventListener("click", (event) => {

            event.preventDefault();

            console.log(this.id);
            const MessageEvent = new CustomEvent("linkclicked", {
                detail: {
                    href: this.getAttribute('href'),
                    id: this.id,
                    context: this,
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
    get id() {
        return this._id;
    }
    set id(id) {
        //console.log("Setting...");
        this._id = id;
    }

}
customElements.define('fa-link', LinkWebComponent);