import html from './selectroom.component.html';
import css from './selectroom.component.css';

export class SelectroomWebComponent extends HTMLElement {
    constructor() {
        super();
        this._data = [];
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.addEventListener("checkeditem", this);
        this.addEventListener("linkclicked", this);
        this.addEventListener("buttonclicked", this);
        //console.log(Array.from(this.shadowRoot.querySelectorAll('fa-link')));
        Array.from(this.shadowRoot.querySelectorAll('fa-link')).forEach(link => {
            link.id = Array.from(this.shadowRoot.querySelectorAll('fa-link')).indexOf(link);
            console.log(link.id);
        });
        // for (const iterator of Array.from(this.shadowRoot.querySelectorAll('fa-link'))) {

        //     console.log(iterator.id);
        // }
        console.log(this.shadowRoot.querySelectorAll('fa-link'));
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                for (const value of json) {
                    //console.log(value);
                    //console.log(value.name, value.username, value.email, value.website, value.phone, value.address);
                    this.data.push(value);
                    let item = `
                        <fa-checkitem for="${value.id}" name="habitacion" checkState="unchecked">
                        <p slot="title">${value.name}</p>
                        <p slot="subtitle">${value.username}</p>
                        <div slot="information">
                            <p>${value.email}</p>
                            <p>${value.phone}</p>
                        </div>
                        <p slot="extra-info"></p>
                        <p slot="status">Disponible</p>
                    </fa-checkitem>`
                    this.shadowRoot.innerHTML += item;
                }
            })
        //console.log(this.data);

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
            case 'linkclicked':
                console.log(event.detail);
                break;
        }
    }
    disconnectedCallback() { }
    attributeChangedCallback(name, oldValue, newValue) { }
    static get observedAttributes() {
        return [];
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
}
customElements.define('fa-selectroomview', SelectroomWebComponent);