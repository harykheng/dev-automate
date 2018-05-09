//== Class definition
var Select2 = function () {
    //== Private functions
    var demos = function () {
        // multi select
        $('#m_select2_3, #m_select2_3_validate').select2({
            placeholder: "Inputs / Trigger...",
        });

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
    }

    var modalDemos = function () {
        $('#m_select2_modal').on('shown.bs.modal', function () {
            // multi select
            $('#m_select2_3_modal').select2({
                placeholder: "Inputs / Trigger...",
            });
            
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