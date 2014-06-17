(function(homeController) {

	var data = require("../data")

	homeController.init = function(app) {
		app.get("/", function(req, res) {

			data.getNoteCategories(function(err, results) {

				res.render("index", { 
					title: "express " + "engine",
					error: err,
					categories: results
				});
			});
		});

		app.post('/newCategory', function (req, res) {
			console.log(req.body.category);
		})
	};

})(module.exports);