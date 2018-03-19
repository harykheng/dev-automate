//== Class definition

var DatatableColumnWidthDemo = function () {
    //== Private functions

    // basic demo
    var demo = function () {

        var datatable = $('.m_datatable').mDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: 'https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php'
                    }
                },
                pageSize: 10,
                serverPaging: true,
                serverFiltering: false,
                serverSorting: true
            },

            // layout definition
            layout: {
                theme: 'default', // datatable theme
                class: '', // custom wrapper class
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                height: null, // datatable's body's fixed height
                footer: false // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#generalSearch')
            },

            // columns definition
            columns: [{
                field: "OrderID",
                title: "Name",
                sortable: 'asc', // default sort
                filterable: false, // disable or enable filtering
                width: 150
            }, {
                field: "Notes",
                title: "Description",
                width: 500
            }, {
                field: 'Status',
                title: 'Type',
                width: 100,
                // callback function support for column rendering
                template: function (data) {
                    var status = {
                        1: { 'title': 'Pending', 'class': 'm-link--success' },
                        2: { 'title': 'Delivered', 'class': ' m-link--primary' },
                        3: { 'title': 'Canceled', 'class': ' m-link--danger' },
                        4: { 'title': 'Success', 'class': ' m-link--success' },
                        5: { 'title': 'Info', 'class': ' m-link--info' },
                        6: { 'title': 'Danger', 'class': ' m-link--danger' },
                        7: { 'title': 'Warning', 'class': ' m-link--danger' },
                        };
                    return '<span class="m-link ' + status[data.Status].class +
                        ' m-link--state">' + status[data.Status].title + '</span>';
                    },
                }, {
                field: "ShipDate",
                title: "Priority",
                width: 100
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
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					</span>';
                }
            }]
        });
    };

    return {
        // public functions
        init: function () {
            demo();
        }
    };
}();

jQuery(document).ready(function () {
    DatatableColumnWidthDemo.init();
});