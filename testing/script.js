(function() {

    'use strict';

    // configure toast
    toast.options.lifeSpan = 8000;

    var successBtn = document.querySelector('#suc');
    var warnBtn = document.querySelector('#warn');
    var errorBtn = document.querySelector('#err');

    successBtn.addEventListener('click', function(e) {

        toast.success('You did something good!');

    });

    warnBtn.addEventListener('click', function(e) {

        toast.warning('Warning! Do not proceed any further!');

    });

    errorBtn.addEventListener('click', function(e) {

        toast.error('Something terrible happened!');

    });

})();
