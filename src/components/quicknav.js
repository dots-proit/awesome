import {nanoid} from 'nanoid'

const ELEMENT = nanoid();
const ITEMS = nanoid();

export class Quicknav {
    constructor() {
        this[ELEMENT] = document.createElement('div');
        this[ELEMENT].id = 'navigation';
        this[ITEMS] = [];

        this.add = this.add.bind(this);
        this.render = this.render.bind(this);
    }

    get element() {
        return this[ELEMENT];
    }

    add(...args) {
        this[ITEMS] = this[ITEMS].concat(args);
        this.render();
    }

    set(...args) {
        this[ITEMS] = this.args;
        this.render();
    }

    render() {
        this.element.innerHTML = '';

        if (this[ITEMS].length) {
            this.element.append(
                ...this[ITEMS]
                    .map(title => {
                        const item = document.createElement('a');
                        item.setAttribute('href', `#${title}`);
                        item.innerText = title;

                        return item
                    })
            );
        }

    }
}
