import html from './lg.component.html';
import css from './lg.component.css';

export class LgWebComponent extends HTMLElement{
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback(){
          this.addEventListener("message", this);
          //console.log(this.shadowRoot.querySelector('fa-lbl'));
    }
    handleEvent(event) {
        if (event.type === "message") {
          //console.log(event.detail);
          //this.shadowRoot.querySelector('fa-lbl').shadowRoot.querySelector('p').innerHTML = event.detail.count;
          this.shadowRoot.querySelector('fa-lbl').count = event.detail.count
          //console.log(this.shadowRoot.querySelector('fa-lb').shadowRoot.querySelector('p'));
      }
    }
}

customElements.define('fa-lg', LgWebComponent);