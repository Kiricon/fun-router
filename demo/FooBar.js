(function(){
/**
 * The template that is used for the shadow root for every copy of your element,
 * which houses the styles and layout for the element.
 */
const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }

        span {
            font-weight: bold;
        }
    </style>
    <div>url: /name/:first/:last</div>

    <h4>
    <div> Hello 
    <span id="firstName"></span>
    <span id="lastName"></span>
    </div>
    </h4>
    `;

/**
 * This is the class that controls each instance of your custom element.
 */
class FooBar extends HTMLElement {
    /**
     * Part of the custom element spec. Returns an array of strings that are 
     * the names of attributes that this element observes/listens to.
     * 
     * @returns {Array} an array of strings, each of which representing an 
     *  attribute.
     */
    static get observedAttributes() {
        return ['first', 'last'];
    };

    constructor() {
        super();

        // create shadow root for any children context
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.firstName = this.shadowRoot.querySelector('#firstName');
        this.lastName = this.shadowRoot.querySelector('#lastName');


        // add any initial variables here
        console.log(this.shadowRoot);
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        
    }

    /**
     * Part of the custom element spec. Called after your element is remove from
     * the DOM. Disconnect any listeners or anything else here.
     */
    disconnectedCallback() {

    }

    /**
     * Part of the custom element spec. Called when one of the observed
     * attributes changes, either via setAttribute() or with the attribute being
     * manually set in the HTML.
     * 
     * @param {String} name the name of the attribute that changed
     * @param {Mixed} oldValue the previous value of the attribute
     * @param {Mixed} newValue the new value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // respond to a changed attribute here
        if(name === 'first') {
            this.firstName.innerHTML = newValue;
        }else if(name === 'last') {
            this.lastName.innerHTML = newValue;
        }
    }
}

customElements.define("foo-bar", FooBar);
})();