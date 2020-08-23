import yaml from 'yaml';

import {Quicknav} from './components/quicknav';
import {List} from './components/list';

const app = document.getElementById('content');
const quicknav = new Quicknav();
const list = new List();

app.append(...[
    quicknav,
    list
].map(item => item.element));

fetch('content.yml')
    .then(response => response.text())
    .then(data => {

        const {
            threads,
            cards
        } = yaml.parse(data);

        quicknav.add(...threads);
        list.add(...cards);
    })
    .catch(console.error);
