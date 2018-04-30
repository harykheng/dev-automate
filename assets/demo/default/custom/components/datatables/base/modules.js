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
					width: '250px'
				},
				{
                    field: 'Description',
					type: 'Description',
					width: '480px'
                }, 
                {
                    field: 'Type',
					title: 'Type',
					width: '100px',
					// callback function support for column rendering
					template: function(row) {
						var type = {
                            1: { 'title': 'WORKFLOW', 'class': ' m--font-success' },
                            2: { 'title': 'PROMOTION', 'class': ' m--font-warning' },
                        };
                        return '<span class="m--font-bold m--font- ' + type[row.Type].class +
                            ' m-link--state">' + type[row.Type].title + '</span>';
					},
                },
                {
                    field: 'Priority',
					type: 'number',
					width: '80px'
				}, 
				{
					field: 'Action',
					width: '80px'
				},
			],
		});


		$('#m_form_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Type');
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