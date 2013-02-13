var preload_data = [
    {name: 'Jamal Charles', team:'KC Cheifs', position: 'RB'},
    {name: 'Reggie Bush', team: 'Miami Dolphins', position: 'RB'}
];


migration.up = function(migrator) {
    migrator.createTable({
        "columns": {
            "name":"TEXT",
            "position":"TEXT",
            "team":"TEXT"
        }
    });
  Ti.API.info('created table');
  for (var i = 0; i < preload_data.length; i++) { 
          migrator.insertRow(preload_data[i]);
      }
      Ti.API.info('inserted data');
};

migration.down = function(migrator) {
    migrator.dropTable("player");
};
