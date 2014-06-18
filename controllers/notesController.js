(function (notesController) {

    var data = require("../data");

    notesController.init = function (app) {
        app.get('/api/notes/:categoryName', function(req, res) {

            data.getNoteByCategoryName(req.params.categoryName, function(err, category) {
                if (err)
                    console.log('failed to get category');
                else {
                    res.set("Content-Type", "application/json");
                    res.send(category);
                }
            });

        });
    };

})(module.exports)