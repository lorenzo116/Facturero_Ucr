import html from './a.component.html';
import css from './a.component.css';

export class AWebComponent extends HTMLElement {
    constructor(){
        super();
        this._num = 0;
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
        
        this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('text');
        this.shadowRoot.querySelector("button").addEventListener("click", this);
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
        });
    }
    get num() { 
        return this._num;
    }
    set num(num) {
        this._num = num;
    }
    handleEvent(e) {
        if (e.type === "click") {
            
            const MessageEvent = new CustomEvent("messageA", {
                detail: { 
                    num: this._num
                },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(MessageEvent);
        }
    }
}

customElements.define('fa-a', AWebComponent)
