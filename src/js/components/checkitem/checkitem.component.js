import html from './checkitem.component.html';
import css from './checkitem.component.css';
export class CheckitemWebComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector('input[type="radio"]').id = this.getAttribute('for');
        this.shadowRoot.querySelector('label').htmlFor = this.getAttribute('for');
        this.shadowRoot.querySelector('input[type="radio"]').name = this.getAttribute('name');
        this.shadowRoot.querySelector('input[type="radio"]').addEventListener('change', (e) => {
            this.setAttribute('checkState', 'checked');
        })
    }
    disconnectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checkstate' && newValue === 'checked') {
            //console.log(`Propiedad ${name} pasó de ${oldValue} a ser ${newValue}`);
            const MessageEvent = new CustomEvent("checkeditem", {
                detail: {
                    for: this.getAttribute('for'),
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(MessageEvent);
        }
    }
    static get observedAttributes() {
        return ['checkstate'];
    }
}
customElements.define('fa-checkitem', CheckitemWebComponent);