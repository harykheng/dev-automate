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
                    field: 'Buyer',
                    type: 'text',
                },
                {
                    field: 'Status',
                    title: 'Status',
                    // callback function support for column rendering
                    template: function (row) {
                        var status = {
                            1: { 'title': 'On-Going', 'class': 'm-badge--success' },
                            2: { 'title': 'Another Product', 'class': ' m-badge--danger' },
                        };
                        return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
                    },
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