var moment = require('alloy/moment');
var player = Alloy.Collections.player;

function focusText() {
    $.text.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

function getPosition(component) {
  return component.getSelectedRow(0).title;
}

function addEntry() {
    // create a new model instance based on user input
    var entry = Alloy.createModel('player', {
        name : $.name.value,
        team: $.team.value,
        position: getPosition($.position)
    });

    // Add new model to the collection, use silent=true
    // so that a "change" event is not fired and the
    // UI is re-rendered.
    player.add(entry, {silent:true});

    // Save the entry to persistence, which will re-render
    // the UI based on the binding.
    entry.save();

    closeWindow();
}

function closeWindow() {
    $.addWin.close();
}
