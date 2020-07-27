fetch('books.md')
    .then(response => response.text())
    .then(data => {
        window.books.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });

fetch('articles.md')
    .then(response => response.text())
    .then(data => {
        window.articles.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });

fetch('videos.md')
    .then(response => response.text())
    .then(data => {
        window.videos.querySelector('ul').innerHTML = data
            .trim()
            .split('\n')
            .map(item => {
                const [, title, url] = item.match(/(.*)\|(.*)/);

                return `<li><a href="${url}">${title}</a></li>`;
            })
            .join('')
    });
