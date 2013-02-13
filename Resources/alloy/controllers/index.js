function Controller() {
    function addPlayer() {
        Alloy.createController("add").getView().open();
    }
    function IndexOpen(e) {
        $.logo.init({
            image: "/images/alloy.png",
            width: 216,
            height: 200
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    Alloy.Collections.instance("player");
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        top: "0dp",
        fullscreen: !1,
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.__alloyId13 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Player",
        id: "__alloyId13"
    }), "Window", null);
    IndexOpen ? $.__views.__alloyId13.on("open", IndexOpen) : __defers["$.__views.__alloyId13!open!IndexOpen"] = !0;
    $.__views.__alloyId15 = A$(Ti.UI.createButton({
        title: "add player",
        id: "__alloyId15"
    }), "Button", null);
    addPlayer ? $.__views.__alloyId15.on("click", addPlayer) : __defers["$.__views.__alloyId15!click!addPlayer"] = !0;
    $.__views.__alloyId13.rightNavButton = $.__views.__alloyId15;
    $.__views.scroll = A$(Ti.UI.createScrollView({
        layout: "vertical",
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: !1,
        showHorizontalScrollIndicator: !0,
        id: "scroll"
    }), "ScrollView", $.__views.__alloyId13);
    $.__views.__alloyId13.add($.__views.scroll);
    var __alloyId19 = function(e) {
        var i, models = Alloy.Collections.player.models, len = $.__views.scroll.children.length;
        for (i = 0; i < len; i++) {
            var child = $.__views.scroll.children[len - 1 - i];
            child && $.__views.scroll.remove(child);
        }
        len = models.length;
        for (i = 0; i < len; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = Alloy.createController("entry", {
                id: "__alloyId17",
                $model: __alloyId16
            });
            __alloyId18.setParent($.__views.scroll);
        }
    };
    Alloy.Collections.player.on("fetch destroy change add remove reset", __alloyId19);
    $.__views.drawer = Alloy.createWidget("com.appcelerator.drawer", "widget", {
        id: "drawer"
    });
    $.__views.drawer.setParent($.__views.__alloyId13);
    $.__views.__alloyId12 = A$(Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId13,
        id: "__alloyId12"
    }), "NavigationGroup", $.__views.index);
    $.__views.index.add($.__views.__alloyId12);
    exports.destroy = function() {
        Alloy.Collections.player.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    $.drawer.init({
        mainWindow: $.index,
        buttons: [ {
            id: "One",
            title: "Scores",
            click: function(e) {
                alert("Scores");
            },
            enabled: function(e) {
                return !1;
            }
        }, {
            id: "Two",
            title: "Trades",
            click: function(e) {
                alert("Trades");
            }
        }, {
            id: "Three",
            title: "Lineups",
            click: function(e) {
                alert("Lineups");
            }
        } ],
        autoClose: !0,
        gutter: 5,
        overrideMenu: !1,
        annoy: !0
    });
    $.drawer.checkEnabled();
    Alloy.Collections.player.fetch();
    $.index.open();
    __defers["$.__views.__alloyId13!open!IndexOpen"] && $.__views.__alloyId13.on("open", IndexOpen);
    __defers["$.__views.__alloyId15!click!addPlayer"] && $.__views.__alloyId15.on("click", addPlayer);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;