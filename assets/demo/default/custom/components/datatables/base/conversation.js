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
          field: 'Channel',
          title: 'Channel',
          // callback function support for column rendering
          template: function (row) {
            var status = {
              1: { 'title': 'Line', 'class': ' m--font-success' },
              2: { 'title': 'Email', 'class': ' m--font-warning' },
              3: { 'title': 'SMS', 'class': ' m--font-danger' },
              4: { 'title': 'Telegram', 'class': ' m--font-primary' },
              5: { 'title': 'Messanger', 'class': ' m--font-info' },
            };
            return '<span class="m--font-bold m--font-' +
              status[row.Channel].class + '">' +
              status[row.Channel].title + '</span>';
          },
        },
        {
          field: 'Duration',
          type: 'time',
          format: 'HH/mm/ss',
        },
        {
          field: 'Status',
          title: 'Status',
          // callback function support for column rendering
          template: function (row) {
            var status = {
              1: { 'title': 'On-Going', 'class': 'm-badge--success' },
              2: { 'title': 'End', 'class': ' m-badge--danger' },
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