import html from './drawer.component.html';
import css from './drawer.component.css';
import "wc-menu-button";


export class DrawerWebComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `<style>${css}</style>` + html;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const menuButton = this.shadowRoot.querySelector("#menuButton");
    const drawer = this.shadowRoot.querySelector("#drawer");
    menuButton.addEventListener("opened", ev => {
      drawer.open = true;
    });
    drawer.addEventListener("open", ev => {
      menuButton.open = true;
    });
    drawer.addEventListener("close", ev => {
      menuButton.open = false;
    });
    //this.shadowRoot.querySelectorAll("a")
    const as = this.shadowRoot.querySelectorAll("a");
    for (var i = 0; i < as.length; i++) {
      console.log(as[i]);
      as[i].addEventListener("click", this);
    }
    //console.log(as);
  }
  handleEvent(e) {
    if (e.type === "click") {

      e.preventDefault();
      const MessageEvent = new CustomEvent("message", {
        detail: {
          href: e.explicitOriginalTarget.attributes.href.nodeValue
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(MessageEvent);
      console.log(e.explicitOriginalTarget.attributes.href.nodeValue);
    }
  }
}
customElements.define('fa-drawer', DrawerWebComponent);