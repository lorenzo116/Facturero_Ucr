import html from './button.component.html';
import css from './button.component.css';

export class ButtonWebComponent extends HTMLElement {
    constructor() {
        super();
        this._id = 0;
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {

        //this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('text');
        this.shadowRoot.querySelector("button").addEventListener("click", (e) => {
            //console.log("click");
            const MessageEvent = new CustomEvent("buttonclicked", {
                detail: {
                    id: this.id,
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(MessageEvent);
        });




        /*
        ! Usado para estilo, ya no sirve
        this.shadowRoot.querySelector('button').addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
        
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
        
            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });*/
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    /*handleEvent(e) {
        if (e.type === "click") {

            const MessageEvent = new CustomEvent("buttonclicked", {
                detail: {
                    href: this.getAttribute('href'),
                    id: this._id
                },
                bubbles: true,
                composed: true
            });
            //console.log(this);

            this.dispatchEvent(MessageEvent);
        }
    }*/
}

customElements.define('fa-button', ButtonWebComponent)
