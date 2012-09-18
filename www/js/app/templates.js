define(['mustache', 'jquery'], function (Mustache, $) {

    function Renderer(template) {
        /* Return a function that will render the template */
        var tmplt = undefined;
        $.get(template, function(data) { tmplt = data });
        return function(data) { return Mustache.render(tmplt, data) };
    };

    return {
        metadataForm: Renderer('js/templates/metadataForm.html'),
    };
});
