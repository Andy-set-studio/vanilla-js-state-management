// We're importing the store Class here so we can test against it in the constructor
import Store from '../store/store.js';

export default class Component {
    constructor(props = {}) {
        let self = this;

        // We're setting a render function as the one set by whatever inherits this base
        // class or setting it to an empty by default. This is so nothing breaks if someone
        // forgets to set it.
        this.render = this.render || function() {};
        
        // If there's a store passed in, subscribe to the state change
        if(props.store instanceof Store) {
            props.store.events.subscribe('stateChange', () => self.render());
        }
        
        // Store the HTML element to attach the render to if set
        if(props.hasOwnProperty('element')) {
            this.element = props.element;
        }
    }
}
