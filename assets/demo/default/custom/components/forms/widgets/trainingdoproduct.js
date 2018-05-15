//== Class definition
var Select2 = function () {
    //== Private functions
    var demos = function () {

        // tagging support
        $('#m_select2_11').select2({
            placeholder: "Add a tag",
            tags: true
        });

    }

    //== Public functions
    return {
        init: function () {
            demos();
            modalDemos();
        }
    };
}();

//== Initialization
jQuery(document).ready(function () {
    Select2.init();
});