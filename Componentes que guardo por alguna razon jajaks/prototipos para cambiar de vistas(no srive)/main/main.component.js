import html from './main.component.html';
import css from './main.component.css';
export class MainWebComponent extends HTMLElement {
    constructor(){
        super();
        const template = document.createElement('template');
        template.innerHTML =`<style>${css}</style>` + html;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        let count = 0;
        console.log(this.shadowRoot.querySelectorAll('fa-a'));
        this.shadowRoot.querySelectorAll('fa-a').forEach(element => {
            element.num = count;
            console.log(element);
            count++;
        });
        this.addEventListener("messageA", this);
        console.log(this.shadowRoot.querySelectorAll('fa-a'));
    }
    handleEvent(event) {
        if (event.type === "messageA") {
            if(event.detail.num == 0){
                this.shadowRoot.querySelector('.content').innerHTML = `<fa-login slot="my-text"></fa-login>`;
                console.log('0')
            }
            else if(event.detail.num == 1){
                this.shadowRoot.querySelector('.content').innerHTML = `<fa-registro slot="my-text"></fa-registro>`;
                console.log('1');
            }
      }
    }
}
customElements.define('fa-main', MainWebComponent);