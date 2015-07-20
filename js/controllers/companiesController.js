var app = app || {};

app.companiesController = (function() {
    function CompaniesController(model) {
        this._model = model;
    }

    CompaniesController.prototype.loadCompanies = function (selector) {
        var _this = this;
        this._model.getStudents()
            .then(function (studentsData) {
                var outputData = {
                    students: studentsData.results
                };

                app.allStudentsView.render(_this, selector, outputData);
            }, function (error) {
                console.log(error.responseText);
            })
    };

    return {
        load: function (model) {
            return new CompaniesController(model);
        }
    }
}());