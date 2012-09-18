define(['app/templates'], function (templates) {

    // -- View controlers --
    var metadataModal = function(data) {
        // var modalData = {
        //     title: 'Edit Metadata',
        //     body: templates.metadataForm(data),
        // }
        // var modal = templates.modal(modalData);
        var modal = templates.metadataForm(data);
        $('#metadata-modal').html(modal);
    };

    return {
        metadataModal: metadataModal,
    };
});
