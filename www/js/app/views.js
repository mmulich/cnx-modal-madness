define(['app/templates'], function (templates) {

    // -- View controllers --
    var metadataModal = function(data) {
        var modalData = {
            title: 'Edit Metadata',
            body: templates.metadataForm(data),
        }
        var modal = templates.modalBase(modalData);
        $('#metadata-modal').html(modal);
    };

    return {
        metadataModal: metadataModal,
    };
});
