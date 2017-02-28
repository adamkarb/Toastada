(function() {

    'use strict';

    var toastada = {

        options: {
            prependTo: document.body.childNodes[0],
            lifeSpan: 4000,
            position: 'top-right',
            animate: false,
            animateDuration: 0,
            classes: {
                container: 'toast-container',
                animate: 'toast-exit',
                default: 'toast',
                success: 'toast-success',
                info: 'toast-info',
                warning: 'toast-warn',
                error: 'toast-error'
            }
        },

        success: function(msg) {
            placeToast.call(this, msg, 'success');
        },

        info: function(msg) {
            placeToast.call(this, msg, 'info');
        },

        warning: function(msg) {
            placeToast.call(this, msg, 'warning');
        },

        error: function(msg) {
            placeToast.call(this, msg, 'error');
        }

    };


    function placeToast(html, toastType) {

        var toastContainer = document.querySelector('.' + this.options.classes.container);

        var containerExists = !!toastContainer;

        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = this.options.classes.container;
        }

        var newToast = document.createElement('div');
        newToast.className = this.options.classes.default + ' ' + this.options.classes[toastType];

        newToast.innerHTML = html;

        if (!containerExists) {

            // Set toast container position
            switch(this.options.position) {

                case 'top-right':
                    toastContainer.style.top = '10px';
                    toastContainer.style.right = '10px';
                    break;

                // case 'top-left':
                //     toastContainer.style.top = '10px';
                //     toastContainer.style.left = '10px';
                //     break;
                //
                // case 'bottom-left':
                //     toastContainer.style.bottom = '10px';
                //     toastContainer.style.left = '10px';
                //     break;
                //
                // case 'bottom-right':
                //     toastContainer.style.bottom = '10px';
                //     toastContainer.style.right = '10px';
                //     break;

                default:
                    toastContainer.style.top = '10px';
                    toastContainer.style.right = '10px';
            }

            document.body.insertBefore(toastContainer, this.options.prependTo);

        }

        toastContainer.insertBefore(newToast, toastContainer.childNodes[0]);

        // This timeout is used for the duration that the
        // toast will stay on the page
        setTimeout(function() {

            // Animation is set to perform
            if (this.options.animate && this.options.animateDuration) {

                newToast.classList.add(this.options.classes.animate);

                // This timeout is used to defer the reomval of the
                // toast from the dom for `this.options.animateDuration`
                // milliseconds
                setTimeout(function() {

                    newToast.remove();

                    var numToasts = document.querySelector('.' + this.options.classes.container).childNodes.length;

                    if (!numToasts) {
                        toastContainer.remove();
                    }

                }.bind(this), this.options.animateDuration);

            } else {

                newToast.remove();

                var numToasts = document.querySelector('.' + this.options.classes.container).childNodes.length;

                if (!numToasts) {
                    toastContainer.remove();
                }

            }

        }.bind(this), this.options.lifeSpan);

    }

    window.toastada = toastada;

})();
