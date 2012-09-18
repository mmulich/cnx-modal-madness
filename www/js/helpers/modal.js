define(['jquery', 'app/views', 'app/datasource', 'btstrp/bootstrap-modal'],
       function($, views, datasource) {

    function Modal(id, opener, view, container) {
        /* This assumes that the bootstrap data api is enabled and
         * that the given id matches the target in the modal
         * action.
         */
        this.id = id;
        if (container === undefined) {
            container = 'body';
        }
        // XXX Replace with a mustache template.
        var $modal = $('<div id="' + id + '" class="modal hide fade in"></div>').appendTo(container);
        this.render = function() {
            var html = views.metadataModal(datasource.get());
            $modal.html(html);
        }
        $(opener).modal({show:false});
        $modal.on('show', $.proxy(this.render));
        return this;
    }

    return {Modal: Modal}
});
