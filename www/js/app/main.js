define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    // var util = require('./util');

    var $ = require('jquery');
    require('btstrp/bootstrap-dropdown');
    require('btstrp/bootstrap-modal');
    $('.dropdown-toggle').dropdown();
});
