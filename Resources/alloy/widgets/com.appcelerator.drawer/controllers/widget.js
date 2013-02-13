function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "com.appcelerator.drawer/" + s : s.substring(0, index) + "/com.appcelerator.drawer/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function pullTabClick(e) {
        $._isOpen = !$._isOpen;
        $.pulltab.backgroundImage = "/images/com.appcelerator.drawer/" + ($._isOpen ? "PullTabDown.png" : "PullTabUp.png");
        Ti.API.info(($._isOpen ? "Opening" : "Closing") + " the drawer (buttonbar=" + ($._params.iconSize + $._params.gutter * 2) + ", drawer=" + $.drawer.size.height + ")");
        $.pulltab.accessibilityValue = $._isOpen ? "Open" : "Closed";
        $.pulltab.accessibilityHint = "Click to " + ($._isOpen ? "close" : "open") + " the drawer";
        $.drawer.animate({
            bottom: $._isOpen ? 0 : -($._params.iconSize + $._params.gutter * 2),
            opacity: $._isOpen ? $._params.openOpacity : $._params.closeOpacity,
            duration: $._params.animationDuration
        });
        $._isOpen && $._annoy && clearInterval($._annoy);
    }
    function omit(obj) {
        var ArrayProto = Array.prototype, slice = ArrayProto.slice, concat = ArrayProto.concat, copy = {}, keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) _.contains(keys, key) || (copy[key] = obj[key]);
        return copy;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.drawer = A$(Ti.UI.createView({
        left: 0,
        right: 0,
        bottom: -48,
        width: Ti.UI.FILL,
        height: 64,
        layout: "vertical",
        opacity: 0.75,
        id: "drawer"
    }), "View", null);
    $.addTopLevelView($.__views.drawer);
    $.__views.pulltab = A$(Ti.UI.createButton({
        backgroundImage: "/images/com.appcelerator.drawer/PullTabUp.png",
        center: {
            x: "50%"
        },
        top: 0,
        width: 48,
        height: 16,
        accessibilityLabel: "Drawer",
        accessibilityValue: "Closed",
        accessibilityHint: "Click to open the drawer",
        id: "pulltab"
    }), "Button", $.__views.drawer);
    $.__views.drawer.add($.__views.pulltab);
    pullTabClick ? $.__views.pulltab.on("click", pullTabClick) : __defers["$.__views.pulltab!click!pullTabClick"] = !0;
    $.__views.buttonbar = A$(Ti.UI.createView({
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: 48,
        backgroundColor: "black",
        layout: "horizontal",
        id: "buttonbar"
    }), "View", $.__views.drawer);
    $.__views.drawer.add($.__views.buttonbar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var DRAWER_PULLTAB_HEIGHT = 16, defaults = {
        autoClose: !1,
        iconSize: 48,
        openOpacity: 0.9,
        closeOpacity: 0.75,
        animationDuration: 500,
        gutter: 0,
        overrideMenu: !1,
        annoy: 0
    };
    $._isOpen = !1;
    $._buttons = [];
    $._params = {};
    $._annoy = !1;
    exports.jiggle = function DrawerJiggle() {
        if ($._isOpen || 0) return;
        var animation = require("alloy/animation"), chain = [ Ti.UI.createAnimation({
            bottom: -($._params.iconSize + $._params.gutter * 2) + DRAWER_PULLTAB_HEIGHT,
            duration: 250
        }), Ti.UI.createAnimation({
            bottom: -($._params.iconSize + $._params.gutter * 2) - DRAWER_PULLTAB_HEIGHT / 2,
            duration: 125
        }), Ti.UI.createAnimation({
            bottom: -($._params.iconSize + $._params.gutter * 2),
            duration: 125
        }) ];
        animation.chainAnimate($.drawer, chain);
    };
    exports.checkEnabled = function DrawerCheckEnabled() {
        Object.keys($._buttons).forEach(function(key) {
            var i = parseInt(key, 10);
            $._buttons[i].enabled && ($._buttons[i].button.enabled = $._buttons[i].enabled());
        });
    };
    exports.init = function DrawerInit(args) {
        $._buttons = args.buttons;
        $._params = _.defaults(args, defaults);
        $.buttonbar.height = $._params.iconSize + $._params.gutter * 2;
        $.drawer.height = DRAWER_PULLTAB_HEIGHT + $.buttonbar.height;
        $.drawer.bottom = -$.buttonbar.height;
        Object.keys($._buttons).forEach(function(key) {
            var i = parseInt(key, 10), buttonDesc = omit($._buttons[i], [ "id", "title", "click", "enabled" ]);
            _.extend(buttonDesc, {
                top: $._params.gutter,
                left: $._params.gutter,
                width: $._params.iconSize,
                height: $._params.iconSize,
                backgroundImage: "/images/" + $._buttons[i].id + "Enabled.png",
                backgroundDisabledImage: "/images/" + $._buttons[i].id + "Disabled.png"
            });
            $._buttons[i].button = Ti.UI.createButton(buttonDesc);
            $._buttons[i].button.addEventListener("click", function(e) {
                $._buttons[i].click && $._buttons[i].click(e);
                $._params.autoClose && pullTabClick(e);
            });
            $.buttonbar.add($._buttons[i].button);
        });
        $._params.annoy && ($._annoy = setInterval(function DrawerAnnoy() {
            $._params.annoy > 0 && $._params.annoy--;
            $._params.annoy == 0 && clearInterval($._annoy);
            $.jiggle();
        }, 2000));
    };
    __defers["$.__views.pulltab!click!pullTabClick"] && $.__views.pulltab.on("click", pullTabClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;