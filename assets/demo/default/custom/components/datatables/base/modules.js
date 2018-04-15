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
                    field: 'Description',
                    type: 'Description',
                }, 
                {
                    field: 'Type',
                    title: 'Type',
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