function Controller() {
    function addPlayer() {
        Alloy.createController("add").getView().open();
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
        title: "Player",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.index.activity.onCreateOptionsMenu = function(e) {
        var __alloyId15 = {
            title: "add entry",
            icon: "/ic_menu_add.png",
            id: "__alloyId14"
        };
        $.__views.__alloyId14 = A$(e.menu.add(_.pick(__alloyId15, Alloy.Android.menuItemCreateArgs)), "MenuItem", e.menu);
        _.each(_.omit(__alloyId15, Alloy.Android.menuItemCreateArgs), function(v, k) {
            $.__views.__alloyId14[k] = v;
        });
        addPlayer ? $.__views.__alloyId14.on("click", addPlayer) : __defers["$.__views.__alloyId14!click!addPlayer"] = !0;
    };
    $.__views.scroll = A$(Ti.UI.createScrollView({
        layout: "vertical",
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: !1,
        showHorizontalScrollIndicator: !0,
        top: "40dp",
        bottom: 0,
        id: "scroll"
    }), "ScrollView", $.__views.index);
    $.__views.index.add($.__views.scroll);
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
    exports.destroy = function() {
        Alloy.Collections.player.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    Alloy.Collections.player.fetch();
    $.index.open();
    __defers["$.__views.__alloyId14!click!addPlayer"] && $.__views.__alloyId14.on("click", addPlayer);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;