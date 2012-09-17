define(['jquery'], function ($) {
    // XXX Prototype implementation
    return {
        get: function(id) {
            var data;
            $.get('./data.json', function(d) {
                data = d;
            });
            return data;
        },
    };
});
