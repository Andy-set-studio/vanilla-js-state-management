import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Status extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-status')
        });
    }
    
    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        let self = this;
        let suffix = store.state.items.length !== 1 ? 's' : '';
        
        self.element.innerHTML = `${store.state.items.length} item${suffix}`;
    }
}
