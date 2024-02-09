(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function Hg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var $g = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ho = Symbol.for("react.element"),
  I0 = Symbol.for("react.portal"),
  L0 = Symbol.for("react.fragment"),
  k0 = Symbol.for("react.strict_mode"),
  P0 = Symbol.for("react.profiler"),
  M0 = Symbol.for("react.provider"),
  A0 = Symbol.for("react.context"),
  O0 = Symbol.for("react.forward_ref"),
  F0 = Symbol.for("react.suspense"),
  D0 = Symbol.for("react.memo"),
  N0 = Symbol.for("react.lazy"),
  Xd = Symbol.iterator;
function z0(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Xd && t[Xd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var qg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qg = Object.assign,
  Jg = {};
function Kr(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Jg),
    (this.updater = n || qg);
}
Kr.prototype.isReactComponent = {};
Kr.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Kr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function ep() {}
ep.prototype = Kr.prototype;
function th(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Jg),
    (this.updater = n || qg);
}
var nh = (th.prototype = new ep());
nh.constructor = th;
Qg(nh, Kr.prototype);
nh.isPureReactComponent = !0;
var Ud = Array.isArray,
  tp = Object.prototype.hasOwnProperty,
  ih = { current: null },
  np = { key: !0, ref: !0, __self: !0, __source: !0 };
function ip(t, e, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      tp.call(e, i) && !np.hasOwnProperty(i) && (r[i] = e[i]);
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  if (t && t.defaultProps)
    for (i in ((l = t.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
  return {
    $$typeof: ho,
    type: t,
    key: s,
    ref: o,
    props: r,
    _owner: ih.current,
  };
}
function G0(t, e) {
  return {
    $$typeof: ho,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function rh(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ho;
}
function W0(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Yd = /\/+/g;
function Qa(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? W0("" + t.key)
    : e.toString(36);
}
function cl(t, e, n, i, r) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ho:
          case I0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (r = r(o)),
      (t = i === "" ? "." + Qa(o, 0) : i),
      Ud(r)
        ? ((n = ""),
          t != null && (n = t.replace(Yd, "$&/") + "/"),
          cl(r, e, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (rh(r) &&
            (r = G0(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(Yd, "$&/") + "/") +
                t,
            )),
          e.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), Ud(t)))
    for (var l = 0; l < t.length; l++) {
      s = t[l];
      var a = i + Qa(s, l);
      o += cl(s, e, n, a, r);
    }
  else if (((a = z0(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(s = t.next()).done; )
      (s = s.value), (a = i + Qa(s, l++)), (o += cl(s, e, n, a, r));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Do(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    cl(t, i, "", "", function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function j0(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ze = { current: null },
  hl = { transition: null },
  X0 = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: hl,
    ReactCurrentOwner: ih,
  };
H.Children = {
  map: Do,
  forEach: function (t, e, n) {
    Do(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Do(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Do(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!rh(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
H.Component = Kr;
H.Fragment = L0;
H.Profiler = P0;
H.PureComponent = th;
H.StrictMode = k0;
H.Suspense = F0;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X0;
H.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var i = Qg({}, t.props),
    r = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = ih.current)),
      e.key !== void 0 && (r = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      tp.call(e, a) &&
        !np.hasOwnProperty(a) &&
        (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  return { $$typeof: ho, type: t.type, key: r, ref: s, props: i, _owner: o };
};
H.createContext = function (t) {
  return (
    (t = {
      $$typeof: A0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: M0, _context: t }),
    (t.Consumer = t)
  );
};
H.createElement = ip;
H.createFactory = function (t) {
  var e = ip.bind(null, t);
  return (e.type = t), e;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (t) {
  return { $$typeof: O0, render: t };
};
H.isValidElement = rh;
H.lazy = function (t) {
  return { $$typeof: N0, _payload: { _status: -1, _result: t }, _init: j0 };
};
H.memo = function (t, e) {
  return { $$typeof: D0, type: t, compare: e === void 0 ? null : e };
};
H.startTransition = function (t) {
  var e = hl.transition;
  hl.transition = {};
  try {
    t();
  } finally {
    hl.transition = e;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (t, e) {
  return Ze.current.useCallback(t, e);
};
H.useContext = function (t) {
  return Ze.current.useContext(t);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (t) {
  return Ze.current.useDeferredValue(t);
};
H.useEffect = function (t, e) {
  return Ze.current.useEffect(t, e);
};
H.useId = function () {
  return Ze.current.useId();
};
H.useImperativeHandle = function (t, e, n) {
  return Ze.current.useImperativeHandle(t, e, n);
};
H.useInsertionEffect = function (t, e) {
  return Ze.current.useInsertionEffect(t, e);
};
H.useLayoutEffect = function (t, e) {
  return Ze.current.useLayoutEffect(t, e);
};
H.useMemo = function (t, e) {
  return Ze.current.useMemo(t, e);
};
H.useReducer = function (t, e, n) {
  return Ze.current.useReducer(t, e, n);
};
H.useRef = function (t) {
  return Ze.current.useRef(t);
};
H.useState = function (t) {
  return Ze.current.useState(t);
};
H.useSyncExternalStore = function (t, e, n) {
  return Ze.current.useSyncExternalStore(t, e, n);
};
H.useTransition = function () {
  return Ze.current.useTransition();
};
H.version = "18.2.0";
$g.exports = H;
var Vn = $g.exports;
const Ct = Hg(Vn);
var Xu = {},
  rp = { exports: {} },
  yt = {},
  sp = { exports: {} },
  op = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(R, P) {
    var A = R.length;
    R.push(P);
    e: for (; 0 < A; ) {
      var b = (A - 1) >>> 1,
        T = R[b];
      if (0 < r(T, P)) (R[b] = P), (R[A] = T), (A = b);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function i(R) {
    if (R.length === 0) return null;
    var P = R[0],
      A = R.pop();
    if (A !== P) {
      R[0] = A;
      e: for (var b = 0, T = R.length, me = T >>> 1; b < me; ) {
        var B = 2 * (b + 1) - 1,
          te = R[B],
          De = B + 1,
          xe = R[De];
        if (0 > r(te, A))
          De < T && 0 > r(xe, te)
            ? ((R[b] = xe), (R[De] = A), (b = De))
            : ((R[b] = te), (R[B] = A), (b = B));
        else if (De < T && 0 > r(xe, A)) (R[b] = xe), (R[De] = A), (b = De);
        else break e;
      }
    }
    return P;
  }
  function r(R, P) {
    var A = R.sortIndex - P.sortIndex;
    return A !== 0 ? A : R.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    t.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    f = !1,
    m = !1,
    y = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(R) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) i(u);
      else if (P.startTime <= R)
        i(u), (P.sortIndex = P.expirationTime), e(a, P);
      else break;
      P = n(u);
    }
  }
  function E(R) {
    if (((y = !1), _(R), !m))
      if (n(a) !== null) (m = !0), D(w);
      else {
        var P = n(u);
        P !== null && F(E, P.startTime - R);
      }
  }
  function w(R, P) {
    (m = !1), y && ((y = !1), p(S), (S = -1)), (f = !0);
    var A = d;
    try {
      for (
        _(P), h = n(a);
        h !== null && (!(h.expirationTime > P) || (R && !j()));

      ) {
        var b = h.callback;
        if (typeof b == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var T = b(h.expirationTime <= P);
          (P = t.unstable_now()),
            typeof T == "function" ? (h.callback = T) : h === n(a) && i(a),
            _(P);
        } else i(a);
        h = n(a);
      }
      if (h !== null) var me = !0;
      else {
        var B = n(u);
        B !== null && F(E, B.startTime - P), (me = !1);
      }
      return me;
    } finally {
      (h = null), (d = A), (f = !1);
    }
  }
  var x = !1,
    C = null,
    S = -1,
    M = 5,
    k = -1;
  function j() {
    return !(t.unstable_now() - k < M);
  }
  function Z() {
    if (C !== null) {
      var R = t.unstable_now();
      k = R;
      var P = !0;
      try {
        P = C(!0, R);
      } finally {
        P ? X() : ((x = !1), (C = null));
      }
    } else x = !1;
  }
  var X;
  if (typeof g == "function")
    X = function () {
      g(Z);
    };
  else if (typeof MessageChannel < "u") {
    var he = new MessageChannel(),
      U = he.port2;
    (he.port1.onmessage = Z),
      (X = function () {
        U.postMessage(null);
      });
  } else
    X = function () {
      v(Z, 0);
    };
  function D(R) {
    (C = R), x || ((x = !0), X());
  }
  function F(R, P) {
    S = v(function () {
      R(t.unstable_now());
    }, P);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      m || f || ((m = !0), D(w));
    }),
    (t.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = d;
      }
      var A = d;
      d = P;
      try {
        return R();
      } finally {
        d = A;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (R, P) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var A = d;
      d = R;
      try {
        return P();
      } finally {
        d = A;
      }
    }),
    (t.unstable_scheduleCallback = function (R, P, A) {
      var b = t.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? b + A : b))
          : (A = b),
        R)
      ) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return (
        (T = A + T),
        (R = {
          id: c++,
          callback: P,
          priorityLevel: R,
          startTime: A,
          expirationTime: T,
          sortIndex: -1,
        }),
        A > b
          ? ((R.sortIndex = A),
            e(u, R),
            n(a) === null &&
              R === n(u) &&
              (y ? (p(S), (S = -1)) : (y = !0), F(E, A - b)))
          : ((R.sortIndex = T), e(a, R), m || f || ((m = !0), D(w))),
        R
      );
    }),
    (t.unstable_shouldYield = j),
    (t.unstable_wrapCallback = function (R) {
      var P = d;
      return function () {
        var A = d;
        d = P;
        try {
          return R.apply(this, arguments);
        } finally {
          d = A;
        }
      };
    });
})(op);
sp.exports = op;
var U0 = sp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lp = Vn,
  _t = U0;
function L(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ap = new Set(),
  Ds = {};
function Ui(t, e) {
  Fr(t, e), Fr(t + "Capture", e);
}
function Fr(t, e) {
  for (Ds[t] = e, t = 0; t < e.length; t++) ap.add(e[t]);
}
var En = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Uu = Object.prototype.hasOwnProperty,
  Y0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bd = {},
  Vd = {};
function B0(t) {
  return Uu.call(Vd, t)
    ? !0
    : Uu.call(Bd, t)
      ? !1
      : Y0.test(t)
        ? (Vd[t] = !0)
        : ((Bd[t] = !0), !1);
}
function V0(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function b0(t, e, n, i) {
  if (e === null || typeof e > "u" || V0(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function He(t, e, n, i, r, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Fe[t] = new He(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Fe[e] = new He(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Fe[t] = new He(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Fe[t] = new He(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Fe[t] = new He(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Fe[t] = new He(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Fe[t] = new He(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Fe[t] = new He(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Fe[t] = new He(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var sh = /[\-:]([a-z])/g;
function oh(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(sh, oh);
    Fe[e] = new He(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(sh, oh);
    Fe[e] = new He(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(sh, oh);
  Fe[e] = new He(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Fe[t] = new He(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new He(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Fe[t] = new He(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function lh(t, e, n, i) {
  var r = Fe.hasOwnProperty(e) ? Fe[e] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (b0(e, n, r, i) && (n = null),
    i || r === null
      ? B0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : r.mustUseProperty
        ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
        : ((e = r.attributeName),
          (i = r.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((r = r.type),
              (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
              i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var In = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  No = Symbol.for("react.element"),
  cr = Symbol.for("react.portal"),
  hr = Symbol.for("react.fragment"),
  ah = Symbol.for("react.strict_mode"),
  Yu = Symbol.for("react.profiler"),
  up = Symbol.for("react.provider"),
  cp = Symbol.for("react.context"),
  uh = Symbol.for("react.forward_ref"),
  Bu = Symbol.for("react.suspense"),
  Vu = Symbol.for("react.suspense_list"),
  ch = Symbol.for("react.memo"),
  Wn = Symbol.for("react.lazy"),
  hp = Symbol.for("react.offscreen"),
  bd = Symbol.iterator;
function ss(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (bd && t[bd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var pe = Object.assign,
  Ja;
function _s(t) {
  if (Ja === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Ja = (e && e[1]) || "";
    }
  return (
    `
` +
    Ja +
    t
  );
}
var eu = !1;
function tu(t, e) {
  if (!t || eu) return "";
  eu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          i = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      t();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && r[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (r[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || r[o] !== s[l])) {
                var a =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (eu = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? _s(t) : "";
}
function K0(t) {
  switch (t.tag) {
    case 5:
      return _s(t.type);
    case 16:
      return _s("Lazy");
    case 13:
      return _s("Suspense");
    case 19:
      return _s("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = tu(t.type, !1)), t;
    case 11:
      return (t = tu(t.type.render, !1)), t;
    case 1:
      return (t = tu(t.type, !0)), t;
    default:
      return "";
  }
}
function bu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case hr:
      return "Fragment";
    case cr:
      return "Portal";
    case Yu:
      return "Profiler";
    case ah:
      return "StrictMode";
    case Bu:
      return "Suspense";
    case Vu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case cp:
        return (t.displayName || "Context") + ".Consumer";
      case up:
        return (t._context.displayName || "Context") + ".Provider";
      case uh:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case ch:
        return (
          (e = t.displayName || null), e !== null ? e : bu(t.type) || "Memo"
        );
      case Wn:
        (e = t._payload), (t = t._init);
        try {
          return bu(t(e));
        } catch {}
    }
  return null;
}
function Z0(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bu(e);
    case 8:
      return e === ah ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function oi(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function dp(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function H0(t) {
  var e = dp(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function zo(t) {
  t._valueTracker || (t._valueTracker = H0(t));
}
function fp(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return (
    t && (i = dp(t) ? (t.checked ? "true" : "false") : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Sl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ku(t, e) {
  var n = e.checked;
  return pe({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Kd(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = oi(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function gp(t, e) {
  (e = e.checked), e != null && lh(t, "checked", e, !1);
}
function Zu(t, e) {
  gp(t, e);
  var n = oi(e.value),
    i = e.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Hu(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Hu(t, e.type, oi(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Zd(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Hu(t, e, n) {
  (e !== "number" || Sl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var ys = Array.isArray;
function Rr(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
    for (n = 0; n < t.length; n++)
      (r = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== r && (t[n].selected = r),
        r && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + oi(n), e = null, r = 0; r < t.length; r++) {
      if (t[r].value === n) {
        (t[r].selected = !0), i && (t[r].defaultSelected = !0);
        return;
      }
      e !== null || t[r].disabled || (e = t[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function $u(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(L(91));
  return pe({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Hd(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(L(92));
      if (ys(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: oi(n) };
}
function pp(t, e) {
  var n = oi(e.value),
    i = oi(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function $d(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function mp(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qu(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? mp(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var Go,
  _p = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, r);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Go = Go || document.createElement("div"),
          Go.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Go.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Ns(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ss = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ss).forEach(function (t) {
  $0.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ss[e] = Ss[t]);
  });
});
function yp(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Ss.hasOwnProperty(t) && Ss[t])
      ? ("" + e).trim()
      : e + "px";
}
function vp(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = yp(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var q0 = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Qu(t, e) {
  if (e) {
    if (q0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(L(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(L(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(L(62));
  }
}
function Ju(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ec = null;
function hh(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var tc = null,
  Tr = null,
  Ir = null;
function qd(t) {
  if ((t = po(t))) {
    if (typeof tc != "function") throw Error(L(280));
    var e = t.stateNode;
    e && ((e = ga(e)), tc(t.stateNode, t.type, e));
  }
}
function Ep(t) {
  Tr ? (Ir ? Ir.push(t) : (Ir = [t])) : (Tr = t);
}
function wp() {
  if (Tr) {
    var t = Tr,
      e = Ir;
    if (((Ir = Tr = null), qd(t), e)) for (t = 0; t < e.length; t++) qd(e[t]);
  }
}
function xp(t, e) {
  return t(e);
}
function Cp() {}
var nu = !1;
function Sp(t, e, n) {
  if (nu) return t(e, n);
  nu = !0;
  try {
    return xp(t, e, n);
  } finally {
    (nu = !1), (Tr !== null || Ir !== null) && (Cp(), wp());
  }
}
function zs(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = ga(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((t = t.type),
        (i = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(L(231, e, typeof n));
  return n;
}
var nc = !1;
if (En)
  try {
    var os = {};
    Object.defineProperty(os, "passive", {
      get: function () {
        nc = !0;
      },
    }),
      window.addEventListener("test", os, os),
      window.removeEventListener("test", os, os);
  } catch {
    nc = !1;
  }
function Q0(t, e, n, i, r, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Rs = !1,
  Rl = null,
  Tl = !1,
  ic = null,
  J0 = {
    onError: function (t) {
      (Rs = !0), (Rl = t);
    },
  };
function ey(t, e, n, i, r, s, o, l, a) {
  (Rs = !1), (Rl = null), Q0.apply(J0, arguments);
}
function ty(t, e, n, i, r, s, o, l, a) {
  if ((ey.apply(this, arguments), Rs)) {
    if (Rs) {
      var u = Rl;
      (Rs = !1), (Rl = null);
    } else throw Error(L(198));
    Tl || ((Tl = !0), (ic = u));
  }
}
function Yi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Rp(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Qd(t) {
  if (Yi(t) !== t) throw Error(L(188));
}
function ny(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Yi(t)), e === null)) throw Error(L(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return Qd(r), t;
        if (s === i) return Qd(r), e;
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, l = r.child; l; ) {
        if (l === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (l === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (l === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(L(189));
      }
    }
    if (n.alternate !== i) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? t : e;
}
function Tp(t) {
  return (t = ny(t)), t !== null ? Ip(t) : null;
}
function Ip(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Ip(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Lp = _t.unstable_scheduleCallback,
  Jd = _t.unstable_cancelCallback,
  iy = _t.unstable_shouldYield,
  ry = _t.unstable_requestPaint,
  we = _t.unstable_now,
  sy = _t.unstable_getCurrentPriorityLevel,
  dh = _t.unstable_ImmediatePriority,
  kp = _t.unstable_UserBlockingPriority,
  Il = _t.unstable_NormalPriority,
  oy = _t.unstable_LowPriority,
  Pp = _t.unstable_IdlePriority,
  ca = null,
  qt = null;
function ly(t) {
  if (qt && typeof qt.onCommitFiberRoot == "function")
    try {
      qt.onCommitFiberRoot(ca, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : cy,
  ay = Math.log,
  uy = Math.LN2;
function cy(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((ay(t) / uy) | 0)) | 0;
}
var Wo = 64,
  jo = 4194304;
function vs(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Ll(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~r;
    l !== 0 ? (i = vs(l)) : ((s &= o), s !== 0 && (i = vs(s)));
  } else (o = n & ~r), o !== 0 ? (i = vs(o)) : s !== 0 && (i = vs(s));
  if (i === 0) return 0;
  if (
    e !== 0 &&
    e !== i &&
    !(e & r) &&
    ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; )
      (n = 31 - jt(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function hy(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dy(t, e) {
  for (
    var n = t.suspendedLanes,
      i = t.pingedLanes,
      r = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - jt(s),
      l = 1 << o,
      a = r[o];
    a === -1
      ? (!(l & n) || l & i) && (r[o] = hy(l, e))
      : a <= e && (t.expiredLanes |= l),
      (s &= ~l);
  }
}
function rc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Mp() {
  var t = Wo;
  return (Wo <<= 1), !(Wo & 4194240) && (Wo = 64), t;
}
function iu(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function fo(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - jt(e)),
    (t[e] = n);
}
function fy(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var r = 31 - jt(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function fh(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - jt(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var re = 0;
function Ap(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Op,
  gh,
  Fp,
  Dp,
  Np,
  sc = !1,
  Xo = [],
  qn = null,
  Qn = null,
  Jn = null,
  Gs = new Map(),
  Ws = new Map(),
  Yn = [],
  gy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ef(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      qn = null;
      break;
    case "dragenter":
    case "dragleave":
      Qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Jn = null;
      break;
    case "pointerover":
    case "pointerout":
      Gs.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ws.delete(e.pointerId);
  }
}
function ls(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      e !== null && ((e = po(e)), e !== null && gh(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      t);
}
function py(t, e, n, i, r) {
  switch (e) {
    case "focusin":
      return (qn = ls(qn, t, e, n, i, r)), !0;
    case "dragenter":
      return (Qn = ls(Qn, t, e, n, i, r)), !0;
    case "mouseover":
      return (Jn = ls(Jn, t, e, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return Gs.set(s, ls(Gs.get(s) || null, t, e, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), Ws.set(s, ls(Ws.get(s) || null, t, e, n, i, r)), !0
      );
  }
  return !1;
}
function zp(t) {
  var e = Ti(t.target);
  if (e !== null) {
    var n = Yi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Rp(n)), e !== null)) {
          (t.blockedOn = e),
            Np(t.priority, function () {
              Fp(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function dl(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = oc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (ec = i), n.target.dispatchEvent(i), (ec = null);
    } else return (e = po(n)), e !== null && gh(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function tf(t, e, n) {
  dl(t) && n.delete(e);
}
function my() {
  (sc = !1),
    qn !== null && dl(qn) && (qn = null),
    Qn !== null && dl(Qn) && (Qn = null),
    Jn !== null && dl(Jn) && (Jn = null),
    Gs.forEach(tf),
    Ws.forEach(tf);
}
function as(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    sc ||
      ((sc = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, my)));
}
function js(t) {
  function e(r) {
    return as(r, t);
  }
  if (0 < Xo.length) {
    as(Xo[0], t);
    for (var n = 1; n < Xo.length; n++) {
      var i = Xo[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    qn !== null && as(qn, t),
      Qn !== null && as(Qn, t),
      Jn !== null && as(Jn, t),
      Gs.forEach(e),
      Ws.forEach(e),
      n = 0;
    n < Yn.length;
    n++
  )
    (i = Yn[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < Yn.length && ((n = Yn[0]), n.blockedOn === null); )
    zp(n), n.blockedOn === null && Yn.shift();
}
var Lr = In.ReactCurrentBatchConfig,
  kl = !0;
function _y(t, e, n, i) {
  var r = re,
    s = Lr.transition;
  Lr.transition = null;
  try {
    (re = 1), ph(t, e, n, i);
  } finally {
    (re = r), (Lr.transition = s);
  }
}
function yy(t, e, n, i) {
  var r = re,
    s = Lr.transition;
  Lr.transition = null;
  try {
    (re = 4), ph(t, e, n, i);
  } finally {
    (re = r), (Lr.transition = s);
  }
}
function ph(t, e, n, i) {
  if (kl) {
    var r = oc(t, e, n, i);
    if (r === null) fu(t, e, i, Pl, n), ef(t, i);
    else if (py(r, t, e, n, i)) i.stopPropagation();
    else if ((ef(t, i), e & 4 && -1 < gy.indexOf(t))) {
      for (; r !== null; ) {
        var s = po(r);
        if (
          (s !== null && Op(s),
          (s = oc(t, e, n, i)),
          s === null && fu(t, e, i, Pl, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else fu(t, e, i, null, n);
  }
}
var Pl = null;
function oc(t, e, n, i) {
  if (((Pl = null), (t = hh(i)), (t = Ti(t)), t !== null))
    if (((e = Yi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Rp(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Pl = t), null;
}
function Gp(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sy()) {
        case dh:
          return 1;
        case kp:
          return 4;
        case Il:
        case oy:
          return 16;
        case Pp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bn = null,
  mh = null,
  fl = null;
function Wp() {
  if (fl) return fl;
  var t,
    e = mh,
    n = e.length,
    i,
    r = "value" in bn ? bn.value : bn.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
  return (fl = r.slice(t, 1 < i ? 1 - i : void 0));
}
function gl(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Uo() {
  return !0;
}
function nf() {
  return !1;
}
function vt(t) {
  function e(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Uo
        : nf),
      (this.isPropagationStopped = nf),
      this
    );
  }
  return (
    pe(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Uo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Uo));
      },
      persist: function () {},
      isPersistent: Uo,
    }),
    e
  );
}
var Zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _h = vt(Zr),
  go = pe({}, Zr, { view: 0, detail: 0 }),
  vy = vt(go),
  ru,
  su,
  us,
  ha = pe({}, go, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yh,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== us &&
            (us && t.type === "mousemove"
              ? ((ru = t.screenX - us.screenX), (su = t.screenY - us.screenY))
              : (su = ru = 0),
            (us = t)),
          ru);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : su;
    },
  }),
  rf = vt(ha),
  Ey = pe({}, ha, { dataTransfer: 0 }),
  wy = vt(Ey),
  xy = pe({}, go, { relatedTarget: 0 }),
  ou = vt(xy),
  Cy = pe({}, Zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sy = vt(Cy),
  Ry = pe({}, Zr, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  Ty = vt(Ry),
  Iy = pe({}, Zr, { data: 0 }),
  sf = vt(Iy),
  Ly = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ky = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Py = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function My(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Py[t]) ? !!e[t] : !1;
}
function yh() {
  return My;
}
var Ay = pe({}, go, {
    key: function (t) {
      if (t.key) {
        var e = Ly[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = gl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? ky[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yh,
    charCode: function (t) {
      return t.type === "keypress" ? gl(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? gl(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  Oy = vt(Ay),
  Fy = pe({}, ha, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  of = vt(Fy),
  Dy = pe({}, go, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yh,
  }),
  Ny = vt(Dy),
  zy = pe({}, Zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gy = vt(zy),
  Wy = pe({}, ha, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jy = vt(Wy),
  Xy = [9, 13, 27, 32],
  vh = En && "CompositionEvent" in window,
  Ts = null;
En && "documentMode" in document && (Ts = document.documentMode);
var Uy = En && "TextEvent" in window && !Ts,
  jp = En && (!vh || (Ts && 8 < Ts && 11 >= Ts)),
  lf = " ",
  af = !1;
function Xp(t, e) {
  switch (t) {
    case "keyup":
      return Xy.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Up(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var dr = !1;
function Yy(t, e) {
  switch (t) {
    case "compositionend":
      return Up(e);
    case "keypress":
      return e.which !== 32 ? null : ((af = !0), lf);
    case "textInput":
      return (t = e.data), t === lf && af ? null : t;
    default:
      return null;
  }
}
function By(t, e) {
  if (dr)
    return t === "compositionend" || (!vh && Xp(t, e))
      ? ((t = Wp()), (fl = mh = bn = null), (dr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return jp && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Vy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function uf(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Vy[t.type] : e === "textarea";
}
function Yp(t, e, n, i) {
  Ep(i),
    (e = Ml(e, "onChange")),
    0 < e.length &&
      ((n = new _h("onChange", "change", null, n, i)),
      t.push({ event: n, listeners: e }));
}
var Is = null,
  Xs = null;
function by(t) {
  em(t, 0);
}
function da(t) {
  var e = pr(t);
  if (fp(e)) return t;
}
function Ky(t, e) {
  if (t === "change") return e;
}
var Bp = !1;
if (En) {
  var lu;
  if (En) {
    var au = "oninput" in document;
    if (!au) {
      var cf = document.createElement("div");
      cf.setAttribute("oninput", "return;"),
        (au = typeof cf.oninput == "function");
    }
    lu = au;
  } else lu = !1;
  Bp = lu && (!document.documentMode || 9 < document.documentMode);
}
function hf() {
  Is && (Is.detachEvent("onpropertychange", Vp), (Xs = Is = null));
}
function Vp(t) {
  if (t.propertyName === "value" && da(Xs)) {
    var e = [];
    Yp(e, Xs, t, hh(t)), Sp(by, e);
  }
}
function Zy(t, e, n) {
  t === "focusin"
    ? (hf(), (Is = e), (Xs = n), Is.attachEvent("onpropertychange", Vp))
    : t === "focusout" && hf();
}
function Hy(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return da(Xs);
}
function $y(t, e) {
  if (t === "click") return da(e);
}
function qy(t, e) {
  if (t === "input" || t === "change") return da(e);
}
function Qy(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Yt = typeof Object.is == "function" ? Object.is : Qy;
function Us(t, e) {
  if (Yt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Uu.call(e, r) || !Yt(t[r], e[r])) return !1;
  }
  return !0;
}
function df(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function ff(t, e) {
  var n = df(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e))
        return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = df(n);
  }
}
function bp(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? bp(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function Kp() {
  for (var t = window, e = Sl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Sl(t.document);
  }
  return e;
}
function Eh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function Jy(t) {
  var e = Kp(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    bp(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && Eh(n)) {
      if (
        ((e = i.start),
        (t = i.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !t.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = ff(n, s));
        var o = ff(n, i);
        r &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== r.node ||
            t.anchorOffset !== r.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          t.removeAllRanges(),
          s > i
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var e1 = En && "documentMode" in document && 11 >= document.documentMode,
  fr = null,
  lc = null,
  Ls = null,
  ac = !1;
function gf(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ac ||
    fr == null ||
    fr !== Sl(i) ||
    ((i = fr),
    "selectionStart" in i && Eh(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Ls && Us(Ls, i)) ||
      ((Ls = i),
      (i = Ml(lc, "onSelect")),
      0 < i.length &&
        ((e = new _h("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = fr))));
}
function Yo(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var gr = {
    animationend: Yo("Animation", "AnimationEnd"),
    animationiteration: Yo("Animation", "AnimationIteration"),
    animationstart: Yo("Animation", "AnimationStart"),
    transitionend: Yo("Transition", "TransitionEnd"),
  },
  uu = {},
  Zp = {};
En &&
  ((Zp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gr.animationend.animation,
    delete gr.animationiteration.animation,
    delete gr.animationstart.animation),
  "TransitionEvent" in window || delete gr.transitionend.transition);
function fa(t) {
  if (uu[t]) return uu[t];
  if (!gr[t]) return t;
  var e = gr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Zp) return (uu[t] = e[n]);
  return t;
}
var Hp = fa("animationend"),
  $p = fa("animationiteration"),
  qp = fa("animationstart"),
  Qp = fa("transitionend"),
  Jp = new Map(),
  pf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function fi(t, e) {
  Jp.set(t, e), Ui(e, [t]);
}
for (var cu = 0; cu < pf.length; cu++) {
  var hu = pf[cu],
    t1 = hu.toLowerCase(),
    n1 = hu[0].toUpperCase() + hu.slice(1);
  fi(t1, "on" + n1);
}
fi(Hp, "onAnimationEnd");
fi($p, "onAnimationIteration");
fi(qp, "onAnimationStart");
fi("dblclick", "onDoubleClick");
fi("focusin", "onFocus");
fi("focusout", "onBlur");
fi(Qp, "onTransitionEnd");
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
Ui(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ui(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ui("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ui(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ui(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ui(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Es =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  i1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));
function mf(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), ty(i, e, void 0, t), (t.currentTarget = null);
}
function em(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = i.length - 1; 0 <= o; o--) {
          var l = i[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && r.isPropagationStopped())) break e;
          mf(r, l, u), (s = a);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((l = i[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && r.isPropagationStopped())
          )
            break e;
          mf(r, l, u), (s = a);
        }
    }
  }
  if (Tl) throw ((t = ic), (Tl = !1), (ic = null), t);
}
function ae(t, e) {
  var n = e[fc];
  n === void 0 && (n = e[fc] = new Set());
  var i = t + "__bubble";
  n.has(i) || (tm(e, t, 2, !1), n.add(i));
}
function du(t, e, n) {
  var i = 0;
  e && (i |= 4), tm(n, t, i, e);
}
var Bo = "_reactListening" + Math.random().toString(36).slice(2);
function Ys(t) {
  if (!t[Bo]) {
    (t[Bo] = !0),
      ap.forEach(function (n) {
        n !== "selectionchange" && (i1.has(n) || du(n, !1, t), du(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Bo] || ((e[Bo] = !0), du("selectionchange", !1, e));
  }
}
function tm(t, e, n, i) {
  switch (Gp(e)) {
    case 1:
      var r = _y;
      break;
    case 4:
      r = yy;
      break;
    default:
      r = ph;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !nc ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: r })
        : t.addEventListener(e, n, !0)
      : r !== void 0
        ? t.addEventListener(e, n, { passive: r })
        : t.addEventListener(e, n, !1);
}
function fu(t, e, n, i, r) {
  var s = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var l = i.stateNode.containerInfo;
        if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === r || (a.nodeType === 8 && a.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Ti(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            i = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      i = i.return;
    }
  Sp(function () {
    var u = s,
      c = hh(n),
      h = [];
    e: {
      var d = Jp.get(t);
      if (d !== void 0) {
        var f = _h,
          m = t;
        switch (t) {
          case "keypress":
            if (gl(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = Oy;
            break;
          case "focusin":
            (m = "focus"), (f = ou);
            break;
          case "focusout":
            (m = "blur"), (f = ou);
            break;
          case "beforeblur":
          case "afterblur":
            f = ou;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = wy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Ny;
            break;
          case Hp:
          case $p:
          case qp:
            f = Sy;
            break;
          case Qp:
            f = Gy;
            break;
          case "scroll":
            f = vy;
            break;
          case "wheel":
            f = jy;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = Ty;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = of;
        }
        var y = (e & 4) !== 0,
          v = !y && t === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var g = u, _; g !== null; ) {
          _ = g;
          var E = _.stateNode;
          if (
            (_.tag === 5 &&
              E !== null &&
              ((_ = E),
              p !== null && ((E = zs(g, p)), E != null && y.push(Bs(g, E, _)))),
            v)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((d = new f(d, m, null, n, c)), h.push({ event: d, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (f = t === "mouseout" || t === "pointerout"),
          d &&
            n !== ec &&
            (m = n.relatedTarget || n.fromElement) &&
            (Ti(m) || m[wn]))
        )
          break e;
        if (
          (f || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          f
            ? ((m = n.relatedTarget || n.toElement),
              (f = u),
              (m = m ? Ti(m) : null),
              m !== null &&
                ((v = Yi(m)), m !== v || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((f = null), (m = u)),
          f !== m)
        ) {
          if (
            ((y = rf),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((y = of),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (v = f == null ? d : pr(f)),
            (_ = m == null ? d : pr(m)),
            (d = new y(E, g + "leave", f, n, c)),
            (d.target = v),
            (d.relatedTarget = _),
            (E = null),
            Ti(c) === u &&
              ((y = new y(p, g + "enter", m, n, c)),
              (y.target = _),
              (y.relatedTarget = v),
              (E = y)),
            (v = E),
            f && m)
          )
            t: {
              for (y = f, p = m, g = 0, _ = y; _; _ = er(_)) g++;
              for (_ = 0, E = p; E; E = er(E)) _++;
              for (; 0 < g - _; ) (y = er(y)), g--;
              for (; 0 < _ - g; ) (p = er(p)), _--;
              for (; g--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = er(y)), (p = er(p));
              }
              y = null;
            }
          else y = null;
          f !== null && _f(h, d, f, y, !1),
            m !== null && v !== null && _f(h, v, m, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? pr(u) : window),
          (f = d.nodeName && d.nodeName.toLowerCase()),
          f === "select" || (f === "input" && d.type === "file"))
        )
          var w = Ky;
        else if (uf(d))
          if (Bp) w = qy;
          else {
            w = Hy;
            var x = Zy;
          }
        else
          (f = d.nodeName) &&
            f.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = $y);
        if (w && (w = w(t, u))) {
          Yp(h, w, n, c);
          break e;
        }
        x && x(t, d, u),
          t === "focusout" &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === "number" &&
            Hu(d, "number", d.value);
      }
      switch (((x = u ? pr(u) : window), t)) {
        case "focusin":
          (uf(x) || x.contentEditable === "true") &&
            ((fr = x), (lc = u), (Ls = null));
          break;
        case "focusout":
          Ls = lc = fr = null;
          break;
        case "mousedown":
          ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ac = !1), gf(h, n, c);
          break;
        case "selectionchange":
          if (e1) break;
        case "keydown":
        case "keyup":
          gf(h, n, c);
      }
      var C;
      if (vh)
        e: {
          switch (t) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        dr
          ? Xp(t, n) && (S = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S &&
        (jp &&
          n.locale !== "ko" &&
          (dr || S !== "onCompositionStart"
            ? S === "onCompositionEnd" && dr && (C = Wp())
            : ((bn = c),
              (mh = "value" in bn ? bn.value : bn.textContent),
              (dr = !0))),
        (x = Ml(u, S)),
        0 < x.length &&
          ((S = new sf(S, t, null, n, c)),
          h.push({ event: S, listeners: x }),
          C ? (S.data = C) : ((C = Up(n)), C !== null && (S.data = C)))),
        (C = Uy ? Yy(t, n) : By(t, n)) &&
          ((u = Ml(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new sf("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    em(h, e);
  });
}
function Bs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ml(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = zs(t, n)),
      s != null && i.unshift(Bs(t, s, r)),
      (s = zs(t, e)),
      s != null && i.push(Bs(t, s, r))),
      (t = t.return);
  }
  return i;
}
function er(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function _f(t, e, n, i, r) {
  for (var s = e._reactName, o = []; n !== null && n !== i; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === i) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      r
        ? ((a = zs(n, s)), a != null && o.unshift(Bs(n, a, l)))
        : r || ((a = zs(n, s)), a != null && o.push(Bs(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var r1 = /\r\n?/g,
  s1 = /\u0000|\uFFFD/g;
function yf(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      r1,
      `
`,
    )
    .replace(s1, "");
}
function Vo(t, e, n) {
  if (((e = yf(e)), yf(t) !== e && n)) throw Error(L(425));
}
function Al() {}
var uc = null,
  cc = null;
function hc(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var dc = typeof setTimeout == "function" ? setTimeout : void 0,
  o1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  vf = typeof Promise == "function" ? Promise : void 0,
  l1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof vf < "u"
        ? function (t) {
            return vf.resolve(null).then(t).catch(a1);
          }
        : dc;
function a1(t) {
  setTimeout(function () {
    throw t;
  });
}
function gu(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(r), js(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  js(e);
}
function ei(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Ef(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Hr = Math.random().toString(36).slice(2),
  bt = "__reactFiber$" + Hr,
  Vs = "__reactProps$" + Hr,
  wn = "__reactContainer$" + Hr,
  fc = "__reactEvents$" + Hr,
  u1 = "__reactListeners$" + Hr,
  c1 = "__reactHandles$" + Hr;
function Ti(t) {
  var e = t[bt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[wn] || n[bt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Ef(t); t !== null; ) {
          if ((n = t[bt])) return n;
          t = Ef(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function po(t) {
  return (
    (t = t[bt] || t[wn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function pr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(L(33));
}
function ga(t) {
  return t[Vs] || null;
}
var gc = [],
  mr = -1;
function gi(t) {
  return { current: t };
}
function ue(t) {
  0 > mr || ((t.current = gc[mr]), (gc[mr] = null), mr--);
}
function le(t, e) {
  mr++, (gc[mr] = t.current), (t.current = e);
}
var li = {},
  Ye = gi(li),
  ot = gi(!1),
  Ni = li;
function Dr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return li;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = e[s];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function lt(t) {
  return (t = t.childContextTypes), t != null;
}
function Ol() {
  ue(ot), ue(Ye);
}
function wf(t, e, n) {
  if (Ye.current !== li) throw Error(L(168));
  le(Ye, e), le(ot, n);
}
function nm(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(L(108, Z0(t) || "Unknown", r));
  return pe({}, n, i);
}
function Fl(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || li),
    (Ni = Ye.current),
    le(Ye, t),
    le(ot, ot.current),
    !0
  );
}
function xf(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(L(169));
  n
    ? ((t = nm(t, e, Ni)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      ue(ot),
      ue(Ye),
      le(Ye, t))
    : ue(ot),
    le(ot, n);
}
var gn = null,
  pa = !1,
  pu = !1;
function im(t) {
  gn === null ? (gn = [t]) : gn.push(t);
}
function h1(t) {
  (pa = !0), im(t);
}
function pi() {
  if (!pu && gn !== null) {
    pu = !0;
    var t = 0,
      e = re;
    try {
      var n = gn;
      for (re = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (gn = null), (pa = !1);
    } catch (r) {
      throw (gn !== null && (gn = gn.slice(t + 1)), Lp(dh, pi), r);
    } finally {
      (re = e), (pu = !1);
    }
  }
  return null;
}
var _r = [],
  yr = 0,
  Dl = null,
  Nl = 0,
  St = [],
  Rt = 0,
  zi = null,
  pn = 1,
  mn = "";
function xi(t, e) {
  (_r[yr++] = Nl), (_r[yr++] = Dl), (Dl = t), (Nl = e);
}
function rm(t, e, n) {
  (St[Rt++] = pn), (St[Rt++] = mn), (St[Rt++] = zi), (zi = t);
  var i = pn;
  t = mn;
  var r = 32 - jt(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - jt(e) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (pn = (1 << (32 - jt(e) + r)) | (n << r) | i),
      (mn = s + t);
  } else (pn = (1 << s) | (n << r) | i), (mn = t);
}
function wh(t) {
  t.return !== null && (xi(t, 1), rm(t, 1, 0));
}
function xh(t) {
  for (; t === Dl; )
    (Dl = _r[--yr]), (_r[yr] = null), (Nl = _r[--yr]), (_r[yr] = null);
  for (; t === zi; )
    (zi = St[--Rt]),
      (St[Rt] = null),
      (mn = St[--Rt]),
      (St[Rt] = null),
      (pn = St[--Rt]),
      (St[Rt] = null);
}
var pt = null,
  ft = null,
  de = !1,
  Gt = null;
function sm(t, e) {
  var n = Tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Cf(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (pt = t), (ft = ei(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (pt = t), (ft = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = zi !== null ? { id: pn, overflow: mn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Tt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (pt = t),
            (ft = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function mc(t) {
  if (de) {
    var e = ft;
    if (e) {
      var n = e;
      if (!Cf(t, e)) {
        if (pc(t)) throw Error(L(418));
        e = ei(n.nextSibling);
        var i = pt;
        e && Cf(t, e)
          ? sm(i, n)
          : ((t.flags = (t.flags & -4097) | 2), (de = !1), (pt = t));
      }
    } else {
      if (pc(t)) throw Error(L(418));
      (t.flags = (t.flags & -4097) | 2), (de = !1), (pt = t);
    }
  }
}
function Sf(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  pt = t;
}
function bo(t) {
  if (t !== pt) return !1;
  if (!de) return Sf(t), (de = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !hc(t.type, t.memoizedProps))),
    e && (e = ft))
  ) {
    if (pc(t)) throw (om(), Error(L(418)));
    for (; e; ) sm(t, e), (e = ei(e.nextSibling));
  }
  if ((Sf(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(L(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              ft = ei(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      ft = null;
    }
  } else ft = pt ? ei(t.stateNode.nextSibling) : null;
  return !0;
}
function om() {
  for (var t = ft; t; ) t = ei(t.nextSibling);
}
function Nr() {
  (ft = pt = null), (de = !1);
}
function Ch(t) {
  Gt === null ? (Gt = [t]) : Gt.push(t);
}
var d1 = In.ReactCurrentBatchConfig;
function Nt(t, e) {
  if (t && t.defaultProps) {
    (e = pe({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var zl = gi(null),
  Gl = null,
  vr = null,
  Sh = null;
function Rh() {
  Sh = vr = Gl = null;
}
function Th(t) {
  var e = zl.current;
  ue(zl), (t._currentValue = e);
}
function _c(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function kr(t, e) {
  (Gl = t),
    (Sh = vr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (st = !0), (t.firstContext = null));
}
function Lt(t) {
  var e = t._currentValue;
  if (Sh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), vr === null)) {
      if (Gl === null) throw Error(L(308));
      (vr = t), (Gl.dependencies = { lanes: 0, firstContext: t });
    } else vr = vr.next = t;
  return e;
}
var Ii = null;
function Ih(t) {
  Ii === null ? (Ii = [t]) : Ii.push(t);
}
function lm(t, e, n, i) {
  var r = e.interleaved;
  return (
    r === null ? ((n.next = n), Ih(e)) : ((n.next = r.next), (r.next = n)),
    (e.interleaved = n),
    xn(t, i)
  );
}
function xn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jn = !1;
function Lh(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function am(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function _n(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ti(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), q & 2)) {
    var r = i.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (i.pending = e),
      xn(t, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), Ih(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    xn(t, n)
  );
}
function pl(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), fh(t, n);
  }
}
function Rf(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = e) : (s = s.next = e);
    } else r = s = e;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Wl(t, e, n, i) {
  var r = t.updateQueue;
  jn = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    l = r.shared.pending;
  if (l !== null) {
    r.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var h = r.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        f = l.eventTime;
      if ((i & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: f,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = t,
            y = l;
          switch (((d = e), (f = n), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                h = m.call(f, h, d);
                break e;
              }
              h = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = y.payload),
                (d = typeof m == "function" ? m.call(f, h, d) : m),
                d == null)
              )
                break e;
              h = pe({}, h, d);
              break e;
            case 2:
              jn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (d = r.effects),
          d === null ? (r.effects = [l]) : d.push(l));
      } else
        (f = {
          eventTime: f,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = f), (a = h)) : (c = c.next = f),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = r.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (r.lastBaseUpdate = d),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (r.baseState = a),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (o |= r.lane), (r = r.next);
      while (r !== e);
    } else s === null && (r.shared.lanes = 0);
    (Wi |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function Tf(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(L(191, r));
        r.call(i);
      }
    }
}
var um = new lp.Component().refs;
function yc(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : pe({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ma = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Yi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = be(),
      r = ii(t),
      s = _n(i, r);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = ti(t, s, r)),
      e !== null && (Xt(e, t, r, i), pl(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = be(),
      r = ii(t),
      s = _n(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = ti(t, s, r)),
      e !== null && (Xt(e, t, r, i), pl(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = be(),
      i = ii(t),
      r = _n(n, i);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = ti(t, r, i)),
      e !== null && (Xt(e, t, i, n), pl(e, t, i));
  },
};
function If(t, e, n, i, r, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, s, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Us(n, i) || !Us(r, s)
        : !0
  );
}
function cm(t, e, n) {
  var i = !1,
    r = li,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Lt(s))
      : ((r = lt(e) ? Ni : Ye.current),
        (i = e.contextTypes),
        (s = (i = i != null) ? Dr(t, r) : li)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ma),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Lf(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && ma.enqueueReplaceState(e, e.state, null);
}
function vc(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = um), Lh(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (r.context = Lt(s))
    : ((s = lt(e) ? Ni : Ye.current), (r.context = Dr(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (yc(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && ma.enqueueReplaceState(r, r.state, null),
      Wl(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function cs(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(L(147, t));
      var r = i,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var l = r.refs;
            l === um && (l = r.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, t));
  }
  return t;
}
function Ko(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      L(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    ))
  );
}
function kf(t) {
  var e = t._init;
  return e(t._payload);
}
function hm(t) {
  function e(p, g) {
    if (t) {
      var _ = p.deletions;
      _ === null ? ((p.deletions = [g]), (p.flags |= 16)) : _.push(g);
    }
  }
  function n(p, g) {
    if (!t) return null;
    for (; g !== null; ) e(p, g), (g = g.sibling);
    return null;
  }
  function i(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
    return p;
  }
  function r(p, g) {
    return (p = ri(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, g, _) {
    return (
      (p.index = _),
      t
        ? ((_ = p.alternate),
          _ !== null
            ? ((_ = _.index), _ < g ? ((p.flags |= 2), g) : _)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function o(p) {
    return t && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, g, _, E) {
    return g === null || g.tag !== 6
      ? ((g = xu(_, p.mode, E)), (g.return = p), g)
      : ((g = r(g, _)), (g.return = p), g);
  }
  function a(p, g, _, E) {
    var w = _.type;
    return w === hr
      ? c(p, g, _.props.children, E, _.key)
      : g !== null &&
          (g.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === Wn &&
              kf(w) === g.type))
        ? ((E = r(g, _.props)), (E.ref = cs(p, g, _)), (E.return = p), E)
        : ((E = wl(_.type, _.key, _.props, null, p.mode, E)),
          (E.ref = cs(p, g, _)),
          (E.return = p),
          E);
  }
  function u(p, g, _, E) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== _.containerInfo ||
      g.stateNode.implementation !== _.implementation
      ? ((g = Cu(_, p.mode, E)), (g.return = p), g)
      : ((g = r(g, _.children || [])), (g.return = p), g);
  }
  function c(p, g, _, E, w) {
    return g === null || g.tag !== 7
      ? ((g = Fi(_, p.mode, E, w)), (g.return = p), g)
      : ((g = r(g, _)), (g.return = p), g);
  }
  function h(p, g, _) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = xu("" + g, p.mode, _)), (g.return = p), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case No:
          return (
            (_ = wl(g.type, g.key, g.props, null, p.mode, _)),
            (_.ref = cs(p, null, g)),
            (_.return = p),
            _
          );
        case cr:
          return (g = Cu(g, p.mode, _)), (g.return = p), g;
        case Wn:
          var E = g._init;
          return h(p, E(g._payload), _);
      }
      if (ys(g) || ss(g))
        return (g = Fi(g, p.mode, _, null)), (g.return = p), g;
      Ko(p, g);
    }
    return null;
  }
  function d(p, g, _, E) {
    var w = g !== null ? g.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return w !== null ? null : l(p, g, "" + _, E);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case No:
          return _.key === w ? a(p, g, _, E) : null;
        case cr:
          return _.key === w ? u(p, g, _, E) : null;
        case Wn:
          return (w = _._init), d(p, g, w(_._payload), E);
      }
      if (ys(_) || ss(_)) return w !== null ? null : c(p, g, _, E, null);
      Ko(p, _);
    }
    return null;
  }
  function f(p, g, _, E, w) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(_) || null), l(g, p, "" + E, w);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case No:
          return (p = p.get(E.key === null ? _ : E.key) || null), a(g, p, E, w);
        case cr:
          return (p = p.get(E.key === null ? _ : E.key) || null), u(g, p, E, w);
        case Wn:
          var x = E._init;
          return f(p, g, _, x(E._payload), w);
      }
      if (ys(E) || ss(E)) return (p = p.get(_) || null), c(g, p, E, w, null);
      Ko(g, E);
    }
    return null;
  }
  function m(p, g, _, E) {
    for (
      var w = null, x = null, C = g, S = (g = 0), M = null;
      C !== null && S < _.length;
      S++
    ) {
      C.index > S ? ((M = C), (C = null)) : (M = C.sibling);
      var k = d(p, C, _[S], E);
      if (k === null) {
        C === null && (C = M);
        break;
      }
      t && C && k.alternate === null && e(p, C),
        (g = s(k, g, S)),
        x === null ? (w = k) : (x.sibling = k),
        (x = k),
        (C = M);
    }
    if (S === _.length) return n(p, C), de && xi(p, S), w;
    if (C === null) {
      for (; S < _.length; S++)
        (C = h(p, _[S], E)),
          C !== null &&
            ((g = s(C, g, S)), x === null ? (w = C) : (x.sibling = C), (x = C));
      return de && xi(p, S), w;
    }
    for (C = i(p, C); S < _.length; S++)
      (M = f(C, p, S, _[S], E)),
        M !== null &&
          (t && M.alternate !== null && C.delete(M.key === null ? S : M.key),
          (g = s(M, g, S)),
          x === null ? (w = M) : (x.sibling = M),
          (x = M));
    return (
      t &&
        C.forEach(function (j) {
          return e(p, j);
        }),
      de && xi(p, S),
      w
    );
  }
  function y(p, g, _, E) {
    var w = ss(_);
    if (typeof w != "function") throw Error(L(150));
    if (((_ = w.call(_)), _ == null)) throw Error(L(151));
    for (
      var x = (w = null), C = g, S = (g = 0), M = null, k = _.next();
      C !== null && !k.done;
      S++, k = _.next()
    ) {
      C.index > S ? ((M = C), (C = null)) : (M = C.sibling);
      var j = d(p, C, k.value, E);
      if (j === null) {
        C === null && (C = M);
        break;
      }
      t && C && j.alternate === null && e(p, C),
        (g = s(j, g, S)),
        x === null ? (w = j) : (x.sibling = j),
        (x = j),
        (C = M);
    }
    if (k.done) return n(p, C), de && xi(p, S), w;
    if (C === null) {
      for (; !k.done; S++, k = _.next())
        (k = h(p, k.value, E)),
          k !== null &&
            ((g = s(k, g, S)), x === null ? (w = k) : (x.sibling = k), (x = k));
      return de && xi(p, S), w;
    }
    for (C = i(p, C); !k.done; S++, k = _.next())
      (k = f(C, p, S, k.value, E)),
        k !== null &&
          (t && k.alternate !== null && C.delete(k.key === null ? S : k.key),
          (g = s(k, g, S)),
          x === null ? (w = k) : (x.sibling = k),
          (x = k));
    return (
      t &&
        C.forEach(function (Z) {
          return e(p, Z);
        }),
      de && xi(p, S),
      w
    );
  }
  function v(p, g, _, E) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === hr &&
        _.key === null &&
        (_ = _.props.children),
      typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case No:
          e: {
            for (var w = _.key, x = g; x !== null; ) {
              if (x.key === w) {
                if (((w = _.type), w === hr)) {
                  if (x.tag === 7) {
                    n(p, x.sibling),
                      (g = r(x, _.props.children)),
                      (g.return = p),
                      (p = g);
                    break e;
                  }
                } else if (
                  x.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Wn &&
                    kf(w) === x.type)
                ) {
                  n(p, x.sibling),
                    (g = r(x, _.props)),
                    (g.ref = cs(p, x, _)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                n(p, x);
                break;
              } else e(p, x);
              x = x.sibling;
            }
            _.type === hr
              ? ((g = Fi(_.props.children, p.mode, E, _.key)),
                (g.return = p),
                (p = g))
              : ((E = wl(_.type, _.key, _.props, null, p.mode, E)),
                (E.ref = cs(p, g, _)),
                (E.return = p),
                (p = E));
          }
          return o(p);
        case cr:
          e: {
            for (x = _.key; g !== null; ) {
              if (g.key === x)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === _.containerInfo &&
                  g.stateNode.implementation === _.implementation
                ) {
                  n(p, g.sibling),
                    (g = r(g, _.children || [])),
                    (g.return = p),
                    (p = g);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else e(p, g);
              g = g.sibling;
            }
            (g = Cu(_, p.mode, E)), (g.return = p), (p = g);
          }
          return o(p);
        case Wn:
          return (x = _._init), v(p, g, x(_._payload), E);
      }
      if (ys(_)) return m(p, g, _, E);
      if (ss(_)) return y(p, g, _, E);
      Ko(p, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = r(g, _)), (g.return = p), (p = g))
          : (n(p, g), (g = xu(_, p.mode, E)), (g.return = p), (p = g)),
        o(p))
      : n(p, g);
  }
  return v;
}
var zr = hm(!0),
  dm = hm(!1),
  mo = {},
  Qt = gi(mo),
  bs = gi(mo),
  Ks = gi(mo);
function Li(t) {
  if (t === mo) throw Error(L(174));
  return t;
}
function kh(t, e) {
  switch ((le(Ks, e), le(bs, t), le(Qt, mo), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : qu(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = qu(e, t));
  }
  ue(Qt), le(Qt, e);
}
function Gr() {
  ue(Qt), ue(bs), ue(Ks);
}
function fm(t) {
  Li(Ks.current);
  var e = Li(Qt.current),
    n = qu(e, t.type);
  e !== n && (le(bs, t), le(Qt, n));
}
function Ph(t) {
  bs.current === t && (ue(Qt), ue(bs));
}
var fe = gi(0);
function jl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var mu = [];
function Mh() {
  for (var t = 0; t < mu.length; t++)
    mu[t]._workInProgressVersionPrimary = null;
  mu.length = 0;
}
var ml = In.ReactCurrentDispatcher,
  _u = In.ReactCurrentBatchConfig,
  Gi = 0,
  ge = null,
  Re = null,
  Le = null,
  Xl = !1,
  ks = !1,
  Zs = 0,
  f1 = 0;
function Ne() {
  throw Error(L(321));
}
function Ah(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Yt(t[n], e[n])) return !1;
  return !0;
}
function Oh(t, e, n, i, r, s) {
  if (
    ((Gi = s),
    (ge = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (ml.current = t === null || t.memoizedState === null ? _1 : y1),
    (t = n(i, r)),
    ks)
  ) {
    s = 0;
    do {
      if (((ks = !1), (Zs = 0), 25 <= s)) throw Error(L(301));
      (s += 1),
        (Le = Re = null),
        (e.updateQueue = null),
        (ml.current = v1),
        (t = n(i, r));
    } while (ks);
  }
  if (
    ((ml.current = Ul),
    (e = Re !== null && Re.next !== null),
    (Gi = 0),
    (Le = Re = ge = null),
    (Xl = !1),
    e)
  )
    throw Error(L(300));
  return t;
}
function Fh() {
  var t = Zs !== 0;
  return (Zs = 0), t;
}
function Vt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (ge.memoizedState = Le = t) : (Le = Le.next = t), Le;
}
function kt() {
  if (Re === null) {
    var t = ge.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Re.next;
  var e = Le === null ? ge.memoizedState : Le.next;
  if (e !== null) (Le = e), (Re = t);
  else {
    if (t === null) throw Error(L(310));
    (Re = t),
      (t = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Le === null ? (ge.memoizedState = Le = t) : (Le = Le.next = t);
  }
  return Le;
}
function Hs(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function yu(t) {
  var e = kt(),
    n = e.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = t;
  var i = Re,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((Gi & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : t(i, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = i)) : (a = a.next = h),
          (ge.lanes |= c),
          (Wi |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = i) : (a.next = l),
      Yt(i, e.memoizedState) || (st = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = a),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (ge.lanes |= s), (Wi |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function vu(t) {
  var e = kt(),
    n = e.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    r = n.pending,
    s = e.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== r);
    Yt(s, e.memoizedState) || (st = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function gm() {}
function pm(t, e) {
  var n = ge,
    i = kt(),
    r = e(),
    s = !Yt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (st = !0)),
    (i = i.queue),
    Dh(ym.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $s(9, _m.bind(null, n, i, r, e), void 0, null),
      Pe === null)
    )
      throw Error(L(349));
    Gi & 30 || mm(n, e, r);
  }
  return r;
}
function mm(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ge.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ge.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function _m(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), vm(e) && Em(t);
}
function ym(t, e, n) {
  return n(function () {
    vm(e) && Em(t);
  });
}
function vm(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Yt(t, n);
  } catch {
    return !0;
  }
}
function Em(t) {
  var e = xn(t, 1);
  e !== null && Xt(e, t, 1, -1);
}
function Pf(t) {
  var e = Vt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hs,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = m1.bind(null, ge, t)),
    [e.memoizedState, t]
  );
}
function $s(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = ge.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ge.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function wm() {
  return kt().memoizedState;
}
function _l(t, e, n, i) {
  var r = Vt();
  (ge.flags |= t),
    (r.memoizedState = $s(1 | e, n, void 0, i === void 0 ? null : i));
}
function _a(t, e, n, i) {
  var r = kt();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (Re !== null) {
    var o = Re.memoizedState;
    if (((s = o.destroy), i !== null && Ah(i, o.deps))) {
      r.memoizedState = $s(e, n, s, i);
      return;
    }
  }
  (ge.flags |= t), (r.memoizedState = $s(1 | e, n, s, i));
}
function Mf(t, e) {
  return _l(8390656, 8, t, e);
}
function Dh(t, e) {
  return _a(2048, 8, t, e);
}
function xm(t, e) {
  return _a(4, 2, t, e);
}
function Cm(t, e) {
  return _a(4, 4, t, e);
}
function Sm(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Rm(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), _a(4, 4, Sm.bind(null, e, t), n)
  );
}
function Nh() {}
function Tm(t, e) {
  var n = kt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Ah(e, i[1])
    ? i[0]
    : ((n.memoizedState = [t, e]), t);
}
function Im(t, e) {
  var n = kt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Ah(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Lm(t, e, n) {
  return Gi & 21
    ? (Yt(n, e) || ((n = Mp()), (ge.lanes |= n), (Wi |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (st = !0)), (t.memoizedState = n));
}
function g1(t, e) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = _u.transition;
  _u.transition = {};
  try {
    t(!1), e();
  } finally {
    (re = n), (_u.transition = i);
  }
}
function km() {
  return kt().memoizedState;
}
function p1(t, e, n) {
  var i = ii(t);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pm(t))
  )
    Mm(e, n);
  else if (((n = lm(t, e, n, i)), n !== null)) {
    var r = be();
    Xt(n, t, i, r), Am(n, e, i);
  }
}
function m1(t, e, n) {
  var i = ii(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pm(t)) Mm(e, r);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = l), Yt(l, o))) {
          var a = e.interleaved;
          a === null
            ? ((r.next = r), Ih(e))
            : ((r.next = a.next), (a.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = lm(t, e, r, i)),
      n !== null && ((r = be()), Xt(n, t, i, r), Am(n, e, i));
  }
}
function Pm(t) {
  var e = t.alternate;
  return t === ge || (e !== null && e === ge);
}
function Mm(t, e) {
  ks = Xl = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Am(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), fh(t, n);
  }
}
var Ul = {
    readContext: Lt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  _1 = {
    readContext: Lt,
    useCallback: function (t, e) {
      return (Vt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Lt,
    useEffect: Mf,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        _l(4194308, 4, Sm.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return _l(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return _l(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Vt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var i = Vt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = p1.bind(null, ge, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Vt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Pf,
    useDebugValue: Nh,
    useDeferredValue: function (t) {
      return (Vt().memoizedState = t);
    },
    useTransition: function () {
      var t = Pf(!1),
        e = t[0];
      return (t = g1.bind(null, t[1])), (Vt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = ge,
        r = Vt();
      if (de) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = e()), Pe === null)) throw Error(L(349));
        Gi & 30 || mm(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        Mf(ym.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        $s(9, _m.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Vt(),
        e = Pe.identifierPrefix;
      if (de) {
        var n = mn,
          i = pn;
        (n = (i & ~(1 << (32 - jt(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Zs++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = f1++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  y1 = {
    readContext: Lt,
    useCallback: Tm,
    useContext: Lt,
    useEffect: Dh,
    useImperativeHandle: Rm,
    useInsertionEffect: xm,
    useLayoutEffect: Cm,
    useMemo: Im,
    useReducer: yu,
    useRef: wm,
    useState: function () {
      return yu(Hs);
    },
    useDebugValue: Nh,
    useDeferredValue: function (t) {
      var e = kt();
      return Lm(e, Re.memoizedState, t);
    },
    useTransition: function () {
      var t = yu(Hs)[0],
        e = kt().memoizedState;
      return [t, e];
    },
    useMutableSource: gm,
    useSyncExternalStore: pm,
    useId: km,
    unstable_isNewReconciler: !1,
  },
  v1 = {
    readContext: Lt,
    useCallback: Tm,
    useContext: Lt,
    useEffect: Dh,
    useImperativeHandle: Rm,
    useInsertionEffect: xm,
    useLayoutEffect: Cm,
    useMemo: Im,
    useReducer: vu,
    useRef: wm,
    useState: function () {
      return vu(Hs);
    },
    useDebugValue: Nh,
    useDeferredValue: function (t) {
      var e = kt();
      return Re === null ? (e.memoizedState = t) : Lm(e, Re.memoizedState, t);
    },
    useTransition: function () {
      var t = vu(Hs)[0],
        e = kt().memoizedState;
      return [t, e];
    },
    useMutableSource: gm,
    useSyncExternalStore: pm,
    useId: km,
    unstable_isNewReconciler: !1,
  };
function Wr(t, e) {
  try {
    var n = "",
      i = e;
    do (n += K0(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: r, digest: null };
}
function Eu(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Ec(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var E1 = typeof WeakMap == "function" ? WeakMap : Map;
function Om(t, e, n) {
  (n = _n(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      Bl || ((Bl = !0), (Pc = i)), Ec(t, e);
    }),
    n
  );
}
function Fm(t, e, n) {
  (n = _n(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        Ec(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Ec(t, e),
          typeof i != "function" &&
            (ni === null ? (ni = new Set([this])) : ni.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Af(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new E1();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = F1.bind(null, t, e, n)), e.then(t, t));
}
function Of(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Ff(t, e, n, i, r) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = r), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = _n(-1, 1)), (e.tag = 2), ti(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var w1 = In.ReactCurrentOwner,
  st = !1;
function Ve(t, e, n, i) {
  e.child = t === null ? dm(e, null, n, i) : zr(e, t.child, n, i);
}
function Df(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    kr(e, r),
    (i = Oh(t, e, n, i, s, r)),
    (n = Fh()),
    t !== null && !st
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        Cn(t, e, r))
      : (de && n && wh(e), (e.flags |= 1), Ve(t, e, i, r), e.child)
  );
}
function Nf(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Bh(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Dm(t, e, s, i, r))
      : ((t = wl(n.type, null, i, e, e.mode, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Us), n(o, i) && t.ref === e.ref)
    )
      return Cn(t, e, r);
  }
  return (
    (e.flags |= 1),
    (t = ri(s, i)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Dm(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Us(s, i) && t.ref === e.ref)
      if (((st = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
        t.flags & 131072 && (st = !0);
      else return (e.lanes = t.lanes), Cn(t, e, r);
  }
  return wc(t, e, n, i, r);
}
function Nm(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(wr, ht),
        (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          le(wr, ht),
          (ht |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        le(wr, ht),
        (ht |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
      le(wr, ht),
      (ht |= i);
  return Ve(t, e, r, n), e.child;
}
function zm(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function wc(t, e, n, i, r) {
  var s = lt(n) ? Ni : Ye.current;
  return (
    (s = Dr(e, s)),
    kr(e, r),
    (n = Oh(t, e, n, i, s, r)),
    (i = Fh()),
    t !== null && !st
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~r),
        Cn(t, e, r))
      : (de && i && wh(e), (e.flags |= 1), Ve(t, e, n, r), e.child)
  );
}
function zf(t, e, n, i, r) {
  if (lt(n)) {
    var s = !0;
    Fl(e);
  } else s = !1;
  if ((kr(e, r), e.stateNode === null))
    yl(t, e), cm(e, n, i), vc(e, n, i, r), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Lt(u))
      : ((u = lt(n) ? Ni : Ye.current), (u = Dr(e, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== i || a !== u) && Lf(e, o, i, u)),
      (jn = !1);
    var d = e.memoizedState;
    (o.state = d),
      Wl(e, i, o, r),
      (a = e.memoizedState),
      l !== i || d !== a || ot.current || jn
        ? (typeof c == "function" && (yc(e, n, c, i), (a = e.memoizedState)),
          (l = jn || If(e, n, l, i, d, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = a)),
          (o.props = i),
          (o.state = a),
          (o.context = u),
          (i = l))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (i = !1));
  } else {
    (o = e.stateNode),
      am(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : Nt(e.type, l)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Lt(a))
        : ((a = lt(n) ? Ni : Ye.current), (a = Dr(e, a)));
    var f = n.getDerivedStateFromProps;
    (c =
      typeof f == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || d !== a) && Lf(e, o, i, a)),
      (jn = !1),
      (d = e.memoizedState),
      (o.state = d),
      Wl(e, i, o, r);
    var m = e.memoizedState;
    l !== h || d !== m || ot.current || jn
      ? (typeof f == "function" && (yc(e, n, f, i), (m = e.memoizedState)),
        (u = jn || If(e, n, u, i, d, m, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, m, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, m, a)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = m)),
        (o.props = i),
        (o.state = m),
        (o.context = a),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return xc(t, e, n, i, s, r);
}
function xc(t, e, n, i, r, s) {
  zm(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return r && xf(e, n, !1), Cn(t, e, s);
  (i = e.stateNode), (w1.current = e);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = zr(e, t.child, null, s)), (e.child = zr(e, null, l, s)))
      : Ve(t, e, l, s),
    (e.memoizedState = i.state),
    r && xf(e, n, !0),
    e.child
  );
}
function Gm(t) {
  var e = t.stateNode;
  e.pendingContext
    ? wf(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && wf(t, e.context, !1),
    kh(t, e.containerInfo);
}
function Gf(t, e, n, i, r) {
  return Nr(), Ch(r), (e.flags |= 256), Ve(t, e, n, i), e.child;
}
var Cc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sc(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Wm(t, e, n) {
  var i = e.pendingProps,
    r = fe.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    l
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (r |= 1),
    le(fe, r & 1),
    t === null)
  )
    return (
      mc(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = i.children),
          (t = i.fallback),
          s
            ? ((i = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ea(o, i, 0, null)),
              (t = Fi(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Sc(n)),
              (e.memoizedState = Cc),
              t)
            : zh(e, o))
    );
  if (((r = t.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
    return x1(t, e, o, i, l, r, n);
  if (s) {
    (s = i.fallback), (o = e.mode), (r = t.child), (l = r.sibling);
    var a = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== r
        ? ((i = e.child),
          (i.childLanes = 0),
          (i.pendingProps = a),
          (e.deletions = null))
        : ((i = ri(r, a)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      l !== null ? (s = ri(l, s)) : ((s = Fi(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Sc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Cc),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = ri(s, { mode: "visible", children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function zh(t, e) {
  return (
    (e = Ea({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Zo(t, e, n, i) {
  return (
    i !== null && Ch(i),
    zr(e, t.child, null, n),
    (t = zh(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function x1(t, e, n, i, r, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = Eu(Error(L(422)))), Zo(t, e, o, i))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((s = i.fallback),
          (r = e.mode),
          (i = Ea({ mode: "visible", children: i.children }, r, 0, null)),
          (s = Fi(s, r, o, null)),
          (s.flags |= 2),
          (i.return = e),
          (s.return = e),
          (i.sibling = s),
          (e.child = i),
          e.mode & 1 && zr(e, t.child, null, o),
          (e.child.memoizedState = Sc(o)),
          (e.memoizedState = Cc),
          s);
  if (!(e.mode & 1)) return Zo(t, e, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
    return (i = l), (s = Error(L(419))), (i = Eu(s, i, void 0)), Zo(t, e, o, i);
  }
  if (((l = (o & t.childLanes) !== 0), st || l)) {
    if (((i = Pe), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), xn(t, r), Xt(i, t, r, -1));
    }
    return Yh(), (i = Eu(Error(L(421)))), Zo(t, e, o, i);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = D1.bind(null, t)),
      (r._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (ft = ei(r.nextSibling)),
      (pt = e),
      (de = !0),
      (Gt = null),
      t !== null &&
        ((St[Rt++] = pn),
        (St[Rt++] = mn),
        (St[Rt++] = zi),
        (pn = t.id),
        (mn = t.overflow),
        (zi = e)),
      (e = zh(e, i.children)),
      (e.flags |= 4096),
      e);
}
function Wf(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), _c(t.return, e, n);
}
function wu(t, e, n, i, r) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function jm(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((Ve(t, e, i.children, n), (i = fe.current), i & 2))
    (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Wf(t, n, e);
        else if (t.tag === 19) Wf(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((le(fe, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && jl(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          wu(e, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && jl(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        wu(e, !0, n, null, s);
        break;
      case "together":
        wu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function yl(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Cn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Wi |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(L(153));
  if (e.child !== null) {
    for (
      t = e.child, n = ri(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = ri(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function C1(t, e, n) {
  switch (e.tag) {
    case 3:
      Gm(e), Nr();
      break;
    case 5:
      fm(e);
      break;
    case 1:
      lt(e.type) && Fl(e);
      break;
    case 4:
      kh(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      le(zl, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (le(fe, fe.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? Wm(t, e, n)
            : (le(fe, fe.current & 1),
              (t = Cn(t, e, n)),
              t !== null ? t.sibling : null);
      le(fe, fe.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return jm(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        le(fe, fe.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Nm(t, e, n);
  }
  return Cn(t, e, n);
}
var Xm, Rc, Um, Ym;
Xm = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Rc = function () {};
Um = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), Li(Qt.current);
    var s = null;
    switch (n) {
      case "input":
        (r = Ku(t, r)), (i = Ku(t, i)), (s = []);
        break;
      case "select":
        (r = pe({}, r, { value: void 0 })),
          (i = pe({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = $u(t, r)), (i = $u(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (t.onclick = Al);
    }
    Qu(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var l = r[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ds.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var a = i[u];
      if (
        ((l = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ds.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && ae("scroll", t),
                    s || l === a || (s = []))
                  : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Ym = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function hs(t, e) {
  if (!de)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (i.sibling = null);
    }
}
function ze(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = t),
        (r = r.sibling);
  else
    for (r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = t),
        (r = r.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function S1(t, e, n) {
  var i = e.pendingProps;
  switch ((xh(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(e), null;
    case 1:
      return lt(e.type) && Ol(), ze(e), null;
    case 3:
      return (
        (i = e.stateNode),
        Gr(),
        ue(ot),
        ue(Ye),
        Mh(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (bo(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Gt !== null && (Oc(Gt), (Gt = null)))),
        Rc(t, e),
        ze(e),
        null
      );
    case 5:
      Ph(e);
      var r = Li(Ks.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Um(t, e, n, i, r),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(L(166));
          return ze(e), null;
        }
        if (((t = Li(Qt.current)), bo(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[bt] = e), (i[Vs] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", i), ae("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Es.length; r++) ae(Es[r], i);
              break;
            case "source":
              ae("error", i);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", i), ae("load", i);
              break;
            case "details":
              ae("toggle", i);
              break;
            case "input":
              Kd(i, s), ae("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                ae("invalid", i);
              break;
            case "textarea":
              Hd(i, s), ae("invalid", i);
          }
          Qu(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? i.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Vo(i.textContent, l, t),
                    (r = ["children", l]))
                  : typeof l == "number" &&
                    i.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Vo(i.textContent, l, t),
                    (r = ["children", "" + l]))
                : Ds.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  ae("scroll", i);
            }
          switch (n) {
            case "input":
              zo(i), Zd(i, s, !0);
              break;
            case "textarea":
              zo(i), $d(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = Al);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = mp(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof i.is == "string"
                  ? (t = o.createElement(n, { is: i.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      i.multiple
                        ? (o.multiple = !0)
                        : i.size && (o.size = i.size)))
              : (t = o.createElementNS(t, n)),
            (t[bt] = e),
            (t[Vs] = i),
            Xm(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Ju(n, i)), n)) {
              case "dialog":
                ae("cancel", t), ae("close", t), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", t), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Es.length; r++) ae(Es[r], t);
                r = i;
                break;
              case "source":
                ae("error", t), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", t), ae("load", t), (r = i);
                break;
              case "details":
                ae("toggle", t), (r = i);
                break;
              case "input":
                Kd(t, i), (r = Ku(t, i)), ae("invalid", t);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = pe({}, i, { value: void 0 })),
                  ae("invalid", t);
                break;
              case "textarea":
                Hd(t, i), (r = $u(t, i)), ae("invalid", t);
                break;
              default:
                r = i;
            }
            Qu(n, r), (l = r);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? vp(t, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && _p(t, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Ns(t, a)
                        : typeof a == "number" && Ns(t, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Ds.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && ae("scroll", t)
                          : a != null && lh(t, s, a, o));
              }
            switch (n) {
              case "input":
                zo(t), Zd(t, i, !1);
                break;
              case "textarea":
                zo(t), $d(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + oi(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? Rr(t, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      Rr(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (t.onclick = Al);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return ze(e), null;
    case 6:
      if (t && e.stateNode != null) Ym(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(L(166));
        if (((n = Li(Ks.current)), Li(Qt.current), bo(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[bt] = e),
            (s = i.nodeValue !== n) && ((t = pt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Vo(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vo(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[bt] = e),
            (e.stateNode = i);
      }
      return ze(e), null;
    case 13:
      if (
        (ue(fe),
        (i = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (de && ft !== null && e.mode & 1 && !(e.flags & 128))
          om(), Nr(), (e.flags |= 98560), (s = !1);
        else if (((s = bo(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[bt] = e;
          } else
            Nr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          ze(e), (s = !1);
        } else Gt !== null && (Oc(Gt), (Gt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || fe.current & 1 ? Te === 0 && (Te = 3) : Yh())),
          e.updateQueue !== null && (e.flags |= 4),
          ze(e),
          null);
    case 4:
      return (
        Gr(), Rc(t, e), t === null && Ys(e.stateNode.containerInfo), ze(e), null
      );
    case 10:
      return Th(e.type._context), ze(e), null;
    case 17:
      return lt(e.type) && Ol(), ze(e), null;
    case 19:
      if ((ue(fe), (s = e.memoizedState), s === null)) return ze(e), null;
      if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) hs(s, !1);
        else {
          if (Te !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = jl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    hs(s, !1),
                    i = o.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return le(fe, (fe.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            we() > jr &&
            ((e.flags |= 128), (i = !0), hs(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = jl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              hs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !de)
            )
              return ze(e), null;
          } else
            2 * we() - s.renderingStartTime > jr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), hs(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = we()),
          (e.sibling = null),
          (n = fe.current),
          le(fe, i ? (n & 1) | 2 : n & 1),
          e)
        : (ze(e), null);
    case 22:
    case 23:
      return (
        Uh(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? ht & 1073741824 && (ze(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : ze(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, e.tag));
}
function R1(t, e) {
  switch ((xh(e), e.tag)) {
    case 1:
      return (
        lt(e.type) && Ol(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Gr(),
        ue(ot),
        ue(Ye),
        Mh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Ph(e), null;
    case 13:
      if (
        (ue(fe), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(L(340));
        Nr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return ue(fe), null;
    case 4:
      return Gr(), null;
    case 10:
      return Th(e.type._context), null;
    case 22:
    case 23:
      return Uh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ho = !1,
  je = !1,
  T1 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Er(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        ye(t, e, i);
      }
    else n.current = null;
}
function Tc(t, e, n) {
  try {
    n();
  } catch (i) {
    ye(t, e, i);
  }
}
var jf = !1;
function I1(t, e) {
  if (((uc = kl), (t = Kp()), Eh(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            h = t,
            d = null;
          t: for (;;) {
            for (
              var f;
              h !== n || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h !== s || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (f = h.firstChild) !== null;

            )
              (d = h), (h = f);
            for (;;) {
              if (h === t) break t;
              if (
                (d === n && ++u === r && (l = o),
                d === s && ++c === i && (a = o),
                (f = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = f;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (cc = { focusedElem: t, selectionRange: n }, kl = !1, O = e; O !== null; )
    if (((e = O), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (O = t);
    else
      for (; O !== null; ) {
        e = O;
        try {
          var m = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    v = m.memoizedState,
                    p = e.stateNode,
                    g = p.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? y : Nt(e.type, y),
                      v,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var _ = e.stateNode.containerInfo;
                _.nodeType === 1
                  ? (_.textContent = "")
                  : _.nodeType === 9 &&
                    _.documentElement &&
                    _.removeChild(_.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          ye(e, e.return, E);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (O = t);
          break;
        }
        O = e.return;
      }
  return (m = jf), (jf = !1), m;
}
function Ps(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && Tc(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function ya(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Ic(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Bm(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Bm(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[bt], delete e[Vs], delete e[fc], delete e[u1], delete e[c1])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Vm(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Xf(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Vm(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Lc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Al));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Lc(t, e, n), t = t.sibling; t !== null; ) Lc(t, e, n), (t = t.sibling);
}
function kc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (kc(t, e, n), t = t.sibling; t !== null; ) kc(t, e, n), (t = t.sibling);
}
var Me = null,
  zt = !1;
function An(t, e, n) {
  for (n = n.child; n !== null; ) bm(t, e, n), (n = n.sibling);
}
function bm(t, e, n) {
  if (qt && typeof qt.onCommitFiberUnmount == "function")
    try {
      qt.onCommitFiberUnmount(ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Er(n, e);
    case 6:
      var i = Me,
        r = zt;
      (Me = null),
        An(t, e, n),
        (Me = i),
        (zt = r),
        Me !== null &&
          (zt
            ? ((t = Me),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null &&
        (zt
          ? ((t = Me),
            (n = n.stateNode),
            t.nodeType === 8
              ? gu(t.parentNode, n)
              : t.nodeType === 1 && gu(t, n),
            js(t))
          : gu(Me, n.stateNode));
      break;
    case 4:
      (i = Me),
        (r = zt),
        (Me = n.stateNode.containerInfo),
        (zt = !0),
        An(t, e, n),
        (Me = i),
        (zt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Tc(n, e, o),
            (r = r.next);
        } while (r !== i);
      }
      An(t, e, n);
      break;
    case 1:
      if (
        !je &&
        (Er(n, e),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (l) {
          ye(n, e, l);
        }
      An(t, e, n);
      break;
    case 21:
      An(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (i = je) || n.memoizedState !== null), An(t, e, n), (je = i))
        : An(t, e, n);
      break;
    default:
      An(t, e, n);
  }
}
function Uf(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new T1()),
      e.forEach(function (i) {
        var r = N1.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function Ot(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = t,
          o = e,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Me = l.stateNode), (zt = !1);
              break e;
            case 3:
              (Me = l.stateNode.containerInfo), (zt = !0);
              break e;
            case 4:
              (Me = l.stateNode.containerInfo), (zt = !0);
              break e;
          }
          l = l.return;
        }
        if (Me === null) throw Error(L(160));
        bm(s, o, r), (Me = null), (zt = !1);
        var a = r.alternate;
        a !== null && (a.return = null), (r.return = null);
      } catch (u) {
        ye(r, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Km(e, t), (e = e.sibling);
}
function Km(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(e, t), Bt(t), i & 4)) {
        try {
          Ps(3, t, t.return), ya(3, t);
        } catch (y) {
          ye(t, t.return, y);
        }
        try {
          Ps(5, t, t.return);
        } catch (y) {
          ye(t, t.return, y);
        }
      }
      break;
    case 1:
      Ot(e, t), Bt(t), i & 512 && n !== null && Er(n, n.return);
      break;
    case 5:
      if (
        (Ot(e, t),
        Bt(t),
        i & 512 && n !== null && Er(n, n.return),
        t.flags & 32)
      ) {
        var r = t.stateNode;
        try {
          Ns(r, "");
        } catch (y) {
          ye(t, t.return, y);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && gp(r, s),
              Ju(l, o);
            var u = Ju(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === "style"
                ? vp(r, h)
                : c === "dangerouslySetInnerHTML"
                  ? _p(r, h)
                  : c === "children"
                    ? Ns(r, h)
                    : lh(r, c, h, u);
            }
            switch (l) {
              case "input":
                Zu(r, s);
                break;
              case "textarea":
                pp(r, s);
                break;
              case "select":
                var d = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? Rr(r, !!s.multiple, f, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Rr(r, !!s.multiple, s.defaultValue, !0)
                      : Rr(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[Vs] = s;
          } catch (y) {
            ye(t, t.return, y);
          }
      }
      break;
    case 6:
      if ((Ot(e, t), Bt(t), i & 4)) {
        if (t.stateNode === null) throw Error(L(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (y) {
          ye(t, t.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ot(e, t), Bt(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          js(e.containerInfo);
        } catch (y) {
          ye(t, t.return, y);
        }
      break;
    case 4:
      Ot(e, t), Bt(t);
      break;
    case 13:
      Ot(e, t),
        Bt(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (jh = we())),
        i & 4 && Uf(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((je = (u = je) || c), Ot(e, t), (je = u)) : Ot(e, t),
        Bt(t),
        i & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (O = t, c = t.child; c !== null; ) {
            for (h = O = c; O !== null; ) {
              switch (((d = O), (f = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ps(4, d, d.return);
                  break;
                case 1:
                  Er(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (i = d), (n = d.return);
                    try {
                      (e = i),
                        (m.props = e.memoizedProps),
                        (m.state = e.memoizedState),
                        m.componentWillUnmount();
                    } catch (y) {
                      ye(i, n, y);
                    }
                  }
                  break;
                case 5:
                  Er(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Bf(h);
                    continue;
                  }
              }
              f !== null ? ((f.return = d), (O = f)) : Bf(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (r = h.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = yp("display", o)));
              } catch (y) {
                ye(t, t.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (y) {
                ye(t, t.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ot(e, t), Bt(t), i & 4 && Uf(t);
      break;
    case 21:
      break;
    default:
      Ot(e, t), Bt(t);
  }
}
function Bt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Vm(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (Ns(r, ""), (i.flags &= -33));
          var s = Xf(t);
          kc(t, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            l = Xf(t);
          Lc(t, l, o);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      ye(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function L1(t, e, n) {
  (O = t), Zm(t);
}
function Zm(t, e, n) {
  for (var i = (t.mode & 1) !== 0; O !== null; ) {
    var r = O,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || Ho;
      if (!o) {
        var l = r.alternate,
          a = (l !== null && l.memoizedState !== null) || je;
        l = Ho;
        var u = je;
        if (((Ho = o), (je = a) && !u))
          for (O = r; O !== null; )
            (o = O),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Vf(r)
                : a !== null
                  ? ((a.return = o), (O = a))
                  : Vf(r);
        for (; s !== null; ) (O = s), Zm(s), (s = s.sibling);
        (O = r), (Ho = l), (je = u);
      }
      Yf(t);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (O = s)) : Yf(t);
  }
}
function Yf(t) {
  for (; O !== null; ) {
    var e = O;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              je || ya(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !je)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Nt(e.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && Tf(e, s, i);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Tf(e, o, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && js(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        je || (e.flags & 512 && Ic(e));
      } catch (d) {
        ye(e, e.return, d);
      }
    }
    if (e === t) {
      O = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (O = n);
      break;
    }
    O = e.return;
  }
}
function Bf(t) {
  for (; O !== null; ) {
    var e = O;
    if (e === t) {
      O = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (O = n);
      break;
    }
    O = e.return;
  }
}
function Vf(t) {
  for (; O !== null; ) {
    var e = O;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            ya(4, e);
          } catch (a) {
            ye(e, n, a);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (a) {
              ye(e, r, a);
            }
          }
          var s = e.return;
          try {
            Ic(e);
          } catch (a) {
            ye(e, s, a);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Ic(e);
          } catch (a) {
            ye(e, o, a);
          }
      }
    } catch (a) {
      ye(e, e.return, a);
    }
    if (e === t) {
      O = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (O = l);
      break;
    }
    O = e.return;
  }
}
var k1 = Math.ceil,
  Yl = In.ReactCurrentDispatcher,
  Gh = In.ReactCurrentOwner,
  It = In.ReactCurrentBatchConfig,
  q = 0,
  Pe = null,
  Ce = null,
  Oe = 0,
  ht = 0,
  wr = gi(0),
  Te = 0,
  qs = null,
  Wi = 0,
  va = 0,
  Wh = 0,
  Ms = null,
  et = null,
  jh = 0,
  jr = 1 / 0,
  fn = null,
  Bl = !1,
  Pc = null,
  ni = null,
  $o = !1,
  Kn = null,
  Vl = 0,
  As = 0,
  Mc = null,
  vl = -1,
  El = 0;
function be() {
  return q & 6 ? we() : vl !== -1 ? vl : (vl = we());
}
function ii(t) {
  return t.mode & 1
    ? q & 2 && Oe !== 0
      ? Oe & -Oe
      : d1.transition !== null
        ? (El === 0 && (El = Mp()), El)
        : ((t = re),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Gp(t.type))),
          t)
    : 1;
}
function Xt(t, e, n, i) {
  if (50 < As) throw ((As = 0), (Mc = null), Error(L(185)));
  fo(t, n, i),
    (!(q & 2) || t !== Pe) &&
      (t === Pe && (!(q & 2) && (va |= n), Te === 4 && Bn(t, Oe)),
      at(t, i),
      n === 1 && q === 0 && !(e.mode & 1) && ((jr = we() + 500), pa && pi()));
}
function at(t, e) {
  var n = t.callbackNode;
  dy(t, e);
  var i = Ll(t, t === Pe ? Oe : 0);
  if (i === 0)
    n !== null && Jd(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && Jd(n), e === 1))
      t.tag === 0 ? h1(bf.bind(null, t)) : im(bf.bind(null, t)),
        l1(function () {
          !(q & 6) && pi();
        }),
        (n = null);
    else {
      switch (Ap(i)) {
        case 1:
          n = dh;
          break;
        case 4:
          n = kp;
          break;
        case 16:
          n = Il;
          break;
        case 536870912:
          n = Pp;
          break;
        default:
          n = Il;
      }
      n = n_(n, Hm.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Hm(t, e) {
  if (((vl = -1), (El = 0), q & 6)) throw Error(L(327));
  var n = t.callbackNode;
  if (Pr() && t.callbackNode !== n) return null;
  var i = Ll(t, t === Pe ? Oe : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = bl(t, i);
  else {
    e = i;
    var r = q;
    q |= 2;
    var s = qm();
    (Pe !== t || Oe !== e) && ((fn = null), (jr = we() + 500), Oi(t, e));
    do
      try {
        A1();
        break;
      } catch (l) {
        $m(t, l);
      }
    while (!0);
    Rh(),
      (Yl.current = s),
      (q = r),
      Ce !== null ? (e = 0) : ((Pe = null), (Oe = 0), (e = Te));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = rc(t)), r !== 0 && ((i = r), (e = Ac(t, r)))), e === 1)
    )
      throw ((n = qs), Oi(t, 0), Bn(t, i), at(t, we()), n);
    if (e === 6) Bn(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !P1(r) &&
          ((e = bl(t, i)),
          e === 2 && ((s = rc(t)), s !== 0 && ((i = s), (e = Ac(t, s)))),
          e === 1))
      )
        throw ((n = qs), Oi(t, 0), Bn(t, i), at(t, we()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Ci(t, et, fn);
          break;
        case 3:
          if (
            (Bn(t, i), (i & 130023424) === i && ((e = jh + 500 - we()), 10 < e))
          ) {
            if (Ll(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              be(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = dc(Ci.bind(null, t, et, fn), e);
            break;
          }
          Ci(t, et, fn);
          break;
        case 4:
          if ((Bn(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - jt(i);
            (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = we() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                  ? 480
                  : 1080 > i
                    ? 1080
                    : 1920 > i
                      ? 1920
                      : 3e3 > i
                        ? 3e3
                        : 4320 > i
                          ? 4320
                          : 1960 * k1(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = dc(Ci.bind(null, t, et, fn), i);
            break;
          }
          Ci(t, et, fn);
          break;
        case 5:
          Ci(t, et, fn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return at(t, we()), t.callbackNode === n ? Hm.bind(null, t) : null;
}
function Ac(t, e) {
  var n = Ms;
  return (
    t.current.memoizedState.isDehydrated && (Oi(t, e).flags |= 256),
    (t = bl(t, e)),
    t !== 2 && ((e = et), (et = n), e !== null && Oc(e)),
    t
  );
}
function Oc(t) {
  et === null ? (et = t) : et.push.apply(et, t);
}
function P1(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!Yt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Bn(t, e) {
  for (
    e &= ~Wh,
      e &= ~va,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - jt(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function bf(t) {
  if (q & 6) throw Error(L(327));
  Pr();
  var e = Ll(t, 0);
  if (!(e & 1)) return at(t, we()), null;
  var n = bl(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = rc(t);
    i !== 0 && ((e = i), (n = Ac(t, i)));
  }
  if (n === 1) throw ((n = qs), Oi(t, 0), Bn(t, e), at(t, we()), n);
  if (n === 6) throw Error(L(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Ci(t, et, fn),
    at(t, we()),
    null
  );
}
function Xh(t, e) {
  var n = q;
  q |= 1;
  try {
    return t(e);
  } finally {
    (q = n), q === 0 && ((jr = we() + 500), pa && pi());
  }
}
function ji(t) {
  Kn !== null && Kn.tag === 0 && !(q & 6) && Pr();
  var e = q;
  q |= 1;
  var n = It.transition,
    i = re;
  try {
    if (((It.transition = null), (re = 1), t)) return t();
  } finally {
    (re = i), (It.transition = n), (q = e), !(q & 6) && pi();
  }
}
function Uh() {
  (ht = wr.current), ue(wr);
}
function Oi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), o1(n)), Ce !== null))
    for (n = Ce.return; n !== null; ) {
      var i = n;
      switch ((xh(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Ol();
          break;
        case 3:
          Gr(), ue(ot), ue(Ye), Mh();
          break;
        case 5:
          Ph(i);
          break;
        case 4:
          Gr();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          Th(i.type._context);
          break;
        case 22:
        case 23:
          Uh();
      }
      n = n.return;
    }
  if (
    ((Pe = t),
    (Ce = t = ri(t.current, null)),
    (Oe = ht = e),
    (Te = 0),
    (qs = null),
    (Wh = va = Wi = 0),
    (et = Ms = null),
    Ii !== null)
  ) {
    for (e = 0; e < Ii.length; e++)
      if (((n = Ii[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    Ii = null;
  }
  return t;
}
function $m(t, e) {
  do {
    var n = Ce;
    try {
      if ((Rh(), (ml.current = Ul), Xl)) {
        for (var i = ge.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        Xl = !1;
      }
      if (
        ((Gi = 0),
        (Le = Re = ge = null),
        (ks = !1),
        (Zs = 0),
        (Gh.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (qs = e), (Ce = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          l = n,
          a = e;
        if (
          ((e = Oe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var f = Of(o);
          if (f !== null) {
            (f.flags &= -257),
              Ff(f, o, l, s, e),
              f.mode & 1 && Af(s, u, e),
              (e = f),
              (a = u);
            var m = e.updateQueue;
            if (m === null) {
              var y = new Set();
              y.add(a), (e.updateQueue = y);
            } else m.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              Af(s, u, e), Yh();
              break e;
            }
            a = Error(L(426));
          }
        } else if (de && l.mode & 1) {
          var v = Of(o);
          if (v !== null) {
            !(v.flags & 65536) && (v.flags |= 256),
              Ff(v, o, l, s, e),
              Ch(Wr(a, l));
            break e;
          }
        }
        (s = a = Wr(a, l)),
          Te !== 4 && (Te = 2),
          Ms === null ? (Ms = [s]) : Ms.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var p = Om(s, a, e);
              Rf(s, p);
              break e;
            case 1:
              l = a;
              var g = s.type,
                _ = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (ni === null || !ni.has(_))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var E = Fm(s, l, e);
                Rf(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Jm(n);
    } catch (w) {
      (e = w), Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qm() {
  var t = Yl.current;
  return (Yl.current = Ul), t === null ? Ul : t;
}
function Yh() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Pe === null || (!(Wi & 268435455) && !(va & 268435455)) || Bn(Pe, Oe);
}
function bl(t, e) {
  var n = q;
  q |= 2;
  var i = qm();
  (Pe !== t || Oe !== e) && ((fn = null), Oi(t, e));
  do
    try {
      M1();
      break;
    } catch (r) {
      $m(t, r);
    }
  while (!0);
  if ((Rh(), (q = n), (Yl.current = i), Ce !== null)) throw Error(L(261));
  return (Pe = null), (Oe = 0), Te;
}
function M1() {
  for (; Ce !== null; ) Qm(Ce);
}
function A1() {
  for (; Ce !== null && !iy(); ) Qm(Ce);
}
function Qm(t) {
  var e = t_(t.alternate, t, ht);
  (t.memoizedProps = t.pendingProps),
    e === null ? Jm(t) : (Ce = e),
    (Gh.current = null);
}
function Jm(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = R1(n, e)), n !== null)) {
        (n.flags &= 32767), (Ce = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Te = 6), (Ce = null);
        return;
      }
    } else if (((n = S1(n, e, ht)), n !== null)) {
      Ce = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Ce = e;
      return;
    }
    Ce = e = t;
  } while (e !== null);
  Te === 0 && (Te = 5);
}
function Ci(t, e, n) {
  var i = re,
    r = It.transition;
  try {
    (It.transition = null), (re = 1), O1(t, e, n, i);
  } finally {
    (It.transition = r), (re = i);
  }
  return null;
}
function O1(t, e, n, i) {
  do Pr();
  while (Kn !== null);
  if (q & 6) throw Error(L(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(L(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (fy(t, s),
    t === Pe && ((Ce = Pe = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $o ||
      (($o = !0),
      n_(Il, function () {
        return Pr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = It.transition), (It.transition = null);
    var o = re;
    re = 1;
    var l = q;
    (q |= 4),
      (Gh.current = null),
      I1(t, n),
      Km(n, t),
      Jy(cc),
      (kl = !!uc),
      (cc = uc = null),
      (t.current = n),
      L1(n),
      ry(),
      (q = l),
      (re = o),
      (It.transition = s);
  } else t.current = n;
  if (
    ($o && (($o = !1), (Kn = t), (Vl = r)),
    (s = t.pendingLanes),
    s === 0 && (ni = null),
    ly(n.stateNode),
    at(t, we()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (Bl) throw ((Bl = !1), (t = Pc), (Pc = null), t);
  return (
    Vl & 1 && t.tag !== 0 && Pr(),
    (s = t.pendingLanes),
    s & 1 ? (t === Mc ? As++ : ((As = 0), (Mc = t))) : (As = 0),
    pi(),
    null
  );
}
function Pr() {
  if (Kn !== null) {
    var t = Ap(Vl),
      e = It.transition,
      n = re;
    try {
      if (((It.transition = null), (re = 16 > t ? 16 : t), Kn === null))
        var i = !1;
      else {
        if (((t = Kn), (Kn = null), (Vl = 0), q & 6)) throw Error(L(331));
        var r = q;
        for (q |= 4, O = t.current; O !== null; ) {
          var s = O,
            o = s.child;
          if (O.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (O = h);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var d = c.sibling,
                        f = c.return;
                      if ((Bm(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = f), (O = d);
                        break;
                      }
                      O = f;
                    }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var v = y.sibling;
                    (y.sibling = null), (y = v);
                  } while (y !== null);
                }
              }
              O = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (O = o);
          else
            e: for (; O !== null; ) {
              if (((s = O), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ps(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (O = p);
                break e;
              }
              O = s.return;
            }
        }
        var g = t.current;
        for (O = g; O !== null; ) {
          o = O;
          var _ = o.child;
          if (o.subtreeFlags & 2064 && _ !== null) (_.return = o), (O = _);
          else
            e: for (o = g; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ya(9, l);
                  }
                } catch (w) {
                  ye(l, l.return, w);
                }
              if (l === o) {
                O = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (O = E);
                break e;
              }
              O = l.return;
            }
        }
        if (
          ((q = r), pi(), qt && typeof qt.onPostCommitFiberRoot == "function")
        )
          try {
            qt.onPostCommitFiberRoot(ca, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (re = n), (It.transition = e);
    }
  }
  return !1;
}
function Kf(t, e, n) {
  (e = Wr(n, e)),
    (e = Om(t, e, 1)),
    (t = ti(t, e, 1)),
    (e = be()),
    t !== null && (fo(t, 1, e), at(t, e));
}
function ye(t, e, n) {
  if (t.tag === 3) Kf(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Kf(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (ni === null || !ni.has(i)))
        ) {
          (t = Wr(n, t)),
            (t = Fm(e, t, 1)),
            (e = ti(e, t, 1)),
            (t = be()),
            e !== null && (fo(e, 1, t), at(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function F1(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = be()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Pe === t &&
      (Oe & n) === n &&
      (Te === 4 || (Te === 3 && (Oe & 130023424) === Oe && 500 > we() - jh)
        ? Oi(t, 0)
        : (Wh |= n)),
    at(t, e);
}
function e_(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = jo), (jo <<= 1), !(jo & 130023424) && (jo = 4194304))
      : (e = 1));
  var n = be();
  (t = xn(t, e)), t !== null && (fo(t, e, n), at(t, n));
}
function D1(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), e_(t, n);
}
function N1(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        r = t.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  i !== null && i.delete(e), e_(t, n);
}
var t_;
t_ = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || ot.current) st = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (st = !1), C1(t, e, n);
      st = !!(t.flags & 131072);
    }
  else (st = !1), de && e.flags & 1048576 && rm(e, Nl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      yl(t, e), (t = e.pendingProps);
      var r = Dr(e, Ye.current);
      kr(e, n), (r = Oh(null, e, i, t, r, n));
      var s = Fh();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            lt(i) ? ((s = !0), Fl(e)) : (s = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Lh(e),
            (r.updater = ma),
            (e.stateNode = r),
            (r._reactInternals = e),
            vc(e, i, t, n),
            (e = xc(null, e, i, !0, s, n)))
          : ((e.tag = 0), de && s && wh(e), Ve(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (yl(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = G1(i)),
          (t = Nt(i, t)),
          r)
        ) {
          case 0:
            e = wc(null, e, i, t, n);
            break e;
          case 1:
            e = zf(null, e, i, t, n);
            break e;
          case 11:
            e = Df(null, e, i, t, n);
            break e;
          case 14:
            e = Nf(null, e, i, Nt(i.type, t), n);
            break e;
        }
        throw Error(L(306, i, ""));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Nt(i, r)),
        wc(t, e, i, r, n)
      );
    case 1:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Nt(i, r)),
        zf(t, e, i, r, n)
      );
    case 3:
      e: {
        if ((Gm(e), t === null)) throw Error(L(387));
        (i = e.pendingProps),
          (s = e.memoizedState),
          (r = s.element),
          am(t, e),
          Wl(e, i, null, n);
        var o = e.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (r = Wr(Error(L(423)), e)), (e = Gf(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = Wr(Error(L(424)), e)), (e = Gf(t, e, i, n, r));
            break e;
          } else
            for (
              ft = ei(e.stateNode.containerInfo.firstChild),
                pt = e,
                de = !0,
                Gt = null,
                n = dm(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nr(), i === r)) {
            e = Cn(t, e, n);
            break e;
          }
          Ve(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        fm(e),
        t === null && mc(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = r.children),
        hc(i, r) ? (o = null) : s !== null && hc(i, s) && (e.flags |= 32),
        zm(t, e),
        Ve(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && mc(e), null;
    case 13:
      return Wm(t, e, n);
    case 4:
      return (
        kh(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = zr(e, null, i, n)) : Ve(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Nt(i, r)),
        Df(t, e, i, r, n)
      );
    case 7:
      return Ve(t, e, e.pendingProps, n), e.child;
    case 8:
      return Ve(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Ve(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (o = r.value),
          le(zl, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (Yt(s.value, o)) {
            if (s.children === r.children && !ot.current) {
              e = Cn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === i) {
                    if (s.tag === 1) {
                      (a = _n(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      _c(s.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(L(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  _c(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ve(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        kr(e, n),
        (r = Lt(r)),
        (i = i(r)),
        (e.flags |= 1),
        Ve(t, e, i, n),
        e.child
      );
    case 14:
      return (
        (i = e.type),
        (r = Nt(i, e.pendingProps)),
        (r = Nt(i.type, r)),
        Nf(t, e, i, r, n)
      );
    case 15:
      return Dm(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Nt(i, r)),
        yl(t, e),
        (e.tag = 1),
        lt(i) ? ((t = !0), Fl(e)) : (t = !1),
        kr(e, n),
        cm(e, i, r),
        vc(e, i, r, n),
        xc(null, e, i, !0, t, n)
      );
    case 19:
      return jm(t, e, n);
    case 22:
      return Nm(t, e, n);
  }
  throw Error(L(156, e.tag));
};
function n_(t, e) {
  return Lp(t, e);
}
function z1(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Tt(t, e, n, i) {
  return new z1(t, e, n, i);
}
function Bh(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function G1(t) {
  if (typeof t == "function") return Bh(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === uh)) return 11;
    if (t === ch) return 14;
  }
  return 2;
}
function ri(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Tt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function wl(t, e, n, i, r, s) {
  var o = 2;
  if (((i = t), typeof t == "function")) Bh(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case hr:
        return Fi(n.children, r, s, e);
      case ah:
        (o = 8), (r |= 8);
        break;
      case Yu:
        return (
          (t = Tt(12, n, e, r | 2)), (t.elementType = Yu), (t.lanes = s), t
        );
      case Bu:
        return (t = Tt(13, n, e, r)), (t.elementType = Bu), (t.lanes = s), t;
      case Vu:
        return (t = Tt(19, n, e, r)), (t.elementType = Vu), (t.lanes = s), t;
      case hp:
        return Ea(n, r, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case up:
              o = 10;
              break e;
            case cp:
              o = 9;
              break e;
            case uh:
              o = 11;
              break e;
            case ch:
              o = 14;
              break e;
            case Wn:
              (o = 16), (i = null);
              break e;
          }
        throw Error(L(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Tt(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e
  );
}
function Fi(t, e, n, i) {
  return (t = Tt(7, t, i, e)), (t.lanes = n), t;
}
function Ea(t, e, n, i) {
  return (
    (t = Tt(22, t, i, e)),
    (t.elementType = hp),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function xu(t, e, n) {
  return (t = Tt(6, t, null, e)), (t.lanes = n), t;
}
function Cu(t, e, n) {
  return (
    (e = Tt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function W1(t, e, n, i, r) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = iu(0)),
    (this.expirationTimes = iu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = iu(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Vh(t, e, n, i, r, s, o, l, a) {
  return (
    (t = new W1(t, e, n, l, a)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Tt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Lh(s),
    t
  );
}
function j1(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cr,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function i_(t) {
  if (!t) return li;
  t = t._reactInternals;
  e: {
    if (Yi(t) !== t || t.tag !== 1) throw Error(L(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (lt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(L(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (lt(n)) return nm(t, n, e);
  }
  return e;
}
function r_(t, e, n, i, r, s, o, l, a) {
  return (
    (t = Vh(n, i, !0, t, r, s, o, l, a)),
    (t.context = i_(null)),
    (n = t.current),
    (i = be()),
    (r = ii(n)),
    (s = _n(i, r)),
    (s.callback = e ?? null),
    ti(n, s, r),
    (t.current.lanes = r),
    fo(t, r, i),
    at(t, i),
    t
  );
}
function wa(t, e, n, i) {
  var r = e.current,
    s = be(),
    o = ii(r);
  return (
    (n = i_(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = _n(s, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = ti(r, e, o)),
    t !== null && (Xt(t, r, o, s), pl(t, r, o)),
    o
  );
}
function Kl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Zf(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function bh(t, e) {
  Zf(t, e), (t = t.alternate) && Zf(t, e);
}
function X1() {
  return null;
}
var s_ =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Kh(t) {
  this._internalRoot = t;
}
xa.prototype.render = Kh.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(L(409));
  wa(t, e, null, null);
};
xa.prototype.unmount = Kh.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    ji(function () {
      wa(null, t, null, null);
    }),
      (e[wn] = null);
  }
};
function xa(t) {
  this._internalRoot = t;
}
xa.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Dp();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Yn.length && e !== 0 && e < Yn[n].priority; n++);
    Yn.splice(n, 0, t), n === 0 && zp(t);
  }
};
function Zh(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Ca(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hf() {}
function U1(t, e, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Kl(o);
        s.call(u);
      };
    }
    var o = r_(e, i, t, 0, null, !1, !1, "", Hf);
    return (
      (t._reactRootContainer = o),
      (t[wn] = o.current),
      Ys(t.nodeType === 8 ? t.parentNode : t),
      ji(),
      o
    );
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == "function") {
    var l = i;
    i = function () {
      var u = Kl(a);
      l.call(u);
    };
  }
  var a = Vh(t, 0, !1, null, null, !1, !1, "", Hf);
  return (
    (t._reactRootContainer = a),
    (t[wn] = a.current),
    Ys(t.nodeType === 8 ? t.parentNode : t),
    ji(function () {
      wa(e, a, n, i);
    }),
    a
  );
}
function Sa(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = Kl(o);
        l.call(a);
      };
    }
    wa(e, o, t, r);
  } else o = U1(n, e, t, r, i);
  return Kl(o);
}
Op = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = vs(e.pendingLanes);
        n !== 0 &&
          (fh(e, n | 1), at(e, we()), !(q & 6) && ((jr = we() + 500), pi()));
      }
      break;
    case 13:
      ji(function () {
        var i = xn(t, 1);
        if (i !== null) {
          var r = be();
          Xt(i, t, 1, r);
        }
      }),
        bh(t, 1);
  }
};
gh = function (t) {
  if (t.tag === 13) {
    var e = xn(t, 134217728);
    if (e !== null) {
      var n = be();
      Xt(e, t, 134217728, n);
    }
    bh(t, 134217728);
  }
};
Fp = function (t) {
  if (t.tag === 13) {
    var e = ii(t),
      n = xn(t, e);
    if (n !== null) {
      var i = be();
      Xt(n, t, e, i);
    }
    bh(t, e);
  }
};
Dp = function () {
  return re;
};
Np = function (t, e) {
  var n = re;
  try {
    return (re = t), e();
  } finally {
    re = n;
  }
};
tc = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Zu(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var r = ga(i);
            if (!r) throw Error(L(90));
            fp(i), Zu(i, r);
          }
        }
      }
      break;
    case "textarea":
      pp(t, n);
      break;
    case "select":
      (e = n.value), e != null && Rr(t, !!n.multiple, e, !1);
  }
};
xp = Xh;
Cp = ji;
var Y1 = { usingClientEntryPoint: !1, Events: [po, pr, ga, Ep, wp, Xh] },
  ds = {
    findFiberByHostInstance: Ti,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  B1 = {
    bundleType: ds.bundleType,
    version: ds.version,
    rendererPackageName: ds.rendererPackageName,
    rendererConfig: ds.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: In.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Tp(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: ds.findFiberByHostInstance || X1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qo.isDisabled && qo.supportsFiber)
    try {
      (ca = qo.inject(B1)), (qt = qo);
    } catch {}
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y1;
yt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zh(e)) throw Error(L(200));
  return j1(t, e, null, n);
};
yt.createRoot = function (t, e) {
  if (!Zh(t)) throw Error(L(299));
  var n = !1,
    i = "",
    r = s_;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = Vh(t, 1, !1, null, null, n, !1, i, r)),
    (t[wn] = e.current),
    Ys(t.nodeType === 8 ? t.parentNode : t),
    new Kh(e)
  );
};
yt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(L(188))
      : ((t = Object.keys(t).join(",")), Error(L(268, t)));
  return (t = Tp(e)), (t = t === null ? null : t.stateNode), t;
};
yt.flushSync = function (t) {
  return ji(t);
};
yt.hydrate = function (t, e, n) {
  if (!Ca(e)) throw Error(L(200));
  return Sa(null, t, e, !0, n);
};
yt.hydrateRoot = function (t, e, n) {
  if (!Zh(t)) throw Error(L(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = s_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = r_(e, null, t, 1, n ?? null, r, !1, s, o)),
    (t[wn] = e.current),
    Ys(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new xa(e);
};
yt.render = function (t, e, n) {
  if (!Ca(e)) throw Error(L(200));
  return Sa(null, t, e, !1, n);
};
yt.unmountComponentAtNode = function (t) {
  if (!Ca(t)) throw Error(L(40));
  return t._reactRootContainer
    ? (ji(function () {
        Sa(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[wn] = null);
        });
      }),
      !0)
    : !1;
};
yt.unstable_batchedUpdates = Xh;
yt.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!Ca(n)) throw Error(L(200));
  if (t == null || t._reactInternals === void 0) throw Error(L(38));
  return Sa(t, e, n, !1, i);
};
yt.version = "18.2.0-next-9e3b772b8-20220608";
function o_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o_);
    } catch (t) {
      console.error(t);
    }
}
o_(), (rp.exports = yt);
var V1 = rp.exports,
  $f = V1;
(Xu.createRoot = $f.createRoot), (Xu.hydrateRoot = $f.hydrateRoot);
class Ln {
  constructor(e) {
    this.propagationStopped,
      this.defaultPrevented,
      (this.type = e),
      (this.target = null);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
const Xr = { PROPERTYCHANGE: "propertychange" };
class Hh {
  constructor() {
    this.disposed = !1;
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal());
  }
  disposeInternal() {}
}
function b1(t, e, n) {
  let i, r;
  n = n || ai;
  let s = 0,
    o = t.length,
    l = !1;
  for (; s < o; )
    (i = s + ((o - s) >> 1)),
      (r = +n(t[i], e)),
      r < 0 ? (s = i + 1) : ((o = i), (l = !r));
  return l ? s : ~s;
}
function ai(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
}
function $h(t, e, n) {
  if (t[0] <= e) return 0;
  const i = t.length;
  if (e <= t[i - 1]) return i - 1;
  if (typeof n == "function") {
    for (let r = 1; r < i; ++r) {
      const s = t[r];
      if (s === e) return r;
      if (s < e) return n(e, t[r - 1], s) > 0 ? r - 1 : r;
    }
    return i - 1;
  }
  if (n > 0) {
    for (let r = 1; r < i; ++r) if (t[r] < e) return r - 1;
    return i - 1;
  }
  if (n < 0) {
    for (let r = 1; r < i; ++r) if (t[r] <= e) return r;
    return i - 1;
  }
  for (let r = 1; r < i; ++r) {
    if (t[r] == e) return r;
    if (t[r] < e) return t[r - 1] - e < e - t[r] ? r - 1 : r;
  }
  return i - 1;
}
function K1(t, e, n) {
  for (; e < n; ) {
    const i = t[e];
    (t[e] = t[n]), (t[n] = i), ++e, --n;
  }
}
function Jt(t, e) {
  const n = Array.isArray(e) ? e : [e],
    i = n.length;
  for (let r = 0; r < i; r++) t[t.length] = n[r];
}
function mi(t, e) {
  const n = t.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
  return !0;
}
function Z1(t, e, n) {
  const i = e || ai;
  return t.every(function (r, s) {
    if (s === 0) return !0;
    const o = i(t[s - 1], r);
    return !(o > 0 || (n && o === 0));
  });
}
function Qs() {
  return !0;
}
function Ra() {
  return !1;
}
function Ur() {}
function l_(t) {
  let e = !1,
    n,
    i,
    r;
  return function () {
    const s = Array.prototype.slice.call(arguments);
    return (
      (!e || this !== r || !mi(s, i)) &&
        ((e = !0), (r = this), (i = s), (n = t.apply(this, arguments))),
      n
    );
  };
}
function _o(t) {
  for (const e in t) delete t[e];
}
function Xi(t) {
  let e;
  for (e in t) return !1;
  return !e;
}
class Ta extends Hh {
  constructor(e) {
    super(),
      (this.eventTarget_ = e),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null);
  }
  addEventListener(e, n) {
    if (!e || !n) return;
    const i = this.listeners_ || (this.listeners_ = {}),
      r = i[e] || (i[e] = []);
    r.includes(n) || r.push(n);
  }
  dispatchEvent(e) {
    const n = typeof e == "string",
      i = n ? e : e.type,
      r = this.listeners_ && this.listeners_[i];
    if (!r) return;
    const s = n ? new Ln(e) : e;
    s.target || (s.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}),
      l = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    i in o || ((o[i] = 0), (l[i] = 0)), ++o[i];
    let a;
    for (let u = 0, c = r.length; u < c; ++u)
      if (
        ("handleEvent" in r[u]
          ? (a = r[u].handleEvent(s))
          : (a = r[u].call(this, s)),
        a === !1 || s.propagationStopped)
      ) {
        a = !1;
        break;
      }
    if (--o[i] === 0) {
      let u = l[i];
      for (delete l[i]; u--; ) this.removeEventListener(i, Ur);
      delete o[i];
    }
    return a;
  }
  disposeInternal() {
    this.listeners_ && _o(this.listeners_);
  }
  getListeners(e) {
    return (this.listeners_ && this.listeners_[e]) || void 0;
  }
  hasListener(e) {
    return this.listeners_
      ? e
        ? e in this.listeners_
        : Object.keys(this.listeners_).length > 0
      : !1;
  }
  removeEventListener(e, n) {
    if (!this.listeners_) return;
    const i = this.listeners_[e];
    if (!i) return;
    const r = i.indexOf(n);
    r !== -1 &&
      (this.pendingRemovals_ && e in this.pendingRemovals_
        ? ((i[r] = Ur), ++this.pendingRemovals_[e])
        : (i.splice(r, 1), i.length === 0 && delete this.listeners_[e]));
  }
}
const V = {
  CHANGE: "change",
  ERROR: "error",
  BLUR: "blur",
  CLEAR: "clear",
  CONTEXTMENU: "contextmenu",
  CLICK: "click",
  DBLCLICK: "dblclick",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DROP: "drop",
  FOCUS: "focus",
  KEYDOWN: "keydown",
  KEYPRESS: "keypress",
  LOAD: "load",
  RESIZE: "resize",
  TOUCHMOVE: "touchmove",
  WHEEL: "wheel",
};
function $(t, e, n, i, r) {
  if ((i && i !== t && (n = n.bind(i)), r)) {
    const o = n;
    n = function () {
      t.removeEventListener(e, n), o.apply(this, arguments);
    };
  }
  const s = { target: t, type: e, listener: n };
  return t.addEventListener(e, n), s;
}
function Zl(t, e, n, i) {
  return $(t, e, n, i, !0);
}
function ce(t) {
  t && t.target && (t.target.removeEventListener(t.type, t.listener), _o(t));
}
class yo extends Ta {
  constructor() {
    super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0);
  }
  changed() {
    ++this.revision_, this.dispatchEvent(V.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(e, n) {
    if (Array.isArray(e)) {
      const i = e.length,
        r = new Array(i);
      for (let s = 0; s < i; ++s) r[s] = $(this, e[s], n);
      return r;
    }
    return $(this, e, n);
  }
  onceInternal(e, n) {
    let i;
    if (Array.isArray(e)) {
      const r = e.length;
      i = new Array(r);
      for (let s = 0; s < r; ++s) i[s] = Zl(this, e[s], n);
    } else i = Zl(this, e, n);
    return (n.ol_key = i), i;
  }
  unInternal(e, n) {
    const i = n.ol_key;
    if (i) H1(i);
    else if (Array.isArray(e))
      for (let r = 0, s = e.length; r < s; ++r)
        this.removeEventListener(e[r], n);
    else this.removeEventListener(e, n);
  }
}
yo.prototype.on;
yo.prototype.once;
yo.prototype.un;
function H1(t) {
  if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) ce(t[e]);
  else ce(t);
}
function W() {
  throw new Error("Unimplemented abstract method.");
}
let $1 = 0;
function ee(t) {
  return t.ol_uid || (t.ol_uid = String(++$1));
}
class qf extends Ln {
  constructor(e, n, i) {
    super(e), (this.key = n), (this.oldValue = i);
  }
}
class nn extends yo {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      ee(this),
      (this.values_ = null),
      e !== void 0 && this.setProperties(e);
  }
  get(e) {
    let n;
    return (
      this.values_ && this.values_.hasOwnProperty(e) && (n = this.values_[e]), n
    );
  }
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || [];
  }
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(e, n) {
    let i;
    (i = `change:${e}`),
      this.hasListener(i) && this.dispatchEvent(new qf(i, e, n)),
      (i = Xr.PROPERTYCHANGE),
      this.hasListener(i) && this.dispatchEvent(new qf(i, e, n));
  }
  addChangeListener(e, n) {
    this.addEventListener(`change:${e}`, n);
  }
  removeChangeListener(e, n) {
    this.removeEventListener(`change:${e}`, n);
  }
  set(e, n, i) {
    const r = this.values_ || (this.values_ = {});
    if (i) r[e] = n;
    else {
      const s = r[e];
      (r[e] = n), s !== n && this.notify(e, s);
    }
  }
  setProperties(e, n) {
    for (const i in e) this.set(i, e[i], n);
  }
  applyProperties(e) {
    e.values_ && Object.assign(this.values_ || (this.values_ = {}), e.values_);
  }
  unset(e, n) {
    if (this.values_ && e in this.values_) {
      const i = this.values_[e];
      delete this.values_[e],
        Xi(this.values_) && (this.values_ = null),
        n || this.notify(e, i);
    }
  }
}
const tt = { ADD: "add", REMOVE: "remove" },
  Qf = { LENGTH: "length" };
class Qo extends Ln {
  constructor(e, n, i) {
    super(e), (this.element = n), (this.index = i);
  }
}
class Ht extends nn {
  constructor(e, n) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (n = n || {}),
      (this.unique_ = !!n.unique),
      (this.array_ = e || []),
      this.unique_)
    )
      for (let i = 0, r = this.array_.length; i < r; ++i)
        this.assertUnique_(this.array_[i], i);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop();
  }
  extend(e) {
    for (let n = 0, i = e.length; n < i; ++n) this.push(e[n]);
    return this;
  }
  forEach(e) {
    const n = this.array_;
    for (let i = 0, r = n.length; i < r; ++i) e(n[i], i, n);
  }
  getArray() {
    return this.array_;
  }
  item(e) {
    return this.array_[e];
  }
  getLength() {
    return this.get(Qf.LENGTH);
  }
  insertAt(e, n) {
    if (e < 0 || e > this.getLength())
      throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(n),
      this.array_.splice(e, 0, n),
      this.updateLength_(),
      this.dispatchEvent(new Qo(tt.ADD, n, e));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(e) {
    this.unique_ && this.assertUnique_(e);
    const n = this.getLength();
    return this.insertAt(n, e), this.getLength();
  }
  remove(e) {
    const n = this.array_;
    for (let i = 0, r = n.length; i < r; ++i)
      if (n[i] === e) return this.removeAt(i);
  }
  removeAt(e) {
    if (e < 0 || e >= this.getLength()) return;
    const n = this.array_[e];
    return (
      this.array_.splice(e, 1),
      this.updateLength_(),
      this.dispatchEvent(new Qo(tt.REMOVE, n, e)),
      n
    );
  }
  setAt(e, n) {
    const i = this.getLength();
    if (e >= i) {
      this.insertAt(e, n);
      return;
    }
    if (e < 0) throw new Error("Index out of bounds: " + e);
    this.unique_ && this.assertUnique_(n, e);
    const r = this.array_[e];
    (this.array_[e] = n),
      this.dispatchEvent(new Qo(tt.REMOVE, r, e)),
      this.dispatchEvent(new Qo(tt.ADD, n, e));
  }
  updateLength_() {
    this.set(Qf.LENGTH, this.array_.length);
  }
  assertUnique_(e, n) {
    for (let i = 0, r = this.array_.length; i < r; ++i)
      if (this.array_[i] === e && i !== n)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function Q(t, e) {
  if (!t) throw new Error(e);
}
class Ia extends nn {
  constructor(e) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (this.id_ = void 0),
      (this.geometryName_ = "geometry"),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      (this.geometryChangeKey_ = null),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      e)
    )
      if (typeof e.getSimplifiedGeometry == "function") {
        const n = e;
        this.setGeometry(n);
      } else {
        const n = e;
        this.setProperties(n);
      }
  }
  clone() {
    const e = new Ia(this.hasProperties() ? this.getProperties() : null);
    e.setGeometryName(this.getGeometryName());
    const n = this.getGeometry();
    n && e.setGeometry(n.clone());
    const i = this.getStyle();
    return i && e.setStyle(i), e;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ &&
      (ce(this.geometryChangeKey_), (this.geometryChangeKey_ = null));
    const e = this.getGeometry();
    e &&
      (this.geometryChangeKey_ = $(
        e,
        V.CHANGE,
        this.handleGeometryChange_,
        this,
      )),
      this.changed();
  }
  setGeometry(e) {
    this.set(this.geometryName_, e);
  }
  setStyle(e) {
    (this.style_ = e),
      (this.styleFunction_ = e ? q1(e) : void 0),
      this.changed();
  }
  setId(e) {
    (this.id_ = e), this.changed();
  }
  setGeometryName(e) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_),
      (this.geometryName_ = e),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      this.handleGeometryChanged_();
  }
}
function q1(t) {
  if (typeof t == "function") return t;
  let e;
  return (
    Array.isArray(t)
      ? (e = t)
      : (Q(
          typeof t.getZIndex == "function",
          "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
        ),
        (e = [t])),
    function () {
      return e;
    }
  );
}
const ui =
    typeof navigator < "u" && typeof navigator.userAgent < "u"
      ? navigator.userAgent.toLowerCase()
      : "",
  Q1 = ui.includes("firefox"),
  J1 = ui.includes("safari") && !ui.includes("chrom");
J1 &&
  (ui.includes("version/15.4") ||
    /cpu (os|iphone os) 15_4 like mac os x/.test(ui));
const ev = ui.includes("webkit") && !ui.includes("edge"),
  a_ = ui.includes("macintosh"),
  u_ = typeof devicePixelRatio < "u" ? devicePixelRatio : 1,
  qh =
    typeof WorkerGlobalScope < "u" &&
    typeof OffscreenCanvas < "u" &&
    self instanceof WorkerGlobalScope,
  c_ = typeof Image < "u" && Image.prototype.decode,
  h_ = (function () {
    let t = !1;
    try {
      const e = Object.defineProperty({}, "passive", {
        get: function () {
          t = !0;
        },
      });
      window.addEventListener("_", null, e),
        window.removeEventListener("_", null, e);
    } catch {}
    return t;
  })();
new Array(6);
function Ut() {
  return [1, 0, 0, 1, 0, 0];
}
function tv(t, e, n, i, r, s, o) {
  return (
    (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), (t[4] = s), (t[5] = o), t
  );
}
function nv(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    t
  );
}
function ke(t, e) {
  const n = e[0],
    i = e[1];
  return (
    (e[0] = t[0] * n + t[2] * i + t[4]), (e[1] = t[1] * n + t[3] * i + t[5]), e
  );
}
function iv(t, e, n) {
  return tv(t, e, 0, 0, n, 0, 0);
}
function Sn(t, e, n, i, r, s, o, l) {
  const a = Math.sin(s),
    u = Math.cos(s);
  return (
    (t[0] = i * u),
    (t[1] = r * a),
    (t[2] = -i * a),
    (t[3] = r * u),
    (t[4] = o * i * u - l * i * a + e),
    (t[5] = o * r * a + l * r * u + n),
    t
  );
}
function Qh(t, e) {
  const n = rv(e);
  Q(n !== 0, "Transformation matrix cannot be inverted");
  const i = e[0],
    r = e[1],
    s = e[2],
    o = e[3],
    l = e[4],
    a = e[5];
  return (
    (t[0] = o / n),
    (t[1] = -r / n),
    (t[2] = -s / n),
    (t[3] = i / n),
    (t[4] = (s * a - o * l) / n),
    (t[5] = -(i * a - r * l) / n),
    t
  );
}
function rv(t) {
  return t[0] * t[3] - t[1] * t[2];
}
let Jf;
function d_(t) {
  const e = "matrix(" + t.join(", ") + ")";
  if (qh) return e;
  const n = Jf || (Jf = document.createElement("div"));
  return (n.style.transform = e), n.style.transform;
}
const Ie = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16,
};
function eg(t) {
  const e = Pt();
  for (let n = 0, i = t.length; n < i; ++n) Os(e, t[n]);
  return e;
}
function sv(t, e, n) {
  const i = Math.min.apply(null, t),
    r = Math.min.apply(null, e),
    s = Math.max.apply(null, t),
    o = Math.max.apply(null, e);
  return Rn(i, r, s, o, n);
}
function Jh(t, e, n) {
  return n
    ? ((n[0] = t[0] - e),
      (n[1] = t[1] - e),
      (n[2] = t[2] + e),
      (n[3] = t[3] + e),
      n)
    : [t[0] - e, t[1] - e, t[2] + e, t[3] + e];
}
function f_(t, e) {
  return e
    ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
    : t.slice();
}
function Bi(t, e, n) {
  let i, r;
  return (
    e < t[0] ? (i = t[0] - e) : t[2] < e ? (i = e - t[2]) : (i = 0),
    n < t[1] ? (r = t[1] - n) : t[3] < n ? (r = n - t[3]) : (r = 0),
    i * i + r * r
  );
}
function La(t, e) {
  return ed(t, e[0], e[1]);
}
function xr(t, e) {
  return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3];
}
function ed(t, e, n) {
  return t[0] <= e && e <= t[2] && t[1] <= n && n <= t[3];
}
function Fc(t, e) {
  const n = t[0],
    i = t[1],
    r = t[2],
    s = t[3],
    o = e[0],
    l = e[1];
  let a = Ie.UNKNOWN;
  return (
    o < n ? (a = a | Ie.LEFT) : o > r && (a = a | Ie.RIGHT),
    l < i ? (a = a | Ie.BELOW) : l > s && (a = a | Ie.ABOVE),
    a === Ie.UNKNOWN && (a = Ie.INTERSECTING),
    a
  );
}
function Pt() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Rn(t, e, n, i, r) {
  return r ? ((r[0] = t), (r[1] = e), (r[2] = n), (r[3] = i), r) : [t, e, n, i];
}
function $r(t) {
  return Rn(1 / 0, 1 / 0, -1 / 0, -1 / 0, t);
}
function g_(t, e) {
  const n = t[0],
    i = t[1];
  return Rn(n, i, n, i, e);
}
function td(t, e, n, i, r) {
  const s = $r(r);
  return m_(s, t, e, n, i);
}
function Js(t, e) {
  return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3];
}
function p_(t, e) {
  return (
    e[0] < t[0] && (t[0] = e[0]),
    e[2] > t[2] && (t[2] = e[2]),
    e[1] < t[1] && (t[1] = e[1]),
    e[3] > t[3] && (t[3] = e[3]),
    t
  );
}
function Os(t, e) {
  e[0] < t[0] && (t[0] = e[0]),
    e[0] > t[2] && (t[2] = e[0]),
    e[1] < t[1] && (t[1] = e[1]),
    e[1] > t[3] && (t[3] = e[1]);
}
function m_(t, e, n, i, r) {
  for (; n < i; n += r) ov(t, e[n], e[n + 1]);
  return t;
}
function ov(t, e, n) {
  (t[0] = Math.min(t[0], e)),
    (t[1] = Math.min(t[1], n)),
    (t[2] = Math.max(t[2], e)),
    (t[3] = Math.max(t[3], n));
}
function __(t, e) {
  let n;
  return (
    (n = e(ka(t))),
    n || ((n = e(Pa(t))), n) || ((n = e(Ma(t))), n) || ((n = e(Vi(t))), n)
      ? n
      : !1
  );
}
function Dc(t) {
  let e = 0;
  return vo(t) || (e = oe(t) * mt(t)), e;
}
function ka(t) {
  return [t[0], t[1]];
}
function Pa(t) {
  return [t[2], t[1]];
}
function ci(t) {
  return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2];
}
function lv(t, e) {
  let n;
  if (e === "bottom-left") n = ka(t);
  else if (e === "bottom-right") n = Pa(t);
  else if (e === "top-left") n = Vi(t);
  else if (e === "top-right") n = Ma(t);
  else throw new Error("Invalid corner");
  return n;
}
function Nc(t, e, n, i, r) {
  const [s, o, l, a, u, c, h, d] = zc(t, e, n, i);
  return Rn(
    Math.min(s, l, u, h),
    Math.min(o, a, c, d),
    Math.max(s, l, u, h),
    Math.max(o, a, c, d),
    r,
  );
}
function zc(t, e, n, i) {
  const r = (e * i[0]) / 2,
    s = (e * i[1]) / 2,
    o = Math.cos(n),
    l = Math.sin(n),
    a = r * o,
    u = r * l,
    c = s * o,
    h = s * l,
    d = t[0],
    f = t[1];
  return [
    d - a + h,
    f - u - c,
    d - a - h,
    f - u + c,
    d + a - h,
    f + u + c,
    d + a + h,
    f + u - c,
    d - a + h,
    f - u - c,
  ];
}
function mt(t) {
  return t[3] - t[1];
}
function Fs(t, e, n) {
  const i = n || Pt();
  return (
    it(t, e)
      ? (t[0] > e[0] ? (i[0] = t[0]) : (i[0] = e[0]),
        t[1] > e[1] ? (i[1] = t[1]) : (i[1] = e[1]),
        t[2] < e[2] ? (i[2] = t[2]) : (i[2] = e[2]),
        t[3] < e[3] ? (i[3] = t[3]) : (i[3] = e[3]))
      : $r(i),
    i
  );
}
function Vi(t) {
  return [t[0], t[3]];
}
function Ma(t) {
  return [t[2], t[3]];
}
function oe(t) {
  return t[2] - t[0];
}
function it(t, e) {
  return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1];
}
function vo(t) {
  return t[2] < t[0] || t[3] < t[1];
}
function av(t, e) {
  return e
    ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
    : t;
}
function uv(t, e, n) {
  let i = !1;
  const r = Fc(t, e),
    s = Fc(t, n);
  if (r === Ie.INTERSECTING || s === Ie.INTERSECTING) i = !0;
  else {
    const o = t[0],
      l = t[1],
      a = t[2],
      u = t[3],
      c = e[0],
      h = e[1],
      d = n[0],
      f = n[1],
      m = (f - h) / (d - c);
    let y, v;
    s & Ie.ABOVE &&
      !(r & Ie.ABOVE) &&
      ((y = d - (f - u) / m), (i = y >= o && y <= a)),
      !i &&
        s & Ie.RIGHT &&
        !(r & Ie.RIGHT) &&
        ((v = f - (d - a) * m), (i = v >= l && v <= u)),
      !i &&
        s & Ie.BELOW &&
        !(r & Ie.BELOW) &&
        ((y = d - (f - l) / m), (i = y >= o && y <= a)),
      !i &&
        s & Ie.LEFT &&
        !(r & Ie.LEFT) &&
        ((v = f - (d - o) * m), (i = v >= l && v <= u));
  }
  return i;
}
function cv(t, e, n, i) {
  if (vo(t)) return $r(n);
  let r = [];
  if (i > 1) {
    const l = t[2] - t[0],
      a = t[3] - t[1];
    for (let u = 0; u < i; ++u)
      r.push(
        t[0] + (l * u) / i,
        t[1],
        t[2],
        t[1] + (a * u) / i,
        t[2] - (l * u) / i,
        t[3],
        t[0],
        t[3] - (a * u) / i,
      );
  } else r = [t[0], t[1], t[2], t[1], t[2], t[3], t[0], t[3]];
  e(r, r, 2);
  const s = [],
    o = [];
  for (let l = 0, a = r.length; l < a; l += 2) s.push(r[l]), o.push(r[l + 1]);
  return sv(s, o, n);
}
function y_(t, e) {
  const n = e.getExtent(),
    i = ci(t);
  if (e.canWrapX() && (i[0] < n[0] || i[0] >= n[2])) {
    const r = oe(n),
      o = Math.floor((i[0] - n[0]) / r) * r;
    (t[0] -= o), (t[2] -= o);
  }
  return t;
}
function hv(t, e) {
  if (e.canWrapX()) {
    const n = e.getExtent();
    if (!isFinite(t[0]) || !isFinite(t[2])) return [[n[0], t[1], n[2], t[3]]];
    y_(t, e);
    const i = oe(n);
    if (oe(t) > i) return [[n[0], t[1], n[2], t[3]]];
    if (t[0] < n[0])
      return [
        [t[0] + i, t[1], n[2], t[3]],
        [n[0], t[1], t[2], t[3]],
      ];
    if (t[2] > n[2])
      return [
        [t[0], t[1], n[2], t[3]],
        [n[0], t[1], t[2] - i, t[3]],
      ];
  }
  return [t];
}
const eo = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937,
};
class v_ {
  constructor(e) {
    (this.code_ = e.code),
      (this.units_ = e.units),
      (this.extent_ = e.extent !== void 0 ? e.extent : null),
      (this.worldExtent_ = e.worldExtent !== void 0 ? e.worldExtent : null),
      (this.axisOrientation_ =
        e.axisOrientation !== void 0 ? e.axisOrientation : "enu"),
      (this.global_ = e.global !== void 0 ? e.global : !1),
      (this.canWrapX_ = !!(this.global_ && this.extent_)),
      (this.getPointResolutionFunc_ = e.getPointResolution),
      (this.defaultTileGrid_ = null),
      (this.metersPerUnit_ = e.metersPerUnit);
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || eo[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(e) {
    (this.global_ = e), (this.canWrapX_ = !!(e && this.extent_));
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(e) {
    this.defaultTileGrid_ = e;
  }
  setExtent(e) {
    (this.extent_ = e), (this.canWrapX_ = !!(this.global_ && e));
  }
  setWorldExtent(e) {
    this.worldExtent_ = e;
  }
  setGetPointResolution(e) {
    this.getPointResolutionFunc_ = e;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const Eo = 6378137,
  Cr = Math.PI * Eo,
  dv = [-Cr, -Cr, Cr, Cr],
  fv = [-180, -85, 180, 85],
  Jo = Eo * Math.log(Math.tan(Math.PI / 2));
class tr extends v_ {
  constructor(e) {
    super({
      code: e,
      units: "m",
      extent: dv,
      global: !0,
      worldExtent: fv,
      getPointResolution: function (n, i) {
        return n / Math.cosh(i[1] / Eo);
      },
    });
  }
}
const tg = [
  new tr("EPSG:3857"),
  new tr("EPSG:102100"),
  new tr("EPSG:102113"),
  new tr("EPSG:900913"),
  new tr("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new tr("http://www.opengis.net/gml/srs/epsg.xml#3857"),
];
function gv(t, e, n) {
  const i = t.length;
  (n = n > 1 ? n : 2),
    e === void 0 && (n > 2 ? (e = t.slice()) : (e = new Array(i)));
  for (let r = 0; r < i; r += n) {
    e[r] = (Cr * t[r]) / 180;
    let s = Eo * Math.log(Math.tan((Math.PI * (+t[r + 1] + 90)) / 360));
    s > Jo ? (s = Jo) : s < -Jo && (s = -Jo), (e[r + 1] = s);
  }
  return e;
}
function pv(t, e, n) {
  const i = t.length;
  (n = n > 1 ? n : 2),
    e === void 0 && (n > 2 ? (e = t.slice()) : (e = new Array(i)));
  for (let r = 0; r < i; r += n)
    (e[r] = (180 * t[r]) / Cr),
      (e[r + 1] = (360 * Math.atan(Math.exp(t[r + 1] / Eo))) / Math.PI - 90);
  return e;
}
const mv = 6378137,
  ng = [-180, -90, 180, 90],
  _v = (Math.PI * mv) / 180;
class vi extends v_ {
  constructor(e, n) {
    super({
      code: e,
      units: "degrees",
      extent: ng,
      axisOrientation: n,
      global: !0,
      metersPerUnit: _v,
      worldExtent: ng,
    });
  }
}
const ig = [
  new vi("CRS:84"),
  new vi("EPSG:4326", "neu"),
  new vi("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new vi("urn:ogc:def:crs:OGC:2:84"),
  new vi("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new vi("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new vi("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"),
];
let Gc = {};
function yv(t) {
  return (
    Gc[t] ||
    Gc[t.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] ||
    null
  );
}
function vv(t, e) {
  Gc[t] = e;
}
let Mr = {};
function Hl(t, e, n) {
  const i = t.getCode(),
    r = e.getCode();
  i in Mr || (Mr[i] = {}), (Mr[i][r] = n);
}
function Ev(t, e) {
  let n;
  return t in Mr && e in Mr[t] && (n = Mr[t][e]), n;
}
function Se(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function wv(t, e, n, i, r, s) {
  const o = r - n,
    l = s - i;
  if (o !== 0 || l !== 0) {
    const a = ((t - n) * o + (e - i) * l) / (o * o + l * l);
    a > 1 ? ((n = r), (i = s)) : a > 0 && ((n += o * a), (i += l * a));
  }
  return Di(t, e, n, i);
}
function Di(t, e, n, i) {
  const r = n - t,
    s = i - e;
  return r * r + s * s;
}
function xv(t) {
  const e = t.length;
  for (let i = 0; i < e; i++) {
    let r = i,
      s = Math.abs(t[i][i]);
    for (let l = i + 1; l < e; l++) {
      const a = Math.abs(t[l][i]);
      a > s && ((s = a), (r = l));
    }
    if (s === 0) return null;
    const o = t[r];
    (t[r] = t[i]), (t[i] = o);
    for (let l = i + 1; l < e; l++) {
      const a = -t[l][i] / t[i][i];
      for (let u = i; u < e + 1; u++)
        i == u ? (t[l][u] = 0) : (t[l][u] += a * t[i][u]);
    }
  }
  const n = new Array(e);
  for (let i = e - 1; i >= 0; i--) {
    n[i] = t[i][e] / t[i][i];
    for (let r = i - 1; r >= 0; r--) t[r][e] -= t[r][i] * n[i];
  }
  return n;
}
function xl(t) {
  return (t * Math.PI) / 180;
}
function Ar(t, e) {
  const n = t % e;
  return n * e < 0 ? n + e : n;
}
function dt(t, e, n) {
  return t + n * (e - t);
}
function nd(t, e) {
  const n = Math.pow(10, e);
  return Math.round(t * n) / n;
}
function el(t, e) {
  return Math.floor(nd(t, e));
}
function tl(t, e) {
  return Math.ceil(nd(t, e));
}
function Cv(t, e) {
  return (t[0] += +e[0]), (t[1] += +e[1]), t;
}
function $l(t, e) {
  let n = !0;
  for (let i = t.length - 1; i >= 0; --i)
    if (t[i] != e[i]) {
      n = !1;
      break;
    }
  return n;
}
function id(t, e) {
  const n = Math.cos(e),
    i = Math.sin(e),
    r = t[0] * n - t[1] * i,
    s = t[1] * n + t[0] * i;
  return (t[0] = r), (t[1] = s), t;
}
function Sv(t, e) {
  return (t[0] *= e), (t[1] *= e), t;
}
function E_(t, e) {
  if (e.canWrapX()) {
    const n = oe(e.getExtent()),
      i = Rv(t, e, n);
    i && (t[0] -= i * n);
  }
  return t;
}
function Rv(t, e, n) {
  const i = e.getExtent();
  let r = 0;
  return (
    e.canWrapX() &&
      (t[0] < i[0] || t[0] > i[2]) &&
      ((n = n || oe(i)), (r = Math.floor((t[0] - i[0]) / n))),
    r
  );
}
const Tv = 63710088e-1;
function rg(t, e, n) {
  n = n || Tv;
  const i = xl(t[1]),
    r = xl(e[1]),
    s = (r - i) / 2,
    o = xl(e[0] - t[0]) / 2,
    l =
      Math.sin(s) * Math.sin(s) +
      Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(r);
  return 2 * n * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l));
}
function w_(...t) {
  console.warn(...t);
}
let Wc = !0;
function Iv(t) {
  Wc = !(t === void 0 ? !0 : t);
}
function rd(t, e) {
  if (e !== void 0) {
    for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
    e = e;
  } else e = t.slice();
  return e;
}
function x_(t, e) {
  if (e !== void 0 && t !== e) {
    for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
    t = e;
  }
  return t;
}
function Lv(t) {
  vv(t.getCode(), t), Hl(t, t, rd);
}
function kv(t) {
  t.forEach(Lv);
}
function ve(t) {
  return typeof t == "string" ? yv(t) : t || null;
}
function sg(t, e, n, i) {
  t = ve(t);
  let r;
  const s = t.getPointResolutionFunc();
  if (s) {
    if (((r = s(e, n)), i && i !== t.getUnits())) {
      const o = t.getMetersPerUnit();
      o && (r = (r * o) / eo[i]);
    }
  } else {
    const o = t.getUnits();
    if ((o == "degrees" && !i) || i == "degrees") r = e;
    else {
      const l = Aa(t, ve("EPSG:4326"));
      if (l === x_ && o !== "degrees") r = e * t.getMetersPerUnit();
      else {
        let u = [
          n[0] - e / 2,
          n[1],
          n[0] + e / 2,
          n[1],
          n[0],
          n[1] - e / 2,
          n[0],
          n[1] + e / 2,
        ];
        u = l(u, u, 2);
        const c = rg(u.slice(0, 2), u.slice(2, 4)),
          h = rg(u.slice(4, 6), u.slice(6, 8));
        r = (c + h) / 2;
      }
      const a = i ? eo[i] : t.getMetersPerUnit();
      a !== void 0 && (r /= a);
    }
  }
  return r;
}
function og(t) {
  kv(t),
    t.forEach(function (e) {
      t.forEach(function (n) {
        e !== n && Hl(e, n, rd);
      });
    });
}
function Pv(t, e, n, i) {
  t.forEach(function (r) {
    e.forEach(function (s) {
      Hl(r, s, n), Hl(s, r, i);
    });
  });
}
function sd(t, e) {
  return t ? (typeof t == "string" ? ve(t) : t) : ve(e);
}
function Ri(t, e) {
  if (t === e) return !0;
  const n = t.getUnits() === e.getUnits();
  return (t.getCode() === e.getCode() || Aa(t, e) === rd) && n;
}
function Aa(t, e) {
  const n = t.getCode(),
    i = e.getCode();
  let r = Ev(n, i);
  return r || (r = x_), r;
}
function Yr(t, e) {
  const n = ve(t),
    i = ve(e);
  return Aa(n, i);
}
function od(t, e, n) {
  return Yr(e, n)(t, void 0, t.length);
}
function C_(t, e, n, i) {
  const r = Yr(e, n);
  return cv(t, r, void 0, i);
}
let Mt = null;
function Mv(t) {
  Mt = ve(t);
}
function S_() {
  return Mt;
}
function Av() {
  Mv("EPSG:4326");
}
function jc(t, e) {
  return Mt ? od(t, e, Mt) : t;
}
function hn(t, e) {
  return Mt
    ? od(t, Mt, e)
    : (Wc &&
        !$l(t, [0, 0]) &&
        t[0] >= -180 &&
        t[0] <= 180 &&
        t[1] >= -90 &&
        t[1] <= 90 &&
        ((Wc = !1),
        w_(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.",
        )),
      t);
}
function Xc(t, e) {
  return Mt ? C_(t, e, Mt) : t;
}
function ki(t, e) {
  return Mt ? C_(t, Mt, e) : t;
}
function Ov(t, e) {
  if (!Mt) return t;
  const n = ve(e).getMetersPerUnit(),
    i = Mt.getMetersPerUnit();
  return n && i ? (t * n) / i : t;
}
function Fv() {
  og(tg), og(ig), Pv(ig, tg, gv, pv);
}
Fv();
function si(t, e, n, i, r, s) {
  s = s || [];
  let o = 0;
  for (let l = e; l < n; l += i) {
    const a = t[l],
      u = t[l + 1];
    (s[o++] = r[0] * a + r[2] * u + r[4]),
      (s[o++] = r[1] * a + r[3] * u + r[5]);
  }
  return s && s.length != o && (s.length = o), s;
}
function R_(t, e, n, i, r, s, o) {
  o = o || [];
  const l = Math.cos(r),
    a = Math.sin(r),
    u = s[0],
    c = s[1];
  let h = 0;
  for (let d = e; d < n; d += i) {
    const f = t[d] - u,
      m = t[d + 1] - c;
    (o[h++] = u + f * l - m * a), (o[h++] = c + f * a + m * l);
    for (let y = d + 2; y < d + i; ++y) o[h++] = t[y];
  }
  return o && o.length != h && (o.length = h), o;
}
function Dv(t, e, n, i, r, s, o, l) {
  l = l || [];
  const a = o[0],
    u = o[1];
  let c = 0;
  for (let h = e; h < n; h += i) {
    const d = t[h] - a,
      f = t[h + 1] - u;
    (l[c++] = a + r * d), (l[c++] = u + s * f);
    for (let m = h + 2; m < h + i; ++m) l[c++] = t[m];
  }
  return l && l.length != c && (l.length = c), l;
}
function Nv(t, e, n, i, r, s, o) {
  o = o || [];
  let l = 0;
  for (let a = e; a < n; a += i) {
    (o[l++] = t[a] + r), (o[l++] = t[a + 1] + s);
    for (let u = a + 2; u < a + i; ++u) o[l++] = t[u];
  }
  return o && o.length != l && (o.length = l), o;
}
const lg = Ut();
class T_ extends nn {
  constructor() {
    super(),
      (this.extent_ = Pt()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = l_((e, n, i) => {
        if (!i) return this.getSimplifiedGeometry(n);
        const r = this.clone();
        return r.applyTransform(i), r.getSimplifiedGeometry(n);
      }));
  }
  simplifyTransformed(e, n) {
    return this.simplifyTransformedInternal(this.getRevision(), e, n);
  }
  clone() {
    return W();
  }
  closestPointXY(e, n, i, r) {
    return W();
  }
  containsXY(e, n) {
    const i = this.getClosestPoint([e, n]);
    return i[0] === e && i[1] === n;
  }
  getClosestPoint(e, n) {
    return (n = n || [NaN, NaN]), this.closestPointXY(e[0], e[1], n, 1 / 0), n;
  }
  intersectsCoordinate(e) {
    return this.containsXY(e[0], e[1]);
  }
  computeExtent(e) {
    return W();
  }
  getExtent(e) {
    if (this.extentRevision_ != this.getRevision()) {
      const n = this.computeExtent(this.extent_);
      (isNaN(n[0]) || isNaN(n[1])) && $r(n),
        (this.extentRevision_ = this.getRevision());
    }
    return av(this.extent_, e);
  }
  rotate(e, n) {
    W();
  }
  scale(e, n, i) {
    W();
  }
  simplify(e) {
    return this.getSimplifiedGeometry(e * e);
  }
  getSimplifiedGeometry(e) {
    return W();
  }
  getType() {
    return W();
  }
  applyTransform(e) {
    W();
  }
  intersectsExtent(e) {
    return W();
  }
  translate(e, n) {
    W();
  }
  transform(e, n) {
    const i = ve(e),
      r =
        i.getUnits() == "tile-pixels"
          ? function (s, o, l) {
              const a = i.getExtent(),
                u = i.getWorldExtent(),
                c = mt(u) / mt(a);
              return (
                Sn(lg, u[0], u[3], c, -c, 0, 0, 0),
                si(s, 0, s.length, l, lg, o),
                Yr(i, n)(s, o, l)
              );
            }
          : Yr(i, n);
    return this.applyTransform(r), this;
  }
}
class bi extends T_ {
  constructor() {
    super(), (this.layout = "XY"), (this.stride = 2), this.flatCoordinates;
  }
  computeExtent(e) {
    return td(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
    );
  }
  getCoordinates() {
    return W();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride,
    );
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(e) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      e < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          e <= this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const n = this.getSimplifiedGeometryInternal(e);
    return n.getFlatCoordinates().length < this.flatCoordinates.length
      ? n
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = e), this);
  }
  getSimplifiedGeometryInternal(e) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(e, n) {
    (this.stride = ag(e)), (this.layout = e), (this.flatCoordinates = n);
  }
  setCoordinates(e, n) {
    W();
  }
  setLayout(e, n, i) {
    let r;
    if (e) r = ag(e);
    else {
      for (let s = 0; s < i; ++s) {
        if (n.length === 0) {
          (this.layout = "XY"), (this.stride = 2);
          return;
        }
        n = n[0];
      }
      (r = n.length), (e = Ki(r));
    }
    (this.layout = e), (this.stride = r);
  }
  applyTransform(e) {
    this.flatCoordinates &&
      (e(this.flatCoordinates, this.flatCoordinates, this.stride),
      this.changed());
  }
  rotate(e, n) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      R_(i, 0, i.length, r, e, n, i), this.changed();
    }
  }
  scale(e, n, i) {
    n === void 0 && (n = e), i || (i = ci(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      Dv(r, 0, r.length, s, e, n, i, r), this.changed();
    }
  }
  translate(e, n) {
    const i = this.getFlatCoordinates();
    if (i) {
      const r = this.getStride();
      Nv(i, 0, i.length, r, e, n, i), this.changed();
    }
  }
}
function Ki(t) {
  let e;
  return t == 2 ? (e = "XY") : t == 3 ? (e = "XYZ") : t == 4 && (e = "XYZM"), e;
}
function ag(t) {
  let e;
  return (
    t == "XY"
      ? (e = 2)
      : t == "XYZ" || t == "XYM"
        ? (e = 3)
        : t == "XYZM" && (e = 4),
    e
  );
}
function zv(t, e, n) {
  const i = t.getFlatCoordinates();
  if (!i) return null;
  const r = t.getStride();
  return si(i, 0, i.length, r, e, n);
}
function ug(t, e, n, i, r, s, o) {
  const l = t[e],
    a = t[e + 1],
    u = t[n] - l,
    c = t[n + 1] - a;
  let h;
  if (u === 0 && c === 0) h = e;
  else {
    const d = ((r - l) * u + (s - a) * c) / (u * u + c * c);
    if (d > 1) h = n;
    else if (d > 0) {
      for (let f = 0; f < i; ++f) o[f] = dt(t[e + f], t[n + f], d);
      o.length = i;
      return;
    } else h = e;
  }
  for (let d = 0; d < i; ++d) o[d] = t[h + d];
  o.length = i;
}
function ld(t, e, n, i, r) {
  let s = t[e],
    o = t[e + 1];
  for (e += i; e < n; e += i) {
    const l = t[e],
      a = t[e + 1],
      u = Di(s, o, l, a);
    u > r && (r = u), (s = l), (o = a);
  }
  return r;
}
function ad(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r = ld(t, e, l, i, r)), (e = l);
  }
  return r;
}
function Gv(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r = ad(t, e, l, i, r)), (e = l[l.length - 1]);
  }
  return r;
}
function ud(t, e, n, i, r, s, o, l, a, u, c) {
  if (e == n) return u;
  let h, d;
  if (r === 0) {
    if (((d = Di(o, l, t[e], t[e + 1])), d < u)) {
      for (h = 0; h < i; ++h) a[h] = t[e + h];
      return (a.length = i), d;
    }
    return u;
  }
  c = c || [NaN, NaN];
  let f = e + i;
  for (; f < n; )
    if ((ug(t, f - i, f, i, o, l, c), (d = Di(o, l, c[0], c[1])), d < u)) {
      for (u = d, h = 0; h < i; ++h) a[h] = c[h];
      (a.length = i), (f += i);
    } else f += i * Math.max(((Math.sqrt(d) - Math.sqrt(u)) / r) | 0, 1);
  if (s && (ug(t, n - i, e, i, o, l, c), (d = Di(o, l, c[0], c[1])), d < u)) {
    for (u = d, h = 0; h < i; ++h) a[h] = c[h];
    a.length = i;
  }
  return u;
}
function cd(t, e, n, i, r, s, o, l, a, u, c) {
  c = c || [NaN, NaN];
  for (let h = 0, d = n.length; h < d; ++h) {
    const f = n[h];
    (u = ud(t, e, f, i, r, s, o, l, a, u, c)), (e = f);
  }
  return u;
}
function Wv(t, e, n, i, r, s, o, l, a, u, c) {
  c = c || [NaN, NaN];
  for (let h = 0, d = n.length; h < d; ++h) {
    const f = n[h];
    (u = cd(t, e, f, i, r, s, o, l, a, u, c)), (e = f[f.length - 1]);
  }
  return u;
}
function jv(t, e, n, i) {
  for (let r = 0, s = n.length; r < s; ++r) t[e++] = n[r];
  return e;
}
function Oa(t, e, n, i) {
  for (let r = 0, s = n.length; r < s; ++r) {
    const o = n[r];
    for (let l = 0; l < i; ++l) t[e++] = o[l];
  }
  return e;
}
function wo(t, e, n, i, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = Oa(t, e, n[o], i);
    (r[s++] = a), (e = a);
  }
  return (r.length = s), r;
}
function I_(t, e, n, i, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = wo(t, e, n[o], i, r[s]);
    a.length === 0 && (a[0] = e), (r[s++] = a), (e = a[a.length - 1]);
  }
  return (r.length = s), r;
}
function Fa(t, e, n, i, r, s, o) {
  const l = (n - e) / i;
  if (l < 3) {
    for (; e < n; e += i) (s[o++] = t[e]), (s[o++] = t[e + 1]);
    return o;
  }
  const a = new Array(l);
  (a[0] = 1), (a[l - 1] = 1);
  const u = [e, n - i];
  let c = 0;
  for (; u.length > 0; ) {
    const h = u.pop(),
      d = u.pop();
    let f = 0;
    const m = t[d],
      y = t[d + 1],
      v = t[h],
      p = t[h + 1];
    for (let g = d + i; g < h; g += i) {
      const _ = t[g],
        E = t[g + 1],
        w = wv(_, E, m, y, v, p);
      w > f && ((c = g), (f = w));
    }
    f > r &&
      ((a[(c - e) / i] = 1),
      d + i < c && u.push(d, c),
      c + i < h && u.push(c, h));
  }
  for (let h = 0; h < l; ++h)
    a[h] && ((s[o++] = t[e + h * i]), (s[o++] = t[e + h * i + 1]));
  return o;
}
function L_(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    (o = Fa(t, e, c, i, r, s, o)), l.push(o), (e = c);
  }
  return o;
}
function Si(t, e) {
  return e * Math.round(t / e);
}
function Xv(t, e, n, i, r, s, o) {
  if (e == n) return o;
  let l = Si(t[e], r),
    a = Si(t[e + 1], r);
  (e += i), (s[o++] = l), (s[o++] = a);
  let u, c;
  do
    if (((u = Si(t[e], r)), (c = Si(t[e + 1], r)), (e += i), e == n))
      return (s[o++] = u), (s[o++] = c), o;
  while (u == l && c == a);
  for (; e < n; ) {
    const h = Si(t[e], r),
      d = Si(t[e + 1], r);
    if (((e += i), h == u && d == c)) continue;
    const f = u - l,
      m = c - a,
      y = h - l,
      v = d - a;
    if (
      f * v == m * y &&
      ((f < 0 && y < f) || f == y || (f > 0 && y > f)) &&
      ((m < 0 && v < m) || m == v || (m > 0 && v > m))
    ) {
      (u = h), (c = d);
      continue;
    }
    (s[o++] = u), (s[o++] = c), (l = u), (a = c), (u = h), (c = d);
  }
  return (s[o++] = u), (s[o++] = c), o;
}
function hd(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    (o = Xv(t, e, c, i, r, s, o)), l.push(o), (e = c);
  }
  return o;
}
function Uv(t, e, n, i, r, s, o, l) {
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a],
      h = [];
    (o = hd(t, e, c, i, r, s, o, h)), l.push(h), (e = c[c.length - 1]);
  }
  return o;
}
function Zn(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = e; o < n; o += i) r[s++] = t.slice(o, o + i);
  return (r.length = s), r;
}
function to(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (r[s++] = Zn(t, e, a, i, r[s])), (e = a);
  }
  return (r.length = s), r;
}
function Uc(t, e, n, i, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (r[s++] = a.length === 1 && a[0] === e ? [] : to(t, e, a, i, r[s])),
      (e = a[a.length - 1]);
  }
  return (r.length = s), r;
}
function k_(t, e, n, i) {
  let r = 0,
    s = t[n - i],
    o = t[n - i + 1];
  for (; e < n; e += i) {
    const l = t[e],
      a = t[e + 1];
    (r += o * l - s * a), (s = l), (o = a);
  }
  return r / 2;
}
function P_(t, e, n, i) {
  let r = 0;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r += k_(t, e, l, i)), (e = l);
  }
  return r;
}
function Yv(t, e, n, i) {
  let r = 0;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    (r += P_(t, e, l, i)), (e = l[l.length - 1]);
  }
  return r;
}
class no extends bi {
  constructor(e, n) {
    super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      n !== void 0 && !Array.isArray(e[0])
        ? this.setFlatCoordinates(n, e)
        : this.setCoordinates(e, n);
  }
  clone() {
    return new no(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(e, n, i, r) {
    return r < Bi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            ld(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        ud(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  getArea() {
    return k_(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinates() {
    return Zn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getSimplifiedGeometryInternal(e) {
    const n = [];
    return (
      (n.length = Fa(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        e,
        n,
        0,
      )),
      new no(n, "XY")
    );
  }
  getType() {
    return "LinearRing";
  }
  intersectsExtent(e) {
    return !1;
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Oa(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
class Br extends bi {
  constructor(e, n) {
    super(), this.setCoordinates(e, n);
  }
  clone() {
    const e = new Br(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    const s = this.flatCoordinates,
      o = Di(e, n, s[0], s[1]);
    if (o < r) {
      const l = this.stride;
      for (let a = 0; a < l; ++a) i[a] = s[a];
      return (i.length = l), o;
    }
    return r;
  }
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  computeExtent(e) {
    return g_(this.flatCoordinates, e);
  }
  getType() {
    return "Point";
  }
  intersectsExtent(e) {
    return ed(e, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = jv(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
function Bv(t, e, n, i, r) {
  return !__(r, function (o) {
    return !Pi(t, e, n, i, o[0], o[1]);
  });
}
function Pi(t, e, n, i, r, s) {
  let o = 0,
    l = t[n - i],
    a = t[n - i + 1];
  for (; e < n; e += i) {
    const u = t[e],
      c = t[e + 1];
    a <= s
      ? c > s && (u - l) * (s - a) - (r - l) * (c - a) > 0 && o++
      : c <= s && (u - l) * (s - a) - (r - l) * (c - a) < 0 && o--,
      (l = u),
      (a = c);
  }
  return o !== 0;
}
function dd(t, e, n, i, r, s) {
  if (n.length === 0 || !Pi(t, e, n[0], i, r, s)) return !1;
  for (let o = 1, l = n.length; o < l; ++o)
    if (Pi(t, n[o - 1], n[o], i, r, s)) return !1;
  return !0;
}
function Vv(t, e, n, i, r, s) {
  if (n.length === 0) return !1;
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    if (dd(t, e, a, i, r, s)) return !0;
    e = a[a.length - 1];
  }
  return !1;
}
function fd(t, e, n, i, r, s, o) {
  let l, a, u, c, h, d, f;
  const m = r[s + 1],
    y = [];
  for (let g = 0, _ = n.length; g < _; ++g) {
    const E = n[g];
    for (c = t[E - i], d = t[E - i + 1], l = e; l < E; l += i)
      (h = t[l]),
        (f = t[l + 1]),
        ((m <= d && f <= m) || (d <= m && m <= f)) &&
          ((u = ((m - d) / (f - d)) * (h - c) + c), y.push(u)),
        (c = h),
        (d = f);
  }
  let v = NaN,
    p = -1 / 0;
  for (y.sort(ai), c = y[0], l = 1, a = y.length; l < a; ++l) {
    h = y[l];
    const g = Math.abs(h - c);
    g > p && ((u = (c + h) / 2), dd(t, e, n, i, u, m) && ((v = u), (p = g))),
      (c = h);
  }
  return isNaN(v) && (v = r[s]), o ? (o.push(v, m, p), o) : [v, m, p];
}
function M_(t, e, n, i, r) {
  let s = [];
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (s = fd(t, e, a, i, r, 2 * o, s)), (e = a[a.length - 1]);
  }
  return s;
}
function A_(t, e, n, i, r) {
  let s;
  for (e += i; e < n; e += i)
    if (((s = r(t.slice(e - i, e), t.slice(e, e + i))), s)) return s;
  return !1;
}
function Da(t, e, n, i, r) {
  const s = m_(Pt(), t, e, n, i);
  return it(r, s)
    ? xr(r, s) ||
      (s[0] >= r[0] && s[2] <= r[2]) ||
      (s[1] >= r[1] && s[3] <= r[3])
      ? !0
      : A_(t, e, n, i, function (o, l) {
          return uv(r, o, l);
        })
    : !1;
}
function bv(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    if (Da(t, e, n[s], i, r)) return !0;
    e = n[s];
  }
  return !1;
}
function O_(t, e, n, i, r) {
  return !!(
    Da(t, e, n, i, r) ||
    Pi(t, e, n, i, r[0], r[1]) ||
    Pi(t, e, n, i, r[0], r[3]) ||
    Pi(t, e, n, i, r[2], r[1]) ||
    Pi(t, e, n, i, r[2], r[3])
  );
}
function F_(t, e, n, i, r) {
  if (!O_(t, e, n[0], i, r)) return !1;
  if (n.length === 1) return !0;
  for (let s = 1, o = n.length; s < o; ++s)
    if (Bv(t, n[s - 1], n[s], i, r) && !Da(t, n[s - 1], n[s], i, r)) return !1;
  return !0;
}
function Kv(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    if (F_(t, e, l, i, r)) return !0;
    e = l[l.length - 1];
  }
  return !1;
}
function Zv(t, e, n, i) {
  for (; e < n - i; ) {
    for (let r = 0; r < i; ++r) {
      const s = t[e + r];
      (t[e + r] = t[n - i + r]), (t[n - i + r] = s);
    }
    (e += i), (n -= i);
  }
}
function gd(t, e, n, i) {
  let r = 0,
    s = t[n - i],
    o = t[n - i + 1];
  for (; e < n; e += i) {
    const l = t[e],
      a = t[e + 1];
    (r += (l - s) * (a + o)), (s = l), (o = a);
  }
  return r === 0 ? void 0 : r > 0;
}
function pd(t, e, n, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s],
      a = gd(t, e, l, i);
    if (s === 0) {
      if ((r && a) || (!r && !a)) return !1;
    } else if ((r && !a) || (!r && a)) return !1;
    e = l;
  }
  return !0;
}
function D_(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s];
    if (!pd(t, e, l, i, r)) return !1;
    l.length && (e = l[l.length - 1]);
  }
  return !0;
}
function ql(t, e, n, i, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = n.length; s < o; ++s) {
    const l = n[s],
      a = gd(t, e, l, i);
    (s === 0 ? (r && a) || (!r && !a) : (r && !a) || (!r && a)) &&
      Zv(t, e, l, i),
      (e = l);
  }
  return e;
}
function Yc(t, e, n, i, r) {
  for (let s = 0, o = n.length; s < o; ++s) e = ql(t, e, n[s], i, r);
  return e;
}
function Hv(t, e) {
  const n = [];
  let i = 0,
    r = 0,
    s;
  for (let o = 0, l = e.length; o < l; ++o) {
    const a = e[o],
      u = gd(t, i, a, 2);
    if ((s === void 0 && (s = u), u === s)) n.push(e.slice(r, o + 1));
    else {
      if (n.length === 0) continue;
      n[n.length - 1].push(e[r]);
    }
    (r = o + 1), (i = a);
  }
  return n;
}
class hi extends bi {
  constructor(e, n, i) {
    super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      n !== void 0 && i
        ? (this.setFlatCoordinates(n, e), (this.ends_ = i))
        : this.setCoordinates(e, n);
  }
  appendLinearRing(e) {
    this.flatCoordinates
      ? Jt(this.flatCoordinates, e.getFlatCoordinates())
      : (this.flatCoordinates = e.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const e = new hi(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    return r < Bi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            ad(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        cd(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  containsXY(e, n) {
    return dd(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      e,
      n,
    );
  }
  getArea() {
    return P_(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(e) {
    let n;
    return (
      e !== void 0
        ? ((n = this.getOrientedFlatCoordinates().slice()),
          ql(n, 0, this.ends_, this.stride, e))
        : (n = this.flatCoordinates),
      to(n, 0, this.ends_, this.stride)
    );
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const e = ci(this.getExtent());
      (this.flatInteriorPoint_ = fd(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        e,
        0,
      )),
        (this.flatInteriorPointRevision_ = this.getRevision());
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new Br(this.getFlatInteriorPoint(), "XYM");
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(e) {
    return e < 0 || this.ends_.length <= e
      ? null
      : new no(
          this.flatCoordinates.slice(
            e === 0 ? 0 : this.ends_[e - 1],
            this.ends_[e],
          ),
          this.layout,
        );
  }
  getLinearRings() {
    const e = this.layout,
      n = this.flatCoordinates,
      i = this.ends_,
      r = [];
    let s = 0;
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o],
        u = new no(n.slice(s, a), e);
      r.push(u), (s = a);
    }
    return r;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      pd(e, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = e)
        : ((this.orientedFlatCoordinates_ = e.slice()),
          (this.orientedFlatCoordinates_.length = ql(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(e) {
    const n = [],
      i = [];
    return (
      (n.length = hd(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(e),
        n,
        0,
        i,
      )),
      new hi(n, "XY", i)
    );
  }
  getType() {
    return "Polygon";
  }
  intersectsExtent(e) {
    return F_(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, e);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const i = wo(this.flatCoordinates, 0, e, this.stride, this.ends_);
    (this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]),
      this.changed();
  }
}
function cg(t) {
  if (vo(t)) throw new Error("Cannot create polygon from empty extent");
  const e = t[0],
    n = t[1],
    i = t[2],
    r = t[3],
    s = [e, n, e, r, i, r, i, n, e, n];
  return new hi(s, "XY", [s.length]);
}
const en = {
  PRERENDER: "prerender",
  POSTRENDER: "postrender",
  PRECOMPOSE: "precompose",
  POSTCOMPOSE: "postcompose",
  RENDERCOMPLETE: "rendercomplete",
};
class xo {
  constructor(e) {
    (e = e || {}), (this.color_ = e.color !== void 0 ? e.color : null);
  }
  clone() {
    const e = this.getColor();
    return new xo({ color: Array.isArray(e) ? e.slice() : e || void 0 });
  }
  getColor() {
    return this.color_;
  }
  setColor(e) {
    this.color_ = e;
  }
}
function Ql(t, e, n, i, r, s, o) {
  let l, a;
  const u = (n - e) / i;
  if (u === 1) l = e;
  else if (u === 2) (l = e), (a = r);
  else if (u !== 0) {
    let c = t[e],
      h = t[e + 1],
      d = 0;
    const f = [0];
    for (let v = e + i; v < n; v += i) {
      const p = t[v],
        g = t[v + 1];
      (d += Math.sqrt((p - c) * (p - c) + (g - h) * (g - h))),
        f.push(d),
        (c = p),
        (h = g);
    }
    const m = r * d,
      y = b1(f, m);
    y < 0
      ? ((a = (m - f[-y - 2]) / (f[-y - 1] - f[-y - 2])),
        (l = e + (-y - 2) * i))
      : (l = e + y * i);
  }
  (o = o > 1 ? o : 2), (s = s || new Array(o));
  for (let c = 0; c < o; ++c)
    s[c] =
      l === void 0
        ? NaN
        : a === void 0
          ? t[l + c]
          : dt(t[l + c], t[l + i + c], a);
  return s;
}
function Bc(t, e, n, i, r, s) {
  if (n == e) return null;
  let o;
  if (r < t[e + i - 1])
    return s ? ((o = t.slice(e, e + i)), (o[i - 1] = r), o) : null;
  if (t[n - 1] < r)
    return s ? ((o = t.slice(n - i, n)), (o[i - 1] = r), o) : null;
  if (r == t[e + i - 1]) return t.slice(e, e + i);
  let l = e / i,
    a = n / i;
  for (; l < a; ) {
    const d = (l + a) >> 1;
    r < t[(d + 1) * i - 1] ? (a = d) : (l = d + 1);
  }
  const u = t[l * i - 1];
  if (r == u) return t.slice((l - 1) * i, (l - 1) * i + i);
  const c = t[(l + 1) * i - 1],
    h = (r - u) / (c - u);
  o = [];
  for (let d = 0; d < i - 1; ++d)
    o.push(dt(t[(l - 1) * i + d], t[l * i + d], h));
  return o.push(r), o;
}
function $v(t, e, n, i, r, s, o) {
  if (o) return Bc(t, e, n[n.length - 1], i, r, s);
  let l;
  if (r < t[i - 1]) return s ? ((l = t.slice(0, i)), (l[i - 1] = r), l) : null;
  if (t[t.length - 1] < r)
    return s ? ((l = t.slice(t.length - i)), (l[i - 1] = r), l) : null;
  for (let a = 0, u = n.length; a < u; ++a) {
    const c = n[a];
    if (e != c) {
      if (r < t[e + i - 1]) return null;
      if (r <= t[c - 1]) return Bc(t, e, c, i, r, !1);
      e = c;
    }
  }
  return null;
}
function N_(t, e, n, i) {
  let r = t[e],
    s = t[e + 1],
    o = 0;
  for (let l = e + i; l < n; l += i) {
    const a = t[l],
      u = t[l + 1];
    (o += Math.sqrt((a - r) * (a - r) + (u - s) * (u - s))), (r = a), (s = u);
  }
  return o;
}
class Jl extends bi {
  constructor(e, n) {
    super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      n !== void 0 && !Array.isArray(e[0])
        ? this.setFlatCoordinates(n, e)
        : this.setCoordinates(e, n);
  }
  appendCoordinate(e) {
    Jt(this.flatCoordinates, e), this.changed();
  }
  clone() {
    const e = new Jl(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    return r < Bi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            ld(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        ud(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !1,
          e,
          n,
          i,
          r,
        ));
  }
  forEachSegment(e) {
    return A_(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
    );
  }
  getCoordinateAtM(e, n) {
    return this.layout != "XYM" && this.layout != "XYZM"
      ? null
      : ((n = n !== void 0 ? n : !1),
        Bc(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          e,
          n,
        ));
  }
  getCoordinates() {
    return Zn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinateAt(e, n) {
    return Ql(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
      n,
      this.stride,
    );
  }
  getLength() {
    return N_(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getFlatMidpoint() {
    return (
      this.flatMidpointRevision_ != this.getRevision() &&
        ((this.flatMidpoint_ = this.getCoordinateAt(
          0.5,
          this.flatMidpoint_ ?? void 0,
        )),
        (this.flatMidpointRevision_ = this.getRevision())),
      this.flatMidpoint_
    );
  }
  getSimplifiedGeometryInternal(e) {
    const n = [];
    return (
      (n.length = Fa(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        e,
        n,
        0,
      )),
      new Jl(n, "XY")
    );
  }
  getType() {
    return "LineString";
  }
  intersectsExtent(e) {
    return Da(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      e,
    );
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Oa(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
const Vc = Jl;
class Na {
  constructor(e) {
    (e = e || {}),
      (this.color_ = e.color !== void 0 ? e.color : null),
      (this.lineCap_ = e.lineCap),
      (this.lineDash_ = e.lineDash !== void 0 ? e.lineDash : null),
      (this.lineDashOffset_ = e.lineDashOffset),
      (this.lineJoin_ = e.lineJoin),
      (this.miterLimit_ = e.miterLimit),
      (this.width_ = e.width);
  }
  clone() {
    const e = this.getColor();
    return new Na({
      color: Array.isArray(e) ? e.slice() : e || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth(),
    });
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(e) {
    this.color_ = e;
  }
  setLineCap(e) {
    this.lineCap_ = e;
  }
  setLineDash(e) {
    this.lineDash_ = e;
  }
  setLineDashOffset(e) {
    this.lineDashOffset_ = e;
  }
  setLineJoin(e) {
    this.lineJoin_ = e;
  }
  setMiterLimit(e) {
    this.miterLimit_ = e;
  }
  setWidth(e) {
    this.width_ = e;
  }
}
const se = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
function hg(t) {
  return t[0] > 0 && t[1] > 0;
}
function qv(t, e, n) {
  return (
    n === void 0 && (n = [0, 0]),
    (n[0] = (t[0] * e + 0.5) | 0),
    (n[1] = (t[1] * e + 0.5) | 0),
    n
  );
}
function gt(t, e) {
  return Array.isArray(t)
    ? t
    : (e === void 0 ? (e = [t, t]) : ((e[0] = t), (e[1] = t)), e);
}
class za {
  constructor(e) {
    (this.opacity_ = e.opacity),
      (this.rotateWithView_ = e.rotateWithView),
      (this.rotation_ = e.rotation),
      (this.scale_ = e.scale),
      (this.scaleArray_ = gt(e.scale)),
      (this.displacement_ = e.displacement),
      (this.declutterMode_ = e.declutterMode);
  }
  clone() {
    const e = this.getScale();
    return new za({
      opacity: this.getOpacity(),
      scale: Array.isArray(e) ? e.slice() : e,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return W();
  }
  getImage(e) {
    return W();
  }
  getHitDetectionImage() {
    return W();
  }
  getPixelRatio(e) {
    return 1;
  }
  getImageState() {
    return W();
  }
  getImageSize() {
    return W();
  }
  getOrigin() {
    return W();
  }
  getSize() {
    return W();
  }
  setDisplacement(e) {
    this.displacement_ = e;
  }
  setOpacity(e) {
    this.opacity_ = e;
  }
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  setRotation(e) {
    this.rotation_ = e;
  }
  setScale(e) {
    (this.scale_ = e), (this.scaleArray_ = gt(e));
  }
  listenImageChange(e) {
    W();
  }
  load() {
    W();
  }
  unlistenImageChange(e) {
    W();
  }
}
const io = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"],
};
var Ae = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"],
};
Ae.whitepoint = {
  2: {
    A: [109.85, 100, 35.585],
    C: [98.074, 100, 118.232],
    D50: [96.422, 100, 82.521],
    D55: [95.682, 100, 92.149],
    D65: [95.045592705167, 100, 108.9057750759878],
    D75: [94.972, 100, 122.638],
    F2: [99.187, 100, 67.395],
    F7: [95.044, 100, 108.755],
    F11: [100.966, 100, 64.37],
    E: [100, 100, 100],
  },
  10: {
    A: [111.144, 100, 35.2],
    C: [97.285, 100, 116.145],
    D50: [96.72, 100, 81.427],
    D55: [95.799, 100, 90.926],
    D65: [94.811, 100, 107.304],
    D75: [94.416, 100, 120.641],
    F2: [103.28, 100, 69.026],
    F7: [95.792, 100, 107.687],
    F11: [103.866, 100, 65.627],
    E: [100, 100, 100],
  },
};
Ae.max = Ae.whitepoint[2].D65;
Ae.rgb = function (t, e) {
  e = e || Ae.whitepoint[2].E;
  var n = t[0] / e[0],
    i = t[1] / e[1],
    r = t[2] / e[2],
    s,
    o,
    l;
  return (
    (s = n * 3.240969941904521 + i * -1.537383177570093 + r * -0.498610760293),
    (o = n * -0.96924363628087 + i * 1.87596750150772 + r * 0.041555057407175),
    (l = n * 0.055630079696993 + i * -0.20397695888897 + r * 1.056971514242878),
    (s =
      s > 0.0031308 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : (s = s * 12.92)),
    (o =
      o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : (o = o * 12.92)),
    (l =
      l > 0.0031308 ? 1.055 * Math.pow(l, 1 / 2.4) - 0.055 : (l = l * 12.92)),
    (s = Math.min(Math.max(0, s), 1)),
    (o = Math.min(Math.max(0, o), 1)),
    (l = Math.min(Math.max(0, l), 1)),
    [s * 255, o * 255, l * 255]
  );
};
io.xyz = function (t, e) {
  var n = t[0] / 255,
    i = t[1] / 255,
    r = t[2] / 255;
  (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92),
    (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92),
    (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
  var s = n * 0.41239079926595 + i * 0.35758433938387 + r * 0.18048078840183,
    o = n * 0.21263900587151 + i * 0.71516867876775 + r * 0.072192315360733,
    l = n * 0.019330818715591 + i * 0.11919477979462 + r * 0.95053215224966;
  return (e = e || Ae.whitepoint[2].E), [s * e[0], o * e[1], l * e[2]];
};
const md = {
  name: "luv",
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function (t, e, n) {
    var i, r, s, o, l, a, u, c, h, d, f, m, y;
    if (((s = t[0]), (o = t[1]), (l = t[2]), s === 0)) return [0, 0, 0];
    var v = 0.0011070564598794539;
    return (
      (e = e || "D65"),
      (n = n || 2),
      (h = Ae.whitepoint[n][e][0]),
      (d = Ae.whitepoint[n][e][1]),
      (f = Ae.whitepoint[n][e][2]),
      (m = (4 * h) / (h + 15 * d + 3 * f)),
      (y = (9 * d) / (h + 15 * d + 3 * f)),
      (i = o / (13 * s) + m || 0),
      (r = l / (13 * s) + y || 0),
      (u = s > 8 ? d * Math.pow((s + 16) / 116, 3) : d * s * v),
      (a = (u * 9 * i) / (4 * r) || 0),
      (c = (u * (12 - 3 * i - 20 * r)) / (4 * r) || 0),
      [a, u, c]
    );
  },
};
Ae.luv = function (t, e, n) {
  var i,
    r,
    s,
    o,
    l,
    a,
    u,
    c,
    h,
    d,
    f,
    m,
    y,
    v = 0.008856451679035631,
    p = 903.2962962962961;
  (e = e || "D65"),
    (n = n || 2),
    (h = Ae.whitepoint[n][e][0]),
    (d = Ae.whitepoint[n][e][1]),
    (f = Ae.whitepoint[n][e][2]),
    (m = (4 * h) / (h + 15 * d + 3 * f)),
    (y = (9 * d) / (h + 15 * d + 3 * f)),
    (a = t[0]),
    (u = t[1]),
    (c = t[2]),
    (i = (4 * a) / (a + 15 * u + 3 * c) || 0),
    (r = (9 * u) / (a + 15 * u + 3 * c) || 0);
  var g = u / d;
  return (
    (s = g <= v ? p * g : 116 * Math.pow(g, 1 / 3) - 16),
    (o = 13 * s * (i - m)),
    (l = 13 * s * (r - y)),
    [s, o, l]
  );
};
var z_ = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function (t) {
    var e = t[0],
      n = t[1],
      i = t[2],
      r,
      s,
      o;
    return (
      (o = (i / 360) * 2 * Math.PI),
      (r = n * Math.cos(o)),
      (s = n * Math.sin(o)),
      [e, r, s]
    );
  },
  xyz: function (t) {
    return md.xyz(z_.luv(t));
  },
};
md.lchuv = function (t) {
  var e = t[0],
    n = t[1],
    i = t[2],
    r = Math.sqrt(n * n + i * i),
    s = Math.atan2(i, n),
    o = (s * 360) / 2 / Math.PI;
  return o < 0 && (o += 360), [e, r, o];
};
Ae.lchuv = function (t) {
  return md.lchuv(Ae.luv(t));
};
var Qv = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50],
};
const dg = Hg(Qv);
var fg = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300,
};
function Jv(t) {
  var c, h;
  var e,
    n = [],
    i = 1,
    r;
  if (typeof t == "number")
    return {
      space: "rgb",
      values: [t >>> 16, (t & 65280) >>> 8, t & 255],
      alpha: 1,
    };
  if (typeof t == "number")
    return {
      space: "rgb",
      values: [t >>> 16, (t & 65280) >>> 8, t & 255],
      alpha: 1,
    };
  if (((t = String(t).toLowerCase()), dg[t])) (n = dg[t].slice()), (r = "rgb");
  else if (t === "transparent") (i = 0), (r = "rgb"), (n = [0, 0, 0]);
  else if (t[0] === "#") {
    var s = t.slice(1),
      o = s.length,
      l = o <= 4;
    (i = 1),
      l
        ? ((n = [
            parseInt(s[0] + s[0], 16),
            parseInt(s[1] + s[1], 16),
            parseInt(s[2] + s[2], 16),
          ]),
          o === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
        : ((n = [
            parseInt(s[0] + s[1], 16),
            parseInt(s[2] + s[3], 16),
            parseInt(s[4] + s[5], 16),
          ]),
          o === 8 && (i = parseInt(s[6] + s[7], 16) / 255)),
      n[0] || (n[0] = 0),
      n[1] || (n[1] = 0),
      n[2] || (n[2] = 0),
      (r = "rgb");
  } else if (
    (e =
      /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(
        t,
      ))
  ) {
    var a = e[1];
    r = a.replace(/a$/, "");
    var u = r === "cmyk" ? 4 : r === "gray" ? 1 : 3;
    (n = e[2].trim().split(/\s*[,\/]\s*|\s+/)),
      r === "color" && (r = n.shift()),
      (n = n.map(function (d, f) {
        if (d[d.length - 1] === "%")
          return (
            (d = parseFloat(d) / 100),
            f === 3
              ? d
              : r === "rgb"
                ? d * 255
                : r[0] === "h" || (r[0] === "l" && !f)
                  ? d * 100
                  : r === "lab"
                    ? d * 125
                    : r === "lch"
                      ? f < 2
                        ? d * 150
                        : d * 360
                      : r[0] === "o" && !f
                        ? d
                        : r === "oklab"
                          ? d * 0.4
                          : r === "oklch"
                            ? f < 2
                              ? d * 0.4
                              : d * 360
                            : d
          );
        if (r[f] === "h" || (f === 2 && r[r.length - 1] === "h")) {
          if (fg[d] !== void 0) return fg[d];
          if (d.endsWith("deg")) return parseFloat(d);
          if (d.endsWith("turn")) return parseFloat(d) * 360;
          if (d.endsWith("grad")) return (parseFloat(d) * 360) / 400;
          if (d.endsWith("rad")) return (parseFloat(d) * 180) / Math.PI;
        }
        return d === "none" ? 0 : parseFloat(d);
      })),
      (i = n.length > u ? n.pop() : 1);
  } else
    /[0-9](?:\s|\/|,)/.test(t) &&
      ((n = t.match(/([0-9]+)/g).map(function (d) {
        return parseFloat(d);
      })),
      (r =
        ((h = (c = t.match(/([a-z])/gi)) == null ? void 0 : c.join("")) == null
          ? void 0
          : h.toLowerCase()) || "rgb"));
  return { space: r, values: n, alpha: i };
}
const Su = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function (t) {
    var e = t[0] / 360,
      n = t[1] / 100,
      i = t[2] / 100,
      r,
      s,
      o,
      l,
      a,
      u = 0;
    if (n === 0) return (a = i * 255), [a, a, a];
    for (
      s = i < 0.5 ? i * (1 + n) : i + n - i * n, r = 2 * i - s, l = [0, 0, 0];
      u < 3;

    )
      (o = e + (1 / 3) * -(u - 1)),
        o < 0 ? o++ : o > 1 && o--,
        (a =
          6 * o < 1
            ? r + (s - r) * 6 * o
            : 2 * o < 1
              ? s
              : 3 * o < 2
                ? r + (s - r) * (2 / 3 - o) * 6
                : r),
        (l[u++] = a * 255);
    return l;
  },
};
io.hsl = function (t) {
  var e = t[0] / 255,
    n = t[1] / 255,
    i = t[2] / 255,
    r = Math.min(e, n, i),
    s = Math.max(e, n, i),
    o = s - r,
    l,
    a,
    u;
  return (
    s === r
      ? (l = 0)
      : e === s
        ? (l = (n - i) / o)
        : n === s
          ? (l = 2 + (i - e) / o)
          : i === s && (l = 4 + (e - n) / o),
    (l = Math.min(l * 60, 360)),
    l < 0 && (l += 360),
    (u = (r + s) / 2),
    s === r ? (a = 0) : u <= 0.5 ? (a = o / (s + r)) : (a = o / (2 - s - r)),
    [l, a * 100, u * 100]
  );
};
function eE(t) {
  Array.isArray(t) && t.raw && (t = String.raw(...arguments)),
    t instanceof Number && (t = +t);
  var e,
    n = Jv(t);
  if (!n.space) return [];
  const i = n.space[0] === "h" ? Su.min : io.min,
    r = n.space[0] === "h" ? Su.max : io.max;
  return (
    (e = Array(3)),
    (e[0] = Math.min(Math.max(n.values[0], i[0]), r[0])),
    (e[1] = Math.min(Math.max(n.values[1], i[1]), r[1])),
    (e[2] = Math.min(Math.max(n.values[2], i[2]), r[2])),
    n.space[0] === "h" && (e = Su.rgb(e)),
    e.push(Math.min(Math.max(n.alpha, 0), 1)),
    e
  );
}
function G_(t) {
  return typeof t == "string" ? t : j_(t);
}
const tE = 1024,
  fs = {};
let Ru = 0;
function nE(t) {
  if (t.length === 4) return t;
  const e = t.slice();
  return (e[3] = 1), e;
}
function gg(t) {
  const e = Ae.lchuv(io.xyz(t));
  return (e[3] = t[3]), e;
}
function iE(t) {
  const e = Ae.rgb(z_.xyz(t));
  return (e[3] = t[3]), e;
}
function _d(t) {
  if (fs.hasOwnProperty(t)) return fs[t];
  if (Ru >= tE) {
    let n = 0;
    for (const i in fs) n++ & 3 || (delete fs[i], --Ru);
  }
  const e = eE(t);
  if (e.length !== 4) throw new Error('Failed to parse "' + t + '" as color');
  for (const n of e)
    if (isNaN(n)) throw new Error('Failed to parse "' + t + '" as color');
  return W_(e), (fs[t] = e), ++Ru, e;
}
function ea(t) {
  return Array.isArray(t) ? t : _d(t);
}
function W_(t) {
  return (
    (t[0] = Se((t[0] + 0.5) | 0, 0, 255)),
    (t[1] = Se((t[1] + 0.5) | 0, 0, 255)),
    (t[2] = Se((t[2] + 0.5) | 0, 0, 255)),
    (t[3] = Se(t[3], 0, 1)),
    t
  );
}
function j_(t) {
  let e = t[0];
  e != (e | 0) && (e = (e + 0.5) | 0);
  let n = t[1];
  n != (n | 0) && (n = (n + 0.5) | 0);
  let i = t[2];
  i != (i | 0) && (i = (i + 0.5) | 0);
  const r = t[3] === void 0 ? 1 : Math.round(t[3] * 100) / 100;
  return "rgba(" + e + "," + n + "," + i + "," + r + ")";
}
function rE(t) {
  try {
    return _d(t), !0;
  } catch {
    return !1;
  }
}
function $t(t) {
  return Array.isArray(t) ? j_(t) : t;
}
function Ke(t, e, n, i) {
  let r;
  return (
    n && n.length
      ? (r = n.shift())
      : qh
        ? (r = new OffscreenCanvas(t || 300, e || 300))
        : (r = document.createElement("canvas")),
    t && (r.width = t),
    e && (r.height = e),
    r.getContext("2d", i)
  );
}
function Ga(t) {
  const e = t.canvas;
  (e.width = 1), (e.height = 1), t.clearRect(0, 0, 1, 1);
}
function pg(t, e) {
  const n = e.parentNode;
  n && n.replaceChild(t, e);
}
function bc(t) {
  return t && t.parentNode ? t.parentNode.removeChild(t) : null;
}
function sE(t) {
  for (; t.lastChild; ) t.removeChild(t.lastChild);
}
function oE(t, e) {
  const n = t.childNodes;
  for (let i = 0; ; ++i) {
    const r = n[i],
      s = e[i];
    if (!r && !s) break;
    if (r !== s) {
      if (!r) {
        t.appendChild(s);
        continue;
      }
      if (!s) {
        t.removeChild(r), --i;
        continue;
      }
      t.insertBefore(s, r);
    }
  }
}
const nl = "ol-hidden",
  Wa = "ol-unselectable",
  yd = "ol-control",
  mg = "ol-collapsed",
  lE = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`,
    ].join(""),
    "i",
  ),
  _g = ["style", "variant", "weight", "size", "lineHeight", "family"],
  X_ = function (t) {
    const e = t.match(lE);
    if (!e) return null;
    const n = {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal",
    };
    for (let i = 0, r = _g.length; i < r; ++i) {
      const s = e[i + 1];
      s !== void 0 && (n[_g[i]] = s);
    }
    return (n.families = n.family.split(/,\s?/)), n;
  },
  U_ = "10px sans-serif",
  nt = "#000",
  Vr = "round",
  yn = [],
  vn = 0,
  br = "round",
  ro = 10,
  so = "#000",
  oo = "center",
  ta = "middle",
  Mi = [0, 0, 0, 0],
  lo = 1,
  dn = new nn();
let or = null,
  Kc;
const Zc = {},
  aE = (function () {
    const e = "32px ",
      n = ["monospace", "serif"],
      i = n.length,
      r = "wmytzilWMYTZIL@#/&?$%10";
    let s, o;
    function l(u, c, h) {
      let d = !0;
      for (let f = 0; f < i; ++f) {
        const m = n[f];
        if (((o = na(u + " " + c + " " + e + m, r)), h != m)) {
          const y = na(u + " " + c + " " + e + h + "," + m, r);
          d = d && y != o;
        }
      }
      return !!d;
    }
    function a() {
      let u = !0;
      const c = dn.getKeys();
      for (let h = 0, d = c.length; h < d; ++h) {
        const f = c[h];
        dn.get(f) < 100 &&
          (l.apply(
            this,
            f.split(`
`),
          )
            ? (_o(Zc), (or = null), (Kc = void 0), dn.set(f, 100))
            : (dn.set(f, dn.get(f) + 1, !0), (u = !1)));
      }
      u && (clearInterval(s), (s = void 0));
    }
    return function (u) {
      const c = X_(u);
      if (!c) return;
      const h = c.families;
      for (let d = 0, f = h.length; d < f; ++d) {
        const m = h[d],
          y =
            c.style +
            `
` +
            c.weight +
            `
` +
            m;
        dn.get(y) === void 0 &&
          (dn.set(y, 100, !0),
          l(c.style, c.weight, m) ||
            (dn.set(y, 0, !0), s === void 0 && (s = setInterval(a, 32))));
      }
    };
  })(),
  uE = (function () {
    let t;
    return function (e) {
      let n = Zc[e];
      if (n == null) {
        if (qh) {
          const i = X_(e),
            r = Y_(e, "Žg");
          n =
            (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) *
            (r.actualBoundingBoxAscent + r.actualBoundingBoxDescent);
        } else
          t ||
            ((t = document.createElement("div")),
            (t.innerHTML = "M"),
            (t.style.minHeight = "0"),
            (t.style.maxHeight = "none"),
            (t.style.height = "auto"),
            (t.style.padding = "0"),
            (t.style.border = "none"),
            (t.style.position = "absolute"),
            (t.style.display = "block"),
            (t.style.left = "-99999px")),
            (t.style.font = e),
            document.body.appendChild(t),
            (n = t.offsetHeight),
            document.body.removeChild(t);
        Zc[e] = n;
      }
      return n;
    };
  })();
function Y_(t, e) {
  return (
    or || (or = Ke(1, 1)),
    t != Kc && ((or.font = t), (Kc = or.font)),
    or.measureText(e)
  );
}
function na(t, e) {
  return Y_(t, e).width;
}
function yg(t, e, n) {
  if (e in n) return n[e];
  const i = e
    .split(
      `
`,
    )
    .reduce((r, s) => Math.max(r, na(t, s)), 0);
  return (n[e] = i), i;
}
function cE(t, e) {
  const n = [],
    i = [],
    r = [];
  let s = 0,
    o = 0,
    l = 0,
    a = 0;
  for (let u = 0, c = e.length; u <= c; u += 2) {
    const h = e[u];
    if (
      h ===
        `
` ||
      u === c
    ) {
      (s = Math.max(s, o)), r.push(o), (o = 0), (l += a);
      continue;
    }
    const d = e[u + 1] || t.font,
      f = na(d, h);
    n.push(f), (o += f);
    const m = uE(d);
    i.push(m), (a = Math.max(a, m));
  }
  return { width: s, height: l, widths: n, heights: i, lineWidths: r };
}
function hE(t, e, n, i, r, s, o, l, a, u, c) {
  t.save(),
    n !== 1 && (t.globalAlpha *= n),
    e && t.transform.apply(t, e),
    i.contextInstructions
      ? (t.translate(a, u), t.scale(c[0], c[1]), dE(i, t))
      : c[0] < 0 || c[1] < 0
        ? (t.translate(a, u),
          t.scale(c[0], c[1]),
          t.drawImage(i, r, s, o, l, 0, 0, o, l))
        : t.drawImage(i, r, s, o, l, a, u, o * c[0], l * c[1]),
    t.restore();
}
function dE(t, e) {
  const n = t.contextInstructions;
  for (let i = 0, r = n.length; i < r; i += 2)
    Array.isArray(n[i + 1]) ? e[n[i]].apply(e, n[i + 1]) : (e[n[i]] = n[i + 1]);
}
class ja extends za {
  constructor(e) {
    const n = e.rotateWithView !== void 0 ? e.rotateWithView : !1;
    super({
      opacity: 1,
      rotateWithView: n,
      rotation: e.rotation !== void 0 ? e.rotation : 0,
      scale: e.scale !== void 0 ? e.scale : 1,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      declutterMode: e.declutterMode,
    }),
      this.canvases_,
      (this.hitDetectionCanvas_ = null),
      (this.fill_ = e.fill !== void 0 ? e.fill : null),
      (this.origin_ = [0, 0]),
      (this.points_ = e.points),
      (this.radius_ = e.radius !== void 0 ? e.radius : e.radius1),
      (this.radius2_ = e.radius2),
      (this.angle_ = e.angle !== void 0 ? e.angle : 0),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      this.size_,
      this.renderOptions_,
      this.render();
  }
  clone() {
    const e = this.getScale(),
      n = new ja({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(e) ? e.slice() : e,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return n.setOpacity(this.getOpacity()), n;
  }
  getAnchor() {
    const e = this.size_,
      n = this.getDisplacement(),
      i = this.getScaleArray();
    return [e[0] / 2 - n[0] / i[0], e[1] / 2 + n[1] / i[1]];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e) {
    (this.fill_ = e), this.render();
  }
  getHitDetectionImage() {
    return (
      this.hitDetectionCanvas_ ||
        (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_,
        )),
      this.hitDetectionCanvas_
    );
  }
  getImage(e) {
    let n = this.canvases_[e];
    if (!n) {
      const i = this.renderOptions_,
        r = Ke(i.size * e, i.size * e);
      this.draw_(i, r, e), (n = r.canvas), (this.canvases_[e] = n);
    }
    return n;
  }
  getPixelRatio(e) {
    return e;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return se.LOADED;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius_;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e) {
    (this.stroke_ = e), this.render();
  }
  listenImageChange(e) {}
  load() {}
  unlistenImageChange(e) {}
  calculateLineJoinSize_(e, n, i) {
    if (n === 0 || this.points_ === 1 / 0 || (e !== "bevel" && e !== "miter"))
      return n;
    let r = this.radius_,
      s = this.radius2_ === void 0 ? r : this.radius2_;
    if (r < s) {
      const x = r;
      (r = s), (s = x);
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      l = (2 * Math.PI) / o,
      a = s * Math.sin(l),
      u = Math.sqrt(s * s - a * a),
      c = r - u,
      h = Math.sqrt(a * a + c * c),
      d = h / a;
    if (e === "miter" && d <= i) return d * n;
    const f = n / 2 / d,
      m = (n / 2) * (c / h),
      v = Math.sqrt((r + f) * (r + f) + m * m) - r;
    if (this.radius2_ === void 0 || e === "bevel") return v * 2;
    const p = r * Math.sin(l),
      g = Math.sqrt(r * r - p * p),
      _ = s - g,
      w = Math.sqrt(p * p + _ * _) / p;
    if (w <= i) {
      const x = (w * n) / 2 - s - r;
      return 2 * Math.max(v, x);
    }
    return v * 2;
  }
  createRenderOptions() {
    let e = Vr,
      n = br,
      i = 0,
      r = null,
      s = 0,
      o,
      l = 0;
    this.stroke_ &&
      ((o = $t(this.stroke_.getColor() ?? so)),
      (l = this.stroke_.getWidth() ?? lo),
      (r = this.stroke_.getLineDash()),
      (s = this.stroke_.getLineDashOffset() ?? 0),
      (n = this.stroke_.getLineJoin() ?? br),
      (e = this.stroke_.getLineCap() ?? Vr),
      (i = this.stroke_.getMiterLimit() ?? ro));
    const a = this.calculateLineJoinSize_(n, l, i),
      u = Math.max(this.radius_, this.radius2_ || 0),
      c = Math.ceil(2 * u + a);
    return {
      strokeStyle: o,
      strokeWidth: l,
      size: c,
      lineCap: e,
      lineDash: r,
      lineDashOffset: s,
      lineJoin: n,
      miterLimit: i,
    };
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const e = this.renderOptions_.size;
    (this.canvases_ = {}),
      (this.hitDetectionCanvas_ = null),
      (this.size_ = [e, e]);
  }
  draw_(e, n, i) {
    if (
      (n.scale(i, i),
      n.translate(e.size / 2, e.size / 2),
      this.createPath_(n),
      this.fill_)
    ) {
      let r = this.fill_.getColor();
      r === null && (r = nt), (n.fillStyle = $t(r)), n.fill();
    }
    e.strokeStyle &&
      ((n.strokeStyle = e.strokeStyle),
      (n.lineWidth = e.strokeWidth),
      e.lineDash &&
        (n.setLineDash(e.lineDash), (n.lineDashOffset = e.lineDashOffset)),
      (n.lineCap = e.lineCap),
      (n.lineJoin = e.lineJoin),
      (n.miterLimit = e.miterLimit),
      n.stroke());
  }
  createHitDetectionCanvas_(e) {
    let n;
    if (this.fill_) {
      let i = this.fill_.getColor(),
        r = 0;
      typeof i == "string" && (i = ea(i)),
        i === null
          ? (r = 1)
          : Array.isArray(i) && (r = i.length === 4 ? i[3] : 1),
        r === 0 &&
          ((n = Ke(e.size, e.size)), this.drawHitDetectionCanvas_(e, n));
    }
    return n ? n.canvas : this.getImage(1);
  }
  createPath_(e) {
    let n = this.points_;
    const i = this.radius_;
    if (n === 1 / 0) e.arc(0, 0, i, 0, 2 * Math.PI);
    else {
      const r = this.radius2_ === void 0 ? i : this.radius2_;
      this.radius2_ !== void 0 && (n *= 2);
      const s = this.angle_ - Math.PI / 2,
        o = (2 * Math.PI) / n;
      for (let l = 0; l < n; l++) {
        const a = s + l * o,
          u = l % 2 === 0 ? i : r;
        e.lineTo(u * Math.cos(a), u * Math.sin(a));
      }
      e.closePath();
    }
  }
  drawHitDetectionCanvas_(e, n) {
    n.translate(e.size / 2, e.size / 2),
      this.createPath_(n),
      (n.fillStyle = nt),
      n.fill(),
      e.strokeStyle &&
        ((n.strokeStyle = e.strokeStyle),
        (n.lineWidth = e.strokeWidth),
        e.lineDash &&
          (n.setLineDash(e.lineDash), (n.lineDashOffset = e.lineDashOffset)),
        (n.lineJoin = e.lineJoin),
        (n.miterLimit = e.miterLimit),
        n.stroke());
  }
}
class Xa extends ja {
  constructor(e) {
    (e = e || { radius: 5 }),
      super({
        points: 1 / 0,
        fill: e.fill,
        radius: e.radius,
        stroke: e.stroke,
        scale: e.scale !== void 0 ? e.scale : 1,
        rotation: e.rotation !== void 0 ? e.rotation : 0,
        rotateWithView: e.rotateWithView !== void 0 ? e.rotateWithView : !1,
        displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
        declutterMode: e.declutterMode,
      });
  }
  clone() {
    const e = this.getScale(),
      n = new Xa({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(e) ? e.slice() : e,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return n.setOpacity(this.getOpacity()), n;
  }
  setRadius(e) {
    (this.radius_ = e), this.render();
  }
}
class Ua {
  constructor(e) {
    (e = e || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = vg),
      e.geometry !== void 0 && this.setGeometry(e.geometry),
      (this.fill_ = e.fill !== void 0 ? e.fill : null),
      (this.image_ = e.image !== void 0 ? e.image : null),
      (this.renderer_ = e.renderer !== void 0 ? e.renderer : null),
      (this.hitDetectionRenderer_ =
        e.hitDetectionRenderer !== void 0 ? e.hitDetectionRenderer : null),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      (this.text_ = e.text !== void 0 ? e.text : null),
      (this.zIndex_ = e.zIndex);
  }
  clone() {
    let e = this.getGeometry();
    return (
      e && typeof e == "object" && (e = e.clone()),
      new Ua({
        geometry: e ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex(),
      })
    );
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(e) {
    this.renderer_ = e;
  }
  setHitDetectionRenderer(e) {
    this.hitDetectionRenderer_ = e;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(e) {
    this.fill_ = e;
  }
  getImage() {
    return this.image_;
  }
  setImage(e) {
    this.image_ = e;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(e) {
    this.stroke_ = e;
  }
  getText() {
    return this.text_;
  }
  setText(e) {
    this.text_ = e;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(e) {
    typeof e == "function"
      ? (this.geometryFunction_ = e)
      : typeof e == "string"
        ? (this.geometryFunction_ = function (n) {
            return n.get(e);
          })
        : e
          ? e !== void 0 &&
            (this.geometryFunction_ = function () {
              return e;
            })
          : (this.geometryFunction_ = vg),
      (this.geometry_ = e);
  }
  setZIndex(e) {
    this.zIndex_ = e;
  }
}
function fE(t) {
  let e;
  if (typeof t == "function") e = t;
  else {
    let n;
    Array.isArray(t)
      ? (n = t)
      : (Q(
          typeof t.getZIndex == "function",
          "Expected an `Style` or an array of `Style`",
        ),
        (n = [t])),
      (e = function () {
        return n;
      });
  }
  return e;
}
let Tu = null;
function gE(t, e) {
  if (!Tu) {
    const n = new xo({ color: "rgba(255,255,255,0.4)" }),
      i = new Na({ color: "#3399CC", width: 1.25 });
    Tu = [
      new Ua({
        image: new Xa({ fill: n, stroke: i, radius: 5 }),
        fill: n,
        stroke: i,
      }),
    ];
  }
  return Tu;
}
function vg(t) {
  return t.getGeometry();
}
const Cl = Ua,
  pE = "#333";
class vd {
  constructor(e) {
    (e = e || {}),
      (this.font_ = e.font),
      (this.rotation_ = e.rotation),
      (this.rotateWithView_ = e.rotateWithView),
      (this.scale_ = e.scale),
      (this.scaleArray_ = gt(e.scale !== void 0 ? e.scale : 1)),
      (this.text_ = e.text),
      (this.textAlign_ = e.textAlign),
      (this.justify_ = e.justify),
      (this.repeat_ = e.repeat),
      (this.textBaseline_ = e.textBaseline),
      (this.fill_ = e.fill !== void 0 ? e.fill : new xo({ color: pE })),
      (this.maxAngle_ = e.maxAngle !== void 0 ? e.maxAngle : Math.PI / 4),
      (this.placement_ = e.placement !== void 0 ? e.placement : "point"),
      (this.overflow_ = !!e.overflow),
      (this.stroke_ = e.stroke !== void 0 ? e.stroke : null),
      (this.offsetX_ = e.offsetX !== void 0 ? e.offsetX : 0),
      (this.offsetY_ = e.offsetY !== void 0 ? e.offsetY : 0),
      (this.backgroundFill_ = e.backgroundFill ? e.backgroundFill : null),
      (this.backgroundStroke_ = e.backgroundStroke ? e.backgroundStroke : null),
      (this.padding_ = e.padding === void 0 ? null : e.padding);
  }
  clone() {
    const e = this.getScale();
    return new vd({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(e) ? e.slice() : e,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill()
        ? this.getBackgroundFill().clone()
        : void 0,
      backgroundStroke: this.getBackgroundStroke()
        ? this.getBackgroundStroke().clone()
        : void 0,
      padding: this.getPadding() || void 0,
    });
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  setOverflow(e) {
    this.overflow_ = e;
  }
  setFont(e) {
    this.font_ = e;
  }
  setMaxAngle(e) {
    this.maxAngle_ = e;
  }
  setOffsetX(e) {
    this.offsetX_ = e;
  }
  setOffsetY(e) {
    this.offsetY_ = e;
  }
  setPlacement(e) {
    this.placement_ = e;
  }
  setRepeat(e) {
    this.repeat_ = e;
  }
  setRotateWithView(e) {
    this.rotateWithView_ = e;
  }
  setFill(e) {
    this.fill_ = e;
  }
  setRotation(e) {
    this.rotation_ = e;
  }
  setScale(e) {
    (this.scale_ = e), (this.scaleArray_ = gt(e !== void 0 ? e : 1));
  }
  setStroke(e) {
    this.stroke_ = e;
  }
  setText(e) {
    this.text_ = e;
  }
  setTextAlign(e) {
    this.textAlign_ = e;
  }
  setJustify(e) {
    this.justify_ = e;
  }
  setTextBaseline(e) {
    this.textBaseline_ = e;
  }
  setBackgroundFill(e) {
    this.backgroundFill_ = e;
  }
  setBackgroundStroke(e) {
    this.backgroundStroke_ = e;
  }
  setPadding(e) {
    this.padding_ = e;
  }
}
const ie = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map",
};
class B_ extends nn {
  constructor(e) {
    super(), this.on, this.once, this.un, (this.background_ = e.background);
    const n = Object.assign({}, e);
    typeof e.properties == "object" &&
      (delete n.properties, Object.assign(n, e.properties)),
      (n[ie.OPACITY] = e.opacity !== void 0 ? e.opacity : 1),
      Q(typeof n[ie.OPACITY] == "number", "Layer opacity must be a number"),
      (n[ie.VISIBLE] = e.visible !== void 0 ? e.visible : !0),
      (n[ie.Z_INDEX] = e.zIndex),
      (n[ie.MAX_RESOLUTION] =
        e.maxResolution !== void 0 ? e.maxResolution : 1 / 0),
      (n[ie.MIN_RESOLUTION] = e.minResolution !== void 0 ? e.minResolution : 0),
      (n[ie.MIN_ZOOM] = e.minZoom !== void 0 ? e.minZoom : -1 / 0),
      (n[ie.MAX_ZOOM] = e.maxZoom !== void 0 ? e.maxZoom : 1 / 0),
      (this.className_ = n.className !== void 0 ? n.className : "ol-layer"),
      delete n.className,
      this.setProperties(n),
      (this.state_ = null);
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(e) {
    const n = this.state_ || { layer: this, managed: e === void 0 ? !0 : e },
      i = this.getZIndex();
    return (
      (n.opacity = Se(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (n.visible = this.getVisible()),
      (n.extent = this.getExtent()),
      (n.zIndex = i === void 0 && !n.managed ? 1 / 0 : i),
      (n.maxResolution = this.getMaxResolution()),
      (n.minResolution = Math.max(this.getMinResolution(), 0)),
      (n.minZoom = this.getMinZoom()),
      (n.maxZoom = this.getMaxZoom()),
      (this.state_ = n),
      n
    );
  }
  getLayersArray(e) {
    return W();
  }
  getLayerStatesArray(e) {
    return W();
  }
  getExtent() {
    return this.get(ie.EXTENT);
  }
  getMaxResolution() {
    return this.get(ie.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(ie.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(ie.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(ie.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(ie.OPACITY);
  }
  getSourceState() {
    return W();
  }
  getVisible() {
    return this.get(ie.VISIBLE);
  }
  getZIndex() {
    return this.get(ie.Z_INDEX);
  }
  setBackground(e) {
    (this.background_ = e), this.changed();
  }
  setExtent(e) {
    this.set(ie.EXTENT, e);
  }
  setMaxResolution(e) {
    this.set(ie.MAX_RESOLUTION, e);
  }
  setMinResolution(e) {
    this.set(ie.MIN_RESOLUTION, e);
  }
  setMaxZoom(e) {
    this.set(ie.MAX_ZOOM, e);
  }
  setMinZoom(e) {
    this.set(ie.MIN_ZOOM, e);
  }
  setOpacity(e) {
    Q(typeof e == "number", "Layer opacity must be a number"),
      this.set(ie.OPACITY, e);
  }
  setVisible(e) {
    this.set(ie.VISIBLE, e);
  }
  setZIndex(e) {
    this.set(ie.Z_INDEX, e);
  }
  disposeInternal() {
    this.state_ && ((this.state_.layer = null), (this.state_ = null)),
      super.disposeInternal();
  }
}
const We = { ANIMATING: 0, INTERACTING: 1 },
  Ft = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" },
  mE = 42,
  Ed = 256;
function Eg(t, e, n) {
  return function (i, r, s, o, l) {
    if (!i) return;
    if (!r && !e) return i;
    const a = e ? 0 : s[0] * r,
      u = e ? 0 : s[1] * r,
      c = l ? l[0] : 0,
      h = l ? l[1] : 0;
    let d = t[0] + a / 2 + c,
      f = t[2] - a / 2 + c,
      m = t[1] + u / 2 + h,
      y = t[3] - u / 2 + h;
    d > f && ((d = (f + d) / 2), (f = d)),
      m > y && ((m = (y + m) / 2), (y = m));
    let v = Se(i[0], d, f),
      p = Se(i[1], m, y);
    if (o && n && r) {
      const g = 30 * r;
      (v +=
        -g * Math.log(1 + Math.max(0, d - i[0]) / g) +
        g * Math.log(1 + Math.max(0, i[0] - f) / g)),
        (p +=
          -g * Math.log(1 + Math.max(0, m - i[1]) / g) +
          g * Math.log(1 + Math.max(0, i[1] - y) / g));
    }
    return [v, p];
  };
}
function _E(t) {
  return t;
}
function wd(t, e, n, i) {
  const r = oe(e) / n[0],
    s = mt(e) / n[1];
  return i ? Math.min(t, Math.max(r, s)) : Math.min(t, Math.min(r, s));
}
function xd(t, e, n) {
  let i = Math.min(t, e);
  const r = 50;
  return (
    (i *= Math.log(1 + r * Math.max(0, t / e - 1)) / r + 1),
    n &&
      ((i = Math.max(i, n)),
      (i /= Math.log(1 + r * Math.max(0, n / t - 1)) / r + 1)),
    Se(i, n / 2, e * 2)
  );
}
function yE(t, e, n, i) {
  return (
    (e = e !== void 0 ? e : !0),
    function (r, s, o, l) {
      if (r !== void 0) {
        const a = t[0],
          u = t[t.length - 1],
          c = n ? wd(a, n, o, i) : a;
        if (l) return e ? xd(r, c, u) : Se(r, u, c);
        const h = Math.min(c, r),
          d = Math.floor($h(t, h, s));
        return t[d] > c && d < t.length - 1 ? t[d + 1] : t[d];
      }
    }
  );
}
function vE(t, e, n, i, r, s) {
  return (
    (i = i !== void 0 ? i : !0),
    (n = n !== void 0 ? n : 0),
    function (o, l, a, u) {
      if (o !== void 0) {
        const c = r ? wd(e, r, a, s) : e;
        if (u) return i ? xd(o, c, n) : Se(o, n, c);
        const h = 1e-9,
          d = Math.ceil(Math.log(e / c) / Math.log(t) - h),
          f = -l * (0.5 - h) + 0.5,
          m = Math.min(c, o),
          y = Math.floor(Math.log(e / m) / Math.log(t) + f),
          v = Math.max(d, y),
          p = e / Math.pow(t, v);
        return Se(p, n, c);
      }
    }
  );
}
function wg(t, e, n, i, r) {
  return (
    (n = n !== void 0 ? n : !0),
    function (s, o, l, a) {
      if (s !== void 0) {
        const u = i ? wd(t, i, l, r) : t;
        return !n || !a ? Se(s, e, u) : xd(s, u, e);
      }
    }
  );
}
function Cd(t) {
  if (t !== void 0) return 0;
}
function xg(t) {
  if (t !== void 0) return t;
}
function EE(t) {
  const e = (2 * Math.PI) / t;
  return function (n, i) {
    if (i) return n;
    if (n !== void 0) return (n = Math.floor(n / e + 0.5) * e), n;
  };
}
function wE(t) {
  const e = t === void 0 ? xl(5) : t;
  return function (n, i) {
    return i || n === void 0 ? n : Math.abs(n) <= e ? 0 : n;
  };
}
function V_(t) {
  return Math.pow(t, 3);
}
function qr(t) {
  return 1 - V_(1 - t);
}
function xE(t) {
  return 3 * t * t - 2 * t * t * t;
}
function CE(t) {
  return t;
}
const Iu = 0;
class Kt extends nn {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (e = Object.assign({}, e)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = sd(e.projection, "EPSG:3857")),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      e.projection && Iv(),
      e.center && (e.center = hn(e.center, this.projection_)),
      e.extent && (e.extent = ki(e.extent, this.projection_)),
      this.applyOptions_(e);
  }
  applyOptions_(e) {
    const n = Object.assign({}, e);
    for (const l in Ft) delete n[l];
    this.setProperties(n, !0);
    const i = RE(e);
    (this.maxResolution_ = i.maxResolution),
      (this.minResolution_ = i.minResolution),
      (this.zoomFactor_ = i.zoomFactor),
      (this.resolutions_ = e.resolutions),
      (this.padding_ = e.padding),
      (this.minZoom_ = i.minZoom);
    const r = SE(e),
      s = i.constraint,
      o = TE(e);
    (this.constraints_ = { center: r, resolution: s, rotation: o }),
      this.setRotation(e.rotation !== void 0 ? e.rotation : 0),
      this.setCenterInternal(e.center !== void 0 ? e.center : null),
      e.resolution !== void 0
        ? this.setResolution(e.resolution)
        : e.zoom !== void 0 && this.setZoom(e.zoom);
  }
  get padding() {
    return this.padding_;
  }
  set padding(e) {
    let n = this.padding_;
    this.padding_ = e;
    const i = this.getCenterInternal();
    if (i) {
      const r = e || [0, 0, 0, 0];
      n = n || [0, 0, 0, 0];
      const s = this.getResolution(),
        o = (s / 2) * (r[3] - n[3] + n[1] - r[1]),
        l = (s / 2) * (r[0] - n[0] + n[2] - r[2]);
      this.setCenterInternal([i[0] + o, i[1] - l]);
    }
  }
  getUpdatedOptions_(e) {
    const n = this.getProperties();
    return (
      n.resolution !== void 0
        ? (n.resolution = this.getResolution())
        : (n.zoom = this.getZoom()),
      (n.center = this.getCenterInternal()),
      (n.rotation = this.getRotation()),
      Object.assign({}, n, e)
    );
  }
  animate(e) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const n = new Array(arguments.length);
    for (let i = 0; i < n.length; ++i) {
      let r = arguments[i];
      r.center &&
        ((r = Object.assign({}, r)),
        (r.center = hn(r.center, this.getProjection()))),
        r.anchor &&
          ((r = Object.assign({}, r)),
          (r.anchor = hn(r.anchor, this.getProjection()))),
        (n[i] = r);
    }
    this.animateInternal.apply(this, n);
  }
  animateInternal(e) {
    let n = arguments.length,
      i;
    n > 1 &&
      typeof arguments[n - 1] == "function" &&
      ((i = arguments[n - 1]), --n);
    let r = 0;
    for (; r < n && !this.isDef(); ++r) {
      const c = arguments[r];
      c.center && this.setCenterInternal(c.center),
        c.zoom !== void 0
          ? this.setZoom(c.zoom)
          : c.resolution && this.setResolution(c.resolution),
        c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (r === n) {
      i && il(i, !0);
      return;
    }
    let s = Date.now(),
      o = this.targetCenter_.slice(),
      l = this.targetResolution_,
      a = this.targetRotation_;
    const u = [];
    for (; r < n; ++r) {
      const c = arguments[r],
        h = {
          start: s,
          complete: !1,
          anchor: c.anchor,
          duration: c.duration !== void 0 ? c.duration : 1e3,
          easing: c.easing || xE,
          callback: i,
        };
      if (
        (c.center &&
          ((h.sourceCenter = o),
          (h.targetCenter = c.center.slice()),
          (o = h.targetCenter)),
        c.zoom !== void 0
          ? ((h.sourceResolution = l),
            (h.targetResolution = this.getResolutionForZoom(c.zoom)),
            (l = h.targetResolution))
          : c.resolution &&
            ((h.sourceResolution = l),
            (h.targetResolution = c.resolution),
            (l = h.targetResolution)),
        c.rotation !== void 0)
      ) {
        h.sourceRotation = a;
        const d = Ar(c.rotation - a + Math.PI, 2 * Math.PI) - Math.PI;
        (h.targetRotation = a + d), (a = h.targetRotation);
      }
      IE(h) ? (h.complete = !0) : (s += h.duration), u.push(h);
    }
    this.animations_.push(u),
      this.setHint(We.ANIMATING, 1),
      this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[We.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[We.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(We.ANIMATING, -this.hints_[We.ANIMATING]);
    let e;
    for (let n = 0, i = this.animations_.length; n < i; ++n) {
      const r = this.animations_[n];
      if ((r[0].callback && il(r[0].callback, !1), !e))
        for (let s = 0, o = r.length; s < o; ++s) {
          const l = r[s];
          if (!l.complete) {
            e = l.anchor;
            break;
          }
        }
    }
    (this.animations_.length = 0),
      (this.cancelAnchor_ = e),
      (this.nextCenter_ = null),
      (this.nextResolution_ = NaN),
      (this.nextRotation_ = NaN);
  }
  updateAnimations_() {
    if (
      (this.updateAnimationKey_ !== void 0 &&
        (cancelAnimationFrame(this.updateAnimationKey_),
        (this.updateAnimationKey_ = void 0)),
      !this.getAnimating())
    )
      return;
    const e = Date.now();
    let n = !1;
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const r = this.animations_[i];
      let s = !0;
      for (let o = 0, l = r.length; o < l; ++o) {
        const a = r[o];
        if (a.complete) continue;
        const u = e - a.start;
        let c = a.duration > 0 ? u / a.duration : 1;
        c >= 1 ? ((a.complete = !0), (c = 1)) : (s = !1);
        const h = a.easing(c);
        if (a.sourceCenter) {
          const d = a.sourceCenter[0],
            f = a.sourceCenter[1],
            m = a.targetCenter[0],
            y = a.targetCenter[1];
          this.nextCenter_ = a.targetCenter;
          const v = d + h * (m - d),
            p = f + h * (y - f);
          this.targetCenter_ = [v, p];
        }
        if (a.sourceResolution && a.targetResolution) {
          const d =
            h === 1
              ? a.targetResolution
              : a.sourceResolution +
                h * (a.targetResolution - a.sourceResolution);
          if (a.anchor) {
            const f = this.getViewportSize_(this.getRotation()),
              m = this.constraints_.resolution(d, 0, f, !0);
            this.targetCenter_ = this.calculateCenterZoom(m, a.anchor);
          }
          (this.nextResolution_ = a.targetResolution),
            (this.targetResolution_ = d),
            this.applyTargetState_(!0);
        }
        if (a.sourceRotation !== void 0 && a.targetRotation !== void 0) {
          const d =
            h === 1
              ? Ar(a.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
              : a.sourceRotation + h * (a.targetRotation - a.sourceRotation);
          if (a.anchor) {
            const f = this.constraints_.rotation(d, !0);
            this.targetCenter_ = this.calculateCenterRotate(f, a.anchor);
          }
          (this.nextRotation_ = a.targetRotation), (this.targetRotation_ = d);
        }
        if ((this.applyTargetState_(!0), (n = !0), !a.complete)) break;
      }
      if (s) {
        (this.animations_[i] = null),
          this.setHint(We.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN);
        const o = r[0].callback;
        o && il(o, !0);
      }
    }
    (this.animations_ = this.animations_.filter(Boolean)),
      n &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this),
        ));
  }
  calculateCenterRotate(e, n) {
    let i;
    const r = this.getCenterInternal();
    return (
      r !== void 0 &&
        ((i = [r[0] - n[0], r[1] - n[1]]),
        id(i, e - this.getRotation()),
        Cv(i, n)),
      i
    );
  }
  calculateCenterZoom(e, n) {
    let i;
    const r = this.getCenterInternal(),
      s = this.getResolution();
    if (r !== void 0 && s !== void 0) {
      const o = n[0] - (e * (n[0] - r[0])) / s,
        l = n[1] - (e * (n[1] - r[1])) / s;
      i = [o, l];
    }
    return i;
  }
  getViewportSize_(e) {
    const n = this.viewportSize_;
    if (e) {
      const i = n[0],
        r = n[1];
      return [
        Math.abs(i * Math.cos(e)) + Math.abs(r * Math.sin(e)),
        Math.abs(i * Math.sin(e)) + Math.abs(r * Math.cos(e)),
      ];
    }
    return n;
  }
  setViewportSize(e) {
    (this.viewportSize_ = Array.isArray(e) ? e.slice() : [100, 100]),
      this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    const e = this.getCenterInternal();
    return e && jc(e, this.getProjection());
  }
  getCenterInternal() {
    return this.get(Ft.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  getHints(e) {
    return e !== void 0
      ? ((e[0] = this.hints_[0]), (e[1] = this.hints_[1]), e)
      : this.hints_.slice();
  }
  calculateExtent(e) {
    const n = this.calculateExtentInternal(e);
    return Xc(n, this.getProjection());
  }
  calculateExtentInternal(e) {
    e = e || this.getViewportSizeMinusPadding_();
    const n = this.getCenterInternal();
    Q(n, "The view center is not defined");
    const i = this.getResolution();
    Q(i !== void 0, "The view resolution is not defined");
    const r = this.getRotation();
    return Q(r !== void 0, "The view rotation is not defined"), Nc(n, i, r, e);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: e }));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(e) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: e }));
  }
  setConstrainResolution(e) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: e }));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(Ft.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(e, n) {
    return this.getResolutionForExtentInternal(ki(e, this.getProjection()), n);
  }
  getResolutionForExtentInternal(e, n) {
    n = n || this.getViewportSizeMinusPadding_();
    const i = oe(e) / n[0],
      r = mt(e) / n[1];
    return Math.max(i, r);
  }
  getResolutionForValueFunction(e) {
    e = e || 2;
    const n = this.getConstrainedResolution(this.maxResolution_),
      i = this.minResolution_,
      r = Math.log(n / i) / Math.log(e);
    return function (s) {
      return n / Math.pow(e, s * r);
    };
  }
  getRotation() {
    return this.get(Ft.ROTATION);
  }
  getValueForResolutionFunction(e) {
    const n = Math.log(e || 2),
      i = this.getConstrainedResolution(this.maxResolution_),
      r = this.minResolution_,
      s = Math.log(i / r) / n;
    return function (o) {
      return Math.log(i / o) / n / s;
    };
  }
  getViewportSizeMinusPadding_(e) {
    let n = this.getViewportSize_(e);
    const i = this.padding_;
    return i && (n = [n[0] - i[1] - i[3], n[1] - i[0] - i[2]]), n;
  }
  getState() {
    const e = this.getProjection(),
      n = this.getResolution(),
      i = this.getRotation();
    let r = this.getCenterInternal();
    const s = this.padding_;
    if (s) {
      const o = this.getViewportSizeMinusPadding_();
      r = Lu(
        r,
        this.getViewportSize_(),
        [o[0] / 2 + s[3], o[1] / 2 + s[0]],
        n,
        i,
      );
    }
    return {
      center: r.slice(0),
      projection: e !== void 0 ? e : null,
      resolution: n,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: i,
      zoom: this.getZoom(),
    };
  }
  getViewStateAndExtent() {
    return { viewState: this.getState(), extent: this.calculateExtent() };
  }
  getZoom() {
    let e;
    const n = this.getResolution();
    return n !== void 0 && (e = this.getZoomForResolution(n)), e;
  }
  getZoomForResolution(e) {
    let n = this.minZoom_ || 0,
      i,
      r;
    if (this.resolutions_) {
      const s = $h(this.resolutions_, e, 1);
      (n = s),
        (i = this.resolutions_[s]),
        s == this.resolutions_.length - 1
          ? (r = 2)
          : (r = i / this.resolutions_[s + 1]);
    } else (i = this.maxResolution_), (r = this.zoomFactor_);
    return n + Math.log(i / e) / Math.log(r);
  }
  getResolutionForZoom(e) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1) return 0;
      const n = Se(Math.floor(e), 0, this.resolutions_.length - 2),
        i = this.resolutions_[n] / this.resolutions_[n + 1];
      return this.resolutions_[n] / Math.pow(i, Se(e - n, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, e - this.minZoom_);
  }
  fit(e, n) {
    let i;
    if (
      (Q(
        Array.isArray(e) || typeof e.getSimplifiedGeometry == "function",
        "Invalid extent or geometry provided as `geometry`",
      ),
      Array.isArray(e))
    ) {
      Q(!vo(e), "Cannot fit empty extent provided as `geometry`");
      const r = ki(e, this.getProjection());
      i = cg(r);
    } else if (e.getType() === "Circle") {
      const r = ki(e.getExtent(), this.getProjection());
      (i = cg(r)), i.rotate(this.getRotation(), ci(r));
    } else {
      const r = S_();
      r ? (i = e.clone().transform(r, this.getProjection())) : (i = e);
    }
    this.fitInternal(i, n);
  }
  rotatedExtentForGeometry(e) {
    const n = this.getRotation(),
      i = Math.cos(n),
      r = Math.sin(-n),
      s = e.getFlatCoordinates(),
      o = e.getStride();
    let l = 1 / 0,
      a = 1 / 0,
      u = -1 / 0,
      c = -1 / 0;
    for (let h = 0, d = s.length; h < d; h += o) {
      const f = s[h] * i - s[h + 1] * r,
        m = s[h] * r + s[h + 1] * i;
      (l = Math.min(l, f)),
        (a = Math.min(a, m)),
        (u = Math.max(u, f)),
        (c = Math.max(c, m));
    }
    return [l, a, u, c];
  }
  fitInternal(e, n) {
    n = n || {};
    let i = n.size;
    i || (i = this.getViewportSizeMinusPadding_());
    const r = n.padding !== void 0 ? n.padding : [0, 0, 0, 0],
      s = n.nearest !== void 0 ? n.nearest : !1;
    let o;
    n.minResolution !== void 0
      ? (o = n.minResolution)
      : n.maxZoom !== void 0
        ? (o = this.getResolutionForZoom(n.maxZoom))
        : (o = 0);
    const l = this.rotatedExtentForGeometry(e);
    let a = this.getResolutionForExtentInternal(l, [
      i[0] - r[1] - r[3],
      i[1] - r[0] - r[2],
    ]);
    (a = isNaN(a) ? o : Math.max(a, o)),
      (a = this.getConstrainedResolution(a, s ? 0 : 1));
    const u = this.getRotation(),
      c = Math.sin(u),
      h = Math.cos(u),
      d = ci(l);
    (d[0] += ((r[1] - r[3]) / 2) * a), (d[1] += ((r[0] - r[2]) / 2) * a);
    const f = d[0] * h - d[1] * c,
      m = d[1] * h + d[0] * c,
      y = this.getConstrainedCenter([f, m], a),
      v = n.callback ? n.callback : Ur;
    n.duration !== void 0
      ? this.animateInternal(
          { resolution: a, center: y, duration: n.duration, easing: n.easing },
          v,
        )
      : ((this.targetResolution_ = a),
        (this.targetCenter_ = y),
        this.applyTargetState_(!1, !0),
        il(v, !0));
  }
  centerOn(e, n, i) {
    this.centerOnInternal(hn(e, this.getProjection()), n, i);
  }
  centerOnInternal(e, n, i) {
    this.setCenterInternal(
      Lu(e, n, i, this.getResolution(), this.getRotation()),
    );
  }
  calculateCenterShift(e, n, i, r) {
    let s;
    const o = this.padding_;
    if (o && e) {
      const l = this.getViewportSizeMinusPadding_(-i),
        a = Lu(e, r, [l[0] / 2 + o[3], l[1] / 2 + o[0]], n, i);
      s = [e[0] - a[0], e[1] - a[1]];
    }
    return s;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(e) {
    const n = jc(this.targetCenter_, this.getProjection());
    this.setCenter([n[0] + e[0], n[1] + e[1]]);
  }
  adjustCenterInternal(e) {
    const n = this.targetCenter_;
    this.setCenterInternal([n[0] + e[0], n[1] + e[1]]);
  }
  adjustResolution(e, n) {
    (n = n && hn(n, this.getProjection())), this.adjustResolutionInternal(e, n);
  }
  adjustResolutionInternal(e, n) {
    const i = this.getAnimating() || this.getInteracting(),
      r = this.getViewportSize_(this.getRotation()),
      s = this.constraints_.resolution(this.targetResolution_ * e, 0, r, i);
    n && (this.targetCenter_ = this.calculateCenterZoom(s, n)),
      (this.targetResolution_ *= e),
      this.applyTargetState_();
  }
  adjustZoom(e, n) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -e), n);
  }
  adjustRotation(e, n) {
    n && (n = hn(n, this.getProjection())), this.adjustRotationInternal(e, n);
  }
  adjustRotationInternal(e, n) {
    const i = this.getAnimating() || this.getInteracting(),
      r = this.constraints_.rotation(this.targetRotation_ + e, i);
    n && (this.targetCenter_ = this.calculateCenterRotate(r, n)),
      (this.targetRotation_ += e),
      this.applyTargetState_();
  }
  setCenter(e) {
    this.setCenterInternal(e && hn(e, this.getProjection()));
  }
  setCenterInternal(e) {
    (this.targetCenter_ = e), this.applyTargetState_();
  }
  setHint(e, n) {
    return (this.hints_[e] += n), this.changed(), this.hints_[e];
  }
  setResolution(e) {
    (this.targetResolution_ = e), this.applyTargetState_();
  }
  setRotation(e) {
    (this.targetRotation_ = e), this.applyTargetState_();
  }
  setZoom(e) {
    this.setResolution(this.getResolutionForZoom(e));
  }
  applyTargetState_(e, n) {
    const i = this.getAnimating() || this.getInteracting() || n,
      r = this.constraints_.rotation(this.targetRotation_, i),
      s = this.getViewportSize_(r),
      o = this.constraints_.resolution(this.targetResolution_, 0, s, i),
      l = this.constraints_.center(
        this.targetCenter_,
        o,
        s,
        i,
        this.calculateCenterShift(this.targetCenter_, o, r, s),
      );
    this.get(Ft.ROTATION) !== r && this.set(Ft.ROTATION, r),
      this.get(Ft.RESOLUTION) !== o &&
        (this.set(Ft.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)),
      (!l || !this.get(Ft.CENTER) || !$l(this.get(Ft.CENTER), l)) &&
        this.set(Ft.CENTER, l),
      this.getAnimating() && !e && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0);
  }
  resolveConstraints(e, n, i) {
    e = e !== void 0 ? e : 200;
    const r = n || 0,
      s = this.constraints_.rotation(this.targetRotation_),
      o = this.getViewportSize_(s),
      l = this.constraints_.resolution(this.targetResolution_, r, o),
      a = this.constraints_.center(
        this.targetCenter_,
        l,
        o,
        !1,
        this.calculateCenterShift(this.targetCenter_, l, s, o),
      );
    if (e === 0 && !this.cancelAnchor_) {
      (this.targetResolution_ = l),
        (this.targetRotation_ = s),
        (this.targetCenter_ = a),
        this.applyTargetState_();
      return;
    }
    (i = i || (e === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== l ||
        this.getRotation() !== s ||
        !this.getCenterInternal() ||
        !$l(this.getCenterInternal(), a)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({
          rotation: s,
          center: a,
          resolution: l,
          duration: e,
          easing: qr,
          anchor: i,
        }));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(We.INTERACTING, 1);
  }
  endInteraction(e, n, i) {
    (i = i && hn(i, this.getProjection())),
      this.endInteractionInternal(e, n, i);
  }
  endInteractionInternal(e, n, i) {
    this.getInteracting() &&
      (this.setHint(We.INTERACTING, -1), this.resolveConstraints(e, n, i));
  }
  getConstrainedCenter(e, n) {
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(e, n || this.getResolution(), i);
  }
  getConstrainedZoom(e, n) {
    const i = this.getResolutionForZoom(e);
    return this.getZoomForResolution(this.getConstrainedResolution(i, n));
  }
  getConstrainedResolution(e, n) {
    n = n || 0;
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(e, n, i);
  }
}
function il(t, e) {
  setTimeout(function () {
    t(e);
  }, 0);
}
function SE(t) {
  if (t.extent !== void 0) {
    const n =
      t.smoothExtentConstraint !== void 0 ? t.smoothExtentConstraint : !0;
    return Eg(t.extent, t.constrainOnlyCenter, n);
  }
  const e = sd(t.projection, "EPSG:3857");
  if (t.multiWorld !== !0 && e.isGlobal()) {
    const n = e.getExtent().slice();
    return (n[0] = -1 / 0), (n[2] = 1 / 0), Eg(n, !1, !1);
  }
  return _E;
}
function RE(t) {
  let e,
    n,
    i,
    o = t.minZoom !== void 0 ? t.minZoom : Iu,
    l = t.maxZoom !== void 0 ? t.maxZoom : 28;
  const a = t.zoomFactor !== void 0 ? t.zoomFactor : 2,
    u = t.multiWorld !== void 0 ? t.multiWorld : !1,
    c =
      t.smoothResolutionConstraint !== void 0
        ? t.smoothResolutionConstraint
        : !0,
    h = t.showFullExtent !== void 0 ? t.showFullExtent : !1,
    d = sd(t.projection, "EPSG:3857"),
    f = d.getExtent();
  let m = t.constrainOnlyCenter,
    y = t.extent;
  if (
    (!u && !y && d.isGlobal() && ((m = !1), (y = f)), t.resolutions !== void 0)
  ) {
    const v = t.resolutions;
    (n = v[o]),
      (i = v[l] !== void 0 ? v[l] : v[v.length - 1]),
      t.constrainResolution
        ? (e = yE(v, c, !m && y, h))
        : (e = wg(n, i, c, !m && y, h));
  } else {
    const p =
        (f
          ? Math.max(oe(f), mt(f))
          : (360 * eo.degrees) / d.getMetersPerUnit()) /
        Ed /
        Math.pow(2, Iu),
      g = p / Math.pow(2, 28 - Iu);
    (n = t.maxResolution),
      n !== void 0 ? (o = 0) : (n = p / Math.pow(a, o)),
      (i = t.minResolution),
      i === void 0 &&
        (t.maxZoom !== void 0
          ? t.maxResolution !== void 0
            ? (i = n / Math.pow(a, l))
            : (i = p / Math.pow(a, l))
          : (i = g)),
      (l = o + Math.floor(Math.log(n / i) / Math.log(a))),
      (i = n / Math.pow(a, l - o)),
      t.constrainResolution
        ? (e = vE(a, n, i, c, !m && y, h))
        : (e = wg(n, i, c, !m && y, h));
  }
  return {
    constraint: e,
    maxResolution: n,
    minResolution: i,
    minZoom: o,
    zoomFactor: a,
  };
}
function TE(t) {
  if (t.enableRotation !== void 0 ? t.enableRotation : !0) {
    const n = t.constrainRotation;
    return n === void 0 || n === !0
      ? wE()
      : n === !1
        ? xg
        : typeof n == "number"
          ? EE(n)
          : xg;
  }
  return Cd;
}
function IE(t) {
  return !(
    (t.sourceCenter && t.targetCenter && !$l(t.sourceCenter, t.targetCenter)) ||
    t.sourceResolution !== t.targetResolution ||
    t.sourceRotation !== t.targetRotation
  );
}
function Lu(t, e, n, i, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r),
    l = t[0] * s - t[1] * o,
    a = t[1] * s + t[0] * o;
  (l += (e[0] / 2 - n[0]) * i), (a += (n[1] - e[1] / 2) * i), (o = -o);
  const u = l * s - a * o,
    c = a * s + l * o;
  return [u, c];
}
class Ya extends B_ {
  constructor(e) {
    const n = Object.assign({}, e);
    delete n.source,
      super(n),
      this.on,
      this.once,
      this.un,
      (this.mapPrecomposeKey_ = null),
      (this.mapRenderKey_ = null),
      (this.sourceChangeKey_ = null),
      (this.renderer_ = null),
      (this.sourceReady_ = !1),
      (this.rendered = !1),
      e.render && (this.render = e.render),
      e.map && this.setMap(e.map),
      this.addChangeListener(ie.SOURCE, this.handleSourcePropertyChange_);
    const i = e.source ? e.source : null;
    this.setSource(i);
  }
  getLayersArray(e) {
    return (e = e || []), e.push(this), e;
  }
  getLayerStatesArray(e) {
    return (e = e || []), e.push(this.getLayerState()), e;
  }
  getSource() {
    return this.get(ie.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    const e = this.getSource();
    return e ? e.getState() : "undefined";
  }
  handleSourceChange_() {
    this.changed(),
      !(this.sourceReady_ || this.getSource().getState() !== "ready") &&
        ((this.sourceReady_ = !0), this.dispatchEvent("sourceready"));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ &&
      (ce(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1);
    const e = this.getSource();
    e &&
      ((this.sourceChangeKey_ = $(e, V.CHANGE, this.handleSourceChange_, this)),
      e.getState() === "ready" &&
        ((this.sourceReady_ = !0),
        setTimeout(() => {
          this.dispatchEvent("sourceready");
        }, 0))),
      this.changed();
  }
  getFeatures(e) {
    return this.renderer_ ? this.renderer_.getFeatures(e) : Promise.resolve([]);
  }
  getData(e) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(e);
  }
  isVisible(e) {
    let n;
    const i = this.getMapInternal();
    !e && i && (e = i.getView()),
      e instanceof Kt
        ? (n = { viewState: e.getState(), extent: e.calculateExtent() })
        : (n = e),
      !n.layerStatesArray &&
        i &&
        (n.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
    let r;
    n.layerStatesArray
      ? (r = n.layerStatesArray.find((o) => o.layer === this))
      : (r = this.getLayerState());
    const s = this.getExtent();
    return Sd(r, n.viewState) && (!s || it(s, n.extent));
  }
  getAttributions(e) {
    if (!this.isVisible(e)) return [];
    let n;
    const i = this.getSource();
    if ((i && (n = i.getAttributions()), !n)) return [];
    const r = e instanceof Kt ? e.getViewStateAndExtent() : e;
    let s = n(r);
    return Array.isArray(s) || (s = [s]), s;
  }
  render(e, n) {
    const i = this.getRenderer();
    return i.prepareFrame(e)
      ? ((this.rendered = !0), i.renderFrame(e, n))
      : null;
  }
  unrender() {
    this.rendered = !1;
  }
  setMapInternal(e) {
    e || this.unrender(), this.set(ie.MAP, e);
  }
  getMapInternal() {
    return this.get(ie.MAP);
  }
  setMap(e) {
    this.mapPrecomposeKey_ &&
      (ce(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      e || this.changed(),
      this.mapRenderKey_ &&
        (ce(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      e &&
        ((this.mapPrecomposeKey_ = $(
          e,
          en.PRECOMPOSE,
          function (n) {
            const r = n.frameState.layerStatesArray,
              s = this.getLayerState(!1);
            Q(
              !r.some(function (o) {
                return o.layer === s.layer;
              }),
              "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.",
            ),
              r.push(s);
          },
          this,
        )),
        (this.mapRenderKey_ = $(this, V.CHANGE, e.render, e)),
        this.changed());
  }
  setSource(e) {
    this.set(ie.SOURCE, e);
  }
  getRenderer() {
    return (
      this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_
    );
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_),
      this.setSource(null),
      super.disposeInternal();
  }
}
function Sd(t, e) {
  if (!t.visible) return !1;
  const n = e.resolution;
  if (n < t.minResolution || n >= t.maxResolution) return !1;
  const i = e.zoom;
  return i > t.minZoom && i <= t.maxZoom;
}
function LE(t, e, n, i, r) {
  b_(t, e, n || 0, i || t.length - 1, r || kE);
}
function b_(t, e, n, i, r) {
  for (; i > n; ) {
    if (i - n > 600) {
      var s = i - n + 1,
        o = e - n + 1,
        l = Math.log(s),
        a = 0.5 * Math.exp((2 * l) / 3),
        u = 0.5 * Math.sqrt((l * a * (s - a)) / s) * (o - s / 2 < 0 ? -1 : 1),
        c = Math.max(n, Math.floor(e - (o * a) / s + u)),
        h = Math.min(i, Math.floor(e + ((s - o) * a) / s + u));
      b_(t, e, c, h, r);
    }
    var d = t[e],
      f = n,
      m = i;
    for (gs(t, n, e), r(t[i], d) > 0 && gs(t, n, i); f < m; ) {
      for (gs(t, f, m), f++, m--; r(t[f], d) < 0; ) f++;
      for (; r(t[m], d) > 0; ) m--;
    }
    r(t[n], d) === 0 ? gs(t, n, m) : (m++, gs(t, m, i)),
      m <= e && (n = m + 1),
      e <= m && (i = m - 1);
  }
}
function gs(t, e, n) {
  var i = t[e];
  (t[e] = t[n]), (t[n] = i);
}
function kE(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
let K_ = class {
  constructor(e = 9) {
    (this._maxEntries = Math.max(4, e)),
      (this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4))),
      this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(e) {
    let n = this.data;
    const i = [];
    if (!sl(e, n)) return i;
    const r = this.toBBox,
      s = [];
    for (; n; ) {
      for (let o = 0; o < n.children.length; o++) {
        const l = n.children[o],
          a = n.leaf ? r(l) : l;
        sl(e, a) &&
          (n.leaf ? i.push(l) : Pu(e, a) ? this._all(l, i) : s.push(l));
      }
      n = s.pop();
    }
    return i;
  }
  collides(e) {
    let n = this.data;
    if (!sl(e, n)) return !1;
    const i = [];
    for (; n; ) {
      for (let r = 0; r < n.children.length; r++) {
        const s = n.children[r],
          o = n.leaf ? this.toBBox(s) : s;
        if (sl(e, o)) {
          if (n.leaf || Pu(e, o)) return !0;
          i.push(s);
        }
      }
      n = i.pop();
    }
    return !1;
  }
  load(e) {
    if (!(e && e.length)) return this;
    if (e.length < this._minEntries) {
      for (let i = 0; i < e.length; i++) this.insert(e[i]);
      return this;
    }
    let n = this._build(e.slice(), 0, e.length - 1, 0);
    if (!this.data.children.length) this.data = n;
    else if (this.data.height === n.height) this._splitRoot(this.data, n);
    else {
      if (this.data.height < n.height) {
        const i = this.data;
        (this.data = n), (n = i);
      }
      this._insert(n, this.data.height - n.height - 1, !0);
    }
    return this;
  }
  insert(e) {
    return e && this._insert(e, this.data.height - 1), this;
  }
  clear() {
    return (this.data = lr([])), this;
  }
  remove(e, n) {
    if (!e) return this;
    let i = this.data;
    const r = this.toBBox(e),
      s = [],
      o = [];
    let l, a, u;
    for (; i || s.length; ) {
      if (
        (i || ((i = s.pop()), (a = s[s.length - 1]), (l = o.pop()), (u = !0)),
        i.leaf)
      ) {
        const c = PE(e, i.children, n);
        if (c !== -1)
          return i.children.splice(c, 1), s.push(i), this._condense(s), this;
      }
      !u && !i.leaf && Pu(i, r)
        ? (s.push(i), o.push(l), (l = 0), (a = i), (i = i.children[0]))
        : a
          ? (l++, (i = a.children[l]), (u = !1))
          : (i = null);
    }
    return this;
  }
  toBBox(e) {
    return e;
  }
  compareMinX(e, n) {
    return e.minX - n.minX;
  }
  compareMinY(e, n) {
    return e.minY - n.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e) {
    return (this.data = e), this;
  }
  _all(e, n) {
    const i = [];
    for (; e; )
      e.leaf ? n.push(...e.children) : i.push(...e.children), (e = i.pop());
    return n;
  }
  _build(e, n, i, r) {
    const s = i - n + 1;
    let o = this._maxEntries,
      l;
    if (s <= o) return (l = lr(e.slice(n, i + 1))), nr(l, this.toBBox), l;
    r ||
      ((r = Math.ceil(Math.log(s) / Math.log(o))),
      (o = Math.ceil(s / Math.pow(o, r - 1)))),
      (l = lr([])),
      (l.leaf = !1),
      (l.height = r);
    const a = Math.ceil(s / o),
      u = a * Math.ceil(Math.sqrt(o));
    Cg(e, n, i, u, this.compareMinX);
    for (let c = n; c <= i; c += u) {
      const h = Math.min(c + u - 1, i);
      Cg(e, c, h, a, this.compareMinY);
      for (let d = c; d <= h; d += a) {
        const f = Math.min(d + a - 1, h);
        l.children.push(this._build(e, d, f, r - 1));
      }
    }
    return nr(l, this.toBBox), l;
  }
  _chooseSubtree(e, n, i, r) {
    for (; r.push(n), !(n.leaf || r.length - 1 === i); ) {
      let s = 1 / 0,
        o = 1 / 0,
        l;
      for (let a = 0; a < n.children.length; a++) {
        const u = n.children[a],
          c = ku(u),
          h = OE(e, u) - c;
        h < o
          ? ((o = h), (s = c < s ? c : s), (l = u))
          : h === o && c < s && ((s = c), (l = u));
      }
      n = l || n.children[0];
    }
    return n;
  }
  _insert(e, n, i) {
    const r = i ? e : this.toBBox(e),
      s = [],
      o = this._chooseSubtree(r, this.data, n, s);
    for (
      o.children.push(e), xs(o, r);
      n >= 0 && s[n].children.length > this._maxEntries;

    )
      this._split(s, n), n--;
    this._adjustParentBBoxes(r, s, n);
  }
  _split(e, n) {
    const i = e[n],
      r = i.children.length,
      s = this._minEntries;
    this._chooseSplitAxis(i, s, r);
    const o = this._chooseSplitIndex(i, s, r),
      l = lr(i.children.splice(o, i.children.length - o));
    (l.height = i.height),
      (l.leaf = i.leaf),
      nr(i, this.toBBox),
      nr(l, this.toBBox),
      n ? e[n - 1].children.push(l) : this._splitRoot(i, l);
  }
  _splitRoot(e, n) {
    (this.data = lr([e, n])),
      (this.data.height = e.height + 1),
      (this.data.leaf = !1),
      nr(this.data, this.toBBox);
  }
  _chooseSplitIndex(e, n, i) {
    let r,
      s = 1 / 0,
      o = 1 / 0;
    for (let l = n; l <= i - n; l++) {
      const a = ws(e, 0, l, this.toBBox),
        u = ws(e, l, i, this.toBBox),
        c = FE(a, u),
        h = ku(a) + ku(u);
      c < s
        ? ((s = c), (r = l), (o = h < o ? h : o))
        : c === s && h < o && ((o = h), (r = l));
    }
    return r || i - n;
  }
  _chooseSplitAxis(e, n, i) {
    const r = e.leaf ? this.compareMinX : ME,
      s = e.leaf ? this.compareMinY : AE,
      o = this._allDistMargin(e, n, i, r),
      l = this._allDistMargin(e, n, i, s);
    o < l && e.children.sort(r);
  }
  _allDistMargin(e, n, i, r) {
    e.children.sort(r);
    const s = this.toBBox,
      o = ws(e, 0, n, s),
      l = ws(e, i - n, i, s);
    let a = rl(o) + rl(l);
    for (let u = n; u < i - n; u++) {
      const c = e.children[u];
      xs(o, e.leaf ? s(c) : c), (a += rl(o));
    }
    for (let u = i - n - 1; u >= n; u--) {
      const c = e.children[u];
      xs(l, e.leaf ? s(c) : c), (a += rl(l));
    }
    return a;
  }
  _adjustParentBBoxes(e, n, i) {
    for (let r = i; r >= 0; r--) xs(n[r], e);
  }
  _condense(e) {
    for (let n = e.length - 1, i; n >= 0; n--)
      e[n].children.length === 0
        ? n > 0
          ? ((i = e[n - 1].children), i.splice(i.indexOf(e[n]), 1))
          : this.clear()
        : nr(e[n], this.toBBox);
  }
};
function PE(t, e, n) {
  if (!n) return e.indexOf(t);
  for (let i = 0; i < e.length; i++) if (n(t, e[i])) return i;
  return -1;
}
function nr(t, e) {
  ws(t, 0, t.children.length, e, t);
}
function ws(t, e, n, i, r) {
  r || (r = lr(null)),
    (r.minX = 1 / 0),
    (r.minY = 1 / 0),
    (r.maxX = -1 / 0),
    (r.maxY = -1 / 0);
  for (let s = e; s < n; s++) {
    const o = t.children[s];
    xs(r, t.leaf ? i(o) : o);
  }
  return r;
}
function xs(t, e) {
  return (
    (t.minX = Math.min(t.minX, e.minX)),
    (t.minY = Math.min(t.minY, e.minY)),
    (t.maxX = Math.max(t.maxX, e.maxX)),
    (t.maxY = Math.max(t.maxY, e.maxY)),
    t
  );
}
function ME(t, e) {
  return t.minX - e.minX;
}
function AE(t, e) {
  return t.minY - e.minY;
}
function ku(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function rl(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function OE(t, e) {
  return (
    (Math.max(e.maxX, t.maxX) - Math.min(e.minX, t.minX)) *
    (Math.max(e.maxY, t.maxY) - Math.min(e.minY, t.minY))
  );
}
function FE(t, e) {
  const n = Math.max(t.minX, e.minX),
    i = Math.max(t.minY, e.minY),
    r = Math.min(t.maxX, e.maxX),
    s = Math.min(t.maxY, e.maxY);
  return Math.max(0, r - n) * Math.max(0, s - i);
}
function Pu(t, e) {
  return (
    t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
  );
}
function sl(t, e) {
  return (
    e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
  );
}
function lr(t) {
  return {
    children: t,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0,
  };
}
function Cg(t, e, n, i, r) {
  const s = [e, n];
  for (; s.length; ) {
    if (((n = s.pop()), (e = s.pop()), n - e <= i)) continue;
    const o = e + Math.ceil((n - e) / i / 2) * i;
    LE(t, o, e, n, r), s.push(e, o, o, n);
  }
}
function DE(t, e, n) {
  const i = t;
  let r = !0,
    s = !1,
    o = !1;
  const l = [
    Zl(i, V.LOAD, function () {
      (o = !0), s || e();
    }),
  ];
  return (
    i.src && c_
      ? ((s = !0),
        i
          .decode()
          .then(function () {
            r && e();
          })
          .catch(function (a) {
            r && (o ? e() : n());
          }))
      : l.push(Zl(i, V.ERROR, n)),
    function () {
      (r = !1), l.forEach(ce);
    }
  );
}
function NE(t, e) {
  return new Promise((n, i) => {
    function r() {
      o(), n(t);
    }
    function s() {
      o(), i(new Error("Image load error"));
    }
    function o() {
      t.removeEventListener("load", r), t.removeEventListener("error", s);
    }
    t.addEventListener("load", r),
      t.addEventListener("error", s),
      e && (t.src = e);
  });
}
function zE(t, e) {
  return (
    e && (t.src = e),
    t.src && c_
      ? new Promise((n, i) =>
          t
            .decode()
            .then(() => n(t))
            .catch((r) => (t.complete && t.width ? n(t) : i(r))),
        )
      : NE(t)
  );
}
class GE {
  constructor() {
    (this.cache_ = {}), (this.cacheSize_ = 0), (this.maxCacheSize_ = 32);
  }
  clear() {
    (this.cache_ = {}), (this.cacheSize_ = 0);
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let e = 0;
      for (const n in this.cache_) {
        const i = this.cache_[n];
        !(e++ & 3) &&
          !i.hasListener() &&
          (delete this.cache_[n], --this.cacheSize_);
      }
    }
  }
  get(e, n, i) {
    const r = Sg(e, n, i);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  set(e, n, i, r) {
    const s = Sg(e, n, i);
    (this.cache_[s] = r), ++this.cacheSize_;
  }
  setSize(e) {
    (this.maxCacheSize_ = e), this.expire();
  }
}
function Sg(t, e, n) {
  const i = n ? G_(n) : "null";
  return e + ":" + t + ":" + i;
}
const ia = new GE();
let ps = null;
class WE extends Ta {
  constructor(e, n, i, r, s) {
    super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = e),
      (this.crossOrigin_ = i),
      (this.canvas_ = {}),
      (this.color_ = s),
      (this.imageState_ = r === void 0 ? se.IDLE : r),
      (this.size_ = e && e.width && e.height ? [e.width, e.height] : null),
      (this.src_ = n),
      this.tainted_;
  }
  initializeImage_() {
    (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === se.LOADED) {
      ps || (ps = Ke(1, 1, void 0, { willReadFrequently: !0 })),
        ps.drawImage(this.image_, 0, 0);
      try {
        ps.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
      } catch {
        (ps = null), (this.tainted_ = !0);
      }
    }
    return this.tainted_ === !0;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(V.CHANGE);
  }
  handleImageError_() {
    (this.imageState_ = se.ERROR), this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    (this.imageState_ = se.LOADED),
      (this.size_ = [this.image_.width, this.image_.height]),
      this.dispatchChangeEvent_();
  }
  getImage(e) {
    return (
      this.image_ || this.initializeImage_(),
      this.replaceColor_(e),
      this.canvas_[e] ? this.canvas_[e] : this.image_
    );
  }
  getPixelRatio(e) {
    return this.replaceColor_(e), this.canvas_[e] ? e : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
      if (this.isTainted_()) {
        const e = this.size_[0],
          n = this.size_[1],
          i = Ke(e, n);
        i.fillRect(0, 0, e, n), (this.hitDetectionImage_ = i.canvas);
      } else this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === se.IDLE) {
      this.image_ || this.initializeImage_(), (this.imageState_ = se.LOADING);
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement &&
        zE(this.image_, this.src_)
          .then((e) => {
            (this.image_ = e), this.handleImageLoad_();
          })
          .catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(e) {
    if (!this.color_ || this.canvas_[e] || this.imageState_ !== se.LOADED)
      return;
    const n = this.image_,
      i = document.createElement("canvas");
    (i.width = Math.ceil(n.width * e)), (i.height = Math.ceil(n.height * e));
    const r = i.getContext("2d");
    r.scale(e, e),
      r.drawImage(n, 0, 0),
      (r.globalCompositeOperation = "multiply"),
      (r.fillStyle = G_(this.color_)),
      r.fillRect(0, 0, i.width / e, i.height / e),
      (r.globalCompositeOperation = "destination-in"),
      r.drawImage(n, 0, 0),
      (this.canvas_[e] = i);
  }
}
function jE(t, e, n, i, r) {
  let s = e === void 0 ? void 0 : ia.get(e, n, r);
  return (
    s ||
      ((s = new WE(
        t,
        t instanceof HTMLImageElement ? t.src || void 0 : e,
        n,
        i,
        r,
      )),
      ia.set(e, n, r, s)),
    s
  );
}
function Rg(t, e, n, i) {
  return n !== void 0 && i !== void 0
    ? [n / t, i / e]
    : n !== void 0
      ? n / t
      : i !== void 0
        ? i / e
        : 1;
}
class Ba extends za {
  constructor(e) {
    e = e || {};
    const n = e.opacity !== void 0 ? e.opacity : 1,
      i = e.rotation !== void 0 ? e.rotation : 0,
      r = e.scale !== void 0 ? e.scale : 1,
      s = e.rotateWithView !== void 0 ? e.rotateWithView : !1;
    super({
      opacity: n,
      rotation: i,
      scale: r,
      displacement: e.displacement !== void 0 ? e.displacement : [0, 0],
      rotateWithView: s,
      declutterMode: e.declutterMode,
    }),
      (this.anchor_ = e.anchor !== void 0 ? e.anchor : [0.5, 0.5]),
      (this.normalizedAnchor_ = null),
      (this.anchorOrigin_ =
        e.anchorOrigin !== void 0 ? e.anchorOrigin : "top-left"),
      (this.anchorXUnits_ =
        e.anchorXUnits !== void 0 ? e.anchorXUnits : "fraction"),
      (this.anchorYUnits_ =
        e.anchorYUnits !== void 0 ? e.anchorYUnits : "fraction"),
      (this.crossOrigin_ = e.crossOrigin !== void 0 ? e.crossOrigin : null);
    const o = e.img !== void 0 ? e.img : null;
    let l = e.src;
    Q(
      !(l !== void 0 && o),
      "`image` and `src` cannot be provided at the same time",
    ),
      (l === void 0 || l.length === 0) && o && (l = o.src || ee(o)),
      Q(
        l !== void 0 && l.length > 0,
        "A defined and non-empty `src` or `image` must be provided",
      ),
      Q(
        !((e.width !== void 0 || e.height !== void 0) && e.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`",
      );
    let a;
    if (
      (e.src !== void 0
        ? (a = se.IDLE)
        : o !== void 0 &&
          (o instanceof HTMLImageElement
            ? o.complete
              ? (a = o.src ? se.LOADED : se.IDLE)
              : (a = se.LOADING)
            : (a = se.LOADED)),
      (this.color_ = e.color !== void 0 ? ea(e.color) : null),
      (this.iconImage_ = jE(o, l, this.crossOrigin_, a, this.color_)),
      (this.offset_ = e.offset !== void 0 ? e.offset : [0, 0]),
      (this.offsetOrigin_ =
        e.offsetOrigin !== void 0 ? e.offsetOrigin : "top-left"),
      (this.origin_ = null),
      (this.size_ = e.size !== void 0 ? e.size : null),
      e.width !== void 0 || e.height !== void 0)
    ) {
      let u, c;
      if (e.size) [u, c] = e.size;
      else {
        const h = this.getImage(1);
        if (h.width && h.height) (u = h.width), (c = h.height);
        else if (h instanceof HTMLImageElement) {
          this.initialOptions_ = e;
          const d = () => {
            if ((this.unlistenImageChange(d), !this.initialOptions_)) return;
            const f = this.iconImage_.getSize();
            this.setScale(Rg(f[0], f[1], e.width, e.height));
          };
          this.listenImageChange(d);
          return;
        }
      }
      u !== void 0 && this.setScale(Rg(u, c, e.width, e.height));
    }
  }
  clone() {
    let e, n, i;
    return (
      this.initialOptions_
        ? ((n = this.initialOptions_.width), (i = this.initialOptions_.height))
        : ((e = this.getScale()), (e = Array.isArray(e) ? e.slice() : e)),
      new Ba({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color:
          this.color_ && this.color_.slice
            ? this.color_.slice()
            : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: e,
        width: n,
        height: i,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    );
  }
  getAnchor() {
    let e = this.normalizedAnchor_;
    if (!e) {
      e = this.anchor_;
      const r = this.getSize();
      if (
        this.anchorXUnits_ == "fraction" ||
        this.anchorYUnits_ == "fraction"
      ) {
        if (!r) return null;
        (e = this.anchor_.slice()),
          this.anchorXUnits_ == "fraction" && (e[0] *= r[0]),
          this.anchorYUnits_ == "fraction" && (e[1] *= r[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!r) return null;
        e === this.anchor_ && (e = this.anchor_.slice()),
          (this.anchorOrigin_ == "top-right" ||
            this.anchorOrigin_ == "bottom-right") &&
            (e[0] = -e[0] + r[0]),
          (this.anchorOrigin_ == "bottom-left" ||
            this.anchorOrigin_ == "bottom-right") &&
            (e[1] = -e[1] + r[1]);
      }
      this.normalizedAnchor_ = e;
    }
    const n = this.getDisplacement(),
      i = this.getScaleArray();
    return [e[0] - n[0] / i[0], e[1] + n[1] / i[1]];
  }
  setAnchor(e) {
    (this.anchor_ = e), (this.normalizedAnchor_ = null);
  }
  getColor() {
    return this.color_;
  }
  getImage(e) {
    return this.iconImage_.getImage(e);
  }
  getPixelRatio(e) {
    return this.iconImage_.getPixelRatio(e);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_) return this.origin_;
    let e = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const n = this.getSize(),
        i = this.iconImage_.getSize();
      if (!n || !i) return null;
      (e = e.slice()),
        (this.offsetOrigin_ == "top-right" ||
          this.offsetOrigin_ == "bottom-right") &&
          (e[0] = i[0] - n[0] - e[0]),
        (this.offsetOrigin_ == "bottom-left" ||
          this.offsetOrigin_ == "bottom-right") &&
          (e[1] = i[1] - n[1] - e[1]);
    }
    return (this.origin_ = e), this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    const e = this.getScaleArray();
    if (this.size_) return this.size_[0] * e[0];
    if (this.iconImage_.getImageState() == se.LOADED)
      return this.iconImage_.getSize()[0] * e[0];
  }
  getHeight() {
    const e = this.getScaleArray();
    if (this.size_) return this.size_[1] * e[1];
    if (this.iconImage_.getImageState() == se.LOADED)
      return this.iconImage_.getSize()[1] * e[1];
  }
  setScale(e) {
    delete this.initialOptions_, super.setScale(e);
  }
  listenImageChange(e) {
    this.iconImage_.addEventListener(V.CHANGE, e);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(e) {
    this.iconImage_.removeEventListener(V.CHANGE, e);
  }
}
let Qr = 0;
const Jr = 0,
  Ee = 1 << Qr++,
  N = 1 << Qr++,
  Wt = 1 << Qr++,
  Xe = 1 << Qr++,
  di = 1 << Qr++,
  Qe = Math.pow(2, Qr) - 1,
  Z_ = {
    [Ee]: "boolean",
    [N]: "number",
    [Wt]: "string",
    [Xe]: "color",
    [di]: "number[]",
  },
  XE = Object.keys(Z_).map(Number).sort(ai);
function Ue(t) {
  const e = [];
  for (const n of XE) UE(t, n) && e.push(Z_[n]);
  return e.length === 0
    ? "untyped"
    : e.length < 3
      ? e.join(" or ")
      : e.slice(0, -1).join(", ") + ", or " + e[e.length - 1];
}
function UE(t, e) {
  return (t & e) === e;
}
function tn(t, e) {
  return !!(t & e);
}
function Va(t, e) {
  return t === e;
}
class Hn {
  constructor(e, n) {
    (this.type = e), (this.value = n);
  }
}
class YE {
  constructor(e, n, ...i) {
    (this.type = e), (this.operator = n), (this.args = i);
  }
}
function H_() {
  return {
    variables: new Set(),
    properties: new Set(),
    featureId: !1,
    style: {},
  };
}
function BE(t) {
  switch (t) {
    case "string":
      return Wt;
    case "color":
      return Xe;
    case "number":
      return N;
    case "boolean":
      return Ee;
    case "number[]":
      return di;
    default:
      throw new Error(`Unrecognized type hint: ${t}`);
  }
}
function ne(t, e, n) {
  switch (typeof t) {
    case "boolean":
      return new Hn(Ee, t);
    case "number":
      return new Hn(N, t);
    case "string": {
      let r = Wt;
      return rE(t) && (r |= Xe), Va(r & n, Jr) || (r &= n), new Hn(r, t);
    }
  }
  if (!Array.isArray(t))
    throw new Error("Expression must be an array or a primitive value");
  if (t.length === 0) throw new Error("Empty expression");
  if (typeof t[0] == "string") return tw(t, e, n);
  for (const r of t)
    if (typeof r != "number") throw new Error("Expected an array of numbers");
  let i = di;
  return (
    (t.length === 3 || t.length === 4) && (i |= Xe), n && (i &= n), new Hn(i, t)
  );
}
const I = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
  },
  VE = {
    [I.Get]: Y(([t, e]) => (e !== void 0 ? BE(e.value) : Qe), K(1, 2), bE),
    [I.Var]: Y(([t]) => t.type, K(1, 1), KE),
    [I.Id]: Y(N | Wt, ms, ZE),
    [I.Concat]: Y(Wt, K(2, 1 / 0), J(Qe)),
    [I.GeometryType]: Y(Wt, ms),
    [I.Resolution]: Y(N, ms),
    [I.Zoom]: Y(N, ms),
    [I.Time]: Y(N, ms),
    [I.Any]: Y(Ee, K(2, 1 / 0), J(Ee)),
    [I.All]: Y(Ee, K(2, 1 / 0), J(Ee)),
    [I.Not]: Y(Ee, K(1, 1), J(Ee)),
    [I.Equal]: Y(Ee, K(2, 2), J(Qe), Ei),
    [I.NotEqual]: Y(Ee, K(2, 2), J(Qe), Ei),
    [I.GreaterThan]: Y(Ee, K(2, 2), J(Qe), Ei),
    [I.GreaterThanOrEqualTo]: Y(Ee, K(2, 2), J(Qe), Ei),
    [I.LessThan]: Y(Ee, K(2, 2), J(Qe), Ei),
    [I.LessThanOrEqualTo]: Y(Ee, K(2, 2), J(Qe), Ei),
    [I.Multiply]: Y(
      (t) => {
        let e = N | Xe;
        for (let n = 0; n < t.length; n++) e &= t[n].type;
        return e;
      },
      K(2, 1 / 0),
      J(N | Xe),
      Ei,
    ),
    [I.Divide]: Y(N, K(2, 2), J(N)),
    [I.Add]: Y(N, K(2, 1 / 0), J(N)),
    [I.Subtract]: Y(N, K(2, 2), J(N)),
    [I.Clamp]: Y(N, K(3, 3), J(N)),
    [I.Mod]: Y(N, K(2, 2), J(N)),
    [I.Pow]: Y(N, K(2, 2), J(N)),
    [I.Abs]: Y(N, K(1, 1), J(N)),
    [I.Floor]: Y(N, K(1, 1), J(N)),
    [I.Ceil]: Y(N, K(1, 1), J(N)),
    [I.Round]: Y(N, K(1, 1), J(N)),
    [I.Sin]: Y(N, K(1, 1), J(N)),
    [I.Cos]: Y(N, K(1, 1), J(N)),
    [I.Atan]: Y(N, K(1, 2), J(N)),
    [I.Sqrt]: Y(N, K(1, 1), J(N)),
    [I.Match]: Y(
      (t) => {
        let e = Qe;
        for (let n = 2; n < t.length; n += 2) e &= t[n].type;
        return (e &= t[t.length - 1].type), e;
      },
      K(4, 1 / 0),
      Tg,
      $E,
    ),
    [I.Between]: Y(Ee, K(3, 3), J(N)),
    [I.Interpolate]: Y(
      (t) => {
        let e = Xe | N;
        for (let n = 3; n < t.length; n += 2) e &= t[n].type;
        return e;
      },
      K(6, 1 / 0),
      Tg,
      qE,
    ),
    [I.Case]: Y(
      (t) => {
        let e = Qe;
        for (let n = 1; n < t.length; n += 2) e &= t[n].type;
        return (e &= t[t.length - 1].type), e;
      },
      K(3, 1 / 0),
      HE,
      QE,
    ),
    [I.In]: Y(Ee, K(2, 2), JE),
    [I.Number]: Y(N, K(1, 1 / 0), J(Qe)),
    [I.String]: Y(Wt, K(1, 1 / 0), J(Qe)),
    [I.Array]: Y(
      (t) => (t.length === 3 || t.length === 4 ? di | Xe : di),
      K(1, 1 / 0),
      J(N),
    ),
    [I.Color]: Y(Xe, K(3, 4), J(N)),
    [I.Band]: Y(N, K(1, 3), J(N)),
    [I.Palette]: Y(Xe, K(2, 2), ew),
  };
function bE(t, e) {
  const n = ne(t[1], e);
  if (!(n instanceof Hn))
    throw new Error("Expected a literal argument for get operation");
  if (typeof n.value != "string")
    throw new Error("Expected a string argument for get operation");
  if ((e.properties.add(n.value), t.length === 3)) {
    const i = ne(t[2], e);
    return [n, i];
  }
  return [n];
}
function KE(t, e, n, i) {
  const r = t[1];
  if (typeof r != "string")
    throw new Error("Expected a string argument for var operation");
  if (
    (e.variables.add(r),
    !("variables" in e.style) || e.style.variables[r] === void 0)
  )
    return [new Hn(Qe, r)];
  const s = e.style.variables[r],
    o = ne(s, e);
  if (((o.value = r), i && !tn(i, o.type)))
    throw new Error(
      `The variable ${r} has type ${Ue(o.type)} but the following type was expected: ${Ue(i)}`,
    );
  return [o];
}
function ZE(t, e) {
  e.featureId = !0;
}
function ms(t, e) {
  const n = t[0];
  if (t.length !== 1)
    throw new Error(`Expected no arguments for ${n} operation`);
  return [];
}
function K(t, e) {
  return function (n, i) {
    const r = n[0],
      s = n.length - 1;
    if (t === e) {
      if (s !== t) {
        const o = t === 1 ? "" : "s";
        throw new Error(`Expected ${t} argument${o} for ${r}, got ${s}`);
      }
    } else if (s < t || s > e) {
      const o = e === 1 / 0 ? `${t} or more` : `${t} to ${e}`;
      throw new Error(`Expected ${o} arguments for ${r}, got ${s}`);
    }
  };
}
function J(t) {
  return function (e, n) {
    const i = e[0],
      r = e.length - 1,
      s = new Array(r);
    for (let o = 0; o < r; ++o) {
      const l = ne(e[o + 1], n);
      if (!tn(t, l.type)) {
        const a = Ue(t),
          u = Ue(l.type);
        throw new Error(
          `Unexpected type for argument ${o} of ${i} operation, got ${a} but expected ${u}`,
        );
      }
      (l.type &= t), (s[o] = l);
    }
    return s;
  };
}
function Ei(t, e, n) {
  const i = t[0],
    r = t.length - 1;
  let s = Qe;
  for (let l = 0; l < n.length; ++l) s &= n[l].type;
  if (s === Jr)
    throw new Error(
      `No common type could be found for arguments of ${i} operation`,
    );
  const o = new Array(r);
  for (let l = 0; l < r; ++l) o[l] = ne(t[l + 1], e, s);
  return o;
}
function HE(t, e) {
  const n = t[0],
    i = t.length - 1;
  if (i % 2 === 0)
    throw new Error(
      `An odd amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`,
    );
}
function Tg(t, e) {
  const n = t[0],
    i = t.length - 1;
  if (i % 2 === 1)
    throw new Error(
      `An even amount of arguments was expected for operation ${n}, got ${JSON.stringify(i)} instead`,
    );
}
function $E(t, e, n, i) {
  const r = t.length - 1;
  let o = ne(t[1], e).type;
  const l = ne(t[t.length - 1], e);
  let a = i !== void 0 ? i & l.type : l.type;
  const u = new Array(r - 2);
  for (let h = 0; h < r - 2; h += 2) {
    const d = ne(t[h + 2], e),
      f = ne(t[h + 3], e);
    (o &= d.type), (a &= f.type), (u[h] = d), (u[h + 1] = f);
  }
  const c = Wt | N | Ee;
  if (!tn(c, o))
    throw new Error(
      `Expected an input of type ${Ue(c)} for the interpolate operation, got ${Ue(o)} instead`,
    );
  if (Va(a, Jr))
    throw new Error(
      "Could not find a common output type for the following match operation: " +
        JSON.stringify(t),
    );
  for (let h = 0; h < r - 2; h += 2) {
    const d = ne(t[h + 2], e, o),
      f = ne(t[h + 3], e, a);
    (u[h] = d), (u[h + 1] = f);
  }
  return [ne(t[1], e, o), ...u, ne(t[t.length - 1], e, a)];
}
function qE(t, e, n, i) {
  const r = t[1];
  let s;
  switch (r[0]) {
    case "linear":
      s = 1;
      break;
    case "exponential":
      if (((s = r[1]), typeof s != "number"))
        throw new Error(
          `Expected a number base for exponential interpolation, got ${JSON.stringify(s)} instead`,
        );
      break;
    default:
      s = null;
  }
  if (!s) throw new Error(`Invalid interpolation type: ${JSON.stringify(r)}`);
  s = ne(s, e);
  let o = ne(t[2], e);
  if (!tn(N, o.type))
    throw new Error(
      `Expected an input of type number for the interpolate operation, got ${Ue(o.type)} instead`,
    );
  o = ne(t[2], e, N);
  const l = new Array(t.length - 3);
  for (let a = 0; a < l.length; a += 2) {
    let u = ne(t[a + 3], e);
    if (!tn(N, u.type))
      throw new Error(
        `Expected all stop input values in the interpolate operation to be of type number, got ${Ue(u.type)} at position ${a + 2} instead`,
      );
    let c = ne(t[a + 4], e);
    if (!tn(N | Xe, c.type))
      throw new Error(
        `Expected all stop output values in the interpolate operation to be a number or color, got ${Ue(c.type)} at position ${a + 3} instead`,
      );
    (u = ne(t[a + 3], e, N)),
      (c = ne(t[a + 4], e, N | Xe)),
      (l[a] = u),
      (l[a + 1] = c);
  }
  return [s, o, ...l];
}
function QE(t, e, n, i) {
  const r = ne(t[t.length - 1], e);
  let s = i !== void 0 ? i & r.type : r.type;
  const o = new Array(t.length - 1);
  for (let l = 0; l < o.length - 1; l += 2) {
    const a = ne(t[l + 1], e),
      u = ne(t[l + 2], e);
    if (!tn(Ee, a.type))
      throw new Error(
        `Expected all conditions in the case operation to be of type boolean, got ${Ue(a.type)} at position ${l} instead`,
      );
    (s &= u.type), (o[l] = a), (o[l + 1] = u);
  }
  if (Va(s, Jr))
    throw new Error(
      "Could not find a common output type for the following case operation: " +
        JSON.stringify(t),
    );
  for (let l = 0; l < o.length - 1; l += 2) o[l + 1] = ne(t[l + 2], e, s);
  return (o[o.length - 1] = ne(t[t.length - 1], e, s)), o;
}
function JE(t, e) {
  let n = t[2];
  if (!Array.isArray(n))
    throw new Error(
      'The "in" operator was provided a literal value which was not an array as second argument.',
    );
  if (typeof n[0] == "string") {
    if (n[0] !== "literal")
      throw new Error(
        'For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.',
      );
    if (!Array.isArray(n[1]))
      throw new Error(
        'The "in" operator was provided a literal value which was not an array as second argument.',
      );
    n = n[1];
  }
  let i = Wt | N;
  const r = new Array(n.length);
  for (let o = 0; o < r.length; o++) {
    const l = ne(n[o], e);
    (i &= l.type), (r[o] = l);
  }
  if (Va(i, Jr))
    throw new Error(
      "Could not find a common type for the following in operation: " +
        JSON.stringify(t),
    );
  return [ne(t[1], e, i), ...r];
}
function ew(t, e) {
  const n = ne(t[1], e, N);
  if (n.type !== N)
    throw new Error(
      `The first argument of palette must be an number, got ${Ue(n.type)} instead`,
    );
  const i = t[2];
  if (!Array.isArray(i))
    throw new Error("The second argument of palette must be an array");
  const r = new Array(i.length);
  for (let s = 0; s < r.length; s++) {
    const o = ne(i[s], e, Xe);
    if (!(o instanceof Hn))
      throw new Error(
        `The palette color at index ${s} must be a literal value`,
      );
    if (!tn(o.type, Xe))
      throw new Error(
        `The palette color at index ${s} should be of type color, got ${Ue(o.type)} instead`,
      );
    r[s] = o;
  }
  return [n, ...r];
}
function Y(t, ...e) {
  return function (n, i, r) {
    const s = n[0];
    let o = [];
    for (let a = 0; a < e.length; a++) o = e[a](n, i, o, r) || o;
    let l = typeof t == "function" ? t(o) : t;
    if (r !== void 0) {
      if (!tn(l, r))
        throw new Error(
          `The following expression was expected to return ${Ue(r)}, but returns ${Ue(l)} instead: ${JSON.stringify(n)}`,
        );
      l &= r;
    }
    if (l === Jr)
      throw new Error(
        `No matching type was found for the following expression: ${JSON.stringify(n)}`,
      );
    return new YE(l, s, ...o);
  };
}
function tw(t, e, n) {
  const i = t[0],
    r = VE[i];
  if (!r) throw new Error(`Unknown operator: ${i}`);
  return r(t, e, n);
}
function $_() {
  return { variables: {}, properties: {}, resolution: NaN, featureId: null };
}
function _i(t, e, n) {
  const i = ne(t, n);
  if (!tn(e, i.type)) {
    const r = Ue(e),
      s = Ue(i.type);
    throw new Error(`Expected expression to be of type ${r}, got ${s}`);
  }
  return Tn(i);
}
function Tn(t, e) {
  if (t instanceof Hn) {
    if (t.type === Xe && typeof t.value == "string") {
      const i = _d(t.value);
      return function () {
        return i;
      };
    }
    return function () {
      return t.value;
    };
  }
  const n = t.operator;
  switch (n) {
    case I.Number:
    case I.String:
      return nw(t);
    case I.Get:
    case I.Var:
      return iw(t);
    case I.Id:
      return (i) => i.featureId;
    case I.Concat: {
      const i = t.args.map((r) => Tn(r));
      return (r) => "".concat(...i.map((s) => s(r).toString()));
    }
    case I.Resolution:
      return (i) => i.resolution;
    case I.Any:
    case I.All:
    case I.Not:
      return sw(t);
    case I.Equal:
    case I.NotEqual:
    case I.LessThan:
    case I.LessThanOrEqualTo:
    case I.GreaterThan:
    case I.GreaterThanOrEqualTo:
      return rw(t);
    case I.Multiply:
    case I.Divide:
    case I.Add:
    case I.Subtract:
    case I.Clamp:
    case I.Mod:
    case I.Pow:
    case I.Abs:
    case I.Floor:
    case I.Ceil:
    case I.Round:
    case I.Sin:
    case I.Cos:
    case I.Atan:
    case I.Sqrt:
      return ow(t);
    case I.Match:
      return lw(t);
    case I.Interpolate:
      return aw(t);
    default:
      throw new Error(`Unsupported operator ${n}`);
  }
}
function nw(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = Tn(t.args[s]);
  switch (n) {
    case I.Number:
    case I.String:
      return (s) => {
        for (let o = 0; o < i; ++o) {
          const l = r[o](s);
          if (typeof l === n) return l;
        }
        throw new Error(`Expected one of the values to be a ${n}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${n}`);
  }
}
function iw(t, e) {
  const i = t.args[0].value;
  switch (t.operator) {
    case I.Get:
      return (r) => r.properties[i];
    case I.Var:
      return (r) => r.variables[i];
    default:
      throw new Error(`Unsupported accessor operator ${t.operator}`);
  }
}
function rw(t, e) {
  const n = t.operator,
    i = Tn(t.args[0]),
    r = Tn(t.args[1]);
  switch (n) {
    case I.Equal:
      return (s) => i(s) === r(s);
    case I.NotEqual:
      return (s) => i(s) !== r(s);
    case I.LessThan:
      return (s) => i(s) < r(s);
    case I.LessThanOrEqualTo:
      return (s) => i(s) <= r(s);
    case I.GreaterThan:
      return (s) => i(s) > r(s);
    case I.GreaterThanOrEqualTo:
      return (s) => i(s) >= r(s);
    default:
      throw new Error(`Unsupported comparison operator ${n}`);
  }
}
function sw(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = Tn(t.args[s]);
  switch (n) {
    case I.Any:
      return (s) => {
        for (let o = 0; o < i; ++o) if (r[o](s)) return !0;
        return !1;
      };
    case I.All:
      return (s) => {
        for (let o = 0; o < i; ++o) if (!r[o](s)) return !1;
        return !0;
      };
    case I.Not:
      return (s) => !r[0](s);
    default:
      throw new Error(`Unsupported logical operator ${n}`);
  }
}
function ow(t, e) {
  const n = t.operator,
    i = t.args.length,
    r = new Array(i);
  for (let s = 0; s < i; ++s) r[s] = Tn(t.args[s]);
  switch (n) {
    case I.Multiply:
      return (s) => {
        let o = 1;
        for (let l = 0; l < i; ++l) o *= r[l](s);
        return o;
      };
    case I.Divide:
      return (s) => r[0](s) / r[1](s);
    case I.Add:
      return (s) => {
        let o = 0;
        for (let l = 0; l < i; ++l) o += r[l](s);
        return o;
      };
    case I.Subtract:
      return (s) => r[0](s) - r[1](s);
    case I.Clamp:
      return (s) => {
        const o = r[0](s),
          l = r[1](s);
        if (o < l) return l;
        const a = r[2](s);
        return o > a ? a : o;
      };
    case I.Mod:
      return (s) => r[0](s) % r[1](s);
    case I.Pow:
      return (s) => Math.pow(r[0](s), r[1](s));
    case I.Abs:
      return (s) => Math.abs(r[0](s));
    case I.Floor:
      return (s) => Math.floor(r[0](s));
    case I.Ceil:
      return (s) => Math.ceil(r[0](s));
    case I.Round:
      return (s) => Math.round(r[0](s));
    case I.Sin:
      return (s) => Math.sin(r[0](s));
    case I.Cos:
      return (s) => Math.cos(r[0](s));
    case I.Atan:
      return i === 2
        ? (s) => Math.atan2(r[0](s), r[1](s))
        : (s) => Math.atan(r[0](s));
    case I.Sqrt:
      return (s) => Math.sqrt(r[0](s));
    default:
      throw new Error(`Unsupported numeric operator ${n}`);
  }
}
function lw(t, e) {
  const n = t.args.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = Tn(t.args[r]);
  return (r) => {
    const s = i[0](r);
    for (let o = 1; o < n; o += 2) if (s === i[o](r)) return i[o + 1](r);
    return i[n - 1](r);
  };
}
function aw(t, e) {
  const n = t.args.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = Tn(t.args[r]);
  return (r) => {
    const s = i[0](r),
      o = i[1](r);
    let l, a;
    for (let u = 2; u < n; u += 2) {
      const c = i[u](r);
      let h = i[u + 1](r);
      const d = Array.isArray(h);
      if ((d && (h = nE(h)), c >= o))
        return u === 2 ? h : d ? uw(s, o, l, a, c, h) : Cs(s, o, l, a, c, h);
      (l = c), (a = h);
    }
    return a;
  };
}
function Cs(t, e, n, i, r, s) {
  const o = r - n;
  if (o === 0) return i;
  const l = e - n,
    a = t === 1 ? l / o : (Math.pow(t, l) - 1) / (Math.pow(t, o) - 1);
  return i + a * (s - i);
}
function uw(t, e, n, i, r, s) {
  if (r - n === 0) return i;
  const l = gg(i),
    a = gg(s);
  let u = a[2] - l[2];
  u > 180 ? (u -= 360) : u < -180 && (u += 360);
  const c = [
    Cs(t, e, n, l[0], r, a[0]),
    Cs(t, e, n, l[1], r, a[1]),
    l[2] + Cs(t, e, n, 0, r, u),
    Cs(t, e, n, i[3], r, s[3]),
  ];
  return W_(iE(c));
}
function cw(t) {
  return !0;
}
function hw(t) {
  const e = H_(),
    n = dw(t, e),
    i = $_();
  return function (r, s) {
    if (
      ((i.properties = r.getPropertiesInternal()),
      (i.resolution = s),
      e.featureId)
    ) {
      const o = r.getId();
      o !== void 0 ? (i.featureId = o) : (i.featureId = null);
    }
    return n(i);
  };
}
function Ig(t) {
  const e = H_(),
    n = t.length,
    i = new Array(n);
  for (let o = 0; o < n; ++o) i[o] = Hc(t[o], e);
  const r = $_(),
    s = new Array(n);
  return function (o, l) {
    if (
      ((r.properties = o.getPropertiesInternal()),
      (r.resolution = l),
      e.featureId)
    ) {
      const u = o.getId();
      u !== void 0 ? (r.featureId = u) : (r.featureId = null);
    }
    let a = 0;
    for (let u = 0; u < n; ++u) {
      const c = i[u](r);
      c && ((s[a] = c), (a += 1));
    }
    return (s.length = a), s;
  };
}
function dw(t, e) {
  const n = t.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) {
    const s = t[r],
      o = "filter" in s ? _i(s.filter, Ee, e) : cw;
    let l;
    if (Array.isArray(s.style)) {
      const a = s.style.length;
      l = new Array(a);
      for (let u = 0; u < a; ++u) l[u] = Hc(s.style[u], e);
    } else l = [Hc(s.style, e)];
    i[r] = { filter: o, styles: l };
  }
  return function (r) {
    const s = [];
    let o = !1;
    for (let l = 0; l < n; ++l) {
      const a = i[l].filter;
      if (a(r) && !(t[l].else && o)) {
        o = !0;
        for (const u of i[l].styles) {
          const c = u(r);
          c && s.push(c);
        }
      }
    }
    return s;
  };
}
function Hc(t, e) {
  const n = ao(t, "", e),
    i = uo(t, "", e),
    r = fw(t, e),
    s = gw(t, e),
    o = rt(t, "z-index", e);
  if (!n && !i && !r && !s && !Xi(t))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " +
        JSON.stringify(t),
    );
  const l = new Cl();
  return function (a) {
    let u = !0;
    if (n) {
      const c = n(a);
      c && (u = !1), l.setFill(c);
    }
    if (i) {
      const c = i(a);
      c && (u = !1), l.setStroke(c);
    }
    if (r) {
      const c = r(a);
      c && (u = !1), l.setText(c);
    }
    if (s) {
      const c = s(a);
      c && (u = !1), l.setImage(c);
    }
    return o && l.setZIndex(o(a)), u ? null : l;
  };
}
function ao(t, e, n) {
  const i = q_(t, e + "fill-color", n);
  if (!i) return null;
  const r = new xo();
  return function (s) {
    const o = i(s);
    return o === "none" ? null : (r.setColor(o), r);
  };
}
function uo(t, e, n) {
  const i = rt(t, e + "stroke-width", n),
    r = q_(t, e + "stroke-color", n);
  if (!i && !r) return null;
  const s = Xn(t, e + "stroke-line-cap", n),
    o = Xn(t, e + "stroke-line-join", n),
    l = Q_(t, e + "stroke-line-dash", n),
    a = rt(t, e + "stroke-line-dash-offset", n),
    u = rt(t, e + "stroke-miter-limit", n),
    c = new Na();
  return function (h) {
    if (r) {
      const d = r(h);
      if (d === "none") return null;
      c.setColor(d);
    }
    if ((i && c.setWidth(i(h)), s)) {
      const d = s(h);
      if (d !== "butt" && d !== "round" && d !== "square")
        throw new Error("Expected butt, round, or square line cap");
      c.setLineCap(d);
    }
    if (o) {
      const d = o(h);
      if (d !== "bevel" && d !== "round" && d !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      c.setLineJoin(d);
    }
    return (
      l && c.setLineDash(l(h)),
      a && c.setLineDashOffset(a(h)),
      u && c.setMiterLimit(u(h)),
      c
    );
  };
}
function fw(t, e) {
  const n = "text-",
    i = Xn(t, n + "value", e);
  if (!i) return null;
  const r = ao(t, n, e),
    s = ao(t, n + "background-", e),
    o = uo(t, n, e),
    l = uo(t, n + "background-", e),
    a = Xn(t, n + "font", e),
    u = rt(t, n + "max-angle", e),
    c = rt(t, n + "offset-x", e),
    h = rt(t, n + "offset-y", e),
    d = co(t, n + "overflow", e),
    f = Xn(t, n + "placement", e),
    m = rt(t, n + "repeat", e),
    y = ba(t, n + "scale", e),
    v = co(t, n + "rotate-with-view", e),
    p = rt(t, n + "rotation", e),
    g = Xn(t, n + "align", e),
    _ = Xn(t, n + "justify", e),
    E = Xn(t, n + "baseline", e),
    w = Q_(t, n + "padding", e),
    x = new vd({});
  return function (C) {
    if (
      (x.setText(i(C)),
      r && x.setFill(r(C)),
      s && x.setBackgroundFill(s(C)),
      o && x.setStroke(o(C)),
      l && x.setBackgroundStroke(l(C)),
      a && x.setFont(a(C)),
      u && x.setMaxAngle(u(C)),
      c && x.setOffsetX(c(C)),
      h && x.setOffsetY(h(C)),
      d && x.setOverflow(d(C)),
      f)
    ) {
      const S = f(C);
      if (S !== "point" && S !== "line")
        throw new Error("Expected point or line for text-placement");
      x.setPlacement(S);
    }
    if (
      (m && x.setRepeat(m(C)),
      y && x.setScale(y(C)),
      v && x.setRotateWithView(v(C)),
      p && x.setRotation(p(C)),
      g)
    ) {
      const S = g(C);
      if (
        S !== "left" &&
        S !== "center" &&
        S !== "right" &&
        S !== "end" &&
        S !== "start"
      )
        throw new Error(
          "Expected left, right, center, start, or end for text-align",
        );
      x.setTextAlign(S);
    }
    if (_) {
      const S = _(C);
      if (S !== "left" && S !== "right" && S !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      x.setJustify(S);
    }
    if (E) {
      const S = E(C);
      if (
        S !== "bottom" &&
        S !== "top" &&
        S !== "middle" &&
        S !== "alphabetic" &&
        S !== "hanging"
      )
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline",
        );
      x.setTextBaseline(S);
    }
    return w && x.setPadding(w(C)), x;
  };
}
function gw(t, e) {
  return "icon-src" in t
    ? pw(t, e)
    : "shape-points" in t
      ? mw(t, e)
      : "circle-radius" in t
        ? _w(t, e)
        : null;
}
function pw(t, e) {
  const n = "icon-",
    i = n + "src",
    r = J_(t[i], i),
    s = ra(t, n + "anchor", e),
    o = ba(t, n + "scale", e),
    l = rt(t, n + "opacity", e),
    a = ra(t, n + "displacement", e),
    u = rt(t, n + "rotation", e),
    c = co(t, n + "rotate-with-view", e),
    h = Lg(t, n + "anchor-origin"),
    d = kg(t, n + "anchor-x-units"),
    f = kg(t, n + "anchor-y-units"),
    m = ww(t, n + "color"),
    y = vw(t, n + "cross-origin"),
    v = Ew(t, n + "offset"),
    p = Lg(t, n + "offset-origin"),
    g = Sr(t, n + "width"),
    _ = Sr(t, n + "height"),
    E = yw(t, n + "size"),
    w = Rd(t, n + "declutter"),
    x = new Ba({
      src: r,
      anchorOrigin: h,
      anchorXUnits: d,
      anchorYUnits: f,
      color: m,
      crossOrigin: y,
      offset: v,
      offsetOrigin: p,
      height: _,
      width: g,
      size: E,
      declutterMode: w,
    });
  return function (C) {
    return (
      l && x.setOpacity(l(C)),
      a && x.setDisplacement(a(C)),
      u && x.setRotation(u(C)),
      c && x.setRotateWithView(c(C)),
      o && x.setScale(o(C)),
      s && x.setAnchor(s(C)),
      x
    );
  };
}
function mw(t, e) {
  const n = "shape-",
    i = n + "points",
    r = e0(t[i], i),
    s = ao(t, n, e),
    o = uo(t, n, e),
    l = ba(t, n + "scale", e),
    a = ra(t, n + "displacement", e),
    u = rt(t, n + "rotation", e),
    c = co(t, n + "rotate-with-view", e),
    h = Sr(t, n + "radius"),
    d = Sr(t, n + "radius1"),
    f = Sr(t, n + "radius2"),
    m = Sr(t, n + "angle"),
    y = Rd(t, n + "declutter-mode"),
    v = new ja({
      points: r,
      radius: h,
      radius1: d,
      radius2: f,
      angle: m,
      declutterMode: y,
    });
  return function (p) {
    return (
      s && v.setFill(s(p)),
      o && v.setStroke(o(p)),
      a && v.setDisplacement(a(p)),
      u && v.setRotation(u(p)),
      c && v.setRotateWithView(c(p)),
      l && v.setScale(l(p)),
      v
    );
  };
}
function _w(t, e) {
  const n = "circle-",
    i = ao(t, n, e),
    r = uo(t, n, e),
    s = rt(t, n + "radius", e),
    o = ba(t, n + "scale", e),
    l = ra(t, n + "displacement", e),
    a = rt(t, n + "rotation", e),
    u = co(t, n + "rotate-with-view", e),
    c = Rd(t, n + "declutter-mode"),
    h = new Xa({ radius: 5, declutterMode: c });
  return function (d) {
    return (
      s && h.setRadius(s(d)),
      i && h.setFill(i(d)),
      r && h.setStroke(r(d)),
      l && h.setDisplacement(l(d)),
      a && h.setRotation(a(d)),
      u && h.setRotateWithView(u(d)),
      o && h.setScale(o(d)),
      h
    );
  };
}
function rt(t, e, n) {
  if (!(e in t)) return;
  const i = _i(t[e], N, n);
  return function (r) {
    return e0(i(r), e);
  };
}
function Xn(t, e, n) {
  if (!(e in t)) return null;
  const i = _i(t[e], Wt, n);
  return function (r) {
    return J_(i(r), e);
  };
}
function co(t, e, n) {
  if (!(e in t)) return null;
  const i = _i(t[e], Ee, n);
  return function (r) {
    const s = i(r);
    if (typeof s != "boolean") throw new Error(`Expected a boolean for ${e}`);
    return s;
  };
}
function q_(t, e, n) {
  if (!(e in t)) return null;
  const i = _i(t[e], Xe | Wt, n);
  return function (r) {
    return t0(i(r), e);
  };
}
function Q_(t, e, n) {
  if (!(e in t)) return null;
  const i = _i(t[e], di, n);
  return function (r) {
    return Co(i(r), e);
  };
}
function ra(t, e, n) {
  if (!(e in t)) return null;
  const i = _i(t[e], di, n);
  return function (r) {
    const s = Co(i(r), e);
    if (s.length !== 2) throw new Error(`Expected two numbers for ${e}`);
    return s;
  };
}
function ba(t, e, n) {
  if (!(e in t)) return null;
  const i = _i(t[e], di | N, n);
  return function (r) {
    return xw(i(r), e);
  };
}
function Sr(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "number") throw new Error(`Expected a number for ${e}`);
    return n;
  }
}
function yw(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n == "number") return gt(n);
    if (!Array.isArray(n))
      throw new Error(`Expected a number or size array for ${e}`);
    if (n.length !== 2 || typeof n[0] != "number" || typeof n[1] != "number")
      throw new Error(`Expected a number or size array for ${e}`);
    return n;
  }
}
function vw(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "string") throw new Error(`Expected a string for ${e}`);
    return n;
  }
}
function Lg(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (
      n !== "bottom-left" &&
      n !== "bottom-right" &&
      n !== "top-left" &&
      n !== "top-right"
    )
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${e}`,
      );
    return n;
  }
}
function kg(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (n !== "pixels" && n !== "fraction")
      throw new Error(`Expected pixels or fraction for ${e}`);
    return n;
  }
}
function Ew(t, e) {
  const n = t[e];
  if (n !== void 0) return Co(n, e);
}
function Rd(t, e) {
  const n = t[e];
  if (n !== void 0) {
    if (typeof n != "string") throw new Error(`Expected a string for ${e}`);
    if (n !== "declutter" && n !== "obstacle" && n !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${e}`);
    return n;
  }
}
function ww(t, e) {
  const n = t[e];
  if (n !== void 0) return t0(n, e);
}
function Co(t, e) {
  if (!Array.isArray(t)) throw new Error(`Expected an array for ${e}`);
  const n = t.length;
  for (let i = 0; i < n; ++i)
    if (typeof t[i] != "number")
      throw new Error(`Expected an array of numbers for ${e}`);
  return t;
}
function J_(t, e) {
  if (typeof t != "string") throw new Error(`Expected a string for ${e}`);
  return t;
}
function e0(t, e) {
  if (typeof t != "number") throw new Error(`Expected a number for ${e}`);
  return t;
}
function t0(t, e) {
  if (typeof t == "string") return t;
  const n = Co(t, e),
    i = n.length;
  if (i < 3 || i > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${e}`);
  return n;
}
function xw(t, e) {
  if (typeof t == "number") return t;
  const n = Co(t, e);
  if (n.length !== 2)
    throw new Error(`Expected an array of two numbers for ${e}`);
  return n;
}
const Pg = { RENDER_ORDER: "renderOrder" };
class Cw extends Ya {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.style,
      delete n.renderBuffer,
      delete n.updateWhileAnimating,
      delete n.updateWhileInteracting,
      super(n),
      (this.declutter_ = e.declutter !== void 0 ? e.declutter : !1),
      (this.renderBuffer_ = e.renderBuffer !== void 0 ? e.renderBuffer : 100),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      this.setStyle(e.style),
      (this.updateWhileAnimating_ =
        e.updateWhileAnimating !== void 0 ? e.updateWhileAnimating : !1),
      (this.updateWhileInteracting_ =
        e.updateWhileInteracting !== void 0 ? e.updateWhileInteracting : !1);
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(e) {
    return super.getFeatures(e);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(Pg.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(e) {
    e.declutterTree || (e.declutterTree = new K_(9)),
      this.getRenderer().renderDeclutter(e);
  }
  setRenderOrder(e) {
    this.set(Pg.RENDER_ORDER, e);
  }
  setStyle(e) {
    (this.style_ = Sw(e)),
      (this.styleFunction_ = e === null ? void 0 : fE(this.style_)),
      this.changed();
  }
}
function Sw(t) {
  if (t === void 0) return gE;
  if (!t) return null;
  if (typeof t == "function" || t instanceof Cl) return t;
  if (!Array.isArray(t)) return Ig([t]);
  if (t.length === 0) return [];
  const e = t.length,
    n = t[0];
  if (n instanceof Cl) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = t[s];
      if (!(o instanceof Cl))
        throw new Error("Expected a list of style instances");
      r[s] = o;
    }
    return r;
  }
  if ("style" in n) {
    const r = new Array(e);
    for (let s = 0; s < e; ++s) {
      const o = t[s];
      if (!("style" in o))
        throw new Error("Expected a list of rules with a style property");
      r[s] = o;
    }
    return hw(r);
  }
  return Ig(t);
}
const z = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  ol = [z.FILL],
  $n = [z.STROKE],
  Ai = [z.BEGIN_PATH],
  Mg = [z.CLOSE_PATH];
class n0 {
  drawCustom(e, n, i, r) {}
  drawGeometry(e) {}
  setStyle(e) {}
  drawCircle(e, n) {}
  drawFeature(e, n) {}
  drawGeometryCollection(e, n) {}
  drawLineString(e, n) {}
  drawMultiLineString(e, n) {}
  drawMultiPoint(e, n) {}
  drawMultiPolygon(e, n) {}
  drawPoint(e, n) {}
  drawPolygon(e, n) {}
  drawText(e, n) {}
  setFillStrokeStyle(e, n) {}
  setImageStyle(e, n) {}
  setTextStyle(e, n) {}
}
class So extends n0 {
  constructor(e, n, i, r) {
    super(),
      (this.tolerance = e),
      (this.maxExtent = n),
      (this.pixelRatio = r),
      (this.maxLineWidth = 0),
      (this.resolution = i),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_ = null),
      (this.bufferedMaxExtent_ = null),
      (this.instructions = []),
      (this.coordinates = []),
      (this.tmpCoordinate_ = []),
      (this.hitDetectionInstructions = []),
      (this.state = {});
  }
  applyPixelRatio(e) {
    const n = this.pixelRatio;
    return n == 1
      ? e
      : e.map(function (i) {
          return i * n;
        });
  }
  appendFlatPointCoordinates(e, n) {
    const i = this.getBufferedMaxExtent(),
      r = this.tmpCoordinate_,
      s = this.coordinates;
    let o = s.length;
    for (let l = 0, a = e.length; l < a; l += n)
      (r[0] = e[l]),
        (r[1] = e[l + 1]),
        La(i, r) && ((s[o++] = r[0]), (s[o++] = r[1]));
    return o;
  }
  appendFlatLineCoordinates(e, n, i, r, s, o) {
    const l = this.coordinates;
    let a = l.length;
    const u = this.getBufferedMaxExtent();
    o && (n += r);
    let c = e[n],
      h = e[n + 1];
    const d = this.tmpCoordinate_;
    let f = !0,
      m,
      y,
      v;
    for (m = n + r; m < i; m += r)
      (d[0] = e[m]),
        (d[1] = e[m + 1]),
        (v = Fc(u, d)),
        v !== y
          ? (f && ((l[a++] = c), (l[a++] = h), (f = !1)),
            (l[a++] = d[0]),
            (l[a++] = d[1]))
          : v === Ie.INTERSECTING
            ? ((l[a++] = d[0]), (l[a++] = d[1]), (f = !1))
            : (f = !0),
        (c = d[0]),
        (h = d[1]),
        (y = v);
    return ((s && f) || m === n + r) && ((l[a++] = c), (l[a++] = h)), a;
  }
  drawCustomCoordinates_(e, n, i, r, s) {
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o],
        u = this.appendFlatLineCoordinates(e, n, a, r, !1, !1);
      s.push(u), (n = a);
    }
    return n;
  }
  drawCustom(e, n, i, r) {
    this.beginGeometry(e, n);
    const s = e.getType(),
      o = e.getStride(),
      l = this.coordinates.length;
    let a, u, c, h, d;
    switch (s) {
      case "MultiPolygon":
        (a = e.getOrientedFlatCoordinates()), (h = []);
        const f = e.getEndss();
        d = 0;
        for (let m = 0, y = f.length; m < y; ++m) {
          const v = [];
          (d = this.drawCustomCoordinates_(a, d, f[m], o, v)), h.push(v);
        }
        this.instructions.push([z.CUSTOM, l, h, e, i, Uc]),
          this.hitDetectionInstructions.push([z.CUSTOM, l, h, e, r || i, Uc]);
        break;
      case "Polygon":
      case "MultiLineString":
        (c = []),
          (a =
            s == "Polygon"
              ? e.getOrientedFlatCoordinates()
              : e.getFlatCoordinates()),
          (d = this.drawCustomCoordinates_(a, 0, e.getEnds(), o, c)),
          this.instructions.push([z.CUSTOM, l, c, e, i, to]),
          this.hitDetectionInstructions.push([z.CUSTOM, l, c, e, r || i, to]);
        break;
      case "LineString":
      case "Circle":
        (a = e.getFlatCoordinates()),
          (u = this.appendFlatLineCoordinates(a, 0, a.length, o, !1, !1)),
          this.instructions.push([z.CUSTOM, l, u, e, i, Zn]),
          this.hitDetectionInstructions.push([z.CUSTOM, l, u, e, r || i, Zn]);
        break;
      case "MultiPoint":
        (a = e.getFlatCoordinates()),
          (u = this.appendFlatPointCoordinates(a, o)),
          u > l &&
            (this.instructions.push([z.CUSTOM, l, u, e, i, Zn]),
            this.hitDetectionInstructions.push([
              z.CUSTOM,
              l,
              u,
              e,
              r || i,
              Zn,
            ]));
        break;
      case "Point":
        (a = e.getFlatCoordinates()),
          this.coordinates.push(a[0], a[1]),
          (u = this.coordinates.length),
          this.instructions.push([z.CUSTOM, l, u, e, i]),
          this.hitDetectionInstructions.push([z.CUSTOM, l, u, e, r || i]);
        break;
    }
    this.endGeometry(n);
  }
  beginGeometry(e, n) {
    (this.beginGeometryInstruction1_ = [z.BEGIN_GEOMETRY, n, 0, e]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [z.BEGIN_GEOMETRY, n, 0, e]),
      this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates,
    };
  }
  reverseHitDetectionInstructions() {
    const e = this.hitDetectionInstructions;
    e.reverse();
    let n;
    const i = e.length;
    let r,
      s,
      o = -1;
    for (n = 0; n < i; ++n)
      (r = e[n]),
        (s = r[0]),
        s == z.END_GEOMETRY
          ? (o = n)
          : s == z.BEGIN_GEOMETRY &&
            ((r[2] = n), K1(this.hitDetectionInstructions, o, n), (o = -1));
  }
  setFillStrokeStyle(e, n) {
    const i = this.state;
    if (e) {
      const r = e.getColor();
      i.fillStyle = $t(r || nt);
    } else i.fillStyle = void 0;
    if (n) {
      const r = n.getColor();
      i.strokeStyle = $t(r || so);
      const s = n.getLineCap();
      i.lineCap = s !== void 0 ? s : Vr;
      const o = n.getLineDash();
      i.lineDash = o ? o.slice() : yn;
      const l = n.getLineDashOffset();
      i.lineDashOffset = l || vn;
      const a = n.getLineJoin();
      i.lineJoin = a !== void 0 ? a : br;
      const u = n.getWidth();
      i.lineWidth = u !== void 0 ? u : lo;
      const c = n.getMiterLimit();
      (i.miterLimit = c !== void 0 ? c : ro),
        i.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = i.lineWidth), (this.bufferedMaxExtent_ = null));
    } else
      (i.strokeStyle = void 0),
        (i.lineCap = void 0),
        (i.lineDash = null),
        (i.lineDashOffset = void 0),
        (i.lineJoin = void 0),
        (i.lineWidth = void 0),
        (i.miterLimit = void 0);
  }
  createFill(e) {
    const n = e.fillStyle,
      i = [z.SET_FILL_STYLE, n];
    return typeof n != "string" && i.push(!0), i;
  }
  applyStroke(e) {
    this.instructions.push(this.createStroke(e));
  }
  createStroke(e) {
    return [
      z.SET_STROKE_STYLE,
      e.strokeStyle,
      e.lineWidth * this.pixelRatio,
      e.lineCap,
      e.lineJoin,
      e.miterLimit,
      this.applyPixelRatio(e.lineDash),
      e.lineDashOffset * this.pixelRatio,
    ];
  }
  updateFillStyle(e, n) {
    const i = e.fillStyle;
    (typeof i != "string" || e.currentFillStyle != i) &&
      (i !== void 0 && this.instructions.push(n.call(this, e)),
      (e.currentFillStyle = i));
  }
  updateStrokeStyle(e, n) {
    const i = e.strokeStyle,
      r = e.lineCap,
      s = e.lineDash,
      o = e.lineDashOffset,
      l = e.lineJoin,
      a = e.lineWidth,
      u = e.miterLimit;
    (e.currentStrokeStyle != i ||
      e.currentLineCap != r ||
      (s != e.currentLineDash && !mi(e.currentLineDash, s)) ||
      e.currentLineDashOffset != o ||
      e.currentLineJoin != l ||
      e.currentLineWidth != a ||
      e.currentMiterLimit != u) &&
      (i !== void 0 && n.call(this, e),
      (e.currentStrokeStyle = i),
      (e.currentLineCap = r),
      (e.currentLineDash = s),
      (e.currentLineDashOffset = o),
      (e.currentLineJoin = l),
      (e.currentLineWidth = a),
      (e.currentMiterLimit = u));
  }
  endGeometry(e) {
    (this.beginGeometryInstruction1_[2] = this.instructions.length),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_[2] =
        this.hitDetectionInstructions.length),
      (this.beginGeometryInstruction2_ = null);
    const n = [z.END_GEOMETRY, e];
    this.instructions.push(n), this.hitDetectionInstructions.push(n);
  }
  getBufferedMaxExtent() {
    if (
      !this.bufferedMaxExtent_ &&
      ((this.bufferedMaxExtent_ = f_(this.maxExtent)), this.maxLineWidth > 0)
    ) {
      const e = (this.resolution * (this.maxLineWidth + 1)) / 2;
      Jh(this.bufferedMaxExtent_, e, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class Rw extends So {
  constructor(e, n, i, r) {
    super(e, n, i, r),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.height_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.scale_ = void 0),
      (this.width_ = void 0),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  drawPoint(e, n) {
    if (!this.image_) return;
    this.beginGeometry(e, n);
    const i = e.getFlatCoordinates(),
      r = e.getStride(),
      s = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, r);
    this.instructions.push([
      z.DRAW_IMAGE,
      s,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        z.DRAW_IMAGE,
        s,
        o,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(n);
  }
  drawMultiPoint(e, n) {
    if (!this.image_) return;
    this.beginGeometry(e, n);
    const i = e.getFlatCoordinates(),
      r = e.getStride(),
      s = this.coordinates.length,
      o = this.appendFlatPointCoordinates(i, r);
    this.instructions.push([
      z.DRAW_IMAGE,
      s,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        z.DRAW_IMAGE,
        s,
        o,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(n);
  }
  finish() {
    return (
      this.reverseHitDetectionInstructions(),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.height_ = void 0),
      (this.scale_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.width_ = void 0),
      super.finish()
    );
  }
  setImageStyle(e, n) {
    const i = e.getAnchor(),
      r = e.getSize(),
      s = e.getOrigin();
    (this.imagePixelRatio_ = e.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = i[0]),
      (this.anchorY_ = i[1]),
      (this.hitDetectionImage_ = e.getHitDetectionImage()),
      (this.image_ = e.getImage(this.pixelRatio)),
      (this.height_ = r[1]),
      (this.opacity_ = e.getOpacity()),
      (this.originX_ = s[0]),
      (this.originY_ = s[1]),
      (this.rotateWithView_ = e.getRotateWithView()),
      (this.rotation_ = e.getRotation()),
      (this.scale_ = e.getScaleArray()),
      (this.width_ = r[0]),
      (this.declutterMode_ = e.getDeclutterMode()),
      (this.declutterImageWithText_ = n);
  }
}
const Tw = Rw;
class Iw extends So {
  constructor(e, n, i, r) {
    super(e, n, i, r);
  }
  drawFlatCoordinates_(e, n, i, r) {
    const s = this.coordinates.length,
      o = this.appendFlatLineCoordinates(e, n, i, r, !1, !1),
      l = [z.MOVE_TO_LINE_TO, s, o];
    return this.instructions.push(l), this.hitDetectionInstructions.push(l), i;
  }
  drawLineString(e, n) {
    const i = this.state,
      r = i.strokeStyle,
      s = i.lineWidth;
    if (r === void 0 || s === void 0) return;
    this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(e, n),
      this.hitDetectionInstructions.push(
        [
          z.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          yn,
          vn,
        ],
        Ai,
      );
    const o = e.getFlatCoordinates(),
      l = e.getStride();
    this.drawFlatCoordinates_(o, 0, o.length, l),
      this.hitDetectionInstructions.push($n),
      this.endGeometry(n);
  }
  drawMultiLineString(e, n) {
    const i = this.state,
      r = i.strokeStyle,
      s = i.lineWidth;
    if (r === void 0 || s === void 0) return;
    this.updateStrokeStyle(i, this.applyStroke),
      this.beginGeometry(e, n),
      this.hitDetectionInstructions.push(
        [
          z.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          yn,
          vn,
        ],
        Ai,
      );
    const o = e.getEnds(),
      l = e.getFlatCoordinates(),
      a = e.getStride();
    let u = 0;
    for (let c = 0, h = o.length; c < h; ++c)
      u = this.drawFlatCoordinates_(l, u, o[c], a);
    this.hitDetectionInstructions.push($n), this.endGeometry(n);
  }
  finish() {
    const e = this.state;
    return (
      e.lastStroke != null &&
        e.lastStroke != this.coordinates.length &&
        this.instructions.push($n),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    );
  }
  applyStroke(e) {
    e.lastStroke != null &&
      e.lastStroke != this.coordinates.length &&
      (this.instructions.push($n), (e.lastStroke = this.coordinates.length)),
      (e.lastStroke = 0),
      super.applyStroke(e),
      this.instructions.push(Ai);
  }
}
const Lw = Iw;
class kw extends So {
  constructor(e, n, i, r) {
    super(e, n, i, r);
  }
  drawFlatCoordinatess_(e, n, i, r) {
    const s = this.state,
      o = s.fillStyle !== void 0,
      l = s.strokeStyle !== void 0,
      a = i.length;
    this.instructions.push(Ai), this.hitDetectionInstructions.push(Ai);
    for (let u = 0; u < a; ++u) {
      const c = i[u],
        h = this.coordinates.length,
        d = this.appendFlatLineCoordinates(e, n, c, r, !0, !l),
        f = [z.MOVE_TO_LINE_TO, h, d];
      this.instructions.push(f),
        this.hitDetectionInstructions.push(f),
        l &&
          (this.instructions.push(Mg), this.hitDetectionInstructions.push(Mg)),
        (n = c);
    }
    return (
      o && (this.instructions.push(ol), this.hitDetectionInstructions.push(ol)),
      l && (this.instructions.push($n), this.hitDetectionInstructions.push($n)),
      n
    );
  }
  drawCircle(e, n) {
    const i = this.state,
      r = i.fillStyle,
      s = i.strokeStyle;
    if (r === void 0 && s === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n),
      i.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([z.SET_FILL_STYLE, nt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          z.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          yn,
          vn,
        ]);
    const o = e.getFlatCoordinates(),
      l = e.getStride(),
      a = this.coordinates.length;
    this.appendFlatLineCoordinates(o, 0, o.length, l, !1, !1);
    const u = [z.CIRCLE, a];
    this.instructions.push(Ai, u),
      this.hitDetectionInstructions.push(Ai, u),
      i.fillStyle !== void 0 &&
        (this.instructions.push(ol), this.hitDetectionInstructions.push(ol)),
      i.strokeStyle !== void 0 &&
        (this.instructions.push($n), this.hitDetectionInstructions.push($n)),
      this.endGeometry(n);
  }
  drawPolygon(e, n) {
    const i = this.state,
      r = i.fillStyle,
      s = i.strokeStyle;
    if (r === void 0 && s === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n),
      i.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([z.SET_FILL_STYLE, nt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          z.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          yn,
          vn,
        ]);
    const o = e.getEnds(),
      l = e.getOrientedFlatCoordinates(),
      a = e.getStride();
    this.drawFlatCoordinatess_(l, 0, o, a), this.endGeometry(n);
  }
  drawMultiPolygon(e, n) {
    const i = this.state,
      r = i.fillStyle,
      s = i.strokeStyle;
    if (r === void 0 && s === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(e, n),
      i.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([z.SET_FILL_STYLE, nt]),
      i.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          z.SET_STROKE_STYLE,
          i.strokeStyle,
          i.lineWidth,
          i.lineCap,
          i.lineJoin,
          i.miterLimit,
          yn,
          vn,
        ]);
    const o = e.getEndss(),
      l = e.getOrientedFlatCoordinates(),
      a = e.getStride();
    let u = 0;
    for (let c = 0, h = o.length; c < h; ++c)
      u = this.drawFlatCoordinatess_(l, u, o[c], a);
    this.endGeometry(n);
  }
  finish() {
    this.reverseHitDetectionInstructions(), (this.state = null);
    const e = this.tolerance;
    if (e !== 0) {
      const n = this.coordinates;
      for (let i = 0, r = n.length; i < r; ++i) n[i] = Si(n[i], e);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    const e = this.state;
    e.fillStyle !== void 0 && this.updateFillStyle(e, this.createFill),
      e.strokeStyle !== void 0 && this.updateStrokeStyle(e, this.applyStroke);
  }
}
const Ag = kw;
function Pw(t, e, n, i, r) {
  const s = [];
  let o = n,
    l = 0,
    a = e.slice(n, 2);
  for (; l < t && o + r < i; ) {
    const [u, c] = a.slice(-2),
      h = e[o + r],
      d = e[o + r + 1],
      f = Math.sqrt((h - u) * (h - u) + (d - c) * (d - c));
    if (((l += f), l >= t)) {
      const m = (t - l + f) / f,
        y = dt(u, h, m),
        v = dt(c, d, m);
      a.push(y, v), s.push(a), (a = [y, v]), l == t && (o += r), (l = 0);
    } else if (l < t) a.push(e[o + r], e[o + r + 1]), (o += r);
    else {
      const m = f - l,
        y = dt(u, h, m / f),
        v = dt(c, d, m / f);
      a.push(y, v), s.push(a), (a = [y, v]), (l = 0), (o += r);
    }
  }
  return l > 0 && s.push(a), s;
}
function Mw(t, e, n, i, r) {
  let s = n,
    o = n,
    l = 0,
    a = 0,
    u = n,
    c,
    h,
    d,
    f,
    m,
    y,
    v,
    p,
    g,
    _;
  for (h = n; h < i; h += r) {
    const E = e[h],
      w = e[h + 1];
    m !== void 0 &&
      ((g = E - m),
      (_ = w - y),
      (f = Math.sqrt(g * g + _ * _)),
      v !== void 0 &&
        ((a += d),
        (c = Math.acos((v * g + p * _) / (d * f))),
        c > t && (a > l && ((l = a), (s = u), (o = h)), (a = 0), (u = h - r))),
      (d = f),
      (v = g),
      (p = _)),
      (m = E),
      (y = w);
  }
  return (a += f), a > l ? [u, h] : [s, o];
}
const sa = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
};
class Aw extends So {
  constructor(e, n, i, r) {
    super(e, n, i, r),
      (this.labels_ = null),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[nt] = { fillStyle: nt }),
      (this.textStrokeState_ = null),
      (this.strokeStates = {}),
      (this.textState_ = {}),
      (this.textStates = {}),
      (this.textKey_ = ""),
      (this.fillKey_ = ""),
      (this.strokeKey_ = ""),
      (this.declutterImageWithText_ = void 0);
  }
  finish() {
    const e = super.finish();
    return (
      (e.textStates = this.textStates),
      (e.fillStates = this.fillStates),
      (e.strokeStates = this.strokeStates),
      e
    );
  }
  drawText(e, n) {
    const i = this.textFillState_,
      r = this.textStrokeState_,
      s = this.textState_;
    if (this.text_ === "" || !s || (!i && !r)) return;
    const o = this.coordinates;
    let l = o.length;
    const a = e.getType();
    let u = null,
      c = e.getStride();
    if (
      s.placement === "line" &&
      (a == "LineString" ||
        a == "MultiLineString" ||
        a == "Polygon" ||
        a == "MultiPolygon")
    ) {
      if (!it(this.getBufferedMaxExtent(), e.getExtent())) return;
      let h;
      if (((u = e.getFlatCoordinates()), a == "LineString")) h = [u.length];
      else if (a == "MultiLineString") h = e.getEnds();
      else if (a == "Polygon") h = e.getEnds().slice(0, 1);
      else if (a == "MultiPolygon") {
        const y = e.getEndss();
        h = [];
        for (let v = 0, p = y.length; v < p; ++v) h.push(y[v][0]);
      }
      this.beginGeometry(e, n);
      const d = s.repeat,
        f = d ? void 0 : s.textAlign;
      let m = 0;
      for (let y = 0, v = h.length; y < v; ++y) {
        let p;
        d
          ? (p = Pw(d * this.resolution, u, m, h[y], c))
          : (p = [u.slice(m, h[y])]);
        for (let g = 0, _ = p.length; g < _; ++g) {
          const E = p[g];
          let w = 0,
            x = E.length;
          if (f == null) {
            const S = Mw(s.maxAngle, E, 0, E.length, 2);
            (w = S[0]), (x = S[1]);
          }
          for (let S = w; S < x; S += c) o.push(E[S], E[S + 1]);
          const C = o.length;
          (m = h[y]), this.drawChars_(l, C), (l = C);
        }
      }
      this.endGeometry(n);
    } else {
      let h = s.overflow ? null : [];
      switch (a) {
        case "Point":
        case "MultiPoint":
          u = e.getFlatCoordinates();
          break;
        case "LineString":
          u = e.getFlatMidpoint();
          break;
        case "Circle":
          u = e.getCenter();
          break;
        case "MultiLineString":
          (u = e.getFlatMidpoints()), (c = 2);
          break;
        case "Polygon":
          (u = e.getFlatInteriorPoint()),
            s.overflow || h.push(u[2] / this.resolution),
            (c = 3);
          break;
        case "MultiPolygon":
          const p = e.getFlatInteriorPoints();
          u = [];
          for (let g = 0, _ = p.length; g < _; g += 3)
            s.overflow || h.push(p[g + 2] / this.resolution),
              u.push(p[g], p[g + 1]);
          if (u.length === 0) return;
          c = 2;
          break;
      }
      const d = this.appendFlatPointCoordinates(u, c);
      if (d === l) return;
      if (h && (d - l) / 2 !== u.length / c) {
        let p = l / 2;
        h = h.filter((g, _) => {
          const E =
            o[(p + _) * 2] === u[_ * c] && o[(p + _) * 2 + 1] === u[_ * c + 1];
          return E || --p, E;
        });
      }
      this.saveTextStates_(),
        (s.backgroundFill || s.backgroundStroke) &&
          (this.setFillStrokeStyle(s.backgroundFill, s.backgroundStroke),
          s.backgroundFill && this.updateFillStyle(this.state, this.createFill),
          s.backgroundStroke &&
            (this.updateStrokeStyle(this.state, this.applyStroke),
            this.hitDetectionInstructions.push(this.createStroke(this.state)))),
        this.beginGeometry(e, n);
      let f = s.padding;
      if (f != Mi && (s.scale[0] < 0 || s.scale[1] < 0)) {
        let p = s.padding[0],
          g = s.padding[1],
          _ = s.padding[2],
          E = s.padding[3];
        s.scale[0] < 0 && ((g = -g), (E = -E)),
          s.scale[1] < 0 && ((p = -p), (_ = -_)),
          (f = [p, g, _, E]);
      }
      const m = this.pixelRatio;
      this.instructions.push([
        z.DRAW_IMAGE,
        l,
        d,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        void 0,
        this.declutterImageWithText_,
        f == Mi
          ? Mi
          : f.map(function (p) {
              return p * m;
            }),
        !!s.backgroundFill,
        !!s.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        h,
      ]);
      const y = 1 / m,
        v = this.state.fillStyle;
      s.backgroundFill &&
        ((this.state.fillStyle = nt),
        this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.hitDetectionInstructions.push([
          z.DRAW_IMAGE,
          l,
          d,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [y, y],
          NaN,
          void 0,
          this.declutterImageWithText_,
          f,
          !!s.backgroundFill,
          !!s.backgroundStroke,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? nt : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          h,
        ]),
        s.backgroundFill &&
          ((this.state.fillStyle = v),
          this.hitDetectionInstructions.push(this.createFill(this.state))),
        this.endGeometry(n);
    }
  }
  saveTextStates_() {
    const e = this.textStrokeState_,
      n = this.textState_,
      i = this.textFillState_,
      r = this.strokeKey_;
    e &&
      (r in this.strokeStates ||
        (this.strokeStates[r] = {
          strokeStyle: e.strokeStyle,
          lineCap: e.lineCap,
          lineDashOffset: e.lineDashOffset,
          lineWidth: e.lineWidth,
          lineJoin: e.lineJoin,
          miterLimit: e.miterLimit,
          lineDash: e.lineDash,
        }));
    const s = this.textKey_;
    s in this.textStates ||
      (this.textStates[s] = {
        font: n.font,
        textAlign: n.textAlign || oo,
        justify: n.justify,
        textBaseline: n.textBaseline || ta,
        scale: n.scale,
      });
    const o = this.fillKey_;
    i &&
      (o in this.fillStates ||
        (this.fillStates[o] = { fillStyle: i.fillStyle }));
  }
  drawChars_(e, n) {
    const i = this.textStrokeState_,
      r = this.textState_,
      s = this.strokeKey_,
      o = this.textKey_,
      l = this.fillKey_;
    this.saveTextStates_();
    const a = this.pixelRatio,
      u = sa[r.textBaseline],
      c = this.textOffsetY_ * a,
      h = this.text_,
      d = i ? (i.lineWidth * Math.abs(r.scale[0])) / 2 : 0;
    this.instructions.push([
      z.DRAW_CHARS,
      e,
      n,
      u,
      r.overflow,
      l,
      r.maxAngle,
      a,
      c,
      s,
      d * a,
      h,
      o,
      1,
    ]),
      this.hitDetectionInstructions.push([
        z.DRAW_CHARS,
        e,
        n,
        u,
        r.overflow,
        l && nt,
        r.maxAngle,
        a,
        c,
        s,
        d * a,
        h,
        o,
        1 / a,
      ]);
  }
  setTextStyle(e, n) {
    let i, r, s;
    if (!e) this.text_ = "";
    else {
      const o = e.getFill();
      o
        ? ((r = this.textFillState_),
          r || ((r = {}), (this.textFillState_ = r)),
          (r.fillStyle = $t(o.getColor() || nt)))
        : ((r = null), (this.textFillState_ = r));
      const l = e.getStroke();
      if (!l) (s = null), (this.textStrokeState_ = s);
      else {
        (s = this.textStrokeState_),
          s || ((s = {}), (this.textStrokeState_ = s));
        const m = l.getLineDash(),
          y = l.getLineDashOffset(),
          v = l.getWidth(),
          p = l.getMiterLimit();
        (s.lineCap = l.getLineCap() || Vr),
          (s.lineDash = m ? m.slice() : yn),
          (s.lineDashOffset = y === void 0 ? vn : y),
          (s.lineJoin = l.getLineJoin() || br),
          (s.lineWidth = v === void 0 ? lo : v),
          (s.miterLimit = p === void 0 ? ro : p),
          (s.strokeStyle = $t(l.getColor() || so));
      }
      i = this.textState_;
      const a = e.getFont() || U_;
      aE(a);
      const u = e.getScaleArray();
      (i.overflow = e.getOverflow()),
        (i.font = a),
        (i.maxAngle = e.getMaxAngle()),
        (i.placement = e.getPlacement()),
        (i.textAlign = e.getTextAlign()),
        (i.repeat = e.getRepeat()),
        (i.justify = e.getJustify()),
        (i.textBaseline = e.getTextBaseline() || ta),
        (i.backgroundFill = e.getBackgroundFill()),
        (i.backgroundStroke = e.getBackgroundStroke()),
        (i.padding = e.getPadding() || Mi),
        (i.scale = u === void 0 ? [1, 1] : u);
      const c = e.getOffsetX(),
        h = e.getOffsetY(),
        d = e.getRotateWithView(),
        f = e.getRotation();
      (this.text_ = e.getText() || ""),
        (this.textOffsetX_ = c === void 0 ? 0 : c),
        (this.textOffsetY_ = h === void 0 ? 0 : h),
        (this.textRotateWithView_ = d === void 0 ? !1 : d),
        (this.textRotation_ = f === void 0 ? 0 : f),
        (this.strokeKey_ = s
          ? (typeof s.strokeStyle == "string"
              ? s.strokeStyle
              : ee(s.strokeStyle)) +
            s.lineCap +
            s.lineDashOffset +
            "|" +
            s.lineWidth +
            s.lineJoin +
            s.miterLimit +
            "[" +
            s.lineDash.join() +
            "]"
          : ""),
        (this.textKey_ =
          i.font +
          i.scale +
          (i.textAlign || "?") +
          (i.repeat || "?") +
          (i.justify || "?") +
          (i.textBaseline || "?")),
        (this.fillKey_ = r
          ? typeof r.fillStyle == "string"
            ? r.fillStyle
            : "|" + ee(r.fillStyle)
          : "");
    }
    this.declutterImageWithText_ = n;
  }
}
const Ow = {
  Circle: Ag,
  Default: So,
  Image: Tw,
  LineString: Lw,
  Polygon: Ag,
  Text: Aw,
};
class Og {
  constructor(e, n, i, r) {
    (this.tolerance_ = e),
      (this.maxExtent_ = n),
      (this.pixelRatio_ = r),
      (this.resolution_ = i),
      (this.buildersByZIndex_ = {});
  }
  finish() {
    const e = {};
    for (const n in this.buildersByZIndex_) {
      e[n] = e[n] || {};
      const i = this.buildersByZIndex_[n];
      for (const r in i) {
        const s = i[r].finish();
        e[n][r] = s;
      }
    }
    return e;
  }
  getBuilder(e, n) {
    const i = e !== void 0 ? e.toString() : "0";
    let r = this.buildersByZIndex_[i];
    r === void 0 && ((r = {}), (this.buildersByZIndex_[i] = r));
    let s = r[n];
    if (s === void 0) {
      const o = Ow[n];
      (s = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_,
      )),
        (r[n] = s);
    }
    return s;
  }
}
class Fw extends yo {
  constructor(e) {
    super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = e),
      (this.declutterExecutorGroup = null);
  }
  getFeatures(e) {
    return W();
  }
  getData(e) {
    return null;
  }
  prepareFrame(e) {
    return W();
  }
  renderFrame(e, n) {
    return W();
  }
  loadedTileCallback(e, n, i) {
    e[n] || (e[n] = {}), (e[n][i.tileCoord.toString()] = i);
  }
  createLoadedTileFinder(e, n, i) {
    return (r, s) => {
      const o = this.loadedTileCallback.bind(this, i, r);
      return e.forEachLoadedTile(n, r, s, o);
    };
  }
  forEachFeatureAtCoordinate(e, n, i, r, s) {}
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {}
  handleImageChange_(e) {
    const n = e.target;
    (n.getState() === se.LOADED || n.getState() === se.ERROR) &&
      this.renderIfReadyAndVisible();
  }
  loadImage(e) {
    let n = e.getState();
    return (
      n != se.LOADED &&
        n != se.ERROR &&
        e.addEventListener(V.CHANGE, this.boundHandleImageChange_),
      n == se.IDLE && (e.load(), (n = e.getState())),
      n == se.LOADED
    );
  }
  renderIfReadyAndVisible() {
    const e = this.getLayer();
    e && e.getVisible() && e.getSourceState() === "ready" && e.changed();
  }
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
class i0 extends Ln {
  constructor(e, n, i, r) {
    super(e),
      (this.inversePixelTransform = n),
      (this.frameState = i),
      (this.context = r);
  }
}
const Fg = [];
let ar = null;
function Dw() {
  ar = Ke(1, 1, void 0, { willReadFrequently: !0 });
}
class r0 extends Fw {
  constructor(e) {
    super(e),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = Ut()),
      (this.pixelTransform = Ut()),
      (this.inversePixelTransform = Ut()),
      (this.context = null),
      (this.containerReused = !1),
      (this.pixelContext_ = null),
      (this.frameState = null);
  }
  getImageData(e, n, i) {
    ar || Dw(), ar.clearRect(0, 0, 1, 1);
    let r;
    try {
      ar.drawImage(e, n, i, 1, 1, 0, 0, 1, 1),
        (r = ar.getImageData(0, 0, 1, 1).data);
    } catch {
      return (ar = null), null;
    }
    return r;
  }
  getBackground(e) {
    let i = this.getLayer().getBackground();
    return (
      typeof i == "function" && (i = i(e.viewState.resolution)), i || void 0
    );
  }
  useContainer(e, n, i) {
    const r = this.getLayer().getClassName();
    let s, o;
    if (
      e &&
      e.className === r &&
      (!i ||
        (e &&
          e.style.backgroundColor &&
          mi(ea(e.style.backgroundColor), ea(i))))
    ) {
      const l = e.firstElementChild;
      l instanceof HTMLCanvasElement && (o = l.getContext("2d"));
    }
    if (
      (o && o.canvas.style.transform === n
        ? ((this.container = e),
          (this.context = o),
          (this.containerReused = !0))
        : this.containerReused
          ? ((this.container = null),
            (this.context = null),
            (this.containerReused = !1))
          : this.container && (this.container.style.backgroundColor = null),
      !this.container)
    ) {
      (s = document.createElement("div")), (s.className = r);
      let l = s.style;
      (l.position = "absolute"),
        (l.width = "100%"),
        (l.height = "100%"),
        (o = Ke());
      const a = o.canvas;
      s.appendChild(a),
        (l = a.style),
        (l.position = "absolute"),
        (l.left = "0"),
        (l.transformOrigin = "top left"),
        (this.container = s),
        (this.context = o);
    }
    !this.containerReused &&
      i &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = i);
  }
  clipUnrotated(e, n, i) {
    const r = Vi(i),
      s = Ma(i),
      o = Pa(i),
      l = ka(i);
    ke(n.coordinateToPixelTransform, r),
      ke(n.coordinateToPixelTransform, s),
      ke(n.coordinateToPixelTransform, o),
      ke(n.coordinateToPixelTransform, l);
    const a = this.inversePixelTransform;
    ke(a, r),
      ke(a, s),
      ke(a, o),
      ke(a, l),
      e.save(),
      e.beginPath(),
      e.moveTo(Math.round(r[0]), Math.round(r[1])),
      e.lineTo(Math.round(s[0]), Math.round(s[1])),
      e.lineTo(Math.round(o[0]), Math.round(o[1])),
      e.lineTo(Math.round(l[0]), Math.round(l[1])),
      e.clip();
  }
  dispatchRenderEvent_(e, n, i) {
    const r = this.getLayer();
    if (r.hasListener(e)) {
      const s = new i0(e, this.inversePixelTransform, i, n);
      r.dispatchEvent(s);
    }
  }
  preRender(e, n) {
    (this.frameState = n), this.dispatchRenderEvent_(en.PRERENDER, e, n);
  }
  postRender(e, n) {
    this.dispatchRenderEvent_(en.POSTRENDER, e, n);
  }
  getRenderTransform(e, n, i, r, s, o, l) {
    const a = s / 2,
      u = o / 2,
      c = r / n,
      h = -c,
      d = -e[0] + l,
      f = -e[1];
    return Sn(this.tempTransform, a, u, c, h, -i, d, f);
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
function Nw(t, e, n, i, r, s, o, l, a, u, c, h) {
  let d = t[e],
    f = t[e + 1],
    m = 0,
    y = 0,
    v = 0,
    p = 0;
  function g() {
    (m = d),
      (y = f),
      (e += i),
      (d = t[e]),
      (f = t[e + 1]),
      (p += v),
      (v = Math.sqrt((d - m) * (d - m) + (f - y) * (f - y)));
  }
  do g();
  while (e < n - i && p + v < s);
  let _ = v === 0 ? 0 : (s - p) / v;
  const E = dt(m, d, _),
    w = dt(y, f, _),
    x = e - i,
    C = p,
    S = s + l * a(u, r, c);
  for (; e < n - i && p + v < S; ) g();
  _ = v === 0 ? 0 : (S - p) / v;
  const M = dt(m, d, _),
    k = dt(y, f, _);
  let j;
  if (h) {
    const D = [E, w, M, k];
    R_(D, 0, 4, 2, h, D, D), (j = D[0] > D[2]);
  } else j = E > M;
  const Z = Math.PI,
    X = [],
    he = x + i === e;
  (e = x), (v = 0), (p = C), (d = t[e]), (f = t[e + 1]);
  let U;
  if (he) {
    g(), (U = Math.atan2(f - y, d - m)), j && (U += U > 0 ? -Z : Z);
    const D = (M + E) / 2,
      F = (k + w) / 2;
    return (X[0] = [D, F, (S - s) / 2, U, r]), X;
  }
  r = r.replace(/\n/g, " ");
  for (let D = 0, F = r.length; D < F; ) {
    g();
    let R = Math.atan2(f - y, d - m);
    if ((j && (R += R > 0 ? -Z : Z), U !== void 0)) {
      let B = R - U;
      if (((B += B > Z ? -2 * Z : B < -Z ? 2 * Z : 0), Math.abs(B) > o))
        return null;
    }
    U = R;
    const P = D;
    let A = 0;
    for (; D < F; ++D) {
      const B = j ? F - D - 1 : D,
        te = l * a(u, r[B], c);
      if (e + i < n && p + v < s + A + te / 2) break;
      A += te;
    }
    if (D === P) continue;
    const b = j ? r.substring(F - P, F - D) : r.substring(P, D);
    _ = v === 0 ? 0 : (s + A / 2 - p) / v;
    const T = dt(m, d, _),
      me = dt(y, f, _);
    X.push([T, me, A / 2, R, b]), (s += A);
  }
  return X;
}
const ir = Pt(),
  On = [],
  un = [],
  cn = [],
  Fn = [];
function Dg(t) {
  return t[3].declutterBox;
}
const Ng = new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");
function Mu(t, e) {
  return (
    e === "start"
      ? (e = Ng.test(t) ? "right" : "left")
      : e === "end" && (e = Ng.test(t) ? "left" : "right"),
    sa[e]
  );
}
function zw(t, e, n) {
  return (
    n > 0 &&
      t.push(
        `
`,
        "",
      ),
    t.push(e, ""),
    t
  );
}
class Gw {
  constructor(e, n, i, r) {
    (this.overlaps = i),
      (this.pixelRatio = n),
      (this.resolution = e),
      this.alignFill_,
      (this.instructions = r.instructions),
      (this.coordinates = r.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = Ut()),
      (this.hitDetectionInstructions = r.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = r.fillStates || {}),
      (this.strokeStates = r.strokeStates || {}),
      (this.textStates = r.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {});
  }
  createLabel(e, n, i, r) {
    const s = e + n + i + r;
    if (this.labels_[s]) return this.labels_[s];
    const o = r ? this.strokeStates[r] : null,
      l = i ? this.fillStates[i] : null,
      a = this.textStates[n],
      u = this.pixelRatio,
      c = [a.scale[0] * u, a.scale[1] * u],
      h = Array.isArray(e),
      d = a.justify
        ? sa[a.justify]
        : Mu(Array.isArray(e) ? e[0] : e, a.textAlign || oo),
      f = r && o.lineWidth ? o.lineWidth : 0,
      m = h
        ? e
        : e
            .split(
              `
`,
            )
            .reduce(zw, []),
      { width: y, height: v, widths: p, heights: g, lineWidths: _ } = cE(a, m),
      E = y + f,
      w = [],
      x = (E + 2) * c[0],
      C = (v + f) * c[1],
      S = {
        width: x < 0 ? Math.floor(x) : Math.ceil(x),
        height: C < 0 ? Math.floor(C) : Math.ceil(C),
        contextInstructions: w,
      };
    (c[0] != 1 || c[1] != 1) && w.push("scale", c),
      r &&
        (w.push("strokeStyle", o.strokeStyle),
        w.push("lineWidth", f),
        w.push("lineCap", o.lineCap),
        w.push("lineJoin", o.lineJoin),
        w.push("miterLimit", o.miterLimit),
        w.push("setLineDash", [o.lineDash]),
        w.push("lineDashOffset", o.lineDashOffset)),
      i && w.push("fillStyle", l.fillStyle),
      w.push("textBaseline", "middle"),
      w.push("textAlign", "center");
    const M = 0.5 - d;
    let k = d * E + M * f;
    const j = [],
      Z = [];
    let X = 0,
      he = 0,
      U = 0,
      D = 0,
      F;
    for (let R = 0, P = m.length; R < P; R += 2) {
      const A = m[R];
      if (
        A ===
        `
`
      ) {
        (he += X), (X = 0), (k = d * E + M * f), ++D;
        continue;
      }
      const b = m[R + 1] || a.font;
      b !== F && (r && j.push("font", b), i && Z.push("font", b), (F = b)),
        (X = Math.max(X, g[U]));
      const T = [A, k + M * p[U] + d * (p[U] - _[D]), 0.5 * (f + X) + he];
      (k += p[U]),
        r && j.push("strokeText", T),
        i && Z.push("fillText", T),
        ++U;
    }
    return (
      Array.prototype.push.apply(w, j),
      Array.prototype.push.apply(w, Z),
      (this.labels_[s] = S),
      S
    );
  }
  replayTextBackground_(e, n, i, r, s, o, l) {
    e.beginPath(),
      e.moveTo.apply(e, n),
      e.lineTo.apply(e, i),
      e.lineTo.apply(e, r),
      e.lineTo.apply(e, s),
      e.lineTo.apply(e, n),
      o && ((this.alignFill_ = o[2]), this.fill_(e)),
      l && (this.setStrokeStyle_(e, l), e.stroke());
  }
  calculateImageOrLabelDimensions_(
    e,
    n,
    i,
    r,
    s,
    o,
    l,
    a,
    u,
    c,
    h,
    d,
    f,
    m,
    y,
    v,
  ) {
    (l *= d[0]), (a *= d[1]);
    let p = i - l,
      g = r - a;
    const _ = s + u > e ? e - u : s,
      E = o + c > n ? n - c : o,
      w = m[3] + _ * d[0] + m[1],
      x = m[0] + E * d[1] + m[2],
      C = p - m[3],
      S = g - m[0];
    (y || h !== 0) &&
      ((On[0] = C),
      (Fn[0] = C),
      (On[1] = S),
      (un[1] = S),
      (un[0] = C + w),
      (cn[0] = un[0]),
      (cn[1] = S + x),
      (Fn[1] = cn[1]));
    let M;
    return (
      h !== 0
        ? ((M = Sn(Ut(), i, r, 1, 1, h, -i, -r)),
          ke(M, On),
          ke(M, un),
          ke(M, cn),
          ke(M, Fn),
          Rn(
            Math.min(On[0], un[0], cn[0], Fn[0]),
            Math.min(On[1], un[1], cn[1], Fn[1]),
            Math.max(On[0], un[0], cn[0], Fn[0]),
            Math.max(On[1], un[1], cn[1], Fn[1]),
            ir,
          ))
        : Rn(
            Math.min(C, C + w),
            Math.min(S, S + x),
            Math.max(C, C + w),
            Math.max(S, S + x),
            ir,
          ),
      f && ((p = Math.round(p)), (g = Math.round(g))),
      {
        drawImageX: p,
        drawImageY: g,
        drawImageW: _,
        drawImageH: E,
        originX: u,
        originY: c,
        declutterBox: {
          minX: ir[0],
          minY: ir[1],
          maxX: ir[2],
          maxY: ir[3],
          value: v,
        },
        canvasTransform: M,
        scale: d,
      }
    );
  }
  replayImageOrLabel_(e, n, i, r, s, o, l) {
    const a = !!(o || l),
      u = r.declutterBox,
      c = e.canvas,
      h = l ? (l[2] * r.scale[0]) / 2 : 0;
    return (
      u.minX - h <= c.width / n &&
        u.maxX + h >= 0 &&
        u.minY - h <= c.height / n &&
        u.maxY + h >= 0 &&
        (a && this.replayTextBackground_(e, On, un, cn, Fn, o, l),
        hE(
          e,
          r.canvasTransform,
          s,
          i,
          r.originX,
          r.originY,
          r.drawImageW,
          r.drawImageH,
          r.drawImageX,
          r.drawImageY,
          r.scale,
        )),
      !0
    );
  }
  fill_(e) {
    if (this.alignFill_) {
      const n = ke(this.renderedTransform_, [0, 0]),
        i = 512 * this.pixelRatio;
      e.save(), e.translate(n[0] % i, n[1] % i), e.rotate(this.viewRotation_);
    }
    e.fill(), this.alignFill_ && e.restore();
  }
  setStrokeStyle_(e, n) {
    (e.strokeStyle = n[1]),
      (e.lineWidth = n[2]),
      (e.lineCap = n[3]),
      (e.lineJoin = n[4]),
      (e.miterLimit = n[5]),
      (e.lineDashOffset = n[7]),
      e.setLineDash(n[6]);
  }
  drawLabelWithPointPlacement_(e, n, i, r) {
    const s = this.textStates[n],
      o = this.createLabel(e, n, r, i),
      l = this.strokeStates[i],
      a = this.pixelRatio,
      u = Mu(Array.isArray(e) ? e[0] : e, s.textAlign || oo),
      c = sa[s.textBaseline || ta],
      h = l && l.lineWidth ? l.lineWidth : 0,
      d = o.width / a - 2 * s.scale[0],
      f = u * d + 2 * (0.5 - u) * h,
      m = (c * o.height) / a + 2 * (0.5 - c) * h;
    return { label: o, anchorX: f, anchorY: m };
  }
  execute_(e, n, i, r, s, o, l, a) {
    let u;
    this.pixelCoordinates_ && mi(i, this.renderedTransform_)
      ? (u = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (u = si(
          this.coordinates,
          0,
          this.coordinates.length,
          2,
          i,
          this.pixelCoordinates_,
        )),
        nv(this.renderedTransform_, i));
    let c = 0;
    const h = r.length;
    let d = 0,
      f,
      m,
      y,
      v,
      p,
      g,
      _,
      E,
      w,
      x,
      C,
      S,
      M = 0,
      k = 0,
      j = null,
      Z = null;
    const X = this.coordinateCache_,
      he = this.viewRotation_,
      U = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12,
      D = {
        context: e,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: he,
      },
      F = this.instructions != r || this.overlaps ? 0 : 200;
    let R, P, A, b;
    for (; c < h; ) {
      const T = r[c];
      switch (T[0]) {
        case z.BEGIN_GEOMETRY:
          (R = T[1]),
            (b = T[3]),
            R.getGeometry()
              ? l !== void 0 && !it(l, b.getExtent())
                ? (c = T[2] + 1)
                : ++c
              : (c = T[2]);
          break;
        case z.BEGIN_PATH:
          M > F && (this.fill_(e), (M = 0)),
            k > F && (e.stroke(), (k = 0)),
            !M && !k && (e.beginPath(), (v = NaN), (p = NaN)),
            ++c;
          break;
        case z.CIRCLE:
          d = T[1];
          const B = u[d],
            te = u[d + 1],
            De = u[d + 2],
            xe = u[d + 3],
            rn = De - B,
            sn = xe - te,
            Zi = Math.sqrt(rn * rn + sn * sn);
          e.moveTo(B + Zi, te), e.arc(B, te, Zi, 0, 2 * Math.PI, !0), ++c;
          break;
        case z.CLOSE_PATH:
          e.closePath(), ++c;
          break;
        case z.CUSTOM:
          (d = T[1]), (f = T[2]);
          const Io = T[3],
            Hi = T[4],
            Lo = T.length == 6 ? T[5] : void 0;
          (D.geometry = Io), (D.feature = R), c in X || (X[c] = []);
          const kn = X[c];
          Lo
            ? Lo(u, d, f, 2, kn)
            : ((kn[0] = u[d]), (kn[1] = u[d + 1]), (kn.length = 2)),
            Hi(kn, D),
            ++c;
          break;
        case z.DRAW_IMAGE:
          (d = T[1]), (f = T[2]), (E = T[3]), (m = T[4]), (y = T[5]);
          let ts = T[6];
          const Pn = T[7],
            ko = T[8],
            Po = T[9],
            Mo = T[10];
          let $i = T[11];
          const Za = T[12];
          let $e = T[13];
          const Et = T[14],
            At = T[15];
          if (!E && T.length >= 20) {
            (w = T[19]), (x = T[20]), (C = T[21]), (S = T[22]);
            const ut = this.drawLabelWithPointPlacement_(w, x, C, S);
            (E = ut.label), (T[3] = E);
            const Ji = T[23];
            (m = (ut.anchorX - Ji) * this.pixelRatio), (T[4] = m);
            const wt = T[24];
            (y = (ut.anchorY - wt) * this.pixelRatio),
              (T[5] = y),
              (ts = E.height),
              (T[6] = ts),
              ($e = E.width),
              (T[13] = $e);
          }
          let on;
          T.length > 25 && (on = T[25]);
          let qi, yi, Mn;
          T.length > 17
            ? ((qi = T[16]), (yi = T[17]), (Mn = T[18]))
            : ((qi = Mi), (yi = !1), (Mn = !1)),
            Mo && U ? ($i += he) : !Mo && !U && ($i -= he);
          let Qi = 0;
          for (; d < f; d += 2) {
            if (on && on[Qi++] < $e / this.pixelRatio) continue;
            const ut = this.calculateImageOrLabelDimensions_(
                E.width,
                E.height,
                u[d],
                u[d + 1],
                $e,
                ts,
                m,
                y,
                ko,
                Po,
                $i,
                Za,
                s,
                qi,
                yi || Mn,
                R,
              ),
              Ji = [e, n, E, ut, Pn, yi ? j : null, Mn ? Z : null];
            if (a) {
              if (Et === "none") continue;
              if (Et === "obstacle") {
                a.insert(ut.declutterBox);
                continue;
              } else {
                let wt, ln;
                if (At) {
                  const ct = f - d;
                  if (!At[ct]) {
                    At[ct] = Ji;
                    continue;
                  }
                  if (
                    ((wt = At[ct]),
                    delete At[ct],
                    (ln = Dg(wt)),
                    a.collides(ln))
                  )
                    continue;
                }
                if (a.collides(ut.declutterBox)) continue;
                wt && (a.insert(ln), this.replayImageOrLabel_.apply(this, wt)),
                  a.insert(ut.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, Ji);
          }
          ++c;
          break;
        case z.DRAW_CHARS:
          const Ao = T[1],
            Be = T[2],
            Ha = T[3],
            S0 = T[4];
          S = T[5];
          const R0 = T[6],
            Nd = T[7],
            zd = T[8];
          C = T[9];
          const $a = T[10];
          (w = T[11]), (x = T[12]);
          const Gd = [T[13], T[13]],
            qa = this.textStates[x],
            ns = qa.font,
            is = [qa.scale[0] * Nd, qa.scale[1] * Nd];
          let rs;
          ns in this.widths_
            ? (rs = this.widths_[ns])
            : ((rs = {}), (this.widths_[ns] = rs));
          const Wd = N_(u, Ao, Be, 2),
            jd = Math.abs(is[0]) * yg(ns, w, rs);
          if (S0 || jd <= Wd) {
            const ut = this.textStates[x].textAlign,
              Ji = (Wd - jd) * Mu(w, ut),
              wt = Nw(
                u,
                Ao,
                Be,
                2,
                w,
                Ji,
                R0,
                Math.abs(is[0]),
                yg,
                ns,
                rs,
                U ? 0 : this.viewRotation_,
              );
            e: if (wt) {
              const ln = [];
              let ct, Oo, Fo, qe, xt;
              if (C)
                for (ct = 0, Oo = wt.length; ct < Oo; ++ct) {
                  (xt = wt[ct]),
                    (Fo = xt[4]),
                    (qe = this.createLabel(Fo, x, "", C)),
                    (m = xt[2] + (is[0] < 0 ? -$a : $a)),
                    (y =
                      Ha * qe.height +
                      ((0.5 - Ha) * 2 * $a * is[1]) / is[0] -
                      zd);
                  const an = this.calculateImageOrLabelDimensions_(
                    qe.width,
                    qe.height,
                    xt[0],
                    xt[1],
                    qe.width,
                    qe.height,
                    m,
                    y,
                    0,
                    0,
                    xt[3],
                    Gd,
                    !1,
                    Mi,
                    !1,
                    R,
                  );
                  if (a && a.collides(an.declutterBox)) break e;
                  ln.push([e, n, qe, an, 1, null, null]);
                }
              if (S)
                for (ct = 0, Oo = wt.length; ct < Oo; ++ct) {
                  (xt = wt[ct]),
                    (Fo = xt[4]),
                    (qe = this.createLabel(Fo, x, S, "")),
                    (m = xt[2]),
                    (y = Ha * qe.height - zd);
                  const an = this.calculateImageOrLabelDimensions_(
                    qe.width,
                    qe.height,
                    xt[0],
                    xt[1],
                    qe.width,
                    qe.height,
                    m,
                    y,
                    0,
                    0,
                    xt[3],
                    Gd,
                    !1,
                    Mi,
                    !1,
                    R,
                  );
                  if (a && a.collides(an.declutterBox)) break e;
                  ln.push([e, n, qe, an, 1, null, null]);
                }
              a && a.load(ln.map(Dg));
              for (let an = 0, T0 = ln.length; an < T0; ++an)
                this.replayImageOrLabel_.apply(this, ln[an]);
            }
          }
          ++c;
          break;
        case z.END_GEOMETRY:
          if (o !== void 0) {
            R = T[1];
            const ut = o(R, b);
            if (ut) return ut;
          }
          ++c;
          break;
        case z.FILL:
          F ? M++ : this.fill_(e), ++c;
          break;
        case z.MOVE_TO_LINE_TO:
          for (
            d = T[1],
              f = T[2],
              P = u[d],
              A = u[d + 1],
              g = (P + 0.5) | 0,
              _ = (A + 0.5) | 0,
              (g !== v || _ !== p) && (e.moveTo(P, A), (v = g), (p = _)),
              d += 2;
            d < f;
            d += 2
          )
            (P = u[d]),
              (A = u[d + 1]),
              (g = (P + 0.5) | 0),
              (_ = (A + 0.5) | 0),
              (d == f - 2 || g !== v || _ !== p) &&
                (e.lineTo(P, A), (v = g), (p = _));
          ++c;
          break;
        case z.SET_FILL_STYLE:
          (j = T),
            (this.alignFill_ = T[2]),
            M && (this.fill_(e), (M = 0), k && (e.stroke(), (k = 0))),
            (e.fillStyle = T[1]),
            ++c;
          break;
        case z.SET_STROKE_STYLE:
          (Z = T), k && (e.stroke(), (k = 0)), this.setStrokeStyle_(e, T), ++c;
          break;
        case z.STROKE:
          F ? k++ : e.stroke(), ++c;
          break;
        default:
          ++c;
          break;
      }
    }
    M && this.fill_(e), k && e.stroke();
  }
  execute(e, n, i, r, s, o) {
    (this.viewRotation_ = r),
      this.execute_(e, n, i, this.instructions, s, void 0, void 0, o);
  }
  executeHitDetection(e, n, i, r, s) {
    return (
      (this.viewRotation_ = i),
      this.execute_(e, 1, n, this.hitDetectionInstructions, !0, r, s)
    );
  }
}
const Au = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
class zg {
  constructor(e, n, i, r, s, o) {
    (this.maxExtent_ = e),
      (this.overlaps_ = r),
      (this.pixelRatio_ = i),
      (this.resolution_ = n),
      (this.renderBuffer_ = o),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = Ut()),
      this.createExecutors_(s);
  }
  clip(e, n) {
    const i = this.getClipCoords(n);
    e.beginPath(),
      e.moveTo(i[0], i[1]),
      e.lineTo(i[2], i[3]),
      e.lineTo(i[4], i[5]),
      e.lineTo(i[6], i[7]),
      e.clip();
  }
  createExecutors_(e) {
    for (const n in e) {
      let i = this.executorsByZIndex_[n];
      i === void 0 && ((i = {}), (this.executorsByZIndex_[n] = i));
      const r = e[n];
      for (const s in r) {
        const o = r[s];
        i[s] = new Gw(this.resolution_, this.pixelRatio_, this.overlaps_, o);
      }
    }
  }
  hasExecutors(e) {
    for (const n in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[n];
      for (let r = 0, s = e.length; r < s; ++r) if (e[r] in i) return !0;
    }
    return !1;
  }
  forEachFeatureAtCoordinate(e, n, i, r, s, o) {
    r = Math.round(r);
    const l = r * 2 + 1,
      a = Sn(
        this.hitDetectionTransform_,
        r + 0.5,
        r + 0.5,
        1 / n,
        -1 / n,
        -i,
        -e[0],
        -e[1],
      ),
      u = !this.hitDetectionContext_;
    u &&
      (this.hitDetectionContext_ = Ke(l, l, void 0, {
        willReadFrequently: !0,
      }));
    const c = this.hitDetectionContext_;
    c.canvas.width !== l || c.canvas.height !== l
      ? ((c.canvas.width = l), (c.canvas.height = l))
      : u || c.clearRect(0, 0, l, l);
    let h;
    this.renderBuffer_ !== void 0 &&
      ((h = Pt()), Os(h, e), Jh(h, n * (this.renderBuffer_ + r), h));
    const d = Ww(r);
    let f;
    function m(w, x) {
      const C = c.getImageData(0, 0, l, l).data;
      for (let S = 0, M = d.length; S < M; S++)
        if (C[d[S]] > 0) {
          if (!o || (f !== "Image" && f !== "Text") || o.includes(w)) {
            const k = (d[S] - 3) / 4,
              j = r - (k % l),
              Z = r - ((k / l) | 0),
              X = s(w, x, j * j + Z * Z);
            if (X) return X;
          }
          c.clearRect(0, 0, l, l);
          break;
        }
    }
    const y = Object.keys(this.executorsByZIndex_).map(Number);
    y.sort(ai);
    let v, p, g, _, E;
    for (v = y.length - 1; v >= 0; --v) {
      const w = y[v].toString();
      for (g = this.executorsByZIndex_[w], p = Au.length - 1; p >= 0; --p)
        if (
          ((f = Au[p]),
          (_ = g[f]),
          _ !== void 0 && ((E = _.executeHitDetection(c, a, i, m, h)), E))
        )
          return E;
    }
  }
  getClipCoords(e) {
    const n = this.maxExtent_;
    if (!n) return null;
    const i = n[0],
      r = n[1],
      s = n[2],
      o = n[3],
      l = [i, r, i, o, s, o, s, r];
    return si(l, 0, 8, 2, e, l), l;
  }
  isEmpty() {
    return Xi(this.executorsByZIndex_);
  }
  execute(e, n, i, r, s, o, l) {
    const a = Object.keys(this.executorsByZIndex_).map(Number);
    a.sort(ai), this.maxExtent_ && (e.save(), this.clip(e, i)), (o = o || Au);
    let u, c, h, d, f, m;
    for (l && a.reverse(), u = 0, c = a.length; u < c; ++u) {
      const y = a[u].toString();
      for (f = this.executorsByZIndex_[y], h = 0, d = o.length; h < d; ++h) {
        const v = o[h];
        (m = f[v]), m !== void 0 && m.execute(e, n, i, r, s, l);
      }
    }
    this.maxExtent_ && e.restore();
  }
}
const Ou = {};
function Ww(t) {
  if (Ou[t] !== void 0) return Ou[t];
  const e = t * 2 + 1,
    n = t * t,
    i = new Array(n + 1);
  for (let s = 0; s <= t; ++s)
    for (let o = 0; o <= t; ++o) {
      const l = s * s + o * o;
      if (l > n) break;
      let a = i[l];
      a || ((a = []), (i[l] = a)),
        a.push(((t + s) * e + (t + o)) * 4 + 3),
        s > 0 && a.push(((t - s) * e + (t + o)) * 4 + 3),
        o > 0 &&
          (a.push(((t + s) * e + (t - o)) * 4 + 3),
          s > 0 && a.push(((t - s) * e + (t - o)) * 4 + 3));
    }
  const r = [];
  for (let s = 0, o = i.length; s < o; ++s) i[s] && r.push(...i[s]);
  return (Ou[t] = r), r;
}
class jw extends n0 {
  constructor(e, n, i, r, s, o, l) {
    super(),
      (this.context_ = e),
      (this.pixelRatio_ = n),
      (this.extent_ = i),
      (this.transform_ = r),
      (this.transformRotation_ = r ? nd(Math.atan2(r[1], r[0]), 10) : 0),
      (this.viewRotation_ = s),
      (this.squaredTolerance_ = o),
      (this.userTransform_ = l),
      (this.contextFillState_ = null),
      (this.contextStrokeState_ = null),
      (this.contextTextState_ = null),
      (this.fillState_ = null),
      (this.strokeState_ = null),
      (this.image_ = null),
      (this.imageAnchorX_ = 0),
      (this.imageAnchorY_ = 0),
      (this.imageHeight_ = 0),
      (this.imageOpacity_ = 0),
      (this.imageOriginX_ = 0),
      (this.imageOriginY_ = 0),
      (this.imageRotateWithView_ = !1),
      (this.imageRotation_ = 0),
      (this.imageScale_ = [0, 0]),
      (this.imageWidth_ = 0),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = !1),
      (this.textRotation_ = 0),
      (this.textScale_ = [0, 0]),
      (this.textFillState_ = null),
      (this.textStrokeState_ = null),
      (this.textState_ = null),
      (this.pixelCoordinates_ = []),
      (this.tmpLocalTransform_ = Ut());
  }
  drawImages_(e, n, i, r) {
    if (!this.image_) return;
    const s = si(e, n, i, r, this.transform_, this.pixelCoordinates_),
      o = this.context_,
      l = this.tmpLocalTransform_,
      a = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = a * this.imageOpacity_);
    let u = this.imageRotation_;
    this.transformRotation_ === 0 && (u -= this.viewRotation_),
      this.imageRotateWithView_ && (u += this.viewRotation_);
    for (let c = 0, h = s.length; c < h; c += 2) {
      const d = s[c] - this.imageAnchorX_,
        f = s[c + 1] - this.imageAnchorY_;
      if (u !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const m = d + this.imageAnchorX_,
          y = f + this.imageAnchorY_;
        Sn(l, m, y, 1, 1, u, -m, -y),
          o.save(),
          o.transform.apply(o, l),
          o.translate(m, y),
          o.scale(this.imageScale_[0], this.imageScale_[1]),
          o.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_,
          ),
          o.restore();
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          d,
          f,
          this.imageWidth_,
          this.imageHeight_,
        );
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = a);
  }
  drawText_(e, n, i, r) {
    if (!this.textState_ || this.text_ === "") return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ &&
        this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_);
    const s = si(e, n, i, r, this.transform_, this.pixelCoordinates_),
      o = this.context_;
    let l = this.textRotation_;
    for (
      this.transformRotation_ === 0 && (l -= this.viewRotation_),
        this.textRotateWithView_ && (l += this.viewRotation_);
      n < i;
      n += r
    ) {
      const a = s[n] + this.textOffsetX_,
        u = s[n + 1] + this.textOffsetY_;
      l !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1
        ? (o.save(),
          o.translate(a - this.textOffsetX_, u - this.textOffsetY_),
          o.rotate(l),
          o.translate(this.textOffsetX_, this.textOffsetY_),
          o.scale(this.textScale_[0], this.textScale_[1]),
          this.textStrokeState_ && o.strokeText(this.text_, 0, 0),
          this.textFillState_ && o.fillText(this.text_, 0, 0),
          o.restore())
        : (this.textStrokeState_ && o.strokeText(this.text_, a, u),
          this.textFillState_ && o.fillText(this.text_, a, u));
    }
  }
  moveToLineTo_(e, n, i, r, s) {
    const o = this.context_,
      l = si(e, n, i, r, this.transform_, this.pixelCoordinates_);
    o.moveTo(l[0], l[1]);
    let a = l.length;
    s && (a -= 2);
    for (let u = 2; u < a; u += 2) o.lineTo(l[u], l[u + 1]);
    return s && o.closePath(), i;
  }
  drawRings_(e, n, i, r) {
    for (let s = 0, o = i.length; s < o; ++s)
      n = this.moveToLineTo_(e, n, i[s], r, !0);
    return n;
  }
  drawCircle(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!it(this.extent_, e.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = zv(e, this.transform_, this.pixelCoordinates_),
          i = n[2] - n[0],
          r = n[3] - n[1],
          s = Math.sqrt(i * i + r * r),
          o = this.context_;
        o.beginPath(),
          o.arc(n[0], n[1], s, 0, 2 * Math.PI),
          this.fillState_ && o.fill(),
          this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(e.getCenter(), 0, 2, 2);
    }
  }
  setStyle(e) {
    this.setFillStrokeStyle(e.getFill(), e.getStroke()),
      this.setImageStyle(e.getImage()),
      this.setTextStyle(e.getText());
  }
  setTransform(e) {
    this.transform_ = e;
  }
  drawGeometry(e) {
    switch (e.getType()) {
      case "Point":
        this.drawPoint(e);
        break;
      case "LineString":
        this.drawLineString(e);
        break;
      case "Polygon":
        this.drawPolygon(e);
        break;
      case "MultiPoint":
        this.drawMultiPoint(e);
        break;
      case "MultiLineString":
        this.drawMultiLineString(e);
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(e);
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(e);
        break;
      case "Circle":
        this.drawCircle(e);
        break;
    }
  }
  drawFeature(e, n) {
    const i = n.getGeometryFunction()(e);
    i && (this.setStyle(n), this.drawGeometry(i));
  }
  drawGeometryCollection(e) {
    const n = e.getGeometriesArray();
    for (let i = 0, r = n.length; i < r; ++i) this.drawGeometry(n[i]);
  }
  drawPoint(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getFlatCoordinates(),
      i = e.getStride();
    this.image_ && this.drawImages_(n, 0, n.length, i),
      this.text_ !== "" && this.drawText_(n, 0, n.length, i);
  }
  drawMultiPoint(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getFlatCoordinates(),
      i = e.getStride();
    this.image_ && this.drawImages_(n, 0, n.length, i),
      this.text_ !== "" && this.drawText_(n, 0, n.length, i);
  }
  drawLineString(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!it(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const n = this.context_,
          i = e.getFlatCoordinates();
        n.beginPath(),
          this.moveToLineTo_(i, 0, i.length, e.getStride(), !1),
          n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatMidpoint();
        this.drawText_(n, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(e) {
    this.squaredTolerance_ &&
      (e = e.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const n = e.getExtent();
    if (it(this.extent_, n)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          r = e.getFlatCoordinates();
        let s = 0;
        const o = e.getEnds(),
          l = e.getStride();
        i.beginPath();
        for (let a = 0, u = o.length; a < u; ++a)
          s = this.moveToLineTo_(r, s, o[a], l, !1);
        i.stroke();
      }
      if (this.text_ !== "") {
        const i = e.getFlatMidpoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  drawPolygon(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!it(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = this.context_;
        n.beginPath(),
          this.drawRings_(
            e.getOrientedFlatCoordinates(),
            0,
            e.getEnds(),
            e.getStride(),
          ),
          this.fillState_ && n.fill(),
          this.strokeState_ && n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatInteriorPoint();
        this.drawText_(n, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(e) {
    if (
      (this.squaredTolerance_ &&
        (e = e.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!it(this.extent_, e.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const n = this.context_,
          i = e.getOrientedFlatCoordinates();
        let r = 0;
        const s = e.getEndss(),
          o = e.getStride();
        n.beginPath();
        for (let l = 0, a = s.length; l < a; ++l) {
          const u = s[l];
          r = this.drawRings_(i, r, u, o);
        }
        this.fillState_ && n.fill(), this.strokeState_ && n.stroke();
      }
      if (this.text_ !== "") {
        const n = e.getFlatInteriorPoints();
        this.drawText_(n, 0, n.length, 2);
      }
    }
  }
  setContextFillState_(e) {
    const n = this.context_,
      i = this.contextFillState_;
    i
      ? i.fillStyle != e.fillStyle &&
        ((i.fillStyle = e.fillStyle), (n.fillStyle = e.fillStyle))
      : ((n.fillStyle = e.fillStyle),
        (this.contextFillState_ = { fillStyle: e.fillStyle }));
  }
  setContextStrokeState_(e) {
    const n = this.context_,
      i = this.contextStrokeState_;
    i
      ? (i.lineCap != e.lineCap &&
          ((i.lineCap = e.lineCap), (n.lineCap = e.lineCap)),
        mi(i.lineDash, e.lineDash) || n.setLineDash((i.lineDash = e.lineDash)),
        i.lineDashOffset != e.lineDashOffset &&
          ((i.lineDashOffset = e.lineDashOffset),
          (n.lineDashOffset = e.lineDashOffset)),
        i.lineJoin != e.lineJoin &&
          ((i.lineJoin = e.lineJoin), (n.lineJoin = e.lineJoin)),
        i.lineWidth != e.lineWidth &&
          ((i.lineWidth = e.lineWidth), (n.lineWidth = e.lineWidth)),
        i.miterLimit != e.miterLimit &&
          ((i.miterLimit = e.miterLimit), (n.miterLimit = e.miterLimit)),
        i.strokeStyle != e.strokeStyle &&
          ((i.strokeStyle = e.strokeStyle), (n.strokeStyle = e.strokeStyle)))
      : ((n.lineCap = e.lineCap),
        n.setLineDash(e.lineDash),
        (n.lineDashOffset = e.lineDashOffset),
        (n.lineJoin = e.lineJoin),
        (n.lineWidth = e.lineWidth),
        (n.miterLimit = e.miterLimit),
        (n.strokeStyle = e.strokeStyle),
        (this.contextStrokeState_ = {
          lineCap: e.lineCap,
          lineDash: e.lineDash,
          lineDashOffset: e.lineDashOffset,
          lineJoin: e.lineJoin,
          lineWidth: e.lineWidth,
          miterLimit: e.miterLimit,
          strokeStyle: e.strokeStyle,
        }));
  }
  setContextTextState_(e) {
    const n = this.context_,
      i = this.contextTextState_,
      r = e.textAlign ? e.textAlign : oo;
    i
      ? (i.font != e.font && ((i.font = e.font), (n.font = e.font)),
        i.textAlign != r && ((i.textAlign = r), (n.textAlign = r)),
        i.textBaseline != e.textBaseline &&
          ((i.textBaseline = e.textBaseline),
          (n.textBaseline = e.textBaseline)))
      : ((n.font = e.font),
        (n.textAlign = r),
        (n.textBaseline = e.textBaseline),
        (this.contextTextState_ = {
          font: e.font,
          textAlign: r,
          textBaseline: e.textBaseline,
        }));
  }
  setFillStrokeStyle(e, n) {
    if (!e) this.fillState_ = null;
    else {
      const i = e.getColor();
      this.fillState_ = { fillStyle: $t(i || nt) };
    }
    if (!n) this.strokeState_ = null;
    else {
      const i = n.getColor(),
        r = n.getLineCap(),
        s = n.getLineDash(),
        o = n.getLineDashOffset(),
        l = n.getLineJoin(),
        a = n.getWidth(),
        u = n.getMiterLimit(),
        c = s || yn;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : Vr,
        lineDash:
          this.pixelRatio_ === 1 ? c : c.map((h) => h * this.pixelRatio_),
        lineDashOffset: (o || vn) * this.pixelRatio_,
        lineJoin: l !== void 0 ? l : br,
        lineWidth: (a !== void 0 ? a : lo) * this.pixelRatio_,
        miterLimit: u !== void 0 ? u : ro,
        strokeStyle: $t(i || so),
      };
    }
  }
  setImageStyle(e) {
    let n;
    if (!e || !(n = e.getSize())) {
      this.image_ = null;
      return;
    }
    const i = e.getPixelRatio(this.pixelRatio_),
      r = e.getAnchor(),
      s = e.getOrigin();
    (this.image_ = e.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = r[0] * i),
      (this.imageAnchorY_ = r[1] * i),
      (this.imageHeight_ = n[1] * i),
      (this.imageOpacity_ = e.getOpacity()),
      (this.imageOriginX_ = s[0]),
      (this.imageOriginY_ = s[1]),
      (this.imageRotateWithView_ = e.getRotateWithView()),
      (this.imageRotation_ = e.getRotation());
    const o = e.getScaleArray();
    (this.imageScale_ = [
      (o[0] * this.pixelRatio_) / i,
      (o[1] * this.pixelRatio_) / i,
    ]),
      (this.imageWidth_ = n[0] * i);
  }
  setTextStyle(e) {
    if (!e) this.text_ = "";
    else {
      const n = e.getFill();
      if (!n) this.textFillState_ = null;
      else {
        const f = n.getColor();
        this.textFillState_ = { fillStyle: $t(f || nt) };
      }
      const i = e.getStroke();
      if (!i) this.textStrokeState_ = null;
      else {
        const f = i.getColor(),
          m = i.getLineCap(),
          y = i.getLineDash(),
          v = i.getLineDashOffset(),
          p = i.getLineJoin(),
          g = i.getWidth(),
          _ = i.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: m !== void 0 ? m : Vr,
          lineDash: y || yn,
          lineDashOffset: v || vn,
          lineJoin: p !== void 0 ? p : br,
          lineWidth: g !== void 0 ? g : lo,
          miterLimit: _ !== void 0 ? _ : ro,
          strokeStyle: $t(f || so),
        };
      }
      const r = e.getFont(),
        s = e.getOffsetX(),
        o = e.getOffsetY(),
        l = e.getRotateWithView(),
        a = e.getRotation(),
        u = e.getScaleArray(),
        c = e.getText(),
        h = e.getTextAlign(),
        d = e.getTextBaseline();
      (this.textState_ = {
        font: r !== void 0 ? r : U_,
        textAlign: h !== void 0 ? h : oo,
        textBaseline: d !== void 0 ? d : ta,
      }),
        (this.text_ =
          c !== void 0
            ? Array.isArray(c)
              ? c.reduce((f, m, y) => (f += y % 2 ? " " : m), "")
              : c
            : ""),
        (this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0),
        (this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0),
        (this.textRotateWithView_ = l !== void 0 ? l : !1),
        (this.textRotation_ = a !== void 0 ? a : 0),
        (this.textScale_ = [this.pixelRatio_ * u[0], this.pixelRatio_ * u[1]]);
    }
  }
}
const Zt = 0.5;
function Xw(t, e, n, i, r, s, o) {
  const l = t[0] * Zt,
    a = t[1] * Zt,
    u = Ke(l, a);
  u.imageSmoothingEnabled = !1;
  const c = u.canvas,
    h = new jw(u, Zt, r, null, o),
    d = n.length,
    f = Math.floor((256 * 256 * 256 - 1) / d),
    m = {};
  for (let v = 1; v <= d; ++v) {
    const p = n[v - 1],
      g = p.getStyleFunction() || i;
    if (!g) continue;
    let _ = g(p, s);
    if (!_) continue;
    Array.isArray(_) || (_ = [_]);
    const w = (v * f).toString(16).padStart(7, "#00000");
    for (let x = 0, C = _.length; x < C; ++x) {
      const S = _[x],
        M = S.getGeometryFunction()(p);
      if (!M || !it(r, M.getExtent())) continue;
      const k = S.clone(),
        j = k.getFill();
      j && j.setColor(w);
      const Z = k.getStroke();
      Z && (Z.setColor(w), Z.setLineDash(null)), k.setText(void 0);
      const X = S.getImage();
      if (X) {
        const F = X.getImageSize();
        if (!F) continue;
        const R = Ke(F[0], F[1], void 0, { alpha: !1 }),
          P = R.canvas;
        (R.fillStyle = w),
          R.fillRect(0, 0, P.width, P.height),
          k.setImage(
            new Ba({
              img: P,
              anchor: X.getAnchor(),
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              offset: X.getOrigin(),
              opacity: 1,
              size: X.getSize(),
              scale: X.getScale(),
              rotation: X.getRotation(),
              rotateWithView: X.getRotateWithView(),
            }),
          );
      }
      const he = k.getZIndex() || 0;
      let U = m[he];
      U ||
        ((U = {}),
        (m[he] = U),
        (U.Polygon = []),
        (U.Circle = []),
        (U.LineString = []),
        (U.Point = []));
      const D = M.getType();
      if (D === "GeometryCollection") {
        const F = M.getGeometriesArrayRecursive();
        for (let R = 0, P = F.length; R < P; ++R) {
          const A = F[R];
          U[A.getType().replace("Multi", "")].push(A, k);
        }
      } else U[D.replace("Multi", "")].push(M, k);
    }
  }
  const y = Object.keys(m).map(Number).sort(ai);
  for (let v = 0, p = y.length; v < p; ++v) {
    const g = m[y[v]];
    for (const _ in g) {
      const E = g[_];
      for (let w = 0, x = E.length; w < x; w += 2) {
        h.setStyle(E[w + 1]);
        for (let C = 0, S = e.length; C < S; ++C)
          h.setTransform(e[C]), h.drawGeometry(E[w]);
      }
    }
  }
  return u.getImageData(0, 0, c.width, c.height);
}
function Uw(t, e, n) {
  const i = [];
  if (n) {
    const r = Math.floor(Math.round(t[0]) * Zt),
      s = Math.floor(Math.round(t[1]) * Zt),
      o = (Se(r, 0, n.width - 1) + Se(s, 0, n.height - 1) * n.width) * 4,
      l = n.data[o],
      a = n.data[o + 1],
      c = n.data[o + 2] + 256 * (a + 256 * l),
      h = Math.floor((256 * 256 * 256 - 1) / e.length);
    c && c % h === 0 && i.push(e[c / h - 1]);
  }
  return i;
}
const Yw = 0.5,
  s0 = {
    Point: Qw,
    LineString: Hw,
    Polygon: ex,
    MultiPoint: Jw,
    MultiLineString: $w,
    MultiPolygon: qw,
    GeometryCollection: Zw,
    Circle: bw,
  };
function Bw(t, e) {
  return parseInt(ee(t), 10) - parseInt(ee(e), 10);
}
function Vw(t, e) {
  const n = $c(t, e);
  return n * n;
}
function $c(t, e) {
  return (Yw * t) / e;
}
function bw(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (s || o) {
    const a = t.getBuilder(n.getZIndex(), "Circle");
    a.setFillStrokeStyle(s, o), a.drawCircle(e, i);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = (r || t).getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i);
  }
}
function Gg(t, e, n, i, r, s, o) {
  let l = !1;
  const a = n.getImage();
  if (a) {
    const u = a.getImageState();
    u == se.LOADED || u == se.ERROR
      ? a.unlistenImageChange(r)
      : (u == se.IDLE && a.load(), a.listenImageChange(r), (l = !0));
  }
  return Kw(t, e, n, i, s, o), l;
}
function Kw(t, e, n, i, r, s) {
  const o = n.getGeometryFunction()(e);
  if (!o) return;
  const l = o.simplifyTransformed(i, r);
  if (n.getRenderer()) o0(t, l, n, e);
  else {
    const u = s0[l.getType()];
    u(t, l, n, e, s);
  }
}
function o0(t, e, n, i) {
  if (e.getType() == "GeometryCollection") {
    const s = e.getGeometries();
    for (let o = 0, l = s.length; o < l; ++o) o0(t, s[o], n, i);
    return;
  }
  t.getBuilder(n.getZIndex(), "Default").drawCustom(
    e,
    i,
    n.getRenderer(),
    n.getHitDetectionRenderer(),
  );
}
function Zw(t, e, n, i, r) {
  const s = e.getGeometriesArray();
  let o, l;
  for (o = 0, l = s.length; o < l; ++o) {
    const a = s0[s[o].getType()];
    a(t, s[o], n, i, r);
  }
}
function Hw(t, e, n, i, r) {
  const s = n.getStroke();
  if (s) {
    const l = t.getBuilder(n.getZIndex(), "LineString");
    l.setFillStrokeStyle(null, s), l.drawLineString(e, i);
  }
  const o = n.getText();
  if (o && o.getText()) {
    const l = (r || t).getBuilder(n.getZIndex(), "Text");
    l.setTextStyle(o), l.drawText(e, i);
  }
}
function $w(t, e, n, i, r) {
  const s = n.getStroke();
  if (s) {
    const l = t.getBuilder(n.getZIndex(), "LineString");
    l.setFillStrokeStyle(null, s), l.drawMultiLineString(e, i);
  }
  const o = n.getText();
  if (o && o.getText()) {
    const l = (r || t).getBuilder(n.getZIndex(), "Text");
    l.setTextStyle(o), l.drawText(e, i);
  }
}
function qw(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (o || s) {
    const a = t.getBuilder(n.getZIndex(), "Polygon");
    a.setFillStrokeStyle(s, o), a.drawMultiPolygon(e, i);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = (r || t).getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i);
  }
}
function Qw(t, e, n, i, r) {
  const s = n.getImage(),
    o = n.getText();
  let l;
  if (s) {
    if (s.getImageState() != se.LOADED) return;
    let a = t;
    if (r) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (((a = r), c === "obstacle")) {
          const h = t.getBuilder(n.getZIndex(), "Image");
          h.setImageStyle(s, l), h.drawPoint(e, i);
        } else o && o.getText() && (l = {});
    }
    const u = a.getBuilder(n.getZIndex(), "Image");
    u.setImageStyle(s, l), u.drawPoint(e, i);
  }
  if (o && o.getText()) {
    let a = t;
    r && (a = r);
    const u = a.getBuilder(n.getZIndex(), "Text");
    u.setTextStyle(o, l), u.drawText(e, i);
  }
}
function Jw(t, e, n, i, r) {
  const s = n.getImage(),
    o = n.getText();
  let l;
  if (s) {
    if (s.getImageState() != se.LOADED) return;
    let a = t;
    if (r) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (((a = r), c === "obstacle")) {
          const h = t.getBuilder(n.getZIndex(), "Image");
          h.setImageStyle(s, l), h.drawMultiPoint(e, i);
        } else o && o.getText() && (l = {});
    }
    const u = a.getBuilder(n.getZIndex(), "Image");
    u.setImageStyle(s, l), u.drawMultiPoint(e, i);
  }
  if (o && o.getText()) {
    let a = t;
    r && (a = r);
    const u = a.getBuilder(n.getZIndex(), "Text");
    u.setTextStyle(o, l), u.drawText(e, i);
  }
}
function ex(t, e, n, i, r) {
  const s = n.getFill(),
    o = n.getStroke();
  if (s || o) {
    const a = t.getBuilder(n.getZIndex(), "Polygon");
    a.setFillStrokeStyle(s, o), a.drawPolygon(e, i);
  }
  const l = n.getText();
  if (l && l.getText()) {
    const a = (r || t).getBuilder(n.getZIndex(), "Text");
    a.setTextStyle(l), a.drawText(e, i);
  }
}
class tx extends r0 {
  constructor(e) {
    super(e),
      (this.boundHandleStyleImageChange_ =
        this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = Pt()),
      (this.wrappedRenderedExtent_ = Pt()),
      this.renderedRotation_,
      (this.renderedCenter_ = null),
      (this.renderedProjection_ = null),
      (this.renderedRenderOrder_ = null),
      (this.replayGroup_ = null),
      (this.replayGroupChanged = !0),
      (this.declutterExecutorGroup = null),
      (this.clipping = !0),
      (this.compositionContext_ = null),
      (this.opacity_ = 1);
  }
  renderWorlds(e, n, i) {
    const r = n.extent,
      s = n.viewState,
      o = s.center,
      l = s.resolution,
      a = s.projection,
      u = s.rotation,
      c = a.getExtent(),
      h = this.getLayer().getSource(),
      d = n.pixelRatio,
      f = n.viewHints,
      m = !(f[We.ANIMATING] || f[We.INTERACTING]),
      y = this.compositionContext_,
      v = Math.round(n.size[0] * d),
      p = Math.round(n.size[1] * d),
      g = h.getWrapX() && a.canWrapX(),
      _ = g ? oe(c) : null,
      E = g ? Math.ceil((r[2] - c[2]) / _) + 1 : 1;
    let w = g ? Math.floor((r[0] - c[0]) / _) : 0;
    do {
      const x = this.getRenderTransform(o, l, u, d, v, p, w * _);
      e.execute(y, 1, x, u, m, void 0, i);
    } while (++w < E);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const e = Ke(this.context.canvas.width, this.context.canvas.height, Fg);
      this.compositionContext_ = e;
    } else this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const e = this.context.globalAlpha;
      (this.context.globalAlpha = this.opacity_),
        this.context.drawImage(this.compositionContext_.canvas, 0, 0),
        (this.context.globalAlpha = e),
        Ga(this.compositionContext_),
        Fg.push(this.compositionContext_.canvas),
        (this.compositionContext_ = null);
    }
  }
  renderDeclutter(e) {
    this.declutterExecutorGroup &&
      (this.setupCompositionContext_(),
      this.renderWorlds(this.declutterExecutorGroup, e, e.declutterTree),
      this.releaseCompositionContext_());
  }
  renderFrame(e, n) {
    const i = e.pixelRatio,
      r = e.layerStatesArray[e.layerIndex];
    iv(this.pixelTransform, 1 / i, 1 / i),
      Qh(this.inversePixelTransform, this.pixelTransform);
    const s = d_(this.pixelTransform);
    this.useContainer(n, s, this.getBackground(e));
    const o = this.context,
      l = o.canvas,
      a = this.replayGroup_,
      u = this.declutterExecutorGroup;
    let c = (a && !a.isEmpty()) || (u && !u.isEmpty());
    if (
      !c &&
      !(
        this.getLayer().hasListener(en.PRERENDER) ||
        this.getLayer().hasListener(en.POSTRENDER)
      )
    )
      return null;
    const h = Math.round(e.size[0] * i),
      d = Math.round(e.size[1] * i);
    l.width != h || l.height != d
      ? ((l.width = h),
        (l.height = d),
        l.style.transform !== s && (l.style.transform = s))
      : this.containerReused || o.clearRect(0, 0, h, d),
      this.preRender(o, e);
    const f = e.viewState,
      m = f.projection;
    (this.opacity_ = r.opacity), this.setupCompositionContext_();
    let y = !1;
    if (c && r.extent && this.clipping) {
      const v = ki(r.extent, m);
      (c = it(v, e.extent)),
        (y = c && !xr(v, e.extent)),
        y && this.clipUnrotated(this.compositionContext_, e, v);
    }
    return (
      c && this.renderWorlds(a, e),
      y && this.compositionContext_.restore(),
      this.releaseCompositionContext_(),
      this.postRender(o, e),
      this.renderedRotation_ !== f.rotation &&
        ((this.renderedRotation_ = f.rotation),
        (this.hitDetectionImageData_ = null)),
      this.container
    );
  }
  getFeatures(e) {
    return new Promise((n) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = [this.context.canvas.width, this.context.canvas.height];
        ke(this.pixelTransform, i);
        const r = this.renderedCenter_,
          s = this.renderedResolution_,
          o = this.renderedRotation_,
          l = this.renderedProjection_,
          a = this.wrappedRenderedExtent_,
          u = this.getLayer(),
          c = [],
          h = i[0] * Zt,
          d = i[1] * Zt;
        c.push(this.getRenderTransform(r, s, o, Zt, h, d, 0).slice());
        const f = u.getSource(),
          m = l.getExtent();
        if (f.getWrapX() && l.canWrapX() && !xr(m, a)) {
          let y = a[0];
          const v = oe(m);
          let p = 0,
            g;
          for (; y < m[0]; )
            --p,
              (g = v * p),
              c.push(this.getRenderTransform(r, s, o, Zt, h, d, g).slice()),
              (y += v);
          for (p = 0, y = a[2]; y > m[2]; )
            ++p,
              (g = v * p),
              c.push(this.getRenderTransform(r, s, o, Zt, h, d, g).slice()),
              (y -= v);
        }
        this.hitDetectionImageData_ = Xw(
          i,
          c,
          this.renderedFeatures_,
          u.getStyleFunction(),
          a,
          s,
          o,
        );
      }
      n(Uw(e, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(e, n, i, r, s) {
    if (!this.replayGroup_) return;
    const o = n.viewState.resolution,
      l = n.viewState.rotation,
      a = this.getLayer(),
      u = {},
      c = function (f, m, y) {
        const v = ee(f),
          p = u[v];
        if (p) {
          if (p !== !0 && y < p.distanceSq) {
            if (y === 0)
              return (u[v] = !0), s.splice(s.lastIndexOf(p), 1), r(f, a, m);
            (p.geometry = m), (p.distanceSq = y);
          }
        } else {
          if (y === 0) return (u[v] = !0), r(f, a, m);
          s.push(
            (u[v] = {
              feature: f,
              layer: a,
              geometry: m,
              distanceSq: y,
              callback: r,
            }),
          );
        }
      };
    let h;
    const d = [this.replayGroup_];
    return (
      this.declutterExecutorGroup && d.push(this.declutterExecutorGroup),
      d.some(
        (f) =>
          (h = f.forEachFeatureAtCoordinate(
            e,
            o,
            l,
            i,
            c,
            f === this.declutterExecutorGroup && n.declutterTree
              ? n.declutterTree.all().map((m) => m.value)
              : null,
          )),
      ),
      h
    );
  }
  handleFontsChanged() {
    const e = this.getLayer();
    e.getVisible() && this.replayGroup_ && e.changed();
  }
  handleStyleImageChange_(e) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(e) {
    const n = this.getLayer(),
      i = n.getSource();
    if (!i) return !1;
    const r = e.viewHints[We.ANIMATING],
      s = e.viewHints[We.INTERACTING],
      o = n.getUpdateWhileAnimating(),
      l = n.getUpdateWhileInteracting();
    if ((this.ready && !o && r) || (!l && s))
      return (this.animatingOrInteracting_ = !0), !0;
    this.animatingOrInteracting_ = !1;
    const a = e.extent,
      u = e.viewState,
      c = u.projection,
      h = u.resolution,
      d = e.pixelRatio,
      f = n.getRevision(),
      m = n.getRenderBuffer();
    let y = n.getRenderOrder();
    y === void 0 && (y = Bw);
    const v = u.center.slice(),
      p = Jh(a, m * h),
      g = p.slice(),
      _ = [p.slice()],
      E = c.getExtent();
    if (i.getWrapX() && c.canWrapX() && !xr(E, e.extent)) {
      const D = oe(E),
        F = Math.max(oe(p) / 2, D);
      (p[0] = E[0] - F), (p[2] = E[2] + F), E_(v, c);
      const R = y_(_[0], c);
      R[0] < E[0] && R[2] < E[2]
        ? _.push([R[0] + D, R[1], R[2] + D, R[3]])
        : R[0] > E[0] &&
          R[2] > E[2] &&
          _.push([R[0] - D, R[1], R[2] - D, R[3]]);
    }
    if (
      this.ready &&
      this.renderedResolution_ == h &&
      this.renderedRevision_ == f &&
      this.renderedRenderOrder_ == y &&
      xr(this.wrappedRenderedExtent_, p)
    )
      return (
        mi(this.renderedExtent_, g) ||
          ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = g)),
        (this.renderedCenter_ = v),
        (this.replayGroupChanged = !1),
        !0
      );
    this.replayGroup_ = null;
    const w = new Og($c(h, d), p, h, d);
    let x;
    this.getLayer().getDeclutter() && (x = new Og($c(h, d), p, h, d));
    const C = S_();
    let S;
    if (C) {
      for (let D = 0, F = _.length; D < F; ++D) {
        const R = _[D],
          P = Xc(R, c);
        i.loadFeatures(P, Ov(h, c), C);
      }
      S = Aa(C, c);
    } else for (let D = 0, F = _.length; D < F; ++D) i.loadFeatures(_[D], h, c);
    const M = Vw(h, d);
    let k = !0;
    const j = (D) => {
        let F;
        const R = D.getStyleFunction() || n.getStyleFunction();
        if ((R && (F = R(D, h)), F)) {
          const P = this.renderFeature(D, M, F, w, S, x);
          k = k && !P;
        }
      },
      Z = Xc(p, c),
      X = i.getFeaturesInExtent(Z);
    y && X.sort(y);
    for (let D = 0, F = X.length; D < F; ++D) j(X[D]);
    (this.renderedFeatures_ = X), (this.ready = k);
    const he = w.finish(),
      U = new zg(p, h, d, i.getOverlaps(), he, n.getRenderBuffer());
    return (
      x &&
        (this.declutterExecutorGroup = new zg(
          p,
          h,
          d,
          i.getOverlaps(),
          x.finish(),
          n.getRenderBuffer(),
        )),
      (this.renderedResolution_ = h),
      (this.renderedRevision_ = f),
      (this.renderedRenderOrder_ = y),
      (this.renderedExtent_ = g),
      (this.wrappedRenderedExtent_ = p),
      (this.renderedCenter_ = v),
      (this.renderedProjection_ = c),
      (this.replayGroup_ = U),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    );
  }
  renderFeature(e, n, i, r, s, o) {
    if (!i) return !1;
    let l = !1;
    if (Array.isArray(i))
      for (let a = 0, u = i.length; a < u; ++a)
        l = Gg(r, e, i[a], n, this.boundHandleStyleImageChange_, s, o) || l;
    else l = Gg(r, e, i, n, this.boundHandleStyleImageChange_, s, o);
    return l;
  }
}
class nx extends Cw {
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new tx(this);
  }
}
const ix = nx;
class Wg {
  constructor(e) {
    (this.rbush_ = new K_(e)), (this.items_ = {});
  }
  insert(e, n) {
    const i = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3], value: n };
    this.rbush_.insert(i), (this.items_[ee(n)] = i);
  }
  load(e, n) {
    const i = new Array(n.length);
    for (let r = 0, s = n.length; r < s; r++) {
      const o = e[r],
        l = n[r],
        a = { minX: o[0], minY: o[1], maxX: o[2], maxY: o[3], value: l };
      (i[r] = a), (this.items_[ee(l)] = a);
    }
    this.rbush_.load(i);
  }
  remove(e) {
    const n = ee(e),
      i = this.items_[n];
    return delete this.items_[n], this.rbush_.remove(i) !== null;
  }
  update(e, n) {
    const i = this.items_[ee(n)],
      r = [i.minX, i.minY, i.maxX, i.maxY];
    Js(r, e) || (this.remove(n), this.insert(e, n));
  }
  getAll() {
    return this.rbush_.all().map(function (n) {
      return n.value;
    });
  }
  getInExtent(e) {
    const n = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
    return this.rbush_.search(n).map(function (r) {
      return r.value;
    });
  }
  forEach(e) {
    return this.forEach_(this.getAll(), e);
  }
  forEachInExtent(e, n) {
    return this.forEach_(this.getInExtent(e), n);
  }
  forEach_(e, n) {
    let i;
    for (let r = 0, s = e.length; r < s; r++) if (((i = n(e[r])), i)) return i;
    return i;
  }
  isEmpty() {
    return Xi(this.items_);
  }
  clear() {
    this.rbush_.clear(), (this.items_ = {});
  }
  getExtent(e) {
    const n = this.rbush_.toJSON();
    return Rn(n.minX, n.minY, n.maxX, n.maxY, e);
  }
  concat(e) {
    this.rbush_.load(e.rbush_.all());
    for (const n in e.items_) this.items_[n] = e.items_[n];
  }
}
class oa extends T_ {
  constructor(e) {
    super(),
      (this.geometries_ = e || null),
      (this.changeEventsKeys_ = []),
      this.listenGeometriesChange_();
  }
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(ce), (this.changeEventsKeys_.length = 0);
  }
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let e = 0, n = this.geometries_.length; e < n; ++e)
        this.changeEventsKeys_.push(
          $(this.geometries_[e], V.CHANGE, this.changed, this),
        );
  }
  clone() {
    const e = new oa(null);
    return e.setGeometries(this.geometries_), e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    if (r < Bi(this.getExtent(), e, n)) return r;
    const s = this.geometries_;
    for (let o = 0, l = s.length; o < l; ++o)
      r = s[o].closestPointXY(e, n, i, r);
    return r;
  }
  containsXY(e, n) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r)
      if (i[r].containsXY(e, n)) return !0;
    return !1;
  }
  computeExtent(e) {
    $r(e);
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i) p_(e, n[i].getExtent());
    return e;
  }
  getGeometries() {
    return jg(this.geometries_);
  }
  getGeometriesArray() {
    return this.geometries_;
  }
  getGeometriesArrayRecursive() {
    let e = [];
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i)
      n[i].getType() === this.getType()
        ? (e = e.concat(n[i].getGeometriesArrayRecursive()))
        : e.push(n[i]);
    return e;
  }
  getSimplifiedGeometry(e) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      e < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          e < this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const n = [],
      i = this.geometries_;
    let r = !1;
    for (let s = 0, o = i.length; s < o; ++s) {
      const l = i[s],
        a = l.getSimplifiedGeometry(e);
      n.push(a), a !== l && (r = !0);
    }
    if (r) {
      const s = new oa(null);
      return s.setGeometriesArray(n), s;
    }
    return (this.simplifiedGeometryMaxMinSquaredTolerance = e), this;
  }
  getType() {
    return "GeometryCollection";
  }
  intersectsExtent(e) {
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i)
      if (n[i].intersectsExtent(e)) return !0;
    return !1;
  }
  isEmpty() {
    return this.geometries_.length === 0;
  }
  rotate(e, n) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r) i[r].rotate(e, n);
    this.changed();
  }
  scale(e, n, i) {
    i || (i = ci(this.getExtent()));
    const r = this.geometries_;
    for (let s = 0, o = r.length; s < o; ++s) r[s].scale(e, n, i);
    this.changed();
  }
  setGeometries(e) {
    this.setGeometriesArray(jg(e));
  }
  setGeometriesArray(e) {
    this.unlistenGeometriesChange_(),
      (this.geometries_ = e),
      this.listenGeometriesChange_(),
      this.changed();
  }
  applyTransform(e) {
    const n = this.geometries_;
    for (let i = 0, r = n.length; i < r; ++i) n[i].applyTransform(e);
    this.changed();
  }
  translate(e, n) {
    const i = this.geometries_;
    for (let r = 0, s = i.length; r < s; ++r) i[r].translate(e, n);
    this.changed();
  }
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
}
function jg(t) {
  const e = [];
  for (let n = 0, i = t.length; n < i; ++n) e.push(t[n].clone());
  return e;
}
const rx = oa;
class la extends bi {
  constructor(e, n, i) {
    if (
      (super(),
      (this.ends_ = []),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      Array.isArray(e[0]))
    )
      this.setCoordinates(e, n);
    else if (n !== void 0 && i) this.setFlatCoordinates(n, e), (this.ends_ = i);
    else {
      const r = e,
        s = [],
        o = [];
      for (let a = 0, u = r.length; a < u; ++a) {
        const c = r[a];
        Jt(s, c.getFlatCoordinates()), o.push(s.length);
      }
      const l = r.length === 0 ? this.getLayout() : r[0].getLayout();
      this.setFlatCoordinates(l, s), (this.ends_ = o);
    }
  }
  appendLineString(e) {
    Jt(this.flatCoordinates, e.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const e = new la(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    return r < Bi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            ad(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        cd(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !1,
          e,
          n,
          i,
          r,
        ));
  }
  getCoordinateAtM(e, n, i) {
    return (this.layout != "XYM" && this.layout != "XYZM") ||
      this.flatCoordinates.length === 0
      ? null
      : ((n = n !== void 0 ? n : !1),
        (i = i !== void 0 ? i : !1),
        $v(this.flatCoordinates, 0, this.ends_, this.stride, e, n, i));
  }
  getCoordinates() {
    return to(this.flatCoordinates, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getLineString(e) {
    return e < 0 || this.ends_.length <= e
      ? null
      : new Vc(
          this.flatCoordinates.slice(
            e === 0 ? 0 : this.ends_[e - 1],
            this.ends_[e],
          ),
          this.layout,
        );
  }
  getLineStrings() {
    const e = this.flatCoordinates,
      n = this.ends_,
      i = this.layout,
      r = [];
    let s = 0;
    for (let o = 0, l = n.length; o < l; ++o) {
      const a = n[o],
        u = new Vc(e.slice(s, a), i);
      r.push(u), (s = a);
    }
    return r;
  }
  getFlatMidpoints() {
    const e = [],
      n = this.flatCoordinates;
    let i = 0;
    const r = this.ends_,
      s = this.stride;
    for (let o = 0, l = r.length; o < l; ++o) {
      const a = r[o],
        u = Ql(n, i, a, s, 0.5);
      Jt(e, u), (i = a);
    }
    return e;
  }
  getSimplifiedGeometryInternal(e) {
    const n = [],
      i = [];
    return (
      (n.length = L_(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        e,
        n,
        0,
        i,
      )),
      new la(n, "XY", i)
    );
  }
  getType() {
    return "MultiLineString";
  }
  intersectsExtent(e) {
    return bv(this.flatCoordinates, 0, this.ends_, this.stride, e);
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const i = wo(this.flatCoordinates, 0, e, this.stride, this.ends_);
    (this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1]),
      this.changed();
  }
}
const sx = la;
class Td extends bi {
  constructor(e, n) {
    super(),
      n && !Array.isArray(e[0])
        ? this.setFlatCoordinates(n, e)
        : this.setCoordinates(e, n);
  }
  appendPoint(e) {
    Jt(this.flatCoordinates, e.getFlatCoordinates()), this.changed();
  }
  clone() {
    const e = new Td(this.flatCoordinates.slice(), this.layout);
    return e.applyProperties(this), e;
  }
  closestPointXY(e, n, i, r) {
    if (r < Bi(this.getExtent(), e, n)) return r;
    const s = this.flatCoordinates,
      o = this.stride;
    for (let l = 0, a = s.length; l < a; l += o) {
      const u = Di(e, n, s[l], s[l + 1]);
      if (u < r) {
        r = u;
        for (let c = 0; c < o; ++c) i[c] = s[l + c];
        i.length = o;
      }
    }
    return r;
  }
  getCoordinates() {
    return Zn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getPoint(e) {
    const n = this.flatCoordinates.length / this.stride;
    return e < 0 || n <= e
      ? null
      : new Br(
          this.flatCoordinates.slice(e * this.stride, (e + 1) * this.stride),
          this.layout,
        );
  }
  getPoints() {
    const e = this.flatCoordinates,
      n = this.layout,
      i = this.stride,
      r = [];
    for (let s = 0, o = e.length; s < o; s += i) {
      const l = new Br(e.slice(s, s + i), n);
      r.push(l);
    }
    return r;
  }
  getType() {
    return "MultiPoint";
  }
  intersectsExtent(e) {
    const n = this.flatCoordinates,
      i = this.stride;
    for (let r = 0, s = n.length; r < s; r += i) {
      const o = n[r],
        l = n[r + 1];
      if (ed(e, o, l)) return !0;
    }
    return !1;
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = Oa(
        this.flatCoordinates,
        0,
        e,
        this.stride,
      )),
      this.changed();
  }
}
const l0 = Td;
function a0(t, e, n, i) {
  const r = [];
  let s = Pt();
  for (let o = 0, l = n.length; o < l; ++o) {
    const a = n[o];
    (s = td(t, e, a[0], i)),
      r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2),
      (e = a[a.length - 1]);
  }
  return r;
}
class aa extends bi {
  constructor(e, n, i) {
    if (
      (super(),
      (this.endss_ = []),
      (this.flatInteriorPointsRevision_ = -1),
      (this.flatInteriorPoints_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      !i && !Array.isArray(e[0]))
    ) {
      const r = e,
        s = [],
        o = [];
      for (let l = 0, a = r.length; l < a; ++l) {
        const u = r[l],
          c = s.length,
          h = u.getEnds();
        for (let d = 0, f = h.length; d < f; ++d) h[d] += c;
        Jt(s, u.getFlatCoordinates()), o.push(h);
      }
      (n = r.length === 0 ? this.getLayout() : r[0].getLayout()),
        (e = s),
        (i = o);
    }
    n !== void 0 && i
      ? (this.setFlatCoordinates(n, e), (this.endss_ = i))
      : this.setCoordinates(e, n);
  }
  appendPolygon(e) {
    let n;
    if (!this.flatCoordinates)
      (this.flatCoordinates = e.getFlatCoordinates().slice()),
        (n = e.getEnds().slice()),
        this.endss_.push();
    else {
      const i = this.flatCoordinates.length;
      Jt(this.flatCoordinates, e.getFlatCoordinates()),
        (n = e.getEnds().slice());
      for (let r = 0, s = n.length; r < s; ++r) n[r] += i;
    }
    this.endss_.push(n), this.changed();
  }
  clone() {
    const e = this.endss_.length,
      n = new Array(e);
    for (let r = 0; r < e; ++r) n[r] = this.endss_[r].slice();
    const i = new aa(this.flatCoordinates.slice(), this.layout, n);
    return i.applyProperties(this), i;
  }
  closestPointXY(e, n, i, r) {
    return r < Bi(this.getExtent(), e, n)
      ? r
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Gv(this.flatCoordinates, 0, this.endss_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Wv(
          this.getOrientedFlatCoordinates(),
          0,
          this.endss_,
          this.stride,
          this.maxDelta_,
          !0,
          e,
          n,
          i,
          r,
        ));
  }
  containsXY(e, n) {
    return Vv(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      e,
      n,
    );
  }
  getArea() {
    return Yv(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
  }
  getCoordinates(e) {
    let n;
    return (
      e !== void 0
        ? ((n = this.getOrientedFlatCoordinates().slice()),
          Yc(n, 0, this.endss_, this.stride, e))
        : (n = this.flatCoordinates),
      Uc(n, 0, this.endss_, this.stride)
    );
  }
  getEndss() {
    return this.endss_;
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const e = a0(this.flatCoordinates, 0, this.endss_, this.stride);
      (this.flatInteriorPoints_ = M_(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        e,
      )),
        (this.flatInteriorPointsRevision_ = this.getRevision());
    }
    return this.flatInteriorPoints_;
  }
  getInteriorPoints() {
    return new l0(this.getFlatInteriorPoints().slice(), "XYM");
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const e = this.flatCoordinates;
      D_(e, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = e)
        : ((this.orientedFlatCoordinates_ = e.slice()),
          (this.orientedFlatCoordinates_.length = Yc(
            this.orientedFlatCoordinates_,
            0,
            this.endss_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(e) {
    const n = [],
      i = [];
    return (
      (n.length = Uv(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        Math.sqrt(e),
        n,
        0,
        i,
      )),
      new aa(n, "XY", i)
    );
  }
  getPolygon(e) {
    if (e < 0 || this.endss_.length <= e) return null;
    let n;
    if (e === 0) n = 0;
    else {
      const s = this.endss_[e - 1];
      n = s[s.length - 1];
    }
    const i = this.endss_[e].slice(),
      r = i[i.length - 1];
    if (n !== 0) for (let s = 0, o = i.length; s < o; ++s) i[s] -= n;
    return new hi(this.flatCoordinates.slice(n, r), this.layout, i);
  }
  getPolygons() {
    const e = this.layout,
      n = this.flatCoordinates,
      i = this.endss_,
      r = [];
    let s = 0;
    for (let o = 0, l = i.length; o < l; ++o) {
      const a = i[o].slice(),
        u = a[a.length - 1];
      if (s !== 0) for (let h = 0, d = a.length; h < d; ++h) a[h] -= s;
      const c = new hi(n.slice(s, u), e, a);
      r.push(c), (s = u);
    }
    return r;
  }
  getType() {
    return "MultiPolygon";
  }
  intersectsExtent(e) {
    return Kv(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      e,
    );
  }
  setCoordinates(e, n) {
    this.setLayout(n, e, 3),
      this.flatCoordinates || (this.flatCoordinates = []);
    const i = I_(this.flatCoordinates, 0, e, this.stride, this.endss_);
    if (i.length === 0) this.flatCoordinates.length = 0;
    else {
      const r = i[i.length - 1];
      this.flatCoordinates.length = r.length === 0 ? 0 : r[r.length - 1];
    }
    this.changed();
  }
}
const ox = aa,
  Xg = Ut();
class Je {
  constructor(e, n, i, r, s, o) {
    this.styleFunction,
      this.extent_,
      (this.id_ = o),
      (this.type_ = e),
      (this.flatCoordinates_ = n),
      (this.flatInteriorPoints_ = null),
      (this.flatMidpoints_ = null),
      (this.ends_ = i),
      (this.properties_ = s),
      this.squaredTolerance_,
      (this.stride_ = r),
      this.simplifiedGeometry_;
  }
  get(e) {
    return this.properties_[e];
  }
  getExtent() {
    return (
      this.extent_ ||
        (this.extent_ =
          this.type_ === "Point"
            ? g_(this.flatCoordinates_)
            : td(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)),
      this.extent_
    );
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const e = ci(this.getExtent());
      this.flatInteriorPoints_ = fd(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        e,
        0,
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const e = Hv(this.flatCoordinates_, this.ends_),
        n = a0(this.flatCoordinates_, 0, e, 2);
      this.flatInteriorPoints_ = M_(this.flatCoordinates_, 0, e, 2, n);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return (
      this.flatMidpoints_ ||
        (this.flatMidpoints_ = Ql(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          0.5,
        )),
      this.flatMidpoints_
    );
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const e = this.flatCoordinates_;
      let n = 0;
      const i = this.ends_;
      for (let r = 0, s = i.length; r < s; ++r) {
        const o = i[r],
          l = Ql(e, n, o, 2, 0.5);
        Jt(this.flatMidpoints_, l), (n = o);
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(e) {
    return this;
  }
  simplifyTransformed(e, n) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return this.stride_;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(e) {
    e = ve(e);
    const n = e.getExtent(),
      i = e.getWorldExtent();
    if (n && i) {
      const r = mt(i) / mt(n);
      Sn(Xg, i[0], i[3], r, -r, 0, 0, 0),
        si(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          Xg,
          this.flatCoordinates_,
        );
    }
  }
  applyTransform(e) {
    e(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    return new Je(
      this.type_,
      this.flatCoordinates_.slice(),
      this.ends_.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_,
    );
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return (
      (this.simplifyTransformed = l_((e, n) => {
        if (e === this.squaredTolerance_) return this.simplifiedGeometry_;
        (this.simplifiedGeometry_ = this.clone()),
          n && this.simplifiedGeometry_.applyTransform(n);
        const i = this.simplifiedGeometry_.getFlatCoordinates();
        let r;
        switch (this.type_) {
          case "LineString":
            (i.length = Fa(
              i,
              0,
              this.simplifiedGeometry_.flatCoordinates_.length,
              this.simplifiedGeometry_.stride_,
              e,
              i,
              0,
            )),
              (r = [i.length]);
            break;
          case "MultiLineString":
            (r = []),
              (i.length = L_(
                i,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                e,
                i,
                0,
                r,
              ));
            break;
          case "Polygon":
            (r = []),
              (i.length = hd(
                i,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                Math.sqrt(e),
                i,
                0,
                r,
              ));
            break;
        }
        return (
          r &&
            (this.simplifiedGeometry_ = new Je(
              this.type_,
              i,
              r,
              2,
              this.properties_,
              this.id_,
            )),
          (this.squaredTolerance_ = e),
          this.simplifiedGeometry_
        );
      })),
      this
    );
  }
}
Je.prototype.getFlatCoordinates = Je.prototype.getOrientedFlatCoordinates;
class u0 extends nn {
  constructor(e) {
    super(),
      (this.projection = ve(e.projection)),
      (this.attributions_ = Ug(e.attributions)),
      (this.attributionsCollapsible_ =
        e.attributionsCollapsible !== void 0 ? e.attributionsCollapsible : !0),
      (this.loading = !1),
      (this.state_ = e.state !== void 0 ? e.state : "ready"),
      (this.wrapX_ = e.wrapX !== void 0 ? e.wrapX : !1),
      (this.interpolate_ = !!e.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null);
    const n = this;
    this.viewPromise_ = new Promise(function (i, r) {
      (n.viewResolver = i), (n.viewRejector = r);
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(e) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(e) {
    (this.attributions_ = Ug(e)), this.changed();
  }
  setState(e) {
    (this.state_ = e), this.changed();
  }
}
function Ug(t) {
  return t
    ? Array.isArray(t)
      ? function (e) {
          return t;
        }
      : typeof t == "function"
        ? t
        : function (e) {
            return [t];
          }
    : null;
}
const Dt = {
  ADDFEATURE: "addfeature",
  CHANGEFEATURE: "changefeature",
  CLEAR: "clear",
  REMOVEFEATURE: "removefeature",
  FEATURESLOADSTART: "featuresloadstart",
  FEATURESLOADEND: "featuresloadend",
  FEATURESLOADERROR: "featuresloaderror",
};
function lx(t, e) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let ax = !1;
function ux(t, e, n, i, r, s, o) {
  const l = new XMLHttpRequest();
  l.open("GET", typeof t == "function" ? t(n, i, r) : t, !0),
    e.getType() == "arraybuffer" && (l.responseType = "arraybuffer"),
    (l.withCredentials = ax),
    (l.onload = function (a) {
      if (!l.status || (l.status >= 200 && l.status < 300)) {
        const u = e.getType();
        let c;
        u == "json"
          ? (c = JSON.parse(l.responseText))
          : u == "text"
            ? (c = l.responseText)
            : u == "xml"
              ? ((c = l.responseXML),
                c ||
                  (c = new DOMParser().parseFromString(
                    l.responseText,
                    "application/xml",
                  )))
              : u == "arraybuffer" && (c = l.response),
          c
            ? s(
                e.readFeatures(c, { extent: n, featureProjection: r }),
                e.readProjection(c),
              )
            : o();
      } else o();
    }),
    (l.onerror = o),
    l.send();
}
function Yg(t, e) {
  return function (n, i, r, s, o) {
    const l = this;
    ux(
      t,
      e,
      n,
      i,
      r,
      function (a, u) {
        l.addFeatures(a), s !== void 0 && s(a);
      },
      o || Ur,
    );
  };
}
class Dn extends Ln {
  constructor(e, n, i) {
    super(e), (this.feature = n), (this.features = i);
  }
}
class cx extends u0 {
  constructor(e) {
    (e = e || {}),
      super({
        attributions: e.attributions,
        interpolate: !0,
        projection: void 0,
        state: "ready",
        wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      }),
      this.on,
      this.once,
      this.un,
      (this.loader_ = Ur),
      (this.format_ = e.format),
      (this.overlaps_ = e.overlaps === void 0 ? !0 : e.overlaps),
      (this.url_ = e.url),
      e.loader !== void 0
        ? (this.loader_ = e.loader)
        : this.url_ !== void 0 &&
          (Q(this.format_, "`format` must be set when `url` is set"),
          (this.loader_ = Yg(this.url_, this.format_))),
      (this.strategy_ = e.strategy !== void 0 ? e.strategy : lx);
    const n = e.useSpatialIndex !== void 0 ? e.useSpatialIndex : !0;
    (this.featuresRtree_ = n ? new Wg() : null),
      (this.loadedExtentsRtree_ = new Wg()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null);
    let i, r;
    Array.isArray(e.features)
      ? (r = e.features)
      : e.features && ((i = e.features), (r = i.getArray())),
      !n && i === void 0 && (i = new Ht(r)),
      r !== void 0 && this.addFeaturesInternal(r),
      i !== void 0 && this.bindFeaturesCollection_(i);
  }
  addFeature(e) {
    this.addFeatureInternal(e), this.changed();
  }
  addFeatureInternal(e) {
    const n = ee(e);
    if (!this.addToIndex_(n, e)) {
      this.featuresCollection_ && this.featuresCollection_.remove(e);
      return;
    }
    this.setupChangeEvents_(n, e);
    const i = e.getGeometry();
    if (i) {
      const r = i.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(r, e);
    } else this.nullGeometryFeatures_[n] = e;
    this.dispatchEvent(new Dn(Dt.ADDFEATURE, e));
  }
  setupChangeEvents_(e, n) {
    n instanceof Je ||
      (this.featureChangeKeys_[e] = [
        $(n, V.CHANGE, this.handleFeatureChange_, this),
        $(n, Xr.PROPERTYCHANGE, this.handleFeatureChange_, this),
      ]);
  }
  addToIndex_(e, n) {
    let i = !0;
    if (n.getId() !== void 0) {
      const r = String(n.getId());
      if (!(r in this.idIndex_)) this.idIndex_[r] = n;
      else if (n instanceof Je) {
        const s = this.idIndex_[r];
        s instanceof Je
          ? Array.isArray(s)
            ? s.push(n)
            : (this.idIndex_[r] = [s, n])
          : (i = !1);
      } else i = !1;
    }
    return (
      i &&
        (Q(
          !(e in this.uidIndex_),
          "The passed `feature` was already added to the source",
        ),
        (this.uidIndex_[e] = n)),
      i
    );
  }
  addFeatures(e) {
    this.addFeaturesInternal(e), this.changed();
  }
  addFeaturesInternal(e) {
    const n = [],
      i = [],
      r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const l = e[s],
        a = ee(l);
      this.addToIndex_(a, l) && i.push(l);
    }
    for (let s = 0, o = i.length; s < o; s++) {
      const l = i[s],
        a = ee(l);
      this.setupChangeEvents_(a, l);
      const u = l.getGeometry();
      if (u) {
        const c = u.getExtent();
        n.push(c), r.push(l);
      } else this.nullGeometryFeatures_[a] = l;
    }
    if (
      (this.featuresRtree_ && this.featuresRtree_.load(n, r),
      this.hasListener(Dt.ADDFEATURE))
    )
      for (let s = 0, o = i.length; s < o; s++)
        this.dispatchEvent(new Dn(Dt.ADDFEATURE, i[s]));
  }
  bindFeaturesCollection_(e) {
    let n = !1;
    this.addEventListener(Dt.ADDFEATURE, function (i) {
      n || ((n = !0), e.push(i.feature), (n = !1));
    }),
      this.addEventListener(Dt.REMOVEFEATURE, function (i) {
        n || ((n = !0), e.remove(i.feature), (n = !1));
      }),
      e.addEventListener(tt.ADD, (i) => {
        n || ((n = !0), this.addFeature(i.element), (n = !1));
      }),
      e.addEventListener(tt.REMOVE, (i) => {
        n || ((n = !0), this.removeFeature(i.element), (n = !1));
      }),
      (this.featuresCollection_ = e);
  }
  clear(e) {
    if (e) {
      for (const i in this.featureChangeKeys_)
        this.featureChangeKeys_[i].forEach(ce);
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}),
        (this.idIndex_ = {}),
        (this.uidIndex_ = {}));
    } else if (this.featuresRtree_) {
      const i = (r) => {
        this.removeFeatureInternal(r);
      };
      this.featuresRtree_.forEach(i);
      for (const r in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[r]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {});
    const n = new Dn(Dt.CLEAR);
    this.dispatchEvent(n), this.changed();
  }
  forEachFeature(e) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
  }
  forEachFeatureAtCoordinateDirect(e, n) {
    const i = [e[0], e[1], e[0], e[1]];
    return this.forEachFeatureInExtent(i, function (r) {
      const s = r.getGeometry();
      if (s instanceof Je || s.intersectsCoordinate(e)) return n(r);
    });
  }
  forEachFeatureInExtent(e, n) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(e, n);
    this.featuresCollection_ && this.featuresCollection_.forEach(n);
  }
  forEachFeatureIntersectingExtent(e, n) {
    return this.forEachFeatureInExtent(e, function (i) {
      const r = i.getGeometry();
      if (r instanceof Je || r.intersectsExtent(e)) {
        const s = n(i);
        if (s) return s;
      }
    });
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let e;
    return (
      this.featuresCollection_
        ? (e = this.featuresCollection_.getArray().slice(0))
        : this.featuresRtree_ &&
          ((e = this.featuresRtree_.getAll()),
          Xi(this.nullGeometryFeatures_) ||
            Jt(e, Object.values(this.nullGeometryFeatures_))),
      e
    );
  }
  getFeaturesAtCoordinate(e) {
    const n = [];
    return (
      this.forEachFeatureAtCoordinateDirect(e, function (i) {
        n.push(i);
      }),
      n
    );
  }
  getFeaturesInExtent(e, n) {
    if (this.featuresRtree_) {
      if (!(n && n.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(e);
      const r = hv(e, n);
      return [].concat(...r.map((s) => this.featuresRtree_.getInExtent(s)));
    }
    return this.featuresCollection_
      ? this.featuresCollection_.getArray().slice(0)
      : [];
  }
  getClosestFeatureToCoordinate(e, n) {
    const i = e[0],
      r = e[1];
    let s = null;
    const o = [NaN, NaN];
    let l = 1 / 0;
    const a = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return (
      (n = n || Qs),
      this.featuresRtree_.forEachInExtent(a, function (u) {
        if (n(u)) {
          const c = u.getGeometry(),
            h = l;
          if (
            ((l = c instanceof Je ? 0 : c.closestPointXY(i, r, o, l)), l < h)
          ) {
            s = u;
            const d = Math.sqrt(l);
            (a[0] = i - d), (a[1] = r - d), (a[2] = i + d), (a[3] = r + d);
          }
        }
      }),
      s
    );
  }
  getExtent(e) {
    return this.featuresRtree_.getExtent(e);
  }
  getFeatureById(e) {
    const n = this.idIndex_[e.toString()];
    return n !== void 0 ? n : null;
  }
  getFeatureByUid(e) {
    const n = this.uidIndex_[e];
    return n !== void 0 ? n : null;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(e) {
    const n = e.target,
      i = ee(n),
      r = n.getGeometry();
    if (!r)
      i in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(n),
        (this.nullGeometryFeatures_[i] = n));
    else {
      const o = r.getExtent();
      i in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[i],
          this.featuresRtree_ && this.featuresRtree_.insert(o, n))
        : this.featuresRtree_ && this.featuresRtree_.update(o, n);
    }
    const s = n.getId();
    if (s !== void 0) {
      const o = s.toString();
      this.idIndex_[o] !== n &&
        (this.removeFromIdIndex_(n), (this.idIndex_[o] = n));
    } else this.removeFromIdIndex_(n), (this.uidIndex_[i] = n);
    this.changed(), this.dispatchEvent(new Dn(Dt.CHANGEFEATURE, n));
  }
  hasFeature(e) {
    const n = e.getId();
    return n !== void 0 ? n in this.idIndex_ : ee(e) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && Xi(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0;
  }
  loadFeatures(e, n, i) {
    const r = this.loadedExtentsRtree_,
      s = this.strategy_(e, n, i);
    for (let o = 0, l = s.length; o < l; ++o) {
      const a = s[o];
      r.forEachInExtent(a, function (c) {
        return xr(c.extent, a);
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new Dn(Dt.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          a,
          n,
          i,
          (c) => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new Dn(Dt.FEATURESLOADEND, void 0, c));
          },
          () => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new Dn(Dt.FEATURESLOADERROR));
          },
        ),
        r.insert(a, { extent: a.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(e) {
    const n = this.loadedExtentsRtree_;
    let i;
    n.forEachInExtent(e, function (r) {
      if (Js(r.extent, e)) return (i = r), !0;
    }),
      i && n.remove(i);
  }
  removeFeature(e) {
    if (!e) return;
    const n = ee(e);
    n in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[n]
      : this.featuresRtree_ && this.featuresRtree_.remove(e),
      this.removeFeatureInternal(e) && this.changed();
  }
  removeFeatureInternal(e) {
    const n = ee(e),
      i = this.featureChangeKeys_[n];
    if (!i) return;
    i.forEach(ce), delete this.featureChangeKeys_[n];
    const r = e.getId();
    return (
      r !== void 0 && delete this.idIndex_[r.toString()],
      delete this.uidIndex_[n],
      this.dispatchEvent(new Dn(Dt.REMOVEFEATURE, e)),
      e
    );
  }
  removeFromIdIndex_(e) {
    let n = !1;
    for (const i in this.idIndex_) {
      const r = this.idIndex_[i];
      if (e instanceof Je && Array.isArray(r) && r.includes(e))
        r.splice(r.indexOf(e), 1);
      else if (this.idIndex_[i] === e) {
        delete this.idIndex_[i], (n = !0);
        break;
      }
    }
    return n;
  }
  setLoader(e) {
    this.loader_ = e;
  }
  setUrl(e) {
    Q(this.format_, "`format` must be set when `url` is set"),
      (this.url_ = e),
      this.setLoader(Yg(e, this.format_));
  }
}
const hx = cx,
  G = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
class c0 extends Ta {
  constructor(e, n, i) {
    super(),
      (i = i || {}),
      (this.tileCoord = e),
      (this.state = n),
      (this.interimTile = null),
      (this.key = ""),
      (this.transition_ = i.transition === void 0 ? 250 : i.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!i.interpolate);
  }
  changed() {
    this.dispatchEvent(V.CHANGE);
  }
  release() {
    this.state === G.ERROR && this.setState(G.EMPTY);
  }
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  getInterimTile() {
    let e = this.interimTile;
    if (!e) return this;
    do {
      if (e.getState() == G.LOADED) return (this.transition_ = 0), e;
      e = e.interimTile;
    } while (e);
    return this;
  }
  refreshInterimChain() {
    let e = this.interimTile;
    if (!e) return;
    let n = this;
    do {
      if (e.getState() == G.LOADED) {
        e.interimTile = null;
        break;
      }
      e.getState() == G.LOADING
        ? (n = e)
        : e.getState() == G.IDLE
          ? (n.interimTile = e.interimTile)
          : (n = e),
        (e = n.interimTile);
    } while (e);
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(e) {
    if (this.state !== G.ERROR && this.state > e)
      throw new Error("Tile load sequence violation");
    (this.state = e), this.changed();
  }
  load() {
    W();
  }
  getAlpha(e, n) {
    if (!this.transition_) return 1;
    let i = this.transitionStarts_[e];
    if (!i) (i = n), (this.transitionStarts_[e] = i);
    else if (i === -1) return 1;
    const r = n - i + 1e3 / 60;
    return r >= this.transition_ ? 1 : V_(r / this.transition_);
  }
  inTransition(e) {
    return this.transition_ ? this.transitionStarts_[e] !== -1 : !1;
  }
  endTransition(e) {
    this.transition_ && (this.transitionStarts_[e] = -1);
  }
}
class h0 extends c0 {
  constructor(e, n, i, r, s, o) {
    super(e, n, o),
      (this.crossOrigin_ = r),
      (this.src_ = i),
      (this.key = i),
      (this.image_ = new Image()),
      r !== null && (this.image_.crossOrigin = r),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = s);
  }
  getImage() {
    return this.image_;
  }
  setImage(e) {
    (this.image_ = e),
      (this.state = G.LOADED),
      this.unlistenImage_(),
      this.changed();
  }
  handleImageError_() {
    (this.state = G.ERROR),
      this.unlistenImage_(),
      (this.image_ = dx()),
      this.changed();
  }
  handleImageLoad_() {
    const e = this.image_;
    e.naturalWidth && e.naturalHeight
      ? (this.state = G.LOADED)
      : (this.state = G.EMPTY),
      this.unlistenImage_(),
      this.changed();
  }
  load() {
    this.state == G.ERROR &&
      ((this.state = G.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == G.IDLE &&
        ((this.state = G.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = DE(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        )));
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
  }
}
function dx() {
  const t = Ke(1, 1);
  return (t.fillStyle = "rgba(0,0,0,0)"), t.fillRect(0, 0, 1, 1), t.canvas;
}
class fx {
  constructor(e, n, i) {
    (this.decay_ = e),
      (this.minVelocity_ = n),
      (this.delay_ = i),
      (this.points_ = []),
      (this.angle_ = 0),
      (this.initialVelocity_ = 0);
  }
  begin() {
    (this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0);
  }
  update(e, n) {
    this.points_.push(e, n, Date.now());
  }
  end() {
    if (this.points_.length < 6) return !1;
    const e = Date.now() - this.delay_,
      n = this.points_.length - 3;
    if (this.points_[n + 2] < e) return !1;
    let i = n - 3;
    for (; i > 0 && this.points_[i + 2] > e; ) i -= 3;
    const r = this.points_[n + 2] - this.points_[i + 2];
    if (r < 1e3 / 60) return !1;
    const s = this.points_[n] - this.points_[i],
      o = this.points_[n + 1] - this.points_[i + 1];
    return (
      (this.angle_ = Math.atan2(o, s)),
      (this.initialVelocity_ = Math.sqrt(s * s + o * o) / r),
      this.initialVelocity_ > this.minVelocity_
    );
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}
class gx extends Hh {
  constructor(e) {
    super(), (this.map_ = e);
  }
  dispatchRenderEvent(e, n) {
    W();
  }
  calculateMatrices2D(e) {
    const n = e.viewState,
      i = e.coordinateToPixelTransform,
      r = e.pixelToCoordinateTransform;
    Sn(
      i,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / n.resolution,
      -1 / n.resolution,
      -n.rotation,
      -n.center[0],
      -n.center[1],
    ),
      Qh(r, i);
  }
  forEachFeatureAtCoordinate(e, n, i, r, s, o, l, a) {
    let u;
    const c = n.viewState;
    function h(E, w, x, C) {
      return s.call(o, w, E ? x : null, C);
    }
    const d = c.projection,
      f = E_(e.slice(), d),
      m = [[0, 0]];
    if (d.canWrapX() && r) {
      const E = d.getExtent(),
        w = oe(E);
      m.push([-w, 0], [w, 0]);
    }
    const y = n.layerStatesArray,
      v = y.length,
      p = [],
      g = [];
    for (let E = 0; E < m.length; E++)
      for (let w = v - 1; w >= 0; --w) {
        const x = y[w],
          C = x.layer;
        if (C.hasRenderer() && Sd(x, c) && l.call(a, C)) {
          const S = C.getRenderer(),
            M = C.getSource();
          if (S && M) {
            const k = M.getWrapX() ? f : e,
              j = h.bind(null, x.managed);
            (g[0] = k[0] + m[E][0]),
              (g[1] = k[1] + m[E][1]),
              (u = S.forEachFeatureAtCoordinate(g, n, i, j, p));
          }
          if (u) return u;
        }
      }
    if (p.length === 0) return;
    const _ = 1 / p.length;
    return (
      p.forEach((E, w) => (E.distanceSq += w * _)),
      p.sort((E, w) => E.distanceSq - w.distanceSq),
      p.some((E) => (u = E.callback(E.feature, E.layer, E.geometry))),
      u
    );
  }
  hasFeatureAtCoordinate(e, n, i, r, s, o) {
    return (
      this.forEachFeatureAtCoordinate(e, n, i, r, Qs, this, s, o) !== void 0
    );
  }
  getMap() {
    return this.map_;
  }
  renderFrame(e) {
    W();
  }
  flushDeclutterItems(e) {}
  scheduleExpireIconCache(e) {
    ia.canExpireCache() && e.postRenderFunctions.push(px);
  }
}
function px(t, e) {
  ia.expire();
}
class mx extends gx {
  constructor(e) {
    super(e),
      (this.fontChangeListenerKey_ = $(
        dn,
        Xr.PROPERTYCHANGE,
        e.redrawText.bind(e),
      )),
      (this.element_ = document.createElement("div"));
    const n = this.element_.style;
    (n.position = "absolute"),
      (n.width = "100%"),
      (n.height = "100%"),
      (n.zIndex = "0"),
      (this.element_.className = Wa + " ol-layers");
    const i = e.getViewport();
    i.insertBefore(this.element_, i.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0),
      (this.declutterLayers_ = []);
  }
  dispatchRenderEvent(e, n) {
    const i = this.getMap();
    if (i.hasListener(e)) {
      const r = new i0(e, void 0, n);
      i.dispatchEvent(r);
    }
  }
  disposeInternal() {
    ce(this.fontChangeListenerKey_),
      this.element_.parentNode.removeChild(this.element_),
      super.disposeInternal();
  }
  renderFrame(e) {
    if (!e) {
      this.renderedVisible_ &&
        ((this.element_.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    this.calculateMatrices2D(e), this.dispatchRenderEvent(en.PRECOMPOSE, e);
    const n = e.layerStatesArray.sort(function (o, l) {
        return o.zIndex - l.zIndex;
      }),
      i = e.viewState;
    this.children_.length = 0;
    const r = this.declutterLayers_;
    r.length = 0;
    let s = null;
    for (let o = 0, l = n.length; o < l; ++o) {
      const a = n[o];
      e.layerIndex = o;
      const u = a.layer,
        c = u.getSourceState();
      if (!Sd(a, i) || (c != "ready" && c != "undefined")) {
        u.unrender();
        continue;
      }
      const h = u.render(e, s);
      h &&
        (h !== s && (this.children_.push(h), (s = h)),
        "getDeclutter" in u && r.push(u));
    }
    this.flushDeclutterItems(e),
      oE(this.element_, this.children_),
      this.dispatchRenderEvent(en.POSTCOMPOSE, e),
      this.renderedVisible_ ||
        ((this.element_.style.display = ""), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(e);
  }
  flushDeclutterItems(e) {
    const n = this.declutterLayers_;
    for (let i = n.length - 1; i >= 0; --i) n[i].renderDeclutter(e);
    n.length = 0;
  }
}
class Un extends Ln {
  constructor(e, n) {
    super(e), (this.layer = n);
  }
}
const Fu = { LAYERS: "layers" };
class es extends B_ {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.layers;
    let i = e.layers;
    super(n),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(Fu.LAYERS, this.handleLayersChanged_),
      i
        ? Array.isArray(i)
          ? (i = new Ht(i.slice(), { unique: !0 }))
          : Q(
              typeof i.getArray == "function",
              "Expected `layers` to be an array or a `Collection`",
            )
        : (i = new Ht(void 0, { unique: !0 })),
      this.setLayers(i);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(ce), (this.layersListenerKeys_.length = 0);
    const e = this.getLayers();
    this.layersListenerKeys_.push(
      $(e, tt.ADD, this.handleLayersAdd_, this),
      $(e, tt.REMOVE, this.handleLayersRemove_, this),
    );
    for (const i in this.listenerKeys_) this.listenerKeys_[i].forEach(ce);
    _o(this.listenerKeys_);
    const n = e.getArray();
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      this.registerLayerListeners_(s),
        this.dispatchEvent(new Un("addlayer", s));
    }
    this.changed();
  }
  registerLayerListeners_(e) {
    const n = [
      $(e, Xr.PROPERTYCHANGE, this.handleLayerChange_, this),
      $(e, V.CHANGE, this.handleLayerChange_, this),
    ];
    e instanceof es &&
      n.push(
        $(e, "addlayer", this.handleLayerGroupAdd_, this),
        $(e, "removelayer", this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[ee(e)] = n);
  }
  handleLayerGroupAdd_(e) {
    this.dispatchEvent(new Un("addlayer", e.layer));
  }
  handleLayerGroupRemove_(e) {
    this.dispatchEvent(new Un("removelayer", e.layer));
  }
  handleLayersAdd_(e) {
    const n = e.element;
    this.registerLayerListeners_(n),
      this.dispatchEvent(new Un("addlayer", n)),
      this.changed();
  }
  handleLayersRemove_(e) {
    const n = e.element,
      i = ee(n);
    this.listenerKeys_[i].forEach(ce),
      delete this.listenerKeys_[i],
      this.dispatchEvent(new Un("removelayer", n)),
      this.changed();
  }
  getLayers() {
    return this.get(Fu.LAYERS);
  }
  setLayers(e) {
    const n = this.getLayers();
    if (n) {
      const i = n.getArray();
      for (let r = 0, s = i.length; r < s; ++r)
        this.dispatchEvent(new Un("removelayer", i[r]));
    }
    this.set(Fu.LAYERS, e);
  }
  getLayersArray(e) {
    return (
      (e = e !== void 0 ? e : []),
      this.getLayers().forEach(function (n) {
        n.getLayersArray(e);
      }),
      e
    );
  }
  getLayerStatesArray(e) {
    const n = e !== void 0 ? e : [],
      i = n.length;
    this.getLayers().forEach(function (o) {
      o.getLayerStatesArray(n);
    });
    const r = this.getLayerState();
    let s = r.zIndex;
    !e && r.zIndex === void 0 && (s = 0);
    for (let o = i, l = n.length; o < l; o++) {
      const a = n[o];
      (a.opacity *= r.opacity),
        (a.visible = a.visible && r.visible),
        (a.maxResolution = Math.min(a.maxResolution, r.maxResolution)),
        (a.minResolution = Math.max(a.minResolution, r.minResolution)),
        (a.minZoom = Math.max(a.minZoom, r.minZoom)),
        (a.maxZoom = Math.min(a.maxZoom, r.maxZoom)),
        r.extent !== void 0 &&
          (a.extent !== void 0
            ? (a.extent = Fs(a.extent, r.extent))
            : (a.extent = r.extent)),
        a.zIndex === void 0 && (a.zIndex = s);
    }
    return n;
  }
  getSourceState() {
    return "ready";
  }
}
class ur extends Ln {
  constructor(e, n, i) {
    super(e), (this.map = n), (this.frameState = i !== void 0 ? i : null);
  }
}
class zn extends ur {
  constructor(e, n, i, r, s, o) {
    super(e, n, s),
      (this.originalEvent = i),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = r !== void 0 ? r : !1),
      (this.activePointers = o);
  }
  get pixel() {
    return (
      this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)),
      this.pixel_
    );
  }
  set pixel(e) {
    this.pixel_ = e;
  }
  get coordinate() {
    return (
      this.coordinate_ ||
        (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
      this.coordinate_
    );
  }
  set coordinate(e) {
    this.coordinate_ = e;
  }
  preventDefault() {
    super.preventDefault(),
      "preventDefault" in this.originalEvent &&
        this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(),
      "stopPropagation" in this.originalEvent &&
        this.originalEvent.stopPropagation();
  }
}
const _e = {
    SINGLECLICK: "singleclick",
    CLICK: V.CLICK,
    DBLCLICK: V.DBLCLICK,
    POINTERDRAG: "pointerdrag",
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  },
  qc = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  };
class _x extends Ta {
  constructor(e, n) {
    super(e),
      (this.map_ = e),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = n === void 0 ? 1 : n),
      (this.down_ = null);
    const i = this.map_.getViewport();
    (this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = i),
      (this.pointerdownListenerKey_ = $(
        i,
        qc.POINTERDOWN,
        this.handlePointerDown_,
        this,
      )),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = $(
        i,
        qc.POINTERMOVE,
        this.relayMoveEvent_,
        this,
      )),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(
        V.TOUCHMOVE,
        this.boundHandleTouchMove_,
        h_ ? { passive: !1 } : !1,
      );
  }
  emulateClick_(e) {
    let n = new zn(_e.CLICK, this.map_, e);
    this.dispatchEvent(n),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (n = new zn(_e.DBLCLICK, this.map_, e)),
          this.dispatchEvent(n))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0;
            const i = new zn(_e.SINGLECLICK, this.map_, e);
            this.dispatchEvent(i);
          }, 250));
  }
  updateActivePointers_(e) {
    const n = e,
      i = n.pointerId;
    if (n.type == _e.POINTERUP || n.type == _e.POINTERCANCEL) {
      delete this.trackedTouches_[i];
      for (const r in this.trackedTouches_)
        if (this.trackedTouches_[r].target !== n.target) {
          delete this.trackedTouches_[r];
          break;
        }
    } else
      (n.type == _e.POINTERDOWN || n.type == _e.POINTERMOVE) &&
        (this.trackedTouches_[i] = n);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(e) {
    this.updateActivePointers_(e);
    const n = new zn(
      _e.POINTERUP,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_,
    );
    this.dispatchEvent(n),
      this.emulateClicks_ &&
        !n.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(e) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(ce),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null));
  }
  isMouseActionButton_(e) {
    return e.button === 0;
  }
  handlePointerDown_(e) {
    (this.emulateClicks_ = this.activePointers_.length === 0),
      this.updateActivePointers_(e);
    const n = new zn(
      _e.POINTERDOWN,
      this.map_,
      e,
      void 0,
      void 0,
      this.activePointers_,
    );
    if (
      (this.dispatchEvent(n),
      (this.down_ = new PointerEvent(e.type, e)),
      Object.defineProperty(this.down_, "target", {
        writable: !1,
        value: e.target,
      }),
      this.dragListenerKeys_.length === 0)
    ) {
      const i = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        $(i, _e.POINTERMOVE, this.handlePointerMove_, this),
        $(i, _e.POINTERUP, this.handlePointerUp_, this),
        $(this.element_, _e.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== i &&
          this.dragListenerKeys_.push(
            $(
              this.element_.getRootNode(),
              _e.POINTERUP,
              this.handlePointerUp_,
              this,
            ),
          );
    }
  }
  handlePointerMove_(e) {
    if (this.isMoving_(e)) {
      this.updateActivePointers_(e), (this.dragging_ = !0);
      const n = new zn(
        _e.POINTERDRAG,
        this.map_,
        e,
        this.dragging_,
        void 0,
        this.activePointers_,
      );
      this.dispatchEvent(n);
    }
  }
  relayMoveEvent_(e) {
    this.originalPointerMoveEvent_ = e;
    const n = !!(this.down_ && this.isMoving_(e));
    this.dispatchEvent(new zn(_e.POINTERMOVE, this.map_, e, n));
  }
  handleTouchMove_(e) {
    const n = this.originalPointerMoveEvent_;
    (!n || n.defaultPrevented) &&
      (typeof e.cancelable != "boolean" || e.cancelable === !0) &&
      e.preventDefault();
  }
  isMoving_(e) {
    return (
      this.dragging_ ||
      Math.abs(e.clientX - this.down_.clientX) > this.moveTolerance_ ||
      Math.abs(e.clientY - this.down_.clientY) > this.moveTolerance_
    );
  }
  disposeInternal() {
    this.relayedListenerKey_ &&
      (ce(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(
        V.TOUCHMOVE,
        this.boundHandleTouchMove_,
      ),
      this.pointerdownListenerKey_ &&
        (ce(this.pointerdownListenerKey_),
        (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(ce),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal();
  }
}
const Gn = {
    POSTRENDER: "postrender",
    MOVESTART: "movestart",
    MOVEEND: "moveend",
    LOADSTART: "loadstart",
    LOADEND: "loadend",
  },
  Ge = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view",
  },
  ua = 1 / 0;
class yx {
  constructor(e, n) {
    (this.priorityFunction_ = e),
      (this.keyFunction_ = n),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {});
  }
  clear() {
    (this.elements_.length = 0),
      (this.priorities_.length = 0),
      _o(this.queuedElements_);
  }
  dequeue() {
    const e = this.elements_,
      n = this.priorities_,
      i = e[0];
    e.length == 1
      ? ((e.length = 0), (n.length = 0))
      : ((e[0] = e.pop()), (n[0] = n.pop()), this.siftUp_(0));
    const r = this.keyFunction_(i);
    return delete this.queuedElements_[r], i;
  }
  enqueue(e) {
    Q(
      !(this.keyFunction_(e) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue",
    );
    const n = this.priorityFunction_(e);
    return n != ua
      ? (this.elements_.push(e),
        this.priorities_.push(n),
        (this.queuedElements_[this.keyFunction_(e)] = !0),
        this.siftDown_(0, this.elements_.length - 1),
        !0)
      : !1;
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(e) {
    return e * 2 + 1;
  }
  getRightChildIndex_(e) {
    return e * 2 + 2;
  }
  getParentIndex_(e) {
    return (e - 1) >> 1;
  }
  heapify_() {
    let e;
    for (e = (this.elements_.length >> 1) - 1; e >= 0; e--) this.siftUp_(e);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(e) {
    return e in this.queuedElements_;
  }
  isQueued(e) {
    return this.isKeyQueued(this.keyFunction_(e));
  }
  siftUp_(e) {
    const n = this.elements_,
      i = this.priorities_,
      r = n.length,
      s = n[e],
      o = i[e],
      l = e;
    for (; e < r >> 1; ) {
      const a = this.getLeftChildIndex_(e),
        u = this.getRightChildIndex_(e),
        c = u < r && i[u] < i[a] ? u : a;
      (n[e] = n[c]), (i[e] = i[c]), (e = c);
    }
    (n[e] = s), (i[e] = o), this.siftDown_(l, e);
  }
  siftDown_(e, n) {
    const i = this.elements_,
      r = this.priorities_,
      s = i[n],
      o = r[n];
    for (; n > e; ) {
      const l = this.getParentIndex_(n);
      if (r[l] > o) (i[n] = i[l]), (r[n] = r[l]), (n = l);
      else break;
    }
    (i[n] = s), (r[n] = o);
  }
  reprioritize() {
    const e = this.priorityFunction_,
      n = this.elements_,
      i = this.priorities_;
    let r = 0;
    const s = n.length;
    let o, l, a;
    for (l = 0; l < s; ++l)
      (o = n[l]),
        (a = e(o)),
        a == ua
          ? delete this.queuedElements_[this.keyFunction_(o)]
          : ((i[r] = a), (n[r++] = o));
    (n.length = r), (i.length = r), this.heapify_();
  }
}
class vx extends yx {
  constructor(e, n) {
    super(
      function (i) {
        return e.apply(null, i);
      },
      function (i) {
        return i[0].getKey();
      },
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = n),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {});
  }
  enqueue(e) {
    const n = super.enqueue(e);
    return n && e[0].addEventListener(V.CHANGE, this.boundHandleTileChange_), n;
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(e) {
    const n = e.target,
      i = n.getState();
    if (i === G.LOADED || i === G.ERROR || i === G.EMPTY) {
      i !== G.ERROR &&
        n.removeEventListener(V.CHANGE, this.boundHandleTileChange_);
      const r = n.getKey();
      r in this.tilesLoadingKeys_ &&
        (delete this.tilesLoadingKeys_[r], --this.tilesLoading_),
        this.tileChangeCallback_();
    }
  }
  loadMoreTiles(e, n) {
    let i = 0,
      r,
      s,
      o;
    for (; this.tilesLoading_ < e && i < n && this.getCount() > 0; )
      (s = this.dequeue()[0]),
        (o = s.getKey()),
        (r = s.getState()),
        r === G.IDLE &&
          !(o in this.tilesLoadingKeys_) &&
          ((this.tilesLoadingKeys_[o] = !0),
          ++this.tilesLoading_,
          ++i,
          s.load());
  }
}
function Ex(t, e, n, i, r) {
  if (!t || !(n in t.wantedTiles) || !t.wantedTiles[n][e.getKey()]) return ua;
  const s = t.viewState.center,
    o = i[0] - s[0],
    l = i[1] - s[1];
  return 65536 * Math.log(r) + Math.sqrt(o * o + l * l) / r;
}
class Id extends nn {
  constructor(e) {
    super();
    const n = e.element;
    n &&
      !e.target &&
      !n.style.pointerEvents &&
      (n.style.pointerEvents = "auto"),
      (this.element = n || null),
      (this.target_ = null),
      (this.map_ = null),
      (this.listenerKeys = []),
      e.render && (this.render = e.render),
      e.target && this.setTarget(e.target);
  }
  disposeInternal() {
    bc(this.element), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(e) {
    this.map_ && bc(this.element);
    for (let n = 0, i = this.listenerKeys.length; n < i; ++n)
      ce(this.listenerKeys[n]);
    (this.listenerKeys.length = 0),
      (this.map_ = e),
      e &&
        ((this.target_
          ? this.target_
          : e.getOverlayContainerStopEvent()
        ).appendChild(this.element),
        this.render !== Ur &&
          this.listenerKeys.push($(e, Gn.POSTRENDER, this.render, this)),
        e.render());
  }
  render(e) {}
  setTarget(e) {
    this.target_ = typeof e == "string" ? document.getElementById(e) : e;
  }
}
class wx extends Id {
  constructor(e) {
    (e = e || {}),
      super({
        element: document.createElement("div"),
        render: e.render,
        target: e.target,
      }),
      (this.ulElement_ = document.createElement("ul")),
      (this.collapsed_ = e.collapsed !== void 0 ? e.collapsed : !0),
      (this.userCollapsed_ = this.collapsed_),
      (this.overrideCollapsible_ = e.collapsible !== void 0),
      (this.collapsible_ = e.collapsible !== void 0 ? e.collapsible : !0),
      this.collapsible_ || (this.collapsed_ = !1);
    const n = e.className !== void 0 ? e.className : "ol-attribution",
      i = e.tipLabel !== void 0 ? e.tipLabel : "Attributions",
      r = e.expandClassName !== void 0 ? e.expandClassName : n + "-expand",
      s = e.collapseLabel !== void 0 ? e.collapseLabel : "›",
      o =
        e.collapseClassName !== void 0 ? e.collapseClassName : n + "-collapse";
    typeof s == "string"
      ? ((this.collapseLabel_ = document.createElement("span")),
        (this.collapseLabel_.textContent = s),
        (this.collapseLabel_.className = o))
      : (this.collapseLabel_ = s);
    const l = e.label !== void 0 ? e.label : "i";
    typeof l == "string"
      ? ((this.label_ = document.createElement("span")),
        (this.label_.textContent = l),
        (this.label_.className = r))
      : (this.label_ = l);
    const a =
      this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    (this.toggleButton_ = document.createElement("button")),
      this.toggleButton_.setAttribute("type", "button"),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      ),
      (this.toggleButton_.title = i),
      this.toggleButton_.appendChild(a),
      this.toggleButton_.addEventListener(
        V.CLICK,
        this.handleClick_.bind(this),
        !1,
      );
    const u =
        n +
        " " +
        Wa +
        " " +
        yd +
        (this.collapsed_ && this.collapsible_ ? " " + mg : "") +
        (this.collapsible_ ? "" : " ol-uncollapsible"),
      c = this.element;
    (c.className = u),
      c.appendChild(this.toggleButton_),
      c.appendChild(this.ulElement_),
      (this.renderedAttributions_ = []),
      (this.renderedVisible_ = !0);
  }
  collectSourceAttributions_(e) {
    const n = Array.from(
        new Set(
          this.getMap()
            .getAllLayers()
            .flatMap((r) => r.getAttributions(e)),
        ),
      ),
      i = !this.getMap()
        .getAllLayers()
        .some(
          (r) =>
            r.getSource() && r.getSource().getAttributionsCollapsible() === !1,
        );
    return this.overrideCollapsible_ || this.setCollapsible(i), n;
  }
  updateElement_(e) {
    if (!e) {
      this.renderedVisible_ &&
        ((this.element.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    const n = this.collectSourceAttributions_(e),
      i = n.length > 0;
    if (
      (this.renderedVisible_ != i &&
        ((this.element.style.display = i ? "" : "none"),
        (this.renderedVisible_ = i)),
      !mi(n, this.renderedAttributions_))
    ) {
      sE(this.ulElement_);
      for (let r = 0, s = n.length; r < s; ++r) {
        const o = document.createElement("li");
        (o.innerHTML = n[r]), this.ulElement_.appendChild(o);
      }
      this.renderedAttributions_ = n;
    }
  }
  handleClick_(e) {
    e.preventDefault(),
      this.handleToggle_(),
      (this.userCollapsed_ = this.collapsed_);
  }
  handleToggle_() {
    this.element.classList.toggle(mg),
      this.collapsed_
        ? pg(this.collapseLabel_, this.label_)
        : pg(this.label_, this.collapseLabel_),
      (this.collapsed_ = !this.collapsed_),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      );
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(e) {
    this.collapsible_ !== e &&
      ((this.collapsible_ = e),
      this.element.classList.toggle("ol-uncollapsible"),
      this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(e) {
    (this.userCollapsed_ = e),
      !(!this.collapsible_ || this.collapsed_ === e) && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(e) {
    this.updateElement_(e.frameState);
  }
}
const xx = wx;
class Cx extends Id {
  constructor(e) {
    (e = e || {}),
      super({
        element: document.createElement("div"),
        render: e.render,
        target: e.target,
      });
    const n = e.className !== void 0 ? e.className : "ol-rotate",
      i = e.label !== void 0 ? e.label : "⇧",
      r = e.compassClassName !== void 0 ? e.compassClassName : "ol-compass";
    (this.label_ = null),
      typeof i == "string"
        ? ((this.label_ = document.createElement("span")),
          (this.label_.className = r),
          (this.label_.textContent = i))
        : ((this.label_ = i), this.label_.classList.add(r));
    const s = e.tipLabel ? e.tipLabel : "Reset rotation",
      o = document.createElement("button");
    (o.className = n + "-reset"),
      o.setAttribute("type", "button"),
      (o.title = s),
      o.appendChild(this.label_),
      o.addEventListener(V.CLICK, this.handleClick_.bind(this), !1);
    const l = n + " " + Wa + " " + yd,
      a = this.element;
    (a.className = l),
      a.appendChild(o),
      (this.callResetNorth_ = e.resetNorth ? e.resetNorth : void 0),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250),
      (this.autoHide_ = e.autoHide !== void 0 ? e.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(nl);
  }
  handleClick_(e) {
    e.preventDefault(),
      this.callResetNorth_ !== void 0
        ? this.callResetNorth_()
        : this.resetNorth_();
  }
  resetNorth_() {
    const n = this.getMap().getView();
    if (!n) return;
    const i = n.getRotation();
    i !== void 0 &&
      (this.duration_ > 0 && i % (2 * Math.PI) !== 0
        ? n.animate({ rotation: 0, duration: this.duration_, easing: qr })
        : n.setRotation(0));
  }
  render(e) {
    const n = e.frameState;
    if (!n) return;
    const i = n.viewState.rotation;
    if (i != this.rotation_) {
      const r = "rotate(" + i + "rad)";
      if (this.autoHide_) {
        const s = this.element.classList.contains(nl);
        !s && i === 0
          ? this.element.classList.add(nl)
          : s && i !== 0 && this.element.classList.remove(nl);
      }
      this.label_.style.transform = r;
    }
    this.rotation_ = i;
  }
}
const Sx = Cx;
class Rx extends Id {
  constructor(e) {
    (e = e || {}),
      super({ element: document.createElement("div"), target: e.target });
    const n = e.className !== void 0 ? e.className : "ol-zoom",
      i = e.delta !== void 0 ? e.delta : 1,
      r = e.zoomInClassName !== void 0 ? e.zoomInClassName : n + "-in",
      s = e.zoomOutClassName !== void 0 ? e.zoomOutClassName : n + "-out",
      o = e.zoomInLabel !== void 0 ? e.zoomInLabel : "+",
      l = e.zoomOutLabel !== void 0 ? e.zoomOutLabel : "–",
      a = e.zoomInTipLabel !== void 0 ? e.zoomInTipLabel : "Zoom in",
      u = e.zoomOutTipLabel !== void 0 ? e.zoomOutTipLabel : "Zoom out",
      c = document.createElement("button");
    (c.className = r),
      c.setAttribute("type", "button"),
      (c.title = a),
      c.appendChild(typeof o == "string" ? document.createTextNode(o) : o),
      c.addEventListener(V.CLICK, this.handleClick_.bind(this, i), !1);
    const h = document.createElement("button");
    (h.className = s),
      h.setAttribute("type", "button"),
      (h.title = u),
      h.appendChild(typeof l == "string" ? document.createTextNode(l) : l),
      h.addEventListener(V.CLICK, this.handleClick_.bind(this, -i), !1);
    const d = n + " " + Wa + " " + yd,
      f = this.element;
    (f.className = d),
      f.appendChild(c),
      f.appendChild(h),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleClick_(e, n) {
    n.preventDefault(), this.zoomByDelta_(e);
  }
  zoomByDelta_(e) {
    const i = this.getMap().getView();
    if (!i) return;
    const r = i.getZoom();
    if (r !== void 0) {
      const s = i.getConstrainedZoom(r + e);
      this.duration_ > 0
        ? (i.getAnimating() && i.cancelAnimations(),
          i.animate({ zoom: s, duration: this.duration_, easing: qr }))
        : i.setZoom(s);
    }
  }
}
const Tx = Rx;
function Ix(t) {
  t = t || {};
  const e = new Ht();
  return (
    (t.zoom !== void 0 ? t.zoom : !0) && e.push(new Tx(t.zoomOptions)),
    (t.rotate !== void 0 ? t.rotate : !0) && e.push(new Sx(t.rotateOptions)),
    (t.attribution !== void 0 ? t.attribution : !0) &&
      e.push(new xx(t.attributionOptions)),
    e
  );
}
const Bg = { ACTIVE: "active" };
class Ro extends nn {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      e && e.handleEvent && (this.handleEvent = e.handleEvent),
      (this.map_ = null),
      this.setActive(!0);
  }
  getActive() {
    return this.get(Bg.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(e) {
    return !0;
  }
  setActive(e) {
    this.set(Bg.ACTIVE, e);
  }
  setMap(e) {
    this.map_ = e;
  }
}
function Lx(t, e, n) {
  const i = t.getCenterInternal();
  if (i) {
    const r = [i[0] + e[0], i[1] + e[1]];
    t.animateInternal({
      duration: n !== void 0 ? n : 250,
      easing: CE,
      center: t.getConstrainedCenter(r),
    });
  }
}
function Ld(t, e, n, i) {
  const r = t.getZoom();
  if (r === void 0) return;
  const s = t.getConstrainedZoom(r + e),
    o = t.getResolutionForZoom(s);
  t.getAnimating() && t.cancelAnimations(),
    t.animate({
      resolution: o,
      anchor: n,
      duration: i !== void 0 ? i : 250,
      easing: qr,
    });
}
class kx extends Ro {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.delta_ = e.delta ? e.delta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == _e.DBLCLICK) {
      const i = e.originalEvent,
        r = e.map,
        s = e.coordinate,
        o = i.shiftKey ? -this.delta_ : this.delta_,
        l = r.getView();
      Ld(l, o, s, this.duration_), i.preventDefault(), (n = !0);
    }
    return !n;
  }
}
const Px = kx;
class To extends Ro {
  constructor(e) {
    (e = e || {}),
      super(e),
      e.handleDownEvent && (this.handleDownEvent = e.handleDownEvent),
      e.handleDragEvent && (this.handleDragEvent = e.handleDragEvent),
      e.handleMoveEvent && (this.handleMoveEvent = e.handleMoveEvent),
      e.handleUpEvent && (this.handleUpEvent = e.handleUpEvent),
      e.stopDown && (this.stopDown = e.stopDown),
      (this.handlingDownUpSequence = !1),
      (this.targetPointers = []);
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(e) {
    return !1;
  }
  handleDragEvent(e) {}
  handleEvent(e) {
    if (!e.originalEvent) return !0;
    let n = !1;
    if ((this.updateTrackedPointers_(e), this.handlingDownUpSequence)) {
      if (e.type == _e.POINTERDRAG)
        this.handleDragEvent(e), e.originalEvent.preventDefault();
      else if (e.type == _e.POINTERUP) {
        const i = this.handleUpEvent(e);
        this.handlingDownUpSequence = i && this.targetPointers.length > 0;
      }
    } else if (e.type == _e.POINTERDOWN) {
      const i = this.handleDownEvent(e);
      (this.handlingDownUpSequence = i), (n = this.stopDown(i));
    } else e.type == _e.POINTERMOVE && this.handleMoveEvent(e);
    return !n;
  }
  handleMoveEvent(e) {}
  handleUpEvent(e) {
    return !1;
  }
  stopDown(e) {
    return e;
  }
  updateTrackedPointers_(e) {
    e.activePointers && (this.targetPointers = e.activePointers);
  }
}
function kd(t) {
  const e = t.length;
  let n = 0,
    i = 0;
  for (let r = 0; r < e; r++) (n += t[r].clientX), (i += t[r].clientY);
  return { clientX: n / e, clientY: i / e };
}
function Qc(t) {
  const e = arguments;
  return function (n) {
    let i = !0;
    for (let r = 0, s = e.length; r < s && ((i = i && e[r](n)), !!i); ++r);
    return i;
  };
}
const Mx = function (t) {
    const e = t.originalEvent;
    return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  Ax = function (t) {
    const e = t.map.getTargetElement(),
      n = t.map.getOwnerDocument().activeElement;
    return e.contains(n);
  },
  d0 = function (t) {
    return t.map.getTargetElement().hasAttribute("tabindex") ? Ax(t) : !0;
  },
  Ox = Qs,
  f0 = function (t) {
    const e = t.originalEvent;
    return e.button == 0 && !(ev && a_ && e.ctrlKey);
  },
  g0 = function (t) {
    const e = t.originalEvent;
    return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
  },
  Fx = function (t) {
    const e = t.originalEvent;
    return a_ ? e.metaKey : e.ctrlKey;
  },
  Dx = function (t) {
    const e = t.originalEvent;
    return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
  },
  p0 = function (t) {
    const e = t.originalEvent,
      n = e.target.tagName;
    return (
      n !== "INPUT" &&
      n !== "SELECT" &&
      n !== "TEXTAREA" &&
      !e.target.isContentEditable
    );
  },
  Du = function (t) {
    const e = t.originalEvent;
    return (
      Q(e !== void 0, "mapBrowserEvent must originate from a pointer event"),
      e.pointerType == "mouse"
    );
  },
  Nx = function (t) {
    const e = t.originalEvent;
    return (
      Q(e !== void 0, "mapBrowserEvent must originate from a pointer event"),
      e.isPrimary && e.button === 0
    );
  };
class zx extends To {
  constructor(e) {
    super({ stopDown: Ra }),
      (e = e || {}),
      (this.kinetic_ = e.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1);
    const n = e.condition ? e.condition : Qc(g0, Nx);
    (this.condition_ = e.onFocusOnly ? Qc(d0, n) : n), (this.noKinetic_ = !1);
  }
  handleDragEvent(e) {
    const n = e.map;
    this.panning_ || ((this.panning_ = !0), n.getView().beginInteraction());
    const i = this.targetPointers,
      r = n.getEventPixel(kd(i));
    if (i.length == this.lastPointersCount_) {
      if (
        (this.kinetic_ && this.kinetic_.update(r[0], r[1]), this.lastCentroid)
      ) {
        const s = [this.lastCentroid[0] - r[0], r[1] - this.lastCentroid[1]],
          l = e.map.getView();
        Sv(s, l.getResolution()),
          id(s, l.getRotation()),
          l.adjustCenterInternal(s);
      }
    } else this.kinetic_ && this.kinetic_.begin();
    (this.lastCentroid = r),
      (this.lastPointersCount_ = i.length),
      e.originalEvent.preventDefault();
  }
  handleUpEvent(e) {
    const n = e.map,
      i = n.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const r = this.kinetic_.getDistance(),
          s = this.kinetic_.getAngle(),
          o = i.getCenterInternal(),
          l = n.getPixelFromCoordinateInternal(o),
          a = n.getCoordinateFromPixelInternal([
            l[0] - r * Math.cos(s),
            l[1] - r * Math.sin(s),
          ]);
        i.animateInternal({
          center: i.getConstrainedCenter(a),
          duration: 500,
          easing: qr,
        });
      }
      return this.panning_ && ((this.panning_ = !1), i.endInteraction()), !1;
    }
    return (
      this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0
    );
  }
  handleDownEvent(e) {
    if (this.targetPointers.length > 0 && this.condition_(e)) {
      const i = e.map.getView();
      return (
        (this.lastCentroid = null),
        i.getAnimating() && i.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      );
    }
    return !1;
  }
}
const Gx = zx;
class Wx extends To {
  constructor(e) {
    (e = e || {}),
      super({ stopDown: Ra }),
      (this.condition_ = e.condition ? e.condition : Mx),
      (this.lastAngle_ = void 0),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleDragEvent(e) {
    if (!Du(e)) return;
    const n = e.map,
      i = n.getView();
    if (i.getConstraints().rotation === Cd) return;
    const r = n.getSize(),
      s = e.pixel,
      o = Math.atan2(r[1] / 2 - s[1], s[0] - r[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const l = o - this.lastAngle_;
      i.adjustRotationInternal(-l);
    }
    this.lastAngle_ = o;
  }
  handleUpEvent(e) {
    return Du(e) ? (e.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(e) {
    return Du(e) && f0(e) && this.condition_(e)
      ? (e.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1;
  }
}
class jx extends Hh {
  constructor(e) {
    super(),
      (this.geometry_ = null),
      (this.element_ = document.createElement("div")),
      (this.element_.style.position = "absolute"),
      (this.element_.style.pointerEvents = "auto"),
      (this.element_.className = "ol-box " + e),
      (this.map_ = null),
      (this.startPixel_ = null),
      (this.endPixel_ = null);
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    const e = this.startPixel_,
      n = this.endPixel_,
      i = "px",
      r = this.element_.style;
    (r.left = Math.min(e[0], n[0]) + i),
      (r.top = Math.min(e[1], n[1]) + i),
      (r.width = Math.abs(n[0] - e[0]) + i),
      (r.height = Math.abs(n[1] - e[1]) + i);
  }
  setMap(e) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const n = this.element_.style;
      (n.left = "inherit"),
        (n.top = "inherit"),
        (n.width = "inherit"),
        (n.height = "inherit");
    }
    (this.map_ = e),
      this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(e, n) {
    (this.startPixel_ = e),
      (this.endPixel_ = n),
      this.createOrUpdateGeometry(),
      this.render_();
  }
  createOrUpdateGeometry() {
    const e = this.startPixel_,
      n = this.endPixel_,
      r = [e, [e[0], n[1]], n, [n[0], e[1]]].map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_,
      );
    (r[4] = r[0].slice()),
      this.geometry_
        ? this.geometry_.setCoordinates([r])
        : (this.geometry_ = new hi([r]));
  }
  getGeometry() {
    return this.geometry_;
  }
}
const ll = {
  BOXSTART: "boxstart",
  BOXDRAG: "boxdrag",
  BOXEND: "boxend",
  BOXCANCEL: "boxcancel",
};
class Nu extends Ln {
  constructor(e, n, i) {
    super(e), (this.coordinate = n), (this.mapBrowserEvent = i);
  }
}
class Xx extends To {
  constructor(e) {
    super(),
      this.on,
      this.once,
      this.un,
      (e = e || {}),
      (this.box_ = new jx(e.className || "ol-dragbox")),
      (this.minArea_ = e.minArea !== void 0 ? e.minArea : 64),
      e.onBoxEnd && (this.onBoxEnd = e.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = e.condition ? e.condition : f0),
      (this.boxEndCondition_ = e.boxEndCondition
        ? e.boxEndCondition
        : this.defaultBoxEndCondition);
  }
  defaultBoxEndCondition(e, n, i) {
    const r = i[0] - n[0],
      s = i[1] - n[1];
    return r * r + s * s >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(e) {
    this.box_.setPixels(this.startPixel_, e.pixel),
      this.dispatchEvent(new Nu(ll.BOXDRAG, e.coordinate, e));
  }
  handleUpEvent(e) {
    this.box_.setMap(null);
    const n = this.boxEndCondition_(e, this.startPixel_, e.pixel);
    return (
      n && this.onBoxEnd(e),
      this.dispatchEvent(new Nu(n ? ll.BOXEND : ll.BOXCANCEL, e.coordinate, e)),
      !1
    );
  }
  handleDownEvent(e) {
    return this.condition_(e)
      ? ((this.startPixel_ = e.pixel),
        this.box_.setMap(e.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new Nu(ll.BOXSTART, e.coordinate, e)),
        !0)
      : !1;
  }
  onBoxEnd(e) {}
}
class Ux extends Xx {
  constructor(e) {
    e = e || {};
    const n = e.condition ? e.condition : Dx;
    super({
      condition: n,
      className: e.className || "ol-dragzoom",
      minArea: e.minArea,
    }),
      (this.duration_ = e.duration !== void 0 ? e.duration : 200),
      (this.out_ = e.out !== void 0 ? e.out : !1);
  }
  onBoxEnd(e) {
    const i = this.getMap().getView();
    let r = this.getGeometry();
    if (this.out_) {
      const s = i.rotatedExtentForGeometry(r),
        o = i.getResolutionForExtentInternal(s),
        l = i.getResolution() / o;
      (r = r.clone()), r.scale(l * l);
    }
    i.fitInternal(r, { duration: this.duration_, easing: qr });
  }
}
const Yx = Ux,
  wi = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    DOWN: "ArrowDown",
  };
class Bx extends Ro {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.defaultCondition_ = function (n) {
        return g0(n) && p0(n);
      }),
      (this.condition_ =
        e.condition !== void 0 ? e.condition : this.defaultCondition_),
      (this.duration_ = e.duration !== void 0 ? e.duration : 100),
      (this.pixelDelta_ = e.pixelDelta !== void 0 ? e.pixelDelta : 128);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == V.KEYDOWN) {
      const i = e.originalEvent,
        r = i.key;
      if (
        this.condition_(e) &&
        (r == wi.DOWN || r == wi.LEFT || r == wi.RIGHT || r == wi.UP)
      ) {
        const o = e.map.getView(),
          l = o.getResolution() * this.pixelDelta_;
        let a = 0,
          u = 0;
        r == wi.DOWN
          ? (u = -l)
          : r == wi.LEFT
            ? (a = -l)
            : r == wi.RIGHT
              ? (a = l)
              : (u = l);
        const c = [a, u];
        id(c, o.getRotation()),
          Lx(o, c, this.duration_),
          i.preventDefault(),
          (n = !0);
      }
    }
    return !n;
  }
}
class Vx extends Ro {
  constructor(e) {
    super(),
      (e = e || {}),
      (this.condition_ = e.condition
        ? e.condition
        : function (n) {
            return !Fx(n) && p0(n);
          }),
      (this.delta_ = e.delta ? e.delta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 100);
  }
  handleEvent(e) {
    let n = !1;
    if (e.type == V.KEYDOWN || e.type == V.KEYPRESS) {
      const i = e.originalEvent,
        r = i.key;
      if (this.condition_(e) && (r === "+" || r === "-")) {
        const s = e.map,
          o = r === "+" ? this.delta_ : -this.delta_,
          l = s.getView();
        Ld(l, o, void 0, this.duration_), i.preventDefault(), (n = !0);
      }
    }
    return !n;
  }
}
const bx = Vx;
class Kx extends Ro {
  constructor(e) {
    (e = e || {}),
      super(e),
      (this.totalDelta_ = 0),
      (this.lastDelta_ = 0),
      (this.maxDelta_ = e.maxDelta !== void 0 ? e.maxDelta : 1),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250),
      (this.timeout_ = e.timeout !== void 0 ? e.timeout : 80),
      (this.useAnchor_ = e.useAnchor !== void 0 ? e.useAnchor : !0),
      (this.constrainResolution_ =
        e.constrainResolution !== void 0 ? e.constrainResolution : !1);
    const n = e.condition ? e.condition : Ox;
    (this.condition_ = e.onFocusOnly ? Qc(d0, n) : n),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      this.timeoutId_,
      (this.mode_ = void 0),
      (this.trackpadEventGap_ = 400),
      this.trackpadTimeoutId_,
      (this.deltaPerZoom_ = 300);
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const e = this.getMap();
    if (!e) return;
    e.getView().endInteraction(
      void 0,
      this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
      this.lastAnchor_,
    );
  }
  handleEvent(e) {
    if (!this.condition_(e) || e.type !== V.WHEEL) return !0;
    const i = e.map,
      r = e.originalEvent;
    r.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = e.coordinate);
    let s;
    if (
      (e.type == V.WHEEL &&
        ((s = r.deltaY),
        Q1 && r.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (s /= u_),
        r.deltaMode === WheelEvent.DOM_DELTA_LINE && (s *= 40)),
      s === 0)
    )
      return !1;
    this.lastDelta_ = s;
    const o = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = o),
      (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(s) < 4 ? "trackpad" : "wheel");
    const l = i.getView();
    if (
      this.mode_ === "trackpad" &&
      !(l.getConstrainResolution() || this.constrainResolution_)
    )
      return (
        this.trackpadTimeoutId_
          ? clearTimeout(this.trackpadTimeoutId_)
          : (l.getAnimating() && l.cancelAnimations(), l.beginInteraction()),
        (this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_,
        )),
        l.adjustZoom(-s / this.deltaPerZoom_, this.lastAnchor_),
        (this.startTime_ = o),
        !1
      );
    this.totalDelta_ += s;
    const a = Math.max(this.timeout_ - (o - this.startTime_), 0);
    return (
      clearTimeout(this.timeoutId_),
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, i), a)),
      !1
    );
  }
  handleWheelZoom_(e) {
    const n = e.getView();
    n.getAnimating() && n.cancelAnimations();
    let i =
      -Se(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_,
      ) / this.deltaPerZoom_;
    (n.getConstrainResolution() || this.constrainResolution_) &&
      (i = i ? (i > 0 ? 1 : -1) : 0),
      Ld(n, i, this.lastAnchor_, this.duration_),
      (this.mode_ = void 0),
      (this.totalDelta_ = 0),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      (this.timeoutId_ = void 0);
  }
  setMouseAnchor(e) {
    (this.useAnchor_ = e), e || (this.lastAnchor_ = null);
  }
}
const Zx = Kx;
class Hx extends To {
  constructor(e) {
    e = e || {};
    const n = e;
    n.stopDown || (n.stopDown = Ra),
      super(n),
      (this.anchor_ = null),
      (this.lastAngle_ = void 0),
      (this.rotating_ = !1),
      (this.rotationDelta_ = 0),
      (this.threshold_ = e.threshold !== void 0 ? e.threshold : 0.3),
      (this.duration_ = e.duration !== void 0 ? e.duration : 250);
  }
  handleDragEvent(e) {
    let n = 0;
    const i = this.targetPointers[0],
      r = this.targetPointers[1],
      s = Math.atan2(r.clientY - i.clientY, r.clientX - i.clientX);
    if (this.lastAngle_ !== void 0) {
      const a = s - this.lastAngle_;
      (this.rotationDelta_ += a),
        !this.rotating_ &&
          Math.abs(this.rotationDelta_) > this.threshold_ &&
          (this.rotating_ = !0),
        (n = a);
    }
    this.lastAngle_ = s;
    const o = e.map,
      l = o.getView();
    l.getConstraints().rotation !== Cd &&
      ((this.anchor_ = o.getCoordinateFromPixelInternal(
        o.getEventPixel(kd(this.targetPointers)),
      )),
      this.rotating_ &&
        (o.render(), l.adjustRotationInternal(n, this.anchor_)));
  }
  handleUpEvent(e) {
    return this.targetPointers.length < 2
      ? (e.map.getView().endInteraction(this.duration_), !1)
      : !0;
  }
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const n = e.map;
      return (
        (this.anchor_ = null),
        (this.lastAngle_ = void 0),
        (this.rotating_ = !1),
        (this.rotationDelta_ = 0),
        this.handlingDownUpSequence || n.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
class $x extends To {
  constructor(e) {
    e = e || {};
    const n = e;
    n.stopDown || (n.stopDown = Ra),
      super(n),
      (this.anchor_ = null),
      (this.duration_ = e.duration !== void 0 ? e.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1);
  }
  handleDragEvent(e) {
    let n = 1;
    const i = this.targetPointers[0],
      r = this.targetPointers[1],
      s = i.clientX - r.clientX,
      o = i.clientY - r.clientY,
      l = Math.sqrt(s * s + o * o);
    this.lastDistance_ !== void 0 && (n = this.lastDistance_ / l),
      (this.lastDistance_ = l);
    const a = e.map,
      u = a.getView();
    n != 1 && (this.lastScaleDelta_ = n),
      (this.anchor_ = a.getCoordinateFromPixelInternal(
        a.getEventPixel(kd(this.targetPointers)),
      )),
      a.render(),
      u.adjustResolutionInternal(n, this.anchor_);
  }
  handleUpEvent(e) {
    if (this.targetPointers.length < 2) {
      const i = e.map.getView(),
        r = this.lastScaleDelta_ > 1 ? 1 : -1;
      return i.endInteraction(this.duration_, r), !1;
    }
    return !0;
  }
  handleDownEvent(e) {
    if (this.targetPointers.length >= 2) {
      const n = e.map;
      return (
        (this.anchor_ = null),
        (this.lastDistance_ = void 0),
        (this.lastScaleDelta_ = 1),
        this.handlingDownUpSequence || n.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
const qx = $x;
function Qx(t) {
  t = t || {};
  const e = new Ht(),
    n = new fx(-0.005, 0.05, 100);
  return (
    (t.altShiftDragRotate !== void 0 ? t.altShiftDragRotate : !0) &&
      e.push(new Wx()),
    (t.doubleClickZoom !== void 0 ? t.doubleClickZoom : !0) &&
      e.push(new Px({ delta: t.zoomDelta, duration: t.zoomDuration })),
    (t.dragPan !== void 0 ? t.dragPan : !0) &&
      e.push(new Gx({ onFocusOnly: t.onFocusOnly, kinetic: n })),
    (t.pinchRotate !== void 0 ? t.pinchRotate : !0) && e.push(new Hx()),
    (t.pinchZoom !== void 0 ? t.pinchZoom : !0) &&
      e.push(new qx({ duration: t.zoomDuration })),
    (t.keyboard !== void 0 ? t.keyboard : !0) &&
      (e.push(new Bx()),
      e.push(new bx({ delta: t.zoomDelta, duration: t.zoomDuration }))),
    (t.mouseWheelZoom !== void 0 ? t.mouseWheelZoom : !0) &&
      e.push(new Zx({ onFocusOnly: t.onFocusOnly, duration: t.zoomDuration })),
    (t.shiftDragZoom !== void 0 ? t.shiftDragZoom : !0) &&
      e.push(new Yx({ duration: t.zoomDuration })),
    e
  );
}
function m0(t) {
  if (t instanceof Ya) {
    t.setMapInternal(null);
    return;
  }
  t instanceof es && t.getLayers().forEach(m0);
}
function _0(t, e) {
  if (t instanceof Ya) {
    t.setMapInternal(e);
    return;
  }
  if (t instanceof es) {
    const n = t.getLayers().getArray();
    for (let i = 0, r = n.length; i < r; ++i) _0(n[i], e);
  }
}
let Jx = class extends nn {
  constructor(e) {
    super(), (e = e || {}), this.on, this.once, this.un;
    const n = eC(e);
    this.renderComplete_,
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ =
        e.maxTilesLoading !== void 0 ? e.maxTilesLoading : 16),
      (this.pixelRatio_ = e.pixelRatio !== void 0 ? e.pixelRatio : u_),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Ut()),
      (this.pixelToCoordinateTransform_ = Ut()),
      (this.frameIndex_ = 0),
      (this.frameState_ = null),
      (this.previousExtent_ = null),
      (this.viewPropertyListenerKey_ = null),
      (this.viewChangeListenerKey_ = null),
      (this.layerGroupPropertyListenerKeys_ = null),
      (this.viewport_ = document.createElement("div")),
      (this.viewport_.className =
        "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "")),
      (this.viewport_.style.position = "relative"),
      (this.viewport_.style.overflow = "hidden"),
      (this.viewport_.style.width = "100%"),
      (this.viewport_.style.height = "100%"),
      (this.overlayContainer_ = document.createElement("div")),
      (this.overlayContainer_.style.position = "absolute"),
      (this.overlayContainer_.style.zIndex = "0"),
      (this.overlayContainer_.style.width = "100%"),
      (this.overlayContainer_.style.height = "100%"),
      (this.overlayContainer_.style.pointerEvents = "none"),
      (this.overlayContainer_.className = "ol-overlaycontainer"),
      this.viewport_.appendChild(this.overlayContainer_),
      (this.overlayContainerStopEvent_ = document.createElement("div")),
      (this.overlayContainerStopEvent_.style.position = "absolute"),
      (this.overlayContainerStopEvent_.style.zIndex = "0"),
      (this.overlayContainerStopEvent_.style.width = "100%"),
      (this.overlayContainerStopEvent_.style.height = "100%"),
      (this.overlayContainerStopEvent_.style.pointerEvents = "none"),
      (this.overlayContainerStopEvent_.className =
        "ol-overlaycontainer-stopevent"),
      this.viewport_.appendChild(this.overlayContainerStopEvent_),
      (this.mapBrowserEventHandler_ = null),
      (this.moveTolerance_ = e.moveTolerance),
      (this.keyboardEventTarget_ = n.keyboardEventTarget),
      (this.targetChangeHandlerKeys_ = null),
      (this.targetElement_ = null),
      (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
      (this.controls = n.controls || Ix()),
      (this.interactions = n.interactions || Qx({ onFocusOnly: !0 })),
      (this.overlays_ = n.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new vx(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this),
      )),
      this.addChangeListener(Ge.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(Ge.VIEW, this.handleViewChanged_),
      this.addChangeListener(Ge.SIZE, this.handleSizeChanged_),
      this.addChangeListener(Ge.TARGET, this.handleTargetChanged_),
      this.setProperties(n.values);
    const i = this;
    e.view &&
      !(e.view instanceof Kt) &&
      e.view.then(function (r) {
        i.setView(new Kt(r));
      }),
      this.controls.addEventListener(tt.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.controls.addEventListener(tt.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.interactions.addEventListener(tt.ADD, (r) => {
        r.element.setMap(this);
      }),
      this.interactions.addEventListener(tt.REMOVE, (r) => {
        r.element.setMap(null);
      }),
      this.overlays_.addEventListener(tt.ADD, (r) => {
        this.addOverlayInternal_(r.element);
      }),
      this.overlays_.addEventListener(tt.REMOVE, (r) => {
        const s = r.element.getId();
        s !== void 0 && delete this.overlayIdIndex_[s.toString()],
          r.element.setMap(null);
      }),
      this.controls.forEach((r) => {
        r.setMap(this);
      }),
      this.interactions.forEach((r) => {
        r.setMap(this);
      }),
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(e) {
    this.getControls().push(e);
  }
  addInteraction(e) {
    this.getInteractions().push(e);
  }
  addLayer(e) {
    this.getLayerGroup().getLayers().push(e);
  }
  handleLayerAdd_(e) {
    _0(e.layer, this);
  }
  addOverlay(e) {
    this.getOverlays().push(e);
  }
  addOverlayInternal_(e) {
    const n = e.getId();
    n !== void 0 && (this.overlayIdIndex_[n.toString()] = e), e.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(),
      this.interactions.clear(),
      this.overlays_.clear(),
      this.resizeObserver_.disconnect(),
      this.setTarget(null),
      super.disposeInternal();
  }
  forEachFeatureAtPixel(e, n, i) {
    if (!this.frameState_ || !this.renderer_) return;
    const r = this.getCoordinateFromPixelInternal(e);
    i = i !== void 0 ? i : {};
    const s = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      o = i.layerFilter !== void 0 ? i.layerFilter : Qs,
      l = i.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      r,
      this.frameState_,
      s,
      l,
      n,
      null,
      o,
      null,
    );
  }
  getFeaturesAtPixel(e, n) {
    const i = [];
    return (
      this.forEachFeatureAtPixel(
        e,
        function (r) {
          i.push(r);
        },
        n,
      ),
      i
    );
  }
  getAllLayers() {
    const e = [];
    function n(i) {
      i.forEach(function (r) {
        r instanceof es ? n(r.getLayers()) : e.push(r);
      });
    }
    return n(this.getLayers()), e;
  }
  hasFeatureAtPixel(e, n) {
    if (!this.frameState_ || !this.renderer_) return !1;
    const i = this.getCoordinateFromPixelInternal(e);
    n = n !== void 0 ? n : {};
    const r = n.layerFilter !== void 0 ? n.layerFilter : Qs,
      s = n.hitTolerance !== void 0 ? n.hitTolerance : 0,
      o = n.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      i,
      this.frameState_,
      s,
      o,
      r,
      null,
    );
  }
  getEventCoordinate(e) {
    return this.getCoordinateFromPixel(this.getEventPixel(e));
  }
  getEventCoordinateInternal(e) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(e));
  }
  getEventPixel(e) {
    const i = this.viewport_.getBoundingClientRect(),
      r = this.getSize(),
      s = i.width / r[0],
      o = i.height / r[1],
      l = "changedTouches" in e ? e.changedTouches[0] : e;
    return [(l.clientX - i.left) / s, (l.clientY - i.top) / o];
  }
  getTarget() {
    return this.get(Ge.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(e) {
    return jc(
      this.getCoordinateFromPixelInternal(e),
      this.getView().getProjection(),
    );
  }
  getCoordinateFromPixelInternal(e) {
    const n = this.frameState_;
    return n ? ke(n.pixelToCoordinateTransform, e.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(e) {
    const n = this.overlayIdIndex_[e.toString()];
    return n !== void 0 ? n : null;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(Ge.LAYERGROUP);
  }
  setLayers(e) {
    const n = this.getLayerGroup();
    if (e instanceof Ht) {
      n.setLayers(e);
      return;
    }
    const i = n.getLayers();
    i.clear(), i.extend(e);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let n = 0, i = e.length; n < i; ++n) {
      const r = e[n];
      if (!r.visible) continue;
      const s = r.layer.getRenderer();
      if (s && !s.ready) return !0;
      const o = r.layer.getSource();
      if (o && o.loading) return !0;
    }
    return !1;
  }
  getPixelFromCoordinate(e) {
    const n = hn(e, this.getView().getProjection());
    return this.getPixelFromCoordinateInternal(n);
  }
  getPixelFromCoordinateInternal(e) {
    const n = this.frameState_;
    return n ? ke(n.coordinateToPixelTransform, e.slice(0, 2)) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(Ge.SIZE);
  }
  getView() {
    return this.get(Ge.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    const e = this.getTargetElement();
    return e ? e.ownerDocument : document;
  }
  getTilePriority(e, n, i, r) {
    return Ex(this.frameState_, e, n, i, r);
  }
  handleBrowserEvent(e, n) {
    n = n || e.type;
    const i = new zn(n, this, e);
    this.handleMapBrowserEvent(i);
  }
  handleMapBrowserEvent(e) {
    if (!this.frameState_) return;
    const n = e.originalEvent,
      i = n.type;
    if (i === qc.POINTERDOWN || i === V.WHEEL || i === V.KEYDOWN) {
      const r = this.getOwnerDocument(),
        s = this.viewport_.getRootNode ? this.viewport_.getRootNode() : r,
        o = n.target;
      if (
        this.overlayContainerStopEvent_.contains(o) ||
        !(s === r ? r.documentElement : s).contains(o)
      )
        return;
    }
    if (((e.frameState = this.frameState_), this.dispatchEvent(e) !== !1)) {
      const r = this.getInteractions().getArray().slice();
      for (let s = r.length - 1; s >= 0; s--) {
        const o = r[s];
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
          continue;
        if (!o.handleEvent(e) || e.propagationStopped) break;
      }
    }
  }
  handlePostRender() {
    const e = this.frameState_,
      n = this.tileQueue_;
    if (!n.isEmpty()) {
      let r = this.maxTilesLoading_,
        s = r;
      if (e) {
        const o = e.viewHints;
        if (o[We.ANIMATING] || o[We.INTERACTING]) {
          const l = Date.now() - e.time > 8;
          (r = l ? 0 : 8), (s = l ? 0 : 2);
        }
      }
      n.getTilesLoading() < r && (n.reprioritize(), n.loadMoreTiles(r, s));
    }
    e &&
      this.renderer_ &&
      !e.animate &&
      (this.renderComplete_ === !0
        ? (this.hasListener(en.RENDERCOMPLETE) &&
            this.renderer_.dispatchRenderEvent(en.RENDERCOMPLETE, e),
          this.loaded_ === !1 &&
            ((this.loaded_ = !0),
            this.dispatchEvent(new ur(Gn.LOADEND, this, e))))
        : this.loaded_ === !0 &&
          ((this.loaded_ = !1),
          this.dispatchEvent(new ur(Gn.LOADSTART, this, e))));
    const i = this.postRenderFunctions_;
    for (let r = 0, s = i.length; r < s; ++r) i[r](this, e);
    i.length = 0;
  }
  handleSizeChanged_() {
    this.getView() &&
      !this.getView().getAnimating() &&
      this.getView().resolveConstraints(0),
      this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, r = this.targetChangeHandlerKeys_.length; i < r; ++i)
        ce(this.targetChangeHandlerKeys_[i]);
      (this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(
          V.CONTEXTMENU,
          this.boundHandleBrowserEvent_,
        ),
        this.viewport_.removeEventListener(
          V.WHEEL,
          this.boundHandleBrowserEvent_,
        ),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        bc(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const i = this.targetElement_.getRootNode();
      i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host),
        this.setSize(void 0);
    }
    const e = this.getTarget(),
      n = typeof e == "string" ? document.getElementById(e) : e;
    if (((this.targetElement_ = n), !n))
      this.renderer_ &&
        (clearTimeout(this.postRenderTimeoutHandle_),
        (this.postRenderTimeoutHandle_ = void 0),
        (this.postRenderFunctions_.length = 0),
        this.renderer_.dispose(),
        (this.renderer_ = null)),
        this.animationDelayKey_ &&
          (cancelAnimationFrame(this.animationDelayKey_),
          (this.animationDelayKey_ = void 0));
    else {
      n.appendChild(this.viewport_),
        this.renderer_ || (this.renderer_ = new mx(this)),
        (this.mapBrowserEventHandler_ = new _x(this, this.moveTolerance_));
      for (const s in _e)
        this.mapBrowserEventHandler_.addEventListener(
          _e[s],
          this.handleMapBrowserEvent.bind(this),
        );
      this.viewport_.addEventListener(
        V.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1,
      ),
        this.viewport_.addEventListener(
          V.WHEEL,
          this.boundHandleBrowserEvent_,
          h_ ? { passive: !1 } : !1,
        );
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : n;
      this.targetChangeHandlerKeys_ = [
        $(i, V.KEYDOWN, this.handleBrowserEvent, this),
        $(i, V.KEYPRESS, this.handleBrowserEvent, this),
      ];
      const r = n.getRootNode();
      r instanceof ShadowRoot && this.resizeObserver_.observe(r.host),
        this.resizeObserver_.observe(n);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ &&
      (ce(this.viewPropertyListenerKey_),
      (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ &&
        (ce(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null));
    const e = this.getView();
    e &&
      (this.updateViewportSize_(this.getSize()),
      (this.viewPropertyListenerKey_ = $(
        e,
        Xr.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      (this.viewChangeListenerKey_ = $(
        e,
        V.CHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      e.resolveConstraints(0)),
      this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(ce),
      (this.layerGroupPropertyListenerKeys_ = null));
    const e = this.getLayerGroup();
    e &&
      (this.handleLayerAdd_(new Un("addlayer", e)),
      (this.layerGroupPropertyListenerKeys_ = [
        $(e, Xr.PROPERTYCHANGE, this.render, this),
        $(e, V.CHANGE, this.render, this),
        $(e, "addlayer", this.handleLayerAdd_, this),
        $(e, "removelayer", this.handleLayerRemove_, this),
      ])),
      this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    (this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_),
      this.animationDelay_();
  }
  redrawText() {
    const e = this.getLayerGroup().getLayerStatesArray();
    for (let n = 0, i = e.length; n < i; ++n) {
      const r = e[n].layer;
      r.hasRenderer() && r.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ &&
      this.animationDelayKey_ === void 0 &&
      (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  flushDeclutterItems() {
    const e = this.frameState_;
    e && this.renderer_.flushDeclutterItems(e);
  }
  removeControl(e) {
    return this.getControls().remove(e);
  }
  removeInteraction(e) {
    return this.getInteractions().remove(e);
  }
  removeLayer(e) {
    return this.getLayerGroup().getLayers().remove(e);
  }
  handleLayerRemove_(e) {
    m0(e.layer);
  }
  removeOverlay(e) {
    return this.getOverlays().remove(e);
  }
  renderFrame_(e) {
    const n = this.getSize(),
      i = this.getView(),
      r = this.frameState_;
    let s = null;
    if (n !== void 0 && hg(n) && i && i.isDef()) {
      const o = i.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0,
        ),
        l = i.getState();
      if (
        ((s = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutterTree: null,
          extent: Nc(l.center, l.resolution, l.rotation, n),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: n,
          tileQueue: this.tileQueue_,
          time: e,
          usedTiles: {},
          viewState: l,
          viewHints: o,
          wantedTiles: {},
          mapId: ee(this),
          renderTargets: {},
        }),
        l.nextCenter && l.nextResolution)
      ) {
        const a = isNaN(l.nextRotation) ? l.rotation : l.nextRotation;
        s.nextExtent = Nc(l.nextCenter, l.nextResolution, a, n);
      }
    }
    (this.frameState_ = s),
      this.renderer_.renderFrame(s),
      s &&
        (s.animate && this.render(),
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          s.postRenderFunctions,
        ),
        r &&
          (!this.previousExtent_ ||
            (!vo(this.previousExtent_) &&
              !Js(s.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new ur(Gn.MOVESTART, this, r)),
          (this.previousExtent_ = $r(this.previousExtent_))),
        this.previousExtent_ &&
          !s.viewHints[We.ANIMATING] &&
          !s.viewHints[We.INTERACTING] &&
          !Js(s.extent, this.previousExtent_) &&
          (this.dispatchEvent(new ur(Gn.MOVEEND, this, s)),
          f_(s.extent, this.previousExtent_))),
      this.dispatchEvent(new ur(Gn.POSTRENDER, this, s)),
      (this.renderComplete_ =
        this.hasListener(Gn.LOADSTART) ||
        this.hasListener(Gn.LOADEND) ||
        this.hasListener(en.RENDERCOMPLETE)
          ? !this.tileQueue_.getTilesLoading() &&
            !this.tileQueue_.getCount() &&
            !this.getLoadingOrNotReady()
          : void 0),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          (this.postRenderTimeoutHandle_ = void 0), this.handlePostRender();
        }, 0));
  }
  setLayerGroup(e) {
    const n = this.getLayerGroup();
    n && this.handleLayerRemove_(new Un("removelayer", n)),
      this.set(Ge.LAYERGROUP, e);
  }
  setSize(e) {
    this.set(Ge.SIZE, e);
  }
  setTarget(e) {
    this.set(Ge.TARGET, e);
  }
  setView(e) {
    if (!e || e instanceof Kt) {
      this.set(Ge.VIEW, e);
      return;
    }
    this.set(Ge.VIEW, new Kt());
    const n = this;
    e.then(function (i) {
      n.setView(new Kt(i));
    });
  }
  updateSize() {
    const e = this.getTargetElement();
    let n;
    if (e) {
      const r = getComputedStyle(e),
        s =
          e.offsetWidth -
          parseFloat(r.borderLeftWidth) -
          parseFloat(r.paddingLeft) -
          parseFloat(r.paddingRight) -
          parseFloat(r.borderRightWidth),
        o =
          e.offsetHeight -
          parseFloat(r.borderTopWidth) -
          parseFloat(r.paddingTop) -
          parseFloat(r.paddingBottom) -
          parseFloat(r.borderBottomWidth);
      !isNaN(s) &&
        !isNaN(o) &&
        ((n = [s, o]),
        !hg(n) &&
          (e.offsetWidth || e.offsetHeight || e.getClientRects().length) &&
          w_(
            "No map visible because the map container's width or height are 0.",
          ));
    }
    const i = this.getSize();
    n && (!i || !mi(n, i)) && (this.setSize(n), this.updateViewportSize_(n));
  }
  updateViewportSize_(e) {
    const n = this.getView();
    n && n.setViewportSize(e);
  }
};
function eC(t) {
  let e = null;
  t.keyboardEventTarget !== void 0 &&
    (e =
      typeof t.keyboardEventTarget == "string"
        ? document.getElementById(t.keyboardEventTarget)
        : t.keyboardEventTarget);
  const n = {},
    i =
      t.layers && typeof t.layers.getLayers == "function"
        ? t.layers
        : new es({ layers: t.layers });
  (n[Ge.LAYERGROUP] = i),
    (n[Ge.TARGET] = t.target),
    (n[Ge.VIEW] = t.view instanceof Kt ? t.view : new Kt());
  let r;
  t.controls !== void 0 &&
    (Array.isArray(t.controls)
      ? (r = new Ht(t.controls.slice()))
      : (Q(
          typeof t.controls.getArray == "function",
          "Expected `controls` to be an array or an `ol/Collection.js`",
        ),
        (r = t.controls)));
  let s;
  t.interactions !== void 0 &&
    (Array.isArray(t.interactions)
      ? (s = new Ht(t.interactions.slice()))
      : (Q(
          typeof t.interactions.getArray == "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`",
        ),
        (s = t.interactions)));
  let o;
  return (
    t.overlays !== void 0
      ? Array.isArray(t.overlays)
        ? (o = new Ht(t.overlays.slice()))
        : (Q(
            typeof t.overlays.getArray == "function",
            "Expected `overlays` to be an array or an `ol/Collection.js`",
          ),
          (o = t.overlays))
      : (o = new Ht()),
    {
      controls: r,
      interactions: s,
      keyboardEventTarget: e,
      overlays: o,
      values: n,
    }
  );
}
const tC = Jx;
class nC {
  constructor(e) {
    (this.highWaterMark = e !== void 0 ? e : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(e) {
    for (; this.canExpireCache(); ) this.pop();
  }
  clear() {
    (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  containsKey(e) {
    return this.entries_.hasOwnProperty(e);
  }
  forEach(e) {
    let n = this.oldest_;
    for (; n; ) e(n.value_, n.key_, this), (n = n.newer);
  }
  get(e, n) {
    const i = this.entries_[e];
    return (
      Q(
        i !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      i === this.newest_ ||
        (i === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((i.newer.older = i.older), (i.older.newer = i.newer)),
        (i.newer = null),
        (i.older = this.newest_),
        (this.newest_.newer = i),
        (this.newest_ = i)),
      i.value_
    );
  }
  remove(e) {
    const n = this.entries_[e];
    return (
      Q(
        n !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      n === this.newest_
        ? ((this.newest_ = n.older),
          this.newest_ && (this.newest_.newer = null))
        : n === this.oldest_
          ? ((this.oldest_ = n.newer),
            this.oldest_ && (this.oldest_.older = null))
          : ((n.newer.older = n.older), (n.older.newer = n.newer)),
      delete this.entries_[e],
      --this.count_,
      n.value_
    );
  }
  getCount() {
    return this.count_;
  }
  getKeys() {
    const e = new Array(this.count_);
    let n = 0,
      i;
    for (i = this.newest_; i; i = i.older) e[n++] = i.key_;
    return e;
  }
  getValues() {
    const e = new Array(this.count_);
    let n = 0,
      i;
    for (i = this.newest_; i; i = i.older) e[n++] = i.value_;
    return e;
  }
  peekLast() {
    return this.oldest_.value_;
  }
  peekLastKey() {
    return this.oldest_.key_;
  }
  peekFirstKey() {
    return this.newest_.key_;
  }
  peek(e) {
    var n;
    return (n = this.entries_[e]) == null ? void 0 : n.value_;
  }
  pop() {
    const e = this.oldest_;
    return (
      delete this.entries_[e.key_],
      e.newer && (e.newer.older = null),
      (this.oldest_ = e.newer),
      this.oldest_ || (this.newest_ = null),
      --this.count_,
      e.value_
    );
  }
  replace(e, n) {
    this.get(e), (this.entries_[e].value_ = n);
  }
  set(e, n) {
    Q(
      !(e in this.entries_),
      "Tried to set a value for a key that is used already",
    );
    const i = { key_: e, newer: null, older: this.newest_, value_: n };
    this.newest_ ? (this.newest_.newer = i) : (this.oldest_ = i),
      (this.newest_ = i),
      (this.entries_[e] = i),
      ++this.count_;
  }
  setSize(e) {
    this.highWaterMark = e;
  }
}
function Vg(t, e, n, i) {
  return i !== void 0 ? ((i[0] = t), (i[1] = e), (i[2] = n), i) : [t, e, n];
}
function Ka(t, e, n) {
  return t + "/" + e + "/" + n;
}
function y0(t) {
  return Ka(t[0], t[1], t[2]);
}
function iC(t) {
  return t.split("/").map(Number);
}
function rC(t) {
  return (t[1] << t[0]) + t[2];
}
function sC(t, e) {
  const n = t[0],
    i = t[1],
    r = t[2];
  if (e.getMinZoom() > n || n > e.getMaxZoom()) return !1;
  const s = e.getFullTileRange(n);
  return s ? s.containsXY(i, r) : !0;
}
class v0 extends nC {
  clear() {
    for (; this.getCount() > 0; ) this.pop().release();
    super.clear();
  }
  expireCache(e) {
    for (; this.canExpireCache() && !(this.peekLast().getKey() in e); )
      this.pop().release();
  }
  pruneExceptNewestZ() {
    if (this.getCount() === 0) return;
    const e = this.peekFirstKey(),
      i = iC(e)[0];
    this.forEach((r) => {
      r.tileCoord[0] !== i && (this.remove(y0(r.tileCoord)), r.release());
    });
  }
}
class Pd {
  constructor(e, n, i, r) {
    (this.minX = e), (this.maxX = n), (this.minY = i), (this.maxY = r);
  }
  contains(e) {
    return this.containsXY(e[1], e[2]);
  }
  containsTileRange(e) {
    return (
      this.minX <= e.minX &&
      e.maxX <= this.maxX &&
      this.minY <= e.minY &&
      e.maxY <= this.maxY
    );
  }
  containsXY(e, n) {
    return this.minX <= e && e <= this.maxX && this.minY <= n && n <= this.maxY;
  }
  equals(e) {
    return (
      this.minX == e.minX &&
      this.minY == e.minY &&
      this.maxX == e.maxX &&
      this.maxY == e.maxY
    );
  }
  extend(e) {
    e.minX < this.minX && (this.minX = e.minX),
      e.maxX > this.maxX && (this.maxX = e.maxX),
      e.minY < this.minY && (this.minY = e.minY),
      e.maxY > this.maxY && (this.maxY = e.maxY);
  }
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  intersects(e) {
    return (
      this.minX <= e.maxX &&
      this.maxX >= e.minX &&
      this.minY <= e.maxY &&
      this.maxY >= e.minY
    );
  }
}
function rr(t, e, n, i, r) {
  return r !== void 0
    ? ((r.minX = t), (r.maxX = e), (r.minY = n), (r.maxY = i), r)
    : new Pd(t, e, n, i);
}
const al = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError",
};
class oC extends Ya {
  constructor(e) {
    e = e || {};
    const n = Object.assign({}, e);
    delete n.preload,
      delete n.useInterimTilesOnError,
      super(n),
      this.on,
      this.once,
      this.un,
      this.setPreload(e.preload !== void 0 ? e.preload : 0),
      this.setUseInterimTilesOnError(
        e.useInterimTilesOnError !== void 0 ? e.useInterimTilesOnError : !0,
      );
  }
  getPreload() {
    return this.get(al.PRELOAD);
  }
  setPreload(e) {
    this.set(al.PRELOAD, e);
  }
  getUseInterimTilesOnError() {
    return this.get(al.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(e) {
    this.set(al.USE_INTERIM_TILES_ON_ERROR, e);
  }
  getData(e) {
    return super.getData(e);
  }
}
const lC = 0.5,
  aC = 10,
  bg = 0.25;
class uC {
  constructor(e, n, i, r, s, o) {
    (this.sourceProj_ = e), (this.targetProj_ = n);
    let l = {};
    const a = Yr(this.targetProj_, this.sourceProj_);
    (this.transformInv_ = function (g) {
      const _ = g[0] + "/" + g[1];
      return l[_] || (l[_] = a(g)), l[_];
    }),
      (this.maxSourceExtent_ = r),
      (this.errorThresholdSquared_ = s * s),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!r &&
        !!this.sourceProj_.getExtent() &&
        oe(r) >= oe(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent()
        ? oe(this.sourceProj_.getExtent())
        : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent()
        ? oe(this.targetProj_.getExtent())
        : null);
    const u = Vi(i),
      c = Ma(i),
      h = Pa(i),
      d = ka(i),
      f = this.transformInv_(u),
      m = this.transformInv_(c),
      y = this.transformInv_(h),
      v = this.transformInv_(d),
      p =
        aC +
        (o
          ? Math.max(0, Math.ceil(Math.log2(Dc(i) / (o * o * 256 * 256))))
          : 0);
    if ((this.addQuad_(u, c, h, d, f, m, y, v, p), this.wrapsXInSource_)) {
      let g = 1 / 0;
      this.triangles_.forEach(function (_, E, w) {
        g = Math.min(g, _.source[0][0], _.source[1][0], _.source[2][0]);
      }),
        this.triangles_.forEach((_) => {
          if (
            Math.max(_.source[0][0], _.source[1][0], _.source[2][0]) - g >
            this.sourceWorldWidth_ / 2
          ) {
            const E = [
              [_.source[0][0], _.source[0][1]],
              [_.source[1][0], _.source[1][1]],
              [_.source[2][0], _.source[2][1]],
            ];
            E[0][0] - g > this.sourceWorldWidth_ / 2 &&
              (E[0][0] -= this.sourceWorldWidth_),
              E[1][0] - g > this.sourceWorldWidth_ / 2 &&
                (E[1][0] -= this.sourceWorldWidth_),
              E[2][0] - g > this.sourceWorldWidth_ / 2 &&
                (E[2][0] -= this.sourceWorldWidth_);
            const w = Math.min(E[0][0], E[1][0], E[2][0]);
            Math.max(E[0][0], E[1][0], E[2][0]) - w <
              this.sourceWorldWidth_ / 2 && (_.source = E);
          }
        });
    }
    l = {};
  }
  addTriangle_(e, n, i, r, s, o) {
    this.triangles_.push({ source: [r, s, o], target: [e, n, i] });
  }
  addQuad_(e, n, i, r, s, o, l, a, u) {
    const c = eg([s, o, l, a]),
      h = this.sourceWorldWidth_ ? oe(c) / this.sourceWorldWidth_ : null,
      d = this.sourceWorldWidth_,
      f = this.sourceProj_.canWrapX() && h > 0.5 && h < 1;
    let m = !1;
    if (u > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const v = eg([e, n, i, r]);
        m = oe(v) / this.targetWorldWidth_ > bg || m;
      }
      !f && this.sourceProj_.isGlobal() && h && (m = h > bg || m);
    }
    if (
      !m &&
      this.maxSourceExtent_ &&
      isFinite(c[0]) &&
      isFinite(c[1]) &&
      isFinite(c[2]) &&
      isFinite(c[3]) &&
      !it(c, this.maxSourceExtent_)
    )
      return;
    let y = 0;
    if (
      !m &&
      (!isFinite(s[0]) ||
        !isFinite(s[1]) ||
        !isFinite(o[0]) ||
        !isFinite(o[1]) ||
        !isFinite(l[0]) ||
        !isFinite(l[1]) ||
        !isFinite(a[0]) ||
        !isFinite(a[1]))
    ) {
      if (u > 0) m = !0;
      else if (
        ((y =
          (!isFinite(s[0]) || !isFinite(s[1]) ? 8 : 0) +
          (!isFinite(o[0]) || !isFinite(o[1]) ? 4 : 0) +
          (!isFinite(l[0]) || !isFinite(l[1]) ? 2 : 0) +
          (!isFinite(a[0]) || !isFinite(a[1]) ? 1 : 0)),
        y != 1 && y != 2 && y != 4 && y != 8)
      )
        return;
    }
    if (u > 0) {
      if (!m) {
        const v = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
          p = this.transformInv_(v);
        let g;
        f
          ? (g = (Ar(s[0], d) + Ar(l[0], d)) / 2 - Ar(p[0], d))
          : (g = (s[0] + l[0]) / 2 - p[0]);
        const _ = (s[1] + l[1]) / 2 - p[1];
        m = g * g + _ * _ > this.errorThresholdSquared_;
      }
      if (m) {
        if (Math.abs(e[0] - i[0]) <= Math.abs(e[1] - i[1])) {
          const v = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
            p = this.transformInv_(v),
            g = [(r[0] + e[0]) / 2, (r[1] + e[1]) / 2],
            _ = this.transformInv_(g);
          this.addQuad_(e, n, v, g, s, o, p, _, u - 1),
            this.addQuad_(g, v, i, r, _, p, l, a, u - 1);
        } else {
          const v = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
            p = this.transformInv_(v),
            g = [(i[0] + r[0]) / 2, (i[1] + r[1]) / 2],
            _ = this.transformInv_(g);
          this.addQuad_(e, v, g, r, s, p, _, a, u - 1),
            this.addQuad_(v, n, i, g, p, o, l, _, u - 1);
        }
        return;
      }
    }
    if (f) {
      if (!this.canWrapXInSource_) return;
      this.wrapsXInSource_ = !0;
    }
    y & 11 || this.addTriangle_(e, i, r, s, l, a),
      y & 14 || this.addTriangle_(e, i, n, s, l, o),
      y &&
        (y & 13 || this.addTriangle_(n, r, e, o, a, s),
        y & 7 || this.addTriangle_(n, r, i, o, a, l));
  }
  calculateSourceExtent() {
    const e = Pt();
    return (
      this.triangles_.forEach(function (n, i, r) {
        const s = n.source;
        Os(e, s[0]), Os(e, s[1]), Os(e, s[2]);
      }),
      e
    );
  }
  getTriangles() {
    return this.triangles_;
  }
}
let zu;
const Or = [];
function Kg(t, e, n, i, r) {
  t.beginPath(),
    t.moveTo(0, 0),
    t.lineTo(e, n),
    t.lineTo(i, r),
    t.closePath(),
    t.save(),
    t.clip(),
    t.fillRect(0, 0, Math.max(e, i) + 1, Math.max(n, r)),
    t.restore();
}
function Gu(t, e) {
  return (
    Math.abs(t[e * 4] - 210) > 2 || Math.abs(t[e * 4 + 3] - 0.75 * 255) > 2
  );
}
function cC() {
  if (zu === void 0) {
    const t = Ke(6, 6, Or);
    (t.globalCompositeOperation = "lighter"),
      (t.fillStyle = "rgba(210, 0, 0, 0.75)"),
      Kg(t, 4, 5, 4, 0),
      Kg(t, 4, 5, 0, 5);
    const e = t.getImageData(0, 0, 3, 3).data;
    (zu = Gu(e, 0) || Gu(e, 4) || Gu(e, 8)), Ga(t), Or.push(t.canvas);
  }
  return zu;
}
function Zg(t, e, n, i) {
  const r = od(n, e, t);
  let s = sg(e, i, n);
  const o = e.getMetersPerUnit();
  o !== void 0 && (s *= o);
  const l = t.getMetersPerUnit();
  l !== void 0 && (s /= l);
  const a = t.getExtent();
  if (!a || La(a, r)) {
    const u = sg(t, s, r) / s;
    isFinite(u) && u > 0 && (s /= u);
  }
  return s;
}
function hC(t, e, n, i) {
  const r = ci(n);
  let s = Zg(t, e, r, i);
  return (
    (!isFinite(s) || s <= 0) &&
      __(n, function (o) {
        return (s = Zg(t, e, o, i)), isFinite(s) && s > 0;
      }),
    s
  );
}
function dC(t, e, n, i, r, s, o, l, a, u, c, h, d) {
  const f = Ke(Math.round(n * t), Math.round(n * e), Or);
  if ((h || (f.imageSmoothingEnabled = !1), a.length === 0)) return f.canvas;
  f.scale(n, n);
  function m(g) {
    return Math.round(g * n) / n;
  }
  f.globalCompositeOperation = "lighter";
  const y = Pt();
  a.forEach(function (g, _, E) {
    p_(y, g.extent);
  });
  let v;
  if (!d || a.length !== 1 || u !== 0) {
    const g = oe(y),
      _ = mt(y);
    (v = Ke(Math.round((n * g) / i), Math.round((n * _) / i), Or)),
      h || (v.imageSmoothingEnabled = !1);
    const E = n / i;
    a.forEach(function (w, x, C) {
      const S = w.extent[0] - y[0],
        M = -(w.extent[3] - y[3]),
        k = oe(w.extent),
        j = mt(w.extent);
      w.image.width > 0 &&
        w.image.height > 0 &&
        v.drawImage(
          w.image,
          u,
          u,
          w.image.width - 2 * u,
          w.image.height - 2 * u,
          S * E,
          M * E,
          k * E,
          j * E,
        );
    });
  }
  const p = Vi(o);
  return (
    l.getTriangles().forEach(function (g, _, E) {
      const w = g.source,
        x = g.target;
      let C = w[0][0],
        S = w[0][1],
        M = w[1][0],
        k = w[1][1],
        j = w[2][0],
        Z = w[2][1];
      const X = m((x[0][0] - p[0]) / s),
        he = m(-(x[0][1] - p[1]) / s),
        U = m((x[1][0] - p[0]) / s),
        D = m(-(x[1][1] - p[1]) / s),
        F = m((x[2][0] - p[0]) / s),
        R = m(-(x[2][1] - p[1]) / s),
        P = C,
        A = S;
      (C = 0), (S = 0), (M -= P), (k -= A), (j -= P), (Z -= A);
      const b = [
          [M, k, 0, 0, U - X],
          [j, Z, 0, 0, F - X],
          [0, 0, M, k, D - he],
          [0, 0, j, Z, R - he],
        ],
        T = xv(b);
      if (!T) return;
      if ((f.save(), f.beginPath(), cC() || !h)) {
        f.moveTo(U, D);
        const B = 4,
          te = X - U,
          De = he - D;
        for (let xe = 0; xe < B; xe++)
          f.lineTo(U + m(((xe + 1) * te) / B), D + m((xe * De) / (B - 1))),
            xe != B - 1 &&
              f.lineTo(
                U + m(((xe + 1) * te) / B),
                D + m(((xe + 1) * De) / (B - 1)),
              );
        f.lineTo(F, R);
      } else f.moveTo(U, D), f.lineTo(X, he), f.lineTo(F, R);
      f.clip(),
        f.transform(T[0], T[2], T[1], T[3], X, he),
        f.translate(y[0] - P, y[3] - A);
      let me;
      if (v) (me = v.canvas), f.scale(i / n, -i / n);
      else {
        const B = a[0],
          te = B.extent;
        (me = B.image), f.scale(oe(te) / me.width, -mt(te) / me.height);
      }
      f.drawImage(me, 0, 0), f.restore();
    }),
    v && (Ga(v), Or.push(v.canvas)),
    c &&
      (f.save(),
      (f.globalCompositeOperation = "source-over"),
      (f.strokeStyle = "black"),
      (f.lineWidth = 1),
      l.getTriangles().forEach(function (g, _, E) {
        const w = g.target,
          x = (w[0][0] - p[0]) / s,
          C = -(w[0][1] - p[1]) / s,
          S = (w[1][0] - p[0]) / s,
          M = -(w[1][1] - p[1]) / s,
          k = (w[2][0] - p[0]) / s,
          j = -(w[2][1] - p[1]) / s;
        f.beginPath(),
          f.moveTo(S, M),
          f.lineTo(x, C),
          f.lineTo(k, j),
          f.closePath(),
          f.stroke();
      }),
      f.restore()),
    f.canvas
  );
}
class Jc extends c0 {
  constructor(e, n, i, r, s, o, l, a, u, c, h, d) {
    super(s, G.IDLE, d),
      (this.renderEdges_ = h !== void 0 ? h : !1),
      (this.pixelRatio_ = l),
      (this.gutter_ = a),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = n),
      (this.targetTileGrid_ = r),
      (this.wrappedTileCoord_ = o || s),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0);
    const f = r.getTileCoordExtent(this.wrappedTileCoord_),
      m = this.targetTileGrid_.getExtent();
    let y = this.sourceTileGrid_.getExtent();
    const v = m ? Fs(f, m) : f;
    if (Dc(v) === 0) {
      this.state = G.EMPTY;
      return;
    }
    const p = e.getExtent();
    p && (y ? (y = Fs(y, p)) : (y = p));
    const g = r.getResolution(this.wrappedTileCoord_[0]),
      _ = hC(e, i, v, g);
    if (!isFinite(_) || _ <= 0) {
      this.state = G.EMPTY;
      return;
    }
    const E = c !== void 0 ? c : lC;
    if (
      ((this.triangulation_ = new uC(e, i, v, y, _ * E, g)),
      this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = G.EMPTY;
      return;
    }
    this.sourceZ_ = n.getZForResolution(_);
    let w = this.triangulation_.calculateSourceExtent();
    if (
      (y &&
        (e.canWrapX()
          ? ((w[1] = Se(w[1], y[1], y[3])), (w[3] = Se(w[3], y[1], y[3])))
          : (w = Fs(w, y))),
      !Dc(w))
    )
      this.state = G.EMPTY;
    else {
      const x = n.getTileRangeForExtentAndZ(w, this.sourceZ_);
      for (let C = x.minX; C <= x.maxX; C++)
        for (let S = x.minY; S <= x.maxY; S++) {
          const M = u(this.sourceZ_, C, S, l);
          M && this.sourceTiles_.push(M);
        }
      this.sourceTiles_.length === 0 && (this.state = G.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    const e = [];
    if (
      (this.sourceTiles_.forEach((n) => {
        n &&
          n.getState() == G.LOADED &&
          e.push({
            extent: this.sourceTileGrid_.getTileCoordExtent(n.tileCoord),
            image: n.getImage(),
          });
      }),
      (this.sourceTiles_.length = 0),
      e.length === 0)
    )
      this.state = G.ERROR;
    else {
      const n = this.wrappedTileCoord_[0],
        i = this.targetTileGrid_.getTileSize(n),
        r = typeof i == "number" ? i : i[0],
        s = typeof i == "number" ? i : i[1],
        o = this.targetTileGrid_.getResolution(n),
        l = this.sourceTileGrid_.getResolution(this.sourceZ_),
        a = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      (this.canvas_ = dC(
        r,
        s,
        this.pixelRatio_,
        l,
        this.sourceTileGrid_.getExtent(),
        o,
        a,
        this.triangulation_,
        e,
        this.gutter_,
        this.renderEdges_,
        this.interpolate,
      )),
        (this.state = G.LOADED);
    }
    this.changed();
  }
  load() {
    if (this.state == G.IDLE) {
      (this.state = G.LOADING), this.changed();
      let e = 0;
      (this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach((n) => {
          const i = n.getState();
          if (i == G.IDLE || i == G.LOADING) {
            e++;
            const r = $(
              n,
              V.CHANGE,
              function (s) {
                const o = n.getState();
                (o == G.LOADED || o == G.ERROR || o == G.EMPTY) &&
                  (ce(r),
                  e--,
                  e === 0 && (this.unlistenSources_(), this.reproject_()));
              },
              this,
            );
            this.sourcesListenerKeys_.push(r);
          }
        }),
        e === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function (n, i, r) {
              n.getState() == G.IDLE && n.load();
            });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(ce), (this.sourcesListenerKeys_ = null);
  }
  release() {
    this.canvas_ &&
      (Ga(this.canvas_.getContext("2d")),
      Or.push(this.canvas_),
      (this.canvas_ = null)),
      super.release();
  }
}
class fC extends r0 {
  constructor(e) {
    super(e),
      (this.extentChanged = !0),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision,
      (this.renderedTiles = []),
      (this.newTiles_ = !1),
      (this.tmpExtent = Pt()),
      (this.tmpTileRange_ = new Pd(0, 0, 0, 0));
  }
  isDrawableTile(e) {
    const n = this.getLayer(),
      i = e.getState(),
      r = n.getUseInterimTilesOnError();
    return i == G.LOADED || i == G.EMPTY || (i == G.ERROR && !r);
  }
  getTile(e, n, i, r) {
    const s = r.pixelRatio,
      o = r.viewState.projection,
      l = this.getLayer();
    let u = l.getSource().getTile(e, n, i, s, o);
    return (
      u.getState() == G.ERROR &&
        l.getUseInterimTilesOnError() &&
        l.getPreload() > 0 &&
        (this.newTiles_ = !0),
      this.isDrawableTile(u) || (u = u.getInterimTile()),
      u
    );
  }
  getData(e) {
    const n = this.frameState;
    if (!n) return null;
    const i = this.getLayer(),
      r = ke(n.pixelToCoordinateTransform, e.slice()),
      s = i.getExtent();
    if (s && !La(s, r)) return null;
    const o = n.pixelRatio,
      l = n.viewState.projection,
      a = n.viewState,
      u = i.getRenderSource(),
      c = u.getTileGridForProjection(a.projection),
      h = u.getTilePixelRatio(n.pixelRatio);
    for (let d = c.getZForResolution(a.resolution); d >= c.getMinZoom(); --d) {
      const f = c.getTileCoordForCoordAndZ(r, d),
        m = u.getTile(d, f[1], f[2], o, l);
      if (
        !(m instanceof h0 || m instanceof Jc) ||
        (m instanceof Jc && m.getState() === G.EMPTY)
      )
        return null;
      if (m.getState() !== G.LOADED) continue;
      const y = c.getOrigin(d),
        v = gt(c.getTileSize(d)),
        p = c.getResolution(d),
        g = Math.floor(h * ((r[0] - y[0]) / p - f[1] * v[0])),
        _ = Math.floor(h * ((y[1] - r[1]) / p - f[2] * v[1])),
        E = Math.round(h * u.getGutterForProjection(a.projection));
      return this.getImageData(m.getImage(), g + E, _ + E);
    }
    return null;
  }
  loadedTileCallback(e, n, i) {
    return this.isDrawableTile(i) ? super.loadedTileCallback(e, n, i) : !1;
  }
  prepareFrame(e) {
    return !!this.getLayer().getSource();
  }
  renderFrame(e, n) {
    const i = e.layerStatesArray[e.layerIndex],
      r = e.viewState,
      s = r.projection,
      o = r.resolution,
      l = r.center,
      a = r.rotation,
      u = e.pixelRatio,
      c = this.getLayer(),
      h = c.getSource(),
      d = h.getRevision(),
      f = h.getTileGridForProjection(s),
      m = f.getZForResolution(o, h.zDirection),
      y = f.getResolution(m);
    let v = e.extent;
    const p = e.viewState.resolution,
      g = h.getTilePixelRatio(u),
      _ = Math.round((oe(v) / p) * u),
      E = Math.round((mt(v) / p) * u),
      w = i.extent && ki(i.extent, s);
    w && (v = Fs(v, ki(i.extent, s)));
    const x = (y * _) / 2 / g,
      C = (y * E) / 2 / g,
      S = [l[0] - x, l[1] - C, l[0] + x, l[1] + C],
      M = f.getTileRangeForExtentAndZ(v, m),
      k = {};
    k[m] = {};
    const j = this.createLoadedTileFinder(h, s, k),
      Z = this.tmpExtent,
      X = this.tmpTileRange_;
    this.newTiles_ = !1;
    const he = a ? zc(r.center, p, a, e.size) : void 0;
    for (let me = M.minX; me <= M.maxX; ++me)
      for (let B = M.minY; B <= M.maxY; ++B) {
        if (a && !f.tileCoordIntersectsViewport([m, me, B], he)) continue;
        const te = this.getTile(m, me, B, e);
        if (this.isDrawableTile(te)) {
          const rn = ee(this);
          if (te.getState() == G.LOADED) {
            k[m][te.tileCoord.toString()] = te;
            let sn = te.inTransition(rn);
            sn && i.opacity !== 1 && (te.endTransition(rn), (sn = !1)),
              !this.newTiles_ &&
                (sn || !this.renderedTiles.includes(te)) &&
                (this.newTiles_ = !0);
          }
          if (te.getAlpha(rn, e.time) === 1) continue;
        }
        const De = f.getTileCoordChildTileRange(te.tileCoord, X, Z);
        let xe = !1;
        De && (xe = j(m + 1, De)),
          xe || f.forEachTileCoordParentTileRange(te.tileCoord, j, X, Z);
      }
    const U = ((y / o) * u) / g;
    Sn(
      this.pixelTransform,
      e.size[0] / 2,
      e.size[1] / 2,
      1 / u,
      1 / u,
      a,
      -_ / 2,
      -E / 2,
    );
    const D = d_(this.pixelTransform);
    this.useContainer(n, D, this.getBackground(e));
    const F = this.context,
      R = F.canvas;
    Qh(this.inversePixelTransform, this.pixelTransform),
      Sn(this.tempTransform, _ / 2, E / 2, U, U, 0, -_ / 2, -E / 2),
      R.width != _ || R.height != E
        ? ((R.width = _), (R.height = E))
        : this.containerReused || F.clearRect(0, 0, _, E),
      w && this.clipUnrotated(F, e, w),
      h.getInterpolate() || (F.imageSmoothingEnabled = !1),
      this.preRender(F, e),
      (this.renderedTiles.length = 0);
    let P = Object.keys(k).map(Number);
    P.sort(ai);
    let A, b, T;
    i.opacity === 1 &&
    (!this.containerReused || h.getOpaque(e.viewState.projection))
      ? (P = P.reverse())
      : ((A = []), (b = []));
    for (let me = P.length - 1; me >= 0; --me) {
      const B = P[me],
        te = h.getTilePixelSize(B, u, s),
        xe = f.getResolution(B) / y,
        rn = te[0] * xe * U,
        sn = te[1] * xe * U,
        Zi = f.getTileCoordForCoordAndZ(Vi(S), B),
        Io = f.getTileCoordExtent(Zi),
        Hi = ke(this.tempTransform, [
          (g * (Io[0] - S[0])) / y,
          (g * (S[3] - Io[3])) / y,
        ]),
        Lo = g * h.getGutterForProjection(s),
        kn = k[B];
      for (const ts in kn) {
        const Pn = kn[ts],
          ko = Pn.tileCoord,
          Po = Zi[1] - ko[1],
          Mo = Math.round(Hi[0] - (Po - 1) * rn),
          $i = Zi[2] - ko[2],
          Za = Math.round(Hi[1] - ($i - 1) * sn),
          $e = Math.round(Hi[0] - Po * rn),
          Et = Math.round(Hi[1] - $i * sn),
          At = Mo - $e,
          on = Za - Et,
          qi = m === B,
          yi = qi && Pn.getAlpha(ee(this), e.time) !== 1;
        let Mn = !1;
        if (!yi)
          if (A) {
            T = [$e, Et, $e + At, Et, $e + At, Et + on, $e, Et + on];
            for (let Qi = 0, Ao = A.length; Qi < Ao; ++Qi)
              if (m !== B && B < b[Qi]) {
                const Be = A[Qi];
                it([$e, Et, $e + At, Et + on], [Be[0], Be[3], Be[4], Be[7]]) &&
                  (Mn || (F.save(), (Mn = !0)),
                  F.beginPath(),
                  F.moveTo(T[0], T[1]),
                  F.lineTo(T[2], T[3]),
                  F.lineTo(T[4], T[5]),
                  F.lineTo(T[6], T[7]),
                  F.moveTo(Be[6], Be[7]),
                  F.lineTo(Be[4], Be[5]),
                  F.lineTo(Be[2], Be[3]),
                  F.lineTo(Be[0], Be[1]),
                  F.clip());
              }
            A.push(T), b.push(B);
          } else F.clearRect($e, Et, At, on);
        this.drawTileImage(Pn, e, $e, Et, At, on, Lo, qi),
          A && !yi
            ? (Mn && F.restore(), this.renderedTiles.unshift(Pn))
            : this.renderedTiles.push(Pn),
          this.updateUsedTiles(e.usedTiles, h, Pn);
      }
    }
    return (
      (this.renderedRevision = d),
      (this.renderedResolution = y),
      (this.extentChanged =
        !this.renderedExtent_ || !Js(this.renderedExtent_, S)),
      (this.renderedExtent_ = S),
      (this.renderedPixelRatio = u),
      (this.renderedProjection = s),
      this.manageTilePyramid(e, h, f, u, s, v, m, c.getPreload()),
      this.scheduleExpireCache(e, h),
      this.postRender(F, e),
      i.extent && F.restore(),
      (F.imageSmoothingEnabled = !0),
      D !== R.style.transform && (R.style.transform = D),
      this.container
    );
  }
  drawTileImage(e, n, i, r, s, o, l, a) {
    const u = this.getTileImage(e);
    if (!u) return;
    const c = ee(this),
      h = n.layerStatesArray[n.layerIndex],
      d = h.opacity * (a ? e.getAlpha(c, n.time) : 1),
      f = d !== this.context.globalAlpha;
    f && (this.context.save(), (this.context.globalAlpha = d)),
      this.context.drawImage(
        u,
        l,
        l,
        u.width - 2 * l,
        u.height - 2 * l,
        i,
        r,
        s,
        o,
      ),
      f && this.context.restore(),
      d !== h.opacity ? (n.animate = !0) : a && e.endTransition(c);
  }
  getImage() {
    const e = this.context;
    return e ? e.canvas : null;
  }
  getTileImage(e) {
    return e.getImage();
  }
  scheduleExpireCache(e, n) {
    if (n.canExpireCache()) {
      const i = function (r, s, o) {
        const l = ee(r);
        l in o.usedTiles &&
          r.expireCache(o.viewState.projection, o.usedTiles[l]);
      }.bind(null, n);
      e.postRenderFunctions.push(i);
    }
  }
  updateUsedTiles(e, n, i) {
    const r = ee(n);
    r in e || (e[r] = {}), (e[r][i.getKey()] = !0);
  }
  manageTilePyramid(e, n, i, r, s, o, l, a, u) {
    const c = ee(n);
    c in e.wantedTiles || (e.wantedTiles[c] = {});
    const h = e.wantedTiles[c],
      d = e.tileQueue,
      f = i.getMinZoom(),
      m = e.viewState.rotation,
      y = m
        ? zc(e.viewState.center, e.viewState.resolution, m, e.size)
        : void 0;
    let v = 0,
      p,
      g,
      _,
      E,
      w,
      x;
    for (x = f; x <= l; ++x)
      for (
        g = i.getTileRangeForExtentAndZ(o, x, g),
          _ = i.getResolution(x),
          E = g.minX;
        E <= g.maxX;
        ++E
      )
        for (w = g.minY; w <= g.maxY; ++w)
          (m && !i.tileCoordIntersectsViewport([x, E, w], y)) ||
            (l - x <= a
              ? (++v,
                (p = n.getTile(x, E, w, r, s)),
                p.getState() == G.IDLE &&
                  ((h[p.getKey()] = !0),
                  d.isKeyQueued(p.getKey()) ||
                    d.enqueue([p, c, i.getTileCoordCenter(p.tileCoord), _])),
                u !== void 0 && u(p))
              : n.useTile(x, E, w, s));
    n.updateCacheSize(v, s);
  }
}
class gC extends oC {
  constructor(e) {
    super(e);
  }
  createRenderer() {
    return new fC(this);
  }
}
const pC = gC,
  Wu = {
    TILELOADSTART: "tileloadstart",
    TILELOADEND: "tileloadend",
    TILELOADERROR: "tileloaderror",
  },
  sr = [0, 0, 0],
  Nn = 5;
class mC {
  constructor(e) {
    (this.minZoom = e.minZoom !== void 0 ? e.minZoom : 0),
      (this.resolutions_ = e.resolutions),
      Q(
        Z1(this.resolutions_, (r, s) => s - r, !0),
        "`resolutions` must be sorted in descending order",
      );
    let n;
    if (!e.origins) {
      for (let r = 0, s = this.resolutions_.length - 1; r < s; ++r)
        if (!n) n = this.resolutions_[r] / this.resolutions_[r + 1];
        else if (this.resolutions_[r] / this.resolutions_[r + 1] !== n) {
          n = void 0;
          break;
        }
    }
    (this.zoomFactor_ = n),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = e.origin !== void 0 ? e.origin : null),
      (this.origins_ = null),
      e.origins !== void 0 &&
        ((this.origins_ = e.origins),
        Q(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal",
        ));
    const i = e.extent;
    i !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = Vi(i)),
      Q(
        (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
        "Either `origin` or `origins` must be configured, never both",
      ),
      (this.tileSizes_ = null),
      e.tileSizes !== void 0 &&
        ((this.tileSizes_ = e.tileSizes),
        Q(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal",
        )),
      (this.tileSize_ =
        e.tileSize !== void 0 ? e.tileSize : this.tileSizes_ ? null : Ed),
      Q(
        (!this.tileSize_ && this.tileSizes_) ||
          (this.tileSize_ && !this.tileSizes_),
        "Either `tileSize` or `tileSizes` must be configured, never both",
      ),
      (this.extent_ = i !== void 0 ? i : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      e.sizes !== void 0
        ? (this.fullTileRanges_ = e.sizes.map((r, s) => {
            const o = new Pd(
              Math.min(0, r[0]),
              Math.max(r[0] - 1, -1),
              Math.min(0, r[1]),
              Math.max(r[1] - 1, -1),
            );
            if (i) {
              const l = this.getTileRangeForExtentAndZ(i, s);
              (o.minX = Math.max(l.minX, o.minX)),
                (o.maxX = Math.min(l.maxX, o.maxX)),
                (o.minY = Math.max(l.minY, o.minY)),
                (o.maxY = Math.min(l.maxY, o.maxY));
            }
            return o;
          }))
        : i && this.calculateTileRanges_(i);
  }
  forEachTileCoord(e, n, i) {
    const r = this.getTileRangeForExtentAndZ(e, n);
    for (let s = r.minX, o = r.maxX; s <= o; ++s)
      for (let l = r.minY, a = r.maxY; l <= a; ++l) i([n, s, l]);
  }
  forEachTileCoordParentTileRange(e, n, i, r) {
    let s,
      o,
      l,
      a = null,
      u = e[0] - 1;
    for (
      this.zoomFactor_ === 2
        ? ((o = e[1]), (l = e[2]))
        : (a = this.getTileCoordExtent(e, r));
      u >= this.minZoom;

    ) {
      if (
        (o !== void 0 && l !== void 0
          ? ((o = Math.floor(o / 2)),
            (l = Math.floor(l / 2)),
            (s = rr(o, o, l, l, i)))
          : (s = this.getTileRangeForExtentAndZ(a, u, i)),
        n(u, s))
      )
        return !0;
      --u;
    }
    return !1;
  }
  getExtent() {
    return this.extent_;
  }
  getMaxZoom() {
    return this.maxZoom;
  }
  getMinZoom() {
    return this.minZoom;
  }
  getOrigin(e) {
    return this.origin_ ? this.origin_ : this.origins_[e];
  }
  getResolution(e) {
    return this.resolutions_[e];
  }
  getResolutions() {
    return this.resolutions_;
  }
  getTileCoordChildTileRange(e, n, i) {
    if (e[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const s = e[1] * 2,
          o = e[2] * 2;
        return rr(s, s + 1, o, o + 1, n);
      }
      const r = this.getTileCoordExtent(e, i || this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(r, e[0] + 1, n);
    }
    return null;
  }
  getTileRangeForTileCoordAndZ(e, n, i) {
    if (n > this.maxZoom || n < this.minZoom) return null;
    const r = e[0],
      s = e[1],
      o = e[2];
    if (n === r) return rr(s, o, s, o, i);
    if (this.zoomFactor_) {
      const a = Math.pow(this.zoomFactor_, n - r),
        u = Math.floor(s * a),
        c = Math.floor(o * a);
      if (n < r) return rr(u, u, c, c, i);
      const h = Math.floor(a * (s + 1)) - 1,
        d = Math.floor(a * (o + 1)) - 1;
      return rr(u, h, c, d, i);
    }
    const l = this.getTileCoordExtent(e, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(l, n, i);
  }
  getTileRangeForExtentAndZ(e, n, i) {
    this.getTileCoordForXYAndZ_(e[0], e[3], n, !1, sr);
    const r = sr[1],
      s = sr[2];
    this.getTileCoordForXYAndZ_(e[2], e[1], n, !0, sr);
    const o = sr[1],
      l = sr[2];
    return rr(r, o, s, l, i);
  }
  getTileCoordCenter(e) {
    const n = this.getOrigin(e[0]),
      i = this.getResolution(e[0]),
      r = gt(this.getTileSize(e[0]), this.tmpSize_);
    return [n[0] + (e[1] + 0.5) * r[0] * i, n[1] - (e[2] + 0.5) * r[1] * i];
  }
  getTileCoordExtent(e, n) {
    const i = this.getOrigin(e[0]),
      r = this.getResolution(e[0]),
      s = gt(this.getTileSize(e[0]), this.tmpSize_),
      o = i[0] + e[1] * s[0] * r,
      l = i[1] - (e[2] + 1) * s[1] * r,
      a = o + s[0] * r,
      u = l + s[1] * r;
    return Rn(o, l, a, u, n);
  }
  getTileCoordForCoordAndResolution(e, n, i) {
    return this.getTileCoordForXYAndResolution_(e[0], e[1], n, !1, i);
  }
  getTileCoordForXYAndResolution_(e, n, i, r, s) {
    const o = this.getZForResolution(i),
      l = i / this.getResolution(o),
      a = this.getOrigin(o),
      u = gt(this.getTileSize(o), this.tmpSize_);
    let c = (l * (e - a[0])) / i / u[0],
      h = (l * (a[1] - n)) / i / u[1];
    return (
      r
        ? ((c = tl(c, Nn) - 1), (h = tl(h, Nn) - 1))
        : ((c = el(c, Nn)), (h = el(h, Nn))),
      Vg(o, c, h, s)
    );
  }
  getTileCoordForXYAndZ_(e, n, i, r, s) {
    const o = this.getOrigin(i),
      l = this.getResolution(i),
      a = gt(this.getTileSize(i), this.tmpSize_);
    let u = (e - o[0]) / l / a[0],
      c = (o[1] - n) / l / a[1];
    return (
      r
        ? ((u = tl(u, Nn) - 1), (c = tl(c, Nn) - 1))
        : ((u = el(u, Nn)), (c = el(c, Nn))),
      Vg(i, u, c, s)
    );
  }
  getTileCoordForCoordAndZ(e, n, i) {
    return this.getTileCoordForXYAndZ_(e[0], e[1], n, !1, i);
  }
  getTileCoordResolution(e) {
    return this.resolutions_[e[0]];
  }
  getTileSize(e) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[e];
  }
  getFullTileRange(e) {
    return this.fullTileRanges_
      ? this.fullTileRanges_[e]
      : this.extent_
        ? this.getTileRangeForExtentAndZ(this.extent_, e)
        : null;
  }
  getZForResolution(e, n) {
    const i = $h(this.resolutions_, e, n || 0);
    return Se(i, this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(e, n) {
    return O_(n, 0, n.length, 2, this.getTileCoordExtent(e));
  }
  calculateTileRanges_(e) {
    const n = this.resolutions_.length,
      i = new Array(n);
    for (let r = this.minZoom; r < n; ++r)
      i[r] = this.getTileRangeForExtentAndZ(e, r);
    this.fullTileRanges_ = i;
  }
}
const E0 = mC;
function w0(t) {
  let e = t.getDefaultTileGrid();
  return e || ((e = EC(t)), t.setDefaultTileGrid(e)), e;
}
function _C(t, e, n) {
  const i = e[0],
    r = t.getTileCoordCenter(e),
    s = Md(n);
  if (!La(s, r)) {
    const o = oe(s),
      l = Math.ceil((s[0] - r[0]) / o);
    return (r[0] += o * l), t.getTileCoordForCoordAndZ(r, i);
  }
  return e;
}
function yC(t, e, n, i) {
  i = i !== void 0 ? i : "top-left";
  const r = x0(t, e, n);
  return new E0({ extent: t, origin: lv(t, i), resolutions: r, tileSize: n });
}
function vC(t) {
  const e = t || {},
    n = e.extent || ve("EPSG:3857").getExtent(),
    i = {
      extent: n,
      minZoom: e.minZoom,
      tileSize: e.tileSize,
      resolutions: x0(n, e.maxZoom, e.tileSize, e.maxResolution),
    };
  return new E0(i);
}
function x0(t, e, n, i) {
  (e = e !== void 0 ? e : mE), (n = gt(n !== void 0 ? n : Ed));
  const r = mt(t),
    s = oe(t);
  i = i > 0 ? i : Math.max(s / n[0], r / n[1]);
  const o = e + 1,
    l = new Array(o);
  for (let a = 0; a < o; ++a) l[a] = i / Math.pow(2, a);
  return l;
}
function EC(t, e, n, i) {
  const r = Md(t);
  return yC(r, e, n, i);
}
function Md(t) {
  t = ve(t);
  let e = t.getExtent();
  if (!e) {
    const n = (180 * eo.degrees) / t.getMetersPerUnit();
    e = Rn(-n, -n, n, n);
  }
  return e;
}
class wC extends u0 {
  constructor(e) {
    super({
      attributions: e.attributions,
      attributionsCollapsible: e.attributionsCollapsible,
      projection: e.projection,
      state: e.state,
      wrapX: e.wrapX,
      interpolate: e.interpolate,
    }),
      this.on,
      this.once,
      this.un,
      (this.opaque_ = e.opaque !== void 0 ? e.opaque : !1),
      (this.tilePixelRatio_ =
        e.tilePixelRatio !== void 0 ? e.tilePixelRatio : 1),
      (this.tileGrid = e.tileGrid !== void 0 ? e.tileGrid : null);
    const n = [256, 256];
    this.tileGrid &&
      gt(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), n),
      (this.tileCache = new v0(e.cacheSize || 0)),
      (this.tmpSize = [0, 0]),
      (this.key_ = e.key || ""),
      (this.tileOptions = {
        transition: e.transition,
        interpolate: e.interpolate,
      }),
      (this.zDirection = e.zDirection ? e.zDirection : 0);
  }
  canExpireCache() {
    return this.tileCache.canExpireCache();
  }
  expireCache(e, n) {
    const i = this.getTileCacheForProjection(e);
    i && i.expireCache(n);
  }
  forEachLoadedTile(e, n, i, r) {
    const s = this.getTileCacheForProjection(e);
    if (!s) return !1;
    let o = !0,
      l,
      a,
      u;
    for (let c = i.minX; c <= i.maxX; ++c)
      for (let h = i.minY; h <= i.maxY; ++h)
        (a = Ka(n, c, h)),
          (u = !1),
          s.containsKey(a) &&
            ((l = s.get(a)),
            (u = l.getState() === G.LOADED),
            u && (u = r(l) !== !1)),
          u || (o = !1);
    return o;
  }
  getGutterForProjection(e) {
    return 0;
  }
  getKey() {
    return this.key_;
  }
  setKey(e) {
    this.key_ !== e && ((this.key_ = e), this.changed());
  }
  getOpaque(e) {
    return this.opaque_;
  }
  getResolutions(e) {
    const n = e ? this.getTileGridForProjection(e) : this.tileGrid;
    return n ? n.getResolutions() : null;
  }
  getTile(e, n, i, r, s) {
    return W();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(e) {
    return this.tileGrid ? this.tileGrid : w0(e);
  }
  getTileCacheForProjection(e) {
    const n = this.getProjection();
    return (
      Q(
        n === null || Ri(n, e),
        "A VectorTile source can only be rendered if it has a projection compatible with the view projection.",
      ),
      this.tileCache
    );
  }
  getTilePixelRatio(e) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(e, n, i) {
    const r = this.getTileGridForProjection(i),
      s = this.getTilePixelRatio(n),
      o = gt(r.getTileSize(e), this.tmpSize);
    return s == 1 ? o : qv(o, s, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(e, n) {
    n = n !== void 0 ? n : this.getProjection();
    const i = this.getTileGridForProjection(n);
    return (
      this.getWrapX() && n.isGlobal() && (e = _C(i, e, n)), sC(e, i) ? e : null
    );
  }
  clear() {
    this.tileCache.clear();
  }
  refresh() {
    this.clear(), super.refresh();
  }
  updateCacheSize(e, n) {
    const i = this.getTileCacheForProjection(n);
    e > i.highWaterMark && (i.highWaterMark = e);
  }
  useTile(e, n, i, r) {}
}
class xC extends Ln {
  constructor(e, n) {
    super(e), (this.tile = n);
  }
}
function CC(t, e) {
  const n = /\{z\}/g,
    i = /\{x\}/g,
    r = /\{y\}/g,
    s = /\{-y\}/g;
  return function (o, l, a) {
    if (o)
      return t
        .replace(n, o[0].toString())
        .replace(i, o[1].toString())
        .replace(r, o[2].toString())
        .replace(s, function () {
          const u = o[0],
            c = e.getFullTileRange(u);
          if (!c)
            throw new Error(
              "The {-y} placeholder requires a tile grid with extent",
            );
          return (c.getHeight() - o[2] - 1).toString();
        });
  };
}
function SC(t, e) {
  const n = t.length,
    i = new Array(n);
  for (let r = 0; r < n; ++r) i[r] = CC(t[r], e);
  return RC(i);
}
function RC(t) {
  return t.length === 1
    ? t[0]
    : function (e, n, i) {
        if (!e) return;
        const r = rC(e),
          s = Ar(r, t.length);
        return t[s](e, n, i);
      };
}
function TC(t) {
  const e = [];
  let n = /\{([a-z])-([a-z])\}/.exec(t);
  if (n) {
    const i = n[1].charCodeAt(0),
      r = n[2].charCodeAt(0);
    let s;
    for (s = i; s <= r; ++s) e.push(t.replace(n[0], String.fromCharCode(s)));
    return e;
  }
  if (((n = /\{(\d+)-(\d+)\}/.exec(t)), n)) {
    const i = parseInt(n[2], 10);
    for (let r = parseInt(n[1], 10); r <= i; r++)
      e.push(t.replace(n[0], r.toString()));
    return e;
  }
  return e.push(t), e;
}
class Ad extends wC {
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tilePixelRatio: e.tilePixelRatio,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.generateTileUrlFunction_ =
        this.tileUrlFunction === Ad.prototype.tileUrlFunction),
      (this.tileLoadFunction = e.tileLoadFunction),
      e.tileUrlFunction && (this.tileUrlFunction = e.tileUrlFunction),
      (this.urls = null),
      e.urls ? this.setUrls(e.urls) : e.url && this.setUrl(e.url),
      (this.tileLoadingKeys_ = {});
  }
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
      ? this.tileUrlFunction.bind(this)
      : this.tileUrlFunction;
  }
  getUrls() {
    return this.urls;
  }
  handleTileChange(e) {
    const n = e.target,
      i = ee(n),
      r = n.getState();
    let s;
    r == G.LOADING
      ? ((this.tileLoadingKeys_[i] = !0), (s = Wu.TILELOADSTART))
      : i in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[i],
        (s =
          r == G.ERROR
            ? Wu.TILELOADERROR
            : r == G.LOADED
              ? Wu.TILELOADEND
              : void 0)),
      s != null && this.dispatchEvent(new xC(s, n));
  }
  setTileLoadFunction(e) {
    this.tileCache.clear(), (this.tileLoadFunction = e), this.changed();
  }
  setTileUrlFunction(e, n) {
    (this.tileUrlFunction = e),
      this.tileCache.pruneExceptNewestZ(),
      typeof n < "u" ? this.setKey(n) : this.changed();
  }
  setUrl(e) {
    const n = TC(e);
    (this.urls = n), this.setUrls(n);
  }
  setUrls(e) {
    this.urls = e;
    const n = e.join(`
`);
    this.generateTileUrlFunction_
      ? this.setTileUrlFunction(SC(e, this.tileGrid), n)
      : this.setKey(n);
  }
  tileUrlFunction(e, n, i) {}
  useTile(e, n, i) {
    const r = Ka(e, n, i);
    this.tileCache.containsKey(r) && this.tileCache.get(r);
  }
}
class IC extends Ad {
  constructor(e) {
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      opaque: e.opaque,
      projection: e.projection,
      state: e.state,
      tileGrid: e.tileGrid,
      tileLoadFunction: e.tileLoadFunction ? e.tileLoadFunction : LC,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX,
      transition: e.transition,
      interpolate: e.interpolate !== void 0 ? e.interpolate : !0,
      key: e.key,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.crossOrigin = e.crossOrigin !== void 0 ? e.crossOrigin : null),
      (this.tileClass = e.tileClass !== void 0 ? e.tileClass : h0),
      (this.tileCacheForProjection = {}),
      (this.tileGridForProjection = {}),
      (this.reprojectionErrorThreshold_ = e.reprojectionErrorThreshold),
      (this.renderReprojectionEdges_ = !1);
  }
  canExpireCache() {
    if (this.tileCache.canExpireCache()) return !0;
    for (const e in this.tileCacheForProjection)
      if (this.tileCacheForProjection[e].canExpireCache()) return !0;
    return !1;
  }
  expireCache(e, n) {
    const i = this.getTileCacheForProjection(e);
    this.tileCache.expireCache(this.tileCache == i ? n : {});
    for (const r in this.tileCacheForProjection) {
      const s = this.tileCacheForProjection[r];
      s.expireCache(s == i ? n : {});
    }
  }
  getGutterForProjection(e) {
    return this.getProjection() && e && !Ri(this.getProjection(), e)
      ? 0
      : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let e = super.getKey();
    return this.getInterpolate() || (e += ":disable-interpolation"), e;
  }
  getOpaque(e) {
    return this.getProjection() && e && !Ri(this.getProjection(), e)
      ? !1
      : super.getOpaque(e);
  }
  getTileGridForProjection(e) {
    const n = this.getProjection();
    if (this.tileGrid && (!n || Ri(n, e))) return this.tileGrid;
    const i = ee(e);
    return (
      i in this.tileGridForProjection ||
        (this.tileGridForProjection[i] = w0(e)),
      this.tileGridForProjection[i]
    );
  }
  getTileCacheForProjection(e) {
    const n = this.getProjection();
    if (!n || Ri(n, e)) return this.tileCache;
    const i = ee(e);
    return (
      i in this.tileCacheForProjection ||
        (this.tileCacheForProjection[i] = new v0(this.tileCache.highWaterMark)),
      this.tileCacheForProjection[i]
    );
  }
  createTile_(e, n, i, r, s, o) {
    const l = [e, n, i],
      a = this.getTileCoordForTileUrlFunction(l, s),
      u = a ? this.tileUrlFunction(a, r, s) : void 0,
      c = new this.tileClass(
        l,
        u !== void 0 ? G.IDLE : G.EMPTY,
        u !== void 0 ? u : "",
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      );
    return (
      (c.key = o),
      c.addEventListener(V.CHANGE, this.handleTileChange.bind(this)),
      c
    );
  }
  getTile(e, n, i, r, s) {
    const o = this.getProjection();
    if (!o || !s || Ri(o, s)) return this.getTileInternal(e, n, i, r, o || s);
    const l = this.getTileCacheForProjection(s),
      a = [e, n, i];
    let u;
    const c = y0(a);
    l.containsKey(c) && (u = l.get(c));
    const h = this.getKey();
    if (u && u.key == h) return u;
    const d = this.getTileGridForProjection(o),
      f = this.getTileGridForProjection(s),
      m = this.getTileCoordForTileUrlFunction(a, s),
      y = new Jc(
        o,
        d,
        s,
        f,
        a,
        m,
        this.getTilePixelRatio(r),
        this.getGutter(),
        (v, p, g, _) => this.getTileInternal(v, p, g, _, o),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions,
      );
    return (
      (y.key = h),
      u
        ? ((y.interimTile = u), y.refreshInterimChain(), l.replace(c, y))
        : l.set(c, y),
      y
    );
  }
  getTileInternal(e, n, i, r, s) {
    let o = null;
    const l = Ka(e, n, i),
      a = this.getKey();
    if (!this.tileCache.containsKey(l))
      (o = this.createTile_(e, n, i, r, s, a)), this.tileCache.set(l, o);
    else if (((o = this.tileCache.get(l)), o.key != a)) {
      const u = o;
      (o = this.createTile_(e, n, i, r, s, a)),
        u.getState() == G.IDLE
          ? (o.interimTile = u.interimTile)
          : (o.interimTile = u),
        o.refreshInterimChain(),
        this.tileCache.replace(l, o);
    }
    return o;
  }
  setRenderReprojectionEdges(e) {
    if (this.renderReprojectionEdges_ != e) {
      this.renderReprojectionEdges_ = e;
      for (const n in this.tileCacheForProjection)
        this.tileCacheForProjection[n].clear();
      this.changed();
    }
  }
  setTileGridForProjection(e, n) {
    const i = ve(e);
    if (i) {
      const r = ee(i);
      r in this.tileGridForProjection || (this.tileGridForProjection[r] = n);
    }
  }
  clear() {
    super.clear();
    for (const e in this.tileCacheForProjection)
      this.tileCacheForProjection[e].clear();
  }
}
function LC(t, e) {
  t.getImage().src = e;
}
class kC extends IC {
  constructor(e) {
    e = e || {};
    const n = e.projection !== void 0 ? e.projection : "EPSG:3857",
      i =
        e.tileGrid !== void 0
          ? e.tileGrid
          : vC({
              extent: Md(n),
              maxResolution: e.maxResolution,
              maxZoom: e.maxZoom,
              minZoom: e.minZoom,
              tileSize: e.tileSize,
            });
    super({
      attributions: e.attributions,
      cacheSize: e.cacheSize,
      crossOrigin: e.crossOrigin,
      interpolate: e.interpolate,
      opaque: e.opaque,
      projection: n,
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      tileGrid: i,
      tileLoadFunction: e.tileLoadFunction,
      tilePixelRatio: e.tilePixelRatio,
      tileUrlFunction: e.tileUrlFunction,
      url: e.url,
      urls: e.urls,
      wrapX: e.wrapX !== void 0 ? e.wrapX : !0,
      transition: e.transition,
      attributionsCollapsible: e.attributionsCollapsible,
      zDirection: e.zDirection,
    }),
      (this.gutter_ = e.gutter !== void 0 ? e.gutter : 0);
  }
  getGutter() {
    return this.gutter_;
  }
}
const PC =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
class MC extends kC {
  constructor(e) {
    e = e || {};
    let n;
    e.attributions !== void 0 ? (n = e.attributions) : (n = [PC]);
    const i = e.crossOrigin !== void 0 ? e.crossOrigin : "anonymous",
      r =
        e.url !== void 0
          ? e.url
          : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions: n,
      attributionsCollapsible: !1,
      cacheSize: e.cacheSize,
      crossOrigin: i,
      interpolate: e.interpolate,
      maxZoom: e.maxZoom !== void 0 ? e.maxZoom : 19,
      opaque: e.opaque !== void 0 ? e.opaque : !0,
      reprojectionErrorThreshold: e.reprojectionErrorThreshold,
      tileLoadFunction: e.tileLoadFunction,
      transition: e.transition,
      url: r,
      wrapX: e.wrapX,
      zDirection: e.zDirection,
    });
  }
}
class AC {
  constructor() {
    (this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.featureClass = Ia),
      (this.supportedMediaTypes = null);
  }
  getReadOptions(e, n) {
    if (n) {
      let i = n.dataProjection ? ve(n.dataProjection) : this.readProjection(e);
      n.extent &&
        i &&
        i.getUnits() === "tile-pixels" &&
        ((i = ve(i)), i.setWorldExtent(n.extent)),
        (n = { dataProjection: i, featureProjection: n.featureProjection });
    }
    return this.adaptOptions(n);
  }
  adaptOptions(e) {
    return Object.assign(
      {
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection,
        featureClass: this.featureClass,
      },
      e,
    );
  }
  getType() {
    return W();
  }
  readFeature(e, n) {
    return W();
  }
  readFeatures(e, n) {
    return W();
  }
  readGeometry(e, n) {
    return W();
  }
  readProjection(e) {
    return W();
  }
  writeFeature(e, n) {
    return W();
  }
  writeFeatures(e, n) {
    return W();
  }
  writeGeometry(e, n) {
    return W();
  }
}
function Od(t, e, n) {
  const i = n ? ve(n.featureProjection) : null,
    r = n ? ve(n.dataProjection) : null;
  let s = t;
  if (i && r && !Ri(i, r)) {
    e && (s = t.clone());
    const o = e ? i : r,
      l = e ? r : i;
    o.getUnits() === "tile-pixels"
      ? s.transform(o, l)
      : s.applyTransform(Yr(o, l));
  }
  if (e && n && n.decimals !== void 0) {
    const o = Math.pow(10, n.decimals),
      l = function (a) {
        for (let u = 0, c = a.length; u < c; ++u)
          a[u] = Math.round(a[u] * o) / o;
        return a;
      };
    s === t && (s = t.clone()), s.applyTransform(l);
  }
  return s;
}
const OC = {
  Point: Br,
  LineString: Vc,
  Polygon: hi,
  MultiPoint: l0,
  MultiLineString: sx,
  MultiPolygon: ox,
};
function FC(t, e, n) {
  return Array.isArray(e[0])
    ? (D_(t, 0, e, n) || ((t = t.slice()), Yc(t, 0, e, n)), t)
    : (pd(t, 0, e, n) || ((t = t.slice()), ql(t, 0, e, n)), t);
}
function C0(t, e) {
  var s;
  const n = t.geometry;
  if (!n) return [];
  if (Array.isArray(n)) return n.map((o) => C0({ ...t, geometry: o })).flat();
  const i = n.type === "MultiPolygon" ? "Polygon" : n.type;
  if (i === "GeometryCollection" || i === "Circle")
    throw new Error("Unsupported geometry type: " + i);
  const r = n.layout.length;
  return Od(
    new Je(
      i,
      i === "Polygon" ? FC(n.flatCoordinates, n.ends, r) : n.flatCoordinates,
      (s = n.ends) == null ? void 0 : s.flat(),
      r,
      t.properties || {},
      t.id,
    ).enableSimplifyTransformed(),
    !1,
    e,
  );
}
function Fd(t, e) {
  if (!t) return null;
  if (Array.isArray(t)) {
    const i = t.map((r) => Fd(r, e));
    return new rx(i);
  }
  const n = OC[t.type];
  return Od(new n(t.flatCoordinates, t.layout, t.ends), !1, e);
}
class DC extends AC {
  constructor() {
    super();
  }
  getType() {
    return "json";
  }
  readFeature(e, n) {
    return this.readFeatureFromObject(ul(e), this.getReadOptions(e, n));
  }
  readFeatures(e, n) {
    return this.readFeaturesFromObject(ul(e), this.getReadOptions(e, n));
  }
  readFeatureFromObject(e, n) {
    return W();
  }
  readFeaturesFromObject(e, n) {
    return W();
  }
  readGeometry(e, n) {
    return this.readGeometryFromObject(ul(e), this.getReadOptions(e, n));
  }
  readGeometryFromObject(e, n) {
    return W();
  }
  readProjection(e) {
    return this.readProjectionFromObject(ul(e));
  }
  readProjectionFromObject(e) {
    return W();
  }
  writeFeature(e, n) {
    return JSON.stringify(this.writeFeatureObject(e, n));
  }
  writeFeatureObject(e, n) {
    return W();
  }
  writeFeatures(e, n) {
    return JSON.stringify(this.writeFeaturesObject(e, n));
  }
  writeFeaturesObject(e, n) {
    return W();
  }
  writeGeometry(e, n) {
    return JSON.stringify(this.writeGeometryObject(e, n));
  }
  writeGeometryObject(e, n) {
    return W();
  }
}
function ul(t) {
  if (typeof t == "string") {
    const e = JSON.parse(t);
    return e || null;
  }
  return t !== null ? t : null;
}
class NC extends DC {
  constructor(e) {
    (e = e || {}),
      super(),
      (this.dataProjection = ve(
        e.dataProjection ? e.dataProjection : "EPSG:4326",
      )),
      e.featureProjection &&
        (this.defaultFeatureProjection = ve(e.featureProjection)),
      e.featureClass && (this.featureClass = e.featureClass),
      (this.geometryName_ = e.geometryName),
      (this.extractGeometryName_ = e.extractGeometryName),
      (this.supportedMediaTypes = [
        "application/geo+json",
        "application/vnd.geo+json",
      ]);
  }
  readFeatureFromObject(e, n) {
    let i = null;
    e.type === "Feature"
      ? (i = e)
      : (i = { type: "Feature", geometry: e, properties: null });
    const r = Dd(i.geometry);
    if (this.featureClass === Je)
      return C0({ geometry: r, id: i.id, properties: i.properties }, n);
    const s = new Ia();
    return (
      this.geometryName_
        ? s.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ &&
          "geometry_name" in i !== void 0 &&
          s.setGeometryName(i.geometry_name),
      s.setGeometry(Fd(r, n)),
      "id" in i && s.setId(i.id),
      i.properties && s.setProperties(i.properties, !0),
      s
    );
  }
  readFeaturesFromObject(e, n) {
    const i = e;
    let r = null;
    if (i.type === "FeatureCollection") {
      const s = e;
      r = [];
      const o = s.features;
      for (let l = 0, a = o.length; l < a; ++l) {
        const u = this.readFeatureFromObject(o[l], n);
        u && r.push(u);
      }
    } else r = [this.readFeatureFromObject(e, n)];
    return r.flat();
  }
  readGeometryFromObject(e, n) {
    return zC(e, n);
  }
  readProjectionFromObject(e) {
    const n = e.crs;
    let i;
    if (n)
      if (n.type == "name") i = ve(n.properties.name);
      else if (n.type === "EPSG") i = ve("EPSG:" + n.properties.code);
      else throw new Error("Unknown SRS type");
    else i = this.dataProjection;
    return i;
  }
  writeFeatureObject(e, n) {
    n = this.adaptOptions(n);
    const i = { type: "Feature", geometry: null, properties: null },
      r = e.getId();
    if ((r !== void 0 && (i.id = r), !e.hasProperties())) return i;
    const s = e.getProperties(),
      o = e.getGeometry();
    return (
      o && ((i.geometry = eh(o, n)), delete s[e.getGeometryName()]),
      Xi(s) || (i.properties = s),
      i
    );
  }
  writeFeaturesObject(e, n) {
    n = this.adaptOptions(n);
    const i = [];
    for (let r = 0, s = e.length; r < s; ++r)
      i.push(this.writeFeatureObject(e[r], n));
    return { type: "FeatureCollection", features: i };
  }
  writeGeometryObject(e, n) {
    return eh(e, this.adaptOptions(n));
  }
}
function Dd(t, e) {
  if (!t) return null;
  let n;
  switch (t.type) {
    case "Point": {
      n = WC(t);
      break;
    }
    case "LineString": {
      n = jC(t);
      break;
    }
    case "Polygon": {
      n = BC(t);
      break;
    }
    case "MultiPoint": {
      n = UC(t);
      break;
    }
    case "MultiLineString": {
      n = XC(t);
      break;
    }
    case "MultiPolygon": {
      n = YC(t);
      break;
    }
    case "GeometryCollection": {
      n = GC(t);
      break;
    }
    default:
      throw new Error("Unsupported GeoJSON type: " + t.type);
  }
  return n;
}
function zC(t, e) {
  const n = Dd(t);
  return Fd(n, e);
}
function GC(t, e) {
  return t.geometries.map(function (i) {
    return Dd(i);
  });
}
function WC(t) {
  const e = t.coordinates;
  return { type: "Point", flatCoordinates: e, layout: Ki(e.length) };
}
function jC(t) {
  const e = t.coordinates,
    n = e.flat();
  return {
    type: "LineString",
    flatCoordinates: n,
    ends: [n.length],
    layout: Ki(e[0].length),
  };
}
function XC(t) {
  const e = t.coordinates,
    n = e[0][0].length,
    i = [],
    r = wo(i, 0, e, n);
  return {
    type: "MultiLineString",
    flatCoordinates: i,
    ends: r,
    layout: Ki(n),
  };
}
function UC(t) {
  const e = t.coordinates;
  return {
    type: "MultiPoint",
    flatCoordinates: e.flat(),
    layout: Ki(e[0].length),
  };
}
function YC(t) {
  const e = t.coordinates,
    n = [],
    i = e[0][0][0].length,
    r = I_(n, 0, e, i);
  return { type: "MultiPolygon", flatCoordinates: n, ends: r, layout: Ki(i) };
}
function BC(t) {
  const e = t.coordinates,
    n = [],
    i = e[0][0].length,
    r = wo(n, 0, e, i);
  return { type: "Polygon", flatCoordinates: n, ends: r, layout: Ki(i) };
}
function eh(t, e) {
  t = Od(t, !0, e);
  const n = t.getType();
  let i;
  switch (n) {
    case "Point": {
      i = $C(t);
      break;
    }
    case "LineString": {
      i = bC(t);
      break;
    }
    case "Polygon": {
      i = qC(t, e);
      break;
    }
    case "MultiPoint": {
      i = ZC(t);
      break;
    }
    case "MultiLineString": {
      i = KC(t);
      break;
    }
    case "MultiPolygon": {
      i = HC(t, e);
      break;
    }
    case "GeometryCollection": {
      i = VC(t, e);
      break;
    }
    case "Circle": {
      i = { type: "GeometryCollection", geometries: [] };
      break;
    }
    default:
      throw new Error("Unsupported geometry type: " + n);
  }
  return i;
}
function VC(t, e) {
  return (
    (e = Object.assign({}, e)),
    delete e.featureProjection,
    {
      type: "GeometryCollection",
      geometries: t.getGeometriesArray().map(function (i) {
        return eh(i, e);
      }),
    }
  );
}
function bC(t, e) {
  return { type: "LineString", coordinates: t.getCoordinates() };
}
function KC(t, e) {
  return { type: "MultiLineString", coordinates: t.getCoordinates() };
}
function ZC(t, e) {
  return { type: "MultiPoint", coordinates: t.getCoordinates() };
}
function HC(t, e) {
  let n;
  return (
    e && (n = e.rightHanded),
    { type: "MultiPolygon", coordinates: t.getCoordinates(n) }
  );
}
function $C(t, e) {
  return { type: "Point", coordinates: t.getCoordinates() };
}
function qC(t, e) {
  let n;
  return (
    e && (n = e.rightHanded),
    { type: "Polygon", coordinates: t.getCoordinates(n) }
  );
}
const QC = new ix({
  source: new hx({ url: "/KartBasert/kommuner.json", format: new NC() }),
});
function JC({ setLayers: t }) {
  const [e, n] = Vn.useState(!1);
  return (
    Vn.useEffect(() => {
      e && t((i) => [...i, QC]);
    }, [e]),
    Ct.createElement(
      "div",
      null,
      Ct.createElement(
        "label",
        null,
        Ct.createElement("input", {
          type: "checkbox",
          checked: e,
          onChange: (i) => n(i.target.checked),
        }),
        e ? "Hide" : "Show",
        " Kommune layer",
      ),
    )
  );
}
Av();
const ju = new tC({ view: new Kt({ center: [10, 59], zoom: 8 }) });
function eS() {
  function t(r) {
    r.preventDefault(),
      navigator.geolocation.getCurrentPosition((s) => {
        const { latitude: o, longitude: l } = s.coords;
        ju.getView().animate({ center: [l, o], zoom: 10 });
      });
  }
  const [e, n] = Vn.useState([new pC({ source: new MC() })]),
    i = Vn.useRef();
  return (
    Vn.useEffect(() => {
      ju.setTarget(i.current);
    }, []),
    Vn.useEffect(() => {
      ju.setLayers(e);
    }, [e]),
    Ct.createElement(
      Ct.Fragment,
      null,
      Ct.createElement(
        "header",
        null,
        Ct.createElement("h1", null, "Kommune Kart"),
      ),
      Ct.createElement(
        "nav",
        null,
        Ct.createElement("a", { href: "#", onClick: t }, "Focus on me"),
        Ct.createElement(JC, { setLayers: n }),
      ),
      Ct.createElement("main", { ref: i }),
    )
  );
}
const tS = Xu.createRoot(document.getElementById("root"));
tS.render(Ct.createElement(eS, null));
