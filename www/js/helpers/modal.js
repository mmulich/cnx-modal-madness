define(['jquery', 'btstrp/bootstrap-modal'], function($) {

    function Modal(id, container) {
        /* This assumes that the bootstrap data api is enabled and
         * that the given id matches the target in the modal
         * action.
         */
        this.id = id;
        if (container === 'undefined') {
            container = 'body';
        }
        // XXX Replace with a mustache template.
        this.$modal = $('<div id="' + id + '" class="modal hide fade in"></div>').appendTo(container);
        return this;
    }

    return {Modal: Modal}
});
