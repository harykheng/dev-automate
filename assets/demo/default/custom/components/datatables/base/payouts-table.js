//== Class definition

var DatatableHtmlTableDemo = function() {
	//== Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.m-datatable').mDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#generalSearch'),
			},
			columns: [
				{
					field: 'Balance',
					type: 'number',
				},
				{
					field: 'Date',
					type: 'date',
					format: 'YYYY/MM/DD',
				}, {
					field: 'Status',
					title: 'Status',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Done', 'class': 'm-badge--done'},
							2: {'title': 'Fail', 'class': ' m-badge--fail'},
							3: {'title': 'Pending', 'class': ' m-badge--pending'},
						};
						return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
					},
				}, {
					field: 'Category',
					title: 'Category',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'TRANSACTION', 'class': ' m-badge-transaction'},
							2: {'title': 'CASHOUT', 'class': ' m-badge-cashout'},
						};
						return '<span class="m--font-bold m--font-' +
							status[row.Category].class + '">' +
							status[row.Category].title + '</span>';
					},
				},
			],
		});

		$('#m_form_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Status');
		});

		$('#m_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Category');
		});

		$('#m_form_status, #m_form_type').selectpicker();

	};

	return {
		//== Public functions
		init: function() {
			// init dmeo
			demo();
		},
	};
}();

jQuery(document).ready(function() {
	DatatableHtmlTableDemo.init();
});