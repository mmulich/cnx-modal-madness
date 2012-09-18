define(['jquery', 'app/datasource', 'helpers/modal', 'mustache',
        'btstrp/bootstrap-dropdown', 'btstrp/bootstrap-modal',
        'domReady!'], function ($, datasource, modal, Mustache) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    // var util = require('./util');

    // XXX Get whatever data is available, we'll fix where it comes
    //     from later.
    var data = datasource.get(undefined);

    // -- Navigation --
    $('.dropdown-toggle').dropdown();

    // -- Modal setup --
    var metadataModal = new modal.Modal('metadata-modal', 'metadata-link',
                                        'metadataForm');

});
