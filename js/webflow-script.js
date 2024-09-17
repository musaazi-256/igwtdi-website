/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var Wv = Object.create;
  var Pn = Object.defineProperty;
  var zv = Object.getOwnPropertyDescriptor;
  var Kv = Object.getOwnPropertyNames;
  var jv = Object.getPrototypeOf,
    Yv = Object.prototype.hasOwnProperty;
  var Ee = (e, t) => () => (e && (t = e((e = 0))), t);
  var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Le = (e, t) => {
      for (var n in t) Pn(e, n, { get: t[n], enumerable: !0 });
    },
    ga = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of Kv(t))
          !Yv.call(e, i) &&
            i !== n &&
            Pn(e, i, {
              get: () => t[i],
              enumerable: !(r = zv(t, i)) || r.enumerable,
            });
      return e;
    };
  var ce = (e, t, n) => (
      (n = e != null ? Wv(jv(e)) : {}),
      ga(
        t || !e || !e.__esModule
          ? Pn(n, "default", { value: e, enumerable: !0 })
          : n,
        e
      )
    ),
    Ye = (e) => ga(Pn({}, "__esModule", { value: !0 }), e);
  var jr = d(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, y) {
        var b = new T.Bare();
        return b.init(l, y);
      }
      function n(l) {
        return l.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function r(l) {
        var y = parseInt(l.slice(1), 16),
          b = (y >> 16) & 255,
          S = (y >> 8) & 255,
          D = 255 & y;
        return [b, S, D];
      }
      function i(l, y, b) {
        return (
          "#" + ((1 << 24) | (l << 16) | (y << 8) | b).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, y) {
        c("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y);
      }
      function s(l, y, b) {
        c("Units do not match [" + l + "]: " + y + ", " + b);
      }
      function u(l, y, b) {
        if ((y !== void 0 && (b = y), l === void 0)) return b;
        var S = b;
        return (
          rt.test(l) || !Ge.test(l)
            ? (S = parseInt(l, 10))
            : Ge.test(l) && (S = 1e3 * parseFloat(l)),
          0 > S && (S = 0),
          S === S ? S : b
        );
      }
      function c(l) {
        ne.debug && window && window.console.warn(l);
      }
      function E(l) {
        for (var y = -1, b = l ? l.length : 0, S = []; ++y < b; ) {
          var D = l[y];
          D && S.push(D);
        }
        return S;
      }
      var f = (function (l, y, b) {
          function S(re) {
            return typeof re == "object";
          }
          function D(re) {
            return typeof re == "function";
          }
          function L() {}
          function Q(re, ve) {
            function V() {
              var xe = new ie();
              return D(xe.init) && xe.init.apply(xe, arguments), xe;
            }
            function ie() {}
            ve === b && ((ve = re), (re = Object)), (V.Bare = ie);
            var oe,
              _e = (L[l] = re[l]),
              je = (ie[l] = V[l] = new L());
            return (
              (je.constructor = V),
              (V.mixin = function (xe) {
                return (ie[l] = V[l] = Q(V, xe)[l]), V;
              }),
              (V.open = function (xe) {
                if (
                  ((oe = {}),
                  D(xe) ? (oe = xe.call(V, je, _e, V, re)) : S(xe) && (oe = xe),
                  S(oe))
                )
                  for (var Jt in oe) y.call(oe, Jt) && (je[Jt] = oe[Jt]);
                return D(je.init) || (je.init = re), V;
              }),
              V.open(ve)
            );
          }
          return Q;
        })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (l, y, b, S) {
              var D = (l /= S) * l,
                L = D * l;
              return (
                y +
                b * (-2.75 * L * D + 11 * D * D + -15.5 * L + 8 * D + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, y, b, S) {
              var D = (l /= S) * l,
                L = D * l;
              return y + b * (-1 * L * D + 3 * D * D + -3 * L + 2 * D);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, y, b, S) {
              var D = (l /= S) * l,
                L = D * l;
              return (
                y +
                b * (0.3 * L * D + -1.6 * D * D + 2.2 * L + -1.8 * D + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, y, b, S) {
              var D = (l /= S) * l,
                L = D * l;
              return y + b * (2 * L * D + -5 * D * D + 2 * L + 2 * D);
            },
          ],
          linear: [
            "linear",
            function (l, y, b, S) {
              return (b * l) / S + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, y, b, S) {
              return b * (l /= S) * l + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, y, b, S) {
              return -b * (l /= S) * (l - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, y, b, S) {
              return (l /= S / 2) < 1
                ? (b / 2) * l * l + y
                : (-b / 2) * (--l * (l - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, y, b, S) {
              return b * (l /= S) * l * l + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, y, b, S) {
              return b * ((l = l / S - 1) * l * l + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, y, b, S) {
              return (l /= S / 2) < 1
                ? (b / 2) * l * l * l + y
                : (b / 2) * ((l -= 2) * l * l + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, y, b, S) {
              return b * (l /= S) * l * l * l + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, y, b, S) {
              return -b * ((l = l / S - 1) * l * l * l - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, y, b, S) {
              return (l /= S / 2) < 1
                ? (b / 2) * l * l * l * l + y
                : (-b / 2) * ((l -= 2) * l * l * l - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, y, b, S) {
              return b * (l /= S) * l * l * l * l + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, y, b, S) {
              return b * ((l = l / S - 1) * l * l * l * l + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, y, b, S) {
              return (l /= S / 2) < 1
                ? (b / 2) * l * l * l * l * l + y
                : (b / 2) * ((l -= 2) * l * l * l * l + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, y, b, S) {
              return -b * Math.cos((l / S) * (Math.PI / 2)) + b + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, y, b, S) {
              return b * Math.sin((l / S) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, y, b, S) {
              return (-b / 2) * (Math.cos((Math.PI * l) / S) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, y, b, S) {
              return l === 0 ? y : b * Math.pow(2, 10 * (l / S - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, y, b, S) {
              return l === S
                ? y + b
                : b * (-Math.pow(2, (-10 * l) / S) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, y, b, S) {
              return l === 0
                ? y
                : l === S
                ? y + b
                : (l /= S / 2) < 1
                ? (b / 2) * Math.pow(2, 10 * (l - 1)) + y
                : (b / 2) * (-Math.pow(2, -10 * --l) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, y, b, S) {
              return -b * (Math.sqrt(1 - (l /= S) * l) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, y, b, S) {
              return b * Math.sqrt(1 - (l = l / S - 1) * l) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, y, b, S) {
              return (l /= S / 2) < 1
                ? (-b / 2) * (Math.sqrt(1 - l * l) - 1) + y
                : (b / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, y, b, S, D) {
              return (
                D === void 0 && (D = 1.70158),
                b * (l /= S) * l * ((D + 1) * l - D) + y
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, y, b, S, D) {
              return (
                D === void 0 && (D = 1.70158),
                b * ((l = l / S - 1) * l * ((D + 1) * l + D) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, y, b, S, D) {
              return (
                D === void 0 && (D = 1.70158),
                (l /= S / 2) < 1
                  ? (b / 2) * l * l * (((D *= 1.525) + 1) * l - D) + y
                  : (b / 2) *
                      ((l -= 2) * l * (((D *= 1.525) + 1) * l + D) + 2) +
                    y
              );
            },
          ],
        },
        p = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        g = document,
        m = window,
        I = "bkwld-tram",
        _ = /[\-\.0-9]/g,
        O = /[A-Z]/,
        x = "number",
        R = /^(rgb|#)/,
        P = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        B = /(deg|rad|turn)$/,
        k = "unitless",
        z = /(all|none) 0s ease 0s/,
        j = /^(width|height)$/,
        te = " ",
        F = g.createElement("a"),
        A = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        H = function (l) {
          if (l in F.style) return { dom: l, css: l };
          var y,
            b,
            S = "",
            D = l.split("-");
          for (y = 0; y < D.length; y++)
            S += D[y].charAt(0).toUpperCase() + D[y].slice(1);
          for (y = 0; y < A.length; y++)
            if (((b = A[y] + S), b in F.style))
              return { dom: b, css: N[y] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: H("transform"),
          transition: H("transition"),
          backface: H("backface-visibility"),
          timing: H("transition-timing-function"),
        });
      if (G.transition) {
        var M = G.timing.dom;
        if (((F.style[M] = h["ease-in-back"][0]), !F.style[M]))
          for (var q in p) h[q][0] = p[q];
      }
      var U = (t.frame = (function () {
          var l =
            m.requestAnimationFrame ||
            m.webkitRequestAnimationFrame ||
            m.mozRequestAnimationFrame ||
            m.oRequestAnimationFrame ||
            m.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(m)
            : function (y) {
                m.setTimeout(y, 16);
              };
        })()),
        ee = (t.now = (function () {
          var l = m.performance,
            y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return y && G.bind
            ? y.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        ue = f(function (l) {
          function y(Z, se) {
            var ye = E(("" + Z).split(te)),
              pe = ye[0];
            se = se || {};
            var Se = W[pe];
            if (!Se) return c("Unsupported property: " + pe);
            if (!se.weak || !this.props[pe]) {
              var Ve = Se[0],
                Ce = this.props[pe];
              return (
                Ce || (Ce = this.props[pe] = new Ve.Bare()),
                Ce.init(this.$el, ye, Se, se),
                Ce
              );
            }
          }
          function b(Z, se, ye) {
            if (Z) {
              var pe = typeof Z;
              if (
                (se ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && se)
              )
                return (
                  (this.timer = new $({
                    duration: Z,
                    context: this,
                    complete: L,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && se) {
                switch (Z) {
                  case "hide":
                    V.call(this);
                    break;
                  case "stop":
                    Q.call(this);
                    break;
                  case "redraw":
                    ie.call(this);
                    break;
                  default:
                    y.call(this, Z, ye && ye[1]);
                }
                return L.call(this);
              }
              if (pe == "function") return void Z.call(this, this);
              if (pe == "object") {
                var Se = 0;
                je.call(
                  this,
                  Z,
                  function (Ie, Uv) {
                    Ie.span > Se && (Se = Ie.span), Ie.stop(), Ie.animate(Uv);
                  },
                  function (Ie) {
                    "wait" in Ie && (Se = u(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  Se > 0 &&
                    ((this.timer = new $({ duration: Se, context: this })),
                    (this.active = !0),
                    se && (this.timer.complete = L));
                var Ve = this,
                  Ce = !1,
                  Ln = {};
                U(function () {
                  je.call(Ve, Z, function (Ie) {
                    Ie.active && ((Ce = !0), (Ln[Ie.name] = Ie.nextStyle));
                  }),
                    Ce && Ve.$el.css(Ln);
                });
              }
            }
          }
          function S(Z) {
            (Z = u(Z, 0)),
              this.active
                ? this.queue.push({ options: Z })
                : ((this.timer = new $({
                    duration: Z,
                    context: this,
                    complete: L,
                  })),
                  (this.active = !0));
          }
          function D(Z) {
            return this.active
              ? (this.queue.push({ options: Z, args: arguments }),
                void (this.timer.complete = L))
              : c(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function L() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var Z = this.queue.shift();
              b.call(this, Z.options, !0, Z.args);
            }
          }
          function Q(Z) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var se;
            typeof Z == "string"
              ? ((se = {}), (se[Z] = 1))
              : (se = typeof Z == "object" && Z != null ? Z : this.props),
              je.call(this, se, xe),
              _e.call(this);
          }
          function re(Z) {
            Q.call(this, Z), je.call(this, Z, Jt, kv);
          }
          function ve(Z) {
            typeof Z != "string" && (Z = "block"), (this.el.style.display = Z);
          }
          function V() {
            Q.call(this), (this.el.style.display = "none");
          }
          function ie() {
            this.el.offsetHeight;
          }
          function oe() {
            Q.call(this), e.removeData(this.el, I), (this.$el = this.el = null);
          }
          function _e() {
            var Z,
              se,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (Z in this.props)
              (se = this.props[Z]), se.active && ye.push(se.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[G.transition.dom] = ye));
          }
          function je(Z, se, ye) {
            var pe,
              Se,
              Ve,
              Ce,
              Ln = se !== xe,
              Ie = {};
            for (pe in Z)
              (Ve = Z[pe]),
                pe in de
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = Ve))
                  : (O.test(pe) && (pe = n(pe)),
                    pe in W ? (Ie[pe] = Ve) : (Ce || (Ce = {}), (Ce[pe] = Ve)));
            for (pe in Ie) {
              if (((Ve = Ie[pe]), (Se = this.props[pe]), !Se)) {
                if (!Ln) continue;
                Se = y.call(this, pe);
              }
              se.call(this, Se, Ve);
            }
            ye && Ce && ye.call(this, Ce);
          }
          function xe(Z) {
            Z.stop();
          }
          function Jt(Z, se) {
            Z.set(se);
          }
          function kv(Z) {
            this.$el.css(Z);
          }
          function Xe(Z, se) {
            l[Z] = function () {
              return this.children
                ? Hv.call(this, se, arguments)
                : (this.el && se.apply(this, arguments), this);
            };
          }
          function Hv(Z, se) {
            var ye,
              pe = this.children.length;
            for (ye = 0; pe > ye; ye++) Z.apply(this.children[ye], se);
            return this;
          }
          (l.init = function (Z) {
            if (
              ((this.$el = e(Z)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ne.keepInherited && !ne.fallback)
            ) {
              var se = X(this.el, "transition");
              se && !z.test(se) && (this.upstream = se);
            }
            G.backface &&
              ne.hideBackface &&
              v(this.el, G.backface.css, "hidden");
          }),
            Xe("add", y),
            Xe("start", b),
            Xe("wait", S),
            Xe("then", D),
            Xe("next", L),
            Xe("stop", Q),
            Xe("set", re),
            Xe("show", ve),
            Xe("hide", V),
            Xe("redraw", ie),
            Xe("destroy", oe);
        }),
        T = f(ue, function (l) {
          function y(b, S) {
            var D = e.data(b, I) || e.data(b, I, new ue.Bare());
            return D.el || D.init(b), S ? D.start(S) : D;
          }
          l.init = function (b, S) {
            var D = e(b);
            if (!D.length) return this;
            if (D.length === 1) return y(D[0], S);
            var L = [];
            return (
              D.each(function (Q, re) {
                L.push(y(re, S));
              }),
              (this.children = L),
              this
            );
          };
        }),
        w = f(function (l) {
          function y() {
            var L = this.get();
            this.update("auto");
            var Q = this.get();
            return this.update(L), Q;
          }
          function b(L, Q, re) {
            return Q !== void 0 && (re = Q), L in h ? L : re;
          }
          function S(L) {
            var Q = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(L);
            return (Q ? i(Q[1], Q[2], Q[3]) : L).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var D = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (L, Q, re, ve) {
            (this.$el = L), (this.el = L[0]);
            var V = Q[0];
            re[2] && (V = re[2]),
              K[V] && (V = K[V]),
              (this.name = V),
              (this.type = re[1]),
              (this.duration = u(Q[1], this.duration, D.duration)),
              (this.ease = b(Q[2], this.ease, D.ease)),
              (this.delay = u(Q[3], this.delay, D.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = j.test(this.name)),
              (this.unit = ve.unit || this.unit || ne.defaultUnit),
              (this.angle = ve.angle || this.angle || ne.defaultAngle),
              ne.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    te +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? te + h[this.ease][0] : "") +
                    (this.delay ? te + this.delay + "ms" : "")));
          }),
            (l.set = function (L) {
              (L = this.convert(L, this.type)), this.update(L), this.redraw();
            }),
            (l.transition = function (L) {
              (this.active = !0),
                (L = this.convert(L, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  L == "auto" && (L = y.call(this))),
                (this.nextStyle = L);
            }),
            (l.fallback = function (L) {
              var Q =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (L = this.convert(L, this.type)),
                this.auto &&
                  (Q == "auto" && (Q = this.convert(this.get(), this.type)),
                  L == "auto" && (L = y.call(this))),
                (this.tween = new ae({
                  from: Q,
                  to: L,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return X(this.el, this.name);
            }),
            (l.update = function (L) {
              v(this.el, this.name, L);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                v(this.el, this.name, this.get()));
              var L = this.tween;
              L && L.context && L.destroy();
            }),
            (l.convert = function (L, Q) {
              if (L == "auto" && this.auto) return L;
              var re,
                ve = typeof L == "number",
                V = typeof L == "string";
              switch (Q) {
                case x:
                  if (ve) return L;
                  if (V && L.replace(_, "") === "") return +L;
                  re = "number(unitless)";
                  break;
                case R:
                  if (V) {
                    if (L === "" && this.original) return this.original;
                    if (Q.test(L))
                      return L.charAt(0) == "#" && L.length == 7 ? L : S(L);
                  }
                  re = "hex or rgb string";
                  break;
                case P:
                  if (ve) return L + this.unit;
                  if (V && Q.test(L)) return L;
                  re = "number(px) or string(unit)";
                  break;
                case C:
                  if (ve) return L + this.unit;
                  if (V && Q.test(L)) return L;
                  re = "number(px) or string(unit or %)";
                  break;
                case B:
                  if (ve) return L + this.angle;
                  if (V && Q.test(L)) return L;
                  re = "number(deg) or string(angle)";
                  break;
                case k:
                  if (ve || (V && C.test(L))) return L;
                  re = "number(unitless) or string(unit or %)";
              }
              return a(re, L), L;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Y = f(w, function (l, y) {
          l.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), R));
          };
        }),
        J = f(w, function (l, y) {
          (l.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (b) {
              this.$el[this.name](b);
            });
        }),
        le = f(w, function (l, y) {
          function b(S, D) {
            var L, Q, re, ve, V;
            for (L in S)
              (ve = de[L]),
                (re = ve[0]),
                (Q = ve[1] || L),
                (V = this.convert(S[L], re)),
                D.call(this, Q, V, re);
          }
          (l.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  ne.perspective &&
                  ((this.current.perspective = ne.perspective),
                  v(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (S) {
              b.call(this, S, function (D, L) {
                this.current[D] = L;
              }),
                v(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (S) {
              var D = this.values(S);
              this.tween = new fe({
                current: this.current,
                values: D,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var L,
                Q = {};
              for (L in this.current) Q[L] = L in D ? D[L] : this.current[L];
              (this.active = !0), (this.nextStyle = this.style(Q));
            }),
            (l.fallback = function (S) {
              var D = this.values(S);
              this.tween = new fe({
                current: this.current,
                values: D,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              v(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (S) {
              var D,
                L = "";
              for (D in S) L += D + "(" + S[D] + ") ";
              return L;
            }),
            (l.values = function (S) {
              var D,
                L = {};
              return (
                b.call(this, S, function (Q, re, ve) {
                  (L[Q] = re),
                    this.current[Q] === void 0 &&
                      ((D = 0),
                      ~Q.indexOf("scale") && (D = 1),
                      (this.current[Q] = this.convert(D, ve)));
                }),
                L
              );
            });
        }),
        ae = f(function (l) {
          function y(V) {
            re.push(V) === 1 && U(b);
          }
          function b() {
            var V,
              ie,
              oe,
              _e = re.length;
            if (_e)
              for (U(b), ie = ee(), V = _e; V--; )
                (oe = re[V]), oe && oe.render(ie);
          }
          function S(V) {
            var ie,
              oe = e.inArray(V, re);
            oe >= 0 &&
              ((ie = re.slice(oe + 1)),
              (re.length = oe),
              ie.length && (re = re.concat(ie)));
          }
          function D(V) {
            return Math.round(V * ve) / ve;
          }
          function L(V, ie, oe) {
            return i(
              V[0] + oe * (ie[0] - V[0]),
              V[1] + oe * (ie[1] - V[1]),
              V[2] + oe * (ie[2] - V[2])
            );
          }
          var Q = { ease: h.ease[1], from: 0, to: 1 };
          (l.init = function (V) {
            (this.duration = V.duration || 0), (this.delay = V.delay || 0);
            var ie = V.ease || Q.ease;
            h[ie] && (ie = h[ie][1]),
              typeof ie != "function" && (ie = Q.ease),
              (this.ease = ie),
              (this.update = V.update || o),
              (this.complete = V.complete || o),
              (this.context = V.context || this),
              (this.name = V.name);
            var oe = V.from,
              _e = V.to;
            oe === void 0 && (oe = Q.from),
              _e === void 0 && (_e = Q.to),
              (this.unit = V.unit || ""),
              typeof oe == "number" && typeof _e == "number"
                ? ((this.begin = oe), (this.change = _e - oe))
                : this.format(_e, oe),
              (this.value = this.begin + this.unit),
              (this.start = ee()),
              V.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = ee()),
                (this.active = !0),
                y(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (l.render = function (V) {
              var ie,
                oe = V - this.start;
              if (this.delay) {
                if (oe <= this.delay) return;
                oe -= this.delay;
              }
              if (oe < this.duration) {
                var _e = this.ease(oe, 0, 1, this.duration);
                return (
                  (ie = this.startRGB
                    ? L(this.startRGB, this.endRGB, _e)
                    : D(this.begin + _e * this.change)),
                  (this.value = ie + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ie = this.endHex || this.begin + this.change),
                (this.value = ie + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (V, ie) {
              if (((ie += ""), (V += ""), V.charAt(0) == "#"))
                return (
                  (this.startRGB = r(ie)),
                  (this.endRGB = r(V)),
                  (this.endHex = V),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var oe = ie.replace(_, ""),
                  _e = V.replace(_, "");
                oe !== _e && s("tween", ie, V), (this.unit = oe);
              }
              (ie = parseFloat(ie)),
                (V = parseFloat(V)),
                (this.begin = this.value = ie),
                (this.change = V - ie);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var re = [],
            ve = 1e3;
        }),
        $ = f(ae, function (l) {
          (l.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || o),
              (this.context = y.context),
              this.play();
          }),
            (l.render = function (y) {
              var b = y - this.start;
              b < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        fe = f(ae, function (l, y) {
          (l.init = function (b) {
            (this.context = b.context),
              (this.update = b.update),
              (this.tweens = []),
              (this.current = b.current);
            var S, D;
            for (S in b.values)
              (D = b.values[S]),
                this.current[S] !== D &&
                  this.tweens.push(
                    new ae({
                      name: S,
                      from: this.current[S],
                      to: D,
                      duration: b.duration,
                      delay: b.delay,
                      ease: b.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (b) {
              var S,
                D,
                L = this.tweens.length,
                Q = !1;
              for (S = L; S--; )
                (D = this.tweens[S]),
                  D.context &&
                    (D.render(b), (this.current[D.name] = D.value), (Q = !0));
              return Q
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var b,
                  S = this.tweens.length;
                for (b = S; b--; ) this.tweens[b].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ne = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (ne.fallback = !0);
        ne.agentTests.push("(" + l + ")");
        var y = new RegExp(ne.agentTests.join("|"), "i");
        ne.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new ae(l);
        }),
        (t.delay = function (l, y, b) {
          return new $({ complete: y, duration: l, context: b });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var v = e.style,
        X = e.css,
        K = { transform: G.transform && G.transform.css },
        W = {
          color: [Y, R],
          background: [Y, R, "background-color"],
          "outline-color": [Y, R],
          "border-color": [Y, R],
          "border-top-color": [Y, R],
          "border-right-color": [Y, R],
          "border-bottom-color": [Y, R],
          "border-left-color": [Y, R],
          "border-width": [w, P],
          "border-top-width": [w, P],
          "border-right-width": [w, P],
          "border-bottom-width": [w, P],
          "border-left-width": [w, P],
          "border-spacing": [w, P],
          "letter-spacing": [w, P],
          margin: [w, P],
          "margin-top": [w, P],
          "margin-right": [w, P],
          "margin-bottom": [w, P],
          "margin-left": [w, P],
          padding: [w, P],
          "padding-top": [w, P],
          "padding-right": [w, P],
          "padding-bottom": [w, P],
          "padding-left": [w, P],
          "outline-width": [w, P],
          opacity: [w, x],
          top: [w, C],
          right: [w, C],
          bottom: [w, C],
          left: [w, C],
          "font-size": [w, C],
          "text-indent": [w, C],
          "word-spacing": [w, C],
          width: [w, C],
          "min-width": [w, C],
          "max-width": [w, C],
          height: [w, C],
          "min-height": [w, C],
          "max-height": [w, C],
          "line-height": [w, k],
          "scroll-top": [J, x, "scrollTop"],
          "scroll-left": [J, x, "scrollLeft"],
        },
        de = {};
      G.transform &&
        ((W.transform = [le]),
        (de = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [B],
          rotateX: [B],
          rotateY: [B],
          scale: [x],
          scaleX: [x],
          scaleY: [x],
          skew: [B],
          skewX: [B],
          skewY: [B],
        })),
        G.transform &&
          G.backface &&
          ((de.z = [C, "translateZ"]),
          (de.rotateZ = [B]),
          (de.scaleZ = [x]),
          (de.perspective = [P]));
      var rt = /ms/,
        Ge = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ea = d((PF, va) => {
    "use strict";
    var Qv = window.$,
      $v = jr() && Qv.tram;
    va.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        o = n.push,
        a = n.slice,
        s = n.concat,
        u = r.toString,
        c = r.hasOwnProperty,
        E = n.forEach,
        f = n.map,
        h = n.reduce,
        p = n.reduceRight,
        g = n.filter,
        m = n.every,
        I = n.some,
        _ = n.indexOf,
        O = n.lastIndexOf,
        x = Array.isArray,
        R = Object.keys,
        P = i.bind,
        C =
          (e.each =
          e.forEach =
            function (A, N, H) {
              if (A == null) return A;
              if (E && A.forEach === E) A.forEach(N, H);
              else if (A.length === +A.length) {
                for (var G = 0, M = A.length; G < M; G++)
                  if (N.call(H, A[G], G, A) === t) return;
              } else
                for (var q = e.keys(A), G = 0, M = q.length; G < M; G++)
                  if (N.call(H, A[q[G]], q[G], A) === t) return;
              return A;
            });
      (e.map = e.collect =
        function (A, N, H) {
          var G = [];
          return A == null
            ? G
            : f && A.map === f
            ? A.map(N, H)
            : (C(A, function (M, q, U) {
                G.push(N.call(H, M, q, U));
              }),
              G);
        }),
        (e.find = e.detect =
          function (A, N, H) {
            var G;
            return (
              B(A, function (M, q, U) {
                if (N.call(H, M, q, U)) return (G = M), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (A, N, H) {
            var G = [];
            return A == null
              ? G
              : g && A.filter === g
              ? A.filter(N, H)
              : (C(A, function (M, q, U) {
                  N.call(H, M, q, U) && G.push(M);
                }),
                G);
          });
      var B =
        (e.some =
        e.any =
          function (A, N, H) {
            N || (N = e.identity);
            var G = !1;
            return A == null
              ? G
              : I && A.some === I
              ? A.some(N, H)
              : (C(A, function (M, q, U) {
                  if (G || (G = N.call(H, M, q, U))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (A, N) {
          return A == null
            ? !1
            : _ && A.indexOf === _
            ? A.indexOf(N) != -1
            : B(A, function (H) {
                return H === N;
              });
        }),
        (e.delay = function (A, N) {
          var H = a.call(arguments, 2);
          return setTimeout(function () {
            return A.apply(null, H);
          }, N);
        }),
        (e.defer = function (A) {
          return e.delay.apply(e, [A, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (A) {
          var N, H, G;
          return function () {
            N ||
              ((N = !0),
              (H = arguments),
              (G = this),
              $v.frame(function () {
                (N = !1), A.apply(G, H);
              }));
          };
        }),
        (e.debounce = function (A, N, H) {
          var G,
            M,
            q,
            U,
            ee,
            ue = function () {
              var T = e.now() - U;
              T < N
                ? (G = setTimeout(ue, N - T))
                : ((G = null), H || ((ee = A.apply(q, M)), (q = M = null)));
            };
          return function () {
            (q = this), (M = arguments), (U = e.now());
            var T = H && !G;
            return (
              G || (G = setTimeout(ue, N)),
              T && ((ee = A.apply(q, M)), (q = M = null)),
              ee
            );
          };
        }),
        (e.defaults = function (A) {
          if (!e.isObject(A)) return A;
          for (var N = 1, H = arguments.length; N < H; N++) {
            var G = arguments[N];
            for (var M in G) A[M] === void 0 && (A[M] = G[M]);
          }
          return A;
        }),
        (e.keys = function (A) {
          if (!e.isObject(A)) return [];
          if (R) return R(A);
          var N = [];
          for (var H in A) e.has(A, H) && N.push(H);
          return N;
        }),
        (e.has = function (A, N) {
          return c.call(A, N);
        }),
        (e.isObject = function (A) {
          return A === Object(A);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var k = /(.)^/,
        z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        j = /\\|'|\r|\n|\u2028|\u2029/g,
        te = function (A) {
          return "\\" + z[A];
        },
        F = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (A, N, H) {
          !N && H && (N = H), (N = e.defaults({}, N, e.templateSettings));
          var G = RegExp(
              [
                (N.escape || k).source,
                (N.interpolate || k).source,
                (N.evaluate || k).source,
              ].join("|") + "|$",
              "g"
            ),
            M = 0,
            q = "__p+='";
          A.replace(G, function (T, w, Y, J, le) {
            return (
              (q += A.slice(M, le).replace(j, te)),
              (M = le + T.length),
              w
                ? (q +=
                    `'+
((__t=(` +
                    w +
                    `))==null?'':_.escape(__t))+
'`)
                : Y
                ? (q +=
                    `'+
((__t=(` +
                    Y +
                    `))==null?'':__t)+
'`)
                : J &&
                  (q +=
                    `';
` +
                    J +
                    `
__p+='`),
              T
            );
          }),
            (q += `';
`);
          var U = N.variable;
          if (U) {
            if (!F.test(U))
              throw new Error("variable is not a bare identifier: " + U);
          } else
            (q =
              `with(obj||{}){
` +
              q +
              `}
`),
              (U = "obj");
          q =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            q +
            `return __p;
`;
          var ee;
          try {
            ee = new Function(N.variable || "obj", "_", q);
          } catch (T) {
            throw ((T.source = q), T);
          }
          var ue = function (T) {
            return ee.call(this, T, e);
          };
          return (
            (ue.source =
              "function(" +
              U +
              `){
` +
              q +
              "}"),
            ue
          );
        }),
        e
      );
    })();
  });
  var Fe = d((NF, Aa) => {
    "use strict";
    var he = {},
      wt = {},
      At = [],
      Qr = window.Webflow || [],
      ct = window.jQuery,
      ke = ct(window),
      Zv = ct(document),
      Qe = ct.isFunction,
      Be = (he._ = Ea()),
      ma = (he.tram = jr() && ct.tram),
      Dn = !1,
      $r = !1;
    ma.config.hideBackface = !1;
    ma.config.keepInherited = !0;
    he.define = function (e, t, n) {
      wt[e] && Ia(wt[e]);
      var r = (wt[e] = t(ct, Be, n) || {});
      return _a(r), r;
    };
    he.require = function (e) {
      return wt[e];
    };
    function _a(e) {
      he.env() &&
        (Qe(e.design) && ke.on("__wf_design", e.design),
        Qe(e.preview) && ke.on("__wf_preview", e.preview)),
        Qe(e.destroy) && ke.on("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && Jv(e);
    }
    function Jv(e) {
      if (Dn) {
        e.ready();
        return;
      }
      Be.contains(At, e.ready) || At.push(e.ready);
    }
    function Ia(e) {
      Qe(e.design) && ke.off("__wf_design", e.design),
        Qe(e.preview) && ke.off("__wf_preview", e.preview),
        Qe(e.destroy) && ke.off("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && eE(e);
    }
    function eE(e) {
      At = Be.filter(At, function (t) {
        return t !== e.ready;
      });
    }
    he.push = function (e) {
      if (Dn) {
        Qe(e) && e();
        return;
      }
      Qr.push(e);
    };
    he.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Nn = navigator.userAgent.toLowerCase(),
      Ta = (he.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      tE = (he.env.chrome =
        /chrome/.test(Nn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Nn.match(/chrome\/(\d+)\./)[1], 10)),
      nE = (he.env.ios = /(ipod|iphone|ipad)/.test(Nn));
    he.env.safari = /safari/.test(Nn) && !tE && !nE;
    var Yr;
    Ta &&
      Zv.on("touchstart mousedown", function (e) {
        Yr = e.target;
      });
    he.validClick = Ta
      ? function (e) {
          return e === Yr || ct.contains(e, Yr);
        }
      : function () {
          return !0;
        };
    var ba = "resize.webflow orientationchange.webflow load.webflow",
      rE = "scroll.webflow " + ba;
    he.resize = Zr(ke, ba);
    he.scroll = Zr(ke, rE);
    he.redraw = Zr();
    function Zr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = Be.throttle(function (i) {
          Be.each(n, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (i) {
          typeof i == "function" && (Be.contains(n, i) || n.push(i));
        }),
        (r.off = function (i) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Be.filter(n, function (o) {
            return o !== i;
          });
        }),
        r
      );
    }
    he.location = function (e) {
      window.location = e;
    };
    he.env() && (he.location = function () {});
    he.ready = function () {
      (Dn = !0), $r ? iE() : Be.each(At, ya), Be.each(Qr, ya), he.resize.up();
    };
    function ya(e) {
      Qe(e) && e();
    }
    function iE() {
      ($r = !1), Be.each(wt, _a);
    }
    var vt;
    he.load = function (e) {
      vt.then(e);
    };
    function wa() {
      vt && (vt.reject(), ke.off("load", vt.resolve)),
        (vt = new ct.Deferred()),
        ke.on("load", vt.resolve);
    }
    he.destroy = function (e) {
      (e = e || {}),
        ($r = !0),
        ke.triggerHandler("__wf_destroy"),
        e.domready != null && (Dn = e.domready),
        Be.each(wt, Ia),
        he.resize.off(),
        he.scroll.off(),
        he.redraw.off(),
        (At = []),
        (Qr = []),
        vt.state() === "pending" && wa();
    };
    ct(he.ready);
    wa();
    Aa.exports = window.Webflow = he;
  });
  var Oa = d((DF, Sa) => {
    "use strict";
    var xa = Fe();
    xa.define("brand", (Sa.exports = function () {}), function (e) {
      var t = {},
        n = document,
        r = e("html"),
        i = e("body"),
        o = ".w-webflow-badge",
        a = window.location,
        s = /PhantomJS/i.test(navigator.userAgent),
        u =
          "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        c;
      t.ready = function () {
        var p = r.attr("data-wf-status"),
          g = r.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(g) && a.hostname !== g && (p = !0),
          p &&
            !s &&
            ((c = c || f()), h(), setTimeout(h, 500), e(n).off(u, E).on(u, E));
      };
      function E() {
        var p =
          n.fullScreen ||
          n.mozFullScreen ||
          n.webkitIsFullScreen ||
          n.msFullscreenElement ||
          !!n.webkitFullscreenElement;
        e(c).attr("style", p ? "display: none !important;" : "");
      }
      function f() {
        var p = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
          g = e("<img>")
            .attr("src", "../images/webflow-badge-icon-d2.89e12c322e.svg")
            .attr("alt", "")
            .css({ marginRight: "4px", width: "26px" }),
          m = e("<img>")
            .attr("src", "../images/webflow-badge-text-d2.c82cec3b78.svg")
            .attr("alt", "Made in Webflow");
        return p.append(g, m), p[0];
      }
      function h() {
        var p = i.children(o),
          g = p.length && p.get(0) === c,
          m = xa.env("editor");
        if (g) {
          m && p.remove();
          return;
        }
        p.length && p.remove(), m || i.append(c);
      }
      return t;
    });
  });
  var Ca = d((MF, Ra) => {
    "use strict";
    var Jr = Fe();
    Jr.define(
      "edit",
      (Ra.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (Jr.env("test") || Jr.env("frame")) && !n.fixture && !oE())
        )
          return { exit: 1 };
        var r = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          c = n.load || h,
          E = !1;
        try {
          E =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        E
          ? c()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            c()
          : i.on(s, f).triggerHandler(s);
        function f() {
          u || (/\?edit/.test(a.hash) && c());
        }
        function h() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, f),
            O(function (R) {
              e.ajax({
                url: _("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: p(R),
              });
            });
        }
        function p(R) {
          return function (P) {
            if (!P) {
              console.error("Could not load editor data");
              return;
            }
            (P.thirdPartyCookiesSupported = R),
              g(I(P.scriptPath), function () {
                window.WebflowEditor(P);
              });
          };
        }
        function g(R, P) {
          e.ajax({ type: "GET", url: R, dataType: "script", cache: !0 }).then(
            P,
            m
          );
        }
        function m(R, P, C) {
          throw (console.error("Could not load editor script: " + P), C);
        }
        function I(R) {
          return R.indexOf("//") >= 0
            ? R
            : _("https://editor-api.webflow.com" + R);
        }
        function _(R) {
          return R.replace(/([^:])\/\//g, "$1/");
        }
        function O(R) {
          var P = window.document.createElement("iframe");
          (P.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (P.style.display = "none"),
            (P.sandbox = "allow-scripts allow-same-origin");
          var C = function (B) {
            B.data === "WF_third_party_cookies_unsupported"
              ? (x(P, C), R(!1))
              : B.data === "WF_third_party_cookies_supported" &&
                (x(P, C), R(!0));
          };
          (P.onerror = function () {
            x(P, C), R(!1);
          }),
            window.addEventListener("message", C, !1),
            window.document.body.appendChild(P);
        }
        function x(R, P) {
          window.removeEventListener("message", P, !1), R.remove();
        }
        return r;
      })
    );
    function oE() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Pa = d((FF, La) => {
    "use strict";
    var aE = Fe();
    aE.define(
      "focus-visible",
      (La.exports = function () {
        function e(n) {
          var r = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(x) {
            return !!(
              x &&
              x !== document &&
              x.nodeName !== "HTML" &&
              x.nodeName !== "BODY" &&
              "classList" in x &&
              "contains" in x.classList
            );
          }
          function u(x) {
            var R = x.type,
              P = x.tagName;
            return !!(
              (P === "INPUT" && a[R] && !x.readOnly) ||
              (P === "TEXTAREA" && !x.readOnly) ||
              x.isContentEditable
            );
          }
          function c(x) {
            x.getAttribute("data-wf-focus-visible") ||
              x.setAttribute("data-wf-focus-visible", "true");
          }
          function E(x) {
            x.getAttribute("data-wf-focus-visible") &&
              x.removeAttribute("data-wf-focus-visible");
          }
          function f(x) {
            x.metaKey ||
              x.altKey ||
              x.ctrlKey ||
              (s(n.activeElement) && c(n.activeElement), (r = !0));
          }
          function h() {
            r = !1;
          }
          function p(x) {
            s(x.target) && (r || u(x.target)) && c(x.target);
          }
          function g(x) {
            s(x.target) &&
              x.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              E(x.target));
          }
          function m() {
            document.visibilityState === "hidden" && (i && (r = !0), I());
          }
          function I() {
            document.addEventListener("mousemove", O),
              document.addEventListener("mousedown", O),
              document.addEventListener("mouseup", O),
              document.addEventListener("pointermove", O),
              document.addEventListener("pointerdown", O),
              document.addEventListener("pointerup", O),
              document.addEventListener("touchmove", O),
              document.addEventListener("touchstart", O),
              document.addEventListener("touchend", O);
          }
          function _() {
            document.removeEventListener("mousemove", O),
              document.removeEventListener("mousedown", O),
              document.removeEventListener("mouseup", O),
              document.removeEventListener("pointermove", O),
              document.removeEventListener("pointerdown", O),
              document.removeEventListener("pointerup", O),
              document.removeEventListener("touchmove", O),
              document.removeEventListener("touchstart", O),
              document.removeEventListener("touchend", O);
          }
          function O(x) {
            (x.target.nodeName && x.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), _());
          }
          document.addEventListener("keydown", f, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", m, !0),
            I(),
            n.addEventListener("focus", p, !0),
            n.addEventListener("blur", g, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ma = d((qF, Da) => {
    "use strict";
    var Na = Fe();
    Na.define(
      "focus",
      (Da.exports = function () {
        var e = [],
          t = !1;
        function n(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function r(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          r(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Na.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: o };
      })
    );
  });
  var qn = d((GF, qa) => {
    "use strict";
    var ei = window.jQuery,
      $e = {},
      Mn = [],
      Fa = ".w-ix",
      Fn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ei(t).triggerHandler($e.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ei(t).triggerHandler($e.types.OUTRO));
        },
      };
    $e.triggers = {};
    $e.types = { INTRO: "w-ix-intro" + Fa, OUTRO: "w-ix-outro" + Fa };
    $e.init = function () {
      for (var e = Mn.length, t = 0; t < e; t++) {
        var n = Mn[t];
        n[0](0, n[1]);
      }
      (Mn = []), ei.extend($e.triggers, Fn);
    };
    $e.async = function () {
      for (var e in Fn) {
        var t = Fn[e];
        Fn.hasOwnProperty(e) &&
          ($e.triggers[e] = function (n, r) {
            Mn.push([t, r]);
          });
      }
    };
    $e.async();
    qa.exports = $e;
  });
  var Xa = d((XF, Ga) => {
    "use strict";
    var He = Fe(),
      Gn = qn();
    He.define(
      "ix",
      (Ga.exports = function (e, t) {
        var n = {},
          r,
          i = e(window),
          o = ".w-ix",
          a = e.tram,
          s = He.env,
          u = s(),
          c = s.chrome && s.chrome < 35,
          E = "none 0s ease 0s",
          f = e(),
          h = {},
          p = [],
          g = [],
          m = [],
          I,
          _ = 1,
          O = {
            tabs: ".w-tab-link, .w-tab-pane",
            dropdown: ".w-dropdown",
            slider: ".w-slide",
            navbar: ".w-nav",
          };
        (n.init = function (M) {
          setTimeout(function () {
            x(M);
          }, 1);
        }),
          (n.preview = function () {
            (r = !1),
              (_ = 100),
              setTimeout(function () {
                x(window.__wf_ix);
              }, 1);
          }),
          (n.design = function () {
            (r = !0), n.destroy();
          }),
          (n.destroy = function () {
            (I = !0),
              f.each(k),
              He.scroll.off(z),
              Gn.async(),
              (p = []),
              (g = []),
              (m = []);
          }),
          (n.ready = function () {
            if (u) return s("design") ? n.design() : n.preview();
            h && I && ((I = !1), R());
          }),
          (n.run = F),
          (n.style = u ? N : H);
        function x(M) {
          M &&
            ((h = {}),
            t.each(M, function (q) {
              h[q.slug] = q.value;
            }),
            R());
        }
        function R() {
          P(), Gn.init(), He.redraw.up();
        }
        function P() {
          var M = e("[data-ix]");
          M.length &&
            (M.each(k),
            M.each(C),
            p.length && (He.scroll.on(z), setTimeout(z, 1)),
            g.length && He.load(j),
            m.length && setTimeout(te, _));
        }
        function C(M, q) {
          var U = e(q),
            ee = U.attr("data-ix"),
            ue = h[ee];
          if (ue) {
            var T = ue.triggers;
            T &&
              (n.style(U, ue.style),
              t.each(T, function (w) {
                var Y = {},
                  J = w.type,
                  le = w.stepsB && w.stepsB.length;
                function ae() {
                  F(w, U, { group: "A" });
                }
                function $() {
                  F(w, U, { group: "B" });
                }
                if (J === "load") {
                  w.preload && !u ? g.push(ae) : m.push(ae);
                  return;
                }
                if (J === "click") {
                  U.on("click" + o, function (v) {
                    He.validClick(v.currentTarget) &&
                      (U.attr("href") === "#" && v.preventDefault(),
                      F(w, U, { group: Y.clicked ? "B" : "A" }),
                      le && (Y.clicked = !Y.clicked));
                  }),
                    (f = f.add(U));
                  return;
                }
                if (J === "hover") {
                  U.on("mouseenter" + o, ae),
                    U.on("mouseleave" + o, $),
                    (f = f.add(U));
                  return;
                }
                if (J === "scroll") {
                  p.push({
                    el: U,
                    trigger: w,
                    state: { active: !1 },
                    offsetTop: B(w.offsetTop),
                    offsetBot: B(w.offsetBot),
                  });
                  return;
                }
                var fe = O[J];
                if (fe) {
                  var ne = U.closest(fe);
                  ne.on(Gn.types.INTRO, ae).on(Gn.types.OUTRO, $),
                    (f = f.add(ne));
                  return;
                }
              }));
          }
        }
        function B(M) {
          if (!M) return 0;
          M = String(M);
          var q = parseInt(M, 10);
          return q !== q
            ? 0
            : (M.indexOf("%") > 0 && ((q /= 100), q >= 1 && (q = 0.999)), q);
        }
        function k(M, q) {
          e(q).off(o);
        }
        function z() {
          for (
            var M = i.scrollTop(), q = i.height(), U = p.length, ee = 0;
            ee < U;
            ee++
          ) {
            var ue = p[ee],
              T = ue.el,
              w = ue.trigger,
              Y = w.stepsB && w.stepsB.length,
              J = ue.state,
              le = T.offset().top,
              ae = T.outerHeight(),
              $ = ue.offsetTop,
              fe = ue.offsetBot;
            $ < 1 && $ > 0 && ($ *= q), fe < 1 && fe > 0 && (fe *= q);
            var ne = le + ae - $ >= M && le + fe <= M + q;
            ne !== J.active &&
              ((ne === !1 && !Y) ||
                ((J.active = ne), F(w, T, { group: ne ? "A" : "B" })));
          }
        }
        function j() {
          for (var M = g.length, q = 0; q < M; q++) g[q]();
        }
        function te() {
          for (var M = m.length, q = 0; q < M; q++) m[q]();
        }
        function F(M, q, U, ee) {
          U = U || {};
          var ue = U.done,
            T = M.preserve3d;
          if (r && !U.force) return;
          var w = U.group || "A",
            Y = M["loop" + w],
            J = M["steps" + w];
          if (!J || !J.length) return;
          if ((J.length < 2 && (Y = !1), !ee)) {
            var le = M.selector;
            le &&
              (M.descend
                ? (q = q.find(le))
                : M.siblings
                ? (q = q.siblings(le))
                : (q = e(le)),
              u && q.attr("data-ix-affect", 1)),
              c && q.addClass("w-ix-emptyfix"),
              T && q.css("transform-style", "preserve-3d");
          }
          for (var ae = a(q), $ = { omit3d: !T }, fe = 0; fe < J.length; fe++)
            A(ae, J[fe], $);
          function ne() {
            if (Y) return F(M, q, U, !0);
            $.width === "auto" && ae.set({ width: "auto" }),
              $.height === "auto" && ae.set({ height: "auto" }),
              ue && ue();
          }
          $.start ? ae.then(ne) : ne();
        }
        function A(M, q, U) {
          var ee = "add",
            ue = "start";
          U.start && (ee = ue = "then");
          var T = q.transition;
          if (T) {
            T = T.split(",");
            for (var w = 0; w < T.length; w++) {
              var Y = T[w];
              M[ee](Y);
            }
          }
          var J = G(q, U) || {};
          if (
            (J.width != null && (U.width = J.width),
            J.height != null && (U.height = J.height),
            T == null)
          ) {
            U.start
              ? M.then(function () {
                  var $ = this.queue;
                  this.set(J),
                    J.display && (M.redraw(), He.redraw.up()),
                    (this.queue = $),
                    this.next();
                })
              : (M.set(J), J.display && (M.redraw(), He.redraw.up()));
            var le = J.wait;
            le != null && (M.wait(le), (U.start = !0));
          } else {
            if (J.display) {
              var ae = J.display;
              delete J.display,
                U.start
                  ? M.then(function () {
                      var $ = this.queue;
                      this.set({ display: ae }).redraw(),
                        He.redraw.up(),
                        (this.queue = $),
                        this.next();
                    })
                  : (M.set({ display: ae }).redraw(), He.redraw.up());
            }
            M[ue](J), (U.start = !0);
          }
        }
        function N(M, q) {
          var U = a(M);
          if (!e.isEmptyObject(q)) {
            M.css("transition", "");
            var ee = M.css("transition");
            ee === E && (ee = U.upstream = null),
              (U.upstream = E),
              U.set(G(q)),
              (U.upstream = ee);
          }
        }
        function H(M, q) {
          a(M).set(G(q));
        }
        function G(M, q) {
          var U = q && q.omit3d,
            ee = {},
            ue = !1;
          for (var T in M)
            T !== "transition" &&
              T !== "keysort" &&
              ((U &&
                (T === "z" ||
                  T === "rotateX" ||
                  T === "rotateY" ||
                  T === "scaleZ")) ||
                ((ee[T] = M[T]), (ue = !0)));
          return ue ? ee : null;
        }
        return n;
      })
    );
  });
  var ni = d((VF, ka) => {
    "use strict";
    var ti = qn();
    function Va(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var sE = window.jQuery,
      Xn = {},
      Ba = ".w-ix",
      uE = {
        reset: function (e, t) {
          ti.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ti.triggers.intro(e, t), Va(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ti.triggers.outro(e, t), Va(t, "COMPONENT_INACTIVE");
        },
      };
    Xn.triggers = {};
    Xn.types = { INTRO: "w-ix-intro" + Ba, OUTRO: "w-ix-outro" + Ba };
    sE.extend(Xn.triggers, uE);
    ka.exports = Xn;
  });
  var ri = d((BF, Ha) => {
    var cE =
      typeof global == "object" && global && global.Object === Object && global;
    Ha.exports = cE;
  });
  var Ue = d((kF, Ua) => {
    var lE = ri(),
      fE = typeof self == "object" && self && self.Object === Object && self,
      dE = lE || fE || Function("return this")();
    Ua.exports = dE;
  });
  var xt = d((HF, Wa) => {
    var pE = Ue(),
      hE = pE.Symbol;
    Wa.exports = hE;
  });
  var Ya = d((UF, ja) => {
    var za = xt(),
      Ka = Object.prototype,
      gE = Ka.hasOwnProperty,
      vE = Ka.toString,
      en = za ? za.toStringTag : void 0;
    function EE(e) {
      var t = gE.call(e, en),
        n = e[en];
      try {
        e[en] = void 0;
        var r = !0;
      } catch {}
      var i = vE.call(e);
      return r && (t ? (e[en] = n) : delete e[en]), i;
    }
    ja.exports = EE;
  });
  var $a = d((WF, Qa) => {
    var yE = Object.prototype,
      mE = yE.toString;
    function _E(e) {
      return mE.call(e);
    }
    Qa.exports = _E;
  });
  var lt = d((zF, es) => {
    var Za = xt(),
      IE = Ya(),
      TE = $a(),
      bE = "[object Null]",
      wE = "[object Undefined]",
      Ja = Za ? Za.toStringTag : void 0;
    function AE(e) {
      return e == null
        ? e === void 0
          ? wE
          : bE
        : Ja && Ja in Object(e)
        ? IE(e)
        : TE(e);
    }
    es.exports = AE;
  });
  var ii = d((KF, ts) => {
    function xE(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    ts.exports = xE;
  });
  var oi = d((jF, ns) => {
    var SE = ii(),
      OE = SE(Object.getPrototypeOf, Object);
    ns.exports = OE;
  });
  var it = d((YF, rs) => {
    function RE(e) {
      return e != null && typeof e == "object";
    }
    rs.exports = RE;
  });
  var ai = d((QF, os) => {
    var CE = lt(),
      LE = oi(),
      PE = it(),
      NE = "[object Object]",
      DE = Function.prototype,
      ME = Object.prototype,
      is = DE.toString,
      FE = ME.hasOwnProperty,
      qE = is.call(Object);
    function GE(e) {
      if (!PE(e) || CE(e) != NE) return !1;
      var t = LE(e);
      if (t === null) return !0;
      var n = FE.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && is.call(n) == qE;
    }
    os.exports = GE;
  });
  var as = d((si) => {
    "use strict";
    Object.defineProperty(si, "__esModule", { value: !0 });
    si.default = XE;
    function XE(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var ss = d((ci, ui) => {
    "use strict";
    Object.defineProperty(ci, "__esModule", { value: !0 });
    var VE = as(),
      BE = kE(VE);
    function kE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var St;
    typeof self < "u"
      ? (St = self)
      : typeof window < "u"
      ? (St = window)
      : typeof global < "u"
      ? (St = global)
      : typeof ui < "u"
      ? (St = ui)
      : (St = Function("return this")());
    var HE = (0, BE.default)(St);
    ci.default = HE;
  });
  var li = d((tn) => {
    "use strict";
    tn.__esModule = !0;
    tn.ActionTypes = void 0;
    tn.default = fs;
    var UE = ai(),
      WE = ls(UE),
      zE = ss(),
      us = ls(zE);
    function ls(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var cs = (tn.ActionTypes = { INIT: "@@redux/INIT" });
    function fs(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(fs)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function c() {
        s === a && (s = a.slice());
      }
      function E() {
        return o;
      }
      function f(m) {
        if (typeof m != "function")
          throw new Error("Expected listener to be a function.");
        var I = !0;
        return (
          c(),
          s.push(m),
          function () {
            if (I) {
              (I = !1), c();
              var O = s.indexOf(m);
              s.splice(O, 1);
            }
          }
        );
      }
      function h(m) {
        if (!(0, WE.default)(m))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof m.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, m));
        } finally {
          u = !1;
        }
        for (var I = (a = s), _ = 0; _ < I.length; _++) I[_]();
        return m;
      }
      function p(m) {
        if (typeof m != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = m), h({ type: cs.INIT });
      }
      function g() {
        var m,
          I = f;
        return (
          (m = {
            subscribe: function (O) {
              if (typeof O != "object")
                throw new TypeError("Expected the observer to be an object.");
              function x() {
                O.next && O.next(E());
              }
              x();
              var R = I(x);
              return { unsubscribe: R };
            },
          }),
          (m[us.default] = function () {
            return this;
          }),
          m
        );
      }
      return (
        h({ type: cs.INIT }),
        (r = { dispatch: h, subscribe: f, getState: E, replaceReducer: p }),
        (r[us.default] = g),
        r
      );
    }
  });
  var di = d((fi) => {
    "use strict";
    fi.__esModule = !0;
    fi.default = KE;
    function KE(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var hs = d((pi) => {
    "use strict";
    pi.__esModule = !0;
    pi.default = ZE;
    var ds = li(),
      jE = ai(),
      e2 = ps(jE),
      YE = di(),
      t2 = ps(YE);
    function ps(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function QE(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function $E(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: ds.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                ds.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function ZE(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i]);
      }
      var o = Object.keys(n);
      if (!1) var a;
      var s;
      try {
        $E(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var c =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          E = arguments[1];
        if (s) throw s;
        if (!1) var f;
        for (var h = !1, p = {}, g = 0; g < o.length; g++) {
          var m = o[g],
            I = n[m],
            _ = c[m],
            O = I(_, E);
          if (typeof O > "u") {
            var x = QE(m, E);
            throw new Error(x);
          }
          (p[m] = O), (h = h || O !== _);
        }
        return h ? p : c;
      };
    }
  });
  var vs = d((hi) => {
    "use strict";
    hi.__esModule = !0;
    hi.default = JE;
    function gs(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function JE(e, t) {
      if (typeof e == "function") return gs(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
        var o = n[i],
          a = e[o];
        typeof a == "function" && (r[o] = gs(a, t));
      }
      return r;
    }
  });
  var vi = d((gi) => {
    "use strict";
    gi.__esModule = !0;
    gi.default = ey;
    function ey() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var Es = d((Ei) => {
    "use strict";
    Ei.__esModule = !0;
    var ty =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    Ei.default = oy;
    var ny = vi(),
      ry = iy(ny);
    function iy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function oy() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (i, o, a) {
          var s = r(i, o, a),
            u = s.dispatch,
            c = [],
            E = {
              getState: s.getState,
              dispatch: function (h) {
                return u(h);
              },
            };
          return (
            (c = t.map(function (f) {
              return f(E);
            })),
            (u = ry.default.apply(void 0, c)(s.dispatch)),
            ty({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var yi = d((qe) => {
    "use strict";
    qe.__esModule = !0;
    qe.compose =
      qe.applyMiddleware =
      qe.bindActionCreators =
      qe.combineReducers =
      qe.createStore =
        void 0;
    var ay = li(),
      sy = Ot(ay),
      uy = hs(),
      cy = Ot(uy),
      ly = vs(),
      fy = Ot(ly),
      dy = Es(),
      py = Ot(dy),
      hy = vi(),
      gy = Ot(hy),
      vy = di(),
      a2 = Ot(vy);
    function Ot(e) {
      return e && e.__esModule ? e : { default: e };
    }
    qe.createStore = sy.default;
    qe.combineReducers = cy.default;
    qe.bindActionCreators = fy.default;
    qe.applyMiddleware = py.default;
    qe.compose = gy.default;
  });
  var We,
    mi,
    Ze,
    Ey,
    yy,
    Vn,
    my,
    _i = Ee(() => {
      "use strict";
      (We = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (mi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Ze = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Ey = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (yy = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Vn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (my = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Pe,
    _y,
    Bn = Ee(() => {
      "use strict";
      (Pe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (_y = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Iy,
    ys = Ee(() => {
      "use strict";
      Iy = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Ty,
    by,
    wy,
    Ay,
    xy,
    Sy,
    Oy,
    Ii,
    ms = Ee(() => {
      "use strict";
      Bn();
      ({
        TRANSFORM_MOVE: Ty,
        TRANSFORM_SCALE: by,
        TRANSFORM_ROTATE: wy,
        TRANSFORM_SKEW: Ay,
        STYLE_SIZE: xy,
        STYLE_FILTER: Sy,
        STYLE_FONT_VARIATION: Oy,
      } = Pe),
        (Ii = {
          [Ty]: !0,
          [by]: !0,
          [wy]: !0,
          [Ay]: !0,
          [xy]: !0,
          [Sy]: !0,
          [Oy]: !0,
        });
    });
  var Te = {};
  Le(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Wy,
    IX2_ANIMATION_FRAME_CHANGED: () => Xy,
    IX2_CLEAR_REQUESTED: () => Fy,
    IX2_ELEMENT_STATE_CHANGED: () => Uy,
    IX2_EVENT_LISTENER_ADDED: () => qy,
    IX2_EVENT_STATE_CHANGED: () => Gy,
    IX2_INSTANCE_ADDED: () => By,
    IX2_INSTANCE_REMOVED: () => Hy,
    IX2_INSTANCE_STARTED: () => ky,
    IX2_MEDIA_QUERIES_DEFINED: () => Ky,
    IX2_PARAMETER_CHANGED: () => Vy,
    IX2_PLAYBACK_REQUESTED: () => Dy,
    IX2_PREVIEW_REQUESTED: () => Ny,
    IX2_RAW_DATA_IMPORTED: () => Ry,
    IX2_SESSION_INITIALIZED: () => Cy,
    IX2_SESSION_STARTED: () => Ly,
    IX2_SESSION_STOPPED: () => Py,
    IX2_STOP_REQUESTED: () => My,
    IX2_TEST_FRAME_RENDERED: () => jy,
    IX2_VIEWPORT_WIDTH_CHANGED: () => zy,
  });
  var Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    Gy,
    Xy,
    Vy,
    By,
    ky,
    Hy,
    Uy,
    Wy,
    zy,
    Ky,
    jy,
    _s = Ee(() => {
      "use strict";
      (Ry = "IX2_RAW_DATA_IMPORTED"),
        (Cy = "IX2_SESSION_INITIALIZED"),
        (Ly = "IX2_SESSION_STARTED"),
        (Py = "IX2_SESSION_STOPPED"),
        (Ny = "IX2_PREVIEW_REQUESTED"),
        (Dy = "IX2_PLAYBACK_REQUESTED"),
        (My = "IX2_STOP_REQUESTED"),
        (Fy = "IX2_CLEAR_REQUESTED"),
        (qy = "IX2_EVENT_LISTENER_ADDED"),
        (Gy = "IX2_EVENT_STATE_CHANGED"),
        (Xy = "IX2_ANIMATION_FRAME_CHANGED"),
        (Vy = "IX2_PARAMETER_CHANGED"),
        (By = "IX2_INSTANCE_ADDED"),
        (ky = "IX2_INSTANCE_STARTED"),
        (Hy = "IX2_INSTANCE_REMOVED"),
        (Uy = "IX2_ELEMENT_STATE_CHANGED"),
        (Wy = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (zy = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (Ky = "IX2_MEDIA_QUERIES_DEFINED"),
        (jy = "IX2_TEST_FRAME_RENDERED");
    });
  var Ae = {};
  Le(Ae, {
    ABSTRACT_NODE: () => zm,
    AUTO: () => Mm,
    BACKGROUND: () => Rm,
    BACKGROUND_COLOR: () => Om,
    BAR_DELIMITER: () => Gm,
    BORDER_COLOR: () => Cm,
    BOUNDARY_SELECTOR: () => Jy,
    CHILDREN: () => Xm,
    COLON_DELIMITER: () => qm,
    COLOR: () => Lm,
    COMMA_DELIMITER: () => Fm,
    CONFIG_UNIT: () => sm,
    CONFIG_VALUE: () => rm,
    CONFIG_X_UNIT: () => im,
    CONFIG_X_VALUE: () => em,
    CONFIG_Y_UNIT: () => om,
    CONFIG_Y_VALUE: () => tm,
    CONFIG_Z_UNIT: () => am,
    CONFIG_Z_VALUE: () => nm,
    DISPLAY: () => Pm,
    FILTER: () => wm,
    FLEX: () => Nm,
    FONT_VARIATION_SETTINGS: () => Am,
    HEIGHT: () => Sm,
    HTML_ELEMENT: () => Um,
    IMMEDIATE_CHILDREN: () => Vm,
    IX2_ID_DELIMITER: () => Yy,
    OPACITY: () => bm,
    PARENT: () => km,
    PLAIN_OBJECT: () => Wm,
    PRESERVE_3D: () => Hm,
    RENDER_GENERAL: () => jm,
    RENDER_PLUGIN: () => Qm,
    RENDER_STYLE: () => Ym,
    RENDER_TRANSFORM: () => Km,
    ROTATE_X: () => Em,
    ROTATE_Y: () => ym,
    ROTATE_Z: () => mm,
    SCALE_3D: () => vm,
    SCALE_X: () => pm,
    SCALE_Y: () => hm,
    SCALE_Z: () => gm,
    SIBLINGS: () => Bm,
    SKEW: () => _m,
    SKEW_X: () => Im,
    SKEW_Y: () => Tm,
    TRANSFORM: () => um,
    TRANSLATE_3D: () => dm,
    TRANSLATE_X: () => cm,
    TRANSLATE_Y: () => lm,
    TRANSLATE_Z: () => fm,
    WF_PAGE: () => Qy,
    WIDTH: () => xm,
    WILL_CHANGE: () => Dm,
    W_MOD_IX: () => Zy,
    W_MOD_JS: () => $y,
  });
  var Yy,
    Qy,
    $y,
    Zy,
    Jy,
    em,
    tm,
    nm,
    rm,
    im,
    om,
    am,
    sm,
    um,
    cm,
    lm,
    fm,
    dm,
    pm,
    hm,
    gm,
    vm,
    Em,
    ym,
    mm,
    _m,
    Im,
    Tm,
    bm,
    wm,
    Am,
    xm,
    Sm,
    Om,
    Rm,
    Cm,
    Lm,
    Pm,
    Nm,
    Dm,
    Mm,
    Fm,
    qm,
    Gm,
    Xm,
    Vm,
    Bm,
    km,
    Hm,
    Um,
    Wm,
    zm,
    Km,
    jm,
    Ym,
    Qm,
    Is = Ee(() => {
      "use strict";
      (Yy = "|"),
        (Qy = "data-wf-page"),
        ($y = "w-mod-js"),
        (Zy = "w-mod-ix"),
        (Jy = ".w-dyn-item"),
        (em = "xValue"),
        (tm = "yValue"),
        (nm = "zValue"),
        (rm = "value"),
        (im = "xUnit"),
        (om = "yUnit"),
        (am = "zUnit"),
        (sm = "unit"),
        (um = "transform"),
        (cm = "translateX"),
        (lm = "translateY"),
        (fm = "translateZ"),
        (dm = "translate3d"),
        (pm = "scaleX"),
        (hm = "scaleY"),
        (gm = "scaleZ"),
        (vm = "scale3d"),
        (Em = "rotateX"),
        (ym = "rotateY"),
        (mm = "rotateZ"),
        (_m = "skew"),
        (Im = "skewX"),
        (Tm = "skewY"),
        (bm = "opacity"),
        (wm = "filter"),
        (Am = "font-variation-settings"),
        (xm = "width"),
        (Sm = "height"),
        (Om = "backgroundColor"),
        (Rm = "background"),
        (Cm = "borderColor"),
        (Lm = "color"),
        (Pm = "display"),
        (Nm = "flex"),
        (Dm = "willChange"),
        (Mm = "AUTO"),
        (Fm = ","),
        (qm = ":"),
        (Gm = "|"),
        (Xm = "CHILDREN"),
        (Vm = "IMMEDIATE_CHILDREN"),
        (Bm = "SIBLINGS"),
        (km = "PARENT"),
        (Hm = "preserve-3d"),
        (Um = "HTML_ELEMENT"),
        (Wm = "PLAIN_OBJECT"),
        (zm = "ABSTRACT_NODE"),
        (Km = "RENDER_TRANSFORM"),
        (jm = "RENDER_GENERAL"),
        (Ym = "RENDER_STYLE"),
        (Qm = "RENDER_PLUGIN");
    });
  var Ts = {};
  Le(Ts, {
    ActionAppliesTo: () => _y,
    ActionTypeConsts: () => Pe,
    EventAppliesTo: () => mi,
    EventBasedOn: () => Ze,
    EventContinuousMouseAxes: () => Ey,
    EventLimitAffectedElements: () => yy,
    EventTypeConsts: () => We,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Ae,
    InteractionTypeConsts: () => Iy,
    QuickEffectDirectionConsts: () => my,
    QuickEffectIds: () => Vn,
    ReducedMotionTypes: () => Ii,
  });
  var Ne = Ee(() => {
    "use strict";
    _i();
    Bn();
    ys();
    ms();
    _s();
    Is();
    Bn();
    _i();
  });
  var $m,
    bs,
    ws = Ee(() => {
      "use strict";
      Ne();
      ({ IX2_RAW_DATA_IMPORTED: $m } = Te),
        (bs = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case $m:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Rt = d((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    var Zm =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    me.clone = Hn;
    me.addLast = Ss;
    me.addFirst = Os;
    me.removeLast = Rs;
    me.removeFirst = Cs;
    me.insert = Ls;
    me.removeAt = Ps;
    me.replaceAt = Ns;
    me.getIn = Un;
    me.set = Wn;
    me.setIn = zn;
    me.update = Ms;
    me.updateIn = Fs;
    me.merge = qs;
    me.mergeDeep = Gs;
    me.mergeIn = Xs;
    me.omit = Vs;
    me.addDefaults = Bs;
    var As = "INVALID_ARGS";
    function xs(e) {
      throw new Error(e);
    }
    function Ti(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Jm = {}.hasOwnProperty;
    function Hn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ti(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        n[i] = e[i];
      }
      return n;
    }
    function De(e, t, n) {
      var r = n;
      r == null && xs(As);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var c = a[u];
        if (c != null) {
          var E = Ti(c);
          if (E.length)
            for (var f = 0; f <= E.length; f++) {
              var h = E[f];
              if (!(e && r[h] !== void 0)) {
                var p = c[h];
                t && kn(r[h]) && kn(p) && (p = De(e, t, r[h], p)),
                  !(p === void 0 || p === r[h]) &&
                    (i || ((i = !0), (r = Hn(r))), (r[h] = p));
              }
            }
        }
      }
      return r;
    }
    function kn(e) {
      var t = typeof e > "u" ? "undefined" : Zm(e);
      return e != null && (t === "object" || t === "function");
    }
    function Ss(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Os(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Rs(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Cs(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ls(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function Ps(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Ns(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
      return (i[t] = n), i;
    }
    function Un(e, t) {
      if ((!Array.isArray(t) && xs(As), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var i = t[r];
          if (((n = n?.[i]), n === void 0)) return n;
        }
        return n;
      }
    }
    function Wn(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        i = e ?? r;
      if (i[t] === n) return i;
      var o = Hn(i);
      return (o[t] = n), o;
    }
    function Ds(e, t, n, r) {
      var i = void 0,
        o = t[r];
      if (r === t.length - 1) i = n;
      else {
        var a =
          kn(e) && kn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
        i = Ds(a, t, n, r + 1);
      }
      return Wn(e, o, i);
    }
    function zn(e, t, n) {
      return t.length ? Ds(e, t, n, 0) : n;
    }
    function Ms(e, t, n) {
      var r = e?.[t],
        i = n(r);
      return Wn(e, t, i);
    }
    function Fs(e, t, n) {
      var r = Un(e, t),
        i = n(r);
      return zn(e, t, i);
    }
    function qs(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !1, !1, e, t, n, r, i, o].concat(s))
        : De(!1, !1, e, t, n, r, i, o);
    }
    function Gs(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !1, !0, e, t, n, r, i, o].concat(s))
        : De(!1, !0, e, t, n, r, i, o);
    }
    function Xs(e, t, n, r, i, o, a) {
      var s = Un(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          c = arguments.length,
          E = Array(c > 7 ? c - 7 : 0),
          f = 7;
        f < c;
        f++
      )
        E[f - 7] = arguments[f];
      return (
        E.length
          ? (u = De.call.apply(De, [null, !1, !1, s, n, r, i, o, a].concat(E)))
          : (u = De(!1, !1, s, n, r, i, o, a)),
        zn(e, t, u)
      );
    }
    function Vs(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
        if (Jm.call(e, n[i])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var o = {}, a = Ti(e), s = 0; s < a.length; s++) {
        var u = a[s];
        n.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Bs(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !0, !1, e, t, n, r, i, o].concat(s))
        : De(!0, !1, e, t, n, r, i, o);
    }
    var e_ = {
      clone: Hn,
      addLast: Ss,
      addFirst: Os,
      removeLast: Rs,
      removeFirst: Cs,
      insert: Ls,
      removeAt: Ps,
      replaceAt: Ns,
      getIn: Un,
      set: Wn,
      setIn: zn,
      update: Ms,
      updateIn: Fs,
      merge: qs,
      mergeDeep: Gs,
      mergeIn: Xs,
      omit: Vs,
      addDefaults: Bs,
    };
    me.default = e_;
  });
  var Hs,
    t_,
    n_,
    r_,
    i_,
    o_,
    ks,
    Us,
    Ws = Ee(() => {
      "use strict";
      Ne();
      (Hs = ce(Rt())),
        ({
          IX2_PREVIEW_REQUESTED: t_,
          IX2_PLAYBACK_REQUESTED: n_,
          IX2_STOP_REQUESTED: r_,
          IX2_CLEAR_REQUESTED: i_,
        } = Te),
        (o_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (ks = Object.create(null, {
          [t_]: { value: "preview" },
          [n_]: { value: "playback" },
          [r_]: { value: "stop" },
          [i_]: { value: "clear" },
        })),
        (Us = (e = o_, t) => {
          if (t.type in ks) {
            let n = [ks[t.type]];
            return (0, Hs.setIn)(e, [n], { ...t.payload });
          }
          return e;
        });
    });
  var Oe,
    a_,
    s_,
    u_,
    c_,
    l_,
    f_,
    d_,
    p_,
    h_,
    g_,
    zs,
    v_,
    Ks,
    js = Ee(() => {
      "use strict";
      Ne();
      (Oe = ce(Rt())),
        ({
          IX2_SESSION_INITIALIZED: a_,
          IX2_SESSION_STARTED: s_,
          IX2_TEST_FRAME_RENDERED: u_,
          IX2_SESSION_STOPPED: c_,
          IX2_EVENT_LISTENER_ADDED: l_,
          IX2_EVENT_STATE_CHANGED: f_,
          IX2_ANIMATION_FRAME_CHANGED: d_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: p_,
          IX2_VIEWPORT_WIDTH_CHANGED: h_,
          IX2_MEDIA_QUERIES_DEFINED: g_,
        } = Te),
        (zs = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (v_ = 20),
        (Ks = (e = zs, t) => {
          switch (t.type) {
            case a_: {
              let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
              return (0, Oe.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: r,
              });
            }
            case s_:
              return (0, Oe.set)(e, "active", !0);
            case u_: {
              let {
                payload: { step: n = v_ },
              } = t;
              return (0, Oe.set)(e, "tick", e.tick + n);
            }
            case c_:
              return zs;
            case d_: {
              let {
                payload: { now: n },
              } = t;
              return (0, Oe.set)(e, "tick", n);
            }
            case l_: {
              let n = (0, Oe.addLast)(e.eventListeners, t.payload);
              return (0, Oe.set)(e, "eventListeners", n);
            }
            case f_: {
              let { stateKey: n, newState: r } = t.payload;
              return (0, Oe.setIn)(e, ["eventState", n], r);
            }
            case p_: {
              let { actionListId: n, isPlaying: r } = t.payload;
              return (0, Oe.setIn)(e, ["playbackState", n], r);
            }
            case h_: {
              let { width: n, mediaQueries: r } = t.payload,
                i = r.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: c } = r[a];
                if (n >= u && n <= c) {
                  o = s;
                  break;
                }
              }
              return (0, Oe.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case g_:
              return (0, Oe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Qs = d((x2, Ys) => {
    function E_() {
      (this.__data__ = []), (this.size = 0);
    }
    Ys.exports = E_;
  });
  var Kn = d((S2, $s) => {
    function y_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    $s.exports = y_;
  });
  var nn = d((O2, Zs) => {
    var m_ = Kn();
    function __(e, t) {
      for (var n = e.length; n--; ) if (m_(e[n][0], t)) return n;
      return -1;
    }
    Zs.exports = __;
  });
  var eu = d((R2, Js) => {
    var I_ = nn(),
      T_ = Array.prototype,
      b_ = T_.splice;
    function w_(e) {
      var t = this.__data__,
        n = I_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : b_.call(t, n, 1), --this.size, !0;
    }
    Js.exports = w_;
  });
  var nu = d((C2, tu) => {
    var A_ = nn();
    function x_(e) {
      var t = this.__data__,
        n = A_(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    tu.exports = x_;
  });
  var iu = d((L2, ru) => {
    var S_ = nn();
    function O_(e) {
      return S_(this.__data__, e) > -1;
    }
    ru.exports = O_;
  });
  var au = d((P2, ou) => {
    var R_ = nn();
    function C_(e, t) {
      var n = this.__data__,
        r = R_(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    ou.exports = C_;
  });
  var rn = d((N2, su) => {
    var L_ = Qs(),
      P_ = eu(),
      N_ = nu(),
      D_ = iu(),
      M_ = au();
    function Ct(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ct.prototype.clear = L_;
    Ct.prototype.delete = P_;
    Ct.prototype.get = N_;
    Ct.prototype.has = D_;
    Ct.prototype.set = M_;
    su.exports = Ct;
  });
  var cu = d((D2, uu) => {
    var F_ = rn();
    function q_() {
      (this.__data__ = new F_()), (this.size = 0);
    }
    uu.exports = q_;
  });
  var fu = d((M2, lu) => {
    function G_(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    lu.exports = G_;
  });
  var pu = d((F2, du) => {
    function X_(e) {
      return this.__data__.get(e);
    }
    du.exports = X_;
  });
  var gu = d((q2, hu) => {
    function V_(e) {
      return this.__data__.has(e);
    }
    hu.exports = V_;
  });
  var Je = d((G2, vu) => {
    function B_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    vu.exports = B_;
  });
  var bi = d((X2, Eu) => {
    var k_ = lt(),
      H_ = Je(),
      U_ = "[object AsyncFunction]",
      W_ = "[object Function]",
      z_ = "[object GeneratorFunction]",
      K_ = "[object Proxy]";
    function j_(e) {
      if (!H_(e)) return !1;
      var t = k_(e);
      return t == W_ || t == z_ || t == U_ || t == K_;
    }
    Eu.exports = j_;
  });
  var mu = d((V2, yu) => {
    var Y_ = Ue(),
      Q_ = Y_["__core-js_shared__"];
    yu.exports = Q_;
  });
  var Tu = d((B2, Iu) => {
    var wi = mu(),
      _u = (function () {
        var e = /[^.]+$/.exec((wi && wi.keys && wi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function $_(e) {
      return !!_u && _u in e;
    }
    Iu.exports = $_;
  });
  var Ai = d((k2, bu) => {
    var Z_ = Function.prototype,
      J_ = Z_.toString;
    function eI(e) {
      if (e != null) {
        try {
          return J_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    bu.exports = eI;
  });
  var Au = d((H2, wu) => {
    var tI = bi(),
      nI = Tu(),
      rI = Je(),
      iI = Ai(),
      oI = /[\\^$.*+?()[\]{}|]/g,
      aI = /^\[object .+?Constructor\]$/,
      sI = Function.prototype,
      uI = Object.prototype,
      cI = sI.toString,
      lI = uI.hasOwnProperty,
      fI = RegExp(
        "^" +
          cI
            .call(lI)
            .replace(oI, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function dI(e) {
      if (!rI(e) || nI(e)) return !1;
      var t = tI(e) ? fI : aI;
      return t.test(iI(e));
    }
    wu.exports = dI;
  });
  var Su = d((U2, xu) => {
    function pI(e, t) {
      return e?.[t];
    }
    xu.exports = pI;
  });
  var ft = d((W2, Ou) => {
    var hI = Au(),
      gI = Su();
    function vI(e, t) {
      var n = gI(e, t);
      return hI(n) ? n : void 0;
    }
    Ou.exports = vI;
  });
  var jn = d((z2, Ru) => {
    var EI = ft(),
      yI = Ue(),
      mI = EI(yI, "Map");
    Ru.exports = mI;
  });
  var on = d((K2, Cu) => {
    var _I = ft(),
      II = _I(Object, "create");
    Cu.exports = II;
  });
  var Nu = d((j2, Pu) => {
    var Lu = on();
    function TI() {
      (this.__data__ = Lu ? Lu(null) : {}), (this.size = 0);
    }
    Pu.exports = TI;
  });
  var Mu = d((Y2, Du) => {
    function bI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Du.exports = bI;
  });
  var qu = d((Q2, Fu) => {
    var wI = on(),
      AI = "__lodash_hash_undefined__",
      xI = Object.prototype,
      SI = xI.hasOwnProperty;
    function OI(e) {
      var t = this.__data__;
      if (wI) {
        var n = t[e];
        return n === AI ? void 0 : n;
      }
      return SI.call(t, e) ? t[e] : void 0;
    }
    Fu.exports = OI;
  });
  var Xu = d(($2, Gu) => {
    var RI = on(),
      CI = Object.prototype,
      LI = CI.hasOwnProperty;
    function PI(e) {
      var t = this.__data__;
      return RI ? t[e] !== void 0 : LI.call(t, e);
    }
    Gu.exports = PI;
  });
  var Bu = d((Z2, Vu) => {
    var NI = on(),
      DI = "__lodash_hash_undefined__";
    function MI(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = NI && t === void 0 ? DI : t),
        this
      );
    }
    Vu.exports = MI;
  });
  var Hu = d((J2, ku) => {
    var FI = Nu(),
      qI = Mu(),
      GI = qu(),
      XI = Xu(),
      VI = Bu();
    function Lt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Lt.prototype.clear = FI;
    Lt.prototype.delete = qI;
    Lt.prototype.get = GI;
    Lt.prototype.has = XI;
    Lt.prototype.set = VI;
    ku.exports = Lt;
  });
  var zu = d((e1, Wu) => {
    var Uu = Hu(),
      BI = rn(),
      kI = jn();
    function HI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Uu(),
          map: new (kI || BI)(),
          string: new Uu(),
        });
    }
    Wu.exports = HI;
  });
  var ju = d((t1, Ku) => {
    function UI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Ku.exports = UI;
  });
  var an = d((n1, Yu) => {
    var WI = ju();
    function zI(e, t) {
      var n = e.__data__;
      return WI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    Yu.exports = zI;
  });
  var $u = d((r1, Qu) => {
    var KI = an();
    function jI(e) {
      var t = KI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Qu.exports = jI;
  });
  var Ju = d((i1, Zu) => {
    var YI = an();
    function QI(e) {
      return YI(this, e).get(e);
    }
    Zu.exports = QI;
  });
  var tc = d((o1, ec) => {
    var $I = an();
    function ZI(e) {
      return $I(this, e).has(e);
    }
    ec.exports = ZI;
  });
  var rc = d((a1, nc) => {
    var JI = an();
    function eT(e, t) {
      var n = JI(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    nc.exports = eT;
  });
  var Yn = d((s1, ic) => {
    var tT = zu(),
      nT = $u(),
      rT = Ju(),
      iT = tc(),
      oT = rc();
    function Pt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Pt.prototype.clear = tT;
    Pt.prototype.delete = nT;
    Pt.prototype.get = rT;
    Pt.prototype.has = iT;
    Pt.prototype.set = oT;
    ic.exports = Pt;
  });
  var ac = d((u1, oc) => {
    var aT = rn(),
      sT = jn(),
      uT = Yn(),
      cT = 200;
    function lT(e, t) {
      var n = this.__data__;
      if (n instanceof aT) {
        var r = n.__data__;
        if (!sT || r.length < cT - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new uT(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    oc.exports = lT;
  });
  var xi = d((c1, sc) => {
    var fT = rn(),
      dT = cu(),
      pT = fu(),
      hT = pu(),
      gT = gu(),
      vT = ac();
    function Nt(e) {
      var t = (this.__data__ = new fT(e));
      this.size = t.size;
    }
    Nt.prototype.clear = dT;
    Nt.prototype.delete = pT;
    Nt.prototype.get = hT;
    Nt.prototype.has = gT;
    Nt.prototype.set = vT;
    sc.exports = Nt;
  });
  var cc = d((l1, uc) => {
    var ET = "__lodash_hash_undefined__";
    function yT(e) {
      return this.__data__.set(e, ET), this;
    }
    uc.exports = yT;
  });
  var fc = d((f1, lc) => {
    function mT(e) {
      return this.__data__.has(e);
    }
    lc.exports = mT;
  });
  var pc = d((d1, dc) => {
    var _T = Yn(),
      IT = cc(),
      TT = fc();
    function Qn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new _T(); ++t < n; ) this.add(e[t]);
    }
    Qn.prototype.add = Qn.prototype.push = IT;
    Qn.prototype.has = TT;
    dc.exports = Qn;
  });
  var gc = d((p1, hc) => {
    function bT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    hc.exports = bT;
  });
  var Ec = d((h1, vc) => {
    function wT(e, t) {
      return e.has(t);
    }
    vc.exports = wT;
  });
  var Si = d((g1, yc) => {
    var AT = pc(),
      xT = gc(),
      ST = Ec(),
      OT = 1,
      RT = 2;
    function CT(e, t, n, r, i, o) {
      var a = n & OT,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var c = o.get(e),
        E = o.get(t);
      if (c && E) return c == t && E == e;
      var f = -1,
        h = !0,
        p = n & RT ? new AT() : void 0;
      for (o.set(e, t), o.set(t, e); ++f < s; ) {
        var g = e[f],
          m = t[f];
        if (r) var I = a ? r(m, g, f, t, e, o) : r(g, m, f, e, t, o);
        if (I !== void 0) {
          if (I) continue;
          h = !1;
          break;
        }
        if (p) {
          if (
            !xT(t, function (_, O) {
              if (!ST(p, O) && (g === _ || i(g, _, n, r, o))) return p.push(O);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(g === m || i(g, m, n, r, o))) {
          h = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), h;
    }
    yc.exports = CT;
  });
  var _c = d((v1, mc) => {
    var LT = Ue(),
      PT = LT.Uint8Array;
    mc.exports = PT;
  });
  var Tc = d((E1, Ic) => {
    function NT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, i) {
          n[++t] = [i, r];
        }),
        n
      );
    }
    Ic.exports = NT;
  });
  var wc = d((y1, bc) => {
    function DT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    bc.exports = DT;
  });
  var Rc = d((m1, Oc) => {
    var Ac = xt(),
      xc = _c(),
      MT = Kn(),
      FT = Si(),
      qT = Tc(),
      GT = wc(),
      XT = 1,
      VT = 2,
      BT = "[object Boolean]",
      kT = "[object Date]",
      HT = "[object Error]",
      UT = "[object Map]",
      WT = "[object Number]",
      zT = "[object RegExp]",
      KT = "[object Set]",
      jT = "[object String]",
      YT = "[object Symbol]",
      QT = "[object ArrayBuffer]",
      $T = "[object DataView]",
      Sc = Ac ? Ac.prototype : void 0,
      Oi = Sc ? Sc.valueOf : void 0;
    function ZT(e, t, n, r, i, o, a) {
      switch (n) {
        case $T:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case QT:
          return !(e.byteLength != t.byteLength || !o(new xc(e), new xc(t)));
        case BT:
        case kT:
        case WT:
          return MT(+e, +t);
        case HT:
          return e.name == t.name && e.message == t.message;
        case zT:
        case jT:
          return e == t + "";
        case UT:
          var s = qT;
        case KT:
          var u = r & XT;
          if ((s || (s = GT), e.size != t.size && !u)) return !1;
          var c = a.get(e);
          if (c) return c == t;
          (r |= VT), a.set(e, t);
          var E = FT(s(e), s(t), r, i, o, a);
          return a.delete(e), E;
        case YT:
          if (Oi) return Oi.call(e) == Oi.call(t);
      }
      return !1;
    }
    Oc.exports = ZT;
  });
  var $n = d((_1, Cc) => {
    function JT(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
      return e;
    }
    Cc.exports = JT;
  });
  var be = d((I1, Lc) => {
    var eb = Array.isArray;
    Lc.exports = eb;
  });
  var Ri = d((T1, Pc) => {
    var tb = $n(),
      nb = be();
    function rb(e, t, n) {
      var r = t(e);
      return nb(e) ? r : tb(r, n(e));
    }
    Pc.exports = rb;
  });
  var Dc = d((b1, Nc) => {
    function ib(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
        var a = e[n];
        t(a, n, e) && (o[i++] = a);
      }
      return o;
    }
    Nc.exports = ib;
  });
  var Ci = d((w1, Mc) => {
    function ob() {
      return [];
    }
    Mc.exports = ob;
  });
  var Li = d((A1, qc) => {
    var ab = Dc(),
      sb = Ci(),
      ub = Object.prototype,
      cb = ub.propertyIsEnumerable,
      Fc = Object.getOwnPropertySymbols,
      lb = Fc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                ab(Fc(e), function (t) {
                  return cb.call(e, t);
                }));
          }
        : sb;
    qc.exports = lb;
  });
  var Xc = d((x1, Gc) => {
    function fb(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    Gc.exports = fb;
  });
  var Bc = d((S1, Vc) => {
    var db = lt(),
      pb = it(),
      hb = "[object Arguments]";
    function gb(e) {
      return pb(e) && db(e) == hb;
    }
    Vc.exports = gb;
  });
  var sn = d((O1, Uc) => {
    var kc = Bc(),
      vb = it(),
      Hc = Object.prototype,
      Eb = Hc.hasOwnProperty,
      yb = Hc.propertyIsEnumerable,
      mb = kc(
        (function () {
          return arguments;
        })()
      )
        ? kc
        : function (e) {
            return vb(e) && Eb.call(e, "callee") && !yb.call(e, "callee");
          };
    Uc.exports = mb;
  });
  var zc = d((R1, Wc) => {
    function _b() {
      return !1;
    }
    Wc.exports = _b;
  });
  var Zn = d((un, Dt) => {
    var Ib = Ue(),
      Tb = zc(),
      Yc = typeof un == "object" && un && !un.nodeType && un,
      Kc = Yc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
      bb = Kc && Kc.exports === Yc,
      jc = bb ? Ib.Buffer : void 0,
      wb = jc ? jc.isBuffer : void 0,
      Ab = wb || Tb;
    Dt.exports = Ab;
  });
  var Jn = d((C1, Qc) => {
    var xb = 9007199254740991,
      Sb = /^(?:0|[1-9]\d*)$/;
    function Ob(e, t) {
      var n = typeof e;
      return (
        (t = t ?? xb),
        !!t &&
          (n == "number" || (n != "symbol" && Sb.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Qc.exports = Ob;
  });
  var er = d((L1, $c) => {
    var Rb = 9007199254740991;
    function Cb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rb;
    }
    $c.exports = Cb;
  });
  var Jc = d((P1, Zc) => {
    var Lb = lt(),
      Pb = er(),
      Nb = it(),
      Db = "[object Arguments]",
      Mb = "[object Array]",
      Fb = "[object Boolean]",
      qb = "[object Date]",
      Gb = "[object Error]",
      Xb = "[object Function]",
      Vb = "[object Map]",
      Bb = "[object Number]",
      kb = "[object Object]",
      Hb = "[object RegExp]",
      Ub = "[object Set]",
      Wb = "[object String]",
      zb = "[object WeakMap]",
      Kb = "[object ArrayBuffer]",
      jb = "[object DataView]",
      Yb = "[object Float32Array]",
      Qb = "[object Float64Array]",
      $b = "[object Int8Array]",
      Zb = "[object Int16Array]",
      Jb = "[object Int32Array]",
      e0 = "[object Uint8Array]",
      t0 = "[object Uint8ClampedArray]",
      n0 = "[object Uint16Array]",
      r0 = "[object Uint32Array]",
      ge = {};
    ge[Yb] =
      ge[Qb] =
      ge[$b] =
      ge[Zb] =
      ge[Jb] =
      ge[e0] =
      ge[t0] =
      ge[n0] =
      ge[r0] =
        !0;
    ge[Db] =
      ge[Mb] =
      ge[Kb] =
      ge[Fb] =
      ge[jb] =
      ge[qb] =
      ge[Gb] =
      ge[Xb] =
      ge[Vb] =
      ge[Bb] =
      ge[kb] =
      ge[Hb] =
      ge[Ub] =
      ge[Wb] =
      ge[zb] =
        !1;
    function i0(e) {
      return Nb(e) && Pb(e.length) && !!ge[Lb(e)];
    }
    Zc.exports = i0;
  });
  var tl = d((N1, el) => {
    function o0(e) {
      return function (t) {
        return e(t);
      };
    }
    el.exports = o0;
  });
  var rl = d((cn, Mt) => {
    var a0 = ri(),
      nl = typeof cn == "object" && cn && !cn.nodeType && cn,
      ln = nl && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      s0 = ln && ln.exports === nl,
      Pi = s0 && a0.process,
      u0 = (function () {
        try {
          var e = ln && ln.require && ln.require("util").types;
          return e || (Pi && Pi.binding && Pi.binding("util"));
        } catch {}
      })();
    Mt.exports = u0;
  });
  var tr = d((D1, al) => {
    var c0 = Jc(),
      l0 = tl(),
      il = rl(),
      ol = il && il.isTypedArray,
      f0 = ol ? l0(ol) : c0;
    al.exports = f0;
  });
  var Ni = d((M1, sl) => {
    var d0 = Xc(),
      p0 = sn(),
      h0 = be(),
      g0 = Zn(),
      v0 = Jn(),
      E0 = tr(),
      y0 = Object.prototype,
      m0 = y0.hasOwnProperty;
    function _0(e, t) {
      var n = h0(e),
        r = !n && p0(e),
        i = !n && !r && g0(e),
        o = !n && !r && !i && E0(e),
        a = n || r || i || o,
        s = a ? d0(e.length, String) : [],
        u = s.length;
      for (var c in e)
        (t || m0.call(e, c)) &&
          !(
            a &&
            (c == "length" ||
              (i && (c == "offset" || c == "parent")) ||
              (o &&
                (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
              v0(c, u))
          ) &&
          s.push(c);
      return s;
    }
    sl.exports = _0;
  });
  var nr = d((F1, ul) => {
    var I0 = Object.prototype;
    function T0(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || I0;
      return e === n;
    }
    ul.exports = T0;
  });
  var ll = d((q1, cl) => {
    var b0 = ii(),
      w0 = b0(Object.keys, Object);
    cl.exports = w0;
  });
  var rr = d((G1, fl) => {
    var A0 = nr(),
      x0 = ll(),
      S0 = Object.prototype,
      O0 = S0.hasOwnProperty;
    function R0(e) {
      if (!A0(e)) return x0(e);
      var t = [];
      for (var n in Object(e)) O0.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    fl.exports = R0;
  });
  var Et = d((X1, dl) => {
    var C0 = bi(),
      L0 = er();
    function P0(e) {
      return e != null && L0(e.length) && !C0(e);
    }
    dl.exports = P0;
  });
  var fn = d((V1, pl) => {
    var N0 = Ni(),
      D0 = rr(),
      M0 = Et();
    function F0(e) {
      return M0(e) ? N0(e) : D0(e);
    }
    pl.exports = F0;
  });
  var gl = d((B1, hl) => {
    var q0 = Ri(),
      G0 = Li(),
      X0 = fn();
    function V0(e) {
      return q0(e, X0, G0);
    }
    hl.exports = V0;
  });
  var yl = d((k1, El) => {
    var vl = gl(),
      B0 = 1,
      k0 = Object.prototype,
      H0 = k0.hasOwnProperty;
    function U0(e, t, n, r, i, o) {
      var a = n & B0,
        s = vl(e),
        u = s.length,
        c = vl(t),
        E = c.length;
      if (u != E && !a) return !1;
      for (var f = u; f--; ) {
        var h = s[f];
        if (!(a ? h in t : H0.call(t, h))) return !1;
      }
      var p = o.get(e),
        g = o.get(t);
      if (p && g) return p == t && g == e;
      var m = !0;
      o.set(e, t), o.set(t, e);
      for (var I = a; ++f < u; ) {
        h = s[f];
        var _ = e[h],
          O = t[h];
        if (r) var x = a ? r(O, _, h, t, e, o) : r(_, O, h, e, t, o);
        if (!(x === void 0 ? _ === O || i(_, O, n, r, o) : x)) {
          m = !1;
          break;
        }
        I || (I = h == "constructor");
      }
      if (m && !I) {
        var R = e.constructor,
          P = t.constructor;
        R != P &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof R == "function" &&
            R instanceof R &&
            typeof P == "function" &&
            P instanceof P
          ) &&
          (m = !1);
      }
      return o.delete(e), o.delete(t), m;
    }
    El.exports = U0;
  });
  var _l = d((H1, ml) => {
    var W0 = ft(),
      z0 = Ue(),
      K0 = W0(z0, "DataView");
    ml.exports = K0;
  });
  var Tl = d((U1, Il) => {
    var j0 = ft(),
      Y0 = Ue(),
      Q0 = j0(Y0, "Promise");
    Il.exports = Q0;
  });
  var wl = d((W1, bl) => {
    var $0 = ft(),
      Z0 = Ue(),
      J0 = $0(Z0, "Set");
    bl.exports = J0;
  });
  var Di = d((z1, Al) => {
    var ew = ft(),
      tw = Ue(),
      nw = ew(tw, "WeakMap");
    Al.exports = nw;
  });
  var ir = d((K1, Pl) => {
    var Mi = _l(),
      Fi = jn(),
      qi = Tl(),
      Gi = wl(),
      Xi = Di(),
      Ll = lt(),
      Ft = Ai(),
      xl = "[object Map]",
      rw = "[object Object]",
      Sl = "[object Promise]",
      Ol = "[object Set]",
      Rl = "[object WeakMap]",
      Cl = "[object DataView]",
      iw = Ft(Mi),
      ow = Ft(Fi),
      aw = Ft(qi),
      sw = Ft(Gi),
      uw = Ft(Xi),
      yt = Ll;
    ((Mi && yt(new Mi(new ArrayBuffer(1))) != Cl) ||
      (Fi && yt(new Fi()) != xl) ||
      (qi && yt(qi.resolve()) != Sl) ||
      (Gi && yt(new Gi()) != Ol) ||
      (Xi && yt(new Xi()) != Rl)) &&
      (yt = function (e) {
        var t = Ll(e),
          n = t == rw ? e.constructor : void 0,
          r = n ? Ft(n) : "";
        if (r)
          switch (r) {
            case iw:
              return Cl;
            case ow:
              return xl;
            case aw:
              return Sl;
            case sw:
              return Ol;
            case uw:
              return Rl;
          }
        return t;
      });
    Pl.exports = yt;
  });
  var Vl = d((j1, Xl) => {
    var Vi = xi(),
      cw = Si(),
      lw = Rc(),
      fw = yl(),
      Nl = ir(),
      Dl = be(),
      Ml = Zn(),
      dw = tr(),
      pw = 1,
      Fl = "[object Arguments]",
      ql = "[object Array]",
      or = "[object Object]",
      hw = Object.prototype,
      Gl = hw.hasOwnProperty;
    function gw(e, t, n, r, i, o) {
      var a = Dl(e),
        s = Dl(t),
        u = a ? ql : Nl(e),
        c = s ? ql : Nl(t);
      (u = u == Fl ? or : u), (c = c == Fl ? or : c);
      var E = u == or,
        f = c == or,
        h = u == c;
      if (h && Ml(e)) {
        if (!Ml(t)) return !1;
        (a = !0), (E = !1);
      }
      if (h && !E)
        return (
          o || (o = new Vi()),
          a || dw(e) ? cw(e, t, n, r, i, o) : lw(e, t, u, n, r, i, o)
        );
      if (!(n & pw)) {
        var p = E && Gl.call(e, "__wrapped__"),
          g = f && Gl.call(t, "__wrapped__");
        if (p || g) {
          var m = p ? e.value() : e,
            I = g ? t.value() : t;
          return o || (o = new Vi()), i(m, I, n, r, o);
        }
      }
      return h ? (o || (o = new Vi()), fw(e, t, n, r, i, o)) : !1;
    }
    Xl.exports = gw;
  });
  var Bi = d((Y1, Hl) => {
    var vw = Vl(),
      Bl = it();
    function kl(e, t, n, r, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Bl(e) && !Bl(t))
        ? e !== e && t !== t
        : vw(e, t, n, r, kl, i);
    }
    Hl.exports = kl;
  });
  var Wl = d((Q1, Ul) => {
    var Ew = xi(),
      yw = Bi(),
      mw = 1,
      _w = 2;
    function Iw(e, t, n, r) {
      var i = n.length,
        o = i,
        a = !r;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = n[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = n[i];
        var u = s[0],
          c = e[u],
          E = s[1];
        if (a && s[2]) {
          if (c === void 0 && !(u in e)) return !1;
        } else {
          var f = new Ew();
          if (r) var h = r(c, E, u, e, t, f);
          if (!(h === void 0 ? yw(E, c, mw | _w, r, f) : h)) return !1;
        }
      }
      return !0;
    }
    Ul.exports = Iw;
  });
  var ki = d(($1, zl) => {
    var Tw = Je();
    function bw(e) {
      return e === e && !Tw(e);
    }
    zl.exports = bw;
  });
  var jl = d((Z1, Kl) => {
    var ww = ki(),
      Aw = fn();
    function xw(e) {
      for (var t = Aw(e), n = t.length; n--; ) {
        var r = t[n],
          i = e[r];
        t[n] = [r, i, ww(i)];
      }
      return t;
    }
    Kl.exports = xw;
  });
  var Hi = d((J1, Yl) => {
    function Sw(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    Yl.exports = Sw;
  });
  var $l = d((eq, Ql) => {
    var Ow = Wl(),
      Rw = jl(),
      Cw = Hi();
    function Lw(e) {
      var t = Rw(e);
      return t.length == 1 && t[0][2]
        ? Cw(t[0][0], t[0][1])
        : function (n) {
            return n === e || Ow(n, e, t);
          };
    }
    Ql.exports = Lw;
  });
  var dn = d((tq, Zl) => {
    var Pw = lt(),
      Nw = it(),
      Dw = "[object Symbol]";
    function Mw(e) {
      return typeof e == "symbol" || (Nw(e) && Pw(e) == Dw);
    }
    Zl.exports = Mw;
  });
  var ar = d((nq, Jl) => {
    var Fw = be(),
      qw = dn(),
      Gw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Xw = /^\w*$/;
    function Vw(e, t) {
      if (Fw(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        qw(e)
        ? !0
        : Xw.test(e) || !Gw.test(e) || (t != null && e in Object(t));
    }
    Jl.exports = Vw;
  });
  var nf = d((rq, tf) => {
    var ef = Yn(),
      Bw = "Expected a function";
    function Ui(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Bw);
      var n = function () {
        var r = arguments,
          i = t ? t.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (Ui.Cache || ef)()), n;
    }
    Ui.Cache = ef;
    tf.exports = Ui;
  });
  var of = d((iq, rf) => {
    var kw = nf(),
      Hw = 500;
    function Uw(e) {
      var t = kw(e, function (r) {
          return n.size === Hw && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    rf.exports = Uw;
  });
  var sf = d((oq, af) => {
    var Ww = of(),
      zw =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Kw = /\\(\\)?/g,
      jw = Ww(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(zw, function (n, r, i, o) {
            t.push(i ? o.replace(Kw, "$1") : r || n);
          }),
          t
        );
      });
    af.exports = jw;
  });
  var Wi = d((aq, uf) => {
    function Yw(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
        i[n] = t(e[n], n, e);
      return i;
    }
    uf.exports = Yw;
  });
  var hf = d((sq, pf) => {
    var cf = xt(),
      Qw = Wi(),
      $w = be(),
      Zw = dn(),
      Jw = 1 / 0,
      lf = cf ? cf.prototype : void 0,
      ff = lf ? lf.toString : void 0;
    function df(e) {
      if (typeof e == "string") return e;
      if ($w(e)) return Qw(e, df) + "";
      if (Zw(e)) return ff ? ff.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Jw ? "-0" : t;
    }
    pf.exports = df;
  });
  var vf = d((uq, gf) => {
    var eA = hf();
    function tA(e) {
      return e == null ? "" : eA(e);
    }
    gf.exports = tA;
  });
  var pn = d((cq, Ef) => {
    var nA = be(),
      rA = ar(),
      iA = sf(),
      oA = vf();
    function aA(e, t) {
      return nA(e) ? e : rA(e, t) ? [e] : iA(oA(e));
    }
    Ef.exports = aA;
  });
  var qt = d((lq, yf) => {
    var sA = dn(),
      uA = 1 / 0;
    function cA(e) {
      if (typeof e == "string" || sA(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -uA ? "-0" : t;
    }
    yf.exports = cA;
  });
  var sr = d((fq, mf) => {
    var lA = pn(),
      fA = qt();
    function dA(e, t) {
      t = lA(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[fA(t[n++])];
      return n && n == r ? e : void 0;
    }
    mf.exports = dA;
  });
  var ur = d((dq, _f) => {
    var pA = sr();
    function hA(e, t, n) {
      var r = e == null ? void 0 : pA(e, t);
      return r === void 0 ? n : r;
    }
    _f.exports = hA;
  });
  var Tf = d((pq, If) => {
    function gA(e, t) {
      return e != null && t in Object(e);
    }
    If.exports = gA;
  });
  var wf = d((hq, bf) => {
    var vA = pn(),
      EA = sn(),
      yA = be(),
      mA = Jn(),
      _A = er(),
      IA = qt();
    function TA(e, t, n) {
      t = vA(t, e);
      for (var r = -1, i = t.length, o = !1; ++r < i; ) {
        var a = IA(t[r]);
        if (!(o = e != null && n(e, a))) break;
        e = e[a];
      }
      return o || ++r != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && _A(i) && mA(a, i) && (yA(e) || EA(e)));
    }
    bf.exports = TA;
  });
  var xf = d((gq, Af) => {
    var bA = Tf(),
      wA = wf();
    function AA(e, t) {
      return e != null && wA(e, t, bA);
    }
    Af.exports = AA;
  });
  var Of = d((vq, Sf) => {
    var xA = Bi(),
      SA = ur(),
      OA = xf(),
      RA = ar(),
      CA = ki(),
      LA = Hi(),
      PA = qt(),
      NA = 1,
      DA = 2;
    function MA(e, t) {
      return RA(e) && CA(t)
        ? LA(PA(e), t)
        : function (n) {
            var r = SA(n, e);
            return r === void 0 && r === t ? OA(n, e) : xA(t, r, NA | DA);
          };
    }
    Sf.exports = MA;
  });
  var cr = d((Eq, Rf) => {
    function FA(e) {
      return e;
    }
    Rf.exports = FA;
  });
  var zi = d((yq, Cf) => {
    function qA(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Cf.exports = qA;
  });
  var Pf = d((mq, Lf) => {
    var GA = sr();
    function XA(e) {
      return function (t) {
        return GA(t, e);
      };
    }
    Lf.exports = XA;
  });
  var Df = d((_q, Nf) => {
    var VA = zi(),
      BA = Pf(),
      kA = ar(),
      HA = qt();
    function UA(e) {
      return kA(e) ? VA(HA(e)) : BA(e);
    }
    Nf.exports = UA;
  });
  var dt = d((Iq, Mf) => {
    var WA = $l(),
      zA = Of(),
      KA = cr(),
      jA = be(),
      YA = Df();
    function QA(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? KA
        : typeof e == "object"
        ? jA(e)
          ? zA(e[0], e[1])
          : WA(e)
        : YA(e);
    }
    Mf.exports = QA;
  });
  var Ki = d((Tq, Ff) => {
    var $A = dt(),
      ZA = Et(),
      JA = fn();
    function ex(e) {
      return function (t, n, r) {
        var i = Object(t);
        if (!ZA(t)) {
          var o = $A(n, 3);
          (t = JA(t)),
            (n = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, n, r);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Ff.exports = ex;
  });
  var ji = d((bq, qf) => {
    function tx(e, t, n, r) {
      for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    qf.exports = tx;
  });
  var Xf = d((wq, Gf) => {
    var nx = /\s/;
    function rx(e) {
      for (var t = e.length; t-- && nx.test(e.charAt(t)); );
      return t;
    }
    Gf.exports = rx;
  });
  var Bf = d((Aq, Vf) => {
    var ix = Xf(),
      ox = /^\s+/;
    function ax(e) {
      return e && e.slice(0, ix(e) + 1).replace(ox, "");
    }
    Vf.exports = ax;
  });
  var lr = d((xq, Uf) => {
    var sx = Bf(),
      kf = Je(),
      ux = dn(),
      Hf = 0 / 0,
      cx = /^[-+]0x[0-9a-f]+$/i,
      lx = /^0b[01]+$/i,
      fx = /^0o[0-7]+$/i,
      dx = parseInt;
    function px(e) {
      if (typeof e == "number") return e;
      if (ux(e)) return Hf;
      if (kf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = kf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = sx(e);
      var n = lx.test(e);
      return n || fx.test(e) ? dx(e.slice(2), n ? 2 : 8) : cx.test(e) ? Hf : +e;
    }
    Uf.exports = px;
  });
  var Kf = d((Sq, zf) => {
    var hx = lr(),
      Wf = 1 / 0,
      gx = 17976931348623157e292;
    function vx(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = hx(e)), e === Wf || e === -Wf)) {
        var t = e < 0 ? -1 : 1;
        return t * gx;
      }
      return e === e ? e : 0;
    }
    zf.exports = vx;
  });
  var Yi = d((Oq, jf) => {
    var Ex = Kf();
    function yx(e) {
      var t = Ex(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    jf.exports = yx;
  });
  var Qf = d((Rq, Yf) => {
    var mx = ji(),
      _x = dt(),
      Ix = Yi(),
      Tx = Math.max;
    function bx(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = n == null ? 0 : Ix(n);
      return i < 0 && (i = Tx(r + i, 0)), mx(e, _x(t, 3), i);
    }
    Yf.exports = bx;
  });
  var Qi = d((Cq, $f) => {
    var wx = Ki(),
      Ax = Qf(),
      xx = wx(Ax);
    $f.exports = xx;
  });
  var ed = {};
  Le(ed, {
    ELEMENT_MATCHES: () => Sx,
    FLEX_PREFIXED: () => $i,
    IS_BROWSER_ENV: () => ze,
    TRANSFORM_PREFIXED: () => pt,
    TRANSFORM_STYLE_PREFIXED: () => dr,
    withBrowser: () => fr,
  });
  var Jf,
    ze,
    fr,
    Sx,
    $i,
    pt,
    Zf,
    dr,
    pr = Ee(() => {
      "use strict";
      (Jf = ce(Qi())),
        (ze = typeof window < "u"),
        (fr = (e, t) => (ze ? e() : t)),
        (Sx = fr(() =>
          (0, Jf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        ($i = fr(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            n = "";
          try {
            let { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return n;
          } catch {
            return n;
          }
        }, "flex")),
        (pt = fr(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              n = "Transform",
              { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i] + n;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Zf = pt.split("transform")[0]),
        (dr = Zf ? Zf + "TransformStyle" : "transformStyle");
    });
  var Zi = d((Lq, od) => {
    var Ox = 4,
      Rx = 0.001,
      Cx = 1e-7,
      Lx = 10,
      hn = 11,
      hr = 1 / (hn - 1),
      Px = typeof Float32Array == "function";
    function td(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function nd(e, t) {
      return 3 * t - 6 * e;
    }
    function rd(e) {
      return 3 * e;
    }
    function gr(e, t, n) {
      return ((td(t, n) * e + nd(t, n)) * e + rd(t)) * e;
    }
    function id(e, t, n) {
      return 3 * td(t, n) * e * e + 2 * nd(t, n) * e + rd(t);
    }
    function Nx(e, t, n, r, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (n - t) / 2), (o = gr(a, r, i) - e), o > 0 ? (n = a) : (t = a);
      while (Math.abs(o) > Cx && ++s < Lx);
      return a;
    }
    function Dx(e, t, n, r) {
      for (var i = 0; i < Ox; ++i) {
        var o = id(t, n, r);
        if (o === 0) return t;
        var a = gr(t, n, r) - e;
        t -= a / o;
      }
      return t;
    }
    od.exports = function (t, n, r, i) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = Px ? new Float32Array(hn) : new Array(hn);
      if (t !== n || r !== i)
        for (var a = 0; a < hn; ++a) o[a] = gr(a * hr, t, r);
      function s(u) {
        for (var c = 0, E = 1, f = hn - 1; E !== f && o[E] <= u; ++E) c += hr;
        --E;
        var h = (u - o[E]) / (o[E + 1] - o[E]),
          p = c + h * hr,
          g = id(p, t, r);
        return g >= Rx ? Dx(u, p, t, r) : g === 0 ? p : Nx(u, c, c + hr, t, r);
      }
      return function (c) {
        return t === n && r === i
          ? c
          : c === 0
          ? 0
          : c === 1
          ? 1
          : gr(s(c), n, i);
      };
    };
  });
  var vn = {};
  Le(vn, {
    bounce: () => vS,
    bouncePast: () => ES,
    ease: () => Mx,
    easeIn: () => Fx,
    easeInOut: () => Gx,
    easeOut: () => qx,
    inBack: () => sS,
    inCirc: () => rS,
    inCubic: () => kx,
    inElastic: () => lS,
    inExpo: () => eS,
    inOutBack: () => cS,
    inOutCirc: () => oS,
    inOutCubic: () => Ux,
    inOutElastic: () => dS,
    inOutExpo: () => nS,
    inOutQuad: () => Bx,
    inOutQuart: () => Kx,
    inOutQuint: () => Qx,
    inOutSine: () => Jx,
    inQuad: () => Xx,
    inQuart: () => Wx,
    inQuint: () => jx,
    inSine: () => $x,
    outBack: () => uS,
    outBounce: () => aS,
    outCirc: () => iS,
    outCubic: () => Hx,
    outElastic: () => fS,
    outExpo: () => tS,
    outQuad: () => Vx,
    outQuart: () => zx,
    outQuint: () => Yx,
    outSine: () => Zx,
    swingFrom: () => hS,
    swingFromTo: () => pS,
    swingTo: () => gS,
  });
  function Xx(e) {
    return Math.pow(e, 2);
  }
  function Vx(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Bx(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function kx(e) {
    return Math.pow(e, 3);
  }
  function Hx(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Ux(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Wx(e) {
    return Math.pow(e, 4);
  }
  function zx(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Kx(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function jx(e) {
    return Math.pow(e, 5);
  }
  function Yx(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Qx(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function $x(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Zx(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Jx(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function eS(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function tS(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function nS(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function rS(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function iS(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function oS(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function aS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function sS(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function uS(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function cS(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function lS(e) {
    let t = ot,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        -(
          r *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / n)
        ));
  }
  function fS(e) {
    let t = ot,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) + 1);
  }
  function dS(e) {
    let t = ot,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (n || (n = 0.3 * 1.5),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        e < 1
          ? -0.5 *
            (r *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n))
          : r *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n) *
              0.5 +
            1);
  }
  function pS(e) {
    let t = ot;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function hS(e) {
    let t = ot;
    return e * e * ((t + 1) * e - t);
  }
  function gS(e) {
    let t = ot;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function vS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function ES(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var gn,
    ot,
    Mx,
    Fx,
    qx,
    Gx,
    Ji = Ee(() => {
      "use strict";
      (gn = ce(Zi())),
        (ot = 1.70158),
        (Mx = (0, gn.default)(0.25, 0.1, 0.25, 1)),
        (Fx = (0, gn.default)(0.42, 0, 1, 1)),
        (qx = (0, gn.default)(0, 0, 0.58, 1)),
        (Gx = (0, gn.default)(0.42, 0, 0.58, 1));
    });
  var sd = {};
  Le(sd, {
    applyEasing: () => mS,
    createBezierEasing: () => yS,
    optimizeFloat: () => En,
  });
  function En(e, t = 5, n = 10) {
    let r = Math.pow(n, t),
      i = Number(Math.round(e * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function yS(e) {
    return (0, ad.default)(...e);
  }
  function mS(e, t, n) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : En(n ? (t > 0 ? n(t) : t) : t > 0 && e && vn[e] ? vn[e](t) : t);
  }
  var ad,
    eo = Ee(() => {
      "use strict";
      Ji();
      ad = ce(Zi());
    });
  var ld = {};
  Le(ld, {
    createElementState: () => cd,
    ixElements: () => NS,
    mergeActionState: () => to,
  });
  function cd(e, t, n, r, i) {
    let o =
      n === _S ? (0, Gt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Gt.mergeIn)(e, [r], { id: r, ref: t, refId: o, refType: n });
  }
  function to(e, t, n, r, i) {
    let o = MS(i);
    return (0, Gt.mergeIn)(e, [t, PS, n], r, o);
  }
  function MS(e) {
    let { config: t } = e;
    return DS.reduce((n, r) => {
      let i = r[0],
        o = r[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (n[o] = s), n;
    }, {});
  }
  var Gt,
    Nq,
    _S,
    Dq,
    IS,
    TS,
    bS,
    wS,
    AS,
    xS,
    SS,
    OS,
    RS,
    CS,
    LS,
    ud,
    PS,
    NS,
    DS,
    fd = Ee(() => {
      "use strict";
      Gt = ce(Rt());
      Ne();
      ({
        HTML_ELEMENT: Nq,
        PLAIN_OBJECT: _S,
        ABSTRACT_NODE: Dq,
        CONFIG_X_VALUE: IS,
        CONFIG_Y_VALUE: TS,
        CONFIG_Z_VALUE: bS,
        CONFIG_VALUE: wS,
        CONFIG_X_UNIT: AS,
        CONFIG_Y_UNIT: xS,
        CONFIG_Z_UNIT: SS,
        CONFIG_UNIT: OS,
      } = Ae),
        ({
          IX2_SESSION_STOPPED: RS,
          IX2_INSTANCE_ADDED: CS,
          IX2_ELEMENT_STATE_CHANGED: LS,
        } = Te),
        (ud = {}),
        (PS = "refState"),
        (NS = (e = ud, t = {}) => {
          switch (t.type) {
            case RS:
              return ud;
            case CS: {
              let {
                  elementId: n,
                  element: r,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, Gt.getIn)(u, [n, r]) !== r && (u = cd(u, r, a, n, o)),
                to(u, n, s, i, o)
              );
            }
            case LS: {
              let {
                elementId: n,
                actionTypeId: r,
                current: i,
                actionItem: o,
              } = t.payload;
              return to(e, n, r, i, o);
            }
            default:
              return e;
          }
        });
      DS = [
        [IS, AS],
        [TS, xS],
        [bS, SS],
        [wS, OS],
      ];
    });
  var dd = d((no) => {
    "use strict";
    Object.defineProperty(no, "__esModule", { value: !0 });
    function FS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    FS(no, {
      clearPlugin: function () {
        return HS;
      },
      createPluginInstance: function () {
        return BS;
      },
      getPluginConfig: function () {
        return qS;
      },
      getPluginDestination: function () {
        return VS;
      },
      getPluginDuration: function () {
        return GS;
      },
      getPluginOrigin: function () {
        return XS;
      },
      renderPlugin: function () {
        return kS;
      },
    });
    var qS = (e) => e.value,
      GS = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      XS = (e) => e || { value: 0 },
      VS = (e) => ({ value: e.value }),
      BS = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      kS = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      HS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var hd = d((ro) => {
    "use strict";
    Object.defineProperty(ro, "__esModule", { value: !0 });
    function US(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    US(ro, {
      clearPlugin: function () {
        return eO;
      },
      createPluginInstance: function () {
        return ZS;
      },
      getPluginConfig: function () {
        return jS;
      },
      getPluginDestination: function () {
        return $S;
      },
      getPluginDuration: function () {
        return YS;
      },
      getPluginOrigin: function () {
        return QS;
      },
      renderPlugin: function () {
        return JS;
      },
    });
    var WS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      zS = () => window.Webflow.require("spline"),
      KS = (e, t) => e.filter((n) => !t.includes(n)),
      jS = (e, t) => e.value[t],
      YS = () => null,
      pd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      QS = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let o = Object.keys(e),
            a = KS(r, o);
          return a.length ? a.reduce((u, c) => ((u[c] = pd[c]), u), e) : e;
        }
        return r.reduce((o, a) => ((o[a] = pd[a]), o), {});
      },
      $S = (e) => e.value,
      ZS = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? WS(n) : null;
      },
      JS = (e, t, n) => {
        let r = zS(),
          i = r.getInstance(e),
          o = n.config.target.objectId,
          a = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = o && s.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: c } = t;
            c.positionX != null && (u.position.x = c.positionX),
              c.positionY != null && (u.position.y = c.positionY),
              c.positionZ != null && (u.position.z = c.positionZ),
              c.rotationX != null && (u.rotation.x = c.rotationX),
              c.rotationY != null && (u.rotation.y = c.rotationY),
              c.rotationZ != null && (u.rotation.z = c.rotationZ),
              c.scaleX != null && (u.scale.x = c.scaleX),
              c.scaleY != null && (u.scale.y = c.scaleY),
              c.scaleZ != null && (u.scale.z = c.scaleZ);
          };
        i ? a(i.spline) : r.setLoadHandler(e, a);
      },
      eO = () => null;
  });
  var gd = d((ao) => {
    "use strict";
    Object.defineProperty(ao, "__esModule", { value: !0 });
    function tO(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    tO(ao, {
      clearPlugin: function () {
        return lO;
      },
      createPluginInstance: function () {
        return uO;
      },
      getPluginConfig: function () {
        return iO;
      },
      getPluginDestination: function () {
        return sO;
      },
      getPluginDuration: function () {
        return oO;
      },
      getPluginOrigin: function () {
        return aO;
      },
      renderPlugin: function () {
        return cO;
      },
    });
    var io = "--wf-rive-fit",
      oo = "--wf-rive-alignment",
      nO = (e) => document.querySelector(`[data-w-id="${e}"]`),
      rO = () => window.Webflow.require("rive"),
      iO = (e, t) => e.value.inputs[t],
      oO = () => null,
      aO = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let i in r) r[i] == null && (n[i] = 0);
        return n;
      },
      sO = (e) => e.value.inputs ?? {},
      uO = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? nO(n) : null;
      },
      cO = (e, { PLUGIN_RIVE: t }, n) => {
        let r = rO(),
          i = r.getInstance(e),
          o = r.rive.StateMachineInputType,
          { name: a, inputs: s = {} } = n.config.value || {};
        function u(c) {
          if (c.loaded) E();
          else {
            let f = () => {
              E(), c?.off("load", f);
            };
            c?.on("load", f);
          }
          function E() {
            let f = c.stateMachineInputs(a);
            if (f != null) {
              if ((c.isPlaying || c.play(a, !1), io in s || oo in s)) {
                let h = c.layout,
                  p = s[io] ?? h.fit,
                  g = s[oo] ?? h.alignment;
                (p !== h.fit || g !== h.alignment) &&
                  (c.layout = h.copyWith({ fit: p, alignment: g }));
              }
              for (let h in s) {
                if (h === io || h === oo) continue;
                let p = f.find((g) => g.name === h);
                if (p != null)
                  switch (p.type) {
                    case o.Boolean: {
                      if (s[h] != null) {
                        let g = !!s[h];
                        p.value = g;
                      }
                      break;
                    }
                    case o.Number: {
                      let g = t[h];
                      g != null && (p.value = g);
                      break;
                    }
                    case o.Trigger: {
                      s[h] && p.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? u(i.rive) : r.setLoadHandler(e, u);
      },
      lO = (e, t) => null;
  });
  var uo = d((so) => {
    "use strict";
    Object.defineProperty(so, "__esModule", { value: !0 });
    Object.defineProperty(so, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return fO;
      },
    });
    var vd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function fO(e) {
      let t,
        n,
        r,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof vd[o] == "string" ? vd[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (n = parseInt(u[1] + u[1], 16)),
            (r = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (n = parseInt(u.substring(2, 4), 16)),
            (r = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          c = parseFloat(u[0]),
          E = parseFloat(u[1].replace("%", "")) / 100,
          f = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let h = (1 - Math.abs(2 * f - 1)) * E,
          p = h * (1 - Math.abs(((c / 60) % 2) - 1)),
          g = f - h / 2,
          m,
          I,
          _;
        c >= 0 && c < 60
          ? ((m = h), (I = p), (_ = 0))
          : c >= 60 && c < 120
          ? ((m = p), (I = h), (_ = 0))
          : c >= 120 && c < 180
          ? ((m = 0), (I = h), (_ = p))
          : c >= 180 && c < 240
          ? ((m = 0), (I = p), (_ = h))
          : c >= 240 && c < 300
          ? ((m = p), (I = 0), (_ = h))
          : ((m = h), (I = 0), (_ = p)),
          (t = Math.round((m + g) * 255)),
          (n = Math.round((I + g) * 255)),
          (r = Math.round((_ + g) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          c = parseFloat(u[0]),
          E = parseFloat(u[1].replace("%", "")) / 100,
          f = parseFloat(u[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * f - 1)) * E,
          p = h * (1 - Math.abs(((c / 60) % 2) - 1)),
          g = f - h / 2,
          m,
          I,
          _;
        c >= 0 && c < 60
          ? ((m = h), (I = p), (_ = 0))
          : c >= 60 && c < 120
          ? ((m = p), (I = h), (_ = 0))
          : c >= 120 && c < 180
          ? ((m = 0), (I = h), (_ = p))
          : c >= 180 && c < 240
          ? ((m = 0), (I = p), (_ = h))
          : c >= 240 && c < 300
          ? ((m = p), (I = 0), (_ = h))
          : ((m = h), (I = 0), (_ = p)),
          (t = Math.round((m + g) * 255)),
          (n = Math.round((I + g) * 255)),
          (r = Math.round((_ + g) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: i };
    }
  });
  var Ed = d((co) => {
    "use strict";
    Object.defineProperty(co, "__esModule", { value: !0 });
    function dO(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    dO(co, {
      clearPlugin: function () {
        return _O;
      },
      createPluginInstance: function () {
        return yO;
      },
      getPluginConfig: function () {
        return hO;
      },
      getPluginDestination: function () {
        return EO;
      },
      getPluginDuration: function () {
        return gO;
      },
      getPluginOrigin: function () {
        return vO;
      },
      renderPlugin: function () {
        return mO;
      },
    });
    var pO = uo(),
      hO = (e, t) => e.value[t],
      gO = () => null,
      vO = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(i, 10) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, pO.normalizeColor)(i);
      },
      EO = (e) => e.value,
      yO = () => null,
      mO = (e, t, n) => {
        let r = n.config.target.objectId,
          i = n.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: s, green: u, blue: c, alpha: E } = o,
          f;
        a != null && (f = a + i),
          s != null &&
            c != null &&
            u != null &&
            E != null &&
            (f = `rgba(${s}, ${u}, ${c}, ${E})`),
          f != null && document.documentElement.style.setProperty(r, f);
      },
      _O = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var md = d((lo) => {
    "use strict";
    Object.defineProperty(lo, "__esModule", { value: !0 });
    Object.defineProperty(lo, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return AO;
      },
    });
    var vr = (Ne(), Ye(Ts)),
      IO = Er(dd()),
      TO = Er(hd()),
      bO = Er(gd()),
      wO = Er(Ed());
    function yd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (yd = function (r) {
        return r ? n : t;
      })(e);
    }
    function Er(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = yd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var AO = new Map([
      [vr.ActionTypeConsts.PLUGIN_LOTTIE, { ...IO }],
      [vr.ActionTypeConsts.PLUGIN_SPLINE, { ...TO }],
      [vr.ActionTypeConsts.PLUGIN_RIVE, { ...bO }],
      [vr.ActionTypeConsts.PLUGIN_VARIABLE, { ...wO }],
    ]);
  });
  var _d = {};
  Le(_d, {
    clearPlugin: () => Eo,
    createPluginInstance: () => SO,
    getPluginConfig: () => po,
    getPluginDestination: () => go,
    getPluginDuration: () => xO,
    getPluginOrigin: () => ho,
    isPluginType: () => mt,
    renderPlugin: () => vo,
  });
  function mt(e) {
    return fo.pluginMethodMap.has(e);
  }
  var fo,
    _t,
    po,
    ho,
    xO,
    go,
    SO,
    vo,
    Eo,
    yo = Ee(() => {
      "use strict";
      pr();
      fo = ce(md());
      (_t = (e) => (t) => {
        if (!ze) return () => null;
        let n = fo.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      }),
        (po = _t("getPluginConfig")),
        (ho = _t("getPluginOrigin")),
        (xO = _t("getPluginDuration")),
        (go = _t("getPluginDestination")),
        (SO = _t("createPluginInstance")),
        (vo = _t("renderPlugin")),
        (Eo = _t("clearPlugin"));
    });
  var Td = d((kq, Id) => {
    function OO(e, t) {
      return e == null || e !== e ? t : e;
    }
    Id.exports = OO;
  });
  var wd = d((Hq, bd) => {
    function RO(e, t, n, r) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
      return n;
    }
    bd.exports = RO;
  });
  var xd = d((Uq, Ad) => {
    function CO(e) {
      return function (t, n, r) {
        for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (n(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ad.exports = CO;
  });
  var Od = d((Wq, Sd) => {
    var LO = xd(),
      PO = LO();
    Sd.exports = PO;
  });
  var mo = d((zq, Rd) => {
    var NO = Od(),
      DO = fn();
    function MO(e, t) {
      return e && NO(e, t, DO);
    }
    Rd.exports = MO;
  });
  var Ld = d((Kq, Cd) => {
    var FO = Et();
    function qO(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!FO(n)) return e(n, r);
        for (
          var i = n.length, o = t ? i : -1, a = Object(n);
          (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;

        );
        return n;
      };
    }
    Cd.exports = qO;
  });
  var _o = d((jq, Pd) => {
    var GO = mo(),
      XO = Ld(),
      VO = XO(GO);
    Pd.exports = VO;
  });
  var Dd = d((Yq, Nd) => {
    function BO(e, t, n, r, i) {
      return (
        i(e, function (o, a, s) {
          n = r ? ((r = !1), o) : t(n, o, a, s);
        }),
        n
      );
    }
    Nd.exports = BO;
  });
  var Fd = d((Qq, Md) => {
    var kO = wd(),
      HO = _o(),
      UO = dt(),
      WO = Dd(),
      zO = be();
    function KO(e, t, n) {
      var r = zO(e) ? kO : WO,
        i = arguments.length < 3;
      return r(e, UO(t, 4), n, i, HO);
    }
    Md.exports = KO;
  });
  var Gd = d(($q, qd) => {
    var jO = ji(),
      YO = dt(),
      QO = Yi(),
      $O = Math.max,
      ZO = Math.min;
    function JO(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = r - 1;
      return (
        n !== void 0 &&
          ((i = QO(n)), (i = n < 0 ? $O(r + i, 0) : ZO(i, r - 1))),
        jO(e, YO(t, 3), i, !0)
      );
    }
    qd.exports = JO;
  });
  var Vd = d((Zq, Xd) => {
    var eR = Ki(),
      tR = Gd(),
      nR = eR(tR);
    Xd.exports = nR;
  });
  function Bd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function rR(e, t) {
    if (Bd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (!Object.hasOwn(t, n[i]) || !Bd(e[n[i]], t[n[i]])) return !1;
    return !0;
  }
  var Io,
    kd = Ee(() => {
      "use strict";
      Io = rR;
    });
  var ap = {};
  Le(ap, {
    cleanupHTMLElement: () => eC,
    clearAllStyles: () => JR,
    clearObjectCache: () => _R,
    getActionListProgress: () => nC,
    getAffectedElements: () => xo,
    getComputedStyle: () => OR,
    getDestinationValues: () => MR,
    getElementId: () => wR,
    getInstanceId: () => TR,
    getInstanceOrigin: () => LR,
    getItemConfigByKey: () => DR,
    getMaxDurationItemIndex: () => op,
    getNamespacedParameterId: () => oC,
    getRenderType: () => np,
    getStyleProp: () => FR,
    mediaQueriesEqual: () => sC,
    observeStore: () => SR,
    reduceListToGroup: () => rC,
    reifyState: () => AR,
    renderHTMLElement: () => qR,
    shallowEqual: () => Io,
    shouldAllowMediaQuery: () => aC,
    shouldNamespaceEventParameter: () => iC,
    stringifyTarget: () => uC,
  });
  function _R() {
    yr.clear();
  }
  function TR() {
    return "i" + IR++;
  }
  function wR(e, t) {
    for (let n in e) {
      let r = e[n];
      if (r && r.ref === t) return r.id;
    }
    return "e" + bR++;
  }
  function AR({ events: e, actionLists: t, site: n } = {}) {
    let r = (0, Tr.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = n && n.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: r,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function SR({ store: e, select: t, onChange: n, comparator: r = xR }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let c = t(i());
      if (c == null) {
        a();
        return;
      }
      r(c, s) || ((s = c), n(s, e));
    }
    return a;
  }
  function Wd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function xo({
    config: e,
    event: t,
    eventTarget: n,
    elementRoot: r,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (F, A) =>
          F.concat(
            xo({
              config: { target: A },
              event: t,
              eventTarget: n,
              elementRoot: r,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: c,
        getSiblingElements: E,
        matchSelector: f,
        elementContains: h,
        isSiblingNode: p,
      } = i,
      { target: g } = e;
    if (!g) return [];
    let {
      id: m,
      objectId: I,
      selector: _,
      selectorGuids: O,
      appliesTo: x,
      useEventTarget: R,
    } = Wd(g);
    if (I) return [yr.has(I) ? yr.get(I) : yr.set(I, {}).get(I)];
    if (x === mi.PAGE) {
      let F = a(m);
      return F ? [F] : [];
    }
    let C = (t?.action?.config?.affectedElements ?? {})[m || _] || {},
      B = !!(C.id || C.selector),
      k,
      z,
      j,
      te = t && s(Wd(t.target));
    if (
      (B
        ? ((k = C.limitAffectedElements), (z = te), (j = s(C)))
        : (z = j = s({ id: m, selector: _, selectorGuids: O })),
      t && R)
    ) {
      let F = n && (j || R === !0) ? [n] : u(te);
      if (j) {
        if (R === ER) return u(j).filter((A) => F.some((N) => h(A, N)));
        if (R === Hd) return u(j).filter((A) => F.some((N) => h(N, A)));
        if (R === Ud) return u(j).filter((A) => F.some((N) => p(N, A)));
      }
      return F;
    }
    return z == null || j == null
      ? []
      : ze && r
      ? u(j).filter((F) => r.contains(F))
      : k === Hd
      ? u(z, j)
      : k === vR
      ? c(u(z)).filter(f(j))
      : k === Ud
      ? E(u(z)).filter(f(j))
      : u(j);
  }
  function OR({ element: e, actionItem: t }) {
    if (!ze) return {};
    let { actionTypeId: n } = t;
    switch (n) {
      case Ht:
      case Ut:
      case Wt:
      case zt:
      case wr:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function LR(e, t = {}, n = {}, r, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = r;
    if (mt(a)) return ho(a)(t[a], r);
    switch (r.actionTypeId) {
      case Vt:
      case Bt:
      case kt:
      case In:
        return t[r.actionTypeId] || So[r.actionTypeId];
      case Tn:
        return RR(t[r.actionTypeId], r.config.filters);
      case bn:
        return CR(t[r.actionTypeId], r.config.fontVariations);
      case Jd:
        return { value: (0, at.default)(parseFloat(o(e, _r)), 1) };
      case Ht: {
        let s = o(e, et),
          u = o(e, tt),
          c,
          E;
        return (
          r.config.widthUnit === ht
            ? (c = zd.test(s) ? parseFloat(s) : parseFloat(n.width))
            : (c = (0, at.default)(parseFloat(s), parseFloat(n.width))),
          r.config.heightUnit === ht
            ? (E = zd.test(u) ? parseFloat(u) : parseFloat(n.height))
            : (E = (0, at.default)(parseFloat(u), parseFloat(n.height))),
          { widthValue: c, heightValue: E }
        );
      }
      case Ut:
      case Wt:
      case zt:
        return QR({
          element: e,
          actionTypeId: r.actionTypeId,
          computedStyle: n,
          getStyle: o,
        });
      case wr:
        return { value: (0, at.default)(o(e, Ir), n.display) };
      case mR:
        return t[r.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function MR({ element: e, actionItem: t, elementApi: n }) {
    if (mt(t.actionTypeId)) return go(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Vt:
      case Bt:
      case kt:
      case In: {
        let { xValue: r, yValue: i, zValue: o } = t.config;
        return { xValue: r, yValue: i, zValue: o };
      }
      case Ht: {
        let { getStyle: r, setStyle: i, getProperty: o } = n,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: c } = t.config;
        if (!ze) return { widthValue: u, heightValue: c };
        if (a === ht) {
          let E = r(e, et);
          i(e, et, ""), (u = o(e, "offsetWidth")), i(e, et, E);
        }
        if (s === ht) {
          let E = r(e, tt);
          i(e, tt, ""), (c = o(e, "offsetHeight")), i(e, tt, E);
        }
        return { widthValue: u, heightValue: c };
      }
      case Ut:
      case Wt:
      case zt: {
        let {
          rValue: r,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = n,
            c = u(e, s),
            E = (0, Yd.normalizeColor)(c);
          return {
            rValue: E.red,
            gValue: E.green,
            bValue: E.blue,
            aValue: E.alpha,
          };
        }
        return { rValue: r, gValue: i, bValue: o, aValue: a };
      }
      case Tn:
        return t.config.filters.reduce(PR, {});
      case bn:
        return t.config.fontVariations.reduce(NR, {});
      default: {
        let { value: r } = t.config;
        return { value: r };
      }
    }
  }
  function np(e) {
    if (/^TRANSFORM_/.test(e)) return $d;
    if (/^STYLE_/.test(e)) return wo;
    if (/^GENERAL_/.test(e)) return bo;
    if (/^PLUGIN_/.test(e)) return Zd;
  }
  function FR(e, t) {
    return e === wo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function qR(e, t, n, r, i, o, a, s, u) {
    switch (s) {
      case $d:
        return kR(e, t, n, i, a);
      case wo:
        return $R(e, t, n, i, o, a);
      case bo:
        return ZR(e, i, a);
      case Zd: {
        let { actionTypeId: c } = i;
        if (mt(c)) return vo(c)(u, t, i);
      }
    }
  }
  function kR(e, t, n, r, i) {
    let o = BR.map((s) => {
        let u = So[s],
          {
            xValue: c = u.xValue,
            yValue: E = u.yValue,
            zValue: f = u.zValue,
            xUnit: h = "",
            yUnit: p = "",
            zUnit: g = "",
          } = t[s] || {};
        switch (s) {
          case Vt:
            return `${aR}(${c}${h}, ${E}${p}, ${f}${g})`;
          case Bt:
            return `${sR}(${c}${h}, ${E}${p}, ${f}${g})`;
          case kt:
            return `${uR}(${c}${h}) ${cR}(${E}${p}) ${lR}(${f}${g})`;
          case In:
            return `${fR}(${c}${h}, ${E}${p})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    It(e, pt, i), a(e, pt, o), WR(r, n) && a(e, dr, dR);
  }
  function HR(e, t, n, r) {
    let i = (0, Tr.default)(t, (a, s, u) => `${a} ${u}(${s}${VR(u, n)})`, ""),
      { setStyle: o } = r;
    It(e, yn, r), o(e, yn, i);
  }
  function UR(e, t, n, r) {
    let i = (0, Tr.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = r;
    It(e, mn, r), o(e, mn, i);
  }
  function WR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
    return (
      (e === Vt && r !== void 0) ||
      (e === Bt && r !== void 0) ||
      (e === kt && (t !== void 0 || n !== void 0))
    );
  }
  function YR(e, t) {
    let n = e.exec(t);
    return n ? n[1] : "";
  }
  function QR({ element: e, actionTypeId: t, computedStyle: n, getStyle: r }) {
    let i = Ao[t],
      o = r(e, i),
      a = KR.test(o) ? o : n[i],
      s = YR(jR, a).split(_n);
    return {
      rValue: (0, at.default)(parseInt(s[0], 10), 255),
      gValue: (0, at.default)(parseInt(s[1], 10), 255),
      bValue: (0, at.default)(parseInt(s[2], 10), 255),
      aValue: (0, at.default)(parseFloat(s[3]), 1),
    };
  }
  function $R(e, t, n, r, i, o) {
    let { setStyle: a } = o;
    switch (r.actionTypeId) {
      case Ht: {
        let { widthUnit: s = "", heightUnit: u = "" } = r.config,
          { widthValue: c, heightValue: E } = n;
        c !== void 0 && (s === ht && (s = "px"), It(e, et, o), a(e, et, c + s)),
          E !== void 0 &&
            (u === ht && (u = "px"), It(e, tt, o), a(e, tt, E + u));
        break;
      }
      case Tn: {
        HR(e, n, r.config, o);
        break;
      }
      case bn: {
        UR(e, n, r.config, o);
        break;
      }
      case Ut:
      case Wt:
      case zt: {
        let s = Ao[r.actionTypeId],
          u = Math.round(n.rValue),
          c = Math.round(n.gValue),
          E = Math.round(n.bValue),
          f = n.aValue;
        It(e, s, o),
          a(e, s, f >= 1 ? `rgb(${u},${c},${E})` : `rgba(${u},${c},${E},${f})`);
        break;
      }
      default: {
        let { unit: s = "" } = r.config;
        It(e, i, o), a(e, i, n.value + s);
        break;
      }
    }
  }
  function ZR(e, t, n) {
    let { setStyle: r } = n;
    switch (t.actionTypeId) {
      case wr: {
        let { value: i } = t.config;
        i === pR && ze ? r(e, Ir, $i) : r(e, Ir, i);
        return;
      }
    }
  }
  function It(e, t, n) {
    if (!ze) return;
    let r = tp[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Xt);
    if (!a) {
      o(e, Xt, r);
      return;
    }
    let s = a.split(_n).map(ep);
    s.indexOf(r) === -1 && o(e, Xt, s.concat(r).join(_n));
  }
  function rp(e, t, n) {
    if (!ze) return;
    let r = tp[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Xt);
    !a ||
      a.indexOf(r) === -1 ||
      o(
        e,
        Xt,
        a
          .split(_n)
          .map(ep)
          .filter((s) => s !== r)
          .join(_n)
      );
  }
  function JR({ store: e, elementApi: t }) {
    let { ixData: n } = e.getState(),
      { events: r = {}, actionLists: i = {} } = n;
    Object.keys(r).forEach((o) => {
      let a = r[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        c = i[u];
      c && Kd({ actionList: c, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Kd({ actionList: i[o], elementApi: t });
      });
  }
  function Kd({ actionList: e = {}, event: t, elementApi: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e;
    r &&
      r.forEach((o) => {
        jd({ actionGroup: o, event: t, elementApi: n });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            jd({ actionGroup: s, event: t, elementApi: n });
          });
        });
  }
  function jd({ actionGroup: e, event: t, elementApi: n }) {
    let { actionItems: r } = e;
    r.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      mt(o)
        ? (s = (u) => Eo(o)(u, i))
        : (s = ip({ effect: tC, actionTypeId: o, elementApi: n })),
        xo({ config: a, event: t, elementApi: n }).forEach(s);
    });
  }
  function eC(e, t, n) {
    let { setStyle: r, getStyle: i } = n,
      { actionTypeId: o } = t;
    if (o === Ht) {
      let { config: a } = t;
      a.widthUnit === ht && r(e, et, ""), a.heightUnit === ht && r(e, tt, "");
    }
    i(e, Xt) && ip({ effect: rp, actionTypeId: o, elementApi: n })(e);
  }
  function tC(e, t, n) {
    let { setStyle: r } = n;
    rp(e, t, n), r(e, t, ""), t === pt && r(e, dr, "");
  }
  function op(e) {
    let t = 0,
      n = 0;
    return (
      e.forEach((r, i) => {
        let { config: o } = r,
          a = o.delay + o.duration;
        a >= t && ((t = a), (n = i));
      }),
      n
    );
  }
  function nC(e, t) {
    let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      n.forEach((u, c) => {
        if (r && c === 0) return;
        let { actionItems: E } = u,
          f = E[op(E)],
          { config: h, actionTypeId: p } = f;
        i.id === f.id && (s = a + o);
        let g = np(p) === bo ? 0 : h.duration;
        a += h.delay + g;
      }),
      a > 0 ? En(s / a) : 0
    );
  }
  function rC({ actionList: e, actionItemId: t, rawData: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, br.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      r && r.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: c }) => c.some(a));
        }),
      (0, br.setIn)(n, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function iC(e, { basedOn: t }) {
    return (
      (e === We.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null)) ||
      (e === We.MOUSE_MOVE && t === Ze.ELEMENT)
    );
  }
  function oC(e, t) {
    return e + yR + t;
  }
  function aC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function sC(e, t) {
    return Io(e && e.sort(), t && t.sort());
  }
  function uC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + To + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
    return t + To + n + To + r;
  }
  var at,
    Tr,
    mr,
    br,
    Yd,
    iR,
    oR,
    aR,
    sR,
    uR,
    cR,
    lR,
    fR,
    dR,
    pR,
    _r,
    yn,
    mn,
    et,
    tt,
    Qd,
    hR,
    gR,
    Hd,
    vR,
    Ud,
    ER,
    Ir,
    Xt,
    ht,
    _n,
    yR,
    To,
    $d,
    bo,
    wo,
    Zd,
    Vt,
    Bt,
    kt,
    In,
    Jd,
    Tn,
    bn,
    Ht,
    Ut,
    Wt,
    zt,
    wr,
    mR,
    ep,
    Ao,
    tp,
    yr,
    IR,
    bR,
    xR,
    zd,
    RR,
    CR,
    PR,
    NR,
    DR,
    So,
    GR,
    XR,
    VR,
    BR,
    zR,
    KR,
    jR,
    ip,
    sp = Ee(() => {
      "use strict";
      (at = ce(Td())), (Tr = ce(Fd())), (mr = ce(Vd())), (br = ce(Rt()));
      Ne();
      kd();
      eo();
      Yd = ce(uo());
      yo();
      pr();
      ({
        BACKGROUND: iR,
        TRANSFORM: oR,
        TRANSLATE_3D: aR,
        SCALE_3D: sR,
        ROTATE_X: uR,
        ROTATE_Y: cR,
        ROTATE_Z: lR,
        SKEW: fR,
        PRESERVE_3D: dR,
        FLEX: pR,
        OPACITY: _r,
        FILTER: yn,
        FONT_VARIATION_SETTINGS: mn,
        WIDTH: et,
        HEIGHT: tt,
        BACKGROUND_COLOR: Qd,
        BORDER_COLOR: hR,
        COLOR: gR,
        CHILDREN: Hd,
        IMMEDIATE_CHILDREN: vR,
        SIBLINGS: Ud,
        PARENT: ER,
        DISPLAY: Ir,
        WILL_CHANGE: Xt,
        AUTO: ht,
        COMMA_DELIMITER: _n,
        COLON_DELIMITER: yR,
        BAR_DELIMITER: To,
        RENDER_TRANSFORM: $d,
        RENDER_GENERAL: bo,
        RENDER_STYLE: wo,
        RENDER_PLUGIN: Zd,
      } = Ae),
        ({
          TRANSFORM_MOVE: Vt,
          TRANSFORM_SCALE: Bt,
          TRANSFORM_ROTATE: kt,
          TRANSFORM_SKEW: In,
          STYLE_OPACITY: Jd,
          STYLE_FILTER: Tn,
          STYLE_FONT_VARIATION: bn,
          STYLE_SIZE: Ht,
          STYLE_BACKGROUND_COLOR: Ut,
          STYLE_BORDER: Wt,
          STYLE_TEXT_COLOR: zt,
          GENERAL_DISPLAY: wr,
          OBJECT_VALUE: mR,
        } = Pe),
        (ep = (e) => e.trim()),
        (Ao = Object.freeze({ [Ut]: Qd, [Wt]: hR, [zt]: gR })),
        (tp = Object.freeze({
          [pt]: oR,
          [Qd]: iR,
          [_r]: _r,
          [yn]: yn,
          [et]: et,
          [tt]: tt,
          [mn]: mn,
        })),
        (yr = new Map());
      IR = 1;
      bR = 1;
      xR = (e, t) => e === t;
      (zd = /px/),
        (RR = (e, t) =>
          t.reduce(
            (n, r) => (n[r.type] == null && (n[r.type] = GR[r.type]), n),
            e || {}
          )),
        (CR = (e, t) =>
          t.reduce(
            (n, r) => (
              n[r.type] == null &&
                (n[r.type] = XR[r.type] || r.defaultValue || 0),
              n
            ),
            e || {}
          ));
      (PR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (NR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (DR = (e, t, n) => {
          if (mt(e)) return po(e)(n, t);
          switch (e) {
            case Tn: {
              let r = (0, mr.default)(n.filters, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            case bn: {
              let r = (0, mr.default)(
                n.fontVariations,
                ({ type: i }) => i === t
              );
              return r ? r.value : 0;
            }
            default:
              return n[t];
          }
        });
      (So = {
        [Vt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Bt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [kt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [In]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (GR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (XR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (VR = (e, t) => {
          let n = (0, mr.default)(t.filters, ({ type: r }) => r === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (BR = Object.keys(So));
      (zR = "\\(([^)]+)\\)"), (KR = /^rgb/), (jR = RegExp(`rgba?${zR}`));
      ip =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (r) => {
          switch (t) {
            case Vt:
            case Bt:
            case kt:
            case In:
              e(r, pt, n);
              break;
            case Tn:
              e(r, yn, n);
              break;
            case bn:
              e(r, mn, n);
              break;
            case Jd:
              e(r, _r, n);
              break;
            case Ht:
              e(r, et, n), e(r, tt, n);
              break;
            case Ut:
            case Wt:
            case zt:
              e(r, Ao[t], n);
              break;
            case wr:
              e(r, Ir, n);
              break;
          }
        };
    });
  var Tt = d((Oo) => {
    "use strict";
    Object.defineProperty(Oo, "__esModule", { value: !0 });
    function cC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    cC(Oo, {
      IX2BrowserSupport: function () {
        return lC;
      },
      IX2EasingUtils: function () {
        return dC;
      },
      IX2Easings: function () {
        return fC;
      },
      IX2ElementsReducer: function () {
        return pC;
      },
      IX2VanillaPlugins: function () {
        return hC;
      },
      IX2VanillaUtils: function () {
        return gC;
      },
    });
    var lC = Kt((pr(), Ye(ed))),
      fC = Kt((Ji(), Ye(vn))),
      dC = Kt((eo(), Ye(sd))),
      pC = Kt((fd(), Ye(ld))),
      hC = Kt((yo(), Ye(_d))),
      gC = Kt((sp(), Ye(ap)));
    function up(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (up = function (r) {
        return r ? n : t;
      })(e);
    }
    function Kt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = up(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var xr,
    st,
    vC,
    EC,
    yC,
    mC,
    _C,
    IC,
    Ar,
    cp,
    TC,
    bC,
    Ro,
    wC,
    AC,
    xC,
    SC,
    lp,
    fp = Ee(() => {
      "use strict";
      Ne();
      (xr = ce(Tt())),
        (st = ce(Rt())),
        ({
          IX2_RAW_DATA_IMPORTED: vC,
          IX2_SESSION_STOPPED: EC,
          IX2_INSTANCE_ADDED: yC,
          IX2_INSTANCE_STARTED: mC,
          IX2_INSTANCE_REMOVED: _C,
          IX2_ANIMATION_FRAME_CHANGED: IC,
        } = Te),
        ({
          optimizeFloat: Ar,
          applyEasing: cp,
          createBezierEasing: TC,
        } = xr.IX2EasingUtils),
        ({ RENDER_GENERAL: bC } = Ae),
        ({
          getItemConfigByKey: Ro,
          getRenderType: wC,
          getStyleProp: AC,
        } = xr.IX2VanillaUtils),
        (xC = (e, t) => {
          let {
              position: n,
              parameterId: r,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: c,
              skipMotion: E,
              skipToValue: f,
            } = e,
            { parameters: h } = t.payload,
            p = Math.max(1 - a, 0.01),
            g = h[r];
          g == null && ((p = 1), (g = s));
          let m = Math.max(g, 0) || 0,
            I = Ar(m - n),
            _ = E ? f : Ar(n + I * p),
            O = _ * 100;
          if (_ === n && e.current) return e;
          let x, R, P, C;
          for (let k = 0, { length: z } = i; k < z; k++) {
            let { keyframe: j, actionItems: te } = i[k];
            if ((k === 0 && (x = te[0]), O >= j)) {
              x = te[0];
              let F = i[k + 1],
                A = F && O !== j;
              (R = A ? F.actionItems[0] : null),
                A && ((P = j / 100), (C = (F.keyframe - j) / 100));
            }
          }
          let B = {};
          if (x && !R)
            for (let k = 0, { length: z } = o; k < z; k++) {
              let j = o[k];
              B[j] = Ro(u, j, x.config);
            }
          else if (x && R && P !== void 0 && C !== void 0) {
            let k = (_ - P) / C,
              z = x.config.easing,
              j = cp(z, k, c);
            for (let te = 0, { length: F } = o; te < F; te++) {
              let A = o[te],
                N = Ro(u, A, x.config),
                M = (Ro(u, A, R.config) - N) * j + N;
              B[A] = M;
            }
          }
          return (0, st.merge)(e, { position: _, current: B });
        }),
        (SC = (e, t) => {
          let {
              active: n,
              origin: r,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: c,
              destinationKeys: E,
              pluginDuration: f,
              instanceDelay: h,
              customEasingFn: p,
              skipMotion: g,
            } = e,
            m = u.config.easing,
            { duration: I, delay: _ } = u.config;
          f != null && (I = f),
            (_ = h ?? _),
            a === bC ? (I = 0) : (o || g) && (I = _ = 0);
          let { now: O } = t.payload;
          if (n && r) {
            let x = O - (i + _);
            if (s) {
              let k = O - i,
                z = I + _,
                j = Ar(Math.min(Math.max(0, k / z), 1));
              e = (0, st.set)(e, "verboseTimeElapsed", z * j);
            }
            if (x < 0) return e;
            let R = Ar(Math.min(Math.max(0, x / I), 1)),
              P = cp(m, R, p),
              C = {},
              B = null;
            return (
              E.length &&
                (B = E.reduce((k, z) => {
                  let j = c[z],
                    te = parseFloat(r[z]) || 0,
                    A = (parseFloat(j) - te) * P + te;
                  return (k[z] = A), k;
                }, {})),
              (C.current = B),
              (C.position = R),
              R === 1 && ((C.active = !1), (C.complete = !0)),
              (0, st.merge)(e, C)
            );
          }
          return e;
        }),
        (lp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case vC:
              return t.payload.ixInstances || Object.freeze({});
            case EC:
              return Object.freeze({});
            case yC: {
              let {
                  instanceId: n,
                  elementId: r,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: c,
                  isCarrier: E,
                  origin: f,
                  destination: h,
                  immediate: p,
                  verbose: g,
                  continuous: m,
                  parameterId: I,
                  actionGroups: _,
                  smoothing: O,
                  restingValue: x,
                  pluginInstance: R,
                  pluginDuration: P,
                  instanceDelay: C,
                  skipMotion: B,
                  skipToValue: k,
                } = t.payload,
                { actionTypeId: z } = i,
                j = wC(z),
                te = AC(j, z),
                F = Object.keys(h).filter(
                  (N) => h[N] != null && typeof h[N] != "string"
                ),
                { easing: A } = i.config;
              return (0, st.set)(e, n, {
                id: n,
                elementId: r,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: h,
                destinationKeys: F,
                immediate: p,
                verbose: g,
                current: null,
                actionItem: i,
                actionTypeId: z,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: c,
                renderType: j,
                isCarrier: E,
                styleProp: te,
                continuous: m,
                parameterId: I,
                actionGroups: _,
                smoothing: O,
                restingValue: x,
                pluginInstance: R,
                pluginDuration: P,
                instanceDelay: C,
                skipMotion: B,
                skipToValue: k,
                customEasingFn:
                  Array.isArray(A) && A.length === 4 ? TC(A) : void 0,
              });
            }
            case mC: {
              let { instanceId: n, time: r } = t.payload;
              return (0, st.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: r,
              });
            }
            case _C: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let r = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== n && (r[s] = e[s]);
              }
              return r;
            }
            case IC: {
              let n = e,
                r = Object.keys(e),
                { length: i } = r;
              for (let o = 0; o < i; o++) {
                let a = r[o],
                  s = e[a],
                  u = s.continuous ? xC : SC;
                n = (0, st.set)(n, a, u(s, t));
              }
              return n;
            }
            default:
              return e;
          }
        });
    });
  var OC,
    RC,
    CC,
    dp,
    pp = Ee(() => {
      "use strict";
      Ne();
      ({
        IX2_RAW_DATA_IMPORTED: OC,
        IX2_SESSION_STOPPED: RC,
        IX2_PARAMETER_CHANGED: CC,
      } = Te),
        (dp = (e = {}, t) => {
          switch (t.type) {
            case OC:
              return t.payload.ixParameters || {};
            case RC:
              return {};
            case CC: {
              let { key: n, value: r } = t.payload;
              return (e[n] = r), e;
            }
            default:
              return e;
          }
        });
    });
  var vp = {};
  Le(vp, { default: () => PC });
  var hp,
    gp,
    LC,
    PC,
    Ep = Ee(() => {
      "use strict";
      hp = ce(yi());
      ws();
      Ws();
      js();
      gp = ce(Tt());
      fp();
      pp();
      ({ ixElements: LC } = gp.IX2ElementsReducer),
        (PC = (0, hp.combineReducers)({
          ixData: bs,
          ixRequest: Us,
          ixSession: Ks,
          ixElements: LC,
          ixInstances: lp,
          ixParameters: dp,
        }));
    });
  var mp = d((vG, yp) => {
    var NC = lt(),
      DC = be(),
      MC = it(),
      FC = "[object String]";
    function qC(e) {
      return typeof e == "string" || (!DC(e) && MC(e) && NC(e) == FC);
    }
    yp.exports = qC;
  });
  var Ip = d((EG, _p) => {
    var GC = zi(),
      XC = GC("length");
    _p.exports = XC;
  });
  var bp = d((yG, Tp) => {
    var VC = "\\ud800-\\udfff",
      BC = "\\u0300-\\u036f",
      kC = "\\ufe20-\\ufe2f",
      HC = "\\u20d0-\\u20ff",
      UC = BC + kC + HC,
      WC = "\\ufe0e\\ufe0f",
      zC = "\\u200d",
      KC = RegExp("[" + zC + VC + UC + WC + "]");
    function jC(e) {
      return KC.test(e);
    }
    Tp.exports = jC;
  });
  var Pp = d((mG, Lp) => {
    var Ap = "\\ud800-\\udfff",
      YC = "\\u0300-\\u036f",
      QC = "\\ufe20-\\ufe2f",
      $C = "\\u20d0-\\u20ff",
      ZC = YC + QC + $C,
      JC = "\\ufe0e\\ufe0f",
      eL = "[" + Ap + "]",
      Co = "[" + ZC + "]",
      Lo = "\\ud83c[\\udffb-\\udfff]",
      tL = "(?:" + Co + "|" + Lo + ")",
      xp = "[^" + Ap + "]",
      Sp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Op = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      nL = "\\u200d",
      Rp = tL + "?",
      Cp = "[" + JC + "]?",
      rL = "(?:" + nL + "(?:" + [xp, Sp, Op].join("|") + ")" + Cp + Rp + ")*",
      iL = Cp + Rp + rL,
      oL = "(?:" + [xp + Co + "?", Co, Sp, Op, eL].join("|") + ")",
      wp = RegExp(Lo + "(?=" + Lo + ")|" + oL + iL, "g");
    function aL(e) {
      for (var t = (wp.lastIndex = 0); wp.test(e); ) ++t;
      return t;
    }
    Lp.exports = aL;
  });
  var Dp = d((_G, Np) => {
    var sL = Ip(),
      uL = bp(),
      cL = Pp();
    function lL(e) {
      return uL(e) ? cL(e) : sL(e);
    }
    Np.exports = lL;
  });
  var Fp = d((IG, Mp) => {
    var fL = rr(),
      dL = ir(),
      pL = Et(),
      hL = mp(),
      gL = Dp(),
      vL = "[object Map]",
      EL = "[object Set]";
    function yL(e) {
      if (e == null) return 0;
      if (pL(e)) return hL(e) ? gL(e) : e.length;
      var t = dL(e);
      return t == vL || t == EL ? e.size : fL(e).length;
    }
    Mp.exports = yL;
  });
  var Gp = d((TG, qp) => {
    var mL = "Expected a function";
    function _L(e) {
      if (typeof e != "function") throw new TypeError(mL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    qp.exports = _L;
  });
  var Po = d((bG, Xp) => {
    var IL = ft(),
      TL = (function () {
        try {
          var e = IL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Xp.exports = TL;
  });
  var No = d((wG, Bp) => {
    var Vp = Po();
    function bL(e, t, n) {
      t == "__proto__" && Vp
        ? Vp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    Bp.exports = bL;
  });
  var Hp = d((AG, kp) => {
    var wL = No(),
      AL = Kn(),
      xL = Object.prototype,
      SL = xL.hasOwnProperty;
    function OL(e, t, n) {
      var r = e[t];
      (!(SL.call(e, t) && AL(r, n)) || (n === void 0 && !(t in e))) &&
        wL(e, t, n);
    }
    kp.exports = OL;
  });
  var zp = d((xG, Wp) => {
    var RL = Hp(),
      CL = pn(),
      LL = Jn(),
      Up = Je(),
      PL = qt();
    function NL(e, t, n, r) {
      if (!Up(e)) return e;
      t = CL(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = PL(t[i]),
          c = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var E = s[u];
          (c = r ? r(E, u, s) : void 0),
            c === void 0 && (c = Up(E) ? E : LL(t[i + 1]) ? [] : {});
        }
        RL(s, u, c), (s = s[u]);
      }
      return e;
    }
    Wp.exports = NL;
  });
  var jp = d((SG, Kp) => {
    var DL = sr(),
      ML = zp(),
      FL = pn();
    function qL(e, t, n) {
      for (var r = -1, i = t.length, o = {}; ++r < i; ) {
        var a = t[r],
          s = DL(e, a);
        n(s, a) && ML(o, FL(a, e), s);
      }
      return o;
    }
    Kp.exports = qL;
  });
  var Qp = d((OG, Yp) => {
    var GL = $n(),
      XL = oi(),
      VL = Li(),
      BL = Ci(),
      kL = Object.getOwnPropertySymbols,
      HL = kL
        ? function (e) {
            for (var t = []; e; ) GL(t, VL(e)), (e = XL(e));
            return t;
          }
        : BL;
    Yp.exports = HL;
  });
  var Zp = d((RG, $p) => {
    function UL(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    $p.exports = UL;
  });
  var eh = d((CG, Jp) => {
    var WL = Je(),
      zL = nr(),
      KL = Zp(),
      jL = Object.prototype,
      YL = jL.hasOwnProperty;
    function QL(e) {
      if (!WL(e)) return KL(e);
      var t = zL(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !YL.call(e, r))) || n.push(r);
      return n;
    }
    Jp.exports = QL;
  });
  var nh = d((LG, th) => {
    var $L = Ni(),
      ZL = eh(),
      JL = Et();
    function eP(e) {
      return JL(e) ? $L(e, !0) : ZL(e);
    }
    th.exports = eP;
  });
  var ih = d((PG, rh) => {
    var tP = Ri(),
      nP = Qp(),
      rP = nh();
    function iP(e) {
      return tP(e, rP, nP);
    }
    rh.exports = iP;
  });
  var ah = d((NG, oh) => {
    var oP = Wi(),
      aP = dt(),
      sP = jp(),
      uP = ih();
    function cP(e, t) {
      if (e == null) return {};
      var n = oP(uP(e), function (r) {
        return [r];
      });
      return (
        (t = aP(t)),
        sP(e, n, function (r, i) {
          return t(r, i[0]);
        })
      );
    }
    oh.exports = cP;
  });
  var uh = d((DG, sh) => {
    var lP = dt(),
      fP = Gp(),
      dP = ah();
    function pP(e, t) {
      return dP(e, fP(lP(t)));
    }
    sh.exports = pP;
  });
  var lh = d((MG, ch) => {
    var hP = rr(),
      gP = ir(),
      vP = sn(),
      EP = be(),
      yP = Et(),
      mP = Zn(),
      _P = nr(),
      IP = tr(),
      TP = "[object Map]",
      bP = "[object Set]",
      wP = Object.prototype,
      AP = wP.hasOwnProperty;
    function xP(e) {
      if (e == null) return !0;
      if (
        yP(e) &&
        (EP(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          mP(e) ||
          IP(e) ||
          vP(e))
      )
        return !e.length;
      var t = gP(e);
      if (t == TP || t == bP) return !e.size;
      if (_P(e)) return !hP(e).length;
      for (var n in e) if (AP.call(e, n)) return !1;
      return !0;
    }
    ch.exports = xP;
  });
  var dh = d((FG, fh) => {
    var SP = No(),
      OP = mo(),
      RP = dt();
    function CP(e, t) {
      var n = {};
      return (
        (t = RP(t, 3)),
        OP(e, function (r, i, o) {
          SP(n, i, t(r, i, o));
        }),
        n
      );
    }
    fh.exports = CP;
  });
  var hh = d((qG, ph) => {
    function LP(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    ph.exports = LP;
  });
  var vh = d((GG, gh) => {
    var PP = cr();
    function NP(e) {
      return typeof e == "function" ? e : PP;
    }
    gh.exports = NP;
  });
  var yh = d((XG, Eh) => {
    var DP = hh(),
      MP = _o(),
      FP = vh(),
      qP = be();
    function GP(e, t) {
      var n = qP(e) ? DP : MP;
      return n(e, FP(t));
    }
    Eh.exports = GP;
  });
  var _h = d((VG, mh) => {
    var XP = Ue(),
      VP = function () {
        return XP.Date.now();
      };
    mh.exports = VP;
  });
  var bh = d((BG, Th) => {
    var BP = Je(),
      Do = _h(),
      Ih = lr(),
      kP = "Expected a function",
      HP = Math.max,
      UP = Math.min;
    function WP(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        c = 0,
        E = !1,
        f = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(kP);
      (t = Ih(t) || 0),
        BP(n) &&
          ((E = !!n.leading),
          (f = "maxWait" in n),
          (o = f ? HP(Ih(n.maxWait) || 0, t) : o),
          (h = "trailing" in n ? !!n.trailing : h));
      function p(C) {
        var B = r,
          k = i;
        return (r = i = void 0), (c = C), (a = e.apply(k, B)), a;
      }
      function g(C) {
        return (c = C), (s = setTimeout(_, t)), E ? p(C) : a;
      }
      function m(C) {
        var B = C - u,
          k = C - c,
          z = t - B;
        return f ? UP(z, o - k) : z;
      }
      function I(C) {
        var B = C - u,
          k = C - c;
        return u === void 0 || B >= t || B < 0 || (f && k >= o);
      }
      function _() {
        var C = Do();
        if (I(C)) return O(C);
        s = setTimeout(_, m(C));
      }
      function O(C) {
        return (s = void 0), h && r ? p(C) : ((r = i = void 0), a);
      }
      function x() {
        s !== void 0 && clearTimeout(s), (c = 0), (r = u = i = s = void 0);
      }
      function R() {
        return s === void 0 ? a : O(Do());
      }
      function P() {
        var C = Do(),
          B = I(C);
        if (((r = arguments), (i = this), (u = C), B)) {
          if (s === void 0) return g(u);
          if (f) return clearTimeout(s), (s = setTimeout(_, t)), p(u);
        }
        return s === void 0 && (s = setTimeout(_, t)), a;
      }
      return (P.cancel = x), (P.flush = R), P;
    }
    Th.exports = WP;
  });
  var Ah = d((kG, wh) => {
    var zP = bh(),
      KP = Je(),
      jP = "Expected a function";
    function YP(e, t, n) {
      var r = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(jP);
      return (
        KP(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (i = "trailing" in n ? !!n.trailing : i)),
        zP(e, t, { leading: r, maxWait: t, trailing: i })
      );
    }
    wh.exports = YP;
  });
  var Sh = {};
  Le(Sh, {
    actionListPlaybackChanged: () => Yt,
    animationFrameChanged: () => Or,
    clearRequested: () => _N,
    elementStateChanged: () => ko,
    eventListenerAdded: () => Sr,
    eventStateChanged: () => Xo,
    instanceAdded: () => Vo,
    instanceRemoved: () => Bo,
    instanceStarted: () => Rr,
    mediaQueriesDefined: () => Uo,
    parameterChanged: () => jt,
    playbackRequested: () => yN,
    previewRequested: () => EN,
    rawDataImported: () => Mo,
    sessionInitialized: () => Fo,
    sessionStarted: () => qo,
    sessionStopped: () => Go,
    stopRequested: () => mN,
    testFrameRendered: () => IN,
    viewportWidthChanged: () => Ho,
  });
  var xh,
    QP,
    $P,
    ZP,
    JP,
    eN,
    tN,
    nN,
    rN,
    iN,
    oN,
    aN,
    sN,
    uN,
    cN,
    lN,
    fN,
    dN,
    pN,
    hN,
    gN,
    vN,
    Mo,
    Fo,
    qo,
    Go,
    EN,
    yN,
    mN,
    _N,
    Sr,
    IN,
    Xo,
    Or,
    jt,
    Vo,
    Rr,
    Bo,
    ko,
    Yt,
    Ho,
    Uo,
    Cr = Ee(() => {
      "use strict";
      Ne();
      (xh = ce(Tt())),
        ({
          IX2_RAW_DATA_IMPORTED: QP,
          IX2_SESSION_INITIALIZED: $P,
          IX2_SESSION_STARTED: ZP,
          IX2_SESSION_STOPPED: JP,
          IX2_PREVIEW_REQUESTED: eN,
          IX2_PLAYBACK_REQUESTED: tN,
          IX2_STOP_REQUESTED: nN,
          IX2_CLEAR_REQUESTED: rN,
          IX2_EVENT_LISTENER_ADDED: iN,
          IX2_TEST_FRAME_RENDERED: oN,
          IX2_EVENT_STATE_CHANGED: aN,
          IX2_ANIMATION_FRAME_CHANGED: sN,
          IX2_PARAMETER_CHANGED: uN,
          IX2_INSTANCE_ADDED: cN,
          IX2_INSTANCE_STARTED: lN,
          IX2_INSTANCE_REMOVED: fN,
          IX2_ELEMENT_STATE_CHANGED: dN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: pN,
          IX2_VIEWPORT_WIDTH_CHANGED: hN,
          IX2_MEDIA_QUERIES_DEFINED: gN,
        } = Te),
        ({ reifyState: vN } = xh.IX2VanillaUtils),
        (Mo = (e) => ({ type: QP, payload: { ...vN(e) } })),
        (Fo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: $P,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (qo = () => ({ type: ZP })),
        (Go = () => ({ type: JP })),
        (EN = ({ rawData: e, defer: t }) => ({
          type: eN,
          payload: { defer: t, rawData: e },
        })),
        (yN = ({
          actionTypeId: e = Pe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: r,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: tN,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: a,
            eventId: r,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (mN = (e) => ({ type: nN, payload: { actionListId: e } })),
        (_N = () => ({ type: rN })),
        (Sr = (e, t) => ({
          type: iN,
          payload: { target: e, listenerParams: t },
        })),
        (IN = (e = 1) => ({ type: oN, payload: { step: e } })),
        (Xo = (e, t) => ({ type: aN, payload: { stateKey: e, newState: t } })),
        (Or = (e, t) => ({ type: sN, payload: { now: e, parameters: t } })),
        (jt = (e, t) => ({ type: uN, payload: { key: e, value: t } })),
        (Vo = (e) => ({ type: cN, payload: { ...e } })),
        (Rr = (e, t) => ({ type: lN, payload: { instanceId: e, time: t } })),
        (Bo = (e) => ({ type: fN, payload: { instanceId: e } })),
        (ko = (e, t, n, r) => ({
          type: dN,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
        })),
        (Yt = ({ actionListId: e, isPlaying: t }) => ({
          type: pN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Ho = ({ width: e, mediaQueries: t }) => ({
          type: hN,
          payload: { width: e, mediaQueries: t },
        })),
        (Uo = () => ({ type: gN }));
    });
  var Re = {};
  Le(Re, {
    elementContains: () => Ko,
    getChildElements: () => LN,
    getClosestElement: () => wn,
    getProperty: () => xN,
    getQuerySelector: () => zo,
    getRefType: () => jo,
    getSiblingElements: () => PN,
    getStyle: () => AN,
    getValidDocument: () => ON,
    isSiblingNode: () => CN,
    matchSelector: () => SN,
    queryDocument: () => RN,
    setStyle: () => wN,
  });
  function wN(e, t, n) {
    e.style[t] = n;
  }
  function AN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function xN(e, t) {
    return e[t];
  }
  function SN(e) {
    return (t) => t[Wo](e);
  }
  function zo({ id: e, selector: t }) {
    if (e) {
      let n = e;
      if (e.indexOf(Oh) !== -1) {
        let r = e.split(Oh),
          i = r[0];
        if (((n = r[1]), i !== document.documentElement.getAttribute(Ch)))
          return null;
      }
      return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
    }
    return t;
  }
  function ON(e) {
    return e == null || e === document.documentElement.getAttribute(Ch)
      ? document
      : null;
  }
  function RN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function Ko(e, t) {
    return e.contains(t);
  }
  function CN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function LN(e) {
    let t = [];
    for (let n = 0, { length: r } = e || []; n < r; n++) {
      let { children: i } = e[n],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function PN(e = []) {
    let t = [],
      n = [];
    for (let r = 0, { length: i } = e; r < i; r++) {
      let { parentNode: o } = e[r];
      if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1)
        continue;
      n.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function jo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? TN
        : bN
      : null;
  }
  var Rh,
    Wo,
    Oh,
    TN,
    bN,
    Ch,
    wn,
    Lh = Ee(() => {
      "use strict";
      Rh = ce(Tt());
      Ne();
      ({ ELEMENT_MATCHES: Wo } = Rh.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Oh,
          HTML_ELEMENT: TN,
          PLAIN_OBJECT: bN,
          WF_PAGE: Ch,
        } = Ae);
      wn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[Wo] && n[Wo](t)) return n;
              n = n.parentNode;
            } while (n != null);
            return null;
          };
    });
  var Yo = d((WG, Nh) => {
    var NN = Je(),
      Ph = Object.create,
      DN = (function () {
        function e() {}
        return function (t) {
          if (!NN(t)) return {};
          if (Ph) return Ph(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    Nh.exports = DN;
  });
  var Lr = d((zG, Dh) => {
    function MN() {}
    Dh.exports = MN;
  });
  var Nr = d((KG, Mh) => {
    var FN = Yo(),
      qN = Lr();
    function Pr(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Pr.prototype = FN(qN.prototype);
    Pr.prototype.constructor = Pr;
    Mh.exports = Pr;
  });
  var Xh = d((jG, Gh) => {
    var Fh = xt(),
      GN = sn(),
      XN = be(),
      qh = Fh ? Fh.isConcatSpreadable : void 0;
    function VN(e) {
      return XN(e) || GN(e) || !!(qh && e && e[qh]);
    }
    Gh.exports = VN;
  });
  var kh = d((YG, Bh) => {
    var BN = $n(),
      kN = Xh();
    function Vh(e, t, n, r, i) {
      var o = -1,
        a = e.length;
      for (n || (n = kN), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && n(s)
          ? t > 1
            ? Vh(s, t - 1, n, r, i)
            : BN(i, s)
          : r || (i[i.length] = s);
      }
      return i;
    }
    Bh.exports = Vh;
  });
  var Uh = d((QG, Hh) => {
    var HN = kh();
    function UN(e) {
      var t = e == null ? 0 : e.length;
      return t ? HN(e, 1) : [];
    }
    Hh.exports = UN;
  });
  var zh = d(($G, Wh) => {
    function WN(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    Wh.exports = WN;
  });
  var Yh = d((ZG, jh) => {
    var zN = zh(),
      Kh = Math.max;
    function KN(e, t, n) {
      return (
        (t = Kh(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, i = -1, o = Kh(r.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = r[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = r[i];
          return (s[t] = n(a)), zN(e, this, s);
        }
      );
    }
    jh.exports = KN;
  });
  var $h = d((JG, Qh) => {
    function jN(e) {
      return function () {
        return e;
      };
    }
    Qh.exports = jN;
  });
  var eg = d((eX, Jh) => {
    var YN = $h(),
      Zh = Po(),
      QN = cr(),
      $N = Zh
        ? function (e, t) {
            return Zh(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: YN(t),
              writable: !0,
            });
          }
        : QN;
    Jh.exports = $N;
  });
  var ng = d((tX, tg) => {
    var ZN = 800,
      JN = 16,
      eD = Date.now;
    function tD(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = eD(),
          i = JN - (r - n);
        if (((n = r), i > 0)) {
          if (++t >= ZN) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    tg.exports = tD;
  });
  var ig = d((nX, rg) => {
    var nD = eg(),
      rD = ng(),
      iD = rD(nD);
    rg.exports = iD;
  });
  var ag = d((rX, og) => {
    var oD = Uh(),
      aD = Yh(),
      sD = ig();
    function uD(e) {
      return sD(aD(e, void 0, oD), e + "");
    }
    og.exports = uD;
  });
  var cg = d((iX, ug) => {
    var sg = Di(),
      cD = sg && new sg();
    ug.exports = cD;
  });
  var fg = d((oX, lg) => {
    function lD() {}
    lg.exports = lD;
  });
  var Qo = d((aX, pg) => {
    var dg = cg(),
      fD = fg(),
      dD = dg
        ? function (e) {
            return dg.get(e);
          }
        : fD;
    pg.exports = dD;
  });
  var gg = d((sX, hg) => {
    var pD = {};
    hg.exports = pD;
  });
  var $o = d((uX, Eg) => {
    var vg = gg(),
      hD = Object.prototype,
      gD = hD.hasOwnProperty;
    function vD(e) {
      for (
        var t = e.name + "", n = vg[t], r = gD.call(vg, t) ? n.length : 0;
        r--;

      ) {
        var i = n[r],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    Eg.exports = vD;
  });
  var Mr = d((cX, yg) => {
    var ED = Yo(),
      yD = Lr(),
      mD = 4294967295;
    function Dr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = mD),
        (this.__views__ = []);
    }
    Dr.prototype = ED(yD.prototype);
    Dr.prototype.constructor = Dr;
    yg.exports = Dr;
  });
  var _g = d((lX, mg) => {
    function _D(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    mg.exports = _D;
  });
  var Tg = d((fX, Ig) => {
    var ID = Mr(),
      TD = Nr(),
      bD = _g();
    function wD(e) {
      if (e instanceof ID) return e.clone();
      var t = new TD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = bD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Ig.exports = wD;
  });
  var Ag = d((dX, wg) => {
    var AD = Mr(),
      bg = Nr(),
      xD = Lr(),
      SD = be(),
      OD = it(),
      RD = Tg(),
      CD = Object.prototype,
      LD = CD.hasOwnProperty;
    function Fr(e) {
      if (OD(e) && !SD(e) && !(e instanceof AD)) {
        if (e instanceof bg) return e;
        if (LD.call(e, "__wrapped__")) return RD(e);
      }
      return new bg(e);
    }
    Fr.prototype = xD.prototype;
    Fr.prototype.constructor = Fr;
    wg.exports = Fr;
  });
  var Sg = d((pX, xg) => {
    var PD = Mr(),
      ND = Qo(),
      DD = $o(),
      MD = Ag();
    function FD(e) {
      var t = DD(e),
        n = MD[t];
      if (typeof n != "function" || !(t in PD.prototype)) return !1;
      if (e === n) return !0;
      var r = ND(n);
      return !!r && e === r[0];
    }
    xg.exports = FD;
  });
  var Lg = d((hX, Cg) => {
    var Og = Nr(),
      qD = ag(),
      GD = Qo(),
      Zo = $o(),
      XD = be(),
      Rg = Sg(),
      VD = "Expected a function",
      BD = 8,
      kD = 32,
      HD = 128,
      UD = 256;
    function WD(e) {
      return qD(function (t) {
        var n = t.length,
          r = n,
          i = Og.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var o = t[r];
          if (typeof o != "function") throw new TypeError(VD);
          if (i && !a && Zo(o) == "wrapper") var a = new Og([], !0);
        }
        for (r = a ? r : n; ++r < n; ) {
          o = t[r];
          var s = Zo(o),
            u = s == "wrapper" ? GD(o) : void 0;
          u &&
          Rg(u[0]) &&
          u[1] == (HD | BD | kD | UD) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[Zo(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Rg(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var c = arguments,
            E = c[0];
          if (a && c.length == 1 && XD(E)) return a.plant(E).value();
          for (var f = 0, h = n ? t[f].apply(this, c) : E; ++f < n; )
            h = t[f].call(this, h);
          return h;
        };
      });
    }
    Cg.exports = WD;
  });
  var Ng = d((gX, Pg) => {
    var zD = Lg(),
      KD = zD();
    Pg.exports = KD;
  });
  var Mg = d((vX, Dg) => {
    function jD(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Dg.exports = jD;
  });
  var qg = d((EX, Fg) => {
    var YD = Mg(),
      Jo = lr();
    function QD(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = Jo(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = Jo(t)), (t = t === t ? t : 0)),
        YD(Jo(e), t, n)
      );
    }
    Fg.exports = QD;
  });
  var zg,
    Kg,
    jg,
    Yg,
    $D,
    ZD,
    JD,
    eM,
    tM,
    nM,
    rM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    lM,
    fM,
    Qg,
    $g,
    dM,
    pM,
    hM,
    Zg,
    gM,
    vM,
    Jg,
    EM,
    ea,
    ev,
    Gg,
    Xg,
    tv,
    xn,
    yM,
    nt,
    nv,
    mM,
    Me,
    Ke,
    Sn,
    rv,
    ta,
    Vg,
    na,
    _M,
    An,
    IM,
    TM,
    bM,
    iv,
    Bg,
    wM,
    kg,
    AM,
    xM,
    SM,
    Hg,
    qr,
    Gr,
    Ug,
    Wg,
    ov,
    av = Ee(() => {
      "use strict";
      (zg = ce(Ng())), (Kg = ce(ur())), (jg = ce(qg()));
      Ne();
      ra();
      Cr();
      (Yg = ce(Tt())),
        ({
          MOUSE_CLICK: $D,
          MOUSE_SECOND_CLICK: ZD,
          MOUSE_DOWN: JD,
          MOUSE_UP: eM,
          MOUSE_OVER: tM,
          MOUSE_OUT: nM,
          DROPDOWN_CLOSE: rM,
          DROPDOWN_OPEN: iM,
          SLIDER_ACTIVE: oM,
          SLIDER_INACTIVE: aM,
          TAB_ACTIVE: sM,
          TAB_INACTIVE: uM,
          NAVBAR_CLOSE: cM,
          NAVBAR_OPEN: lM,
          MOUSE_MOVE: fM,
          PAGE_SCROLL_DOWN: Qg,
          SCROLL_INTO_VIEW: $g,
          SCROLL_OUT_OF_VIEW: dM,
          PAGE_SCROLL_UP: pM,
          SCROLLING_IN_VIEW: hM,
          PAGE_FINISH: Zg,
          ECOMMERCE_CART_CLOSE: gM,
          ECOMMERCE_CART_OPEN: vM,
          PAGE_START: Jg,
          PAGE_SCROLL: EM,
        } = We),
        (ea = "COMPONENT_ACTIVE"),
        (ev = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Gg } = Ae),
        ({ getNamespacedParameterId: Xg } = Yg.IX2VanillaUtils),
        (tv = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (xn = tv(({ element: e, nativeEvent: t }) => e === t.target)),
        (yM = tv(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (nt = (0, zg.default)([xn, yM])),
        (nv = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: r } = n,
              i = r[t];
            if (i && !_M[i.eventTypeId]) return i;
          }
          return null;
        }),
        (mM = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: r } = n.config;
          return !!nv(e, r);
        }),
        (Me = ({ store: e, event: t, element: n, eventStateKey: r }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            c = nv(e, u);
          return (
            c &&
              Qt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + Gg + r.split(Gg)[1],
                actionListId: (0, Kg.default)(c, "action.config.actionListId"),
              }),
            Qt({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            On({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            i
          );
        }),
        (Ke = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r),
        (Sn = { handler: Ke(nt, Me) }),
        (rv = { ...Sn, types: [ea, ev].join(" ") }),
        (ta = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Vg = "mouseover mouseout"),
        (na = { types: ta }),
        (_M = { PAGE_START: Jg, PAGE_FINISH: Zg }),
        (An = (() => {
          let e = window.pageXOffset !== void 0,
            n =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : n.scrollLeft,
            scrollTop: e ? window.pageYOffset : n.scrollTop,
            stiffScrollTop: (0, jg.default)(
              e ? window.pageYOffset : n.scrollTop,
              0,
              n.scrollHeight - window.innerHeight
            ),
            scrollWidth: n.scrollWidth,
            scrollHeight: n.scrollHeight,
            clientWidth: n.clientWidth,
            clientHeight: n.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (IM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (TM = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: r, relatedTarget: i } = t,
            o = e.contains(r);
          if (n === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(n === "mouseout" && o && a);
        }),
        (bM = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: r, clientHeight: i } = An(),
            o = n.scrollOffsetValue,
            u = n.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return IM(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: r,
            bottom: i - u,
          });
        }),
        (iv = (e) => (t, n) => {
          let { type: r } = t.nativeEvent,
            i = [ea, ev].indexOf(r) !== -1 ? r === ea : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        }),
        (Bg = (e) => (t, n) => {
          let r = { elementHovered: TM(t) };
          return (
            ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
              e(t, r)) ||
            r
          );
        }),
        (wM = (e) => (t, n) => {
          let r = { ...n, elementVisible: bM(t) };
          return (
            ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
              e(t, r)) ||
            r
          );
        }),
        (kg =
          (e) =>
          (t, n = {}) => {
            let { stiffScrollTop: r, scrollHeight: i, innerHeight: o } = An(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: c } = a,
              E = c === "PX",
              f = i - o,
              h = Number((r / f).toFixed(2));
            if (n && n.percentTop === h) return n;
            let p = (E ? u : (o * (u || 0)) / 100) / f,
              g,
              m,
              I = 0;
            n &&
              ((g = h > n.percentTop),
              (m = n.scrollingDown !== g),
              (I = m ? h : n.anchorTop));
            let _ = s === Qg ? h >= I + p : h <= I - p,
              O = {
                ...n,
                percentTop: h,
                inBounds: _,
                anchorTop: I,
                scrollingDown: g,
              };
            return (n && _ && (m || O.inBounds !== n.inBounds) && e(t, O)) || O;
          }),
        (AM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (xM = (e) => (t, n) => {
          let r = { finished: document.readyState === "complete" };
          return r.finished && !(n && n.finshed) && e(t), r;
        }),
        (SM = (e) => (t, n) => {
          let r = { started: !0 };
          return n || e(t), r;
        }),
        (Hg =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let r = { clickCount: (n.clickCount % 2) + 1 };
            return (r.clickCount !== n.clickCount && e(t, r)) || r;
          }),
        (qr = (e = !0) => ({
          ...rv,
          handler: Ke(
            e ? nt : xn,
            iv((t, n) => (n.isActive ? Sn.handler(t, n) : n))
          ),
        })),
        (Gr = (e = !0) => ({
          ...rv,
          handler: Ke(
            e ? nt : xn,
            iv((t, n) => (n.isActive ? n : Sn.handler(t, n)))
          ),
        })),
        (Ug = {
          ...na,
          handler: wM((e, t) => {
            let { elementVisible: n } = t,
              { event: r, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[r.action.config.autoStopEventId] && t.triggered
              ? t
              : (r.eventTypeId === $g) === n
              ? (Me(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Wg = 0.05),
        (ov = {
          [oM]: qr(),
          [aM]: Gr(),
          [iM]: qr(),
          [rM]: Gr(),
          [lM]: qr(!1),
          [cM]: Gr(!1),
          [sM]: qr(),
          [uM]: Gr(),
          [vM]: { types: "ecommerce-cart-open", handler: Ke(nt, Me) },
          [gM]: { types: "ecommerce-cart-close", handler: Ke(nt, Me) },
          [$D]: {
            types: "click",
            handler: Ke(
              nt,
              Hg((e, { clickCount: t }) => {
                mM(e) ? t === 1 && Me(e) : Me(e);
              })
            ),
          },
          [ZD]: {
            types: "click",
            handler: Ke(
              nt,
              Hg((e, { clickCount: t }) => {
                t === 2 && Me(e);
              })
            ),
          },
          [JD]: { ...Sn, types: "mousedown" },
          [eM]: { ...Sn, types: "mouseup" },
          [tM]: {
            types: Vg,
            handler: Ke(
              nt,
              Bg((e, t) => {
                t.elementHovered && Me(e);
              })
            ),
          },
          [nM]: {
            types: Vg,
            handler: Ke(
              nt,
              Bg((e, t) => {
                t.elementHovered || Me(e);
              })
            ),
          },
          [fM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: r,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: c,
                  restingState: E = 0,
                } = n,
                {
                  clientX: f = o.clientX,
                  clientY: h = o.clientY,
                  pageX: p = o.pageX,
                  pageY: g = o.pageY,
                } = r,
                m = s === "X_AXIS",
                I = r.type === "mouseout",
                _ = E / 100,
                O = u,
                x = !1;
              switch (a) {
                case Ze.VIEWPORT: {
                  _ = m
                    ? Math.min(f, window.innerWidth) / window.innerWidth
                    : Math.min(h, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Ze.PAGE: {
                  let {
                    scrollLeft: R,
                    scrollTop: P,
                    scrollWidth: C,
                    scrollHeight: B,
                  } = An();
                  _ = m ? Math.min(R + p, C) / C : Math.min(P + g, B) / B;
                  break;
                }
                case Ze.ELEMENT:
                default: {
                  O = Xg(i, u);
                  let R = r.type.indexOf("mouse") === 0;
                  if (R && nt({ element: t, nativeEvent: r }) !== !0) break;
                  let P = t.getBoundingClientRect(),
                    { left: C, top: B, width: k, height: z } = P;
                  if (!R && !AM({ left: f, top: h }, P)) break;
                  (x = !0), (_ = m ? (f - C) / k : (h - B) / z);
                  break;
                }
              }
              return (
                I && (_ > 1 - Wg || _ < Wg) && (_ = Math.round(_)),
                (a !== Ze.ELEMENT || x || x !== o.elementHovered) &&
                  ((_ = c ? 1 - _ : _), e.dispatch(jt(O, _))),
                {
                  elementHovered: x,
                  clientX: f,
                  clientY: h,
                  pageX: p,
                  pageY: g,
                }
              );
            },
          },
          [EM]: {
            types: ta,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: r } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = An(),
                s = i / (o - a);
              (s = r ? 1 - s : s), e.dispatch(jt(n, s));
            },
          },
          [hM]: {
            types: ta,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: r },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: c,
                } = An(),
                {
                  basedOn: E,
                  selectedAxis: f,
                  continuousParameterGroupId: h,
                  startsEntering: p,
                  startsExiting: g,
                  addEndOffset: m,
                  addStartOffset: I,
                  addOffsetValue: _ = 0,
                  endOffsetValue: O = 0,
                } = n,
                x = f === "X_AXIS";
              if (E === Ze.VIEWPORT) {
                let R = x ? o / s : a / u;
                return (
                  R !== i.scrollPercent && t.dispatch(jt(h, R)),
                  { scrollPercent: R }
                );
              } else {
                let R = Xg(r, h),
                  P = e.getBoundingClientRect(),
                  C = (I ? _ : 0) / 100,
                  B = (m ? O : 0) / 100;
                (C = p ? C : 1 - C), (B = g ? B : 1 - B);
                let k = P.top + Math.min(P.height * C, c),
                  j = P.top + P.height * B - k,
                  te = Math.min(c + j, u),
                  A = Math.min(Math.max(0, c - k), te) / te;
                return (
                  A !== i.scrollPercent && t.dispatch(jt(R, A)),
                  { scrollPercent: A }
                );
              }
            },
          },
          [$g]: Ug,
          [dM]: Ug,
          [Qg]: {
            ...na,
            handler: kg((e, t) => {
              t.scrollingDown && Me(e);
            }),
          },
          [pM]: {
            ...na,
            handler: kg((e, t) => {
              t.scrollingDown || Me(e);
            }),
          },
          [Zg]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(xn, xM(Me)),
          },
          [Jg]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(xn, SM(Me)),
          },
        });
    });
  var bv = {};
  Le(bv, {
    observeRequests: () => KM,
    startActionGroup: () => On,
    startEngine: () => Ur,
    stopActionGroup: () => Qt,
    stopAllActionGroups: () => _v,
    stopEngine: () => Wr,
  });
  function KM(e) {
    bt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: QM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: $M }),
      bt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: ZM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: JM });
  }
  function jM(e) {
    bt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Wr(e),
          vv({ store: e, elementApi: Re }),
          Ur({ store: e, allowEvents: !0 }),
          Ev();
      },
    });
  }
  function YM(e, t) {
    let n = bt({
      store: e,
      select: ({ ixSession: r }) => r.tick,
      onChange: (r) => {
        t(r), n();
      },
    });
  }
  function QM({ rawData: e, defer: t }, n) {
    let r = () => {
      Ur({ store: n, rawData: e, allowEvents: !0 }), Ev();
    };
    t ? setTimeout(r, 0) : r();
  }
  function Ev() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function $M(e, t) {
    let {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: c = !0,
      } = e,
      { rawData: E } = e;
    if (r && i && E && s) {
      let f = E.actionLists[r];
      f && (E = FM({ actionList: f, actionItemId: i, rawData: E }));
    }
    if (
      (Ur({ store: t, rawData: E, allowEvents: a, testManual: u }),
      (r && n === Pe.GENERAL_START_ACTION) || ia(n))
    ) {
      Qt({ store: t, actionListId: r }),
        mv({ store: t, actionListId: r, eventId: o });
      let f = On({
        store: t,
        eventId: o,
        actionListId: r,
        immediate: s,
        verbose: c,
      });
      c && f && t.dispatch(Yt({ actionListId: r, isPlaying: !s }));
    }
  }
  function ZM({ actionListId: e }, t) {
    e ? Qt({ store: t, actionListId: e }) : _v({ store: t }), Wr(t);
  }
  function JM(e, t) {
    Wr(t), vv({ store: t, elementApi: Re });
  }
  function Ur({ store: e, rawData: t, allowEvents: n, testManual: r }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Mo(t)),
      i.active ||
        (e.dispatch(
          Fo({
            hasBoundaryNodes: !!document.querySelector(Vr),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        n &&
          (oF(e), eF(), e.getState().ixSession.hasDefinedMediaQueries && jM(e)),
        e.dispatch(qo()),
        tF(e, r));
  }
  function eF() {
    let { documentElement: e } = document;
    e.className.indexOf(sv) === -1 && (e.className += ` ${sv}`);
  }
  function tF(e, t) {
    let n = (r) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(Or(r, o)), t ? YM(e, n) : requestAnimationFrame(n));
    };
    n(window.performance.now());
  }
  function Wr(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: n } = t;
      n.forEach(nF), VM(), e.dispatch(Go());
    }
  }
  function nF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function rF({
    store: e,
    eventStateKey: t,
    eventTarget: n,
    eventId: r,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: c, ixSession: E } = e.getState(),
      { events: f } = c,
      h = f[r],
      { eventTypeId: p } = h,
      g = {},
      m = {},
      I = [],
      { continuousActionGroups: _ } = a,
      { id: O } = a;
    qM(p, i) && (O = GM(t, O));
    let x = E.hasBoundaryNodes && n ? wn(n, Vr) : null;
    _.forEach((R) => {
      let { keyframe: P, actionItems: C } = R;
      C.forEach((B) => {
        let { actionTypeId: k } = B,
          { target: z } = B.config;
        if (!z) return;
        let j = z.boundaryMode ? x : null,
          te = BM(z) + oa + k;
        if (((m[te] = iF(m[te], P, B)), !g[te])) {
          g[te] = !0;
          let { config: F } = B;
          Br({
            config: F,
            event: h,
            eventTarget: n,
            elementRoot: j,
            elementApi: Re,
          }).forEach((A) => {
            I.push({ element: A, key: te });
          });
        }
      });
    }),
      I.forEach(({ element: R, key: P }) => {
        let C = m[P],
          B = (0, ut.default)(C, "[0].actionItems[0]", {}),
          { actionTypeId: k } = B,
          z = Hr(k) ? sa(k)(R, B) : null,
          j = aa({ element: R, actionItem: B, elementApi: Re }, z);
        ua({
          store: e,
          element: R,
          eventId: r,
          actionListId: o,
          actionItem: B,
          destination: j,
          continuous: !0,
          parameterId: O,
          actionGroups: C,
          smoothing: s,
          restingValue: u,
          pluginInstance: z,
        });
      });
  }
  function iF(e = [], t, n) {
    let r = [...e],
      i;
    return (
      r.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = r.length), r.push({ keyframe: t, actionItems: [] })),
      r[i].actionItems.push(n),
      r
    );
  }
  function oF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: n } = t;
    yv(e),
      (0, $t.default)(n, (i, o) => {
        let a = ov[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        fF({ logic: a, store: e, events: i });
      });
    let { ixSession: r } = e.getState();
    r.eventListeners.length && sF(e);
  }
  function sF(e) {
    let t = () => {
      yv(e);
    };
    aF.forEach((n) => {
      window.addEventListener(n, t), e.dispatch(Sr(window, [n, t]));
    }),
      t();
  }
  function yv(e) {
    let { ixSession: t, ixData: n } = e.getState(),
      r = window.innerWidth;
    if (r !== t.viewportWidth) {
      let { mediaQueries: i } = n;
      e.dispatch(Ho({ width: r, mediaQueries: i }));
    }
  }
  function fF({ logic: e, store: t, events: n }) {
    dF(n);
    let { types: r, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = uF(n, lF);
    if (!(0, lv.default)(s)) return;
    (0, $t.default)(s, (f, h) => {
      let p = n[h],
        { action: g, id: m, mediaQueries: I = o.mediaQueryKeys } = p,
        { actionListId: _ } = g.config;
      kM(I, o.mediaQueryKeys) || t.dispatch(Uo()),
        g.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(p.config) ? p.config : [p.config]).forEach((x) => {
            let { continuousParameterGroupId: R } = x,
              P = (0, ut.default)(a, `${_}.continuousParameterGroups`, []),
              C = (0, cv.default)(P, ({ id: z }) => z === R),
              B = (x.smoothing || 0) / 100,
              k = (x.restingState || 0) / 100;
            C &&
              f.forEach((z, j) => {
                let te = m + oa + j;
                rF({
                  store: t,
                  eventStateKey: te,
                  eventTarget: z,
                  eventId: m,
                  eventConfig: x,
                  actionListId: _,
                  parameterGroup: C,
                  smoothing: B,
                  restingValue: k,
                });
              });
          }),
        (g.actionTypeId === Pe.GENERAL_START_ACTION || ia(g.actionTypeId)) &&
          mv({ store: t, actionListId: _, eventId: m });
    });
    let u = (f) => {
        let { ixSession: h } = t.getState();
        cF(s, (p, g, m) => {
          let I = n[g],
            _ = h.eventState[m],
            { action: O, mediaQueries: x = o.mediaQueryKeys } = I;
          if (!kr(x, h.mediaQueryKey)) return;
          let R = (P = {}) => {
            let C = i(
              {
                store: t,
                element: p,
                event: I,
                eventConfig: P,
                nativeEvent: f,
                eventStateKey: m,
              },
              _
            );
            HM(C, _) || t.dispatch(Xo(m, C));
          };
          O.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(I.config) ? I.config : [I.config]).forEach(R)
            : R();
        });
      },
      c = (0, hv.default)(u, zM),
      E = ({ target: f = document, types: h, throttle: p }) => {
        h.split(" ")
          .filter(Boolean)
          .forEach((g) => {
            let m = p ? c : u;
            f.addEventListener(g, m), t.dispatch(Sr(f, [g, m]));
          });
      };
    Array.isArray(r) ? r.forEach(E) : typeof r == "string" && E(e);
  }
  function dF(e) {
    if (!WM) return;
    let t = {},
      n = "";
    for (let r in e) {
      let { eventTypeId: i, target: o } = e[r],
        a = zo(o);
      t[a] ||
        ((i === We.MOUSE_CLICK || i === We.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (n += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (n) {
      let r = document.createElement("style");
      (r.textContent = n), document.body.appendChild(r);
    }
  }
  function mv({ store: e, actionListId: t, eventId: n }) {
    let { ixData: r, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = r,
      s = a[n],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let c = (0, ut.default)(u, "actionItemGroups[0].actionItems", []),
        E = (0, ut.default)(s, "mediaQueries", r.mediaQueryKeys);
      if (!kr(E, i.mediaQueryKey)) return;
      c.forEach((f) => {
        let { config: h, actionTypeId: p } = f,
          g =
            h?.target?.useEventTarget === !0 && h?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : h,
          m = Br({ config: g, event: s, elementApi: Re }),
          I = Hr(p);
        m.forEach((_) => {
          let O = I ? sa(p)(_, f) : null;
          ua({
            destination: aa({ element: _, actionItem: f, elementApi: Re }, O),
            immediate: !0,
            store: e,
            element: _,
            eventId: n,
            actionItem: f,
            actionListId: t,
            pluginInstance: O,
          });
        });
      });
    }
  }
  function _v({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, $t.default)(t, (n) => {
      if (!n.continuous) {
        let { actionListId: r, verbose: i } = n;
        ca(n, e), i && e.dispatch(Yt({ actionListId: r, isPlaying: !1 }));
      }
    });
  }
  function Qt({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && n ? wn(n, Vr) : null;
    (0, $t.default)(o, (u) => {
      let c = (0, ut.default)(u, "actionItem.config.target.boundaryMode"),
        E = r ? u.eventStateKey === r : !0;
      if (u.actionListId === i && u.eventId === t && E) {
        if (s && c && !Ko(s, u.element)) return;
        ca(u, e),
          u.verbose && e.dispatch(Yt({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function On({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: c } = e.getState(),
      { events: E } = u,
      f = E[t] || {},
      { mediaQueries: h = u.mediaQueryKeys } = f,
      p = (0, ut.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: g, useFirstGroupAsInitialState: m } = p;
    if (!g || !g.length) return !1;
    o >= g.length && (0, ut.default)(f, "config.loop") && (o = 0),
      o === 0 && m && o++;
    let _ =
        (o === 0 || (o === 1 && m)) && ia(f.action?.actionTypeId)
          ? f.config.delay
          : void 0,
      O = (0, ut.default)(g, [o, "actionItems"], []);
    if (!O.length || !kr(h, c.mediaQueryKey)) return !1;
    let x = c.hasBoundaryNodes && n ? wn(n, Vr) : null,
      R = NM(O),
      P = !1;
    return (
      O.forEach((C, B) => {
        let { config: k, actionTypeId: z } = C,
          j = Hr(z),
          { target: te } = k;
        if (!te) return;
        let F = te.boundaryMode ? x : null;
        Br({
          config: k,
          event: f,
          eventTarget: n,
          elementRoot: F,
          elementApi: Re,
        }).forEach((N, H) => {
          let G = j ? sa(z)(N, C) : null,
            M = j ? UM(z)(N, C) : null;
          P = !0;
          let q = R === B && H === 0,
            U = DM({ element: N, actionItem: C }),
            ee = aa({ element: N, actionItem: C, elementApi: Re }, G);
          ua({
            store: e,
            element: N,
            actionItem: C,
            eventId: t,
            eventTarget: n,
            eventStateKey: r,
            actionListId: i,
            groupIndex: o,
            isCarrier: q,
            computedStyle: U,
            destination: ee,
            immediate: a,
            verbose: s,
            pluginInstance: G,
            pluginDuration: M,
            instanceDelay: _,
          });
        });
      }),
      P
    );
  }
  function ua(e) {
    let { store: t, computedStyle: n, ...r } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: c,
        eventId: E,
      } = r,
      f = !u,
      h = LM(),
      { ixElements: p, ixSession: g, ixData: m } = t.getState(),
      I = CM(p, i),
      { refState: _ } = p[I] || {},
      O = jo(i),
      x = g.reducedMotion && Ii[o.actionTypeId],
      R;
    if (x && u)
      switch (m.events[E]?.eventTypeId) {
        case We.MOUSE_MOVE:
        case We.MOUSE_MOVE_IN_VIEWPORT:
          R = c;
          break;
        default:
          R = 0.5;
          break;
      }
    let P = MM(i, _, n, o, Re, s);
    if (
      (t.dispatch(
        Vo({
          instanceId: h,
          elementId: I,
          origin: P,
          refType: O,
          skipMotion: x,
          skipToValue: R,
          ...r,
        })
      ),
      Iv(document.body, "ix2-animation-started", h),
      a)
    ) {
      pF(t, h);
      return;
    }
    bt({ store: t, select: ({ ixInstances: C }) => C[h], onChange: Tv }),
      f && t.dispatch(Rr(h, g.tick));
  }
  function ca(e, t) {
    Iv(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: n, actionItem: r } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[n] || {};
    a === gv && XM(o, r, Re), t.dispatch(Bo(e.id));
  }
  function Iv(e, t, n) {
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
  }
  function pF(e, t) {
    let { ixParameters: n } = e.getState();
    e.dispatch(Rr(t, 0)), e.dispatch(Or(performance.now(), n));
    let { ixInstances: r } = e.getState();
    Tv(r[t], e);
  }
  function Tv(e, t) {
    let {
        active: n,
        continuous: r,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: c,
        groupIndex: E,
        eventId: f,
        eventTarget: h,
        eventStateKey: p,
        actionListId: g,
        isCarrier: m,
        styleProp: I,
        verbose: _,
        pluginInstance: O,
      } = e,
      { ixData: x, ixSession: R } = t.getState(),
      { events: P } = x,
      C = P && P[f] ? P[f] : {},
      { mediaQueries: B = x.mediaQueryKeys } = C;
    if (kr(B, R.mediaQueryKey) && (r || n || i)) {
      if (c || (u === RM && i)) {
        t.dispatch(ko(o, s, c, a));
        let { ixElements: k } = t.getState(),
          { ref: z, refType: j, refState: te } = k[o] || {},
          F = te && te[s];
        (j === gv || Hr(s)) && PM(z, te, F, f, a, I, Re, u, O);
      }
      if (i) {
        if (m) {
          let k = On({
            store: t,
            eventId: f,
            eventTarget: h,
            eventStateKey: p,
            actionListId: g,
            groupIndex: E + 1,
            verbose: _,
          });
          _ && !k && t.dispatch(Yt({ actionListId: g, isPlaying: !1 }));
        }
        ca(e, t);
      }
    }
  }
  var cv,
    ut,
    lv,
    fv,
    dv,
    pv,
    $t,
    hv,
    Xr,
    OM,
    ia,
    oa,
    Vr,
    gv,
    RM,
    sv,
    Br,
    CM,
    aa,
    bt,
    LM,
    PM,
    vv,
    NM,
    DM,
    MM,
    FM,
    qM,
    GM,
    kr,
    XM,
    VM,
    BM,
    kM,
    HM,
    Hr,
    sa,
    UM,
    uv,
    WM,
    zM,
    aF,
    uF,
    cF,
    lF,
    ra = Ee(() => {
      "use strict";
      (cv = ce(Qi())),
        (ut = ce(ur())),
        (lv = ce(Fp())),
        (fv = ce(uh())),
        (dv = ce(lh())),
        (pv = ce(dh())),
        ($t = ce(yh())),
        (hv = ce(Ah()));
      Ne();
      Xr = ce(Tt());
      Cr();
      Lh();
      av();
      (OM = Object.keys(Vn)),
        (ia = (e) => OM.includes(e)),
        ({
          COLON_DELIMITER: oa,
          BOUNDARY_SELECTOR: Vr,
          HTML_ELEMENT: gv,
          RENDER_GENERAL: RM,
          W_MOD_IX: sv,
        } = Ae),
        ({
          getAffectedElements: Br,
          getElementId: CM,
          getDestinationValues: aa,
          observeStore: bt,
          getInstanceId: LM,
          renderHTMLElement: PM,
          clearAllStyles: vv,
          getMaxDurationItemIndex: NM,
          getComputedStyle: DM,
          getInstanceOrigin: MM,
          reduceListToGroup: FM,
          shouldNamespaceEventParameter: qM,
          getNamespacedParameterId: GM,
          shouldAllowMediaQuery: kr,
          cleanupHTMLElement: XM,
          clearObjectCache: VM,
          stringifyTarget: BM,
          mediaQueriesEqual: kM,
          shallowEqual: HM,
        } = Xr.IX2VanillaUtils),
        ({
          isPluginType: Hr,
          createPluginInstance: sa,
          getPluginDuration: UM,
        } = Xr.IX2VanillaPlugins),
        (uv = navigator.userAgent),
        (WM = uv.match(/iPad/i) || uv.match(/iPhone/)),
        (zM = 12);
      aF = ["resize", "orientationchange"];
      (uF = (e, t) => (0, fv.default)((0, pv.default)(e, t), dv.default)),
        (cF = (e, t) => {
          (0, $t.default)(e, (n, r) => {
            n.forEach((i, o) => {
              let a = r + oa + o;
              t(i, r, a);
            });
          });
        }),
        (lF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Br({ config: t, elementApi: Re });
        });
    });
  var xv = d((fa) => {
    "use strict";
    Object.defineProperty(fa, "__esModule", { value: !0 });
    function hF(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    hF(fa, {
      actions: function () {
        return EF;
      },
      destroy: function () {
        return Av;
      },
      init: function () {
        return IF;
      },
      setEnv: function () {
        return _F;
      },
      store: function () {
        return zr;
      },
    });
    var gF = yi(),
      vF = yF((Ep(), Ye(vp))),
      la = (ra(), Ye(bv)),
      EF = mF((Cr(), Ye(Sh)));
    function yF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function wv(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (wv = function (r) {
        return r ? n : t;
      })(e);
    }
    function mF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = wv(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var zr = (0, gF.createStore)(vF.default);
    function _F(e) {
      e() && (0, la.observeRequests)(zr);
    }
    function IF(e) {
      Av(), (0, la.startEngine)({ store: zr, rawData: e, allowEvents: !0 });
    }
    function Av() {
      (0, la.stopEngine)(zr);
    }
  });
  var Cv = d((SX, Rv) => {
    "use strict";
    var Sv = Fe(),
      Ov = xv();
    Ov.setEnv(Sv.env);
    Sv.define(
      "ix2",
      (Rv.exports = function () {
        return Ov;
      })
    );
  });
  var Pv = d((OX, Lv) => {
    "use strict";
    var Zt = Fe();
    Zt.define(
      "links",
      (Lv.exports = function (e, t) {
        var n = {},
          r = e(window),
          i,
          o = Zt.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          c = /index\.(html|php)$/,
          E = /\/$/,
          f,
          h;
        n.ready = n.design = n.preview = p;
        function p() {
          (i = o && Zt.env("design")),
            (h = Zt.env("slug") || a.pathname || ""),
            Zt.scroll.off(m),
            (f = []);
          for (var _ = document.links, O = 0; O < _.length; ++O) g(_[O]);
          f.length && (Zt.scroll.on(m), m());
        }
        function g(_) {
          if (!_.getAttribute("hreflang")) {
            var O =
              (i && _.getAttribute("href-disabled")) || _.getAttribute("href");
            if (((s.href = O), !(O.indexOf(":") >= 0))) {
              var x = e(_);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var R = e(s.hash);
                R.length && f.push({ link: x, sec: R, active: !1 });
                return;
              }
              if (!(O === "#" || O === "")) {
                var P =
                  s.href === a.href || O === h || (c.test(O) && E.test(h));
                I(x, u, P);
              }
            }
          }
        }
        function m() {
          var _ = r.scrollTop(),
            O = r.height();
          t.each(f, function (x) {
            if (!x.link.attr("hreflang")) {
              var R = x.link,
                P = x.sec,
                C = P.offset().top,
                B = P.outerHeight(),
                k = O * 0.5,
                z = P.is(":visible") && C + B - k >= _ && C + k <= _ + O;
              x.active !== z && ((x.active = z), I(R, u, z));
            }
          });
        }
        function I(_, O, x) {
          var R = _.hasClass(O);
          (x && R) || (!x && !R) || (x ? _.addClass(O) : _.removeClass(O));
        }
        return n;
      })
    );
  });
  var Dv = d((RX, Nv) => {
    "use strict";
    var Kr = Fe();
    Kr.define(
      "scroll",
      (Nv.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = g() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (F) {
              window.setTimeout(F, 15);
            },
          u = Kr.env("editor") ? ".w-editor-body" : "body",
          c =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          E = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          p = document.createElement("style");
        p.appendChild(document.createTextNode(h));
        function g() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var m = /^#[a-zA-Z0-9][\w:.-]*$/;
        function I(F) {
          return m.test(F.hash) && F.host + F.pathname === n.host + n.pathname;
        }
        let _ =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function O() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            _.matches
          );
        }
        function x(F, A) {
          var N;
          switch (A) {
            case "add":
              (N = F.attr("tabindex")),
                N
                  ? F.attr("data-wf-tabindex-swap", N)
                  : F.attr("tabindex", "-1");
              break;
            case "remove":
              (N = F.attr("data-wf-tabindex-swap")),
                N
                  ? (F.attr("tabindex", N),
                    F.removeAttr("data-wf-tabindex-swap"))
                  : F.removeAttr("tabindex");
              break;
          }
          F.toggleClass("wf-force-outline-none", A === "add");
        }
        function R(F) {
          var A = F.currentTarget;
          if (
            !(
              Kr.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(A.className))
            )
          ) {
            var N = I(A) ? A.hash : "";
            if (N !== "") {
              var H = e(N);
              H.length &&
                (F && (F.preventDefault(), F.stopPropagation()),
                P(N, F),
                window.setTimeout(
                  function () {
                    C(H, function () {
                      x(H, "add"),
                        H.get(0).focus({ preventScroll: !0 }),
                        x(H, "remove");
                    });
                  },
                  F ? 0 : 300
                ));
            }
          }
        }
        function P(F) {
          if (
            n.hash !== F &&
            r &&
            r.pushState &&
            !(Kr.env.chrome && n.protocol === "file:")
          ) {
            var A = r.state && r.state.hash;
            A !== F && r.pushState({ hash: F }, "", F);
          }
        }
        function C(F, A) {
          var N = i.scrollTop(),
            H = B(F);
          if (N !== H) {
            var G = k(F, N, H),
              M = Date.now(),
              q = function () {
                var U = Date.now() - M;
                window.scroll(0, z(N, H, U, G)),
                  U <= G ? s(q) : typeof A == "function" && A();
              };
            s(q);
          }
        }
        function B(F) {
          var A = e(c),
            N = A.css("position") === "fixed" ? A.outerHeight() : 0,
            H = F.offset().top - N;
          if (F.data("scroll") === "mid") {
            var G = i.height() - N,
              M = F.outerHeight();
            M < G && (H -= Math.round((G - M) / 2));
          }
          return H;
        }
        function k(F, A, N) {
          if (O()) return 0;
          var H = 1;
          return (
            a.add(F).each(function (G, M) {
              var q = parseFloat(M.getAttribute("data-scroll-time"));
              !isNaN(q) && q >= 0 && (H = q);
            }),
            (472.143 * Math.log(Math.abs(A - N) + 125) - 2e3) * H
          );
        }
        function z(F, A, N, H) {
          return N > H ? A : F + (A - F) * j(N / H);
        }
        function j(F) {
          return F < 0.5
            ? 4 * F * F * F
            : (F - 1) * (2 * F - 2) * (2 * F - 2) + 1;
        }
        function te() {
          var { WF_CLICK_EMPTY: F, WF_CLICK_SCROLL: A } = t;
          o.on(A, f, R),
            o.on(F, E, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(p, document.head.firstChild);
        }
        return { ready: te };
      })
    );
  });
  var Fv = d((CX, Mv) => {
    "use strict";
    var TF = Fe();
    TF.define(
      "touch",
      (Mv.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new r(o) : null
            );
          });
        function r(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            c,
            E;
          o.addEventListener("touchstart", f, !1),
            o.addEventListener("touchmove", h, !1),
            o.addEventListener("touchend", p, !1),
            o.addEventListener("touchcancel", g, !1),
            o.addEventListener("mousedown", f, !1),
            o.addEventListener("mousemove", h, !1),
            o.addEventListener("mouseup", p, !1),
            o.addEventListener("mouseout", g, !1);
          function f(I) {
            var _ = I.touches;
            (_ && _.length > 1) ||
              ((a = !0),
              _ ? ((s = !0), (c = _[0].clientX)) : (c = I.clientX),
              (E = c));
          }
          function h(I) {
            if (a) {
              if (s && I.type === "mousemove") {
                I.preventDefault(), I.stopPropagation();
                return;
              }
              var _ = I.touches,
                O = _ ? _[0].clientX : I.clientX,
                x = O - E;
              (E = O),
                Math.abs(x) > u &&
                  n &&
                  String(n()) === "" &&
                  (i("swipe", I, { direction: x > 0 ? "right" : "left" }), g());
            }
          }
          function p(I) {
            if (a && ((a = !1), s && I.type === "mouseup")) {
              I.preventDefault(), I.stopPropagation(), (s = !1);
              return;
            }
          }
          function g() {
            a = !1;
          }
          function m() {
            o.removeEventListener("touchstart", f, !1),
              o.removeEventListener("touchmove", h, !1),
              o.removeEventListener("touchend", p, !1),
              o.removeEventListener("touchcancel", g, !1),
              o.removeEventListener("mousedown", f, !1),
              o.removeEventListener("mousemove", h, !1),
              o.removeEventListener("mouseup", p, !1),
              o.removeEventListener("mouseout", g, !1),
              (o = null);
          }
          this.destroy = m;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Xv = d((LX, Gv) => {
    "use strict";
    var da = Fe(),
      qv = "w-condition-invisible",
      bF = "." + qv;
    function wF(e) {
      return e.filter(function (t) {
        return !Cn(t);
      });
    }
    function Cn(e) {
      return !!(e.$el && e.$el.closest(bF).length);
    }
    function pa(e, t) {
      for (var n = e; n >= 0; n--) if (!Cn(t[n])) return n;
      return -1;
    }
    function ha(e, t) {
      for (var n = e; n <= t.length - 1; n++) if (!Cn(t[n])) return n;
      return -1;
    }
    function AF(e, t) {
      return pa(e - 1, t) === -1;
    }
    function xF(e, t) {
      return ha(e + 1, t) === -1;
    }
    function Rn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function SF(e, t, n, r) {
      var i = n.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        u = /(^|\s+)/g,
        c = [],
        E,
        f,
        h,
        p = [];
      function g(T, w) {
        return (
          (c = o(T) ? T : [T]),
          f || g.build(),
          wF(c).length > 1 &&
            ((f.items = f.empty),
            c.forEach(function (Y, J) {
              var le = ee("thumbnail"),
                ae = ee("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(le);
              Rn(ae, `show item ${J + 1} of ${c.length}`),
                Cn(Y) && ae.addClass(qv),
                (f.items = f.items.add(ae)),
                j(Y.thumbnailUrl || Y.url, function ($) {
                  $.prop("width") > $.prop("height")
                    ? G($, "wide")
                    : G($, "tall"),
                    le.append(G($, "thumbnail-image"));
                });
            }),
            f.strip.empty().append(f.items),
            G(f.content, "group")),
          i(M(f.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          G(f.html, "noscroll"),
          g.show(w || 0)
        );
      }
      (g.build = function () {
        return (
          g.destroy(),
          (f = { html: n(t.documentElement), empty: n() }),
          (f.arrowLeft = ee("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.arrowRight = ee("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.close = ee("control close").attr("role", "button")),
          Rn(f.arrowLeft, "previous image"),
          Rn(f.arrowRight, "next image"),
          Rn(f.close, "close lightbox"),
          (f.spinner = ee("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (f.strip = ee("strip").attr("role", "tablist")),
          (h = new A(f.spinner, N("hide"))),
          (f.content = ee("content").append(
            f.spinner,
            f.arrowLeft,
            f.arrowRight,
            f.close
          )),
          (f.container = ee("container").append(f.content, f.strip)),
          (f.lightbox = ee("backdrop hide").append(f.container)),
          f.strip.on("click", H("item"), x),
          f.content
            .on("swipe", R)
            .on("click", H("left"), I)
            .on("click", H("right"), _)
            .on("click", H("close"), O)
            .on("click", H("image, caption"), _),
          f.container.on("click", H("view"), O).on("dragstart", H("img"), C),
          f.lightbox.on("keydown", B).on("focusin", P),
          n(r).append(f.lightbox),
          g
        );
      }),
        (g.destroy = function () {
          f && (M(f.html, "noscroll"), f.lightbox.remove(), (f = void 0));
        }),
        (g.show = function (T) {
          if (T !== E) {
            var w = c[T];
            if (!w) return g.hide();
            if (Cn(w)) {
              if (T < E) {
                var Y = pa(T - 1, c);
                T = Y > -1 ? Y : T;
              } else {
                var J = ha(T + 1, c);
                T = J > -1 ? J : T;
              }
              w = c[T];
            }
            var le = E;
            (E = T),
              f.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              h.show();
            var ae = (w.html && ue(w.width, w.height)) || w.url;
            return (
              j(ae, function ($) {
                if (T !== E) return;
                var fe = ee("figure", "figure").append(G($, "image")),
                  ne = ee("frame").append(fe),
                  v = ee("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(ne),
                  X,
                  K;
                w.html &&
                  ((X = n(w.html)),
                  (K = X.is("iframe")),
                  K && X.on("load", W),
                  fe.append(G(X, "embed"))),
                  w.caption &&
                    fe.append(ee("caption", "figcaption").text(w.caption)),
                  f.spinner.before(v),
                  K || W();
                function W() {
                  if (
                    (f.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    h.hide(),
                    T !== E)
                  ) {
                    v.remove();
                    return;
                  }
                  let de = AF(T, c);
                  q(f.arrowLeft, "inactive", de),
                    U(f.arrowLeft, de),
                    de && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                  let rt = xF(T, c);
                  if (
                    (q(f.arrowRight, "inactive", rt),
                    U(f.arrowRight, rt),
                    rt && f.arrowRight.is(":focus") && f.arrowLeft.focus(),
                    f.view
                      ? (i(f.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(te(f.view)),
                        i(v)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: T > le ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : v.css("opacity", 1),
                    (f.view = v),
                    f.view.prop("tabIndex", 0),
                    f.items)
                  ) {
                    M(f.items, "active"), f.items.removeAttr("aria-selected");
                    var Ge = f.items.eq(T);
                    G(Ge, "active"), Ge.attr("aria-selected", !0), F(Ge);
                  }
                }
              }),
              f.close.prop("tabIndex", 0),
              n(":focus").addClass("active-lightbox"),
              p.length === 0 &&
                (n("body")
                  .children()
                  .each(function () {
                    n(this).hasClass("w-lightbox-backdrop") ||
                      n(this).is("script") ||
                      (p.push({
                        node: n(this),
                        hidden: n(this).attr("aria-hidden"),
                        tabIndex: n(this).attr("tabIndex"),
                      }),
                      n(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                f.close.focus()),
              g
            );
          }
        }),
        (g.hide = function () {
          return (
            i(f.lightbox).add("opacity .3s").start({ opacity: 0 }).then(z), g
          );
        }),
        (g.prev = function () {
          var T = pa(E - 1, c);
          T > -1 && g.show(T);
        }),
        (g.next = function () {
          var T = ha(E + 1, c);
          T > -1 && g.show(T);
        });
      function m(T) {
        return function (w) {
          this === w.target && (w.stopPropagation(), w.preventDefault(), T());
        };
      }
      var I = m(g.prev),
        _ = m(g.next),
        O = m(g.hide),
        x = function (T) {
          var w = n(this).index();
          T.preventDefault(), g.show(w);
        },
        R = function (T, w) {
          T.preventDefault(),
            w.direction === "left"
              ? g.next()
              : w.direction === "right" && g.prev();
        },
        P = function () {
          this.focus();
        };
      function C(T) {
        T.preventDefault();
      }
      function B(T) {
        var w = T.keyCode;
        w === 27 || k(w, "close")
          ? g.hide()
          : w === 37 || k(w, "left")
          ? g.prev()
          : w === 39 || k(w, "right")
          ? g.next()
          : k(w, "item") && n(":focus").click();
      }
      function k(T, w) {
        if (T !== 13 && T !== 32) return !1;
        var Y = n(":focus").attr("class"),
          J = N(w).trim();
        return Y.includes(J);
      }
      function z() {
        f &&
          (f.strip.scrollLeft(0).empty(),
          M(f.html, "noscroll"),
          G(f.lightbox, "hide"),
          f.view && f.view.remove(),
          M(f.content, "group"),
          G(f.arrowLeft, "inactive"),
          G(f.arrowRight, "inactive"),
          (E = f.view = void 0),
          p.forEach(function (T) {
            var w = T.node;
            w &&
              (T.hidden
                ? w.attr("aria-hidden", T.hidden)
                : w.removeAttr("aria-hidden"),
              T.tabIndex
                ? w.attr("tabIndex", T.tabIndex)
                : w.removeAttr("tabIndex"));
          }),
          (p = []),
          n(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function j(T, w) {
        var Y = ee("img", "img");
        return (
          Y.one("load", function () {
            w(Y);
          }),
          Y.attr("src", T),
          Y
        );
      }
      function te(T) {
        return function () {
          T.remove();
        };
      }
      function F(T) {
        var w = T.get(0),
          Y = f.strip.get(0),
          J = w.offsetLeft,
          le = w.clientWidth,
          ae = Y.scrollLeft,
          $ = Y.clientWidth,
          fe = Y.scrollWidth - $,
          ne;
        J < ae
          ? (ne = Math.max(0, J + le - $))
          : J + le > $ + ae && (ne = Math.min(J, fe)),
          ne != null &&
            i(f.strip).add("scroll-left 500ms").start({ "scroll-left": ne });
      }
      function A(T, w, Y) {
        (this.$element = T),
          (this.className = w),
          (this.delay = Y || 200),
          this.hide();
      }
      (A.prototype.show = function () {
        var T = this;
        T.timeoutId ||
          (T.timeoutId = setTimeout(function () {
            T.$element.removeClass(T.className), delete T.timeoutId;
          }, T.delay));
      }),
        (A.prototype.hide = function () {
          var T = this;
          if (T.timeoutId) {
            clearTimeout(T.timeoutId), delete T.timeoutId;
            return;
          }
          T.$element.addClass(T.className);
        });
      function N(T, w) {
        return T.replace(u, (w ? " ." : " ") + s);
      }
      function H(T) {
        return N(T, !0);
      }
      function G(T, w) {
        return T.addClass(N(w));
      }
      function M(T, w) {
        return T.removeClass(N(w));
      }
      function q(T, w, Y) {
        return T.toggleClass(N(w), Y);
      }
      function U(T, w) {
        return T.attr("aria-hidden", w).attr("tabIndex", w ? -1 : 0);
      }
      function ee(T, w) {
        return G(n(t.createElement(w || "div")), T);
      }
      function ue(T, w) {
        var Y =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          T +
          '" height="' +
          w +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(Y);
      }
      return (
        (function () {
          var T = e.navigator.userAgent,
            w = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            Y = T.match(w),
            J = T.indexOf("Android ") > -1 && T.indexOf("Chrome") === -1;
          if (!J && (!Y || Y[2] > 7)) return;
          var le = t.createElement("style");
          t.head.appendChild(le), e.addEventListener("resize", ae, !0);
          function ae() {
            var $ = e.innerHeight,
              fe = e.innerWidth,
              ne =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                $ +
                "px}.w-lightbox-view {width:" +
                fe +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * $ +
                "px}.w-lightbox-image {max-width:" +
                fe +
                "px;max-height:" +
                $ +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * $ +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * $ +
                "px}.w-lightbox-item {width:" +
                0.1 * $ +
                "px;padding:" +
                0.02 * $ +
                "px " +
                0.01 * $ +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * $ +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * $ +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * $ +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * $ +
                "px}.w-lightbox-image {max-width:" +
                0.96 * fe +
                "px;max-height:" +
                0.96 * $ +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * fe +
                "px;max-height:" +
                0.84 * $ +
                "px}}";
            le.textContent = ne;
          }
          ae();
        })(),
        g
      );
    }
    da.define(
      "lightbox",
      (Gv.exports = function (e) {
        var t = {},
          n = da.env(),
          r = SF(window, document, e, n ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = c;
        function c() {
          (a = n && da.env("design")),
            r.destroy(),
            (u = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              Rn(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var p = this;
            e.each(p, function (g, m) {
              var I = e.data(m, s);
              I ||
                (I = e.data(m, s, {
                  el: e(m),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                I.el.off(s),
                E(I),
                a
                  ? I.el.on("setting" + s, E.bind(null, I))
                  : I.el.on("click" + s, f(I)).on("click" + s, function (_) {
                      _.preventDefault();
                    });
            });
          },
        });
        function E(p) {
          var g = p.el.children(".w-json").html(),
            m,
            I;
          if (!g) {
            p.items = [];
            return;
          }
          try {
            g = JSON.parse(g);
          } catch (_) {
            console.error("Malformed lightbox JSON configuration.", _);
          }
          h(g),
            g.items.forEach(function (_) {
              _.$el = p.el;
            }),
            (m = g.group),
            m
              ? ((I = u[m]),
                I || (I = u[m] = []),
                (p.items = I),
                g.items.length &&
                  ((p.index = I.length), I.push.apply(I, g.items)))
              : ((p.items = g.items), (p.index = 0));
        }
        function f(p) {
          return function () {
            p.items.length && r(p.items, p.index || 0);
          };
        }
        function h(p) {
          p.images &&
            (p.images.forEach(function (g) {
              g.type = "image";
            }),
            (p.items = p.images)),
            p.embed && ((p.embed.type = "video"), (p.items = [p.embed])),
            p.groupId && (p.group = p.groupId);
        }
        return t;
      })
    );
  });
  var Bv = d((PX, Vv) => {
    "use strict";
    var gt = Fe(),
      OF = ni(),
      we = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    gt.define(
      "navbar",
      (Vv.exports = function (e, t) {
        var n = {},
          r = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          c,
          E,
          f = gt.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          p = ".w-nav",
          g = "w--open",
          m = "w--nav-dropdown-open",
          I = "w--nav-dropdown-toggle-open",
          _ = "w--nav-dropdown-list-open",
          O = "w--nav-link-open",
          x = OF.triggers,
          R = e();
        (n.ready = n.design = n.preview = P),
          (n.destroy = function () {
            (R = e()), C(), u && u.length && u.each(j);
          });
        function P() {
          (c = f && gt.env("design")),
            (E = gt.env("editor")),
            (s = e(document.body)),
            (u = o.find(p)),
            u.length && (u.each(z), C(), B());
        }
        function C() {
          gt.resize.off(k);
        }
        function B() {
          gt.resize.on(k);
        }
        function k() {
          u.each(w);
        }
        function z(v, X) {
          var K = e(X),
            W = e.data(X, p);
          W ||
            (W = e.data(X, p, {
              open: !1,
              el: K,
              config: {},
              selectedIdx: -1,
            })),
            (W.menu = K.find(".w-nav-menu")),
            (W.links = W.menu.find(".w-nav-link")),
            (W.dropdowns = W.menu.find(".w-dropdown")),
            (W.dropdownToggle = W.menu.find(".w-dropdown-toggle")),
            (W.dropdownList = W.menu.find(".w-dropdown-list")),
            (W.button = K.find(".w-nav-button")),
            (W.container = K.find(".w-container")),
            (W.overlayContainerId = "w-nav-overlay-" + v),
            (W.outside = ue(W));
          var de = K.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            W.button.attr("style", "-webkit-user-select: text;"),
            W.button.attr("aria-label") == null &&
              W.button.attr("aria-label", "menu"),
            W.button.attr("role", "button"),
            W.button.attr("tabindex", "0"),
            W.button.attr("aria-controls", W.overlayContainerId),
            W.button.attr("aria-haspopup", "menu"),
            W.button.attr("aria-expanded", "false"),
            W.el.off(p),
            W.button.off(p),
            W.menu.off(p),
            A(W),
            c
              ? (te(W), W.el.on("setting" + p, N(W)))
              : (F(W),
                W.button.on("click" + p, U(W)),
                W.menu.on("click" + p, "a", ee(W)),
                W.button.on("keydown" + p, H(W)),
                W.el.on("keydown" + p, G(W))),
            w(v, X);
        }
        function j(v, X) {
          var K = e.data(X, p);
          K && (te(K), e.removeData(X, p));
        }
        function te(v) {
          v.overlay && (ne(v, !0), v.overlay.remove(), (v.overlay = null));
        }
        function F(v) {
          v.overlay ||
            ((v.overlay = e(h).appendTo(v.el)),
            v.overlay.attr("id", v.overlayContainerId),
            (v.parent = v.menu.parent()),
            ne(v, !0));
        }
        function A(v) {
          var X = {},
            K = v.config || {},
            W = (X.animation = v.el.attr("data-animation") || "default");
          (X.animOver = /^over/.test(W)),
            (X.animDirect = /left$/.test(W) ? -1 : 1),
            K.animation !== W && v.open && t.defer(q, v),
            (X.easing = v.el.attr("data-easing") || "ease"),
            (X.easing2 = v.el.attr("data-easing2") || "ease");
          var de = v.el.attr("data-duration");
          (X.duration = de != null ? Number(de) : 400),
            (X.docHeight = v.el.attr("data-doc-height")),
            (v.config = X);
        }
        function N(v) {
          return function (X, K) {
            K = K || {};
            var W = i.width();
            A(v),
              K.open === !0 && $(v, !0),
              K.open === !1 && ne(v, !0),
              v.open &&
                t.defer(function () {
                  W !== i.width() && q(v);
                });
          };
        }
        function H(v) {
          return function (X) {
            switch (X.keyCode) {
              case we.SPACE:
              case we.ENTER:
                return U(v)(), X.preventDefault(), X.stopPropagation();
              case we.ESCAPE:
                return ne(v), X.preventDefault(), X.stopPropagation();
              case we.ARROW_RIGHT:
              case we.ARROW_DOWN:
              case we.HOME:
              case we.END:
                return v.open
                  ? (X.keyCode === we.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    M(v),
                    X.preventDefault(),
                    X.stopPropagation())
                  : (X.preventDefault(), X.stopPropagation());
            }
          };
        }
        function G(v) {
          return function (X) {
            if (v.open)
              switch (
                ((v.selectedIdx = v.links.index(document.activeElement)),
                X.keyCode)
              ) {
                case we.HOME:
                case we.END:
                  return (
                    X.keyCode === we.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    M(v),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case we.ESCAPE:
                  return (
                    ne(v),
                    v.button.focus(),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case we.ARROW_LEFT:
                case we.ARROW_UP:
                  return (
                    (v.selectedIdx = Math.max(-1, v.selectedIdx - 1)),
                    M(v),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case we.ARROW_RIGHT:
                case we.ARROW_DOWN:
                  return (
                    (v.selectedIdx = Math.min(
                      v.links.length - 1,
                      v.selectedIdx + 1
                    )),
                    M(v),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
              }
          };
        }
        function M(v) {
          if (v.links[v.selectedIdx]) {
            var X = v.links[v.selectedIdx];
            X.focus(), ee(X);
          }
        }
        function q(v) {
          v.open && (ne(v, !0), $(v, !0));
        }
        function U(v) {
          return a(function () {
            v.open ? ne(v) : $(v);
          });
        }
        function ee(v) {
          return function (X) {
            var K = e(this),
              W = K.attr("href");
            if (!gt.validClick(X.currentTarget)) {
              X.preventDefault();
              return;
            }
            W && W.indexOf("#") === 0 && v.open && ne(v);
          };
        }
        function ue(v) {
          return (
            v.outside && o.off("click" + p, v.outside),
            function (X) {
              var K = e(X.target);
              (E && K.closest(".w-editor-bem-EditorOverlay").length) || T(v, K);
            }
          );
        }
        var T = a(function (v, X) {
          if (v.open) {
            var K = X.closest(".w-nav-menu");
            v.menu.is(K) || ne(v);
          }
        });
        function w(v, X) {
          var K = e.data(X, p),
            W = (K.collapsed = K.button.css("display") !== "none");
          if ((K.open && !W && !c && ne(K, !0), K.container.length)) {
            var de = J(K);
            K.links.each(de), K.dropdowns.each(de);
          }
          K.open && fe(K);
        }
        var Y = "max-width";
        function J(v) {
          var X = v.container.css(Y);
          return (
            X === "none" && (X = ""),
            function (K, W) {
              (W = e(W)), W.css(Y, ""), W.css(Y) === "none" && W.css(Y, X);
            }
          );
        }
        function le(v, X) {
          X.setAttribute("data-nav-menu-open", "");
        }
        function ae(v, X) {
          X.removeAttribute("data-nav-menu-open");
        }
        function $(v, X) {
          if (v.open) return;
          (v.open = !0),
            v.menu.each(le),
            v.links.addClass(O),
            v.dropdowns.addClass(m),
            v.dropdownToggle.addClass(I),
            v.dropdownList.addClass(_),
            v.button.addClass(g);
          var K = v.config,
            W = K.animation;
          (W === "none" || !r.support.transform || K.duration <= 0) && (X = !0);
          var de = fe(v),
            rt = v.menu.outerHeight(!0),
            Ge = v.menu.outerWidth(!0),
            l = v.el.height(),
            y = v.el[0];
          if (
            (w(0, y),
            x.intro(0, y),
            gt.redraw.up(),
            c || o.on("click" + p, v.outside),
            X)
          ) {
            D();
            return;
          }
          var b = "transform " + K.duration + "ms " + K.easing;
          if (
            (v.overlay &&
              ((R = v.menu.prev()), v.overlay.show().append(v.menu)),
            K.animOver)
          ) {
            r(v.menu)
              .add(b)
              .set({ x: K.animDirect * Ge, height: de })
              .start({ x: 0 })
              .then(D),
              v.overlay && v.overlay.width(Ge);
            return;
          }
          var S = l + rt;
          r(v.menu).add(b).set({ y: -S }).start({ y: 0 }).then(D);
          function D() {
            v.button.attr("aria-expanded", "true");
          }
        }
        function fe(v) {
          var X = v.config,
            K = X.docHeight ? o.height() : s.height();
          return (
            X.animOver
              ? v.menu.height(K)
              : v.el.css("position") !== "fixed" && (K -= v.el.outerHeight(!0)),
            v.overlay && v.overlay.height(K),
            K
          );
        }
        function ne(v, X) {
          if (!v.open) return;
          (v.open = !1), v.button.removeClass(g);
          var K = v.config;
          if (
            ((K.animation === "none" ||
              !r.support.transform ||
              K.duration <= 0) &&
              (X = !0),
            x.outro(0, v.el[0]),
            o.off("click" + p, v.outside),
            X)
          ) {
            r(v.menu).stop(), y();
            return;
          }
          var W = "transform " + K.duration + "ms " + K.easing2,
            de = v.menu.outerHeight(!0),
            rt = v.menu.outerWidth(!0),
            Ge = v.el.height();
          if (K.animOver) {
            r(v.menu)
              .add(W)
              .start({ x: rt * K.animDirect })
              .then(y);
            return;
          }
          var l = Ge + de;
          r(v.menu).add(W).start({ y: -l }).then(y);
          function y() {
            v.menu.height(""),
              r(v.menu).set({ x: 0, y: 0 }),
              v.menu.each(ae),
              v.links.removeClass(O),
              v.dropdowns.removeClass(m),
              v.dropdownToggle.removeClass(I),
              v.dropdownList.removeClass(_),
              v.overlay &&
                v.overlay.children().length &&
                (R.length ? v.menu.insertAfter(R) : v.menu.prependTo(v.parent),
                v.overlay.attr("style", "").hide()),
              v.el.triggerHandler("w-close"),
              v.button.attr("aria-expanded", "false");
          }
        }
        return n;
      })
    );
  });
  Oa();
  Ca();
  Pa();
  Ma();
  qn();
  Xa();
  ni();
  Cv();
  Pv();
  Dv();
  Fv();
  Xv();
  Bv();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require("ix").init([
  {
    slug: "new-interaction",
    name: "New Interaction",
    value: { style: {}, triggers: [{ type: "hover", stepsA: [], stepsB: [] }] },
  },
  {
    slug: "new-interaction-2",
    name: "New Interaction 2",
    value: { style: {}, triggers: [] },
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".text-41",
        originalId:
          "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".text-41",
          originalId:
            "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1721427568893,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|11937c66-30d7-f00b-2a6b-aa4a82af8862",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|11937c66-30d7-f00b-2a6b-aa4a82af8862",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 6,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: true,
          addEndOffset: true,
          endOffsetValue: 84,
        },
      ],
      createdOn: 1721468027726,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|fc6df4b3-5ca4-3253-2887-8f594eac9ba8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|fc6df4b3-5ca4-3253-2887-8f594eac9ba8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 80,
          startsExiting: true,
          addEndOffset: true,
          endOffsetValue: 20,
        },
      ],
      createdOn: 1721468521254,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|11937c66-30d7-f00b-2a6b-aa4a82af8863",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|11937c66-30d7-f00b-2a6b-aa4a82af8863",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 40,
        },
      ],
      createdOn: 1721468782310,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|91129817-c1eb-80e0-a6ce-4bf22a14f0fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|91129817-c1eb-80e0-a6ce-4bf22a14f0fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 30,
        },
      ],
      createdOn: 1721469286206,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721469504055,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|91129817-c1eb-80e0-a6ce-4bf22a14f0fd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|91129817-c1eb-80e0-a6ce-4bf22a14f0fd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 100,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 72,
        },
      ],
      createdOn: 1721469672934,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|91129817-c1eb-80e0-a6ce-4bf22a14f0fd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|91129817-c1eb-80e0-a6ce-4bf22a14f0fd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 21,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 28,
        },
      ],
      createdOn: 1721470220280,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|f74bb8de-617c-b346-1e74-d0581e90cba7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|f74bb8de-617c-b346-1e74-d0581e90cba7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721470521375,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|f74bb8de-617c-b346-1e74-d0581e90cba9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|f74bb8de-617c-b346-1e74-d0581e90cba9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 10,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 100,
        },
      ],
      createdOn: 1721470556554,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e410",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e410",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721470744585,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e413",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e413",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 100,
        },
      ],
      createdOn: 1721470883349,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e414",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e414",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 0,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 100,
        },
      ],
      createdOn: 1721470960206,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e40e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|7a32c5e9-48cd-8414-c4cc-79e49da6e40e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721471102662,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|c496233d-6ef5-4546-56b9-78d3b19a70c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|c496233d-6ef5-4546-56b9-78d3b19a70c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721471222807,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|c496233d-6ef5-4546-56b9-78d3b19a70c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|c496233d-6ef5-4546-56b9-78d3b19a70c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 8,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 100,
        },
      ],
      createdOn: 1721471278561,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|793b8905-b5f2-9a2c-dd13-61dc2f80d70e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|793b8905-b5f2-9a2c-dd13-61dc2f80d70e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721471408781,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|43610dcc-6834-e79e-fc4b-68a206b7ed35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|43610dcc-6834-e79e-fc4b-68a206b7ed35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721471425372,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab259",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab259",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721472174387,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab262",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab262",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721472182806,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|0753203d-3157-780b-d529-99cb1ddf3901",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|0753203d-3157-780b-d529-99cb1ddf3901",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721472195142,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab277",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab277",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721472206642,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab27f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "664e34af57e23f5715a750a4|0e2ed3fd-1c71-f9b7-e407-eddb524ab27f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1721472216488,
    },
  },
  actionLists: {
    "a-4": {
      id: "a-4",
      title: "header animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
                },
                yValue: 57,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1721427653183,
    },
    "a-5": {
      id: "a-5",
      title: "fade animation 1",
      continuousParameterGroups: [
        {
          id: "a-5-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-5-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "664e34af57e23f5715a750a4|fc6df4b3-5ca4-3253-2887-8f594eac9ba8",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 12,
              actionItems: [
                {
                  id: "a-5-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "664e34af57e23f5715a750a4|fc6df4b3-5ca4-3253-2887-8f594eac9ba8",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 70,
              actionItems: [
                {
                  id: "a-5-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "664e34af57e23f5715a750a4|fc6df4b3-5ca4-3253-2887-8f594eac9ba8",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-5-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "664e34af57e23f5715a750a4|fc6df4b3-5ca4-3253-2887-8f594eac9ba8",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721468565609,
    },
    "a-6": {
      id: "a-6",
      title: "scroll move",
      continuousParameterGroups: [
        {
          id: "a-6-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-6-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-6-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-6-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "664e34af57e23f5715a750a4|0b5c57a5-cecc-34e1-059d-5880ee444bda",
                    },
                    yValue: -80,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1721469527350,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
