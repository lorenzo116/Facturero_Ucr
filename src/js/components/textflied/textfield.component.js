import html from './textfield.component.html';
import css from './textfield.component.css';

export class TextfieldWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
        this.shadowRoot.querySelector('label').htmlFor = this.getAttribute('for');
        this.shadowRoot.querySelector('label').innerHTML = this.getAttribute('text');
        this.shadowRoot.querySelector('input').id = this.getAttribute('for');
        this.shadowRoot.querySelector('input').name = this.getAttribute('for');
        if(this.getAttribute('type')){
            this.shadowRoot.querySelector('input').type = this.getAttribute('type')
            if(this.getAttribute('type') === 'number'){
                //this.shadowRoot.querySelector('input').classList.add('numberInput');
                console.log(this.shadowRoot.querySelector('#bar'));
                this.shadowRoot.querySelector('#bar').classList.add('barNumber');
            }
        }
    }
}

customElements.define('fa-textfield', TextfieldWebComponent)
