exports.definition = {
    config: {
        "columns": {
            "name": "TEXT",
            "team": "TEXT",
            "position": "TEXT"
        },
        // "defaults": {
        //     "name": "-",
        //     "team": "-",
        //     "position": "-"
        // },
        "adapter": {
          // "type": "sql",
          "type": "sql_new",
            "collection_name": "player"
        }
    }
}