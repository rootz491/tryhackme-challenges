! function(e, t) {
    for (var n in t) e[n] = t[n]
}(window, function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "http://vulnnet.thm/index.php?referer=", n(n.s = 0)
}({
    0: function(e, t, n) {
        e.exports = n("O14P")
    },
    O14P: function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        n.r(t), n.d(t, "default", (function() {
            return i
        }));
        let o = () => ({
            events: {},
            emit(e, ...t) {
                for (let n of this.events[e] || []) n(...t)
            },
            on(e, t) {
                return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = this.events[e].filter(e => e !== t)
            }
        });
        var i = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o();
                r(this, e), this.emitter = t
            }
            var t;
            return (t = [{
                key: "onReloadPaymentInfo",
                value: function(e) {
                    return this.emitter.on("RELOAD_PAYMENT_INFO", e)
                }
            }, {
                key: "reloadPaymentInfo",
                value: function() {
                    this.emitter.emit("RELOAD_PAYMENT_INFO")
                }
            }]) && function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(e.prototype, t), e
        }();
        window.opbox.services.register({
            serviceName: "opbox-affiliate-program-service"
        }, i)
    }
}));
//# sourceMappingURL=index_d8338055.js.map