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
                    field: 'Name',
                    type: 'text',
                    width: '250px'
                },
                {
                    field: 'Description',
                    type: 'Description',
                    width: '480px'
                },
                {
                    field: 'Total Audience',
                    type: 'number',
                    width: '150px'
                },
                {
                    field: 'Action',
                    width: '50px'
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