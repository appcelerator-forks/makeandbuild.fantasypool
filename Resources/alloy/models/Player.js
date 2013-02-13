exports.definition = {
    config: {
        columns: {
            name: "TEXT",
            team: "TEXT",
            position: "TEXT"
        },
        adapter: {
            type: "sql_new",
            collection_name: "player"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("player", exports.definition, [ function(migration) {
    migration.name = "player";
    migration.id = "201301130424364";
    var preload_data = [ {
        name: "Jamal Charles",
        team: "KC Cheifs",
        position: "RB"
    }, {
        name: "Reggie Bush",
        team: "Miami Dolphins",
        position: "RB"
    } ];
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                name: "TEXT",
                position: "TEXT",
                team: "TEXT"
            }
        });
        Ti.API.info("created table");
        for (var i = 0; i < preload_data.length; i++) migrator.insertRow(preload_data[i]);
        Ti.API.info("inserted data");
    };
    migration.down = function(migrator) {
        migrator.dropTable("player");
    };
} ]);

collection = Alloy.C("player", exports.definition, model);

exports.Model = model;

exports.Collection = collection;