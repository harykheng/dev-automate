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
                    width: '150px'                    
                },
                {
                    field: 'Description',
                    type: 'Description',
                    width: '480px'
                },
                {
                    field: 'Status',
                    title: 'Status',
                    width: '180px',
                    // callback function support for column rendering
                    template: function (row) {
                        var status = {
                            1: { 'title': 'ON-GOING', 'class': ' m--font-success' },
                            2: { 'title': 'PAUSE', 'class': ' m--font-metal' },
                        };
                        return '<span class="m--font-bold m--font- ' + status[row.Status].class +
                            ' m-link--state">' + status[row.Status].title + '</span>';
                    },
                },
                {
                    field: 'Action',
                    width: '50px'
                }, 
            ],
        });


        $('#m_form_type').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#m_form_status, #m_form_type').selectpicker();

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