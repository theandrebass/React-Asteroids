(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    16: function(e, t, n) {
        e.exports = n(25)
    },
    21: function(e, t, n) {},
    24: function(e, t, n) {},
    25: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0),
            a = n.n(i),
            r = n(12),
            o = n.n(r),
            s = (n(21), n(6)),
            c = n(1),
            l = n(13),
            h = n(3),
            d = n(4),
            u = n(14),
            f = n(2),
            v = n(9),
            y = n(7),
            g = n(5),
            p = n(8);
        var b = function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object(d.a)(this, e),
                this.id = Object(c.uniqueId)(),
                this.dead = !1,
                this.x = void 0,
                this.y = void 0,
                this.angle = void 0,
                this.velocity = void 0,
                this.radius = void 0,
                this.wraps = !0,
                this.maxVelocity = 10,
                this.friction = 0,
                this.wrap = function(e, n) {
                    var i = t.radius,
                        a = j.width,
                        r = j.height;
                    return e - i > a && (e = -i), e + i < 0 && (e = a + i), n - i > r && (n = -i), n + i < 0 && (n = r + i), [e, n]
                },
                this.offScreen = function(e, n) {
                    var i = t.radius,
                        a = j.width,
                        r = j.height;
                    return e - i > a || e + i < 0 || n - i > r || n + i < 0
                },
                this.getOffsetPoint = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.angle.get(),
                        i = t.x,
                        a = t.y;
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        return n = n * Math.PI / 180, [i * Math.cos(n) + e, i * Math.sin(n) + t]
                    }(i.get(), a.get(), n, e)
                },
                this.hitTest = function(e, n) {
                    return Math.hypot(t.y.get() - n, t.x.get() - e) < t.radius
                },
                this.turn = function(e) {
                    "left" === e && t.angle.set(t.angle.get() - 4),
                    "right" === e && t.angle.set(t.angle.get() + 4)
                },
                this.accelerate = function() {
                    t.velocity < t.maxVelocity && (t.velocity += 1)
                },
                this.move = function() {
                    var e = t.wrap,
                        n = t.friction,
                        i = t.wraps,
                        a = t.x,
                        r = t.y,
                        o = t.velocity,
                        s = t.maxVelocity,
                        c = t.getOffsetPoint(o),
                        l = Object(h.a)(c, 2),
                        d = l[0],
                        u = l[1];
                    if (o > s && (t.velocity *= .98), n && (t.velocity *= 1 - n), i) {
                        var f = e(d, u),
                            v = Object(h.a)(f, 2);
                        d = v[0],
                        u = v[1]
                    } else
                        t.offScreen(d, u) && t.remove();
                    a.set(d),
                    r.set(u)
                },
                this.start = function() {},
                this.update = function() {},
                this.remove = function() {},
                this.render = function() {
                    t.dead || (t.move(), t.update())
                };
                var i = n.x,
                    a = void 0 === i ? 0 : i,
                    r = n.y,
                    o = void 0 === r ? 0 : r,
                    l = n.angle,
                    u = void 0 === l ? 0 : l,
                    f = n.velocity,
                    v = void 0 === f ? 0 : f,
                    y = n.radius,
                    g = void 0 === y ? 12 : y,
                    p = n.wraps,
                    b = void 0 === p || p;
                this.x = Object(s.b)(a),
                this.y = Object(s.b)(o),
                this.angle = Object(s.b)(u),
                this.radius = g,
                this.velocity = v,
                this.wraps = b
            },
            m = function(e) {
                function t() {
                    var e,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(d.a)(this, t), (e = Object(v.a)(this, Object(y.a)(t).call(this, n))).radius = 2.5, e.maxVelocity = 12, e.wraps = !1, e.update = function() {
                        var t = !1;
                        E.asteroids.forEach(function(n) {
                            t || n.hitTest(e.x.get(), e.y.get()) && (t = !0, E.hits += 1, n.break())
                        }),
                        t && e.remove()
                    }, e.remove = function() {
                        E.shots += 1,
                        E.bullets.delete(Object(g.a)(e))
                    }, e
                }
                return Object(p.a)(t, e), t
            }(b),
            O = function(e) {
                function t() {
                    var e,
                        n;
                    Object(d.a)(this, t);
                    for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++)
                        a[r] = arguments[r];
                    return (n = Object(v.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(a)))).dead = !1, n.friction = .08, n.maxVelocity = 6, n.start = function() {
                        E.inputs.set("w", n.accelerate),
                        E.inputs.set("a", function() {
                            return n.turn("left")
                        }),
                        E.inputs.set("d", function() {
                            return n.turn("right")
                        }),
                        E.presses.set(" ", n.shoot)
                    }, n.update = function() {
                        n.dead || (E.asteroids.forEach(function(e) {
                            n.dead || e.hitTest(n.x.get(), n.y.get()) && (n.dead = !0, e.break())
                        }), n.dead && E.handlePlayerDeath())
                    }, n.shoot = function() {
                        var e = Object(g.a)(n),
                            t = e.angle,
                            i = e.velocity;
                        if (!e.dead) {
                            var a = n.getOffsetPoint(n.radius + 3),
                                r = Object(h.a)(a, 2),
                                o = r[0],
                                s = r[1];
                            E.bullets.add(new m({
                                x: o,
                                y: s,
                                angle: t.get(),
                                velocity: i + 10
                            }))
                        }
                    }, n
                }
                return Object(p.a)(t, e), t
            }(b),
            w = function(e) {
                function t() {
                    var e,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(d.a)(this, t), (e = Object(v.a)(this, Object(y.a)(t).call(this, Object(c.defaults)(n, {
                        velocity: Object(c.random)(.2, .5),
                        angle: Object(c.random)(360),
                        radius: Object(c.random)(32, 114)
                    })))).break = function() {
                        if (e.remove(), e.radius > 32) {
                            var t = Object(c.random)(.25, .75);
                            E.asteroids.add(e.getChunk(t)),
                            E.asteroids.add(e.getChunk(1 - t))
                        }
                    }, e.getChunk = function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
                            i = Object(g.a)(e),
                            a = i.radius,
                            r = i.velocity,
                            o = e.getOffsetPoint(Object(c.random)(e.radius / 4, e.radius / 2), 360 * Math.random()),
                            s = Object(h.a)(o, 2);
                        return new t({
                            x: s[0],
                            y: s[1],
                            radius: a * n,
                            velocity: 1.5 * r
                        })
                    }, e.update = function() {}, e.remove = function() {
                        E.asteroids.delete(Object(g.a)(e))
                    }, e
                }
                return Object(p.a)(t, e), t
            }(b),
            j = {
                width: 600,
                height: 400
            },
            x = function() {
                function e() {
                    var t = this;
                    Object(d.a)(this, e),
                    this.presses = new Map,
                    this.inputs = new Map,
                    this.keyBuffer = new Set([]),
                    this.handleKeyPress = function(e) {
                        var n = t.presses.get(e.key);
                        n && n()
                    },
                    this.handleKeyDown = function(e) {
                        t.keyBuffer.add(e.key)
                    },
                    this.handleKeyUp = function(e) {
                        t.keyBuffer.delete(e.key)
                    },
                    this.handleKey = function(e) {
                        var n = t.inputs.get(e);
                        n && n()
                    },
                    this.lives = 3,
                    this.shots = 0,
                    this.hits = 0,
                    this.ship = void 0,
                    this.bullets = void 0,
                    this.asteroids = void 0,
                    this.start = function() {
                        t.ship.start(),
                        t.bullets.forEach(function(e) {
                            return e.start()
                        }),
                        t.asteroids.forEach(function(e) {
                            return e.start()
                        }),
                        t.loop()
                    },
                    this.handlePlayerDeath = function() {
                        t.lives -= 1,
                        t.lives >= 0 && t.resetLevel()
                    },
                    this.restart = function() {
                        t.lives = 3,
                        t.resetLevel()
                    },
                    this.resetLevel = function() {
                        t.bullets = new Set([]),
                        t.asteroids = new Set(Object(c.range)(4).map(function(e) {
                            var n = t.ship.getOffsetPoint(Object(c.random)(128, 250, !1), Object(c.random)(360)),
                                i = Object(h.a)(n, 2),
                                a = i[0],
                                r = i[1];
                            return new w({
                                x: a,
                                y: r
                            })
                        })),
                        t.ship.dead = !1,
                        t.ship.x.set(j.width / 2),
                        t.ship.y.set(j.height / 2),
                        t.ship.velocity = 0
                    },
                    this.loop = function() {
                        t.keyBuffer.forEach(t.handleKey),
                        t.ship.render(),
                        t.bullets.forEach(function(e) {
                            return e.render()
                        }),
                        t.asteroids.forEach(function(e) {
                            return e.render()
                        }),
                        window.requestAnimationFrame(t.loop),
                        t.asteroids.size <= 0 && t.resetLevel()
                    },
                    window.addEventListener("keypress", this.handleKeyPress),
                    window.addEventListener("keydown", this.handleKeyDown),
                    window.addEventListener("keyup", this.handleKeyUp),
                    this.ship = new O({
                        x: j.width / 2,
                        y: j.height / 2
                    }),
                    this.bullets = new Set([]),
                    this.asteroids = new Set(Object(c.range)(4).map(function(e) {
                        var n = t.ship.getOffsetPoint(Object(c.random)(128, 250, !1), Object(c.random)(360)),
                            i = Object(h.a)(n, 2),
                            a = i[0],
                            r = i[1];
                        return new w({
                            x: a,
                            y: r
                        })
                    }))
                }
                return Object(u.a)(e, [{
                    key: "accuracy",
                    get: function() {
                        return this.hits / this.shots
                    }
                }]), e
            }();
        Object(f.c)(x, {
            asteroids: f.e,
            bullets: f.e,
            lives: f.e,
            hits: f.e,
            shots: f.e,
            accuracy: f.b
        });
        var E = new x,
            k = n(15),
            M = function(e) {
                var t = e.x,
                    n = e.y,
                    a = e.angle,
                    r = e.children,
                    o = Object(k.a)(e, ["x", "y", "angle", "children"]);
                return i.createElement(s.a.div, Object.assign({
                    style: {
                        x: t,
                        y: n,
                        rotate: a,
                        position: "relative",
                        width: 0,
                        height: 0,
                        display: "flex",
                        placeItems: "center",
                        placeContent: "center"
                    }
                }, o), r)
            },
            P = function(e) {
                var t = e.x,
                    n = e.y,
                    a = e.angle,
                    r = e.radius,
                    o = void 0 === r ? 100 : r,
                    s = i.useMemo(function() {
                        var e = 3 + Math.floor(o / 3),
                            t = 360 / e,
                            n = Object(c.range)(e).map(function(e) {
                                var n = Object(c.random)(.82, 1) * o,
                                    i = e * t * Math.PI / 180;
                                return [n * Math.cos(i) + o, n * Math.sin(i) + o]
                            }),
                            i = Object(h.a)(n[0], 2),
                            a = i[0],
                            r = i[1];
                        return "M ".concat(a, ",").concat(r, " L ").concat(n.slice(1).map(function(e) {
                            return e.join(",")
                        }).join(" "), " Z")
                    }, [o]);
                return i.createElement(M, {
                    x: t,
                    y: n,
                    angle: a
                }, i.createElement("svg", {
                    viewBox: "0 0 ".concat(2 * o, " ").concat(2 * o),
                    style: {
                        width: 2 * o,
                        height: 2 * o,
                        position: "absolute"
                    }
                }, i.createElement("path", {
                    d: s,
                    fill: "none",
                    strokeWidth: 2,
                    stroke: "#41FF00"
                })))
            },
            F = function(e) {
                var t = e.x,
                    n = e.y,
                    a = e.angle,
                    r = e.radius;
                return i.createElement(M, {
                    x: t,
                    y: n,
                    angle: a
                }, i.createElement("svg", {
                    viewBox: "0 0 ".concat(2 * r, " ").concat(2 * r),
                    style: {
                        width: 2 * r,
                        height: 2 * r,
                        transform: "rotate(90deg)",
                        position: "absolute"
                    }
                }, i.createElement("path", {
                    d: "M ".concat(r, ",1 L ").concat(1.75 * r, ",").concat(1.5 * r, " ").concat(r, ",").concat(2 * r - 1, " ").concat(.25 * r, ",").concat(1.5 * r, " ").concat(r, ",1 Z"),
                    fill: "none",
                    strokeWidth: 2,
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                    stroke: "#41FF00"
                })))
            },
            C = function(e) {
                var t = e.x,
                    n = e.y,
                    a = e.angle,
                    r = e.radius;
                return i.createElement(M, {
                    x: t,
                    y: n,
                    angle: a
                }, i.createElement("div", {
                    style: {
                        position: "absolute",
                        height: 2 * r,
                        width: 2 * r,
                        borderRadius: "100%",
                        backgroundColor: "#41FF00"
                    }
                }))
            },
            L = function(e) {
                var t = e.onClick;
                return i.createElement("div", null, i.createElement("h1", null, "Game Over"), i.createElement("button", {
                    style: {
                        all: "unset"
                    },
                    onClick: t
                }, "Play Again"))
            },
            S = (n(24), Object(l.a)(function() {
                var e = E.asteroids,
                    t = E.bullets,
                    n = E.lives,
                    i = E.accuracy;
                a.a.useEffect(function() {
                    E.start()
                }, []);
                var r = a.a.useMemo(function() {
                    return Object(c.range)(100 - n).map(function(e) {
                        return a.a.createElement(s.a.div, {
                            style: {
                                position: "absolute",
                                x: Object(c.random)(0, j.width),
                                y: Object(c.random)(0, j.height),
                                height: Object(c.random)(1, 2),
                                width: Object(c.random)(1, 2),
                                backgroundColor: "#41ff02"
                            }
                        })
                    })
                }, [n]);
                return a.a.createElement("div", {
                    className: "App",
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100vw",
                        height: "100vh",
                        placeItems: "center",
                        placeContent: "center",
                        fontSize: 32,
                        color: "#41FF00",
                        fontFamily: "VT323, monospace",
                        backgroundColor: "#1e1f2c"
                    }
                }, a.a.createElement(s.a.div, {
                    style: {
                        height: j.height,
                        width: j.width,
                        border: "1px solid #41FF00",
                        overflow: "hidden",
                        position: "relative"
                    }
                }, r, n > 0 && a.a.createElement(F, {
                    x: E.ship.x,
                    y: E.ship.y,
                    angle: E.ship.angle,
                    radius: E.ship.radius
                }), Array.from(t).map(function(e, t) {
                    var n = e.id,
                        i = e.x,
                        r = e.y,
                        o = e.angle,
                        s = e.radius;
                    return a.a.createElement(C, {
                        key: n,
                        x: i,
                        y: r,
                        angle: o,
                        radius: s
                    })
                }), Array.from(e).map(function(e, t) {
                    var n = e.id,
                        i = e.x,
                        r = e.y,
                        o = e.angle,
                        s = e.radius;
                    return a.a.createElement(P, {
                        key: n,
                        x: i,
                        y: r,
                        angle: o,
                        radius: s
                    })
                }), a.a.createElement("div", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%"
                    }
                }, i ? (100 * i).toFixed() + "%" : "100%", " |", " ", n <= 0 ? a.a.createElement(L, {
                    onClick: E.restart
                }) : n)), a.a.createElement("div", {
                    style: {
                        padding: 16
                    }
                }, "W thrust | A left | D right | SPACE shoot"), a.a.createElement("div", {
                    style: {
                        padding: 16
                    }
                }, a.a.createElement("a", {
                    href: "https://twitter.com/onlyandrebass"
                }, "@onlyandrebass")))
            }));
        o.a.render(a.a.createElement(S, null), document.getElementById("root"))
    }
}, [[16, 1, 2]]]);
//# sourceMappingURL=main.1cde0180.chunk.js.map