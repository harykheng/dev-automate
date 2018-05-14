//== Class definition
var Select2 = function () {
    //== Private functions
    var demos = function () {
        // loading data from array
        var data = [{
            id: 0,
            text: 'Enhancement'
        }, {
            id: 1,
            text: 'Bug'
        }, {
            id: 2,
            text: 'Duplicate'
        }, {
            id: 3,
            text: 'Invalid'
        }, {
            id: 4,
            text: 'Wontfix'
        }];

        // loading remote data

        function formatRepo(repo) {
            if (repo.loading) return repo.text;
            var markup = "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
            if (repo.description) {
                markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
            }
            markup += "<div class='select2-result-repository__statistics'>" +
                "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
                "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
                "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
                "</div>" +
                "</div></div>";
            return markup;
        }

        function formatRepoSelection(repo) {
            return repo.full_name || repo.text;
        }

        // custom styles

        // tagging support
        $('#m_select2_12_1, #m_select2_12_2, #m_select2_12_3, #m_select2_12_4').select2({
            placeholder: "Select an option",
        });

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