(function () {
    'use strict';
    var printButton = document.querySelector('[data-print]');
    if (printButton) {
        printButton.addEventListener('click', function () {
            window.print();
        });
    }
}());
