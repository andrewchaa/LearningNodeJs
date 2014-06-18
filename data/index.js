(function (data) {

	var seedData = require("./seedData");
    var database = require('./database');

	data.getNoteCategories = function (next) {
        database.getdb(function (err, db) {
            db.notes.find().toArray(function (err, notes) {
                if (err)
                    console.log('failed to retrieve notes');

                next(null, notes);
            })
        });
	};

    data.createNewCategory = function (category, next) {
        database.getdb(function (err, db) {
            if (err) {
                next(err)
            } else {
                db.notes.find( { name : category.name } ).count(function (count) {
                    if (count != 0) {
                        next('the category ' + category.name + ' already exists.')
                    } else {
                        db.notes.insert(category, function (err) {
                            if (err) {
                                next(err);
                            } else {
                                next(null);
                            }
                        })
                    }
                })
            }
        });
    };

    function seedDatabase() {
        database.getdb(function (err, db) {
            if (err) {
                console.log('fail to seed database ' + err)
            }

            db.notes.count(function (err, count) {
                if (err) 
                    console.log ('fail to retrieve notes count ' + err)

                if (count == 0) {
                    console.log('seeding the database')
                    seedData.initialNotes.forEach(function (item) {
                        db.notes.insert(item, function (err) {
                            if (err)
                                console.log('failed to insert a note');
                        });
                    });
                } else {
                    console.log('the database is already seeded');
                }
            });
        });
    }

    seedDatabase();

})(module.exports);