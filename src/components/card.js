import {nanoid} from 'nanoid'

const ELEMENT = nanoid();
const TITLE = nanoid();
const LINK = nanoid();
const DESCRIPTION = nanoid();
const TAGS = nanoid();
const CONTAINERS = nanoid();

export class Card {
    constructor() {
        this[ELEMENT] = document.createElement('div');
        this[ELEMENT].setAttribute('class', 'card');

        const title = document.createElement('a');
        title.setAttribute('class', 'title');

        const description = document.createElement('div');
        description.setAttribute('class', 'description');

        const tags = document.createElement('div');
        tags.setAttribute('class', 'tags');

        this[CONTAINERS] = {
            title,
            description,
            tags
        };

        this[ELEMENT].append(
            title,
            description,
            tags
        );

    }

    get element() {
        return this[ELEMENT];
    }

    get title() {
        return this[TITLE];
    }

    set title(value) {
        this[TITLE] = value;
        this[CONTAINERS].title.innerText = value;
    }

    get link() {
        return this[LINK];
    }

    set link(value) {
        this[LINK] = value;
        this[CONTAINERS].title.setAttribute('href', value);
    }

    get description() {
        return this[DESCRIPTION];
    }

    set description(value) {
        this[DESCRIPTION] = value;
        this[CONTAINERS].description.innerText = value;
    }

    get tags() {
        return this[TAGS];
    }

    set tags(value) {
        this[TAGS] = value;
        this[CONTAINERS].tags.innerHTML = '';
        this[CONTAINERS].tags.append(
            ...(value || [])
                .map(item => {
                    const tag = document.createElement('span');
                    tag.setAttribute('class', 'tag');
                    tag.innerHTML = `#${item}`;

                    return tag;
                })
        );
    }
}
