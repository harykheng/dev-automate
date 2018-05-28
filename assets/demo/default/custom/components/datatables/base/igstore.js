//== Class definition

var DatatableHtmlTableDemo = function () {
    //== Private functions

    // demo initializer
    var demo = function () {

        var datatable = $('.m-datatable').mDatatable({
            data: {
                saveState: { cookie: false },
            },
            search: {
                input: $('#generalSearch'),
            },
            columns: [
                {
                    field: 'Image',
                    type: 'image',
                    width: '100px',
                },
                {
                    field: 'Product',
                    title: 'Product',
                    width: '680px',
                },
                {
                    field: 'Action',
                    title: 'Action',
                    width: '50px',
                },

            ],
        });

    };

    return {
        //== Public functions
        init: function () {
            // init dmeo
            demo();
        },
    };
}();

jQuery(document).ready(function () {
    DatatableHtmlTableDemo.init();
});