//== Class definition

var DatatableColumnRenderingDemo = function() {
  //== Private functions

  // basic demo
  var demo = function() {

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
        callback: function(row, data, index) {
        },
      },

      // columns definition
      columns: [
        {
          field: "ShipName",
          title: "Buyer",
          sortable: 'asc', // default sort
          filterable: false, // disable or enable filtering
          width: 200
        }, {
          field: 'Type',
          title: 'Chanel',
          // callback function support for column rendering
          template: function (data) {
            var status = {
              1: { 'title': 'SMS', 'state': 'danger' },
              2: { 'title': 'Telegram', 'state': 'primary' },
              3: { 'title': 'Messanger', 'state': 'accent' },
              4: { 'title': 'Email', 'state': 'warning' },
              5: { 'title': 'Line', 'state': 'success' }
            };
            return '<span class="m--font- ' + status[data.Type].state +
              ' m-badge--dot"></span>&nbsp;<span class="m--font-' +
              status[data.Type].state + '">' + status[data.Type].title +
              '</span>';
          },
        },
        {
          field: 'ShipCountry',
          title: 'Start Time',
          width: 150,
          // callback function support for column rendering
          template: function(data) {
            return data.ShipCountry + ' | ' + data.ShipCity;
          },
        }, {
          field: 'ShipCountry',
          title: 'End Time',
          width: 150,
          // callback function support for column rendering
          template: function (data) {
            return data.ShipCountry + ' | ' + data.ShipCity;
          },
        }, {
          field: 'PaymentDate',
          title: 'Duration',
          width: 150,
        }, {
          field: 'Status',
          title: 'Status',
          width: 100,
          // callback function support for column rendering
          template: function(data) {
            var status = {
              1: {'title': 'Pending', 'class': 'm-badge--brand'},
              2: {'title': 'Delivered', 'class': ' m-badge--metal'},
              3: {'title': 'Canceled', 'class': ' m-badge--primary'},
              4: {'title': 'Success', 'class': ' m-badge--success'},
              5: {'title': 'Info', 'class': ' m-badge--info'},
              6: {'title': 'Danger', 'class': ' m-badge--danger'},
              7: {'title': 'Warning', 'class': ' m-badge--warning'},
            };
            return '<span class="m-badge ' + status[data.Status].class +
                ' m-badge--wide">' + status[data.Status].title + '</span>';
          },
        }, {
          field: 'Actions',
          width: 110,
          title: 'Actions',
          sortable: false,
          overflow: 'visible',
          template: function (row, index, datatable) {
            var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
            return '\
						<div class="dropdown ' + dropup + '">\
							<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
						  	</div>\
						</div>\
					';
          },
        }],
    });

    var query = datatable.getDataSourceQuery();

    $('#m_form_status').on('change', function() {
      // shortcode to datatable.getDataSourceParam('query');
      var query = datatable.getDataSourceQuery();
      query.Status = $(this).val().toLowerCase();
      // shortcode to datatable.setDataSourceParam('query', query);
      datatable.setDataSourceQuery(query);
      datatable.load();
    }).val(typeof query.Status !== 'undefined' ? query.Status : '');

    $('#m_form_type').on('change', function() {
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
    init: function() {
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  DatatableColumnRenderingDemo.init();
});