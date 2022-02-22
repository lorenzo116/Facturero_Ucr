<<<<<<< HEAD:src/js/modules/manualexpenseview/manualexpenseview.component.js
import html from './manualexpenseview.component.html';
import css from './manualexpenseview.component.css';

export class ManualExpenseViewWebComponent extends HTMLElement {
=======
import html from './option.component.html';
import css from './option.component.css';
export class OptionWebComponent extends HTMLElement {
>>>>>>> Braulio:src/js/components/option/option.component.js
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
    }
}
<<<<<<< HEAD:src/js/modules/manualexpenseview/manualexpenseview.component.js
customElements.define('fa-manualexpenseview', ManualExpenseViewWebComponent);
=======
customElements.define('fa-option', OptionWebComponent);
>>>>>>> Braulio:src/js/components/option/option.component.js
