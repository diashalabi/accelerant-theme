(function (window, document) {

    const toggles = Array.from(
        document.querySelectorAll('[data-toggle="confirm"]')
    );

    toggles.forEach(function (toggle) {

        let handler = function (event) {

            event.preventDefault();

            swal({
                title: event.target.dataset.title || null,
                text: event.target.dataset.message || null,
                icon: event.target.dataset.icon || null,
                buttons: {
                    cancel: {
                        visible: true,
                        text: event.target.dataset.cancel_text || 'Cancel'
                    },
                    confirm: {
                        text: event.target.dataset.confirm_text || 'OK'
                    },
                }
            }).then((value) => {
                if (value === true) {

                    toggle.removeEventListener('click', handler);

                    /**
                     * Simulate a native click and let
                     * the default/intended action happen.
                     */
                    const click = document.createEvent('MouseEvents');
                    click.initEvent('click', true, false);
                    event.target.dispatchEvent(click);
                }
            });
        };

        toggle.addEventListener('click', handler);
    });
})(window, document);
