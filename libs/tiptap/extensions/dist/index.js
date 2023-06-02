function A(r) {
  this.content = r;
}
A.prototype = {
  constructor: A,
  find: function(r) {
    for (var t = 0; t < this.content.length; t += 2)
      if (this.content[t] === r)
        return t;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(r) {
    var t = this.find(r);
    return t == -1 ? void 0 : this.content[t + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(r, t, e) {
    var n = e && e != r ? this.remove(e) : this, i = n.find(r), s = n.content.slice();
    return i == -1 ? s.push(e || r, t) : (s[i + 1] = t, e && (s[i] = e)), new A(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(r) {
    var t = this.find(r);
    if (t == -1)
      return this;
    var e = this.content.slice();
    return e.splice(t, 2), new A(e);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(r, t) {
    return new A([r, t].concat(this.remove(r).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(r, t) {
    var e = this.remove(r).content.slice();
    return e.push(r, t), new A(e);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(r, t, e) {
    var n = this.remove(t), i = n.content.slice(), s = n.find(r);
    return i.splice(s == -1 ? i.length : s, 0, t, e), new A(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(r) {
    for (var t = 0; t < this.content.length; t += 2)
      r(this.content[t], this.content[t + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(r) {
    return r = A.from(r), r.size ? new A(r.content.concat(this.subtract(r).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(r) {
    return r = A.from(r), r.size ? new A(this.subtract(r).content.concat(r.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(r) {
    var t = this;
    r = A.from(r);
    for (var e = 0; e < r.content.length; e += 2)
      t = t.remove(r.content[e]);
    return t;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var r = {};
    return this.forEach(function(t, e) {
      r[t] = e;
    }), r;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
A.from = function(r) {
  if (r instanceof A)
    return r;
  var t = [];
  if (r)
    for (var e in r)
      t.push(e, r[e]);
  return new A(t);
};
function Pe(r, t, e) {
  for (let n = 0; ; n++) {
    if (n == r.childCount || n == t.childCount)
      return r.childCount == t.childCount ? null : e;
    let i = r.child(n), s = t.child(n);
    if (i == s) {
      e += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return e;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        e++;
      return e;
    }
    if (i.content.size || s.content.size) {
      let o = Pe(i.content, s.content, e + 1);
      if (o != null)
        return o;
    }
    e += i.nodeSize;
  }
}
function De(r, t, e, n) {
  for (let i = r.childCount, s = t.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: e, b: n };
    let o = r.child(--i), l = t.child(--s), a = o.nodeSize;
    if (o == l) {
      e -= a, n -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: e, b: n };
    if (o.isText && o.text != l.text) {
      let c = 0, f = Math.min(o.text.length, l.text.length);
      for (; c < f && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, e--, n--;
      return { a: e, b: n };
    }
    if (o.content.size || l.content.size) {
      let c = De(o.content, l.content, e - 1, n - 1);
      if (c)
        return c;
    }
    e -= a, n -= a;
  }
}
class g {
  /**
  @internal
  */
  constructor(t, e) {
    if (this.content = t, this.size = e || 0, e == null)
      for (let n = 0; n < t.length; n++)
        this.size += t[n].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(t, e, n, i = 0, s) {
    for (let o = 0, l = 0; l < e; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > t && n(a, i + l, s || null, o) !== !1 && a.content.size) {
        let f = l + 1;
        a.nodesBetween(Math.max(0, t - f), Math.min(a.content.size, e - f), n, i + f);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(t) {
    this.nodesBetween(0, this.size, t);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(t, e, n, i) {
    let s = "", o = !0;
    return this.nodesBetween(t, e, (l, a) => {
      l.isText ? (s += l.text.slice(Math.max(t, a) - a, e - a), o = !n) : l.isLeaf ? (i ? s += typeof i == "function" ? i(l) : i : l.type.spec.leafText && (s += l.type.spec.leafText(l)), o = !n) : !o && l.isBlock && (s += n, o = !0);
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(t) {
    if (!t.size)
      return this;
    if (!this.size)
      return t;
    let e = this.lastChild, n = t.firstChild, i = this.content.slice(), s = 0;
    for (e.isText && e.sameMarkup(n) && (i[i.length - 1] = e.withText(e.text + n.text), s = 1); s < t.content.length; s++)
      i.push(t.content[s]);
    return new g(i, this.size + t.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(t, e = this.size) {
    if (t == 0 && e == this.size)
      return this;
    let n = [], i = 0;
    if (e > t)
      for (let s = 0, o = 0; o < e; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > t && ((o < t || a > e) && (l.isText ? l = l.cut(Math.max(0, t - o), Math.min(l.text.length, e - o)) : l = l.cut(Math.max(0, t - o - 1), Math.min(l.content.size, e - o - 1))), n.push(l), i += l.nodeSize), o = a;
      }
    return new g(n, i);
  }
  /**
  @internal
  */
  cutByIndex(t, e) {
    return t == e ? g.empty : t == 0 && e == this.content.length ? this : new g(this.content.slice(t, e));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(t, e) {
    let n = this.content[t];
    if (n == e)
      return this;
    let i = this.content.slice(), s = this.size + e.nodeSize - n.nodeSize;
    return i[t] = e, new g(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(t) {
    return new g([t].concat(this.content), this.size + t.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(t) {
    return new g(this.content.concat(t), this.size + t.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(t) {
    if (this.content.length != t.content.length)
      return !1;
    for (let e = 0; e < this.content.length; e++)
      if (!this.content[e].eq(t.content[e]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(t) {
    let e = this.content[t];
    if (!e)
      throw new RangeError("Index " + t + " out of range for " + this);
    return e;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(t) {
    return this.content[t] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(t) {
    for (let e = 0, n = 0; e < this.content.length; e++) {
      let i = this.content[e];
      t(i, n, e), n += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(t, e = 0) {
    return Pe(this, t, e);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(t, e = this.size, n = t.size) {
    return De(this, t, e, n);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(t, e = -1) {
    if (t == 0)
      return gt(0, t);
    if (t == this.size)
      return gt(this.content.length, t);
    if (t > this.size || t < 0)
      throw new RangeError(`Position ${t} outside of fragment (${this})`);
    for (let n = 0, i = 0; ; n++) {
      let s = this.child(n), o = i + s.nodeSize;
      if (o >= t)
        return o == t || e > 0 ? gt(n + 1, o) : gt(n, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((t) => t.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(t, e) {
    if (!e)
      return g.empty;
    if (!Array.isArray(e))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new g(e.map(t.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(t) {
    if (!t.length)
      return g.empty;
    let e, n = 0;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      n += s.nodeSize, i && s.isText && t[i - 1].sameMarkup(s) ? (e || (e = t.slice(0, i)), e[e.length - 1] = s.withText(e[e.length - 1].text + s.text)) : e && e.push(s);
    }
    return new g(e || t, n);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(t) {
    if (!t)
      return g.empty;
    if (t instanceof g)
      return t;
    if (Array.isArray(t))
      return this.fromArray(t);
    if (t.attrs)
      return new g([t], t.nodeSize);
    throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
g.empty = new g([], 0);
const Dt = { index: 0, offset: 0 };
function gt(r, t) {
  return Dt.index = r, Dt.offset = t, Dt;
}
function St(r, t) {
  if (r === t)
    return !0;
  if (!(r && typeof r == "object") || !(t && typeof t == "object"))
    return !1;
  let e = Array.isArray(r);
  if (Array.isArray(t) != e)
    return !1;
  if (e) {
    if (r.length != t.length)
      return !1;
    for (let n = 0; n < r.length; n++)
      if (!St(r[n], t[n]))
        return !1;
  } else {
    for (let n in r)
      if (!(n in t) || !St(r[n], t[n]))
        return !1;
    for (let n in t)
      if (!(n in r))
        return !1;
  }
  return !0;
}
let v = class _t {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.attrs = e;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(t) {
    let e, n = !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      if (this.eq(s))
        return t;
      if (this.type.excludes(s.type))
        e || (e = t.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return t;
        !n && s.type.rank > this.type.rank && (e || (e = t.slice(0, i)), e.push(this), n = !0), e && e.push(s);
      }
    }
    return e || (e = t.slice()), n || e.push(this), e;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(t) {
    for (let e = 0; e < t.length; e++)
      if (this.eq(t[e]))
        return t.slice(0, e).concat(t.slice(e + 1));
    return t;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(t) {
    for (let e = 0; e < t.length; e++)
      if (this.eq(t[e]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(t) {
    return this == t || this.type == t.type && St(this.attrs, t.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let t = { type: this.type.name };
    for (let e in this.attrs) {
      t.attrs = this.attrs;
      break;
    }
    return t;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(t, e) {
    if (!e)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let n = t.marks[e.type];
    if (!n)
      throw new RangeError(`There is no mark type ${e.type} in this schema`);
    return n.create(e.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(t, e) {
    if (t == e)
      return !0;
    if (t.length != e.length)
      return !1;
    for (let n = 0; n < t.length; n++)
      if (!t[n].eq(e[n]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(t) {
    if (!t || Array.isArray(t) && t.length == 0)
      return _t.none;
    if (t instanceof _t)
      return [t];
    let e = t.slice();
    return e.sort((n, i) => n.type.rank - i.type.rank), e;
  }
};
v.none = [];
class bt extends Error {
}
class x {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(t, e, n) {
    this.content = t, this.openStart = e, this.openEnd = n;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(t, e) {
    let n = Le(this.content, t + this.openStart, e);
    return n && new x(n, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(t, e) {
    return new x(Je(this.content, t + this.openStart, e + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(t) {
    return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let t = { content: this.content.toJSON() };
    return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(t, e) {
    if (!e)
      return x.empty;
    let n = e.openStart || 0, i = e.openEnd || 0;
    if (typeof n != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new x(g.fromJSON(t, e.content), n, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(t, e = !0) {
    let n = 0, i = 0;
    for (let s = t.firstChild; s && !s.isLeaf && (e || !s.type.spec.isolating); s = s.firstChild)
      n++;
    for (let s = t.lastChild; s && !s.isLeaf && (e || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new x(t, n, i);
  }
}
x.empty = new x(g.empty, 0, 0);
function Je(r, t, e) {
  let { index: n, offset: i } = r.findIndex(t), s = r.maybeChild(n), { index: o, offset: l } = r.findIndex(e);
  if (i == t || s.isText) {
    if (l != e && !r.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return r.cut(0, t).append(r.cut(e));
  }
  if (n != o)
    throw new RangeError("Removing non-flat range");
  return r.replaceChild(n, s.copy(Je(s.content, t - i - 1, e - i - 1)));
}
function Le(r, t, e, n) {
  let { index: i, offset: s } = r.findIndex(t), o = r.maybeChild(i);
  if (s == t || o.isText)
    return n && !n.canReplace(i, i, e) ? null : r.cut(0, t).append(e).append(r.cut(t));
  let l = Le(o.content, t - s - 1, e);
  return l && r.replaceChild(i, o.copy(l));
}
function bn(r, t, e) {
  if (e.openStart > r.depth)
    throw new bt("Inserted content deeper than insertion position");
  if (r.depth - e.openStart != t.depth - e.openEnd)
    throw new bt("Inconsistent open depths");
  return je(r, t, e, 0);
}
function je(r, t, e, n) {
  let i = r.index(n), s = r.node(n);
  if (i == t.index(n) && n < r.depth - e.openStart) {
    let o = je(r, t, e, n + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (e.content.size)
    if (!e.openStart && !e.openEnd && r.depth == n && t.depth == n) {
      let o = r.parent, l = o.content;
      return Y(o, l.cut(0, r.parentOffset).append(e.content).append(l.cut(t.parentOffset)));
    } else {
      let { start: o, end: l } = Mn(e, r);
      return Y(s, We(r, o, l, t, n));
    }
  else
    return Y(s, Mt(r, t, n));
}
function $e(r, t) {
  if (!t.type.compatibleContent(r.type))
    throw new bt("Cannot join " + t.type.name + " onto " + r.type.name);
}
function te(r, t, e) {
  let n = r.node(e);
  return $e(n, t.node(e)), n;
}
function X(r, t) {
  let e = t.length - 1;
  e >= 0 && r.isText && r.sameMarkup(t[e]) ? t[e] = r.withText(t[e].text + r.text) : t.push(r);
}
function at(r, t, e, n) {
  let i = (t || r).node(e), s = 0, o = t ? t.index(e) : i.childCount;
  r && (s = r.index(e), r.depth > e ? s++ : r.textOffset && (X(r.nodeAfter, n), s++));
  for (let l = s; l < o; l++)
    X(i.child(l), n);
  t && t.depth == e && t.textOffset && X(t.nodeBefore, n);
}
function Y(r, t) {
  return r.type.checkContent(t), r.copy(t);
}
function We(r, t, e, n, i) {
  let s = r.depth > i && te(r, t, i + 1), o = n.depth > i && te(e, n, i + 1), l = [];
  return at(null, r, i, l), s && o && t.index(i) == e.index(i) ? ($e(s, o), X(Y(s, We(r, t, e, n, i + 1)), l)) : (s && X(Y(s, Mt(r, t, i + 1)), l), at(t, e, i, l), o && X(Y(o, Mt(e, n, i + 1)), l)), at(n, null, i, l), new g(l);
}
function Mt(r, t, e) {
  let n = [];
  if (at(null, r, e, n), r.depth > e) {
    let i = te(r, t, e + 1);
    X(Y(i, Mt(r, t, e + 1)), n);
  }
  return at(t, null, e, n), new g(n);
}
function Mn(r, t) {
  let e = t.depth - r.openStart, i = t.node(e).copy(r.content);
  for (let s = e - 1; s >= 0; s--)
    i = t.node(s).copy(g.from(i));
  return {
    start: i.resolveNoCache(r.openStart + e),
    end: i.resolveNoCache(i.content.size - r.openEnd - e)
  };
}
class ut {
  /**
  @internal
  */
  constructor(t, e, n) {
    this.pos = t, this.path = e, this.parentOffset = n, this.depth = e.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(t) {
    return t == null ? this.depth : t < 0 ? this.depth + t : t;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(t) {
    return this.path[this.resolveDepth(t) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(t) {
    return this.path[this.resolveDepth(t) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(t) {
    return t = this.resolveDepth(t), this.index(t) + (t == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(t) {
    return t = this.resolveDepth(t), t == 0 ? 0 : this.path[t * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(t) {
    return t = this.resolveDepth(t), this.start(t) + this.node(t).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(t) {
    if (t = this.resolveDepth(t), !t)
      throw new RangeError("There is no position before the top-level node");
    return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(t) {
    if (t = this.resolveDepth(t), !t)
      throw new RangeError("There is no position after the top-level node");
    return t == this.depth + 1 ? this.pos : this.path[t * 3 - 1] + this.path[t * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let t = this.parent, e = this.index(this.depth);
    if (e == t.childCount)
      return null;
    let n = this.pos - this.path[this.path.length - 1], i = t.child(e);
    return n ? t.child(e).cut(n) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let t = this.index(this.depth), e = this.pos - this.path[this.path.length - 1];
    return e ? this.parent.child(t).cut(0, e) : t == 0 ? null : this.parent.child(t - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(t, e) {
    e = this.resolveDepth(e);
    let n = this.path[e * 3], i = e == 0 ? 0 : this.path[e * 3 - 1] + 1;
    for (let s = 0; s < t; s++)
      i += n.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let t = this.parent, e = this.index();
    if (t.content.size == 0)
      return v.none;
    if (this.textOffset)
      return t.child(e).marks;
    let n = t.maybeChild(e - 1), i = t.maybeChild(e);
    if (!n) {
      let l = n;
      n = i, i = l;
    }
    let s = n.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(t) {
    let e = this.parent.maybeChild(this.index());
    if (!e || !e.isInline)
      return null;
    let n = e.marks, i = t.parent.maybeChild(t.index());
    for (var s = 0; s < n.length; s++)
      n[s].type.spec.inclusive === !1 && (!i || !n[s].isInSet(i.marks)) && (n = n[s--].removeFromSet(n));
    return n;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(t) {
    for (let e = this.depth; e > 0; e--)
      if (this.start(e) <= t && this.end(e) >= t)
        return e;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(t = this, e) {
    if (t.pos < this.pos)
      return t.blockRange(this);
    for (let n = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); n >= 0; n--)
      if (t.pos <= this.end(n) && (!e || e(this.node(n))))
        return new vt(this, t, n);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(t) {
    return this.pos - this.parentOffset == t.pos - t.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(t) {
    return t.pos > this.pos ? t : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(t) {
    return t.pos < this.pos ? t : this;
  }
  /**
  @internal
  */
  toString() {
    let t = "";
    for (let e = 1; e <= this.depth; e++)
      t += (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
    return t + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(t, e) {
    if (!(e >= 0 && e <= t.content.size))
      throw new RangeError("Position " + e + " out of range");
    let n = [], i = 0, s = e;
    for (let o = t; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (n.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new ut(e, n, s);
  }
  /**
  @internal
  */
  static resolveCached(t, e) {
    for (let i = 0; i < Jt.length; i++) {
      let s = Jt[i];
      if (s.pos == e && s.doc == t)
        return s;
    }
    let n = Jt[Lt] = ut.resolve(t, e);
    return Lt = (Lt + 1) % vn, n;
  }
}
let Jt = [], Lt = 0, vn = 12;
class vt {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(t, e, n) {
    this.$from = t, this.$to = e, this.depth = n;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const En = /* @__PURE__ */ Object.create(null);
class J {
  /**
  @internal
  */
  constructor(t, e, n, i = v.none) {
    this.type = t, this.attrs = e, this.marks = i, this.content = n || g.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(t) {
    return this.content.child(t);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(t) {
    return this.content.maybeChild(t);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(t) {
    this.content.forEach(t);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(t, e, n, i = 0) {
    this.content.nodesBetween(t, e, n, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(t) {
    this.nodesBetween(0, this.content.size, t);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(t, e, n, i) {
    return this.content.textBetween(t, e, n, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(t) {
    return this == t || this.sameMarkup(t) && this.content.eq(t.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(t) {
    return this.hasMarkup(t.type, t.attrs, t.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(t, e, n) {
    return this.type == t && St(this.attrs, e || t.defaultAttrs || En) && v.sameSet(this.marks, n || v.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(t = null) {
    return t == this.content ? this : new J(this.type, this.attrs, t, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(t) {
    return t == this.marks ? this : new J(this.type, this.attrs, this.content, t);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(t, e = this.content.size) {
    return t == 0 && e == this.content.size ? this : this.copy(this.content.cut(t, e));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(t, e = this.content.size, n = !1) {
    if (t == e)
      return x.empty;
    let i = this.resolve(t), s = this.resolve(e), o = n ? 0 : i.sharedDepth(e), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new x(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(t, e, n) {
    return bn(this.resolve(t), this.resolve(e), n);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(t) {
    for (let e = this; ; ) {
      let { index: n, offset: i } = e.content.findIndex(t);
      if (e = e.maybeChild(n), !e)
        return null;
      if (i == t || e.isText)
        return e;
      t -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(t) {
    let { index: e, offset: n } = this.content.findIndex(t);
    return { node: this.content.maybeChild(e), index: e, offset: n };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(t) {
    if (t == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: e, offset: n } = this.content.findIndex(t);
    if (n < t)
      return { node: this.content.child(e), index: e, offset: n };
    let i = this.content.child(e - 1);
    return { node: i, index: e - 1, offset: n - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(t) {
    return ut.resolveCached(this, t);
  }
  /**
  @internal
  */
  resolveNoCache(t) {
    return ut.resolve(this, t);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(t, e, n) {
    let i = !1;
    return e > t && this.nodesBetween(t, e, (s) => (n.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let t = this.type.name;
    return this.content.size && (t += "(" + this.content.toStringInner() + ")"), Ve(this.marks, t);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(t) {
    let e = this.type.contentMatch.matchFragment(this.content, 0, t);
    if (!e)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return e;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(t, e, n = g.empty, i = 0, s = n.childCount) {
    let o = this.contentMatchAt(t).matchFragment(n, i, s), l = o && o.matchFragment(this.content, e);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(n.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(t, e, n, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(t).matchType(n), o = s && s.matchFragment(this.content, e);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(t) {
    return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let t = v.none;
    for (let e = 0; e < this.marks.length; e++)
      t = this.marks[e].addToSet(t);
    if (!v.sameSet(t, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
    this.content.forEach((e) => e.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let t = { type: this.type.name };
    for (let e in this.attrs) {
      t.attrs = this.attrs;
      break;
    }
    return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map((e) => e.toJSON())), t;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(t, e) {
    if (!e)
      throw new RangeError("Invalid input for Node.fromJSON");
    let n = null;
    if (e.marks) {
      if (!Array.isArray(e.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      n = e.marks.map(t.markFromJSON);
    }
    if (e.type == "text") {
      if (typeof e.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return t.text(e.text, n);
    }
    let i = g.fromJSON(t, e.content);
    return t.nodeType(e.type).create(e.attrs, i, n);
  }
}
J.prototype.text = void 0;
class Et extends J {
  /**
  @internal
  */
  constructor(t, e, n, i) {
    if (super(t, e, null, i), !n)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ve(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(t, e) {
    return this.text.slice(t, e);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(t) {
    return t == this.marks ? this : new Et(this.type, this.attrs, this.text, t);
  }
  withText(t) {
    return t == this.text ? this : new Et(this.type, this.attrs, t, this.marks);
  }
  cut(t = 0, e = this.text.length) {
    return t == 0 && e == this.text.length ? this : this.withText(this.text.slice(t, e));
  }
  eq(t) {
    return this.sameMarkup(t) && this.text == t.text;
  }
  toJSON() {
    let t = super.toJSON();
    return t.text = this.text, t;
  }
}
function Ve(r, t) {
  for (let e = r.length - 1; e >= 0; e--)
    t = r[e].type.name + "(" + t + ")";
  return t;
}
class Z {
  /**
  @internal
  */
  constructor(t) {
    this.validEnd = t, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(t, e) {
    let n = new Cn(t, e);
    if (n.next == null)
      return Z.empty;
    let i = qe(n);
    n.next && n.err("Unexpected trailing text");
    let s = Rn(zn(i));
    return Fn(s, n), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(t) {
    for (let e = 0; e < this.next.length; e++)
      if (this.next[e].type == t)
        return this.next[e].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(t, e = 0, n = t.childCount) {
    let i = this;
    for (let s = e; i && s < n; s++)
      i = i.matchType(t.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let t = 0; t < this.next.length; t++) {
      let { type: e } = this.next[t];
      if (!(e.isText || e.hasRequiredAttrs()))
        return e;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(t) {
    for (let e = 0; e < this.next.length; e++)
      for (let n = 0; n < t.next.length; n++)
        if (this.next[e].type == t.next[n].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(t, e = !1, n = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(t, n);
      if (a && (!e || a.validEnd))
        return g.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: f, next: u } = o.next[c];
        if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let h = s(u, l.concat(f));
          if (h)
            return h;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(t) {
    for (let n = 0; n < this.wrapCache.length; n += 2)
      if (this.wrapCache[n] == t)
        return this.wrapCache[n + 1];
    let e = this.computeWrapping(t);
    return this.wrapCache.push(t, e), e;
  }
  /**
  @internal
  */
  computeWrapping(t) {
    let e = /* @__PURE__ */ Object.create(null), n = [{ match: this, type: null, via: null }];
    for (; n.length; ) {
      let i = n.shift(), s = i.match;
      if (s.matchType(t)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in e) && (!i.type || a.validEnd) && (n.push({ match: l.contentMatch, type: l, via: i }), e[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(t) {
    if (t >= this.next.length)
      throw new RangeError(`There's no ${t}th edge in this content match`);
    return this.next[t];
  }
  /**
  @internal
  */
  toString() {
    let t = [];
    function e(n) {
      t.push(n);
      for (let i = 0; i < n.next.length; i++)
        t.indexOf(n.next[i].next) == -1 && e(n.next[i].next);
    }
    return e(this), t.map((n, i) => {
      let s = i + (n.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < n.next.length; o++)
        s += (o ? ", " : "") + n.next[o].type.name + "->" + t.indexOf(n.next[o].next);
      return s;
    }).join(`
`);
  }
}
Z.empty = new Z(!0);
class Cn {
  constructor(t, e) {
    this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(t) {
    return this.next == t && (this.pos++ || !0);
  }
  err(t) {
    throw new SyntaxError(t + " (in content expression '" + this.string + "')");
  }
}
function qe(r) {
  let t = [];
  do
    t.push(Tn(r));
  while (r.eat("|"));
  return t.length == 1 ? t[0] : { type: "choice", exprs: t };
}
function Tn(r) {
  let t = [];
  do
    t.push(On(r));
  while (r.next && r.next != ")" && r.next != "|");
  return t.length == 1 ? t[0] : { type: "seq", exprs: t };
}
function On(r) {
  let t = Nn(r);
  for (; ; )
    if (r.eat("+"))
      t = { type: "plus", expr: t };
    else if (r.eat("*"))
      t = { type: "star", expr: t };
    else if (r.eat("?"))
      t = { type: "opt", expr: t };
    else if (r.eat("{"))
      t = An(r, t);
    else
      break;
  return t;
}
function pe(r) {
  /\D/.test(r.next) && r.err("Expected number, got '" + r.next + "'");
  let t = Number(r.next);
  return r.pos++, t;
}
function An(r, t) {
  let e = pe(r), n = e;
  return r.eat(",") && (r.next != "}" ? n = pe(r) : n = -1), r.eat("}") || r.err("Unclosed braced range"), { type: "range", min: e, max: n, expr: t };
}
function In(r, t) {
  let e = r.nodeTypes, n = e[t];
  if (n)
    return [n];
  let i = [];
  for (let s in e) {
    let o = e[s];
    o.groups.indexOf(t) > -1 && i.push(o);
  }
  return i.length == 0 && r.err("No node type or group '" + t + "' found"), i;
}
function Nn(r) {
  if (r.eat("(")) {
    let t = qe(r);
    return r.eat(")") || r.err("Missing closing paren"), t;
  } else if (/\W/.test(r.next))
    r.err("Unexpected token '" + r.next + "'");
  else {
    let t = In(r, r.next).map((e) => (r.inline == null ? r.inline = e.isInline : r.inline != e.isInline && r.err("Mixing inline and block content"), { type: "name", value: e }));
    return r.pos++, t.length == 1 ? t[0] : { type: "choice", exprs: t };
  }
}
function zn(r) {
  let t = [[]];
  return i(s(r, 0), e()), t;
  function e() {
    return t.push([]) - 1;
  }
  function n(o, l, a) {
    let c = { term: a, to: l };
    return t[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = e());
      }
    else if (o.type == "star") {
      let a = e();
      return n(l, a), i(s(o.expr, a), a), [n(a)];
    } else if (o.type == "plus") {
      let a = e();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [n(a)];
    } else {
      if (o.type == "opt")
        return [n(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let f = e();
          i(s(o.expr, a), f), a = f;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let f = e();
            n(a, f), i(s(o.expr, a), f), a = f;
          }
        return [n(a)];
      } else {
        if (o.type == "name")
          return [n(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function He(r, t) {
  return t - r;
}
function me(r, t) {
  let e = [];
  return n(t), e.sort(He);
  function n(i) {
    let s = r[i];
    if (s.length == 1 && !s[0].term)
      return n(s[0].to);
    e.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && e.indexOf(a) == -1 && n(a);
    }
  }
}
function Rn(r) {
  let t = /* @__PURE__ */ Object.create(null);
  return e(me(r, 0));
  function e(n) {
    let i = [];
    n.forEach((o) => {
      r[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let f = 0; f < i.length; f++)
          i[f][0] == l && (c = i[f][1]);
        me(r, a).forEach((f) => {
          c || i.push([l, c = []]), c.indexOf(f) == -1 && c.push(f);
        });
      });
    });
    let s = t[n.join(",")] = new Z(n.indexOf(r.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(He);
      s.next.push({ type: i[o][0], next: t[l.join(",")] || e(l) });
    }
    return s;
  }
}
function Fn(r, t) {
  for (let e = 0, n = [r]; e < n.length; e++) {
    let i = n[e], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), n.indexOf(c) == -1 && n.push(c);
    }
    s && t.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Ke(r) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in r) {
    let n = r[e];
    if (!n.hasDefault)
      return null;
    t[e] = n.default;
  }
  return t;
}
function Ue(r, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in r) {
    let i = t && t[n];
    if (i === void 0) {
      let s = r[n];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + n);
    }
    e[n] = i;
  }
  return e;
}
function Ge(r) {
  let t = /* @__PURE__ */ Object.create(null);
  if (r)
    for (let e in r)
      t[e] = new Bn(r[e]);
  return t;
}
class Ct {
  /**
  @internal
  */
  constructor(t, e, n) {
    this.name = t, this.schema = e, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = Ge(n.attrs), this.defaultAttrs = Ke(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || t == "text"), this.isText = t == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Z.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let t in this.attrs)
      if (this.attrs[t].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(t) {
    return this == t || this.contentMatch.compatible(t.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(t) {
    return !t && this.defaultAttrs ? this.defaultAttrs : Ue(this.attrs, t);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(t = null, e, n) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new J(this, this.computeAttrs(t), g.from(e), v.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(t = null, e, n) {
    return e = g.from(e), this.checkContent(e), new J(this, this.computeAttrs(t), e, v.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(t = null, e, n) {
    if (t = this.computeAttrs(t), e = g.from(e), e.size) {
      let o = this.contentMatch.fillBefore(e);
      if (!o)
        return null;
      e = o.append(e);
    }
    let i = this.contentMatch.matchFragment(e), s = i && i.fillBefore(g.empty, !0);
    return s ? new J(this, t, e.append(s), v.setFrom(n)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(t) {
    let e = this.contentMatch.matchFragment(t);
    if (!e || !e.validEnd)
      return !1;
    for (let n = 0; n < t.childCount; n++)
      if (!this.allowsMarks(t.child(n).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(t) {
    if (!this.validContent(t))
      throw new RangeError(`Invalid content for node ${this.name}: ${t.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(t) {
    return this.markSet == null || this.markSet.indexOf(t) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(t) {
    if (this.markSet == null)
      return !0;
    for (let e = 0; e < t.length; e++)
      if (!this.allowsMarkType(t[e].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(t) {
    if (this.markSet == null)
      return t;
    let e;
    for (let n = 0; n < t.length; n++)
      this.allowsMarkType(t[n].type) ? e && e.push(t[n]) : e || (e = t.slice(0, n));
    return e ? e.length ? e : v.none : t;
  }
  /**
  @internal
  */
  static compile(t, e) {
    let n = /* @__PURE__ */ Object.create(null);
    t.forEach((s, o) => n[s] = new Ct(s, e, o));
    let i = e.spec.topNode || "doc";
    if (!n[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!n.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in n.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return n;
  }
}
class Bn {
  constructor(t) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(t, "default"), this.default = t.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class se {
  /**
  @internal
  */
  constructor(t, e, n, i) {
    this.name = t, this.rank = e, this.schema = n, this.spec = i, this.attrs = Ge(i.attrs), this.excluded = null;
    let s = Ke(this.attrs);
    this.instance = s ? new v(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(t = null) {
    return !t && this.instance ? this.instance : new v(this, Ue(this.attrs, t));
  }
  /**
  @internal
  */
  static compile(t, e) {
    let n = /* @__PURE__ */ Object.create(null), i = 0;
    return t.forEach((s, o) => n[s] = new se(s, i++, e, o)), n;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(t) {
    for (var e = 0; e < t.length; e++)
      t[e].type == this && (t = t.slice(0, e).concat(t.slice(e + 1)), e--);
    return t;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(t) {
    for (let e = 0; e < t.length; e++)
      if (t[e].type == this)
        return t[e];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(t) {
    return this.excluded.indexOf(t) > -1;
  }
}
class Pn {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(t) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let e = this.spec = {};
    for (let i in t)
      e[i] = t[i];
    e.nodes = A.from(t.nodes), e.marks = A.from(t.marks || {}), this.nodes = Ct.compile(this.spec.nodes, this), this.marks = se.compile(this.spec.marks, this);
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      s.contentMatch = n[o] || (n[o] = Z.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.markSet = l == "_" ? null : l ? ge(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : ge(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(t, e = null, n, i) {
    if (typeof t == "string")
      t = this.nodeType(t);
    else if (t instanceof Ct) {
      if (t.schema != this)
        throw new RangeError("Node type from different schema used (" + t.name + ")");
    } else
      throw new RangeError("Invalid node type: " + t);
    return t.createChecked(e, n, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(t, e) {
    let n = this.nodes.text;
    return new Et(n, n.defaultAttrs, t, v.setFrom(e));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(t, e) {
    return typeof t == "string" && (t = this.marks[t]), t.create(e);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(t) {
    return J.fromJSON(this, t);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(t) {
    return v.fromJSON(this, t);
  }
  /**
  @internal
  */
  nodeType(t) {
    let e = this.nodes[t];
    if (!e)
      throw new RangeError("Unknown node type: " + t);
    return e;
  }
}
function ge(r, t) {
  let e = [];
  for (let n = 0; n < t.length; n++) {
    let i = t[n], s = r.marks[i], o = s;
    if (s)
      e.push(s);
    else
      for (let l in r.marks) {
        let a = r.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && e.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + t[n] + "'");
  }
  return e;
}
class ht {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(t, e) {
    this.schema = t, this.rules = e, this.tags = [], this.styles = [], e.forEach((n) => {
      n.tag ? this.tags.push(n) : n.style && this.styles.push(n);
    }), this.normalizeLists = !this.tags.some((n) => {
      if (!/^(ul|ol)\b/.test(n.tag) || !n.node)
        return !1;
      let i = t.nodes[n.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(t, e = {}) {
    let n = new ke(this, e, !1);
    return n.addAll(t, e.from, e.to), n.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(t, e = {}) {
    let n = new ke(this, e, !0);
    return n.addAll(t, e.from, e.to), x.maxOpen(n.finish());
  }
  /**
  @internal
  */
  matchTag(t, e, n) {
    for (let i = n ? this.tags.indexOf(n) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (Ln(t, s.tag) && (s.namespace === void 0 || t.namespaceURI == s.namespace) && (!s.context || e.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(t);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(t, e, n, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(t) != 0 || o.context && !n.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > t.length && (l.charCodeAt(t.length) != 61 || l.slice(t.length + 1) != e))) {
        if (o.getAttrs) {
          let a = o.getAttrs(e);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(t) {
    let e = [];
    function n(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < e.length; o++) {
        let l = e[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      e.splice(o, 0, i);
    }
    for (let i in t.marks) {
      let s = t.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = we(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in t.nodes) {
      let s = t.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = we(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return e;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(t) {
    return t.cached.domParser || (t.cached.domParser = new ht(t, ht.schemaRules(t)));
  }
}
const Qe = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Dn = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Xe = { ol: !0, ul: !0 }, Tt = 1, Ot = 2, ct = 4;
function ye(r, t, e) {
  return t != null ? (t ? Tt : 0) | (t === "full" ? Ot : 0) : r && r.whitespace == "pre" ? Tt | Ot : e & ~ct;
}
class yt {
  constructor(t, e, n, i, s, o, l) {
    this.type = t, this.attrs = e, this.marks = n, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = v.none, this.stashMarks = [], this.match = o || (l & ct ? null : t.contentMatch);
  }
  findWrapping(t) {
    if (!this.match) {
      if (!this.type)
        return [];
      let e = this.type.contentMatch.fillBefore(g.from(t));
      if (e)
        this.match = this.type.contentMatch.matchFragment(e);
      else {
        let n = this.type.contentMatch, i;
        return (i = n.findWrapping(t.type)) ? (this.match = n, i) : null;
      }
    }
    return this.match.findWrapping(t.type);
  }
  finish(t) {
    if (!(this.options & Tt)) {
      let n = this.content[this.content.length - 1], i;
      if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
        let s = n;
        n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let e = g.from(this.content);
    return !t && this.match && (e = e.append(this.match.fillBefore(g.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e;
  }
  popFromStashMark(t) {
    for (let e = this.stashMarks.length - 1; e >= 0; e--)
      if (t.eq(this.stashMarks[e]))
        return this.stashMarks.splice(e, 1)[0];
  }
  applyPending(t) {
    for (let e = 0, n = this.pendingMarks; e < n.length; e++) {
      let i = n[e];
      (this.type ? this.type.allowsMarkType(i.type) : $n(i.type, t)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(t) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !Qe.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
  }
}
class ke {
  constructor(t, e, n) {
    this.parser = t, this.options = e, this.isOpen = n, this.open = 0;
    let i = e.topNode, s, o = ye(null, e.preserveWhitespace, 0) | (n ? ct : 0);
    i ? s = new yt(i.type, i.attrs, v.none, v.none, !0, e.topMatch || i.type.contentMatch, o) : n ? s = new yt(null, null, v.none, v.none, !0, null, o) : s = new yt(t.schema.topNodeType, null, v.none, v.none, !0, null, o), this.nodes = [s], this.find = e.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(t) {
    if (t.nodeType == 3)
      this.addTextNode(t);
    else if (t.nodeType == 1) {
      let e = t.getAttribute("style");
      if (!e)
        this.addElement(t);
      else {
        let n = this.readStyles(jn(e));
        if (!n)
          return;
        let [i, s] = n, o = this.top;
        for (let l = 0; l < s.length; l++)
          this.removePendingMark(s[l], o);
        for (let l = 0; l < i.length; l++)
          this.addPendingMark(i[l]);
        this.addElement(t);
        for (let l = 0; l < i.length; l++)
          this.removePendingMark(i[l], o);
        for (let l = 0; l < s.length; l++)
          this.addPendingMark(s[l]);
      }
    }
  }
  addTextNode(t) {
    let e = t.nodeValue, n = this.top;
    if (n.options & Ot || n.inlineContext(t) || /[^ \t\r\n\u000c]/.test(e)) {
      if (n.options & Tt)
        n.options & Ot ? e = e.replace(/\r\n?/g, `
`) : e = e.replace(/\r?\n|\r/g, " ");
      else if (e = e.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(e) && this.open == this.nodes.length - 1) {
        let i = n.content[n.content.length - 1], s = t.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (e = e.slice(1));
      }
      e && this.insertNode(this.parser.schema.text(e)), this.findInText(t);
    } else
      this.findInside(t);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(t, e) {
    let n = t.nodeName.toLowerCase(), i;
    Xe.hasOwnProperty(n) && this.parser.normalizeLists && Jn(t);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(t) || (i = this.parser.matchTag(t, this, e));
    if (s ? s.ignore : Dn.hasOwnProperty(n))
      this.findInside(t), this.ignoreFallback(t);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (t = s.skip);
      let o, l = this.top, a = this.needsBlock;
      if (Qe.hasOwnProperty(n))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
      else if (!t.firstChild) {
        this.leafFallback(t);
        return;
      }
      this.addAll(t), o && this.sync(l), this.needsBlock = a;
    } else
      this.addElementByRule(t, s, s.consuming === !1 ? i : void 0);
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(t) {
    t.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(t) {
    t.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(t) {
    let e = v.none, n = v.none;
    for (let i = 0; i < t.length; i += 2)
      for (let s = void 0; ; ) {
        let o = this.parser.matchStyle(t[i], t[i + 1], this, s);
        if (!o)
          break;
        if (o.ignore)
          return null;
        if (o.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((l) => {
          o.clearMark(l) && (n = l.addToSet(n));
        }) : e = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(e), o.consuming === !1)
          s = o;
        else
          break;
      }
    return [e, n];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(t, e, n) {
    let i, s, o;
    e.node ? (s = this.parser.schema.nodes[e.node], s.isLeaf ? this.insertNode(s.create(e.attrs)) || this.leafFallback(t) : i = this.enter(s, e.attrs || null, e.preserveWhitespace)) : (o = this.parser.schema.marks[e.mark].create(e.attrs), this.addPendingMark(o));
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(t);
    else if (n)
      this.addElement(t, n);
    else if (e.getContent)
      this.findInside(t), e.getContent(t, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = t;
      typeof e.contentElement == "string" ? a = t.querySelector(e.contentElement) : typeof e.contentElement == "function" ? a = e.contentElement(t) : e.contentElement && (a = e.contentElement), this.findAround(t, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, o && this.removePendingMark(o, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(t, e, n) {
    let i = e || 0;
    for (let s = e ? t.childNodes[e] : t.firstChild, o = n == null ? null : t.childNodes[n]; s != o; s = s.nextSibling, ++i)
      this.findAtPoint(t, i), this.addDOM(s);
    this.findAtPoint(t, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(t) {
    let e, n;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], o = s.findWrapping(t);
      if (o && (!e || e.length > o.length) && (e = o, n = s, !o.length) || s.solid)
        break;
    }
    if (!e)
      return !1;
    this.sync(n);
    for (let i = 0; i < e.length; i++)
      this.enterInner(e[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(t) {
    if (t.isInline && this.needsBlock && !this.top.type) {
      let e = this.textblockFromContext();
      e && this.enterInner(e);
    }
    if (this.findPlace(t)) {
      this.closeExtra();
      let e = this.top;
      e.applyPending(t.type), e.match && (e.match = e.match.matchType(t.type));
      let n = e.activeMarks;
      for (let i = 0; i < t.marks.length; i++)
        (!e.type || e.type.allowsMarkType(t.marks[i].type)) && (n = t.marks[i].addToSet(n));
      return e.content.push(t.mark(n)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(t, e, n) {
    let i = this.findPlace(t.create(e));
    return i && this.enterInner(t, e, !0, n), i;
  }
  // Open a node of the given type
  enterInner(t, e = null, n = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(t), s.match = s.match && s.match.matchType(t);
    let o = ye(t, i, s.options);
    s.options & ct && s.content.length == 0 && (o |= ct), this.nodes.push(new yt(t, e, s.activeMarks, s.pendingMarks, n, null, o)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(t = !1) {
    let e = this.nodes.length - 1;
    if (e > this.open) {
      for (; e > this.open; e--)
        this.nodes[e - 1].content.push(this.nodes[e].finish(t));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(t) {
    for (let e = this.open; e >= 0; e--)
      if (this.nodes[e] == t)
        return this.open = e, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let t = 0;
    for (let e = this.open; e >= 0; e--) {
      let n = this.nodes[e].content;
      for (let i = n.length - 1; i >= 0; i--)
        t += n[i].nodeSize;
      e && t++;
    }
    return t;
  }
  findAtPoint(t, e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos);
  }
  findInside(t) {
    if (this.find)
      for (let e = 0; e < this.find.length; e++)
        this.find[e].pos == null && t.nodeType == 1 && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos);
  }
  findAround(t, e, n) {
    if (t != e && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && t.nodeType == 1 && t.contains(this.find[i].node) && e.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(t) {
    if (this.find)
      for (let e = 0; e < this.find.length; e++)
        this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(t) {
    if (t.indexOf("|") > -1)
      return t.split(/\s*\|\s*/).some(this.matchesContext, this);
    let e = t.split("/"), n = this.options.context, i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), s = -(n ? n.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = e[l];
        if (c == "") {
          if (l == e.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let f = a > 0 || a == 0 && i ? this.nodes[a].type : n && a >= s ? n.node(a - s).type : null;
          if (!f || f.name != c && f.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(e.length - 1, this.open);
  }
  textblockFromContext() {
    let t = this.options.context;
    if (t)
      for (let e = t.depth; e >= 0; e--) {
        let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs)
          return n;
      }
    for (let e in this.parser.schema.nodes) {
      let n = this.parser.schema.nodes[e];
      if (n.isTextblock && n.defaultAttrs)
        return n;
    }
  }
  addPendingMark(t) {
    let e = Wn(t, this.top.pendingMarks);
    e && this.top.stashMarks.push(e), this.top.pendingMarks = t.addToSet(this.top.pendingMarks);
  }
  removePendingMark(t, e) {
    for (let n = this.open; n >= 0; n--) {
      let i = this.nodes[n];
      if (i.pendingMarks.lastIndexOf(t) > -1)
        i.pendingMarks = t.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = t.removeFromSet(i.activeMarks);
        let o = i.popFromStashMark(t);
        o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks));
      }
      if (i == e)
        break;
    }
  }
}
function Jn(r) {
  for (let t = r.firstChild, e = null; t; t = t.nextSibling) {
    let n = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
    n && Xe.hasOwnProperty(n) && e ? (e.appendChild(t), t = e) : n == "li" ? e = t : n && (e = null);
  }
}
function Ln(r, t) {
  return (r.matches || r.msMatchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector).call(r, t);
}
function jn(r) {
  let t = /\s*([\w-]+)\s*:\s*([^;]+)/g, e, n = [];
  for (; e = t.exec(r); )
    n.push(e[1], e[2].trim());
  return n;
}
function we(r) {
  let t = {};
  for (let e in r)
    t[e] = r[e];
  return t;
}
function $n(r, t) {
  let e = t.schema.nodes;
  for (let n in e) {
    let i = e[n];
    if (!i.allowsMarkType(r))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: f } = l.edge(a);
        if (c == t || s.indexOf(f) < 0 && o(f))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
function Wn(r, t) {
  for (let e = 0; e < t.length; e++)
    if (r.eq(t[e]))
      return t[e];
}
class et {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(t, e) {
    this.nodes = t, this.marks = e;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(t, e = {}, n) {
    n || (n = jt(e).createDocumentFragment());
    let i = n, s = [];
    return t.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], f = this.serializeMark(c, o.isInline, e);
          f && (s.push([c, i]), i.appendChild(f.dom), i = f.contentDOM || f.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, e));
    }), n;
  }
  /**
  @internal
  */
  serializeNodeInner(t, e) {
    let { dom: n, contentDOM: i } = et.renderSpec(jt(e), this.nodes[t.type.name](t));
    if (i) {
      if (t.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(t.content, e, i);
    }
    return n;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(t, e = {}) {
    let n = this.serializeNodeInner(t, e);
    for (let i = t.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(t.marks[i], t.isInline, e);
      s && ((s.contentDOM || s.dom).appendChild(n), n = s.dom);
    }
    return n;
  }
  /**
  @internal
  */
  serializeMark(t, e, n = {}) {
    let i = this.marks[t.type.name];
    return i && et.renderSpec(jt(n), i(t, e));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(t, e, n = null) {
    if (typeof e == "string")
      return { dom: t.createTextNode(e) };
    if (e.nodeType != null)
      return { dom: e };
    if (e.dom && e.dom.nodeType != null)
      return e;
    let i = e[0], s = i.indexOf(" ");
    s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
    let o, l = n ? t.createElementNS(n, i) : t.createElement(i), a = e[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let f in a)
        if (a[f] != null) {
          let u = f.indexOf(" ");
          u > 0 ? l.setAttributeNS(f.slice(0, u), f.slice(u + 1), a[f]) : l.setAttribute(f, a[f]);
        }
    }
    for (let f = c; f < e.length; f++) {
      let u = e[f];
      if (u === 0) {
        if (f < e.length - 1 || f > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: h, contentDOM: d } = et.renderSpec(t, u, n);
        if (l.appendChild(h), d) {
          if (o)
            throw new RangeError("Multiple content holes");
          o = d;
        }
      }
    }
    return { dom: l, contentDOM: o };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(t) {
    return t.cached.domSerializer || (t.cached.domSerializer = new et(this.nodesFromSchema(t), this.marksFromSchema(t)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(t) {
    let e = xe(t.nodes);
    return e.text || (e.text = (n) => n.text), e;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(t) {
    return xe(t.marks);
  }
}
function xe(r) {
  let t = {};
  for (let e in r) {
    let n = r[e].spec.toDOM;
    n && (t[e] = n);
  }
  return t;
}
function jt(r) {
  return r.document || window.document;
}
const Ye = 65535, Ze = Math.pow(2, 16);
function Vn(r, t) {
  return r + t * Ze;
}
function Se(r) {
  return r & Ye;
}
function qn(r) {
  return (r - (r & Ye)) / Ze;
}
const _e = 1, tn = 2, wt = 4, en = 8;
class be {
  /**
  @internal
  */
  constructor(t, e, n) {
    this.pos = t, this.delInfo = e, this.recover = n;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & en) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (_e | wt)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (tn | wt)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & wt) > 0;
  }
}
class P {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(t, e = !1) {
    if (this.ranges = t, this.inverted = e, !t.length && P.empty)
      return P.empty;
  }
  /**
  @internal
  */
  recover(t) {
    let e = 0, n = Se(t);
    if (!this.inverted)
      for (let i = 0; i < n; i++)
        e += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[n * 3] + e + qn(t);
  }
  mapResult(t, e = 1) {
    return this._map(t, e, !1);
  }
  map(t, e = 1) {
    return this._map(t, e, !0);
  }
  /**
  @internal
  */
  _map(t, e, n) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > t)
        break;
      let c = this.ranges[l + s], f = this.ranges[l + o], u = a + c;
      if (t <= u) {
        let h = c ? t == a ? -1 : t == u ? 1 : e : e, d = a + i + (h < 0 ? 0 : f);
        if (n)
          return d;
        let p = t == (e < 0 ? a : u) ? null : Vn(l / 3, t - a), m = t == a ? tn : t == u ? _e : wt;
        return (e < 0 ? t != a : t != u) && (m |= en), new be(d, m, p);
      }
      i += f - c;
    }
    return n ? t + i : new be(t + i, 0, null);
  }
  /**
  @internal
  */
  touches(t, e) {
    let n = 0, i = Se(e), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? n : 0);
      if (a > t)
        break;
      let c = this.ranges[l + s], f = a + c;
      if (t <= f && l == i * 3)
        return !0;
      n += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(t) {
    let e = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + e], f = this.ranges[i + n];
      t(l, l + c, a, a + f), s += f - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new P(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(t) {
    return t == 0 ? P.empty : new P(t < 0 ? [0, -t, 0] : [0, 0, t]);
  }
}
P.empty = new P([]);
const $t = /* @__PURE__ */ Object.create(null);
class R {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return P.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(t) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(t, e) {
    if (!e || !e.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let n = $t[e.stepType];
    if (!n)
      throw new RangeError(`No step type ${e.stepType} defined`);
    return n.fromJSON(t, e);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(t, e) {
    if (t in $t)
      throw new RangeError("Duplicate use of step JSON ID " + t);
    return $t[t] = e, e.prototype.jsonID = t, e;
  }
}
class T {
  /**
  @internal
  */
  constructor(t, e) {
    this.doc = t, this.failed = e;
  }
  /**
  Create a successful step result.
  */
  static ok(t) {
    return new T(t, null);
  }
  /**
  Create a failed step result.
  */
  static fail(t) {
    return new T(null, t);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(t, e, n, i) {
    try {
      return T.ok(t.replace(e, n, i));
    } catch (s) {
      if (s instanceof bt)
        return T.fail(s.message);
      throw s;
    }
  }
}
function oe(r, t, e) {
  let n = [];
  for (let i = 0; i < r.childCount; i++) {
    let s = r.child(i);
    s.content.size && (s = s.copy(oe(s.content, t, s))), s.isInline && (s = t(s, e, i)), n.push(s);
  }
  return g.fromArray(n);
}
class K extends R {
  /**
  Create a mark step.
  */
  constructor(t, e, n) {
    super(), this.from = t, this.to = e, this.mark = n;
  }
  apply(t) {
    let e = t.slice(this.from, this.to), n = t.resolve(this.from), i = n.node(n.sharedDepth(this.to)), s = new x(oe(e.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), e.openStart, e.openEnd);
    return T.fromReplace(t, this.from, this.to, s);
  }
  invert() {
    return new U(this.from, this.to, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1);
    return e.deleted && n.deleted || e.pos >= n.pos ? null : new K(e.pos, n.pos, this.mark);
  }
  merge(t) {
    return t instanceof K && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new K(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new K(e.from, e.to, t.markFromJSON(e.mark));
  }
}
R.jsonID("addMark", K);
class U extends R {
  /**
  Create a mark-removing step.
  */
  constructor(t, e, n) {
    super(), this.from = t, this.to = e, this.mark = n;
  }
  apply(t) {
    let e = t.slice(this.from, this.to), n = new x(oe(e.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), t), e.openStart, e.openEnd);
    return T.fromReplace(t, this.from, this.to, n);
  }
  invert() {
    return new K(this.from, this.to, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1);
    return e.deleted && n.deleted || e.pos >= n.pos ? null : new U(e.pos, n.pos, this.mark);
  }
  merge(t) {
    return t instanceof U && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new U(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new U(e.from, e.to, t.markFromJSON(e.mark));
  }
}
R.jsonID("removeMark", U);
class G extends R {
  /**
  Create a node mark step.
  */
  constructor(t, e) {
    super(), this.pos = t, this.mark = e;
  }
  apply(t) {
    let e = t.nodeAt(this.pos);
    if (!e)
      return T.fail("No node at mark step's position");
    let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
    return T.fromReplace(t, this.pos, this.pos + 1, new x(g.from(n), 0, e.isLeaf ? 0 : 1));
  }
  invert(t) {
    let e = t.nodeAt(this.pos);
    if (e) {
      let n = this.mark.addToSet(e.marks);
      if (n.length == e.marks.length) {
        for (let i = 0; i < e.marks.length; i++)
          if (!e.marks[i].isInSet(n))
            return new G(this.pos, e.marks[i]);
        return new G(this.pos, this.mark);
      }
    }
    return new dt(this.pos, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.pos, 1);
    return e.deletedAfter ? null : new G(e.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new G(e.pos, t.markFromJSON(e.mark));
  }
}
R.jsonID("addNodeMark", G);
class dt extends R {
  /**
  Create a mark-removing step.
  */
  constructor(t, e) {
    super(), this.pos = t, this.mark = e;
  }
  apply(t) {
    let e = t.nodeAt(this.pos);
    if (!e)
      return T.fail("No node at mark step's position");
    let n = e.type.create(e.attrs, null, this.mark.removeFromSet(e.marks));
    return T.fromReplace(t, this.pos, this.pos + 1, new x(g.from(n), 0, e.isLeaf ? 0 : 1));
  }
  invert(t) {
    let e = t.nodeAt(this.pos);
    return !e || !this.mark.isInSet(e.marks) ? this : new G(this.pos, this.mark);
  }
  map(t) {
    let e = t.mapResult(this.pos, 1);
    return e.deletedAfter ? null : new dt(e.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new dt(e.pos, t.markFromJSON(e.mark));
  }
}
R.jsonID("removeNodeMark", dt);
class B extends R {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(t, e, n, i = !1) {
    super(), this.from = t, this.to = e, this.slice = n, this.structure = i;
  }
  apply(t) {
    return this.structure && ee(t, this.from, this.to) ? T.fail("Structure replace would overwrite content") : T.fromReplace(t, this.from, this.to, this.slice);
  }
  getMap() {
    return new P([this.from, this.to - this.from, this.slice.size]);
  }
  invert(t) {
    return new B(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1);
    return e.deletedAcross && n.deletedAcross ? null : new B(e.pos, Math.max(e.pos, n.pos), this.slice);
  }
  merge(t) {
    if (!(t instanceof B) || t.structure || this.structure)
      return null;
    if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
      let e = this.slice.size + t.slice.size == 0 ? x.empty : new x(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
      return new B(this.from, this.to + (t.to - t.from), e, this.structure);
    } else if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
      let e = this.slice.size + t.slice.size == 0 ? x.empty : new x(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
      return new B(t.from, this.to, e, this.structure);
    } else
      return null;
  }
  toJSON() {
    let t = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new B(e.from, e.to, x.fromJSON(t, e.slice), !!e.structure);
  }
}
R.jsonID("replace", B);
class z extends R {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(t, e, n, i, s, o, l = !1) {
    super(), this.from = t, this.to = e, this.gapFrom = n, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(t) {
    if (this.structure && (ee(t, this.from, this.gapFrom) || ee(t, this.gapTo, this.to)))
      return T.fail("Structure gap-replace would overwrite content");
    let e = t.slice(this.gapFrom, this.gapTo);
    if (e.openStart || e.openEnd)
      return T.fail("Gap is not a flat range");
    let n = this.slice.insertAt(this.insert, e.content);
    return n ? T.fromReplace(t, this.from, this.to, n) : T.fail("Content does not fit in gap");
  }
  getMap() {
    return new P([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(t) {
    let e = this.gapTo - this.gapFrom;
    return new z(this.from, this.from + this.slice.size + e, this.from + this.insert, this.from + this.insert + e, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(t) {
    let e = t.mapResult(this.from, 1), n = t.mapResult(this.to, -1), i = t.map(this.gapFrom, -1), s = t.map(this.gapTo, 1);
    return e.deletedAcross && n.deletedAcross || i < e.pos || s > n.pos ? null : new z(e.pos, n.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let t = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.from != "number" || typeof e.to != "number" || typeof e.gapFrom != "number" || typeof e.gapTo != "number" || typeof e.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new z(e.from, e.to, e.gapFrom, e.gapTo, x.fromJSON(t, e.slice), e.insert, !!e.structure);
  }
}
R.jsonID("replaceAround", z);
function ee(r, t, e) {
  let n = r.resolve(t), i = e - t, s = n.depth;
  for (; i > 0 && s > 0 && n.indexAfter(s) == n.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = n.node(s).maybeChild(n.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function Hn(r, t, e) {
  return (t == 0 || r.canReplace(t, r.childCount)) && (e == r.childCount || r.canReplace(0, e));
}
function st(r) {
  let e = r.parent.content.cutByIndex(r.startIndex, r.endIndex);
  for (let n = r.depth; ; --n) {
    let i = r.$from.node(n), s = r.$from.index(n), o = r.$to.indexAfter(n);
    if (n < r.depth && i.canReplace(s, o, e))
      return n;
    if (n == 0 || i.type.spec.isolating || !Hn(i, s, o))
      break;
  }
  return null;
}
function nn(r, t, e = null, n = r) {
  let i = Kn(r, t), s = i && Un(n, t);
  return s ? i.map(Me).concat({ type: t, attrs: e }).concat(s.map(Me)) : null;
}
function Me(r) {
  return { type: r, attrs: null };
}
function Kn(r, t) {
  let { parent: e, startIndex: n, endIndex: i } = r, s = e.contentMatchAt(n).findWrapping(t);
  if (!s)
    return null;
  let o = s.length ? s[0] : t;
  return e.canReplaceWith(n, i, o) ? s : null;
}
function Un(r, t) {
  let { parent: e, startIndex: n, endIndex: i } = r, s = e.child(n), o = t.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : t).contentMatch;
  for (let c = n; a && c < i; c++)
    a = a.matchType(e.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function rt(r, t, e = 1, n) {
  let i = r.resolve(t), s = i.depth - e, o = n && n[n.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, f = e - 2; c > s; c--, f--) {
    let u = i.node(c), h = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let d = u.content.cutByIndex(h, u.childCount), p = n && n[f] || u;
    if (p != u && (d = d.replaceChild(0, p.type.create(p.attrs))), !u.canReplace(h + 1, u.childCount) || !p.type.validContent(d))
      return !1;
  }
  let l = i.indexAfter(s), a = n && n[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function _(r, t) {
  let e = r.resolve(t), n = e.index();
  return rn(e.nodeBefore, e.nodeAfter) && e.parent.canReplace(n, n + 1);
}
function rn(r, t) {
  return !!(r && t && !r.isLeaf && r.canAppend(t));
}
function sn(r, t, e = -1) {
  let n = r.resolve(t);
  for (let i = n.depth; ; i--) {
    let s, o, l = n.index(i);
    if (i == n.depth ? (s = n.nodeBefore, o = n.nodeAfter) : e > 0 ? (s = n.node(i + 1), l++, o = n.node(i).maybeChild(l)) : (s = n.node(i).maybeChild(l - 1), o = n.node(i + 1)), s && !s.isTextblock && rn(s, o) && n.node(i).canReplace(l, l + 1))
      return t;
    if (i == 0)
      break;
    t = e < 0 ? n.before(i) : n.after(i);
  }
}
function on(r, t, e = t, n = x.empty) {
  if (t == e && !n.size)
    return null;
  let i = r.resolve(t), s = r.resolve(e);
  return Gn(i, s, n) ? new B(t, e, n) : new Qn(i, s, n).fit();
}
function Gn(r, t, e) {
  return !e.openStart && !e.openEnd && r.start() == t.start() && r.parent.canReplace(r.index(), t.index(), e.content);
}
class Qn {
  constructor(t, e, n) {
    this.$from = t, this.$to = e, this.unplaced = n, this.frontier = [], this.placed = g.empty;
    for (let i = 0; i <= t.depth; i++) {
      let s = t.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(t.indexAfter(i))
      });
    }
    for (let i = t.depth; i > 0; i--)
      this.placed = g.from(t.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let t = this.mustMoveInline(), e = this.placed.size - this.depth - this.$from.depth, n = this.$from, i = this.close(t < 0 ? this.$to : n.doc.resolve(t));
    if (!i)
      return null;
    let s = this.placed, o = n.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new x(s, o, l);
    return t > -1 ? new z(n.pos, t, this.$to.pos, this.$to.end(), a, e) : a.size || n.pos != this.$to.pos ? new B(n.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let t = this.unplaced.openStart;
    for (let e = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < t; n++) {
      let s = e.firstChild;
      if (e.childCount > 1 && (i = 0), s.type.spec.isolating && i <= n) {
        t = n;
        break;
      }
      e = s.content;
    }
    for (let e = 1; e <= 2; e++)
      for (let n = e == 1 ? t : this.unplaced.openStart; n >= 0; n--) {
        let i, s = null;
        n ? (s = Wt(this.unplaced.content, n - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], f, u = null;
          if (e == 1 && (o ? c.matchType(o.type) || (u = c.fillBefore(g.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, inject: u };
          if (e == 2 && o && (f = c.findWrapping(o.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, wrap: f };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: t, openStart: e, openEnd: n } = this.unplaced, i = Wt(t, e);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new x(t, e + 1, Math.max(n, i.size + e >= t.size - n ? e + 1 : 0)), !0);
  }
  dropNode() {
    let { content: t, openStart: e, openEnd: n } = this.unplaced, i = Wt(t, e);
    if (i.childCount <= 1 && e > 0) {
      let s = t.size - e <= e + i.size;
      this.unplaced = new x(ot(t, e - 1, 1), e - 1, s ? e - 1 : n);
    } else
      this.unplaced = new x(ot(t, e, 1), e, n);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: t, frontierDepth: e, parent: n, inject: i, wrap: s }) {
    for (; this.depth > e; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = n ? n.content : o.content, a = o.openStart - t, c = 0, f = [], { match: u, type: h } = this.frontier[e];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        f.push(i.child(m));
      u = u.matchFragment(i);
    }
    let d = l.size + t - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), w = u.matchType(m.type);
      if (!w)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = w, f.push(ln(m.mark(h.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? d : -1)));
    }
    let p = c == l.childCount;
    p || (d = -1), this.placed = lt(this.placed, e, g.from(f)), this.frontier[e].match = u, p && d < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, w = l; m < d; m++) {
      let y = w.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), w = y.content;
    }
    this.unplaced = p ? t == 0 ? x.empty : new x(ot(o.content, t - 1, 1), t - 1, d < 0 ? o.openEnd : t - 1) : new x(ot(o.content, t, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let t = this.frontier[this.depth], e;
    if (!t.type.isTextblock || !Vt(this.$to, this.$to.depth, t.type, t.match, !1) || this.$to.depth == this.depth && (e = this.findCloseLevel(this.$to)) && e.depth == this.depth)
      return -1;
    let { depth: n } = this.$to, i = this.$to.after(n);
    for (; n > 1 && i == this.$to.end(--n); )
      ++i;
    return i;
  }
  findCloseLevel(t) {
    t:
      for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
        let { match: n, type: i } = this.frontier[e], s = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)), o = Vt(t, e, i, n, s);
        if (o) {
          for (let l = e - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], f = Vt(t, l, c, a, !0);
            if (!f || f.childCount)
              continue t;
          }
          return { depth: e, fit: o, move: s ? t.doc.resolve(t.after(e + 1)) : t };
        }
      }
  }
  close(t) {
    let e = this.findCloseLevel(t);
    if (!e)
      return null;
    for (; this.depth > e.depth; )
      this.closeFrontierNode();
    e.fit.childCount && (this.placed = lt(this.placed, e.depth, e.fit)), t = e.move;
    for (let n = e.depth + 1; n <= t.depth; n++) {
      let i = t.node(n), s = i.type.contentMatch.fillBefore(i.content, !0, t.index(n));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return t;
  }
  openFrontierNode(t, e = null, n) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(t), this.placed = lt(this.placed, this.depth, g.from(t.create(e, n))), this.frontier.push({ type: t, match: t.contentMatch });
  }
  closeFrontierNode() {
    let e = this.frontier.pop().match.fillBefore(g.empty, !0);
    e.childCount && (this.placed = lt(this.placed, this.frontier.length, e));
  }
}
function ot(r, t, e) {
  return t == 0 ? r.cutByIndex(e, r.childCount) : r.replaceChild(0, r.firstChild.copy(ot(r.firstChild.content, t - 1, e)));
}
function lt(r, t, e) {
  return t == 0 ? r.append(e) : r.replaceChild(r.childCount - 1, r.lastChild.copy(lt(r.lastChild.content, t - 1, e)));
}
function Wt(r, t) {
  for (let e = 0; e < t; e++)
    r = r.firstChild.content;
  return r;
}
function ln(r, t, e) {
  if (t <= 0)
    return r;
  let n = r.content;
  return t > 1 && (n = n.replaceChild(0, ln(n.firstChild, t - 1, n.childCount == 1 ? e - 1 : 0))), t > 0 && (n = r.type.contentMatch.fillBefore(n).append(n), e <= 0 && (n = n.append(r.type.contentMatch.matchFragment(n).fillBefore(g.empty, !0)))), r.copy(n);
}
function Vt(r, t, e, n, i) {
  let s = r.node(t), o = i ? r.indexAfter(t) : r.index(t);
  if (o == s.childCount && !e.compatibleContent(s.type))
    return null;
  let l = n.fillBefore(s.content, !0, o);
  return l && !Xn(e, s.content, o) ? l : null;
}
function Xn(r, t, e) {
  for (let n = e; n < t.childCount; n++)
    if (!r.allowsMarks(t.child(n).marks))
      return !0;
  return !1;
}
class ft extends R {
  /**
  Construct an attribute step.
  */
  constructor(t, e, n) {
    super(), this.pos = t, this.attr = e, this.value = n;
  }
  apply(t) {
    let e = t.nodeAt(this.pos);
    if (!e)
      return T.fail("No node at attribute step's position");
    let n = /* @__PURE__ */ Object.create(null);
    for (let s in e.attrs)
      n[s] = e.attrs[s];
    n[this.attr] = this.value;
    let i = e.type.create(n, null, e.marks);
    return T.fromReplace(t, this.pos, this.pos + 1, new x(g.from(i), 0, e.isLeaf ? 0 : 1));
  }
  getMap() {
    return P.empty;
  }
  invert(t) {
    return new ft(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
  }
  map(t) {
    let e = t.mapResult(this.pos, 1);
    return e.deletedAfter ? null : new ft(e.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(t, e) {
    if (typeof e.pos != "number" || typeof e.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new ft(e.pos, e.attr, e.value);
  }
}
R.jsonID("attr", ft);
let pt = class extends Error {
};
pt = function r(t) {
  let e = Error.call(this, t);
  return e.__proto__ = r.prototype, e;
};
pt.prototype = Object.create(Error.prototype);
pt.prototype.constructor = pt;
pt.prototype.name = "TransformError";
const qt = /* @__PURE__ */ Object.create(null);
class b {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(t, e, n) {
    this.$anchor = t, this.$head = e, this.ranges = n || [new Yn(t.min(e), t.max(e))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let t = this.ranges;
    for (let e = 0; e < t.length; e++)
      if (t[e].$from.pos != t[e].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(t, e = x.empty) {
    let n = e.content.lastChild, i = null;
    for (let l = 0; l < e.openEnd; l++)
      i = n, n = n.lastChild;
    let s = t.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], f = t.mapping.slice(s);
      t.replaceRange(f.map(a.pos), f.map(c.pos), l ? x.empty : e), l == 0 && Ce(t, s, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(t, e) {
    let n = t.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = t.mapping.slice(n), c = a.map(o.pos), f = a.map(l.pos);
      s ? t.deleteRange(c, f) : (t.replaceRangeWith(c, f, e), Ce(t, n, e.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(t, e, n = !1) {
    let i = t.parent.inlineContent ? new C(t) : tt(t.node(0), t.parent, t.pos, t.index(), e, n);
    if (i)
      return i;
    for (let s = t.depth - 1; s >= 0; s--) {
      let o = e < 0 ? tt(t.node(0), t.node(s), t.before(s + 1), t.index(s), e, n) : tt(t.node(0), t.node(s), t.after(s + 1), t.index(s) + 1, e, n);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(t, e = 1) {
    return this.findFrom(t, e) || this.findFrom(t, -e) || new L(t.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(t) {
    return tt(t, t, 0, 0, 1) || new L(t);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(t) {
    return tt(t, t, t.content.size, t.childCount, -1) || new L(t);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(t, e) {
    if (!e || !e.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let n = qt[e.type];
    if (!n)
      throw new RangeError(`No selection type ${e.type} defined`);
    return n.fromJSON(t, e);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(t, e) {
    if (t in qt)
      throw new RangeError("Duplicate use of selection JSON ID " + t);
    return qt[t] = e, e.prototype.jsonID = t, e;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return C.between(this.$anchor, this.$head).getBookmark();
  }
}
b.prototype.visible = !0;
class Yn {
  /**
  Create a range.
  */
  constructor(t, e) {
    this.$from = t, this.$to = e;
  }
}
let ve = !1;
function Ee(r) {
  !ve && !r.parent.inlineContent && (ve = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + r.parent.type.name + ")"));
}
class C extends b {
  /**
  Construct a text selection between the given points.
  */
  constructor(t, e = t) {
    Ee(t), Ee(e), super(t, e);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(t, e) {
    let n = t.resolve(e.map(this.head));
    if (!n.parent.inlineContent)
      return b.near(n);
    let i = t.resolve(e.map(this.anchor));
    return new C(i.parent.inlineContent ? i : n, n);
  }
  replace(t, e = x.empty) {
    if (super.replace(t, e), e == x.empty) {
      let n = this.$from.marksAcross(this.$to);
      n && t.ensureMarks(n);
    }
  }
  eq(t) {
    return t instanceof C && t.anchor == this.anchor && t.head == this.head;
  }
  getBookmark() {
    return new Rt(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new C(t.resolve(e.anchor), t.resolve(e.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(t, e, n = e) {
    let i = t.resolve(e);
    return new this(i, n == e ? i : t.resolve(n));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(t, e, n) {
    let i = t.pos - e.pos;
    if ((!n || i) && (n = i >= 0 ? 1 : -1), !e.parent.inlineContent) {
      let s = b.findFrom(e, n, !0) || b.findFrom(e, -n, !0);
      if (s)
        e = s.$head;
      else
        return b.near(e, n);
    }
    return t.parent.inlineContent || (i == 0 ? t = e : (t = (b.findFrom(t, -n, !0) || b.findFrom(t, n, !0)).$anchor, t.pos < e.pos != i < 0 && (t = e))), new C(t, e);
  }
}
b.jsonID("text", C);
class Rt {
  constructor(t, e) {
    this.anchor = t, this.head = e;
  }
  map(t) {
    return new Rt(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    return C.between(t.resolve(this.anchor), t.resolve(this.head));
  }
}
class M extends b {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(t) {
    let e = t.nodeAfter, n = t.node(0).resolve(t.pos + e.nodeSize);
    super(t, n), this.node = e;
  }
  map(t, e) {
    let { deleted: n, pos: i } = e.mapResult(this.anchor), s = t.resolve(i);
    return n ? b.near(s) : new M(s);
  }
  content() {
    return new x(g.from(this.node), 0, 0);
  }
  eq(t) {
    return t instanceof M && t.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new le(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(t, e) {
    if (typeof e.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new M(t.resolve(e.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(t, e) {
    return new M(t.resolve(e));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(t) {
    return !t.isText && t.type.spec.selectable !== !1;
  }
}
M.prototype.visible = !1;
b.jsonID("node", M);
class le {
  constructor(t) {
    this.anchor = t;
  }
  map(t) {
    let { deleted: e, pos: n } = t.mapResult(this.anchor);
    return e ? new Rt(n, n) : new le(n);
  }
  resolve(t) {
    let e = t.resolve(this.anchor), n = e.nodeAfter;
    return n && M.isSelectable(n) ? new M(e) : b.near(e);
  }
}
class L extends b {
  /**
  Create an all-selection over the given document.
  */
  constructor(t) {
    super(t.resolve(0), t.resolve(t.content.size));
  }
  replace(t, e = x.empty) {
    if (e == x.empty) {
      t.delete(0, t.doc.content.size);
      let n = b.atStart(t.doc);
      n.eq(t.selection) || t.setSelection(n);
    } else
      super.replace(t, e);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(t) {
    return new L(t);
  }
  map(t) {
    return new L(t);
  }
  eq(t) {
    return t instanceof L;
  }
  getBookmark() {
    return Zn;
  }
}
b.jsonID("all", L);
const Zn = {
  map() {
    return this;
  },
  resolve(r) {
    return new L(r);
  }
};
function tt(r, t, e, n, i, s = !1) {
  if (t.inlineContent)
    return C.create(r, e);
  for (let o = n - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
    let l = t.child(o);
    if (l.isAtom) {
      if (!s && M.isSelectable(l))
        return M.create(r, e - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = tt(r, l, e + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    e += l.nodeSize * i;
  }
  return null;
}
function Ce(r, t, e) {
  let n = r.steps.length - 1;
  if (n < t)
    return;
  let i = r.steps[n];
  if (!(i instanceof B || i instanceof z))
    return;
  let s = r.mapping.maps[n], o;
  s.forEach((l, a, c, f) => {
    o == null && (o = f);
  }), r.setSelection(b.near(r.doc.resolve(o), e));
}
function Te(r, t) {
  return !t || !r ? r : r.bind(t);
}
class kt {
  constructor(t, e, n) {
    this.name = t, this.init = Te(e.init, n), this.apply = Te(e.apply, n);
  }
}
new kt("doc", {
  init(r) {
    return r.doc || r.schema.topNodeType.createAndFill();
  },
  apply(r) {
    return r.doc;
  }
}), new kt("selection", {
  init(r, t) {
    return r.selection || b.atStart(t.doc);
  },
  apply(r) {
    return r.selection;
  }
}), new kt("storedMarks", {
  init(r) {
    return r.storedMarks || null;
  },
  apply(r, t, e, n) {
    return n.selection.$cursor ? r.storedMarks : null;
  }
}), new kt("scrollToSelection", {
  init() {
    return 0;
  },
  apply(r, t) {
    return r.scrolledIntoView ? t + 1 : t;
  }
});
function an(r, t, e) {
  for (let n in r) {
    let i = r[n];
    i instanceof Function ? i = i.bind(t) : n == "handleDOMEvents" && (i = an(i, t, {})), e[n] = i;
  }
  return e;
}
class q {
  /**
  Create a plugin.
  */
  constructor(t) {
    this.spec = t, this.props = {}, t.props && an(t.props, this, this.props), this.key = t.key ? t.key.key : cn("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(t) {
    return t[this.key];
  }
}
const Ht = /* @__PURE__ */ Object.create(null);
function cn(r) {
  return r in Ht ? r + "$" + ++Ht[r] : (Ht[r] = 0, r + "$");
}
class mt {
  /**
  Create a plugin key.
  */
  constructor(t = "key") {
    this.key = cn(t);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(t) {
    return t.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(t) {
    return t[this.key];
  }
}
var V = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
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
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, At = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Oe = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent), _n = typeof navigator < "u" && /Mac/.test(navigator.platform), tr = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), er = _n || Oe && +Oe[1] < 57;
for (var I = 0; I < 10; I++)
  V[48 + I] = V[96 + I] = String(I);
for (var I = 1; I <= 24; I++)
  V[I + 111] = "F" + I;
for (var I = 65; I <= 90; I++)
  V[I] = String.fromCharCode(I + 32), At[I] = String.fromCharCode(I);
for (var Kt in V)
  At.hasOwnProperty(Kt) || (At[Kt] = V[Kt]);
function nr(r) {
  var t = er && (r.ctrlKey || r.altKey || r.metaKey) || tr && r.shiftKey && r.key && r.key.length == 1 || r.key == "Unidentified", e = !t && r.key || (r.shiftKey ? At : V)[r.keyCode] || r.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
const rr = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function ir(r) {
  let t = r.split(/-(?!$)/), e = t[t.length - 1];
  e == "Space" && (e = " ");
  let n, i, s, o;
  for (let l = 0; l < t.length - 1; l++) {
    let a = t[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      rr ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return n && (e = "Alt-" + e), i && (e = "Ctrl-" + e), o && (e = "Meta-" + e), s && (e = "Shift-" + e), e;
}
function sr(r) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in r)
    t[ir(e)] = r[e];
  return t;
}
function Ut(r, t, e = !0) {
  return t.altKey && (r = "Alt-" + r), t.ctrlKey && (r = "Ctrl-" + r), t.metaKey && (r = "Meta-" + r), e && t.shiftKey && (r = "Shift-" + r), r;
}
function or(r) {
  return new q({ props: { handleKeyDown: lr(r) } });
}
function lr(r) {
  let t = sr(r);
  return function(e, n) {
    let i = nr(n), s, o = t[Ut(i, n)];
    if (o && o(e.state, e.dispatch, e))
      return !0;
    if (i.length == 1 && i != " ") {
      if (n.shiftKey) {
        let l = t[Ut(i, n, !1)];
        if (l && l(e.state, e.dispatch, e))
          return !0;
      }
      if ((n.shiftKey || n.altKey || n.metaKey || i.charCodeAt(0) > 127) && (s = V[n.keyCode]) && s != i) {
        let l = t[Ut(s, n)];
        if (l && l(e.state, e.dispatch, e))
          return !0;
      }
    }
    return !1;
  };
}
const ar = (r, t) => r.selection.empty ? !1 : (t && t(r.tr.deleteSelection().scrollIntoView()), !0);
function cr(r, t) {
  let { $cursor: e } = r.selection;
  return !e || (t ? !t.endOfTextblock("backward", r) : e.parentOffset > 0) ? null : e;
}
const fr = (r, t, e) => {
  let n = cr(r, e);
  if (!n)
    return !1;
  let i = fn(n);
  if (!i) {
    let o = n.blockRange(), l = o && st(o);
    return l == null ? !1 : (t && t(r.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (!s.type.spec.isolating && dn(r, i, t))
    return !0;
  if (n.parent.content.size == 0 && (it(s, "end") || M.isSelectable(s))) {
    let o = on(r.doc, n.before(), n.after(), x.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (t) {
        let l = r.tr.step(o);
        l.setSelection(it(s, "end") ? b.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : M.create(l.doc, i.pos - s.nodeSize)), t(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == n.depth - 1 ? (t && t(r.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function it(r, t, e = !1) {
  for (let n = r; n; n = t == "start" ? n.firstChild : n.lastChild) {
    if (n.isTextblock)
      return !0;
    if (e && n.childCount != 1)
      return !1;
  }
  return !1;
}
const ur = (r, t, e) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (e ? !e.endOfTextblock("backward", r) : n.parentOffset > 0)
      return !1;
    s = fn(n);
  }
  let o = s && s.nodeBefore;
  return !o || !M.isSelectable(o) ? !1 : (t && t(r.tr.setSelection(M.create(r.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function fn(r) {
  if (!r.parent.type.spec.isolating)
    for (let t = r.depth - 1; t >= 0; t--) {
      if (r.index(t) > 0)
        return r.doc.resolve(r.before(t + 1));
      if (r.node(t).type.spec.isolating)
        break;
    }
  return null;
}
function hr(r, t) {
  let { $cursor: e } = r.selection;
  return !e || (t ? !t.endOfTextblock("forward", r) : e.parentOffset < e.parent.content.size) ? null : e;
}
const dr = (r, t, e) => {
  let n = hr(r, e);
  if (!n)
    return !1;
  let i = un(n);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (dn(r, i, t))
    return !0;
  if (n.parent.content.size == 0 && (it(s, "start") || M.isSelectable(s))) {
    let o = on(r.doc, n.before(), n.after(), x.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (t) {
        let l = r.tr.step(o);
        l.setSelection(it(s, "start") ? b.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : M.create(l.doc, l.mapping.map(i.pos))), t(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == n.depth - 1 ? (t && t(r.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, pr = (r, t, e) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (e ? !e.endOfTextblock("forward", r) : n.parentOffset < n.parent.content.size)
      return !1;
    s = un(n);
  }
  let o = s && s.nodeAfter;
  return !o || !M.isSelectable(o) ? !1 : (t && t(r.tr.setSelection(M.create(r.doc, s.pos)).scrollIntoView()), !0);
};
function un(r) {
  if (!r.parent.type.spec.isolating)
    for (let t = r.depth - 1; t >= 0; t--) {
      let e = r.node(t);
      if (r.index(t) + 1 < e.childCount)
        return r.doc.resolve(r.after(t + 1));
      if (e.type.spec.isolating)
        break;
    }
  return null;
}
const mr = (r, t) => {
  let e = r.selection, n = e instanceof M, i;
  if (n) {
    if (e.node.isTextblock || !_(r.doc, e.from))
      return !1;
    i = e.from;
  } else if (i = sn(r.doc, e.from, -1), i == null)
    return !1;
  if (t) {
    let s = r.tr.join(i);
    n && s.setSelection(M.create(s.doc, i - r.doc.resolve(i).nodeBefore.nodeSize)), t(s.scrollIntoView());
  }
  return !0;
}, gr = (r, t) => {
  let e = r.selection, n;
  if (e instanceof M) {
    if (e.node.isTextblock || !_(r.doc, e.to))
      return !1;
    n = e.to;
  } else if (n = sn(r.doc, e.to, 1), n == null)
    return !1;
  return t && t(r.tr.join(n).scrollIntoView()), !0;
}, yr = (r, t) => {
  let { $from: e, $to: n } = r.selection, i = e.blockRange(n), s = i && st(i);
  return s == null ? !1 : (t && t(r.tr.lift(i, s).scrollIntoView()), !0);
}, kr = (r, t) => {
  let { $head: e, $anchor: n } = r.selection;
  return !e.parent.type.spec.code || !e.sameParent(n) ? !1 : (t && t(r.tr.insertText(`
`).scrollIntoView()), !0);
};
function hn(r) {
  for (let t = 0; t < r.edgeCount; t++) {
    let { type: e } = r.edge(t);
    if (e.isTextblock && !e.hasRequiredAttrs())
      return e;
  }
  return null;
}
const wr = (r, t) => {
  let { $head: e, $anchor: n } = r.selection;
  if (!e.parent.type.spec.code || !e.sameParent(n))
    return !1;
  let i = e.node(-1), s = e.indexAfter(-1), o = hn(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (t) {
    let l = e.after(), a = r.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(b.near(a.doc.resolve(l), 1)), t(a.scrollIntoView());
  }
  return !0;
}, xr = (r, t) => {
  let e = r.selection, { $from: n, $to: i } = e;
  if (e instanceof L || n.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = hn(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (t) {
    let o = (!n.parentOffset && i.index() < i.parent.childCount ? n : i).pos, l = r.tr.insert(o, s.createAndFill());
    l.setSelection(C.create(l.doc, o + 1)), t(l.scrollIntoView());
  }
  return !0;
}, Sr = (r, t) => {
  let { $cursor: e } = r.selection;
  if (!e || e.parent.content.size)
    return !1;
  if (e.depth > 1 && e.after() != e.end(-1)) {
    let s = e.before();
    if (rt(r.doc, s))
      return t && t(r.tr.split(s).scrollIntoView()), !0;
  }
  let n = e.blockRange(), i = n && st(n);
  return i == null ? !1 : (t && t(r.tr.lift(n, i).scrollIntoView()), !0);
}, br = (r, t) => {
  let { $from: e, to: n } = r.selection, i, s = e.sharedDepth(n);
  return s == 0 ? !1 : (i = e.before(s), t && t(r.tr.setSelection(M.create(r.doc, i))), !0);
};
function Mr(r, t, e) {
  let n = t.nodeBefore, i = t.nodeAfter, s = t.index();
  return !n || !i || !n.type.compatibleContent(i.type) ? !1 : !n.content.size && t.parent.canReplace(s - 1, s) ? (e && e(r.tr.delete(t.pos - n.nodeSize, t.pos).scrollIntoView()), !0) : !t.parent.canReplace(s, s + 1) || !(i.isTextblock || _(r.doc, t.pos)) ? !1 : (e && e(r.tr.clearIncompatible(t.pos, n.type, n.contentMatchAt(n.childCount)).join(t.pos).scrollIntoView()), !0);
}
function dn(r, t, e) {
  let n = t.nodeBefore, i = t.nodeAfter, s, o;
  if (n.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (Mr(r, t, e))
    return !0;
  let l = t.parent.canReplace(t.index(), t.index() + 1);
  if (l && (s = (o = n.contentMatchAt(n.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
    if (e) {
      let u = t.pos + i.nodeSize, h = g.empty;
      for (let m = s.length - 1; m >= 0; m--)
        h = g.from(s[m].create(null, h));
      h = g.from(n.copy(h));
      let d = r.tr.step(new z(t.pos - 1, u, t.pos, u, new x(h, 1, 0), s.length, !0)), p = u + 2 * s.length;
      _(d.doc, p) && d.join(p), e(d.scrollIntoView());
    }
    return !0;
  }
  let a = b.findFrom(t, 1), c = a && a.$from.blockRange(a.$to), f = c && st(c);
  if (f != null && f >= t.depth)
    return e && e(r.tr.lift(c, f).scrollIntoView()), !0;
  if (l && it(i, "start", !0) && it(n, "end")) {
    let u = n, h = [];
    for (; h.push(u), !u.isTextblock; )
      u = u.lastChild;
    let d = i, p = 1;
    for (; !d.isTextblock; d = d.firstChild)
      p++;
    if (u.canReplace(u.childCount, u.childCount, d.content)) {
      if (e) {
        let m = g.empty;
        for (let y = h.length - 1; y >= 0; y--)
          m = g.from(h[y].copy(m));
        let w = r.tr.step(new z(t.pos - h.length, t.pos + i.nodeSize, t.pos + p, t.pos + i.nodeSize - p, new x(m, h.length, 0), 0, !0));
        e(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function pn(r) {
  return function(t, e) {
    let n = t.selection, i = r < 0 ? n.$from : n.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (e && e(t.tr.setSelection(C.create(t.doc, r < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const vr = pn(-1), Er = pn(1);
function Cr(r, t = null) {
  return function(e, n) {
    let { $from: i, $to: s } = e.selection, o = i.blockRange(s), l = o && nn(o, r, t);
    return l ? (n && n(e.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function Ae(r, t = null) {
  return function(e, n) {
    let i = !1;
    for (let s = 0; s < e.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = e.selection.ranges[s];
      e.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(r, t)))
          if (a.type == r)
            i = !0;
          else {
            let f = e.doc.resolve(c), u = f.index();
            i = f.parent.canReplaceWith(u, u + 1, r);
          }
      });
    }
    if (!i)
      return !1;
    if (n) {
      let s = e.tr;
      for (let o = 0; o < e.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = e.selection.ranges[o];
        s.setBlockType(l, a, r, t);
      }
      n(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Tr(r, t = null) {
  return function(e, n) {
    let { $from: i, $to: s } = e.selection, o = i.blockRange(s), l = !1, a = o;
    if (!o)
      return !1;
    if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(r) && o.startIndex == 0) {
      if (i.index(o.depth - 1) == 0)
        return !1;
      let f = e.doc.resolve(o.start - 2);
      a = new vt(f, f, o.depth), o.endIndex < o.parent.childCount && (o = new vt(i, e.doc.resolve(s.end(o.depth)), o.depth)), l = !0;
    }
    let c = nn(a, r, t, o);
    return c ? (n && n(Or(e.tr, o, c, l, r).scrollIntoView()), !0) : !1;
  };
}
function Or(r, t, e, n, i) {
  let s = g.empty;
  for (let f = e.length - 1; f >= 0; f--)
    s = g.from(e[f].type.create(e[f].attrs, s));
  r.step(new z(t.start - (n ? 2 : 0), t.end, t.start, t.end, new x(s, 0, 0), e.length, !0));
  let o = 0;
  for (let f = 0; f < e.length; f++)
    e[f].type == i && (o = f + 1);
  let l = e.length - o, a = t.start + e.length - (n ? 2 : 0), c = t.parent;
  for (let f = t.startIndex, u = t.endIndex, h = !0; f < u; f++, h = !1)
    !h && rt(r.doc, a, l) && (r.split(a, l), a += 2 * l), a += c.child(f).nodeSize;
  return r;
}
function Ar(r) {
  return function(t, e) {
    let { $from: n, $to: i } = t.selection, s = n.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == r);
    return s ? e ? n.node(s.depth - 1).type == r ? Ir(t, e, r, s) : Nr(t, e, s) : !0 : !1;
  };
}
function Ir(r, t, e, n) {
  let i = r.tr, s = n.end, o = n.$to.end(n.depth);
  s < o && (i.step(new z(s - 1, o, s, o, new x(g.from(e.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new vt(i.doc.resolve(n.$from.pos), i.doc.resolve(o), n.depth));
  const l = st(n);
  if (l == null)
    return !1;
  i.lift(n, l);
  let a = i.mapping.map(s, -1) - 1;
  return _(i.doc, a) && i.join(a), t(i.scrollIntoView()), !0;
}
function Nr(r, t, e) {
  let n = r.tr, i = e.parent;
  for (let d = e.end, p = e.endIndex - 1, m = e.startIndex; p > m; p--)
    d -= i.child(p).nodeSize, n.delete(d - 1, d + 1);
  let s = n.doc.resolve(e.start), o = s.nodeAfter;
  if (n.mapping.map(e.end) != e.start + s.nodeAfter.nodeSize)
    return !1;
  let l = e.startIndex == 0, a = e.endIndex == i.childCount, c = s.node(-1), f = s.index(-1);
  if (!c.canReplace(f + (l ? 0 : 1), f + 1, o.content.append(a ? g.empty : g.from(i))))
    return !1;
  let u = s.pos, h = u + o.nodeSize;
  return n.step(new z(u - (l ? 1 : 0), h + (a ? 1 : 0), u + 1, h - 1, new x((l ? g.empty : g.from(i.copy(g.empty))).append(a ? g.empty : g.from(i.copy(g.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), t(n.scrollIntoView()), !0;
}
function zr(r) {
  return function(t, e) {
    let { $from: n, $to: i } = t.selection, s = n.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == r);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != r)
      return !1;
    if (e) {
      let c = a.lastChild && a.lastChild.type == l.type, f = g.from(c ? r.create() : null), u = new x(g.from(r.create(null, g.from(l.type.create(null, f)))), c ? 3 : 1, 0), h = s.start, d = s.end;
      e(t.tr.step(new z(h - (c ? 3 : 1), d, h, d, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Ft(r) {
  const { state: t, transaction: e } = r;
  let { selection: n } = e, { doc: i } = e, { storedMarks: s } = e;
  return {
    ...t,
    apply: t.apply.bind(t),
    applyTransaction: t.applyTransaction.bind(t),
    filterTransaction: t.filterTransaction,
    plugins: t.plugins,
    schema: t.schema,
    reconfigure: t.reconfigure.bind(t),
    toJSON: t.toJSON.bind(t),
    get storedMarks() {
      return s;
    },
    get selection() {
      return n;
    },
    get doc() {
      return i;
    },
    get tr() {
      return n = e.selection, i = e.doc, s = e.storedMarks, e;
    }
  };
}
class ae {
  constructor(t) {
    this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: t, editor: e, state: n } = this, { view: i } = e, { tr: s } = n, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(t).map(([l, a]) => [l, (...f) => {
      const u = a(...f)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(t, e = !0) {
    const { rawCommands: n, editor: i, state: s } = this, { view: o } = i, l = [], a = !!t, c = t || s.tr, f = () => (!a && e && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((h) => h === !0)), u = {
      ...Object.fromEntries(Object.entries(n).map(([h, d]) => [h, (...m) => {
        const w = this.buildProps(c, e), y = d(...m)(w);
        return l.push(y), u;
      }])),
      run: f
    };
    return u;
  }
  createCan(t) {
    const { rawCommands: e, state: n } = this, i = !1, s = t || n.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(e).map(([a, c]) => [a, (...f) => c(...f)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(t, e = !0) {
    const { rawCommands: n, editor: i, state: s } = this, { view: o } = i;
    s.storedMarks && t.setStoredMarks(s.storedMarks);
    const l = {
      tr: t,
      editor: i,
      view: o,
      state: Ft({
        state: s,
        transaction: t
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(t),
      can: () => this.createCan(t),
      get commands() {
        return Object.fromEntries(Object.entries(n).map(([a, c]) => [a, (...f) => c(...f)(l)]));
      }
    };
    return l;
  }
}
function k(r, t, e) {
  return r.config[t] === void 0 && r.parent ? k(r.parent, t, e) : typeof r.config[t] == "function" ? r.config[t].bind({
    ...e,
    parent: r.parent ? k(r.parent, t, e) : null
  }) : r.config[t];
}
function Bt(r) {
  const t = r.filter((i) => i.type === "extension"), e = r.filter((i) => i.type === "node"), n = r.filter((i) => i.type === "mark");
  return {
    baseExtensions: t,
    nodeExtensions: e,
    markExtensions: n
  };
}
function mn(r) {
  const t = [], { nodeExtensions: e, markExtensions: n } = Bt(r), i = [...e, ...n], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return r.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = k(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((f) => {
      f.types.forEach((u) => {
        Object.entries(f.attributes).forEach(([h, d]) => {
          t.push({
            type: u,
            name: h,
            attribute: {
              ...s,
              ...d
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = k(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([f, u]) => {
      const h = {
        ...s,
        ...u
      };
      typeof (h == null ? void 0 : h.default) == "function" && (h.default = h.default()), h != null && h.isRequired && (h == null ? void 0 : h.default) === void 0 && delete h.default, t.push({
        type: o.name,
        name: f,
        attribute: h
      });
    });
  }), t;
}
function N(r, t) {
  if (typeof r == "string") {
    if (!t.nodes[r])
      throw Error(`There is no node type named '${r}'. Maybe you forgot to add the extension?`);
    return t.nodes[r];
  }
  return r;
}
function Rr(...r) {
  return r.filter((t) => !!t).reduce((t, e) => {
    const n = { ...t };
    return Object.entries(e).forEach(([i, s]) => {
      if (!n[i]) {
        n[i] = s;
        return;
      }
      i === "class" ? n[i] = [n[i], s].join(" ") : i === "style" ? n[i] = [n[i], s].join("; ") : n[i] = s;
    }), n;
  }, {});
}
function ne(r, t) {
  return t.filter((e) => e.attribute.rendered).map((e) => e.attribute.renderHTML ? e.attribute.renderHTML(r.attrs) || {} : {
    [e.name]: r.attrs[e.name]
  }).reduce((e, n) => Rr(e, n), {});
}
function Fr(r) {
  return typeof r == "function";
}
function S(r, t = void 0, ...e) {
  return Fr(r) ? t ? r.bind(t)(...e) : r(...e) : r;
}
function Br(r = {}) {
  return Object.keys(r).length === 0 && r.constructor === Object;
}
function Pr(r) {
  return typeof r != "string" ? r : r.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(r) : r === "true" ? !0 : r === "false" ? !1 : r;
}
function Ie(r, t) {
  return r.style ? r : {
    ...r,
    getAttrs: (e) => {
      const n = r.getAttrs ? r.getAttrs(e) : r.attrs;
      if (n === !1)
        return !1;
      const i = t.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(e) : Pr(e.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...n, ...i };
    }
  };
}
function Ne(r) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(r).filter(([t, e]) => t === "attrs" && Br(e) ? !1 : e != null)
  );
}
function gn(r, t) {
  var e;
  const n = mn(r), { nodeExtensions: i, markExtensions: s } = Bt(r), o = (e = i.find((c) => k(c, "topNode"))) === null || e === void 0 ? void 0 : e.name, l = Object.fromEntries(i.map((c) => {
    const f = n.filter((y) => y.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: t
    }, h = r.reduce((y, E) => {
      const O = k(E, "extendNodeSchema", u);
      return {
        ...y,
        ...O ? O(c) : {}
      };
    }, {}), d = Ne({
      ...h,
      content: S(k(c, "content", u)),
      marks: S(k(c, "marks", u)),
      group: S(k(c, "group", u)),
      inline: S(k(c, "inline", u)),
      atom: S(k(c, "atom", u)),
      selectable: S(k(c, "selectable", u)),
      draggable: S(k(c, "draggable", u)),
      code: S(k(c, "code", u)),
      defining: S(k(c, "defining", u)),
      isolating: S(k(c, "isolating", u)),
      attrs: Object.fromEntries(f.map((y) => {
        var E;
        return [y.name, { default: (E = y == null ? void 0 : y.attribute) === null || E === void 0 ? void 0 : E.default }];
      }))
    }), p = S(k(c, "parseHTML", u));
    p && (d.parseDOM = p.map((y) => Ie(y, f)));
    const m = k(c, "renderHTML", u);
    m && (d.toDOM = (y) => m({
      node: y,
      HTMLAttributes: ne(y, f)
    }));
    const w = k(c, "renderText", u);
    return w && (d.toText = w), [c.name, d];
  })), a = Object.fromEntries(s.map((c) => {
    const f = n.filter((w) => w.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: t
    }, h = r.reduce((w, y) => {
      const E = k(y, "extendMarkSchema", u);
      return {
        ...w,
        ...E ? E(c) : {}
      };
    }, {}), d = Ne({
      ...h,
      inclusive: S(k(c, "inclusive", u)),
      excludes: S(k(c, "excludes", u)),
      group: S(k(c, "group", u)),
      spanning: S(k(c, "spanning", u)),
      code: S(k(c, "code", u)),
      attrs: Object.fromEntries(f.map((w) => {
        var y;
        return [w.name, { default: (y = w == null ? void 0 : w.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), p = S(k(c, "parseHTML", u));
    p && (d.parseDOM = p.map((w) => Ie(w, f)));
    const m = k(c, "renderHTML", u);
    return m && (d.toDOM = (w) => m({
      mark: w,
      HTMLAttributes: ne(w, f)
    })), [c.name, d];
  }));
  return new Pn({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function Gt(r, t) {
  return t.nodes[r] || t.marks[r] || null;
}
function ze(r, t) {
  return Array.isArray(t) ? t.some((e) => (typeof e == "string" ? e : e.name) === r.name) : t;
}
const Dr = (r, t = 500) => {
  let e = "";
  const n = r.parentOffset;
  return r.parent.nodesBetween(Math.max(0, n - t), n, (i, s, o, l) => {
    var a, c;
    const f = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    e += f.slice(0, Math.max(0, n - s));
  }), e;
};
function ce(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}
const Jr = (r, t) => {
  if (ce(t))
    return t.exec(r);
  const e = t(r);
  if (!e)
    return null;
  const n = [e.text];
  return n.index = e.index, n.input = r, n.data = e.data, e.replaceWith && (e.text.includes(e.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), n.push(e.replaceWith)), n;
};
function Qt(r) {
  var t;
  const { editor: e, from: n, to: i, text: s, rules: o, plugin: l } = r, { view: a } = e;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(n);
  if (
    // check for code node
    c.parent.type.spec.code || !((t = c.nodeBefore || c.nodeAfter) === null || t === void 0) && t.marks.find((h) => h.type.spec.code)
  )
    return !1;
  let f = !1;
  const u = Dr(c) + s;
  return o.forEach((h) => {
    if (f)
      return;
    const d = Jr(u, h.find);
    if (!d)
      return;
    const p = a.state.tr, m = Ft({
      state: a.state,
      transaction: p
    }), w = {
      from: n - (d[0].length - s.length),
      to: i
    }, { commands: y, chain: E, can: O } = new ae({
      editor: e,
      state: m
    });
    h.handler({
      state: m,
      range: w,
      match: d,
      commands: y,
      chain: E,
      can: O
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: n,
      to: i,
      text: s
    }), a.dispatch(p), f = !0);
  }), f;
}
function Lr(r) {
  const { editor: t, rules: e } = r, n = new q({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const o = i.getMeta(n);
        return o || (i.selectionSet || i.docChanged ? null : s);
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return Qt({
          editor: t,
          from: s,
          to: o,
          text: l,
          rules: e,
          plugin: n
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && Qt({
            editor: t,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: e,
            plugin: n
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? Qt({
          editor: t,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: e,
          plugin: n
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return n;
}
function jr(r) {
  return typeof r == "number";
}
const $r = (r, t) => {
  if (ce(t))
    return [...r.matchAll(t)];
  const e = t(r);
  return e ? e.map((n) => {
    const i = [n.text];
    return i.index = n.index, i.input = r, i.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(n.replaceWith)), i;
  }) : [];
};
function Wr(r) {
  const { editor: t, state: e, from: n, to: i, rule: s } = r, { commands: o, chain: l, can: a } = new ae({
    editor: t,
    state: e
  }), c = [];
  return e.doc.nodesBetween(n, i, (u, h) => {
    if (!u.isTextblock || u.type.spec.code)
      return;
    const d = Math.max(n, h), p = Math.min(i, h + u.content.size), m = u.textBetween(d - h, p - h, void 0, "￼");
    $r(m, s.find).forEach((y) => {
      if (y.index === void 0)
        return;
      const E = d + y.index + 1, O = E + y[0].length, D = {
        from: e.tr.mapping.map(E),
        to: e.tr.mapping.map(O)
      }, F = s.handler({
        state: e,
        range: D,
        match: y,
        commands: o,
        chain: l,
        can: a
      });
      c.push(F);
    });
  }), c.every((u) => u !== null);
}
function Vr(r) {
  const { editor: t, rules: e } = r;
  let n = null, i = !1, s = !1;
  return e.map((l) => new q({
    // we register a global drag handler to track the current drag source element
    view(a) {
      const c = (f) => {
        var u;
        n = !((u = a.dom.parentElement) === null || u === void 0) && u.contains(f.target) ? a.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", c), {
        destroy() {
          window.removeEventListener("dragstart", c);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (a) => (s = n === a.dom.parentElement, !1),
        paste: (a, c) => {
          var f;
          const u = (f = c.clipboardData) === null || f === void 0 ? void 0 : f.getData("text/html");
          return i = !!(u != null && u.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (a, c, f) => {
      const u = a[0], h = u.getMeta("uiEvent") === "paste" && !i, d = u.getMeta("uiEvent") === "drop" && !s;
      if (!h && !d)
        return;
      const p = c.doc.content.findDiffStart(f.doc.content), m = c.doc.content.findDiffEnd(f.doc.content);
      if (!jr(p) || !m || p === m.b)
        return;
      const w = f.tr, y = Ft({
        state: f,
        transaction: w
      });
      if (!(!Wr({
        editor: t,
        state: y,
        from: Math.max(p - 1, 0),
        to: m.b - 1,
        rule: l
      }) || !w.steps.length))
        return w;
    }
  }));
}
function qr(r) {
  const t = r.filter((e, n) => r.indexOf(e) !== n);
  return [...new Set(t)];
}
class nt {
  constructor(t, e) {
    this.splittableMarks = [], this.editor = e, this.extensions = nt.resolve(t), this.schema = gn(this.extensions, e), this.extensions.forEach((n) => {
      var i;
      this.editor.extensionStorage[n.name] = n.storage;
      const s = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: this.editor,
        type: Gt(n.name, this.schema)
      };
      n.type === "mark" && (!((i = S(k(n, "keepOnSplit", s))) !== null && i !== void 0) || i) && this.splittableMarks.push(n.name);
      const o = k(n, "onBeforeCreate", s);
      o && this.editor.on("beforeCreate", o);
      const l = k(n, "onCreate", s);
      l && this.editor.on("create", l);
      const a = k(n, "onUpdate", s);
      a && this.editor.on("update", a);
      const c = k(n, "onSelectionUpdate", s);
      c && this.editor.on("selectionUpdate", c);
      const f = k(n, "onTransaction", s);
      f && this.editor.on("transaction", f);
      const u = k(n, "onFocus", s);
      u && this.editor.on("focus", u);
      const h = k(n, "onBlur", s);
      h && this.editor.on("blur", h);
      const d = k(n, "onDestroy", s);
      d && this.editor.on("destroy", d);
    });
  }
  static resolve(t) {
    const e = nt.sort(nt.flatten(t)), n = qr(e.map((i) => i.name));
    return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), e;
  }
  static flatten(t) {
    return t.map((e) => {
      const n = {
        name: e.name,
        options: e.options,
        storage: e.storage
      }, i = k(e, "addExtensions", n);
      return i ? [e, ...this.flatten(i())] : e;
    }).flat(10);
  }
  static sort(t) {
    return t.sort((n, i) => {
      const s = k(n, "priority") || 100, o = k(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((t, e) => {
      const n = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: Gt(e.name, this.schema)
      }, i = k(e, "addCommands", n);
      return i ? {
        ...t,
        ...i()
      } : t;
    }, {});
  }
  get plugins() {
    const { editor: t } = this, e = nt.sort([...this.extensions].reverse()), n = [], i = [], s = e.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: t,
        type: Gt(o.name, this.schema)
      }, a = [], c = k(o, "addKeyboardShortcuts", l);
      let f = {};
      if (o.type === "mark" && o.config.exitable && (f.ArrowRight = () => zt.handleExit({ editor: t, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([w, y]) => [w, () => y({ editor: t })]));
        f = { ...f, ...m };
      }
      const u = or(f);
      a.push(u);
      const h = k(o, "addInputRules", l);
      ze(o, t.options.enableInputRules) && h && n.push(...h());
      const d = k(o, "addPasteRules", l);
      ze(o, t.options.enablePasteRules) && d && i.push(...d());
      const p = k(o, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      Lr({
        editor: t,
        rules: n
      }),
      ...Vr({
        editor: t,
        rules: i
      }),
      ...s
    ];
  }
  get attributes() {
    return mn(this.extensions);
  }
  get nodeViews() {
    const { editor: t } = this, { nodeExtensions: e } = Bt(this.extensions);
    return Object.fromEntries(e.filter((n) => !!k(n, "addNodeView")).map((n) => {
      const i = this.attributes.filter((a) => a.type === n.name), s = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: t,
        type: N(n.name, this.schema)
      }, o = k(n, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, f, u) => {
        const h = ne(a, i);
        return o()({
          editor: t,
          node: a,
          getPos: f,
          decorations: u,
          HTMLAttributes: h,
          extension: n
        });
      };
      return [n.name, l];
    }));
  }
}
function Hr(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
function Xt(r) {
  return Hr(r) !== "Object" ? !1 : r.constructor === Object && Object.getPrototypeOf(r) === Object.prototype;
}
function fe(r, t) {
  const e = { ...r };
  return Xt(r) && Xt(t) && Object.keys(t).forEach((n) => {
    Xt(t[n]) ? n in r ? e[n] = fe(r[n], t[n]) : Object.assign(e, { [n]: t[n] }) : Object.assign(e, { [n]: t[n] });
  }), e;
}
class $ {
  constructor(t = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = S(k(this, "addOptions", {
      name: this.name
    }))), this.storage = S(k(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new $(t);
  }
  configure(t = {}) {
    const e = this.extend();
    return e.options = fe(this.options, t), e.storage = S(k(e, "addStorage", {
      name: e.name,
      options: e.options
    })), e;
  }
  extend(t = {}) {
    const e = new $(t);
    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = S(k(e, "addOptions", {
      name: e.name
    })), e.storage = S(k(e, "addStorage", {
      name: e.name,
      options: e.options
    })), e;
  }
}
function Kr(r, t, e) {
  const { from: n, to: i } = t, { blockSeparator: s = `

`, textSerializers: o = {} } = e || {};
  let l = "", a = !0;
  return r.nodesBetween(n, i, (c, f, u, h) => {
    var d;
    const p = o == null ? void 0 : o[c.type.name];
    p ? (c.isBlock && !a && (l += s, a = !0), u && (l += p({
      node: c,
      pos: f,
      parent: u,
      index: h,
      range: t
    }))) : c.isText ? (l += (d = c == null ? void 0 : c.text) === null || d === void 0 ? void 0 : d.slice(Math.max(n, f) - f, i - f), a = !1) : c.isBlock && !a && (l += s, a = !0);
  }), l;
}
function Ur(r) {
  return Object.fromEntries(Object.entries(r.nodes).filter(([, t]) => t.spec.toText).map(([t, e]) => [t, e.spec.toText]));
}
$.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new q({
        key: new mt("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: r } = this, { state: t, schema: e } = r, { doc: n, selection: i } = t, { ranges: s } = i, o = Math.min(...s.map((f) => f.$from.pos)), l = Math.max(...s.map((f) => f.$to.pos)), a = Ur(e);
            return Kr(n, { from: o, to: l }, {
              textSerializers: a
            });
          }
        }
      })
    ];
  }
});
const Gr = () => ({ editor: r, view: t }) => (requestAnimationFrame(() => {
  var e;
  r.isDestroyed || (t.dom.blur(), (e = window == null ? void 0 : window.getSelection()) === null || e === void 0 || e.removeAllRanges());
}), !0), Qr = (r = !1) => ({ commands: t }) => t.setContent("", r), Xr = () => ({ state: r, tr: t, dispatch: e }) => {
  const { selection: n } = t, { ranges: i } = n;
  return e && i.forEach(({ $from: s, $to: o }) => {
    r.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: f } = t, u = c.resolve(f.map(a)), h = c.resolve(f.map(a + l.nodeSize)), d = u.blockRange(h);
      if (!d)
        return;
      const p = st(d);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        t.setNodeMarkup(d.start, m);
      }
      (p || p === 0) && t.lift(d, p);
    });
  }), !0;
}, Yr = (r) => (t) => r(t), Zr = () => ({ state: r, dispatch: t }) => xr(r, t), _r = () => ({ tr: r, dispatch: t }) => {
  const { selection: e } = r, n = e.$anchor.node();
  if (n.content.size > 0)
    return !1;
  const i = r.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === n.type) {
      if (t) {
        const l = i.before(s), a = i.after(s);
        r.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, ti = (r) => ({ tr: t, state: e, dispatch: n }) => {
  const i = N(r, e.schema), s = t.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (n) {
        const a = s.before(o), c = s.after(o);
        t.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, ei = (r) => ({ tr: t, dispatch: e }) => {
  const { from: n, to: i } = r;
  return e && t.delete(n, i), !0;
}, ni = () => ({ state: r, dispatch: t }) => ar(r, t), ri = () => ({ commands: r }) => r.keyboardShortcut("Enter"), ii = () => ({ state: r, dispatch: t }) => wr(r, t);
function It(r, t, e = { strict: !0 }) {
  const n = Object.keys(t);
  return n.length ? n.every((i) => e.strict ? t[i] === r[i] : ce(t[i]) ? t[i].test(r[i]) : t[i] === r[i]) : !0;
}
function re(r, t, e = {}) {
  return r.find((n) => n.type === t && It(n.attrs, e));
}
function si(r, t, e = {}) {
  return !!re(r, t, e);
}
function yn(r, t, e = {}) {
  if (!r || !t)
    return;
  let n = r.parent.childAfter(r.parentOffset);
  if (r.parentOffset === n.offset && n.offset !== 0 && (n = r.parent.childBefore(r.parentOffset)), !n.node)
    return;
  const i = re([...n.node.marks], t, e);
  if (!i)
    return;
  let s = n.index, o = r.start() + n.offset, l = s + 1, a = o + n.node.nodeSize;
  for (re([...n.node.marks], t, e); s > 0 && i.isInSet(r.parent.child(s - 1).marks); )
    s -= 1, o -= r.parent.child(s).nodeSize;
  for (; l < r.parent.childCount && si([...r.parent.child(l).marks], t, e); )
    a += r.parent.child(l).nodeSize, l += 1;
  return {
    from: o,
    to: a
  };
}
function H(r, t) {
  if (typeof r == "string") {
    if (!t.marks[r])
      throw Error(`There is no mark type named '${r}'. Maybe you forgot to add the extension?`);
    return t.marks[r];
  }
  return r;
}
const oi = (r, t = {}) => ({ tr: e, state: n, dispatch: i }) => {
  const s = H(r, n.schema), { doc: o, selection: l } = e, { $from: a, from: c, to: f } = l;
  if (i) {
    const u = yn(a, s, t);
    if (u && u.from <= c && u.to >= f) {
      const h = C.create(o, u.from, u.to);
      e.setSelection(h);
    }
  }
  return !0;
}, li = (r) => (t) => {
  const e = typeof r == "function" ? r(t) : r;
  for (let n = 0; n < e.length; n += 1)
    if (e[n](t))
      return !0;
  return !1;
};
function kn(r) {
  return r instanceof C;
}
function Q(r = 0, t = 0, e = 0) {
  return Math.min(Math.max(r, t), e);
}
function ai(r, t = null) {
  if (!t)
    return null;
  const e = b.atStart(r), n = b.atEnd(r);
  if (t === "start" || t === !0)
    return e;
  if (t === "end")
    return n;
  const i = e.from, s = n.to;
  return t === "all" ? C.create(r, Q(0, i, s), Q(r.content.size, i, s)) : C.create(r, Q(t, i, s), Q(t, i, s));
}
function ue() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const ci = (r = null, t = {}) => ({ editor: e, view: n, tr: i, dispatch: s }) => {
  t = {
    scrollIntoView: !0,
    ...t
  };
  const o = () => {
    ue() && n.dom.focus(), requestAnimationFrame(() => {
      e.isDestroyed || (n.focus(), t != null && t.scrollIntoView && e.commands.scrollIntoView());
    });
  };
  if (n.hasFocus() && r === null || r === !1)
    return !0;
  if (s && r === null && !kn(e.state.selection))
    return o(), !0;
  const l = ai(i.doc, r) || e.state.selection, a = e.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, fi = (r, t) => (e) => r.every((n, i) => t(n, { ...e, index: i })), ui = (r, t) => ({ tr: e, commands: n }) => n.insertContentAt({ from: e.selection.from, to: e.selection.to }, r, t);
function ie(r) {
  const t = `<body>${r}</body>`;
  return new window.DOMParser().parseFromString(t, "text/html").body;
}
function Nt(r, t, e) {
  if (e = {
    slice: !0,
    parseOptions: {},
    ...e
  }, typeof r == "object" && r !== null)
    try {
      return Array.isArray(r) && r.length > 0 ? g.fromArray(r.map((n) => t.nodeFromJSON(n))) : t.nodeFromJSON(r);
    } catch (n) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", r, "Error:", n), Nt("", t, e);
    }
  if (typeof r == "string") {
    const n = ht.fromSchema(t);
    return e.slice ? n.parseSlice(ie(r), e.parseOptions).content : n.parse(ie(r), e.parseOptions);
  }
  return Nt("", t, e);
}
function hi(r, t, e) {
  const n = r.steps.length - 1;
  if (n < t)
    return;
  const i = r.steps[n];
  if (!(i instanceof B || i instanceof z))
    return;
  const s = r.mapping.maps[n];
  let o = 0;
  s.forEach((l, a, c, f) => {
    o === 0 && (o = f);
  }), r.setSelection(b.near(r.doc.resolve(o), e));
}
const di = (r) => r.toString().startsWith("<"), pi = (r, t, e) => ({ tr: n, dispatch: i, editor: s }) => {
  if (i) {
    e = {
      parseOptions: {},
      updateSelection: !0,
      ...e
    };
    const o = Nt(t, s.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...e.parseOptions
      }
    });
    if (o.toString() === "<>")
      return !0;
    let { from: l, to: a } = typeof r == "number" ? { from: r, to: r } : r, c = !0, f = !0;
    if ((di(o) ? o : [o]).forEach((h) => {
      h.check(), c = c ? h.isText && h.marks.length === 0 : !1, f = f ? h.isBlock : !1;
    }), l === a && f) {
      const { parent: h } = n.doc.resolve(l);
      h.isTextblock && !h.type.spec.code && !h.childCount && (l -= 1, a += 1);
    }
    c ? Array.isArray(t) ? n.insertText(t.map((h) => h.text || "").join(""), l, a) : typeof t == "object" && t && t.text ? n.insertText(t.text, l, a) : n.insertText(t, l, a) : n.replaceWith(l, a, o), e.updateSelection && hi(n, n.steps.length - 1, -1);
  }
  return !0;
}, mi = () => ({ state: r, dispatch: t }) => mr(r, t), gi = () => ({ state: r, dispatch: t }) => gr(r, t), yi = () => ({ state: r, dispatch: t }) => fr(r, t), ki = () => ({ state: r, dispatch: t }) => dr(r, t);
function wn() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function wi(r) {
  const t = r.split(/-(?!$)/);
  let e = t[t.length - 1];
  e === "Space" && (e = " ");
  let n, i, s, o;
  for (let l = 0; l < t.length - 1; l += 1) {
    const a = t[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      ue() || wn() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return n && (e = `Alt-${e}`), i && (e = `Ctrl-${e}`), o && (e = `Meta-${e}`), s && (e = `Shift-${e}`), e;
}
const xi = (r) => ({ editor: t, view: e, tr: n, dispatch: i }) => {
  const s = wi(r).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = t.captureTransaction(() => {
    e.someProp("handleKeyDown", (c) => c(e, l));
  });
  return a == null || a.steps.forEach((c) => {
    const f = c.map(n.mapping);
    f && i && n.maybeStep(f);
  }), !0;
};
function he(r, t, e = {}) {
  const { from: n, to: i, empty: s } = r.selection, o = t ? N(t, r.schema) : null, l = [];
  r.doc.nodesBetween(n, i, (u, h) => {
    if (u.isText)
      return;
    const d = Math.max(n, h), p = Math.min(i, h + u.nodeSize);
    l.push({
      node: u,
      from: d,
      to: p
    });
  });
  const a = i - n, c = l.filter((u) => o ? o.name === u.node.type.name : !0).filter((u) => It(u.node.attrs, e, { strict: !1 }));
  return s ? !!c.length : c.reduce((u, h) => u + h.to - h.from, 0) >= a;
}
const Si = (r, t = {}) => ({ state: e, dispatch: n }) => {
  const i = N(r, e.schema);
  return he(e, i, t) ? yr(e, n) : !1;
}, bi = () => ({ state: r, dispatch: t }) => Sr(r, t), Mi = (r) => ({ state: t, dispatch: e }) => {
  const n = N(r, t.schema);
  return Ar(n)(t, e);
}, vi = () => ({ state: r, dispatch: t }) => kr(r, t);
function xn(r, t) {
  return t.nodes[r] ? "node" : t.marks[r] ? "mark" : null;
}
function Re(r, t) {
  const e = typeof t == "string" ? [t] : t;
  return Object.keys(r).reduce((n, i) => (e.includes(i) || (n[i] = r[i]), n), {});
}
const Ei = (r, t) => ({ tr: e, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = xn(typeof r == "string" ? r : r.name, n.schema);
  return l ? (l === "node" && (s = N(r, n.schema)), l === "mark" && (o = H(r, n.schema)), i && e.selection.ranges.forEach((a) => {
    n.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, f) => {
      s && s === c.type && e.setNodeMarkup(f, void 0, Re(c.attrs, t)), o && c.marks.length && c.marks.forEach((u) => {
        o === u.type && e.addMark(f, f + c.nodeSize, o.create(Re(u.attrs, t)));
      });
    });
  }), !0) : !1;
}, Ci = () => ({ tr: r, dispatch: t }) => (t && r.scrollIntoView(), !0), Ti = () => ({ tr: r, commands: t }) => t.setTextSelection({
  from: 0,
  to: r.doc.content.size
}), Oi = () => ({ state: r, dispatch: t }) => ur(r, t), Ai = () => ({ state: r, dispatch: t }) => pr(r, t), Ii = () => ({ state: r, dispatch: t }) => br(r, t), Ni = () => ({ state: r, dispatch: t }) => Er(r, t), zi = () => ({ state: r, dispatch: t }) => vr(r, t);
function Ri(r, t, e = {}) {
  return Nt(r, t, { slice: !1, parseOptions: e });
}
const Fi = (r, t = !1, e = {}) => ({ tr: n, editor: i, dispatch: s }) => {
  const { doc: o } = n, l = Ri(r, i.schema, e);
  return s && n.replaceWith(0, o.content.size, l).setMeta("preventUpdate", !t), !0;
};
function Bi(r) {
  for (let t = 0; t < r.edgeCount; t += 1) {
    const { type: e } = r.edge(t);
    if (e.isTextblock && !e.hasRequiredAttrs())
      return e;
  }
  return null;
}
function Pi(r, t) {
  for (let e = r.depth; e > 0; e -= 1) {
    const n = r.node(e);
    if (t(n))
      return {
        pos: e > 0 ? r.before(e) : 0,
        start: r.start(e),
        depth: e,
        node: n
      };
  }
}
function de(r) {
  return (t) => Pi(t.$from, r);
}
function Di(r, t) {
  const e = et.fromSchema(t).serializeFragment(r), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(e), i.innerHTML;
}
function Sn(r, t) {
  const e = nt.resolve(r);
  return gn(e, t);
}
function Ji(r, t) {
  const e = Sn(t), n = J.fromJSON(e, r);
  return Di(n.content, e);
}
function Li(r, t) {
  const e = Sn(t), n = ie(r);
  return ht.fromSchema(e).parse(n).toJSON();
}
function ji(r, t) {
  const e = H(t, r.schema), { from: n, to: i, empty: s } = r.selection, o = [];
  s ? (r.storedMarks && o.push(...r.storedMarks), o.push(...r.selection.$head.marks())) : r.doc.nodesBetween(n, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === e.name);
  return l ? { ...l.attrs } : {};
}
function xt(r, t, e) {
  return Object.fromEntries(Object.entries(e).filter(([n]) => {
    const i = r.find((s) => s.type === t && s.name === n);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function $i(r, t, e = {}) {
  const { empty: n, ranges: i } = r.selection, s = t ? H(t, r.schema) : null;
  if (n)
    return !!(r.storedMarks || r.selection.$from.marks()).filter((u) => s ? s.name === u.type.name : !0).find((u) => It(u.attrs, e, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: h }) => {
    const d = u.pos, p = h.pos;
    r.doc.nodesBetween(d, p, (m, w) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(d, w), E = Math.min(p, w + m.nodeSize), O = E - y;
      o += O, l.push(...m.marks.map((D) => ({
        mark: D,
        from: y,
        to: E
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((u) => s ? s.name === u.mark.type.name : !0).filter((u) => It(u.mark.attrs, e, { strict: !1 })).reduce((u, h) => u + h.to - h.from, 0), c = l.filter((u) => s ? u.mark.type !== s && u.mark.type.excludes(s) : !0).reduce((u, h) => u + h.to - h.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function Fe(r, t) {
  const { nodeExtensions: e } = Bt(t), n = e.find((o) => o.name === r);
  if (!n)
    return !1;
  const i = {
    name: n.name,
    options: n.options,
    storage: n.storage
  }, s = S(k(n, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Wi(r, t, e) {
  var n;
  const { selection: i } = t;
  let s = null;
  if (kn(i) && (s = i.$cursor), s) {
    const l = (n = r.storedMarks) !== null && n !== void 0 ? n : s.marks();
    return !!e.isInSet(l) || !l.some((a) => a.type.excludes(e));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? r.doc.inlineContent && r.doc.type.allowsMarkType(e) : !1;
    return r.doc.nodesBetween(l.pos, a.pos, (f, u, h) => {
      if (c)
        return !1;
      if (f.isInline) {
        const d = !h || h.type.allowsMarkType(e), p = !!e.isInSet(f.marks) || !f.marks.some((m) => m.type.excludes(e));
        c = d && p;
      }
      return !c;
    }), c;
  });
}
const Vi = (r, t = {}) => ({ tr: e, state: n, dispatch: i }) => {
  const { selection: s } = e, { empty: o, ranges: l } = s, a = H(r, n.schema);
  if (i)
    if (o) {
      const c = ji(n, a);
      e.addStoredMark(a.create({
        ...c,
        ...t
      }));
    } else
      l.forEach((c) => {
        const f = c.$from.pos, u = c.$to.pos;
        n.doc.nodesBetween(f, u, (h, d) => {
          const p = Math.max(d, f), m = Math.min(d + h.nodeSize, u);
          h.marks.find((y) => y.type === a) ? h.marks.forEach((y) => {
            a === y.type && e.addMark(p, m, a.create({
              ...y.attrs,
              ...t
            }));
          }) : e.addMark(p, m, a.create(t));
        });
      });
  return Wi(n, e, a);
}, qi = (r, t) => ({ tr: e }) => (e.setMeta(r, t), !0), Hi = (r, t = {}) => ({ state: e, dispatch: n, chain: i }) => {
  const s = N(r, e.schema);
  return s.isTextblock ? i().command(({ commands: o }) => Ae(s, t)(e) ? !0 : o.clearNodes()).command(({ state: o }) => Ae(s, t)(o, n)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Ki = (r) => ({ tr: t, dispatch: e }) => {
  if (e) {
    const { doc: n } = t, i = Q(r, 0, n.content.size), s = M.create(n, i);
    t.setSelection(s);
  }
  return !0;
}, Ui = (r) => ({ tr: t, dispatch: e }) => {
  if (e) {
    const { doc: n } = t, { from: i, to: s } = typeof r == "number" ? { from: r, to: r } : r, o = C.atStart(n).from, l = C.atEnd(n).to, a = Q(i, o, l), c = Q(s, o, l), f = C.create(n, a, c);
    t.setSelection(f);
  }
  return !0;
}, Gi = (r) => ({ state: t, dispatch: e }) => {
  const n = N(r, t.schema);
  return zr(n)(t, e);
};
function Be(r, t) {
  const e = r.storedMarks || r.selection.$to.parentOffset && r.selection.$from.marks();
  if (e) {
    const n = e.filter((i) => t == null ? void 0 : t.includes(i.type.name));
    r.tr.ensureMarks(n);
  }
}
const Qi = ({ keepMarks: r = !0 } = {}) => ({ tr: t, state: e, dispatch: n, editor: i }) => {
  const { selection: s, doc: o } = t, { $from: l, $to: a } = s, c = i.extensionManager.attributes, f = xt(c, l.node().type.name, l.node().attrs);
  if (s instanceof M && s.node.isBlock)
    return !l.parentOffset || !rt(o, l.pos) ? !1 : (n && (r && Be(e, i.extensionManager.splittableMarks), t.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  if (n) {
    const u = a.parentOffset === a.parent.content.size;
    s instanceof C && t.deleteSelection();
    const h = l.depth === 0 ? void 0 : Bi(l.node(-1).contentMatchAt(l.indexAfter(-1)));
    let d = u && h ? [
      {
        type: h,
        attrs: f
      }
    ] : void 0, p = rt(t.doc, t.mapping.map(l.pos), 1, d);
    if (!d && !p && rt(t.doc, t.mapping.map(l.pos), 1, h ? [{ type: h }] : void 0) && (p = !0, d = h ? [
      {
        type: h,
        attrs: f
      }
    ] : void 0), p && (t.split(t.mapping.map(l.pos), 1, d), h && !u && !l.parentOffset && l.parent.type !== h)) {
      const m = t.mapping.map(l.before()), w = t.doc.resolve(m);
      l.node(-1).canReplaceWith(w.index(), w.index() + 1, h) && t.setNodeMarkup(t.mapping.map(l.before()), h);
    }
    r && Be(e, i.extensionManager.splittableMarks), t.scrollIntoView();
  }
  return !0;
}, Xi = (r) => ({ tr: t, state: e, dispatch: n, editor: i }) => {
  var s;
  const o = N(r, e.schema), { $from: l, $to: a } = e.selection, c = e.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const f = l.node(-1);
  if (f.type !== o)
    return !1;
  const u = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== o || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (n) {
      let w = g.empty;
      const y = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let W = l.depth - y; W >= l.depth - 3; W -= 1)
        w = g.from(l.node(W).copy(w));
      const E = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, O = xt(u, l.node().type.name, l.node().attrs), D = ((s = o.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(O)) || void 0;
      w = w.append(g.from(o.createAndFill(null, D) || void 0));
      const F = l.before(l.depth - (y - 1));
      t.replace(F, l.after(-E), new x(w, 4 - y, 0));
      let j = -1;
      t.doc.nodesBetween(F, t.doc.content.size, (W, Pt) => {
        if (j > -1)
          return !1;
        W.isTextblock && W.content.size === 0 && (j = Pt + 1);
      }), j > -1 && t.setSelection(C.near(t.doc.resolve(j))), t.scrollIntoView();
    }
    return !0;
  }
  const h = a.pos === l.end() ? f.contentMatchAt(0).defaultType : null, d = xt(u, f.type.name, f.attrs), p = xt(u, l.node().type.name, l.node().attrs);
  t.delete(l.pos, a.pos);
  const m = h ? [
    { type: o, attrs: d },
    { type: h, attrs: p }
  ] : [{ type: o, attrs: d }];
  if (!rt(t.doc, l.pos, 2))
    return !1;
  if (n) {
    const { selection: w, storedMarks: y } = e, { splittableMarks: E } = i.extensionManager, O = y || w.$to.parentOffset && w.$from.marks();
    if (t.split(l.pos, 2, m).scrollIntoView(), !O || !n)
      return !0;
    const D = O.filter((F) => E.includes(F.type.name));
    t.ensureMarks(D);
  }
  return !0;
}, Yt = (r, t) => {
  const e = de((o) => o.type === t)(r.selection);
  if (!e)
    return !0;
  const n = r.doc.resolve(Math.max(0, e.pos - 1)).before(e.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return e.node.type === (i == null ? void 0 : i.type) && _(r.doc, e.pos) && r.join(e.pos), !0;
}, Zt = (r, t) => {
  const e = de((o) => o.type === t)(r.selection);
  if (!e)
    return !0;
  const n = r.doc.resolve(e.start).after(e.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return e.node.type === (i == null ? void 0 : i.type) && _(r.doc, n) && r.join(n), !0;
}, Yi = (r, t, e, n = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: f }) => {
  const { extensions: u, splittableMarks: h } = i.extensionManager, d = N(r, o.schema), p = N(t, o.schema), { selection: m, storedMarks: w } = o, { $from: y, $to: E } = m, O = y.blockRange(E), D = w || m.$to.parentOffset && m.$from.marks();
  if (!O)
    return !1;
  const F = de((j) => Fe(j.type.name, u))(m);
  if (O.depth >= 1 && F && O.depth - F.depth <= 1) {
    if (F.node.type === d)
      return c.liftListItem(p);
    if (Fe(F.node.type.name, u) && d.validContent(F.node.content) && l)
      return a().command(() => (s.setNodeMarkup(F.pos, d), !0)).command(() => Yt(s, d)).command(() => Zt(s, d)).run();
  }
  return !e || !D || !l ? a().command(() => f().wrapInList(d, n) ? !0 : c.clearNodes()).wrapInList(d, n).command(() => Yt(s, d)).command(() => Zt(s, d)).run() : a().command(() => {
    const j = f().wrapInList(d, n), W = D.filter((Pt) => h.includes(Pt.type.name));
    return s.ensureMarks(W), j ? !0 : c.clearNodes();
  }).wrapInList(d, n).command(() => Yt(s, d)).command(() => Zt(s, d)).run();
}, Zi = (r, t = {}, e = {}) => ({ state: n, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = e, o = H(r, n.schema);
  return $i(n, o, t) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, t);
}, _i = (r, t, e = {}) => ({ state: n, commands: i }) => {
  const s = N(r, n.schema), o = N(t, n.schema);
  return he(n, s, e) ? i.setNode(o) : i.setNode(s, e);
}, ts = (r, t = {}) => ({ state: e, commands: n }) => {
  const i = N(r, e.schema);
  return he(e, i, t) ? n.lift(i) : n.wrapIn(i, t);
}, es = () => ({ state: r, dispatch: t }) => {
  const e = r.plugins;
  for (let n = 0; n < e.length; n += 1) {
    const i = e[n];
    let s;
    if (i.spec.isInputRules && (s = i.getState(r))) {
      if (t) {
        const o = r.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, r.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, ns = () => ({ tr: r, dispatch: t }) => {
  const { selection: e } = r, { empty: n, ranges: i } = e;
  return n || t && i.forEach((s) => {
    r.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, rs = (r, t = {}) => ({ tr: e, state: n, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = t, { selection: l } = e, a = H(r, n.schema), { $from: c, empty: f, ranges: u } = l;
  if (!i)
    return !0;
  if (f && o) {
    let { from: h, to: d } = l;
    const p = (s = c.marks().find((w) => w.type === a)) === null || s === void 0 ? void 0 : s.attrs, m = yn(c, a, p);
    m && (h = m.from, d = m.to), e.removeMark(h, d, a);
  } else
    u.forEach((h) => {
      e.removeMark(h.$from.pos, h.$to.pos, a);
    });
  return e.removeStoredMark(a), !0;
}, is = (r, t = {}) => ({ tr: e, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = xn(typeof r == "string" ? r : r.name, n.schema);
  return l ? (l === "node" && (s = N(r, n.schema)), l === "mark" && (o = H(r, n.schema)), i && e.selection.ranges.forEach((a) => {
    const c = a.$from.pos, f = a.$to.pos;
    n.doc.nodesBetween(c, f, (u, h) => {
      s && s === u.type && e.setNodeMarkup(h, void 0, {
        ...u.attrs,
        ...t
      }), o && u.marks.length && u.marks.forEach((d) => {
        if (o === d.type) {
          const p = Math.max(h, c), m = Math.min(h + u.nodeSize, f);
          e.addMark(p, m, o.create({
            ...d.attrs,
            ...t
          }));
        }
      });
    });
  }), !0) : !1;
}, ss = (r, t = {}) => ({ state: e, dispatch: n }) => {
  const i = N(r, e.schema);
  return Cr(i, t)(e, n);
}, ls = (r, t = {}) => ({ state: e, dispatch: n }) => {
  const i = N(r, e.schema);
  return Tr(i, t)(e, n);
};
var as = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Gr,
  clearContent: Qr,
  clearNodes: Xr,
  command: Yr,
  createParagraphNear: Zr,
  deleteCurrentNode: _r,
  deleteNode: ti,
  deleteRange: ei,
  deleteSelection: ni,
  enter: ri,
  exitCode: ii,
  extendMarkRange: oi,
  first: li,
  focus: ci,
  forEach: fi,
  insertContent: ui,
  insertContentAt: pi,
  joinUp: mi,
  joinDown: gi,
  joinBackward: yi,
  joinForward: ki,
  keyboardShortcut: xi,
  lift: Si,
  liftEmptyBlock: bi,
  liftListItem: Mi,
  newlineInCode: vi,
  resetAttributes: Ei,
  scrollIntoView: Ci,
  selectAll: Ti,
  selectNodeBackward: Oi,
  selectNodeForward: Ai,
  selectParentNode: Ii,
  selectTextblockEnd: Ni,
  selectTextblockStart: zi,
  setContent: Fi,
  setMark: Vi,
  setMeta: qi,
  setNode: Hi,
  setNodeSelection: Ki,
  setTextSelection: Ui,
  sinkListItem: Gi,
  splitBlock: Qi,
  splitListItem: Xi,
  toggleList: Yi,
  toggleMark: Zi,
  toggleNode: _i,
  toggleWrap: ts,
  undoInputRule: es,
  unsetAllMarks: ns,
  unsetMark: rs,
  updateAttributes: is,
  wrapIn: ss,
  wrapInList: ls
});
$.create({
  name: "commands",
  addCommands() {
    return {
      ...as
    };
  }
});
$.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new q({
        key: new mt("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
});
$.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: r } = this;
    return [
      new q({
        key: new mt("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (t, e) => {
              r.isFocused = !0;
              const n = r.state.tr.setMeta("focus", { event: e }).setMeta("addToHistory", !1);
              return t.dispatch(n), !1;
            },
            blur: (t, e) => {
              r.isFocused = !1;
              const n = r.state.tr.setMeta("blur", { event: e }).setMeta("addToHistory", !1);
              return t.dispatch(n), !1;
            }
          }
        }
      })
    ];
  }
});
$.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const r = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: f, $anchor: u } = a, { pos: h, parent: d } = u, p = b.atStart(c).from === h;
        return !f || !p || !d.type.isTextblock || d.textContent.length ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), t = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), n = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: r,
      "Mod-Backspace": r,
      "Shift-Backspace": r,
      Delete: t,
      "Mod-Delete": t,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...n
    }, s = {
      ...n,
      "Ctrl-h": r,
      "Alt-Backspace": r,
      "Ctrl-d": t,
      "Ctrl-Alt-Backspace": t,
      "Alt-Delete": t,
      "Alt-d": t,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return ue() || wn() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new q({
        key: new mt("clearDocument"),
        appendTransaction: (r, t, e) => {
          if (!(r.some((p) => p.docChanged) && !t.doc.eq(e.doc)))
            return;
          const { empty: i, from: s, to: o } = t.selection, l = b.atStart(t.doc).from, a = b.atEnd(t.doc).to;
          if (i || !(s === l && o === a) || !(e.doc.textBetween(0, e.doc.content.size, " ", " ").length === 0))
            return;
          const u = e.tr, h = Ft({
            state: e,
            transaction: u
          }), { commands: d } = new ae({
            editor: this.editor,
            state: h
          });
          if (d.clearNodes(), !!u.steps.length)
            return u;
        }
      })
    ];
  }
});
$.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new q({
        key: new mt("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class zt {
  constructor(t = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = S(k(this, "addOptions", {
      name: this.name
    }))), this.storage = S(k(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(t = {}) {
    return new zt(t);
  }
  configure(t = {}) {
    const e = this.extend();
    return e.options = fe(this.options, t), e.storage = S(k(e, "addStorage", {
      name: e.name,
      options: e.options
    })), e;
  }
  extend(t = {}) {
    const e = new zt(t);
    return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`), e.options = S(k(e, "addOptions", {
      name: e.name
    })), e.storage = S(k(e, "addStorage", {
      name: e.name,
      options: e.options
    })), e;
  }
  static handleExit({ editor: t, mark: e }) {
    const { tr: n } = t.state, i = t.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === e.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === e.name);
      return a && n.removeStoredMark(a), n.insertText(" ", i.pos), t.view.dispatch(n), !0;
    }
    return !1;
  }
}
const cs = (r, t) => Ji(r, t), fs = (r, t) => Li(r, t);
export {
  fs as htmlToJson,
  cs as jsonToHtml
};
