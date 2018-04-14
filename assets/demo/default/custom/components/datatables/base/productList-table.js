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
					field: 'Price',
					type: 'number',
				},{
					field: 'Category',
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