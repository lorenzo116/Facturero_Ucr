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


        if(this.getAttribute('type')){
            if(this.getAttribute('type') === 'button'){
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
        /*this.shadowRoot.querySelector("a").addEventListener("click", (event) => {

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
        })*/
    }
    disconnectedCallback() { }
    attributeChangedCallback(name, oldValue, newValue) { }
    static get observedAttributes() {
        return [];
    }

}
customElements.define('fa-link', LinkWebComponent);