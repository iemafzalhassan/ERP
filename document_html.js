(()=>{
    function e(e, t) {
        return Object.keys(t).forEach(function(n) {
            "default" === n || "__esModule" === n || e.hasOwnProperty(n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }),
        e
    }
    function t(e, t, n, i) {
        Object.defineProperty(e, t, {
            get: n,
            set: i,
            enumerable: !0,
            configurable: !0
        })
    }
    function n(e) {
        return e && e.__esModule ? e.default : e
    }
    var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
      , r = {}
      , o = {}
      , s = i.parcelRequire94c2;
    null == s && ((s = function(e) {
        if (e in r)
            return r[e].exports;
        if (e in o) {
            var t = o[e];
            delete o[e];
            var n = {
                id: e,
                exports: {}
            };
            return r[e] = n,
            t.call(n.exports, n, n.exports),
            n.exports
        }
        var i = Error("Cannot find module '" + e + "'");
        throw i.code = "MODULE_NOT_FOUND",
        i
    }
    ).register = function(e, t) {
        o[e] = t
    }
    ,
    i.parcelRequire94c2 = s),
    s.register("s0gdx", function(n, i) {
        t(n.exports, "popperGenerator", ()=>s("1olVE").popperGenerator),
        t(n.exports, "detectOverflow", ()=>s("lTSjH").default),
        t(n.exports, "createPopperBase", ()=>s("1olVE").createPopper),
        t(n.exports, "createPopper", ()=>s("7d5Gb").createPopper),
        t(n.exports, "createPopperLite", ()=>s("bTb7v").createPopper);
        var r = s("c9wt2")
          , o = s("dZHgO");
        s("1olVE"),
        s("lTSjH"),
        s("7d5Gb"),
        s("bTb7v"),
        e(n.exports, r),
        e(n.exports, o)
    }),
    s.register("c9wt2", function(e, n) {
        t(e.exports, "top", ()=>i),
        t(e.exports, "bottom", ()=>r),
        t(e.exports, "right", ()=>o),
        t(e.exports, "left", ()=>s),
        t(e.exports, "auto", ()=>a),
        t(e.exports, "basePlacements", ()=>l),
        t(e.exports, "start", ()=>c),
        t(e.exports, "end", ()=>u),
        t(e.exports, "clippingParents", ()=>d),
        t(e.exports, "viewport", ()=>p),
        t(e.exports, "popper", ()=>f),
        t(e.exports, "reference", ()=>h),
        t(e.exports, "variationPlacements", ()=>g),
        t(e.exports, "placements", ()=>m),
        t(e.exports, "beforeRead", ()=>v),
        t(e.exports, "read", ()=>y),
        t(e.exports, "afterRead", ()=>b),
        t(e.exports, "beforeMain", ()=>_),
        t(e.exports, "main", ()=>x),
        t(e.exports, "afterMain", ()=>w),
        t(e.exports, "beforeWrite", ()=>E),
        t(e.exports, "write", ()=>A),
        t(e.exports, "afterWrite", ()=>T),
        t(e.exports, "modifierPhases", ()=>C);
        var i = "top"
          , r = "bottom"
          , o = "right"
          , s = "left"
          , a = "auto"
          , l = [i, r, o, s]
          , c = "start"
          , u = "end"
          , d = "clippingParents"
          , p = "viewport"
          , f = "popper"
          , h = "reference"
          , g = l.reduce(function(e, t) {
            return e.concat([t + "-" + c, t + "-" + u])
        }, [])
          , m = [].concat(l, [a]).reduce(function(e, t) {
            return e.concat([t, t + "-" + c, t + "-" + u])
        }, [])
          , v = "beforeRead"
          , y = "read"
          , b = "afterRead"
          , _ = "beforeMain"
          , x = "main"
          , w = "afterMain"
          , E = "beforeWrite"
          , A = "write"
          , T = "afterWrite"
          , C = [v, y, b, _, x, w, E, A, T]
    }),
    s.register("dZHgO", function(e, n) {
        t(e.exports, "applyStyles", ()=>s("jBUBR").default),
        t(e.exports, "arrow", ()=>s("f0EL8").default),
        t(e.exports, "computeStyles", ()=>s("kp0lY").default),
        t(e.exports, "eventListeners", ()=>s("dINuF").default),
        t(e.exports, "flip", ()=>s("dGvES").default),
        t(e.exports, "hide", ()=>s("2k9PQ").default),
        t(e.exports, "offset", ()=>s("6qSjY").default),
        t(e.exports, "popperOffsets", ()=>s("chg4A").default),
        t(e.exports, "preventOverflow", ()=>s("1yqIU").default),
        s("jBUBR"),
        s("f0EL8"),
        s("kp0lY"),
        s("dINuF"),
        s("dGvES"),
        s("2k9PQ"),
        s("6qSjY"),
        s("chg4A"),
        s("1yqIU")
    }),
    s.register("jBUBR", function(e, n) {
        t(e.exports, "default", ()=>o);
        var i = s("eVJPx")
          , r = s("9IWan")
          , o = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function(e) {
                    var n = t.styles[e] || {}
                      , o = t.attributes[e] || {}
                      , s = t.elements[e];
                    (0,
                    r.isHTMLElement)(s) && (0,
                    i.default)(s) && (Object.assign(s.style, n),
                    Object.keys(o).forEach(function(e) {
                        var t = o[e];
                        !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
                    }))
                })
            },
            effect: function(e) {
                var t = e.state
                  , n = {
                    popper: {
                        position: t.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
                return Object.assign(t.elements.popper.style, n.popper),
                t.styles = n,
                t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function() {
                    Object.keys(t.elements).forEach(function(e) {
                        var o = t.elements[e]
                          , s = t.attributes[e] || {}
                          , a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                            return e[t] = "",
                            e
                        }, {});
                        (0,
                        r.isHTMLElement)(o) && (0,
                        i.default)(o) && (Object.assign(o.style, a),
                        Object.keys(s).forEach(function(e) {
                            o.removeAttribute(e)
                        }))
                    })
                }
            },
            requires: ["computeStyles"]
        }
    }),
    s.register("eVJPx", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }
    }),
    s.register("9IWan", function(e, n) {
        t(e.exports, "isElement", ()=>r),
        t(e.exports, "isHTMLElement", ()=>o),
        t(e.exports, "isShadowRoot", ()=>a);
        var i = s("fENy8");
        function r(e) {
            var t = (0,
            i.default)(e).Element;
            return e instanceof t || e instanceof Element
        }
        function o(e) {
            var t = (0,
            i.default)(e).HTMLElement;
            return e instanceof t || e instanceof HTMLElement
        }
        function a(e) {
            if ("undefined" == typeof ShadowRoot)
                return !1;
            var t = (0,
            i.default)(e).ShadowRoot;
            return e instanceof t || e instanceof ShadowRoot
        }
    }),
    s.register("fENy8", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            if (null == e)
                return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }
    }),
    s.register("f0EL8", function(e, n) {
        t(e.exports, "default", ()=>f);
        var i = s("a6onx")
          , r = s("b5CkD")
          , o = s("cDI9u")
          , a = s("iPso9")
          , l = s("1vEWM")
          , c = s("cQ3mV")
          , u = s("4I434")
          , d = s("hbpq3")
          , p = s("c9wt2")
          , f = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state, o = e.name, s = e.options, f = n.elements.arrow, h = n.modifiersData.popperOffsets, g = (0,
                i.default)(n.placement), m = (0,
                l.default)(g), v = [(0,
                p.left), (0,
                p.right)].indexOf(g) >= 0 ? "height" : "width";
                if (f && h) {
                    var y, b = (y = "function" == typeof (y = s.padding) ? y(Object.assign({}, n.rects, {
                        placement: n.placement
                    })) : y,
                    (0,
                    u.default)("number" != typeof y ? y : (0,
                    d.default)(y, p.basePlacements))), _ = (0,
                    r.default)(f), x = "y" === m ? p.top : p.left, w = "y" === m ? p.bottom : p.right, E = n.rects.reference[v] + n.rects.reference[m] - h[m] - n.rects.popper[v], A = h[m] - n.rects.reference[m], T = (0,
                    a.default)(f), C = T ? "y" === m ? T.clientHeight || 0 : T.clientWidth || 0 : 0, S = b[x], D = C - _[v] - b[w], k = C / 2 - _[v] / 2 + (E / 2 - A / 2), O = (0,
                    c.within)(S, k, D);
                    n.modifiersData[o] = ((t = {})[m] = O,
                    t.centerOffset = O - k,
                    t)
                }
            },
            effect: function(e) {
                var t = e.state
                  , n = e.options.element
                  , i = void 0 === n ? "[data-popper-arrow]" : n;
                null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && (0,
                o.default)(t.elements.popper, i) && (t.elements.arrow = i)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        }
    }),
    s.register("a6onx", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            return e.split("-")[0]
        }
    }),
    s.register("b5CkD", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("2CTvA");
        function r(e) {
            var t = (0,
            i.default)(e)
              , n = e.offsetWidth
              , r = e.offsetHeight;
            return 1 >= Math.abs(t.width - n) && (n = t.width),
            1 >= Math.abs(t.height - r) && (r = t.height),
            {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: r
            }
        }
    }),
    s.register("2CTvA", function(e, n) {
        t(e.exports, "default", ()=>l);
        var i = s("9IWan")
          , r = s("amOmD")
          , o = s("fENy8")
          , a = s("b6LQz");
        function l(e, t, n) {
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            var s = e.getBoundingClientRect()
              , l = 1
              , c = 1;
            t && (0,
            i.isHTMLElement)(e) && (l = e.offsetWidth > 0 && (0,
            r.round)(s.width) / e.offsetWidth || 1,
            c = e.offsetHeight > 0 && (0,
            r.round)(s.height) / e.offsetHeight || 1);
            var u = ((0,
            i.isElement)(e) ? (0,
            o.default)(e) : window).visualViewport
              , d = !(0,
            a.default)() && n
              , p = (s.left + (d && u ? u.offsetLeft : 0)) / l
              , f = (s.top + (d && u ? u.offsetTop : 0)) / c
              , h = s.width / l
              , g = s.height / c;
            return {
                width: h,
                height: g,
                top: f,
                right: p + h,
                bottom: f + g,
                left: p,
                x: p,
                y: f
            }
        }
    }),
    s.register("amOmD", function(e, n) {
        t(e.exports, "max", ()=>i),
        t(e.exports, "min", ()=>r),
        t(e.exports, "round", ()=>o);
        var i = Math.max
          , r = Math.min
          , o = Math.round
    }),
    s.register("b6LQz", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("64XgF");
        function r() {
            return !/^((?!chrome|android).)*safari/i.test((0,
            i.default)())
        }
    }),
    s.register("64XgF", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
                return e.brand + "/" + e.version
            }).join(" ") : navigator.userAgent
        }
    }),
    s.register("cDI9u", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("9IWan");
        function r(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t))
                return !0;
            if (n && (0,
            i.isShadowRoot)(n)) {
                var r = t;
                do {
                    if (r && e.isSameNode(r))
                        return !0;
                    r = r.parentNode || r.host
                } while (r)
            }
            return !1
        }
    }),
    s.register("iPso9", function(e, n) {
        t(e.exports, "default", ()=>p);
        var i = s("fENy8")
          , r = s("eVJPx")
          , o = s("a8QDN")
          , a = s("9IWan")
          , l = s("hKTS2")
          , c = s("itM4Q")
          , u = s("64XgF");
        function d(e) {
            return (0,
            a.isHTMLElement)(e) && "fixed" !== (0,
            o.default)(e).position ? e.offsetParent : null
        }
        function p(e) {
            for (var t = (0,
            i.default)(e), n = d(e); n && (0,
            l.default)(n) && "static" === (0,
            o.default)(n).position; )
                n = d(n);
            return n && ("html" === (0,
            r.default)(n) || "body" === (0,
            r.default)(n) && "static" === (0,
            o.default)(n).position) ? t : n || function(e) {
                var t = /firefox/i.test((0,
                u.default)());
                if (/Trident/i.test((0,
                u.default)()) && (0,
                a.isHTMLElement)(e) && "fixed" === (0,
                o.default)(e).position)
                    return null;
                var n = (0,
                c.default)(e);
                for ((0,
                a.isShadowRoot)(n) && (n = n.host); (0,
                a.isHTMLElement)(n) && 0 > ["html", "body"].indexOf((0,
                r.default)(n)); ) {
                    var i = (0,
                    o.default)(n);
                    if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter)
                        return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }
    }),
    s.register("a8QDN", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("fENy8");
        function r(e) {
            return (0,
            i.default)(e).getComputedStyle(e)
        }
    }),
    s.register("hKTS2", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("eVJPx");
        function r(e) {
            return ["table", "td", "th"].indexOf((0,
            i.default)(e)) >= 0
        }
    }),
    s.register("itM4Q", function(e, n) {
        t(e.exports, "default", ()=>a);
        var i = s("eVJPx")
          , r = s("6DDba")
          , o = s("9IWan");
        function a(e) {
            return "html" === (0,
            i.default)(e) ? e : e.assignedSlot || e.parentNode || ((0,
            o.isShadowRoot)(e) ? e.host : null) || (0,
            r.default)(e)
        }
    }),
    s.register("6DDba", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("9IWan");
        function r(e) {
            return (((0,
            i.isElement)(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }
    }),
    s.register("1vEWM", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }
    }),
    s.register("cQ3mV", function(e, n) {
        t(e.exports, "within", ()=>r),
        t(e.exports, "withinMaxClamp", ()=>o);
        var i = s("amOmD");
        function r(e, t, n) {
            return (0,
            i.max)(e, (0,
            i.min)(t, n))
        }
        function o(e, t, n) {
            var i = r(e, t, n);
            return i > n ? n : i
        }
    }),
    s.register("4I434", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("8Wfge");
        function r(e) {
            return Object.assign({}, (0,
            i.default)(), e)
        }
    }),
    s.register("8Wfge", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    }),
    s.register("hbpq3", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e, t) {
            return t.reduce(function(t, n) {
                return t[n] = e,
                t
            }, {})
        }
    }),
    s.register("kp0lY", function(e, n) {
        t(e.exports, "default", ()=>h);
        var i = s("c9wt2")
          , r = s("iPso9")
          , o = s("fENy8")
          , a = s("6DDba")
          , l = s("a8QDN")
          , c = s("a6onx")
          , u = s("bdX2V")
          , d = s("amOmD")
          , p = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function f(e) {
            var t, n, s, c, u, f, h, g = e.popper, m = e.popperRect, v = e.placement, y = e.variation, b = e.offsets, _ = e.position, x = e.gpuAcceleration, w = e.adaptive, E = e.roundOffsets, A = e.isFixed, T = b.x, C = void 0 === T ? 0 : T, S = b.y, D = void 0 === S ? 0 : S, k = "function" == typeof E ? E({
                x: C,
                y: D
            }) : {
                x: C,
                y: D
            };
            C = k.x,
            D = k.y;
            var O = b.hasOwnProperty("x")
              , L = b.hasOwnProperty("y")
              , j = i.left
              , N = i.top
              , I = window;
            if (w) {
                var P = (0,
                r.default)(g)
                  , M = "clientHeight"
                  , q = "clientWidth";
                P === (0,
                o.default)(g) && (P = (0,
                a.default)(g),
                "static" !== (0,
                l.default)(P).position && "absolute" === _ && (M = "scrollHeight",
                q = "scrollWidth")),
                (v === i.top || (v === i.left || v === i.right) && y === i.end) && (N = i.bottom,
                D -= (A && P === I && I.visualViewport ? I.visualViewport.height : P[M]) - m.height,
                D *= x ? 1 : -1),
                (v === i.left || (v === i.top || v === i.bottom) && y === i.end) && (j = i.right,
                C -= (A && P === I && I.visualViewport ? I.visualViewport.width : P[q]) - m.width,
                C *= x ? 1 : -1)
            }
            var H = Object.assign({
                position: _
            }, w && p)
              , R = !0 === E ? (t = {
                x: C,
                y: D
            },
            n = (0,
            o.default)(g),
            s = t.x,
            c = t.y,
            u = n.devicePixelRatio || 1,
            {
                x: (0,
                d.round)(s * u) / u || 0,
                y: (0,
                d.round)(c * u) / u || 0
            }) : {
                x: C,
                y: D
            };
            return (C = R.x,
            D = R.y,
            x) ? Object.assign({}, H, ((h = {})[N] = L ? "0" : "",
            h[j] = O ? "0" : "",
            h.transform = 1 >= (I.devicePixelRatio || 1) ? "translate(" + C + "px, " + D + "px)" : "translate3d(" + C + "px, " + D + "px, 0)",
            h)) : Object.assign({}, H, ((f = {})[N] = L ? D + "px" : "",
            f[j] = O ? C + "px" : "",
            f.transform = "",
            f))
        }
        var h = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , i = n.gpuAcceleration
                  , r = n.adaptive
                  , o = n.roundOffsets
                  , s = void 0 === o || o
                  , a = {
                    placement: (0,
                    c.default)(t.placement),
                    variation: (0,
                    u.default)(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: void 0 === i || i,
                    isFixed: "fixed" === t.options.strategy
                };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, f(Object.assign({}, a, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: void 0 === r || r,
                    roundOffsets: s
                })))),
                null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, f(Object.assign({}, a, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: s
                })))),
                t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        }
    }),
    s.register("bdX2V", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            return e.split("-")[1]
        }
    }),
    s.register("dINuF", function(e, n) {
        t(e.exports, "default", ()=>o);
        var i = s("fENy8")
          , r = {
            passive: !0
        }
          , o = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state
                  , n = e.instance
                  , o = e.options
                  , s = o.scroll
                  , a = void 0 === s || s
                  , l = o.resize
                  , c = void 0 === l || l
                  , u = (0,
                i.default)(t.elements.popper)
                  , d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return a && d.forEach(function(e) {
                    e.addEventListener("scroll", n.update, r)
                }),
                c && u.addEventListener("resize", n.update, r),
                function() {
                    a && d.forEach(function(e) {
                        e.removeEventListener("scroll", n.update, r)
                    }),
                    c && u.removeEventListener("resize", n.update, r)
                }
            },
            data: {}
        }
    }),
    s.register("dGvES", function(e, n) {
        t(e.exports, "default", ()=>d);
        var i = s("CnE0o")
          , r = s("a6onx")
          , o = s("egCVj")
          , a = s("lTSjH")
          , l = s("lzohL")
          , c = s("c9wt2")
          , u = s("bdX2V")
          , d = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , s = e.name;
                if (!t.modifiersData[s]._skip) {
                    for (var d = n.mainAxis, p = void 0 === d || d, f = n.altAxis, h = void 0 === f || f, g = n.fallbackPlacements, m = n.padding, v = n.boundary, y = n.rootBoundary, b = n.altBoundary, _ = n.flipVariations, x = void 0 === _ || _, w = n.allowedAutoPlacements, E = t.options.placement, A = (0,
                    r.default)(E) === E, T = g || (A || !x ? [(0,
                    i.default)(E)] : function(e) {
                        if ((0,
                        r.default)(e) === c.auto)
                            return [];
                        var t = (0,
                        i.default)(e);
                        return [(0,
                        o.default)(e), t, (0,
                        o.default)(t)]
                    }(E)), C = [E].concat(T).reduce(function(e, n) {
                        return e.concat((0,
                        r.default)(n) === c.auto ? (0,
                        l.default)(t, {
                            placement: n,
                            boundary: v,
                            rootBoundary: y,
                            padding: m,
                            flipVariations: x,
                            allowedAutoPlacements: w
                        }) : n)
                    }, []), S = t.rects.reference, D = t.rects.popper, k = new Map, O = !0, L = C[0], j = 0; j < C.length; j++) {
                        var N = C[j]
                          , I = (0,
                        r.default)(N)
                          , P = (0,
                        u.default)(N) === c.start
                          , M = [(0,
                        c.top), (0,
                        c.bottom)].indexOf(I) >= 0
                          , q = M ? "width" : "height"
                          , H = (0,
                        a.default)(t, {
                            placement: N,
                            boundary: v,
                            rootBoundary: y,
                            altBoundary: b,
                            padding: m
                        })
                          , R = M ? P ? c.right : c.left : P ? c.bottom : c.top;
                        S[q] > D[q] && (R = (0,
                        i.default)(R));
                        var F = (0,
                        i.default)(R)
                          , W = [];
                        if (p && W.push(H[I] <= 0),
                        h && W.push(H[R] <= 0, H[F] <= 0),
                        W.every(function(e) {
                            return e
                        })) {
                            L = N,
                            O = !1;
                            break
                        }
                        k.set(N, W)
                    }
                    if (O)
                        for (var z = x ? 3 : 1, B = function(e) {
                            var t = C.find(function(t) {
                                var n = k.get(t);
                                if (n)
                                    return n.slice(0, e).every(function(e) {
                                        return e
                                    })
                            });
                            if (t)
                                return L = t,
                                "break"
                        }, U = z; U > 0 && "break" !== B(U); U--)
                            ;
                    t.placement !== L && (t.modifiersData[s]._skip = !0,
                    t.placement = L,
                    t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        }
    }),
    s.register("CnE0o", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function r(e) {
            return e.replace(/left|right|bottom|top/g, function(e) {
                return i[e]
            })
        }
    }),
    s.register("egCVj", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = {
            start: "end",
            end: "start"
        };
        function r(e) {
            return e.replace(/start|end/g, function(e) {
                return i[e]
            })
        }
    }),
    s.register("lTSjH", function(e, n) {
        t(e.exports, "default", ()=>f);
        var i = s("5ufGs")
          , r = s("6DDba")
          , o = s("2CTvA")
          , a = s("bz92L")
          , l = s("hrwAj")
          , c = s("c9wt2")
          , u = s("9IWan")
          , d = s("4I434")
          , p = s("hbpq3");
        function f(e, t) {
            void 0 === t && (t = {});
            var n = t
              , s = n.placement
              , f = void 0 === s ? e.placement : s
              , h = n.strategy
              , g = void 0 === h ? e.strategy : h
              , m = n.boundary
              , v = void 0 === m ? c.clippingParents : m
              , y = n.rootBoundary
              , b = void 0 === y ? c.viewport : y
              , _ = n.elementContext
              , x = void 0 === _ ? c.popper : _
              , w = n.altBoundary
              , E = n.padding
              , A = void 0 === E ? 0 : E
              , T = (0,
            d.default)("number" != typeof A ? A : (0,
            p.default)(A, c.basePlacements))
              , C = x === c.popper ? c.reference : c.popper
              , S = e.rects.popper
              , D = e.elements[void 0 !== w && w ? C : x]
              , k = (0,
            i.default)((0,
            u.isElement)(D) ? D : D.contextElement || (0,
            r.default)(e.elements.popper), v, b, g)
              , O = (0,
            o.default)(e.elements.reference)
              , L = (0,
            a.default)({
                reference: O,
                element: S,
                strategy: "absolute",
                placement: f
            })
              , j = (0,
            l.default)(Object.assign({}, S, L))
              , N = x === c.popper ? j : O
              , I = {
                top: k.top - N.top + T.top,
                bottom: N.bottom - k.bottom + T.bottom,
                left: k.left - N.left + T.left,
                right: N.right - k.right + T.right
            }
              , P = e.modifiersData.offset;
            if (x === c.popper && P) {
                var M = P[f];
                Object.keys(I).forEach(function(e) {
                    var t = [(0,
                    c.right), (0,
                    c.bottom)].indexOf(e) >= 0 ? 1 : -1
                      , n = [(0,
                    c.top), (0,
                    c.bottom)].indexOf(e) >= 0 ? "y" : "x";
                    I[e] += M[n] * t
                })
            }
            return I
        }
    }),
    s.register("5ufGs", function(e, n) {
        t(e.exports, "default", ()=>b);
        var i = s("c9wt2")
          , r = s("2COWB")
          , o = s("abrBg")
          , a = s("i3GLQ")
          , l = s("iPso9")
          , c = s("6DDba")
          , u = s("a8QDN")
          , d = s("9IWan")
          , p = s("2CTvA")
          , f = s("itM4Q")
          , h = s("cDI9u")
          , g = s("eVJPx")
          , m = s("hrwAj")
          , v = s("amOmD");
        function y(e, t, n) {
            var s;
            return t === i.viewport ? (0,
            m.default)((0,
            r.default)(e, n)) : (0,
            d.isElement)(t) ? ((s = (0,
            p.default)(t, !1, "fixed" === n)).top = s.top + t.clientTop,
            s.left = s.left + t.clientLeft,
            s.bottom = s.top + t.clientHeight,
            s.right = s.left + t.clientWidth,
            s.width = t.clientWidth,
            s.height = t.clientHeight,
            s.x = s.left,
            s.y = s.top,
            s) : (0,
            m.default)((0,
            o.default)((0,
            c.default)(e)))
        }
        function b(e, t, n, i) {
            var r, o, s = [].concat("clippingParents" === t ? (r = (0,
            a.default)((0,
            f.default)(e)),
            o = ["absolute", "fixed"].indexOf((0,
            u.default)(e).position) >= 0 && (0,
            d.isHTMLElement)(e) ? (0,
            l.default)(e) : e,
            (0,
            d.isElement)(o) ? r.filter(function(e) {
                return (0,
                d.isElement)(e) && (0,
                h.default)(e, o) && "body" !== (0,
                g.default)(e)
            }) : []) : [].concat(t), [n]), c = s[0], p = s.reduce(function(t, n) {
                var r = y(e, n, i);
                return t.top = (0,
                v.max)(r.top, t.top),
                t.right = (0,
                v.min)(r.right, t.right),
                t.bottom = (0,
                v.min)(r.bottom, t.bottom),
                t.left = (0,
                v.max)(r.left, t.left),
                t
            }, y(e, c, i));
            return p.width = p.right - p.left,
            p.height = p.bottom - p.top,
            p.x = p.left,
            p.y = p.top,
            p
        }
    }),
    s.register("2COWB", function(e, n) {
        t(e.exports, "default", ()=>l);
        var i = s("fENy8")
          , r = s("6DDba")
          , o = s("k0Hcw")
          , a = s("b6LQz");
        function l(e, t) {
            var n = (0,
            i.default)(e)
              , s = (0,
            r.default)(e)
              , l = n.visualViewport
              , c = s.clientWidth
              , u = s.clientHeight
              , d = 0
              , p = 0;
            if (l) {
                c = l.width,
                u = l.height;
                var f = (0,
                a.default)();
                (f || !f && "fixed" === t) && (d = l.offsetLeft,
                p = l.offsetTop)
            }
            return {
                width: c,
                height: u,
                x: d + (0,
                o.default)(e),
                y: p
            }
        }
    }),
    s.register("k0Hcw", function(e, n) {
        t(e.exports, "default", ()=>a);
        var i = s("2CTvA")
          , r = s("6DDba")
          , o = s("kL01B");
        function a(e) {
            return (0,
            i.default)((0,
            r.default)(e)).left + (0,
            o.default)(e).scrollLeft
        }
    }),
    s.register("kL01B", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("fENy8");
        function r(e) {
            var t = (0,
            i.default)(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }
    }),
    s.register("abrBg", function(e, n) {
        t(e.exports, "default", ()=>c);
        var i = s("6DDba")
          , r = s("a8QDN")
          , o = s("k0Hcw")
          , a = s("kL01B")
          , l = s("amOmD");
        function c(e) {
            var t, n = (0,
            i.default)(e), s = (0,
            a.default)(e), c = null == (t = e.ownerDocument) ? void 0 : t.body, u = (0,
            l.max)(n.scrollWidth, n.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), d = (0,
            l.max)(n.scrollHeight, n.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0), p = -s.scrollLeft + (0,
            o.default)(e), f = -s.scrollTop;
            return "rtl" === (0,
            r.default)(c || n).direction && (p += (0,
            l.max)(n.clientWidth, c ? c.clientWidth : 0) - u),
            {
                width: u,
                height: d,
                x: p,
                y: f
            }
        }
    }),
    s.register("i3GLQ", function(e, n) {
        t(e.exports, "default", ()=>function e(t, n) {
            void 0 === n && (n = []);
            var s, l = (0,
            i.default)(t), c = l === (null == (s = t.ownerDocument) ? void 0 : s.body), u = (0,
            o.default)(l), d = c ? [u].concat(u.visualViewport || [], (0,
            a.default)(l) ? l : []) : l, p = n.concat(d);
            return c ? p : p.concat(e((0,
            r.default)(d)))
        }
        );
        var i = s("3VgLj")
          , r = s("itM4Q")
          , o = s("fENy8")
          , a = s("gPrSs")
    }),
    s.register("3VgLj", function(e, n) {
        t(e.exports, "default", ()=>function e(t) {
            return ["html", "body", "#document"].indexOf((0,
            o.default)(t)) >= 0 ? t.ownerDocument.body : (0,
            a.isHTMLElement)(t) && (0,
            r.default)(t) ? t : e((0,
            i.default)(t))
        }
        );
        var i = s("itM4Q")
          , r = s("gPrSs")
          , o = s("eVJPx")
          , a = s("9IWan")
    }),
    s.register("gPrSs", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("a8QDN");
        function r(e) {
            var t = (0,
            i.default)(e)
              , n = t.overflow
              , r = t.overflowX
              , o = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + o + r)
        }
    }),
    s.register("hrwAj", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }
    }),
    s.register("bz92L", function(e, n) {
        t(e.exports, "default", ()=>l);
        var i = s("a6onx")
          , r = s("bdX2V")
          , o = s("1vEWM")
          , a = s("c9wt2");
        function l(e) {
            var t, n = e.reference, s = e.element, l = e.placement, c = l ? (0,
            i.default)(l) : null, u = l ? (0,
            r.default)(l) : null, d = n.x + n.width / 2 - s.width / 2, p = n.y + n.height / 2 - s.height / 2;
            switch (c) {
            case a.top:
                t = {
                    x: d,
                    y: n.y - s.height
                };
                break;
            case a.bottom:
                t = {
                    x: d,
                    y: n.y + n.height
                };
                break;
            case a.right:
                t = {
                    x: n.x + n.width,
                    y: p
                };
                break;
            case a.left:
                t = {
                    x: n.x - s.width,
                    y: p
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
            }
            var f = c ? (0,
            o.default)(c) : null;
            if (null != f) {
                var h = "y" === f ? "height" : "width";
                switch (u) {
                case a.start:
                    t[f] = t[f] - (n[h] / 2 - s[h] / 2);
                    break;
                case a.end:
                    t[f] = t[f] + (n[h] / 2 - s[h] / 2)
                }
            }
            return t
        }
    }),
    s.register("lzohL", function(e, n) {
        t(e.exports, "default", ()=>l);
        var i = s("bdX2V")
          , r = s("c9wt2")
          , o = s("lTSjH")
          , a = s("a6onx");
        function l(e, t) {
            void 0 === t && (t = {});
            var n = t
              , s = n.placement
              , l = n.boundary
              , c = n.rootBoundary
              , u = n.padding
              , d = n.flipVariations
              , p = n.allowedAutoPlacements
              , f = void 0 === p ? r.placements : p
              , h = (0,
            i.default)(s)
              , g = h ? d ? r.variationPlacements : (0,
            r.variationPlacements).filter(function(e) {
                return (0,
                i.default)(e) === h
            }) : r.basePlacements
              , m = g.filter(function(e) {
                return f.indexOf(e) >= 0
            });
            0 === m.length && (m = g);
            var v = m.reduce(function(t, n) {
                return t[n] = (0,
                o.default)(e, {
                    placement: n,
                    boundary: l,
                    rootBoundary: c,
                    padding: u
                })[(0,
                a.default)(n)],
                t
            }, {});
            return Object.keys(v).sort(function(e, t) {
                return v[e] - v[t]
            })
        }
    }),
    s.register("2k9PQ", function(e, n) {
        t(e.exports, "default", ()=>l);
        var i = s("c9wt2")
          , r = s("lTSjH");
        function o(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }
        function a(e) {
            return [(0,
            i.top), (0,
            i.right), (0,
            i.bottom), (0,
            i.left)].some(function(t) {
                return e[t] >= 0
            })
        }
        var l = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state
                  , n = e.name
                  , i = t.rects.reference
                  , s = t.rects.popper
                  , l = t.modifiersData.preventOverflow
                  , c = (0,
                r.default)(t, {
                    elementContext: "reference"
                })
                  , u = (0,
                r.default)(t, {
                    altBoundary: !0
                })
                  , d = o(c, i)
                  , p = o(u, s, l)
                  , f = a(d)
                  , h = a(p);
                t.modifiersData[n] = {
                    referenceClippingOffsets: d,
                    popperEscapeOffsets: p,
                    isReferenceHidden: f,
                    hasPopperEscaped: h
                },
                t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": f,
                    "data-popper-escaped": h
                })
            }
        }
    }),
    s.register("6qSjY", function(e, n) {
        t(e.exports, "default", ()=>o);
        var i = s("a6onx")
          , r = s("c9wt2")
          , o = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , o = e.name
                  , s = n.offset
                  , a = void 0 === s ? [0, 0] : s
                  , l = (0,
                r.placements).reduce(function(e, n) {
                    var o, s, l, c, u, d;
                    return e[n] = (o = t.rects,
                    s = (0,
                    i.default)(n),
                    l = [(0,
                    r.left), (0,
                    r.top)].indexOf(s) >= 0 ? -1 : 1,
                    u = (c = "function" == typeof a ? a(Object.assign({}, o, {
                        placement: n
                    })) : a)[0],
                    d = c[1],
                    u = u || 0,
                    d = (d || 0) * l,
                    [(0,
                    r.left), (0,
                    r.right)].indexOf(s) >= 0 ? {
                        x: d,
                        y: u
                    } : {
                        x: u,
                        y: d
                    }),
                    e
                }, {})
                  , c = l[t.placement]
                  , u = c.x
                  , d = c.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u,
                t.modifiersData.popperOffsets.y += d),
                t.modifiersData[o] = l
            }
        }
    }),
    s.register("chg4A", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("bz92L")
          , r = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state
                  , n = e.name;
                t.modifiersData[n] = (0,
                i.default)({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        }
    }),
    s.register("1yqIU", function(e, n) {
        t(e.exports, "default", ()=>g);
        var i = s("c9wt2")
          , r = s("a6onx")
          , o = s("1vEWM")
          , a = s("fZLZR")
          , l = s("cQ3mV")
          , c = s("b5CkD")
          , u = s("iPso9")
          , d = s("lTSjH")
          , p = s("bdX2V")
          , f = s("8Wfge")
          , h = s("amOmD")
          , g = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , s = e.name
                  , g = n.mainAxis
                  , m = n.altAxis
                  , v = n.boundary
                  , y = n.rootBoundary
                  , b = n.altBoundary
                  , _ = n.padding
                  , x = n.tether
                  , w = void 0 === x || x
                  , E = n.tetherOffset
                  , A = void 0 === E ? 0 : E
                  , T = (0,
                d.default)(t, {
                    boundary: v,
                    rootBoundary: y,
                    padding: _,
                    altBoundary: b
                })
                  , C = (0,
                r.default)(t.placement)
                  , S = (0,
                p.default)(t.placement)
                  , D = !S
                  , k = (0,
                o.default)(C)
                  , O = (0,
                a.default)(k)
                  , L = t.modifiersData.popperOffsets
                  , j = t.rects.reference
                  , N = t.rects.popper
                  , I = "function" == typeof A ? A(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : A
                  , P = "number" == typeof I ? {
                    mainAxis: I,
                    altAxis: I
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, I)
                  , M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
                  , q = {
                    x: 0,
                    y: 0
                };
                if (L) {
                    if (void 0 === g || g) {
                        var H, R = "y" === k ? i.top : i.left, F = "y" === k ? i.bottom : i.right, W = "y" === k ? "height" : "width", z = L[k], B = z + T[R], U = z - T[F], V = w ? -N[W] / 2 : 0, G = S === i.start ? j[W] : N[W], Q = S === i.start ? -N[W] : -j[W], Y = t.elements.arrow, X = w && Y ? (0,
                        c.default)(Y) : {
                            width: 0,
                            height: 0
                        }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0,
                        f.default)(), J = K[R], Z = K[F], ee = (0,
                        l.within)(0, j[W], X[W]), et = D ? j[W] / 2 - V - ee - J - P.mainAxis : G - ee - J - P.mainAxis, en = D ? -j[W] / 2 + V + ee + Z + P.mainAxis : Q + ee + Z + P.mainAxis, ei = t.elements.arrow && (0,
                        u.default)(t.elements.arrow), er = ei ? "y" === k ? ei.clientTop || 0 : ei.clientLeft || 0 : 0, eo = null != (H = null == M ? void 0 : M[k]) ? H : 0, es = z + et - eo - er, ea = z + en - eo, el = (0,
                        l.within)(w ? (0,
                        h.min)(B, es) : B, z, w ? (0,
                        h.max)(U, ea) : U);
                        L[k] = el,
                        q[k] = el - z
                    }
                    if (void 0 !== m && m) {
                        var ec, eu = "x" === k ? i.top : i.left, ed = "x" === k ? i.bottom : i.right, ep = L[O], ef = "y" === O ? "height" : "width", eh = ep + T[eu], eg = ep - T[ed], em = -1 !== [(0,
                        i.top), (0,
                        i.left)].indexOf(C), ev = null != (ec = null == M ? void 0 : M[O]) ? ec : 0, ey = em ? eh : ep - j[ef] - N[ef] - ev + P.altAxis, eb = em ? ep + j[ef] + N[ef] - ev - P.altAxis : eg, e_ = w && em ? (0,
                        l.withinMaxClamp)(ey, ep, eb) : (0,
                        l.within)(w ? ey : eh, ep, w ? eb : eg);
                        L[O] = e_,
                        q[O] = e_ - ep
                    }
                    t.modifiersData[s] = q
                }
            },
            requiresIfExists: ["offset"]
        }
    }),
    s.register("fZLZR", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            return "x" === e ? "y" : "x"
        }
    }),
    s.register("1olVE", function(e, n) {
        t(e.exports, "popperGenerator", ()=>h),
        t(e.exports, "createPopper", ()=>g);
        var i = s("ag9Hq")
          , r = s("b5CkD")
          , o = s("i3GLQ")
          , a = s("iPso9")
          , l = s("g2UPh")
          , c = s("d9NZM")
          , u = s("hhCVr");
        s("lTSjH");
        var d = s("9IWan")
          , p = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function f() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some(function(e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            })
        }
        function h(e) {
            void 0 === e && (e = {});
            var t = e
              , n = t.defaultModifiers
              , s = void 0 === n ? [] : n
              , h = t.defaultOptions
              , g = void 0 === h ? p : h;
            return function(e, t, n) {
                void 0 === n && (n = g);
                var h = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, p, g),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                }
                  , m = []
                  , v = !1
                  , y = {
                    state: h,
                    setOptions: function(n) {
                        var i = "function" == typeof n ? n(h.options) : n;
                        b(),
                        h.options = Object.assign({}, g, h.options, i),
                        h.scrollParents = {
                            reference: (0,
                            d.isElement)(e) ? (0,
                            o.default)(e) : e.contextElement ? (0,
                            o.default)(e.contextElement) : [],
                            popper: (0,
                            o.default)(t)
                        };
                        var r = (0,
                        l.default)((0,
                        u.default)([].concat(s, h.options.modifiers)));
                        return h.orderedModifiers = r.filter(function(e) {
                            return e.enabled
                        }),
                        h.orderedModifiers.forEach(function(e) {
                            var t = e.name
                              , n = e.options
                              , i = e.effect;
                            if ("function" == typeof i) {
                                var r = i({
                                    state: h,
                                    name: t,
                                    instance: y,
                                    options: void 0 === n ? {} : n
                                });
                                m.push(r || function() {}
                                )
                            }
                        }),
                        y.update()
                    },
                    forceUpdate: function() {
                        if (!v) {
                            var e = h.elements
                              , t = e.reference
                              , n = e.popper;
                            if (f(t, n)) {
                                h.rects = {
                                    reference: (0,
                                    i.default)(t, (0,
                                    a.default)(n), "fixed" === h.options.strategy),
                                    popper: (0,
                                    r.default)(n)
                                },
                                h.reset = !1,
                                h.placement = h.options.placement,
                                h.orderedModifiers.forEach(function(e) {
                                    return h.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var o = 0; o < h.orderedModifiers.length; o++) {
                                    if (!0 === h.reset) {
                                        h.reset = !1,
                                        o = -1;
                                        continue
                                    }
                                    var s = h.orderedModifiers[o]
                                      , l = s.fn
                                      , c = s.options
                                      , u = void 0 === c ? {} : c
                                      , d = s.name;
                                    "function" == typeof l && (h = l({
                                        state: h,
                                        options: u,
                                        name: d,
                                        instance: y
                                    }) || h)
                                }
                            }
                        }
                    },
                    update: (0,
                    c.default)(function() {
                        return new Promise(function(e) {
                            y.forceUpdate(),
                            e(h)
                        }
                        )
                    }),
                    destroy: function() {
                        b(),
                        v = !0
                    }
                };
                if (!f(e, t))
                    return y;
                function b() {
                    m.forEach(function(e) {
                        return e()
                    }),
                    m = []
                }
                return y.setOptions(n).then(function(e) {
                    !v && n.onFirstUpdate && n.onFirstUpdate(e)
                }),
                y
            }
        }
        var g = h()
    }),
    s.register("ag9Hq", function(e, n) {
        t(e.exports, "default", ()=>p);
        var i = s("2CTvA")
          , r = s("174d2")
          , o = s("eVJPx")
          , a = s("9IWan")
          , l = s("k0Hcw")
          , c = s("6DDba")
          , u = s("gPrSs")
          , d = s("amOmD");
        function p(e, t, n) {
            void 0 === n && (n = !1);
            var s, p, f, h = (0,
            a.isHTMLElement)(t), g = (0,
            a.isHTMLElement)(t) && (s = t.getBoundingClientRect(),
            p = (0,
            d.round)(s.width) / t.offsetWidth || 1,
            f = (0,
            d.round)(s.height) / t.offsetHeight || 1,
            1 !== p || 1 !== f), m = (0,
            c.default)(t), v = (0,
            i.default)(e, g, n), y = {
                scrollLeft: 0,
                scrollTop: 0
            }, b = {
                x: 0,
                y: 0
            };
            return (h || !h && !n) && (("body" !== (0,
            o.default)(t) || (0,
            u.default)(m)) && (y = (0,
            r.default)(t)),
            (0,
            a.isHTMLElement)(t) ? (b = (0,
            i.default)(t, !0),
            b.x += t.clientLeft,
            b.y += t.clientTop) : m && (b.x = (0,
            l.default)(m))),
            {
                x: v.left + y.scrollLeft - b.x,
                y: v.top + y.scrollTop - b.y,
                width: v.width,
                height: v.height
            }
        }
    }),
    s.register("174d2", function(e, n) {
        t(e.exports, "default", ()=>l);
        var i = s("kL01B")
          , r = s("fENy8")
          , o = s("9IWan")
          , a = s("f9VuD");
        function l(e) {
            return e !== (0,
            r.default)(e) && (0,
            o.isHTMLElement)(e) ? (0,
            a.default)(e) : (0,
            i.default)(e)
        }
    }),
    s.register("f9VuD", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            return {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            }
        }
    }),
    s.register("g2UPh", function(e, n) {
        t(e.exports, "default", ()=>r);
        var i = s("c9wt2");
        function r(e) {
            var t, n, r, o = (t = new Map,
            n = new Set,
            r = [],
            e.forEach(function(e) {
                t.set(e.name, e)
            }),
            e.forEach(function(e) {
                n.has(e.name) || function e(i) {
                    n.add(i.name),
                    [].concat(i.requires || [], i.requiresIfExists || []).forEach(function(i) {
                        if (!n.has(i)) {
                            var r = t.get(i);
                            r && e(r)
                        }
                    }),
                    r.push(i)
                }(e)
            }),
            r);
            return (0,
            i.modifierPhases).reduce(function(e, t) {
                return e.concat(o.filter(function(e) {
                    return e.phase === t
                }))
            }, [])
        }
    }),
    s.register("d9NZM", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            var t;
            return function() {
                return t || (t = new Promise(function(n) {
                    Promise.resolve().then(function() {
                        t = void 0,
                        n(e())
                    })
                }
                )),
                t
            }
        }
    }),
    s.register("hhCVr", function(e, n) {
        t(e.exports, "default", ()=>i);
        function i(e) {
            var t = e.reduce(function(e, t) {
                var n = e[t.name];
                return e[t.name] = n ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data)
                }) : t,
                e
            }, {});
            return Object.keys(t).map(function(e) {
                return t[e]
            })
        }
    }),
    s.register("7d5Gb", function(e, n) {
        t(e.exports, "createPopper", ()=>g);
        var i = s("1olVE")
          , r = s("dINuF")
          , o = s("chg4A")
          , a = s("kp0lY")
          , l = s("jBUBR")
          , c = s("6qSjY")
          , u = s("dGvES")
          , d = s("1yqIU")
          , p = s("f0EL8")
          , f = s("2k9PQ")
          , h = [r.default, o.default, a.default, l.default, c.default, u.default, d.default, p.default, f.default]
          , g = (0,
        i.popperGenerator)({
            defaultModifiers: h
        })
    }),
    s.register("bTb7v", function(e, n) {
        t(e.exports, "createPopper", ()=>u);
        var i = s("1olVE")
          , r = s("dINuF")
          , o = s("chg4A")
          , a = s("kp0lY")
          , l = s("jBUBR")
          , c = [r.default, o.default, a.default, l.default]
          , u = (0,
        i.popperGenerator)({
            defaultModifiers: c
        })
    }),
    s.register("kqQJU", function(e, t) {
        var n, i;
        n = "undefined" != typeof window ? window : e.exports,
        i = function(e, t) {
            "use strict";
            var n, i = [], r = Object.getPrototypeOf, o = i.slice, s = i.flat ? function(e) {
                return i.flat.call(e)
            }
            : function(e) {
                return i.concat.apply([], e)
            }
            , a = i.push, l = i.indexOf, c = {}, u = c.toString, d = c.hasOwnProperty, p = d.toString, f = p.call(Object), h = {}, g = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            }, m = function(e) {
                return null != e && e === e.window
            }, v = e.document, y = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function b(e, t, n) {
                var i, r, o = (n = n || v).createElement("script");
                if (o.text = e,
                t)
                    for (i in y)
                        (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o)
            }
            function _(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
            }
            var x = "3.7.1"
              , w = /HTML$/i
              , E = function(e, t) {
                return new E.fn.init(e,t)
            };
            function A(e) {
                var t = !!e && "length"in e && e.length
                  , n = _(e);
                return !(g(e) || m(e)) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function T(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            E.fn = E.prototype = {
                jquery: x,
                constructor: E,
                length: 0,
                toArray: function() {
                    return o.call(this)
                },
                get: function(e) {
                    return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = E.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return E.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(E.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(E.grep(this, function(e, t) {
                        return (t + 1) % 2
                    }))
                },
                odd: function() {
                    return this.pushStack(E.grep(this, function(e, t) {
                        return t % 2
                    }))
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: a,
                sort: i.sort,
                splice: i.splice
            },
            E.extend = E.fn.extend = function() {
                var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s,
                s = arguments[a] || {},
                a++),
                "object" == typeof s || g(s) || (s = {}),
                a === l && (s = this,
                a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e)
                            i = e[t],
                            "__proto__" !== t && s !== i && (c && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t],
                            o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {},
                            r = !1,
                            s[t] = E.extend(c, o, i)) : void 0 !== i && (s[t] = i));
                return s
            }
            ,
            E.extend({
                expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !!e && "[object Object]" === u.call(e) && (!(t = r(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && p.call(n) === f)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    b(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (A(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                            ;
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i]))
                                break;
                    return e
                },
                text: function(e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (!r)
                        for (; t = e[i++]; )
                            n += E.text(t);
                    return 1 === r || 11 === r ? e.textContent : 9 === r ? e.documentElement.textContent : 3 === r || 4 === r ? e.nodeValue : n
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (A(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                isXMLDoc: function(e) {
                    var t = e && e.namespaceURI
                      , n = e && (e.ownerDocument || e).documentElement;
                    return !w.test(t || n && n.nodeName || "HTML")
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                        e[r++] = t[i];
                    return e.length = r,
                    e
                },
                grep: function(e, t, n) {
                    for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                        !t(e[r], r) !== s && i.push(e[r]);
                    return i
                },
                map: function(e, t, n) {
                    var i, r, o = 0, a = [];
                    if (A(e))
                        for (i = e.length; o < i; o++)
                            null != (r = t(e[o], o, n)) && a.push(r);
                    else
                        for (o in e)
                            null != (r = t(e[o], o, n)) && a.push(r);
                    return s(a)
                },
                guid: 1,
                support: h
            }),
            "function" == typeof Symbol && (E.fn[Symbol.iterator] = i[Symbol.iterator]),
            E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            });
            var C = i.pop
              , S = i.sort
              , D = i.splice
              , k = "[\\x20\\t\\r\\n\\f]"
              , O = RegExp("^" + k + "+|((?:^|[^\\\\])(?:\\\\.)*)" + k + "+$", "g");
            E.contains = function(e, t) {
                var n = t && t.parentNode;
                return e === n || !!(n && 1 === n.nodeType && (e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            ;
            var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            function j(e, t) {
                return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }
            E.escapeSelector = function(e) {
                return (e + "").replace(L, j)
            }
            ,
            function() {
                var t, n, r, s, c, u, p, f, g, m, y = a, b = E.expando, _ = 0, x = 0, w = et(), A = et(), L = et(), j = et(), N = function(e, t) {
                    return e === t && (c = !0),
                    0
                }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "(?:\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+", M = "\\[" + k + "*(" + P + ")(?:" + k + "*([*^$|!~]?=)" + k + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + k + "*\\]", q = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", H = RegExp(k + "+", "g"), R = RegExp("^" + k + "*," + k + "*"), F = RegExp("^" + k + "*([>+~]|" + k + ")" + k + "*"), W = RegExp(k + "|>"), z = new RegExp(q), B = RegExp("^" + P + "$"), U = {
                    ID: RegExp("^#(" + P + ")"),
                    CLASS: RegExp("^\\.(" + P + ")"),
                    TAG: RegExp("^(" + P + "|[*])"),
                    ATTR: RegExp("^" + M),
                    PSEUDO: RegExp("^" + q),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + k + "*(even|odd|(([+-]|)(\\d*)n|)" + k + "*(?:([+-]|)" + k + "*(\\d+)|))" + k + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + I + ")$", "i"),
                    needsContext: RegExp("^" + k + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + k + "*((?:-\\d)?\\d*)" + k + "*\\)|)(?=[^-]|$)", "i")
                }, V = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /[+~]/, X = RegExp("\\\\[\\da-fA-F]{1,6}" + k + "?|\\\\([^\\r\\n\\f])", "g"), K = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                }, J = function() {
                    ea()
                }, Z = ed(function(e) {
                    return !0 === e.disabled && T(e, "fieldset")
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    y.apply(i = o.call(v.childNodes), v.childNodes),
                    i[v.childNodes.length].nodeType
                } catch (e) {
                    y = {
                        apply: function(e, t) {
                            a.apply(e, o.call(t))
                        },
                        call: function(e) {
                            a.apply(e, o.call(arguments, 1))
                        }
                    }
                }
                function ee(e, t, n, i) {
                    var r, o, s, a, l, c, d, p = t && t.ownerDocument, m = t ? t.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                        return n;
                    if (!i && (ea(t),
                    t = t || u,
                    f)) {
                        if (11 !== m && (l = Q.exec(e))) {
                            if (r = l[1]) {
                                if (9 === m) {
                                    if (!(s = t.getElementById(r)))
                                        return n;
                                    if (s.id === r)
                                        return y.call(n, s),
                                        n
                                } else if (p && (s = p.getElementById(r)) && ee.contains(t, s) && s.id === r)
                                    return y.call(n, s),
                                    n
                            } else if (l[2])
                                return y.apply(n, t.getElementsByTagName(e)),
                                n;
                            else if ((r = l[3]) && t.getElementsByClassName)
                                return y.apply(n, t.getElementsByClassName(r)),
                                n
                        }
                        if (!j[e + " "] && (!g || !g.test(e))) {
                            if (d = e,
                            p = t,
                            1 === m && (W.test(e) || F.test(e))) {
                                for ((p = Y.test(e) && es(t.parentNode) || t) == t && h.scope || ((a = t.getAttribute("id")) ? a = E.escapeSelector(a) : t.setAttribute("id", a = b)),
                                o = (c = ec(e)).length; o--; )
                                    c[o] = (a ? "#" + a : ":scope") + " " + eu(c[o]);
                                d = c.join(",")
                            }
                            try {
                                return y.apply(n, p.querySelectorAll(d)),
                                n
                            } catch (t) {
                                j(e, !0)
                            } finally {
                                a === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return eg(e.replace(O, "$1"), t, n, i)
                }
                function et() {
                    var e = [];
                    function t(i, r) {
                        return e.push(i + " ") > n.cacheLength && delete t[e.shift()],
                        t[i + " "] = r
                    }
                    return t
                }
                function en(e) {
                    return e[b] = !0,
                    e
                }
                function ei(e) {
                    var t = u.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function er(e) {
                    return function(t) {
                        if ("form"in t)
                            return t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || !e !== t.isDisabled && Z(t) === e : t.disabled === e;
                        return "label"in t && t.disabled === e
                    }
                }
                function eo(e) {
                    return en(function(t) {
                        return t = +t,
                        en(function(n, i) {
                            for (var r, o = e([], n.length, t), s = o.length; s--; )
                                n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }
                function es(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                function ea(e) {
                    var t, i = e ? e.ownerDocument || e : v;
                    return i != u && 9 === i.nodeType && i.documentElement && (p = (u = i).documentElement,
                    f = !E.isXMLDoc(u),
                    m = p.matches || p.webkitMatchesSelector || p.msMatchesSelector,
                    p.msMatchesSelector && v != u && (t = u.defaultView) && t.top !== t && t.addEventListener("unload", J),
                    h.getById = ei(function(e) {
                        return p.appendChild(e).id = E.expando,
                        !u.getElementsByName || !u.getElementsByName(E.expando).length
                    }),
                    h.disconnectedMatch = ei(function(e) {
                        return m.call(e, "*")
                    }),
                    h.scope = ei(function() {
                        return u.querySelectorAll(":scope")
                    }),
                    h.cssHas = ei(function() {
                        try {
                            return u.querySelector(":has(*,:jqfake)"),
                            !1
                        } catch (e) {
                            return !0
                        }
                    }),
                    h.getById ? (n.filter.ID = function(e) {
                        var t = e.replace(X, K);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ,
                    n.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && f) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ) : (n.filter.ID = function(e) {
                        var t = e.replace(X, K);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ,
                    n.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && f) {
                            var n, i, r, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o];
                                for (r = t.getElementsByName(e),
                                i = 0; o = r[i++]; )
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o]
                            }
                            return []
                        }
                    }
                    ),
                    n.find.TAG = function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                    }
                    ,
                    n.find.CLASS = function(e, t) {
                        if (void 0 !== t.getElementsByClassName && f)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    g = [],
                    ei(function(e) {
                        var t;
                        p.appendChild(e).innerHTML = "<a id='" + b + "' href='' disabled='disabled'></a><select id='" + b + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                        e.querySelectorAll("[selected]").length || g.push("\\[" + k + "*(?:value|" + I + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                        e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]"),
                        e.querySelectorAll(":checked").length || g.push(":checked"),
                        (t = u.createElement("input")).setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        p.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                        (t = u.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || g.push("\\[" + k + "*name" + k + "*=" + k + "*(?:''|\"\")")
                    }),
                    h.cssHas || g.push(":has"),
                    g = g.length && new RegExp(g.join("|")),
                    N = function(e, t) {
                        if (e === t)
                            return c = !0,
                            0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument == v && ee.contains(v, e) ? -1 : t === u || t.ownerDocument == v && ee.contains(v, t) ? 1 : s ? l.call(s, e) - l.call(s, t) : 0 : 4 & n ? -1 : 1)
                    }
                    ),
                    u
                }
                for (t in ee.matches = function(e, t) {
                    return ee(e, null, null, t)
                }
                ,
                ee.matchesSelector = function(e, t) {
                    if (ea(e),
                    f && !j[t + " "] && (!g || !g.test(t)))
                        try {
                            var n = m.call(e, t);
                            if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return n
                        } catch (e) {
                            j(t, !0)
                        }
                    return ee(t, u, null, [e]).length > 0
                }
                ,
                ee.contains = function(e, t) {
                    return (e.ownerDocument || e) != u && ea(e),
                    E.contains(e, t)
                }
                ,
                ee.attr = function(e, t) {
                    (e.ownerDocument || e) != u && ea(e);
                    var i = n.attrHandle[t.toLowerCase()]
                      , r = i && d.call(n.attrHandle, t.toLowerCase()) ? i(e, t, !f) : void 0;
                    return void 0 !== r ? r : e.getAttribute(t)
                }
                ,
                ee.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                E.uniqueSort = function(e) {
                    var t, n = [], i = 0, r = 0;
                    if (c = !h.sortStable,
                    s = !h.sortStable && o.call(e, 0),
                    S.call(e, N),
                    c) {
                        for (; t = e[r++]; )
                            t === e[r] && (i = n.push(r));
                        for (; i--; )
                            D.call(e, n[i], 1)
                    }
                    return s = null,
                    e
                }
                ,
                E.fn.uniqueSort = function() {
                    return this.pushStack(E.uniqueSort(o.apply(this)))
                }
                ,
                (n = E.expr = {
                    cacheLength: 50,
                    createPseudo: en,
                    match: U,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(X, K),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(X, K),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || ee.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ee.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = ec(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(X, K).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return T(e, t)
                            }
                        },
                        CLASS: function(e) {
                            var t = w[e + " "];
                            return t || (t = RegExp("(^|" + k + ")" + e + "(" + k + "|$)"),
                            w(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var r = ee.attr(i, e);
                                return null == r ? "!=" === t : !t || ((r += "",
                                "=" === t) ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3)
                              , s = "last" !== e.slice(-4)
                              , a = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, l) {
                                var c, u, d, p, f, h = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, m = a && t.nodeName.toLowerCase(), v = !l && !a, y = !1;
                                if (g) {
                                    if (o) {
                                        for (; h; ) {
                                            for (d = t; d = d[h]; )
                                                if (a ? T(d, m) : 1 === d.nodeType)
                                                    return !1;
                                            f = h = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? g.firstChild : g.lastChild],
                                    s && v) {
                                        for (y = (p = (c = (u = g[b] || (g[b] = {}))[e] || [])[0] === _ && c[1]) && c[2],
                                        d = p && g.childNodes[p]; d = ++p && d && d[h] || (y = p = 0) || f.pop(); )
                                            if (1 === d.nodeType && ++y && d === t) {
                                                u[e] = [_, p, y];
                                                break
                                            }
                                    } else if (v && (y = p = (c = (u = t[b] || (t[b] = {}))[e] || [])[0] === _ && c[1]),
                                    !1 === y)
                                        for (; (d = ++p && d && d[h] || (y = p = 0) || f.pop()) && (!((a ? T(d, m) : 1 === d.nodeType) && ++y) || (v && ((u = d[b] || (d[b] = {}))[e] = [_, y]),
                                        d !== t)); )
                                            ;
                                    return (y -= r) === i || y % i == 0 && y / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ee.error("unsupported pseudo: " + e);
                            return r[b] ? r(t) : r.length > 1 ? (i = [e, e, "", t],
                            n.setFilters.hasOwnProperty(e.toLowerCase()) ? en(function(e, n) {
                                for (var i, o = r(e, t), s = o.length; s--; )
                                    i = l.call(e, o[s]),
                                    e[i] = !(n[i] = o[s])
                            }) : function(e) {
                                return r(e, 0, i)
                            }
                            ) : r
                        }
                    },
                    pseudos: {
                        not: en(function(e) {
                            var t = []
                              , n = []
                              , i = eh(e.replace(O, "$1"));
                            return i[b] ? en(function(e, t, n, r) {
                                for (var o, s = i(e, null, r, []), a = e.length; a--; )
                                    (o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, r, o) {
                                return t[0] = e,
                                i(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: en(function(e) {
                            return function(t) {
                                return ee(e, t).length > 0
                            }
                        }),
                        contains: en(function(e) {
                            return e = e.replace(X, K),
                            function(t) {
                                return (t.textContent || E.text(t)).indexOf(e) > -1
                            }
                        }),
                        lang: en(function(e) {
                            return B.test(e || "") || ee.error("unsupported lang: " + e),
                            e = e.replace(X, K).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType)return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === p
                        },
                        focus: function(e) {
                            return e === function() {
                                try {
                                    return u.activeElement
                                } catch (e) {}
                            }() && u.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: er(!1),
                        disabled: er(!0),
                        checked: function(e) {
                            return T(e, "input") && !!e.checked || T(e, "option") && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !n.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return V.test(e.nodeName)
                        },
                        button: function(e) {
                            return T(e, "input") && "button" === e.type || T(e, "button")
                        },
                        text: function(e) {
                            var t;
                            return T(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: eo(function() {
                            return [0]
                        }),
                        last: eo(function(e, t) {
                            return [t - 1]
                        }),
                        eq: eo(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: eo(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: eo(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: eo(function(e, t, n) {
                            var i;
                            for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                                e.push(i);
                            return e
                        }),
                        gt: eo(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; )
                                e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = n.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    n.pseudos[t] = function(e) {
                        return function(t) {
                            return T(t, "input") && t.type === e
                        }
                    }(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    n.pseudos[t] = function(e) {
                        return function(t) {
                            return (T(t, "input") || T(t, "button")) && t.type === e
                        }
                    }(t);
                function el() {}
                function ec(e, t) {
                    var i, r, o, s, a, l, c, u = A[e + " "];
                    if (u)
                        return t ? 0 : u.slice(0);
                    for (a = e,
                    l = [],
                    c = n.preFilter; a; ) {
                        for (s in (!i || (r = R.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                        l.push(o = [])),
                        i = !1,
                        (r = F.exec(a)) && (i = r.shift(),
                        o.push({
                            value: i,
                            type: r[0].replace(O, " ")
                        }),
                        a = a.slice(i.length)),
                        n.filter)
                            (r = U[s].exec(a)) && (!c[s] || (r = c[s](r))) && (i = r.shift(),
                            o.push({
                                value: i,
                                type: s,
                                matches: r
                            }),
                            a = a.slice(i.length));
                        if (!i)
                            break
                    }
                    return t ? a.length : a ? ee.error(e) : A(e, l).slice(0)
                }
                function eu(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++)
                        i += e[t].value;
                    return i
                }
                function ed(e, t, n) {
                    var i = t.dir
                      , r = t.next
                      , o = r || i
                      , s = n && "parentNode" === o
                      , a = x++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i]; )
                            if (1 === t.nodeType || s)
                                return e(t, n, r);
                        return !1
                    }
                    : function(t, n, l) {
                        var c, u, d = [_, a];
                        if (l) {
                            for (; t = t[i]; )
                                if ((1 === t.nodeType || s) && e(t, n, l))
                                    return !0
                        } else
                            for (; t = t[i]; )
                                if (1 === t.nodeType || s) {
                                    if (u = t[b] || (t[b] = {}),
                                    r && T(t, r))
                                        t = t[i] || t;
                                    else {
                                        if ((c = u[o]) && c[0] === _ && c[1] === a)
                                            return d[2] = c[2];
                                        if (u[o] = d,
                                        d[2] = e(t, n, l))
                                            return !0
                                    }
                                }
                        return !1
                    }
                }
                function ep(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--; )
                            if (!e[r](t, n, i))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function ef(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                        (o = e[a]) && (!n || n(o, i, r)) && (s.push(o),
                        c && t.push(a));
                    return s
                }
                function eh(e, t) {
                    var i, o, s, a, c = [], d = [], p = L[e + " "];
                    if (!p) {
                        for (t || (t = ec(e)),
                        a = t.length; a--; )
                            (p = function e(t) {
                                for (var i, o, s, a = t.length, c = n.relative[t[0].type], u = c || n.relative[" "], d = c ? 1 : 0, p = ed(function(e) {
                                    return e === i
                                }, u, !0), f = ed(function(e) {
                                    return l.call(i, e) > -1
                                }, u, !0), h = [function(e, t, n) {
                                    var o = !c && (n || t != r) || ((i = t).nodeType ? p(e, t, n) : f(e, t, n));
                                    return i = null,
                                    o
                                }
                                ]; d < a; d++)
                                    if (o = n.relative[t[d].type])
                                        h = [ed(ep(h), o)];
                                    else {
                                        if ((o = n.filter[t[d].type].apply(null, t[d].matches))[b]) {
                                            for (s = ++d; s < a && !n.relative[t[s].type]; s++)
                                                ;
                                            return function e(t, n, i, r, o, s) {
                                                return r && !r[b] && (r = e(r)),
                                                o && !o[b] && (o = e(o, s)),
                                                en(function(e, s, a, c) {
                                                    var u, d, p, f, h = [], g = [], m = s.length, v = e || function(e, t, n) {
                                                        for (var i = 0, r = t.length; i < r; i++)
                                                            ee(e, t[i], n);
                                                        return n
                                                    }(n || "*", a.nodeType ? [a] : a, []), b = t && (e || !n) ? ef(v, h, t, a, c) : v;
                                                    if (i ? i(b, f = o || (e ? t : m || r) ? [] : s, a, c) : f = b,
                                                    r)
                                                        for (u = ef(f, g),
                                                        r(u, [], a, c),
                                                        d = u.length; d--; )
                                                            (p = u[d]) && (f[g[d]] = !(b[g[d]] = p));
                                                    if (e) {
                                                        if (o || t) {
                                                            if (o) {
                                                                for (u = [],
                                                                d = f.length; d--; )
                                                                    (p = f[d]) && u.push(b[d] = p);
                                                                o(null, f = [], u, c)
                                                            }
                                                            for (d = f.length; d--; )
                                                                (p = f[d]) && (u = o ? l.call(e, p) : h[d]) > -1 && (e[u] = !(s[u] = p))
                                                        }
                                                    } else
                                                        f = ef(f === s ? f.splice(m, f.length) : f),
                                                        o ? o(null, s, f, c) : y.apply(s, f)
                                                })
                                            }(d > 1 && ep(h), d > 1 && eu(t.slice(0, d - 1).concat({
                                                value: " " === t[d - 2].type ? "*" : ""
                                            })).replace(O, "$1"), o, d < s && e(t.slice(d, s)), s < a && e(t = t.slice(s)), s < a && eu(t))
                                        }
                                        h.push(o)
                                    }
                                return ep(h)
                            }(t[a]))[b] ? c.push(p) : d.push(p);
                        (p = L(e, (i = c.length > 0,
                        o = d.length > 0,
                        s = function(e, t, s, a, l) {
                            var p, h, g, m = 0, v = "0", b = e && [], x = [], w = r, A = e || o && n.find.TAG("*", l), T = _ += null == w ? 1 : Math.random() || .1, S = A.length;
                            for (l && (r = t == u || t || l); v !== S && null != (p = A[v]); v++) {
                                if (o && p) {
                                    for (h = 0,
                                    t || p.ownerDocument == u || (ea(p),
                                    s = !f); g = d[h++]; )
                                        if (g(p, t || u, s)) {
                                            y.call(a, p);
                                            break
                                        }
                                    l && (_ = T)
                                }
                                i && ((p = !g && p) && m--,
                                e && b.push(p))
                            }
                            if (m += v,
                            i && v !== m) {
                                for (h = 0; g = c[h++]; )
                                    g(b, x, t, s);
                                if (e) {
                                    if (m > 0)
                                        for (; v--; )
                                            b[v] || x[v] || (x[v] = C.call(a));
                                    x = ef(x)
                                }
                                y.apply(a, x),
                                l && !e && x.length > 0 && m + c.length > 1 && E.uniqueSort(a)
                            }
                            return l && (_ = T,
                            r = w),
                            b
                        }
                        ,
                        i ? en(s) : s))).selector = e
                    }
                    return p
                }
                function eg(e, t, i, r) {
                    var o, s, a, l, c, u = "function" == typeof e && e, d = !r && ec(e = u.selector || e);
                    if (i = i || [],
                    1 === d.length) {
                        if ((s = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === t.nodeType && f && n.relative[s[1].type]) {
                            if (!(t = (n.find.ID(a.matches[0].replace(X, K), t) || [])[0]))
                                return i;
                            u && (t = t.parentNode),
                            e = e.slice(s.shift().value.length)
                        }
                        for (o = U.needsContext.test(e) ? 0 : s.length; o-- && (a = s[o],
                        !n.relative[l = a.type]); )
                            if ((c = n.find[l]) && (r = c(a.matches[0].replace(X, K), Y.test(s[0].type) && es(t.parentNode) || t))) {
                                if (s.splice(o, 1),
                                !(e = r.length && eu(s)))
                                    return y.apply(i, r),
                                    i;
                                break
                            }
                    }
                    return (u || eh(e, d))(r, t, !f, i, !t || Y.test(e) && es(t.parentNode) || t),
                    i
                }
                el.prototype = n.filters = n.pseudos,
                n.setFilters = new el,
                h.sortStable = b.split("").sort(N).join("") === b,
                ea(),
                h.sortDetached = ei(function(e) {
                    return 1 & e.compareDocumentPosition(u.createElement("fieldset"))
                }),
                E.find = ee,
                E.expr[":"] = E.expr.pseudos,
                E.unique = E.uniqueSort,
                ee.compile = eh,
                ee.select = eg,
                ee.setDocument = ea,
                ee.tokenize = ec,
                ee.escape = E.escapeSelector,
                ee.getText = E.text,
                ee.isXML = E.isXMLDoc,
                ee.selectors = E.expr,
                ee.support = E.support,
                ee.uniqueSort = E.uniqueSort
            }();
            var N = function(e, t, n) {
                for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (r && E(e).is(n))
                            break;
                        i.push(e)
                    }
                return i
            }
              , I = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , P = E.expr.match.needsContext
              , M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function q(e, t, n) {
                return g(t) ? E.grep(e, function(e, i) {
                    return !!t.call(e, i, e) !== n
                }) : t.nodeType ? E.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? E.grep(e, function(e) {
                    return l.call(t, e) > -1 !== n
                }) : E.filter(t, e, n)
            }
            E.filter = function(e, t, n) {
                var i = t[0];
                return (n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType) ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            E.fn.extend({
                find: function(e) {
                    var t, n, i = this.length, r = this;
                    if ("string" != typeof e)
                        return this.pushStack(E(e).filter(function() {
                            for (t = 0; t < i; t++)
                                if (E.contains(r[t], this))
                                    return !0
                        }));
                    for (t = 0,
                    n = this.pushStack([]); t < i; t++)
                        E.find(e, r[t], n);
                    return i > 1 ? E.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(q(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(q(this, e || [], !0))
                },
                is: function(e) {
                    return !!q(this, "string" == typeof e && P.test(e) ? E(e) : e || [], !1).length
                }
            });
            var H, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (E.fn.init = function(e, t, n) {
                var i, r;
                if (!e)
                    return this;
                if (n = n || H,
                "string" == typeof e) {
                    if ((i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : R.exec(e)) && (i[1] || !t)) {
                        if (!i[1])
                            return (r = v.getElementById(i[2])) && (this[0] = r,
                            this.length = 1),
                            this;
                        if (t = t instanceof E ? t[0] : t,
                        E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                        M.test(i[1]) && E.isPlainObject(t))
                            for (i in t)
                                g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
                }
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
            }
            ).prototype = E.fn,
            H = E(v);
            var F = /^(?:parents|prev(?:Until|All))/
              , W = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function z(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            E.fn.extend({
                has: function(e) {
                    var t = E(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (E.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    var n, i = 0, r = this.length, o = [], s = "string" != typeof e && E(e);
                    if (!P.test(e)) {
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    }
                    return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? l.call(E(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            E.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return N(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return N(e, "parentNode", n)
                },
                next: function(e) {
                    return z(e, "nextSibling")
                },
                prev: function(e) {
                    return z(e, "previousSibling")
                },
                nextAll: function(e) {
                    return N(e, "nextSibling")
                },
                prevAll: function(e) {
                    return N(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return N(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return N(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return I((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return I(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (T(e, "template") && (e = e.content || e),
                    E.merge([], e.childNodes))
                }
            }, function(e, t) {
                E.fn[e] = function(n, i) {
                    var r = E.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = E.filter(i, r)),
                    this.length > 1 && (W[e] || E.uniqueSort(r),
                    F.test(e) && r.reverse()),
                    this.pushStack(r)
                }
            });
            var B = /[^\x20\t\r\n\f]+/g;
            function U(e) {
                return e
            }
            function V(e) {
                throw e
            }
            function G(e, t, n, i) {
                var r;
                try {
                    e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            E.Callbacks = function(e) {
                e = "string" == typeof e ? (t = e,
                n = {},
                E.each(t.match(B) || [], function(e, t) {
                    n[t] = !0
                }),
                n) : E.extend({}, e);
                var t, n, i, r, o, s, a = [], l = [], c = -1, u = function() {
                    for (s = s || e.once,
                    o = i = !0; l.length; c = -1)
                        for (r = l.shift(); ++c < a.length; )
                            !1 === a[c].apply(r[0], r[1]) && e.stopOnFalse && (c = a.length,
                            r = !1);
                    e.memory || (r = !1),
                    i = !1,
                    s && (a = r ? [] : "")
                }, d = {
                    add: function() {
                        return a && (r && !i && (c = a.length - 1,
                        l.push(r)),
                        function t(n) {
                            E.each(n, function(n, i) {
                                g(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== _(i) && t(i)
                            })
                        }(arguments),
                        r && !i && u()),
                        this
                    },
                    remove: function() {
                        return E.each(arguments, function(e, t) {
                            for (var n; (n = E.inArray(t, a, n)) > -1; )
                                a.splice(n, 1),
                                n <= c && c--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? E.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []),
                        this
                    },
                    disable: function() {
                        return s = l = [],
                        a = r = "",
                        this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return s = l = [],
                        r || i || (a = r = ""),
                        this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(e, t) {
                        return s || (t = t || [],
                        t = [e, t.slice ? t.slice() : t],
                        l.push(t),
                        i || u()),
                        this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!o
                    }
                };
                return d
            }
            ,
            E.extend({
                Deferred: function(t) {
                    var n = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
                      , i = "pending"
                      , r = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(e) {
                            return r.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return E.Deferred(function(t) {
                                E.each(n, function(n, i) {
                                    var r = g(e[i[4]]) && e[i[4]];
                                    o[i[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        then: function(t, i, r) {
                            var o = 0;
                            function s(t, n, i, r) {
                                return function() {
                                    var a = this
                                      , l = arguments
                                      , c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = i.apply(a, l)) === n.promise())
                                                throw TypeError("Thenable self-resolution");
                                            g(c = e && ("object" == typeof e || "function" == typeof e) && e.then) ? r ? c.call(e, s(o, n, U, r), s(o, n, V, r)) : (o++,
                                            c.call(e, s(o, n, U, r), s(o, n, V, r), s(o, n, U, n.notifyWith))) : (i !== U && (a = void 0,
                                            l = [e]),
                                            (r || n.resolveWith)(a, l))
                                        }
                                    }
                                      , u = r ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, u.error),
                                            t + 1 >= o && (i !== V && (a = void 0,
                                            l = [e]),
                                            n.rejectWith(a, l))
                                        }
                                    }
                                    ;
                                    t ? u() : (E.Deferred.getErrorHook ? u.error = E.Deferred.getErrorHook() : E.Deferred.getStackHook && (u.error = E.Deferred.getStackHook()),
                                    e.setTimeout(u))
                                }
                            }
                            return E.Deferred(function(e) {
                                n[0][3].add(s(0, e, g(r) ? r : U, e.notifyWith)),
                                n[1][3].add(s(0, e, g(t) ? t : U)),
                                n[2][3].add(s(0, e, g(i) ? i : V))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, r) : r
                        }
                    }
                      , o = {};
                    return E.each(n, function(e, t) {
                        var s = t[2]
                          , a = t[5];
                        r[t[1]] = s.add,
                        a && s.add(function() {
                            i = a
                        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                        s.add(t[3].fire),
                        o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                            this
                        }
                        ,
                        o[t[0] + "With"] = s.fireWith
                    }),
                    r.promise(o),
                    t && t.call(o, o),
                    o
                },
                when: function(e) {
                    var t = arguments.length
                      , n = t
                      , i = Array(n)
                      , r = o.call(arguments)
                      , s = E.Deferred()
                      , a = function(e) {
                        return function(n) {
                            i[e] = this,
                            r[e] = arguments.length > 1 ? o.call(arguments) : n,
                            --t || s.resolveWith(i, r)
                        }
                    };
                    if (t <= 1 && (G(e, s.done(a(n)).resolve, s.reject, !t),
                    "pending" === s.state() || g(r[n] && r[n].then)))
                        return s.then();
                    for (; n--; )
                        G(r[n], a(n), s.reject);
                    return s.promise()
                }
            });
            var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            E.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && Q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }
            ,
            E.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            }
            ;
            var Y = E.Deferred();
            function X() {
                v.removeEventListener("DOMContentLoaded", X),
                e.removeEventListener("load", X),
                E.ready()
            }
            E.fn.ready = function(e) {
                return Y.then(e).catch(function(e) {
                    E.readyException(e)
                }),
                this
            }
            ,
            E.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    !(!0 === e ? --E.readyWait : E.isReady) && (E.isReady = !0,
                    !0 !== e && --E.readyWait > 0 || Y.resolveWith(v, [E]))
                }
            }),
            E.ready.then = Y.then,
            "complete" !== v.readyState && ("loading" === v.readyState || v.documentElement.doScroll) ? (v.addEventListener("DOMContentLoaded", X),
            e.addEventListener("load", X)) : e.setTimeout(E.ready);
            var K = function(e, t, n, i, r, o, s) {
                var a = 0
                  , l = e.length
                  , c = null == n;
                if ("object" === _(n))
                    for (a in r = !0,
                    n)
                        K(e, t, a, n[a], !0, o, s);
                else if (void 0 !== i && (r = !0,
                g(i) || (s = !0),
                c && (s ? (t.call(e, i),
                t = null) : (c = t,
                t = function(e, t, n) {
                    return c.call(E(e), n)
                }
                )),
                t))
                    for (; a < l; a++)
                        t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            }
              , J = /^-ms-/
              , Z = /-([a-z])/g;
            function ee(e, t) {
                return t.toUpperCase()
            }
            function et(e) {
                return e.replace(J, "ms-").replace(Z, ee)
            }
            var en = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function ei() {
                this.expando = E.expando + ei.uid++
            }
            ei.uid = 1,
            ei.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return !t && (t = {},
                    en(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var i, r = this.cache(e);
                    if ("string" == typeof t)
                        r[et(t)] = n;
                    else
                        for (i in t)
                            r[et(i)] = t[i];
                    return r
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][et(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t)
                            for (n = (t = Array.isArray(t) ? t.map(et) : ((t = et(t))in i) ? [t] : t.match(B) || []).length; n--; )
                                delete i[t[n]];
                        (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !E.isEmptyObject(t)
                }
            };
            var er = new ei
              , eo = new ei
              , es = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , ea = /[A-Z]/g;
            function el(e, t, n) {
                var i, r;
                if (void 0 === n && 1 === e.nodeType) {
                    if (i = "data-" + t.replace(ea, "-$&").toLowerCase(),
                    "string" == typeof (n = e.getAttribute(i))) {
                        try {
                            r = n,
                            n = "true" === r || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : es.test(r) ? JSON.parse(r) : r)
                        } catch (e) {}
                        eo.set(e, t, n)
                    } else
                        n = void 0
                }
                return n
            }
            E.extend({
                hasData: function(e) {
                    return eo.hasData(e) || er.hasData(e)
                },
                data: function(e, t, n) {
                    return eo.access(e, t, n)
                },
                removeData: function(e, t) {
                    eo.remove(e, t)
                },
                _data: function(e, t, n) {
                    return er.access(e, t, n)
                },
                _removeData: function(e, t) {
                    er.remove(e, t)
                }
            }),
            E.fn.extend({
                data: function(e, t) {
                    var n, i, r, o = this[0], s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = eo.get(o),
                        1 === o.nodeType && !er.get(o, "hasDataAttrs"))) {
                            for (n = s.length; n--; )
                                s[n] && 0 === (i = s[n].name).indexOf("data-") && el(o, i = et(i.slice(5)), r[i]);
                            er.set(o, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function() {
                        eo.set(this, e)
                    }) : K(this, function(t) {
                        var n;
                        if (o && void 0 === t)
                            return void 0 !== (n = eo.get(o, e)) || void 0 !== (n = el(o, e)) ? n : void 0;
                        this.each(function() {
                            eo.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        eo.remove(this, e)
                    })
                }
            }),
            E.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e)
                        return t = (t || "fx") + "queue",
                        i = er.get(e, t),
                        n && (!i || Array.isArray(n) ? i = er.access(e, t, E.makeArray(n)) : i.push(n)),
                        i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = E.queue(e, t)
                      , i = n.length
                      , r = n.shift()
                      , o = E._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(),
                    i--),
                    r && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(e, function() {
                        E.dequeue(e, t)
                    }, o)),
                    !i && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return er.get(e, n) || er.access(e, n, {
                        empty: E.Callbacks("once memory").add(function() {
                            er.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            E.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return ("string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n) ? E.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        E.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1, r = E.Deferred(), o = this, s = this.length, a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; s--; )
                        (n = er.get(o[s], e + "queueHooks")) && n.empty && (i++,
                        n.empty.add(a));
                    return a(),
                    r.promise(t)
                }
            });
            var ec = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , eu = RegExp("^(?:([+-])=|)(" + ec + ")([a-z%]*)$", "i")
              , ed = ["Top", "Right", "Bottom", "Left"]
              , ep = v.documentElement
              , ef = function(e) {
                return E.contains(e.ownerDocument, e)
            }
              , eh = {
                composed: !0
            };
            ep.getRootNode && (ef = function(e) {
                return E.contains(e.ownerDocument, e) || e.getRootNode(eh) === e.ownerDocument
            }
            );
            var eg = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ef(e) && "none" === E.css(e, "display")
            };
            function em(e, t, n, i) {
                var r, o, s = 20, a = i ? function() {
                    return i.cur()
                }
                : function() {
                    return E.css(e, t, "")
                }
                , l = a(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"), u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && eu.exec(E.css(e, t));
                if (u && u[3] !== c) {
                    for (l /= 2,
                    c = c || u[3],
                    u = +l || 1; s--; )
                        E.style(e, t, u + c),
                        (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                        u /= o;
                    u *= 2,
                    E.style(e, t, u + c),
                    n = n || []
                }
                return n && (u = +u || +l || 0,
                r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                i && (i.unit = c,
                i.start = u,
                i.end = r)),
                r
            }
            var ev = {};
            function ey(e, t) {
                for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
                    (i = e[o]).style && (n = i.style.display,
                    t ? ("none" !== n || (r[o] = er.get(i, "display") || null,
                    r[o] || (i.style.display = "")),
                    "" === i.style.display && eg(i) && (r[o] = function(e) {
                        var t, n = e.ownerDocument, i = e.nodeName, r = ev[i];
                        return r || (t = n.body.appendChild(n.createElement(i)),
                        r = E.css(t, "display"),
                        t.parentNode.removeChild(t),
                        "none" === r && (r = "block"),
                        ev[i] = r),
                        r
                    }(i))) : "none" !== n && (r[o] = "none",
                    er.set(i, "display", n)));
                for (o = 0; o < s; o++)
                    null != r[o] && (e[o].style.display = r[o]);
                return e
            }
            E.fn.extend({
                show: function() {
                    return ey(this, !0)
                },
                hide: function() {
                    return ey(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        eg(this) ? E(this).show() : E(this).hide()
                    })
                }
            });
            var eb = /^(?:checkbox|radio)$/i
              , e_ = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
              , ex = /^$|^module$|\/(?:java|ecma)script/i;
            e4 = v.createDocumentFragment().appendChild(v.createElement("div")),
            (e6 = v.createElement("input")).setAttribute("type", "radio"),
            e6.setAttribute("checked", "checked"),
            e6.setAttribute("name", "t"),
            e4.appendChild(e6),
            h.checkClone = e4.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e4.innerHTML = "<textarea>x</textarea>",
            h.noCloneChecked = !!e4.cloneNode(!0).lastChild.defaultValue,
            e4.innerHTML = "<option></option>",
            h.option = !!e4.lastChild;
            var ew = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function eE(e, t) {
                var n;
                return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && T(e, t)) ? E.merge([e], n) : n
            }
            function eA(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    er.set(e[n], "globalEval", !t || er.get(t[n], "globalEval"))
            }
            ew.tbody = ew.tfoot = ew.colgroup = ew.caption = ew.thead,
            ew.th = ew.td,
            h.option || (ew.optgroup = ew.option = [1, "<select multiple='multiple'>", "</select>"]);
            var eT = /<|&#?\w+;/;
            function eC(e, t, n, i, r) {
                for (var o, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
                    if ((o = e[p]) || 0 === o) {
                        if ("object" === _(o))
                            E.merge(d, o.nodeType ? [o] : o);
                        else if (eT.test(o)) {
                            for (s = s || u.appendChild(t.createElement("div")),
                            a = ew[(e_.exec(o) || ["", ""])[1].toLowerCase()] || ew._default,
                            s.innerHTML = a[1] + E.htmlPrefilter(o) + a[2],
                            c = a[0]; c--; )
                                s = s.lastChild;
                            E.merge(d, s.childNodes),
                            (s = u.firstChild).textContent = ""
                        } else
                            d.push(t.createTextNode(o))
                    }
                for (u.textContent = "",
                p = 0; o = d[p++]; ) {
                    if (i && E.inArray(o, i) > -1) {
                        r && r.push(o);
                        continue
                    }
                    if (l = ef(o),
                    s = eE(u.appendChild(o), "script"),
                    l && eA(s),
                    n)
                        for (c = 0; o = s[c++]; )
                            ex.test(o.type || "") && n.push(o)
                }
                return u
            }
            var eS = /^([^.]*)(?:\.(.+)|)/;
            function eD() {
                return !0
            }
            function e$() {
                return !1
            }
            function ek(e, t, n, i, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (i = i || n,
                    n = void 0),
                    t)
                        ek(e, a, n, i, t[a], o);
                    return e
                }
                if (null == i && null == r ? (r = n,
                i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
                i = void 0) : (r = i,
                i = n,
                n = void 0)),
                !1 === r)
                    r = e$;
                else if (!r)
                    return e;
                return 1 === o && (s = r,
                (r = function(e) {
                    return E().off(e),
                    s.apply(this, arguments)
                }
                ).guid = s.guid || (s.guid = E.guid++)),
                e.each(function() {
                    E.event.add(this, t, r, i, n)
                })
            }
            function eO(e, t, n) {
                if (!n) {
                    void 0 === er.get(e, t) && E.event.add(e, t, eD);
                    return
                }
                er.set(e, t, !1),
                E.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var n, i = er.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (i)
                                (E.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (i = o.call(arguments),
                            er.set(this, t, i),
                            this[t](),
                            n = er.get(this, t),
                            er.set(this, t, !1),
                            i !== n)
                                return e.stopImmediatePropagation(),
                                e.preventDefault(),
                                n
                        } else
                            i && (er.set(this, t, E.event.trigger(i[0], i.slice(1), this)),
                            e.stopPropagation(),
                            e.isImmediatePropagationStopped = eD)
                    }
                })
            }
            E.event = {
                global: {},
                add: function(e, t, n, i, r) {
                    var o, s, a, l, c, u, d, p, f, h, g, m = er.get(e);
                    if (en(e))
                        for (n.handler && (n = (o = n).handler,
                        r = o.selector),
                        r && E.find.matchesSelector(ep, r),
                        n.guid || (n.guid = E.guid++),
                        (l = m.events) || (l = m.events = Object.create(null)),
                        (s = m.handle) || (s = m.handle = function(t) {
                            return E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        c = (t = (t || "").match(B) || [""]).length; c--; )
                            f = g = (a = eS.exec(t[c]) || [])[1],
                            h = (a[2] || "").split(".").sort(),
                            f && (d = E.event.special[f] || {},
                            f = (r ? d.delegateType : d.bindType) || f,
                            d = E.event.special[f] || {},
                            u = E.extend({
                                type: f,
                                origType: g,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && E.expr.match.needsContext.test(r),
                                namespace: h.join(".")
                            }, o),
                            (p = l[f]) || ((p = l[f] = []).delegateCount = 0,
                            (!d.setup || !1 === d.setup.call(e, i, h, s)) && e.addEventListener && e.addEventListener(f, s)),
                            d.add && (d.add.call(e, u),
                            u.handler.guid || (u.handler.guid = n.guid)),
                            r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                            E.event.global[f] = !0)
                },
                remove: function(e, t, n, i, r) {
                    var o, s, a, l, c, u, d, p, f, h, g, m = er.hasData(e) && er.get(e);
                    if (m && (l = m.events)) {
                        for (c = (t = (t || "").match(B) || [""]).length; c--; ) {
                            if (f = g = (a = eS.exec(t[c]) || [])[1],
                            h = (a[2] || "").split(".").sort(),
                            !f) {
                                for (f in l)
                                    E.event.remove(e, f + t[c], n, i, !0);
                                continue
                            }
                            for (d = E.event.special[f] || {},
                            p = l[f = (i ? d.delegateType : d.bindType) || f] || [],
                            a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = o = p.length; o--; )
                                u = p[o],
                                (r || g === u.origType) && (!n || n.guid === u.guid) && (!a || a.test(u.namespace)) && (!i || i === u.selector || "**" === i && u.selector) && (p.splice(o, 1),
                                u.selector && p.delegateCount--,
                                d.remove && d.remove.call(e, u));
                            s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || E.removeEvent(e, f, m.handle),
                            delete l[f])
                        }
                        E.isEmptyObject(l) && er.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, r, o, s, a = Array(arguments.length), l = E.event.fix(e), c = (er.get(this, "events") || Object.create(null))[l.type] || [], u = E.event.special[l.type] || {};
                    for (t = 1,
                    a[0] = l; t < arguments.length; t++)
                        a[t] = arguments[t];
                    if (l.delegateTarget = this,
                    !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                        for (s = E.event.handlers.call(this, l, c),
                        t = 0; (r = s[t++]) && !l.isPropagationStopped(); )
                            for (l.currentTarget = r.elem,
                            n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                (!l.rnamespace || !1 === o.namespace || l.rnamespace.test(o.namespace)) && (l.handleObj = o,
                                l.data = o.data,
                                void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(),
                                l.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, l),
                        l.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1)) {
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && !("click" === e.type && !0 === c.disabled)) {
                                for (n = 0,
                                o = [],
                                s = {}; n < l; n++)
                                    void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? E(r, this).index(c) > -1 : E.find(r, this, null, [c]).length),
                                    s[r] && o.push(i);
                                o.length && a.push({
                                    elem: c,
                                    handlers: o
                                })
                            }
                    }
                    return c = this,
                    l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }),
                    a
                },
                addProp: function(e, t) {
                    Object.defineProperty(E.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[E.expando] ? e : new E.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return eb.test(t.type) && t.click && T(t, "input") && eO(t, "click", !0),
                            !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return eb.test(t.type) && t.click && T(t, "input") && eO(t, "click"),
                            !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return eb.test(t.type) && t.click && T(t, "input") && er.get(t, "click") || T(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            E.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            ,
            E.Event = function(e, t) {
                if (!(this instanceof E.Event))
                    return new E.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? eD : e$,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && E.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[E.expando] = !0
            }
            ,
            E.Event.prototype = {
                constructor: E.Event,
                isDefaultPrevented: e$,
                isPropagationStopped: e$,
                isImmediatePropagationStopped: e$,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = eD,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = eD,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = eD,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            E.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, E.event.addProp),
            E.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                function n(e) {
                    if (v.documentMode) {
                        var n = er.get(this, "handle")
                          , i = E.event.fix(e);
                        i.type = "focusin" === e.type ? "focus" : "blur",
                        i.isSimulated = !0,
                        n(e),
                        i.target === i.currentTarget && n(i)
                    } else
                        E.event.simulate(t, e.target, E.event.fix(e))
                }
                E.event.special[e] = {
                    setup: function() {
                        var i;
                        if (eO(this, e, !0),
                        !v.documentMode)
                            return !1;
                        (i = er.get(this, t)) || this.addEventListener(t, n),
                        er.set(this, t, (i || 0) + 1)
                    },
                    trigger: function() {
                        return eO(this, e),
                        !0
                    },
                    teardown: function() {
                        var e;
                        if (!v.documentMode)
                            return !1;
                        (e = er.get(this, t) - 1) ? er.set(this, t, e) : (this.removeEventListener(t, n),
                        er.remove(this, t))
                    },
                    _default: function(t) {
                        return er.get(t.target, e)
                    },
                    delegateType: t
                },
                E.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this.document || this
                          , r = v.documentMode ? this : i
                          , o = er.get(r, t);
                        o || (v.documentMode ? this.addEventListener(t, n) : i.addEventListener(e, n, !0)),
                        er.set(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this.document || this
                          , r = v.documentMode ? this : i
                          , o = er.get(r, t) - 1;
                        o ? er.set(r, t, o) : (v.documentMode ? this.removeEventListener(t, n) : i.removeEventListener(e, n, !0),
                        er.remove(r, t))
                    }
                }
            }),
            E.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                E.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = e.relatedTarget, r = e.handleObj;
                        return i && (i === this || E.contains(this, i)) || (e.type = r.origType,
                        n = r.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            E.fn.extend({
                on: function(e, t, n, i) {
                    return ek(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return ek(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj)
                        return i = e.handleObj,
                        E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                    if ("object" == typeof e) {
                        for (r in e)
                            this.off(r, t, e[r]);
                        return this
                    }
                    return (!1 === t || "function" == typeof t) && (n = t,
                    t = void 0),
                    !1 === n && (n = e$),
                    this.each(function() {
                        E.event.remove(this, e, n, t)
                    })
                }
            });
            var eL = /<script|<style|<link/i
              , ej = /checked\s*(?:[^=]|=\s*.checked.)/i
              , eN = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
            function eI(e, t) {
                return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
            }
            function eP(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function eM(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                e
            }
            function eq(e, t) {
                var n, i, r, o, s, a;
                if (1 === t.nodeType) {
                    if (er.hasData(e) && (a = er.get(e).events))
                        for (r in er.remove(t, "handle events"),
                        a)
                            for (n = 0,
                            i = a[r].length; n < i; n++)
                                E.event.add(t, r, a[r][n]);
                    eo.hasData(e) && (o = eo.access(e),
                    s = E.extend({}, o),
                    eo.set(t, s))
                }
            }
            function eH(e, t, n, i) {
                t = s(t);
                var r, o, a, l, c, u, d = 0, p = e.length, f = p - 1, m = t[0], v = g(m);
                if (v || p > 1 && "string" == typeof m && !h.checkClone && ej.test(m))
                    return e.each(function(r) {
                        var o = e.eq(r);
                        v && (t[0] = m.call(this, r, o.html())),
                        eH(o, t, n, i)
                    });
                if (p && (o = (r = eC(t, e[0].ownerDocument, !1, e, i)).firstChild,
                1 === r.childNodes.length && (r = o),
                o || i)) {
                    for (l = (a = E.map(eE(r, "script"), eP)).length; d < p; d++)
                        c = r,
                        d !== f && (c = E.clone(c, !0, !0),
                        l && E.merge(a, eE(c, "script"))),
                        n.call(e[d], c, d);
                    if (l)
                        for (u = a[a.length - 1].ownerDocument,
                        E.map(a, eM),
                        d = 0; d < l; d++)
                            c = a[d],
                            ex.test(c.type || "") && !er.access(c, "globalEval") && E.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {
                                nonce: c.nonce || c.getAttribute("nonce")
                            }, u) : b(c.textContent.replace(eN, ""), c, u))
                }
                return e
            }
            function eR(e, t, n) {
                for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                    n || 1 !== i.nodeType || E.cleanData(eE(i)),
                    i.parentNode && (n && ef(i) && eA(eE(i, "script")),
                    i.parentNode.removeChild(i));
                return e
            }
            E.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var i, r, o, s, a = e.cloneNode(!0), l = ef(e);
                    if (!h.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !E.isXMLDoc(e))
                        for (i = 0,
                        s = eE(a),
                        r = (o = eE(e)).length; i < r; i++)
                            !function(e, t) {
                                var n = t.nodeName.toLowerCase();
                                "input" === n && eb.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                            }(o[i], s[i]);
                    if (t) {
                        if (n)
                            for (i = 0,
                            o = o || eE(e),
                            s = s || eE(a),
                            r = o.length; i < r; i++)
                                eq(o[i], s[i]);
                        else
                            eq(e, a)
                    }
                    return (s = eE(a, "script")).length > 0 && eA(s, !l && eE(e, "script")),
                    a
                },
                cleanData: function(e) {
                    for (var t, n, i, r = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (en(n)) {
                            if (t = n[er.expando]) {
                                if (t.events)
                                    for (i in t.events)
                                        r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                                n[er.expando] = void 0
                            }
                            n[eo.expando] && (n[eo.expando] = void 0)
                        }
                }
            }),
            E.fn.extend({
                detach: function(e) {
                    return eR(this, e, !0)
                },
                remove: function(e) {
                    return eR(this, e)
                },
                text: function(e) {
                    return K(this, function(e) {
                        return void 0 === e ? E.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return eH(this, arguments, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && eI(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return eH(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = eI(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return eH(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return eH(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (E.cleanData(eE(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return E.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return K(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !eL.test(e) && !ew[(e_.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    t = this[n] || {},
                                    1 === t.nodeType && (E.cleanData(eE(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return eH(this, arguments, function(t) {
                        var n = this.parentNode;
                        0 > E.inArray(this, e) && (E.cleanData(eE(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            E.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                E.fn[e] = function(e) {
                    for (var n, i = [], r = E(e), o = r.length - 1, s = 0; s <= o; s++)
                        n = s === o ? this : this.clone(!0),
                        E(r[s])[t](n),
                        a.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var eF = RegExp("^(" + ec + ")(?!px)[a-z%]+$", "i")
              , eW = /^--/
              , ez = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e),
                n.getComputedStyle(t)
            }
              , eB = function(e, t, n) {
                var i, r, o = {};
                for (r in t)
                    o[r] = e.style[r],
                    e.style[r] = t[r];
                for (r in i = n.call(e),
                t)
                    e.style[r] = o[r];
                return i
            }
              , eU = RegExp(ed.join("|"), "i");
            function eV(e, t, n) {
                var i, r, o, s, a = eW.test(t), l = e.style;
                return (n = n || ez(e)) && (s = n.getPropertyValue(t) || n[t],
                a && s && (s = s.replace(O, "$1") || void 0),
                "" !== s || ef(e) || (s = E.style(e, t)),
                !h.pixelBoxStyles() && eF.test(s) && eU.test(t) && (i = l.width,
                r = l.minWidth,
                o = l.maxWidth,
                l.minWidth = l.maxWidth = l.width = s,
                s = n.width,
                l.width = i,
                l.minWidth = r,
                l.maxWidth = o)),
                void 0 !== s ? s + "" : s
            }
            function eG(e, t) {
                return {
                    get: function() {
                        if (e()) {
                            delete this.get;
                            return
                        }
                        return (this.get = t).apply(this, arguments)
                    }
                }
            }
            !function() {
                function t() {
                    if (u) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        ep.appendChild(c).appendChild(u);
                        var t = e.getComputedStyle(u);
                        i = "1%" !== t.top,
                        l = 12 === n(t.marginLeft),
                        u.style.right = "60%",
                        s = 36 === n(t.right),
                        r = 36 === n(t.width),
                        u.style.position = "absolute",
                        o = 12 === n(u.offsetWidth / 3),
                        ep.removeChild(c),
                        u = null
                    }
                }
                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var i, r, o, s, a, l, c = v.createElement("div"), u = v.createElement("div");
                u.style && (u.style.backgroundClip = "content-box",
                u.cloneNode(!0).style.backgroundClip = "",
                h.clearCloneStyle = "content-box" === u.style.backgroundClip,
                E.extend(h, {
                    boxSizingReliable: function() {
                        return t(),
                        r
                    },
                    pixelBoxStyles: function() {
                        return t(),
                        s
                    },
                    pixelPosition: function() {
                        return t(),
                        i
                    },
                    reliableMarginLeft: function() {
                        return t(),
                        l
                    },
                    scrollboxSize: function() {
                        return t(),
                        o
                    },
                    reliableTrDimensions: function() {
                        var t, n, i, r;
                        return null == a && (t = v.createElement("table"),
                        n = v.createElement("tr"),
                        i = v.createElement("div"),
                        t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                        n.style.cssText = "box-sizing:content-box;border:1px solid",
                        n.style.height = "1px",
                        i.style.height = "9px",
                        i.style.display = "block",
                        ep.appendChild(t).appendChild(n).appendChild(i),
                        a = parseInt((r = e.getComputedStyle(n)).height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight,
                        ep.removeChild(t)),
                        a
                    }
                }))
            }();
            var eQ = ["Webkit", "Moz", "ms"]
              , eY = v.createElement("div").style
              , eX = {};
            function eK(e) {
                return E.cssProps[e] || eX[e] || (e in eY ? e : eX[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = eQ.length; n--; )
                        if ((e = eQ[n] + t)in eY)
                            return e
                }(e) || e)
            }
            var eJ = /^(none|table(?!-c[ea]).+)/
              , eZ = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , e0 = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function e1(e, t, n) {
                var i = eu.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function e2(e, t, n, i, r, o) {
                var s = "width" === t ? 1 : 0
                  , a = 0
                  , l = 0
                  , c = 0;
                if (n === (i ? "border" : "content"))
                    return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (c += E.css(e, n + ed[s], !0, r)),
                    i ? ("content" === n && (l -= E.css(e, "padding" + ed[s], !0, r)),
                    "margin" !== n && (l -= E.css(e, "border" + ed[s] + "Width", !0, r))) : (l += E.css(e, "padding" + ed[s], !0, r),
                    "padding" !== n ? l += E.css(e, "border" + ed[s] + "Width", !0, r) : a += E.css(e, "border" + ed[s] + "Width", !0, r));
                return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
                l + c
            }
            function e3(e, t, n) {
                var i = ez(e)
                  , r = (!h.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i)
                  , o = r
                  , s = eV(e, t, i)
                  , a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (eF.test(s)) {
                    if (!n)
                        return s;
                    s = "auto"
                }
                return (!h.boxSizingReliable() && r || !h.reliableTrDimensions() && T(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === E.css(e, "boxSizing", !1, i),
                (o = a in e) && (s = e[a])),
                (s = parseFloat(s) || 0) + e2(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
            }
            function e9(e, t, n, i, r) {
                return new e9.prototype.init(e,t,n,i,r)
            }
            E.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = eV(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    aspectRatio: !0,
                    borderImageSlice: !0,
                    columnCount: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    scale: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0
                },
                cssProps: {},
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, o, s, a = et(t), l = eW.test(t), c = e.style;
                        if (l || (t = eK(a)),
                        s = E.cssHooks[t] || E.cssHooks[a],
                        void 0 === n)
                            return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                        "string" == (o = typeof n) && (r = eu.exec(n)) && r[1] && (n = em(e, t, r),
                        o = "number"),
                        null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[a] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var r, o, s, a = et(t);
                    return (eW.test(t) || (t = eK(a)),
                    (s = E.cssHooks[t] || E.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
                    void 0 === r && (r = eV(e, t, i)),
                    "normal" === r && t in e0 && (r = e0[t]),
                    "" === n || n) ? (o = parseFloat(r),
                    !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }),
            E.each(["height", "width"], function(e, t) {
                E.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n)
                            return !eJ.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? e3(e, t, i) : eB(e, eZ, function() {
                                return e3(e, t, i)
                            })
                    },
                    set: function(e, n, i) {
                        var r, o = ez(e), s = !h.scrollboxSize() && "absolute" === o.position, a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, o), l = i ? e2(e, t, i, a, o) : 0;
                        return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - e2(e, t, "border", !1, o) - .5)),
                        l && (r = eu.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                        n = E.css(e, t)),
                        e1(e, n, l)
                    }
                }
            }),
            E.cssHooks.marginLeft = eG(h.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(eV(e, "marginLeft")) || e.getBoundingClientRect().left - eB(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }),
            E.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                E.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                            r[e + ed[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                },
                "margin" !== e && (E.cssHooks[e + t].set = e1)
            }),
            E.fn.extend({
                css: function(e, t) {
                    return K(this, function(e, t, n) {
                        var i, r, o = {}, s = 0;
                        if (Array.isArray(t)) {
                            for (i = ez(e),
                            r = t.length; s < r; s++)
                                o[t[s]] = E.css(e, t[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }),
            E.Tween = e9,
            e9.prototype = {
                constructor: e9,
                init: function(e, t, n, i, r, o) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = r || E.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = o || (E.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = e9.propHooks[this.prop];
                    return e && e.get ? e.get(this) : e9.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = e9.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : e9.propHooks._default.set(this),
                    this
                }
            },
            e9.prototype.init.prototype = e9.prototype,
            e9.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 === e.elem.nodeType && (E.cssHooks[e.prop] || null != e.elem.style[eK(e.prop)]) ? E.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            },
            e9.propHooks.scrollTop = e9.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            E.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            E.fx = e9.prototype.init,
            E.fx.step = {};
            var e4, e6, e5, e8, e7 = /^(?:toggle|show|hide)$/, te = /queueHooks$/;
            function tt() {
                return e.setTimeout(function() {
                    e5 = void 0
                }),
                e5 = Date.now()
            }
            function tn(e, t) {
                var n, i = 0, r = {
                    height: e
                };
                for (t = t ? 1 : 0; i < 4; i += 2 - t)
                    r["margin" + (n = ed[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e),
                r
            }
            function ti(e, t, n) {
                for (var i, r = (tr.tweeners[t] || []).concat(tr.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                    if (i = r[o].call(n, t, e))
                        return i
            }
            function tr(e, t, n) {
                var i, r, o = 0, s = tr.prefilters.length, a = E.Deferred().always(function() {
                    delete l.elem
                }), l = function() {
                    if (r)
                        return !1;
                    for (var t = e5 || tt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++)
                        c.tweens[o].run(i);
                    return (a.notifyWith(e, [c, i, n]),
                    i < 1 && s) ? n : (s || a.notifyWith(e, [c, 1, 0]),
                    a.resolveWith(e, [c]),
                    !1)
                }, c = a.promise({
                    elem: e,
                    props: E.extend({}, t),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: e5 || tt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i),
                        i
                    },
                    stop: function(t) {
                        var n = 0
                          , i = t ? c.tweens.length : 0;
                        if (r)
                            return this;
                        for (r = !0; n < i; n++)
                            c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]),
                        a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                        this
                    }
                }), u = c.props;
                for (function(e, t) {
                    var n, i, r, o, s;
                    for (n in e)
                        if (r = t[i = et(n)],
                        Array.isArray(o = e[n]) && (r = o[1],
                        o = e[n] = o[0]),
                        n !== i && (e[i] = o,
                        delete e[n]),
                        (s = E.cssHooks[i]) && ("expand"in s))
                            for (n in o = s.expand(o),
                            delete e[i],
                            o)
                                (n in e) || (e[n] = o[n],
                                t[n] = r);
                        else
                            t[i] = r
                }(u, c.opts.specialEasing); o < s; o++)
                    if (i = tr.prefilters[o].call(c, e, u, c.opts))
                        return g(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                        i;
                return E.map(u, ti, c),
                g(c.opts.start) && c.opts.start.call(e, c),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                E.fx.timer(E.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })),
                c
            }
            E.Animation = E.extend(tr, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return em(n.elem, e, eu.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    g(e) ? (t = e,
                    e = ["*"]) : e = e.match(B);
                    for (var n, i = 0, r = e.length; i < r; i++)
                        n = e[i],
                        tr.tweeners[n] = tr.tweeners[n] || [],
                        tr.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var i, r, o, s, a, l, c, u, d = "width"in t || "height"in t, p = this, f = {}, h = e.style, g = e.nodeType && eg(e), m = er.get(e, "fxshow");
                    for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                    a = s.empty.fire,
                    s.empty.fire = function() {
                        s.unqueued || a()
                    }
                    ),
                    s.unqueued++,
                    p.always(function() {
                        p.always(function() {
                            s.unqueued--,
                            E.queue(e, "fx").length || s.empty.fire()
                        })
                    })),
                    t)
                        if (r = t[i],
                        e7.test(r)) {
                            if (delete t[i],
                            o = o || "toggle" === r,
                            r === (g ? "hide" : "show")) {
                                if ("show" !== r || !m || void 0 === m[i])
                                    continue;
                                g = !0
                            }
                            f[i] = m && m[i] || E.style(e, i)
                        }
                    if (!(!(l = !E.isEmptyObject(t)) && E.isEmptyObject(f)))
                        for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                        null == (c = m && m.display) && (c = er.get(e, "display")),
                        "none" === (u = E.css(e, "display")) && (c ? u = c : (ey([e], !0),
                        c = e.style.display || c,
                        u = E.css(e, "display"),
                        ey([e]))),
                        ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (p.done(function() {
                            h.display = c
                        }),
                        null != c || (c = "none" === (u = h.display) ? "" : u)),
                        h.display = "inline-block")),
                        n.overflow && (h.overflow = "hidden",
                        p.always(function() {
                            h.overflow = n.overflow[0],
                            h.overflowX = n.overflow[1],
                            h.overflowY = n.overflow[2]
                        })),
                        l = !1,
                        f)
                            l || (m ? "hidden"in m && (g = m.hidden) : m = er.access(e, "fxshow", {
                                display: c
                            }),
                            o && (m.hidden = !g),
                            g && ey([e], !0),
                            p.done(function() {
                                for (i in g || ey([e]),
                                er.remove(e, "fxshow"),
                                f)
                                    E.style(e, i, f[i])
                            })),
                            l = ti(g ? m[i] : 0, i, p),
                            i in m || (m[i] = l.start,
                            g && (l.end = l.start,
                            l.start = 0))
                }
                ],
                prefilter: function(e, t) {
                    t ? tr.prefilters.unshift(e) : tr.prefilters.push(e)
                }
            }),
            E.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? E.extend({}, e) : {
                    complete: n || !n && t || g(e) && e,
                    duration: e,
                    easing: n && t || t && !g(t) && t
                };
                return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default),
                (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    g(i.old) && i.old.call(this),
                    i.queue && E.dequeue(this, i.queue)
                }
                ,
                i
            }
            ,
            E.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(eg).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = E.isEmptyObject(e)
                      , o = E.speed(t, n, i)
                      , s = function() {
                        var t = tr(this, E.extend({}, e), o);
                        (r || er.get(this, "finish")) && t.stop(!0)
                    };
                    return s.finish = s,
                    r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , r = null != e && e + "queueHooks"
                          , o = E.timers
                          , s = er.get(this);
                        if (r)
                            s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s)
                                s[r] && s[r].stop && te.test(r) && i(s[r]);
                        for (r = o.length; r--; )
                            o[r].elem === this && (null == e || o[r].queue === e) && (o[r].anim.stop(n),
                            t = !1,
                            o.splice(r, 1));
                        (t || !n) && E.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = er.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = E.timers, s = i ? i.length : 0;
                        for (n.finish = !0,
                        E.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                            o.splice(t, 1));
                        for (t = 0; t < s; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            E.each(["toggle", "show", "hide"], function(e, t) {
                var n = E.fn[t];
                E.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(tn(t, !0), e, i, r)
                }
            }),
            E.each({
                slideDown: tn("show"),
                slideUp: tn("hide"),
                slideToggle: tn("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                E.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }),
            E.timers = [],
            E.fx.tick = function() {
                var e, t = 0, n = E.timers;
                for (e5 = Date.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || E.fx.stop(),
                e5 = void 0
            }
            ,
            E.fx.timer = function(e) {
                E.timers.push(e),
                E.fx.start()
            }
            ,
            E.fx.interval = 13,
            E.fx.start = function() {
                e8 || (e8 = !0,
                function t() {
                    e8 && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(t) : e.setTimeout(t, E.fx.interval),
                    E.fx.tick())
                }())
            }
            ,
            E.fx.stop = function() {
                e8 = null
            }
            ,
            E.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            E.fn.delay = function(t, n) {
                return t = E.fx && E.fx.speeds[t] || t,
                n = n || "fx",
                this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            }
            ,
            to = v.createElement("input"),
            ts = v.createElement("select").appendChild(v.createElement("option")),
            to.type = "checkbox",
            h.checkOn = "" !== to.value,
            h.optSelected = ts.selected,
            (to = v.createElement("input")).value = "t",
            to.type = "radio",
            h.radioValue = "t" === to.value;
            var to, ts, ta, tl = E.expr.attrHandle;
            E.fn.extend({
                attr: function(e, t) {
                    return K(this, E.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        E.removeAttr(this, e)
                    })
                }
            }),
            E.extend({
                attr: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) {
                        if (void 0 === e.getAttribute)
                            return E.prop(e, t, n);
                        if (1 === o && E.isXMLDoc(e) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? ta : void 0)),
                        void 0 !== n) {
                            if (null === n) {
                                E.removeAttr(e, t);
                                return
                            }
                            return r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                            n)
                        }
                        return r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i
                    }
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!h.radioValue && "radio" === t && T(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0, r = t && t.match(B);
                    if (r && 1 === e.nodeType)
                        for (; n = r[i++]; )
                            e.removeAttribute(n)
                }
            }),
            ta = {
                set: function(e, t, n) {
                    return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = tl[t] || E.find.attr;
                tl[t] = function(e, t, i) {
                    var r, o, s = t.toLowerCase();
                    return i || (o = tl[s],
                    tl[s] = r,
                    r = null != n(e, t, i) ? s : null,
                    tl[s] = o),
                    r
                }
            });
            var tc = /^(?:input|select|textarea|button)$/i
              , tu = /^(?:a|area)$/i;
            function td(e) {
                return (e.match(B) || []).join(" ")
            }
            function tp(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function tf(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || []
            }
            E.fn.extend({
                prop: function(e, t) {
                    return K(this, E.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[E.propFix[e] || e]
                    })
                }
            }),
            E.extend({
                prop: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return (1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                        r = E.propHooks[t]),
                        void 0 !== n) ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = E.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : tc.test(e.nodeName) || tu.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            h.optSelected || (E.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                E.propFix[this.toLowerCase()] = this
            }),
            E.fn.extend({
                addClass: function(e) {
                    var t, n, i, r, o, s;
                    return g(e) ? this.each(function(t) {
                        E(this).addClass(e.call(this, t, tp(this)))
                    }) : (t = tf(e)).length ? this.each(function() {
                        if (i = tp(this),
                        n = 1 === this.nodeType && " " + td(i) + " ") {
                            for (o = 0; o < t.length; o++)
                                r = t[o],
                                0 > n.indexOf(" " + r + " ") && (n += r + " ");
                            s = td(n),
                            i !== s && this.setAttribute("class", s)
                        }
                    }) : this
                },
                removeClass: function(e) {
                    var t, n, i, r, o, s;
                    return g(e) ? this.each(function(t) {
                        E(this).removeClass(e.call(this, t, tp(this)))
                    }) : arguments.length ? (t = tf(e)).length ? this.each(function() {
                        if (i = tp(this),
                        n = 1 === this.nodeType && " " + td(i) + " ") {
                            for (o = 0; o < t.length; o++)
                                for (r = t[o]; n.indexOf(" " + r + " ") > -1; )
                                    n = n.replace(" " + r + " ", " ");
                            s = td(n),
                            i !== s && this.setAttribute("class", s)
                        }
                    }) : this : this.attr("class", "")
                },
                toggleClass: function(e, t) {
                    var n, i, r, o, s = typeof e, a = "string" === s || Array.isArray(e);
                    return g(e) ? this.each(function(n) {
                        E(this).toggleClass(e.call(this, n, tp(this), t), t)
                    }) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = tf(e),
                    this.each(function() {
                        if (a)
                            for (r = 0,
                            o = E(this); r < n.length; r++)
                                i = n[r],
                                o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                        else
                            (void 0 === e || "boolean" === s) && ((i = tp(this)) && er.set(this, "__className__", i),
                            this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : er.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++]; )
                        if (1 === n.nodeType && (" " + td(tp(n)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var th = /\r/g;
            E.fn.extend({
                val: function(e) {
                    var t, n, i, r = this[0];
                    return arguments.length ? (i = g(e),
                    this.each(function(n) {
                        var r;
                        1 !== this.nodeType || (null == (r = i ? e.call(this, n, E(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = E.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    })) : r ? (t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(th, "") : null == n ? "" : n : void 0
                }
            }),
            E.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = E.find.attr(e, "value");
                            return null != t ? t : td(E.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
                                    if (t = E(n).val(),
                                    s)
                                        return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, i, r = e.options, o = E.makeArray(t), s = r.length; s--; )
                                ((i = r[s]).selected = E.inArray(E.valHooks.option.get(i), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            o
                        }
                    }
                }
            }),
            E.each(["radio", "checkbox"], function() {
                E.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t))
                            return e.checked = E.inArray(E(e).val(), t) > -1
                    }
                },
                h.checkOn || (E.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            });
            var tg = e.location
              , tm = {
                guid: Date.now()
            }
              , tv = /\?/;
            E.parseXML = function(t) {
                var n, i;
                if (!t || "string" != typeof t)
                    return null;
                try {
                    n = new e.DOMParser().parseFromString(t, "text/xml")
                } catch (e) {}
                return i = n && n.getElementsByTagName("parsererror")[0],
                (!n || i) && E.error("Invalid XML: " + (i ? E.map(i.childNodes, function(e) {
                    return e.textContent
                }).join("\n") : t)),
                n
            }
            ;
            var ty = /^(?:focusinfocus|focusoutblur)$/
              , tb = function(e) {
                e.stopPropagation()
            };
            E.extend(E.event, {
                trigger: function(t, n, i, r) {
                    var o, s, a, l, c, u, p, f, h = [i || v], y = d.call(t, "type") ? t.type : t, b = d.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = f = a = i = i || v,
                    !(3 === i.nodeType || 8 === i.nodeType || ty.test(y + E.event.triggered)) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(),
                    b.sort()),
                    c = 0 > y.indexOf(":") && "on" + y,
                    (t = t[E.expando] ? t : new E.Event(y,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
                    t.namespace = b.join("."),
                    t.rnamespace = t.namespace ? RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                    t.target || (t.target = i),
                    n = null == n ? [t] : E.makeArray(n, [t]),
                    p = E.event.special[y] || {},
                    r || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                        if (!r && !p.noBubble && !m(i)) {
                            for (l = p.delegateType || y,
                            ty.test(l + y) || (s = s.parentNode); s; s = s.parentNode)
                                h.push(s),
                                a = s;
                            a === (i.ownerDocument || v) && h.push(a.defaultView || a.parentWindow || e)
                        }
                        for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
                            f = s,
                            t.type = o > 1 ? l : p.bindType || y,
                            (u = (er.get(s, "events") || Object.create(null))[t.type] && er.get(s, "handle")) && u.apply(s, n),
                            (u = c && s[c]) && u.apply && en(s) && (t.result = u.apply(s, n),
                            !1 === t.result && t.preventDefault());
                        return t.type = y,
                        !r && !t.isDefaultPrevented() && (!p._default || !1 === p._default.apply(h.pop(), n)) && en(i) && c && g(i[y]) && !m(i) && ((a = i[c]) && (i[c] = null),
                        E.event.triggered = y,
                        t.isPropagationStopped() && f.addEventListener(y, tb),
                        i[y](),
                        t.isPropagationStopped() && f.removeEventListener(y, tb),
                        E.event.triggered = void 0,
                        a && (i[c] = a)),
                        t.result
                    }
                },
                simulate: function(e, t, n) {
                    var i = E.extend(new E.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    E.event.trigger(i, null, t)
                }
            }),
            E.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        E.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return E.event.trigger(e, t, n, !0)
                }
            });
            var t_ = /\[\]$/
              , tx = /\r?\n/g
              , tw = /^(?:submit|button|image|reset|file)$/i
              , tE = /^(?:input|select|textarea|keygen)/i;
            E.param = function(e, t) {
                var n, i = [], r = function(e, t) {
                    var n = g(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (null == e)
                    return "";
                if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
                    E.each(e, function() {
                        r(this.name, this.value)
                    });
                else
                    for (n in e)
                        !function e(t, n, i, r) {
                            var o;
                            if (Array.isArray(n))
                                E.each(n, function(n, o) {
                                    i || t_.test(t) ? r(t, o) : e(t + "[" + ("object" == typeof o && null != o ? n : "") + "]", o, i, r)
                                });
                            else if (i || "object" !== _(n))
                                r(t, n);
                            else
                                for (o in n)
                                    e(t + "[" + o + "]", n[o], i, r)
                        }(n, e[n], t, r);
                return i.join("&")
            }
            ,
            E.fn.extend({
                serialize: function() {
                    return E.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = E.prop(this, "elements");
                        return e ? E.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !E(this).is(":disabled") && tE.test(this.nodeName) && !tw.test(e) && (this.checked || !eb.test(e))
                    }).map(function(e, t) {
                        var n = E(this).val();
                        return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(tx, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(tx, "\r\n")
                        }
                    }).get()
                }
            });
            var tA = /%20/g
              , tT = /#.*$/
              , tC = /([?&])_=[^&]*/
              , tS = /^(.*?):[ \t]*([^\r\n]*)$/mg
              , tD = /^(?:GET|HEAD)$/
              , t$ = /^\/\//
              , tk = {}
              , tO = {}
              , tL = "*/".concat("*")
              , tj = v.createElement("a");
            function tN(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                    t = "*");
                    var i, r = 0, o = t.toLowerCase().match(B) || [];
                    if (g(n))
                        for (; i = o[r++]; )
                            "+" === i[0] ? (e[i = i.slice(1) || "*"] = e[i] || []).unshift(n) : (e[i] = e[i] || []).push(n)
                }
            }
            function tI(e, t, n, i) {
                var r = {}
                  , o = e === tO;
                function s(a) {
                    var l;
                    return r[a] = !0,
                    E.each(e[a] || [], function(e, a) {
                        var c = a(t, n, i);
                        return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                        s(c),
                        !1)
                    }),
                    l
                }
                return s(t.dataTypes[0]) || !r["*"] && s("*")
            }
            function tP(e, t) {
                var n, i, r = E.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && E.extend(!0, e, i),
                e
            }
            tj.href = tg.href,
            E.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: tg.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tg.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": tL,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": E.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? tP(tP(e, E.ajaxSettings), t) : tP(E.ajaxSettings, e)
                },
                ajaxPrefilter: tN(tk),
                ajaxTransport: tN(tO),
                ajax: function(t, n) {
                    "object" == typeof t && (n = t,
                    t = void 0),
                    n = n || {};
                    var i, r, o, s, a, l, c, u, d, p, f = E.ajaxSetup({}, n), h = f.context || f, g = f.context && (h.nodeType || h.jquery) ? E(h) : E.event, m = E.Deferred(), y = E.Callbacks("once memory"), b = f.statusCode || {}, _ = {}, x = {}, w = "canceled", A = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = tS.exec(o); )
                                        s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return c ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (_[e = x[e.toLowerCase()] = x[e.toLowerCase()] || e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (f.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (c)
                                    A.always(e[A.status]);
                                else
                                    for (t in e)
                                        b[t] = [b[t], e[t]]
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t),
                            T(0, t),
                            this
                        }
                    };
                    if (m.promise(A),
                    f.url = ((t || f.url || tg.href) + "").replace(t$, tg.protocol + "//"),
                    f.type = n.method || n.type || f.method || f.type,
                    f.dataTypes = (f.dataType || "*").toLowerCase().match(B) || [""],
                    null == f.crossDomain) {
                        l = v.createElement("a");
                        try {
                            l.href = f.url,
                            l.href = l.href,
                            f.crossDomain = tj.protocol + "//" + tj.host != l.protocol + "//" + l.host
                        } catch (e) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)),
                    tI(tk, f, n, A),
                    c)
                        return A;
                    for (d in (u = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                    f.type = f.type.toUpperCase(),
                    f.hasContent = !tD.test(f.type),
                    r = f.url.replace(tT, ""),
                    f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(tA, "+")) : (p = f.url.slice(r.length),
                    f.data && (f.processData || "string" == typeof f.data) && (r += (tv.test(r) ? "&" : "?") + f.data,
                    delete f.data),
                    !1 === f.cache && (r = r.replace(tC, "$1"),
                    p = (tv.test(r) ? "&" : "?") + "_=" + tm.guid++ + p),
                    f.url = r + p),
                    f.ifModified && (E.lastModified[r] && A.setRequestHeader("If-Modified-Since", E.lastModified[r]),
                    E.etag[r] && A.setRequestHeader("If-None-Match", E.etag[r])),
                    (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && A.setRequestHeader("Content-Type", f.contentType),
                    A.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + tL + "; q=0.01" : "") : f.accepts["*"]),
                    f.headers)
                        A.setRequestHeader(d, f.headers[d]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(h, A, f) || c))
                        return A.abort();
                    if (w = "abort",
                    y.add(f.complete),
                    A.done(f.success),
                    A.fail(f.error),
                    i = tI(tO, f, n, A)) {
                        if (A.readyState = 1,
                        u && g.trigger("ajaxSend", [A, f]),
                        c)
                            return A;
                        f.async && f.timeout > 0 && (a = e.setTimeout(function() {
                            A.abort("timeout")
                        }, f.timeout));
                        try {
                            c = !1,
                            i.send(_, T)
                        } catch (e) {
                            if (c)
                                throw e;
                            T(-1, e)
                        }
                    } else
                        T(-1, "No Transport");
                    function T(t, n, s, l) {
                        var d, p, v, _, x, w = n;
                        c || (c = !0,
                        a && e.clearTimeout(a),
                        i = void 0,
                        o = l || "",
                        A.readyState = t > 0 ? 4 : 0,
                        d = t >= 200 && t < 300 || 304 === t,
                        s && (_ = function(e, t, n) {
                            for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                                l.shift(),
                                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i) {
                                for (r in a)
                                    if (a[r] && a[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    }
                            }
                            if (l[0]in n)
                                o = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || e.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    s || (s = r)
                                }
                                o = o || s
                            }
                            if (o)
                                return o !== l[0] && l.unshift(o),
                                n[o]
                        }(f, A, s)),
                        !d && E.inArray("script", f.dataTypes) > -1 && 0 > E.inArray("json", f.dataTypes) && (f.converters["text script"] = function() {}
                        ),
                        _ = function(e, t, n, i) {
                            var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                            if (u[1])
                                for (s in e.converters)
                                    c[s.toLowerCase()] = e.converters[s];
                            for (o = u.shift(); o; )
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                l = o,
                                o = u.shift()) {
                                    if ("*" === o)
                                        o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(s = c[l + " " + o] || c["* " + o])) {
                                            for (r in c)
                                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                                    u.unshift(a[1]));
                                                    break
                                                }
                                        }
                                        if (!0 !== s) {
                                            if (s && e.throws)
                                                t = s(t);
                                            else
                                                try {
                                                    t = s(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s ? e : "No conversion from " + l + " to " + o
                                                    }
                                                }
                                        }
                                    }
                                }
                            return {
                                state: "success",
                                data: t
                            }
                        }(f, _, A, d),
                        d ? (f.ifModified && ((x = A.getResponseHeader("Last-Modified")) && (E.lastModified[r] = x),
                        (x = A.getResponseHeader("etag")) && (E.etag[r] = x)),
                        204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state,
                        p = _.data,
                        d = !(v = _.error))) : (v = w,
                        (t || !w) && (w = "error",
                        t < 0 && (t = 0))),
                        A.status = t,
                        A.statusText = (n || w) + "",
                        d ? m.resolveWith(h, [p, w, A]) : m.rejectWith(h, [A, w, v]),
                        A.statusCode(b),
                        b = void 0,
                        u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [A, f, d ? p : v]),
                        y.fireWith(h, [A, w]),
                        !u || (g.trigger("ajaxComplete", [A, f]),
                        --E.active || E.event.trigger("ajaxStop")))
                    }
                    return A
                },
                getJSON: function(e, t, n) {
                    return E.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return E.get(e, void 0, t, "script")
                }
            }),
            E.each(["get", "post"], function(e, t) {
                E[t] = function(e, n, i, r) {
                    return g(n) && (r = r || i,
                    i = n,
                    n = void 0),
                    E.ajax(E.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, E.isPlainObject(e) && e))
                }
            }),
            E.ajaxPrefilter(function(e) {
                var t;
                for (t in e.headers)
                    "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            }),
            E._evalUrl = function(e, t, n) {
                return E.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        E.globalEval(e, t, n)
                    }
                })
            }
            ,
            E.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (g(e) && (e = e.call(this[0])),
                    t = E(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
                },
                wrapInner: function(e) {
                    return g(e) ? this.each(function(t) {
                        E(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = E(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = g(e);
                    return this.each(function(n) {
                        E(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        E(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            E.expr.pseudos.hidden = function(e) {
                return !E.expr.pseudos.visible(e)
            }
            ,
            E.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ,
            E.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var tM = {
                0: 200,
                1223: 204
            }
              , tq = E.ajaxSettings.xhr();
            h.cors = !!tq && "withCredentials"in tq,
            h.ajax = tq = !!tq,
            E.ajaxTransport(function(t) {
                var n, i;
                if (h.cors || tq && !t.crossDomain)
                    return {
                        send: function(r, o) {
                            var s, a = t.xhr();
                            if (a.open(t.type, t.url, t.async, t.username, t.password),
                            t.xhrFields)
                                for (s in t.xhrFields)
                                    a[s] = t.xhrFields[s];
                            for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                            t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                            r)
                                a.setRequestHeader(s, r[s]);
                            n = function(e) {
                                return function() {
                                    n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                    "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(tM[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            }
                            ,
                            a.onload = n(),
                            i = a.onerror = a.ontimeout = n("error"),
                            void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                                4 === a.readyState && e.setTimeout(function() {
                                    n && i()
                                })
                            }
                            ,
                            n = n("abort");
                            try {
                                a.send(t.hasContent && t.data || null)
                            } catch (e) {
                                if (n)
                                    throw e
                            }
                        },
                        abort: function() {
                            n && n()
                        }
                    }
            }),
            E.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }),
            E.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return E.globalEval(e),
                        e
                    }
                }
            }),
            E.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            E.ajaxTransport("script", function(e) {
                if (e.crossDomain || e.scriptAttrs) {
                    var t, n;
                    return {
                        send: function(i, r) {
                            t = E("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null,
                                e && r("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            v.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var tH = []
              , tR = /(=)\?(?=&|$)|\?\?/;
            E.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = tH.pop() || E.expando + "_" + tm.guid++;
                    return this[e] = !0,
                    e
                }
            }),
            E.ajaxPrefilter("json jsonp", function(t, n, i) {
                var r, o, s, a = !1 !== t.jsonp && (tR.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tR.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0])
                    return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    a ? t[a] = t[a].replace(tR, "$1" + r) : !1 !== t.jsonp && (t.url += (tv.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                    t.converters["script json"] = function() {
                        return s || E.error(r + " was not called"),
                        s[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    o = e[r],
                    e[r] = function() {
                        s = arguments
                    }
                    ,
                    i.always(function() {
                        void 0 === o ? E(e).removeProp(r) : e[r] = o,
                        t[r] && (t.jsonpCallback = n.jsonpCallback,
                        tH.push(r)),
                        s && g(o) && o(s[0]),
                        s = o = void 0
                    }),
                    "script"
            }),
            h.createHTMLDocument = ((n = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === n.childNodes.length),
            E.parseHTML = function(e, t, n) {
                var i, r, o;
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                t = !1),
                t || (h.createHTMLDocument ? ((i = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
                t.head.appendChild(i)) : t = v),
                r = M.exec(e),
                o = !n && [],
                r) ? [t.createElement(r[1])] : (r = eC([e], t, o),
                o && o.length && E(o).remove(),
                E.merge([], r.childNodes))
            }
            ,
            E.fn.load = function(e, t, n) {
                var i, r, o, s = this, a = e.indexOf(" ");
                return a > -1 && (i = td(e.slice(a)),
                e = e.slice(0, a)),
                g(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (r = "POST"),
                s.length > 0 && E.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments,
                    s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
                ),
                this
            }
            ,
            E.expr.pseudos.animated = function(e) {
                return E.grep(E.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ,
            E.offset = {
                setOffset: function(e, t, n) {
                    var i, r, o, s, a, l, c = E.css(e, "position"), u = E(e), d = {};
                    "static" === c && (e.style.position = "relative"),
                    a = u.offset(),
                    o = E.css(e, "top"),
                    l = E.css(e, "left"),
                    ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
                    r = i.left) : (s = parseFloat(o) || 0,
                    r = parseFloat(l) || 0),
                    g(t) && (t = t.call(e, n, E.extend({}, a))),
                    null != t.top && (d.top = t.top - a.top + s),
                    null != t.left && (d.left = t.left - a.left + r),
                    "using"in t ? t.using.call(e, d) : u.css(d)
                }
            },
            E.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            E.offset.setOffset(this, e, t)
                        });
                    var t, n, i = this[0];
                    if (i)
                        return i.getClientRects().length ? (t = i.getBoundingClientRect(),
                        n = i.ownerDocument.defaultView,
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, i = this[0], r = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === E.css(i, "position"))
                            t = i.getBoundingClientRect();
                        else {
                            for (t = this.offset(),
                            n = i.ownerDocument,
                            e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                                e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && (r = E(e).offset(),
                            r.top += E.css(e, "borderTopWidth", !0),
                            r.left += E.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - r.top - E.css(i, "marginTop", !0),
                            left: t.left - r.left - E.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                            e = e.offsetParent;
                        return e || ep
                    })
                }
            }),
            E.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function(i) {
                    return K(this, function(e, i, r) {
                        var o;
                        if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                            return o ? o[t] : e[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                    }, e, i, arguments.length)
                }
            }),
            E.each(["top", "left"], function(e, t) {
                E.cssHooks[t] = eG(h.pixelPosition, function(e, n) {
                    if (n)
                        return n = eV(e, t),
                        eF.test(n) ? E(e).position()[t] + "px" : n
                })
            }),
            E.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                E.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, i) {
                    E.fn[i] = function(r, o) {
                        var s = arguments.length && (n || "boolean" != typeof r)
                          , a = n || (!0 === r || !0 === o ? "margin" : "border");
                        return K(this, function(t, n, r) {
                            var o;
                            return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? E.css(t, n, a) : E.style(t, n, r, a)
                        }, t, s ? r : void 0, s)
                    }
                })
            }),
            E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                E.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            E.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.on("mouseenter", e).on("mouseleave", t || e)
                }
            }),
            E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                E.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            });
            var tF = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            E.proxy = function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t],
                t = e,
                e = n),
                g(e))
                    return i = o.call(arguments, 2),
                    (r = function() {
                        return e.apply(t || this, i.concat(o.call(arguments)))
                    }
                    ).guid = e.guid = e.guid || E.guid++,
                    r
            }
            ,
            E.holdReady = function(e) {
                e ? E.readyWait++ : E.ready(!0)
            }
            ,
            E.isArray = Array.isArray,
            E.parseJSON = JSON.parse,
            E.nodeName = T,
            E.isFunction = g,
            E.isWindow = m,
            E.camelCase = et,
            E.type = _,
            E.now = Date.now,
            E.isNumeric = function(e) {
                var t = E.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }
            ,
            E.trim = function(e) {
                return null == e ? "" : (e + "").replace(tF, "$1")
            }
            ,
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return E
            });
            var tW = e.jQuery
              , tz = e.$;
            return E.noConflict = function(t) {
                return e.$ === E && (e.$ = tz),
                t && e.jQuery === E && (e.jQuery = tW),
                E
            }
            ,
            void 0 === t && (e.jQuery = e.$ = E),
            E
        }
        ,
        "object" == typeof e.exports ? e.exports = n.document ? i(n, !0) : function(e) {
            if (!e.document)
                throw Error("jQuery requires a window with a document");
            return i(e)
        }
        : i(n)
    });
    var a = s("s0gdx");
    let l = new Map
      , c = {
        set(e, t, n) {
            l.has(e) || l.set(e, new Map);
            let i = l.get(e);
            if (!i.has(t) && 0 !== i.size) {
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
                return
            }
            i.set(t, n)
        },
        get: (e,t)=>l.has(e) && l.get(e).get(t) || null,
        remove(e, t) {
            if (!l.has(e))
                return;
            let n = l.get(e);
            n.delete(t),
            0 === n.size && l.delete(e)
        }
    }
      , u = "transitionend"
      , d = e=>(e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e,t)=>`#${CSS.escape(t)}`)),
    e)
      , p = e=>null == e ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
      , f = e=>{
        do
            e += Math.floor(1e6 * Math.random());
        while (document.getElementById(e))return e
    }
      , h = e=>{
        if (!e)
            return 0;
        let {transitionDuration: t, transitionDelay: n} = window.getComputedStyle(e)
          , i = Number.parseFloat(t)
          , r = Number.parseFloat(n);
        return i || r ? (t = t.split(",")[0],
        n = n.split(",")[0],
        (Number.parseFloat(t) + Number.parseFloat(n)) * 1e3) : 0
    }
      , g = e=>{
        e.dispatchEvent(new Event(u))
    }
      , m = e=>!!e && "object" == typeof e && (void 0 !== e.jquery && (e = e[0]),
    void 0 !== e.nodeType)
      , v = e=>m(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(d(e)) : null
      , y = e=>{
        if (!m(e) || 0 === e.getClientRects().length)
            return !1;
        let t = "visible" === getComputedStyle(e).getPropertyValue("visibility")
          , n = e.closest("details:not([open])");
        if (!n)
            return t;
        if (n !== e) {
            let t = e.closest("summary");
            if (t && t.parentNode !== n || null === t)
                return !1
        }
        return t
    }
      , b = e=>!!(!e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")) || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))
      , _ = e=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof e.getRootNode) {
            let t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? _(e.parentNode) : null
    }
      , x = ()=>{}
      , w = e=>{
        e.offsetHeight
    }
      , E = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , A = []
      , T = e=>{
        "loading" === document.readyState ? (A.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (let e of A)
                e()
        }
        ),
        A.push(e)) : e()
    }
      , C = ()=>"rtl" === document.documentElement.dir
      , S = e=>{
        T(()=>{
            let t = E();
            if (t) {
                let n = e.NAME
                  , i = t.fn[n];
                t.fn[n] = e.jQueryInterface,
                t.fn[n].Constructor = e,
                t.fn[n].noConflict = ()=>(t.fn[n] = i,
                e.jQueryInterface)
            }
        }
        )
    }
      , D = (e,t=[],n=e)=>"function" == typeof e ? e(...t) : n
      , k = (e,t,n=!0)=>{
        if (!n) {
            D(e);
            return
        }
        let i = h(t) + 5
          , r = !1
          , o = ({target: n})=>{
            n === t && (r = !0,
            t.removeEventListener(u, o),
            D(e))
        }
        ;
        t.addEventListener(u, o),
        setTimeout(()=>{
            r || g(t)
        }
        , i)
    }
      , O = (e,t,n,i)=>{
        let r = e.length
          , o = e.indexOf(t);
        return -1 === o ? !n && i ? e[r - 1] : e[0] : (o += n ? 1 : -1,
        i && (o = (o + r) % r),
        e[Math.max(0, Math.min(o, r - 1))])
    }
      , L = /[^.]*(?=\..*)\.|.*/
      , j = /\..*/
      , N = /::\d+$/
      , I = {}
      , P = 1
      , M = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , q = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function H(e, t) {
        return t && `${t}::${P++}` || e.uidEvent || P++
    }
    function R(e) {
        let t = H(e);
        return e.uidEvent = t,
        I[t] = I[t] || {},
        I[t]
    }
    function F(e, t, n=null) {
        return Object.values(e).find(e=>e.callable === t && e.delegationSelector === n)
    }
    function W(e, t, n) {
        let i = "string" == typeof t
          , r = U(e);
        return q.has(r) || (r = e),
        [i, i ? n : t || n, r]
    }
    function z(e, t, n, i, r) {
        var o, s, a;
        if ("string" != typeof t || !e)
            return;
        let[l,c,u] = W(t, n, i);
        t in M && (o = c,
        c = function(e) {
            if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                return o.call(this, e)
        }
        );
        let d = R(e)
          , p = d[u] || (d[u] = {})
          , f = F(p, c, l ? n : null);
        if (f) {
            f.oneOff = f.oneOff && r;
            return
        }
        let h = H(c, t.replace(L, ""))
          , g = l ? (s = c,
        function t(i) {
            let r = e.querySelectorAll(n);
            for (let {target: o} = i; o && o !== this; o = o.parentNode)
                for (let a of r)
                    if (a === o)
                        return G(i, {
                            delegateTarget: o
                        }),
                        t.oneOff && V.off(e, i.type, n, s),
                        s.apply(o, [i])
        }
        ) : (a = c,
        function t(n) {
            return G(n, {
                delegateTarget: e
            }),
            t.oneOff && V.off(e, n.type, a),
            a.apply(e, [n])
        }
        );
        g.delegationSelector = l ? n : null,
        g.callable = c,
        g.oneOff = r,
        g.uidEvent = h,
        p[h] = g,
        e.addEventListener(u, g, l)
    }
    function B(e, t, n, i, r) {
        let o = F(t[n], i, r);
        o && (e.removeEventListener(n, o, !!r),
        delete t[n][o.uidEvent])
    }
    function U(e) {
        return M[e = e.replace(j, "")] || e
    }
    let V = {
        on(e, t, n, i) {
            z(e, t, n, i, !1)
        },
        one(e, t, n, i) {
            z(e, t, n, i, !0)
        },
        off(e, t, n, i) {
            if ("string" != typeof t || !e)
                return;
            let[r,o,s] = W(t, n, i)
              , a = s !== t
              , l = R(e)
              , c = l[s] || {}
              , u = t.startsWith(".");
            if (void 0 !== o) {
                if (!Object.keys(c).length)
                    return;
                B(e, l, s, o, r ? n : null);
                return
            }
            if (u)
                for (let n of Object.keys(l))
                    !function(e, t, n, i) {
                        let r = t[n] || {};
                        for (let[o,s] of Object.entries(r))
                            o.includes(i) && B(e, t, n, s.callable, s.delegationSelector)
                    }(e, l, n, t.slice(1));
            for (let[n,i] of Object.entries(c)) {
                let r = n.replace(N, "");
                (!a || t.includes(r)) && B(e, l, s, i.callable, i.delegationSelector)
            }
        },
        trigger(e, t, n) {
            if ("string" != typeof t || !e)
                return null;
            let i = E()
              , r = U(t)
              , o = t !== r
              , s = null
              , a = !0
              , l = !0
              , c = !1;
            o && i && (s = i.Event(t, n),
            i(e).trigger(s),
            a = !s.isPropagationStopped(),
            l = !s.isImmediatePropagationStopped(),
            c = s.isDefaultPrevented());
            let u = G(new Event(t,{
                bubbles: a,
                cancelable: !0
            }), n);
            return c && u.preventDefault(),
            l && e.dispatchEvent(u),
            u.defaultPrevented && s && s.preventDefault(),
            u
        }
    };
    function G(e, t={}) {
        for (let[n,i] of Object.entries(t))
            try {
                e[n] = i
            } catch (t) {
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: ()=>i
                })
            }
        return e
    }
    function Q(e) {
        if ("true" === e)
            return !0;
        if ("false" === e)
            return !1;
        if (e === Number(e).toString())
            return Number(e);
        if ("" === e || "null" === e)
            return null;
        if ("string" != typeof e)
            return e;
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch (t) {
            return e
        }
    }
    function Y(e) {
        return e.replace(/[A-Z]/g, e=>`-${e.toLowerCase()}`)
    }
    let X = {
        setDataAttribute(e, t, n) {
            e.setAttribute(`data-bs-${Y(t)}`, n)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${Y(t)}`)
        },
        getDataAttributes(e) {
            if (!e)
                return {};
            let t = {}
              , n = Object.keys(e.dataset).filter(e=>e.startsWith("bs") && !e.startsWith("bsConfig"));
            for (let i of n) {
                let n = i.replace(/^bs/, "");
                t[n = n.charAt(0).toLowerCase() + n.slice(1, n.length)] = Q(e.dataset[i])
            }
            return t
        },
        getDataAttribute: (e,t)=>Q(e.getAttribute(`data-bs-${Y(t)}`))
    };
    class K {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e
        }
        _mergeConfigObj(e, t) {
            let n = m(t) ? X.getDataAttribute(t, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof n ? n : {},
                ...m(t) ? X.getDataAttributes(t) : {},
                ..."object" == typeof e ? e : {}
            }
        }
        _typeCheckConfig(e, t=this.constructor.DefaultType) {
            for (let[n,i] of Object.entries(t)) {
                let t = e[n]
                  , r = m(t) ? "element" : p(t);
                if (!new RegExp(i).test(r))
                    throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`)
            }
        }
    }
    class J extends K {
        constructor(e, t) {
            if (super(),
            !(e = v(e)))
                return;
            this._element = e,
            this._config = this._getConfig(t),
            c.set(this._element, this.constructor.DATA_KEY, this)
        }
        dispose() {
            for (let e of (c.remove(this._element, this.constructor.DATA_KEY),
            V.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this)))
                this[e] = null
        }
        _queueCallback(e, t, n=!0) {
            k(e, t, n)
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        static getInstance(e) {
            return c.get(v(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t={}) {
            return this.getInstance(e) || new this(e,"object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.3.2"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(e) {
            return `${e}${this.EVENT_KEY}`
        }
    }
    let Z = e=>{
        let t = e.getAttribute("data-bs-target");
        if (!t || "#" === t) {
            let n = e.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith("."))
                return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
            t = n && "#" !== n ? d(n.trim()) : null
        }
        return t
    }
      , ee = {
        find: (e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e,t=document.documentElement)=>Element.prototype.querySelector.call(t, e),
        children: (e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),
        parents(e, t) {
            let n = []
              , i = e.parentNode.closest(t);
            for (; i; )
                n.push(i),
                i = i.parentNode.closest(t);
            return n
        },
        prev(e, t) {
            let n = e.previousElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(e, t) {
            let n = e.nextElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(e) {
            let t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");
            return this.find(t, e).filter(e=>!b(e) && y(e))
        },
        getSelectorFromElement(e) {
            let t = Z(e);
            return t && ee.findOne(t) ? t : null
        },
        getElementFromSelector(e) {
            let t = Z(e);
            return t ? ee.findOne(t) : null
        },
        getMultipleElementsFromSelector(e) {
            let t = Z(e);
            return t ? ee.find(t) : []
        }
    }
      , et = (e,t="hide")=>{
        let n = `click.dismiss ${e.EVENT_KEY}`
          , i = e.NAME;
        V.on(document, n, `[data-bs-dismiss="${i}"]`, function(n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
            b(this))
                return;
            let r = ee.getElementFromSelector(this) || this.closest(`.${i}`)
              , o = e.getOrCreateInstance(r);
            o[t]()
        })
    }
      , en = ".bs.alert"
      , ei = `close ${en}`
      , er = `closed ${en}`;
    class eo extends J {
        static get NAME() {
            return "alert"
        }
        close() {
            let e = V.trigger(this._element, ei);
            if (e.defaultPrevented)
                return;
            this._element.classList.remove("show");
            let t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            V.trigger(this._element, er),
            this.dispose()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = eo.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    et(eo, "close"),
    S(eo);
    let es = '[data-bs-toggle="button"]';
    class ea extends J {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = ea.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            })
        }
    }
    V.on(document, "click.bs.button.data-api", es, e=>{
        e.preventDefault();
        let t = e.target.closest(es)
          , n = ea.getOrCreateInstance(t);
        n.toggle()
    }
    ),
    S(ea);
    let el = ".bs.swipe"
      , ec = `touchstart ${el}`
      , eu = `touchmove ${el}`
      , ed = `touchend ${el}`
      , ep = `pointerdown ${el}`
      , ef = `pointerup ${el}`
      , eh = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , eg = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class em extends K {
        constructor(e, t) {
            if (super(),
            this._element = e,
            !e || !em.isSupported())
                return;
            this._config = this._getConfig(t),
            this._deltaX = 0,
            this._supportPointerEvents = !!window.PointerEvent,
            this._initEvents()
        }
        static get Default() {
            return eh
        }
        static get DefaultType() {
            return eg
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            V.off(this._element, el)
        }
        _start(e) {
            if (!this._supportPointerEvents) {
                this._deltaX = e.touches[0].clientX;
                return
            }
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
        }
        _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            D(this._config.endCallback)
        }
        _move(e) {
            this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            let e = Math.abs(this._deltaX);
            if (e <= 40)
                return;
            let t = e / this._deltaX;
            this._deltaX = 0,
            t && D(t > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (V.on(this._element, ep, e=>this._start(e)),
            V.on(this._element, ef, e=>this._end(e)),
            this._element.classList.add("pointer-event")) : (V.on(this._element, ec, e=>this._start(e)),
            V.on(this._element, eu, e=>this._move(e)),
            V.on(this._element, ed, e=>this._end(e)))
        }
        _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    let ev = ".bs.carousel"
      , ey = ".data-api"
      , eb = "next"
      , e_ = "prev"
      , ex = "left"
      , ew = "right"
      , eE = `slide ${ev}`
      , eA = `slid ${ev}`
      , eT = `keydown ${ev}`
      , eC = `mouseenter ${ev}`
      , eS = `mouseleave ${ev}`
      , eD = `dragstart ${ev}`
      , e$ = `load ${ev}${ey}`
      , ek = `click ${ev}${ey}`
      , eO = "carousel"
      , eL = "active"
      , ej = ".active"
      , eN = ".carousel-item"
      , eI = ej + eN
      , eP = {
        ArrowLeft: ew,
        ArrowRight: ex
    }
      , eM = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , eq = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class eH extends J {
        constructor(e, t) {
            super(e, t),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = ee.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === eO && this.cycle()
        }
        static get Default() {
            return eM
        }
        static get DefaultType() {
            return eq
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(eb)
        }
        nextWhenVisible() {
            !document.hidden && y(this._element) && this.next()
        }
        prev() {
            this._slide(e_)
        }
        pause() {
            this._isSliding && g(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval)
        }
        _maybeEnableCycle() {
            if (this._config.ride) {
                if (this._isSliding) {
                    V.one(this._element, eA, ()=>this.cycle());
                    return
                }
                this.cycle()
            }
        }
        to(e) {
            let t = this._getItems();
            if (e > t.length - 1 || e < 0)
                return;
            if (this._isSliding) {
                V.one(this._element, eA, ()=>this.to(e));
                return
            }
            let n = this._getItemIndex(this._getActive());
            if (n === e)
                return;
            let i = e > n ? eb : e_;
            this._slide(i, t[e])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.defaultInterval = e.interval,
            e
        }
        _addEventListeners() {
            this._config.keyboard && V.on(this._element, eT, e=>this._keydown(e)),
            "hover" === this._config.pause && (V.on(this._element, eC, ()=>this.pause()),
            V.on(this._element, eS, ()=>this._maybeEnableCycle())),
            this._config.touch && em.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (let e of ee.find(".carousel-item img", this._element))
                V.on(e, eD, e=>e.preventDefault());
            this._swipeHelper = new em(this._element,{
                leftCallback: ()=>this._slide(this._directionToOrder(ex)),
                rightCallback: ()=>this._slide(this._directionToOrder(ew)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval))
                }
            })
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName))
                return;
            let t = eP[e.key];
            t && (e.preventDefault(),
            this._slide(this._directionToOrder(t)))
        }
        _getItemIndex(e) {
            return this._getItems().indexOf(e)
        }
        _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement)
                return;
            let t = ee.findOne(ej, this._indicatorsElement);
            t.classList.remove(eL),
            t.removeAttribute("aria-current");
            let n = ee.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            n && (n.classList.add(eL),
            n.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            let e = this._activeElement || this._getActive();
            if (!e)
                return;
            let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
        }
        _slide(e, t=null) {
            if (this._isSliding)
                return;
            let n = this._getActive()
              , i = e === eb
              , r = t || O(this._getItems(), n, i, this._config.wrap);
            if (r === n)
                return;
            let o = this._getItemIndex(r)
              , s = t=>V.trigger(this._element, t, {
                relatedTarget: r,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(n),
                to: o
            })
              , a = s(eE);
            if (a.defaultPrevented || !n || !r)
                return;
            let l = !!this._interval;
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(o),
            this._activeElement = r;
            let c = i ? "carousel-item-start" : "carousel-item-end"
              , u = i ? "carousel-item-next" : "carousel-item-prev";
            r.classList.add(u),
            w(r),
            n.classList.add(c),
            r.classList.add(c),
            this._queueCallback(()=>{
                r.classList.remove(c, u),
                r.classList.add(eL),
                n.classList.remove(eL, u, c),
                this._isSliding = !1,
                s(eA)
            }
            , n, this._isAnimated()),
            l && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return ee.findOne(eI, this._element)
        }
        _getItems() {
            return ee.find(eN, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(e) {
            return C() ? e === ex ? e_ : eb : e === ex ? eb : e_
        }
        _orderToDirection(e) {
            return C() ? e === e_ ? ex : ew : e === e_ ? ew : ex
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = eH.getOrCreateInstance(this, e);
                if ("number" == typeof e) {
                    t.to(e);
                    return
                }
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    V.on(document, ek, "[data-bs-slide], [data-bs-slide-to]", function(e) {
        let t = ee.getElementFromSelector(this);
        if (!t || !t.classList.contains(eO))
            return;
        e.preventDefault();
        let n = eH.getOrCreateInstance(t)
          , i = this.getAttribute("data-bs-slide-to");
        if (i) {
            n.to(i),
            n._maybeEnableCycle();
            return
        }
        if ("next" === X.getDataAttribute(this, "slide")) {
            n.next(),
            n._maybeEnableCycle();
            return
        }
        n.prev(),
        n._maybeEnableCycle()
    }),
    V.on(window, e$, ()=>{
        let e = ee.find('[data-bs-ride="carousel"]');
        for (let t of e)
            eH.getOrCreateInstance(t)
    }
    ),
    S(eH);
    let eR = ".bs.collapse"
      , eF = `show ${eR}`
      , eW = `shown ${eR}`
      , ez = `hide ${eR}`
      , eB = `hidden ${eR}`
      , eU = `click ${eR}.data-api`
      , eV = "show"
      , eG = "collapse"
      , eQ = "collapsing"
      , eY = `:scope .${eG} .${eG}`
      , eX = '[data-bs-toggle="collapse"]'
      , eK = {
        parent: null,
        toggle: !0
    }
      , eJ = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class eZ extends J {
        constructor(e, t) {
            super(e, t),
            this._isTransitioning = !1,
            this._triggerArray = [];
            let n = ee.find(eX);
            for (let e of n) {
                let t = ee.getSelectorFromElement(e)
                  , n = ee.find(t).filter(e=>e === this._element);
                null !== t && n.length && this._triggerArray.push(e)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return eK
        }
        static get DefaultType() {
            return eJ
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let e = [];
            if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e=>e !== this._element).map(e=>eZ.getOrCreateInstance(e, {
                toggle: !1
            }))),
            e.length && e[0]._isTransitioning)
                return;
            let t = V.trigger(this._element, eF);
            if (t.defaultPrevented)
                return;
            for (let t of e)
                t.hide();
            let n = this._getDimension();
            this._element.classList.remove(eG),
            this._element.classList.add(eQ),
            this._element.style[n] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            let i = n[0].toUpperCase() + n.slice(1)
              , r = `scroll ${i}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(eQ),
                this._element.classList.add(eG, eV),
                this._element.style[n] = "",
                V.trigger(this._element, eW)
            }
            , this._element, !0),
            this._element.style[n] = `${this._element[r]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            let e = V.trigger(this._element, ez);
            if (e.defaultPrevented)
                return;
            let t = this._getDimension();
            for (let e of (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            w(this._element),
            this._element.classList.add(eQ),
            this._element.classList.remove(eG, eV),
            this._triggerArray)) {
                let t = ee.getElementFromSelector(e);
                t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(eQ),
                this._element.classList.add(eG),
                V.trigger(this._element, eB)
            }
            , this._element, !0)
        }
        _isShown(e=this._element) {
            return e.classList.contains(eV)
        }
        _configAfterMerge(e) {
            return e.toggle = !!e.toggle,
            e.parent = v(e.parent),
            e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            let e = this._getFirstLevelChildren(eX);
            for (let t of e) {
                let e = ee.getElementFromSelector(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
        }
        _getFirstLevelChildren(e) {
            let t = ee.find(eY, this._config.parent);
            return ee.find(e, this._config.parent).filter(e=>!t.includes(e))
        }
        _addAriaAndCollapsedClass(e, t) {
            if (e.length)
                for (let n of e)
                    n.classList.toggle("collapsed", !t),
                    n.setAttribute("aria-expanded", t)
        }
        static jQueryInterface(e) {
            let t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
            this.each(function() {
                let n = eZ.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === n[e])
                        throw TypeError(`No method named "${e}"`);
                    n[e]()
                }
            })
        }
    }
    V.on(document, eU, eX, function(e) {
        for (let t of (("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault(),
        ee.getMultipleElementsFromSelector(this)))
            eZ.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
    }),
    S(eZ);
    let e0 = "dropdown"
      , e1 = ".bs.dropdown"
      , e2 = ".data-api"
      , e3 = "ArrowDown"
      , e9 = `hide ${e1}`
      , e4 = `hidden ${e1}`
      , e6 = `show ${e1}`
      , e5 = `shown ${e1}`
      , e8 = `click ${e1}${e2}`
      , e7 = `keydown ${e1}${e2}`
      , te = `keyup ${e1}${e2}`
      , tt = "show"
      , tn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , ti = `${tn}.${tt}`
      , tr = ".dropdown-menu"
      , to = C() ? "top-end" : "top-start"
      , ts = C() ? "top-start" : "top-end"
      , ta = C() ? "bottom-end" : "bottom-start"
      , tl = C() ? "bottom-start" : "bottom-end"
      , tc = C() ? "left-start" : "right-start"
      , tu = C() ? "right-start" : "left-start"
      , td = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , tp = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class tf extends J {
        constructor(e, t) {
            super(e, t),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = ee.next(this._element, tr)[0] || ee.prev(this._element, tr)[0] || ee.findOne(tr, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return td
        }
        static get DefaultType() {
            return tp
        }
        static get NAME() {
            return e0
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (b(this._element) || this._isShown())
                return;
            let e = {
                relatedTarget: this._element
            }
              , t = V.trigger(this._element, e6, e);
            if (!t.defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (let e of [].concat(...document.body.children))
                        V.on(e, "mouseover", x);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(tt),
                this._element.classList.add(tt),
                V.trigger(this._element, e5, e)
            }
        }
        hide() {
            if (b(this._element) || !this._isShown())
                return;
            let e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(e) {
            let t = V.trigger(this._element, e9, e);
            if (!t.defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (let e of [].concat(...document.body.children))
                        V.off(e, "mouseover", x);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(tt),
                this._element.classList.remove(tt),
                this._element.setAttribute("aria-expanded", "false"),
                X.removeDataAttribute(this._menu, "popper"),
                V.trigger(this._element, e4, e)
            }
        }
        _getConfig(e) {
            if ("object" == typeof (e = super._getConfig(e)).reference && !m(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                throw TypeError(`${e0.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
        }
        _createPopper() {
            if (void 0 === a)
                throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : m(this._config.reference) ? e = v(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            let t = this._getPopperConfig();
            this._popper = a.createPopper(e, this._menu, t)
        }
        _isShown() {
            return this._menu.classList.contains(tt)
        }
        _getPlacement() {
            let e = this._parent;
            if (e.classList.contains("dropend"))
                return tc;
            if (e.classList.contains("dropstart"))
                return tu;
            if (e.classList.contains("dropup-center"))
                return "top";
            if (e.classList.contains("dropdown-center"))
                return "bottom";
            let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? ts : to : t ? tl : ta
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            let {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _getPopperConfig() {
            let e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (X.setDataAttribute(this._menu, "popper", "static"),
            e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...e,
                ...D(this._config.popperConfig, [e])
            }
        }
        _selectMenuItem({key: e, target: t}) {
            let n = ee.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(e=>y(e));
            n.length && O(n, t, e === e3, !n.includes(t)).focus()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = tf.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
        static clearMenus(e) {
            if (2 === e.button || "keyup" === e.type && "Tab" !== e.key)
                return;
            let t = ee.find(ti);
            for (let n of t) {
                let t = tf.getInstance(n);
                if (!t || !1 === t._config.autoClose)
                    continue;
                let i = e.composedPath()
                  , r = i.includes(t._menu);
                if (i.includes(t._element) || "inside" === t._config.autoClose && !r || "outside" === t._config.autoClose && r || t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))
                    continue;
                let o = {
                    relatedTarget: t._element
                };
                "click" === e.type && (o.clickEvent = e),
                t._completeHide(o)
            }
        }
        static dataApiKeydownHandler(e) {
            let t = /input|textarea/i.test(e.target.tagName)
              , n = "Escape" === e.key
              , i = ["ArrowUp", e3].includes(e.key);
            if (!i && !n || t && !n)
                return;
            e.preventDefault();
            let r = this.matches(tn) ? this : ee.prev(this, tn)[0] || ee.next(this, tn)[0] || ee.findOne(tn, e.delegateTarget.parentNode)
              , o = tf.getOrCreateInstance(r);
            if (i) {
                e.stopPropagation(),
                o.show(),
                o._selectMenuItem(e);
                return
            }
            o._isShown() && (e.stopPropagation(),
            o.hide(),
            r.focus())
        }
    }
    V.on(document, e7, tn, tf.dataApiKeydownHandler),
    V.on(document, e7, tr, tf.dataApiKeydownHandler),
    V.on(document, e8, tf.clearMenus),
    V.on(document, te, tf.clearMenus),
    V.on(document, e8, tn, function(e) {
        e.preventDefault(),
        tf.getOrCreateInstance(this).toggle()
    }),
    S(tf);
    let th = "backdrop"
      , tg = "show"
      , tm = `mousedown.bs.${th}`
      , tv = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , ty = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class tb extends K {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return tv
        }
        static get DefaultType() {
            return ty
        }
        static get NAME() {
            return th
        }
        show(e) {
            if (!this._config.isVisible) {
                D(e);
                return
            }
            this._append();
            let t = this._getElement();
            this._config.isAnimated && w(t),
            t.classList.add(tg),
            this._emulateAnimation(()=>{
                D(e)
            }
            )
        }
        hide(e) {
            if (!this._config.isVisible) {
                D(e);
                return
            }
            this._getElement().classList.remove(tg),
            this._emulateAnimation(()=>{
                this.dispose(),
                D(e)
            }
            )
        }
        dispose() {
            this._isAppended && (V.off(this._element, tm),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                let e = document.createElement("div");
                e.className = this._config.className,
                this._config.isAnimated && e.classList.add("fade"),
                this._element = e
            }
            return this._element
        }
        _configAfterMerge(e) {
            return e.rootElement = v(e.rootElement),
            e
        }
        _append() {
            if (this._isAppended)
                return;
            let e = this._getElement();
            this._config.rootElement.append(e),
            V.on(e, tm, ()=>{
                D(this._config.clickCallback)
            }
            ),
            this._isAppended = !0
        }
        _emulateAnimation(e) {
            k(e, this._getElement(), this._config.isAnimated)
        }
    }
    let t_ = ".bs.focustrap"
      , tx = `focusin ${t_}`
      , tw = `keydown.tab ${t_}`
      , tE = "backward"
      , tA = {
        autofocus: !0,
        trapElement: null
    }
      , tT = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class tC extends K {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return tA
        }
        static get DefaultType() {
            return tT
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            V.off(document, t_),
            V.on(document, tx, e=>this._handleFocusin(e)),
            V.on(document, tw, e=>this._handleKeydown(e)),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            V.off(document, t_))
        }
        _handleFocusin(e) {
            let {trapElement: t} = this._config;
            if (e.target === document || e.target === t || t.contains(e.target))
                return;
            let n = ee.focusableChildren(t);
            0 === n.length ? t.focus() : this._lastTabNavDirection === tE ? n[n.length - 1].focus() : n[0].focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? tE : "forward")
        }
    }
    let tS = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , tD = ".sticky-top"
      , t$ = "padding-right"
      , tk = "margin-right";
    class tO {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            let e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            let e = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, t$, t=>t + e),
            this._setElementAttributes(tS, t$, t=>t + e),
            this._setElementAttributes(tD, tk, t=>t - e)
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, t$),
            this._resetElementAttributes(tS, t$),
            this._resetElementAttributes(tD, tk)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, n) {
            let i = this.getWidth();
            this._applyManipulationCallback(e, e=>{
                if (e !== this._element && window.innerWidth > e.clientWidth + i)
                    return;
                this._saveInitialAttribute(e, t);
                let r = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(r))}px`)
            }
            )
        }
        _saveInitialAttribute(e, t) {
            let n = e.style.getPropertyValue(t);
            n && X.setDataAttribute(e, t, n)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, e=>{
                let n = X.getDataAttribute(e, t);
                if (null === n) {
                    e.style.removeProperty(t);
                    return
                }
                X.removeDataAttribute(e, t),
                e.style.setProperty(t, n)
            }
            )
        }
        _applyManipulationCallback(e, t) {
            if (m(e)) {
                t(e);
                return
            }
            for (let n of ee.find(e, this._element))
                t(n)
        }
    }
    let tL = ".bs.modal"
      , tj = `hide ${tL}`
      , tN = `hidePrevented ${tL}`
      , tI = `hidden ${tL}`
      , tP = `show ${tL}`
      , tM = `shown ${tL}`
      , tq = `resize ${tL}`
      , tH = `click.dismiss ${tL}`
      , tR = `mousedown.dismiss ${tL}`
      , tF = `keydown.dismiss ${tL}`
      , tW = `click ${tL}.data-api`
      , tz = "modal-open"
      , tB = "show"
      , tU = "modal-static"
      , tV = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , tG = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class tQ extends J {
        constructor(e, t) {
            super(e, t),
            this._dialog = ee.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new tO,
            this._addEventListeners()
        }
        static get Default() {
            return tV
        }
        static get DefaultType() {
            return tG
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            if (this._isShown || this._isTransitioning)
                return;
            let t = V.trigger(this._element, tP, {
                relatedTarget: e
            });
            t.defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(tz),
            this._adjustDialog(),
            this._backdrop.show(()=>this._showElement(e)))
        }
        hide() {
            if (!this._isShown || this._isTransitioning)
                return;
            let e = V.trigger(this._element, tj);
            e.defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(tB),
            this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated()))
        }
        dispose() {
            V.off(window, tL),
            V.off(this._dialog, tL),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new tb({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new tC({
                trapElement: this._element
            })
        }
        _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            let t = ee.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0),
            w(this._element),
            this._element.classList.add(tB),
            this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                V.trigger(this._element, tM, {
                    relatedTarget: e
                })
            }
            , this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            V.on(this._element, tF, e=>{
                if ("Escape" === e.key) {
                    if (this._config.keyboard) {
                        this.hide();
                        return
                    }
                    this._triggerBackdropTransition()
                }
            }
            ),
            V.on(window, tq, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            ),
            V.on(this._element, tR, e=>{
                V.one(this._element, tH, t=>{
                    if (this._element === e.target && this._element === t.target) {
                        if ("static" === this._config.backdrop) {
                            this._triggerBackdropTransition();
                            return
                        }
                        this._config.backdrop && this.hide()
                    }
                }
                )
            }
            )
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(()=>{
                document.body.classList.remove(tz),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                V.trigger(this._element, tI)
            }
            )
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            let e = V.trigger(this._element, tN);
            if (e.defaultPrevented)
                return;
            let t = this._element.scrollHeight > document.documentElement.clientHeight
              , n = this._element.style.overflowY;
            "hidden" === n || this._element.classList.contains(tU) || (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(tU),
            this._queueCallback(()=>{
                this._element.classList.remove(tU),
                this._queueCallback(()=>{
                    this._element.style.overflowY = n
                }
                , this._dialog)
            }
            , this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            let e = this._element.scrollHeight > document.documentElement.clientHeight
              , t = this._scrollBar.getWidth()
              , n = t > 0;
            if (n && !e) {
                let e = C() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = `${t}px`
            }
            if (!n && e) {
                let e = C() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = `${t}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each(function() {
                let n = tQ.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === n[e])
                        throw TypeError(`No method named "${e}"`);
                    n[e](t)
                }
            })
        }
    }
    V.on(document, tW, '[data-bs-toggle="modal"]', function(e) {
        let t = ee.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        V.one(t, tP, e=>{
            e.defaultPrevented || V.one(t, tI, ()=>{
                y(this) && this.focus()
            }
            )
        }
        );
        let n = ee.findOne(".modal.show");
        n && tQ.getInstance(n).hide();
        let i = tQ.getOrCreateInstance(t);
        i.toggle(this)
    }),
    et(tQ),
    S(tQ);
    let tY = ".bs.offcanvas"
      , tX = ".data-api"
      , tK = `load ${tY}${tX}`
      , tJ = "show"
      , tZ = "showing"
      , t0 = "hiding"
      , t1 = ".offcanvas.show"
      , t2 = `show ${tY}`
      , t3 = `shown ${tY}`
      , t9 = `hide ${tY}`
      , t4 = `hidePrevented ${tY}`
      , t6 = `hidden ${tY}`
      , t5 = `resize ${tY}`
      , t8 = `click ${tY}${tX}`
      , t7 = `keydown.dismiss ${tY}`
      , ne = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , nt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class nn extends J {
        constructor(e, t) {
            super(e, t),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return ne
        }
        static get DefaultType() {
            return nt
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            if (this._isShown)
                return;
            let t = V.trigger(this._element, t2, {
                relatedTarget: e
            });
            t.defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || new tO().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(tZ),
            this._queueCallback(()=>{
                (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(),
                this._element.classList.add(tJ),
                this._element.classList.remove(tZ),
                V.trigger(this._element, t3, {
                    relatedTarget: e
                })
            }
            , this._element, !0))
        }
        hide() {
            if (!this._isShown)
                return;
            let e = V.trigger(this._element, t9);
            e.defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(t0),
            this._backdrop.hide(),
            this._queueCallback(()=>{
                this._element.classList.remove(tJ, t0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new tO().reset(),
                V.trigger(this._element, t6)
            }
            , this._element, !0))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            let e = !!this._config.backdrop;
            return new tb({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? ()=>{
                    if ("static" === this._config.backdrop) {
                        V.trigger(this._element, t4);
                        return
                    }
                    this.hide()
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new tC({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            V.on(this._element, t7, e=>{
                if ("Escape" === e.key) {
                    if (this._config.keyboard) {
                        this.hide();
                        return
                    }
                    V.trigger(this._element, t4)
                }
            }
            )
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = nn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    V.on(document, t8, '[data-bs-toggle="offcanvas"]', function(e) {
        let t = ee.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        b(this))
            return;
        V.one(t, t6, ()=>{
            y(this) && this.focus()
        }
        );
        let n = ee.findOne(t1);
        n && n !== t && nn.getInstance(n).hide();
        let i = nn.getOrCreateInstance(t);
        i.toggle(this)
    }),
    V.on(window, tK, ()=>{
        for (let e of ee.find(t1))
            nn.getOrCreateInstance(e).show()
    }
    ),
    V.on(window, t5, ()=>{
        for (let e of ee.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(e).position && nn.getOrCreateInstance(e).hide()
    }
    ),
    et(nn),
    S(nn);
    let ni = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , nr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , no = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
      , ns = (e,t)=>{
        let n = e.nodeName.toLowerCase();
        return t.includes(n) ? !nr.has(n) || !!no.test(e.nodeValue) : t.filter(e=>e instanceof RegExp).some(e=>e.test(n))
    }
      , na = {
        allowList: ni,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , nl = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , nc = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class nu extends K {
        constructor(e) {
            super(),
            this._config = this._getConfig(e)
        }
        static get Default() {
            return na
        }
        static get DefaultType() {
            return nl
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(e) {
            return this._checkContent(e),
            this._config.content = {
                ...this._config.content,
                ...e
            },
            this
        }
        toHtml() {
            let e = document.createElement("div");
            for (let[t,n] of (e.innerHTML = this._maybeSanitize(this._config.template),
            Object.entries(this._config.content)))
                this._setContent(e, n, t);
            let t = e.children[0]
              , n = this._resolvePossibleFunction(this._config.extraClass);
            return n && t.classList.add(...n.split(" ")),
            t
        }
        _typeCheckConfig(e) {
            super._typeCheckConfig(e),
            this._checkContent(e.content)
        }
        _checkContent(e) {
            for (let[t,n] of Object.entries(e))
                super._typeCheckConfig({
                    selector: t,
                    entry: n
                }, nc)
        }
        _setContent(e, t, n) {
            let i = ee.findOne(n, e);
            if (i) {
                if (!(t = this._resolvePossibleFunction(t))) {
                    i.remove();
                    return
                }
                if (m(t)) {
                    this._putElementInTemplate(v(t), i);
                    return
                }
                if (this._config.html) {
                    i.innerHTML = this._maybeSanitize(t);
                    return
                }
                i.textContent = t
            }
        }
        _maybeSanitize(e) {
            return this._config.sanitize ? function(e, t, n) {
                if (!e.length)
                    return e;
                if (n && "function" == typeof n)
                    return n(e);
                let i = new window.DOMParser
                  , r = i.parseFromString(e, "text/html")
                  , o = [].concat(...r.body.querySelectorAll("*"));
                for (let e of o) {
                    let n = e.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(n)) {
                        e.remove();
                        continue
                    }
                    let i = [].concat(...e.attributes)
                      , r = [].concat(t["*"] || [], t[n] || []);
                    for (let t of i)
                        ns(t, r) || e.removeAttribute(t.nodeName)
                }
                return r.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
        }
        _resolvePossibleFunction(e) {
            return D(e, [this])
        }
        _putElementInTemplate(e, t) {
            if (this._config.html) {
                t.innerHTML = "",
                t.append(e);
                return
            }
            t.textContent = e.textContent
        }
    }
    let nd = new Set(["sanitize", "allowList", "sanitizeFn"])
      , np = "fade"
      , nf = "show"
      , nh = ".modal"
      , ng = "hide.bs.modal"
      , nm = "hover"
      , nv = "focus"
      , ny = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: C() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: C() ? "right" : "left"
    }
      , nb = {
        allowList: ni,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , n_ = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class nx extends J {
        constructor(e, t) {
            if (void 0 === a)
                throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return nb
        }
        static get DefaultType() {
            return n_
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            if (this._isEnabled) {
                if (this._activeTrigger.click = !this._activeTrigger.click,
                this._isShown()) {
                    this._leave();
                    return
                }
                this._enter()
            }
        }
        dispose() {
            clearTimeout(this._timeout),
            V.off(this._element.closest(nh), ng, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw Error("Please use show on visible elements");
            if (!(this._isWithContent() && this._isEnabled))
                return;
            let e = V.trigger(this._element, this.constructor.eventName("show"))
              , t = _(this._element)
              , n = (t || this._element.ownerDocument.documentElement).contains(this._element);
            if (e.defaultPrevented || !n)
                return;
            this._disposePopper();
            let i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            let {container: r} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i),
            V.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(i),
            i.classList.add(nf),
            "ontouchstart"in document.documentElement)
                for (let e of [].concat(...document.body.children))
                    V.on(e, "mouseover", x);
            this._queueCallback(()=>{
                V.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            , this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown())
                return;
            let e = V.trigger(this._element, this.constructor.eventName("hide"));
            if (e.defaultPrevented)
                return;
            let t = this._getTipElement();
            if (t.classList.remove(nf),
            "ontouchstart"in document.documentElement)
                for (let e of [].concat(...document.body.children))
                    V.off(e, "mouseover", x);
            this._activeTrigger.click = !1,
            this._activeTrigger[nv] = !1,
            this._activeTrigger[nm] = !1,
            this._isHovered = null,
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                V.trigger(this._element, this.constructor.eventName("hidden")))
            }
            , this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return !!this._getTitle()
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(e) {
            let t = this._getTemplateFactory(e).toHtml();
            if (!t)
                return null;
            t.classList.remove(np, nf),
            t.classList.add(`bs-${this.constructor.NAME}-auto`);
            let n = f(this.constructor.NAME).toString();
            return t.setAttribute("id", n),
            this._isAnimated() && t.classList.add(np),
            t
        }
        setContent(e) {
            this._newContent = e,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new nu({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(np)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(nf)
        }
        _createPopper(e) {
            let t = D(this._config.placement, [this, e, this._element])
              , n = ny[t.toUpperCase()];
            return a.createPopper(this._element, e, this._getPopperConfig(n))
        }
        _getOffset() {
            let {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _resolvePossibleFunction(e) {
            return D(e, [this._element])
        }
        _getPopperConfig(e) {
            let t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: e=>{
                        this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                    }
                }]
            };
            return {
                ...t,
                ...D(this._config.popperConfig, [t])
            }
        }
        _setListeners() {
            let e = this._config.trigger.split(" ");
            for (let t of e)
                if ("click" === t)
                    V.on(this._element, this.constructor.eventName("click"), this._config.selector, e=>{
                        let t = this._initializeOnDelegatedTarget(e);
                        t.toggle()
                    }
                    );
                else if ("manual" !== t) {
                    let e = t === nm ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , n = t === nm ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    V.on(this._element, e, this._config.selector, e=>{
                        let t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusin" === e.type ? nv : nm] = !0,
                        t._enter()
                    }
                    ),
                    V.on(this._element, n, this._config.selector, e=>{
                        let t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusout" === e.type ? nv : nm] = t._element.contains(e.relatedTarget),
                        t._leave()
                    }
                    )
                }
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            V.on(this._element.closest(nh), ng, this._hideModalHandler)
        }
        _fixTitle() {
            let e = this._element.getAttribute("title");
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"))
        }
        _enter() {
            if (this._isShown() || this._isHovered) {
                this._isHovered = !0;
                return
            }
            this._isHovered = !0,
            this._setTimeout(()=>{
                this._isHovered && this.show()
            }
            , this._config.delay.show)
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout(()=>{
                this._isHovered || this.hide()
            }
            , this._config.delay.hide))
        }
        _setTimeout(e, t) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(e, t)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(e) {
            let t = X.getDataAttributes(this._element);
            for (let e of Object.keys(t))
                nd.has(e) && delete t[e];
            return e = {
                ...t,
                ..."object" == typeof e && e ? e : {}
            },
            e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : v(e.container),
            "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            e
        }
        _getDelegateConfig() {
            let e = {};
            for (let[t,n] of Object.entries(this._config))
                this.constructor.Default[t] !== n && (e[t] = n);
            return e.selector = !1,
            e.trigger = "manual",
            e
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = nx.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    S(nx);
    let nw = {
        ...nx.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , nE = {
        ...nx.DefaultType,
        content: "(null|string|element|function)"
    };
    class nA extends nx {
        static get Default() {
            return nw
        }
        static get DefaultType() {
            return nE
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = nA.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    S(nA);
    let nT = ".bs.scrollspy"
      , nC = `activate ${nT}`
      , nS = `click ${nT}`
      , nD = `load ${nT}.data-api`
      , n$ = "active"
      , nk = "[href]"
      , nO = ".nav-link"
      , nL = `${nO}, .nav-item > ${nO}, .list-group-item`
      , nj = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , nN = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class nI extends J {
        constructor(e, t) {
            super(e, t),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return nj
        }
        static get DefaultType() {
            return nN
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            for (let e of (this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(),
            this._observableSections.values()))
                this._observer.observe(e)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.target = v(e.target) || document.body,
            e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin,
            "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(e=>Number.parseFloat(e))),
            e
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (V.off(this._config.target, nS),
            V.on(this._config.target, nS, nk, e=>{
                let t = this._observableSections.get(e.target.hash);
                if (t) {
                    e.preventDefault();
                    let n = this._rootElement || window
                      , i = t.offsetTop - this._element.offsetTop;
                    if (n.scrollTo) {
                        n.scrollTo({
                            top: i,
                            behavior: "smooth"
                        });
                        return
                    }
                    n.scrollTop = i
                }
            }
            ))
        }
        _getNewObserver() {
            let e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver(e=>this._observerCallback(e),e)
        }
        _observerCallback(e) {
            let t = e=>this._targetLinks.get(`#${e.target.id}`)
              , n = e=>{
                this._previousScrollData.visibleEntryTop = e.target.offsetTop,
                this._process(t(e))
            }
              , i = (this._rootElement || document.documentElement).scrollTop
              , r = i >= this._previousScrollData.parentScrollTop;
            for (let o of (this._previousScrollData.parentScrollTop = i,
            e)) {
                if (!o.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(t(o));
                    continue
                }
                let e = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (r && e) {
                    if (n(o),
                    !i)
                        return;
                    continue
                }
                r || e || n(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            let e = ee.find(nk, this._config.target);
            for (let t of e) {
                if (!t.hash || b(t))
                    continue;
                let e = ee.findOne(decodeURI(t.hash), this._element);
                y(e) && (this._targetLinks.set(decodeURI(t.hash), t),
                this._observableSections.set(t.hash, e))
            }
        }
        _process(e) {
            this._activeTarget !== e && (this._clearActiveClass(this._config.target),
            this._activeTarget = e,
            e.classList.add(n$),
            this._activateParents(e),
            V.trigger(this._element, nC, {
                relatedTarget: e
            }))
        }
        _activateParents(e) {
            if (e.classList.contains("dropdown-item")) {
                ee.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(n$);
                return
            }
            for (let t of ee.parents(e, ".nav, .list-group"))
                for (let e of ee.prev(t, nL))
                    e.classList.add(n$)
        }
        _clearActiveClass(e) {
            e.classList.remove(n$);
            let t = ee.find(`${nk}.${n$}`, e);
            for (let e of t)
                e.classList.remove(n$)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = nI.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    V.on(window, nD, ()=>{
        for (let e of ee.find('[data-bs-spy="scroll"]'))
            nI.getOrCreateInstance(e)
    }
    ),
    S(nI);
    let nP = ".bs.tab"
      , nM = `hide ${nP}`
      , nq = `hidden ${nP}`
      , nH = `show ${nP}`
      , nR = `shown ${nP}`
      , nF = `click ${nP}`
      , nW = `keydown ${nP}`
      , nz = `load ${nP}`
      , nB = "ArrowRight"
      , nU = "ArrowDown"
      , nV = "Home"
      , nG = "active"
      , nQ = "fade"
      , nY = "show"
      , nX = ".dropdown-toggle"
      , nK = `:not(${nX})`
      , nJ = `.nav-link ${nK}, .list-group-item ${nK}, [role="tab"]${nK}`
      , nZ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , n0 = `${nJ}, ${nZ}`
      , n1 = `.${nG}[data-bs-toggle="tab"], .${nG}[data-bs-toggle="pill"], .${nG}[data-bs-toggle="list"]`;
    class n2 extends J {
        constructor(e) {
            if (super(e),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            !this._parent)
                return;
            this._setInitialAttributes(this._parent, this._getChildren()),
            V.on(this._element, nW, e=>this._keydown(e))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            let e = this._element;
            if (this._elemIsActive(e))
                return;
            let t = this._getActiveElem()
              , n = t ? V.trigger(t, nM, {
                relatedTarget: e
            }) : null
              , i = V.trigger(e, nH, {
                relatedTarget: t
            });
            i.defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e),
            this._activate(e, t))
        }
        _activate(e, t) {
            e && (e.classList.add(nG),
            this._activate(ee.getElementFromSelector(e)),
            this._queueCallback(()=>{
                if ("tab" !== e.getAttribute("role")) {
                    e.classList.add(nY);
                    return
                }
                e.removeAttribute("tabindex"),
                e.setAttribute("aria-selected", !0),
                this._toggleDropDown(e, !0),
                V.trigger(e, nR, {
                    relatedTarget: t
                })
            }
            , e, e.classList.contains(nQ)))
        }
        _deactivate(e, t) {
            e && (e.classList.remove(nG),
            e.blur(),
            this._deactivate(ee.getElementFromSelector(e)),
            this._queueCallback(()=>{
                if ("tab" !== e.getAttribute("role")) {
                    e.classList.remove(nY);
                    return
                }
                e.setAttribute("aria-selected", !1),
                e.setAttribute("tabindex", "-1"),
                this._toggleDropDown(e, !1),
                V.trigger(e, nq, {
                    relatedTarget: t
                })
            }
            , e, e.classList.contains(nQ)))
        }
        _keydown(e) {
            let t;
            if (!["ArrowLeft", nB, "ArrowUp", nU, nV, "End"].includes(e.key))
                return;
            e.stopPropagation(),
            e.preventDefault();
            let n = this._getChildren().filter(e=>!b(e));
            if ([nV, "End"].includes(e.key))
                t = n[e.key === nV ? 0 : n.length - 1];
            else {
                let i = [nB, nU].includes(e.key);
                t = O(n, e.target, i, !0)
            }
            t && (t.focus({
                preventScroll: !0
            }),
            n2.getOrCreateInstance(t).show())
        }
        _getChildren() {
            return ee.find(n0, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find(e=>this._elemIsActive(e)) || null
        }
        _setInitialAttributes(e, t) {
            for (let n of (this._setAttributeIfNotExists(e, "role", "tablist"),
            t))
                this._setInitialAttributesOnChild(n)
        }
        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            let t = this._elemIsActive(e)
              , n = this._getOuterElement(e);
            e.setAttribute("aria-selected", t),
            n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
            t || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e)
        }
        _setInitialAttributesOnTargetPanel(e) {
            let t = ee.getElementFromSelector(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"),
            e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`))
        }
        _toggleDropDown(e, t) {
            let n = this._getOuterElement(e);
            if (!n.classList.contains("dropdown"))
                return;
            let i = (e,i)=>{
                let r = ee.findOne(e, n);
                r && r.classList.toggle(i, t)
            }
            ;
            i(nX, nG),
            i(".dropdown-menu", nY),
            n.setAttribute("aria-expanded", t)
        }
        _setAttributeIfNotExists(e, t, n) {
            e.hasAttribute(t) || e.setAttribute(t, n)
        }
        _elemIsActive(e) {
            return e.classList.contains(nG)
        }
        _getInnerElement(e) {
            return e.matches(n0) ? e : ee.findOne(n0, e)
        }
        _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = n2.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    V.on(document, nF, nZ, function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        b(this) || n2.getOrCreateInstance(this).show()
    }),
    V.on(window, nz, ()=>{
        for (let e of ee.find(n1))
            n2.getOrCreateInstance(e)
    }
    ),
    S(n2);
    let n3 = ".bs.toast"
      , n9 = `mouseover ${n3}`
      , n4 = `mouseout ${n3}`
      , n6 = `focusin ${n3}`
      , n5 = `focusout ${n3}`
      , n8 = `hide ${n3}`
      , n7 = `hidden ${n3}`
      , ie = `show ${n3}`
      , it = `shown ${n3}`
      , ii = "hide"
      , ir = "show"
      , io = "showing"
      , is = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ia = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class il extends J {
        constructor(e, t) {
            super(e, t),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return ia
        }
        static get DefaultType() {
            return is
        }
        static get NAME() {
            return "toast"
        }
        show() {
            let e = V.trigger(this._element, ie);
            e.defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(ii),
            w(this._element),
            this._element.classList.add(ir, io),
            this._queueCallback(()=>{
                this._element.classList.remove(io),
                V.trigger(this._element, it),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            if (!this.isShown())
                return;
            let e = V.trigger(this._element, n8);
            e.defaultPrevented || (this._element.classList.add(io),
            this._queueCallback(()=>{
                this._element.classList.add(ii),
                this._element.classList.remove(io, ir),
                V.trigger(this._element, n7)
            }
            , this._element, this._config.animation))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ir),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(ir)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide()
            }
            , this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = t;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = t
            }
            if (t) {
                this._clearTimeout();
                return
            }
            let n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            V.on(this._element, n9, e=>this._onInteraction(e, !0)),
            V.on(this._element, n4, e=>this._onInteraction(e, !1)),
            V.on(this._element, n6, e=>this._onInteraction(e, !0)),
            V.on(this._element, n5, e=>this._onInteraction(e, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = il.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    et(il),
    S(il);
    var ic = {};
    ic = function() {
        "use strict";
        function e(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    e[i] = n[i]
            }
            return e
        }
        return function t(n, i) {
            function r(t, r, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = e({}, i, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                    o.expires && (o.expires = o.expires.toUTCString()),
                    t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                    var s = "";
                    for (var a in o)
                        o[a] && (s += "; " + a,
                        !0 !== o[a] && (s += "=" + o[a].split(";")[0]));
                    return document.cookie = t + "=" + n.write(r, t) + s
                }
            }
            return Object.create({
                set: r,
                get: function(e) {
                    if ("undefined" != typeof document && (!arguments.length || e)) {
                        for (var t = document.cookie ? document.cookie.split("; ") : [], i = {}, r = 0; r < t.length; r++) {
                            var o = t[r].split("=")
                              , s = o.slice(1).join("=");
                            try {
                                var a = decodeURIComponent(o[0]);
                                if (i[a] = n.read(s, a),
                                e === a)
                                    break
                            } catch (e) {}
                        }
                        return e ? i[e] : i
                    }
                },
                remove: function(t, n) {
                    r(t, "", e({}, n, {
                        expires: -1
                    }))
                },
                withAttributes: function(n) {
                    return t(this.converter, e({}, this.attributes, n))
                },
                withConverter: function(n) {
                    return t(e({}, this.converter, n), this.attributes)
                }
            }, {
                attributes: {
                    value: Object.freeze(i)
                },
                converter: {
                    value: Object.freeze(n)
                }
            })
        }({
            read: function(e) {
                return '"' === e[0] && (e = e.slice(1, -1)),
                e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            write: function(e) {
                return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        }, {
            path: "/"
        })
    }();
    var iu = {}
      , id = {};
    id = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    ;
    var ip = {}
      , ih = {}
      , ig = {};
    ig = "object" == typeof i && i && i.Object === Object && i;
    var im = "object" == typeof self && self && self.Object === Object && self;
    ih = ig || im || Function("return this")(),
    ip = function() {
        return ih.Date.now()
    }
    ;
    var iv = {}
      , iy = {}
      , ib = {}
      , i_ = /\s/;
    ib = function(e) {
        for (var t = e.length; t-- && i_.test(e.charAt(t)); )
            ;
        return t
    }
    ;
    var ix = /^\s+/;
    iy = function(e) {
        return e ? e.slice(0, ib(e) + 1).replace(ix, "") : e
    }
    ;
    var iw = {}
      , iE = {}
      , iA = {};
    iA = ih.Symbol;
    var iT = {}
      , iC = Object.prototype
      , iS = iC.hasOwnProperty
      , iD = iC.toString
      , i$ = iA ? iA.toStringTag : void 0;
    iT = function(e) {
        var t = iS.call(e, i$)
          , n = e[i$];
        try {
            e[i$] = void 0;
            var i = !0
        } catch (e) {}
        var r = iD.call(e);
        return i && (t ? e[i$] = n : delete e[i$]),
        r
    }
    ;
    var ik = {}
      , iO = Object.prototype.toString;
    ik = function(e) {
        return iO.call(e)
    }
    ;
    var iL = iA ? iA.toStringTag : void 0;
    iE = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : iL && iL in Object(e) ? iT(e) : ik(e)
    }
    ;
    var ij = {};
    ij = function(e) {
        return null != e && "object" == typeof e
    }
    ,
    iw = function(e) {
        return "symbol" == typeof e || ij(e) && "[object Symbol]" == iE(e)
    }
    ;
    var iN = 0 / 0
      , iI = /^[-+]0x[0-9a-f]+$/i
      , iP = /^0b[01]+$/i
      , iM = /^0o[0-7]+$/i
      , iq = parseInt;
    iv = function(e) {
        if ("number" == typeof e)
            return e;
        if (iw(e))
            return iN;
        if (id(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = id(t) ? t + "" : t
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = iy(e);
        var n = iP.test(e);
        return n || iM.test(e) ? iq(e.slice(2), n ? 2 : 8) : iI.test(e) ? iN : +e
    }
    ;
    var iH = Math.max
      , iR = Math.min;
    function iF(e) {
        let t;
        return e.tagName.match(/^h\d/i) ? t = e.tagName : e.classList.forEach(e=>{
            if (e.match(/^h\d/i)) {
                t = e;
                return
            }
        }
        ),
        t.charAt(t.length - 1)
    }
    iu = function(e, t, n) {
        var i, r, o, s, a, l, c = 0, u = !1, d = !1, p = !0;
        if ("function" != typeof e)
            throw TypeError("Expected a function");
        function f(t) {
            var n = i
              , o = r;
            return i = r = void 0,
            c = t,
            s = e.apply(o, n)
        }
        function h(e) {
            var n = e - l
              , i = e - c;
            return void 0 === l || n >= t || n < 0 || d && i >= o
        }
        function g() {
            var e, n, i, r = ip();
            if (h(r))
                return m(r);
            a = setTimeout(g, (e = r - l,
            n = r - c,
            i = t - e,
            d ? iR(i, o - n) : i))
        }
        function m(e) {
            return (a = void 0,
            p && i) ? f(e) : (i = r = void 0,
            s)
        }
        function v() {
            var e, n = ip(), o = h(n);
            if (i = arguments,
            r = this,
            l = n,
            o) {
                if (void 0 === a)
                    return c = e = l,
                    a = setTimeout(g, t),
                    u ? f(e) : s;
                if (d)
                    return clearTimeout(a),
                    a = setTimeout(g, t),
                    f(l)
            }
            return void 0 === a && (a = setTimeout(g, t)),
            s
        }
        return t = iv(t) || 0,
        id(n) && (u = !!n.leading,
        o = (d = "maxWait"in n) ? iH(iv(n.maxWait) || 0, t) : o,
        p = "trailing"in n ? !!n.trailing : p),
        v.cancel = function() {
            void 0 !== a && clearTimeout(a),
            c = 0,
            i = l = r = a = void 0
        }
        ,
        v.flush = function() {
            return void 0 === a ? s : m(ip())
        }
        ,
        v
    }
    ;
    var iW = s("kqQJU")
      , iz = {};
    function iB(e) {
        return e.text.replaceAll("_", " ").replaceAll("/", " / ")
    }
    function iU(e) {
        if (null == e.url)
            return e.text;
        var t = n(iW)("<a>" + e.text + "</a>");
        return t.prop("href", e.url),
        t.on("mouseup", function(e) {
            (e.shiftKey || e.ctrlKey || e.metaKey || e.altKey || 1 != e.which) && e.stopPropagation()
        }),
        t
    }
    !function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : iz ? iz = function(t, n) {
            return void 0 === n && (n = "undefined" != typeof window ? s("kqQJU") : s("kqQJU")(t)),
            e(n),
            n
        }
        : e(jQuery)
    }(function(e) {
        var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
                var t, t = e.fn.select2.amd;
            return function() {
                if (!t || !t.requirejs) {
                    var e, n, i;
                    t ? n = t : t = {},
                    function(t) {
                        var r, o, s, a, l = {}, c = {}, u = {}, d = {}, p = Object.prototype.hasOwnProperty, f = [].slice, h = /\.js$/;
                        function g(e, t) {
                            return p.call(e, t)
                        }
                        function m(e, t) {
                            var n, i, r, o, s, a, l, c, d, p, f, g = t && t.split("/"), m = u.map, v = m && m["*"] || {};
                            if (e) {
                                for (s = (e = e.split("/")).length - 1,
                                u.nodeIdCompat && h.test(e[s]) && (e[s] = e[s].replace(h, "")),
                                "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)),
                                d = 0; d < e.length; d++)
                                    if ("." === (f = e[d]))
                                        e.splice(d, 1),
                                        d -= 1;
                                    else if (".." === f) {
                                        if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1])
                                            continue;
                                        d > 0 && (e.splice(d - 1, 2),
                                        d -= 2)
                                    }
                                e = e.join("/")
                            }
                            if ((g || v) && m) {
                                for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                                    if (i = n.slice(0, d).join("/"),
                                    g) {
                                        for (p = g.length; p > 0; p -= 1)
                                            if ((r = m[g.slice(0, p).join("/")]) && (r = r[i])) {
                                                o = r,
                                                a = d;
                                                break
                                            }
                                    }
                                    if (o)
                                        break;
                                    !l && v && v[i] && (l = v[i],
                                    c = d)
                                }
                                !o && l && (o = l,
                                a = c),
                                o && (n.splice(0, a, o),
                                e = n.join("/"))
                            }
                            return e
                        }
                        function v(e, n) {
                            return function() {
                                var i = f.call(arguments, 0);
                                return "string" != typeof i[0] && 1 === i.length && i.push(null),
                                o.apply(t, i.concat([e, n]))
                            }
                        }
                        function y(e) {
                            if (g(c, e)) {
                                var n = c[e];
                                delete c[e],
                                d[e] = !0,
                                r.apply(t, n)
                            }
                            if (!g(l, e) && !g(d, e))
                                throw Error("No " + e);
                            return l[e]
                        }
                        function b(e) {
                            var t, n = e ? e.indexOf("!") : -1;
                            return n > -1 && (t = e.substring(0, n),
                            e = e.substring(n + 1, e.length)),
                            [t, e]
                        }
                        s = function(e, t) {
                            var n, i = b(e), r = i[0], o = t[1];
                            return (e = i[1],
                            r && (n = y(r = m(r, o))),
                            r) ? e = n && n.normalize ? n.normalize(e, function(e) {
                                return m(e, o)
                            }) : m(e, o) : (r = (i = b(e = m(e, o)))[0],
                            e = i[1],
                            r && (n = y(r))),
                            {
                                f: r ? r + "!" + e : e,
                                n: e,
                                pr: r,
                                p: n
                            }
                        }
                        ,
                        a = {
                            require: function(e) {
                                return v(e)
                            },
                            exports: function(e) {
                                var t = l[e];
                                return void 0 !== t ? t : l[e] = {}
                            },
                            module: function(e) {
                                return {
                                    id: e,
                                    uri: "",
                                    exports: l[e],
                                    config: function() {
                                        return u && u.config && u.config[e] || {}
                                    }
                                }
                            }
                        },
                        r = function(e, n, i, r) {
                            var o, u, p, f, h, m, _, x, w = [], E = typeof i;
                            if (_ = (o = r = r || e) ? b(o) : [],
                            "undefined" === E || "function" === E) {
                                for (m = 0,
                                n = !n.length && i.length ? ["require", "exports", "module"] : n; m < n.length; m += 1)
                                    if ("require" === (p = (h = s(n[m], _)).f))
                                        w[m] = a.require(e);
                                    else if ("exports" === p)
                                        w[m] = a.exports(e),
                                        x = !0;
                                    else if ("module" === p)
                                        u = w[m] = a.module(e);
                                    else if (g(l, p) || g(c, p) || g(d, p))
                                        w[m] = y(p);
                                    else if (h.p)
                                        h.p.load(h.n, v(r, !0), function(e) {
                                            return function(t) {
                                                l[e] = t
                                            }
                                        }(p), {}),
                                        w[m] = l[p];
                                    else
                                        throw Error(e + " missing " + p);
                                f = i ? i.apply(l[e], w) : void 0,
                                e && (u && u.exports !== t && u.exports !== l[e] ? l[e] = u.exports : f === t && x || (l[e] = f))
                            } else
                                e && (l[e] = i)
                        }
                        ,
                        e = n = o = function(e, n, i, l, c) {
                            if ("string" == typeof e) {
                                var d;
                                return a[e] ? a[e](n) : y(s(e, (d = n) ? b(d) : []).f)
                            }
                            if (!e.splice) {
                                if ((u = e).deps && o(u.deps, u.callback),
                                !n)
                                    return;
                                n.splice ? (e = n,
                                n = i,
                                i = null) : e = t
                            }
                            return n = n || function() {}
                            ,
                            "function" == typeof i && (i = l,
                            l = c),
                            l ? r(t, e, n, i) : setTimeout(function() {
                                r(t, e, n, i)
                            }, 4),
                            o
                        }
                        ,
                        o.config = function(e) {
                            return o(e)
                        }
                        ,
                        e._defined = l,
                        (i = function(e, t, n) {
                            if ("string" != typeof e)
                                throw Error("See almond README: incorrect module build, no module name");
                            t.splice || (n = t,
                            t = []),
                            g(l, e) || g(c, e) || (c[e] = [e, t, n])
                        }
                        ).amd = {
                            jQuery: !0
                        }
                    }(),
                    t.requirejs = e,
                    t.require = n,
                    t.define = i
                }
            }(),
            t.define("almond", function() {}),
            t.define("jquery", [], function() {
                var t = e || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
                t
            }),
            t.define("select2/utils", ["jquery"], function(e) {
                var t = {};
                function n(e) {
                    var t = e.prototype
                      , n = [];
                    for (var i in t)
                        "function" == typeof t[i] && "constructor" !== i && n.push(i);
                    return n
                }
                t.Extend = function(e, t) {
                    var n = {}.hasOwnProperty;
                    function i() {
                        this.constructor = e
                    }
                    for (var r in t)
                        n.call(t, r) && (e[r] = t[r]);
                    return i.prototype = t.prototype,
                    e.prototype = new i,
                    e.__super__ = t.prototype,
                    e
                }
                ,
                t.Decorate = function(e, t) {
                    var i = n(t)
                      , r = n(e);
                    function o() {
                        var n = Array.prototype.unshift
                          , i = t.prototype.constructor.length
                          , r = e.prototype.constructor;
                        i > 0 && (n.call(arguments, e.prototype.constructor),
                        r = t.prototype.constructor),
                        r.apply(this, arguments)
                    }
                    t.displayName = e.displayName,
                    o.prototype = new function() {
                        this.constructor = o
                    }
                    ;
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s];
                        o.prototype[a] = e.prototype[a]
                    }
                    for (var l = 0; l < i.length; l++) {
                        var c = i[l];
                        o.prototype[c] = function(e) {
                            var n = function() {};
                            e in o.prototype && (n = o.prototype[e]);
                            var i = t.prototype[e];
                            return function() {
                                return Array.prototype.unshift.call(arguments, n),
                                i.apply(this, arguments)
                            }
                        }(c)
                    }
                    return o
                }
                ;
                var i = function() {
                    this.listeners = {}
                };
                i.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {},
                    e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }
                ,
                i.prototype.trigger = function(e) {
                    var t = Array.prototype.slice
                      , n = t.call(arguments, 1);
                    this.listeners = this.listeners || {},
                    null == n && (n = []),
                    0 === n.length && n.push({}),
                    n[0]._type = e,
                    e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                    "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
                }
                ,
                i.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        e[n].apply(this, t)
                }
                ,
                t.Observable = i,
                t.generateChars = function(e) {
                    for (var t = "", n = 0; n < e; n++)
                        t += Math.floor(36 * Math.random()).toString(36);
                    return t
                }
                ,
                t.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }
                ,
                t._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-")
                          , i = e;
                        if (1 !== n.length) {
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                (o = o.substring(0, 1).toLowerCase() + o.substring(1))in i || (i[o] = {}),
                                r == n.length - 1 && (i[o] = e[t]),
                                i = i[o]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }
                ,
                t.hasScroll = function(t, n) {
                    var i = e(n)
                      , r = n.style.overflowX
                      , o = n.style.overflowY;
                    return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
                }
                ,
                t.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                        return t[e]
                    })
                }
                ,
                t.__cache = {};
                var r = 0;
                return t.GetUniqueElementId = function(e) {
                    var n = e.getAttribute("data-select2-id");
                    return null != n || (n = e.id ? "select2-data-" + e.id : "select2-data-" + (++r).toString() + "-" + t.generateChars(4),
                    e.setAttribute("data-select2-id", n)),
                    n
                }
                ,
                t.StoreData = function(e, n, i) {
                    var r = t.GetUniqueElementId(e);
                    t.__cache[r] || (t.__cache[r] = {}),
                    t.__cache[r][n] = i
                }
                ,
                t.GetData = function(n, i) {
                    var r = t.GetUniqueElementId(n);
                    return i ? t.__cache[r] && null != t.__cache[r][i] ? t.__cache[r][i] : e(n).data(i) : t.__cache[r]
                }
                ,
                t.RemoveData = function(e) {
                    var n = t.GetUniqueElementId(e);
                    null != t.__cache[n] && delete t.__cache[n],
                    e.removeAttribute("data-select2-id")
                }
                ,
                t.copyNonInternalCssClasses = function(e, t) {
                    var n = e.getAttribute("class").trim().split(/\s+/);
                    n = n.filter(function(e) {
                        return 0 === e.indexOf("select2-")
                    });
                    var i = t.getAttribute("class").trim().split(/\s+/);
                    i = i.filter(function(e) {
                        return 0 !== e.indexOf("select2-")
                    });
                    var r = n.concat(i);
                    e.setAttribute("class", r.join(" "))
                }
                ,
                t
            }),
            t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                function n(e, t, i) {
                    this.$element = e,
                    this.data = i,
                    this.options = t,
                    n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable),
                n.prototype.render = function() {
                    var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                    return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                    this.$results = t,
                    t
                }
                ,
                n.prototype.clear = function() {
                    this.$results.empty()
                }
                ,
                n.prototype.displayMessage = function(t) {
                    var n = this.options.get("escapeMarkup");
                    this.clear(),
                    this.hideLoading();
                    var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')
                      , r = this.options.get("translations").get(t.message);
                    i.append(n(r(t.args))),
                    i[0].className += " select2-results__message",
                    this.$results.append(i)
                }
                ,
                n.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }
                ,
                n.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null == e.results || 0 === e.results.length) {
                        0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        });
                        return
                    }
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n]
                          , r = this.option(i);
                        t.push(r)
                    }
                    this.$results.append(t)
                }
                ,
                n.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }
                ,
                n.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }
                ,
                n.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option--selectable")
                      , t = e.filter(".select2-results__option--selected");
                    t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                    this.ensureHighlightVisible()
                }
                ,
                n.prototype.setClasses = function() {
                    var n = this;
                    this.data.current(function(i) {
                        var r = i.map(function(e) {
                            return e.id.toString()
                        });
                        n.$results.find(".select2-results__option--selectable").each(function() {
                            var n = e(this)
                              , i = t.GetData(this, "data")
                              , o = "" + i.id;
                            null != i.element && i.element.selected || null == i.element && r.indexOf(o) > -1 ? (this.classList.add("select2-results__option--selected"),
                            n.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"),
                            n.attr("aria-selected", "false"))
                        })
                    })
                }
                ,
                n.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                        disabled: !0,
                        loading: !0,
                        text: this.options.get("translations").get("searching")(e)
                    }
                      , n = this.option(t);
                    n.className += " loading-results",
                    this.$results.prepend(n)
                }
                ,
                n.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }
                ,
                n.prototype.option = function(n) {
                    var i = document.createElement("li");
                    i.classList.add("select2-results__option"),
                    i.classList.add("select2-results__option--selectable");
                    var r = {
                        role: "option"
                    }
                      , o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                    for (var s in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (r["aria-disabled"] = "true",
                    i.classList.remove("select2-results__option--selectable"),
                    i.classList.add("select2-results__option--disabled")),
                    null == n.id && i.classList.remove("select2-results__option--selectable"),
                    null != n._resultId && (i.id = n._resultId),
                    n.title && (i.title = n.title),
                    n.children && (r.role = "group",
                    r["aria-label"] = n.text,
                    i.classList.remove("select2-results__option--selectable"),
                    i.classList.add("select2-results__option--group")),
                    r) {
                        var a = r[s];
                        i.setAttribute(s, a)
                    }
                    if (n.children) {
                        var l = e(i)
                          , c = document.createElement("strong");
                        c.className = "select2-results__group",
                        this.template(n, c);
                        for (var u = [], d = 0; d < n.children.length; d++) {
                            var p = n.children[d]
                              , f = this.option(p);
                            u.push(f)
                        }
                        var h = e("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested",
                            role: "none"
                        });
                        h.append(u),
                        l.append(c),
                        l.append(h)
                    } else
                        this.template(n, i);
                    return t.StoreData(i, "data", n),
                    i
                }
                ,
                n.prototype.bind = function(n, i) {
                    var r = this
                      , o = n.id + "-results";
                    this.$results.attr("id", o),
                    n.on("results:all", function(e) {
                        r.clear(),
                        r.append(e.data),
                        n.isOpen() && (r.setClasses(),
                        r.highlightFirstItem())
                    }),
                    n.on("results:append", function(e) {
                        r.append(e.data),
                        n.isOpen() && r.setClasses()
                    }),
                    n.on("query", function(e) {
                        r.hideMessages(),
                        r.showLoading(e)
                    }),
                    n.on("select", function() {
                        n.isOpen() && (r.setClasses(),
                        r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                    }),
                    n.on("unselect", function() {
                        n.isOpen() && (r.setClasses(),
                        r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                    }),
                    n.on("open", function() {
                        r.$results.attr("aria-expanded", "true"),
                        r.$results.attr("aria-hidden", "false"),
                        r.setClasses(),
                        r.ensureHighlightVisible()
                    }),
                    n.on("close", function() {
                        r.$results.attr("aria-expanded", "false"),
                        r.$results.attr("aria-hidden", "true"),
                        r.$results.removeAttr("aria-activedescendant")
                    }),
                    n.on("results:toggle", function() {
                        var e = r.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    }),
                    n.on("results:select", function() {
                        var e = r.getHighlightedResults();
                        if (0 !== e.length) {
                            var n = t.GetData(e[0], "data");
                            e.hasClass("select2-results__option--selected") ? r.trigger("close", {}) : r.trigger("select", {
                                data: n
                            })
                        }
                    }),
                    n.on("results:previous", function() {
                        var e = r.getHighlightedResults()
                          , t = r.$results.find(".select2-results__option--selectable")
                          , n = t.index(e);
                        if (!(n <= 0)) {
                            var i = n - 1;
                            0 === e.length && (i = 0);
                            var o = t.eq(i);
                            o.trigger("mouseenter");
                            var s = r.$results.offset().top
                              , a = o.offset().top
                              , l = r.$results.scrollTop() + (a - s);
                            0 === i ? r.$results.scrollTop(0) : a - s < 0 && r.$results.scrollTop(l)
                        }
                    }),
                    n.on("results:next", function() {
                        var e = r.getHighlightedResults()
                          , t = r.$results.find(".select2-results__option--selectable")
                          , n = t.index(e) + 1;
                        if (!(n >= t.length)) {
                            var i = t.eq(n);
                            i.trigger("mouseenter");
                            var o = r.$results.offset().top + r.$results.outerHeight(!1)
                              , s = i.offset().top + i.outerHeight(!1)
                              , a = r.$results.scrollTop() + s - o;
                            0 === n ? r.$results.scrollTop(0) : s > o && r.$results.scrollTop(a)
                        }
                    }),
                    n.on("results:focus", function(e) {
                        e.element[0].classList.add("select2-results__option--highlighted"),
                        e.element[0].setAttribute("aria-selected", "true")
                    }),
                    n.on("results:message", function(e) {
                        r.displayMessage(e)
                    }),
                    e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                        var t = r.$results.scrollTop()
                          , n = r.$results.get(0).scrollHeight - t + e.deltaY
                          , i = e.deltaY > 0 && t - e.deltaY <= 0
                          , o = e.deltaY < 0 && n <= r.$results.height();
                        i ? (r.$results.scrollTop(0),
                        e.preventDefault(),
                        e.stopPropagation()) : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()),
                        e.preventDefault(),
                        e.stopPropagation())
                    }),
                    this.$results.on("mouseup", ".select2-results__option--selectable", function(n) {
                        var i = e(this)
                          , o = t.GetData(this, "data");
                        if (i.hasClass("select2-results__option--selected")) {
                            r.options.get("multiple") ? r.trigger("unselect", {
                                originalEvent: n,
                                data: o
                            }) : r.trigger("close", {});
                            return
                        }
                        r.trigger("select", {
                            originalEvent: n,
                            data: o
                        })
                    }),
                    this.$results.on("mouseenter", ".select2-results__option--selectable", function(n) {
                        var i = t.GetData(this, "data");
                        r.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"),
                        r.trigger("results:focus", {
                            data: i,
                            element: e(this)
                        })
                    })
                }
                ,
                n.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }
                ,
                n.prototype.destroy = function() {
                    this.$results.remove()
                }
                ,
                n.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find(".select2-results__option--selectable").index(e)
                          , n = this.$results.offset().top
                          , i = e.offset().top
                          , r = this.$results.scrollTop() + (i - n)
                          , o = i - n;
                        r -= 2 * e.outerHeight(!1),
                        t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r)
                    }
                }
                ,
                n.prototype.template = function(t, n) {
                    var i = this.options.get("templateResult")
                      , r = this.options.get("escapeMarkup")
                      , o = i(t, n);
                    null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
                }
                ,
                n
            }),
            t.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }),
            t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                function i(e, t) {
                    this.$element = e,
                    this.options = t,
                    i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable),
                i.prototype.render = function() {
                    var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0,
                    null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                    n.attr("title", this.$element.attr("title")),
                    n.attr("tabindex", this._tabindex),
                    n.attr("aria-disabled", "false"),
                    this.$selection = n,
                    n
                }
                ,
                i.prototype.bind = function(e, t) {
                    var i = this
                      , r = e.id + "-results";
                    this.container = e,
                    this.$selection.on("focus", function(e) {
                        i.trigger("focus", e)
                    }),
                    this.$selection.on("blur", function(e) {
                        i._handleBlur(e)
                    }),
                    this.$selection.on("keydown", function(e) {
                        i.trigger("keypress", e),
                        e.which === n.SPACE && e.preventDefault()
                    }),
                    e.on("results:focus", function(e) {
                        i.$selection.attr("aria-activedescendant", e.data._resultId)
                    }),
                    e.on("selection:update", function(e) {
                        i.update(e.data)
                    }),
                    e.on("open", function() {
                        i.$selection.attr("aria-expanded", "true"),
                        i.$selection.attr("aria-owns", r),
                        i._attachCloseHandler(e)
                    }),
                    e.on("close", function() {
                        i.$selection.attr("aria-expanded", "false"),
                        i.$selection.removeAttr("aria-activedescendant"),
                        i.$selection.removeAttr("aria-owns"),
                        i.$selection.trigger("focus"),
                        i._detachCloseHandler(e)
                    }),
                    e.on("enable", function() {
                        i.$selection.attr("tabindex", i._tabindex),
                        i.$selection.attr("aria-disabled", "false")
                    }),
                    e.on("disable", function() {
                        i.$selection.attr("tabindex", "-1"),
                        i.$selection.attr("aria-disabled", "true")
                    })
                }
                ,
                i.prototype._handleBlur = function(t) {
                    var n = this;
                    window.setTimeout(function() {
                        document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                    }, 1)
                }
                ,
                i.prototype._attachCloseHandler = function(n) {
                    e(document.body).on("mousedown.select2." + n.id, function(n) {
                        var i = e(n.target).closest(".select2");
                        e(".select2.select2-container--open").each(function() {
                            this != i[0] && t.GetData(this, "element").select2("close")
                        })
                    })
                }
                ,
                i.prototype._detachCloseHandler = function(t) {
                    e(document.body).off("mousedown.select2." + t.id)
                }
                ,
                i.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }
                ,
                i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }
                ,
                i.prototype.update = function(e) {
                    throw Error("The `update` method must be defined in child classes.")
                }
                ,
                i.prototype.isEnabled = function() {
                    return !this.isDisabled()
                }
                ,
                i.prototype.isDisabled = function() {
                    return this.options.get("disabled")
                }
                ,
                i
            }),
            t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                function r() {
                    r.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(r, t),
                r.prototype.render = function() {
                    var e = r.__super__.render.call(this);
                    return e[0].classList.add("select2-selection--single"),
                    e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                    e
                }
                ,
                r.prototype.bind = function(e, t) {
                    var n = this;
                    r.__super__.bind.apply(this, arguments);
                    var i = e.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"),
                    this.$selection.attr("aria-labelledby", i),
                    this.$selection.attr("aria-controls", i),
                    this.$selection.on("mousedown", function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        })
                    }),
                    this.$selection.on("focus", function(e) {}),
                    this.$selection.on("blur", function(e) {}),
                    e.on("focus", function(t) {
                        e.isOpen() || n.$selection.trigger("focus")
                    })
                }
                ,
                r.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(),
                    e.removeAttr("title")
                }
                ,
                r.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }
                ,
                r.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }
                ,
                r.prototype.update = function(e) {
                    if (0 === e.length) {
                        this.clear();
                        return
                    }
                    var t = e[0]
                      , n = this.$selection.find(".select2-selection__rendered")
                      , i = this.display(t, n);
                    n.empty().append(i);
                    var r = t.title || t.text;
                    r ? n.attr("title", r) : n.removeAttr("title")
                }
                ,
                r
            }),
            t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                function i(e, t) {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, t),
                i.prototype.render = function() {
                    var e = i.__super__.render.call(this);
                    return e[0].classList.add("select2-selection--multiple"),
                    e.html('<ul class="select2-selection__rendered"></ul>'),
                    e
                }
                ,
                i.prototype.bind = function(t, r) {
                    var o = this;
                    i.__super__.bind.apply(this, arguments);
                    var s = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", s),
                    this.$selection.on("click", function(e) {
                        o.trigger("toggle", {
                            originalEvent: e
                        })
                    }),
                    this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                        if (!o.isDisabled()) {
                            var i = e(this).parent()
                              , r = n.GetData(i[0], "data");
                            o.trigger("unselect", {
                                originalEvent: t,
                                data: r
                            })
                        }
                    }),
                    this.$selection.on("keydown", ".select2-selection__choice__remove", function(e) {
                        o.isDisabled() || e.stopPropagation()
                    })
                }
                ,
                i.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(),
                    e.removeAttr("title")
                }
                ,
                i.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }
                ,
                i.prototype.selectionContainer = function() {
                    return e('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')
                }
                ,
                i.prototype.update = function(e) {
                    if (this.clear(),
                    0 !== e.length) {
                        for (var t = [], i = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", r = 0; r < e.length; r++) {
                            var o = e[r]
                              , s = this.selectionContainer()
                              , a = this.display(o, s)
                              , l = i + n.generateChars(4) + "-";
                            o.id ? l += o.id : l += n.generateChars(4),
                            s.find(".select2-selection__choice__display").append(a).attr("id", l);
                            var c = o.title || o.text;
                            c && s.attr("title", c);
                            var u = this.options.get("translations").get("removeItem")
                              , d = s.find(".select2-selection__choice__remove");
                            d.attr("title", u()),
                            d.attr("aria-label", u()),
                            d.attr("aria-describedby", l),
                            n.StoreData(s[0], "data", o),
                            t.push(s)
                        }
                        this.$selection.find(".select2-selection__rendered").append(t)
                    }
                }
                ,
                i
            }),
            t.define("select2/selection/placeholder", [], function() {
                function e(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                    e.call(this, t, n)
                }
                return e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }),
                    t
                }
                ,
                e.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    n.html(this.display(t)),
                    n[0].classList.add("select2-selection__placeholder"),
                    n[0].classList.remove("select2-selection__choice");
                    var i = t.title || t.text || n.text();
                    return this.$selection.find(".select2-selection__rendered").attr("title", i),
                    n
                }
                ,
                e.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (t.length > 1 || n)
                        return e.call(this, t);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }
                ,
                e
            }),
            t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(e, t, n) {
                function i() {}
                return i.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n),
                    null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                    this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                        i._handleClear(e)
                    }),
                    t.on("keypress", function(e) {
                        i._handleKeyboardClear(e, t)
                    })
                }
                ,
                i.prototype._handleClear = function(e, t) {
                    if (!this.isDisabled()) {
                        var i = this.$selection.find(".select2-selection__clear");
                        if (0 !== i.length) {
                            t.stopPropagation();
                            var r = n.GetData(i[0], "data")
                              , o = this.$element.val();
                            this.$element.val(this.placeholder.id);
                            var s = {
                                data: r
                            };
                            if (this.trigger("clear", s),
                            s.prevented) {
                                this.$element.val(o);
                                return
                            }
                            for (var a = 0; a < r.length; a++)
                                if (s = {
                                    data: r[a]
                                },
                                this.trigger("unselect", s),
                                s.prevented) {
                                    this.$element.val(o);
                                    return
                                }
                            this.$element.trigger("input").trigger("change"),
                            this.trigger("toggle", {})
                        }
                    }
                }
                ,
                i.prototype._handleKeyboardClear = function(e, n, i) {
                    i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                }
                ,
                i.prototype.update = function(t, i) {
                    if (t.call(this, i),
                    this.$selection.find(".select2-selection__clear").remove(),
                    this.$selection[0].classList.remove("select2-selection--clearable"),
                    !(this.$selection.find(".select2-selection__placeholder").length > 0) && 0 !== i.length) {
                        var r = this.$selection.find(".select2-selection__rendered").attr("id")
                          , o = this.options.get("translations").get("removeAllItems")
                          , s = e('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
                        s.attr("title", o()),
                        s.attr("aria-label", o()),
                        s.attr("aria-describedby", r),
                        n.StoreData(s[0], "data", i),
                        this.$selection.prepend(s),
                        this.$selection[0].classList.add("select2-selection--clearable")
                    }
                }
                ,
                i
            }),
            t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                function i(e, t, n) {
                    e.call(this, t, n)
                }
                return i.prototype.render = function(t) {
                    var n = this.options.get("translations").get("search")
                      , i = e('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
                    this.$searchContainer = i,
                    this.$search = i.find("textarea"),
                    this.$search.prop("autocomplete", this.options.get("autocomplete")),
                    this.$search.attr("aria-label", n());
                    var r = t.call(this);
                    return this._transferTabIndex(),
                    r.append(this.$searchContainer),
                    r
                }
                ,
                i.prototype.bind = function(e, i, r) {
                    var o = this
                      , s = i.id + "-results"
                      , a = i.id + "-container";
                    e.call(this, i, r),
                    o.$search.attr("aria-describedby", a),
                    i.on("open", function() {
                        o.$search.attr("aria-controls", s),
                        o.$search.trigger("focus")
                    }),
                    i.on("close", function() {
                        o.$search.val(""),
                        o.resizeSearch(),
                        o.$search.removeAttr("aria-controls"),
                        o.$search.removeAttr("aria-activedescendant"),
                        o.$search.trigger("focus")
                    }),
                    i.on("enable", function() {
                        o.$search.prop("disabled", !1),
                        o._transferTabIndex()
                    }),
                    i.on("disable", function() {
                        o.$search.prop("disabled", !0)
                    }),
                    i.on("focus", function(e) {
                        o.$search.trigger("focus")
                    }),
                    i.on("results:focus", function(e) {
                        e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant")
                    }),
                    this.$selection.on("focusin", ".select2-search--inline", function(e) {
                        o.trigger("focus", e)
                    }),
                    this.$selection.on("focusout", ".select2-search--inline", function(e) {
                        o._handleBlur(e)
                    }),
                    this.$selection.on("keydown", ".select2-search--inline", function(e) {
                        if (e.stopPropagation(),
                        o.trigger("keypress", e),
                        o._keyUpPrevented = e.isDefaultPrevented(),
                        e.which === n.BACKSPACE && "" === o.$search.val()) {
                            var i = o.$selection.find(".select2-selection__choice").last();
                            if (i.length > 0) {
                                var r = t.GetData(i[0], "data");
                                o.searchRemoveChoice(r),
                                e.preventDefault()
                            }
                        }
                    }),
                    this.$selection.on("click", ".select2-search--inline", function(e) {
                        o.$search.val() && e.stopPropagation()
                    });
                    var l = document.documentMode
                      , c = l && l <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                        if (c) {
                            o.$selection.off("input.search input.searchcheck");
                            return
                        }
                        o.$selection.off("keyup.search")
                    }),
                    this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                        if (c && "input" === e.type) {
                            o.$selection.off("input.search input.searchcheck");
                            return
                        }
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                    })
                }
                ,
                i.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                    this.$selection.attr("tabindex", "-1")
                }
                ,
                i.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }
                ,
                i.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""),
                    e.call(this, t),
                    this.resizeSearch(),
                    n && this.$search.trigger("focus")
                }
                ,
                i.prototype.handleSearch = function() {
                    if (this.resizeSearch(),
                    !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }
                ,
                i.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }),
                    this.$search.val(t.text),
                    this.handleSearch()
                }
                ,
                i.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "100%";
                    "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em"),
                    this.$search.css("width", e)
                }
                ,
                i
            }),
            t.define("select2/selection/selectionCss", ["../utils"], function(e) {
                function t() {}
                return t.prototype.render = function(t) {
                    var n = t.call(this)
                      , i = this.options.get("selectionCssClass") || "";
                    return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                    e.copyNonInternalCssClasses(n[0], this.$element[0])),
                    n.addClass(i),
                    n
                }
                ,
                t
            }),
            t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                function t() {}
                return t.prototype.bind = function(t, n, i) {
                    var r = this
                      , o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                      , s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                    t.call(this, n, i),
                    n.on("*", function(t, n) {
                        if (-1 !== o.indexOf(t)) {
                            n = n || {};
                            var i = e.Event("select2:" + t, {
                                params: n
                            });
                            r.$element.trigger(i),
                            -1 !== s.indexOf(t) && (n.prevented = i.isDefaultPrevented())
                        }
                    })
                }
                ,
                t
            }),
            t.define("select2/translation", ["jquery", "require"], function(e, t) {
                function n(e) {
                    this.dict = e || {}
                }
                return n.prototype.all = function() {
                    return this.dict
                }
                ,
                n.prototype.get = function(e) {
                    return this.dict[e]
                }
                ,
                n.prototype.extend = function(t) {
                    this.dict = e.extend({}, t.all(), this.dict)
                }
                ,
                n._cache = {},
                n.loadPath = function(e) {
                    if (!(e in n._cache)) {
                        var i = t(e);
                        n._cache[e] = i
                    }
                    return new n(n._cache[e])
                }
                ,
                n
            }),
            t.define("select2/diacritics", [], function() {
                return {
                    "Ⓐ": "A",
                    Ａ: "A",
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ầ: "A",
                    Ấ: "A",
                    Ẫ: "A",
                    Ẩ: "A",
                    Ã: "A",
                    Ā: "A",
                    Ă: "A",
                    Ằ: "A",
                    Ắ: "A",
                    Ẵ: "A",
                    Ẳ: "A",
                    Ȧ: "A",
                    Ǡ: "A",
                    Ä: "A",
                    Ǟ: "A",
                    Ả: "A",
                    Å: "A",
                    Ǻ: "A",
                    Ǎ: "A",
                    Ȁ: "A",
                    Ȃ: "A",
                    Ạ: "A",
                    Ậ: "A",
                    Ặ: "A",
                    Ḁ: "A",
                    Ą: "A",
                    Ⱥ: "A",
                    Ɐ: "A",
                    Ꜳ: "AA",
                    Æ: "AE",
                    Ǽ: "AE",
                    Ǣ: "AE",
                    Ꜵ: "AO",
                    Ꜷ: "AU",
                    Ꜹ: "AV",
                    Ꜻ: "AV",
                    Ꜽ: "AY",
                    "Ⓑ": "B",
                    Ｂ: "B",
                    Ḃ: "B",
                    Ḅ: "B",
                    Ḇ: "B",
                    Ƀ: "B",
                    Ƃ: "B",
                    Ɓ: "B",
                    "Ⓒ": "C",
                    Ｃ: "C",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    Ç: "C",
                    Ḉ: "C",
                    Ƈ: "C",
                    Ȼ: "C",
                    Ꜿ: "C",
                    "Ⓓ": "D",
                    Ｄ: "D",
                    Ḋ: "D",
                    Ď: "D",
                    Ḍ: "D",
                    Ḑ: "D",
                    Ḓ: "D",
                    Ḏ: "D",
                    Đ: "D",
                    Ƌ: "D",
                    Ɗ: "D",
                    Ɖ: "D",
                    Ꝺ: "D",
                    Ǳ: "DZ",
                    Ǆ: "DZ",
                    ǲ: "Dz",
                    ǅ: "Dz",
                    "Ⓔ": "E",
                    Ｅ: "E",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ề: "E",
                    Ế: "E",
                    Ễ: "E",
                    Ể: "E",
                    Ẽ: "E",
                    Ē: "E",
                    Ḕ: "E",
                    Ḗ: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ë: "E",
                    Ẻ: "E",
                    Ě: "E",
                    Ȅ: "E",
                    Ȇ: "E",
                    Ẹ: "E",
                    Ệ: "E",
                    Ȩ: "E",
                    Ḝ: "E",
                    Ę: "E",
                    Ḙ: "E",
                    Ḛ: "E",
                    Ɛ: "E",
                    Ǝ: "E",
                    "Ⓕ": "F",
                    Ｆ: "F",
                    Ḟ: "F",
                    Ƒ: "F",
                    Ꝼ: "F",
                    "Ⓖ": "G",
                    Ｇ: "G",
                    Ǵ: "G",
                    Ĝ: "G",
                    Ḡ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ǧ: "G",
                    Ģ: "G",
                    Ǥ: "G",
                    Ɠ: "G",
                    Ꞡ: "G",
                    Ᵹ: "G",
                    Ꝿ: "G",
                    "Ⓗ": "H",
                    Ｈ: "H",
                    Ĥ: "H",
                    Ḣ: "H",
                    Ḧ: "H",
                    Ȟ: "H",
                    Ḥ: "H",
                    Ḩ: "H",
                    Ḫ: "H",
                    Ħ: "H",
                    Ⱨ: "H",
                    Ⱶ: "H",
                    Ɥ: "H",
                    "Ⓘ": "I",
                    Ｉ: "I",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    İ: "I",
                    Ï: "I",
                    Ḯ: "I",
                    Ỉ: "I",
                    Ǐ: "I",
                    Ȉ: "I",
                    Ȋ: "I",
                    Ị: "I",
                    Į: "I",
                    Ḭ: "I",
                    Ɨ: "I",
                    "Ⓙ": "J",
                    Ｊ: "J",
                    Ĵ: "J",
                    Ɉ: "J",
                    "Ⓚ": "K",
                    Ｋ: "K",
                    Ḱ: "K",
                    Ǩ: "K",
                    Ḳ: "K",
                    Ķ: "K",
                    Ḵ: "K",
                    Ƙ: "K",
                    Ⱪ: "K",
                    Ꝁ: "K",
                    Ꝃ: "K",
                    Ꝅ: "K",
                    Ꞣ: "K",
                    "Ⓛ": "L",
                    Ｌ: "L",
                    Ŀ: "L",
                    Ĺ: "L",
                    Ľ: "L",
                    Ḷ: "L",
                    Ḹ: "L",
                    Ļ: "L",
                    Ḽ: "L",
                    Ḻ: "L",
                    Ł: "L",
                    Ƚ: "L",
                    Ɫ: "L",
                    Ⱡ: "L",
                    Ꝉ: "L",
                    Ꝇ: "L",
                    Ꞁ: "L",
                    Ǉ: "LJ",
                    ǈ: "Lj",
                    "Ⓜ": "M",
                    Ｍ: "M",
                    Ḿ: "M",
                    Ṁ: "M",
                    Ṃ: "M",
                    Ɱ: "M",
                    Ɯ: "M",
                    "Ⓝ": "N",
                    Ｎ: "N",
                    Ǹ: "N",
                    Ń: "N",
                    Ñ: "N",
                    Ṅ: "N",
                    Ň: "N",
                    Ṇ: "N",
                    Ņ: "N",
                    Ṋ: "N",
                    Ṉ: "N",
                    Ƞ: "N",
                    Ɲ: "N",
                    Ꞑ: "N",
                    Ꞥ: "N",
                    Ǌ: "NJ",
                    ǋ: "Nj",
                    "Ⓞ": "O",
                    Ｏ: "O",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Ồ: "O",
                    Ố: "O",
                    Ỗ: "O",
                    Ổ: "O",
                    Õ: "O",
                    Ṍ: "O",
                    Ȭ: "O",
                    Ṏ: "O",
                    Ō: "O",
                    Ṑ: "O",
                    Ṓ: "O",
                    Ŏ: "O",
                    Ȯ: "O",
                    Ȱ: "O",
                    Ö: "O",
                    Ȫ: "O",
                    Ỏ: "O",
                    Ő: "O",
                    Ǒ: "O",
                    Ȍ: "O",
                    Ȏ: "O",
                    Ơ: "O",
                    Ờ: "O",
                    Ớ: "O",
                    Ỡ: "O",
                    Ở: "O",
                    Ợ: "O",
                    Ọ: "O",
                    Ộ: "O",
                    Ǫ: "O",
                    Ǭ: "O",
                    Ø: "O",
                    Ǿ: "O",
                    Ɔ: "O",
                    Ɵ: "O",
                    Ꝋ: "O",
                    Ꝍ: "O",
                    Œ: "OE",
                    Ƣ: "OI",
                    Ꝏ: "OO",
                    Ȣ: "OU",
                    "Ⓟ": "P",
                    Ｐ: "P",
                    Ṕ: "P",
                    Ṗ: "P",
                    Ƥ: "P",
                    Ᵽ: "P",
                    Ꝑ: "P",
                    Ꝓ: "P",
                    Ꝕ: "P",
                    "Ⓠ": "Q",
                    Ｑ: "Q",
                    Ꝗ: "Q",
                    Ꝙ: "Q",
                    Ɋ: "Q",
                    "Ⓡ": "R",
                    Ｒ: "R",
                    Ŕ: "R",
                    Ṙ: "R",
                    Ř: "R",
                    Ȑ: "R",
                    Ȓ: "R",
                    Ṛ: "R",
                    Ṝ: "R",
                    Ŗ: "R",
                    Ṟ: "R",
                    Ɍ: "R",
                    Ɽ: "R",
                    Ꝛ: "R",
                    Ꞧ: "R",
                    Ꞃ: "R",
                    "Ⓢ": "S",
                    Ｓ: "S",
                    ẞ: "S",
                    Ś: "S",
                    Ṥ: "S",
                    Ŝ: "S",
                    Ṡ: "S",
                    Š: "S",
                    Ṧ: "S",
                    Ṣ: "S",
                    Ṩ: "S",
                    Ș: "S",
                    Ş: "S",
                    Ȿ: "S",
                    Ꞩ: "S",
                    Ꞅ: "S",
                    "Ⓣ": "T",
                    Ｔ: "T",
                    Ṫ: "T",
                    Ť: "T",
                    Ṭ: "T",
                    Ț: "T",
                    Ţ: "T",
                    Ṱ: "T",
                    Ṯ: "T",
                    Ŧ: "T",
                    Ƭ: "T",
                    Ʈ: "T",
                    Ⱦ: "T",
                    Ꞇ: "T",
                    Ꜩ: "TZ",
                    "Ⓤ": "U",
                    Ｕ: "U",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ũ: "U",
                    Ṹ: "U",
                    Ū: "U",
                    Ṻ: "U",
                    Ŭ: "U",
                    Ü: "U",
                    Ǜ: "U",
                    Ǘ: "U",
                    Ǖ: "U",
                    Ǚ: "U",
                    Ủ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ǔ: "U",
                    Ȕ: "U",
                    Ȗ: "U",
                    Ư: "U",
                    Ừ: "U",
                    Ứ: "U",
                    Ữ: "U",
                    Ử: "U",
                    Ự: "U",
                    Ụ: "U",
                    Ṳ: "U",
                    Ų: "U",
                    Ṷ: "U",
                    Ṵ: "U",
                    Ʉ: "U",
                    "Ⓥ": "V",
                    Ｖ: "V",
                    Ṽ: "V",
                    Ṿ: "V",
                    Ʋ: "V",
                    Ꝟ: "V",
                    Ʌ: "V",
                    Ꝡ: "VY",
                    "Ⓦ": "W",
                    Ｗ: "W",
                    Ẁ: "W",
                    Ẃ: "W",
                    Ŵ: "W",
                    Ẇ: "W",
                    Ẅ: "W",
                    Ẉ: "W",
                    Ⱳ: "W",
                    "Ⓧ": "X",
                    Ｘ: "X",
                    Ẋ: "X",
                    Ẍ: "X",
                    "Ⓨ": "Y",
                    Ｙ: "Y",
                    Ỳ: "Y",
                    Ý: "Y",
                    Ŷ: "Y",
                    Ỹ: "Y",
                    Ȳ: "Y",
                    Ẏ: "Y",
                    Ÿ: "Y",
                    Ỷ: "Y",
                    Ỵ: "Y",
                    Ƴ: "Y",
                    Ɏ: "Y",
                    Ỿ: "Y",
                    "Ⓩ": "Z",
                    Ｚ: "Z",
                    Ź: "Z",
                    Ẑ: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    Ẓ: "Z",
                    Ẕ: "Z",
                    Ƶ: "Z",
                    Ȥ: "Z",
                    Ɀ: "Z",
                    Ⱬ: "Z",
                    Ꝣ: "Z",
                    "ⓐ": "a",
                    ａ: "a",
                    ẚ: "a",
                    à: "a",
                    á: "a",
                    â: "a",
                    ầ: "a",
                    ấ: "a",
                    ẫ: "a",
                    ẩ: "a",
                    ã: "a",
                    ā: "a",
                    ă: "a",
                    ằ: "a",
                    ắ: "a",
                    ẵ: "a",
                    ẳ: "a",
                    ȧ: "a",
                    ǡ: "a",
                    ä: "a",
                    ǟ: "a",
                    ả: "a",
                    å: "a",
                    ǻ: "a",
                    ǎ: "a",
                    ȁ: "a",
                    ȃ: "a",
                    ạ: "a",
                    ậ: "a",
                    ặ: "a",
                    ḁ: "a",
                    ą: "a",
                    ⱥ: "a",
                    ɐ: "a",
                    ꜳ: "aa",
                    æ: "ae",
                    ǽ: "ae",
                    ǣ: "ae",
                    ꜵ: "ao",
                    ꜷ: "au",
                    ꜹ: "av",
                    ꜻ: "av",
                    ꜽ: "ay",
                    "ⓑ": "b",
                    ｂ: "b",
                    ḃ: "b",
                    ḅ: "b",
                    ḇ: "b",
                    ƀ: "b",
                    ƃ: "b",
                    ɓ: "b",
                    "ⓒ": "c",
                    ｃ: "c",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    ç: "c",
                    ḉ: "c",
                    ƈ: "c",
                    ȼ: "c",
                    ꜿ: "c",
                    ↄ: "c",
                    "ⓓ": "d",
                    ｄ: "d",
                    ḋ: "d",
                    ď: "d",
                    ḍ: "d",
                    ḑ: "d",
                    ḓ: "d",
                    ḏ: "d",
                    đ: "d",
                    ƌ: "d",
                    ɖ: "d",
                    ɗ: "d",
                    ꝺ: "d",
                    ǳ: "dz",
                    ǆ: "dz",
                    "ⓔ": "e",
                    ｅ: "e",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ề: "e",
                    ế: "e",
                    ễ: "e",
                    ể: "e",
                    ẽ: "e",
                    ē: "e",
                    ḕ: "e",
                    ḗ: "e",
                    ĕ: "e",
                    ė: "e",
                    ë: "e",
                    ẻ: "e",
                    ě: "e",
                    ȅ: "e",
                    ȇ: "e",
                    ẹ: "e",
                    ệ: "e",
                    ȩ: "e",
                    ḝ: "e",
                    ę: "e",
                    ḙ: "e",
                    ḛ: "e",
                    ɇ: "e",
                    ɛ: "e",
                    ǝ: "e",
                    "ⓕ": "f",
                    ｆ: "f",
                    ḟ: "f",
                    ƒ: "f",
                    ꝼ: "f",
                    "ⓖ": "g",
                    ｇ: "g",
                    ǵ: "g",
                    ĝ: "g",
                    ḡ: "g",
                    ğ: "g",
                    ġ: "g",
                    ǧ: "g",
                    ģ: "g",
                    ǥ: "g",
                    ɠ: "g",
                    ꞡ: "g",
                    ᵹ: "g",
                    ꝿ: "g",
                    "ⓗ": "h",
                    ｈ: "h",
                    ĥ: "h",
                    ḣ: "h",
                    ḧ: "h",
                    ȟ: "h",
                    ḥ: "h",
                    ḩ: "h",
                    ḫ: "h",
                    ẖ: "h",
                    ħ: "h",
                    ⱨ: "h",
                    ⱶ: "h",
                    ɥ: "h",
                    ƕ: "hv",
                    "ⓘ": "i",
                    ｉ: "i",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    ï: "i",
                    ḯ: "i",
                    ỉ: "i",
                    ǐ: "i",
                    ȉ: "i",
                    ȋ: "i",
                    ị: "i",
                    į: "i",
                    ḭ: "i",
                    ɨ: "i",
                    ı: "i",
                    "ⓙ": "j",
                    ｊ: "j",
                    ĵ: "j",
                    ǰ: "j",
                    ɉ: "j",
                    "ⓚ": "k",
                    ｋ: "k",
                    ḱ: "k",
                    ǩ: "k",
                    ḳ: "k",
                    ķ: "k",
                    ḵ: "k",
                    ƙ: "k",
                    ⱪ: "k",
                    ꝁ: "k",
                    ꝃ: "k",
                    ꝅ: "k",
                    ꞣ: "k",
                    "ⓛ": "l",
                    ｌ: "l",
                    ŀ: "l",
                    ĺ: "l",
                    ľ: "l",
                    ḷ: "l",
                    ḹ: "l",
                    ļ: "l",
                    ḽ: "l",
                    ḻ: "l",
                    ſ: "l",
                    ł: "l",
                    ƚ: "l",
                    ɫ: "l",
                    ⱡ: "l",
                    ꝉ: "l",
                    ꞁ: "l",
                    ꝇ: "l",
                    ǉ: "lj",
                    "ⓜ": "m",
                    ｍ: "m",
                    ḿ: "m",
                    ṁ: "m",
                    ṃ: "m",
                    ɱ: "m",
                    ɯ: "m",
                    "ⓝ": "n",
                    ｎ: "n",
                    ǹ: "n",
                    ń: "n",
                    ñ: "n",
                    ṅ: "n",
                    ň: "n",
                    ṇ: "n",
                    ņ: "n",
                    ṋ: "n",
                    ṉ: "n",
                    ƞ: "n",
                    ɲ: "n",
                    ŉ: "n",
                    ꞑ: "n",
                    ꞥ: "n",
                    ǌ: "nj",
                    "ⓞ": "o",
                    ｏ: "o",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    ồ: "o",
                    ố: "o",
                    ỗ: "o",
                    ổ: "o",
                    õ: "o",
                    ṍ: "o",
                    ȭ: "o",
                    ṏ: "o",
                    ō: "o",
                    ṑ: "o",
                    ṓ: "o",
                    ŏ: "o",
                    ȯ: "o",
                    ȱ: "o",
                    ö: "o",
                    ȫ: "o",
                    ỏ: "o",
                    ő: "o",
                    ǒ: "o",
                    ȍ: "o",
                    ȏ: "o",
                    ơ: "o",
                    ờ: "o",
                    ớ: "o",
                    ỡ: "o",
                    ở: "o",
                    ợ: "o",
                    ọ: "o",
                    ộ: "o",
                    ǫ: "o",
                    ǭ: "o",
                    ø: "o",
                    ǿ: "o",
                    ɔ: "o",
                    ꝋ: "o",
                    ꝍ: "o",
                    ɵ: "o",
                    œ: "oe",
                    ƣ: "oi",
                    ȣ: "ou",
                    ꝏ: "oo",
                    "ⓟ": "p",
                    ｐ: "p",
                    ṕ: "p",
                    ṗ: "p",
                    ƥ: "p",
                    ᵽ: "p",
                    ꝑ: "p",
                    ꝓ: "p",
                    ꝕ: "p",
                    "ⓠ": "q",
                    ｑ: "q",
                    ɋ: "q",
                    ꝗ: "q",
                    ꝙ: "q",
                    "ⓡ": "r",
                    ｒ: "r",
                    ŕ: "r",
                    ṙ: "r",
                    ř: "r",
                    ȑ: "r",
                    ȓ: "r",
                    ṛ: "r",
                    ṝ: "r",
                    ŗ: "r",
                    ṟ: "r",
                    ɍ: "r",
                    ɽ: "r",
                    ꝛ: "r",
                    ꞧ: "r",
                    ꞃ: "r",
                    "ⓢ": "s",
                    ｓ: "s",
                    ß: "s",
                    ś: "s",
                    ṥ: "s",
                    ŝ: "s",
                    ṡ: "s",
                    š: "s",
                    ṧ: "s",
                    ṣ: "s",
                    ṩ: "s",
                    ș: "s",
                    ş: "s",
                    ȿ: "s",
                    ꞩ: "s",
                    ꞅ: "s",
                    ẛ: "s",
                    "ⓣ": "t",
                    ｔ: "t",
                    ṫ: "t",
                    ẗ: "t",
                    ť: "t",
                    ṭ: "t",
                    ț: "t",
                    ţ: "t",
                    ṱ: "t",
                    ṯ: "t",
                    ŧ: "t",
                    ƭ: "t",
                    ʈ: "t",
                    ⱦ: "t",
                    ꞇ: "t",
                    ꜩ: "tz",
                    "ⓤ": "u",
                    ｕ: "u",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ũ: "u",
                    ṹ: "u",
                    ū: "u",
                    ṻ: "u",
                    ŭ: "u",
                    ü: "u",
                    ǜ: "u",
                    ǘ: "u",
                    ǖ: "u",
                    ǚ: "u",
                    ủ: "u",
                    ů: "u",
                    ű: "u",
                    ǔ: "u",
                    ȕ: "u",
                    ȗ: "u",
                    ư: "u",
                    ừ: "u",
                    ứ: "u",
                    ữ: "u",
                    ử: "u",
                    ự: "u",
                    ụ: "u",
                    ṳ: "u",
                    ų: "u",
                    ṷ: "u",
                    ṵ: "u",
                    ʉ: "u",
                    "ⓥ": "v",
                    ｖ: "v",
                    ṽ: "v",
                    ṿ: "v",
                    ʋ: "v",
                    ꝟ: "v",
                    ʌ: "v",
                    ꝡ: "vy",
                    "ⓦ": "w",
                    ｗ: "w",
                    ẁ: "w",
                    ẃ: "w",
                    ŵ: "w",
                    ẇ: "w",
                    ẅ: "w",
                    ẘ: "w",
                    ẉ: "w",
                    ⱳ: "w",
                    "ⓧ": "x",
                    ｘ: "x",
                    ẋ: "x",
                    ẍ: "x",
                    "ⓨ": "y",
                    ｙ: "y",
                    ỳ: "y",
                    ý: "y",
                    ŷ: "y",
                    ỹ: "y",
                    ȳ: "y",
                    ẏ: "y",
                    ÿ: "y",
                    ỷ: "y",
                    ẙ: "y",
                    ỵ: "y",
                    ƴ: "y",
                    ɏ: "y",
                    ỿ: "y",
                    "ⓩ": "z",
                    ｚ: "z",
                    ź: "z",
                    ẑ: "z",
                    ż: "z",
                    ž: "z",
                    ẓ: "z",
                    ẕ: "z",
                    ƶ: "z",
                    ȥ: "z",
                    ɀ: "z",
                    ⱬ: "z",
                    ꝣ: "z",
                    Ά: "Α",
                    Έ: "Ε",
                    Ή: "Η",
                    Ί: "Ι",
                    Ϊ: "Ι",
                    Ό: "Ο",
                    Ύ: "Υ",
                    Ϋ: "Υ",
                    Ώ: "Ω",
                    ά: "α",
                    έ: "ε",
                    ή: "η",
                    ί: "ι",
                    ϊ: "ι",
                    ΐ: "ι",
                    ό: "ο",
                    ύ: "υ",
                    ϋ: "υ",
                    ΰ: "υ",
                    ώ: "ω",
                    ς: "σ",
                    "’": "'"
                }
            }),
            t.define("select2/data/base", ["../utils"], function(e) {
                function t(e, n) {
                    t.__super__.constructor.call(this)
                }
                return e.Extend(t, e.Observable),
                t.prototype.current = function(e) {
                    throw Error("The `current` method must be defined in child classes.")
                }
                ,
                t.prototype.query = function(e, t) {
                    throw Error("The `query` method must be defined in child classes.")
                }
                ,
                t.prototype.bind = function(e, t) {}
                ,
                t.prototype.destroy = function() {}
                ,
                t.prototype.generateResultId = function(t, n) {
                    var i = t.id + "-result-";
                    return i += e.generateChars(4),
                    null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4),
                    i
                }
                ,
                t
            }),
            t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    this.$element = e,
                    this.options = t,
                    i.__super__.constructor.call(this)
                }
                return t.Extend(i, e),
                i.prototype.current = function(e) {
                    var t = this;
                    e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function(e) {
                        return t.item(n(e))
                    }))
                }
                ,
                i.prototype.select = function(e) {
                    var t = this;
                    if (e.selected = !0,
                    null != e.element && "option" === e.element.tagName.toLowerCase()) {
                        e.element.selected = !0,
                        this.$element.trigger("input").trigger("change");
                        return
                    }
                    if (this.$element.prop("multiple"))
                        this.current(function(n) {
                            var i = [];
                            (e = [e]).push.apply(e, n);
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r].id;
                                -1 === i.indexOf(o) && i.push(o)
                            }
                            t.$element.val(i),
                            t.$element.trigger("input").trigger("change")
                        });
                    else {
                        var n = e.id;
                        this.$element.val(n),
                        this.$element.trigger("input").trigger("change")
                    }
                }
                ,
                i.prototype.unselect = function(e) {
                    var t = this;
                    if (this.$element.prop("multiple")) {
                        if (e.selected = !1,
                        null != e.element && "option" === e.element.tagName.toLowerCase()) {
                            e.element.selected = !1,
                            this.$element.trigger("input").trigger("change");
                            return
                        }
                        this.current(function(n) {
                            for (var i = [], r = 0; r < n.length; r++) {
                                var o = n[r].id;
                                o !== e.id && -1 === i.indexOf(o) && i.push(o)
                            }
                            t.$element.val(i),
                            t.$element.trigger("input").trigger("change")
                        })
                    }
                }
                ,
                i.prototype.bind = function(e, t) {
                    var n = this;
                    this.container = e,
                    e.on("select", function(e) {
                        n.select(e.data)
                    }),
                    e.on("unselect", function(e) {
                        n.unselect(e.data)
                    })
                }
                ,
                i.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        t.RemoveData(this)
                    })
                }
                ,
                i.prototype.query = function(e, t) {
                    var i = []
                      , r = this;
                    this.$element.children().each(function() {
                        if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
                            var t = n(this)
                              , o = r.item(t)
                              , s = r.matches(e, o);
                            null !== s && i.push(s)
                        }
                    }),
                    t({
                        results: i
                    })
                }
                ,
                i.prototype.addOptions = function(e) {
                    this.$element.append(e)
                }
                ,
                i.prototype.option = function(e) {
                    e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text,
                    void 0 !== e.id && (i.value = e.id),
                    e.disabled && (i.disabled = !0),
                    e.selected && (i.selected = !0),
                    e.title && (i.title = e.title);
                    var i, r = this._normalizeItem(e);
                    return r.element = i,
                    t.StoreData(i, "data", r),
                    n(i)
                }
                ,
                i.prototype.item = function(e) {
                    var i = {};
                    if (null != (i = t.GetData(e[0], "data")))
                        return i;
                    var r = e[0];
                    if ("option" === r.tagName.toLowerCase())
                        i = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title")
                        };
                    else if ("optgroup" === r.tagName.toLowerCase()) {
                        i = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var o = e.children("option"), s = [], a = 0; a < o.length; a++) {
                            var l = n(o[a])
                              , c = this.item(l);
                            s.push(c)
                        }
                        i.children = s
                    }
                    return (i = this._normalizeItem(i)).element = e[0],
                    t.StoreData(e[0], "data", i),
                    i
                }
                ,
                i.prototype._normalizeItem = function(e) {
                    return e !== Object(e) && (e = {
                        id: e,
                        text: e
                    }),
                    null != (e = n.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()),
                    null != e.text && (e.text = e.text.toString()),
                    null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                    n.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e)
                }
                ,
                i.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }
                ,
                i
            }),
            t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    this._dataToConvert = t.get("data") || [],
                    i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e),
                i.prototype.bind = function(e, t) {
                    i.__super__.bind.call(this, e, t),
                    this.addOptions(this.convertToOptions(this._dataToConvert))
                }
                ,
                i.prototype.select = function(e) {
                    var t = this.$element.find("option").filter(function(t, n) {
                        return n.value == e.id.toString()
                    });
                    0 === t.length && (t = this.option(e),
                    this.addOptions(t)),
                    i.__super__.select.call(this, e)
                }
                ,
                i.prototype.convertToOptions = function(e) {
                    for (var t = this, i = this.$element.find("option"), r = i.map(function() {
                        return t.item(n(this)).id
                    }).get(), o = [], s = 0; s < e.length; s++) {
                        var a = this._normalizeItem(e[s]);
                        if (r.indexOf(a.id) >= 0) {
                            var l = i.filter(function(e) {
                                return function() {
                                    return n(this).val() == e.id
                                }
                            }(a))
                              , c = this.item(l)
                              , u = n.extend(!0, {}, a, c)
                              , d = this.option(u);
                            l.replaceWith(d);
                            continue
                        }
                        var p = this.option(a);
                        if (a.children) {
                            var f = this.convertToOptions(a.children);
                            p.append(f)
                        }
                        o.push(p)
                    }
                    return o
                }
                ,
                i
            }),
            t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                    null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                    i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e),
                i.prototype._applyDefaults = function(e) {
                    return n.extend({}, {
                        data: function(e) {
                            return n.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, i) {
                            var r = n.ajax(e);
                            return r.then(t),
                            r.fail(i),
                            r
                        }
                    }, e, !0)
                }
                ,
                i.prototype.processResults = function(e) {
                    return e
                }
                ,
                i.prototype.query = function(e, t) {
                    var i = this;
                    null != this._request && ("function" == typeof this._request.abort && this._request.abort(),
                    this._request = null);
                    var r = n.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    function o() {
                        var n = r.transport(r, function(n) {
                            var r = i.processResults(n, e);
                            i.options.get("debug") && window.console && console.error && (!r || !r.results || !Array.isArray(r.results)) && console.error("Select2: The AJAX results did not return an array in the `results` key of the response."),
                            t(r)
                        }, function() {
                            "status"in n && (0 === n.status || "0" === n.status) || i.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        i._request = n
                    }
                    "function" == typeof r.url && (r.url = r.url.call(this.$element, e)),
                    "function" == typeof r.data && (r.data = r.data.call(this.$element, e)),
                    this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                    this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o()
                }
                ,
                i
            }),
            t.define("select2/data/tags", ["jquery"], function(e) {
                function t(e, t, n) {
                    var i = n.get("tags")
                      , r = n.get("createTag");
                    void 0 !== r && (this.createTag = r);
                    var o = n.get("insertTag");
                    if (void 0 !== o && (this.insertTag = o),
                    e.call(this, t, n),
                    Array.isArray(i))
                        for (var s = 0; s < i.length; s++) {
                            var a = i[s]
                              , l = this._normalizeItem(a)
                              , c = this.option(l);
                            this.$element.append(c)
                        }
                }
                return t.prototype.query = function(e, t, n) {
                    var i = this;
                    if (this._removeOldTags(),
                    null == t.term || null != t.page) {
                        e.call(this, t, n);
                        return
                    }
                    e.call(this, t, function e(r, o) {
                        for (var s = r.results, a = 0; a < s.length; a++) {
                            var l = s[a]
                              , c = null != l.children && !e({
                                results: l.children
                            }, !0);
                            if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) {
                                if (o)
                                    return !1;
                                r.data = s,
                                n(r);
                                return
                            }
                        }
                        if (o)
                            return !0;
                        var u = i.createTag(t);
                        if (null != u) {
                            var d = i.option(u);
                            d.attr("data-select2-tag", "true"),
                            i.addOptions([d]),
                            i.insertTag(s, u)
                        }
                        r.results = s,
                        n(r)
                    })
                }
                ,
                t.prototype.createTag = function(e, t) {
                    if (null == t.term)
                        return null;
                    var n = t.term.trim();
                    return "" === n ? null : {
                        id: n,
                        text: n
                    }
                }
                ,
                t.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }
                ,
                t.prototype._removeOldTags = function(t) {
                    this.$element.find("option[data-select2-tag]").each(function() {
                        this.selected || e(this).remove()
                    })
                }
                ,
                t
            }),
            t.define("select2/data/tokenizer", ["jquery"], function(e) {
                function t(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i),
                    e.call(this, t, n)
                }
                return t.prototype.bind = function(e, t, n) {
                    e.call(this, t, n),
                    this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }
                ,
                t.prototype.query = function(t, n, i) {
                    var r = this;
                    n.term = n.term || "";
                    var o = this.tokenizer(n, this.options, function(t) {
                        var n = r._normalizeItem(t);
                        if (!r.$element.find("option").filter(function() {
                            return e(this).val() === n.id
                        }).length) {
                            var i = r.option(n);
                            i.attr("data-select2-tag", !0),
                            r._removeOldTags(),
                            r.addOptions([i])
                        }
                        r.trigger("select", {
                            data: n
                        })
                    });
                    o.term !== n.term && (this.$search.length && (this.$search.val(o.term),
                    this.$search.trigger("focus")),
                    n.term = o.term),
                    t.call(this, n, i)
                }
                ,
                t.prototype.tokenizer = function(t, n, i, r) {
                    for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(e) {
                        return {
                            id: e.term,
                            text: e.term
                        }
                    }
                    ; a < s.length; ) {
                        var c = s[a];
                        if (-1 === o.indexOf(c)) {
                            a++;
                            continue
                        }
                        var u = s.substr(0, a)
                          , d = l(e.extend({}, n, {
                            term: u
                        }));
                        if (null == d) {
                            a++;
                            continue
                        }
                        r(d),
                        s = s.substr(a + 1) || "",
                        a = 0
                    }
                    return {
                        term: s
                    }
                }
                ,
                t
            }),
            t.define("select2/data/minimumInputLength", [], function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"),
                    e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    if (t.term = t.term || "",
                    t.term.length < this.minimumInputLength) {
                        this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: t.term,
                                params: t
                            }
                        });
                        return
                    }
                    e.call(this, t, n)
                }
                ,
                e
            }),
            t.define("select2/data/maximumInputLength", [], function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"),
                    e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    if (t.term = t.term || "",
                    this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) {
                        this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: t.term,
                                params: t
                            }
                        });
                        return
                    }
                    e.call(this, t, n)
                }
                ,
                e
            }),
            t.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"),
                    e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n),
                    t.on("select", function() {
                        i._checkIfMaximumSelected()
                    })
                }
                ,
                e.prototype.query = function(e, t, n) {
                    var i = this;
                    this._checkIfMaximumSelected(function() {
                        e.call(i, t, n)
                    })
                }
                ,
                e.prototype._checkIfMaximumSelected = function(e, t) {
                    var n = this;
                    this.current(function(e) {
                        var i = null != e ? e.length : 0;
                        if (n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength) {
                            n.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: n.maximumSelectionLength
                                }
                            });
                            return
                        }
                        t && t()
                    })
                }
                ,
                e
            }),
            t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                function n(e, t) {
                    this.$element = e,
                    this.options = t,
                    n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable),
                n.prototype.render = function() {
                    var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return t.attr("dir", this.options.get("dir")),
                    this.$dropdown = t,
                    t
                }
                ,
                n.prototype.bind = function() {}
                ,
                n.prototype.position = function(e, t) {}
                ,
                n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }
                ,
                n
            }),
            t.define("select2/dropdown/search", ["jquery"], function(e) {
                function t() {}
                return t.prototype.render = function(t) {
                    var n = t.call(this)
                      , i = this.options.get("translations").get("search")
                      , r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                    return this.$searchContainer = r,
                    this.$search = r.find("input"),
                    this.$search.prop("autocomplete", this.options.get("autocomplete")),
                    this.$search.attr("aria-label", i()),
                    n.prepend(r),
                    n
                }
                ,
                t.prototype.bind = function(t, n, i) {
                    var r = this
                      , o = n.id + "-results";
                    t.call(this, n, i),
                    this.$search.on("keydown", function(e) {
                        r.trigger("keypress", e),
                        r._keyUpPrevented = e.isDefaultPrevented()
                    }),
                    this.$search.on("input", function(t) {
                        e(this).off("keyup")
                    }),
                    this.$search.on("keyup input", function(e) {
                        r.handleSearch(e)
                    }),
                    n.on("open", function() {
                        r.$search.attr("tabindex", 0),
                        r.$search.attr("aria-controls", o),
                        r.$search.trigger("focus"),
                        window.setTimeout(function() {
                            r.$search.trigger("focus")
                        }, 0)
                    }),
                    n.on("close", function() {
                        r.$search.attr("tabindex", -1),
                        r.$search.removeAttr("aria-controls"),
                        r.$search.removeAttr("aria-activedescendant"),
                        r.$search.val(""),
                        r.$search.trigger("blur")
                    }),
                    n.on("focus", function() {
                        n.isOpen() || r.$search.trigger("focus")
                    }),
                    n.on("results:all", function(e) {
                        (null == e.query.term || "" === e.query.term) && (r.showSearch(e) ? r.$searchContainer[0].classList.remove("select2-search--hide") : r.$searchContainer[0].classList.add("select2-search--hide"))
                    }),
                    n.on("results:focus", function(e) {
                        e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                    })
                }
                ,
                t.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }
                ,
                t.prototype.showSearch = function(e, t) {
                    return !0
                }
                ,
                t
            }),
            t.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                    e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results),
                    e.call(this, t)
                }
                ,
                e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }),
                    t
                }
                ,
                e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                        var r = t[i];
                        this.placeholder.id === r.id && n.splice(i, 1)
                    }
                    return n
                }
                ,
                e
            }),
            t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                function t(e, t, n, i) {
                    this.lastParams = {},
                    e.call(this, t, n, i),
                    this.$loadingMore = this.createLoadingMore(),
                    this.loading = !1
                }
                return t.prototype.append = function(e, t) {
                    this.$loadingMore.remove(),
                    this.loading = !1,
                    e.call(this, t),
                    this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
                    this.loadMoreIfNeeded())
                }
                ,
                t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n),
                    t.on("query", function(e) {
                        i.lastParams = e,
                        i.loading = !0
                    }),
                    t.on("query:append", function(e) {
                        i.lastParams = e,
                        i.loading = !0
                    }),
                    this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                }
                ,
                t.prototype.loadMoreIfNeeded = function() {
                    var t = e.contains(document.documentElement, this.$loadingMore[0]);
                    !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore()
                }
                ,
                t.prototype.loadMore = function() {
                    this.loading = !0;
                    var t = e.extend({}, {
                        page: 1
                    }, this.lastParams);
                    t.page++,
                    this.trigger("query:append", t)
                }
                ,
                t.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }
                ,
                t.prototype.createLoadingMore = function() {
                    var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>')
                      , n = this.options.get("translations").get("loadingMore");
                    return t.html(n(this.lastParams)),
                    t
                }
                ,
                t
            }),
            t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                function n(t, n, i) {
                    this.$dropdownParent = e(i.get("dropdownParent") || document.body),
                    t.call(this, n, i)
                }
                return n.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n),
                    t.on("open", function() {
                        i._showDropdown(),
                        i._attachPositioningHandler(t),
                        i._bindContainerResultHandlers(t)
                    }),
                    t.on("close", function() {
                        i._hideDropdown(),
                        i._detachPositioningHandler(t)
                    }),
                    this.$dropdownContainer.on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                }
                ,
                n.prototype.destroy = function(e) {
                    e.call(this),
                    this.$dropdownContainer.remove()
                }
                ,
                n.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")),
                    t[0].classList.remove("select2"),
                    t[0].classList.add("select2-container--open"),
                    t.css({
                        position: "absolute",
                        top: -999999
                    }),
                    this.$container = n
                }
                ,
                n.prototype.render = function(t) {
                    var n = e("<span></span>")
                      , i = t.call(this);
                    return n.append(i),
                    this.$dropdownContainer = n,
                    n
                }
                ,
                n.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }
                ,
                n.prototype._bindContainerResultHandlers = function(e, t) {
                    if (!this._containerResultsHandlersBound) {
                        var n = this;
                        t.on("results:all", function() {
                            n._positionDropdown(),
                            n._resizeDropdown()
                        }),
                        t.on("results:append", function() {
                            n._positionDropdown(),
                            n._resizeDropdown()
                        }),
                        t.on("results:message", function() {
                            n._positionDropdown(),
                            n._resizeDropdown()
                        }),
                        t.on("select", function() {
                            n._positionDropdown(),
                            n._resizeDropdown()
                        }),
                        t.on("unselect", function() {
                            n._positionDropdown(),
                            n._resizeDropdown()
                        }),
                        this._containerResultsHandlersBound = !0
                    }
                }
                ,
                n.prototype._attachPositioningHandler = function(n, i) {
                    var r = this
                      , o = "scroll.select2." + i.id
                      , s = "resize.select2." + i.id
                      , a = "orientationchange.select2." + i.id
                      , l = this.$container.parents().filter(t.hasScroll);
                    l.each(function() {
                        t.StoreData(this, "select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop()
                        })
                    }),
                    l.on(o, function(n) {
                        var i = t.GetData(this, "select2-scroll-position");
                        e(this).scrollTop(i.y)
                    }),
                    e(window).on(o + " " + s + " " + a, function(e) {
                        r._positionDropdown(),
                        r._resizeDropdown()
                    })
                }
                ,
                n.prototype._detachPositioningHandler = function(n, i) {
                    var r = "scroll.select2." + i.id
                      , o = "resize.select2." + i.id
                      , s = "orientationchange.select2." + i.id;
                    this.$container.parents().filter(t.hasScroll).off(r),
                    e(window).off(r + " " + o + " " + s)
                }
                ,
                n.prototype._positionDropdown = function() {
                    var t = e(window)
                      , n = this.$dropdown[0].classList.contains("select2-dropdown--above")
                      , i = this.$dropdown[0].classList.contains("select2-dropdown--below")
                      , r = null
                      , o = this.$container.offset();
                    o.bottom = o.top + this.$container.outerHeight(!1);
                    var s = {
                        height: this.$container.outerHeight(!1)
                    };
                    s.top = o.top,
                    s.bottom = o.top + s.height;
                    var a = {
                        height: this.$dropdown.outerHeight(!1)
                    }
                      , l = {
                        top: t.scrollTop(),
                        bottom: t.scrollTop() + t.height()
                    }
                      , c = l.top < o.top - a.height
                      , u = l.bottom > o.bottom + a.height
                      , d = {
                        left: o.left,
                        top: s.bottom
                    }
                      , p = this.$dropdownParent;
                    "static" === p.css("position") && (p = p.offsetParent());
                    var f = {
                        top: 0,
                        left: 0
                    };
                    (e.contains(document.body, p[0]) || p[0].isConnected) && (f = p.offset()),
                    d.top -= f.top,
                    d.left -= f.left,
                    n || i || (r = "below"),
                    u || !c || n ? !c && u && n && (r = "below") : r = "above",
                    ("above" == r || n && "below" !== r) && (d.top = s.top - f.top - a.height),
                    null != r && (this.$dropdown[0].classList.remove("select2-dropdown--below"),
                    this.$dropdown[0].classList.remove("select2-dropdown--above"),
                    this.$dropdown[0].classList.add("select2-dropdown--" + r),
                    this.$container[0].classList.remove("select2-container--below"),
                    this.$container[0].classList.remove("select2-container--above"),
                    this.$container[0].classList.add("select2-container--" + r)),
                    this.$dropdownContainer.css(d)
                }
                ,
                n.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                    e.position = "relative",
                    e.width = "auto"),
                    this.$dropdown.css(e)
                }
                ,
                n.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent),
                    this._positionDropdown(),
                    this._resizeDropdown()
                }
                ,
                n
            }),
            t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                    this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                    e.call(this, t, n, i)
                }
                return e.prototype.showSearch = function(e, t) {
                    return !(function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.children ? n += e(r.children) : n++
                        }
                        return n
                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                }
                ,
                e
            }),
            t.define("select2/dropdown/selectOnClose", ["../utils"], function(e) {
                function t() {}
                return t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n),
                    t.on("close", function(e) {
                        i._handleSelectOnClose(e)
                    })
                }
                ,
                t.prototype._handleSelectOnClose = function(t, n) {
                    if (n && null != n.originalSelect2Event) {
                        var i = n.originalSelect2Event;
                        if ("select" === i._type || "unselect" === i._type)
                            return
                    }
                    var r = this.getHighlightedResults();
                    if (!(r.length < 1)) {
                        var o = e.GetData(r[0], "data");
                        null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                            data: o
                        })
                    }
                }
                ,
                t
            }),
            t.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n),
                    t.on("select", function(e) {
                        i._selectTriggered(e)
                    }),
                    t.on("unselect", function(e) {
                        i._selectTriggered(e)
                    })
                }
                ,
                e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    })
                }
                ,
                e
            }),
            t.define("select2/dropdown/dropdownCss", ["../utils"], function(e) {
                function t() {}
                return t.prototype.render = function(t) {
                    var n = t.call(this)
                      , i = this.options.get("dropdownCssClass") || "";
                    return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                    e.copyNonInternalCssClasses(n[0], this.$element[0])),
                    n.addClass(i),
                    n
                }
                ,
                t
            }),
            t.define("select2/dropdown/tagsSearchHighlight", ["../utils"], function(e) {
                function t() {}
                return t.prototype.highlightFirstItem = function(t) {
                    var n = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
                    if (n.length > 0) {
                        var i = n.first()
                          , r = e.GetData(i[0], "data").element;
                        if (r && r.getAttribute && "true" === r.getAttribute("data-select2-tag")) {
                            i.trigger("mouseenter");
                            return
                        }
                    }
                    t.call(this)
                }
                ,
                t
            }),
            t.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum
                          , n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"),
                        n
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"),
                        t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    },
                    removeAllItems: function() {
                        return "Remove all items"
                    },
                    removeItem: function() {
                        return "Remove item"
                    },
                    search: function() {
                        return "Search"
                    }
                }
            }),
            t.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], function(e, t, n, i, r, o, s, a, l, c, u, d, p, f, h, g, m, v, y, b, _, x, w, E, A, T, C, S, D, k, O) {
                function L() {
                    this.reset()
                }
                return L.prototype.apply = function(u) {
                    if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter && (null != u.ajax ? u.dataAdapter = h : null != u.data ? u.dataAdapter = f : u.dataAdapter = p,
                    u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)),
                    u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)),
                    u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)),
                    u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)),
                    (null != u.tokenSeparators || null != u.tokenizer) && (u.dataAdapter = c.Decorate(u.dataAdapter, m))),
                    null == u.resultsAdapter && (u.resultsAdapter = t,
                    null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, E)),
                    null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, w)),
                    u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)),
                    u.tags && (u.resultsAdapter = c.Decorate(u.resultsAdapter, k))),
                    null == u.dropdownAdapter) {
                        if (u.multiple)
                            u.dropdownAdapter = _;
                        else {
                            var d = c.Decorate(_, x);
                            u.dropdownAdapter = d
                        }
                        0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)),
                        u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)),
                        null != u.dropdownCssClass && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, D)),
                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, A)
                    }
                    null == u.selectionAdapter && (u.multiple ? u.selectionAdapter = i : u.selectionAdapter = n,
                    null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)),
                    u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)),
                    u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)),
                    null != u.selectionCssClass && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)),
                    u.selectionAdapter = c.Decorate(u.selectionAdapter, l)),
                    u.language = this._resolveLanguage(u.language),
                    u.language.push("en");
                    for (var O = [], L = 0; L < u.language.length; L++) {
                        var j = u.language[L];
                        -1 === O.indexOf(j) && O.push(j)
                    }
                    return u.language = O,
                    u.translations = this._processTranslations(u.language, u.debug),
                    u
                }
                ,
                L.prototype.reset = function() {
                    function t(e) {
                        return e.replace(/[^\u0000-\u007E]/g, function(e) {
                            return d[e] || e
                        })
                    }
                    this.defaults = {
                        amdLanguageBase: "./i18n/",
                        autocomplete: "off",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: c.escapeMarkup,
                        language: {},
                        matcher: function n(i, r) {
                            if (null == i.term || "" === i.term.trim())
                                return r;
                            if (r.children && r.children.length > 0) {
                                for (var o = e.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--)
                                    null == n(i, r.children[s]) && o.children.splice(s, 1);
                                return o.children.length > 0 ? o : n(i, o)
                            }
                            var a = t(r.text).toUpperCase()
                              , l = t(i.term).toUpperCase();
                            return a.indexOf(l) > -1 ? r : null
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        scrollAfterSelect: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }
                ,
                L.prototype.applyFromElement = function(e, t) {
                    var n = e.language
                      , i = this.defaults.language
                      , r = t.prop("lang")
                      , o = t.closest("[lang]").prop("lang")
                      , s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
                    return e.language = s,
                    e
                }
                ,
                L.prototype._resolveLanguage = function(t) {
                    if (!t || e.isEmptyObject(t))
                        return [];
                    if (e.isPlainObject(t))
                        return [t];
                    n = Array.isArray(t) ? t : [t];
                    for (var n, i = [], r = 0; r < n.length; r++)
                        if (i.push(n[r]),
                        "string" == typeof n[r] && n[r].indexOf("-") > 0) {
                            var o = n[r].split("-")[0];
                            i.push(o)
                        }
                    return i
                }
                ,
                L.prototype._processTranslations = function(t, n) {
                    for (var i = new u, r = 0; r < t.length; r++) {
                        var o = new u
                          , s = t[r];
                        if ("string" == typeof s)
                            try {
                                o = u.loadPath(s)
                            } catch (e) {
                                try {
                                    s = this.defaults.amdLanguageBase + s,
                                    o = u.loadPath(s)
                                } catch (e) {
                                    n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.')
                                }
                            }
                        else
                            o = e.isPlainObject(s) ? new u(s) : s;
                        i.extend(o)
                    }
                    return i
                }
                ,
                L.prototype.set = function(t, n) {
                    var i = e.camelCase(t)
                      , r = {};
                    r[i] = n;
                    var o = c._convertData(r);
                    e.extend(!0, this.defaults, o)
                }
                ,
                new L
            }),
            t.define("select2/options", ["jquery", "./defaults", "./utils"], function(e, t, n) {
                function i(e, n) {
                    this.options = e,
                    null != n && this.fromElement(n),
                    null != n && (this.options = t.applyFromElement(this.options, n)),
                    this.options = t.apply(this.options)
                }
                return i.prototype.fromElement = function(t) {
                    var i = ["select2"];
                    null == this.options.multiple && (this.options.multiple = t.prop("multiple")),
                    null == this.options.disabled && (this.options.disabled = t.prop("disabled")),
                    null == this.options.autocomplete && t.prop("autocomplete") && (this.options.autocomplete = t.prop("autocomplete")),
                    null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                    t.prop("disabled", this.options.disabled),
                    t.prop("multiple", this.options.multiple),
                    n.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                    n.StoreData(t[0], "data", n.GetData(t[0], "select2Tags")),
                    n.StoreData(t[0], "tags", !0)),
                    n.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                    t.attr("ajax--url", n.GetData(t[0], "ajaxUrl")),
                    n.StoreData(t[0], "ajax-Url", n.GetData(t[0], "ajaxUrl")));
                    var r = {};
                    function o(e, t) {
                        return t.toUpperCase()
                    }
                    for (var s = 0; s < t[0].attributes.length; s++) {
                        var a = t[0].attributes[s].name
                          , l = "data-";
                        if (a.substr(0, l.length) == l) {
                            var c = a.substring(l.length)
                              , u = n.GetData(t[0], c);
                            r[c.replace(/-([a-z])/g, o)] = u
                        }
                    }
                    e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset && (r = e.extend(!0, {}, t[0].dataset, r));
                    var d = e.extend(!0, {}, n.GetData(t[0]), r);
                    for (var p in d = n._convertData(d))
                        i.indexOf(p) > -1 || (e.isPlainObject(this.options[p]) ? e.extend(this.options[p], d[p]) : this.options[p] = d[p]);
                    return this
                }
                ,
                i.prototype.get = function(e) {
                    return this.options[e]
                }
                ,
                i.prototype.set = function(e, t) {
                    this.options[e] = t
                }
                ,
                i
            }),
            t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
                var r = function(e, i) {
                    null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(),
                    this.$element = e,
                    this.id = this._generateId(e),
                    i = i || {},
                    this.options = new t(i,e),
                    r.__super__.constructor.call(this);
                    var o = e.attr("tabindex") || 0;
                    n.StoreData(e[0], "old-tabindex", o),
                    e.attr("tabindex", "-1");
                    var s = this.options.get("dataAdapter");
                    this.dataAdapter = new s(e,this.options);
                    var a = this.render();
                    this._placeContainer(a);
                    var l = this.options.get("selectionAdapter");
                    this.selection = new l(e,this.options),
                    this.$selection = this.selection.render(),
                    this.selection.position(this.$selection, a);
                    var c = this.options.get("dropdownAdapter");
                    this.dropdown = new c(e,this.options),
                    this.$dropdown = this.dropdown.render(),
                    this.dropdown.position(this.$dropdown, a);
                    var u = this.options.get("resultsAdapter");
                    this.results = new u(e,this.options,this.dataAdapter),
                    this.$results = this.results.render(),
                    this.results.position(this.$results, this.$dropdown);
                    var d = this;
                    this._bindAdapters(),
                    this._registerDomEvents(),
                    this._registerDataEvents(),
                    this._registerSelectionEvents(),
                    this._registerDropdownEvents(),
                    this._registerResultsEvents(),
                    this._registerEvents(),
                    this.dataAdapter.current(function(e) {
                        d.trigger("selection:update", {
                            data: e
                        })
                    }),
                    e[0].classList.add("select2-hidden-accessible"),
                    e.attr("aria-hidden", "true"),
                    this._syncAttributes(),
                    n.StoreData(e[0], "select2", this),
                    e.data("select2", this)
                };
                return n.Extend(r, n.Observable),
                r.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }
                ,
                r.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }
                ,
                r.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var r = e.outerWidth(!1);
                        return r <= 0 ? "auto" : r + "px"
                    }
                    if ("style" == t) {
                        var o = e.attr("style");
                        if ("string" != typeof o)
                            return null;
                        for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                            var c = s[a].replace(/\s/g, "").match(n);
                            if (null !== c && c.length >= 1)
                                return c[1]
                        }
                        return null
                    }
                    return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
                }
                ,
                r.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container),
                    this.selection.bind(this, this.$container),
                    this.dropdown.bind(this, this.$container),
                    this.results.bind(this, this.$container)
                }
                ,
                r.prototype._registerDomEvents = function() {
                    var e = this;
                    this.$element.on("change.select2", function() {
                        e.dataAdapter.current(function(t) {
                            e.trigger("selection:update", {
                                data: t
                            })
                        })
                    }),
                    this.$element.on("focus.select2", function(t) {
                        e.trigger("focus", t)
                    }),
                    this._syncA = n.bind(this._syncAttributes, this),
                    this._syncS = n.bind(this._syncSubtree, this),
                    this._observer = new window.MutationObserver(function(t) {
                        e._syncA(),
                        e._syncS(t)
                    }
                    ),
                    this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })
                }
                ,
                r.prototype._registerDataEvents = function() {
                    var e = this;
                    this.dataAdapter.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }
                ,
                r.prototype._registerSelectionEvents = function() {
                    var e = this
                      , t = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        e.toggleDropdown()
                    }),
                    this.selection.on("focus", function(t) {
                        e.focus(t)
                    }),
                    this.selection.on("*", function(n, i) {
                        -1 === t.indexOf(n) && e.trigger(n, i)
                    })
                }
                ,
                r.prototype._registerDropdownEvents = function() {
                    var e = this;
                    this.dropdown.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }
                ,
                r.prototype._registerResultsEvents = function() {
                    var e = this;
                    this.results.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }
                ,
                r.prototype._registerEvents = function() {
                    var e = this;
                    this.on("open", function() {
                        e.$container[0].classList.add("select2-container--open")
                    }),
                    this.on("close", function() {
                        e.$container[0].classList.remove("select2-container--open")
                    }),
                    this.on("enable", function() {
                        e.$container[0].classList.remove("select2-container--disabled")
                    }),
                    this.on("disable", function() {
                        e.$container[0].classList.add("select2-container--disabled")
                    }),
                    this.on("blur", function() {
                        e.$container[0].classList.remove("select2-container--focus")
                    }),
                    this.on("query", function(t) {
                        e.isOpen() || e.trigger("open", {}),
                        this.dataAdapter.query(t, function(n) {
                            e.trigger("results:all", {
                                data: n,
                                query: t
                            })
                        })
                    }),
                    this.on("query:append", function(t) {
                        this.dataAdapter.query(t, function(n) {
                            e.trigger("results:append", {
                                data: n,
                                query: t
                            })
                        })
                    }),
                    this.on("keypress", function(t) {
                        var n = t.which;
                        e.isOpen() ? n === i.ESC || n === i.UP && t.altKey ? (e.close(t),
                        t.preventDefault()) : n === i.ENTER || n === i.TAB ? (e.trigger("results:select", {}),
                        t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}),
                        t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}),
                        t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}),
                        t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(),
                        t.preventDefault())
                    })
                }
                ,
                r.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")),
                    this.isDisabled() ? (this.isOpen() && this.close(),
                    this.trigger("disable", {})) : this.trigger("enable", {})
                }
                ,
                r.prototype._isChangeMutation = function(e) {
                    var t = this;
                    if (e.addedNodes && e.addedNodes.length > 0) {
                        for (var n = 0; n < e.addedNodes.length; n++)
                            if (e.addedNodes[n].selected)
                                return !0
                    } else if (e.removedNodes && e.removedNodes.length > 0)
                        return !0;
                    else if (Array.isArray(e))
                        return e.some(function(e) {
                            return t._isChangeMutation(e)
                        });
                    return !1
                }
                ,
                r.prototype._syncSubtree = function(e) {
                    var t = this._isChangeMutation(e)
                      , n = this;
                    t && this.dataAdapter.current(function(e) {
                        n.trigger("selection:update", {
                            data: e
                        })
                    })
                }
                ,
                r.prototype.trigger = function(e, t) {
                    var n = r.__super__.trigger
                      , i = {
                        open: "opening",
                        close: "closing",
                        select: "selecting",
                        unselect: "unselecting",
                        clear: "clearing"
                    };
                    if (void 0 === t && (t = {}),
                    e in i) {
                        var o = i[e]
                          , s = {
                            prevented: !1,
                            name: e,
                            args: t
                        };
                        if (n.call(this, o, s),
                        s.prevented) {
                            t.prevented = !0;
                            return
                        }
                    }
                    n.call(this, e, t)
                }
                ,
                r.prototype.toggleDropdown = function() {
                    this.isDisabled() || (this.isOpen() ? this.close() : this.open())
                }
                ,
                r.prototype.open = function() {
                    !this.isOpen() && (this.isDisabled() || this.trigger("query", {}))
                }
                ,
                r.prototype.close = function(e) {
                    this.isOpen() && this.trigger("close", {
                        originalEvent: e
                    })
                }
                ,
                r.prototype.isEnabled = function() {
                    return !this.isDisabled()
                }
                ,
                r.prototype.isDisabled = function() {
                    return this.options.get("disabled")
                }
                ,
                r.prototype.isOpen = function() {
                    return this.$container[0].classList.contains("select2-container--open")
                }
                ,
                r.prototype.hasFocus = function() {
                    return this.$container[0].classList.contains("select2-container--focus")
                }
                ,
                r.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"),
                    this.trigger("focus", {}))
                }
                ,
                r.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                    (null == e || 0 === e.length) && (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }
                ,
                r.prototype.data = function() {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var e = [];
                    return this.dataAdapter.current(function(t) {
                        e = t
                    }),
                    e
                }
                ,
                r.prototype.val = function(e) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                    null == e || 0 === e.length)
                        return this.$element.val();
                    var t = e[0];
                    Array.isArray(t) && (t = t.map(function(e) {
                        return e.toString()
                    })),
                    this.$element.val(t).trigger("input").trigger("change")
                }
                ,
                r.prototype.destroy = function() {
                    n.RemoveData(this.$container[0]),
                    this.$container.remove(),
                    this._observer.disconnect(),
                    this._observer = null,
                    this._syncA = null,
                    this._syncS = null,
                    this.$element.off(".select2"),
                    this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                    this.$element[0].classList.remove("select2-hidden-accessible"),
                    this.$element.attr("aria-hidden", "false"),
                    n.RemoveData(this.$element[0]),
                    this.$element.removeData("select2"),
                    this.dataAdapter.destroy(),
                    this.selection.destroy(),
                    this.dropdown.destroy(),
                    this.results.destroy(),
                    this.dataAdapter = null,
                    this.selection = null,
                    this.dropdown = null,
                    this.results = null
                }
                ,
                r.prototype.render = function() {
                    var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return t.attr("dir", this.options.get("dir")),
                    this.$container = t,
                    this.$container[0].classList.add("select2-container--" + this.options.get("theme")),
                    n.StoreData(t[0], "element", this.$element),
                    t
                }
                ,
                r
            }),
            t.define("jquery-mousewheel", ["jquery"], function(e) {
                return e
            }),
            t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(e, t, n, i, r) {
                if (null == e.fn.select2) {
                    var o = ["open", "close", "destroy"];
                    e.fn.select2 = function(t) {
                        if ("object" == typeof (t = t || {}))
                            return this.each(function() {
                                var i = e.extend(!0, {}, t);
                                new n(e(this),i)
                            }),
                            this;
                        if ("string" == typeof t) {
                            var i, s = Array.prototype.slice.call(arguments, 1);
                            return (this.each(function() {
                                var e = r.GetData(this, "select2");
                                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                                i = e[t].apply(e, s)
                            }),
                            o.indexOf(t) > -1) ? this : i
                        }
                        throw Error("Invalid arguments for Select2: " + t)
                    }
                }
                return null == e.fn.select2.defaults && (e.fn.select2.defaults = i),
                n
            }),
            {
                define: t.define,
                require: t.require
            }
        }()
          , n = t.require("jquery.select2");
        return e.fn.select2.amd = t,
        n
    }),
    n(iz)(n(iW)),
    n(iW).fn.select2.defaults.set("allowClear", !0),
    n(iW).fn.select2.defaults.set("debug", !1),
    n(iW).fn.select2.defaults.set("dropdownCssClass", ":all:"),
    n(iW).fn.select2.defaults.set("minimumInputLength", 2),
    n(iW).fn.select2.defaults.set("placeholder", ""),
    n(iW).fn.select2.defaults.set("selectionCssClass", ":all:"),
    n(iW).fn.select2.defaults.set("theme", "bootstrap-5"),
    n(iW).fn.select2.defaults.set("width", "off"),
    n(iW).fn.select2.defaults.set("escapeMarkup", function(e) {
        return e
    }),
    window.setupSelect2Field = function(e) {
        let t = e.data("select2-ajax-url")
          , i = e.data("max-entries")
          , r = e.data("min-search-length")
          , o = e.data("result-key")
          , s = e.data("pre");
        s && s.forEach(t=>e.append(new Option(t.text,t.id,!1,t.selected))),
        template_modify = e.hasClass("tz-select") ? iB : e.hasClass("search-select") ? iU : void 0,
        n(iW)(document).on("select2:open", ()=>{
            document.querySelector(".select2-container--open .select2-search__field").focus()
        }
        ),
        n(iW)(document).on("mouseenter", ".select2-selection__rendered", function() {
            n(iW)(this).removeAttr("title")
        }),
        e.select2({
            multiple: 1 !== i,
            maximumSelectionSize: i,
            minimumInputLength: r,
            templateResult: template_modify,
            templateSelection: template_modify,
            ajax: t ? {
                url: t,
                dataType: "json",
                delay: 250,
                data: function(e) {
                    return {
                        q: e.term,
                        p: e.page || 1
                    }
                },
                processResults: function(e) {
                    return o && (e = e.map(e=>({
                        ...e,
                        id: e[o]
                    }))),
                    {
                        results: e,
                        pagination: {
                            more: 10 === e.length
                        }
                    }
                }
            } : void 0
        })
    }
    ,
    n(iW)(document).ready(function() {
        n(iW)(".select2-field").not(".select2-hidden-accessible").each(function() {
            n(iW)(this).closest(".template").length > 0 || setupSelect2Field(n(iW)(this))
        })
    });
    let iV = n(ic).withAttributes({
        sameSite: "strict"
    })
      , iG = "doc-ptsize-max";
    function iQ(e) {
        document.documentElement.style.setProperty(`--${iG}`, `${e}pt`),
        localStorage.setItem(iG, e)
    }
    let iY = localStorage.getItem(iG);
    iQ(iY ? Math.min(Math.max(7, iY), 16) : 12),
    document.addEventListener("DOMContentLoaded", function(e) {
        let t;
        document.getElementById("ptsize").oninput = function() {
            iQ(this.value)
        }
        ;
        let i = document.querySelectorAll("[title]:not([title=''])");
        [...i].map(e=>{
            let t = nx.getOrCreateInstance(e);
            e.addEventListener("click", n=>{
                t.hide(),
                e.blur()
            }
            )
        }
        );
        let r = document.getElementById("toc-nav")
          , o = document.querySelectorAll("#content :is(h2, h3, h4, h5, h6, .h2, .h3, .h4, .h5, .h6)");
        (function(e, t, i) {
            let r = Math.min(...Array.from(t).map(iF))
              , o = [e]
              , s = 0
              , a = 0;
            t.forEach(e=>{
                let t = iF(e) - r;
                if (t < s)
                    for (; t < s; ) {
                        let e = o.pop();
                        o[--s].appendChild(e)
                    }
                else
                    for (; t > s; )
                        o.push(function() {
                            let e = document.createElement("nav");
                            return e.classList.add("nav-pills", "ps-3", "flex-column"),
                            e
                        }()),
                        s++;
                let n = document.createElement("a");
                n.classList.add("nav-link", "ps-1", "d-flex", "hyphenate", i),
                e.id || (e.id = `autoid-${++a}`),
                n.href = `#${e.id}`;
                let l = e.innerText.split(/\s+/)
                  , c = "";
                if (l[0].includes(".") ? c = l.shift() : l.length > 1 && l[1].includes(".") && (c = (c = l.shift() + " " + l.shift()).replace(/\s*Appendix\s*/, "")),
                c) {
                    let e = document.createElement("div");
                    e.classList.add("pe-1"),
                    e.textContent = c,
                    n.appendChild(e)
                }
                let u = document.createElement("div");
                u.classList.add("text-break"),
                u.textContent = l.join(" "),
                n.appendChild(u),
                o[t].appendChild(n)
            }
            );
            for (var l = o.length - 1; l > 0; l--)
                o[l - 1].appendChild(o[l]);
            document.addEventListener("scroll", n(iu)(function() {
                let t = e.querySelectorAll(".active")
                  , n = [...t].pop();
                n && n.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                })
            }, 100))
        }
        )(r, o, ["py-0"]);
        let s = ["deftab", "reflinks"]
          , a = {
            sidebar: "on",
            deftab: "docinfo",
            htmlconf: "html",
            pagedeps: "reference",
            reflinks: "refsection"
        };
        document.querySelectorAll("#pref-tab-pane .btn-check").forEach(e=>{
            let t = e.id.replace("-radio", "")
              , n = s.includes(e.name) ? localStorage.getItem(e.name) : iV.get(e.name);
            (n === t || null === n && a[e.name] === t) && (e.checked = !0),
            e.addEventListener("click", n=>{
                s.includes(e.name) ? localStorage.setItem(e.name, t) : iV.set(e.name, t),
                window.location.reload()
            }
            )
        }
        );
        try {
            t = n2.getOrCreateInstance(`#${localStorage.getItem("deftab")}-tab`)
        } catch (e) {
            t = n2.getOrCreateInstance("#docinfo-tab")
        }
        t.show(),
        document.activeElement.blur(),
        "refsection" != localStorage.getItem("reflinks") && document.querySelectorAll("a[href^='#'].xref").forEach(e=>{
            let t = document.getElementById(e.hash.substring(1)).nextElementSibling;
            if (!t || "DD" != t.tagName || !t.closest(".references"))
                return;
            let n = t.querySelector("a:not([href='']:last-of-type)");
            if (n) {
                let t = n.href.match(/(rfc\d+)$/i);
                if (t) {
                    let n = e.href.match(/^(.*\/)rfc\d+.*$/i);
                    if (n) {
                        e.href = n[1] + t[1];
                        return
                    }
                }
                e.href = n.href
            }
        }
        )
    })
}
)();
//# sourceMappingURL=document_html.js.map
