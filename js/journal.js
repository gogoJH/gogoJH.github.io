(function () {
    'use strict';

    var journal = document.querySelector('[data-journal]');
    if (journal) {
        journal.querySelector('[data-filter-controls]').hidden = false;
        var search = journal.querySelector('[data-search-input]');
        var filters = Array.prototype.slice.call(journal.querySelectorAll('[data-filter]'));
        var posts = Array.prototype.slice.call(journal.querySelectorAll('[data-post]'));
        var count = journal.querySelector('[data-result-count]');
        var empty = journal.querySelector('[data-empty]');
        var category = 'all';
        var normalize = function (text) { return text.normalize('NFKC').toLocaleLowerCase().trim(); };

        function applyFilters() {
            var terms = normalize(search.value).split(/\s+/).filter(Boolean);
            var visible = 0;
            posts.forEach(function (post) {
                var matchesCategory = category === 'all' || post.dataset.category === category;
                var text = normalize(post.dataset.search);
                var matchesSearch = terms.every(function (term) { return text.indexOf(term) !== -1; });
                post.hidden = !(matchesCategory && matchesSearch);
                if (!post.hidden) visible += 1;
            });
            count.textContent = visible + '개의 글';
            empty.hidden = visible > 0;
        }

        filters.forEach(function (button) {
            button.addEventListener('click', function () {
                category = button.dataset.filter;
                filters.forEach(function (filter) { filter.setAttribute('aria-pressed', String(filter === button)); });
                applyFilters();
            });
        });
        search.addEventListener('input', applyFilters);
        search.addEventListener('search', applyFilters);
        journal.querySelector('[data-reset]').addEventListener('click', function () {
            search.value = '';
            filters[0].click();
            search.focus();
        });
        applyFilters();
    }

    var toc = document.querySelector('[data-toc]');
    var prose = document.querySelector('.prose');
    if (toc && prose) {
        var headings = Array.prototype.slice.call(prose.querySelectorAll('h2, h3'));
        if (headings.length < 2) return;
        var list = toc.querySelector('[data-toc-list]');
        headings.forEach(function (heading, index) {
            if (!heading.id) heading.id = 'article-section-' + (index + 1);
            var item = document.createElement('li');
            if (heading.tagName === 'H3') item.className = 'toc-subheading';
            var link = document.createElement('a');
            link.href = '#' + encodeURIComponent(heading.id);
            link.textContent = heading.textContent;
            item.appendChild(link);
            list.appendChild(item);
        });
        toc.hidden = false;
        toc.querySelector('details').open = window.matchMedia('(min-width: 901px)').matches;
    }
}());
