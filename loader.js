fetch('books.txt')
    .then(response => response.text())
    .then(data => {
        window.books.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .filter(Boolean)
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });

fetch('articles.txt')
    .then(response => response.text())
    .then(data => {
        window.articles.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .filter(Boolean)
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });

fetch('videos.txt')
    .then(response => response.text())
    .then(data => {
        window.videos.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .filter(Boolean)
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });

fetch('backend.txt')
    .then(response => response.text())
    .then(data => {
        window.backend.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .filter(Boolean)
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });

fetch('devops.txt')
    .then(response => response.text())
    .then(data => {
        window.devops.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .filter(Boolean)
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });
