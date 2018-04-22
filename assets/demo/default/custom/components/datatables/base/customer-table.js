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
					field: 'Name',
					type: 'text',
				},
				{
					field: 'Email',
					type: 'email',
					width: '200px'
				},
				{
					field: 'Mobile Number',
					type: 'number',
					width: '150px'
				},{
					field: 'Gender',
					width: '95px',
					title: 'Gender',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Male'},
							2: {'title': 'Female'},
							3: {'title': '-'},
						};
						return '<span>' + status[row.Gender].title + '</span>';
					},
				},
				{
					field: 'Province',
					type: 'text'
				},
				{
					field: 'Transaction',
					type: 'number'
				},
				
			],
		});

		$('#m_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Gender');
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