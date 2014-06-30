(function (notesController) {

    var data = require("../data");

    notesController.init = function (app) {
        app.get('/api/notes/:categoryName', function(req, res) {

            data.getNotesByCategoryName(req.params.categoryName, function(err, category) {
                if (err) {
                    console.log('failed to get category');
                    res.send(400, err)
                }
                else {
                    res.set("Content-Type", "application/json");
                    res.send(category);
                }
            });
        });

        app.post("/api/notes/:categoryName", function (req, res) {
            var note = {
                name : req.body.note,
                author : req.body.author,
                colour : req.body.colour
            }

            console.log(note);

            data.addNote(req.params.categoryName, note, function (err, count) {
                if (err) {
                    console.log("failed to save " + req.params.categoryName);
                    res.send(400, "Failed to add note to the database");

                } else {
                    res.set("Content-Type", "application/json");
                    res.send(201, note)
                }
            })
        });
    };

})(module.exports)