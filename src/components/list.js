import {nanoid} from 'nanoid'
import {Card} from './card';

const ELEMENT = nanoid();
const ITEMS = nanoid();

export class List {
    constructor() {
        this[ELEMENT] = document.createElement('div');
        this[ELEMENT].setAttribute('class', 'cards');
        this[ITEMS] = [];

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

            const threads = Object.entries(this[ITEMS]
                .reduce((threads, card) => {
                    const {thread} = card;
                    if (!threads[thread]) {
                        threads[thread] = []
                    }

                    threads[thread].push(card);

                    return threads;
                }, {}))
                .flatMap(([thread, cards]) => {
                      const threadStart = document.createElement('div');
                      threadStart.id = thread;
                      threadStart.innerHTML = `§ ${thread}`;
                      threadStart.setAttribute('class', 'thread-start');

                      return [
                          threadStart,
                          ...cards.map(({
                              title,
                              link,
                              description,
                              tags
                          }) => {
                              const item = new Card();
                              item.title = title;
                              item.link = link;
                              item.description = description;
                              item.tags = tags;

                              return item.element;
                          })
                      ]
                });

            this.element.append(...threads);
        }
    }
}
