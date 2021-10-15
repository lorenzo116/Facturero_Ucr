import html from './dropdown.component.html';
import css from './dropdown.component.css';
export class DropdownWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        console.log(this.shadowRoot.querySelector('select'));
        console.log(Array.from(this.querySelectorAll('option')));
        for (const iterator of Array.from(this.querySelectorAll('option'))) {
            console.log(iterator);
            this.shadowRoot.querySelector('select').add(iterator)
        }
    }
}
customElements.define('fa-dropdown', DropdownWebComponent);

/**
 * El titulo es slot, se usa un span para no afectar la funcionalidad
 * se agregan las opciones directamente cuando se hace uso del componente
 * Ejemplo de uso:
 *     <fa-dropdown>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        <span slot="title">Autos</span>
    </fa-dropdown>
 */