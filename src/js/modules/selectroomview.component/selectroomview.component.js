import html from './selectroom.component.html';
import css from './selectroom.component.css';
export class SelectroomWebComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.addEventListener("checkeditem", this);
        for (const iterator of Array.from(this.shadowRoot.querySelectorAll('fa-button'))) {
            iterator.id = Array.from(this.shadowRoot.querySelectorAll('fa-button')).indexOf(iterator);
        }
        this.addEventListener("buttonclicked", this);
    }
    handleEvent(event) {
        switch (event.type) {
            case 'checkeditem':
                for (const iterator of Array.from(this.shadowRoot.querySelectorAll('fa-checkitem'))) {
                    if (iterator.getAttribute('for') != event.detail.for) {
                        iterator.setAttribute('checkstate', 'unchecked');
                        iterator.shadowRoot.querySelector('input[type="radio').checked = false;
                    }
                }
                break;
            case 'buttonclicked':
                if (event.detail.id === 0) {
                    for (const iterator of Array.from(this.shadowRoot.querySelectorAll('fa-checkitem'))) {
                        if (iterator.getAttribute('checkstate' === 'checked')) {

                        }
                    }
                }
                break;
        }
    }
    disconnectedCallback() { }
    attributeChangedCallback(name, oldValue, newValue) { }
    static get observedAttributes() {
        return [];
    }
}
customElements.define('fa-selectroomview', SelectroomWebComponent);