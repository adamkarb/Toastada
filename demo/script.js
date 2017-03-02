(function() {

    'use strict';

    toastada.setOptions({
        animate: true,
        animateDuration: 200
    });

    // configure toast
    var successBtn = document.querySelector('#suc');
    var infoBtn = document.querySelector('#info');
    var warnBtn = document.querySelector('#warn');
    var errorBtn = document.querySelector('#err');

    successBtn.addEventListener('click', function(e) {

        toastada.success('You did something good!');

    });

    infoBtn.addEventListener('click', function(e) {

        toastada.info('Here is some information!');

    });

    warnBtn.addEventListener('click', function(e) {

        toastada.warning('Warning! Do not proceed any further!');

    });

    errorBtn.addEventListener('click', function(e) {

        toastada.error('Something terrible happened!');

    });

})();
