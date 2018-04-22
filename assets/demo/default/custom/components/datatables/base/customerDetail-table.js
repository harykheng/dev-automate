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
					field: 'Invoice Number',
					type: 'number',
				},
				{
					field: 'Time',
					type: 'date'
				},
				{
					field: 'Product Name',
					type: 'text'
				},
				{
					field: 'Total',
					type: "number"
				},{
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
					width: '95px',
					title: 'Category',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Fisik', 'class': ' m-badge-fisik'},
							2: {'title': 'Digital', 'class': ' m-badge-digital'},
						};
						return '<span class="m--font-bold m--font-' +
							status[row.Category].class + '">' +
							status[row.Category].title + '</span>';
					},
				},
			],
		});

		$('#m_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Category');
		});

		$('#m_form_type').selectpicker();

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