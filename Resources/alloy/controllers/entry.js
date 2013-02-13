function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        height: "100dp",
        width: "95%",
        backgroundColor: "#f8f8f8",
        borderColor: "#88f",
        borderWidth: 3,
        borderRadius: 8,
        top: "10dp",
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.name = A$(Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        top: "5dp",
        left: "10dp",
        right: "100dp",
        id: "name",
        text: typeof $model.__transform.name != "undefined" ? $model.__transform.name : $model.get("name")
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.name);
    $.__views.position = A$(Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "14dp",
            fontWeight: "normal"
        },
        height: Ti.UI.SIZE,
        top: "25dp",
        bottom: "25dp",
        left: "10dp",
        right: "10dp",
        id: "position",
        text: typeof $model.__transform.position != "undefined" ? $model.__transform.position : $model.get("position")
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.position);
    $.__views.team = A$(Ti.UI.createLabel({
        color: "#888",
        font: {
            fontSize: "14dp",
            fontWeight: "normal"
        },
        height: Ti.UI.SIZE,
        bottom: "5dp",
        left: "10dp",
        right: "10dp",
        textAlign: "right",
        id: "team",
        text: typeof $model.__transform.team != "undefined" ? $model.__transform.team : $model.get("team")
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.team);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;