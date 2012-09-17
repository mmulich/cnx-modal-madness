define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    // var util = require('./util');

    // -- Data source --
    var datasource = require('./datasource');
    // XXX Get whatever data is available, we'll fix where it comes
    //     from later.
    var data = datasource.get(undefined);

    // -- Navigation --
    var $ = require('jquery');
    require('btstrp/bootstrap-dropdown');
    require('btstrp/bootstrap-modal');
    $('.dropdown-toggle').dropdown();

    // -- Modal setup --
    var modal = require('helpers/modal');
    var metadataModal = new modal.Modal('metadata-modal');

    var views = require('./views'),
        tmpl = require('./templates');

});
