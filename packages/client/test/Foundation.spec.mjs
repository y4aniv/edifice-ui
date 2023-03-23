var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _c;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  var f2 = n.default;
  if (typeof f2 == "function") {
    var a = function() {
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function commonjsRequire(path2) {
  throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var jasmine$1 = { exports: {} };
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var old$1 = {};
var pathModule = require$$1;
var isWindows = process.platform === "win32";
var fs$2 = require$$1;
var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
function rethrow() {
  var callback;
  if (DEBUG) {
    var backtrace = new Error();
    callback = debugCallback;
  } else
    callback = missingCallback;
  return callback;
  function debugCallback(err) {
    if (err) {
      backtrace.message = err.message;
      err = backtrace;
      missingCallback(err);
    }
  }
  function missingCallback(err) {
    if (err) {
      if (process.throwDeprecation)
        throw err;
      else if (!process.noDeprecation) {
        var msg = "fs: missing callback " + (err.stack || err.message);
        if (process.traceDeprecation)
          console.trace(msg);
        else
          console.error(msg);
      }
    }
  }
}
function maybeCallback(cb) {
  return typeof cb === "function" ? cb : rethrow();
}
pathModule.normalize;
if (isWindows) {
  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
}
if (isWindows) {
  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
  var splitRootRe = /^[\/]*/;
}
old$1.realpathSync = function realpathSync2(p, cache) {
  p = pathModule.resolve(p);
  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return cache[p];
  }
  var original = p, seenLinks = {}, knownHard = {};
  var pos;
  var current;
  var base;
  var previous;
  start();
  function start() {
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = "";
    if (isWindows && !knownHard[base]) {
      fs$2.lstatSync(base);
      knownHard[base] = true;
    }
  }
  while (pos < p.length) {
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;
    if (knownHard[base] || cache && cache[base] === base) {
      continue;
    }
    var resolvedLink;
    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      resolvedLink = cache[base];
    } else {
      var stat = fs$2.lstatSync(base);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache)
          cache[base] = base;
        continue;
      }
      var linkTarget = null;
      if (!isWindows) {
        var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          linkTarget = seenLinks[id];
        }
      }
      if (linkTarget === null) {
        fs$2.statSync(base);
        linkTarget = fs$2.readlinkSync(base);
      }
      resolvedLink = pathModule.resolve(previous, linkTarget);
      if (cache)
        cache[base] = resolvedLink;
      if (!isWindows)
        seenLinks[id] = linkTarget;
    }
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
  if (cache)
    cache[original] = p;
  return p;
};
old$1.realpath = function realpath2(p, cache, cb) {
  if (typeof cb !== "function") {
    cb = maybeCallback(cache);
    cache = null;
  }
  p = pathModule.resolve(p);
  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return process.nextTick(cb.bind(null, null, cache[p]));
  }
  var original = p, seenLinks = {}, knownHard = {};
  var pos;
  var current;
  var base;
  var previous;
  start();
  function start() {
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = "";
    if (isWindows && !knownHard[base]) {
      fs$2.lstat(base, function(err) {
        if (err)
          return cb(err);
        knownHard[base] = true;
        LOOP();
      });
    } else {
      process.nextTick(LOOP);
    }
  }
  function LOOP() {
    if (pos >= p.length) {
      if (cache)
        cache[original] = p;
      return cb(null, p);
    }
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;
    if (knownHard[base] || cache && cache[base] === base) {
      return process.nextTick(LOOP);
    }
    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      return gotResolvedLink(cache[base]);
    }
    return fs$2.lstat(base, gotStat);
  }
  function gotStat(err, stat) {
    if (err)
      return cb(err);
    if (!stat.isSymbolicLink()) {
      knownHard[base] = true;
      if (cache)
        cache[base] = base;
      return process.nextTick(LOOP);
    }
    if (!isWindows) {
      var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
      if (seenLinks.hasOwnProperty(id)) {
        return gotTarget(null, seenLinks[id], base);
      }
    }
    fs$2.stat(base, function(err2) {
      if (err2)
        return cb(err2);
      fs$2.readlink(base, function(err3, target) {
        if (!isWindows)
          seenLinks[id] = target;
        gotTarget(err3, target);
      });
    });
  }
  function gotTarget(err, target, base2) {
    if (err)
      return cb(err);
    var resolvedLink = pathModule.resolve(previous, target);
    if (cache)
      cache[base2] = resolvedLink;
    gotResolvedLink(resolvedLink);
  }
  function gotResolvedLink(resolvedLink) {
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
};
var fs_realpath = realpath;
realpath.realpath = realpath;
realpath.sync = realpathSync;
realpath.realpathSync = realpathSync;
realpath.monkeypatch = monkeypatch;
realpath.unmonkeypatch = unmonkeypatch;
var fs$1 = require$$1;
var origRealpath = fs$1.realpath;
var origRealpathSync = fs$1.realpathSync;
var version$1 = process.version;
var ok = /^v[0-5]\./.test(version$1);
var old = old$1;
function newError(er) {
  return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
}
function realpath(p, cache, cb) {
  if (ok) {
    return origRealpath(p, cache, cb);
  }
  if (typeof cache === "function") {
    cb = cache;
    cache = null;
  }
  origRealpath(p, cache, function(er, result) {
    if (newError(er)) {
      old.realpath(p, cache, cb);
    } else {
      cb(er, result);
    }
  });
}
function realpathSync(p, cache) {
  if (ok) {
    return origRealpathSync(p, cache);
  }
  try {
    return origRealpathSync(p, cache);
  } catch (er) {
    if (newError(er)) {
      return old.realpathSync(p, cache);
    } else {
      throw er;
    }
  }
}
function monkeypatch() {
  fs$1.realpath = realpath;
  fs$1.realpathSync = realpathSync;
}
function unmonkeypatch() {
  fs$1.realpath = origRealpath;
  fs$1.realpathSync = origRealpathSync;
}
var concatMap$1 = function(xs, fn) {
  var res = [];
  for (var i2 = 0; i2 < xs.length; i2++) {
    var x = fn(xs[i2], i2);
    if (isArray$1(x))
      res.push.apply(res, x);
    else
      res.push(x);
  }
  return res;
};
var isArray$1 = Array.isArray || function(xs) {
  return Object.prototype.toString.call(xs) === "[object Array]";
};
var balancedMatch = balanced$1;
function balanced$1(a, b, str) {
  if (a instanceof RegExp)
    a = maybeMatch(a, str);
  if (b instanceof RegExp)
    b = maybeMatch(b, str);
  var r = range(a, b, str);
  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}
function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}
balanced$1.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i2 = ai;
  if (ai >= 0 && bi > 0) {
    if (a === b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;
    while (i2 >= 0 && !result) {
      if (i2 == ai) {
        begs.push(i2);
        ai = str.indexOf(a, i2 + 1);
      } else if (begs.length == 1) {
        result = [begs.pop(), bi];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }
        bi = str.indexOf(b, i2 + 1);
      }
      i2 = ai < bi && ai >= 0 ? ai : bi;
    }
    if (begs.length) {
      result = [left, right];
    }
  }
  return result;
}
var concatMap = concatMap$1;
var balanced = balancedMatch;
var braceExpansion = expandTop;
var escSlash = "\0SLASH" + Math.random() + "\0";
var escOpen = "\0OPEN" + Math.random() + "\0";
var escClose = "\0CLOSE" + Math.random() + "\0";
var escComma = "\0COMMA" + Math.random() + "\0";
var escPeriod = "\0PERIOD" + Math.random() + "\0";
function numeric(str) {
  return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function escapeBraces(str) {
  return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
}
function unescapeBraces(str) {
  return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
}
function parseCommaParts(str) {
  if (!str)
    return [""];
  var parts = [];
  var m = balanced("{", "}", str);
  if (!m)
    return str.split(",");
  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(",");
  p[p.length - 1] += "{" + body + "}";
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length - 1] += postParts.shift();
    p.push.apply(p, postParts);
  }
  parts.push.apply(parts, p);
  return parts;
}
function expandTop(str) {
  if (!str)
    return [];
  if (str.substr(0, 2) === "{}") {
    str = "\\{\\}" + str.substr(2);
  }
  return expand$1(escapeBraces(str), true).map(unescapeBraces);
}
function embrace(str) {
  return "{" + str + "}";
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}
function lte(i2, y) {
  return i2 <= y;
}
function gte(i2, y) {
  return i2 >= y;
}
function expand$1(str, isTop) {
  var expansions = [];
  var m = balanced("{", "}", str);
  if (!m || /\$$/.test(m.pre))
    return [str];
  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(",") >= 0;
  if (!isSequence && !isOptions) {
    if (m.post.match(/,.*\}/)) {
      str = m.pre + "{" + m.body + escClose + m.post;
      return expand$1(str);
    }
    return [str];
  }
  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      n = expand$1(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length ? expand$1(m.post, false) : [""];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }
  var pre = m.pre;
  var post = m.post.length ? expand$1(m.post, false) : [""];
  var N;
  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length);
    var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);
    N = [];
    for (var i2 = x; test(i2, y); i2 += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i2);
        if (c === "\\")
          c = "";
      } else {
        c = String(i2);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join("0");
            if (i2 < 0)
              c = "-" + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) {
      return expand$1(el, false);
    });
  }
  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }
  return expansions;
}
var minimatch_1 = minimatch$1;
minimatch$1.Minimatch = Minimatch$1;
var path$1 = function() {
  try {
    return require$$1;
  } catch (e) {
  }
}() || {
  sep: "/"
};
minimatch$1.sep = path$1.sep;
var GLOBSTAR = minimatch$1.GLOBSTAR = Minimatch$1.GLOBSTAR = {};
var expand = braceExpansion;
var plTypes = {
  "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
  "?": { open: "(?:", close: ")?" },
  "+": { open: "(?:", close: ")+" },
  "*": { open: "(?:", close: ")*" },
  "@": { open: "(?:", close: ")" }
};
var qmark = "[^/]";
var star = qmark + "*?";
var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
var reSpecials = charSet("().*{}+?[]^$\\!");
function charSet(s) {
  return s.split("").reduce(function(set, c) {
    set[c] = true;
    return set;
  }, {});
}
var slashSplit = /\/+/;
minimatch$1.filter = filter$1;
function filter$1(pattern, options) {
  options = options || {};
  return function(p, i2, list) {
    return minimatch$1(p, pattern, options);
  };
}
function ext(a, b) {
  b = b || {};
  var t = {};
  Object.keys(a).forEach(function(k) {
    t[k] = a[k];
  });
  Object.keys(b).forEach(function(k) {
    t[k] = b[k];
  });
  return t;
}
minimatch$1.defaults = function(def) {
  if (!def || typeof def !== "object" || !Object.keys(def).length) {
    return minimatch$1;
  }
  var orig = minimatch$1;
  var m = function minimatch2(p, pattern, options) {
    return orig(p, pattern, ext(def, options));
  };
  m.Minimatch = function Minimatch2(pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options));
  };
  m.Minimatch.defaults = function defaults2(options) {
    return orig.defaults(ext(def, options)).Minimatch;
  };
  m.filter = function filter2(pattern, options) {
    return orig.filter(pattern, ext(def, options));
  };
  m.defaults = function defaults2(options) {
    return orig.defaults(ext(def, options));
  };
  m.makeRe = function makeRe2(pattern, options) {
    return orig.makeRe(pattern, ext(def, options));
  };
  m.braceExpand = function braceExpand2(pattern, options) {
    return orig.braceExpand(pattern, ext(def, options));
  };
  m.match = function(list, pattern, options) {
    return orig.match(list, pattern, ext(def, options));
  };
  return m;
};
Minimatch$1.defaults = function(def) {
  return minimatch$1.defaults(def).Minimatch;
};
function minimatch$1(p, pattern, options) {
  assertValidPattern(pattern);
  if (!options)
    options = {};
  if (!options.nocomment && pattern.charAt(0) === "#") {
    return false;
  }
  return new Minimatch$1(pattern, options).match(p);
}
function Minimatch$1(pattern, options) {
  if (!(this instanceof Minimatch$1)) {
    return new Minimatch$1(pattern, options);
  }
  assertValidPattern(pattern);
  if (!options)
    options = {};
  pattern = pattern.trim();
  if (!options.allowWindowsEscape && path$1.sep !== "/") {
    pattern = pattern.split(path$1.sep).join("/");
  }
  this.options = options;
  this.set = [];
  this.pattern = pattern;
  this.regexp = null;
  this.negate = false;
  this.comment = false;
  this.empty = false;
  this.partial = !!options.partial;
  this.make();
}
Minimatch$1.prototype.debug = function() {
};
Minimatch$1.prototype.make = make;
function make() {
  var pattern = this.pattern;
  var options = this.options;
  if (!options.nocomment && pattern.charAt(0) === "#") {
    this.comment = true;
    return;
  }
  if (!pattern) {
    this.empty = true;
    return;
  }
  this.parseNegate();
  var set = this.globSet = this.braceExpand();
  if (options.debug)
    this.debug = function debug() {
      console.error.apply(console, arguments);
    };
  this.debug(this.pattern, set);
  set = this.globParts = set.map(function(s) {
    return s.split(slashSplit);
  });
  this.debug(this.pattern, set);
  set = set.map(function(s, si, set2) {
    return s.map(this.parse, this);
  }, this);
  this.debug(this.pattern, set);
  set = set.filter(function(s) {
    return s.indexOf(false) === -1;
  });
  this.debug(this.pattern, set);
  this.set = set;
}
Minimatch$1.prototype.parseNegate = parseNegate;
function parseNegate() {
  var pattern = this.pattern;
  var negate = false;
  var options = this.options;
  var negateOffset = 0;
  if (options.nonegate)
    return;
  for (var i2 = 0, l = pattern.length; i2 < l && pattern.charAt(i2) === "!"; i2++) {
    negate = !negate;
    negateOffset++;
  }
  if (negateOffset)
    this.pattern = pattern.substr(negateOffset);
  this.negate = negate;
}
minimatch$1.braceExpand = function(pattern, options) {
  return braceExpand(pattern, options);
};
Minimatch$1.prototype.braceExpand = braceExpand;
function braceExpand(pattern, options) {
  if (!options) {
    if (this instanceof Minimatch$1) {
      options = this.options;
    } else {
      options = {};
    }
  }
  pattern = typeof pattern === "undefined" ? this.pattern : pattern;
  assertValidPattern(pattern);
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    return [pattern];
  }
  return expand(pattern);
}
var MAX_PATTERN_LENGTH = 1024 * 64;
var assertValidPattern = function(pattern) {
  if (typeof pattern !== "string") {
    throw new TypeError("invalid pattern");
  }
  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError("pattern is too long");
  }
};
Minimatch$1.prototype.parse = parse;
var SUBPARSE = {};
function parse(pattern, isSub) {
  assertValidPattern(pattern);
  var options = this.options;
  if (pattern === "**") {
    if (!options.noglobstar)
      return GLOBSTAR;
    else
      pattern = "*";
  }
  if (pattern === "")
    return "";
  var re = "";
  var hasMagic = !!options.nocase;
  var escaping = false;
  var patternListStack = [];
  var negativeLists = [];
  var stateChar;
  var inClass = false;
  var reClassStart = -1;
  var classStart = -1;
  var patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
  var self2 = this;
  function clearStateChar() {
    if (stateChar) {
      switch (stateChar) {
        case "*":
          re += star;
          hasMagic = true;
          break;
        case "?":
          re += qmark;
          hasMagic = true;
          break;
        default:
          re += "\\" + stateChar;
          break;
      }
      self2.debug("clearStateChar %j %j", stateChar, re);
      stateChar = false;
    }
  }
  for (var i2 = 0, len = pattern.length, c; i2 < len && (c = pattern.charAt(i2)); i2++) {
    this.debug("%s	%s %s %j", pattern, i2, re, c);
    if (escaping && reSpecials[c]) {
      re += "\\" + c;
      escaping = false;
      continue;
    }
    switch (c) {
      case "/": {
        return false;
      }
      case "\\":
        clearStateChar();
        escaping = true;
        continue;
      case "?":
      case "*":
      case "+":
      case "@":
      case "!":
        this.debug("%s	%s %s %j <-- stateChar", pattern, i2, re, c);
        if (inClass) {
          this.debug("  in class");
          if (c === "!" && i2 === classStart + 1)
            c = "^";
          re += c;
          continue;
        }
        self2.debug("call clearStateChar %j", stateChar);
        clearStateChar();
        stateChar = c;
        if (options.noext)
          clearStateChar();
        continue;
      case "(":
        if (inClass) {
          re += "(";
          continue;
        }
        if (!stateChar) {
          re += "\\(";
          continue;
        }
        patternListStack.push({
          type: stateChar,
          start: i2 - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        });
        re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
        this.debug("plType %j %j", stateChar, re);
        stateChar = false;
        continue;
      case ")":
        if (inClass || !patternListStack.length) {
          re += "\\)";
          continue;
        }
        clearStateChar();
        hasMagic = true;
        var pl = patternListStack.pop();
        re += pl.close;
        if (pl.type === "!") {
          negativeLists.push(pl);
        }
        pl.reEnd = re.length;
        continue;
      case "|":
        if (inClass || !patternListStack.length || escaping) {
          re += "\\|";
          escaping = false;
          continue;
        }
        clearStateChar();
        re += "|";
        continue;
      case "[":
        clearStateChar();
        if (inClass) {
          re += "\\" + c;
          continue;
        }
        inClass = true;
        classStart = i2;
        reClassStart = re.length;
        re += c;
        continue;
      case "]":
        if (i2 === classStart + 1 || !inClass) {
          re += "\\" + c;
          escaping = false;
          continue;
        }
        var cs = pattern.substring(classStart + 1, i2);
        try {
          RegExp("[" + cs + "]");
        } catch (er) {
          var sp = this.parse(cs, SUBPARSE);
          re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
          hasMagic = hasMagic || sp[1];
          inClass = false;
          continue;
        }
        hasMagic = true;
        inClass = false;
        re += c;
        continue;
      default:
        clearStateChar();
        if (escaping) {
          escaping = false;
        } else if (reSpecials[c] && !(c === "^" && inClass)) {
          re += "\\";
        }
        re += c;
    }
  }
  if (inClass) {
    cs = pattern.substr(classStart + 1);
    sp = this.parse(cs, SUBPARSE);
    re = re.substr(0, reClassStart) + "\\[" + sp[0];
    hasMagic = hasMagic || sp[1];
  }
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length);
    this.debug("setting tail", re, pl);
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(_, $1, $2) {
      if (!$2) {
        $2 = "\\";
      }
      return $1 + $1 + $2 + "|";
    });
    this.debug("tail=%j\n   %s", tail, tail, pl, re);
    var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
    hasMagic = true;
    re = re.slice(0, pl.reStart) + t + "\\(" + tail;
  }
  clearStateChar();
  if (escaping) {
    re += "\\\\";
  }
  var addPatternStart = false;
  switch (re.charAt(0)) {
    case "[":
    case ".":
    case "(":
      addPatternStart = true;
  }
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n];
    var nlBefore = re.slice(0, nl.reStart);
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
    var nlAfter = re.slice(nl.reEnd);
    nlLast += nlAfter;
    var openParensBefore = nlBefore.split("(").length - 1;
    var cleanAfter = nlAfter;
    for (i2 = 0; i2 < openParensBefore; i2++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
    }
    nlAfter = cleanAfter;
    var dollar = "";
    if (nlAfter === "" && isSub !== SUBPARSE) {
      dollar = "$";
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
    re = newRe;
  }
  if (re !== "" && hasMagic) {
    re = "(?=.)" + re;
  }
  if (addPatternStart) {
    re = patternStart + re;
  }
  if (isSub === SUBPARSE) {
    return [re, hasMagic];
  }
  if (!hasMagic) {
    return globUnescape(pattern);
  }
  var flags = options.nocase ? "i" : "";
  try {
    var regExp = new RegExp("^" + re + "$", flags);
  } catch (er) {
    return new RegExp("$.");
  }
  regExp._glob = pattern;
  regExp._src = re;
  return regExp;
}
minimatch$1.makeRe = function(pattern, options) {
  return new Minimatch$1(pattern, options || {}).makeRe();
};
Minimatch$1.prototype.makeRe = makeRe;
function makeRe() {
  if (this.regexp || this.regexp === false)
    return this.regexp;
  var set = this.set;
  if (!set.length) {
    this.regexp = false;
    return this.regexp;
  }
  var options = this.options;
  var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
  var flags = options.nocase ? "i" : "";
  var re = set.map(function(pattern) {
    return pattern.map(function(p) {
      return p === GLOBSTAR ? twoStar : typeof p === "string" ? regExpEscape(p) : p._src;
    }).join("\\/");
  }).join("|");
  re = "^(?:" + re + ")$";
  if (this.negate)
    re = "^(?!" + re + ").*$";
  try {
    this.regexp = new RegExp(re, flags);
  } catch (ex) {
    this.regexp = false;
  }
  return this.regexp;
}
minimatch$1.match = function(list, pattern, options) {
  options = options || {};
  var mm = new Minimatch$1(pattern, options);
  list = list.filter(function(f2) {
    return mm.match(f2);
  });
  if (mm.options.nonull && !list.length) {
    list.push(pattern);
  }
  return list;
};
Minimatch$1.prototype.match = function match(f2, partial) {
  if (typeof partial === "undefined")
    partial = this.partial;
  this.debug("match", f2, this.pattern);
  if (this.comment)
    return false;
  if (this.empty)
    return f2 === "";
  if (f2 === "/" && partial)
    return true;
  var options = this.options;
  if (path$1.sep !== "/") {
    f2 = f2.split(path$1.sep).join("/");
  }
  f2 = f2.split(slashSplit);
  this.debug(this.pattern, "split", f2);
  var set = this.set;
  this.debug(this.pattern, "set", set);
  var filename;
  var i2;
  for (i2 = f2.length - 1; i2 >= 0; i2--) {
    filename = f2[i2];
    if (filename)
      break;
  }
  for (i2 = 0; i2 < set.length; i2++) {
    var pattern = set[i2];
    var file = f2;
    if (options.matchBase && pattern.length === 1) {
      file = [filename];
    }
    var hit = this.matchOne(file, pattern, partial);
    if (hit) {
      if (options.flipNegate)
        return true;
      return !this.negate;
    }
  }
  if (options.flipNegate)
    return false;
  return this.negate;
};
Minimatch$1.prototype.matchOne = function(file, pattern, partial) {
  var options = this.options;
  this.debug(
    "matchOne",
    { "this": this, file, pattern }
  );
  this.debug("matchOne", file.length, pattern.length);
  for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
    this.debug("matchOne loop");
    var p = pattern[pi];
    var f2 = file[fi];
    this.debug(pattern, p, f2);
    if (p === false)
      return false;
    if (p === GLOBSTAR) {
      this.debug("GLOBSTAR", [pattern, p, f2]);
      var fr = fi;
      var pr = pi + 1;
      if (pr === pl) {
        this.debug("** at the end");
        for (; fi < fl; fi++) {
          if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
            return false;
        }
        return true;
      }
      while (fr < fl) {
        var swallowee = file[fr];
        this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug("globstar found match!", fr, fl, swallowee);
          return true;
        } else {
          if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
            this.debug("dot detected!", file, fr, pattern, pr);
            break;
          }
          this.debug("globstar swallow a segment, and continue");
          fr++;
        }
      }
      if (partial) {
        this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
        if (fr === fl)
          return true;
      }
      return false;
    }
    var hit;
    if (typeof p === "string") {
      hit = f2 === p;
      this.debug("string match", p, f2, hit);
    } else {
      hit = f2.match(p);
      this.debug("pattern match", p, f2, hit);
    }
    if (!hit)
      return false;
  }
  if (fi === fl && pi === pl) {
    return true;
  } else if (fi === fl) {
    return partial;
  } else if (pi === pl) {
    return fi === fl - 1 && file[fi] === "";
  }
  throw new Error("wtf?");
};
function globUnescape(s) {
  return s.replace(/\\(.)/g, "$1");
}
function regExpEscape(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
var inherits_browser = { exports: {} };
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
var pathIsAbsolute = { exports: {} };
function posix(path2) {
  return path2.charAt(0) === "/";
}
function win32(path2) {
  var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
  var result = splitDeviceRe.exec(path2);
  var device = result[1] || "";
  var isUnc = Boolean(device && device.charAt(1) !== ":");
  return Boolean(result[2] || isUnc);
}
pathIsAbsolute.exports = process.platform === "win32" ? win32 : posix;
pathIsAbsolute.exports.posix = posix;
pathIsAbsolute.exports.win32 = win32;
var common = {};
common.setopts = setopts;
common.ownProp = ownProp;
common.makeAbs = makeAbs;
common.finish = finish;
common.mark = mark;
common.isIgnored = isIgnored;
common.childrenIgnored = childrenIgnored;
function ownProp(obj, field) {
  return Object.prototype.hasOwnProperty.call(obj, field);
}
var fs = require$$1;
var path = require$$1;
var minimatch = minimatch_1;
var isAbsolute = pathIsAbsolute.exports;
var Minimatch = minimatch.Minimatch;
function alphasort(a, b) {
  return a.localeCompare(b, "en");
}
function setupIgnores(self2, options) {
  self2.ignore = options.ignore || [];
  if (!Array.isArray(self2.ignore))
    self2.ignore = [self2.ignore];
  if (self2.ignore.length) {
    self2.ignore = self2.ignore.map(ignoreMap);
  }
}
function ignoreMap(pattern) {
  var gmatcher = null;
  if (pattern.slice(-3) === "/**") {
    var gpattern = pattern.replace(/(\/\*\*)+$/, "");
    gmatcher = new Minimatch(gpattern, { dot: true });
  }
  return {
    matcher: new Minimatch(pattern, { dot: true }),
    gmatcher
  };
}
function setopts(self2, pattern, options) {
  if (!options)
    options = {};
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar");
    }
    pattern = "**/" + pattern;
  }
  self2.silent = !!options.silent;
  self2.pattern = pattern;
  self2.strict = options.strict !== false;
  self2.realpath = !!options.realpath;
  self2.realpathCache = options.realpathCache || /* @__PURE__ */ Object.create(null);
  self2.follow = !!options.follow;
  self2.dot = !!options.dot;
  self2.mark = !!options.mark;
  self2.nodir = !!options.nodir;
  if (self2.nodir)
    self2.mark = true;
  self2.sync = !!options.sync;
  self2.nounique = !!options.nounique;
  self2.nonull = !!options.nonull;
  self2.nosort = !!options.nosort;
  self2.nocase = !!options.nocase;
  self2.stat = !!options.stat;
  self2.noprocess = !!options.noprocess;
  self2.absolute = !!options.absolute;
  self2.fs = options.fs || fs;
  self2.maxLength = options.maxLength || Infinity;
  self2.cache = options.cache || /* @__PURE__ */ Object.create(null);
  self2.statCache = options.statCache || /* @__PURE__ */ Object.create(null);
  self2.symlinks = options.symlinks || /* @__PURE__ */ Object.create(null);
  setupIgnores(self2, options);
  self2.changedCwd = false;
  var cwd = process.cwd();
  if (!ownProp(options, "cwd"))
    self2.cwd = cwd;
  else {
    self2.cwd = path.resolve(options.cwd);
    self2.changedCwd = self2.cwd !== cwd;
  }
  self2.root = options.root || path.resolve(self2.cwd, "/");
  self2.root = path.resolve(self2.root);
  if (process.platform === "win32")
    self2.root = self2.root.replace(/\\/g, "/");
  self2.cwdAbs = isAbsolute(self2.cwd) ? self2.cwd : makeAbs(self2, self2.cwd);
  if (process.platform === "win32")
    self2.cwdAbs = self2.cwdAbs.replace(/\\/g, "/");
  self2.nomount = !!options.nomount;
  options.nonegate = true;
  options.nocomment = true;
  options.allowWindowsEscape = false;
  self2.minimatch = new Minimatch(pattern, options);
  self2.options = self2.minimatch.options;
}
function finish(self2) {
  var nou = self2.nounique;
  var all2 = nou ? [] : /* @__PURE__ */ Object.create(null);
  for (var i2 = 0, l = self2.matches.length; i2 < l; i2++) {
    var matches = self2.matches[i2];
    if (!matches || Object.keys(matches).length === 0) {
      if (self2.nonull) {
        var literal = self2.minimatch.globSet[i2];
        if (nou)
          all2.push(literal);
        else
          all2[literal] = true;
      }
    } else {
      var m = Object.keys(matches);
      if (nou)
        all2.push.apply(all2, m);
      else
        m.forEach(function(m2) {
          all2[m2] = true;
        });
    }
  }
  if (!nou)
    all2 = Object.keys(all2);
  if (!self2.nosort)
    all2 = all2.sort(alphasort);
  if (self2.mark) {
    for (var i2 = 0; i2 < all2.length; i2++) {
      all2[i2] = self2._mark(all2[i2]);
    }
    if (self2.nodir) {
      all2 = all2.filter(function(e) {
        var notDir = !/\/$/.test(e);
        var c = self2.cache[e] || self2.cache[makeAbs(self2, e)];
        if (notDir && c)
          notDir = c !== "DIR" && !Array.isArray(c);
        return notDir;
      });
    }
  }
  if (self2.ignore.length)
    all2 = all2.filter(function(m2) {
      return !isIgnored(self2, m2);
    });
  self2.found = all2;
}
function mark(self2, p) {
  var abs = makeAbs(self2, p);
  var c = self2.cache[abs];
  var m = p;
  if (c) {
    var isDir = c === "DIR" || Array.isArray(c);
    var slash = p.slice(-1) === "/";
    if (isDir && !slash)
      m += "/";
    else if (!isDir && slash)
      m = m.slice(0, -1);
    if (m !== p) {
      var mabs = makeAbs(self2, m);
      self2.statCache[mabs] = self2.statCache[abs];
      self2.cache[mabs] = self2.cache[abs];
    }
  }
  return m;
}
function makeAbs(self2, f2) {
  var abs = f2;
  if (f2.charAt(0) === "/") {
    abs = path.join(self2.root, f2);
  } else if (isAbsolute(f2) || f2 === "") {
    abs = f2;
  } else if (self2.changedCwd) {
    abs = path.resolve(self2.cwd, f2);
  } else {
    abs = path.resolve(f2);
  }
  if (process.platform === "win32")
    abs = abs.replace(/\\/g, "/");
  return abs;
}
function isIgnored(self2, path2) {
  if (!self2.ignore.length)
    return false;
  return self2.ignore.some(function(item) {
    return item.matcher.match(path2) || !!(item.gmatcher && item.gmatcher.match(path2));
  });
}
function childrenIgnored(self2, path2) {
  if (!self2.ignore.length)
    return false;
  return self2.ignore.some(function(item) {
    return !!(item.gmatcher && item.gmatcher.match(path2));
  });
}
var sync;
var hasRequiredSync;
function requireSync() {
  if (hasRequiredSync)
    return sync;
  hasRequiredSync = 1;
  sync = globSync;
  globSync.GlobSync = GlobSync;
  var rp = fs_realpath;
  var minimatch2 = minimatch_1;
  minimatch2.Minimatch;
  requireGlob().Glob;
  var path2 = require$$1;
  var assert = require$$1;
  var isAbsolute2 = pathIsAbsolute.exports;
  var common$1 = common;
  var setopts2 = common$1.setopts;
  var ownProp2 = common$1.ownProp;
  var childrenIgnored2 = common$1.childrenIgnored;
  var isIgnored2 = common$1.isIgnored;
  function globSync(pattern, options) {
    if (typeof options === "function" || arguments.length === 3)
      throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
    return new GlobSync(pattern, options).found;
  }
  function GlobSync(pattern, options) {
    if (!pattern)
      throw new Error("must provide pattern");
    if (typeof options === "function" || arguments.length === 3)
      throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
    if (!(this instanceof GlobSync))
      return new GlobSync(pattern, options);
    setopts2(this, pattern, options);
    if (this.noprocess)
      return this;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    for (var i2 = 0; i2 < n; i2++) {
      this._process(this.minimatch.set[i2], i2, false);
    }
    this._finish();
  }
  GlobSync.prototype._finish = function() {
    assert.ok(this instanceof GlobSync);
    if (this.realpath) {
      var self2 = this;
      this.matches.forEach(function(matchset, index) {
        var set = self2.matches[index] = /* @__PURE__ */ Object.create(null);
        for (var p in matchset) {
          try {
            p = self2._makeAbs(p);
            var real = rp.realpathSync(p, self2.realpathCache);
            set[real] = true;
          } catch (er) {
            if (er.syscall === "stat")
              set[self2._makeAbs(p)] = true;
            else
              throw er;
          }
        }
      });
    }
    common$1.finish(this);
  };
  GlobSync.prototype._process = function(pattern, index, inGlobStar) {
    assert.ok(this instanceof GlobSync);
    var n = 0;
    while (typeof pattern[n] === "string") {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join("/"), index);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join("/");
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null)
      read = ".";
    else if (isAbsolute2(prefix) || isAbsolute2(pattern.map(function(p) {
      return typeof p === "string" ? p : "[*]";
    }).join("/"))) {
      if (!prefix || !isAbsolute2(prefix))
        prefix = "/" + prefix;
      read = prefix;
    } else
      read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored2(this, read))
      return;
    var isGlobStar = remain[0] === minimatch2.GLOBSTAR;
    if (isGlobStar)
      this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
    else
      this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
  };
  GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries)
      return;
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === ".";
    var matchedEntries = [];
    for (var i2 = 0; i2 < entries.length; i2++) {
      var e = entries[i2];
      if (e.charAt(0) !== "." || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m)
          matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0)
      return;
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      for (var i2 = 0; i2 < len; i2++) {
        var e = matchedEntries[i2];
        if (prefix) {
          if (prefix.slice(-1) !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        if (e.charAt(0) === "/" && !this.nomount) {
          e = path2.join(this.root, e);
        }
        this._emitMatch(index, e);
      }
      return;
    }
    remain.shift();
    for (var i2 = 0; i2 < len; i2++) {
      var e = matchedEntries[i2];
      var newPattern;
      if (prefix)
        newPattern = [prefix, e];
      else
        newPattern = [e];
      this._process(newPattern.concat(remain), index, inGlobStar);
    }
  };
  GlobSync.prototype._emitMatch = function(index, e) {
    if (isIgnored2(this, e))
      return;
    var abs = this._makeAbs(e);
    if (this.mark)
      e = this._mark(e);
    if (this.absolute) {
      e = abs;
    }
    if (this.matches[index][e])
      return;
    if (this.nodir) {
      var c = this.cache[abs];
      if (c === "DIR" || Array.isArray(c))
        return;
    }
    this.matches[index][e] = true;
    if (this.stat)
      this._stat(e);
  };
  GlobSync.prototype._readdirInGlobStar = function(abs) {
    if (this.follow)
      return this._readdir(abs, false);
    var entries;
    var lstat;
    try {
      lstat = this.fs.lstatSync(abs);
    } catch (er) {
      if (er.code === "ENOENT") {
        return null;
      }
    }
    var isSym = lstat && lstat.isSymbolicLink();
    this.symlinks[abs] = isSym;
    if (!isSym && lstat && !lstat.isDirectory())
      this.cache[abs] = "FILE";
    else
      entries = this._readdir(abs, false);
    return entries;
  };
  GlobSync.prototype._readdir = function(abs, inGlobStar) {
    if (inGlobStar && !ownProp2(this.symlinks, abs))
      return this._readdirInGlobStar(abs);
    if (ownProp2(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === "FILE")
        return null;
      if (Array.isArray(c))
        return c;
    }
    try {
      return this._readdirEntries(abs, this.fs.readdirSync(abs));
    } catch (er) {
      this._readdirError(abs, er);
      return null;
    }
  };
  GlobSync.prototype._readdirEntries = function(abs, entries) {
    if (!this.mark && !this.stat) {
      for (var i2 = 0; i2 < entries.length; i2++) {
        var e = entries[i2];
        if (abs === "/")
          e = abs + e;
        else
          e = abs + "/" + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return entries;
  };
  GlobSync.prototype._readdirError = function(f2, er) {
    switch (er.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var abs = this._makeAbs(f2);
        this.cache[abs] = "FILE";
        if (abs === this.cwdAbs) {
          var error = new Error(er.code + " invalid cwd " + this.cwd);
          error.path = this.cwd;
          error.code = er.code;
          throw error;
        }
        break;
      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(f2)] = false;
        break;
      default:
        this.cache[this._makeAbs(f2)] = false;
        if (this.strict)
          throw er;
        if (!this.silent)
          console.error("glob error", er);
        break;
    }
  };
  GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries)
      return;
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false);
    var len = entries.length;
    var isSym = this.symlinks[abs];
    if (isSym && inGlobStar)
      return;
    for (var i2 = 0; i2 < len; i2++) {
      var e = entries[i2];
      if (e.charAt(0) === "." && !this.dot)
        continue;
      var instead = gspref.concat(entries[i2], remainWithoutGlobStar);
      this._process(instead, index, true);
      var below = gspref.concat(entries[i2], remain);
      this._process(below, index, true);
    }
  };
  GlobSync.prototype._processSimple = function(prefix, index) {
    var exists = this._stat(prefix);
    if (!this.matches[index])
      this.matches[index] = /* @__PURE__ */ Object.create(null);
    if (!exists)
      return;
    if (prefix && isAbsolute2(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === "/") {
        prefix = path2.join(this.root, prefix);
      } else {
        prefix = path2.resolve(this.root, prefix);
        if (trail)
          prefix += "/";
      }
    }
    if (process.platform === "win32")
      prefix = prefix.replace(/\\/g, "/");
    this._emitMatch(index, prefix);
  };
  GlobSync.prototype._stat = function(f2) {
    var abs = this._makeAbs(f2);
    var needDir = f2.slice(-1) === "/";
    if (f2.length > this.maxLength)
      return false;
    if (!this.stat && ownProp2(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c))
        c = "DIR";
      if (!needDir || c === "DIR")
        return c;
      if (needDir && c === "FILE")
        return false;
    }
    var stat = this.statCache[abs];
    if (!stat) {
      var lstat;
      try {
        lstat = this.fs.lstatSync(abs);
      } catch (er) {
        if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
          this.statCache[abs] = false;
          return false;
        }
      }
      if (lstat && lstat.isSymbolicLink()) {
        try {
          stat = this.fs.statSync(abs);
        } catch (er) {
          stat = lstat;
        }
      } else {
        stat = lstat;
      }
    }
    this.statCache[abs] = stat;
    var c = true;
    if (stat)
      c = stat.isDirectory() ? "DIR" : "FILE";
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === "FILE")
      return false;
    return c;
  };
  GlobSync.prototype._mark = function(p) {
    return common$1.mark(this, p);
  };
  GlobSync.prototype._makeAbs = function(f2) {
    return common$1.makeAbs(this, f2);
  };
  return sync;
}
var wrappy_1 = wrappy$2;
function wrappy$2(fn, cb) {
  if (fn && cb)
    return wrappy$2(fn)(cb);
  if (typeof fn !== "function")
    throw new TypeError("need wrapper function");
  Object.keys(fn).forEach(function(k) {
    wrapper[k] = fn[k];
  });
  return wrapper;
  function wrapper() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    var ret = fn.apply(this, args);
    var cb2 = args[args.length - 1];
    if (typeof ret === "function" && ret !== cb2) {
      Object.keys(cb2).forEach(function(k) {
        ret[k] = cb2[k];
      });
    }
    return ret;
  }
}
var once$2 = { exports: {} };
var wrappy$1 = wrappy_1;
once$2.exports = wrappy$1(once$1);
once$2.exports.strict = wrappy$1(onceStrict);
once$1.proto = once$1(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return once$1(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return onceStrict(this);
    },
    configurable: true
  });
});
function once$1(fn) {
  var f2 = function() {
    if (f2.called)
      return f2.value;
    f2.called = true;
    return f2.value = fn.apply(this, arguments);
  };
  f2.called = false;
  return f2;
}
function onceStrict(fn) {
  var f2 = function() {
    if (f2.called)
      throw new Error(f2.onceError);
    f2.called = true;
    return f2.value = fn.apply(this, arguments);
  };
  var name2 = fn.name || "Function wrapped with `once`";
  f2.onceError = name2 + " shouldn't be called more than once";
  f2.called = false;
  return f2;
}
var wrappy = wrappy_1;
var reqs = /* @__PURE__ */ Object.create(null);
var once = once$2.exports;
var inflight_1 = wrappy(inflight);
function inflight(key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb);
    return null;
  } else {
    reqs[key] = [cb];
    return makeres(key);
  }
}
function makeres(key) {
  return once(function RES() {
    var cbs = reqs[key];
    var len = cbs.length;
    var args = slice(arguments);
    try {
      for (var i2 = 0; i2 < len; i2++) {
        cbs[i2].apply(null, args);
      }
    } finally {
      if (cbs.length > len) {
        cbs.splice(0, len);
        process.nextTick(function() {
          RES.apply(null, args);
        });
      } else {
        delete reqs[key];
      }
    }
  });
}
function slice(args) {
  var length = args.length;
  var array = [];
  for (var i2 = 0; i2 < length; i2++)
    array[i2] = args[i2];
  return array;
}
var glob_1;
var hasRequiredGlob;
function requireGlob() {
  if (hasRequiredGlob)
    return glob_1;
  hasRequiredGlob = 1;
  glob_1 = glob;
  var rp = fs_realpath;
  var minimatch2 = minimatch_1;
  minimatch2.Minimatch;
  var inherits = inherits_browser.exports;
  var EE = require$$1.EventEmitter;
  var path2 = require$$1;
  var assert = require$$1;
  var isAbsolute2 = pathIsAbsolute.exports;
  var globSync = requireSync();
  var common$1 = common;
  var setopts2 = common$1.setopts;
  var ownProp2 = common$1.ownProp;
  var inflight2 = inflight_1;
  var childrenIgnored2 = common$1.childrenIgnored;
  var isIgnored2 = common$1.isIgnored;
  var once2 = once$2.exports;
  function glob(pattern, options, cb) {
    if (typeof options === "function")
      cb = options, options = {};
    if (!options)
      options = {};
    if (options.sync) {
      if (cb)
        throw new TypeError("callback provided to sync glob");
      return globSync(pattern, options);
    }
    return new Glob(pattern, options, cb);
  }
  glob.sync = globSync;
  var GlobSync = glob.GlobSync = globSync.GlobSync;
  glob.glob = glob;
  function extend2(origin, add) {
    if (add === null || typeof add !== "object") {
      return origin;
    }
    var keys = Object.keys(add);
    var i2 = keys.length;
    while (i2--) {
      origin[keys[i2]] = add[keys[i2]];
    }
    return origin;
  }
  glob.hasMagic = function(pattern, options_) {
    var options = extend2({}, options_);
    options.noprocess = true;
    var g = new Glob(pattern, options);
    var set = g.minimatch.set;
    if (!pattern)
      return false;
    if (set.length > 1)
      return true;
    for (var j = 0; j < set[0].length; j++) {
      if (typeof set[0][j] !== "string")
        return true;
    }
    return false;
  };
  glob.Glob = Glob;
  inherits(Glob, EE);
  function Glob(pattern, options, cb) {
    if (typeof options === "function") {
      cb = options;
      options = null;
    }
    if (options && options.sync) {
      if (cb)
        throw new TypeError("callback provided to sync glob");
      return new GlobSync(pattern, options);
    }
    if (!(this instanceof Glob))
      return new Glob(pattern, options, cb);
    setopts2(this, pattern, options);
    this._didRealPath = false;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    if (typeof cb === "function") {
      cb = once2(cb);
      this.on("error", cb);
      this.on("end", function(matches) {
        cb(null, matches);
      });
    }
    var self2 = this;
    this._processing = 0;
    this._emitQueue = [];
    this._processQueue = [];
    this.paused = false;
    if (this.noprocess)
      return this;
    if (n === 0)
      return done();
    var sync2 = true;
    for (var i2 = 0; i2 < n; i2++) {
      this._process(this.minimatch.set[i2], i2, false, done);
    }
    sync2 = false;
    function done() {
      --self2._processing;
      if (self2._processing <= 0) {
        if (sync2) {
          process.nextTick(function() {
            self2._finish();
          });
        } else {
          self2._finish();
        }
      }
    }
  }
  Glob.prototype._finish = function() {
    assert(this instanceof Glob);
    if (this.aborted)
      return;
    if (this.realpath && !this._didRealpath)
      return this._realpath();
    common$1.finish(this);
    this.emit("end", this.found);
  };
  Glob.prototype._realpath = function() {
    if (this._didRealpath)
      return;
    this._didRealpath = true;
    var n = this.matches.length;
    if (n === 0)
      return this._finish();
    var self2 = this;
    for (var i2 = 0; i2 < this.matches.length; i2++)
      this._realpathSet(i2, next);
    function next() {
      if (--n === 0)
        self2._finish();
    }
  };
  Glob.prototype._realpathSet = function(index, cb) {
    var matchset = this.matches[index];
    if (!matchset)
      return cb();
    var found = Object.keys(matchset);
    var self2 = this;
    var n = found.length;
    if (n === 0)
      return cb();
    var set = this.matches[index] = /* @__PURE__ */ Object.create(null);
    found.forEach(function(p, i2) {
      p = self2._makeAbs(p);
      rp.realpath(p, self2.realpathCache, function(er, real) {
        if (!er)
          set[real] = true;
        else if (er.syscall === "stat")
          set[p] = true;
        else
          self2.emit("error", er);
        if (--n === 0) {
          self2.matches[index] = set;
          cb();
        }
      });
    });
  };
  Glob.prototype._mark = function(p) {
    return common$1.mark(this, p);
  };
  Glob.prototype._makeAbs = function(f2) {
    return common$1.makeAbs(this, f2);
  };
  Glob.prototype.abort = function() {
    this.aborted = true;
    this.emit("abort");
  };
  Glob.prototype.pause = function() {
    if (!this.paused) {
      this.paused = true;
      this.emit("pause");
    }
  };
  Glob.prototype.resume = function() {
    if (this.paused) {
      this.emit("resume");
      this.paused = false;
      if (this._emitQueue.length) {
        var eq = this._emitQueue.slice(0);
        this._emitQueue.length = 0;
        for (var i2 = 0; i2 < eq.length; i2++) {
          var e = eq[i2];
          this._emitMatch(e[0], e[1]);
        }
      }
      if (this._processQueue.length) {
        var pq = this._processQueue.slice(0);
        this._processQueue.length = 0;
        for (var i2 = 0; i2 < pq.length; i2++) {
          var p = pq[i2];
          this._processing--;
          this._process(p[0], p[1], p[2], p[3]);
        }
      }
    }
  };
  Glob.prototype._process = function(pattern, index, inGlobStar, cb) {
    assert(this instanceof Glob);
    assert(typeof cb === "function");
    if (this.aborted)
      return;
    this._processing++;
    if (this.paused) {
      this._processQueue.push([pattern, index, inGlobStar, cb]);
      return;
    }
    var n = 0;
    while (typeof pattern[n] === "string") {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join("/"), index, cb);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join("/");
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null)
      read = ".";
    else if (isAbsolute2(prefix) || isAbsolute2(pattern.map(function(p) {
      return typeof p === "string" ? p : "[*]";
    }).join("/"))) {
      if (!prefix || !isAbsolute2(prefix))
        prefix = "/" + prefix;
      read = prefix;
    } else
      read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored2(this, read))
      return cb();
    var isGlobStar = remain[0] === minimatch2.GLOBSTAR;
    if (isGlobStar)
      this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
    else
      this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
  };
  Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self2 = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
      return self2._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries)
      return cb();
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === ".";
    var matchedEntries = [];
    for (var i2 = 0; i2 < entries.length; i2++) {
      var e = entries[i2];
      if (e.charAt(0) !== "." || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m)
          matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0)
      return cb();
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      for (var i2 = 0; i2 < len; i2++) {
        var e = matchedEntries[i2];
        if (prefix) {
          if (prefix !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        if (e.charAt(0) === "/" && !this.nomount) {
          e = path2.join(this.root, e);
        }
        this._emitMatch(index, e);
      }
      return cb();
    }
    remain.shift();
    for (var i2 = 0; i2 < len; i2++) {
      var e = matchedEntries[i2];
      if (prefix) {
        if (prefix !== "/")
          e = prefix + "/" + e;
        else
          e = prefix + e;
      }
      this._process([e].concat(remain), index, inGlobStar, cb);
    }
    cb();
  };
  Glob.prototype._emitMatch = function(index, e) {
    if (this.aborted)
      return;
    if (isIgnored2(this, e))
      return;
    if (this.paused) {
      this._emitQueue.push([index, e]);
      return;
    }
    var abs = isAbsolute2(e) ? e : this._makeAbs(e);
    if (this.mark)
      e = this._mark(e);
    if (this.absolute)
      e = abs;
    if (this.matches[index][e])
      return;
    if (this.nodir) {
      var c = this.cache[abs];
      if (c === "DIR" || Array.isArray(c))
        return;
    }
    this.matches[index][e] = true;
    var st = this.statCache[abs];
    if (st)
      this.emit("stat", e, st);
    this.emit("match", e);
  };
  Glob.prototype._readdirInGlobStar = function(abs, cb) {
    if (this.aborted)
      return;
    if (this.follow)
      return this._readdir(abs, false, cb);
    var lstatkey = "lstat\0" + abs;
    var self2 = this;
    var lstatcb = inflight2(lstatkey, lstatcb_);
    if (lstatcb)
      self2.fs.lstat(abs, lstatcb);
    function lstatcb_(er, lstat) {
      if (er && er.code === "ENOENT")
        return cb();
      var isSym = lstat && lstat.isSymbolicLink();
      self2.symlinks[abs] = isSym;
      if (!isSym && lstat && !lstat.isDirectory()) {
        self2.cache[abs] = "FILE";
        cb();
      } else
        self2._readdir(abs, false, cb);
    }
  };
  Glob.prototype._readdir = function(abs, inGlobStar, cb) {
    if (this.aborted)
      return;
    cb = inflight2("readdir\0" + abs + "\0" + inGlobStar, cb);
    if (!cb)
      return;
    if (inGlobStar && !ownProp2(this.symlinks, abs))
      return this._readdirInGlobStar(abs, cb);
    if (ownProp2(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === "FILE")
        return cb();
      if (Array.isArray(c))
        return cb(null, c);
    }
    var self2 = this;
    self2.fs.readdir(abs, readdirCb(this, abs, cb));
  };
  function readdirCb(self2, abs, cb) {
    return function(er, entries) {
      if (er)
        self2._readdirError(abs, er, cb);
      else
        self2._readdirEntries(abs, entries, cb);
    };
  }
  Glob.prototype._readdirEntries = function(abs, entries, cb) {
    if (this.aborted)
      return;
    if (!this.mark && !this.stat) {
      for (var i2 = 0; i2 < entries.length; i2++) {
        var e = entries[i2];
        if (abs === "/")
          e = abs + e;
        else
          e = abs + "/" + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return cb(null, entries);
  };
  Glob.prototype._readdirError = function(f2, er, cb) {
    if (this.aborted)
      return;
    switch (er.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var abs = this._makeAbs(f2);
        this.cache[abs] = "FILE";
        if (abs === this.cwdAbs) {
          var error = new Error(er.code + " invalid cwd " + this.cwd);
          error.path = this.cwd;
          error.code = er.code;
          this.emit("error", error);
          this.abort();
        }
        break;
      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(f2)] = false;
        break;
      default:
        this.cache[this._makeAbs(f2)] = false;
        if (this.strict) {
          this.emit("error", er);
          this.abort();
        }
        if (!this.silent)
          console.error("glob error", er);
        break;
    }
    return cb();
  };
  Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self2 = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
      self2._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries)
      return cb();
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false, cb);
    var isSym = this.symlinks[abs];
    var len = entries.length;
    if (isSym && inGlobStar)
      return cb();
    for (var i2 = 0; i2 < len; i2++) {
      var e = entries[i2];
      if (e.charAt(0) === "." && !this.dot)
        continue;
      var instead = gspref.concat(entries[i2], remainWithoutGlobStar);
      this._process(instead, index, true, cb);
      var below = gspref.concat(entries[i2], remain);
      this._process(below, index, true, cb);
    }
    cb();
  };
  Glob.prototype._processSimple = function(prefix, index, cb) {
    var self2 = this;
    this._stat(prefix, function(er, exists) {
      self2._processSimple2(prefix, index, er, exists, cb);
    });
  };
  Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb) {
    if (!this.matches[index])
      this.matches[index] = /* @__PURE__ */ Object.create(null);
    if (!exists)
      return cb();
    if (prefix && isAbsolute2(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === "/") {
        prefix = path2.join(this.root, prefix);
      } else {
        prefix = path2.resolve(this.root, prefix);
        if (trail)
          prefix += "/";
      }
    }
    if (process.platform === "win32")
      prefix = prefix.replace(/\\/g, "/");
    this._emitMatch(index, prefix);
    cb();
  };
  Glob.prototype._stat = function(f2, cb) {
    var abs = this._makeAbs(f2);
    var needDir = f2.slice(-1) === "/";
    if (f2.length > this.maxLength)
      return cb();
    if (!this.stat && ownProp2(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c))
        c = "DIR";
      if (!needDir || c === "DIR")
        return cb(null, c);
      if (needDir && c === "FILE")
        return cb();
    }
    var stat = this.statCache[abs];
    if (stat !== void 0) {
      if (stat === false)
        return cb(null, stat);
      else {
        var type2 = stat.isDirectory() ? "DIR" : "FILE";
        if (needDir && type2 === "FILE")
          return cb();
        else
          return cb(null, type2, stat);
      }
    }
    var self2 = this;
    var statcb = inflight2("stat\0" + abs, lstatcb_);
    if (statcb)
      self2.fs.lstat(abs, statcb);
    function lstatcb_(er, lstat) {
      if (lstat && lstat.isSymbolicLink()) {
        return self2.fs.stat(abs, function(er2, stat2) {
          if (er2)
            self2._stat2(f2, abs, null, lstat, cb);
          else
            self2._stat2(f2, abs, er2, stat2, cb);
        });
      } else {
        self2._stat2(f2, abs, er, lstat, cb);
      }
    }
  };
  Glob.prototype._stat2 = function(f2, abs, er, stat, cb) {
    if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
      this.statCache[abs] = false;
      return cb();
    }
    var needDir = f2.slice(-1) === "/";
    this.statCache[abs] = stat;
    if (abs.slice(-1) === "/" && stat && !stat.isDirectory())
      return cb(null, false, stat);
    var c = true;
    if (stat)
      c = stat.isDirectory() ? "DIR" : "FILE";
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === "FILE")
      return cb();
    return cb(null, c, stat);
  };
  return glob_1;
}
var loader = Loader;
function Loader(options) {
  options = options || {};
  this.require_ = options.requireShim || requireShim;
  this.import_ = options.importShim || importShim;
}
Loader.prototype.load = function(path2, alwaysImport) {
  if (alwaysImport || path2.endsWith(".mjs")) {
    const url = `file://${path2}`;
    return this.import_(url).catch(function(e) {
      return Promise.reject(fixupImportException(e, path2));
    });
  } else {
    return new Promise((resolve) => {
      this.require_(path2);
      resolve();
    });
  }
};
function requireShim(path2) {
  commonjsRequire(path2);
}
function importShim(path2) {
  return import(path2);
}
function fixupImportException(e, importedPath) {
  if (!(e instanceof SyntaxError)) {
    return e;
  }
  const escapedWin = escapeStringForRegexp(importedPath.replace(/\//g, "\\"));
  const windowsPathRegex = new RegExp("[a-zA-z]:\\\\([^\\s]+\\\\|)" + escapedWin);
  const windowsUrlRegex = new RegExp("file:///[a-zA-z]:\\\\([^\\s]+\\\\|)" + escapedWin);
  const anyUnixPathFirstLineRegex = /^\/[^\s:]+:\d/;
  const anyWindowsPathFirstLineRegex = /^[a-zA-Z]:(\\[^\s\\:]+)+:/;
  if (e.message.indexOf(importedPath) !== -1 || e.stack.indexOf(importedPath) !== -1 || e.stack.match(windowsPathRegex) || e.stack.match(windowsUrlRegex) || e.stack.match(anyUnixPathFirstLineRegex) || e.stack.match(anyWindowsPathFirstLineRegex)) {
    return e;
  } else {
    return new Error(`While loading ${importedPath}: ${e.constructor.name}: ${e.message}`);
  }
}
function escapeStringForRegexp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var completion_reporter = function() {
  let onCompleteCallback = function() {
  };
  let completed = false;
  this.onComplete = function(callback) {
    onCompleteCallback = callback;
  };
  this.jasmineStarted = function() {
    if (this.exitHandler) {
      process.on("exit", this.exitHandler);
    }
  };
  this.jasmineDone = function(result) {
    completed = true;
    if (this.exitHandler) {
      process.removeListener("exit", this.exitHandler);
    }
    onCompleteCallback(result.overallStatus === "passed");
  };
  this.isComplete = function() {
    return completed;
  };
  this.exitHandler = null;
};
var console_spec_filter = { exports: {} };
(function(module2, exports2) {
  module2.exports = ConsoleSpecFilter;
  function ConsoleSpecFilter(options) {
    const filterString = options && options.filterString;
    const filterPattern = new RegExp(filterString);
    this.matches = function(specName) {
      return filterPattern.test(specName);
    };
  }
})(console_spec_filter);
var console_reporter = { exports: {} };
(function(module2, exports2) {
  module2.exports = ConsoleReporter;
  function ConsoleReporter() {
    let print = function() {
    }, showColors = false, jasmineCorePath = null, specCount, executableSpecCount, failureCount, failedSpecs = [], pendingSpecs = [], ansi = {
      green: "\x1B[32m",
      red: "\x1B[31m",
      yellow: "\x1B[33m",
      none: "\x1B[0m"
    }, failedSuites = [], stackFilter = defaultStackFilter;
    this.setOptions = function(options) {
      if (options.print) {
        print = options.print;
      }
      showColors = options.showColors || false;
      if (options.jasmineCorePath) {
        jasmineCorePath = options.jasmineCorePath;
      }
      if (options.stackFilter) {
        stackFilter = options.stackFilter;
      }
      if (options.randomSeedReproductionCmd) {
        this.randomSeedReproductionCmd = options.randomSeedReproductionCmd;
      }
    };
    this.jasmineStarted = function(options) {
      specCount = 0;
      executableSpecCount = 0;
      failureCount = 0;
      if (options && options.order && options.order.random) {
        print("Randomized with seed " + options.order.seed);
        printNewline();
      }
      print("Started");
      printNewline();
    };
    this.jasmineDone = function(result) {
      printNewline();
      printNewline();
      if (failedSpecs.length > 0) {
        print("Failures:");
      }
      for (let i2 = 0; i2 < failedSpecs.length; i2++) {
        specFailureDetails(failedSpecs[i2], i2 + 1);
      }
      for (let i2 = 0; i2 < failedSuites.length; i2++) {
        suiteFailureDetails(failedSuites[i2]);
      }
      if (result && result.failedExpectations && result.failedExpectations.length > 0) {
        suiteFailureDetails(__spreadValues({ fullName: "top suite" }, result));
      }
      if (pendingSpecs.length > 0) {
        print("Pending:");
      }
      for (i = 0; i < pendingSpecs.length; i++) {
        pendingSpecDetails(pendingSpecs[i], i + 1);
      }
      if (specCount > 0) {
        printNewline();
        if (executableSpecCount !== specCount) {
          print("Ran " + executableSpecCount + " of " + specCount + plural(" spec", specCount));
          printNewline();
        }
        let specCounts = executableSpecCount + " " + plural("spec", executableSpecCount) + ", " + failureCount + " " + plural("failure", failureCount);
        if (pendingSpecs.length) {
          specCounts += ", " + pendingSpecs.length + " pending " + plural("spec", pendingSpecs.length);
        }
        print(specCounts);
      } else {
        print("No specs found");
      }
      printNewline();
      const seconds = result ? result.totalTime / 1e3 : 0;
      print("Finished in " + seconds + " " + plural("second", seconds));
      printNewline();
      if (result && result.overallStatus === "incomplete") {
        print("Incomplete: " + result.incompleteReason);
        printNewline();
      }
      if (result && result.order && result.order.random) {
        print("Randomized with seed " + result.order.seed);
        print(" (" + this.randomSeedReproductionCmd(result.order.seed) + ")");
        printNewline();
      }
    };
    this.randomSeedReproductionCmd = function(seed) {
      return "jasmine --random=true --seed=" + seed;
    };
    this.specDone = function(result) {
      specCount++;
      if (result.status == "pending") {
        pendingSpecs.push(result);
        executableSpecCount++;
        print(colored("yellow", "*"));
        return;
      }
      if (result.status == "passed") {
        executableSpecCount++;
        print(colored("green", "."));
        return;
      }
      if (result.status == "failed") {
        failureCount++;
        failedSpecs.push(result);
        executableSpecCount++;
        print(colored("red", "F"));
      }
    };
    this.suiteDone = function(result) {
      if (result.failedExpectations && result.failedExpectations.length > 0) {
        failureCount++;
        failedSuites.push(result);
      }
    };
    return this;
    function printNewline() {
      print("\n");
    }
    function colored(color, str) {
      return showColors ? ansi[color] + str + ansi.none : str;
    }
    function plural(str, count) {
      return count == 1 ? str : str + "s";
    }
    function repeat(thing, times) {
      const arr = [];
      for (let i2 = 0; i2 < times; i2++) {
        arr.push(thing);
      }
      return arr;
    }
    function indent(str, spaces) {
      const lines = (str || "").split("\n");
      const newArr = [];
      for (let i2 = 0; i2 < lines.length; i2++) {
        newArr.push(repeat(" ", spaces).join("") + lines[i2]);
      }
      return newArr.join("\n");
    }
    function defaultStackFilter(stack) {
      if (!stack) {
        return "";
      }
      const filteredStack = stack.split("\n").filter(function(stackLine) {
        return stackLine.indexOf(jasmineCorePath) === -1;
      }).join("\n");
      return filteredStack;
    }
    function specFailureDetails(result, failedSpecNumber) {
      printNewline();
      print(failedSpecNumber + ") ");
      print(result.fullName);
      printFailedExpectations(result);
      if (result.trace) {
        printNewline();
        print(indent("Trace:", 2));
        printNewline();
        for (const entry of result.trace) {
          print(indent(`${entry.timestamp}ms: ${entry.message}`, 4));
          printNewline();
        }
      }
    }
    function suiteFailureDetails(result) {
      printNewline();
      print("Suite error: " + result.fullName);
      printFailedExpectations(result);
    }
    function printFailedExpectations(result) {
      for (let i2 = 0; i2 < result.failedExpectations.length; i2++) {
        const failedExpectation = result.failedExpectations[i2];
        printNewline();
        print(indent("Message:", 2));
        printNewline();
        print(colored("red", indent(failedExpectation.message, 4)));
        printNewline();
        print(indent("Stack:", 2));
        printNewline();
        print(indent(stackFilter(failedExpectation.stack), 4));
      }
      if (result.failedExpectations.length === 0 && result.passedExpectations.length === 0) {
        printNewline();
        print(indent("Message:", 2));
        printNewline();
        print(colored("red", indent("Spec has no expectations", 4)));
      }
      printNewline();
    }
    function pendingSpecDetails(result, pendingSpecNumber) {
      printNewline();
      printNewline();
      print(pendingSpecNumber + ") ");
      print(result.fullName);
      printNewline();
      let pendingReason = "No reason given";
      if (result.pendingReason && result.pendingReason !== "") {
        pendingReason = result.pendingReason;
      }
      print(indent(colored("yellow", pendingReason), 2));
      printNewline();
    }
  }
})(console_reporter);
var jasmineCore = { exports: {} };
var jasmine = { exports: {} };
var hasRequiredJasmine;
function requireJasmine() {
  if (hasRequiredJasmine)
    return jasmine.exports;
  hasRequiredJasmine = 1;
  (function(module, exports) {
    var getJasmineRequireObj = function(jasmineGlobal) {
      var jasmineRequire2;
      if (module.exports && true) {
        if (typeof commonjsGlobal !== "undefined") {
          jasmineGlobal = commonjsGlobal;
        } else {
          jasmineGlobal = {};
        }
        jasmineRequire2 = exports;
      } else {
        if (typeof window !== "undefined" && typeof window.toString === "function" && window.toString() === "[object GjsGlobal]") {
          jasmineGlobal = window;
        }
        jasmineRequire2 = jasmineGlobal.jasmineRequire = {};
      }
      function getJasmineRequire() {
        return jasmineRequire2;
      }
      getJasmineRequire().core = function(jRequire) {
        var j$2 = {};
        jRequire.base(j$2, jasmineGlobal);
        j$2.util = jRequire.util(j$2);
        j$2.errors = jRequire.errors();
        j$2.formatErrorMsg = jRequire.formatErrorMsg();
        j$2.Any = jRequire.Any(j$2);
        j$2.Anything = jRequire.Anything(j$2);
        j$2.CallTracker = jRequire.CallTracker(j$2);
        j$2.MockDate = jRequire.MockDate(j$2);
        j$2.getClearStack = jRequire.clearStack(j$2);
        j$2.Clock = jRequire.Clock();
        j$2.DelayedFunctionScheduler = jRequire.DelayedFunctionScheduler(j$2);
        j$2.Deprecator = jRequire.Deprecator(j$2);
        j$2.Env = jRequire.Env(j$2);
        j$2.deprecatingThisProxy = jRequire.deprecatingThisProxy(j$2);
        j$2.deprecatingSuiteProxy = jRequire.deprecatingSuiteProxy(j$2);
        j$2.deprecatingSpecProxy = jRequire.deprecatingSpecProxy(j$2);
        j$2.StackTrace = jRequire.StackTrace(j$2);
        j$2.ExceptionFormatter = jRequire.ExceptionFormatter(j$2);
        j$2.ExpectationFilterChain = jRequire.ExpectationFilterChain();
        j$2.Expector = jRequire.Expector(j$2);
        j$2.Expectation = jRequire.Expectation(j$2);
        j$2.buildExpectationResult = jRequire.buildExpectationResult(j$2);
        j$2.JsApiReporter = jRequire.JsApiReporter(j$2);
        j$2.asymmetricEqualityTesterArgCompatShim = jRequire.asymmetricEqualityTesterArgCompatShim(
          j$2
        );
        j$2.makePrettyPrinter = jRequire.makePrettyPrinter(j$2);
        j$2.basicPrettyPrinter_ = j$2.makePrettyPrinter();
        Object.defineProperty(j$2, "pp", {
          get: function() {
            j$2.getEnv().deprecated(
              "jasmine.pp is deprecated and will be removed in a future release. Use the pp method of the matchersUtil passed to the matcher factory or the asymmetric equality tester's `asymmetricMatch` method instead. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#static-utils> for details."
            );
            return j$2.basicPrettyPrinter_;
          }
        });
        j$2.MatchersUtil = jRequire.MatchersUtil(j$2);
        var staticMatchersUtil = new j$2.MatchersUtil({
          customTesters: [],
          pp: j$2.basicPrettyPrinter_
        });
        Object.defineProperty(j$2, "matchersUtil", {
          get: function() {
            j$2.getEnv().deprecated(
              "jasmine.matchersUtil is deprecated and will be removed in a future release. Use the instance passed to the matcher factory or the asymmetric equality tester's `asymmetricMatch` method instead. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#static-utils> for details."
            );
            return staticMatchersUtil;
          }
        });
        j$2.ObjectContaining = jRequire.ObjectContaining(j$2);
        j$2.ArrayContaining = jRequire.ArrayContaining(j$2);
        j$2.ArrayWithExactContents = jRequire.ArrayWithExactContents(j$2);
        j$2.MapContaining = jRequire.MapContaining(j$2);
        j$2.SetContaining = jRequire.SetContaining(j$2);
        j$2.QueueRunner = jRequire.QueueRunner(j$2);
        j$2.ReportDispatcher = jRequire.ReportDispatcher(j$2);
        j$2.Spec = jRequire.Spec(j$2);
        j$2.Spy = jRequire.Spy(j$2);
        j$2.SpyFactory = jRequire.SpyFactory(j$2);
        j$2.SpyRegistry = jRequire.SpyRegistry(j$2);
        j$2.SpyStrategy = jRequire.SpyStrategy(j$2);
        j$2.StringMatching = jRequire.StringMatching(j$2);
        j$2.StringContaining = jRequire.StringContaining(j$2);
        j$2.UserContext = jRequire.UserContext(j$2);
        j$2.Suite = jRequire.Suite(j$2);
        j$2.Timer = jRequire.Timer();
        j$2.TreeProcessor = jRequire.TreeProcessor();
        j$2.version = jRequire.version();
        j$2.Order = jRequire.Order();
        j$2.DiffBuilder = jRequire.DiffBuilder(j$2);
        j$2.NullDiffBuilder = jRequire.NullDiffBuilder(j$2);
        j$2.ObjectPath = jRequire.ObjectPath(j$2);
        j$2.MismatchTree = jRequire.MismatchTree(j$2);
        j$2.GlobalErrors = jRequire.GlobalErrors(j$2);
        j$2.Truthy = jRequire.Truthy(j$2);
        j$2.Falsy = jRequire.Falsy(j$2);
        j$2.Empty = jRequire.Empty(j$2);
        j$2.NotEmpty = jRequire.NotEmpty(j$2);
        j$2.matchers = jRequire.requireMatchers(jRequire, j$2);
        j$2.asyncMatchers = jRequire.requireAsyncMatchers(jRequire, j$2);
        return j$2;
      };
      return getJasmineRequire;
    }(commonjsGlobal);
    getJasmineRequireObj().requireMatchers = function(jRequire, j$2) {
      var availableMatchers = [
        "nothing",
        "toBe",
        "toBeCloseTo",
        "toBeDefined",
        "toBeInstanceOf",
        "toBeFalse",
        "toBeFalsy",
        "toBeGreaterThan",
        "toBeGreaterThanOrEqual",
        "toBeLessThan",
        "toBeLessThanOrEqual",
        "toBeNaN",
        "toBeNegativeInfinity",
        "toBeNull",
        "toBePositiveInfinity",
        "toBeTrue",
        "toBeTruthy",
        "toBeUndefined",
        "toContain",
        "toEqual",
        "toHaveSize",
        "toHaveBeenCalled",
        "toHaveBeenCalledBefore",
        "toHaveBeenCalledOnceWith",
        "toHaveBeenCalledTimes",
        "toHaveBeenCalledWith",
        "toHaveClass",
        "toMatch",
        "toThrow",
        "toThrowError",
        "toThrowMatching"
      ], matchers = {};
      for (var i2 = 0; i2 < availableMatchers.length; i2++) {
        var name2 = availableMatchers[i2];
        matchers[name2] = jRequire[name2](j$2);
      }
      return matchers;
    };
    getJasmineRequireObj().base = function(j$2, jasmineGlobal) {
      j$2.unimplementedMethod_ = function() {
        throw new Error("unimplemented method");
      };
      j$2.MAX_PRETTY_PRINT_DEPTH = 8;
      j$2.MAX_PRETTY_PRINT_ARRAY_LENGTH = 50;
      j$2.MAX_PRETTY_PRINT_CHARS = 1e3;
      var DEFAULT_TIMEOUT_INTERVAL = 5e3;
      Object.defineProperty(j$2, "DEFAULT_TIMEOUT_INTERVAL", {
        get: function() {
          return DEFAULT_TIMEOUT_INTERVAL;
        },
        set: function(newValue) {
          j$2.util.validateTimeout(newValue, "jasmine.DEFAULT_TIMEOUT_INTERVAL");
          DEFAULT_TIMEOUT_INTERVAL = newValue;
        }
      });
      j$2.getGlobal = function() {
        return jasmineGlobal;
      };
      j$2.getEnv = function(options) {
        var env = j$2.currentEnv_ = j$2.currentEnv_ || new j$2.Env(options);
        return env;
      };
      j$2.isArray_ = function(value) {
        return j$2.isA_("Array", value);
      };
      j$2.isObject_ = function(value) {
        return !j$2.util.isUndefined(value) && value !== null && j$2.isA_("Object", value);
      };
      j$2.isString_ = function(value) {
        return j$2.isA_("String", value);
      };
      j$2.isNumber_ = function(value) {
        return j$2.isA_("Number", value);
      };
      j$2.isFunction_ = function(value) {
        return j$2.isA_("Function", value);
      };
      j$2.isAsyncFunction_ = function(value) {
        return j$2.isA_("AsyncFunction", value);
      };
      j$2.isGeneratorFunction_ = function(value) {
        return j$2.isA_("GeneratorFunction", value);
      };
      j$2.isTypedArray_ = function(value) {
        return j$2.isA_("Float32Array", value) || j$2.isA_("Float64Array", value) || j$2.isA_("Int16Array", value) || j$2.isA_("Int32Array", value) || j$2.isA_("Int8Array", value) || j$2.isA_("Uint16Array", value) || j$2.isA_("Uint32Array", value) || j$2.isA_("Uint8Array", value) || j$2.isA_("Uint8ClampedArray", value);
      };
      j$2.isA_ = function(typeName, value) {
        return j$2.getType_(value) === "[object " + typeName + "]";
      };
      j$2.isError_ = function(value) {
        if (!value) {
          return false;
        }
        if (value instanceof Error) {
          return true;
        }
        if (typeof window !== "undefined" && typeof window.trustedTypes !== "undefined") {
          return typeof value.stack === "string" && typeof value.message === "string";
        }
        if (value && value.constructor && value.constructor.constructor) {
          var valueGlobal = value.constructor.constructor("return this");
          if (j$2.isFunction_(valueGlobal)) {
            valueGlobal = valueGlobal();
          }
          if (valueGlobal.Error && value instanceof valueGlobal.Error) {
            return true;
          }
        }
        return false;
      };
      j$2.isAsymmetricEqualityTester_ = function(obj) {
        return obj ? j$2.isA_("Function", obj.asymmetricMatch) : false;
      };
      j$2.getType_ = function(value) {
        return Object.prototype.toString.apply(value);
      };
      j$2.isDomNode = function(obj) {
        return typeof jasmineGlobal.Node !== "undefined" ? obj instanceof jasmineGlobal.Node : obj !== null && typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string";
      };
      j$2.isMap = function(obj) {
        return obj !== null && typeof obj !== "undefined" && typeof jasmineGlobal.Map !== "undefined" && obj.constructor === jasmineGlobal.Map;
      };
      j$2.isSet = function(obj) {
        return obj !== null && typeof obj !== "undefined" && typeof jasmineGlobal.Set !== "undefined" && obj.constructor === jasmineGlobal.Set;
      };
      j$2.isWeakMap = function(obj) {
        return obj !== null && typeof obj !== "undefined" && typeof jasmineGlobal.WeakMap !== "undefined" && obj.constructor === jasmineGlobal.WeakMap;
      };
      j$2.isURL = function(obj) {
        return obj !== null && typeof obj !== "undefined" && typeof jasmineGlobal.URL !== "undefined" && obj.constructor === jasmineGlobal.URL;
      };
      j$2.isDataView = function(obj) {
        return obj !== null && typeof obj !== "undefined" && typeof jasmineGlobal.DataView !== "undefined" && obj.constructor === jasmineGlobal.DataView;
      };
      j$2.isPromise = function(obj) {
        return typeof jasmineGlobal.Promise !== "undefined" && !!obj && obj.constructor === jasmineGlobal.Promise;
      };
      j$2.isPromiseLike = function(obj) {
        return !!obj && j$2.isFunction_(obj.then);
      };
      j$2.fnNameFor = function(func) {
        if (func.name) {
          return func.name;
        }
        var matches = func.toString().match(/^\s*function\s*(\w+)\s*\(/) || func.toString().match(/^\s*\[object\s*(\w+)Constructor\]/);
        return matches ? matches[1] : "<anonymous>";
      };
      j$2.isPending_ = function(promise) {
        var sentinel = {};
        return Promise.race([promise, Promise.resolve(sentinel)]).then(
          function(result) {
            return result === sentinel;
          },
          function() {
            return false;
          }
        );
      };
      j$2.any = function(clazz) {
        return new j$2.Any(clazz);
      };
      j$2.anything = function() {
        return new j$2.Anything();
      };
      j$2.truthy = function() {
        return new j$2.Truthy();
      };
      j$2.falsy = function() {
        return new j$2.Falsy();
      };
      j$2.empty = function() {
        return new j$2.Empty();
      };
      j$2.notEmpty = function() {
        return new j$2.NotEmpty();
      };
      j$2.objectContaining = function(sample) {
        return new j$2.ObjectContaining(sample);
      };
      j$2.stringMatching = function(expected) {
        return new j$2.StringMatching(expected);
      };
      j$2.stringContaining = function(expected) {
        return new j$2.StringContaining(expected);
      };
      j$2.arrayContaining = function(sample) {
        return new j$2.ArrayContaining(sample);
      };
      j$2.arrayWithExactContents = function(sample) {
        return new j$2.ArrayWithExactContents(sample);
      };
      j$2.mapContaining = function(sample) {
        return new j$2.MapContaining(sample);
      };
      j$2.setContaining = function(sample) {
        return new j$2.SetContaining(sample);
      };
      j$2.isSpy = function(putativeSpy) {
        if (!putativeSpy) {
          return false;
        }
        return putativeSpy.and instanceof j$2.SpyStrategy && putativeSpy.calls instanceof j$2.CallTracker;
      };
    };
    getJasmineRequireObj().util = function(j$2) {
      var util = {};
      util.inherit = function(childClass, parentClass) {
        var Subclass = function() {
        };
        Subclass.prototype = parentClass.prototype;
        childClass.prototype = new Subclass();
      };
      util.argsToArray = function(args) {
        var arrayOfArgs = [];
        for (var i2 = 0; i2 < args.length; i2++) {
          arrayOfArgs.push(args[i2]);
        }
        return arrayOfArgs;
      };
      util.isUndefined = function(obj) {
        return obj === void 0;
      };
      util.arrayContains = function(array, search) {
        var i2 = array.length;
        while (i2--) {
          if (array[i2] === search) {
            return true;
          }
        }
        return false;
      };
      util.clone = function(obj) {
        if (Object.prototype.toString.apply(obj) === "[object Array]") {
          return obj.slice();
        }
        var cloned = {};
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            cloned[prop] = obj[prop];
          }
        }
        return cloned;
      };
      util.cloneArgs = function(args) {
        var clonedArgs = [];
        var argsAsArray = j$2.util.argsToArray(args);
        for (var i2 = 0; i2 < argsAsArray.length; i2++) {
          var str = Object.prototype.toString.apply(argsAsArray[i2]), primitives = /^\[object (Boolean|String|RegExp|Number)/;
          if (!argsAsArray[i2] || str.match(primitives)) {
            clonedArgs.push(argsAsArray[i2]);
          } else {
            clonedArgs.push(j$2.util.clone(argsAsArray[i2]));
          }
        }
        return clonedArgs;
      };
      util.getPropertyDescriptor = function(obj, methodName) {
        var descriptor, proto = obj;
        do {
          descriptor = Object.getOwnPropertyDescriptor(proto, methodName);
          proto = Object.getPrototypeOf(proto);
        } while (!descriptor && proto);
        return descriptor;
      };
      util.objectDifference = function(obj, toRemove) {
        var diff = {};
        for (var key in obj) {
          if (util.has(obj, key) && !util.has(toRemove, key)) {
            diff[key] = obj[key];
          }
        }
        return diff;
      };
      util.has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      };
      util.errorWithStack = function errorWithStack() {
        var error = new Error();
        if (error.stack) {
          return error;
        }
        try {
          throw new Error();
        } catch (e) {
          return e;
        }
      };
      function callerFile() {
        var trace = new j$2.StackTrace(util.errorWithStack());
        return trace.frames[2].file;
      }
      util.jasmineFile = function() {
        var result;
        return function() {
          if (!result) {
            result = callerFile();
          }
          return result;
        };
      }();
      function StopIteration() {
      }
      StopIteration.prototype = Object.create(Error.prototype);
      StopIteration.prototype.constructor = StopIteration;
      util.forEachBreakable = function(iterable, iteratee) {
        function breakLoop() {
          throw new StopIteration();
        }
        try {
          iterable.forEach(function(value, key) {
            iteratee(breakLoop, value, key, iterable);
          });
        } catch (error) {
          if (!(error instanceof StopIteration))
            throw error;
        }
      };
      util.validateTimeout = function(timeout, msgPrefix) {
        var max = 2147483647;
        if (timeout > max) {
          throw new Error(
            (msgPrefix || "Timeout value") + " cannot be greater than " + max
          );
        }
      };
      return util;
    };
    getJasmineRequireObj().Spec = function(j$2) {
      function Spec(attrs) {
        this.expectationFactory = attrs.expectationFactory;
        this.asyncExpectationFactory = attrs.asyncExpectationFactory;
        this.resultCallback = attrs.resultCallback || function() {
        };
        this.id = attrs.id;
        this.description = attrs.description || "";
        this.queueableFn = attrs.queueableFn;
        this.beforeAndAfterFns = attrs.beforeAndAfterFns || function() {
          return { befores: [], afters: [] };
        };
        this.userContext = attrs.userContext || function() {
          return {};
        };
        this.onStart = attrs.onStart || function() {
        };
        this.autoCleanClosures = attrs.autoCleanClosures === void 0 ? true : !!attrs.autoCleanClosures;
        this.getSpecName = attrs.getSpecName || function() {
          return "";
        };
        this.expectationResultFactory = attrs.expectationResultFactory || function() {
        };
        this.deprecated = attrs.deprecated || function() {
        };
        this.queueRunnerFactory = attrs.queueRunnerFactory || function() {
        };
        this.catchingExceptions = attrs.catchingExceptions || function() {
          return true;
        };
        this.throwOnExpectationFailure = !!attrs.throwOnExpectationFailure;
        this.timer = attrs.timer || new j$2.Timer();
        if (!this.queueableFn.fn) {
          this.exclude();
        }
        this.result = {
          id: this.id,
          description: this.description,
          fullName: this.getFullName(),
          failedExpectations: [],
          passedExpectations: [],
          deprecationWarnings: [],
          pendingReason: "",
          duration: null,
          properties: null
        };
      }
      Spec.prototype.addExpectationResult = function(passed, data, isError) {
        var expectationResult = this.expectationResultFactory(data);
        if (passed) {
          this.result.passedExpectations.push(expectationResult);
        } else {
          this.result.failedExpectations.push(expectationResult);
          if (this.throwOnExpectationFailure && !isError) {
            throw new j$2.errors.ExpectationFailed();
          }
        }
      };
      Spec.prototype.setSpecProperty = function(key, value) {
        this.result.properties = this.result.properties || {};
        this.result.properties[key] = value;
      };
      Spec.prototype.expect = function(actual) {
        return this.expectationFactory(actual, this);
      };
      Spec.prototype.expectAsync = function(actual) {
        return this.asyncExpectationFactory(actual, this);
      };
      Spec.prototype.execute = function(onComplete, excluded, failSpecWithNoExp) {
        var self2 = this;
        var onStart = {
          fn: function(done) {
            self2.timer.start();
            self2.onStart(self2, done);
          }
        };
        var complete = {
          fn: function(done) {
            if (self2.autoCleanClosures) {
              self2.queueableFn.fn = null;
            }
            self2.result.status = self2.status(excluded, failSpecWithNoExp);
            self2.result.duration = self2.timer.elapsed();
            self2.resultCallback(self2.result, done);
          }
        };
        var fns = this.beforeAndAfterFns();
        var regularFns = fns.befores.concat(this.queueableFn);
        var runnerConfig = {
          isLeaf: true,
          queueableFns: regularFns,
          cleanupFns: fns.afters,
          onException: function() {
            self2.onException.apply(self2, arguments);
          },
          onMultipleDone: function() {
            self2.deprecated(
              "An asynchronous function called its 'done' callback more than once. This is a bug in the spec, beforeAll, beforeEach, afterAll, or afterEach function in question. This will be treated as an error in a future version. See<https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#deprecations-due-to-calling-done-multiple-times> for more information.\n(in spec: " + self2.getFullName() + ")",
              { ignoreRunnable: true }
            );
          },
          onComplete: function() {
            if (self2.result.status === "failed") {
              onComplete(new j$2.StopExecutionError("spec failed"));
            } else {
              onComplete();
            }
          },
          userContext: this.userContext(),
          runnableName: this.getFullName.bind(this)
        };
        if (this.markedPending || excluded === true) {
          runnerConfig.queueableFns = [];
          runnerConfig.cleanupFns = [];
        }
        runnerConfig.queueableFns.unshift(onStart);
        runnerConfig.cleanupFns.push(complete);
        this.queueRunnerFactory(runnerConfig);
      };
      Spec.prototype.reset = function() {
        this.result = {
          id: this.id,
          description: this.description,
          fullName: this.getFullName(),
          failedExpectations: [],
          passedExpectations: [],
          deprecationWarnings: [],
          pendingReason: this.excludeMessage,
          duration: null,
          properties: null,
          trace: null
        };
        this.markedPending = this.markedExcluding;
      };
      Spec.prototype.onException = function onException(e) {
        if (Spec.isPendingSpecException(e)) {
          this.pend(extractCustomPendingMessage(e));
          return;
        }
        if (e instanceof j$2.errors.ExpectationFailed) {
          return;
        }
        this.addExpectationResult(
          false,
          {
            matcherName: "",
            passed: false,
            expected: "",
            actual: "",
            error: e
          },
          true
        );
      };
      Spec.prototype.pend = function(message) {
        this.markedPending = true;
        if (message) {
          this.result.pendingReason = message;
        }
      };
      Spec.prototype.exclude = function(message) {
        this.markedExcluding = true;
        if (this.message) {
          this.excludeMessage = message;
        }
        this.pend(message);
      };
      Spec.prototype.getResult = function() {
        this.result.status = this.status();
        return this.result;
      };
      Spec.prototype.status = function(excluded, failSpecWithNoExpectations) {
        if (excluded === true) {
          return "excluded";
        }
        if (this.markedPending) {
          return "pending";
        }
        if (this.result.failedExpectations.length > 0 || failSpecWithNoExpectations && this.result.failedExpectations.length + this.result.passedExpectations.length === 0) {
          return "failed";
        }
        return "passed";
      };
      Spec.prototype.getFullName = function() {
        return this.getSpecName(this);
      };
      Spec.prototype.addDeprecationWarning = function(deprecation) {
        if (typeof deprecation === "string") {
          deprecation = { message: deprecation };
        }
        this.result.deprecationWarnings.push(
          this.expectationResultFactory(deprecation)
        );
      };
      var extractCustomPendingMessage = function(e) {
        var fullMessage = e.toString(), boilerplateStart = fullMessage.indexOf(Spec.pendingSpecExceptionMessage), boilerplateEnd = boilerplateStart + Spec.pendingSpecExceptionMessage.length;
        return fullMessage.substr(boilerplateEnd);
      };
      Spec.pendingSpecExceptionMessage = "=> marked Pending";
      Spec.isPendingSpecException = function(e) {
        return !!(e && e.toString && e.toString().indexOf(Spec.pendingSpecExceptionMessage) !== -1);
      };
      return Spec;
    };
    if (typeof window == void 0 && true) {
      exports.Spec = jasmineRequire.Spec;
    }
    getJasmineRequireObj().Order = function() {
      function Order(options) {
        this.random = "random" in options ? options.random : true;
        var seed = this.seed = options.seed || generateSeed();
        this.sort = this.random ? randomOrder : naturalOrder;
        function naturalOrder(items) {
          return items;
        }
        function randomOrder(items) {
          var copy = items.slice();
          copy.sort(function(a, b) {
            return jenkinsHash(seed + a.id) - jenkinsHash(seed + b.id);
          });
          return copy;
        }
        function generateSeed() {
          return String(Math.random()).slice(-5);
        }
        function jenkinsHash(key) {
          var hash, i2;
          for (hash = i2 = 0; i2 < key.length; ++i2) {
            hash += key.charCodeAt(i2);
            hash += hash << 10;
            hash ^= hash >> 6;
          }
          hash += hash << 3;
          hash ^= hash >> 11;
          hash += hash << 15;
          return hash;
        }
      }
      return Order;
    };
    getJasmineRequireObj().Env = function(j$2) {
      function Env(options) {
        options = options || {};
        var self2 = this;
        var global2 = options.global || j$2.getGlobal();
        var customPromise;
        var totalSpecsDefined = 0;
        var realSetTimeout = global2.setTimeout;
        var realClearTimeout = global2.clearTimeout;
        var clearStack = j$2.getClearStack(global2);
        this.clock = new j$2.Clock(
          global2,
          function() {
            return new j$2.DelayedFunctionScheduler();
          },
          new j$2.MockDate(global2)
        );
        var runnableResources = {};
        var currentSpec = null;
        var currentlyExecutingSuites = [];
        var currentDeclarationSuite = null;
        var hasFailures = false;
        var config2 = {
          random: true,
          seed: null,
          failFast: false,
          stopOnSpecFailure: false,
          failSpecWithNoExpectations: false,
          oneFailurePerSpec: false,
          stopSpecOnExpectationFailure: false,
          specFilter: function() {
            return true;
          },
          hideDisabled: false,
          Promise: void 0,
          autoCleanClosures: true,
          verboseDeprecations: false
        };
        var currentSuite = function() {
          return currentlyExecutingSuites[currentlyExecutingSuites.length - 1];
        };
        var currentRunnable = function() {
          return currentSpec || currentSuite();
        };
        var globalErrors = null;
        var installGlobalErrors = function() {
          if (globalErrors) {
            return;
          }
          globalErrors = new j$2.GlobalErrors();
          globalErrors.install();
        };
        if (!options.suppressLoadErrors) {
          installGlobalErrors();
          globalErrors.pushListener(function(message, filename, lineno, colNo, err) {
            topSuite.result.failedExpectations.push({
              passed: false,
              globalErrorType: "load",
              message,
              stack: err && err.stack,
              filename,
              lineno
            });
          });
        }
        this.configure = function(configuration) {
          var booleanProps = [
            "random",
            "failSpecWithNoExpectations",
            "hideDisabled",
            "autoCleanClosures"
          ];
          booleanProps.forEach(function(prop) {
            if (typeof configuration[prop] !== "undefined") {
              config2[prop] = !!configuration[prop];
            }
          });
          if (typeof configuration.failFast !== "undefined") {
            if (configuration.failFast !== config2.failFast) {
              this.deprecated(
                "The `failFast` config property is deprecated and will be removed in a future version of Jasmine. Please use `stopOnSpecFailure` instead.",
                { ignoreRunnable: true }
              );
            }
            if (typeof configuration.stopOnSpecFailure !== "undefined") {
              if (configuration.stopOnSpecFailure !== configuration.failFast) {
                throw new Error(
                  "stopOnSpecFailure and failFast are aliases for each other. Don't set failFast if you also set stopOnSpecFailure."
                );
              }
            }
            config2.failFast = configuration.failFast;
            config2.stopOnSpecFailure = configuration.failFast;
          } else if (typeof configuration.stopOnSpecFailure !== "undefined") {
            config2.failFast = configuration.stopOnSpecFailure;
            config2.stopOnSpecFailure = configuration.stopOnSpecFailure;
          }
          if (typeof configuration.oneFailurePerSpec !== "undefined") {
            if (configuration.oneFailurePerSpec !== config2.oneFailurePerSpec) {
              this.deprecated(
                "The `oneFailurePerSpec` config property is deprecated and will be removed in a future version of Jasmine. Please use `stopSpecOnExpectationFailure` instead.",
                { ignoreRunnable: true }
              );
            }
            if (typeof configuration.stopSpecOnExpectationFailure !== "undefined") {
              if (configuration.stopSpecOnExpectationFailure !== configuration.oneFailurePerSpec) {
                throw new Error(
                  "stopSpecOnExpectationFailure and oneFailurePerSpec are aliases for each other. Don't set oneFailurePerSpec if you also set stopSpecOnExpectationFailure."
                );
              }
            }
            config2.oneFailurePerSpec = configuration.oneFailurePerSpec;
            config2.stopSpecOnExpectationFailure = configuration.oneFailurePerSpec;
          } else if (typeof configuration.stopSpecOnExpectationFailure !== "undefined") {
            config2.oneFailurePerSpec = configuration.stopSpecOnExpectationFailure;
            config2.stopSpecOnExpectationFailure = configuration.stopSpecOnExpectationFailure;
          }
          if (configuration.specFilter) {
            config2.specFilter = configuration.specFilter;
          }
          if (typeof configuration.seed !== "undefined") {
            config2.seed = configuration.seed;
          }
          if (configuration.Promise) {
            if (typeof configuration.Promise.resolve === "function" && typeof configuration.Promise.reject === "function") {
              customPromise = configuration.Promise;
              self2.deprecated(
                "The `Promise` config property is deprecated. Future versions of Jasmine will create native promises even if the `Promise` config property is set. Please remove it."
              );
            } else {
              throw new Error(
                "Custom promise library missing `resolve`/`reject` functions"
              );
            }
          }
          if (configuration.hasOwnProperty("verboseDeprecations")) {
            config2.verboseDeprecations = configuration.verboseDeprecations;
            deprecator.verboseDeprecations(config2.verboseDeprecations);
          }
        };
        this.configuration = function() {
          var result = {};
          for (var property in config2) {
            result[property] = config2[property];
          }
          return result;
        };
        Object.defineProperty(this, "specFilter", {
          get: function() {
            self2.deprecated(
              "Getting specFilter directly from Env is deprecated and will be removed in a future version of Jasmine. Please check the specFilter option from `configuration` instead.",
              { ignoreRunnable: true }
            );
            return config2.specFilter;
          },
          set: function(val) {
            self2.deprecated(
              "Setting specFilter directly on Env is deprecated and will be removed in a future version of Jasmine. Please use the specFilter option in `configure` instead.",
              { ignoreRunnable: true }
            );
            config2.specFilter = val;
          }
        });
        this.setDefaultSpyStrategy = function(defaultStrategyFn) {
          if (!currentRunnable()) {
            throw new Error(
              "Default spy strategy must be set in a before function or a spec"
            );
          }
          runnableResources[currentRunnable().id].defaultStrategyFn = defaultStrategyFn;
        };
        this.addSpyStrategy = function(name2, fn) {
          if (!currentRunnable()) {
            throw new Error(
              "Custom spy strategies must be added in a before function or a spec"
            );
          }
          runnableResources[currentRunnable().id].customSpyStrategies[name2] = fn;
        };
        this.addCustomEqualityTester = function(tester) {
          if (!currentRunnable()) {
            throw new Error(
              "Custom Equalities must be added in a before function or a spec"
            );
          }
          runnableResources[currentRunnable().id].customEqualityTesters.push(
            tester
          );
        };
        this.addMatchers = function(matchersToAdd) {
          if (!currentRunnable()) {
            throw new Error(
              "Matchers must be added in a before function or a spec"
            );
          }
          var customMatchers = runnableResources[currentRunnable().id].customMatchers;
          for (var matcherName in matchersToAdd) {
            if (matchersToAdd[matcherName].length > 1) {
              self2.deprecated(
                'The matcher factory for "' + matcherName + '" accepts custom equality testers, but this parameter will no longer be passed in a future release. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#matchers-cet> for details.'
              );
            }
            customMatchers[matcherName] = matchersToAdd[matcherName];
          }
        };
        this.addAsyncMatchers = function(matchersToAdd) {
          if (!currentRunnable()) {
            throw new Error(
              "Async Matchers must be added in a before function or a spec"
            );
          }
          var customAsyncMatchers = runnableResources[currentRunnable().id].customAsyncMatchers;
          for (var matcherName in matchersToAdd) {
            if (matchersToAdd[matcherName].length > 1) {
              self2.deprecated(
                'The matcher factory for "' + matcherName + '" accepts custom equality testers, but this parameter will no longer be passed in a future release. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#matchers-cet> for details.'
              );
            }
            customAsyncMatchers[matcherName] = matchersToAdd[matcherName];
          }
        };
        this.addCustomObjectFormatter = function(formatter) {
          if (!currentRunnable()) {
            throw new Error(
              "Custom object formatters must be added in a before function or a spec"
            );
          }
          runnableResources[currentRunnable().id].customObjectFormatters.push(
            formatter
          );
        };
        j$2.Expectation.addCoreMatchers(j$2.matchers);
        j$2.Expectation.addAsyncCoreMatchers(j$2.asyncMatchers);
        var nextSpecId = 0;
        var getNextSpecId = function() {
          return "spec" + nextSpecId++;
        };
        var nextSuiteId = 0;
        var getNextSuiteId = function() {
          return "suite" + nextSuiteId++;
        };
        var makePrettyPrinter = function() {
          var customObjectFormatters = runnableResources[currentRunnable().id].customObjectFormatters;
          return j$2.makePrettyPrinter(customObjectFormatters);
        };
        var makeMatchersUtil = function() {
          var customEqualityTesters = runnableResources[currentRunnable().id].customEqualityTesters;
          return new j$2.MatchersUtil({
            customTesters: customEqualityTesters,
            pp: makePrettyPrinter()
          });
        };
        var expectationFactory = function(actual, spec) {
          var customEqualityTesters = runnableResources[spec.id].customEqualityTesters;
          return j$2.Expectation.factory({
            matchersUtil: makeMatchersUtil(),
            customEqualityTesters,
            customMatchers: runnableResources[spec.id].customMatchers,
            actual,
            addExpectationResult
          });
          function addExpectationResult(passed, result) {
            return spec.addExpectationResult(passed, result);
          }
        };
        function recordLateExpectation(runable, runableType, result) {
          var delayedExpectationResult = {};
          Object.keys(result).forEach(function(k) {
            delayedExpectationResult[k] = result[k];
          });
          delayedExpectationResult.passed = false;
          delayedExpectationResult.globalErrorType = "lateExpectation";
          delayedExpectationResult.message = runableType + ' "' + runable.getFullName() + '" ran a "' + result.matcherName + '" expectation after it finished.\n';
          if (result.message) {
            delayedExpectationResult.message += 'Message: "' + result.message + '"\n';
          }
          delayedExpectationResult.message += "1. Did you forget to return or await the result of expectAsync?\n2. Was done() invoked before an async operation completed?\n3. Did an expectation follow a call to done()?";
          topSuite.result.failedExpectations.push(delayedExpectationResult);
        }
        var asyncExpectationFactory = function(actual, spec, runableType) {
          return j$2.Expectation.asyncFactory({
            matchersUtil: makeMatchersUtil(),
            customEqualityTesters: runnableResources[spec.id].customEqualityTesters,
            customAsyncMatchers: runnableResources[spec.id].customAsyncMatchers,
            actual,
            addExpectationResult
          });
          function addExpectationResult(passed, result) {
            if (currentRunnable() !== spec) {
              recordLateExpectation(spec, runableType, result);
            }
            return spec.addExpectationResult(passed, result);
          }
        };
        var suiteAsyncExpectationFactory = function(actual, suite) {
          return asyncExpectationFactory(actual, suite, "Suite");
        };
        var specAsyncExpectationFactory = function(actual, suite) {
          return asyncExpectationFactory(actual, suite, "Spec");
        };
        var defaultResourcesForRunnable = function(id, parentRunnableId) {
          var resources2 = {
            spies: [],
            customEqualityTesters: [],
            customMatchers: {},
            customAsyncMatchers: {},
            customSpyStrategies: {},
            defaultStrategyFn: void 0,
            customObjectFormatters: []
          };
          if (runnableResources[parentRunnableId]) {
            resources2.customEqualityTesters = j$2.util.clone(
              runnableResources[parentRunnableId].customEqualityTesters
            );
            resources2.customMatchers = j$2.util.clone(
              runnableResources[parentRunnableId].customMatchers
            );
            resources2.customAsyncMatchers = j$2.util.clone(
              runnableResources[parentRunnableId].customAsyncMatchers
            );
            resources2.customObjectFormatters = j$2.util.clone(
              runnableResources[parentRunnableId].customObjectFormatters
            );
            resources2.defaultStrategyFn = runnableResources[parentRunnableId].defaultStrategyFn;
          }
          runnableResources[id] = resources2;
        };
        var clearResourcesForRunnable = function(id) {
          spyRegistry.clearSpies();
          delete runnableResources[id];
        };
        var beforeAndAfterFns = function(targetSuite) {
          return function() {
            var befores = [], afters = [], suite = targetSuite;
            while (suite) {
              befores = befores.concat(suite.beforeFns);
              afters = afters.concat(suite.afterFns);
              suite = suite.parentSuite;
            }
            return {
              befores: befores.reverse(),
              afters
            };
          };
        };
        var getSpecName = function(spec, suite) {
          var fullName = [spec.description], suiteFullName = suite.getFullName();
          if (suiteFullName !== "") {
            fullName.unshift(suiteFullName);
          }
          return fullName.join(" ");
        };
        var buildExpectationResult = j$2.buildExpectationResult, exceptionFormatter = new j$2.ExceptionFormatter(), expectationResultFactory = function(attrs) {
          attrs.messageFormatter = exceptionFormatter.message;
          attrs.stackFormatter = exceptionFormatter.stack;
          return buildExpectationResult(attrs);
        };
        this.throwOnExpectationFailure = function(value) {
          this.deprecated(
            "Setting throwOnExpectationFailure directly on Env is deprecated and will be removed in a future version of Jasmine. Please use the stopSpecOnExpectationFailure option in `configure`.",
            { ignoreRunnable: true }
          );
          this.configure({ oneFailurePerSpec: !!value });
        };
        this.throwingExpectationFailures = function() {
          this.deprecated(
            "Getting throwingExpectationFailures directly from Env is deprecated and will be removed in a future version of Jasmine. Please check the stopSpecOnExpectationFailure option from `configuration`.",
            { ignoreRunnable: true }
          );
          return config2.oneFailurePerSpec;
        };
        this.stopOnSpecFailure = function(value) {
          this.deprecated(
            "Setting stopOnSpecFailure directly is deprecated and will be removed in a future version of Jasmine. Please use the stopOnSpecFailure option in `configure`.",
            { ignoreRunnable: true }
          );
          this.configure({ stopOnSpecFailure: !!value });
        };
        this.stoppingOnSpecFailure = function() {
          this.deprecated(
            "Getting stoppingOnSpecFailure directly from Env is deprecated and will be removed in a future version of Jasmine. Please check the stopOnSpecFailure option from `configuration`.",
            { ignoreRunnable: true }
          );
          return config2.failFast;
        };
        this.randomizeTests = function(value) {
          this.deprecated(
            "Setting randomizeTests directly is deprecated and will be removed in a future version of Jasmine. Please use the random option in `configure` instead.",
            { ignoreRunnable: true }
          );
          config2.random = !!value;
        };
        this.randomTests = function() {
          this.deprecated(
            "Getting randomTests directly from Env is deprecated and will be removed in a future version of Jasmine. Please check the random option from `configuration` instead.",
            { ignoreRunnable: true }
          );
          return config2.random;
        };
        this.seed = function(value) {
          this.deprecated(
            "Setting seed directly is deprecated and will be removed in a future version of Jasmine. Please use the seed option in `configure` instead.",
            { ignoreRunnable: true }
          );
          if (value) {
            config2.seed = value;
          }
          return config2.seed;
        };
        this.hidingDisabled = function(value) {
          this.deprecated(
            "Getting hidingDisabled directly from Env is deprecated and will be removed in a future version of Jasmine. Please check the hideDisabled option from `configuration` instead.",
            { ignoreRunnable: true }
          );
          return config2.hideDisabled;
        };
        this.hideDisabled = function(value) {
          this.deprecated(
            "Setting hideDisabled directly is deprecated and will be removed in a future version of Jasmine. Please use the hideDisabled option in `configure` instead.",
            { ignoreRunnable: true }
          );
          config2.hideDisabled = !!value;
        };
        this.deprecated = function(deprecation, options2) {
          var runnable = currentRunnable() || topSuite;
          deprecator.addDeprecationWarning(runnable, deprecation, options2);
        };
        var queueRunnerFactory = function(options2, args) {
          var failFast = false;
          if (options2.isLeaf) {
            failFast = config2.stopSpecOnExpectationFailure;
          } else if (!options2.isReporter) {
            failFast = config2.stopOnSpecFailure;
          }
          options2.clearStack = options2.clearStack || clearStack;
          options2.timeout = {
            setTimeout: realSetTimeout,
            clearTimeout: realClearTimeout
          };
          options2.fail = self2.fail;
          options2.globalErrors = globalErrors;
          options2.completeOnFirstError = failFast;
          options2.onException = options2.onException || function(e) {
            (currentRunnable() || topSuite).onException(e);
          };
          options2.deprecated = self2.deprecated;
          new j$2.QueueRunner(options2).execute(args);
        };
        var topSuite = new j$2.Suite({
          env: this,
          id: getNextSuiteId(),
          description: "Jasmine__TopLevel__Suite",
          expectationFactory,
          asyncExpectationFactory: suiteAsyncExpectationFactory,
          expectationResultFactory,
          autoCleanClosures: config2.autoCleanClosures
        });
        var deprecator = new j$2.Deprecator(topSuite);
        currentDeclarationSuite = topSuite;
        this.topSuite = function() {
          return j$2.deprecatingSuiteProxy(topSuite, null, this);
        };
        var reporter = new j$2.ReportDispatcher(
          [
            "jasmineStarted",
            "jasmineDone",
            "suiteStarted",
            "suiteDone",
            "specStarted",
            "specDone"
          ],
          queueRunnerFactory,
          self2.deprecated
        );
        this.execute = function(runnablesToRun, onComplete) {
          if (this._executedBefore) {
            topSuite.reset();
          }
          this._executedBefore = true;
          defaultResourcesForRunnable(topSuite.id);
          installGlobalErrors();
          if (!runnablesToRun) {
            if (focusedRunnables.length) {
              runnablesToRun = focusedRunnables;
            } else {
              runnablesToRun = [topSuite.id];
            }
          }
          var order = new j$2.Order({
            random: config2.random,
            seed: config2.seed
          });
          var processor = new j$2.TreeProcessor({
            tree: topSuite,
            runnableIds: runnablesToRun,
            queueRunnerFactory,
            failSpecWithNoExpectations: config2.failSpecWithNoExpectations,
            nodeStart: function(suite, next) {
              currentlyExecutingSuites.push(suite);
              defaultResourcesForRunnable(suite.id, suite.parentSuite.id);
              reporter.suiteStarted(suite.result, next);
              suite.startTimer();
            },
            nodeComplete: function(suite, result, next) {
              if (suite !== currentSuite()) {
                throw new Error("Tried to complete the wrong suite");
              }
              clearResourcesForRunnable(suite.id);
              currentlyExecutingSuites.pop();
              if (result.status === "failed") {
                hasFailures = true;
              }
              suite.endTimer();
              reporter.suiteDone(result, next);
            },
            orderChildren: function(node) {
              return order.sort(node.children);
            },
            excludeNode: function(spec) {
              return !config2.specFilter(spec);
            }
          });
          if (!processor.processTree().valid) {
            throw new Error(
              "Invalid order: would cause a beforeAll or afterAll to be run multiple times"
            );
          }
          var jasmineTimer = new j$2.Timer();
          jasmineTimer.start();
          var Promise2 = customPromise || global2.Promise;
          if (Promise2) {
            return new Promise2(function(resolve) {
              runAll(function() {
                if (onComplete) {
                  onComplete();
                }
                resolve();
              });
            });
          } else {
            runAll(function() {
              if (onComplete) {
                onComplete();
              }
            });
          }
          function runAll(done) {
            reporter.jasmineStarted(
              {
                totalSpecsDefined,
                order
              },
              function() {
                currentlyExecutingSuites.push(topSuite);
                processor.execute(function() {
                  clearResourcesForRunnable(topSuite.id);
                  currentlyExecutingSuites.pop();
                  var overallStatus, incompleteReason;
                  if (hasFailures || topSuite.result.failedExpectations.length > 0) {
                    overallStatus = "failed";
                  } else if (focusedRunnables.length > 0) {
                    overallStatus = "incomplete";
                    incompleteReason = "fit() or fdescribe() was found";
                  } else if (totalSpecsDefined === 0) {
                    overallStatus = "incomplete";
                    incompleteReason = "No specs found";
                  } else {
                    overallStatus = "passed";
                  }
                  reporter.jasmineDone(
                    {
                      overallStatus,
                      totalTime: jasmineTimer.elapsed(),
                      incompleteReason,
                      order,
                      failedExpectations: topSuite.result.failedExpectations,
                      deprecationWarnings: topSuite.result.deprecationWarnings
                    },
                    done
                  );
                });
              }
            );
          }
        };
        this.addReporter = function(reporterToAdd) {
          reporter.addReporter(reporterToAdd);
        };
        this.provideFallbackReporter = function(reporterToAdd) {
          reporter.provideFallbackReporter(reporterToAdd);
        };
        this.clearReporters = function() {
          reporter.clearReporters();
        };
        var spyFactory = new j$2.SpyFactory(
          function getCustomStrategies() {
            var runnable = currentRunnable();
            if (runnable) {
              return runnableResources[runnable.id].customSpyStrategies;
            }
            return {};
          },
          function getDefaultStrategyFn() {
            var runnable = currentRunnable();
            if (runnable) {
              return runnableResources[runnable.id].defaultStrategyFn;
            }
            return void 0;
          },
          function getPromise() {
            return customPromise || global2.Promise;
          }
        );
        var spyRegistry = new j$2.SpyRegistry({
          currentSpies: function() {
            if (!currentRunnable()) {
              throw new Error(
                "Spies must be created in a before function or a spec"
              );
            }
            return runnableResources[currentRunnable().id].spies;
          },
          createSpy: function(name2, originalFn) {
            return self2.createSpy(name2, originalFn);
          }
        });
        this.allowRespy = function(allow) {
          spyRegistry.allowRespy(allow);
        };
        this.spyOn = function() {
          return spyRegistry.spyOn.apply(spyRegistry, arguments);
        };
        this.spyOnProperty = function() {
          return spyRegistry.spyOnProperty.apply(spyRegistry, arguments);
        };
        this.spyOnAllFunctions = function() {
          return spyRegistry.spyOnAllFunctions.apply(spyRegistry, arguments);
        };
        this.createSpy = function(name2, originalFn) {
          if (arguments.length === 1 && j$2.isFunction_(name2)) {
            originalFn = name2;
            name2 = originalFn.name;
          }
          return spyFactory.createSpy(name2, originalFn);
        };
        this.createSpyObj = function(baseName, methodNames, propertyNames) {
          return spyFactory.createSpyObj(baseName, methodNames, propertyNames);
        };
        var ensureIsFunction = function(fn, caller) {
          if (!j$2.isFunction_(fn)) {
            throw new Error(
              caller + " expects a function argument; received " + j$2.getType_(fn)
            );
          }
        };
        var ensureIsFunctionOrAsync = function(fn, caller) {
          if (!j$2.isFunction_(fn) && !j$2.isAsyncFunction_(fn)) {
            throw new Error(
              caller + " expects a function argument; received " + j$2.getType_(fn)
            );
          }
        };
        function ensureIsNotNested(method) {
          var runnable = currentRunnable();
          if (runnable !== null && runnable !== void 0) {
            throw new Error(
              "'" + method + "' should only be used in 'describe' function"
            );
          }
        }
        var suiteFactory = function(description2) {
          var suite = new j$2.Suite({
            env: self2,
            id: getNextSuiteId(),
            description: description2,
            parentSuite: currentDeclarationSuite,
            timer: new j$2.Timer(),
            expectationFactory,
            asyncExpectationFactory: suiteAsyncExpectationFactory,
            expectationResultFactory,
            throwOnExpectationFailure: config2.oneFailurePerSpec,
            autoCleanClosures: config2.autoCleanClosures
          });
          return suite;
        };
        this.describe = function(description2, specDefinitions) {
          ensureIsNotNested("describe");
          ensureIsFunction(specDefinitions, "describe");
          var suite = suiteFactory(description2);
          if (specDefinitions.length > 0) {
            throw new Error("describe does not expect any arguments");
          }
          if (currentDeclarationSuite.markedExcluding) {
            suite.exclude();
          }
          addSpecsToSuite(suite, specDefinitions);
          if (suite.parentSuite && !suite.children.length) {
            this.deprecated(
              "describe with no children (describe() or it()) is deprecated and will be removed in a future version of Jasmine. Please either remove the describe or add children to it."
            );
          }
          return j$2.deprecatingSuiteProxy(suite, suite.parentSuite, this);
        };
        this.xdescribe = function(description2, specDefinitions) {
          ensureIsNotNested("xdescribe");
          ensureIsFunction(specDefinitions, "xdescribe");
          var suite = suiteFactory(description2);
          suite.exclude();
          addSpecsToSuite(suite, specDefinitions);
          return j$2.deprecatingSuiteProxy(suite, suite.parentSuite, this);
        };
        var focusedRunnables = [];
        this.fdescribe = function(description2, specDefinitions) {
          ensureIsNotNested("fdescribe");
          ensureIsFunction(specDefinitions, "fdescribe");
          var suite = suiteFactory(description2);
          suite.isFocused = true;
          focusedRunnables.push(suite.id);
          unfocusAncestor();
          addSpecsToSuite(suite, specDefinitions);
          return j$2.deprecatingSuiteProxy(suite, suite.parentSuite, this);
        };
        function addSpecsToSuite(suite, specDefinitions) {
          var parentSuite = currentDeclarationSuite;
          parentSuite.addChild(suite);
          currentDeclarationSuite = suite;
          var declarationError = null;
          try {
            specDefinitions.call(j$2.deprecatingThisProxy(suite, self2));
          } catch (e) {
            declarationError = e;
          }
          if (declarationError) {
            suite.onException(declarationError);
          }
          currentDeclarationSuite = parentSuite;
        }
        function findFocusedAncestor(suite) {
          while (suite) {
            if (suite.isFocused) {
              return suite.id;
            }
            suite = suite.parentSuite;
          }
          return null;
        }
        function unfocusAncestor() {
          var focusedAncestor = findFocusedAncestor(currentDeclarationSuite);
          if (focusedAncestor) {
            for (var i2 = 0; i2 < focusedRunnables.length; i2++) {
              if (focusedRunnables[i2] === focusedAncestor) {
                focusedRunnables.splice(i2, 1);
                break;
              }
            }
          }
        }
        var specFactory = function(description2, fn, suite, timeout) {
          totalSpecsDefined++;
          var spec = new j$2.Spec({
            id: getNextSpecId(),
            beforeAndAfterFns: beforeAndAfterFns(suite),
            expectationFactory,
            asyncExpectationFactory: specAsyncExpectationFactory,
            deprecated: self2.deprecated,
            resultCallback: specResultCallback,
            getSpecName: function(spec2) {
              return getSpecName(spec2, suite);
            },
            onStart: specStarted,
            description: description2,
            expectationResultFactory,
            queueRunnerFactory,
            userContext: function() {
              return suite.clonedSharedUserContext();
            },
            queueableFn: {
              fn,
              timeout: timeout || 0
            },
            throwOnExpectationFailure: config2.oneFailurePerSpec,
            autoCleanClosures: config2.autoCleanClosures,
            timer: new j$2.Timer()
          });
          return spec;
          function specResultCallback(result, next) {
            clearResourcesForRunnable(spec.id);
            currentSpec = null;
            if (result.status === "failed") {
              hasFailures = true;
            }
            reporter.specDone(result, next);
          }
          function specStarted(spec2, next) {
            currentSpec = spec2;
            defaultResourcesForRunnable(spec2.id, suite.id);
            reporter.specStarted(spec2.result, next);
          }
        };
        this.it_ = function(description2, fn, timeout) {
          ensureIsNotNested("it");
          if (arguments.length > 1 && typeof fn !== "undefined") {
            ensureIsFunctionOrAsync(fn, "it");
          }
          if (timeout) {
            j$2.util.validateTimeout(timeout);
          }
          var spec = specFactory(description2, fn, currentDeclarationSuite, timeout);
          if (currentDeclarationSuite.markedExcluding) {
            spec.exclude();
          }
          currentDeclarationSuite.addChild(spec);
          return spec;
        };
        this.it = function(description2, fn, timeout) {
          var spec = this.it_(description2, fn, timeout);
          return j$2.deprecatingSpecProxy(spec, this);
        };
        this.xit = function(description2, fn, timeout) {
          ensureIsNotNested("xit");
          if (arguments.length > 1 && typeof fn !== "undefined") {
            ensureIsFunctionOrAsync(fn, "xit");
          }
          var spec = this.it_.apply(this, arguments);
          spec.exclude("Temporarily disabled with xit");
          return j$2.deprecatingSpecProxy(spec, this);
        };
        this.fit = function(description2, fn, timeout) {
          ensureIsNotNested("fit");
          ensureIsFunctionOrAsync(fn, "fit");
          if (timeout) {
            j$2.util.validateTimeout(timeout);
          }
          var spec = specFactory(description2, fn, currentDeclarationSuite, timeout);
          currentDeclarationSuite.addChild(spec);
          focusedRunnables.push(spec.id);
          unfocusAncestor();
          return j$2.deprecatingSpecProxy(spec, this);
        };
        this.setSpecProperty = function(key, value) {
          if (!currentRunnable() || currentRunnable() == currentSuite()) {
            throw new Error(
              "'setSpecProperty' was used when there was no current spec"
            );
          }
          currentRunnable().setSpecProperty(key, value);
        };
        this.setSuiteProperty = function(key, value) {
          if (!currentSuite()) {
            throw new Error(
              "'setSuiteProperty' was used when there was no current suite"
            );
          }
          currentSuite().setSuiteProperty(key, value);
        };
        this.expect = function(actual) {
          if (!currentRunnable()) {
            throw new Error(
              "'expect' was used when there was no current spec, this could be because an asynchronous test timed out"
            );
          }
          return currentRunnable().expect(actual);
        };
        this.expectAsync = function(actual) {
          if (!currentRunnable()) {
            throw new Error(
              "'expectAsync' was used when there was no current spec, this could be because an asynchronous test timed out"
            );
          }
          return currentRunnable().expectAsync(actual);
        };
        this.beforeEach = function(beforeEachFunction, timeout) {
          ensureIsNotNested("beforeEach");
          ensureIsFunctionOrAsync(beforeEachFunction, "beforeEach");
          if (timeout) {
            j$2.util.validateTimeout(timeout);
          }
          currentDeclarationSuite.beforeEach({
            fn: beforeEachFunction,
            timeout: timeout || 0
          });
        };
        this.beforeAll = function(beforeAllFunction, timeout) {
          ensureIsNotNested("beforeAll");
          ensureIsFunctionOrAsync(beforeAllFunction, "beforeAll");
          if (timeout) {
            j$2.util.validateTimeout(timeout);
          }
          currentDeclarationSuite.beforeAll({
            fn: beforeAllFunction,
            timeout: timeout || 0
          });
        };
        this.afterEach = function(afterEachFunction, timeout) {
          ensureIsNotNested("afterEach");
          ensureIsFunctionOrAsync(afterEachFunction, "afterEach");
          if (timeout) {
            j$2.util.validateTimeout(timeout);
          }
          afterEachFunction.isCleanup = true;
          currentDeclarationSuite.afterEach({
            fn: afterEachFunction,
            timeout: timeout || 0
          });
        };
        this.afterAll = function(afterAllFunction, timeout) {
          ensureIsNotNested("afterAll");
          ensureIsFunctionOrAsync(afterAllFunction, "afterAll");
          if (timeout) {
            j$2.util.validateTimeout(timeout);
          }
          currentDeclarationSuite.afterAll({
            fn: afterAllFunction,
            timeout: timeout || 0
          });
        };
        this.pending = function(message) {
          var fullMessage = j$2.Spec.pendingSpecExceptionMessage;
          if (message) {
            fullMessage += message;
          }
          throw fullMessage;
        };
        this.fail = function(error) {
          if (!currentRunnable()) {
            throw new Error(
              "'fail' was used when there was no current spec, this could be because an asynchronous test timed out"
            );
          }
          var message = "Failed";
          if (error) {
            message += ": ";
            if (error.message) {
              message += error.message;
            } else if (j$2.isString_(error)) {
              message += error;
            } else {
              message += makePrettyPrinter()(error);
            }
          }
          currentRunnable().addExpectationResult(false, {
            matcherName: "",
            passed: false,
            expected: "",
            actual: "",
            message,
            error: error && error.message ? error : null
          });
          if (config2.oneFailurePerSpec) {
            throw new Error(message);
          }
        };
        this.cleanup_ = function() {
          if (globalErrors) {
            globalErrors.uninstall();
          }
        };
      }
      return Env;
    };
    getJasmineRequireObj().JsApiReporter = function(j$2) {
      function JsApiReporter(options) {
        var timer = options.timer || new j$2.Timer(), status = "loaded";
        this.started = false;
        this.finished = false;
        this.runDetails = {};
        this.jasmineStarted = function() {
          this.started = true;
          status = "started";
          timer.start();
        };
        var executionTime;
        this.jasmineDone = function(runDetails) {
          this.finished = true;
          this.runDetails = runDetails;
          executionTime = timer.elapsed();
          status = "done";
        };
        this.status = function() {
          return status;
        };
        var suites = [], suites_hash = {};
        this.suiteStarted = function(result) {
          suites_hash[result.id] = result;
        };
        this.suiteDone = function(result) {
          storeSuite(result);
        };
        this.suiteResults = function(index, length) {
          return suites.slice(index, index + length);
        };
        function storeSuite(result) {
          suites.push(result);
          suites_hash[result.id] = result;
        }
        this.suites = function() {
          return suites_hash;
        };
        var specs = [];
        this.specDone = function(result) {
          specs.push(result);
        };
        this.specResults = function(index, length) {
          return specs.slice(index, index + length);
        };
        this.specs = function() {
          return specs;
        };
        this.executionTime = function() {
          return executionTime;
        };
      }
      return JsApiReporter;
    };
    getJasmineRequireObj().Any = function(j$2) {
      function Any(expectedObject) {
        if (typeof expectedObject === "undefined") {
          throw new TypeError(
            "jasmine.any() expects to be passed a constructor function. Please pass one or use jasmine.anything() to match any object."
          );
        }
        this.expectedObject = expectedObject;
      }
      Any.prototype.asymmetricMatch = function(other) {
        if (this.expectedObject == String) {
          return typeof other == "string" || other instanceof String;
        }
        if (this.expectedObject == Number) {
          return typeof other == "number" || other instanceof Number;
        }
        if (this.expectedObject == Function) {
          return typeof other == "function" || other instanceof Function;
        }
        if (this.expectedObject == Object) {
          return other !== null && typeof other == "object";
        }
        if (this.expectedObject == Boolean) {
          return typeof other == "boolean";
        }
        if (typeof Symbol != "undefined" && this.expectedObject == Symbol) {
          return typeof other == "symbol";
        }
        return other instanceof this.expectedObject;
      };
      Any.prototype.jasmineToString = function() {
        return "<jasmine.any(" + j$2.fnNameFor(this.expectedObject) + ")>";
      };
      return Any;
    };
    getJasmineRequireObj().Anything = function(j$2) {
      function Anything() {
      }
      Anything.prototype.asymmetricMatch = function(other) {
        return !j$2.util.isUndefined(other) && other !== null;
      };
      Anything.prototype.jasmineToString = function() {
        return "<jasmine.anything>";
      };
      return Anything;
    };
    getJasmineRequireObj().ArrayContaining = function(j$2) {
      function ArrayContaining(sample) {
        this.sample = sample;
      }
      ArrayContaining.prototype.asymmetricMatch = function(other, matchersUtil) {
        if (!j$2.isArray_(this.sample)) {
          throw new Error(
            "You must provide an array to arrayContaining, not " + j$2.basicPrettyPrinter_(this.sample) + "."
          );
        }
        if (!j$2.isArray_(other) && this.sample.length > 0) {
          return false;
        }
        for (var i2 = 0; i2 < this.sample.length; i2++) {
          var item = this.sample[i2];
          if (!matchersUtil.contains(other, item)) {
            return false;
          }
        }
        return true;
      };
      ArrayContaining.prototype.jasmineToString = function(pp) {
        return "<jasmine.arrayContaining(" + pp(this.sample) + ")>";
      };
      return ArrayContaining;
    };
    getJasmineRequireObj().ArrayWithExactContents = function(j$2) {
      function ArrayWithExactContents(sample) {
        this.sample = sample;
      }
      ArrayWithExactContents.prototype.asymmetricMatch = function(other, matchersUtil) {
        if (!j$2.isArray_(this.sample)) {
          throw new Error(
            "You must provide an array to arrayWithExactContents, not " + j$2.basicPrettyPrinter_(this.sample) + "."
          );
        }
        if (this.sample.length !== other.length) {
          return false;
        }
        for (var i2 = 0; i2 < this.sample.length; i2++) {
          var item = this.sample[i2];
          if (!matchersUtil.contains(other, item)) {
            return false;
          }
        }
        return true;
      };
      ArrayWithExactContents.prototype.jasmineToString = function(pp) {
        return "<jasmine.arrayWithExactContents(" + pp(this.sample) + ")>";
      };
      return ArrayWithExactContents;
    };
    getJasmineRequireObj().Empty = function(j$2) {
      function Empty() {
      }
      Empty.prototype.asymmetricMatch = function(other) {
        if (j$2.isString_(other) || j$2.isArray_(other) || j$2.isTypedArray_(other)) {
          return other.length === 0;
        }
        if (j$2.isMap(other) || j$2.isSet(other)) {
          return other.size === 0;
        }
        if (j$2.isObject_(other)) {
          return Object.keys(other).length === 0;
        }
        return false;
      };
      Empty.prototype.jasmineToString = function() {
        return "<jasmine.empty>";
      };
      return Empty;
    };
    getJasmineRequireObj().Falsy = function(j$2) {
      function Falsy() {
      }
      Falsy.prototype.asymmetricMatch = function(other) {
        return !other;
      };
      Falsy.prototype.jasmineToString = function() {
        return "<jasmine.falsy>";
      };
      return Falsy;
    };
    getJasmineRequireObj().MapContaining = function(j$2) {
      function MapContaining(sample) {
        if (!j$2.isMap(sample)) {
          throw new Error(
            "You must provide a map to `mapContaining`, not " + j$2.basicPrettyPrinter_(sample)
          );
        }
        this.sample = sample;
      }
      MapContaining.prototype.asymmetricMatch = function(other, matchersUtil) {
        if (!j$2.isMap(other))
          return false;
        var hasAllMatches = true;
        j$2.util.forEachBreakable(this.sample, function(breakLoop, value, key) {
          var hasMatch = false;
          j$2.util.forEachBreakable(other, function(oBreakLoop, oValue, oKey) {
            if (matchersUtil.equals(oKey, key) && matchersUtil.equals(oValue, value)) {
              hasMatch = true;
              oBreakLoop();
            }
          });
          if (!hasMatch) {
            hasAllMatches = false;
            breakLoop();
          }
        });
        return hasAllMatches;
      };
      MapContaining.prototype.jasmineToString = function(pp) {
        return "<jasmine.mapContaining(" + pp(this.sample) + ")>";
      };
      return MapContaining;
    };
    getJasmineRequireObj().NotEmpty = function(j$2) {
      function NotEmpty() {
      }
      NotEmpty.prototype.asymmetricMatch = function(other) {
        if (j$2.isString_(other) || j$2.isArray_(other) || j$2.isTypedArray_(other)) {
          return other.length !== 0;
        }
        if (j$2.isMap(other) || j$2.isSet(other)) {
          return other.size !== 0;
        }
        if (j$2.isObject_(other)) {
          return Object.keys(other).length !== 0;
        }
        return false;
      };
      NotEmpty.prototype.jasmineToString = function() {
        return "<jasmine.notEmpty>";
      };
      return NotEmpty;
    };
    getJasmineRequireObj().ObjectContaining = function(j$2) {
      function ObjectContaining(sample) {
        this.sample = sample;
      }
      function getPrototype(obj) {
        if (Object.getPrototypeOf) {
          return Object.getPrototypeOf(obj);
        }
        if (obj.constructor.prototype == obj) {
          return null;
        }
        return obj.constructor.prototype;
      }
      function hasProperty(obj, property) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
          return true;
        }
        return hasProperty(getPrototype(obj), property);
      }
      ObjectContaining.prototype.asymmetricMatch = function(other, matchersUtil) {
        if (typeof this.sample !== "object") {
          throw new Error(
            "You must provide an object to objectContaining, not '" + this.sample + "'."
          );
        }
        if (typeof other !== "object") {
          return false;
        }
        for (var property in this.sample) {
          if (!hasProperty(other, property) || !matchersUtil.equals(this.sample[property], other[property])) {
            return false;
          }
        }
        return true;
      };
      ObjectContaining.prototype.valuesForDiff_ = function(other, pp) {
        if (!j$2.isObject_(other)) {
          return {
            self: this.jasmineToString(pp),
            other
          };
        }
        var filteredOther = {};
        Object.keys(this.sample).forEach(function(k) {
          filteredOther[k] = other[k];
        });
        return {
          self: this.sample,
          other: filteredOther
        };
      };
      ObjectContaining.prototype.jasmineToString = function(pp) {
        return "<jasmine.objectContaining(" + pp(this.sample) + ")>";
      };
      return ObjectContaining;
    };
    getJasmineRequireObj().SetContaining = function(j$2) {
      function SetContaining(sample) {
        if (!j$2.isSet(sample)) {
          throw new Error(
            "You must provide a set to `setContaining`, not " + j$2.basicPrettyPrinter_(sample)
          );
        }
        this.sample = sample;
      }
      SetContaining.prototype.asymmetricMatch = function(other, matchersUtil) {
        if (!j$2.isSet(other))
          return false;
        var hasAllMatches = true;
        j$2.util.forEachBreakable(this.sample, function(breakLoop, item) {
          var hasMatch = false;
          j$2.util.forEachBreakable(other, function(oBreakLoop, oItem) {
            if (matchersUtil.equals(oItem, item)) {
              hasMatch = true;
              oBreakLoop();
            }
          });
          if (!hasMatch) {
            hasAllMatches = false;
            breakLoop();
          }
        });
        return hasAllMatches;
      };
      SetContaining.prototype.jasmineToString = function(pp) {
        return "<jasmine.setContaining(" + pp(this.sample) + ")>";
      };
      return SetContaining;
    };
    getJasmineRequireObj().StringContaining = function(j$2) {
      function StringContaining(expected) {
        if (!j$2.isString_(expected)) {
          throw new Error("Expected is not a String");
        }
        this.expected = expected;
      }
      StringContaining.prototype.asymmetricMatch = function(other) {
        if (!j$2.isString_(other)) {
          return false;
        }
        return other.indexOf(this.expected) !== -1;
      };
      StringContaining.prototype.jasmineToString = function() {
        return '<jasmine.stringContaining("' + this.expected + '")>';
      };
      return StringContaining;
    };
    getJasmineRequireObj().StringMatching = function(j$2) {
      function StringMatching(expected) {
        if (!j$2.isString_(expected) && !j$2.isA_("RegExp", expected)) {
          throw new Error("Expected is not a String or a RegExp");
        }
        this.regexp = new RegExp(expected);
      }
      StringMatching.prototype.asymmetricMatch = function(other) {
        return this.regexp.test(other);
      };
      StringMatching.prototype.jasmineToString = function() {
        return "<jasmine.stringMatching(" + this.regexp + ")>";
      };
      return StringMatching;
    };
    getJasmineRequireObj().Truthy = function(j$2) {
      function Truthy() {
      }
      Truthy.prototype.asymmetricMatch = function(other) {
        return !!other;
      };
      Truthy.prototype.jasmineToString = function() {
        return "<jasmine.truthy>";
      };
      return Truthy;
    };
    getJasmineRequireObj().asymmetricEqualityTesterArgCompatShim = function(j$2) {
      var likelyArrayProps = [
        "concat",
        "constructor",
        "copyWithin",
        "entries",
        "every",
        "fill",
        "filter",
        "find",
        "findIndex",
        "flat",
        "flatMap",
        "forEach",
        "includes",
        "indexOf",
        "join",
        "keys",
        "lastIndexOf",
        "length",
        "map",
        "pop",
        "push",
        "reduce",
        "reduceRight",
        "reverse",
        "shift",
        "slice",
        "some",
        "sort",
        "splice",
        "toLocaleString",
        "toSource",
        "toString",
        "unshift",
        "values"
      ];
      function asymmetricEqualityTesterArgCompatShim(matchersUtil, customEqualityTesters) {
        var self2 = Object.create(matchersUtil);
        copyAndDeprecate(self2, customEqualityTesters, "length");
        for (i = 0; i < customEqualityTesters.length; i++) {
          copyAndDeprecate(self2, customEqualityTesters, i);
        }
        if (!self2.isAsymmetricEqualityTesterArgCompatShim_) {
          copyAndDeprecateArrayMethods(self2);
        }
        self2.isAsymmetricEqualityTesterArgCompatShim_ = true;
        return self2;
      }
      function copyAndDeprecateArrayMethods(dest) {
        var props = arrayProps(), i2, k;
        for (i2 = 0; i2 < props.length; i2++) {
          k = props[i2];
          if (k !== "length" && !dest[k]) {
            copyAndDeprecate(dest, Array.prototype, k);
          }
        }
      }
      function copyAndDeprecate(dest, src, propName) {
        Object.defineProperty(dest, propName, {
          get: function() {
            j$2.getEnv().deprecated(
              "The second argument to asymmetricMatch is now a MatchersUtil. Using it as an array of custom equality testers is deprecated and will stop working in a future release. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#asymmetricMatch-cet> for details."
            );
            return src[propName];
          }
        });
      }
      function arrayProps() {
        var props, a, k;
        if (!Object.getOwnPropertyDescriptors) {
          return likelyArrayProps.filter(function(k2) {
            return Array.prototype.hasOwnProperty(k2);
          });
        }
        props = Object.getOwnPropertyDescriptors(Array.prototype);
        a = [];
        for (k in props) {
          a.push(k);
        }
        return a;
      }
      return asymmetricEqualityTesterArgCompatShim;
    };
    getJasmineRequireObj().CallTracker = function(j$2) {
      function CallTracker() {
        var calls = [];
        var opts = {};
        this.track = function(context2) {
          if (opts.cloneArgs) {
            context2.args = j$2.util.cloneArgs(context2.args);
          }
          calls.push(context2);
        };
        this.any = function() {
          return !!calls.length;
        };
        this.count = function() {
          return calls.length;
        };
        this.argsFor = function(index) {
          var call = calls[index];
          return call ? call.args : [];
        };
        this.thisFor = function(index) {
          var call = calls[index];
          return call ? call.object : void 0;
        };
        this.all = function() {
          return calls;
        };
        this.allArgs = function() {
          var callArgs = [];
          for (var i2 = 0; i2 < calls.length; i2++) {
            callArgs.push(calls[i2].args);
          }
          return callArgs;
        };
        this.first = function() {
          return calls[0];
        };
        this.mostRecent = function() {
          return calls[calls.length - 1];
        };
        this.reset = function() {
          calls = [];
        };
        this.saveArgumentsByValue = function() {
          opts.cloneArgs = true;
        };
      }
      return CallTracker;
    };
    getJasmineRequireObj().clearStack = function(j$2) {
      var maxInlineCallCount = 10;
      function messageChannelImpl(global2, setTimeout2) {
        var channel = new global2.MessageChannel(), head = {}, tail = head;
        var taskRunning = false;
        channel.port1.onmessage = function() {
          head = head.next;
          var task = head.task;
          delete head.task;
          if (taskRunning) {
            global2.setTimeout(task, 0);
          } else {
            try {
              taskRunning = true;
              task();
            } finally {
              taskRunning = false;
            }
          }
        };
        var currentCallCount = 0;
        return function clearStack(fn) {
          currentCallCount++;
          if (currentCallCount < maxInlineCallCount) {
            tail = tail.next = { task: fn };
            channel.port2.postMessage(0);
          } else {
            currentCallCount = 0;
            setTimeout2(fn);
          }
        };
      }
      function getClearStack(global2) {
        var currentCallCount = 0;
        var realSetTimeout = global2.setTimeout;
        var setTimeoutImpl = function clearStack(fn) {
          Function.prototype.apply.apply(realSetTimeout, [global2, [fn, 0]]);
        };
        if (j$2.isFunction_(global2.setImmediate)) {
          var realSetImmediate = global2.setImmediate;
          return function(fn) {
            currentCallCount++;
            if (currentCallCount < maxInlineCallCount) {
              realSetImmediate(fn);
            } else {
              currentCallCount = 0;
              setTimeoutImpl(fn);
            }
          };
        } else if (!j$2.util.isUndefined(global2.MessageChannel)) {
          return messageChannelImpl(global2, setTimeoutImpl);
        } else {
          return setTimeoutImpl;
        }
      }
      return getClearStack;
    };
    getJasmineRequireObj().Clock = function() {
      var NODE_JS = typeof process !== "undefined" && process.versions && typeof process.versions.node === "string";
      function Clock(global2, delayedFunctionSchedulerFactory, mockDate) {
        var self2 = this, realTimingFunctions = {
          setTimeout: global2.setTimeout,
          clearTimeout: global2.clearTimeout,
          setInterval: global2.setInterval,
          clearInterval: global2.clearInterval
        }, fakeTimingFunctions = {
          setTimeout: setTimeout2,
          clearTimeout: clearTimeout2,
          setInterval,
          clearInterval
        }, installed = false, delayedFunctionScheduler, timer;
        self2.FakeTimeout = FakeTimeout;
        self2.install = function() {
          if (!originalTimingFunctionsIntact()) {
            throw new Error(
              "Jasmine Clock was unable to install over custom global timer functions. Is the clock already installed?"
            );
          }
          replace(global2, fakeTimingFunctions);
          timer = fakeTimingFunctions;
          delayedFunctionScheduler = delayedFunctionSchedulerFactory();
          installed = true;
          return self2;
        };
        self2.uninstall = function() {
          delayedFunctionScheduler = null;
          mockDate.uninstall();
          replace(global2, realTimingFunctions);
          timer = realTimingFunctions;
          installed = false;
        };
        self2.withMock = function(closure) {
          this.install();
          try {
            closure();
          } finally {
            this.uninstall();
          }
        };
        self2.mockDate = function(initialDate) {
          mockDate.install(initialDate);
        };
        self2.setTimeout = function(fn, delay, params2) {
          return Function.prototype.apply.apply(timer.setTimeout, [
            global2,
            arguments
          ]);
        };
        self2.setInterval = function(fn, delay, params2) {
          return Function.prototype.apply.apply(timer.setInterval, [
            global2,
            arguments
          ]);
        };
        self2.clearTimeout = function(id) {
          return Function.prototype.call.apply(timer.clearTimeout, [global2, id]);
        };
        self2.clearInterval = function(id) {
          return Function.prototype.call.apply(timer.clearInterval, [global2, id]);
        };
        self2.tick = function(millis2) {
          if (installed) {
            delayedFunctionScheduler.tick(millis2, function(millis3) {
              mockDate.tick(millis3);
            });
          } else {
            throw new Error(
              "Mock clock is not installed, use jasmine.clock().install()"
            );
          }
        };
        return self2;
        function originalTimingFunctionsIntact() {
          return global2.setTimeout === realTimingFunctions.setTimeout && global2.clearTimeout === realTimingFunctions.clearTimeout && global2.setInterval === realTimingFunctions.setInterval && global2.clearInterval === realTimingFunctions.clearInterval;
        }
        function replace(dest, source) {
          for (var prop in source) {
            dest[prop] = source[prop];
          }
        }
        function setTimeout2(fn, delay) {
          if (!NODE_JS) {
            return delayedFunctionScheduler.scheduleFunction(
              fn,
              delay,
              argSlice(arguments, 2)
            );
          }
          var timeout = new FakeTimeout();
          delayedFunctionScheduler.scheduleFunction(
            fn,
            delay,
            argSlice(arguments, 2),
            false,
            timeout
          );
          return timeout;
        }
        function clearTimeout2(id) {
          return delayedFunctionScheduler.removeFunctionWithId(id);
        }
        function setInterval(fn, interval) {
          if (!NODE_JS) {
            return delayedFunctionScheduler.scheduleFunction(
              fn,
              interval,
              argSlice(arguments, 2),
              true
            );
          }
          var timeout = new FakeTimeout();
          delayedFunctionScheduler.scheduleFunction(
            fn,
            interval,
            argSlice(arguments, 2),
            true,
            timeout
          );
          return timeout;
        }
        function clearInterval(id) {
          return delayedFunctionScheduler.removeFunctionWithId(id);
        }
        function argSlice(argsObj, n) {
          return Array.prototype.slice.call(argsObj, n);
        }
      }
      function FakeTimeout() {
      }
      FakeTimeout.prototype.ref = function() {
        return this;
      };
      FakeTimeout.prototype.unref = function() {
        return this;
      };
      return Clock;
    };
    getJasmineRequireObj().DelayedFunctionScheduler = function(j$) {
      function DelayedFunctionScheduler() {
        var self = this;
        var scheduledLookup = [];
        var scheduledFunctions = {};
        var currentTime = 0;
        var delayedFnCount = 0;
        var deletedKeys = [];
        var ticking = false;
        self.tick = function(millis2, tickDate) {
          if (ticking) {
            j$.getEnv().deprecated(
              "The behavior of reentrant calls to jasmine.clock().tick() will change in a future version. Either modify the affected spec to not call tick() from within a setTimeout or setInterval handler, or be aware that it may behave differently in the future. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#deprecations-due-to-reentrant-calls-to-jasmine-clock-tick> for details."
            );
          }
          ticking = true;
          try {
            millis2 = millis2 || 0;
            var endTime = currentTime + millis2;
            runScheduledFunctions(endTime, tickDate);
            currentTime = endTime;
          } finally {
            ticking = false;
          }
        };
        self.scheduleFunction = function(funcToCall, millis, params, recurring, timeoutKey, runAtMillis) {
          var f;
          if (typeof funcToCall === "string") {
            f = function() {
              return eval(funcToCall);
            };
          } else {
            f = funcToCall;
          }
          millis = millis || 0;
          timeoutKey = timeoutKey || ++delayedFnCount;
          runAtMillis = runAtMillis || currentTime + millis;
          var funcToSchedule = {
            runAtMillis,
            funcToCall: f,
            recurring,
            params,
            timeoutKey,
            millis
          };
          if (runAtMillis in scheduledFunctions) {
            scheduledFunctions[runAtMillis].push(funcToSchedule);
          } else {
            scheduledFunctions[runAtMillis] = [funcToSchedule];
            scheduledLookup.push(runAtMillis);
            scheduledLookup.sort(function(a, b) {
              return a - b;
            });
          }
          return timeoutKey;
        };
        self.removeFunctionWithId = function(timeoutKey2) {
          deletedKeys.push(timeoutKey2);
          for (var runAtMillis2 in scheduledFunctions) {
            var funcs = scheduledFunctions[runAtMillis2];
            var i2 = indexOfFirstToPass(funcs, function(func) {
              return func.timeoutKey === timeoutKey2;
            });
            if (i2 > -1) {
              if (funcs.length === 1) {
                delete scheduledFunctions[runAtMillis2];
                deleteFromLookup(runAtMillis2);
              } else {
                funcs.splice(i2, 1);
              }
              break;
            }
          }
        };
        return self;
        function indexOfFirstToPass(array, testFn) {
          var index = -1;
          for (var i2 = 0; i2 < array.length; ++i2) {
            if (testFn(array[i2])) {
              index = i2;
              break;
            }
          }
          return index;
        }
        function deleteFromLookup(key) {
          var value = Number(key);
          var i2 = indexOfFirstToPass(scheduledLookup, function(millis2) {
            return millis2 === value;
          });
          if (i2 > -1) {
            scheduledLookup.splice(i2, 1);
          }
        }
        function reschedule(scheduledFn) {
          self.scheduleFunction(
            scheduledFn.funcToCall,
            scheduledFn.millis,
            scheduledFn.params,
            true,
            scheduledFn.timeoutKey,
            scheduledFn.runAtMillis + scheduledFn.millis
          );
        }
        function forEachFunction(funcsToRun, callback) {
          for (var i2 = 0; i2 < funcsToRun.length; ++i2) {
            callback(funcsToRun[i2]);
          }
        }
        function runScheduledFunctions(endTime, tickDate) {
          tickDate = tickDate || function() {
          };
          if (scheduledLookup.length === 0 || scheduledLookup[0] > endTime) {
            tickDate(endTime - currentTime);
            return;
          }
          do {
            deletedKeys = [];
            var newCurrentTime = scheduledLookup.shift();
            tickDate(newCurrentTime - currentTime);
            currentTime = newCurrentTime;
            var funcsToRun = scheduledFunctions[currentTime];
            delete scheduledFunctions[currentTime];
            forEachFunction(funcsToRun, function(funcToRun) {
              if (funcToRun.recurring) {
                reschedule(funcToRun);
              }
            });
            forEachFunction(funcsToRun, function(funcToRun) {
              if (j$.util.arrayContains(deletedKeys, funcToRun.timeoutKey)) {
                return;
              }
              funcToRun.funcToCall.apply(null, funcToRun.params || []);
            });
            deletedKeys = [];
          } while (scheduledLookup.length > 0 && currentTime !== endTime && scheduledLookup[0] <= endTime);
          if (currentTime !== endTime) {
            tickDate(endTime - currentTime);
          }
        }
      }
      return DelayedFunctionScheduler;
    };
    getJasmineRequireObj().deprecatingSpecProxy = function(j$2) {
      function isMember(target, prop) {
        return Object.keys(target).indexOf(prop) !== -1 || Object.keys(j$2.Spec.prototype).indexOf(prop) !== -1;
      }
      function isAllowedMember(prop) {
        return prop === "id" || prop === "description" || prop === "getFullName";
      }
      function msg(member) {
        var memberName = member.toString().replace(/^Symbol\((.+)\)$/, "$1");
        return "Access to private Spec members (in this case `" + memberName + "`) is not supported and will break in a future release. See <https://jasmine.github.io/api/edge/Spec.html> for correct usage.";
      }
      try {
        new Proxy({}, {});
      } catch (e) {
        return function(spec) {
          return spec;
        };
      }
      function DeprecatingSpecProxyHandler(env) {
        this._env = env;
      }
      DeprecatingSpecProxyHandler.prototype.get = function(target, prop, receiver) {
        this._maybeDeprecate(target, prop);
        if (prop === "getFullName") {
          return target.getFullName.bind(target);
        } else {
          return target[prop];
        }
      };
      DeprecatingSpecProxyHandler.prototype.set = function(target, prop, value) {
        this._maybeDeprecate(target, prop);
        return target[prop] = value;
      };
      DeprecatingSpecProxyHandler.prototype._maybeDeprecate = function(target, prop) {
        if (isMember(target, prop) && !isAllowedMember(prop)) {
          this._env.deprecated(msg(prop));
        }
      };
      function deprecatingSpecProxy(spec, env) {
        return new Proxy(spec, new DeprecatingSpecProxyHandler(env));
      }
      return deprecatingSpecProxy;
    };
    getJasmineRequireObj().deprecatingSuiteProxy = function(j$2) {
      var allowedMembers = [
        "id",
        "children",
        "description",
        "parentSuite",
        "getFullName"
      ];
      function isMember(target, prop) {
        return Object.keys(target).indexOf(prop) !== -1 || Object.keys(j$2.Suite.prototype).indexOf(prop) !== -1;
      }
      function isAllowedMember(prop) {
        return allowedMembers.indexOf(prop) !== -1;
      }
      function msg(member) {
        var memberName = member.toString().replace(/^Symbol\((.+)\)$/, "$1");
        return "Access to private Suite members (in this case `" + memberName + "`) is not supported and will break in a future release. See <https://jasmine.github.io/api/edge/Suite.html> for correct usage.";
      }
      try {
        new Proxy({}, {});
      } catch (e) {
        return function(suite) {
          return suite;
        };
      }
      function DeprecatingSuiteProxyHandler(parentSuite, env) {
        this._parentSuite = parentSuite;
        this._env = env;
      }
      DeprecatingSuiteProxyHandler.prototype.get = function(target, prop, receiver) {
        if (prop === "children") {
          if (!this._children) {
            this._children = target.children.map(
              this._proxyForChild.bind(this, receiver)
            );
          }
          return this._children;
        } else if (prop === "parentSuite") {
          return this._parentSuite;
        } else {
          this._maybeDeprecate(target, prop);
          return target[prop];
        }
      };
      DeprecatingSuiteProxyHandler.prototype.set = function(target, prop, value) {
        this._maybeDeprecate(target, prop);
        return target[prop] = value;
      };
      DeprecatingSuiteProxyHandler.prototype._maybeDeprecate = function(target, prop) {
        if (isMember(target, prop) && !isAllowedMember(prop)) {
          this._env.deprecated(msg(prop));
        }
      };
      DeprecatingSuiteProxyHandler.prototype._proxyForChild = function(ownProxy, child) {
        if (child.children) {
          return deprecatingSuiteProxy(child, ownProxy, this._env);
        } else {
          return j$2.deprecatingSpecProxy(child, this._env);
        }
      };
      function deprecatingSuiteProxy(suite, parentSuite, env) {
        return new Proxy(suite, new DeprecatingSuiteProxyHandler(parentSuite, env));
      }
      return deprecatingSuiteProxy;
    };
    getJasmineRequireObj().deprecatingThisProxy = function(j$2) {
      var msg = "Access to 'this' in describe functions (and in arrow functions inside describe functions) is deprecated.";
      try {
        new Proxy({}, {});
      } catch (e) {
        return function(suite) {
          return suite;
        };
      }
      function DeprecatingThisProxyHandler(env) {
        this._env = env;
      }
      DeprecatingThisProxyHandler.prototype.get = function(target, prop, receiver) {
        this._env.deprecated(msg);
        return target[prop];
      };
      DeprecatingThisProxyHandler.prototype.set = function(target, prop, value) {
        this._env.deprecated(msg);
        return target[prop] = value;
      };
      return function(suite, env) {
        return new Proxy(suite, new DeprecatingThisProxyHandler(env));
      };
    };
    getJasmineRequireObj().Deprecator = function(j$2) {
      function Deprecator(topSuite) {
        this.topSuite_ = topSuite;
        this.verbose_ = false;
        this.toSuppress_ = [];
      }
      var verboseNote = "Note: This message will be shown only once. Set the verboseDeprecations config property to true to see every occurrence.";
      Deprecator.prototype.verboseDeprecations = function(enabled) {
        this.verbose_ = enabled;
      };
      Deprecator.prototype.addDeprecationWarning = function(runnable, deprecation, options) {
        options = options || {};
        if (!this.verbose_ && !j$2.isError_(deprecation)) {
          if (this.toSuppress_.indexOf(deprecation) !== -1) {
            return;
          }
          this.toSuppress_.push(deprecation);
        }
        this.log_(runnable, deprecation, options);
        this.report_(runnable, deprecation, options);
      };
      Deprecator.prototype.log_ = function(runnable, deprecation, options) {
        var context2;
        if (j$2.isError_(deprecation)) {
          console.error(deprecation);
          return;
        }
        if (runnable === this.topSuite_ || options.ignoreRunnable) {
          context2 = "";
        } else if (runnable.children) {
          context2 = " (in suite: " + runnable.getFullName() + ")";
        } else {
          context2 = " (in spec: " + runnable.getFullName() + ")";
        }
        if (!options.omitStackTrace) {
          context2 += "\n" + this.stackTrace_();
        }
        if (!this.verbose_) {
          context2 += "\n" + verboseNote;
        }
        console.error("DEPRECATION: " + deprecation + context2);
      };
      Deprecator.prototype.stackTrace_ = function() {
        var formatter = new j$2.ExceptionFormatter();
        return formatter.stack(j$2.util.errorWithStack()).replace(/^Error\n/m, "");
      };
      Deprecator.prototype.report_ = function(runnable, deprecation, options) {
        if (options.ignoreRunnable) {
          runnable = this.topSuite_;
        }
        if (j$2.isError_(deprecation)) {
          runnable.addDeprecationWarning(deprecation);
          return;
        }
        if (!this.verbose_) {
          deprecation += "\n" + verboseNote;
        }
        runnable.addDeprecationWarning({
          message: deprecation,
          omitStackTrace: options.omitStackTrace || false
        });
      };
      return Deprecator;
    };
    getJasmineRequireObj().errors = function() {
      function ExpectationFailed() {
      }
      ExpectationFailed.prototype = new Error();
      ExpectationFailed.prototype.constructor = ExpectationFailed;
      return {
        ExpectationFailed
      };
    };
    getJasmineRequireObj().ExceptionFormatter = function(j$2) {
      var ignoredProperties = [
        "name",
        "message",
        "stack",
        "fileName",
        "sourceURL",
        "line",
        "lineNumber",
        "column",
        "description",
        "jasmineMessage"
      ];
      function ExceptionFormatter(options) {
        var jasmineFile = options && options.jasmineFile || j$2.util.jasmineFile();
        this.message = function(error) {
          var message = "";
          if (error.jasmineMessage) {
            message += error.jasmineMessage;
          } else if (error.name && error.message) {
            message += error.name + ": " + error.message;
          } else if (error.message) {
            message += error.message;
          } else {
            message += error.toString() + " thrown";
          }
          if (error.fileName || error.sourceURL) {
            message += " in " + (error.fileName || error.sourceURL);
          }
          if (error.line || error.lineNumber) {
            message += " (line " + (error.line || error.lineNumber) + ")";
          }
          return message;
        };
        this.stack = function(error) {
          if (!error || !error.stack) {
            return null;
          }
          var stackTrace = new j$2.StackTrace(error);
          var lines = filterJasmine(stackTrace);
          var result = "";
          if (stackTrace.message) {
            lines.unshift(stackTrace.message);
          }
          result += formatProperties(error);
          result += lines.join("\n");
          return result;
        };
        function filterJasmine(stackTrace) {
          var result = [], jasmineMarker = stackTrace.style === "webkit" ? "<Jasmine>" : "    at <Jasmine>";
          stackTrace.frames.forEach(function(frame) {
            if (frame.file !== jasmineFile) {
              result.push(frame.raw);
            } else if (result[result.length - 1] !== jasmineMarker) {
              result.push(jasmineMarker);
            }
          });
          return result;
        }
        function formatProperties(error) {
          if (!(error instanceof Object)) {
            return;
          }
          var result = {};
          var empty = true;
          for (var prop in error) {
            if (j$2.util.arrayContains(ignoredProperties, prop)) {
              continue;
            }
            result[prop] = error[prop];
            empty = false;
          }
          if (!empty) {
            return "error properties: " + j$2.basicPrettyPrinter_(result) + "\n";
          }
          return "";
        }
      }
      return ExceptionFormatter;
    };
    getJasmineRequireObj().Expectation = function(j$2) {
      function Expectation(options) {
        this.expector = new j$2.Expector(options);
        var customMatchers = options.customMatchers || {};
        for (var matcherName in customMatchers) {
          this[matcherName] = wrapSyncCompare(
            matcherName,
            customMatchers[matcherName]
          );
        }
      }
      Expectation.prototype.withContext = function withContext(message) {
        return addFilter(this, new ContextAddingFilter(message));
      };
      Object.defineProperty(Expectation.prototype, "not", {
        get: function() {
          return addFilter(this, syncNegatingFilter);
        }
      });
      function AsyncExpectation(options) {
        var global2 = options.global || j$2.getGlobal();
        this.expector = new j$2.Expector(options);
        if (!global2.Promise) {
          throw new Error(
            "expectAsync is unavailable because the environment does not support promises."
          );
        }
        var customAsyncMatchers = options.customAsyncMatchers || {};
        for (var matcherName in customAsyncMatchers) {
          this[matcherName] = wrapAsyncCompare(
            matcherName,
            customAsyncMatchers[matcherName]
          );
        }
      }
      AsyncExpectation.prototype.withContext = function withContext(message) {
        return addFilter(this, new ContextAddingFilter(message));
      };
      Object.defineProperty(AsyncExpectation.prototype, "not", {
        get: function() {
          return addFilter(this, asyncNegatingFilter);
        }
      });
      Object.defineProperty(AsyncExpectation.prototype, "already", {
        get: function() {
          return addFilter(this, expectSettledPromiseFilter);
        }
      });
      function wrapSyncCompare(name2, matcherFactory) {
        return function() {
          var result = this.expector.compare(name2, matcherFactory, arguments);
          this.expector.processResult(result);
        };
      }
      function wrapAsyncCompare(name2, matcherFactory) {
        return function() {
          var self2 = this;
          var errorForStack = j$2.util.errorWithStack();
          return this.expector.compare(name2, matcherFactory, arguments).then(function(result) {
            self2.expector.processResult(result, errorForStack);
          });
        };
      }
      function addCoreMatchers(prototype, matchers, wrapper) {
        for (var matcherName in matchers) {
          var matcher = matchers[matcherName];
          prototype[matcherName] = wrapper(matcherName, matcher);
        }
      }
      function addFilter(source, filter2) {
        var result = Object.create(source);
        result.expector = source.expector.addFilter(filter2);
        return result;
      }
      function negatedFailureMessage(result, matcherName, args, matchersUtil) {
        if (result.message) {
          if (j$2.isFunction_(result.message)) {
            return result.message();
          } else {
            return result.message;
          }
        }
        args = args.slice();
        args.unshift(true);
        args.unshift(matcherName);
        return matchersUtil.buildFailureMessage.apply(matchersUtil, args);
      }
      function negate(result) {
        result.pass = !result.pass;
        return result;
      }
      var syncNegatingFilter = {
        selectComparisonFunc: function(matcher) {
          function defaultNegativeCompare() {
            return negate(matcher.compare.apply(null, arguments));
          }
          return matcher.negativeCompare || defaultNegativeCompare;
        },
        buildFailureMessage: negatedFailureMessage
      };
      var asyncNegatingFilter = {
        selectComparisonFunc: function(matcher) {
          function defaultNegativeCompare() {
            return matcher.compare.apply(this, arguments).then(negate);
          }
          return matcher.negativeCompare || defaultNegativeCompare;
        },
        buildFailureMessage: negatedFailureMessage
      };
      var expectSettledPromiseFilter = {
        selectComparisonFunc: function(matcher) {
          return function(actual) {
            var matcherArgs = arguments;
            return j$2.isPending_(actual).then(function(isPending) {
              if (isPending) {
                return {
                  pass: false,
                  message: "Expected a promise to be settled (via expectAsync(...).already) but it was pending."
                };
              } else {
                return matcher.compare.apply(null, matcherArgs);
              }
            });
          };
        }
      };
      function ContextAddingFilter(message) {
        this.message = message;
      }
      ContextAddingFilter.prototype.modifyFailureMessage = function(msg) {
        var nl = msg.indexOf("\n");
        if (nl === -1) {
          return this.message + ": " + msg;
        } else {
          return this.message + ":\n" + indent(msg);
        }
      };
      function indent(s) {
        return s.replace(/^/gm, "    ");
      }
      return {
        factory: function(options) {
          return new Expectation(options || {});
        },
        addCoreMatchers: function(matchers) {
          addCoreMatchers(Expectation.prototype, matchers, wrapSyncCompare);
        },
        asyncFactory: function(options) {
          return new AsyncExpectation(options || {});
        },
        addAsyncCoreMatchers: function(matchers) {
          addCoreMatchers(AsyncExpectation.prototype, matchers, wrapAsyncCompare);
        }
      };
    };
    getJasmineRequireObj().ExpectationFilterChain = function() {
      function ExpectationFilterChain(maybeFilter, prev) {
        this.filter_ = maybeFilter;
        this.prev_ = prev;
      }
      ExpectationFilterChain.prototype.addFilter = function(filter2) {
        return new ExpectationFilterChain(filter2, this);
      };
      ExpectationFilterChain.prototype.selectComparisonFunc = function(matcher) {
        return this.callFirst_("selectComparisonFunc", arguments).result;
      };
      ExpectationFilterChain.prototype.buildFailureMessage = function(result, matcherName, args, matchersUtil) {
        return this.callFirst_("buildFailureMessage", arguments).result;
      };
      ExpectationFilterChain.prototype.modifyFailureMessage = function(msg) {
        var result = this.callFirst_("modifyFailureMessage", arguments).result;
        return result || msg;
      };
      ExpectationFilterChain.prototype.callFirst_ = function(fname, args) {
        var prevResult;
        if (this.prev_) {
          prevResult = this.prev_.callFirst_(fname, args);
          if (prevResult.found) {
            return prevResult;
          }
        }
        if (this.filter_ && this.filter_[fname]) {
          return {
            found: true,
            result: this.filter_[fname].apply(this.filter_, args)
          };
        }
        return { found: false };
      };
      return ExpectationFilterChain;
    };
    getJasmineRequireObj().buildExpectationResult = function(j$2) {
      function buildExpectationResult(options) {
        var messageFormatter = options.messageFormatter || function() {
        }, stackFormatter = options.stackFormatter || function() {
        };
        var result = {
          matcherName: options.matcherName,
          message: message(),
          stack: options.omitStackTrace ? "" : stack(),
          passed: options.passed
        };
        if (!result.passed) {
          result.expected = options.expected;
          result.actual = options.actual;
          if (options.error && !j$2.isString_(options.error)) {
            if ("code" in options.error) {
              result.code = options.error.code;
            }
            if (options.error.code === "ERR_ASSERTION" && options.expected === "" && options.actual === "") {
              result.expected = options.error.expected;
              result.actual = options.error.actual;
              result.matcherName = "assert " + options.error.operator;
            }
          }
        }
        return result;
        function message() {
          if (options.passed) {
            return "Passed.";
          } else if (options.message) {
            return options.message;
          } else if (options.error) {
            return messageFormatter(options.error);
          }
          return "";
        }
        function stack() {
          if (options.passed) {
            return "";
          }
          var error = options.error;
          if (!error) {
            if (options.errorForStack) {
              error = options.errorForStack;
            } else if (options.stack) {
              error = options;
            } else {
              try {
                throw new Error(message());
              } catch (e) {
                error = e;
              }
            }
          }
          return stackFormatter(error);
        }
      }
      return buildExpectationResult;
    };
    getJasmineRequireObj().Expector = function(j$2) {
      function Expector(options) {
        this.matchersUtil = options.matchersUtil || {
          buildFailureMessage: function() {
          }
        };
        this.customEqualityTesters = options.customEqualityTesters || [];
        this.actual = options.actual;
        this.addExpectationResult = options.addExpectationResult || function() {
        };
        this.filters = new j$2.ExpectationFilterChain();
      }
      Expector.prototype.instantiateMatcher = function(matcherName, matcherFactory, args) {
        this.matcherName = matcherName;
        this.args = Array.prototype.slice.call(args, 0);
        this.expected = this.args.slice(0);
        this.args.unshift(this.actual);
        var matcher;
        if (matcherFactory.length >= 2) {
          matcher = matcherFactory(this.matchersUtil, this.customEqualityTesters);
        } else {
          matcher = matcherFactory(this.matchersUtil);
        }
        var comparisonFunc = this.filters.selectComparisonFunc(matcher);
        return comparisonFunc || matcher.compare;
      };
      Expector.prototype.buildMessage = function(result) {
        var self2 = this;
        if (result.pass) {
          return "";
        }
        var msg = this.filters.buildFailureMessage(
          result,
          this.matcherName,
          this.args,
          this.matchersUtil,
          defaultMessage
        );
        return this.filters.modifyFailureMessage(msg || defaultMessage());
        function defaultMessage() {
          if (!result.message) {
            var args = self2.args.slice();
            args.unshift(false);
            args.unshift(self2.matcherName);
            return self2.matchersUtil.buildFailureMessage.apply(
              self2.matchersUtil,
              args
            );
          } else if (j$2.isFunction_(result.message)) {
            return result.message();
          } else {
            return result.message;
          }
        }
      };
      Expector.prototype.compare = function(matcherName, matcherFactory, args) {
        var matcherCompare = this.instantiateMatcher(
          matcherName,
          matcherFactory,
          args
        );
        return matcherCompare.apply(null, this.args);
      };
      Expector.prototype.addFilter = function(filter2) {
        var result = Object.create(this);
        result.filters = this.filters.addFilter(filter2);
        return result;
      };
      Expector.prototype.processResult = function(result, errorForStack) {
        var message = this.buildMessage(result);
        if (this.expected.length === 1) {
          this.expected = this.expected[0];
        }
        this.addExpectationResult(result.pass, {
          matcherName: this.matcherName,
          passed: result.pass,
          message,
          error: errorForStack ? void 0 : result.error,
          errorForStack: errorForStack || void 0,
          actual: this.actual,
          expected: this.expected
        });
      };
      return Expector;
    };
    getJasmineRequireObj().formatErrorMsg = function() {
      function generateErrorMsg(domain, usage) {
        var usageDefinition = usage ? "\nUsage: " + usage : "";
        return function errorMsg(msg) {
          return domain + " : " + msg + usageDefinition;
        };
      }
      return generateErrorMsg;
    };
    getJasmineRequireObj().GlobalErrors = function(j$2) {
      function GlobalErrors(global2) {
        var handlers = [];
        global2 = global2 || j$2.getGlobal();
        var onerror = function onerror2() {
          var handler = handlers[handlers.length - 1];
          if (handler) {
            handler.apply(null, Array.prototype.slice.call(arguments, 0));
          } else {
            throw arguments[0];
          }
        };
        this.originalHandlers = {};
        this.jasmineHandlers = {};
        this.installOne_ = function installOne_(errorType, jasmineMessage) {
          function taggedOnError(error) {
            var substituteMsg;
            if (j$2.isError_(error)) {
              error.jasmineMessage = jasmineMessage + ": " + error;
            } else {
              if (error) {
                substituteMsg = jasmineMessage + ": " + error;
              } else {
                substituteMsg = jasmineMessage + " with no error or message";
              }
              if (errorType === "unhandledRejection") {
                substituteMsg += "\n(Tip: to get a useful stack trace, use Promise.reject(new Error(...)) instead of Promise.reject(" + (error ? "..." : "") + ").)";
              }
              error = new Error(substituteMsg);
            }
            var handler = handlers[handlers.length - 1];
            if (handler) {
              handler(error);
            } else {
              throw error;
            }
          }
          this.originalHandlers[errorType] = global2.process.listeners(errorType);
          this.jasmineHandlers[errorType] = taggedOnError;
          global2.process.removeAllListeners(errorType);
          global2.process.on(errorType, taggedOnError);
          this.uninstall = function uninstall() {
            var errorTypes = Object.keys(this.originalHandlers);
            for (var iType = 0; iType < errorTypes.length; iType++) {
              var errorType2 = errorTypes[iType];
              global2.process.removeListener(
                errorType2,
                this.jasmineHandlers[errorType2]
              );
              for (var i2 = 0; i2 < this.originalHandlers[errorType2].length; i2++) {
                global2.process.on(errorType2, this.originalHandlers[errorType2][i2]);
              }
              delete this.originalHandlers[errorType2];
              delete this.jasmineHandlers[errorType2];
            }
          };
        };
        this.install = function install() {
          if (global2.process && global2.process.listeners && j$2.isFunction_(global2.process.on)) {
            this.installOne_("uncaughtException", "Uncaught exception");
            this.installOne_("unhandledRejection", "Unhandled promise rejection");
          } else {
            var originalHandler = global2.onerror;
            global2.onerror = onerror;
            var browserRejectionHandler = function browserRejectionHandler2(event) {
              if (j$2.isError_(event.reason)) {
                event.reason.jasmineMessage = "Unhandled promise rejection: " + event.reason;
                global2.onerror(event.reason);
              } else {
                global2.onerror("Unhandled promise rejection: " + event.reason);
              }
            };
            if (global2.addEventListener) {
              global2.addEventListener(
                "unhandledrejection",
                browserRejectionHandler
              );
            }
            this.uninstall = function uninstall() {
              global2.onerror = originalHandler;
              if (global2.removeEventListener) {
                global2.removeEventListener(
                  "unhandledrejection",
                  browserRejectionHandler
                );
              }
            };
          }
        };
        this.pushListener = function pushListener(listener) {
          handlers.push(listener);
        };
        this.popListener = function popListener(listener) {
          if (!listener) {
            throw new Error("popListener expects a listener");
          }
          handlers.pop();
        };
      }
      return GlobalErrors;
    };
    getJasmineRequireObj().toBePending = function(j$2) {
      return function toBePending() {
        return {
          compare: function(actual) {
            if (!j$2.isPromiseLike(actual)) {
              throw new Error("Expected toBePending to be called on a promise.");
            }
            var want = {};
            return Promise.race([actual, Promise.resolve(want)]).then(
              function(got) {
                return { pass: want === got };
              },
              function() {
                return { pass: false };
              }
            );
          }
        };
      };
    };
    getJasmineRequireObj().toBeRejected = function(j$2) {
      return function toBeRejected() {
        return {
          compare: function(actual) {
            if (!j$2.isPromiseLike(actual)) {
              throw new Error("Expected toBeRejected to be called on a promise.");
            }
            return actual.then(
              function() {
                return { pass: false };
              },
              function() {
                return { pass: true };
              }
            );
          }
        };
      };
    };
    getJasmineRequireObj().toBeRejectedWith = function(j$2) {
      return function toBeRejectedWith(matchersUtil) {
        return {
          compare: function(actualPromise, expectedValue) {
            if (!j$2.isPromiseLike(actualPromise)) {
              throw new Error(
                "Expected toBeRejectedWith to be called on a promise."
              );
            }
            function prefix(passed) {
              return "Expected a promise " + (passed ? "not " : "") + "to be rejected with " + matchersUtil.pp(expectedValue);
            }
            return actualPromise.then(
              function() {
                return {
                  pass: false,
                  message: prefix(false) + " but it was resolved."
                };
              },
              function(actualValue) {
                if (matchersUtil.equals(actualValue, expectedValue)) {
                  return {
                    pass: true,
                    message: prefix(true) + "."
                  };
                } else {
                  return {
                    pass: false,
                    message: prefix(false) + " but it was rejected with " + matchersUtil.pp(actualValue) + "."
                  };
                }
              }
            );
          }
        };
      };
    };
    getJasmineRequireObj().toBeRejectedWithError = function(j$2) {
      return function toBeRejectedWithError(matchersUtil) {
        return {
          compare: function(actualPromise, arg1, arg2) {
            if (!j$2.isPromiseLike(actualPromise)) {
              throw new Error(
                "Expected toBeRejectedWithError to be called on a promise."
              );
            }
            var expected = getExpectedFromArgs(arg1, arg2, matchersUtil);
            return actualPromise.then(
              function() {
                return {
                  pass: false,
                  message: "Expected a promise to be rejected but it was resolved."
                };
              },
              function(actualValue) {
                return matchError(actualValue, expected, matchersUtil);
              }
            );
          }
        };
      };
      function matchError(actual, expected, matchersUtil) {
        if (!j$2.isError_(actual)) {
          return fail(expected, "rejected with " + matchersUtil.pp(actual));
        }
        if (!(actual instanceof expected.error)) {
          return fail(
            expected,
            "rejected with type " + j$2.fnNameFor(actual.constructor)
          );
        }
        var actualMessage = actual.message;
        if (actualMessage === expected.message || typeof expected.message === "undefined") {
          return pass(expected);
        }
        if (expected.message instanceof RegExp && expected.message.test(actualMessage)) {
          return pass(expected);
        }
        return fail(expected, "rejected with " + matchersUtil.pp(actual));
      }
      function pass(expected) {
        return {
          pass: true,
          message: "Expected a promise not to be rejected with " + expected.printValue + ", but it was."
        };
      }
      function fail(expected, message) {
        return {
          pass: false,
          message: "Expected a promise to be rejected with " + expected.printValue + " but it was " + message + "."
        };
      }
      function getExpectedFromArgs(arg1, arg2, matchersUtil) {
        var error, message;
        if (isErrorConstructor(arg1)) {
          error = arg1;
          message = arg2;
        } else {
          error = Error;
          message = arg1;
        }
        return {
          error,
          message,
          printValue: j$2.fnNameFor(error) + (typeof message === "undefined" ? "" : ": " + matchersUtil.pp(message))
        };
      }
      function isErrorConstructor(value) {
        return typeof value === "function" && (value === Error || j$2.isError_(value.prototype));
      }
    };
    getJasmineRequireObj().toBeResolved = function(j$2) {
      return function toBeResolved(matchersUtil) {
        return {
          compare: function(actual) {
            if (!j$2.isPromiseLike(actual)) {
              throw new Error("Expected toBeResolved to be called on a promise.");
            }
            return actual.then(
              function() {
                return { pass: true };
              },
              function(e) {
                return {
                  pass: false,
                  message: "Expected a promise to be resolved but it was rejected with " + matchersUtil.pp(e) + "."
                };
              }
            );
          }
        };
      };
    };
    getJasmineRequireObj().toBeResolvedTo = function(j$2) {
      return function toBeResolvedTo(matchersUtil) {
        return {
          compare: function(actualPromise, expectedValue) {
            if (!j$2.isPromiseLike(actualPromise)) {
              throw new Error("Expected toBeResolvedTo to be called on a promise.");
            }
            function prefix(passed) {
              return "Expected a promise " + (passed ? "not " : "") + "to be resolved to " + matchersUtil.pp(expectedValue);
            }
            return actualPromise.then(
              function(actualValue) {
                if (matchersUtil.equals(actualValue, expectedValue)) {
                  return {
                    pass: true,
                    message: prefix(true) + "."
                  };
                } else {
                  return {
                    pass: false,
                    message: prefix(false) + " but it was resolved to " + matchersUtil.pp(actualValue) + "."
                  };
                }
              },
              function(e) {
                return {
                  pass: false,
                  message: prefix(false) + " but it was rejected with " + matchersUtil.pp(e) + "."
                };
              }
            );
          }
        };
      };
    };
    getJasmineRequireObj().DiffBuilder = function(j$2) {
      return function DiffBuilder(config2) {
        var prettyPrinter = (config2 || {}).prettyPrinter || j$2.makePrettyPrinter(), mismatches = new j$2.MismatchTree(), path2 = new j$2.ObjectPath(), actualRoot = void 0, expectedRoot = void 0;
        return {
          setRoots: function(actual, expected) {
            actualRoot = actual;
            expectedRoot = expected;
          },
          recordMismatch: function(formatter) {
            mismatches.add(path2, formatter);
          },
          getMessage: function() {
            var messages = [];
            mismatches.traverse(function(path3, isLeaf, formatter) {
              var actualCustom, expectedCustom, useCustom, derefResult = dereferencePath(
                path3,
                actualRoot,
                expectedRoot,
                prettyPrinter
              ), actual = derefResult.actual, expected = derefResult.expected;
              if (formatter) {
                messages.push(formatter(actual, expected, path3, prettyPrinter));
                return true;
              }
              actualCustom = prettyPrinter.customFormat_(actual);
              expectedCustom = prettyPrinter.customFormat_(expected);
              useCustom = !(j$2.util.isUndefined(actualCustom) && j$2.util.isUndefined(expectedCustom));
              if (useCustom) {
                messages.push(
                  wrapPrettyPrinted(actualCustom, expectedCustom, path3)
                );
                return false;
              }
              if (isLeaf) {
                messages.push(
                  defaultFormatter(actual, expected, path3, prettyPrinter)
                );
              }
              return true;
            });
            return messages.join("\n");
          },
          withPath: function(pathComponent, block) {
            var oldPath = path2;
            path2 = path2.add(pathComponent);
            block();
            path2 = oldPath;
          }
        };
        function defaultFormatter(actual, expected, path3, prettyPrinter2) {
          return wrapPrettyPrinted(
            prettyPrinter2(actual),
            prettyPrinter2(expected),
            path3
          );
        }
        function wrapPrettyPrinted(actual, expected, path3) {
          return "Expected " + path3 + (path3.depth() ? " = " : "") + actual + " to equal " + expected + ".";
        }
      };
      function dereferencePath(objectPath, actual, expected, pp) {
        function handleAsymmetricExpected() {
          if (j$2.isAsymmetricEqualityTester_(expected) && j$2.isFunction_(expected.valuesForDiff_)) {
            var asymmetricResult = expected.valuesForDiff_(actual, pp);
            expected = asymmetricResult.self;
            actual = asymmetricResult.other;
          }
        }
        var i2;
        handleAsymmetricExpected();
        for (i2 = 0; i2 < objectPath.components.length; i2++) {
          actual = actual[objectPath.components[i2]];
          expected = expected[objectPath.components[i2]];
          handleAsymmetricExpected();
        }
        return { actual, expected };
      }
    };
    getJasmineRequireObj().MatchersUtil = function(j$2) {
      function MatchersUtil(options) {
        options = options || {};
        this.customTesters_ = options.customTesters || [];
        this.pp = options.pp || function() {
        };
      }
      MatchersUtil.prototype.contains = function(haystack, needle, customTesters) {
        if (customTesters) {
          j$2.getEnv().deprecated(
            "Passing custom equality testers to MatchersUtil#contains is deprecated. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#matchers-cet> for details."
          );
        }
        if (j$2.isSet(haystack)) {
          return haystack.has(needle);
        }
        if (Object.prototype.toString.apply(haystack) === "[object Array]" || !!haystack && !haystack.indexOf) {
          for (var i2 = 0; i2 < haystack.length; i2++) {
            try {
              this.suppressDeprecation_ = true;
              if (this.equals(haystack[i2], needle, customTesters)) {
                return true;
              }
            } finally {
              this.suppressDeprecation_ = false;
            }
          }
          return false;
        }
        return !!haystack && haystack.indexOf(needle) >= 0;
      };
      MatchersUtil.prototype.buildFailureMessage = function() {
        var self2 = this;
        var args = Array.prototype.slice.call(arguments, 0), matcherName = args[0], isNot = args[1], actual = args[2], expected = args.slice(3), englishyPredicate = matcherName.replace(/[A-Z]/g, function(s) {
          return " " + s.toLowerCase();
        });
        var message = "Expected " + self2.pp(actual) + (isNot ? " not " : " ") + englishyPredicate;
        if (expected.length > 0) {
          for (var i2 = 0; i2 < expected.length; i2++) {
            if (i2 > 0) {
              message += ",";
            }
            message += " " + self2.pp(expected[i2]);
          }
        }
        return message + ".";
      };
      MatchersUtil.prototype.asymmetricDiff_ = function(a, b, aStack, bStack, customTesters, diffBuilder) {
        if (j$2.isFunction_(b.valuesForDiff_)) {
          var values = b.valuesForDiff_(a, this.pp);
          this.eq_(
            values.other,
            values.self,
            aStack,
            bStack,
            customTesters,
            diffBuilder
          );
        } else {
          diffBuilder.recordMismatch();
        }
      };
      MatchersUtil.prototype.asymmetricMatch_ = function(a, b, aStack, bStack, customTesters, diffBuilder) {
        var asymmetricA = j$2.isAsymmetricEqualityTester_(a), asymmetricB = j$2.isAsymmetricEqualityTester_(b), shim, result;
        if (asymmetricA === asymmetricB) {
          return void 0;
        }
        shim = j$2.asymmetricEqualityTesterArgCompatShim(this, customTesters);
        if (asymmetricA) {
          result = a.asymmetricMatch(b, shim);
          if (!result) {
            diffBuilder.recordMismatch();
          }
          return result;
        }
        if (asymmetricB) {
          result = b.asymmetricMatch(a, shim);
          if (!result) {
            this.asymmetricDiff_(a, b, aStack, bStack, customTesters, diffBuilder);
          }
          return result;
        }
      };
      MatchersUtil.prototype.equals = function(a, b, customTestersOrDiffBuilder, diffBuilderOrNothing) {
        var customTesters, diffBuilder;
        if (isDiffBuilder(customTestersOrDiffBuilder)) {
          diffBuilder = customTestersOrDiffBuilder;
        } else {
          if (customTestersOrDiffBuilder && !this.suppressDeprecation_) {
            j$2.getEnv().deprecated(
              "Passing custom equality testers to MatchersUtil#equals is deprecated. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#matchers-cet> for details."
            );
          }
          if (diffBuilderOrNothing) {
            j$2.getEnv().deprecated(
              "Diff builder should be passed as the third argument to MatchersUtil#equals, not the fourth. See <https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#matchers-cet> for details."
            );
          }
          customTesters = customTestersOrDiffBuilder;
          diffBuilder = diffBuilderOrNothing;
        }
        customTesters = customTesters || this.customTesters_;
        diffBuilder = diffBuilder || j$2.NullDiffBuilder();
        diffBuilder.setRoots(a, b);
        return this.eq_(a, b, [], [], customTesters, diffBuilder);
      };
      MatchersUtil.prototype.eq_ = function(a, b, aStack, bStack, customTesters, diffBuilder) {
        var result = true, self2 = this, i2;
        var asymmetricResult = this.asymmetricMatch_(
          a,
          b,
          aStack,
          bStack,
          customTesters,
          diffBuilder
        );
        if (!j$2.util.isUndefined(asymmetricResult)) {
          return asymmetricResult;
        }
        for (i2 = 0; i2 < customTesters.length; i2++) {
          var customTesterResult = customTesters[i2](a, b);
          if (!j$2.util.isUndefined(customTesterResult)) {
            if (!customTesterResult) {
              diffBuilder.recordMismatch();
            }
            return customTesterResult;
          }
        }
        if (a instanceof Error && b instanceof Error) {
          result = a.message == b.message;
          if (!result) {
            diffBuilder.recordMismatch();
          }
          return result;
        }
        if (a === b) {
          result = a !== 0 || 1 / a == 1 / b;
          if (!result) {
            diffBuilder.recordMismatch();
          }
          return result;
        }
        if (a === null || b === null) {
          result = a === b;
          if (!result) {
            diffBuilder.recordMismatch();
          }
          return result;
        }
        var className = Object.prototype.toString.call(a);
        if (className != Object.prototype.toString.call(b)) {
          diffBuilder.recordMismatch();
          return false;
        }
        switch (className) {
          case "[object String]":
            result = a == String(b);
            if (!result) {
              diffBuilder.recordMismatch();
            }
            return result;
          case "[object Number]":
            result = a != +a ? b != +b : a === 0 && b === 0 ? 1 / a == 1 / b : a == +b;
            if (!result) {
              diffBuilder.recordMismatch();
            }
            return result;
          case "[object Date]":
          case "[object Boolean]":
            result = +a == +b;
            if (!result) {
              diffBuilder.recordMismatch();
            }
            return result;
          case "[object ArrayBuffer]":
            return self2.eq_(
              new Uint8Array(a),
              new Uint8Array(b),
              aStack,
              bStack,
              customTesters,
              diffBuilder
            );
          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != "object" || typeof b != "object") {
          diffBuilder.recordMismatch();
          return false;
        }
        var aIsDomNode = j$2.isDomNode(a);
        var bIsDomNode = j$2.isDomNode(b);
        if (aIsDomNode && bIsDomNode) {
          result = a.isEqualNode(b);
          if (!result) {
            diffBuilder.recordMismatch();
          }
          return result;
        }
        if (aIsDomNode || bIsDomNode) {
          diffBuilder.recordMismatch();
          return false;
        }
        var aIsPromise = j$2.isPromise(a);
        var bIsPromise = j$2.isPromise(b);
        if (aIsPromise && bIsPromise) {
          return a === b;
        }
        var length = aStack.length;
        while (length--) {
          if (aStack[length] == a) {
            return bStack[length] == b;
          }
        }
        aStack.push(a);
        bStack.push(b);
        var size = 0;
        if (className == "[object Array]") {
          var aLength = a.length;
          var bLength = b.length;
          diffBuilder.withPath("length", function() {
            if (aLength !== bLength) {
              diffBuilder.recordMismatch();
              result = false;
            }
          });
          for (i2 = 0; i2 < aLength || i2 < bLength; i2++) {
            diffBuilder.withPath(i2, function() {
              if (i2 >= bLength) {
                diffBuilder.recordMismatch(
                  actualArrayIsLongerFormatter.bind(null, self2.pp)
                );
                result = false;
              } else {
                result = self2.eq_(
                  i2 < aLength ? a[i2] : void 0,
                  i2 < bLength ? b[i2] : void 0,
                  aStack,
                  bStack,
                  customTesters,
                  diffBuilder
                ) && result;
              }
            });
          }
          if (!result) {
            return false;
          }
        } else if (j$2.isMap(a) && j$2.isMap(b)) {
          if (a.size != b.size) {
            diffBuilder.recordMismatch();
            return false;
          }
          var keysA = [];
          var keysB = [];
          a.forEach(function(valueA, keyA) {
            keysA.push(keyA);
          });
          b.forEach(function(valueB, keyB) {
            keysB.push(keyB);
          });
          var mapKeys = [keysA, keysB];
          var cmpKeys = [keysB, keysA];
          var mapIter, mapKey, mapValueA, mapValueB;
          var cmpIter, cmpKey;
          for (i2 = 0; result && i2 < mapKeys.length; i2++) {
            mapIter = mapKeys[i2];
            cmpIter = cmpKeys[i2];
            for (var j = 0; result && j < mapIter.length; j++) {
              mapKey = mapIter[j];
              cmpKey = cmpIter[j];
              mapValueA = a.get(mapKey);
              if (j$2.isAsymmetricEqualityTester_(mapKey) || j$2.isAsymmetricEqualityTester_(cmpKey) && this.eq_(
                mapKey,
                cmpKey,
                aStack,
                bStack,
                customTesters,
                j$2.NullDiffBuilder()
              )) {
                mapValueB = b.get(cmpKey);
              } else {
                mapValueB = b.get(mapKey);
              }
              result = this.eq_(
                mapValueA,
                mapValueB,
                aStack,
                bStack,
                customTesters,
                j$2.NullDiffBuilder()
              );
            }
          }
          if (!result) {
            diffBuilder.recordMismatch();
            return false;
          }
        } else if (j$2.isSet(a) && j$2.isSet(b)) {
          if (a.size != b.size) {
            diffBuilder.recordMismatch();
            return false;
          }
          var valuesA = [];
          a.forEach(function(valueA) {
            valuesA.push(valueA);
          });
          var valuesB = [];
          b.forEach(function(valueB) {
            valuesB.push(valueB);
          });
          var setPairs = [[valuesA, valuesB], [valuesB, valuesA]];
          var stackPairs = [[aStack, bStack], [bStack, aStack]];
          var baseValues, baseValue, baseStack;
          var otherValues, otherValue, otherStack;
          var found;
          var prevStackSize;
          for (i2 = 0; result && i2 < setPairs.length; i2++) {
            baseValues = setPairs[i2][0];
            otherValues = setPairs[i2][1];
            baseStack = stackPairs[i2][0];
            otherStack = stackPairs[i2][1];
            for (var k = 0; result && k < baseValues.length; k++) {
              baseValue = baseValues[k];
              found = false;
              for (var l = 0; !found && l < otherValues.length; l++) {
                otherValue = otherValues[l];
                prevStackSize = baseStack.length;
                found = this.eq_(
                  baseValue,
                  otherValue,
                  baseStack,
                  otherStack,
                  customTesters,
                  j$2.NullDiffBuilder()
                );
                if (!found && prevStackSize !== baseStack.length) {
                  baseStack.splice(prevStackSize);
                  otherStack.splice(prevStackSize);
                }
              }
              result = result && found;
            }
          }
          if (!result) {
            diffBuilder.recordMismatch();
            return false;
          }
        } else if (j$2.isURL(a) && j$2.isURL(b)) {
          return a.toString() === b.toString();
        } else {
          var aCtor = a.constructor, bCtor = b.constructor;
          if (aCtor !== bCtor && isFunction2(aCtor) && isFunction2(bCtor) && a instanceof aCtor && b instanceof bCtor && !(aCtor instanceof aCtor && bCtor instanceof bCtor)) {
            diffBuilder.recordMismatch(
              constructorsAreDifferentFormatter.bind(null, this.pp)
            );
            return false;
          }
        }
        var aKeys = keys(a, className == "[object Array]"), key;
        size = aKeys.length;
        if (keys(b, className == "[object Array]").length !== size) {
          diffBuilder.recordMismatch(
            objectKeysAreDifferentFormatter.bind(null, this.pp)
          );
          return false;
        }
        for (i2 = 0; i2 < size; i2++) {
          key = aKeys[i2];
          if (!j$2.util.has(b, key)) {
            diffBuilder.recordMismatch(
              objectKeysAreDifferentFormatter.bind(null, this.pp)
            );
            result = false;
            continue;
          }
          diffBuilder.withPath(key, function() {
            if (!self2.eq_(a[key], b[key], aStack, bStack, customTesters, diffBuilder)) {
              result = false;
            }
          });
        }
        if (!result) {
          return false;
        }
        aStack.pop();
        bStack.pop();
        return result;
      };
      function keys(obj, isArray2) {
        var allKeys = Object.keys ? Object.keys(obj) : function(o) {
          var keys2 = [];
          for (var key in o) {
            if (j$2.util.has(o, key)) {
              keys2.push(key);
            }
          }
          return keys2;
        }(obj);
        if (!isArray2) {
          return allKeys;
        }
        if (allKeys.length === 0) {
          return allKeys;
        }
        var extraKeys = [];
        for (var i2 = 0; i2 < allKeys.length; i2++) {
          if (!/^[0-9]+$/.test(allKeys[i2])) {
            extraKeys.push(allKeys[i2]);
          }
        }
        return extraKeys;
      }
      function isFunction2(obj) {
        return typeof obj === "function";
      }
      function objectKeysAreDifferentFormatter(pp, actual, expected, path2) {
        var missingProperties = j$2.util.objectDifference(expected, actual), extraProperties = j$2.util.objectDifference(actual, expected), missingPropertiesMessage = formatKeyValuePairs(pp, missingProperties), extraPropertiesMessage = formatKeyValuePairs(pp, extraProperties), messages = [];
        if (!path2.depth()) {
          path2 = "object";
        }
        if (missingPropertiesMessage.length) {
          messages.push(
            "Expected " + path2 + " to have properties" + missingPropertiesMessage
          );
        }
        if (extraPropertiesMessage.length) {
          messages.push(
            "Expected " + path2 + " not to have properties" + extraPropertiesMessage
          );
        }
        return messages.join("\n");
      }
      function constructorsAreDifferentFormatter(pp, actual, expected, path2) {
        if (!path2.depth()) {
          path2 = "object";
        }
        return "Expected " + path2 + " to be a kind of " + j$2.fnNameFor(expected.constructor) + ", but was " + pp(actual) + ".";
      }
      function actualArrayIsLongerFormatter(pp, actual, expected, path2) {
        return "Unexpected " + path2 + (path2.depth() ? " = " : "") + pp(actual) + " in array.";
      }
      function formatKeyValuePairs(pp, obj) {
        var formatted = "";
        for (var key in obj) {
          formatted += "\n    " + key + ": " + pp(obj[key]);
        }
        return formatted;
      }
      function isDiffBuilder(obj) {
        return obj && typeof obj.recordMismatch === "function";
      }
      return MatchersUtil;
    };
    getJasmineRequireObj().MismatchTree = function(j$2) {
      function MismatchTree(path2) {
        this.path = path2 || new j$2.ObjectPath([]);
        this.formatter = void 0;
        this.children = [];
        this.isMismatch = false;
      }
      MismatchTree.prototype.add = function(path2, formatter) {
        var key, child;
        if (path2.depth() === 0) {
          this.formatter = formatter;
          this.isMismatch = true;
        } else {
          key = path2.components[0];
          path2 = path2.shift();
          child = this.child(key);
          if (!child) {
            child = new MismatchTree(this.path.add(key));
            this.children.push(child);
          }
          child.add(path2, formatter);
        }
      };
      MismatchTree.prototype.traverse = function(visit) {
        var i2, hasChildren = this.children.length > 0;
        if (this.isMismatch || hasChildren) {
          if (visit(this.path, !hasChildren, this.formatter)) {
            for (i2 = 0; i2 < this.children.length; i2++) {
              this.children[i2].traverse(visit);
            }
          }
        }
      };
      MismatchTree.prototype.child = function(key) {
        var i2, pathEls;
        for (i2 = 0; i2 < this.children.length; i2++) {
          pathEls = this.children[i2].path.components;
          if (pathEls[pathEls.length - 1] === key) {
            return this.children[i2];
          }
        }
      };
      return MismatchTree;
    };
    getJasmineRequireObj().nothing = function() {
      function nothing() {
        return {
          compare: function() {
            return {
              pass: true
            };
          }
        };
      }
      return nothing;
    };
    getJasmineRequireObj().NullDiffBuilder = function(j$2) {
      return function() {
        return {
          withPath: function(_, block) {
            block();
          },
          setRoots: function() {
          },
          recordMismatch: function() {
          }
        };
      };
    };
    getJasmineRequireObj().ObjectPath = function(j$2) {
      function ObjectPath(components) {
        this.components = components || [];
      }
      ObjectPath.prototype.toString = function() {
        if (this.components.length) {
          return "$" + map(this.components, formatPropertyAccess).join("");
        } else {
          return "";
        }
      };
      ObjectPath.prototype.add = function(component) {
        return new ObjectPath(this.components.concat([component]));
      };
      ObjectPath.prototype.shift = function() {
        return new ObjectPath(this.components.slice(1));
      };
      ObjectPath.prototype.depth = function() {
        return this.components.length;
      };
      function formatPropertyAccess(prop) {
        if (typeof prop === "number") {
          return "[" + prop + "]";
        }
        if (isValidIdentifier(prop)) {
          return "." + prop;
        }
        return "['" + prop + "']";
      }
      function map(array, fn) {
        var results = [];
        for (var i2 = 0; i2 < array.length; i2++) {
          results.push(fn(array[i2]));
        }
        return results;
      }
      function isValidIdentifier(string) {
        return /^[A-Za-z\$_][A-Za-z0-9\$_]*$/.test(string);
      }
      return ObjectPath;
    };
    getJasmineRequireObj().requireAsyncMatchers = function(jRequire, j$2) {
      var availableMatchers = [
        "toBePending",
        "toBeResolved",
        "toBeRejected",
        "toBeResolvedTo",
        "toBeRejectedWith",
        "toBeRejectedWithError"
      ], matchers = {};
      for (var i2 = 0; i2 < availableMatchers.length; i2++) {
        var name2 = availableMatchers[i2];
        matchers[name2] = jRequire[name2](j$2);
      }
      return matchers;
    };
    getJasmineRequireObj().toBe = function(j$2) {
      function toBe(matchersUtil) {
        var tip = " Tip: To check for deep equality, use .toEqual() instead of .toBe().";
        return {
          compare: function(actual, expected) {
            var result = {
              pass: actual === expected
            };
            if (typeof expected === "object") {
              result.message = matchersUtil.buildFailureMessage(
                "toBe",
                result.pass,
                actual,
                expected
              ) + tip;
            }
            return result;
          }
        };
      }
      return toBe;
    };
    getJasmineRequireObj().toBeCloseTo = function() {
      function toBeCloseTo() {
        return {
          compare: function(actual, expected, precision) {
            if (precision !== 0) {
              precision = precision || 2;
            }
            if (expected === null || actual === null) {
              throw new Error(
                "Cannot use toBeCloseTo with null. Arguments evaluated to: expect(" + actual + ").toBeCloseTo(" + expected + ")."
              );
            }
            var pow = Math.pow(10, precision + 1);
            var delta = Math.abs(expected - actual);
            var maxDelta = Math.pow(10, -precision) / 2;
            return {
              pass: Math.round(delta * pow) <= maxDelta * pow
            };
          }
        };
      }
      return toBeCloseTo;
    };
    getJasmineRequireObj().toBeDefined = function() {
      function toBeDefined() {
        return {
          compare: function(actual) {
            return {
              pass: void 0 !== actual
            };
          }
        };
      }
      return toBeDefined;
    };
    getJasmineRequireObj().toBeFalse = function() {
      function toBeFalse() {
        return {
          compare: function(actual) {
            return {
              pass: actual === false
            };
          }
        };
      }
      return toBeFalse;
    };
    getJasmineRequireObj().toBeFalsy = function() {
      function toBeFalsy() {
        return {
          compare: function(actual) {
            return {
              pass: !actual
            };
          }
        };
      }
      return toBeFalsy;
    };
    getJasmineRequireObj().toBeGreaterThan = function() {
      function toBeGreaterThan() {
        return {
          compare: function(actual, expected) {
            return {
              pass: actual > expected
            };
          }
        };
      }
      return toBeGreaterThan;
    };
    getJasmineRequireObj().toBeGreaterThanOrEqual = function() {
      function toBeGreaterThanOrEqual() {
        return {
          compare: function(actual, expected) {
            return {
              pass: actual >= expected
            };
          }
        };
      }
      return toBeGreaterThanOrEqual;
    };
    getJasmineRequireObj().toBeInstanceOf = function(j$2) {
      var usageError = j$2.formatErrorMsg(
        "<toBeInstanceOf>",
        "expect(value).toBeInstanceOf(<ConstructorFunction>)"
      );
      function toBeInstanceOf(matchersUtil) {
        return {
          compare: function(actual, expected) {
            var actualType = actual && actual.constructor ? j$2.fnNameFor(actual.constructor) : matchersUtil.pp(actual), expectedType = expected ? j$2.fnNameFor(expected) : matchersUtil.pp(expected), expectedMatcher, pass;
            try {
              expectedMatcher = new j$2.Any(expected);
              pass = expectedMatcher.asymmetricMatch(actual);
            } catch (error) {
              throw new Error(
                usageError("Expected value is not a constructor function")
              );
            }
            if (pass) {
              return {
                pass: true,
                message: "Expected instance of " + actualType + " not to be an instance of " + expectedType
              };
            } else {
              return {
                pass: false,
                message: "Expected instance of " + actualType + " to be an instance of " + expectedType
              };
            }
          }
        };
      }
      return toBeInstanceOf;
    };
    getJasmineRequireObj().toBeLessThan = function() {
      function toBeLessThan() {
        return {
          compare: function(actual, expected) {
            return {
              pass: actual < expected
            };
          }
        };
      }
      return toBeLessThan;
    };
    getJasmineRequireObj().toBeLessThanOrEqual = function() {
      function toBeLessThanOrEqual() {
        return {
          compare: function(actual, expected) {
            return {
              pass: actual <= expected
            };
          }
        };
      }
      return toBeLessThanOrEqual;
    };
    getJasmineRequireObj().toBeNaN = function(j$2) {
      function toBeNaN(matchersUtil) {
        return {
          compare: function(actual) {
            var result = {
              pass: actual !== actual
            };
            if (result.pass) {
              result.message = "Expected actual not to be NaN.";
            } else {
              result.message = function() {
                return "Expected " + matchersUtil.pp(actual) + " to be NaN.";
              };
            }
            return result;
          }
        };
      }
      return toBeNaN;
    };
    getJasmineRequireObj().toBeNegativeInfinity = function(j$2) {
      function toBeNegativeInfinity(matchersUtil) {
        return {
          compare: function(actual) {
            var result = {
              pass: actual === Number.NEGATIVE_INFINITY
            };
            if (result.pass) {
              result.message = "Expected actual not to be -Infinity.";
            } else {
              result.message = function() {
                return "Expected " + matchersUtil.pp(actual) + " to be -Infinity.";
              };
            }
            return result;
          }
        };
      }
      return toBeNegativeInfinity;
    };
    getJasmineRequireObj().toBeNull = function() {
      function toBeNull() {
        return {
          compare: function(actual) {
            return {
              pass: actual === null
            };
          }
        };
      }
      return toBeNull;
    };
    getJasmineRequireObj().toBePositiveInfinity = function(j$2) {
      function toBePositiveInfinity(matchersUtil) {
        return {
          compare: function(actual) {
            var result = {
              pass: actual === Number.POSITIVE_INFINITY
            };
            if (result.pass) {
              result.message = "Expected actual not to be Infinity.";
            } else {
              result.message = function() {
                return "Expected " + matchersUtil.pp(actual) + " to be Infinity.";
              };
            }
            return result;
          }
        };
      }
      return toBePositiveInfinity;
    };
    getJasmineRequireObj().toBeTrue = function() {
      function toBeTrue() {
        return {
          compare: function(actual) {
            return {
              pass: actual === true
            };
          }
        };
      }
      return toBeTrue;
    };
    getJasmineRequireObj().toBeTruthy = function() {
      function toBeTruthy() {
        return {
          compare: function(actual) {
            return {
              pass: !!actual
            };
          }
        };
      }
      return toBeTruthy;
    };
    getJasmineRequireObj().toBeUndefined = function() {
      function toBeUndefined() {
        return {
          compare: function(actual) {
            return {
              pass: void 0 === actual
            };
          }
        };
      }
      return toBeUndefined;
    };
    getJasmineRequireObj().toContain = function() {
      function toContain(matchersUtil) {
        return {
          compare: function(actual, expected) {
            return {
              pass: matchersUtil.contains(actual, expected)
            };
          }
        };
      }
      return toContain;
    };
    getJasmineRequireObj().toEqual = function(j$2) {
      function toEqual(matchersUtil) {
        return {
          compare: function(actual, expected) {
            var result = {
              pass: false
            }, diffBuilder = j$2.DiffBuilder({ prettyPrinter: matchersUtil.pp });
            result.pass = matchersUtil.equals(actual, expected, diffBuilder);
            result.message = diffBuilder.getMessage();
            return result;
          }
        };
      }
      return toEqual;
    };
    getJasmineRequireObj().toHaveBeenCalled = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toHaveBeenCalled>",
        "expect(<spyObj>).toHaveBeenCalled()"
      );
      function toHaveBeenCalled(matchersUtil) {
        return {
          compare: function(actual) {
            var result = {};
            if (!j$2.isSpy(actual)) {
              throw new Error(
                getErrorMsg(
                  "Expected a spy, but got " + matchersUtil.pp(actual) + "."
                )
              );
            }
            if (arguments.length > 1) {
              throw new Error(
                getErrorMsg("Does not take arguments, use toHaveBeenCalledWith")
              );
            }
            result.pass = actual.calls.any();
            result.message = result.pass ? "Expected spy " + actual.and.identity + " not to have been called." : "Expected spy " + actual.and.identity + " to have been called.";
            return result;
          }
        };
      }
      return toHaveBeenCalled;
    };
    getJasmineRequireObj().toHaveBeenCalledBefore = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toHaveBeenCalledBefore>",
        "expect(<spyObj>).toHaveBeenCalledBefore(<spyObj>)"
      );
      function toHaveBeenCalledBefore(matchersUtil) {
        return {
          compare: function(firstSpy, latterSpy) {
            if (!j$2.isSpy(firstSpy)) {
              throw new Error(
                getErrorMsg(
                  "Expected a spy, but got " + matchersUtil.pp(firstSpy) + "."
                )
              );
            }
            if (!j$2.isSpy(latterSpy)) {
              throw new Error(
                getErrorMsg(
                  "Expected a spy, but got " + matchersUtil.pp(latterSpy) + "."
                )
              );
            }
            var result = { pass: false };
            if (!firstSpy.calls.count()) {
              result.message = "Expected spy " + firstSpy.and.identity + " to have been called.";
              return result;
            }
            if (!latterSpy.calls.count()) {
              result.message = "Expected spy " + latterSpy.and.identity + " to have been called.";
              return result;
            }
            var latest1stSpyCall = firstSpy.calls.mostRecent().invocationOrder;
            var first2ndSpyCall = latterSpy.calls.first().invocationOrder;
            result.pass = latest1stSpyCall < first2ndSpyCall;
            if (result.pass) {
              result.message = "Expected spy " + firstSpy.and.identity + " to not have been called before spy " + latterSpy.and.identity + ", but it was";
            } else {
              var first1stSpyCall = firstSpy.calls.first().invocationOrder;
              var latest2ndSpyCall = latterSpy.calls.mostRecent().invocationOrder;
              if (first1stSpyCall < first2ndSpyCall) {
                result.message = "Expected latest call to spy " + firstSpy.and.identity + " to have been called before first call to spy " + latterSpy.and.identity + " (no interleaved calls)";
              } else if (latest2ndSpyCall > latest1stSpyCall) {
                result.message = "Expected first call to spy " + latterSpy.and.identity + " to have been called after latest call to spy " + firstSpy.and.identity + " (no interleaved calls)";
              } else {
                result.message = "Expected spy " + firstSpy.and.identity + " to have been called before spy " + latterSpy.and.identity;
              }
            }
            return result;
          }
        };
      }
      return toHaveBeenCalledBefore;
    };
    getJasmineRequireObj().toHaveBeenCalledOnceWith = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toHaveBeenCalledOnceWith>",
        "expect(<spyObj>).toHaveBeenCalledOnceWith(...arguments)"
      );
      function toHaveBeenCalledOnceWith(util) {
        return {
          compare: function() {
            var args = Array.prototype.slice.call(arguments, 0), actual = args[0], expectedArgs = args.slice(1);
            if (!j$2.isSpy(actual)) {
              throw new Error(
                getErrorMsg("Expected a spy, but got " + util.pp(actual) + ".")
              );
            }
            var prettyPrintedCalls = actual.calls.allArgs().map(function(argsForCall) {
              return "  " + util.pp(argsForCall);
            });
            if (actual.calls.count() === 1 && util.contains(actual.calls.allArgs(), expectedArgs)) {
              return {
                pass: true,
                message: "Expected spy " + actual.and.identity + " to have been called 0 times, multiple times, or once, but with arguments different from:\n  " + util.pp(expectedArgs) + "\nBut the actual call was:\n" + prettyPrintedCalls.join(",\n") + ".\n\n"
              };
            }
            function getDiffs() {
              return actual.calls.allArgs().map(function(argsForCall, callIx) {
                var diffBuilder = new j$2.DiffBuilder();
                util.equals(argsForCall, expectedArgs, diffBuilder);
                return diffBuilder.getMessage();
              });
            }
            function butString() {
              switch (actual.calls.count()) {
                case 0:
                  return "But it was never called.\n\n";
                case 1:
                  return "But the actual call was:\n" + prettyPrintedCalls.join(",\n") + ".\n" + getDiffs().join("\n") + "\n\n";
                default:
                  return "But the actual calls were:\n" + prettyPrintedCalls.join(",\n") + ".\n\n";
              }
            }
            return {
              pass: false,
              message: "Expected spy " + actual.and.identity + " to have been called only once, and with given args:\n  " + util.pp(expectedArgs) + "\n" + butString()
            };
          }
        };
      }
      return toHaveBeenCalledOnceWith;
    };
    getJasmineRequireObj().toHaveBeenCalledTimes = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toHaveBeenCalledTimes>",
        "expect(<spyObj>).toHaveBeenCalledTimes(<Number>)"
      );
      function toHaveBeenCalledTimes(matchersUtil) {
        return {
          compare: function(actual, expected) {
            if (!j$2.isSpy(actual)) {
              throw new Error(
                getErrorMsg(
                  "Expected a spy, but got " + matchersUtil.pp(actual) + "."
                )
              );
            }
            var args = Array.prototype.slice.call(arguments, 0), result = { pass: false };
            if (!j$2.isNumber_(expected)) {
              throw new Error(
                getErrorMsg(
                  "The expected times failed is a required argument and must be a number."
                )
              );
            }
            actual = args[0];
            var calls = actual.calls.count();
            var timesMessage = expected === 1 ? "once" : expected + " times";
            result.pass = calls === expected;
            result.message = result.pass ? "Expected spy " + actual.and.identity + " not to have been called " + timesMessage + ". It was called " + calls + " times." : "Expected spy " + actual.and.identity + " to have been called " + timesMessage + ". It was called " + calls + " times.";
            return result;
          }
        };
      }
      return toHaveBeenCalledTimes;
    };
    getJasmineRequireObj().toHaveBeenCalledWith = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toHaveBeenCalledWith>",
        "expect(<spyObj>).toHaveBeenCalledWith(...arguments)"
      );
      function toHaveBeenCalledWith(matchersUtil) {
        return {
          compare: function() {
            var args = Array.prototype.slice.call(arguments, 0), actual = args[0], expectedArgs = args.slice(1), result = { pass: false };
            if (!j$2.isSpy(actual)) {
              throw new Error(
                getErrorMsg(
                  "Expected a spy, but got " + matchersUtil.pp(actual) + "."
                )
              );
            }
            if (!actual.calls.any()) {
              result.message = function() {
                return "Expected spy " + actual.and.identity + " to have been called with:\n  " + matchersUtil.pp(expectedArgs) + "\nbut it was never called.";
              };
              return result;
            }
            if (matchersUtil.contains(actual.calls.allArgs(), expectedArgs)) {
              result.pass = true;
              result.message = function() {
                return "Expected spy " + actual.and.identity + " not to have been called with:\n  " + matchersUtil.pp(expectedArgs) + "\nbut it was.";
              };
            } else {
              result.message = function() {
                var prettyPrintedCalls = actual.calls.allArgs().map(function(argsForCall) {
                  return "  " + matchersUtil.pp(argsForCall);
                });
                var diffs = actual.calls.allArgs().map(function(argsForCall, callIx) {
                  var diffBuilder = new j$2.DiffBuilder();
                  matchersUtil.equals(argsForCall, expectedArgs, diffBuilder);
                  return "Call " + callIx + ":\n" + diffBuilder.getMessage().replace(/^/gm, "  ");
                });
                return "Expected spy " + actual.and.identity + " to have been called with:\n  " + matchersUtil.pp(expectedArgs) + "\nbut actual calls were:\n" + prettyPrintedCalls.join(",\n") + ".\n\n" + diffs.join("\n");
              };
            }
            return result;
          }
        };
      }
      return toHaveBeenCalledWith;
    };
    getJasmineRequireObj().toHaveClass = function(j$2) {
      function toHaveClass(matchersUtil) {
        return {
          compare: function(actual, expected) {
            if (!isElement(actual)) {
              throw new Error(matchersUtil.pp(actual) + " is not a DOM element");
            }
            return {
              pass: actual.classList.contains(expected)
            };
          }
        };
      }
      function isElement(maybeEl) {
        return maybeEl && maybeEl.classList && j$2.isFunction_(maybeEl.classList.contains);
      }
      return toHaveClass;
    };
    getJasmineRequireObj().toHaveSize = function(j$2) {
      function toHaveSize() {
        return {
          compare: function(actual, expected) {
            var result = {
              pass: false
            };
            if (j$2.isA_("WeakSet", actual) || j$2.isWeakMap(actual) || j$2.isDataView(actual)) {
              throw new Error("Cannot get size of " + actual + ".");
            }
            if (j$2.isSet(actual) || j$2.isMap(actual)) {
              result.pass = actual.size === expected;
            } else if (isLength(actual.length)) {
              result.pass = actual.length === expected;
            } else {
              result.pass = Object.keys(actual).length === expected;
            }
            return result;
          }
        };
      }
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
      }
      return toHaveSize;
    };
    getJasmineRequireObj().toMatch = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toMatch>",
        "expect(<expectation>).toMatch(<string> || <regexp>)"
      );
      function toMatch() {
        return {
          compare: function(actual, expected) {
            if (!j$2.isString_(expected) && !j$2.isA_("RegExp", expected)) {
              throw new Error(getErrorMsg("Expected is not a String or a RegExp"));
            }
            var regexp = new RegExp(expected);
            return {
              pass: regexp.test(actual)
            };
          }
        };
      }
      return toMatch;
    };
    getJasmineRequireObj().toThrow = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toThrow>",
        "expect(function() {<expectation>}).toThrow()"
      );
      function toThrow(matchersUtil) {
        return {
          compare: function(actual, expected) {
            var result = { pass: false }, threw = false, thrown;
            if (typeof actual != "function") {
              throw new Error(getErrorMsg("Actual is not a Function"));
            }
            try {
              actual();
            } catch (e) {
              threw = true;
              thrown = e;
            }
            if (!threw) {
              result.message = "Expected function to throw an exception.";
              return result;
            }
            if (arguments.length == 1) {
              result.pass = true;
              result.message = function() {
                return "Expected function not to throw, but it threw " + matchersUtil.pp(thrown) + ".";
              };
              return result;
            }
            if (matchersUtil.equals(thrown, expected)) {
              result.pass = true;
              result.message = function() {
                return "Expected function not to throw " + matchersUtil.pp(expected) + ".";
              };
            } else {
              result.message = function() {
                return "Expected function to throw " + matchersUtil.pp(expected) + ", but it threw " + matchersUtil.pp(thrown) + ".";
              };
            }
            return result;
          }
        };
      }
      return toThrow;
    };
    getJasmineRequireObj().toThrowError = function(j$2) {
      var getErrorMsg = j$2.formatErrorMsg(
        "<toThrowError>",
        "expect(function() {<expectation>}).toThrowError(<ErrorConstructor>, <message>)"
      );
      function toThrowError(matchersUtil) {
        return {
          compare: function(actual) {
            var errorMatcher = getMatcher.apply(null, arguments), thrown;
            if (typeof actual != "function") {
              throw new Error(getErrorMsg("Actual is not a Function"));
            }
            try {
              actual();
              return fail("Expected function to throw an Error.");
            } catch (e) {
              thrown = e;
            }
            if (!j$2.isError_(thrown)) {
              return fail(function() {
                return "Expected function to throw an Error, but it threw " + matchersUtil.pp(thrown) + ".";
              });
            }
            return errorMatcher.match(thrown);
          }
        };
        function getMatcher() {
          var expected, errorType;
          if (arguments[2]) {
            errorType = arguments[1];
            expected = arguments[2];
            if (!isAnErrorType(errorType)) {
              throw new Error(getErrorMsg("Expected error type is not an Error."));
            }
            return exactMatcher(expected, errorType);
          } else if (arguments[1]) {
            expected = arguments[1];
            if (isAnErrorType(arguments[1])) {
              return exactMatcher(null, arguments[1]);
            } else {
              return exactMatcher(arguments[1], null);
            }
          } else {
            return anyMatcher();
          }
        }
        function anyMatcher() {
          return {
            match: function(error) {
              return pass(
                "Expected function not to throw an Error, but it threw " + j$2.fnNameFor(error) + "."
              );
            }
          };
        }
        function exactMatcher(expected, errorType) {
          if (expected && !isStringOrRegExp(expected)) {
            if (errorType) {
              throw new Error(
                getErrorMsg("Expected error message is not a string or RegExp.")
              );
            } else {
              throw new Error(
                getErrorMsg("Expected is not an Error, string, or RegExp.")
              );
            }
          }
          function messageMatch(message) {
            if (typeof expected == "string") {
              return expected == message;
            } else {
              return expected.test(message);
            }
          }
          var errorTypeDescription = errorType ? j$2.fnNameFor(errorType) : "an exception";
          function thrownDescription(thrown) {
            var thrownName = errorType ? j$2.fnNameFor(thrown.constructor) : "an exception", thrownMessage = "";
            if (expected) {
              thrownMessage = " with message " + matchersUtil.pp(thrown.message);
            }
            return thrownName + thrownMessage;
          }
          function messageDescription() {
            if (expected === null) {
              return "";
            } else if (expected instanceof RegExp) {
              return " with a message matching " + matchersUtil.pp(expected);
            } else {
              return " with message " + matchersUtil.pp(expected);
            }
          }
          function matches(error) {
            return (errorType === null || error instanceof errorType) && (expected === null || messageMatch(error.message));
          }
          return {
            match: function(thrown) {
              if (matches(thrown)) {
                return pass(function() {
                  return "Expected function not to throw " + errorTypeDescription + messageDescription() + ".";
                });
              } else {
                return fail(function() {
                  return "Expected function to throw " + errorTypeDescription + messageDescription() + ", but it threw " + thrownDescription(thrown) + ".";
                });
              }
            }
          };
        }
        function isStringOrRegExp(potential) {
          return potential instanceof RegExp || typeof potential == "string";
        }
        function isAnErrorType(type2) {
          if (typeof type2 !== "function") {
            return false;
          }
          var Surrogate = function() {
          };
          Surrogate.prototype = type2.prototype;
          return j$2.isError_(new Surrogate());
        }
      }
      function pass(message) {
        return {
          pass: true,
          message
        };
      }
      function fail(message) {
        return {
          pass: false,
          message
        };
      }
      return toThrowError;
    };
    getJasmineRequireObj().toThrowMatching = function(j$2) {
      var usageError = j$2.formatErrorMsg(
        "<toThrowMatching>",
        "expect(function() {<expectation>}).toThrowMatching(<Predicate>)"
      );
      function toThrowMatching(matchersUtil) {
        return {
          compare: function(actual, predicate) {
            var thrown;
            if (typeof actual !== "function") {
              throw new Error(usageError("Actual is not a Function"));
            }
            if (typeof predicate !== "function") {
              throw new Error(usageError("Predicate is not a Function"));
            }
            try {
              actual();
              return fail("Expected function to throw an exception.");
            } catch (e) {
              thrown = e;
            }
            if (predicate(thrown)) {
              return pass(
                "Expected function not to throw an exception matching a predicate."
              );
            } else {
              return fail(function() {
                return "Expected function to throw an exception matching a predicate, but it threw " + thrownDescription(thrown) + ".";
              });
            }
          }
        };
        function thrownDescription(thrown) {
          if (thrown && thrown.constructor) {
            return j$2.fnNameFor(thrown.constructor) + " with message " + matchersUtil.pp(thrown.message);
          } else {
            return matchersUtil.pp(thrown);
          }
        }
      }
      function pass(message) {
        return {
          pass: true,
          message
        };
      }
      function fail(message) {
        return {
          pass: false,
          message
        };
      }
      return toThrowMatching;
    };
    getJasmineRequireObj().MockDate = function(j$2) {
      function MockDate(global2) {
        var self2 = this;
        var currentTime2 = 0;
        if (!global2 || !global2.Date) {
          self2.install = function() {
          };
          self2.tick = function() {
          };
          self2.uninstall = function() {
          };
          return self2;
        }
        var GlobalDate = global2.Date;
        self2.install = function(mockDate) {
          if (mockDate instanceof GlobalDate) {
            currentTime2 = mockDate.getTime();
          } else {
            if (!j$2.util.isUndefined(mockDate)) {
              j$2.getEnv().deprecated(
                "The argument to jasmine.clock().mockDate(), if specified, should be a Date instance. Passing anything other than a Date will be treated as an error in a future release."
              );
            }
            currentTime2 = new GlobalDate().getTime();
          }
          global2.Date = FakeDate;
        };
        self2.tick = function(millis2) {
          millis2 = millis2 || 0;
          currentTime2 = currentTime2 + millis2;
        };
        self2.uninstall = function() {
          currentTime2 = 0;
          global2.Date = GlobalDate;
        };
        createDateProperties();
        return self2;
        function FakeDate() {
          switch (arguments.length) {
            case 0:
              return new GlobalDate(currentTime2);
            case 1:
              return new GlobalDate(arguments[0]);
            case 2:
              return new GlobalDate(arguments[0], arguments[1]);
            case 3:
              return new GlobalDate(arguments[0], arguments[1], arguments[2]);
            case 4:
              return new GlobalDate(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3]
              );
            case 5:
              return new GlobalDate(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4]
              );
            case 6:
              return new GlobalDate(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4],
                arguments[5]
              );
            default:
              return new GlobalDate(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6]
              );
          }
        }
        function createDateProperties() {
          FakeDate.prototype = GlobalDate.prototype;
          FakeDate.now = function() {
            if (GlobalDate.now) {
              return currentTime2;
            } else {
              throw new Error("Browser does not support Date.now()");
            }
          };
          FakeDate.toSource = GlobalDate.toSource;
          FakeDate.toString = GlobalDate.toString;
          FakeDate.parse = GlobalDate.parse;
          FakeDate.UTC = GlobalDate.UTC;
        }
      }
      return MockDate;
    };
    getJasmineRequireObj().makePrettyPrinter = function(j$2) {
      function SinglePrettyPrintRun(customObjectFormatters, pp) {
        this.customObjectFormatters_ = customObjectFormatters;
        this.ppNestLevel_ = 0;
        this.seen = [];
        this.length = 0;
        this.stringParts = [];
        this.pp_ = pp;
      }
      function hasCustomToString(value) {
        try {
          return j$2.isFunction_(value.toString) && value.toString !== Object.prototype.toString && value.toString() !== Object.prototype.toString.call(value);
        } catch (e) {
          return true;
        }
      }
      SinglePrettyPrintRun.prototype.format = function(value) {
        this.ppNestLevel_++;
        try {
          var customFormatResult = this.applyCustomFormatters_(value);
          if (customFormatResult) {
            this.emitScalar(customFormatResult);
          } else if (j$2.util.isUndefined(value)) {
            this.emitScalar("undefined");
          } else if (value === null) {
            this.emitScalar("null");
          } else if (value === 0 && 1 / value === -Infinity) {
            this.emitScalar("-0");
          } else if (value === j$2.getGlobal()) {
            this.emitScalar("<global>");
          } else if (value.jasmineToString) {
            this.emitScalar(value.jasmineToString(this.pp_));
          } else if (typeof value === "string") {
            this.emitString(value);
          } else if (j$2.isSpy(value)) {
            this.emitScalar("spy on " + value.and.identity);
          } else if (j$2.isSpy(value.toString)) {
            this.emitScalar("spy on " + value.toString.and.identity);
          } else if (value instanceof RegExp) {
            this.emitScalar(value.toString());
          } else if (typeof value === "function") {
            this.emitScalar("Function");
          } else if (j$2.isDomNode(value)) {
            if (value.tagName) {
              this.emitDomElement(value);
            } else {
              this.emitScalar("HTMLNode");
            }
          } else if (value instanceof Date) {
            this.emitScalar("Date(" + value + ")");
          } else if (j$2.isSet(value)) {
            this.emitSet(value);
          } else if (j$2.isMap(value)) {
            this.emitMap(value);
          } else if (j$2.isTypedArray_(value)) {
            this.emitTypedArray(value);
          } else if (value.toString && typeof value === "object" && !j$2.isArray_(value) && hasCustomToString(value)) {
            try {
              this.emitScalar(value.toString());
            } catch (e) {
              this.emitScalar("has-invalid-toString-method");
            }
          } else if (j$2.util.arrayContains(this.seen, value)) {
            this.emitScalar(
              "<circular reference: " + (j$2.isArray_(value) ? "Array" : "Object") + ">"
            );
          } else if (j$2.isArray_(value) || j$2.isA_("Object", value)) {
            this.seen.push(value);
            if (j$2.isArray_(value)) {
              this.emitArray(value);
            } else {
              this.emitObject(value);
            }
            this.seen.pop();
          } else {
            this.emitScalar(value.toString());
          }
        } catch (e) {
          if (this.ppNestLevel_ > 1 || !(e instanceof MaxCharsReachedError)) {
            throw e;
          }
        } finally {
          this.ppNestLevel_--;
        }
      };
      SinglePrettyPrintRun.prototype.applyCustomFormatters_ = function(value) {
        return customFormat(value, this.customObjectFormatters_);
      };
      SinglePrettyPrintRun.prototype.iterateObject = function(obj, fn) {
        var objKeys = keys(obj, j$2.isArray_(obj));
        var isGetter = function isGetter2(prop) {
        };
        if (obj.__lookupGetter__) {
          isGetter = function isGetter2(prop) {
            var getter = obj.__lookupGetter__(prop);
            return !j$2.util.isUndefined(getter) && getter !== null;
          };
        }
        var length = Math.min(objKeys.length, j$2.MAX_PRETTY_PRINT_ARRAY_LENGTH);
        for (var i2 = 0; i2 < length; i2++) {
          var property = objKeys[i2];
          fn(property, isGetter(property));
        }
        return objKeys.length > length;
      };
      SinglePrettyPrintRun.prototype.emitScalar = function(value) {
        this.append(value);
      };
      SinglePrettyPrintRun.prototype.emitString = function(value) {
        this.append("'" + value + "'");
      };
      SinglePrettyPrintRun.prototype.emitArray = function(array) {
        if (this.ppNestLevel_ > j$2.MAX_PRETTY_PRINT_DEPTH) {
          this.append("Array");
          return;
        }
        var length = Math.min(array.length, j$2.MAX_PRETTY_PRINT_ARRAY_LENGTH);
        this.append("[ ");
        for (var i2 = 0; i2 < length; i2++) {
          if (i2 > 0) {
            this.append(", ");
          }
          this.format(array[i2]);
        }
        if (array.length > length) {
          this.append(", ...");
        }
        var self2 = this;
        var first = array.length === 0;
        var truncated = this.iterateObject(array, function(property, isGetter) {
          if (first) {
            first = false;
          } else {
            self2.append(", ");
          }
          self2.formatProperty(array, property, isGetter);
        });
        if (truncated) {
          this.append(", ...");
        }
        this.append(" ]");
      };
      SinglePrettyPrintRun.prototype.emitSet = function(set) {
        if (this.ppNestLevel_ > j$2.MAX_PRETTY_PRINT_DEPTH) {
          this.append("Set");
          return;
        }
        this.append("Set( ");
        var size = Math.min(set.size, j$2.MAX_PRETTY_PRINT_ARRAY_LENGTH);
        var i2 = 0;
        set.forEach(function(value, key) {
          if (i2 >= size) {
            return;
          }
          if (i2 > 0) {
            this.append(", ");
          }
          this.format(value);
          i2++;
        }, this);
        if (set.size > size) {
          this.append(", ...");
        }
        this.append(" )");
      };
      SinglePrettyPrintRun.prototype.emitMap = function(map) {
        if (this.ppNestLevel_ > j$2.MAX_PRETTY_PRINT_DEPTH) {
          this.append("Map");
          return;
        }
        this.append("Map( ");
        var size = Math.min(map.size, j$2.MAX_PRETTY_PRINT_ARRAY_LENGTH);
        var i2 = 0;
        map.forEach(function(value, key) {
          if (i2 >= size) {
            return;
          }
          if (i2 > 0) {
            this.append(", ");
          }
          this.format([key, value]);
          i2++;
        }, this);
        if (map.size > size) {
          this.append(", ...");
        }
        this.append(" )");
      };
      SinglePrettyPrintRun.prototype.emitObject = function(obj) {
        var ctor = obj.constructor, constructorName;
        constructorName = typeof ctor === "function" && obj instanceof ctor ? j$2.fnNameFor(obj.constructor) : "null";
        this.append(constructorName);
        if (this.ppNestLevel_ > j$2.MAX_PRETTY_PRINT_DEPTH) {
          return;
        }
        var self2 = this;
        this.append("({ ");
        var first = true;
        var truncated = this.iterateObject(obj, function(property, isGetter) {
          if (first) {
            first = false;
          } else {
            self2.append(", ");
          }
          self2.formatProperty(obj, property, isGetter);
        });
        if (truncated) {
          this.append(", ...");
        }
        this.append(" })");
      };
      SinglePrettyPrintRun.prototype.emitTypedArray = function(arr) {
        var constructorName = j$2.fnNameFor(arr.constructor), limitedArray = Array.prototype.slice.call(
          arr,
          0,
          j$2.MAX_PRETTY_PRINT_ARRAY_LENGTH
        ), itemsString = Array.prototype.join.call(limitedArray, ", ");
        if (limitedArray.length !== arr.length) {
          itemsString += ", ...";
        }
        this.append(constructorName + " [ " + itemsString + " ]");
      };
      SinglePrettyPrintRun.prototype.emitDomElement = function(el) {
        var tagName = el.tagName.toLowerCase(), attrs = el.attributes, i2, len = attrs.length, out = "<" + tagName, attr;
        for (i2 = 0; i2 < len; i2++) {
          attr = attrs[i2];
          out += " " + attr.name;
          if (attr.value !== "") {
            out += '="' + attr.value + '"';
          }
        }
        out += ">";
        if (el.childElementCount !== 0 || el.textContent !== "") {
          out += "...</" + tagName + ">";
        }
        this.append(out);
      };
      SinglePrettyPrintRun.prototype.formatProperty = function(obj, property, isGetter) {
        this.append(property);
        this.append(": ");
        if (isGetter) {
          this.append("<getter>");
        } else {
          this.format(obj[property]);
        }
      };
      SinglePrettyPrintRun.prototype.append = function(value) {
        if (typeof value !== "string") {
          value = Object.prototype.toString.call(value);
        }
        var result = truncate(value, j$2.MAX_PRETTY_PRINT_CHARS - this.length);
        this.length += result.value.length;
        this.stringParts.push(result.value);
        if (result.truncated) {
          throw new MaxCharsReachedError();
        }
      };
      function truncate(s, maxlen) {
        if (s.length <= maxlen) {
          return { value: s, truncated: false };
        }
        s = s.substring(0, maxlen - 4) + " ...";
        return { value: s, truncated: true };
      }
      function MaxCharsReachedError() {
        this.message = "Exceeded " + j$2.MAX_PRETTY_PRINT_CHARS + " characters while pretty-printing a value";
      }
      MaxCharsReachedError.prototype = new Error();
      function keys(obj, isArray2) {
        var allKeys = Object.keys ? Object.keys(obj) : function(o) {
          var keys2 = [];
          for (var key in o) {
            if (j$2.util.has(o, key)) {
              keys2.push(key);
            }
          }
          return keys2;
        }(obj);
        if (!isArray2) {
          return allKeys;
        }
        if (allKeys.length === 0) {
          return allKeys;
        }
        var extraKeys = [];
        for (var i2 = 0; i2 < allKeys.length; i2++) {
          if (!/^[0-9]+$/.test(allKeys[i2])) {
            extraKeys.push(allKeys[i2]);
          }
        }
        return extraKeys;
      }
      function customFormat(value, customObjectFormatters) {
        var i2, result;
        for (i2 = 0; i2 < customObjectFormatters.length; i2++) {
          result = customObjectFormatters[i2](value);
          if (result !== void 0) {
            return result;
          }
        }
      }
      return function(customObjectFormatters) {
        customObjectFormatters = customObjectFormatters || [];
        var pp = function(value) {
          var prettyPrinter = new SinglePrettyPrintRun(customObjectFormatters, pp);
          prettyPrinter.format(value);
          return prettyPrinter.stringParts.join("");
        };
        pp.customFormat_ = function(value) {
          return customFormat(value, customObjectFormatters);
        };
        return pp;
      };
    };
    getJasmineRequireObj().QueueRunner = function(j$2) {
      var nextid = 1;
      function StopExecutionError() {
      }
      StopExecutionError.prototype = new Error();
      j$2.StopExecutionError = StopExecutionError;
      function once2(fn, onTwice) {
        var called = false;
        return function(arg) {
          if (called) {
            if (onTwice) {
              onTwice();
            }
          } else {
            called = true;
            fn(arg);
          }
          return null;
        };
      }
      function fallbackOnMultipleDone() {
        console.error(
          new Error(
            "An asynchronous function called its 'done' callback more than once, in a QueueRunner without a onMultipleDone handler."
          )
        );
      }
      function emptyFn() {
      }
      function QueueRunner(attrs) {
        this.id_ = nextid++;
        var queueableFns = attrs.queueableFns || [];
        this.queueableFns = queueableFns.concat(attrs.cleanupFns || []);
        this.firstCleanupIx = queueableFns.length;
        this.onComplete = attrs.onComplete || emptyFn;
        this.clearStack = attrs.clearStack || function(fn) {
          fn();
        };
        this.onException = attrs.onException || emptyFn;
        this.onMultipleDone = attrs.onMultipleDone || fallbackOnMultipleDone;
        this.userContext = attrs.userContext || new j$2.UserContext();
        this.timeout = attrs.timeout || {
          setTimeout,
          clearTimeout
        };
        this.fail = attrs.fail || emptyFn;
        this.globalErrors = attrs.globalErrors || {
          pushListener: emptyFn,
          popListener: emptyFn
        };
        this.completeOnFirstError = !!attrs.completeOnFirstError;
        this.errored = false;
        if (typeof this.onComplete !== "function") {
          throw new Error("invalid onComplete " + JSON.stringify(this.onComplete));
        }
        this.deprecated = attrs.deprecated;
      }
      QueueRunner.prototype.execute = function() {
        var self2 = this;
        this.handleFinalError = function(message, source, lineno, colno, error) {
          self2.onException(error || message);
        };
        this.globalErrors.pushListener(this.handleFinalError);
        this.run(0);
      };
      QueueRunner.prototype.skipToCleanup = function(lastRanIndex) {
        if (lastRanIndex < this.firstCleanupIx) {
          this.run(this.firstCleanupIx);
        } else {
          this.run(lastRanIndex + 1);
        }
      };
      QueueRunner.prototype.clearTimeout = function(timeoutId) {
        Function.prototype.apply.apply(this.timeout.clearTimeout, [
          j$2.getGlobal(),
          [timeoutId]
        ]);
      };
      QueueRunner.prototype.setTimeout = function(fn, timeout) {
        return Function.prototype.apply.apply(this.timeout.setTimeout, [
          j$2.getGlobal(),
          [fn, timeout]
        ]);
      };
      QueueRunner.prototype.attempt = function attempt(iterativeIndex) {
        var self2 = this, completedSynchronously = true, handleError = function handleError2(error) {
          onException(error);
        }, cleanup = once2(function cleanup2() {
          if (timeoutId !== void 0) {
            self2.clearTimeout(timeoutId);
          }
          self2.globalErrors.popListener(handleError);
        }), next = once2(
          function next2(err) {
            cleanup();
            if (j$2.isError_(err)) {
              if (!(err instanceof StopExecutionError) && !err.jasmineMessage) {
                self2.fail(err);
              }
              self2.errored = errored = true;
            } else if (typeof err !== "undefined" && !self2.errored) {
              self2.deprecated(
                "Any argument passed to a done callback will be treated as an error in a future release. Call the done callback without arguments if you don't want to trigger a spec failure."
              );
            }
            function runNext() {
              if (self2.completeOnFirstError && errored) {
                self2.skipToCleanup(iterativeIndex);
              } else {
                self2.run(iterativeIndex + 1);
              }
            }
            if (completedSynchronously) {
              self2.setTimeout(runNext);
            } else {
              runNext();
            }
          },
          function() {
            try {
              if (!timedOut) {
                self2.onMultipleDone();
              }
            } catch (error) {
              console.error(error);
            }
          }
        ), errored = false, timedOut = false, queueableFn = self2.queueableFns[iterativeIndex], timeoutId, maybeThenable;
        next.fail = function nextFail() {
          self2.fail.apply(null, arguments);
          self2.errored = errored = true;
          next();
        };
        self2.globalErrors.pushListener(handleError);
        if (queueableFn.timeout !== void 0) {
          var timeoutInterval = queueableFn.timeout || j$2.DEFAULT_TIMEOUT_INTERVAL;
          timeoutId = self2.setTimeout(function() {
            timedOut = true;
            var error = new Error(
              "Timeout - Async function did not complete within " + timeoutInterval + "ms " + (queueableFn.timeout ? "(custom timeout)" : "(set by jasmine.DEFAULT_TIMEOUT_INTERVAL)")
            );
            onException(error);
            next();
          }, timeoutInterval);
        }
        try {
          if (queueableFn.fn.length === 0) {
            maybeThenable = queueableFn.fn.call(self2.userContext);
            if (maybeThenable && j$2.isFunction_(maybeThenable.then)) {
              maybeThenable.then(
                wrapInPromiseResolutionHandler(next),
                onPromiseRejection
              );
              completedSynchronously = false;
              return { completedSynchronously: false };
            }
          } else {
            maybeThenable = queueableFn.fn.call(self2.userContext, next);
            this.diagnoseConflictingAsync_(queueableFn.fn, maybeThenable);
            completedSynchronously = false;
            return { completedSynchronously: false };
          }
        } catch (e) {
          onException(e);
          self2.errored = errored = true;
        }
        cleanup();
        return { completedSynchronously: true, errored };
        function onException(e) {
          self2.onException(e);
          self2.errored = errored = true;
        }
        function onPromiseRejection(e) {
          onException(e);
          next();
        }
      };
      QueueRunner.prototype.run = function(recursiveIndex) {
        var length = this.queueableFns.length, self2 = this, iterativeIndex;
        for (iterativeIndex = recursiveIndex; iterativeIndex < length; iterativeIndex++) {
          var result = this.attempt(iterativeIndex);
          if (!result.completedSynchronously) {
            return;
          }
          self2.errored = self2.errored || result.errored;
          if (this.completeOnFirstError && result.errored) {
            this.skipToCleanup(iterativeIndex);
            return;
          }
        }
        this.clearStack(function() {
          self2.globalErrors.popListener(self2.handleFinalError);
          if (self2.errored) {
            self2.onComplete(new StopExecutionError());
          } else {
            self2.onComplete();
          }
        });
      };
      QueueRunner.prototype.diagnoseConflictingAsync_ = function(fn, retval) {
        var msg;
        if (retval && j$2.isFunction_(retval.then)) {
          if (j$2.isAsyncFunction_(fn)) {
            msg = "An asynchronous before/it/after function was defined with the async keyword but also took a done callback. This is not supported and will stop working in the future. Either remove the done callback (recommended) or remove the async keyword.";
          } else {
            msg = "An asynchronous before/it/after function took a done callback but also returned a promise. This is not supported and will stop working in the future. Either remove the done callback (recommended) or change the function to not return a promise.";
          }
          this.deprecated(msg, { omitStackTrace: true });
        }
      };
      function wrapInPromiseResolutionHandler(fn) {
        return function(maybeArg) {
          if (j$2.isError_(maybeArg)) {
            fn(maybeArg);
          } else {
            fn();
          }
        };
      }
      return QueueRunner;
    };
    getJasmineRequireObj().ReportDispatcher = function(j$2) {
      function ReportDispatcher(methods, queueRunnerFactory, deprecated) {
        var dispatchedMethods = methods || [];
        for (var i2 = 0; i2 < dispatchedMethods.length; i2++) {
          var method = dispatchedMethods[i2];
          this[method] = function(m) {
            return function() {
              dispatch(m, arguments);
            };
          }(method);
        }
        var reporters = [];
        var fallbackReporter = null;
        this.addReporter = function(reporter) {
          reporters.push(reporter);
        };
        this.provideFallbackReporter = function(reporter) {
          fallbackReporter = reporter;
        };
        this.clearReporters = function() {
          reporters = [];
        };
        return this;
        function dispatch(method2, args) {
          if (reporters.length === 0 && fallbackReporter !== null) {
            reporters.push(fallbackReporter);
          }
          var onComplete = args[args.length - 1];
          args = j$2.util.argsToArray(args).splice(0, args.length - 1);
          var fns = [];
          for (var i3 = 0; i3 < reporters.length; i3++) {
            var reporter = reporters[i3];
            addFn(fns, reporter, method2, args);
          }
          queueRunnerFactory({
            queueableFns: fns,
            onComplete,
            isReporter: true,
            onMultipleDone: function() {
              deprecated(
                "An asynchronous reporter callback called its 'done' callback more than once. This is a bug in the reporter callback in question. This will be treated as an error in a future version. See<https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#deprecations-due-to-calling-done-multiple-times> for more information.",
                { ignoreRunnable: true }
              );
            }
          });
        }
        function addFn(fns, reporter, method2, args) {
          var fn = reporter[method2];
          if (!fn) {
            return;
          }
          var thisArgs = j$2.util.cloneArgs(args);
          if (fn.length <= 1) {
            fns.push({
              fn: function() {
                return fn.apply(reporter, thisArgs);
              }
            });
          } else {
            fns.push({
              fn: function(done) {
                return fn.apply(reporter, thisArgs.concat([done]));
              }
            });
          }
        }
      }
      return ReportDispatcher;
    };
    getJasmineRequireObj().interface = function(jasmine2, env) {
      var jasmineInterface = {
        describe: function(description2, specDefinitions) {
          return env.describe(description2, specDefinitions);
        },
        xdescribe: function(description2, specDefinitions) {
          return env.xdescribe(description2, specDefinitions);
        },
        fdescribe: function(description2, specDefinitions) {
          return env.fdescribe(description2, specDefinitions);
        },
        it: function() {
          return env.it.apply(env, arguments);
        },
        xit: function() {
          return env.xit.apply(env, arguments);
        },
        fit: function() {
          return env.fit.apply(env, arguments);
        },
        beforeEach: function() {
          return env.beforeEach.apply(env, arguments);
        },
        afterEach: function() {
          return env.afterEach.apply(env, arguments);
        },
        beforeAll: function() {
          return env.beforeAll.apply(env, arguments);
        },
        afterAll: function() {
          return env.afterAll.apply(env, arguments);
        },
        setSpecProperty: function(key, value) {
          return env.setSpecProperty(key, value);
        },
        setSuiteProperty: function(key, value) {
          return env.setSuiteProperty(key, value);
        },
        expect: function(actual) {
          return env.expect(actual);
        },
        expectAsync: function(actual) {
          return env.expectAsync(actual);
        },
        pending: function() {
          return env.pending.apply(env, arguments);
        },
        fail: function() {
          return env.fail.apply(env, arguments);
        },
        spyOn: function(obj, methodName) {
          return env.spyOn(obj, methodName);
        },
        spyOnProperty: function(obj, methodName, accessType) {
          return env.spyOnProperty(obj, methodName, accessType);
        },
        spyOnAllFunctions: function(obj, includeNonEnumerable) {
          return env.spyOnAllFunctions(obj, includeNonEnumerable);
        },
        jsApiReporter: new jasmine2.JsApiReporter({
          timer: new jasmine2.Timer()
        }),
        jasmine: jasmine2
      };
      jasmine2.addCustomEqualityTester = function(tester) {
        env.addCustomEqualityTester(tester);
      };
      jasmine2.addMatchers = function(matchers) {
        return env.addMatchers(matchers);
      };
      jasmine2.addAsyncMatchers = function(matchers) {
        return env.addAsyncMatchers(matchers);
      };
      jasmine2.addCustomObjectFormatter = function(formatter) {
        return env.addCustomObjectFormatter(formatter);
      };
      jasmine2.clock = function() {
        return env.clock;
      };
      jasmine2.createSpy = function(name2, originalFn) {
        return env.createSpy(name2, originalFn);
      };
      jasmine2.createSpyObj = function(baseName, methodNames, propertyNames) {
        return env.createSpyObj(baseName, methodNames, propertyNames);
      };
      jasmine2.addSpyStrategy = function(name2, factory2) {
        return env.addSpyStrategy(name2, factory2);
      };
      jasmine2.setDefaultSpyStrategy = function(defaultStrategyFn) {
        return env.setDefaultSpyStrategy(defaultStrategyFn);
      };
      return jasmineInterface;
    };
    getJasmineRequireObj().Spy = function(j$2) {
      var nextOrder = function() {
        var order = 0;
        return function() {
          return order++;
        };
      }();
      var matchersUtil = new j$2.MatchersUtil({
        customTesters: [],
        pp: j$2.makePrettyPrinter()
      });
      function Spy(name2, originalFn, customStrategies, defaultStrategyFn, getPromise) {
        var numArgs = typeof originalFn === "function" ? originalFn.length : 0, wrapper = makeFunc(numArgs, function(context2, args, invokeNew) {
          return spy(context2, args, invokeNew);
        }), strategyDispatcher = new SpyStrategyDispatcher({
          name: name2,
          fn: originalFn,
          getSpy: function() {
            return wrapper;
          },
          customStrategies,
          getPromise
        }), callTracker = new j$2.CallTracker(), spy = function(context2, args, invokeNew) {
          var callData = {
            object: context2,
            invocationOrder: nextOrder(),
            args: Array.prototype.slice.apply(args)
          };
          callTracker.track(callData);
          var returnValue = strategyDispatcher.exec(context2, args, invokeNew);
          callData.returnValue = returnValue;
          return returnValue;
        };
        function makeFunc(length, fn) {
          switch (length) {
            case 1:
              return function wrap1(a) {
                return fn(this, arguments, this instanceof wrap1);
              };
            case 2:
              return function wrap2(a, b) {
                return fn(this, arguments, this instanceof wrap2);
              };
            case 3:
              return function wrap3(a, b, c) {
                return fn(this, arguments, this instanceof wrap3);
              };
            case 4:
              return function wrap4(a, b, c, d) {
                return fn(this, arguments, this instanceof wrap4);
              };
            case 5:
              return function wrap5(a, b, c, d, e) {
                return fn(this, arguments, this instanceof wrap5);
              };
            case 6:
              return function wrap6(a, b, c, d, e, f2) {
                return fn(this, arguments, this instanceof wrap6);
              };
            case 7:
              return function wrap7(a, b, c, d, e, f2, g) {
                return fn(this, arguments, this instanceof wrap7);
              };
            case 8:
              return function wrap8(a, b, c, d, e, f2, g, h) {
                return fn(this, arguments, this instanceof wrap8);
              };
            case 9:
              return function wrap9(a, b, c, d, e, f2, g, h, i2) {
                return fn(this, arguments, this instanceof wrap9);
              };
            default:
              return function wrap() {
                return fn(this, arguments, this instanceof wrap);
              };
          }
        }
        for (var prop in originalFn) {
          if (prop === "and" || prop === "calls") {
            throw new Error(
              "Jasmine spies would overwrite the 'and' and 'calls' properties on the object being spied upon"
            );
          }
          wrapper[prop] = originalFn[prop];
        }
        wrapper.and = strategyDispatcher.and;
        wrapper.withArgs = function() {
          return strategyDispatcher.withArgs.apply(strategyDispatcher, arguments);
        };
        wrapper.calls = callTracker;
        if (defaultStrategyFn) {
          defaultStrategyFn(wrapper.and);
        }
        return wrapper;
      }
      function SpyStrategyDispatcher(strategyArgs) {
        var baseStrategy = new j$2.SpyStrategy(strategyArgs);
        var argsStrategies = new StrategyDict(function() {
          return new j$2.SpyStrategy(strategyArgs);
        });
        this.and = baseStrategy;
        this.exec = function(spy, args, invokeNew) {
          var strategy = argsStrategies.get(args);
          if (!strategy) {
            if (argsStrategies.any() && !baseStrategy.isConfigured()) {
              throw new Error(
                "Spy '" + strategyArgs.name + "' received a call with arguments " + j$2.basicPrettyPrinter_(Array.prototype.slice.call(args)) + " but all configured strategies specify other arguments."
              );
            } else {
              strategy = baseStrategy;
            }
          }
          return strategy.exec(spy, args, invokeNew);
        };
        this.withArgs = function() {
          return { and: argsStrategies.getOrCreate(arguments) };
        };
      }
      function StrategyDict(strategyFactory) {
        this.strategies = [];
        this.strategyFactory = strategyFactory;
      }
      StrategyDict.prototype.any = function() {
        return this.strategies.length > 0;
      };
      StrategyDict.prototype.getOrCreate = function(args) {
        var strategy = this.get(args);
        if (!strategy) {
          strategy = this.strategyFactory();
          this.strategies.push({
            args,
            strategy
          });
        }
        return strategy;
      };
      StrategyDict.prototype.get = function(args) {
        var i2;
        for (i2 = 0; i2 < this.strategies.length; i2++) {
          if (matchersUtil.equals(args, this.strategies[i2].args)) {
            return this.strategies[i2].strategy;
          }
        }
      };
      return Spy;
    };
    getJasmineRequireObj().SpyFactory = function(j$2) {
      function SpyFactory(getCustomStrategies, getDefaultStrategyFn, getPromise) {
        var self2 = this;
        this.createSpy = function(name2, originalFn) {
          return j$2.Spy(
            name2,
            originalFn,
            getCustomStrategies(),
            getDefaultStrategyFn(),
            getPromise
          );
        };
        this.createSpyObj = function(baseName, methodNames, propertyNames) {
          var baseNameIsCollection = j$2.isObject_(baseName) || j$2.isArray_(baseName);
          if (baseNameIsCollection) {
            propertyNames = methodNames;
            methodNames = baseName;
            baseName = "unknown";
          }
          var obj = {};
          var spy, descriptor;
          var methods = normalizeKeyValues(methodNames);
          for (var i2 = 0; i2 < methods.length; i2++) {
            spy = obj[methods[i2][0]] = self2.createSpy(
              baseName + "." + methods[i2][0]
            );
            if (methods[i2].length > 1) {
              spy.and.returnValue(methods[i2][1]);
            }
          }
          var properties = normalizeKeyValues(propertyNames);
          for (var i2 = 0; i2 < properties.length; i2++) {
            descriptor = {
              enumerable: true,
              get: self2.createSpy(baseName + "." + properties[i2][0] + ".get"),
              set: self2.createSpy(baseName + "." + properties[i2][0] + ".set")
            };
            if (properties[i2].length > 1) {
              descriptor.get.and.returnValue(properties[i2][1]);
              descriptor.set.and.returnValue(properties[i2][1]);
            }
            Object.defineProperty(obj, properties[i2][0], descriptor);
          }
          if (methods.length === 0 && properties.length === 0) {
            throw "createSpyObj requires a non-empty array or object of method names to create spies for";
          }
          return obj;
        };
      }
      function normalizeKeyValues(object) {
        var result = [];
        if (j$2.isArray_(object)) {
          for (var i2 = 0; i2 < object.length; i2++) {
            result.push([object[i2]]);
          }
        } else if (j$2.isObject_(object)) {
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              result.push([key, object[key]]);
            }
          }
        }
        return result;
      }
      return SpyFactory;
    };
    getJasmineRequireObj().SpyRegistry = function(j$2) {
      var spyOnMsg = j$2.formatErrorMsg("<spyOn>", "spyOn(<object>, <methodName>)");
      var spyOnPropertyMsg = j$2.formatErrorMsg(
        "<spyOnProperty>",
        "spyOnProperty(<object>, <propName>, [accessType])"
      );
      function SpyRegistry(options) {
        options = options || {};
        var global2 = options.global || j$2.getGlobal();
        var createSpy = options.createSpy;
        var currentSpies = options.currentSpies || function() {
          return [];
        };
        this.allowRespy = function(allow) {
          this.respy = allow;
        };
        this.spyOn = function(obj, methodName) {
          var getErrorMsg = spyOnMsg;
          if (j$2.util.isUndefined(obj) || obj === null) {
            throw new Error(
              getErrorMsg(
                "could not find an object to spy upon for " + methodName + "()"
              )
            );
          }
          if (j$2.util.isUndefined(methodName) || methodName === null) {
            throw new Error(getErrorMsg("No method name supplied"));
          }
          if (j$2.util.isUndefined(obj[methodName])) {
            throw new Error(getErrorMsg(methodName + "() method does not exist"));
          }
          if (obj[methodName] && j$2.isSpy(obj[methodName])) {
            if (this.respy) {
              return obj[methodName];
            } else {
              throw new Error(
                getErrorMsg(methodName + " has already been spied upon")
              );
            }
          }
          var descriptor = Object.getOwnPropertyDescriptor(obj, methodName);
          if (descriptor && !(descriptor.writable || descriptor.set)) {
            throw new Error(
              getErrorMsg(methodName + " is not declared writable or has no setter")
            );
          }
          var originalMethod = obj[methodName], spiedMethod = createSpy(methodName, originalMethod), restoreStrategy;
          if (Object.prototype.hasOwnProperty.call(obj, methodName) || obj === global2 && methodName === "onerror") {
            restoreStrategy = function() {
              obj[methodName] = originalMethod;
            };
          } else {
            restoreStrategy = function() {
              if (!delete obj[methodName]) {
                obj[methodName] = originalMethod;
              }
            };
          }
          currentSpies().push({
            restoreObjectToOriginalState: restoreStrategy
          });
          obj[methodName] = spiedMethod;
          return spiedMethod;
        };
        this.spyOnProperty = function(obj, propertyName, accessType) {
          var getErrorMsg = spyOnPropertyMsg;
          accessType = accessType || "get";
          if (j$2.util.isUndefined(obj)) {
            throw new Error(
              getErrorMsg(
                "spyOn could not find an object to spy upon for " + propertyName
              )
            );
          }
          if (j$2.util.isUndefined(propertyName)) {
            throw new Error(getErrorMsg("No property name supplied"));
          }
          var descriptor = j$2.util.getPropertyDescriptor(obj, propertyName);
          if (!descriptor) {
            throw new Error(getErrorMsg(propertyName + " property does not exist"));
          }
          if (!descriptor.configurable) {
            throw new Error(
              getErrorMsg(propertyName + " is not declared configurable")
            );
          }
          if (!descriptor[accessType]) {
            throw new Error(
              getErrorMsg(
                "Property " + propertyName + " does not have access type " + accessType
              )
            );
          }
          if (j$2.isSpy(descriptor[accessType])) {
            if (this.respy) {
              return descriptor[accessType];
            } else {
              throw new Error(
                getErrorMsg(
                  propertyName + "#" + accessType + " has already been spied upon"
                )
              );
            }
          }
          var originalDescriptor = j$2.util.clone(descriptor), spy = createSpy(propertyName, descriptor[accessType]), restoreStrategy;
          if (Object.prototype.hasOwnProperty.call(obj, propertyName)) {
            restoreStrategy = function() {
              Object.defineProperty(obj, propertyName, originalDescriptor);
            };
          } else {
            restoreStrategy = function() {
              delete obj[propertyName];
            };
          }
          currentSpies().push({
            restoreObjectToOriginalState: restoreStrategy
          });
          descriptor[accessType] = spy;
          Object.defineProperty(obj, propertyName, descriptor);
          return spy;
        };
        this.spyOnAllFunctions = function(obj, includeNonEnumerable) {
          if (j$2.util.isUndefined(obj)) {
            throw new Error(
              "spyOnAllFunctions could not find an object to spy upon"
            );
          }
          var pointer = obj, propsToSpyOn = [], properties, propertiesToSkip = [];
          while (pointer && (!includeNonEnumerable || pointer !== Object.prototype)) {
            properties = getProps(pointer, includeNonEnumerable);
            properties = properties.filter(function(prop) {
              return propertiesToSkip.indexOf(prop) === -1;
            });
            propertiesToSkip = propertiesToSkip.concat(properties);
            propsToSpyOn = propsToSpyOn.concat(
              getSpyableFunctionProps(pointer, properties)
            );
            pointer = Object.getPrototypeOf(pointer);
          }
          for (var i2 = 0; i2 < propsToSpyOn.length; i2++) {
            this.spyOn(obj, propsToSpyOn[i2]);
          }
          return obj;
        };
        this.clearSpies = function() {
          var spies = currentSpies();
          for (var i2 = spies.length - 1; i2 >= 0; i2--) {
            var spyEntry = spies[i2];
            spyEntry.restoreObjectToOriginalState();
          }
        };
      }
      function getProps(obj, includeNonEnumerable) {
        var enumerableProperties = Object.keys(obj);
        if (!includeNonEnumerable) {
          return enumerableProperties;
        }
        return Object.getOwnPropertyNames(obj).filter(function(prop) {
          return prop !== "constructor" || enumerableProperties.indexOf("constructor") > -1;
        });
      }
      function getSpyableFunctionProps(obj, propertiesToCheck) {
        var props = [], prop;
        for (var i2 = 0; i2 < propertiesToCheck.length; i2++) {
          prop = propertiesToCheck[i2];
          if (Object.prototype.hasOwnProperty.call(obj, prop) && isSpyableProp(obj, prop)) {
            props.push(prop);
          }
        }
        return props;
      }
      function isSpyableProp(obj, prop) {
        var value, descriptor;
        try {
          value = obj[prop];
        } catch (e) {
          return false;
        }
        if (value instanceof Function) {
          descriptor = Object.getOwnPropertyDescriptor(obj, prop);
          return (descriptor.writable || descriptor.set) && descriptor.configurable;
        }
        return false;
      }
      return SpyRegistry;
    };
    getJasmineRequireObj().SpyStrategy = function(j$2) {
      function SpyStrategy(options) {
        options = options || {};
        var self2 = this;
        this.identity = options.name || "unknown";
        this.originalFn = options.fn || function() {
        };
        this.getSpy = options.getSpy || function() {
        };
        this.plan = this._defaultPlan = function() {
        };
        var k, cs = options.customStrategies || {};
        for (k in cs) {
          if (j$2.util.has(cs, k) && !this[k]) {
            this[k] = createCustomPlan(cs[k]);
          }
        }
        var getPromise = typeof options.getPromise === "function" ? options.getPromise : function() {
        };
        var requirePromise = function(name2) {
          var Promise2 = getPromise();
          if (!Promise2) {
            throw new Error(
              name2 + " requires global Promise, or `Promise` configured with `jasmine.getEnv().configure()`"
            );
          }
          return Promise2;
        };
        this.resolveTo = function(value) {
          var Promise2 = requirePromise("resolveTo");
          self2.plan = function() {
            return Promise2.resolve(value);
          };
          return self2.getSpy();
        };
        this.rejectWith = function(value) {
          var Promise2 = requirePromise("rejectWith");
          self2.plan = function() {
            return Promise2.reject(value);
          };
          return self2.getSpy();
        };
      }
      function createCustomPlan(factory2) {
        return function() {
          var plan = factory2.apply(null, arguments);
          if (!j$2.isFunction_(plan)) {
            throw new Error("Spy strategy must return a function");
          }
          this.plan = plan;
          return this.getSpy();
        };
      }
      SpyStrategy.prototype.exec = function(context2, args, invokeNew) {
        var contextArgs = [context2].concat(
          args ? Array.prototype.slice.call(args) : []
        );
        var target = this.plan.bind.apply(this.plan, contextArgs);
        return invokeNew ? new target() : target();
      };
      SpyStrategy.prototype.callThrough = function() {
        this.plan = this.originalFn;
        return this.getSpy();
      };
      SpyStrategy.prototype.returnValue = function(value) {
        this.plan = function() {
          return value;
        };
        return this.getSpy();
      };
      SpyStrategy.prototype.returnValues = function() {
        var values = Array.prototype.slice.call(arguments);
        this.plan = function() {
          return values.shift();
        };
        return this.getSpy();
      };
      SpyStrategy.prototype.throwError = function(something) {
        var error = j$2.isString_(something) ? new Error(something) : something;
        this.plan = function() {
          throw error;
        };
        return this.getSpy();
      };
      SpyStrategy.prototype.callFake = function(fn) {
        if (!(j$2.isFunction_(fn) || j$2.isAsyncFunction_(fn) || j$2.isGeneratorFunction_(fn))) {
          throw new Error(
            "Argument passed to callFake should be a function, got " + fn
          );
        }
        this.plan = fn;
        return this.getSpy();
      };
      SpyStrategy.prototype.stub = function(fn) {
        this.plan = function() {
        };
        return this.getSpy();
      };
      SpyStrategy.prototype.isConfigured = function() {
        return this.plan !== this._defaultPlan;
      };
      return SpyStrategy;
    };
    getJasmineRequireObj().StackTrace = function(j$2) {
      function StackTrace(error) {
        var lines = error.stack.split("\n").filter(function(line) {
          return line !== "";
        });
        var extractResult = extractMessage(error.message, lines);
        if (extractResult) {
          this.message = extractResult.message;
          lines = extractResult.remainder;
        }
        var parseResult = tryParseFrames(lines);
        this.frames = parseResult.frames;
        this.style = parseResult.style;
      }
      var framePatterns = [
        {
          re: /^\s*at ([^\)]+) \(([^\)]+)\)$/,
          fnIx: 1,
          fileLineColIx: 2,
          style: "v8"
        },
        { re: /\s*at (.+)$/, fileLineColIx: 1, style: "v8" },
        {
          re: /^(([^@\s]+)@)?([^\s]+)$/,
          fnIx: 2,
          fileLineColIx: 3,
          style: "webkit"
        }
      ];
      function tryParseFrames(lines) {
        var style = null;
        var frames = lines.map(function(line) {
          var convertedLine = first(framePatterns, function(pattern) {
            var overallMatch = line.match(pattern.re), fileLineColMatch;
            if (!overallMatch) {
              return null;
            }
            fileLineColMatch = overallMatch[pattern.fileLineColIx].match(
              /^(.*):(\d+):\d+$/
            );
            if (!fileLineColMatch) {
              return null;
            }
            style = style || pattern.style;
            return {
              raw: line,
              file: fileLineColMatch[1],
              line: parseInt(fileLineColMatch[2], 10),
              func: overallMatch[pattern.fnIx]
            };
          });
          return convertedLine || { raw: line };
        });
        return {
          style,
          frames
        };
      }
      function first(items, fn) {
        var i2, result;
        for (i2 = 0; i2 < items.length; i2++) {
          result = fn(items[i2]);
          if (result) {
            return result;
          }
        }
      }
      function extractMessage(message, stackLines) {
        var len = messagePrefixLength(message, stackLines);
        if (len > 0) {
          return {
            message: stackLines.slice(0, len).join("\n"),
            remainder: stackLines.slice(len)
          };
        }
      }
      function messagePrefixLength(message, stackLines) {
        if (!stackLines[0].match(/^\w*Error/)) {
          return 0;
        }
        var messageLines = message.split("\n");
        var i2;
        for (i2 = 1; i2 < messageLines.length; i2++) {
          if (messageLines[i2] !== stackLines[i2]) {
            return 0;
          }
        }
        return messageLines.length;
      }
      return StackTrace;
    };
    getJasmineRequireObj().Suite = function(j$2) {
      function Suite(attrs) {
        this.env = attrs.env;
        this.id = attrs.id;
        this.parentSuite = attrs.parentSuite;
        this.description = attrs.description;
        this.expectationFactory = attrs.expectationFactory;
        this.asyncExpectationFactory = attrs.asyncExpectationFactory;
        this.expectationResultFactory = attrs.expectationResultFactory;
        this.throwOnExpectationFailure = !!attrs.throwOnExpectationFailure;
        this.autoCleanClosures = attrs.autoCleanClosures === void 0 ? true : !!attrs.autoCleanClosures;
        this.beforeFns = [];
        this.afterFns = [];
        this.beforeAllFns = [];
        this.afterAllFns = [];
        this.timer = attrs.timer || new j$2.Timer();
        this.children = [];
        this.reset();
      }
      Suite.prototype.setSuiteProperty = function(key, value) {
        this.result.properties = this.result.properties || {};
        this.result.properties[key] = value;
      };
      Suite.prototype.expect = function(actual) {
        return this.expectationFactory(actual, this);
      };
      Suite.prototype.expectAsync = function(actual) {
        return this.asyncExpectationFactory(actual, this);
      };
      Suite.prototype.getFullName = function() {
        var fullName = [];
        for (var parentSuite = this; parentSuite; parentSuite = parentSuite.parentSuite) {
          if (parentSuite.parentSuite) {
            fullName.unshift(parentSuite.description);
          }
        }
        return fullName.join(" ");
      };
      Suite.prototype.pend = function() {
        this.markedPending = true;
      };
      Suite.prototype.exclude = function() {
        this.pend();
        this.markedExcluding = true;
      };
      Suite.prototype.beforeEach = function(fn) {
        this.beforeFns.unshift(fn);
      };
      Suite.prototype.beforeAll = function(fn) {
        this.beforeAllFns.push(fn);
      };
      Suite.prototype.afterEach = function(fn) {
        this.afterFns.unshift(fn);
      };
      Suite.prototype.afterAll = function(fn) {
        this.afterAllFns.unshift(fn);
      };
      Suite.prototype.startTimer = function() {
        this.timer.start();
      };
      Suite.prototype.endTimer = function() {
        this.result.duration = this.timer.elapsed();
      };
      function removeFns(queueableFns) {
        for (var i2 = 0; i2 < queueableFns.length; i2++) {
          queueableFns[i2].fn = null;
        }
      }
      Suite.prototype.cleanupBeforeAfter = function() {
        if (this.autoCleanClosures) {
          removeFns(this.beforeAllFns);
          removeFns(this.afterAllFns);
          removeFns(this.beforeFns);
          removeFns(this.afterFns);
        }
      };
      Suite.prototype.reset = function() {
        this.result = {
          id: this.id,
          description: this.description,
          fullName: this.getFullName(),
          failedExpectations: [],
          deprecationWarnings: [],
          duration: null,
          properties: null
        };
        this.markedPending = this.markedExcluding;
        this.children.forEach(function(child) {
          child.reset();
        });
      };
      Suite.prototype.addChild = function(child) {
        this.children.push(child);
      };
      Suite.prototype.status = function() {
        if (this.markedPending) {
          return "pending";
        }
        if (this.result.failedExpectations.length > 0) {
          return "failed";
        } else {
          return "passed";
        }
      };
      Suite.prototype.canBeReentered = function() {
        return this.beforeAllFns.length === 0 && this.afterAllFns.length === 0;
      };
      Suite.prototype.getResult = function() {
        this.result.status = this.status();
        return this.result;
      };
      Suite.prototype.sharedUserContext = function() {
        if (!this.sharedContext) {
          this.sharedContext = this.parentSuite ? this.parentSuite.clonedSharedUserContext() : new j$2.UserContext();
        }
        return this.sharedContext;
      };
      Suite.prototype.clonedSharedUserContext = function() {
        return j$2.UserContext.fromExisting(this.sharedUserContext());
      };
      Suite.prototype.onException = function() {
        if (arguments[0] instanceof j$2.errors.ExpectationFailed) {
          return;
        }
        var data = {
          matcherName: "",
          passed: false,
          expected: "",
          actual: "",
          error: arguments[0]
        };
        var failedExpectation = this.expectationResultFactory(data);
        if (!this.parentSuite) {
          failedExpectation.globalErrorType = "afterAll";
        }
        this.result.failedExpectations.push(failedExpectation);
      };
      Suite.prototype.onMultipleDone = function() {
        var msg;
        if (this.parentSuite) {
          msg = "An asynchronous function called its 'done' callback more than once. This is a bug in the spec, beforeAll, beforeEach, afterAll, or afterEach function in question. This will be treated as an error in a future version. See<https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#deprecations-due-to-calling-done-multiple-times> for more information.\n(in suite: " + this.getFullName() + ")";
        } else {
          msg = "A top-level beforeAll or afterAll function called its 'done' callback more than once. This is a bug in the beforeAll or afterAll function in question. This will be treated as an error in a future version. See<https://jasmine.github.io/tutorials/upgrading_to_Jasmine_4.0#deprecations-due-to-calling-done-multiple-times> for more information.";
        }
        this.env.deprecated(msg, { ignoreRunnable: true });
      };
      Suite.prototype.addExpectationResult = function() {
        if (isFailure(arguments)) {
          var data = arguments[1];
          this.result.failedExpectations.push(this.expectationResultFactory(data));
          if (this.throwOnExpectationFailure) {
            throw new j$2.errors.ExpectationFailed();
          }
        }
      };
      Suite.prototype.addDeprecationWarning = function(deprecation) {
        if (typeof deprecation === "string") {
          deprecation = { message: deprecation };
        }
        this.result.deprecationWarnings.push(
          this.expectationResultFactory(deprecation)
        );
      };
      function isFailure(args) {
        return !args[0];
      }
      return Suite;
    };
    if (typeof window == void 0 && true) {
      exports.Suite = jasmineRequire.Suite;
    }
    getJasmineRequireObj().Timer = function() {
      var defaultNow = function(Date2) {
        return function() {
          return new Date2().getTime();
        };
      }(Date);
      function Timer(options) {
        options = options || {};
        var now = options.now || defaultNow, startTime;
        this.start = function() {
          startTime = now();
        };
        this.elapsed = function() {
          return now() - startTime;
        };
      }
      return Timer;
    };
    getJasmineRequireObj().TreeProcessor = function() {
      function TreeProcessor(attrs) {
        var tree = attrs.tree, runnableIds = attrs.runnableIds, queueRunnerFactory = attrs.queueRunnerFactory, nodeStart = attrs.nodeStart || function() {
        }, nodeComplete = attrs.nodeComplete || function() {
        }, failSpecWithNoExpectations = !!attrs.failSpecWithNoExpectations, orderChildren = attrs.orderChildren || function(node) {
          return node.children;
        }, excludeNode = attrs.excludeNode || function(node) {
          return false;
        }, stats = { valid: true }, processed = false, defaultMin = Infinity, defaultMax = 1 - Infinity;
        this.processTree = function() {
          processNode(tree, true);
          processed = true;
          return stats;
        };
        this.execute = function(done) {
          if (!processed) {
            this.processTree();
          }
          if (!stats.valid) {
            throw "invalid order";
          }
          var childFns = wrapChildren(tree, 0);
          queueRunnerFactory({
            queueableFns: childFns,
            userContext: tree.sharedUserContext(),
            onException: function() {
              tree.onException.apply(tree, arguments);
            },
            onComplete: done,
            onMultipleDone: tree.onMultipleDone ? tree.onMultipleDone.bind(tree) : null
          });
        };
        function runnableIndex(id) {
          for (var i2 = 0; i2 < runnableIds.length; i2++) {
            if (runnableIds[i2] === id) {
              return i2;
            }
          }
        }
        function processNode(node, parentExcluded) {
          var executableIndex = runnableIndex(node.id);
          if (executableIndex !== void 0) {
            parentExcluded = false;
          }
          if (!node.children) {
            var excluded = parentExcluded || excludeNode(node);
            stats[node.id] = {
              excluded,
              willExecute: !excluded && !node.markedPending,
              segments: [
                {
                  index: 0,
                  owner: node,
                  nodes: [node],
                  min: startingMin(executableIndex),
                  max: startingMax(executableIndex)
                }
              ]
            };
          } else {
            var hasExecutableChild = false;
            var orderedChildren = orderChildren(node);
            for (var i2 = 0; i2 < orderedChildren.length; i2++) {
              var child = orderedChildren[i2];
              processNode(child, parentExcluded);
              if (!stats.valid) {
                return;
              }
              var childStats = stats[child.id];
              hasExecutableChild = hasExecutableChild || childStats.willExecute;
            }
            stats[node.id] = {
              excluded: parentExcluded,
              willExecute: hasExecutableChild
            };
            segmentChildren(node, orderedChildren, stats[node.id], executableIndex);
            if (!node.canBeReentered() && stats[node.id].segments.length > 1) {
              stats = { valid: false };
            }
          }
        }
        function startingMin(executableIndex) {
          return executableIndex === void 0 ? defaultMin : executableIndex;
        }
        function startingMax(executableIndex) {
          return executableIndex === void 0 ? defaultMax : executableIndex;
        }
        function segmentChildren(node, orderedChildren, nodeStats, executableIndex) {
          var currentSegment = {
            index: 0,
            owner: node,
            nodes: [],
            min: startingMin(executableIndex),
            max: startingMax(executableIndex)
          }, result = [currentSegment], lastMax = defaultMax, orderedChildSegments = orderChildSegments(orderedChildren);
          function isSegmentBoundary(minIndex2) {
            return lastMax !== defaultMax && minIndex2 !== defaultMin && lastMax < minIndex2 - 1;
          }
          for (var i2 = 0; i2 < orderedChildSegments.length; i2++) {
            var childSegment = orderedChildSegments[i2], maxIndex = childSegment.max, minIndex = childSegment.min;
            if (isSegmentBoundary(minIndex)) {
              currentSegment = {
                index: result.length,
                owner: node,
                nodes: [],
                min: defaultMin,
                max: defaultMax
              };
              result.push(currentSegment);
            }
            currentSegment.nodes.push(childSegment);
            currentSegment.min = Math.min(currentSegment.min, minIndex);
            currentSegment.max = Math.max(currentSegment.max, maxIndex);
            lastMax = maxIndex;
          }
          nodeStats.segments = result;
        }
        function orderChildSegments(children2) {
          var specifiedOrder = [], unspecifiedOrder = [];
          for (var i2 = 0; i2 < children2.length; i2++) {
            var child = children2[i2], segments = stats[child.id].segments;
            for (var j = 0; j < segments.length; j++) {
              var seg = segments[j];
              if (seg.min === defaultMin) {
                unspecifiedOrder.push(seg);
              } else {
                specifiedOrder.push(seg);
              }
            }
          }
          specifiedOrder.sort(function(a, b) {
            return a.min - b.min;
          });
          return specifiedOrder.concat(unspecifiedOrder);
        }
        function executeNode(node, segmentNumber) {
          if (node.children) {
            return {
              fn: function(done) {
                var onStart = {
                  fn: function(next) {
                    nodeStart(node, next);
                  }
                };
                queueRunnerFactory({
                  onComplete: function() {
                    var args = Array.prototype.slice.call(arguments, [0]);
                    node.cleanupBeforeAfter();
                    nodeComplete(node, node.getResult(), function() {
                      done.apply(void 0, args);
                    });
                  },
                  queueableFns: [onStart].concat(wrapChildren(node, segmentNumber)),
                  userContext: node.sharedUserContext(),
                  onException: function() {
                    node.onException.apply(node, arguments);
                  },
                  onMultipleDone: node.onMultipleDone ? node.onMultipleDone.bind(node) : null
                });
              }
            };
          } else {
            return {
              fn: function(done) {
                node.execute(
                  done,
                  stats[node.id].excluded,
                  failSpecWithNoExpectations
                );
              }
            };
          }
        }
        function wrapChildren(node, segmentNumber) {
          var result = [], segmentChildren2 = stats[node.id].segments[segmentNumber].nodes;
          for (var i2 = 0; i2 < segmentChildren2.length; i2++) {
            result.push(
              executeNode(segmentChildren2[i2].owner, segmentChildren2[i2].index)
            );
          }
          if (!stats[node.id].willExecute) {
            return result;
          }
          return node.beforeAllFns.concat(result).concat(node.afterAllFns);
        }
      }
      return TreeProcessor;
    };
    getJasmineRequireObj().UserContext = function(j$2) {
      function UserContext() {
      }
      UserContext.fromExisting = function(oldContext) {
        var context2 = new UserContext();
        for (var prop in oldContext) {
          if (oldContext.hasOwnProperty(prop)) {
            context2[prop] = oldContext[prop];
          }
        }
        return context2;
      };
      return UserContext;
    };
    getJasmineRequireObj().version = function() {
      return "3.99.1";
    };
  })(jasmine, jasmine.exports);
  return jasmine.exports;
}
var node_boot;
var hasRequiredNode_boot;
function requireNode_boot() {
  if (hasRequiredNode_boot)
    return node_boot;
  hasRequiredNode_boot = 1;
  node_boot = function(jasmineRequire2) {
    var jasmine2 = jasmineRequire2.core(jasmineRequire2);
    var env = jasmine2.getEnv({ suppressLoadErrors: true });
    var jasmineInterface = jasmineRequire2.interface(jasmine2, env);
    extend2(commonjsGlobal, jasmineInterface);
    function extend2(destination, source) {
      for (var property in source)
        destination[property] = source[property];
      return destination;
    }
    return jasmine2;
  };
  return node_boot;
}
var hasRequiredJasmineCore;
function requireJasmineCore() {
  if (hasRequiredJasmineCore)
    return jasmineCore.exports;
  hasRequiredJasmineCore = 1;
  (function(module2) {
    module2.exports = requireJasmine();
    module2.exports.boot = requireNode_boot();
    var path2 = require$$1, fs2 = require$$1;
    var rootPath = path2.join(__dirname, "jasmine-core"), bootFiles = ["boot0.js", "boot1.js"], legacyBootFiles = ["boot.js"], nodeBootFiles = ["node_boot.js"], cssFiles = [], jsFiles = [], jsFilesToSkip = ["jasmine.js"].concat(bootFiles, legacyBootFiles, nodeBootFiles);
    fs2.readdirSync(rootPath).forEach(function(file) {
      if (fs2.statSync(path2.join(rootPath, file)).isFile()) {
        switch (path2.extname(file)) {
          case ".css":
            cssFiles.push(file);
            break;
          case ".js":
            if (jsFilesToSkip.indexOf(file) < 0) {
              jsFiles.push(file);
            }
            break;
        }
      }
    });
    module2.exports.files = {
      path: rootPath,
      bootDir: rootPath,
      bootFiles,
      nodeBootFiles,
      cssFiles,
      jsFiles: ["jasmine.js"].concat(jsFiles),
      imagesDir: path2.join(__dirname, "../images")
    };
  })(jasmineCore);
  return jasmineCore.exports;
}
(function(module2) {
  const path2 = require$$1;
  const util = require$$1;
  const glob = requireGlob();
  const Loader2 = loader;
  const CompletionReporter = completion_reporter;
  const ConsoleSpecFilter = console_spec_filter.exports;
  module2.exports = Jasmine;
  module2.exports.ConsoleReporter = console_reporter.exports;
  function Jasmine(options) {
    options = options || {};
    this.loader = options.loader || new Loader2();
    const jasmineCore2 = options.jasmineCore || requireJasmineCore();
    this.jasmineCorePath = path2.join(jasmineCore2.files.path, "jasmine.js");
    this.jasmine = jasmineCore2.boot(jasmineCore2);
    this.projectBaseDir = options.projectBaseDir || path2.resolve();
    this.specDir = "";
    this.specFiles = [];
    this.helperFiles = [];
    this.requires = [];
    this.env = this.jasmine.getEnv({ suppressLoadErrors: true });
    this.reportersCount = 0;
    this.completionReporter = new CompletionReporter();
    this.onCompleteCallbackAdded = false;
    this.exit = process.exit;
    this.showingColors = true;
    this.reporter = new module2.exports.ConsoleReporter();
    this.addReporter(this.reporter);
    this.defaultReporterConfigured = false;
    const jasmineRunner = this;
    this.completionReporter.onComplete(function(passed) {
      jasmineRunner.exitCodeCompletion(passed);
    });
    this.checkExit = checkExit(this);
    this.coreVersion = function() {
      return jasmineCore2.version();
    };
    this.exitOnCompletion = true;
  }
  Jasmine.prototype.randomizeTests = function(value) {
    this.env.configure({ random: value });
  };
  Jasmine.prototype.seed = function(value) {
    this.env.configure({ seed: value });
  };
  Jasmine.prototype.showColors = function(value) {
    this.showingColors = value;
  };
  Jasmine.prototype.addSpecFile = function(filePath) {
    this.specFiles.push(filePath);
  };
  Jasmine.prototype.addHelperFile = function(filePath) {
    this.helperFiles.push(filePath);
  };
  Jasmine.prototype.addReporter = function(reporter) {
    this.env.addReporter(reporter);
    this.reportersCount++;
  };
  Jasmine.prototype.clearReporters = function() {
    this.env.clearReporters();
    this.reportersCount = 0;
  };
  Jasmine.prototype.provideFallbackReporter = function(reporter) {
    this.env.provideFallbackReporter(reporter);
  };
  Jasmine.prototype.configureDefaultReporter = function(options) {
    options.print = options.print || function() {
      process.stdout.write(util.format.apply(this, arguments));
    };
    options.showColors = options.hasOwnProperty("showColors") ? options.showColors : true;
    options.jasmineCorePath = options.jasmineCorePath || this.jasmineCorePath;
    this.reporter.setOptions(options);
    this.defaultReporterConfigured = true;
  };
  Jasmine.prototype.addMatchers = function(matchers) {
    this.env.addMatchers(matchers);
  };
  Jasmine.prototype.loadSpecs = function() {
    return __async(this, null, function* () {
      yield this._loadFiles(this.specFiles);
    });
  };
  Jasmine.prototype.loadHelpers = function() {
    return __async(this, null, function* () {
      yield this._loadFiles(this.helperFiles);
    });
  };
  Jasmine.prototype._loadFiles = function(files) {
    return __async(this, null, function* () {
      for (const file of files) {
        yield this.loader.load(file, this._alwaysImport || false);
      }
    });
  };
  Jasmine.prototype.loadRequires = function() {
    this.requires.forEach(function(r) {
      if (r.startsWith("./") || r.startsWith("../")) {
        console.warn(`DEPRECATION: requires with relative paths (in this case ${r}) are currently resolved relative to the jasmine/lib/jasmine module but will be relative to the current working directory in Jasmine 4.0.`);
      }
      commonjsRequire(r);
    });
  };
  Jasmine.prototype.loadConfigFile = function(configFilePath) {
    try {
      const absoluteConfigFilePath = path2.resolve(this.projectBaseDir, configFilePath || "spec/support/jasmine.json");
      const config2 = commonjsRequire(absoluteConfigFilePath);
      this.loadConfig(config2);
    } catch (e) {
      if (configFilePath || e.code != "MODULE_NOT_FOUND") {
        throw e;
      }
    }
  };
  Jasmine.prototype.loadConfig = function(config2) {
    const envConfig = __spreadValues({}, config2.env);
    this.specDir = config2.spec_dir || this.specDir;
    if (config2.failSpecWithNoExpectations !== void 0) {
      envConfig.failSpecWithNoExpectations = config2.failSpecWithNoExpectations;
    }
    if (config2.stopSpecOnExpectationFailure !== void 0) {
      envConfig.stopSpecOnExpectationFailure = config2.stopSpecOnExpectationFailure;
    }
    if (config2.stopOnSpecFailure !== void 0) {
      envConfig.stopOnSpecFailure = config2.stopOnSpecFailure;
    }
    if (config2.random !== void 0) {
      envConfig.random = config2.random;
    }
    if (config2.verboseDeprecations !== void 0) {
      envConfig.verboseDeprecations = config2.verboseDeprecations;
    }
    if (config2.jsLoader === "import") {
      checkForJsFileImportSupport();
      this._alwaysImport = true;
    } else if (config2.jsLoader === "require" || config2.jsLoader === void 0) {
      this._alwaysImport = false;
    } else {
      throw new Error(`"${config2.jsLoader}" is not a valid value for the jsLoader configuration property. Valid values are "import", "require", and undefined.`);
    }
    if (Object.keys(envConfig).length > 0) {
      this.env.configure(envConfig);
    }
    if (config2.helpers) {
      this.addMatchingHelperFiles(config2.helpers);
    }
    if (config2.requires) {
      this.addRequires(config2.requires);
    }
    if (config2.spec_files) {
      this.addMatchingSpecFiles(config2.spec_files);
    }
  };
  Jasmine.prototype.addMatchingSpecFiles = addFiles("specFiles");
  Jasmine.prototype.addMatchingHelperFiles = addFiles("helperFiles");
  Jasmine.prototype.addSpecFiles = function(globs) {
    this.env.deprecated("jasmine#addSpecFiles is deprecated. Use jasmine#addMatchingSpecFiles instead.");
    this.addMatchingSpecFiles(globs);
  };
  Jasmine.prototype.addHelperFiles = function(globs) {
    this.env.deprecated("jasmine#addHelperFiles is deprecated. Use jasmine#addMatchingHelperFiles instead.");
    this.addMatchingHelperFiles(globs);
  };
  Jasmine.prototype.addRequires = function(requires) {
    const jasmineRunner = this;
    requires.forEach(function(r) {
      jasmineRunner.requires.push(r);
    });
  };
  function addFiles(kind) {
    return function(files) {
      const jasmineRunner = this;
      const fileArr = this[kind];
      const { includeFiles, excludeFiles } = files.reduce(function(ongoing, file) {
        const hasNegation = file.startsWith("!");
        if (hasNegation) {
          file = file.substring(1);
        }
        if (!path2.isAbsolute(file)) {
          file = path2.join(jasmineRunner.projectBaseDir, jasmineRunner.specDir, file);
        }
        return {
          includeFiles: ongoing.includeFiles.concat(!hasNegation ? [file] : []),
          excludeFiles: ongoing.excludeFiles.concat(hasNegation ? [file] : [])
        };
      }, { includeFiles: [], excludeFiles: [] });
      includeFiles.forEach(function(file) {
        const filePaths = glob.sync(file, { ignore: excludeFiles }).filter(function(filePath) {
          return fileArr.indexOf(filePath) === -1 && fileArr.indexOf(path2.normalize(filePath)) === -1;
        });
        filePaths.forEach(function(filePath) {
          fileArr.push(filePath);
        });
      });
    };
  }
  Jasmine.prototype.onComplete = function(onCompleteCallback) {
    this.env.deprecated(
      "Jasmine#onComplete is deprecated. Instead of calling onComplete, set the Jasmine instance's exitOnCompletion property to false and use the promise returned from the execute method."
    );
    this.completionReporter.onComplete(onCompleteCallback);
  };
  Jasmine.prototype.stopSpecOnExpectationFailure = function(value) {
    this.env.configure({ stopSpecOnExpectationFailure: value });
  };
  Jasmine.prototype.stopOnSpecFailure = function(value) {
    this.env.configure({ stopOnSpecFailure: value });
  };
  Jasmine.prototype.exitCodeCompletion = function(passed) {
    const jasmineRunner = this;
    const streams = [process.stdout, process.stderr];
    let writesToWait = streams.length;
    streams.forEach(function(stream) {
      stream.write("", null, exitIfAllStreamsCompleted);
    });
    function exitIfAllStreamsCompleted() {
      writesToWait--;
      if (writesToWait === 0 && jasmineRunner.exitOnCompletion) {
        if (passed) {
          jasmineRunner.exit(0);
        } else {
          jasmineRunner.exit(1);
        }
      }
    }
  };
  const checkExit = function(jasmineRunner) {
    return function() {
      if (!jasmineRunner.completionReporter.isComplete()) {
        process.exitCode = 4;
      }
    };
  };
  function checkForJsFileImportSupport() {
    const v = process.versions.node.split(".").map((el) => parseInt(el, 10));
    if (v[0] < 12 || v[0] === 12 && v[1] < 17) {
      console.warn('Warning: jsLoader: "import" may not work reliably on Node versions before 12.17.');
    }
  }
  Jasmine.prototype.execute = function(files, filterString) {
    return __async(this, null, function* () {
      this.completionReporter.exitHandler = this.checkExit;
      this.loadRequires();
      yield this.loadHelpers();
      if (!this.defaultReporterConfigured) {
        this.configureDefaultReporter({ showColors: this.showingColors });
      }
      if (filterString) {
        const specFilter = new ConsoleSpecFilter({
          filterString
        });
        this.env.configure({ specFilter: function(spec) {
          return specFilter.matches(spec.getFullName());
        } });
      }
      if (files && files.length > 0) {
        this.specDir = "";
        this.specFiles = [];
        this.addMatchingSpecFiles(files);
      }
      yield this.loadSpecs();
      if (!this.completionReporterInstalled_) {
        this.addReporter(this.completionReporter);
        this.completionReporterInstalled_ = true;
      }
      let overallResult;
      this.addReporter({
        jasmineDone: (r) => overallResult = r
      });
      yield new Promise((resolve) => {
        this.env.execute(null, resolve);
      });
      return overallResult;
    });
  };
})(jasmine$1);
const classNames = [
  "55567$6DEME",
  "55567$6ATHE"
];
const level = "";
const login = "ann.onymous";
const lastName = "ONYMOUS";
const firstName = "ANN";
const externalId = "0123456789";
const federated = null;
const birthDate = "2000-01-01";
const forceChangePassword = null;
const needRevalidateTerms = null;
const deletePending = false;
const username = "Ann Onymous";
const type = "ENSEIGNANT";
const hasPw = true;
const functions = {
  ENS: {
    code: "ENS",
    functionName: "ENSEIGNEMENT",
    scope: [
      "96d4d883-d58b-405c-89c7-c91a84e55952"
    ],
    structureExternalIds: [
      "55567"
    ],
    subjects: {
      L1800: {
        subjectCode: "L1800",
        subjectName: "ARTS PLASTIQUES",
        scope: [
          "96d4d883-d58b-405c-89c7-c91a84e55952"
        ],
        structureExternalIds: [
          "55567"
        ]
      }
    }
  },
  ADMIN_LOCAL: {
    code: "ADMIN_LOCAL",
    scope: null
  },
  SUPER_ADMIN: {
    code: "SUPER_ADMIN",
    scope: null
  }
};
const groupsIds = [
  "352272-1611305407684",
  "76552-1434723679684",
  "500-1429810570516"
];
const federatedIDP = null;
const optionEnabled = [];
const userId = "91c22b66-ba1b-4fde-a3fe-95219cc18d4a";
const structures = [
  "01234567-0123-0123-4567-0123456789ab",
  "01234567-0123-0123-4567-cdef01456789"
];
const structureNames = [
  "First structure",
  "Second structure"
];
const uai = [
  "0123456A",
  "9876543B"
];
const hasApp = true;
const classes = [
  "2a3d089f-ed1b-4e26-a726-ca3f927f9bd1"
];
const authorizedActions = [
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|publish",
    displayName: "mindmap.publish",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|printView",
    displayName: "mindmap.print",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.blog.controllers.BlogController|publish",
    displayName: "blog.publish",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Administration|address",
    displayName: "Administration.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.homeworks.controllers.HomeworksController|view",
    displayName: "homeworks.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.calendar.controllers.CalendarController|listCalendars",
    displayName: "calendar.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.calendar.controllers.CalendarController|view",
    displayName: "calendar.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Param\xE9trage de la classe|address",
    displayName: "Param\xE9trage de la classe.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.lool.controller.LoolController|createDocumentFromTemplate",
    displayName: "create.document",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.lool.controller.LoolController|open",
    displayName: "open.file",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.lool.controller.MonitoringController|monitoring",
    displayName: "monitoring",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.cns.controllers.CnsController|view",
    displayName: "cns.access",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.schoolbook.controllers.SchoolBookController|view",
    displayName: "schoolbook.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.DisplayController|view",
    displayName: "Viescolaire.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.timeline.controllers.TimelineController|allowLanguages",
    displayName: "timeline.allowLanguages",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.forum.controllers.ForumController|listCategories",
    displayName: "forum.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.forum.controllers.ForumController|view",
    displayName: "forum.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.ResourceTypeController|listResourceTypes",
    displayName: "rbs.type.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.BookingController|listUserBookings",
    displayName: "rbs.booking.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.BookingController|listAllBookings",
    displayName: "rbs.booking.list.all",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.BookingController|listUnprocessedBookings",
    displayName: "rbs.booking.list.unprocessed",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.DisplayController|view",
    displayName: "rbs.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.BookingController|listFullSlotsBooking",
    displayName: "rbs.booking.list.slots",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.BookingController|listAllBookingsByDate",
    displayName: "rbs.booking.list.all.dates",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.ResourceController|list",
    displayName: "rbs.resource.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.community.controllers.PagesController|list",
    displayName: "pages.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.community.controllers.CommunityController|listVisibles",
    displayName: "community.listVisibles",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.community.controllers.PagesController|view",
    displayName: "pages.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.community.controllers.PagesController|add",
    displayName: "pages.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.community.controllers.PagesController|addPublic",
    displayName: "pages.add.public",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.community.controllers.CommunityController|view",
    displayName: "community.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.archive.controllers.ArchiveController|view",
    displayName: "archive.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.archive.controllers.ArchiveController|export",
    displayName: "archive.export",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.UserBookController|userBookSwitchTheme",
    displayName: "userbook.switch.theme",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.UserBookController|userBookMottoMood",
    displayName: "userbook.show.motto.mood",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|persist",
    displayName: "exercizer.subject.persist",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|listBySubjectForLibrary",
    displayName: "exercizer.subject.library.grain.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.GrainScheduledController|list",
    displayName: "exercizer.grain.scheduled.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectCopyController|list",
    displayName: "exercizer.subject.copy.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectCopyController|listBySubjectSheduledList",
    displayName: "exercizer.subject.copy.list.by.subject.scheduled.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|listLibrarySubject",
    displayName: "exercizer.subject.list.for.library",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectLessonTypeController|listBySubjectId",
    displayName: "exercizer.subject.lesson.type.list.by.subject.id.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectLessonTypeController|list",
    displayName: "exercizer.subject.lesson.type.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.FolderController|list",
    displayName: "exercizer.folder.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|downloadCorrected",
    displayName: "exercizer.subject.simple.download.library",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|countLibrarySubject",
    displayName: "exercizer.subject.count.for.library",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|list",
    displayName: "exercizer.subject.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectLessonLevelController|list",
    displayName: "exercizer.subject.lesson.level.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectTagController|persist",
    displayName: "exercizer.subject.tag.persist",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.ExercizerController|view",
    displayName: "exercizer.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectScheduledController|list",
    displayName: "exercizer.subject.scheduled.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectTagController|list",
    displayName: "exercizer.subject.tag.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectScheduledController|listArchivedSubjects",
    displayName: "exercizer.subject.scheduled.list.archive",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectTagController|listBySubjectId",
    displayName: "exercizer.subject.tag.list.by.subject.id",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.FolderController|persist",
    displayName: "exercizer.folder.persist",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|duplicateSubjectsFromLibrary",
    displayName: "exercizer.subject.duplicate.library",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectLessonLevelController|listBySubjectId",
    displayName: "exercizer.subject.lesson.level.list.by.subject.id.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectScheduledController|listBySubjectCopyList",
    displayName: "exercizer.subject.scheduled.list.by.subject.copy.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|listAll",
    displayName: "exercizer.subject.list.all",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|importSubjectGrains",
    displayName: "exercizer.subject.import",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.GrainTypeController|list",
    displayName: "exercizer.grain.type.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.conversation.controllers.ConversationController|view",
    displayName: "conversation.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.conversation.controllers.ConversationController|createDraft",
    displayName: "conversation.create.draft",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.conversation.controllers.ConversationController|listThreads",
    displayName: "conversation.threads.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.conversation.controllers.ConversationController|listPreviousMessages",
    displayName: "conversation.threads.previous",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.conversation.controllers.ConversationController|listNewMessages",
    displayName: "conversation.threads.new",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.scrapbook.controllers.ScrapbookController|print",
    displayName: "scrapbook.print",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.scrapbook.controllers.ScrapbookController|view",
    displayName: "scrapbook.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|exportPngMindmap",
    displayName: "mindmap.exportpng",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|exportJpegMindmap",
    displayName: "mindmap.exportjpeg",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|view",
    displayName: "mindmap.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|exportSvgMindmap",
    displayName: "mindmap.exportsvg",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|exportPngMindmapp",
    displayName: "mindmap.exportpng",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|create",
    displayName: "mindmap.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.mindmap.controllers.MindmapController|list",
    displayName: "mindmap.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.forum.controllers.ForumController|createCategory",
    displayName: "forum.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.blog.controllers.BlogController|list",
    displayName: "blog.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.blog.controllers.BlogController|print",
    displayName: "blog.print",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.blog.controllers.FoldersController|add",
    displayName: "blog.createFolder",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.blog.controllers.BlogController|blog",
    displayName: "blog.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.rack.controllers.RackController|searchUsers",
    displayName: "rack.list.users",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.rack.controllers.RackController|listUsers",
    displayName: "rack.list.users",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.rack.controllers.RackController|rackToWorkspace",
    displayName: "rack.copy.to.workspace",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.rack.controllers.RackController|listGroups",
    displayName: "rack.list.groups",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.rack.controllers.RackController|listRack",
    displayName: "rack.list.documents",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.rack.controllers.RackController|view",
    displayName: "rack.access",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.stats.controllers.StatsController|view",
    displayName: "stats.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativewall.controllers.CollaborativeWallController|view",
    displayName: "collaborativewall.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativewall.controllers.CollaborativeWallController|createNote",
    displayName: "collaborativewall.createnotes",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativewall.controllers.CollaborativeWallController|printnotes",
    displayName: "collaborativewall.printnotes",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativewall.controllers.CollaborativeWallController|list",
    displayName: "collaborativewall.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativewall.controllers.CollaborativeWallController|print",
    displayName: "collaborativewall.print",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.portal.controllers.PortalController|quickstart",
    displayName: "portal.quickstart",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Parcours|address",
    displayName: "Parcours.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.UserController|allowLoginUpdate",
    displayName: "user.allow.login.update",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.pages.controllers.PagesController|list",
    displayName: "pages.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.pages.controllers.PagesController|view",
    displayName: "pages.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.pages.controllers.PagesController|print",
    displayName: "pages.print",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.rack.controllers.RackController|postRack",
    displayName: "rack.send.document",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|addZip",
    displayName: "workspace.document.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|listDocumentsByFolder",
    displayName: "workspace.documents.list.by.folder",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|addFolder",
    displayName: "workspace.folder.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|listTrashDocuments",
    displayName: "workspace.documents.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|listDocuments",
    displayName: "workspace.documents.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|view",
    displayName: "workspace.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|listFolders",
    displayName: "workspace.document.list.folders",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.workspace.controllers.WorkspaceController|addDocument",
    displayName: "workspace.document.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.wiki.controllers.WikiController|print",
    displayName: "wiki.print",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.wiki.controllers.WikiController|listAllPages",
    displayName: "wiki.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.wiki.controllers.WikiController|view",
    displayName: "wiki.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.wiki.controllers.WikiController|listWikis",
    displayName: "wiki.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.wiki.controllers.WikiController|createWiki",
    displayName: "wiki.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.actualites.controllers.DisplayController|view",
    displayName: "actualites.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.actualites.controllers.InfoController|listLastPublishedInfos",
    displayName: "actualites.infos.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.actualites.controllers.ThreadController|createThread",
    displayName: "actualites.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.actualites.controllers.ThreadController|listThreads",
    displayName: "actualites.threads.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.actualites.controllers.InfoController|listInfos",
    displayName: "actualites.infos.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.actualites.controllers.InfoController|listInfosForLinker",
    displayName: "actualites.infos.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.timelinegenerator.controllers.TimelineController|printView",
    displayName: "timelinegenerator.print",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.timelinegenerator.controllers.TimelineController|view",
    displayName: "timelinegenerator.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.timelinegenerator.controllers.TimelineController|listTimelines",
    displayName: "timelinegenerator.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.timelinegenerator.controllers.TimelineController|createTimeline",
    displayName: "timelinegenerator.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.timelinegenerator.controllers.FoldersController|add",
    displayName: "timelinegenerator.folders.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.ShareBookmarkController|allowSharebookmarks",
    displayName: "directory.allow.sharebookmarks",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.sharebigfiles.controllers.ShareBigFilesController|view",
    displayName: "sharebigfile.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.sharebigfiles.controllers.ShareBigFilesController|create",
    displayName: "sharebigfile.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.searchengine.controllers.SearchEngineController|view",
    displayName: "searchengine.auth",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.timeline.controllers.TimelineController|historyView",
    displayName: "timeline.historyView",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.support.controllers.DisplayController|view",
    displayName: "support.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.support.controllers.TicketController|createTicket",
    displayName: "support.ticket.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.support.controllers.TicketController|listTickets",
    displayName: "support.ticket.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Annuaire|address",
    displayName: "Annuaire.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativeeditor.controllers.CollaborativeEditorController|view",
    displayName: "collaborativeeditor.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativeeditor.controllers.CollaborativeEditorController|list",
    displayName: "collaborativeeditor.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.timeline.controllers.TimelineController|mixinConfig",
    displayName: "timeline.external.notifications",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativeeditor.controllers.CollaborativeEditorController|create",
    displayName: "collaborativeeditor.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.community.controllers.CommunityController|create",
    displayName: "community.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.pages.controllers.PagesController|add",
    displayName: "pages.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.pages.controllers.FoldersController|add",
    displayName: "pages.folders.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.pages.controllers.PagesController|addPublic",
    displayName: "pages.add.public",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Mon r\xE9seau|address",
    displayName: "Mon r\xE9seau.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.calendar.controllers.CalendarController|createCalendar",
    displayName: "calendar.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativewall.controllers.CollaborativeWallController|create",
    displayName: "collaborativewall.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.scrapbook.controllers.ScrapbookController|createScrapbook",
    displayName: "scrapbook.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.scrapbook.controllers.FolderController|add",
    displayName: "scrapbook.folders.add",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.blog.controllers.BlogController|create",
    displayName: "blog.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.blog.controllers.BlogController|createPublicBlog",
    displayName: "blog.public",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.timeline.controllers.TimelineController|discardNotification",
    displayName: "timeline.discard.notification",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.timeline.controllers.TimelineController|reportNotification",
    displayName: "timeline.report.notification",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.poll.controllers.PollController|view",
    displayName: "poll.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.poll.controllers.PollController|list",
    displayName: "poll.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.poll.controllers.PollController|create",
    displayName: "poll.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.support.controllers.TicketController|escalateTicket",
    displayName: "support.ticket.escalate",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Pronote|address",
    displayName: "Pronote.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.timeline.controllers.TimelineController|deleteNotification",
    displayName: "timeline.delete.own.notification",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "ONE_Bird|address",
    displayName: "ONE_Bird.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "library-recette|address",
    displayName: "library-recette.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.collaborativewall.controllers.CollaborativeWallController|publish",
    displayName: "collaborativewall.publish",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.exercizer.controllers.SubjectController|publish",
    displayName: "exercizer.subject.publish",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.wiki.controllers.WikiController|publish",
    displayName: "wiki.publish",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.scrapbook.controllers.ScrapbookController|publish",
    displayName: "scrapbook.publish",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.timelinegenerator.controllers.TimelineController|publish",
    displayName: "timelinegenerator.publish",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "test-connecteur|address",
    displayName: "test-connecteur.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Classe Culturelle Num\xE9rique|address",
    displayName: "Classe Culturelle Num\xE9rique.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Moodle 2|address",
    displayName: "Moodle 2.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.statistics.controllers.StatisticsController|view",
    displayName: "statistics.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.statistics.controllers.StatisticsController|getStructures",
    displayName: "statistics.get.structures",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.statistics.controllers.StatisticsController|getIndicators",
    displayName: "statistics.get.indicators",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.statistics.controllers.StatisticsController|getData",
    displayName: "statistics.get.data",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "com.opendigitaleducation.video.controllers.VideoController|upload",
    displayName: "video.upload",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "com.opendigitaleducation.video.controllers.VideoController|view",
    displayName: "video.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Edulib - 0805432C|address",
    displayName: "Edulib - 0805432C.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.DirectoryController|allowClassAdminUnlinkUsers",
    displayName: "classadmin.unlink.users",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.DirectoryController|allowClassAdminBlockUsers",
    displayName: "classadmin.block.users",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.DirectoryController|allowClassAdminDeleteUsers",
    displayName: "classadmin.delete.users",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.DirectoryController|allowClassAdminResetPassword",
    displayName: "classadmin.reset.password",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.DirectoryController|classAdmin",
    displayName: "classadmin.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.DirectoryController|allowClassAdminAddUsers",
    displayName: "classadmin.add.users",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "com.opendigitaleducation.website.controllers.WebsiteController|create",
    displayName: "website.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "com.opendigitaleducation.website.controllers.WebsiteController|list",
    displayName: "website.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "com.opendigitaleducation.website.controllers.WebsiteController|view",
    displayName: "website.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "com.opendigitaleducation.website.controllers.WebsiteController|conf",
    displayName: "website.conf",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "parcours|address",
    displayName: "parcours.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Kne - 0805432C|address",
    displayName: "Kne - 0805432C.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.webConference.controller.WebConferenceController|view",
    displayName: "webconference.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.webConference.controller.RoomController|create",
    displayName: "webconference.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Mon site PUBLIC - 96d4d883-d58b-405c-89c7-c91a84e55952|address",
    displayName: "Mon site PUBLIC - 96d4d883-d58b-405c-89c7-c91a84e55952.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "SACoche_CLG-POISSON|address",
    displayName: "SACoche_CLG-POISSON.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.homeworks.controllers.HomeworksController|createHomework",
    displayName: "homeworks.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "esidoc0801616x|address",
    displayName: "esidoc0801616x.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.wseduc.schoolbook.controllers.SchoolBookController|createWord",
    displayName: "schoolbook.create",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.DiaryController|view",
    displayName: "diary.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ModelWeekController|getWeekItems",
    displayName: "diary.manageModelWeek.getItems",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|deleteLesson",
    displayName: "diary.manageProgression.delete.items",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.LessonController|createLesson",
    displayName: "diary.createLesson",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|changerOrder",
    displayName: "diary.manageProgression.order",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|postLessonProgression",
    displayName: "diary.manageProgression.update.item",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|getLesson",
    displayName: "diary.manageProgression.detail.item",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|getLessonProgression",
    displayName: "diary.manageProgression.list.items",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.HomeworkController|createFreeHomework",
    displayName: "diary.createFreeHomework",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.HistoryController|getHistory",
    displayName: "diary.showHistory.pdf",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ModelWeekController|invertModelWeek",
    displayName: "diary.manageModelWeek.invert",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|getProgression",
    displayName: "diary.manageProgression.list.progression",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|deleteProgression",
    displayName: "diary.manageProgression.delete.progression",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.HistoryController|getFiltersHistory",
    displayName: "diary.showHistory.filters",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ModelWeekController|setModelWeek",
    displayName: "diary.manageModelWeek.update",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.HomeworkController|createHomeworkForLesson",
    displayName: "createHomeworkForLesson",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ProgressionController|postProgression",
    displayName: "diary.manageProgression.update.progression",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.ModelWeekController|modelweek",
    displayName: "diary.manageModelWeek.list",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.UserController|mergeByKey",
    displayName: "user.merge.by.key",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.UserController|generateMergeKey",
    displayName: "user.generate.merge.key",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|getInspectors",
    displayName: "diary.manageInspect.list.inspector",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|getAgregs",
    displayName: "diary.visa.agregs",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|pdf",
    displayName: "diary.visa.list.lessons.pdf",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|getOtherTeacherFilter",
    displayName: "diary.view.otherteacher",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|getTeacher",
    displayName: "diary.manageInspect.list.teacher",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|lessons",
    displayName: "diary.visa.list.lessons",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|applyVisa",
    displayName: "diary.visa.applyvisa",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|getInspectorFilters",
    displayName: "diary.visa.inspect.filters",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|apllyInspectorRight",
    displayName: "diary.manageInspect.apply",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.VisaController|getFilters",
    displayName: "diary.visa.admin.filters",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.diary.controllers.HistoryController|createHistory",
    displayName: "diary.manageHistory.apply",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.DisplayController|viewEvaluations",
    displayName: "Viescolaire.evaluation.view",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "fr.openent.evaluations.controller.DevoirController|create",
    displayName: "viescolaire.evaluations.createEvaluation",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.SlotProfileController|updateSlotProfile",
    displayName: "directory.slot.manage",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.SlotProfileController|updateSlot",
    displayName: "directory.slot.manage",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.SlotProfileController|createSlot",
    displayName: "directory.slot.manage",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.SlotProfileController|createSlotProfile",
    displayName: "directory.slot.manage",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "org.entcore.directory.controllers.SlotProfileController|deleteSlotFromSlotProfile",
    displayName: "directory.slot.manage",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "ViescolaireChapeau|address",
    displayName: "ViescolaireChapeau.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "Mon compte|address",
    displayName: "Mon compte.address",
    type: "SECURED_ACTION_WORKFLOW"
  },
  {
    name: "net.atos.entng.rbs.controllers.ResourceTypeController|createResourceType",
    displayName: "rbs.type.create",
    type: "SECURED_ACTION_WORKFLOW"
  }
];
const apps = [
  {
    name: "Blog",
    address: "/blog",
    icon: "blog-large",
    target: "",
    displayName: "blog",
    display: true,
    prefix: "/blog",
    casType: "",
    scope: [
      ""
    ]
  },
  {
    name: "Schoolbook",
    address: "/schoolbook",
    icon: "schoolbook",
    target: null,
    displayName: "schoolbook",
    display: true,
    prefix: "/schoolbook",
    casType: null,
    scope: [
      ""
    ]
  },
  {
    name: "Directory",
    address: "",
    icon: "",
    target: null,
    displayName: "directory",
    display: false,
    prefix: "/directory",
    casType: null,
    scope: [
      ""
    ]
  },
  {
    name: "Exercices et \xE9valuations",
    address: "/exercizer",
    icon: "exercizer-large",
    target: "",
    displayName: "exercizer",
    display: true,
    prefix: "/exercizer",
    casType: "",
    scope: [
      ""
    ]
  },
  {
    name: "Portal",
    address: "",
    icon: "",
    target: null,
    displayName: "portal",
    display: false,
    prefix: "",
    casType: null,
    scope: [
      ""
    ]
  },
  {
    name: "Espace documentaire",
    address: "/workspace/workspace",
    icon: "workspace-large",
    target: "",
    displayName: "workspace",
    display: true,
    prefix: "/workspace",
    casType: null,
    scope: [
      ""
    ]
  }
];
const childrenIds = [];
const children = {};
const widgets = [];
const userinfo = {
  classNames,
  level,
  login,
  lastName,
  firstName,
  externalId,
  federated,
  birthDate,
  forceChangePassword,
  needRevalidateTerms,
  deletePending,
  username,
  type,
  hasPw,
  functions,
  groupsIds,
  federatedIDP,
  optionEnabled,
  userId,
  structures,
  structureNames,
  uai,
  hasApp,
  classes,
  authorizedActions,
  apps,
  childrenIds,
  children,
  widgets
};
const UserInfoData = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  classNames,
  level,
  login,
  lastName,
  firstName,
  externalId,
  federated,
  birthDate,
  forceChangePassword,
  needRevalidateTerms,
  deletePending,
  username,
  type,
  hasPw,
  functions,
  groupsIds,
  federatedIDP,
  optionEnabled,
  userId,
  structures,
  structureNames,
  uai,
  hasApp,
  classes,
  authorizedActions,
  apps,
  childrenIds,
  children,
  widgets,
  default: userinfo
}, Symbol.toStringTag, { value: "Module" }));
const ERROR_CODE = {
  SUCCESS: "0000",
  UNKNOWN: "0010",
  NOT_INITIALIZED: "0020",
  NOT_SUPPORTED: "0030",
  APP_NOT_FOUND: "0040",
  AGENT_NOT_FOUND: "0050",
  TRANSPORT_ERROR: "0060",
  TIME_OUT: "0070",
  MALFORMED_DATA: "0080",
  NOT_LOGGED_IN: "0090"
};
const APP = {
  EXPLORER: "explorer",
  PORTAL: "portal",
  BLOG: "blog",
  EXERCIZER: "exercizer",
  TIMELINE: "timeline",
  CAS: "cas",
  VIDEO: "video"
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i2 >= o.length)
          o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i2 = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i2.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from) {
  for (var i2 = 0, il = from.length, j = to.length; i2 < il; i2++, j++)
    to[j] = from[i2];
  return to;
}
function isFunction$1(value) {
  return typeof value === "function";
}
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i2) {
      return i2 + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._teardowns = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialTeardown = this.initialTeardown;
      if (isFunction$1(initialTeardown)) {
        try {
          initialTeardown();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _teardowns = this._teardowns;
      if (_teardowns) {
        this._teardowns = null;
        try {
          for (var _teardowns_1 = __values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
            var teardown_1 = _teardowns_1_1.value;
            try {
              execTeardown(teardown_1);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return))
              _b.call(_teardowns_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execTeardown(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _teardowns = this._teardowns;
    _teardowns && arrRemove(_teardowns, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction$1(value.remove) && isFunction$1(value.add) && isFunction$1(value.unsubscribe);
}
function execTeardown(teardown) {
  if (isFunction$1(teardown)) {
    teardown();
  } else {
    teardown.unsubscribe();
  }
}
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
var timeoutProvider = {
  setTimeout: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, __spreadArray([], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    {
      throw err;
    }
  });
}
function noop() {
}
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped)
      ;
    else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var next;
    if (isFunction$1(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete;
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
      } else {
        context_1 = observerOrNext;
      }
      next = next === null || next === void 0 ? void 0 : next.bind(context_1);
      error = error === null || error === void 0 ? void 0 : error.bind(context_1);
      complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
    }
    _this.destination = {
      next: next ? wrapForErrorHandling(next) : noop,
      error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler),
      complete: complete ? wrapForErrorHandling(complete) : noop
    };
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function wrapForErrorHandling(handler, instance) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    try {
      handler.apply(void 0, __spreadArray([], __read(args)));
    } catch (err) {
      {
        reportUnhandledError(err);
      }
    }
  };
}
function defaultErrorHandler(err) {
  throw err;
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x) {
  return x;
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function(value) {
        try {
          next(value);
        } catch (err) {
          reject(err);
          subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
        }
      }, reject, resolve);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction$1(value.next) && isFunction$1(value.error) && isFunction$1(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
function hasLift(source) {
  return isFunction$1(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    var closed = this.closed;
    _super.prototype.unsubscribe.call(this);
    !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
  };
  return OperatorSubscriber2;
}(Subscriber);
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        var copy = _this.observers.slice();
        try {
          for (var copy_1 = __values(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()) {
            var observer = copy_1_1.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return))
              _a.call(copy_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    return hasError || isStopped ? EMPTY_SUBSCRIPTION : (observers.push(subscriber), new Subscription(function() {
      return arrRemove(observers, subscriber);
    }));
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);
function filter(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(new OperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
class Bus {
  constructor() {
    __publicField(this, "agents", {});
    __publicField(this, "comm", new Subject());
  }
  setAgentFor(res, action, agent) {
    let agentByAction = this.getActionMapping(res);
    agentByAction[action] = agent;
  }
  getAgentFor(res, action) {
    return this.getActionMapping(res)[action];
  }
  publish(res, action, parameters) {
    return Promise.resolve().then(() => {
      var _a;
      return (_a = this.getAgentFor(res, action)) != null ? _a : explorer.requestAgentFor(res, action);
    }).then((agent) => {
      const result = agent.activate(res, action, parameters);
      this.comm.next({
        res,
        action,
        input: parameters,
        output: result
      });
      return result;
    });
  }
  subscribe(res, action) {
    return this.comm.asObservable().pipe(filter((msg) => msg.res === res && msg.action === action));
  }
  getActionMapping(res) {
    let agentByAction = this.agents[res];
    if (typeof agentByAction === "undefined") {
      agentByAction = {};
      for (let a of Object.values(ACTION)) {
        agentByAction[a] = null;
      }
      this.agents[res] = agentByAction;
    }
    return agentByAction;
  }
}
class BusFactory {
  static get instance() {
    return this._instance = this._instance || new Bus();
  }
}
__publicField(BusFactory, "_instance");
const _AbstractBusAgent = class {
  constructor(managedResource) {
    __publicField(this, "managedResource");
    __publicField(this, "handlerFor", {
      comment: _AbstractBusAgent.defaultHandler,
      copy: _AbstractBusAgent.defaultHandler,
      create: _AbstractBusAgent.defaultHandler,
      delete: _AbstractBusAgent.defaultHandler,
      export: _AbstractBusAgent.defaultHandler,
      initialize: _AbstractBusAgent.defaultHandler,
      manage: _AbstractBusAgent.defaultHandler,
      properties: _AbstractBusAgent.defaultHandler,
      move: _AbstractBusAgent.defaultHandler,
      open: _AbstractBusAgent.defaultHandler,
      print: _AbstractBusAgent.defaultHandler,
      publish: _AbstractBusAgent.defaultHandler,
      search: _AbstractBusAgent.defaultHandler,
      share: _AbstractBusAgent.defaultHandler,
      distribute: _AbstractBusAgent.defaultHandler,
      pages_list: _AbstractBusAgent.defaultHandler,
      register: _AbstractBusAgent.defaultHandler,
      trash: _AbstractBusAgent.defaultHandler,
      publish_moodle: _AbstractBusAgent.defaultHandler,
      restore: _AbstractBusAgent.defaultHandler
    });
    this.managedResource = managedResource;
    this.initialize();
  }
  initialize() {
    for (let action in Object.values(ACTION)) {
      this.handlerFor[action] = _AbstractBusAgent.defaultHandler;
    }
    this.registerHandlers();
  }
  setHandler(action, handler) {
    BusFactory.instance.setAgentFor(this.managedResource, action, this);
    this.handlerFor[action] = handler;
  }
  getHandler(action) {
    return this.handlerFor[action];
  }
  activate(res, action, parameters) {
    return Promise.resolve().then(
      () => this.getHandler(action).bind(this)(parameters)
    );
  }
};
let AbstractBusAgent = _AbstractBusAgent;
__publicField(AbstractBusAgent, "defaultHandler", function(parameters) {
  throw new Error(ERROR_CODE.NOT_SUPPORTED);
});
console.log("Blog agent loading....");
class BlogAgent extends AbstractBusAgent {
  constructor() {
    super(RESOURCE.BLOG);
    __publicField(this, "ctx", null);
    __publicField(this, "http", TransportFrameworkFactory.instance().newHttpInstance());
    __publicField(this, "checkHttpResponse", (result) => {
      if (this.http.latestResponse.status >= 300) {
        throw this.http.latestResponse.statusText;
      }
      return result;
    });
    this.registerHandlers();
    console.log("Blog agent initialized!");
  }
  registerHandlers() {
    this.setHandler(ACTION.OPEN, this.openBlog);
    this.setHandler(ACTION.CREATE, this.createBlog);
    this.setHandler(ACTION.MANAGE, this.onManage);
    this.setHandler(
      ACTION.UPD_PROPS,
      this.onUpdateProps
    );
    this.setHandler(ACTION.PRINT, this.onPrint);
    this.setHandler(ACTION.PUBLISH, this.onPublish);
  }
  onPrint(parameters) {
    window.open(
      `/blog/print/blog#/print/${parameters.resourceId}?comments=${parameters.withComments || true}`,
      "_blank"
    );
  }
  openBlog(parameters) {
    window.open(`/blog#/view/${parameters.resourceId}`, "_self");
  }
  createBlog(parameters) {
    window.open(`/blog#/edit/new`, "_self");
  }
  onManage(parameters) {
    const res = {
      genericProps: [
        {
          key: PROP_KEY.TITLE
        },
        {
          key: PROP_KEY.IMAGE
        },
        {
          key: PROP_KEY.URL
        }
      ]
    };
    return Promise.resolve().then(() => res);
  }
  onUpdateProps(parameters) {
    const res = {
      resources: parameters.resources
    };
    alert("TODO: update properties");
    return Promise.resolve().then(() => res);
  }
  onPublish(parameters) {
    return __async(this, null, function* () {
      const publicationAsFormData = new FormData();
      publicationAsFormData.append("title", parameters.title);
      publicationAsFormData.append("cover", parameters.cover);
      publicationAsFormData.append(
        "coverName",
        parameters.cover.name
      );
      publicationAsFormData.append("coverType", parameters.cover.type);
      publicationAsFormData.append("teacherAvatar", parameters.teacherAvatar);
      publicationAsFormData.append(
        "teacherAvatarName",
        parameters.teacherAvatar.name || `teacherAvatar_${parameters.userId}`
      );
      publicationAsFormData.append(
        "teacherAvatarType",
        parameters.teacherAvatar.type
      );
      publicationAsFormData.append("language", parameters.language);
      parameters.activityType.forEach((activityType) => {
        publicationAsFormData.append("activityType[]", activityType);
      });
      parameters.subjectArea.forEach((subjectArea) => {
        publicationAsFormData.append("subjectArea[]", subjectArea);
      });
      parameters.age.forEach((age) => {
        publicationAsFormData.append("age[]", age.toString());
      });
      publicationAsFormData.append("description", parameters.description);
      let keyWordsArray = parameters.keyWords.split(",");
      keyWordsArray.forEach((keyWord) => {
        publicationAsFormData.append("keyWords[]", keyWord.trim());
      });
      publicationAsFormData.append("licence", parameters.licence);
      publicationAsFormData.append(
        "pdfUri",
        `${window.location.origin}/blog/print/blog#/print/${parameters.resourceId}`
      );
      publicationAsFormData.append(
        "application",
        parameters.application ? parameters.application : ""
      );
      publicationAsFormData.append("resourceId", parameters.resourceId);
      publicationAsFormData.append("teacherSchool", parameters.userStructureName);
      return this.http.post("/appregistry/library/resource", publicationAsFormData, {
        headers: { "Content-Type": "multipart/form-data" }
      }).then(this.checkHttpResponse);
    });
  }
}
const factory$1 = () => new BlogAgent();
class FolderAgent extends AbstractBusAgent {
  constructor() {
    super(RESOURCE.FOLDER);
    __publicField(this, "ctx", null);
    __publicField(this, "http", TransportFrameworkFactory.instance().newHttpInstance({
      paramsSerializer: function(params2) {
        return Object.entries(params2).map((p) => {
          if (p[1] instanceof Array) {
            return p[1].map((value) => `${p[0]}=${encodeURIComponent(value)}`).join("&");
          } else if (["string", "number", "boolean"].indexOf(typeof p[1]) >= 0) {
            return `${p[0]}=${encodeURIComponent(p[1])}`;
          }
          return "";
        }).join("&");
      }
    }));
    __publicField(this, "checkHttpResponse", (result) => {
      if (this.http.latestResponse.status >= 300) {
        throw this.http.latestResponse.statusText;
      }
      return result;
    });
    this.registerHandlers();
  }
  registerHandlers() {
    this.setHandler(
      ACTION.INITIALIZE,
      this.createContext
    );
    this.setHandler(ACTION.SEARCH, this.searchContext);
    this.setHandler(ACTION.CREATE, this.createFolder);
    this.setHandler(ACTION.OPEN, this.listSubfolders);
    this.setHandler(ACTION.MOVE, this.moveToFolder);
    this.setHandler(ACTION.DELETE, this.deleteFolders);
    this.setHandler(ACTION.TRASH, this.trashFolders);
    this.setHandler(ACTION.MANAGE, this.onManage);
    this.setHandler(ACTION.UPD_PROPS, this.updateFolder);
  }
  createContext(parameters) {
    return this.http.get("/explorer/context", {
      queryParams: this.toQueryParams(parameters)
    }).then(this.checkHttpResponse);
  }
  searchContext(parameters) {
    return this.http.get("/explorer/resources", {
      queryParams: this.toQueryParams(parameters)
    }).then(this.checkHttpResponse);
  }
  createFolder(parameters) {
    return this.http.post(
      "/explorer/folders",
      this.createFolderToBodyParams(parameters)
    ).then(this.checkHttpResponse);
  }
  updateFolder(parameters) {
    return this.http.put(
      `/explorer/folders/${parameters.folderId}`,
      this.createFolderToBodyParams(parameters)
    ).then(this.checkHttpResponse);
  }
  moveToFolder(parameters) {
    return this.http.post(
      `/explorer/folders/${parameters.folderId}/move`,
      this.moveToBodyParams(parameters)
    ).then(this.checkHttpResponse);
  }
  listSubfolders(folderId) {
    return this.http.get(`/explorer/folders/${folderId}/move`).then(this.checkHttpResponse);
  }
  deleteFolders(parameters) {
    return this.http.deleteJson(`/explorer`, parameters).then(this.checkHttpResponse);
  }
  trashFolders(_a) {
    var _b = _a, {
      trash,
      resourceType
    } = _b, parameters = __objRest(_b, [
      "trash",
      "resourceType"
    ]);
    return this.http.putJson(
      `/explorer/${trash ? "trash" : "restore"}`,
      parameters
    ).then(this.checkHttpResponse);
  }
  onManage(parameters) {
    const res = {
      genericProps: [
        {
          key: PROP_KEY.TITLE
        },
        {
          key: PROP_KEY.IMAGE
        },
        {
          key: PROP_KEY.URL
        }
      ]
    };
    return Promise.resolve().then(() => res);
  }
  toQueryParams(p) {
    let ret = {
      application: p.app,
      start_idx: p.pagination.startIdx,
      page_size: p.pagination.pageSize,
      resource_type: p.types
    };
    if (p.orders) {
      ret.order_by = Object.entries(p.orders).map(
        (entry) => `${entry[0]}:${entry[1]}`
      );
    }
    if (p.filters) {
      Object.assign(ret, p.filters);
    }
    if (typeof p.search === "string") {
      ret.search = p.search;
    }
    return ret;
  }
  createFolderToBodyParams(p) {
    return {
      application: p.app,
      resourceType: p.type,
      parentId: p.parentId,
      name: p.name
    };
  }
  moveToBodyParams(p) {
    return {
      application: p.application,
      resourceType: this.managedResource,
      resourceIds: p.resourceIds,
      folderIds: p.folderIds
    };
  }
}
const factory = () => new FolderAgent();
class AgentLoader {
  load(res) {
    let appName = appNameForResource[res];
    if (typeof appName !== "string") {
      throw new Error(`The resource type ${res} is not supported yet.`);
    }
    switch (appName) {
      case APP.EXPLORER:
        factory();
        break;
      case APP.BLOG:
        factory$1();
        break;
      default:
        throw new Error(`The resource type ${res} is not supported yet.`);
    }
    return Promise.resolve();
  }
}
class ExplorerContext {
  constructor(types, app) {
    __publicField(this, "searchParameters");
    __publicField(this, "context");
    __publicField(this, "bus");
    __publicField(this, "latestResults", new Subject());
    this.context = null;
    this.bus = ExplorerFrameworkFactory.instance().getBus();
    this.searchParameters = {
      types,
      app,
      filters: {},
      pagination: {
        startIdx: 0,
        pageSize: 20
      }
    };
  }
  clear() {
    this.searchParameters.filters = {
      owner: true,
      shared: true,
      public: true
    };
    this.searchParameters.pagination.startIdx = 0;
    this.searchParameters.pagination.pageSize = 20;
    this.context = null;
  }
  isInitialized() {
    return this.context !== null;
  }
  getContext() {
    if (this.context !== null) {
      return this.context;
    }
  }
  getSearchParameters() {
    return this.searchParameters;
  }
  duplicateSearchParameters() {
    return JSON.parse(JSON.stringify(this.searchParameters));
  }
  latestResources() {
    return this.latestResults.asObservable();
  }
  initialize() {
    const parameters = this.duplicateSearchParameters();
    return Promise.resolve().then(
      () => this.bus.publish(RESOURCE.FOLDER, ACTION.INITIALIZE, parameters)
    ).then((ar) => {
      this.context = ar;
      if (!this.context) {
        throw new Error(ERROR_CODE.UNKNOWN);
      }
      this.latestResults.next({ input: parameters, output: this.context });
      return this.context;
    });
  }
  getResources() {
    const parameters = this.duplicateSearchParameters();
    return this.bus.publish(RESOURCE.FOLDER, ACTION.SEARCH, parameters).then((ar) => {
      let result = ar;
      if (!result)
        throw new Error(ERROR_CODE.UNKNOWN);
      this.latestResults.next({ input: parameters, output: result });
      return result;
    });
  }
  getSubFolders(parentId) {
    throw new Error("Method not implemented.");
  }
  createFolder(resourceType, parentId, name2) {
    const parameters = {
      app: this.searchParameters.app,
      name: name2,
      parentId,
      type: resourceType
    };
    return this.bus.publish(RESOURCE.FOLDER, ACTION.CREATE, parameters).then((ar) => {
      let result = ar;
      if (!result)
        throw new Error(ERROR_CODE.UNKNOWN);
      return result;
    });
  }
  updateFolder(folderId, resourceType, parentId, name2) {
    const parameters = {
      folderId,
      app: this.searchParameters.app,
      name: name2,
      parentId,
      type: resourceType
    };
    return this.bus.publish(RESOURCE.FOLDER, ACTION.UPD_PROPS, parameters).then((ar) => {
      let result = ar;
      if (!result)
        throw new Error(ERROR_CODE.UNKNOWN);
      return result;
    });
  }
  copy(targetId, resourceIds, folderIds) {
    const parameters = {
      application: this.searchParameters.app,
      folderId: targetId,
      resourceIds,
      folderIds
    };
    return this.bus.publish(RESOURCE.FOLDER, ACTION.COPY, parameters).then((ar) => {
    });
  }
  move(targetId, resourceIds, folderIds) {
    const parameters = {
      application: this.searchParameters.app,
      folderId: targetId,
      resourceIds,
      folderIds
    };
    return this.bus.publish(RESOURCE.FOLDER, ACTION.MOVE, parameters).then((ar) => {
    });
  }
  delete(resourceIds, folderIds) {
    const parameters = {
      application: this.searchParameters.app,
      resourceType: this.searchParameters.types[0],
      resourceIds,
      folderIds
    };
    return this.bus.publish(RESOURCE.FOLDER, ACTION.DELETE, parameters).then((ar) => {
    });
  }
  trash(trash, resourceIds, folderIds) {
    const parameters = {
      trash,
      application: this.searchParameters.app,
      resourceType: this.searchParameters.types[0],
      resourceIds,
      folderIds
    };
    return this.bus.publish(RESOURCE.FOLDER, ACTION.TRASH, parameters).then((ar) => {
    });
  }
  manageProperties(resourceType, resources2) {
    const params2 = { resources: resources2 };
    return this.bus.publish(resourceType, ACTION.MANAGE, params2).then((ar) => {
      let result = ar;
      if (!result)
        throw new Error(ERROR_CODE.UNKNOWN);
      return result;
    });
  }
  updateProperties(resourceType, resources2, props) {
    const params2 = {
      resources: resources2,
      props
    };
    return this.bus.publish(resourceType, ACTION.UPD_PROPS, params2).then((ar) => {
      let result = ar;
      if (!result)
        throw new Error(ERROR_CODE.UNKNOWN);
      return result;
    });
  }
  publish(resourceType, parameters) {
    return this.bus.publish(resourceType, ACTION.PUBLISH, parameters).then((ar) => {
      let result = ar;
      if (!result)
        throw new Error(ERROR_CODE.UNKNOWN);
      return result;
    });
  }
}
class ExplorerFramework {
  constructor() {
    __publicField(this, "_agentLoader");
  }
  get agentLoader() {
    if (!this._agentLoader) {
      this._agentLoader = new AgentLoader();
    }
    return this._agentLoader;
  }
  setAgentLoader(loader2) {
    if (loader2) {
      this._agentLoader = loader2;
    }
  }
  requestAgentFor(resource, action) {
    return this.agentLoader.load(resource).then(() => {
      let agent = this.getBus().getAgentFor(resource, action);
      if (!agent) {
        throw new Error(ERROR_CODE.AGENT_NOT_FOUND);
      }
      return agent;
    });
  }
  createContext(types, app) {
    return new ExplorerContext(types, app);
  }
  getBus() {
    return BusFactory.instance;
  }
}
const explorer = new ExplorerFramework();
class ExplorerFrameworkFactory {
  static instance() {
    return explorer;
  }
}
const RESOURCE = {
  FOLDER: "folder",
  BLOG: "blog",
  EXERCISE: "exercise"
};
const appNameForResource = {
  folder: APP.EXPLORER,
  blog: APP.BLOG,
  exercise: APP.EXERCIZER
};
const ACTION = {
  INITIALIZE: "initialize",
  SEARCH: "search",
  CREATE: "create",
  OPEN: "open",
  MANAGE: "manage",
  UPD_PROPS: "properties",
  COMMENT: "comment",
  DELETE: "delete",
  TRASH: "trash",
  RESTORE: "restore",
  MOVE: "move",
  COPY: "copy",
  EXPORT: "export",
  SHARE: "share",
  PRINT: "print",
  PAGES_LIST: "pages_list",
  DISTRIBUTE: "distribute",
  REGISTER: "register",
  PUBLISH: "publish",
  PUBLISH_MOODLE: "publish_moodle"
};
const PROP_KEY = {
  TITLE: "title",
  IMAGE: "image",
  COLOR: "color",
  DESCRIPTION: "description",
  URL: "url"
};
const ASYNC_DATA_NAME = {
  SESSION_READY: "sessionReady",
  LANG_READY: "langReady",
  SKIN_READY: "skinReady",
  OVERRIDE_READY: "overrideReady"
};
class Promisified {
  constructor() {
    __publicField(this, "_resolution");
    __publicField(this, "_rejection");
    __publicField(this, "_promise", new Promise((_resolve, _reject) => {
      this._resolution = _resolve;
      this._rejection = _reject;
    }));
  }
  get promise() {
    return this._promise;
  }
  resolve(value) {
    this._resolution && this._resolution(value);
  }
  reject(reason) {
    this._rejection && this._rejection(reason);
  }
}
class NotifyFramework {
  constructor() {
    __publicField(this, "promises", {});
    __publicField(this, "subject", new Subject());
  }
  asyncData(asyncDataName) {
    if (typeof this.promises[asyncDataName] === "undefined") {
      this.promises[asyncDataName] = new Promisified();
    }
    return this.promises[asyncDataName];
  }
  onSessionReady() {
    return this.asyncData(ASYNC_DATA_NAME.SESSION_READY);
  }
  onLangReady() {
    return this.asyncData(ASYNC_DATA_NAME.LANG_READY);
  }
  onSkinReady() {
    return this.asyncData(ASYNC_DATA_NAME.SKIN_READY);
  }
  onOverridesReady() {
    return this.asyncData(ASYNC_DATA_NAME.OVERRIDE_READY);
  }
  promisify() {
    return new Promisified();
  }
  events() {
    return this.subject;
  }
}
const notify = new NotifyFramework();
var axios$3 = { exports: {} };
var axios$2 = { exports: {} };
var bind$2 = function bind2(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i2 = 0, l = obj.length; i2 < l; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
    forEach(arguments[i2], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$9 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$8 = utils$9;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$1 = function buildURL2(url, params2, paramsSerializer) {
  if (!params2) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params2);
  } else if (utils$8.isURLSearchParams(params2)) {
    serializedParams = params2.toString();
  } else {
    var parts = [];
    utils$8.forEach(params2, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$8.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$8.forEach(val, function parseValue(v) {
        if (utils$8.isDate(v)) {
          v = v.toISOString();
        } else if (utils$8.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$7 = utils$9;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$7.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$6 = utils$9;
var normalizeHeaderName$1 = function normalizeHeaderName2(headers, normalizedName) {
  utils$6.forEach(headers, function processHeader(value, name2) {
    if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name2];
    }
  });
};
var enhanceError$1 = function enhanceError2(error, config2, code, request2, response) {
  error.config = config2;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  };
  return error;
};
var createError;
var hasRequiredCreateError;
function requireCreateError() {
  if (hasRequiredCreateError)
    return createError;
  hasRequiredCreateError = 1;
  var enhanceError3 = enhanceError$1;
  createError = function createError2(message, config2, code, request2, response) {
    var error = new Error(message);
    return enhanceError3(error, config2, code, request2, response);
  };
  return createError;
}
var settle;
var hasRequiredSettle;
function requireSettle() {
  if (hasRequiredSettle)
    return settle;
  hasRequiredSettle = 1;
  var createError2 = requireCreateError();
  settle = function settle2(resolve, reject, response) {
    var validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(createError2(
        "Request failed with status code " + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };
  return settle;
}
var cookies;
var hasRequiredCookies;
function requireCookies() {
  if (hasRequiredCookies)
    return cookies;
  hasRequiredCookies = 1;
  var utils2 = utils$9;
  cookies = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
      write: function write(name2, value, expires, path2, domain, secure) {
        var cookie = [];
        cookie.push(name2 + "=" + encodeURIComponent(value));
        if (utils2.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils2.isString(path2)) {
          cookie.push("path=" + path2);
        }
        if (utils2.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name2) {
        var match2 = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
        return match2 ? decodeURIComponent(match2[3]) : null;
      },
      remove: function remove(name2) {
        this.write(name2, "", Date.now() - 864e5);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }();
  return cookies;
}
var isAbsoluteURL;
var hasRequiredIsAbsoluteURL;
function requireIsAbsoluteURL() {
  if (hasRequiredIsAbsoluteURL)
    return isAbsoluteURL;
  hasRequiredIsAbsoluteURL = 1;
  isAbsoluteURL = function isAbsoluteURL2(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  return isAbsoluteURL;
}
var combineURLs;
var hasRequiredCombineURLs;
function requireCombineURLs() {
  if (hasRequiredCombineURLs)
    return combineURLs;
  hasRequiredCombineURLs = 1;
  combineURLs = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  return combineURLs;
}
var buildFullPath;
var hasRequiredBuildFullPath;
function requireBuildFullPath() {
  if (hasRequiredBuildFullPath)
    return buildFullPath;
  hasRequiredBuildFullPath = 1;
  var isAbsoluteURL2 = requireIsAbsoluteURL();
  var combineURLs2 = requireCombineURLs();
  buildFullPath = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL2(requestedURL)) {
      return combineURLs2(baseURL, requestedURL);
    }
    return requestedURL;
  };
  return buildFullPath;
}
var parseHeaders;
var hasRequiredParseHeaders;
function requireParseHeaders() {
  if (hasRequiredParseHeaders)
    return parseHeaders;
  hasRequiredParseHeaders = 1;
  var utils2 = utils$9;
  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  parseHeaders = function parseHeaders2(headers) {
    var parsed = {};
    var key;
    var val;
    var i2;
    if (!headers) {
      return parsed;
    }
    utils2.forEach(headers.split("\n"), function parser(line) {
      i2 = line.indexOf(":");
      key = utils2.trim(line.substr(0, i2)).toLowerCase();
      val = utils2.trim(line.substr(i2 + 1));
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === "set-cookie") {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }
    });
    return parsed;
  };
  return parseHeaders;
}
var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;
function requireIsURLSameOrigin() {
  if (hasRequiredIsURLSameOrigin)
    return isURLSameOrigin;
  hasRequiredIsURLSameOrigin = 1;
  var utils2 = utils$9;
  isURLSameOrigin = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    function resolveURL(url) {
      var href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      var parsed = utils2.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin2() {
      return true;
    };
  }();
  return isURLSameOrigin;
}
var xhr;
var hasRequiredXhr;
function requireXhr() {
  if (hasRequiredXhr)
    return xhr;
  hasRequiredXhr = 1;
  var utils2 = utils$9;
  var settle2 = requireSettle();
  var cookies2 = requireCookies();
  var buildURL3 = buildURL$1;
  var buildFullPath2 = requireBuildFullPath();
  var parseHeaders2 = requireParseHeaders();
  var isURLSameOrigin2 = requireIsURLSameOrigin();
  var createError2 = requireCreateError();
  xhr = function xhrAdapter(config2) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config2.data;
      var requestHeaders = config2.headers;
      var responseType = config2.responseType;
      if (utils2.isFormData(requestData)) {
        delete requestHeaders["Content-Type"];
      }
      var request2 = new XMLHttpRequest();
      if (config2.auth) {
        var username2 = config2.auth.username || "";
        var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username2 + ":" + password);
      }
      var fullPath = buildFullPath2(config2.baseURL, config2.url);
      request2.open(config2.method.toUpperCase(), buildURL3(fullPath, config2.params, config2.paramsSerializer), true);
      request2.timeout = config2.timeout;
      function onloadend() {
        if (!request2) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
        var response = {
          data: responseData,
          status: request2.status,
          statusText: request2.statusText,
          headers: responseHeaders,
          config: config2,
          request: request2
        };
        settle2(resolve, reject, response);
        request2 = null;
      }
      if ("onloadend" in request2) {
        request2.onloadend = onloadend;
      } else {
        request2.onreadystatechange = function handleLoad() {
          if (!request2 || request2.readyState !== 4) {
            return;
          }
          if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request2.onabort = function handleAbort() {
        if (!request2) {
          return;
        }
        reject(createError2("Request aborted", config2, "ECONNABORTED", request2));
        request2 = null;
      };
      request2.onerror = function handleError() {
        reject(createError2("Network Error", config2, null, request2));
        request2 = null;
      };
      request2.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = "timeout of " + config2.timeout + "ms exceeded";
        if (config2.timeoutErrorMessage) {
          timeoutErrorMessage = config2.timeoutErrorMessage;
        }
        reject(createError2(
          timeoutErrorMessage,
          config2,
          config2.transitional && config2.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          request2
        ));
        request2 = null;
      };
      if (utils2.isStandardBrowserEnv()) {
        var xsrfValue = (config2.withCredentials || isURLSameOrigin2(fullPath)) && config2.xsrfCookieName ? cookies2.read(config2.xsrfCookieName) : void 0;
        if (xsrfValue) {
          requestHeaders[config2.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request2) {
        utils2.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
            delete requestHeaders[key];
          } else {
            request2.setRequestHeader(key, val);
          }
        });
      }
      if (!utils2.isUndefined(config2.withCredentials)) {
        request2.withCredentials = !!config2.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request2.responseType = config2.responseType;
      }
      if (typeof config2.onDownloadProgress === "function") {
        request2.addEventListener("progress", config2.onDownloadProgress);
      }
      if (typeof config2.onUploadProgress === "function" && request2.upload) {
        request2.upload.addEventListener("progress", config2.onUploadProgress);
      }
      if (config2.cancelToken) {
        config2.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request2) {
            return;
          }
          request2.abort();
          reject(cancel);
          request2 = null;
        });
      }
      if (!requestData) {
        requestData = null;
      }
      request2.send(requestData);
    });
  };
  return xhr;
}
var utils$5 = utils$9;
var normalizeHeaderName = normalizeHeaderName$1;
var enhanceError = enhanceError$1;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = requireXhr();
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = requireXhr();
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, "Accept");
    normalizeHeaderName(headers, "Content-Type");
    if (utils$5.isFormData(data) || utils$5.isArrayBuffer(data) || utils$5.isBuffer(data) || utils$5.isStream(data) || utils$5.isFile(data) || utils$5.isBlob(data)) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data.toString();
    }
    if (utils$5.isObject(data) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional2 = this.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults$3.headers = {
  common: {
    "Accept": "application/json, text/plain, */*"
  }
};
utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$4 = utils$9;
var defaults$2 = defaults_1;
var transformData$1 = function transformData2(data, headers, fns) {
  var context2 = this || defaults$2;
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context2, data, headers);
  });
  return data;
};
var isCancel$1;
var hasRequiredIsCancel;
function requireIsCancel() {
  if (hasRequiredIsCancel)
    return isCancel$1;
  hasRequiredIsCancel = 1;
  isCancel$1 = function isCancel2(value) {
    return !!(value && value.__CANCEL__);
  };
  return isCancel$1;
}
var utils$3 = utils$9;
var transformData = transformData$1;
var isCancel = requireIsCancel();
var defaults$1 = defaults_1;
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
}
var dispatchRequest$1 = function dispatchRequest2(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData.call(
    config2,
    config2.data,
    config2.headers,
    config2.transformRequest
  );
  config2.headers = utils$3.merge(
    config2.headers.common || {},
    config2.headers[config2.method] || {},
    config2.headers
  );
  utils$3.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function cleanHeaderConfig(method) {
      delete config2.headers[method];
    }
  );
  var adapter = config2.adapter || defaults$1.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData.call(
      config2,
      response.data,
      response.headers,
      config2.transformResponse
    );
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config2,
          reason.response.data,
          reason.response.headers,
          config2.transformResponse
        );
      }
    }
    return Promise.reject(reason);
  });
};
var utils$2 = utils$9;
var mergeConfig$2 = function mergeConfig2(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  var valueFromConfig2Keys = ["url", "method", "data"];
  var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
  var defaultToConfig2Keys = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ];
  var directMergeKeys = ["validateStatus"];
  function getMergedValue(target, source) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge(target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config3[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config3[prop] = getMergedValue(void 0, config1[prop]);
    }
  }
  utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config3[prop] = getMergedValue(void 0, config2[prop]);
    }
  });
  utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config3[prop] = getMergedValue(void 0, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config3[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  utils$2.forEach(directMergeKeys, function merge2(prop) {
    if (prop in config2) {
      config3[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config3[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils$2.forEach(otherKeys, mergeDeepProperties);
  return config3;
};
const name = "axios";
const version = "0.21.4";
const description = "Promise based HTTP client for the browser and node.js";
const main = "index.js";
const scripts = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
};
const repository = {
  type: "git",
  url: "https://github.com/axios/axios.git"
};
const keywords = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
];
const author = "Matt Zabriskie";
const license = "MIT";
const bugs = {
  url: "https://github.com/axios/axios/issues"
};
const homepage = "https://axios-http.com";
const devDependencies = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
};
const browser = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
const jsdelivr = "dist/axios.min.js";
const unpkg = "dist/axios.min.js";
const typings = "./index.d.ts";
const dependencies = {
  "follow-redirects": "^1.14.0"
};
const bundlesize = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
];
const require$$0 = {
  name,
  version,
  description,
  main,
  scripts,
  repository,
  keywords,
  author,
  license,
  bugs,
  homepage,
  devDependencies,
  browser,
  jsdelivr,
  unpkg,
  typings,
  dependencies,
  bundlesize
};
var pkg = require$$0;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type2, i2) {
  validators$1[type2] = function validator2(thing) {
    return typeof thing === type2 || "a" + (i2 < 1 ? "n " : " ") + type2;
  };
});
var deprecatedWarnings = {};
var currentVerArr = pkg.version.split(".");
function isOlderVersion(version2, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
  var destVer = version2.split(".");
  for (var i2 = 0; i2 < 3; i2++) {
    if (pkgVersionArr[i2] > destVer[i2]) {
      return true;
    } else if (pkgVersionArr[i2] < destVer[i2]) {
      return false;
    }
  }
  return false;
}
validators$1.transitional = function transitional(validator2, version2, message) {
  var isDeprecated = version2 && isOlderVersion(version2);
  function formatMessage(opt, desc) {
    return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed in " + version2));
    }
    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i2 = keys.length;
  while (i2-- > 0) {
    var opt = keys[i2];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  isOlderVersion,
  assertOptions,
  validators: validators$1
};
var utils$1 = utils$9;
var buildURL = buildURL$1;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(config2) {
  if (typeof config2 === "string") {
    config2 = arguments[1] || {};
    config2.url = arguments[0];
  } else {
    config2 = config2 || {};
  }
  config2 = mergeConfig$1(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional2 = config2.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
      forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
      clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig$1(this.defaults, config2);
  return buildURL(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel_1;
var hasRequiredCancel;
function requireCancel() {
  if (hasRequiredCancel)
    return Cancel_1;
  hasRequiredCancel = 1;
  function Cancel(message) {
    this.message = message;
  }
  Cancel.prototype.toString = function toString2() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  };
  Cancel.prototype.__CANCEL__ = true;
  Cancel_1 = Cancel;
  return Cancel_1;
}
var CancelToken_1;
var hasRequiredCancelToken;
function requireCancelToken() {
  if (hasRequiredCancelToken)
    return CancelToken_1;
  hasRequiredCancelToken = 1;
  var Cancel = requireCancel();
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        return;
      }
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  };
  CancelToken_1 = CancelToken;
  return CancelToken_1;
}
var spread;
var hasRequiredSpread;
function requireSpread() {
  if (hasRequiredSpread)
    return spread;
  hasRequiredSpread = 1;
  spread = function spread2(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  return spread;
}
var isAxiosError;
var hasRequiredIsAxiosError;
function requireIsAxiosError() {
  if (hasRequiredIsAxiosError)
    return isAxiosError;
  hasRequiredIsAxiosError = 1;
  isAxiosError = function isAxiosError2(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
  };
  return isAxiosError;
}
var utils = utils$9;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context2 = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context2);
  utils.extend(instance, Axios.prototype, context2);
  utils.extend(instance, context2);
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
};
axios$1.Cancel = requireCancel();
axios$1.CancelToken = requireCancelToken();
axios$1.isCancel = requireIsCancel();
axios$1.all = function all(promises2) {
  return Promise.all(promises2);
};
axios$1.spread = requireSpread();
axios$1.isAxiosError = requireIsAxiosError();
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
(function(module2) {
  module2.exports = axios$2.exports;
})(axios$3);
const axios = /* @__PURE__ */ getDefaultExportFromCjs(axios$3.exports);
const loadedScripts$1 = {};
class Http {
  constructor(params2) {
    __publicField(this, "axios");
    __publicField(this, "_latestResponse");
    this.axios = axios.create(params2);
  }
  setCdn(cdnUrl) {
    if (cdnUrl && XMLHttpRequest && !XMLHttpRequest.prototype["cdnUrl"]) {
      XMLHttpRequest.prototype["cdnUrl"] = cdnUrl;
      XMLHttpRequest.prototype.baseOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
        const url = arguments[1];
        if (url.startsWith("/infra/public")) {
          arguments[1] = cdnUrl + url;
        }
        const match2 = /^\/([^\/]*)\/public/.test(url);
        if (match2) {
          arguments[1] = cdnUrl + url;
        }
        if (url.startsWith("/assets")) {
          arguments[1] = cdnUrl + url;
        }
        if (url == "/conf/public") {
          arguments[1] = url;
        }
        if (url.startsWith("http")) {
          arguments[1] = url;
        }
        return this.baseOpen.apply(this, arguments);
      };
    }
  }
  toAxiosConfig(params2) {
    if (!params2) {
      return this.axios.defaults;
    } else {
      const p = Object.assign({}, this.axios.defaults);
      if (params2.headers) {
        p.headers = Object.assign({}, this.axios.defaults.headers);
        Object.assign(p.headers, params2.headers);
      }
      if (params2.responseType) {
        p.responseType = params2.responseType;
      }
      if (params2.queryParams) {
        p.params = Object.assign({}, params2.queryParams);
      }
      return p;
    }
  }
  toCdnUrl(url) {
    const CDN_DOMAIN = ConfigurationFrameworkFactory.instance().Platform.cdnDomain;
    if ((CDN_DOMAIN == null ? void 0 : CDN_DOMAIN.length) > 0 && url !== "/conf/public") {
      const originalURL = "" + url;
      if (originalURL.startsWith("/infra/public") || originalURL.startsWith("/assets")) {
        url = CDN_DOMAIN + originalURL;
      } else {
        const match2 = /^\/([^\/]*)\/public/.test(originalURL);
        if (match2) {
          url = CDN_DOMAIN + originalURL;
        }
      }
    }
    return url;
  }
  mapAxiosError(error, params2) {
    if (error.response) {
      this._latestResponse = error.response;
    } else if (error.request) {
      this._latestResponse = {
        status: 408,
        statusText: ERROR_CODE.TIME_OUT
      };
    } else {
      this._latestResponse = {
        status: 500,
        statusText: ERROR_CODE.UNKNOWN
      };
    }
    if (!params2 || params2.disableNotifications === false)
      ;
    return this._latestResponse;
  }
  mapAxiosResponse(response, params2) {
    this._latestResponse = response;
    return response.data;
  }
  get latestResponse() {
    return this._latestResponse;
  }
  get(url, params2) {
    return this.axios.get(this.toCdnUrl(url), this.toAxiosConfig(params2)).then((r) => this.mapAxiosResponse(r, params2)).catch((e) => this.mapAxiosError(e, params2));
  }
  post(url, data, params2) {
    return this.axios.post(url, data, this.toAxiosConfig(params2)).then((r) => this.mapAxiosResponse(r, params2)).catch((e) => this.mapAxiosError(e, params2));
  }
  postFile(url, data, params2) {
    const p = this.toAxiosConfig(params2);
    if (p.headers["Content-Type"]) {
      delete p.headers["Content-Type"];
    }
    return this.axios.post(url, data, p).then((r) => this.mapAxiosResponse(r, params2)).catch((e) => this.mapAxiosError(e, params2));
  }
  postJson(url, json, params2) {
    const p = this.toAxiosConfig();
    p.headers["Content-Type"] = "application/json";
    return this.axios.post(url, json, this.toAxiosConfig(params2)).then((r) => this.mapAxiosResponse(r, params2)).catch((e) => this.mapAxiosError(e, params2));
  }
  put(url, data, params2) {
    return this.axios.put(url, data, this.toAxiosConfig(params2)).then((r) => this.mapAxiosResponse(r, params2)).catch((e) => this.mapAxiosError(e, params2));
  }
  putJson(url, json, params2) {
    const p = this.toAxiosConfig(params2);
    p.headers["Content-Type"] = "application/json";
    return this.axios.put(url, json, p).then((r) => this.mapAxiosResponse(r, params2)).catch((e) => this.mapAxiosError(e, params2));
  }
  delete(url, params2) {
    return this.axios.delete(url, this.toAxiosConfig(params2)).then((r) => this.mapAxiosResponse(r, params2)).catch((e) => this.mapAxiosError(e, params2));
  }
  deleteJson(url, json) {
    return this.axios.delete(url, { data: json }).then((r) => this.mapAxiosResponse(r)).catch((e) => this.mapAxiosError(e));
  }
  getScript(url, params2, variableName) {
    const resultName = variableName != null ? variableName : "exports";
    const p = this.toAxiosConfig(params2);
    p.headers["Accept"] = "application/javascript";
    return this.axios.get(this.toCdnUrl(url), p).then((r) => this.mapAxiosResponse(r, params2)).then((r) => {
      try {
        const securedScript = `"use strict";var ${resultName.split(".")[0]}={};${r};return ${resultName};`;
        const result = Function(securedScript)();
        return result;
      } catch (e) {
        const result = r;
        return result;
      }
    }).catch((e) => {
      this.mapAxiosError(e, params2);
      throw e;
    });
  }
  loadScript(url, params2) {
    return loadedScripts$1[url] ? Promise.resolve() : this.getScript(url, params2).then((res) => {
      loadedScripts$1[url] = true;
    });
  }
}
class TransportFramework {
  constructor() {
    __publicField(this, "_http", new Http());
  }
  get http() {
    return this._http;
  }
  newHttpInstance(params2) {
    return new Http(params2);
  }
}
const transport = new TransportFramework();
class TransportFrameworkFactory {
  static instance() {
    return transport;
  }
}
const http$1 = transport.http;
class Session {
  constructor() {
    __publicField(this, "_me", null);
    __publicField(this, "_currentLanguage", "");
    __publicField(this, "_notLoggedIn", true);
    __publicField(this, "_description");
    __publicField(this, "_profile");
  }
  get currentLanguage() {
    return this._currentLanguage;
  }
  get notLoggedIn() {
    return this._notLoggedIn;
  }
  get description() {
    return this._description;
  }
  get avatarUrl() {
    let avatar = this.description.photo;
    if (!avatar || avatar === "no-avatar.jpg" || avatar === "no-avatar.svg") {
      const basePath = ConfigurationFrameworkFactory.instance().Platform.theme.basePath;
      avatar = basePath + "/img/illustrations/no-avatar.svg";
    }
    return avatar;
  }
  get user() {
    return this._me;
  }
  get currentApp() {
    return configure.Platform.apps.currentApp;
  }
  initialize() {
    return __async(this, null, function* () {
      return http$1.get("/auth/oauth2/userinfo").then((u) => {
        if (http$1.latestResponse.status < 200 || http$1.latestResponse.status >= 300) {
          throw ERROR_CODE.NOT_LOGGED_IN;
        }
        this.setCurrentModel(u);
        return this._notLoggedIn ? this.loadDefaultLanguage() : this.loadUserLanguage();
      }).then((lang) => {
        this.setCurrentLanguage(lang);
        return this.loadDescription();
      }).then(() => {
        return this.getUserProfile();
      }).then(() => {
        notify.onSessionReady().resolve(this._me);
      }).catch((e) => {
        if (e === ERROR_CODE.NOT_LOGGED_IN) {
          return Promise.resolve();
        }
        notify.onSessionReady().reject(e);
      });
    });
  }
  setCurrentModel(me) {
    this._me = me;
    this._notLoggedIn = me && me.sessionMetadata && me.sessionMetadata.userId ? false : true;
  }
  hasWorkflow(workflowName) {
    var _a;
    return workflowName === void 0 || ((_a = this._me) == null ? void 0 : _a.authorizedActions.findIndex((workflowRight) => {
      return workflowRight.name === workflowName;
    })) !== -1;
  }
  hasRight(resource, right) {
    if (right === "owner") {
      return resource.owner && resource.owner.userId === this._me.userId;
    }
    const rightName = right.right || right;
    let currentSharedRights = resource.shared.filter((sharedRight) => {
      return (this._me.groupsIds || []).indexOf(sharedRight.groupId) !== -1 || sharedRight.userId === this._me.userId;
    });
    const resourceRight = currentSharedRights.find((resourceRight2) => {
      return resourceRight2[rightName] || resourceRight2.manager;
    }) !== void 0;
    const workflowRight = right.workflow ? this.hasWorkflow(right.workflow) : true;
    return resourceRight && workflowRight;
  }
  get latestQuotaAndUsage() {
    return http$1.get(`/workspace/quota/user/${this._me.userId}`).then((infos) => {
      if (this._description) {
        this._description.quota = infos.quota;
        this._description.storage = infos.storage;
      }
      return infos;
    }).catch(() => {
      return { quota: 0, storage: 0 };
    });
  }
  setCurrentLanguage(lang) {
    this._currentLanguage = lang;
    notify.onLangReady().resolve(lang);
  }
  loadDefaultLanguage() {
    return http$1.get("/locale").then((response) => {
      return response.locale;
    }).catch(() => {
      return this._currentLanguage;
    });
  }
  loadDescription() {
    return Promise.all([
      http$1.get("/userbook/api/person", {
        requestName: "refreshAvatar"
      }),
      http$1.get("/directory/userbook/" + this._me.userId)
    ]).then((results) => {
      if (results[0].status === "ok" && results[0].result && results[0].result.length > 0) {
        this._description = results[0].result[0];
      } else {
        this._description = {};
      }
      if (this._description.type && !this._description.profiles) {
        this._description.profiles = this._description.type;
      }
      Object.assign(this._description, results[1]);
      return this._description;
    });
  }
  get profile() {
    return this._profile;
  }
  getUserProfile() {
    return http$1.get("/userbook/api/person").then((data) => data.result).then((user) => {
      return this._profile = user[0].type;
    });
  }
  loadUserLanguage() {
    return http$1.get("/userbook/preference/language").then((responseText) => {
      try {
        return JSON.parse(responseText.preference)["default-domain"];
      } catch (e) {
        return this.loadDefaultLanguage();
      }
    }).catch(() => {
      return this.loadDefaultLanguage();
    });
  }
  getEmailValidationInfos() {
    return http$1.get("/directory/user/mailstate");
  }
  checkEmail(email) {
    return http$1.put("/directory/user/mailstate", { email });
  }
  tryEmailValidation(code) {
    return http$1.post("/directory/user/mailstate", {
      key: code
    });
  }
  getMobileValidationInfos() {
    return http$1.get("/directory/user/mobilestate");
  }
  checkMobile(mobile) {
    return http$1.put("/directory/user/mobilestate", { mobile });
  }
  tryMobileValidation(code) {
    return http$1.post("/directory/user/mobilestate", {
      key: code
    });
  }
  getMfaInfos() {
    return http$1.get("/auth/user/mfa/code");
  }
  tryMfaCode(code) {
    return http$1.post("/auth/user/mfa/code", { key: code });
  }
}
class SessionFramework {
  constructor() {
    __publicField(this, "session", new Session());
  }
  initialize() {
    return this.session.initialize();
  }
  login(email, password, rememberMe, secureLocation) {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    if (typeof rememberMe !== "undefined") {
      data.append("rememberMe", "" + rememberMe);
    }
    if (typeof secureLocation !== "undefined") {
      data.append("secureLocation", "" + secureLocation);
    }
    return transport.http.post("/auth/login", data, {
      headers: { "content-type": "application/x-www-form-urlencoded" }
    }).finally(() => {
      switch (transport.http.latestResponse.status) {
        case 200:
          throw ERROR_CODE.MALFORMED_DATA;
      }
    });
  }
  logout() {
    return transport.http.get("/auth/logout").finally(() => {
    });
  }
}
const session = new SessionFramework();
class Theme {
  constructor() {
    __publicField(this, "_conf");
    __publicField(this, "_loaded");
    __publicField(this, "skinName", "");
    __publicField(this, "themeName", "");
    __publicField(this, "skin", "raw");
    __publicField(this, "themeUrl", "/assets/themes/raw/default/");
    __publicField(this, "templateOverrides", {});
    __publicField(this, "portalTemplate", "/assets/themes/raw/portal.html");
    __publicField(this, "basePath", "");
    __publicField(this, "logoutCallback", "/");
    __publicField(this, "skins", []);
    __publicField(this, "is1D", false);
    __publicField(this, "is2D", false);
    __publicField(this, "_onSkinReady", notify.onSkinReady());
    __publicField(this, "_onOverrideReady", notify.onOverridesReady());
  }
  initialize(version2) {
    return notify.onSessionReady().promise.then(() => this.load(version2));
  }
  get version() {
    return configure.Platform.deploymentTag;
  }
  get cdnDomain() {
    return configure.Platform.cdnDomain;
  }
  onFullyReady() {
    return __async(this, null, function* () {
      yield this._loaded;
      return this;
    });
  }
  onSkinReady() {
    return this._onSkinReady.promise;
  }
  onOverrideReady() {
    return this._onOverrideReady.promise;
  }
  getConf(version2) {
    return __async(this, null, function* () {
      var _a;
      this._conf = (_a = this._conf) != null ? _a : yield transport.http.getScript(
        "/assets/theme-conf.js",
        { queryParams: { v: version2 != null ? version2 : this.version } },
        "exports.conf"
      );
      return this._conf;
    });
  }
  load(version2) {
    version2 = version2 != null ? version2 : this.version;
    if (!this._loaded) {
      this._loaded = (session.session.notLoggedIn ? this.loadDisconnected(version2) : this.loadConnected(version2)).then(() => __async(this, null, function* () {
        var _a, _b;
        const skins = yield this.listSkins();
        this.is1D = ((_a = skins.find((s) => s.child === this.skin)) == null ? void 0 : _a.parent) === "panda";
        this.is2D = ((_b = skins.find((s) => s.child === this.skin)) == null ? void 0 : _b.parent) === "theme-open-ent";
      }));
    }
    return this._loaded;
  }
  loadDisconnected(version2) {
    return new Promise((resolve, reject) => {
      transport.http.get("/skin", { queryParams: { v: this.version } }).then((data) => {
        this.skin = data.skin;
        this.themeUrl = `${this.cdnDomain}/assets/themes/${data.skin}/skins/default/`;
        this.basePath = this.themeUrl + "../../";
        this._onSkinReady.resolve(this);
        transport.http.get(`/assets/themes/${data.skin}/template/override.json`, {
          disableNotifications: true,
          queryParams: { v: version2 }
        }).then((override) => {
          this.templateOverrides = override;
          this._onOverrideReady.resolve(override);
          resolve();
        }).catch((e) => {
          if (transport.http.latestResponse.status === 404) {
            resolve();
          } else {
            throw e;
          }
        });
      }).catch((e) => {
        this._onSkinReady.reject(e);
        this._onOverrideReady.reject(e);
        reject();
      });
    });
  }
  loadConnected(version2) {
    return new Promise((resolve, reject) => {
      this.loadDefaultTheme(version2).then(() => {
        this._onSkinReady.resolve(this);
        transport.http.get(`/assets/themes/${this.skin}/template/override.json`, {
          disableNotifications: true,
          queryParams: { v: version2 }
        }).then((override) => {
          this.templateOverrides = override;
          this._onOverrideReady.resolve(override);
          resolve();
        }).catch((e) => {
          if (transport.http.latestResponse.status === 404) {
            resolve();
            this._onSkinReady.reject(e);
            this._onOverrideReady.reject(e);
          } else {
            throw e;
          }
        });
      });
    });
  }
  loadDefaultTheme(version2) {
    return __async(this, null, function* () {
      if (!session.session.notLoggedIn) {
        return transport.http.get("/theme", { queryParams: { _: version2 } }).then((data) => {
          this.skinName = data.skinName;
          this.themeName = data.themeName;
          this.themeUrl = data.skin;
          this.basePath = `${this.cdnDomain}${this.themeUrl}../../`;
          this.skin = this.themeUrl.split("/assets/themes/")[1].split("/")[0];
          this.portalTemplate = `${this.cdnDomain}/assets/themes/${this.skin}/portal.html`;
          this.logoutCallback = data.logoutCallback;
        });
      }
      return Promise.reject();
    });
  }
  listThemes() {
    return transport.http.get("/themes");
  }
  setDefaultTheme(theme) {
    return __async(this, null, function* () {
      yield transport.http.get(
        "/userbook/api/edit-userbook-info?prop=theme-" + this.skin + "&value=" + theme._id
      );
      yield this.loadDefaultTheme(this.version);
    });
  }
  listSkins() {
    return this.skins.length > 0 ? Promise.resolve(this.skins) : this.getConf().then((conf) => {
      const currentTheme = conf.overriding.find(
        (t) => t.child === this.skin
      );
      if (currentTheme == null ? void 0 : currentTheme.group) {
        this.skins = this.skins.concat(
          conf.overriding.filter((t) => t.group === currentTheme.group)
        );
      } else {
        this.skins = this.skins.concat(conf.overriding);
      }
      return this.skins;
    });
  }
  getHelpPath() {
    return __async(this, null, function* () {
      var _a;
      const overrides = yield this.listSkins();
      const override = overrides.find((t) => t.child === this.skin);
      return (_a = override == null ? void 0 : override.help) != null ? _a : "/help";
    });
  }
}
const bundle = {};
const promises = {};
const defaultDiacriticsRemovalMap = [
  {
    base: "A",
    letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
  },
  { base: "AA", letters: /[\uA732]/g },
  { base: "AE", letters: /[\u00C6\u01FC\u01E2]/g },
  { base: "AO", letters: /[\uA734]/g },
  { base: "AU", letters: /[\uA736]/g },
  { base: "AV", letters: /[\uA738\uA73A]/g },
  { base: "AY", letters: /[\uA73C]/g },
  {
    base: "B",
    letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
  },
  {
    base: "C",
    letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
  },
  {
    base: "D",
    letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
  },
  { base: "DZ", letters: /[\u01F1\u01C4]/g },
  { base: "Dz", letters: /[\u01F2\u01C5]/g },
  {
    base: "E",
    letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
  },
  { base: "F", letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
  {
    base: "G",
    letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
  },
  {
    base: "H",
    letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
  },
  {
    base: "I",
    letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
  },
  { base: "J", letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
  {
    base: "K",
    letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
  },
  {
    base: "L",
    letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
  },
  { base: "LJ", letters: /[\u01C7]/g },
  { base: "Lj", letters: /[\u01C8]/g },
  { base: "M", letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
  {
    base: "N",
    letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
  },
  { base: "NJ", letters: /[\u01CA]/g },
  { base: "Nj", letters: /[\u01CB]/g },
  {
    base: "O",
    letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
  },
  { base: "OI", letters: /[\u01A2]/g },
  { base: "OO", letters: /[\uA74E]/g },
  { base: "OU", letters: /[\u0222]/g },
  {
    base: "P",
    letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
  },
  { base: "Q", letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
  {
    base: "R",
    letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
  },
  {
    base: "S",
    letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
  },
  {
    base: "T",
    letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
  },
  { base: "TZ", letters: /[\uA728]/g },
  {
    base: "U",
    letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
  },
  { base: "V", letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
  { base: "VY", letters: /[\uA760]/g },
  {
    base: "W",
    letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
  },
  { base: "X", letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
  {
    base: "Y",
    letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
  },
  {
    base: "Z",
    letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
  },
  {
    base: "a",
    letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
  },
  { base: "aa", letters: /[\uA733]/g },
  { base: "ae", letters: /[\u00E6\u01FD\u01E3]/g },
  { base: "ao", letters: /[\uA735]/g },
  { base: "au", letters: /[\uA737]/g },
  { base: "av", letters: /[\uA739\uA73B]/g },
  { base: "ay", letters: /[\uA73D]/g },
  {
    base: "b",
    letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
  },
  {
    base: "c",
    letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
  },
  {
    base: "d",
    letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
  },
  { base: "dz", letters: /[\u01F3\u01C6]/g },
  {
    base: "e",
    letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
  },
  { base: "f", letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
  {
    base: "g",
    letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
  },
  {
    base: "h",
    letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
  },
  { base: "hv", letters: /[\u0195]/g },
  {
    base: "i",
    letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
  },
  { base: "j", letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
  {
    base: "k",
    letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
  },
  {
    base: "l",
    letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
  },
  { base: "lj", letters: /[\u01C9]/g },
  { base: "m", letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
  {
    base: "n",
    letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
  },
  { base: "nj", letters: /[\u01CC]/g },
  {
    base: "o",
    letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
  },
  { base: "oi", letters: /[\u01A3]/g },
  { base: "ou", letters: /[\u0223]/g },
  { base: "oo", letters: /[\uA74F]/g },
  {
    base: "p",
    letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
  },
  { base: "q", letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
  {
    base: "r",
    letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
  },
  {
    base: "s",
    letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
  },
  {
    base: "t",
    letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
  },
  { base: "tz", letters: /[\uA729]/g },
  {
    base: "u",
    letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
  },
  { base: "v", letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
  { base: "vy", letters: /[\uA761]/g },
  {
    base: "w",
    letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
  },
  { base: "x", letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
  {
    base: "y",
    letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
  },
  {
    base: "z",
    letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
  }
];
class Idiom {
  translate(key, params2) {
    key = key != null ? key : "";
    let txt = bundle[key] === void 0 ? key : bundle[key];
    if (params2 && typeof params2 === "object") {
      for (let member in params2) {
        if (typeof params2[member] !== "undefined") {
          txt = txt.replace(
            new RegExp("\\${" + member + "}", "g"),
            "" + params2[member]
          );
        }
      }
    }
    return txt;
  }
  addBundlePromise(path2) {
    return this.loadBundlePromise(session.session.currentLanguage, path2);
  }
  addBundle(path2, callback) {
    this.loadBundle(session.session.currentLanguage, path2, callback);
  }
  loadBundlePromise(lang, path2) {
    this.loadBundle(lang, path2);
    return promises[path2];
  }
  loadBundle(lang, path2, callback) {
    const oldPromise = promises[path2];
    if (oldPromise) {
      if (callback) {
        oldPromise.then(callback).catch(callback);
      }
    } else {
      const load = new Promisified();
      promises[path2] = load.promise;
      const params2 = {};
      if (lang) {
        params2["Accept-Language"] = lang;
      }
      transport.http.get(path2, { headers: params2 }).then((response) => {
        Object.assign(bundle, response);
        if (typeof callback === "function") {
          callback();
        }
        load.resolve();
      }).catch((e) => {
        if (typeof callback === "function") {
          callback();
        }
        load.reject();
      });
    }
  }
  addTranslations(folder, callback) {
    notify.onLangReady().promise.then((lang) => {
      this.loadBundle(lang, folder + "/" + lang + ".json", callback);
    });
  }
  addAllTranslations(folders2) {
    if (folders2 && folders2.length > 0) {
      return notify.onLangReady().promise.then(
        (lang) => Promise.all(
          folders2.map(
            (folder) => this.loadBundlePromise(lang, folder + "/" + lang + ".json")
          )
        )
      ).then(() => {
      });
    } else {
      return Promise.reject();
    }
  }
  addKeys(keys) {
    for (var property in keys) {
      if (typeof bundle[property] !== "string")
        bundle[property] = keys[property];
    }
  }
  removeAccents(str) {
    for (var i2 = 0; i2 < defaultDiacriticsRemovalMap.length; i2++) {
      str = str.replace(
        defaultDiacriticsRemovalMap[i2].letters,
        defaultDiacriticsRemovalMap[i2].base
      );
    }
    return str;
  }
}
class UserPreferences {
  constructor() {
    __publicField(this, "data", {});
  }
  get(key) {
    return this.data[key];
  }
  load(key, defaultTo) {
    return transport.http.get("/userbook/preference/" + key).then((data) => {
      try {
        return JSON.parse(data.preference);
      } catch (e) {
        return defaultTo != null ? defaultTo : {};
      }
    }).then((prefs) => {
      this.data[key] = prefs != null ? prefs : {};
      return prefs;
    });
  }
  update(key, data) {
    if (data !== void 0) {
      this.data[key] = data;
    }
    return this;
  }
  save(key) {
    return transport.http.putJson(
      "/userbook/preference/" + key,
      this.data[key]
    );
  }
}
class User {
  constructor() {
    __publicField(this, "_me", null);
    __publicField(this, "_keepOpenOnLogout", false);
    __publicField(this, "_preferences", new UserPreferences());
    __publicField(this, "_bookmarkedApps", []);
  }
  get keepOpenOnLogout() {
    return this._keepOpenOnLogout;
  }
  get preferences() {
    return this._preferences;
  }
  get bookmarkedApps() {
    return this._bookmarkedApps;
  }
  initialize(version2) {
    this.loadPublicConf();
    return notify.onSessionReady().promise.then((userInfo) => {
      if (userInfo) {
        this.setCurrentModel(userInfo);
      }
    });
  }
  setCurrentModel(me) {
    this._me = me;
    this._preferences = new UserPreferences();
    this.loadBookmarks();
  }
  loadPublicConf() {
    return transport.http.get("/conf/public").then((publicConf) => {
      this._keepOpenOnLogout = (publicConf == null ? void 0 : publicConf.keepOpenOnLogout) || false;
      return publicConf;
    });
  }
  loadBookmarks() {
    return __async(this, null, function* () {
      yield transport.http.get("/userbook/preference/apps").then((data) => {
        if (!data.preference) {
          data.preference = null;
        }
        const tmp = JSON.parse(
          data.preference
        );
        let myApps;
        if (tmp && tmp.length && typeof tmp.concat === "function") {
          this._bookmarkedApps = tmp;
          myApps = {
            bookmarks: tmp.map((app) => app.name),
            applications: []
          };
          transport.http.putJson("/userbook/preference/apps", myApps);
          return;
        } else {
          myApps = tmp;
        }
        if (!myApps) {
          myApps = {
            bookmarks: [],
            applications: []
          };
        }
        let upToDate = true;
        const remove = [];
        myApps.bookmarks.forEach((appName, index) => {
          const foundApp = this._me.apps.find((app) => app.name === appName);
          if (foundApp) {
            let app = Object.assign({}, foundApp);
            this._bookmarkedApps.push(app);
          } else {
            remove.push(appName);
            upToDate = false;
          }
        });
        remove.forEach((appName) => {
          let index = myApps.bookmarks.indexOf(appName);
          if (index !== -1) {
            myApps.bookmarks.splice(index, 1);
          }
        });
        if (!upToDate) {
          transport.http.putJson("/userbook/preference/apps", myApps);
        }
      });
    });
  }
  loadAppPrefs(app) {
    return this.preferences.load(app, {});
  }
  saveAppPrefs(app) {
    return this.preferences.save(app);
  }
  loadLanguage() {
    return this.preferences.load("language", { "default-domain": session.session.currentLanguage }).then((data) => data["default-domain"]);
  }
  saveLanguage(lang) {
    return this.preferences.update("language", { "default-domain": lang }).save("language");
  }
}
const http = transport == null ? void 0 : transport.http;
class AppConf {
  constructor() {
    __publicField(this, "_publicConf", {});
    __publicField(this, "_currentApp");
    __publicField(this, "_appConf", {});
  }
  get currentApp() {
    var _a;
    return (_a = this._currentApp) != null ? _a : null;
  }
  setCurrentApp(app) {
    this._currentApp = app;
    return this;
  }
  initialize(app, alternativeApp = false) {
    return __async(this, null, function* () {
      if (!alternativeApp) {
        this.setCurrentApp(app);
      }
      yield Promise.all([this.getPublicConf(app), this.loadI18n(app)]);
    });
  }
  getPublicConf(app) {
    return __async(this, null, function* () {
      if (!this._publicConf[app]) {
        this._publicConf[app] = yield http.get(`/${app}/conf/public`, {
          queryParams: { _: configure.Platform.deploymentTag }
        });
      }
      return this._publicConf[app];
    });
  }
  getWebAppConf(app) {
    return __async(this, null, function* () {
      var _a;
      let found;
      if (!this._appConf[app]) {
        const list = yield http.get(
          `/applications-list`
        );
        list.apps.forEach((conf) => {
          if (conf == null ? void 0 : conf.prefix) {
            const a = conf.prefix.replace("/", "");
            this._appConf[a] = conf;
          } else if (conf == null ? void 0 : conf.name) {
            if (conf.name.toLowerCase() == app) {
              found = conf;
            }
          }
        });
      }
      return (_a = this._appConf[app]) != null ? _a : found;
    });
  }
  loadI18n(app) {
    return __async(this, null, function* () {
      yield notify.onLangReady().promise;
      const i18n = configure.Platform.idiom;
      return i18n.addBundlePromise(`/${app}/i18n`);
    });
  }
}
class Analytics {
  constructor() {
    __publicField(this, "_status", "void");
    __publicField(this, "_params");
  }
  get status() {
    return this._status;
  }
  xiti() {
    return this.parametersWithCheck("xiti", false);
  }
  parameters(type2) {
    return this.parametersWithCheck(type2, true);
  }
  parametersWithCheck(type2, checkType) {
    return __async(this, null, function* () {
      return this.initialize().promise.then((params2) => {
        return !checkType || params2.type === type2 || params2.type === "multiple" ? params2[type2] : void 0;
      });
    });
  }
  initialize() {
    if (!this._params) {
      this._params = notify.promisify();
      this._status = "pending";
      Promise.all([
        transport.http.get("/analyticsConf"),
        transport.http.get("/xiti/config")
      ]).then((tuple) => __async(this, null, function* () {
        var _a;
        if (!tuple || !tuple[0] || !tuple[0].type) {
          throw ERROR_CODE.MALFORMED_DATA;
        }
        if (tuple[1] && tuple[1].active) {
          tuple[0].xiti = yield this.initializeXiti(tuple[1]);
        }
        (_a = this._params) == null ? void 0 : _a.resolve(tuple[0]);
        this._status = "ready";
      })).catch((e) => {
        var _a;
        this._status = "failed";
        (_a = this._params) == null ? void 0 : _a.reject();
        throw e;
      });
    }
    return this._params;
  }
  initializeXiti(xitiConf) {
    return __async(this, null, function* () {
      var _a;
      if (!xitiConf.structureMap || !configure.Platform.apps.currentApp)
        return;
      const me = yield notify.onSessionReady().promise;
      const desc = session.session.description;
      let structure;
      for (let struc of me.structures) {
        const s = xitiConf.structureMap[struc];
        if (s && s.collectiviteId && s.UAI) {
          structure = s;
          break;
        }
      }
      if (!structure || !structure.active)
        return;
      const appConf = yield configure.Platform.apps.getPublicConf(
        configure.Platform.apps.currentApp
      );
      if (!appConf)
        return;
      const appXitiConf = appConf.xiti;
      if (!appXitiConf)
        return;
      if (!appXitiConf.LIBELLE_SERVICE)
        return;
      if (!structure.UAI)
        return;
      function pseudonymization(stringId) {
        let buffer = "";
        for (let i2 = 0; i2 < stringId.length; i2++) {
          buffer += stringId.charCodeAt(i2);
        }
        return buffer;
      }
      const profileMap = {
        Student: "ELEVE",
        Teacher: "ENSEIGNANT",
        Relative: "PARENT",
        Personnel: "ADMIN_VIE_SCOL_TECH",
        Guest: "AUTRE"
      };
      return {
        LIBELLE_SERVICE: appXitiConf.LIBELLE_SERVICE,
        TYPE: appXitiConf.OUTIL ? "TIERS" : "NATIF",
        OUTIL: appXitiConf.OUTIL ? appXitiConf.OUTIL : "",
        STRUCT_ID: structure.collectiviteId,
        STRUCT_UAI: structure.UAI,
        PROJET: structure.projetId ? structure.projetId : xitiConf.ID_PROJET,
        EXPLOITANT: xitiConf.ID_EXPLOITANT,
        PLATFORME: structure.plateformeId ? structure.plateformeId : xitiConf.ID_PLATEFORME,
        ID_PERSO: pseudonymization(me.userId),
        PROFILE: desc.profiles && desc.profiles.length > 0 ? (_a = profileMap[desc.profiles[0]]) != null ? _a : "" : ""
      };
    });
  }
}
class ConfigurationFramework {
  constructor() {
    __publicField(this, "Platform", {
      deploymentTag: "",
      cdnDomain: "",
      apps: new AppConf(),
      theme: new Theme(),
      analytics: new Analytics(),
      idiom: new Idiom(),
      listLanguages: () => {
        return transport.http.get("/languages");
      }
    });
    __publicField(this, "School", {});
    __publicField(this, "User", new User());
  }
  initialize(version2, cdnDomain) {
    return __async(this, null, function* () {
      if (!version2) {
        const padWith0 = (val) => (val < 10 ? "0" : "") + val.toFixed(0);
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth() + 1;
        const d = now.getDate();
        version2 = `${y}${padWith0(m)}${padWith0(d)}`;
      }
      const v = version2;
      this.Platform.deploymentTag = version2;
      if (typeof cdnDomain === "string" && cdnDomain.length > 0) {
        this.Platform.cdnDomain = cdnDomain;
      }
      transport.http.setCdn(this.Platform.cdnDomain);
      yield Promise.all([
        this.Platform.theme.initialize(v),
        notify.onSessionReady().promise.then(
          (userInfo) => this.Platform.idiom.addBundlePromise("/i18n")
        ),
        this.User.initialize(v)
      ]);
    });
  }
}
const configure = new ConfigurationFramework();
class ConfigurationFrameworkFactory {
  static instance() {
    return configure;
  }
}
transport == null ? void 0 : transport.http;
(_c = session == null ? void 0 : session.session) == null ? void 0 : _c.user;
const _ResourceService = class {
  constructor(context2) {
    __publicField(this, "checkHttpResponse", (result) => {
      if (this.http.latestResponse.status >= 300) {
        throw this.http.latestResponse.statusText;
      }
      return result;
    });
    this.context = context2;
  }
  static register({
    application,
    resourceType
  }, service) {
    _ResourceService.registry.set(`${application}:main`, service);
    _ResourceService.registry.set(`${application}:${resourceType}`, service);
  }
  static findService({
    application,
    resourceType
  }, context2) {
    const found = _ResourceService.registry.get(
      `${application}:${resourceType}`
    );
    if (found === void 0) {
      throw `Service not found: ${application}:${resourceType}`;
    }
    return found(context2);
  }
  static findMainService({ application }, context2) {
    const found = _ResourceService.registry.get(`${application}:main`);
    if (found === void 0) {
      throw `Service not found: ${application}`;
    }
    return found(context2);
  }
  get http() {
    return this.context.http();
  }
  getShareReadUrl(id) {
    return `/${this.getApplication()}/share/json/${id}`;
  }
  getSaveShareUrl(id) {
    return `/${this.getApplication()}/share/resource/${id}`;
  }
  gotoPrint(resourceId, withComment) {
    window.open(this.getPrintUrl(resourceId, withComment), "_blank");
  }
  gotoView(resourceId) {
    window.open(this.getViewUrl(resourceId), "_self");
  }
  gotoForm() {
    window.open(this.getFormUrl(), "_self");
  }
  publish(parameters) {
    return __async(this, null, function* () {
      const publicationAsFormData = new FormData();
      publicationAsFormData.append("title", parameters.title);
      publicationAsFormData.append("cover", parameters.cover);
      publicationAsFormData.append("coverName", parameters.cover.name);
      publicationAsFormData.append("coverType", parameters.cover.type);
      publicationAsFormData.append("teacherAvatar", parameters.teacherAvatar);
      publicationAsFormData.append(
        "teacherAvatarName",
        parameters.teacherAvatar.name || `teacherAvatar_${parameters.userId}`
      );
      publicationAsFormData.append(
        "teacherAvatarType",
        parameters.teacherAvatar.type
      );
      publicationAsFormData.append("language", parameters.language);
      parameters.activityType.forEach((activityType) => {
        publicationAsFormData.append("activityType[]", activityType);
      });
      parameters.subjectArea.forEach((subjectArea) => {
        publicationAsFormData.append("subjectArea[]", subjectArea);
      });
      parameters.age.forEach((age) => {
        publicationAsFormData.append("age[]", age.toString());
      });
      publicationAsFormData.append("description", parameters.description);
      let keyWordsArray = parameters.keyWords.split(",");
      keyWordsArray.forEach((keyWord) => {
        publicationAsFormData.append("keyWords[]", keyWord.trim());
      });
      publicationAsFormData.append("licence", parameters.licence);
      publicationAsFormData.append(
        "pdfUri",
        `${window.location.origin}${this.getPrintUrl(parameters.resourceId)}`
      );
      publicationAsFormData.append(
        "application",
        parameters.application ? parameters.application : ""
      );
      publicationAsFormData.append("resourceId", parameters.resourceId);
      publicationAsFormData.append("teacherSchool", parameters.userStructureName);
      const res = yield this.http.post(
        "/appregistry/library/resource",
        publicationAsFormData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      return this.checkHttpResponse(res);
    });
  }
  createContext(parameters) {
    return __async(this, null, function* () {
      const result = yield this.http.get("/explorer/context", {
        queryParams: this.toQueryParams(parameters)
      });
      return this.checkHttpResponse(result);
    });
  }
  searchContext(parameters) {
    return __async(this, null, function* () {
      const result = yield this.http.get(
        "/explorer/resources",
        {
          queryParams: this.toQueryParams(parameters)
        }
      );
      return this.checkHttpResponse(result);
    });
  }
  createFolder(parameters) {
    return __async(this, null, function* () {
      const result = yield this.http.post(
        "/explorer/folders",
        this.createFolderToBodyParams(parameters)
      );
      return this.checkHttpResponse(result);
    });
  }
  updateFolder(parameters) {
    return __async(this, null, function* () {
      const result = yield this.http.put(
        `/explorer/folders/${parameters.folderId}`,
        this.createFolderToBodyParams(parameters)
      );
      return this.checkHttpResponse(result);
    });
  }
  moveToFolder(parameters) {
    return __async(this, null, function* () {
      const result = yield this.http.post(
        `/explorer/folders/${parameters.folderId}/move`,
        this.moveToBodyParams(parameters)
      );
      return this.checkHttpResponse(result);
    });
  }
  listSubfolders(folderId) {
    return __async(this, null, function* () {
      const result = yield this.http.get(
        `/explorer/folders/${folderId}`
      );
      console.log("result", result);
      return this.checkHttpResponse(result);
    });
  }
  deleteAll(parameters) {
    return __async(this, null, function* () {
      const result = yield this.http.deleteJson(
        `/explorer`,
        parameters
      );
      return this.checkHttpResponse(result);
    });
  }
  trashAll(_d) {
    return __async(this, null, function* () {
      var _e = _d, {
        resourceType
      } = _e, parameters = __objRest(_e, [
        "resourceType"
      ]);
      const result = yield this.http.putJson(
        `/explorer/trash`,
        parameters
      );
      return this.checkHttpResponse(result);
    });
  }
  restoreAll(_f) {
    return __async(this, null, function* () {
      var _g = _f, {
        resourceType
      } = _g, parameters = __objRest(_g, [
        "resourceType"
      ]);
      const result = yield this.http.putJson(
        `/explorer/restore`,
        parameters
      );
      return this.checkHttpResponse(result);
    });
  }
  getThumbnailPath(thumb) {
    return __async(this, null, function* () {
      if (typeof thumb === "undefined") {
        return thumb;
      } else if (typeof thumb === "string") {
        if (thumb.startsWith("blob:")) {
          const blob = yield fetch(thumb).then((r) => r.blob());
          const res = yield this.context.workspace().saveFile(blob, {
            visibility: "protected",
            application: this.getApplication()
          });
          return `/workspace/document/${res._id}`;
        } else {
          return thumb;
        }
      } else {
        const res = yield this.context.workspace().saveFile(thumb, {
          visibility: "protected",
          application: this.getApplication()
        });
        return `/workspace/document/${res._id}`;
      }
    });
  }
  toQueryParams(p) {
    let ret = {
      application: p.app,
      start_idx: p.pagination.startIdx,
      page_size: p.pagination.pageSize,
      resource_type: p.types[0],
      trashed: p.trashed
    };
    if (p.orders && Object.entries(p.orders).length) {
      const [[key, value]] = Object.entries(p.orders);
      ret.order_by = `${key}:${value}`;
    }
    if (p.filters) {
      Object.assign(ret, p.filters);
    }
    if (typeof p.search === "string") {
      ret.search = p.search;
    }
    return ret;
  }
  createFolderToBodyParams(p) {
    console.log("createFolderToBodyParams =", p);
    return {
      application: p.app,
      resourceType: p.type,
      parentId: p.parentId,
      name: p.name
    };
  }
  moveToBodyParams(p) {
    return {
      application: p.application,
      resourceType: this.getResourceType(),
      resourceIds: p.resourceIds,
      folderIds: p.folderIds
    };
  }
};
let ResourceService = _ResourceService;
__publicField(ResourceService, "registry", /* @__PURE__ */ new Map());
class BlogResourceService extends ResourceService {
  update(parameters) {
    return __async(this, null, function* () {
      const fixThumb = yield this.getThumbnailPath(parameters.thumbnail);
      const res = yield this.http.put(`/blog/${parameters.entId}`, {
        trashed: parameters.trashed,
        _id: parameters.entId,
        title: parameters.name,
        thumbnail: fixThumb,
        description: parameters.description,
        visibility: parameters.public ? "PUBLIC" : "OWNER",
        slug: parameters.public ? parameters.slug : "",
        "publish-type": parameters["publish-type"] || "RESTRAINT",
        "comment-type": "IMMEDIATE"
      });
      this.checkHttpResponse(res);
      return { thumbnail: fixThumb, entId: parameters.entId };
    });
  }
  getResourceType() {
    return RESOURCE.BLOG;
  }
  getApplication() {
    return APP.BLOG;
  }
  getFormUrl() {
    return `/blog#/edit/new`;
  }
  getViewUrl(resourceId) {
    return `/blog#/view/${resourceId}`;
  }
  getPrintUrl(resourceId, withComment) {
    return `/blog/print/blog#/print/${resourceId}?comments=${withComment || true}`;
  }
}
ResourceService.register(
  { application: RESOURCE.BLOG, resourceType: RESOURCE.BLOG },
  (context2) => new BlogResourceService(context2)
);
const globalCache = {};
const mutexPromise = {};
class CacheService {
  constructor(context2) {
    this.context = context2;
  }
  get http() {
    return this.context.http();
  }
  fromCacheIfPossible(key, task, shouldCache) {
    return __async(this, null, function* () {
      if (!!mutexPromise[key]) {
        yield mutexPromise[key];
      }
      if (globalCache[key]) {
        return globalCache[key];
      }
      try {
        const promise = task();
        mutexPromise[key] = promise;
        const res = yield promise;
        if (shouldCache(res)) {
          globalCache[key] = res;
        }
        return res;
      } catch (e) {
        console.error(`Failed to retrieve value for: ${key}`, e);
        throw e;
      }
    });
  }
  clearCache(key) {
    if (key) {
      delete globalCache[key];
    } else {
      for (const key2 in globalCache) {
        if (globalCache.hasOwnProperty(key2)) {
          delete globalCache[key2];
        }
      }
    }
  }
  httpGet(url, params2) {
    return __async(this, null, function* () {
      return this.fromCacheIfPossible(
        url,
        () => __async(this, null, function* () {
          const value = yield this.http.get(url, params2);
          const response = __spreadValues({}, this.http.latestResponse);
          return { value, response };
        }),
        ({ response }) => {
          if (response.status < 200 || response.status >= 300) {
            return false;
          } else {
            return true;
          }
        }
      );
    });
  }
  httpGetJson(url, params2) {
    return __async(this, null, function* () {
      const { response, value } = yield this.httpGet(url, params2);
      if (response.status < 200 || response.status >= 300) {
        throw `Bad http status (${response.status}) for url: ${url}`;
      } else {
        return value;
      }
    });
  }
}
class ConfService {
  constructor(context2) {
    this.context = context2;
  }
  get http() {
    return this.context.http();
  }
  get cdnDomain() {
    return configure.Platform.cdnDomain;
  }
  getConf(param) {
    return __async(this, null, function* () {
      const [conf, currentApp, theme, applications] = yield Promise.all([
        this.getThemeConf(),
        this.getWebAppConf(param),
        this.getTheme(),
        this.getApplicationsList()
      ]);
      yield configure.Platform.idiom.addBundlePromise("/i18n");
      return {
        conf,
        currentApp,
        theme,
        applications
      };
    });
  }
  getCdnUrl() {
    console.warn("[getCdnUrl] Not implemented yet");
    return void 0;
  }
  savePreference(key, value) {
    return __async(this, null, function* () {
      this.http.putJson(`/userbook/preference/${key}`, value);
    });
  }
  getPreference(key) {
    return __async(this, null, function* () {
      const res = yield this.http.get(
        `/userbook/preference/${key}`
      );
      return JSON.parse(res.preference);
    });
  }
  getThemeConf(version2) {
    return __async(this, null, function* () {
      const res = yield this.http.getScript(
        "/assets/theme-conf.js",
        { queryParams: { v: version2 } },
        "exports.conf"
      );
      return res;
    });
  }
  getApplicationsList() {
    return __async(this, null, function* () {
      const response = yield this.http.get(
        `/applications-list`
      );
      return response.apps;
    });
  }
  getWebAppConf(app) {
    return __async(this, null, function* () {
      const response = yield this.getApplicationsList();
      const find = response.find((item) => {
        if (item == null ? void 0 : item.prefix) {
          return (item == null ? void 0 : item.prefix.replace("/", "")) === app;
        }
      });
      return find;
    });
  }
  getTheme(version2) {
    return __async(this, null, function* () {
      const theme = yield this.http.get("/theme", {
        queryParams: { _: version2 }
      });
      const conf = yield this.getThemeConf();
      const skin = theme.themeName;
      const skins = conf == null ? void 0 : conf.overriding.find(
        (item) => item.child === skin
      ).skins;
      const bootstrapVersion = conf == null ? void 0 : conf.overriding.find(
        (item) => item.child === skin
      ).bootstrapVersion;
      const bootstrapPath = `${this.cdnDomain}/assets/themes/${bootstrapVersion}`;
      const bootstrapUrl = `${bootstrapPath}/skins/${theme.skinName}`;
      const is1d = (conf == null ? void 0 : conf.overriding.find((item) => item.child === skin).parent) === "panda";
      return {
        basePath: `${this.cdnDomain}${theme.skin}../../`,
        logoutCallback: theme.logoutCallback,
        skin: theme.skin.split("/assets/themes/")[1].split("/")[0],
        skinName: theme.skinName,
        skins,
        themeName: theme.themeName,
        themeUrl: theme.skin,
        bootstrapVersion,
        bootstrapPath,
        bootstrapUrl,
        is1d
      };
    });
  }
}
class DirectoryService {
  constructor(odeServices) {
    this.odeServices = odeServices;
  }
  get http() {
    return this.odeServices.http();
  }
  get cache() {
    return this.odeServices.cache();
  }
  getAvatarUrl(id, type2, size = "100x100") {
    return type2 === "user" ? `/userbook/avatar/${id}?thumbnail=${size}` : `/assets/img/illustrations/group-avatar.svg`;
  }
  getDirectoryUrl(id, type2) {
    return type2 === "user" ? `/userbook/annuaire#/${id}` : `/userbook/annuaire#/group-view/${id}`;
  }
  getBookMarks() {
    return __async(this, null, function* () {
      const all2 = yield this.cache.httpGetJson(
        `/directory/sharebookmark/all`
      );
      return all2.map(({ id, name: name2 }) => {
        return {
          id,
          displayName: name2,
          members: []
        };
      });
    });
  }
  getBookMarkById(idBookmark) {
    return __async(this, null, function* () {
      const { groups, id, name: name2, users } = yield this.http.get(
        `/directory/sharebookmark/${idBookmark}`
      );
      return {
        id,
        displayName: name2,
        groups: groups.map(({ name: name22, id: id2 }) => {
          return {
            displayName: name22,
            id: id2
          };
        }),
        users: users.map(({ displayName, id: id2, profile }) => {
          return {
            profile,
            displayName,
            firstName: "",
            lastName: "",
            login: "",
            id: id2
          };
        })
      };
    });
  }
  saveBookmarks(_0, _1) {
    return __async(this, arguments, function* (name2, {
      bookmarks,
      groups,
      users
    }) {
      this.cache.clearCache(`/directory/sharebookmark/all`);
      const userIds = users.map((user) => {
        return typeof user === "string" ? user : user.id;
      });
      const groupIds = groups.map((group) => {
        return typeof group === "string" ? group : group.id;
      });
      const bookmarkDetailPromises = bookmarks.map((bookmark) => __async(this, null, function* () {
        if (typeof bookmark === "string") {
          const { displayName, groups: groups2, id: id2, users: users2 } = yield this.getBookMarkById(
            bookmark
          );
          const usersId = users2.map((g) => g.id);
          const groupId = groups2.map((g) => g.id);
          const tmp = {
            displayName,
            id: id2,
            members: [...groupId, ...usersId]
          };
          return tmp;
        } else {
          return Promise.resolve(bookmark);
        }
      }));
      const bookmarDetails = yield Promise.all(bookmarkDetailPromises);
      const memberIds = bookmarDetails.map((bookmark) => {
        return bookmark.members;
      }).reduce((previous, current) => {
        return [...previous, ...current];
      }, []);
      const data = {
        name: name2,
        members: [...userIds, ...groupIds, ...memberIds]
      };
      const { id } = yield this.http.postJson(
        "/directory/sharebookmark",
        data
      );
      return {
        id,
        displayName: name2,
        members: data.members
      };
    });
  }
}
const loadedScripts = {};
class HttpService {
  constructor(context2, params2) {
    __publicField(this, "axios");
    __publicField(this, "_latestResponse");
    this.context = context2;
    this.axios = axios.create(params2);
  }
  setCdn(cdnUrl) {
    if (cdnUrl && XMLHttpRequest && !XMLHttpRequest.prototype["cdnUrl"]) {
      XMLHttpRequest.prototype["cdnUrl"] = cdnUrl;
      XMLHttpRequest.prototype.baseOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
        const url = arguments[1];
        if (url.startsWith("/infra/public")) {
          arguments[1] = cdnUrl + url;
        }
        const match2 = /^\/([^\/]*)\/public/.test(url);
        if (match2) {
          arguments[1] = cdnUrl + url;
        }
        if (url.startsWith("/assets")) {
          arguments[1] = cdnUrl + url;
        }
        if (url == "/conf/public") {
          arguments[1] = url;
        }
        if (url.startsWith("http")) {
          arguments[1] = url;
        }
        return this.baseOpen.apply(this, arguments);
      };
    }
  }
  toAxiosConfig(params2) {
    if (!params2) {
      return this.axios.defaults;
    } else {
      const p = Object.assign({}, this.axios.defaults);
      if (params2.headers) {
        p.headers = Object.assign({}, this.axios.defaults.headers);
        Object.assign(p.headers, params2.headers);
      }
      if (params2.responseType) {
        p.responseType = params2.responseType;
      }
      if (params2.queryParams) {
        p.params = Object.assign({}, params2.queryParams);
      }
      return p;
    }
  }
  toCdnUrl(url) {
    const CDN_DOMAIN = this.context.conf().getCdnUrl() || "";
    if (CDN_DOMAIN.length > 0 && url !== "/conf/public") {
      const originalURL = "" + url;
      if (originalURL.startsWith("/infra/public") || originalURL.startsWith("/assets")) {
        url = CDN_DOMAIN + originalURL;
      } else {
        const match2 = /^\/([^\/]*)\/public/.test(originalURL);
        if (match2) {
          url = CDN_DOMAIN + originalURL;
        }
      }
    }
    return url;
  }
  mapAxiosError(error, params2) {
    console.error("[HttpService]", error);
    if (error.response) {
      this._latestResponse = error.response;
    } else if (error.request) {
      this._latestResponse = {
        status: 408,
        statusText: ERROR_CODE.TIME_OUT
      };
    } else {
      this._latestResponse = {
        status: 500,
        statusText: ERROR_CODE.UNKNOWN
      };
    }
    if (!params2 || params2.disableNotifications === false)
      ;
    return this._latestResponse;
  }
  mapAxiosResponse(response, params2) {
    this._latestResponse = response;
    return response.data;
  }
  get latestResponse() {
    return this._latestResponse;
  }
  get(url, params2) {
    return __async(this, null, function* () {
      try {
        const r = yield this.axios.get(
          this.toCdnUrl(url),
          this.toAxiosConfig(params2)
        );
        return this.mapAxiosResponse(r, params2);
      } catch (e) {
        const result = this.mapAxiosError(e, params2);
        return result;
      }
    });
  }
  post(url, data, params2) {
    return __async(this, null, function* () {
      try {
        const r = yield this.axios.post(url, data, this.toAxiosConfig(params2));
        return this.mapAxiosResponse(r, params2);
      } catch (e) {
        const result_1 = this.mapAxiosError(e, params2);
        return result_1;
      }
    });
  }
  postFile(url, data, params2) {
    return __async(this, null, function* () {
      const p = this.toAxiosConfig(params2);
      if (p.headers["Content-Type"]) {
        delete p.headers["Content-Type"];
      }
      try {
        const r = yield this.axios.post(url, data, __spreadProps(__spreadValues({}, p), {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }));
        return this.mapAxiosResponse(r, params2);
      } catch (e) {
        const result = this.mapAxiosError(e, params2);
        return result;
      }
    });
  }
  postJson(url, json, params2) {
    return __async(this, null, function* () {
      const p = this.toAxiosConfig();
      p.headers["Content-Type"] = "application/json";
      try {
        const r = yield this.axios.post(url, json, this.toAxiosConfig(params2));
        return this.mapAxiosResponse(r, params2);
      } catch (e) {
        const result_1 = this.mapAxiosError(e, params2);
        return result_1;
      }
    });
  }
  put(url, data, params2) {
    return __async(this, null, function* () {
      try {
        const r = yield this.axios.put(url, data, this.toAxiosConfig(params2));
        return this.mapAxiosResponse(r, params2);
      } catch (e) {
        const result = this.mapAxiosError(e, params2);
        return result;
      }
    });
  }
  putFile(url, data, params2) {
    return __async(this, null, function* () {
      try {
        const p = this.toAxiosConfig(params2);
        if (p.headers["Content-Type"]) {
          delete p.headers["Content-Type"];
        }
        const res = yield this.axios.put(url, data, __spreadProps(__spreadValues({}, p), {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }));
        return this.mapAxiosResponse(res, params2);
      } catch (e) {
        const result = this.mapAxiosError(e, params2);
        return result;
      }
    });
  }
  putJson(url, json, params2) {
    return __async(this, null, function* () {
      const p = this.toAxiosConfig(params2);
      p.headers["Content-Type"] = "application/json";
      try {
        const r = yield this.axios.put(url, json, p);
        return this.mapAxiosResponse(r, params2);
      } catch (e) {
        const result = this.mapAxiosError(e, params2);
        return result;
      }
    });
  }
  delete(url, params2) {
    return __async(this, null, function* () {
      try {
        const r = yield this.axios.delete(url, this.toAxiosConfig(params2));
        return this.mapAxiosResponse(r, params2);
      } catch (e) {
        const result_1 = this.mapAxiosError(e, params2);
        return result_1;
      }
    });
  }
  deleteJson(url, json) {
    return __async(this, null, function* () {
      try {
        const r = yield this.axios.delete(url, { data: json });
        return this.mapAxiosResponse(r);
      } catch (e) {
        const result = this.mapAxiosError(e);
        return result;
      }
    });
  }
  getScript(url, params2, variableName) {
    const resultName = variableName != null ? variableName : "exports";
    const p = this.toAxiosConfig(params2);
    p.headers["Accept"] = "application/javascript";
    return this.axios.get(this.toCdnUrl(url), p).then((r) => this.mapAxiosResponse(r, params2)).then((r) => {
      try {
        const securedScript = `"use strict";var ${resultName.split(".")[0]}={};${r};return ${resultName};`;
        const result = Function(securedScript)();
        return result;
      } catch (e) {
        const result = r;
        return result;
      }
    }).catch((e) => {
      this.mapAxiosError(e, params2);
      throw e;
    });
  }
  loadScript(url, params2) {
    return loadedScripts[url] ? Promise.resolve() : this.getScript(url, params2).then((res) => {
      loadedScripts[url] = true;
    });
  }
}
class RightService {
  constructor(context2) {
    this.context = context2;
  }
  get session() {
    return this.context.session();
  }
  parseResourceRight(right) {
    const parts = right.split(":");
    if (parts.length === 2) {
      if (parts[0] === "creator") {
        return {
          id: parts[1],
          right: "creator",
          type: "creator"
        };
      }
    } else if (parts.length === 3) {
      return {
        id: parts[1],
        right: parts[2],
        type: parts[0]
      };
    } else {
      return void 0;
    }
  }
  parseResourceRights(rights) {
    const parsed = rights.map((right) => {
      return this.parseResourceRight(right);
    }).filter((right) => {
      return right !== void 0;
    });
    return parsed;
  }
  hasResourceRight({ id, groupIds }, expect2, rights) {
    const safeRights = rights.map((right) => {
      if (typeof right === "string") {
        return this.parseResourceRight(right);
      }
      return right;
    }).filter((right) => {
      return right !== void 0;
    });
    for (const right of safeRights) {
      if (right.id === id && right.type === "creator") {
        return true;
      } else if (right.id === id && right.type === "user" && right.right === expect2) {
        return true;
      } else if (groupIds.includes(right.id) && right.type === "group" && right.right === expect2) {
        return true;
      }
    }
    return false;
  }
  sessionHasResourceRight(expect2, rights) {
    return __async(this, null, function* () {
      try {
        const user = yield this.session.getUser();
        return !!user && this.hasResourceRight(
          { groupIds: user.groupsIds, id: user.userId },
          expect2,
          rights
        );
      } catch (e) {
        console.error(e);
        return false;
      }
    });
  }
  sessionHasAtLeastOneResourceRight(expects, rights) {
    return __async(this, null, function* () {
      for (const expect2 of expects) {
        const hasRight = yield this.sessionHasResourceRight(expect2, rights);
        if (hasRight) {
          return true;
        }
      }
      return false;
    });
  }
  sessionHasResourceRightForEachList(expect2, rightsArray) {
    return __async(this, null, function* () {
      let count = 0;
      for (const rights of rightsArray) {
        const hasRight = yield this.sessionHasResourceRight(expect2, rights);
        if (hasRight) {
          count++;
        }
      }
      if (count === rightsArray.length) {
        return true;
      }
      return false;
    });
  }
  sessionHasAtLeastOneResourceRightForEachList(expects, rightsArray) {
    return __async(this, null, function* () {
      for (const expect2 of expects) {
        let count = 0;
        for (const rights of rightsArray) {
          const hasRight = yield this.sessionHasResourceRight(expect2, rights);
          if (hasRight) {
            count++;
          }
        }
        if (count === rightsArray.length) {
          return true;
        }
      }
      return false;
    });
  }
  hasWorkflowRight(expect2, right) {
    return right.findIndex((workflowRight) => {
      return workflowRight === expect2;
    }) !== -1;
  }
  sessionHasWorkflowRight(expect2) {
    return __async(this, null, function* () {
      try {
        const user = yield this.session.getUser();
        return user && this.hasWorkflowRight(
          expect2,
          user.authorizedActions.map((e) => e.name)
        );
      } catch (e) {
        console.error(e);
        return false;
      }
    });
  }
}
class SessionService {
  constructor(context2) {
    this.context = context2;
  }
  get http() {
    return this.context.http();
  }
  get cache() {
    return this.context.cache();
  }
  onLogout() {
    this.cache.clearCache();
  }
  onRefreshSession() {
    this.cache.clearCache();
  }
  getSession() {
    return __async(this, null, function* () {
      const user = yield this.getUser();
      const [currentLanguage, quotaAndUsage, userDescription, userProfile] = yield Promise.all([
        this.getCurrentLanguage(user),
        this.latestQuotaAndUsage(user),
        this.loadDescription(user),
        this.getUserProfile()
      ]);
      return {
        user,
        quotaAndUsage,
        currentLanguage,
        userDescription,
        userProfile
      };
    });
  }
  login(email, password, rememberMe, secureLocation) {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    if (typeof rememberMe !== "undefined") {
      data.append("rememberMe", "" + rememberMe);
    }
    if (typeof secureLocation !== "undefined") {
      data.append("secureLocation", "" + secureLocation);
    }
    return this.http.post("/auth/login", data, {
      headers: { "content-type": "application/x-www-form-urlencoded" }
    }).finally(() => {
      switch (this.http.latestResponse.status) {
        case 200:
          throw ERROR_CODE.MALFORMED_DATA;
      }
    });
  }
  logout() {
    return this.http.get("/auth/logout").finally(() => {
    });
  }
  latestQuotaAndUsage(user) {
    return __async(this, null, function* () {
      try {
        const infos = yield this.http.get(
          `/workspace/quota/user/${user == null ? void 0 : user.userId}`
        );
        return infos;
      } catch (error) {
        console.error(error);
        return { quota: 0, storage: 0 };
      }
    });
  }
  getCurrentLanguage(user) {
    return __async(this, null, function* () {
      const isUserSignin = (user == null ? void 0 : user.sessionMetadata) && (user == null ? void 0 : user.sessionMetadata.userId);
      try {
        let response;
        if (isUserSignin) {
          response = yield this.loadUserLanguage();
        } else {
          response = yield this.loadDefaultLanguage();
        }
        return response;
      } catch (error) {
        console.error(error);
      }
    });
  }
  loadUserLanguage() {
    return __async(this, null, function* () {
      try {
        const response = yield this.http.get(
          "/userbook/preference/language"
        );
        return JSON.parse(response.preference)["default-domain"];
      } catch (error) {
        const response = yield this.loadDefaultLanguage();
        return response;
      }
    });
  }
  loadDefaultLanguage() {
    return __async(this, null, function* () {
      const response = yield this.cache.httpGetJson(
        "/locale"
      );
      return response.locale;
    });
  }
  getUser() {
    return __async(this, null, function* () {
      const { response, value } = yield this.cache.httpGet(
        "/auth/oauth2/userinfo"
      );
      if (response.status < 200 || response.status >= 300) {
        throw ERROR_CODE.NOT_LOGGED_IN;
      } else {
        return value;
      }
    });
  }
  loadDescription(user) {
    return __async(this, null, function* () {
      try {
        const [person, userbook] = yield Promise.all([
          this.http.get("/userbook/api/person", {
            requestName: "refreshAvatar"
          }),
          this.http.get("/directory/userbook/" + (user == null ? void 0 : user.userId))
        ]);
        return __spreadValues(__spreadValues({}, person.result[0]), userbook);
      } catch (error) {
        console.error(error);
        return {};
      }
    });
  }
  getUserProfile() {
    return __async(this, null, function* () {
      const person = yield this.http.get("/userbook/api/person");
      return person.result[0];
    });
  }
}
class StringUtils {
  static removeAccents(str) {
    for (var i2 = 0; i2 < defaultDiacriticsRemovalMap.length; i2++) {
      str = str.replace(
        defaultDiacriticsRemovalMap[i2].letters,
        defaultDiacriticsRemovalMap[i2].base
      );
    }
    return str;
  }
}
class ShareService {
  constructor(context2) {
    this.context = context2;
  }
  get directory() {
    return this.context.directory();
  }
  get http() {
    return this.context.http();
  }
  get cache() {
    return this.context.cache();
  }
  findUsers(_0, _1) {
    return __async(this, arguments, function* (searchText, {
      visibleBookmarks,
      visibleUsers,
      visibleGroups
    }) {
      const cleanSearchText = StringUtils.removeAccents(searchText).toLowerCase();
      const bookmarks = visibleBookmarks.filter(({ displayName }) => {
        const cleanName = StringUtils.removeAccents(
          displayName || ""
        ).toLowerCase();
        return cleanName.includes(cleanSearchText);
      }).map(({ id, displayName }) => {
        const share = {
          avatarUrl: "",
          directoryUrl: "",
          profile: "",
          displayName,
          id,
          type: "sharebookmark"
        };
        return share;
      });
      const groups = visibleGroups.filter(({ displayName }) => {
        const cleanName = StringUtils.removeAccents(
          displayName || ""
        ).toLowerCase();
        return cleanName.includes(cleanSearchText);
      }).map(({ id, displayName }) => {
        const share = {
          avatarUrl: this.directory.getAvatarUrl(id, "group"),
          directoryUrl: this.directory.getDirectoryUrl(id, "group"),
          displayName,
          id,
          type: "group"
        };
        return share;
      });
      const users = visibleUsers.filter(({ displayName, firstName: firstName2, lastName: lastName2, login: login2 }) => {
        const cleanLastName = StringUtils.removeAccents(
          lastName2 || ""
        ).toLowerCase();
        const cleanFirstName = StringUtils.removeAccents(
          firstName2 || ""
        ).toLowerCase();
        const cleanDisplayName = StringUtils.removeAccents(
          displayName || ""
        ).toLowerCase();
        const cleanLogin = StringUtils.removeAccents(login2 || "").toLowerCase();
        return cleanDisplayName.includes(cleanSearchText) || cleanFirstName.includes(cleanSearchText) || cleanLastName.includes(cleanSearchText) || cleanLogin.includes(cleanSearchText);
      }).map(({ id, displayName, profile }) => {
        const share = {
          avatarUrl: this.directory.getAvatarUrl(id, "user"),
          directoryUrl: this.directory.getDirectoryUrl(id, "user"),
          displayName,
          id,
          profile,
          type: "user"
        };
        return share;
      });
      return [...bookmarks, ...users, ...groups];
    });
  }
  getShareMapping(app) {
    return __async(this, null, function* () {
      const sharingMap = yield this.cache.httpGetJson(
        `/${app}/rights/sharing`
      );
      for (const key of Object.keys(sharingMap)) {
        if (key.includes(".")) {
          const newKey = key.split(".")[1];
          const value = sharingMap[key];
          delete sharingMap[key];
          sharingMap[newKey] = value;
        }
      }
      return sharingMap;
    });
  }
  getActionsAvailableFor({ id, type: type2 }, payload, mapping) {
    const usafeRights = type2 === "user" ? payload.users.checked[id] : payload.groups.checked[id];
    const rights = usafeRights || [];
    const actions2 = Object.keys(mapping);
    const actionAvailable = [];
    for (const action of actions2) {
      const rightsForAction = mapping[action];
      const intersection = rightsForAction.filter(
        (right) => rights.includes(right)
      );
      if (intersection.length > 0) {
        actionAvailable.push(action);
      }
    }
    return actionAvailable;
  }
  getRightsForResource(app, resourceId) {
    return __async(this, null, function* () {
      const visibleBookmarks = yield this.directory.getBookMarks();
      const url = this.context.resource(app, app).getShareReadUrl(resourceId);
      const rightsPayload = yield this.cache.httpGetJson(
        url
      );
      const sharingMap = yield this.getShareMapping(app);
      const sharingRights = yield this.cache.httpGetJson(
        "/infra/public/json/sharing-rights.json"
      );
      const userRights = Object.keys(rightsPayload.users.checked).map((userId2) => {
        const user = rightsPayload.users.visibles.find(
          (user2) => user2.id === userId2
        );
        return user;
      }).filter((user) => {
        return user !== void 0;
      }).map((user) => {
        const actions2 = this.getActionsAvailableFor(
          { id: user.id, type: "user" },
          rightsPayload,
          sharingMap
        );
        const right = {
          id: user.id,
          type: "user",
          displayName: user.username,
          profile: user.profile,
          avatarUrl: this.directory.getAvatarUrl(user.id, "user"),
          directoryUrl: this.directory.getDirectoryUrl(user.id, "user"),
          actions: actions2.map((action) => {
            const act = sharingRights[action];
            return {
              displayName: action,
              id: action,
              priority: act.priority
            };
          })
        };
        return right;
      }).sort((a, b) => {
        return (a.displayName || "").localeCompare(b.displayName);
      });
      const groupRights = Object.keys(rightsPayload.groups.checked).map((groupId) => {
        const group = rightsPayload.groups.visibles.find(
          (group2) => group2.id === groupId
        );
        return group;
      }).filter((group) => {
        return group !== void 0;
      }).map((group) => {
        const actions2 = this.getActionsAvailableFor(
          { id: group.id, type: "group" },
          rightsPayload,
          sharingMap
        );
        const right = {
          id: group.id,
          type: "group",
          displayName: group.name,
          profile: void 0,
          avatarUrl: this.directory.getAvatarUrl(group.id, "group"),
          directoryUrl: this.directory.getDirectoryUrl(group.id, "group"),
          actions: actions2.map((action) => {
            const act = sharingRights[action];
            return {
              displayName: action,
              id: action,
              priority: act.priority
            };
          })
        };
        return right;
      }).sort((a, b) => {
        return (a.displayName || "").localeCompare(b.displayName);
      });
      const rights = [...userRights, ...groupRights];
      const visibleGroups = rightsPayload.groups.visibles.map(
        ({ groupDisplayName, id, name: name2 }) => {
          const group = {
            displayName: groupDisplayName || name2,
            id
          };
          return group;
        }
      );
      const visibleUsers = rightsPayload.users.visibles.map(
        ({ id, profile, username: username2, firstName: firstName2, lastName: lastName2, login: login2 }) => {
          const user = {
            displayName: username2,
            firstName: firstName2,
            lastName: lastName2,
            login: login2,
            profile,
            id
          };
          return user;
        }
      );
      return {
        rights,
        visibleBookmarks,
        visibleGroups,
        visibleUsers
      };
    });
  }
  saveRights(app, resourceId, rights) {
    return __async(this, null, function* () {
      const mapping = yield this.getShareMapping(app);
      const payload = {
        bookmarks: {},
        groups: {},
        users: {}
      };
      for (const right of rights) {
        const rightWithDuplicates = right.actions.map((action) => {
          return mapping[action.id];
        }).reduce((previous, current) => {
          return [...previous, ...current];
        }, []);
        const rights2 = [...new Set(rightWithDuplicates)];
        if (rights2.length > 0) {
          if (right.type === "user") {
            payload.users[right.id] = rights2;
          } else if (right.type === "group") {
            payload.groups[right.id] = rights2;
          } else {
            payload.bookmarks[right.id] = rights2;
          }
        }
      }
      const resourceService = this.context.resource(app, app);
      const url = resourceService.getSaveShareUrl(resourceId);
      this.cache.clearCache(resourceService.getShareReadUrl(resourceId));
      const res = yield this.http.putJson(url, payload);
      return res;
    });
  }
  getActionsForApp(app) {
    return __async(this, null, function* () {
      const sharingRights = yield this.cache.httpGetJson(
        "/infra/public/json/sharing-rights.json"
      );
      const sharingMap = yield this.getShareMapping(app);
      const rightActions = Object.keys(sharingRights).map((key) => {
        const value = sharingRights[key];
        return {
          displayName: key,
          id: key,
          priority: value.priority
        };
      }).filter((right) => {
        var _a;
        if (((_a = sharingMap[right.id]) == null ? void 0 : _a.length) > 0) {
          return true;
        }
        return false;
      }).sort((a, b) => {
        return a.priority - b.priority;
      });
      return rightActions;
    });
  }
}
const _MimeTypeUtils = class {
  constructor() {
    __publicField(this, "wordExtensions", /* @__PURE__ */ new Set());
    __publicField(this, "excelExtensions", /* @__PURE__ */ new Set());
    __publicField(this, "pptExtensions", /* @__PURE__ */ new Set());
    __publicField(this, "fileExtensionMap", /* @__PURE__ */ new Map());
    __publicField(this, "csvContentType", /* @__PURE__ */ new Set());
    __publicField(this, "csvExtensions", /* @__PURE__ */ new Set());
    __publicField(this, "txtExtensions", /* @__PURE__ */ new Set());
    __publicField(this, "PDF", "application/pdf");
    __publicField(this, "OCTET_STREAM", "application/octet-stream");
    this.txtExtensions.add("txt");
    this.wordExtensions.add("doc");
    this.wordExtensions.add("dot");
    this.wordExtensions.add("docx");
    this.wordExtensions.add("dotx");
    this.wordExtensions.add("docm");
    this.wordExtensions.add("dotm");
    this.wordExtensions.add("odt");
    this.wordExtensions.add("ott");
    this.wordExtensions.add("oth");
    this.wordExtensions.add("odm");
    this.excelExtensions.add("xls");
    this.excelExtensions.add("xlt");
    this.excelExtensions.add("xla");
    this.excelExtensions.add("xlsx");
    this.excelExtensions.add("xltx");
    this.excelExtensions.add("xlsm");
    this.excelExtensions.add("xltm");
    this.excelExtensions.add("xlam");
    this.excelExtensions.add("xlsb");
    this.excelExtensions.add("ods");
    this.excelExtensions.add("ots");
    this.pptExtensions.add("ppt");
    this.pptExtensions.add("pot");
    this.pptExtensions.add("pps");
    this.pptExtensions.add("ppa");
    this.pptExtensions.add("pptx");
    this.pptExtensions.add("potx");
    this.pptExtensions.add("ppsx");
    this.pptExtensions.add("ppam");
    this.pptExtensions.add("pptm");
    this.pptExtensions.add("potm");
    this.pptExtensions.add("ppsm");
    this.pptExtensions.add("odp");
    this.pptExtensions.add("otp");
    this.csvExtensions.add("csv");
    this.fileExtensionMap.set("doc", "application/msword");
    this.fileExtensionMap.set("dot", "application/msword");
    this.fileExtensionMap.set(
      "docx",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    this.fileExtensionMap.set(
      "dotx",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
    );
    this.fileExtensionMap.set(
      "docm",
      "application/vnd.ms-word.document.macroEnabled.12"
    );
    this.fileExtensionMap.set(
      "dotm",
      "application/vnd.ms-word.template.macroEnabled.12"
    );
    this.fileExtensionMap.set("xls", "application/vnd.ms-excel");
    this.fileExtensionMap.set("xlt", "application/vnd.ms-excel");
    this.fileExtensionMap.set("xla", "application/vnd.ms-excel");
    this.fileExtensionMap.set(
      "xlsx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    this.fileExtensionMap.set(
      "xltx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
    );
    this.fileExtensionMap.set(
      "xlsm",
      "application/vnd.ms-excel.sheet.macroEnabled.12"
    );
    this.fileExtensionMap.set(
      "xltm",
      "application/vnd.ms-excel.template.macroEnabled.12"
    );
    this.fileExtensionMap.set(
      "xlam",
      "application/vnd.ms-excel.addin.macroEnabled.12"
    );
    this.fileExtensionMap.set(
      "xlsb",
      "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
    );
    this.fileExtensionMap.set("ppt", "application/vnd.ms-powerpoint");
    this.fileExtensionMap.set("pot", "application/vnd.ms-powerpoint");
    this.fileExtensionMap.set("pps", "application/vnd.ms-powerpoint");
    this.fileExtensionMap.set("ppa", "application/vnd.ms-powerpoint");
    this.fileExtensionMap.set(
      "pptx",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    );
    this.fileExtensionMap.set(
      "potx",
      "application/vnd.openxmlformats-officedocument.presentationml.template"
    );
    this.fileExtensionMap.set(
      "ppsx",
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
    );
    this.fileExtensionMap.set(
      "ppam",
      "application/vnd.ms-powerpoint.addin.macroEnabled.12"
    );
    this.fileExtensionMap.set(
      "pptm",
      "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
    );
    this.fileExtensionMap.set(
      "potm",
      "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
    );
    this.fileExtensionMap.set(
      "ppsm",
      "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
    );
    this.fileExtensionMap.set("odt", "application/vnd.oasis.opendocument.text");
    this.fileExtensionMap.set(
      "ott",
      "application/vnd.oasis.opendocument.text-template"
    );
    this.fileExtensionMap.set(
      "oth",
      "application/vnd.oasis.opendocument.text-web"
    );
    this.fileExtensionMap.set(
      "odm",
      "application/vnd.oasis.opendocument.text-master"
    );
    this.fileExtensionMap.set(
      "odg",
      "application/vnd.oasis.opendocument.graphics"
    );
    this.fileExtensionMap.set(
      "otg",
      "application/vnd.oasis.opendocument.graphics-template"
    );
    this.fileExtensionMap.set(
      "odp",
      "application/vnd.oasis.opendocument.presentation"
    );
    this.fileExtensionMap.set(
      "otp",
      "application/vnd.oasis.opendocument.presentation-template"
    );
    this.fileExtensionMap.set(
      "ods",
      "application/vnd.oasis.opendocument.spreadsheet"
    );
    this.fileExtensionMap.set(
      "ots",
      "application/vnd.oasis.opendocument.spreadsheet-template"
    );
    this.fileExtensionMap.set(
      "odc",
      "application/vnd.oasis.opendocument.chart"
    );
    this.fileExtensionMap.set(
      "odf",
      "application/vnd.oasis.opendocument.formula"
    );
    this.fileExtensionMap.set(
      "odb",
      "application/vnd.oasis.opendocument.database"
    );
    this.fileExtensionMap.set(
      "odi",
      "application/vnd.oasis.opendocument.image"
    );
    this.fileExtensionMap.set("oxt", "application/vnd.openofficeorg.extension");
    this.fileExtensionMap.set("txt", "text/plain");
    this.csvContentType.add("text/comma-separated-values");
    this.csvContentType.add("text/csv");
    this.csvContentType.add("application/csv");
  }
  getContentTypeForExtension(extension) {
    if (this.fileExtensionMap.has(extension)) {
      return this.fileExtensionMap.get(extension);
    }
    return void 0;
  }
  getExtensionForContentType(contentType) {
    for (const key of Array.from(this.fileExtensionMap.keys())) {
      const value = this.fileExtensionMap.get(key);
      if ((value || "").toLowerCase() == (contentType || "").toLowerCase()) {
        return key;
      }
    }
    return null;
  }
  isWordLike(contentType, originalExt) {
    const extension = this.getExtensionForContentType(contentType);
    if (extension) {
      return this.wordExtensions.has(extension);
    }
    if (contentType == this.OCTET_STREAM && originalExt) {
      return this.wordExtensions.has(originalExt);
    }
    return false;
  }
  isExcelLike(contentType, originalExt) {
    const extension = this.getExtensionForContentType(contentType);
    if (extension) {
      return this.excelExtensions.has(extension);
    }
    if (contentType == this.OCTET_STREAM && originalExt) {
      return this.excelExtensions.has(originalExt);
    }
    return false;
  }
  isCsvLike(contentType, originalExt) {
    const isCsv = this.csvContentType.has(contentType);
    if (isCsv) {
      return true;
    }
    if (contentType == this.OCTET_STREAM && originalExt) {
      return this.csvExtensions.has(originalExt);
    }
    return false;
  }
  isPowerpointLike(contentType, originalExt) {
    const extension = this.getExtensionForContentType(contentType);
    if (extension) {
      return this.pptExtensions.has(extension);
    }
    if (contentType == this.OCTET_STREAM && originalExt) {
      return this.pptExtensions.has(originalExt);
    }
    return false;
  }
  isTxtLike(contentType, originalExt) {
    const extension = this.getExtensionForContentType(contentType);
    if (extension) {
      return this.txtExtensions.has(extension);
    }
    if (contentType == this.OCTET_STREAM && originalExt) {
      return this.txtExtensions.has(originalExt);
    }
    return false;
  }
};
let MimeTypeUtils = _MimeTypeUtils;
__publicField(MimeTypeUtils, "INSTANCE", new _MimeTypeUtils());
class FileTypeUtils {
  static registerContentTypeToFileType(mapper) {
    this.fileTypes.push(mapper);
  }
  static getFileType(fileType, previewRole = false, extension) {
    extension && (extension = extension.trim());
    if (!fileType)
      return "unknown";
    if (!this.fileTypes) {
      console.warn("[Element.role] should not have emptyRoles", this);
    }
    for (let FileType of this.fileTypes || []) {
      const role = FileType(fileType, previewRole);
      if (role) {
        return role;
      }
    }
    const types = {
      csv: function(type2) {
        if (MimeTypeUtils.INSTANCE.isCsvLike(type2, extension)) {
          return true;
        }
        return false;
      },
      doc: function(type2) {
        if (MimeTypeUtils.INSTANCE.isWordLike(type2, extension)) {
          return true;
        }
        return type2.indexOf("document") !== -1 && type2.indexOf("wordprocessing") !== -1;
      },
      xls: function(type2) {
        if (MimeTypeUtils.INSTANCE.isExcelLike(type2, extension)) {
          return true;
        }
        return type2.indexOf("document") !== -1 && type2.indexOf("spreadsheet") !== -1 || type2.indexOf("ms-excel") !== -1;
      },
      img: function(type2) {
        return type2.indexOf("image") !== -1;
      },
      pdf: function(type2) {
        return type2.indexOf("pdf") !== -1 || type2 === "application/x-download";
      },
      ppt: function(type2) {
        if (MimeTypeUtils.INSTANCE.isPowerpointLike(type2, extension)) {
          return true;
        }
        return type2.indexOf("document") !== -1 && type2.indexOf("presentation") !== -1 || type2.indexOf("powerpoint") !== -1;
      },
      txt: function(type2) {
        return MimeTypeUtils.INSTANCE.isTxtLike(type2, extension);
      },
      video: function(type2) {
        return type2.indexOf("video") !== -1;
      },
      audio: function(type2) {
        return type2.indexOf("audio") !== -1;
      },
      zip: function(type2) {
        return type2.indexOf("zip") !== -1 || type2.indexOf("rar") !== -1 || type2.indexOf("tar") !== -1 || type2.indexOf("7z") !== -1;
      }
    };
    for (let type2 in types) {
      if (types[type2](fileType)) {
        return type2;
      }
    }
    return "unknown";
  }
}
__publicField(FileTypeUtils, "fileTypes", []);
class WorkspaceService {
  constructor(context2) {
    this.context = context2;
  }
  get http() {
    return this.context.http();
  }
  saveFile(file, params2) {
    return __async(this, null, function* () {
      const tmpName = file.name || "";
      const nameSplit = tmpName.split(".");
      const contentType = file.type || "application/octet-stream";
      const extension = nameSplit.length > 1 ? nameSplit[nameSplit.length - 1] : "";
      const metadata = {
        "content-type": contentType,
        filename: tmpName,
        size: file.size,
        extension,
        role: FileTypeUtils.getFileType(contentType, false, extension)
      };
      const name2 = tmpName.replace("." + metadata.extension, "");
      const fullname = metadata.extension ? name2 + "." + metadata.extension : name2;
      const formData = new FormData();
      formData.append("file", file, fullname);
      const args = [];
      if ((params2 == null ? void 0 : params2.visibility) === "public" || (params2 == null ? void 0 : params2.visibility) === "protected") {
        args.push(`${params2.visibility}=true`);
      }
      if (params2 == null ? void 0 : params2.application) {
        args.push(`application=${params2.application}`);
      }
      if (metadata.role === "img") {
        args.push(`quality=1`);
      }
      if (params2 == null ? void 0 : params2.parentId) {
        args.push(`parentId=${params2.parentId}`);
      }
      const res = yield this.http.postFile(
        `/workspace/document?${args.join("&")}`,
        formData
      );
      return res;
    });
  }
}
class OdeServices {
  constructor() {
    __publicField(this, "_cache");
    __publicField(this, "_conf");
    __publicField(this, "_directory");
    __publicField(this, "_http");
    __publicField(this, "_rights");
    __publicField(this, "_session");
    __publicField(this, "_share");
    __publicField(this, "_workspace");
    this._cache = new CacheService(this);
    this._conf = new ConfService(this);
    this._directory = new DirectoryService(this);
    this._http = new HttpService(this);
    this._rights = new RightService(this);
    this._session = new SessionService(this);
    this._share = new ShareService(this);
    this._workspace = new WorkspaceService(this);
  }
  cache() {
    return this._cache;
  }
  conf() {
    return this._conf;
  }
  directory() {
    return this._directory;
  }
  http() {
    return this._http;
  }
  resource(application, resourceType) {
    if (!resourceType) {
      return ResourceService.findMainService({ application }, this);
    }
    return ResourceService.findService({ application, resourceType }, this);
  }
  rights() {
    return this._rights;
  }
  session() {
    return this._session;
  }
  share() {
    return this._share;
  }
  workspace() {
    return this._workspace;
  }
}
new OdeServices();
const folders = [];
const filters = [];
const orders = [
  {
    id: "name",
    defaultValue: "asc",
    i18n: "fake.key.order.name.asc"
  }
];
const actions = [
  {
    id: "comment",
    available: false,
    workflow: ""
  },
  {
    id: "copy",
    available: false,
    workflow: ""
  },
  {
    id: "create",
    available: false,
    workflow: ""
  },
  {
    id: "delete",
    available: false,
    workflow: ""
  },
  {
    id: "export",
    available: false,
    workflow: ""
  },
  {
    id: "initialize",
    available: true,
    workflow: ""
  },
  {
    id: "manage",
    available: false,
    workflow: ""
  },
  {
    id: "move",
    available: false,
    workflow: ""
  },
  {
    id: "open",
    available: false,
    workflow: ""
  },
  {
    id: "print",
    available: false,
    workflow: ""
  },
  {
    id: "publish",
    available: false,
    workflow: ""
  },
  {
    id: "search",
    available: true,
    workflow: ""
  },
  {
    id: "share",
    available: false,
    workflow: ""
  }
];
const pagination = {
  startIdx: 0,
  maxIdx: 22,
  pageSize: 10
};
const resources = [];
const preferences = {
  view: "list"
};
const MockedContextData = {
  folders,
  filters,
  orders,
  actions,
  pagination,
  resources,
  preferences
};
const ContextData = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  folders,
  filters,
  orders,
  actions,
  pagination,
  resources,
  preferences,
  default: MockedContextData
}, Symbol.toStringTag, { value: "Module" }));
class MockedFolderAgent extends AbstractBusAgent {
  constructor() {
    super(RESOURCE.FOLDER);
    __publicField(this, "ctx", null);
    __publicField(this, "folders", { "default": {} });
    this.registerHandlers();
  }
  registerHandlers() {
    this.setHandler(ACTION.INITIALIZE, this.onInitialize);
    this.setHandler(ACTION.CREATE, this.onCreate);
    this.setHandler(ACTION.SEARCH, this.onSearch);
  }
  onInitialize(parameters) {
    return Promise.resolve().then(() => {
      return ContextData;
    }).then((ctx) => {
      return this.ctx = ctx;
    });
  }
  onCreate(parameters) {
    let newFolderId = "folder_" + Object.keys(this.folders).length;
    this.folders[newFolderId] = { id: newFolderId, name: parameters.name, type: "default", childNumber: 0, createAt: new Date().toUTCString() };
    return Promise.resolve().then(() => this.folders[newFolderId]);
  }
  onSearch(parameters) {
    throw new Error("Method not implemented.");
  }
}
class MockedAgentLoader {
  load(res) {
    switch (res) {
      case RESOURCE.FOLDER:
        new MockedFolderAgent();
        return Promise.resolve();
      default:
        throw new Error(`A mocked "${res}" agent cannot be found.`);
    }
  }
}
describe("Foundation", function() {
  var context2 = null;
  const explorer2 = ExplorerFrameworkFactory.instance();
  const userinfo2 = UserInfoData;
  var subscription;
  var latestResult = null;
  let getModel = () => {
    let model = context2 == null ? void 0 : context2.getContext();
    if (typeof model === "undefined")
      throw new Error("Context seems undefined.");
    return model;
  };
  it("should have mocked data", () => {
    expect(userinfo2.apps).toBeDefined();
  });
  it("should be available", () => {
    expect(explorer2).toBeDefined();
  });
  it("should get a valid context without throwing an error", () => {
    context2 = explorer2.createContext([RESOURCE.FOLDER], APP.BLOG);
    expect(context2).toBeDefined();
  });
  it("has a result flow to subscribe to", () => {
    subscription = context2 == null ? void 0 : context2.latestResources().subscribe({
      next: (result) => {
        latestResult = result.output;
        return "NEXT";
      },
      error: (err) => {
        throw new Error(`ERROR: ${err}`);
      },
      complete: () => "UNSUBSCRIBED"
    });
  });
  it("is using the context before initializing it, thus throwing an error.", () => {
    expect(context2 == null ? void 0 : context2.getContext()).not.toBeDefined;
  });
  it("is mocking the agents", () => {
    explorer2.setAgentLoader(new MockedAgentLoader());
  });
  it("should initialize a context", () => __async(this, null, function* () {
    const ctx = yield context2 == null ? void 0 : context2.initialize();
    expect(ctx).toBeDefined();
  }));
  it("should have received a resultset", () => {
    expect(latestResult).toEqual(getModel());
  });
  it("can unsubscribe to the result flow", () => {
    latestResult = null;
    expect(() => subscription == null ? void 0 : subscription.unsubscribe()).not.toThrowError();
  });
  it("should have access to folders of first level", () => {
    expect(getModel().folders).toBeInstanceOf(Array);
    expect(getModel().folders.length).toBe(0);
  });
  it("can create a top level folder.", () => __async(this, null, function* () {
    const result = yield context2 == null ? void 0 : context2.createFolder(RESOURCE.FOLDER, "default", "Root folder 1");
    expect(result).toBeDefined();
    expect(result == null ? void 0 : result.name).toBe("Root folder 1");
    if (!!result)
      getModel().folders.push(result);
  }));
  it("should have access to folders of first level", () => {
    expect(getModel().folders.length).toBe(1);
  });
});
