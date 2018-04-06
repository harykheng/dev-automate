//== Class definition

var DatatableColumnRenderingDemo = function () {
    //== Private functions

    // basic demo
    var demo = function () {

        var datatable = $('.m_datatable').mDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: 'https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php',
                    },
                },
                pageSize: 10, // display 20 records per page
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true,
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: '', // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#generalSearch'),
                delay: 400,
            },

            rows: {
                callback: function (row, data, index) {
                },
            },

            // columns definition
            columns: [
                {
                    field: "ShipName",
                    title: "Name",
                    sortable: 'asc', // default sort
                    filterable: false, // disable or enable filtering
                    width: 200
                }, {
                    field: "Notes",
                    title: "Description",
                    width: 450
                }, {
                    field: 'Status',
                    title: 'Total Audience',
                    width: 150,
                    // callback function support for column rendering
                    template: function (data) {
                        var type = {
                            1: { 'title': 'Pending', 'class': 'm--font-success' },
                            2: { 'title': 'Delivered', 'class': ' m--font-primary' },
                            3: { 'title': 'Canceled', 'class': ' m--font-danger' }
                        };
                        return '<span class="m--font ' + type[data.Type].class +
                            ' m--font-state">' + type[data.Type].title + '</span>';
                    },
                }, {
                    field: "Actions",
                    width: 110,
                    title: "Actions",
                    sortable: false,
                    overflow: 'visible',
                    template: function (row, index, datatable) {
                        var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
                        return '<span>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\
							<i class="la la-ellipsis-h"></i>\
						</a>\
					</span>';
                    }
                }],
        });

        var query = datatable.getDataSourceQuery();

        $('#m_form_status').on('change', function () {
            // shortcode to datatable.getDataSourceParam('query');
            var query = datatable.getDataSourceQuery();
            query.Status = $(this).val().toLowerCase();
            // shortcode to datatable.setDataSourceParam('query', query);
            datatable.setDataSourceQuery(query);
            datatable.load();
        }).val(typeof query.Status !== 'undefined' ? query.Status : '');

        $('#m_form_type').on('change', function () {
            // shortcode to datatable.getDataSourceParam('query');
            var query = datatable.getDataSourceQuery();
            query.Type = $(this).val().toLowerCase();
            // shortcode to datatable.setDataSourceParam('query', query);
            datatable.setDataSourceQuery(query);
            datatable.load();
        }).val(typeof query.Type !== 'undefined' ? query.Type : '');

        $('#m_form_status, #m_form_type').selectpicker();
    };

    return {
        // public functions
        init: function () {
            demo();
        },
    };
}();

jQuery(document).ready(function () {
    DatatableColumnRenderingDemo.init();
});