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
                    width: '130px'
                },
                {
                    field: 'Email',
                    type: 'email',
                    width: '180px'
                },
                {
                    field: 'MobileNo',
                    type: 'number',
                    width: '110px'
                },
                {
                    field: 'Note',
                    type: 'text',
                    width: '480px'
                },
                {
                    field: 'Action',
                    width: '50px'
                },
            ],
        });


        $('#m_form_type').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Type');
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