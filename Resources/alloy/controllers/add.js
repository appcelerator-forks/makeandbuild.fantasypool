function Controller() {
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
        var entry = Alloy.createModel("player", {
            name: $.name.value,
            team: $.team.value,
            position: getPosition($.position)
        });
        player.add(entry, {
            silent: !0
        });
        entry.save();
        closeWindow();
    }
    function closeWindow() {
        $.addWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.addWin = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "addWin",
        title: "Add Player",
        modal: "true"
    }), "Window", null);
    $.addTopLevelView($.__views.addWin);
    $.__views.name = A$(Ti.UI.createTextField({
        width: "90%",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "name",
        hintText: "player name"
    }), "TextField", $.__views.addWin);
    $.__views.addWin.add($.__views.name);
    $.__views.team = A$(Ti.UI.createTextField({
        width: "90%",
        top: "10p",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        id: "team",
        hintText: "team name"
    }), "TextField", $.__views.addWin);
    $.__views.addWin.add($.__views.team);
    var __alloyId0 = [];
    $.__views.position = A$(Ti.UI.createPicker({
        top: "10dp",
        id: "position"
    }), "Picker", $.__views.addWin);
    $.__views.addWin.add($.__views.position);
    $.__views.__alloyId1 = A$(Ti.UI.createPickerRow({
        title: "QB",
        id: "__alloyId1"
    }), "PickerRow", null);
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = A$(Ti.UI.createPickerRow({
        title: "RB",
        id: "__alloyId2"
    }), "PickerRow", null);
    __alloyId0.push($.__views.__alloyId2);
    $.__views.__alloyId3 = A$(Ti.UI.createPickerRow({
        title: "WR",
        id: "__alloyId3"
    }), "PickerRow", null);
    __alloyId0.push($.__views.__alloyId3);
    $.__views.__alloyId4 = A$(Ti.UI.createPickerRow({
        title: "TE",
        id: "__alloyId4"
    }), "PickerRow", null);
    __alloyId0.push($.__views.__alloyId4);
    $.__views.__alloyId5 = A$(Ti.UI.createPickerRow({
        title: "K",
        id: "__alloyId5"
    }), "PickerRow", null);
    __alloyId0.push($.__views.__alloyId5);
    $.__views.position.add(__alloyId0);
    $.__views.__alloyId6 = A$(Ti.UI.createButton({
        width: "50%",
        top: "10dp",
        title: "Add",
        id: "__alloyId6"
    }), "Button", $.__views.addWin);
    $.__views.addWin.add($.__views.__alloyId6);
    addEntry ? $.__views.__alloyId6.on("click", addEntry) : __defers["$.__views.__alloyId6!click!addEntry"] = !0;
    $.__views.__alloyId7 = A$(Ti.UI.createButton({
        width: "50%",
        top: "10dp",
        title: "Cancel",
        id: "__alloyId7"
    }), "Button", $.__views.addWin);
    $.__views.addWin.add($.__views.__alloyId7);
    closeWindow ? $.__views.__alloyId7.on("click", closeWindow) : __defers["$.__views.__alloyId7!click!closeWindow"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment"), player = Alloy.Collections.player;
    __defers["$.__views.__alloyId6!click!addEntry"] && $.__views.__alloyId6.on("click", addEntry);
    __defers["$.__views.__alloyId7!click!closeWindow"] && $.__views.__alloyId7.on("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;