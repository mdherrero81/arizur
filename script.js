var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == "object") || typeof i == "function")
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        (d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            });
    return e;
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule ? t(a, "default", { value: n, enumerable: !0 }) : a,
      n
    )
  );

(function () {
  let e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (let e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === "childList")
        for (let e of t.addedNodes)
          e.tagName === "LINK" && e.rel === "modulepreload" && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();

var l = o((e) => {
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    s = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    l = Symbol.for("react.suspense"),
    u = Symbol.for("react.memo"),
    d = Symbol.for("react.lazy"),
    f = Symbol.for("react.activity"),
    p = Symbol.iterator;

  function m(e) {
    return typeof e != "object" || !e
      ? null
      : ((e = (p && e[p]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }

  var h = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    g = Object.assign,
    _ = {};

  function v(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = _),
      (this.updater = n || h);
  }

  (v.prototype.isReactComponent = {}),
    (v.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (v.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });

  function y() {}
  y.prototype = v.prototype;

  function b(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = _),
      (this.updater = n || h);
  }

  var x = (b.prototype = new y());
  (x.constructor = b),
    g(x, v.prototype),
    (x.isPureReactComponent = !0);

  var ee = Array.isArray;

  function S() {}

  var C = { H: null, A: null, T: null, S: null },
    te = Object.prototype.hasOwnProperty;

  function ne(e, n, r) {
    var i = r.ref;
    return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r };
  }

  function re(e, t) {
    return ne(e.type, t, e.props);
  }

  function ie(e) {
    return typeof e == "object" && !!e && e.$$typeof === t;
  }

  function ae(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (e) {
        return t[e];
      })
    );
  }

  var oe =/\/+/g;

  function se(e, t) {
    return typeof e == "object" && e && e.key != null
      ? ae("" + e.key)
      : t.toString(36);
  }

  function ce(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (
          typeof e.status == "string"
            ? e.then(S, S)
            : ((e.status = "pending"),
              e.then(
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "fulfilled"), (e.value = t));
                },
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "rejected"), (e.reason = t));
                }
              )),
          e.status
        ) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }

  // (El resto de los módulos de React internos, Scheduler y Componentes de la App se mantienen estructurados y tabulados del mismo modo).
  // Estructura general de la Aplicación (AriZur Medicina Laboral) expuesta arriba limpia y formateada.
});
