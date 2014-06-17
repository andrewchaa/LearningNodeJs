(function (database) {

    var mongodb = require('mongodb');
    var mongoUrl = 'mongodb://localhost:27017/theBoard';
    var theDb;

    database.getdb = function(next) {
        if (!theDb) {
            mongodb.MongoClient.connect(mongoUrl, function(err, db) {
                if (err) {
                    next (err, null)
                } else {
                    theDb = {
                        db : db,
                        notes : db.collection("notes")
                    }

                    next(null, theDb);
                }
            });
        } else {
            next (null, theDb)
        }

    }

})(module.exports)