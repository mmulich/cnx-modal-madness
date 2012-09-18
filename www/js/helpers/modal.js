define(['jquery', 'app/templates', 'app/views', 'app/datasource', 'btstrp/bootstrap-modal'],
       function($, templates, views, datasource) {

    function Modal(id, opener, view, container) {
        /* This assumes that the bootstrap data api is enabled and
         * that the given id matches the target in the modal
         * action.
         */
        this.id = id;
        this.render = function() {
            var html = views[view](datasource.get());
            $html = $(html);
            if ($html.filter('.form-actions')) {
                // Put the actions in the footer of the modal.
                $
            }
            this.$modal.filter('.modal-body').html($html);
        }


        // -- init --
        if (container === undefined) {
            container = 'body';
        }
        this.$modal = $(templates.modalBase({id: id,
                                             title: 'Edit metaata',
                                             body: '<h1>Hello World</h1>',
                                             actions: '<h3>Action buttons</h3>',
                                            })).appendTo(container);


        $(opener).modal({show:false});
        $modal.on('show', $.proxy(this.render));
        return this;
    }

    return {Modal: Modal}
});
