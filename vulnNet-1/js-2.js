! function(a, e) {
    for (var t in e) a[t] = e[t]
}(window, function(a) {
    var e = {};

    function t(n) {
        if (e[n]) return e[n].exports;
        var s = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return a[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports
    }
    return t.m = a, t.c = e, t.d = function(a, e, n) {
        t.o(a, e) || Object.defineProperty(a, e, {
            enumerable: !0,
            get: n
        })
    }, t.r = function(a) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(a, "__esModule", {
            value: !0
        })
    }, t.t = function(a, e) {
        if (1 & e && (a = t(a)), 8 & e) return a;
        if (4 & e && "object" == typeof a && a && a.__esModule) return a;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: a
            }), 2 & e && "string" != typeof a)
            for (var s in a) t.d(n, s, function(e) {
                return a[e]
            }.bind(null, s));
        return n
    }, t.n = function(a) {
        var e = a && a.__esModule ? function() {
            return a.default
        } : function() {
            return a
        };
        return t.d(e, "a", e), e
    }, t.o = function(a, e) {
        return Object.prototype.hasOwnProperty.call(a, e)
    }, t.p = "http://broadcast.vulnnet.thm", t(t.s = 0)
}({
    0: function(a, e, t) {
        a.exports = t("WdQY")
    },
    WdQY: function(a, e, t) {
        "use strict";

        function n(a, e, t) {
            return e in a ? Object.defineProperty(a, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[e] = t, a
        }
        t.r(e);
        var s = t("kiQV");

        function l(a) {
            var e = a.host,
                t = a.chatAlias,
                n = a.callbackAlias,
                s = a.lang;
            return fetch(function(a) {
                var e = a.host,
                    t = a.chatAlias,
                    n = void 0 === t ? "" : t,
                    s = a.callbackAlias,
                    l = void 0 === s ? "" : s,
                    i = a.lang,
                    c = void 0 === i ? "en-US" : i;
                return "".concat(void 0 === e ? "http://broadcast.vulnnet.thm" : e).concat("/", "?_alias=").concat(n, "&_callbackAlias=").concat(l, "&_lang=").concat(c)
            }({
                host: e,
                chatAlias: t,
                callbackAlias: n,
                lang: s
            })).then((function(a) {
                return a.json()
            })).then((function(a) {
                return {
                    chatAgentsAvailable: a.agents > 0,
                    callbackAsapAgentsAvailable: a.callbackAsapAgentsAvailable > 0,
                    callbackScheduleAgentsAvailable: a.callbackScheduleAgentsAvailable > 0
                }
            }))
        }
        t.d(e, "INTERVAL_TIME", (function() {
            return i
        })), t.d(e, "default", (function() {
            return r
        }));
        var i = 5e3,
            c = function() {},
            r = function a() {
                var e = this;
                ! function(a, e) {
                    if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, a), n(this, "clearInterval", (function() {
                    e.agentsAvailabilityCheckInterval && (clearInterval(e.agentsAvailabilityCheckInterval), e.agentsAvailabilityCheckInterval = null)
                })), n(this, "checkAgentsAvailability", (function() {
                    l({
                        host: e.host,
                        chatAlias: e.chatAlias,
                        callbackAlias: e.callbackAlias,
                        lang: e.lang
                    }).then(e.updateAgentsStatus)
                })), n(this, "startAgentsAvailabilityChecker", (function(a) {
                    var t = a.host,
                        n = a.chatAlias,
                        s = a.callbackAlias,
                        c = a.lang,
                        r = void 0 === c ? "en-US" : c;
                    e.callbackAlias = s, e.chatAlias = n, e.host = t, e.lang = r, e.clearInterval(), l({
                        host: t,
                        chatAlias: n,
                        callbackAlias: s,
                        lang: r
                    }).then(e.updateAgentsStatus), e.agentsAvailabilityCheckInterval = setInterval(e.checkAgentsAvailability, i)
                })), n(this, "registerFunctions", (function(a) {
                    var t = a.startGenesysSession,
                        n = void 0 === t ? e.startGenesysSession : t,
                        s = a.endGenesysSession,
                        l = void 0 === s ? e.endGenesysSession : s;
                    e.startGenesysSession = n, e.endGenesysSession = l
                })), n(this, "startChatSession", (function() {
                    e.startGenesysSession(), e.chatInProgress = !0
                })), n(this, "updateMedaliaScenario", (function(a) {
                    e.medaliaScenario = a
                })), n(this, "updateAgentsStatus", (function(a) {
                    var t = a.chatAgentsAvailable,
                        n = a.callbackAsapAgentsAvailable,
                        s = a.callbackScheduleAgentsAvailable;
                    e.chatAgentsAvailable = t, e.callbackAsapAgentsAvailable = n, e.callbackScheduleAgentsAvailable = s
                })), n(this, "quitChatSession", (function() {
                    e.endGenesysSession(), e.chatInProgress = !1
                })), this.agentsAvailabilityCheckInterval = null, this.callbackAlias = "", this.callbackAsapAgentsAvailable = !1, this.callbackScheduleAgentsAvailable = !1, this.chatAgentsAvailable = !1, this.chatAlias = "", this.chatInProgress = !1, this.endGenesysSession = c, this.host = "", this.lang = "en-US", this.medaliaScenario = "", this.startGenesysSession = c
            };
        window.opbox.services.register({
            serviceName: s.a
        }, r)
    },
    kiQV: function(a) {
        a.exports = JSON.parse('{"a":"opbox-customer-chat-service"}')
    }
}));
//# sourceMappingURL=index_7ed54732.js.map