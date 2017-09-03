class Route {
    constructor(element, arg) {
        this._element = element;
        this._arg = arg;
    }
}

/**
 * This is the class that controls each instance of your custom element.
 */
class FunRouter extends HTMLElement {
    /**
     * Part of the custom element spec. Returns an array of strings that are 
     * the names of attributes that this element observes/listens to.
     * 
     * @returns {Array} an array of strings, each of which representing an 
     *  attribute.
     */
    static get observedAttributes() {
        return [];
    };

    constructor() {
        super();

        // add any initial variables here
        this.routes = [];
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        const self = this;
        window.addEventListener('popstate', () => {
            self.changeRoute()
        });
        this.buildRoutes();
        console.log(this.routes);
        this.changeRoute();
    }

    changeRoute() {

        
    }

    buildRoutes() {
        this.routes = {};
        for(let i = 0; i < this.children.length; i++) {
            if(!this.children[i].hasAttribute('path')) {
                continue;
            }

            let pathArr = this.children[i].getAttribute('path').split('/');
            let routes = this.routes;
            for(let x = 1; x < pathArr.length; x++) {
                let name = pathArr[x];
                let arg = null;
                let element = null;

                if(name[0] === ':') {
                    arg = name.substr(1);
                    name = '*';
                }

                if(x === (pathArr.length-1)) {
                    element = this.children[1];
                }

                routes[name] = new Route(element, arg);

                routes = routes[name];

            }

        }
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
    }
}

customElements.define("fun-router", FunRouter);


/**
 * This is the class that controls each instance of your custom element.
 */
class FunLink extends HTMLElement {
    /**
     * Part of the custom element spec. Returns an array of strings that are 
     * the names of attributes that this element observes/listens to.
     * 
     * @returns {Array} an array of strings, each of which representing an 
     *  attribute.
     */
    static get observedAttributes() {
        return [];
    };

    constructor() {
        super();

        // add any initial variables here
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        this.addEventListener('click', this.click);
    }

    click() {
        const href = this.getAttribute('href') || '';
        history.pushState(null, '', href);
        window.dispatchEvent(new Event('popstate'));
    }

    /**
     * Part of the custom element spec. Called after your element is remove from
     * the DOM. Disconnect any listeners or anything else here.
     */
    disconnectedCallback() {
        this.removeEventListener('click', this.click);
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
    }
}

customElements.define("fun-link", FunLink);