!(function(t) {
  function e(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var r = {};
  (e.m = t),
    (e.c = r),
    (e.d = function(t, r, n) {
      e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: n });
    }),
    (e.n = function(t) {
      var r =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(r, 'a', r), r;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = '/dist/'),
    e((e.s = 28));
})([
  function(t, e, r) {
    function n(t) {
      return null == t ? (void 0 === t ? u : s) : l && l in Object(t) ? i(t) : a(t);
    }
    var o = r(4),
      i = r(38),
      a = r(39),
      s = '[object Null]',
      u = '[object Undefined]',
      l = o ? o.toStringTag : void 0;
    t.exports = n;
  },
  function(t, e) {
    function r(t) {
      return null != t && 'object' == typeof t;
    }
    t.exports = r;
  },
  function(t, e) {
    function r(t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    }
    t.exports = r;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e, r) {
      if (((r = r || {}), !d(r))) throw new Error('options is invalid');
      var n = r.bbox,
        o = r.id;
      if (void 0 === t) throw new Error('geometry is required');
      if (e && e.constructor !== Object) throw new Error('properties must be an Object');
      n && h(n), o && m(o);
      var i = { type: 'Feature' };
      return o && (i.id = o), n && (i.bbox = n), (i.properties = e || {}), (i.geometry = t), i;
    }
    function o(t, e, r) {
      if (!t) throw new Error('coordinates is required');
      if (!Array.isArray(t)) throw new Error('coordinates must be an Array');
      if (t.length < 2) throw new Error('coordinates must be at least 2 numbers long');
      if (!p(t[0]) || !p(t[1])) throw new Error('coordinates must contain numbers');
      return n({ type: 'Point', coordinates: t }, e, r);
    }
    function i(t, e, r) {
      if (!t) throw new Error('coordinates is required');
      for (var o = 0; o < t.length; o++) {
        var i = t[o];
        if (i.length < 4)
          throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        for (var a = 0; a < i[i.length - 1].length; a++) {
          if ((0 === o && 0 === a && !p(i[0][0])) || !p(i[0][1]))
            throw new Error('coordinates must contain numbers');
          if (i[i.length - 1][a] !== i[0][a])
            throw new Error('First and last Position are not equivalent.');
        }
      }
      return n({ type: 'Polygon', coordinates: t }, e, r);
    }
    function a(t, e, r) {
      if (!t) throw new Error('coordinates is required');
      if (t.length < 2) throw new Error('coordinates must be an array of two or more positions');
      if (!p(t[0][1]) || !p(t[0][1])) throw new Error('coordinates must contain numbers');
      return n({ type: 'LineString', coordinates: t }, e, r);
    }
    function s(t, e, r) {
      if (!t) throw new Error('coordinates is required');
      return n({ type: 'MultiLineString', coordinates: t }, e, r);
    }
    function u(t, e, r) {
      if (!t) throw new Error('coordinates is required');
      return n({ type: 'MultiPoint', coordinates: t }, e, r);
    }
    function l(t, e, r) {
      if (!t) throw new Error('coordinates is required');
      return n({ type: 'MultiPolygon', coordinates: t }, e, r);
    }
    function c(t, e) {
      if (void 0 === t || null === t) throw new Error('radians is required');
      if (e && 'string' != typeof e) throw new Error('units must be a string');
      var r = y[e || 'kilometers'];
      if (!r) throw new Error(e + ' units is invalid');
      return t * r;
    }
    function f(t) {
      if (null === t || void 0 === t) throw new Error('degrees is required');
      return ((t % 360) * Math.PI) / 180;
    }
    function p(t) {
      return !isNaN(t) && null !== t && !Array.isArray(t);
    }
    function d(t) {
      return !!t && t.constructor === Object;
    }
    function h(t) {
      if (!t) throw new Error('bbox is required');
      if (!Array.isArray(t)) throw new Error('bbox must be an Array');
      if (4 !== t.length && 6 !== t.length)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      t.forEach(function(t) {
        if (!p(t)) throw new Error('bbox must only contain numbers');
      });
    }
    function m(t) {
      if (!t) throw new Error('id is required');
      if (-1 === ['string', 'number'].indexOf(typeof t))
        throw new Error('id must be a number or a string');
    }
    r.d(e, 'b', function() {
      return n;
    }),
      r.d(e, 'f', function() {
        return o;
      }),
      r.d(e, 'e', function() {
        return a;
      }),
      r.d(e, 'g', function() {
        return c;
      }),
      r.d(e, 'a', function() {
        return f;
      }),
      r.d(e, 'c', function() {
        return p;
      }),
      r.d(e, 'd', function() {
        return d;
      });
    var y = {
      meters: 6371008.8,
      metres: 6371008.8,
      millimeters: 6371008800,
      millimetres: 6371008800,
      centimeters: 637100880,
      centimetres: 637100880,
      kilometers: 6371.0088,
      kilometres: 6371.0088,
      miles: 3958.761333810546,
      nauticalmiles: 6371008.8 / 1852,
      inches: 6371008.8 * 39.37,
      yards: 6371008.8 / 1.0936,
      feet: 20902260.511392,
      radians: 1,
      degrees: 6371008.8 / 111325
    };
  },
  function(t, e, r) {
    var n = r(5),
      o = n.Symbol;
    t.exports = o;
  },
  function(t, e, r) {
    var n = r(11),
      o = 'object' == typeof self && self && self.Object === Object && self,
      i = n || o || Function('return this')();
    t.exports = i;
  },
  function(t, e) {
    function r(t, e) {
      return t === e || (t !== t && e !== e);
    }
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      return null != t && i(t.length) && !o(t);
    }
    var o = r(10),
      i = r(16);
    t.exports = n;
  },
  function(t, e, r) {
    function n(t, e, r) {
      '__proto__' == e && o
        ? o(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    }
    var o = r(9);
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(35),
      o = (function() {
        try {
          var t = n(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    t.exports = o;
  },
  function(t, e, r) {
    function n(t) {
      if (!i(t)) return !1;
      var e = o(t);
      return e == s || e == u || e == a || e == l;
    }
    var o = r(0),
      i = r(2),
      a = '[object AsyncFunction]',
      s = '[object Function]',
      u = '[object GeneratorFunction]',
      l = '[object Proxy]';
    t.exports = n;
  },
  function(t, e, r) {
    (function(e) {
      var r = 'object' == typeof e && e && e.Object === Object && e;
      t.exports = r;
    }.call(e, r(37)));
  },
  function(t, e, r) {
    function n(t, e) {
      return a(i(t, e, o), t + '');
    }
    var o = r(13),
      i = r(45),
      a = r(46);
    t.exports = n;
  },
  function(t, e) {
    function r(t) {
      return t;
    }
    t.exports = r;
  },
  function(t, e) {
    function r(t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    }
    t.exports = r;
  },
  function(t, e, r) {
    function n(t, e, r) {
      if (!s(r)) return !1;
      var n = typeof e;
      return !!('number' == n ? i(r) && a(e, r.length) : 'string' == n && e in r) && o(r[e], t);
    }
    var o = r(6),
      i = r(7),
      a = r(17),
      s = r(2);
    t.exports = n;
  },
  function(t, e) {
    function r(t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= n;
    }
    var n = 9007199254740991;
    t.exports = r;
  },
  function(t, e) {
    function r(t, e) {
      var r = typeof t;
      return (
        !!(e = null == e ? n : e) &&
        ('number' == r || ('symbol' != r && o.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    }
    var n = 9007199254740991,
      o = /^(?:0|[1-9]\d*)$/;
    t.exports = r;
  },
  function(t, e, r) {
    function n(t, e) {
      var r = a(t),
        n = !r && i(t),
        c = !r && !n && s(t),
        p = !r && !n && !c && l(t),
        d = r || n || c || p,
        h = d ? o(t.length, String) : [],
        m = h.length;
      for (var y in t)
        (!e && !f.call(t, y)) ||
          (d &&
            ('length' == y ||
              (c && ('offset' == y || 'parent' == y)) ||
              (p && ('buffer' == y || 'byteLength' == y || 'byteOffset' == y)) ||
              u(y, m))) ||
          h.push(y);
      return h;
    }
    var o = r(51),
      i = r(52),
      a = r(19),
      s = r(54),
      u = r(17),
      l = r(56),
      c = Object.prototype,
      f = c.hasOwnProperty;
    t.exports = n;
  },
  function(t, e) {
    var r = Array.isArray;
    t.exports = r;
  },
  function(t, e) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l;
            }
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i;
            }
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function(t, e) {
    function r(t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || n);
    }
    var n = Object.prototype;
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      if (!i(t)) return !1;
      var e = o(t);
      return (
        e == u || e == s || ('string' == typeof t.message && 'string' == typeof t.name && !a(t))
      );
    }
    var o = r(0),
      i = r(1),
      a = r(63),
      s = '[object DOMException]',
      u = '[object Error]';
    t.exports = n;
  },
  function(t, e) {
    function r(t, e) {
      return function(r) {
        return t(e(r));
      };
    }
    t.exports = r;
  },
  function(t, e) {
    function r(t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; ) o[r] = e(t[r], r, t);
      return o;
    }
    t.exports = r;
  },
  function(t, e) {
    var r = /<%=([\s\S]+?)%>/g;
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      return null == t ? '' : o(t);
    }
    var o = r(75);
    t.exports = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e, r) {
      if (null !== t)
        for (
          var o,
            i,
            a,
            s,
            u,
            l,
            c,
            f,
            p = 0,
            d = 0,
            h = t.type,
            m = 'FeatureCollection' === h,
            y = 'Feature' === h,
            g = m ? t.features.length : 1,
            v = 0;
          v < g;
          v++
        ) {
          (c = m ? t.features[v].geometry : y ? t.geometry : t),
            (f = !!c && 'GeometryCollection' === c.type),
            (u = f ? c.geometries.length : 1);
          for (var b = 0; b < u; b++) {
            var _ = 0,
              j = 0;
            if (null !== (s = f ? c.geometries[b] : c)) {
              l = s.coordinates;
              var x = s.type;
              switch (((p = !r || ('Polygon' !== x && 'MultiPolygon' !== x) ? 0 : 1), x)) {
                case null:
                  break;
                case 'Point':
                  if (!1 === e(l, d, v, _, j)) return !1;
                  d++, _++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (o = 0; o < l.length; o++) {
                    if (!1 === e(l[o], d, v, _, j)) return !1;
                    d++, 'MultiPoint' === x && _++;
                  }
                  'LineString' === x && _++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (o = 0; o < l.length; o++) {
                    for (i = 0; i < l[o].length - p; i++) {
                      if (!1 === e(l[o][i], d, v, _, j)) return !1;
                      d++;
                    }
                    'MultiLineString' === x && _++, 'Polygon' === x && j++;
                  }
                  'Polygon' === x && _++;
                  break;
                case 'MultiPolygon':
                  for (o = 0; o < l.length; o++) {
                    for ('MultiPolygon' === x && (j = 0), i = 0; i < l[o].length; i++) {
                      for (a = 0; a < l[o][i].length - p; a++) {
                        if (!1 === e(l[o][i][a], d, v, _, j)) return !1;
                        d++;
                      }
                      j++;
                    }
                    _++;
                  }
                  break;
                case 'GeometryCollection':
                  for (o = 0; o < s.geometries.length; o++)
                    if (!1 === n(s.geometries[o], e, r)) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function o(t, e) {
      var r,
        n,
        o,
        i,
        a,
        s,
        u,
        l,
        c,
        f,
        p = 0,
        d = 'FeatureCollection' === t.type,
        h = 'Feature' === t.type,
        m = d ? t.features.length : 1;
      for (r = 0; r < m; r++) {
        for (
          s = d ? t.features[r].geometry : h ? t.geometry : t,
            l = d ? t.features[r].properties : h ? t.properties : {},
            c = d ? t.features[r].bbox : h ? t.bbox : void 0,
            f = d ? t.features[r].id : h ? t.id : void 0,
            u = !!s && 'GeometryCollection' === s.type,
            a = u ? s.geometries.length : 1,
            o = 0;
          o < a;
          o++
        )
          if (null !== (i = u ? s.geometries[o] : s))
            switch (i.type) {
              case 'Point':
              case 'LineString':
              case 'MultiPoint':
              case 'Polygon':
              case 'MultiLineString':
              case 'MultiPolygon':
                if (!1 === e(i, p, l, c, f)) return !1;
                break;
              case 'GeometryCollection':
                for (n = 0; n < i.geometries.length; n++)
                  if (!1 === e(i.geometries[n], p, l, c, f)) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          else if (!1 === e(null, p, l, c, f)) return !1;
        p++;
      }
    }
    function i(t, e, r) {
      var n = r;
      return (
        o(t, function(t, o, i, a, s) {
          n = 0 === o && void 0 === r ? t : e(n, t, o, i, a, s);
        }),
        n
      );
    }
    function a(t, e) {
      o(t, function(t, r, n, o, i) {
        var a = null === t ? null : t.type;
        switch (a) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            if (!1 === e(Object(l.b)(t, n, { bbox: o, id: i }), r, 0)) return !1;
            return;
        }
        var s;
        switch (a) {
          case 'MultiPoint':
            s = 'Point';
            break;
          case 'MultiLineString':
            s = 'LineString';
            break;
          case 'MultiPolygon':
            s = 'Polygon';
        }
        for (var u = 0; u < t.coordinates.length; u++) {
          var c = t.coordinates[u],
            f = { type: s, coordinates: c };
          if (!1 === e(Object(l.b)(f, n), r, u)) return !1;
        }
      });
    }
    function s(t, e) {
      a(t, function(t, r, o) {
        var i = 0;
        if (t.geometry) {
          var a = t.geometry.type;
          if ('Point' !== a && 'MultiPoint' !== a) {
            var s;
            return (
              !1 !==
                n(t, function(n, a, u, c, f) {
                  if (void 0 === s) return void (s = n);
                  var p = Object(l.e)([s, n], t.properties);
                  if (!1 === e(p, r, o, f, i)) return !1;
                  i++, (s = n);
                }) && void 0
            );
          }
        }
      });
    }
    function u(t, e, r) {
      var n = r,
        o = !1;
      return (
        s(t, function(t, i, a, s, u) {
          (n = !1 === o && void 0 === r ? t : e(n, t, i, a, s, u)), (o = !0);
        }),
        n
      );
    }
    r.d(e, 'a', function() {
      return i;
    }),
      r.d(e, 'b', function() {
        return u;
      });
    var l = r(3);
  },
  function(t, e, r) {
    t.exports = r(29);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : { default: t };
    }
    r(30);
    var o = r(31),
      i = n(o),
      a = r(79),
      s = n(a),
      u = r(80),
      l = n(u),
      c = r(85),
      f = (function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return (e.default = t), e;
      })(c),
      p = r(86),
      d = n(p),
      h = r(87),
      m = r(88),
      y = { imports: { numberFormat: h.numberFormat }, interpolate: /{{([\s\S]+?)}}/g },
      g = (0, i.default)(m.controlTemplate, y),
      v = (0, i.default)(m.resultsTemplate, y),
      b = (0, i.default)(m.pointPopupTemplate, y),
      _ = (0, i.default)(m.linePopupTemplate, y),
      j = (0, i.default)(m.areaPopupTemplate, y);
    (L.Control.Measure = L.Control.extend({
      _className: 'leaflet-control-measure',
      options: {
        units: {},
        position: 'topright',
        primaryLengthUnit: 'feet',
        secondaryLengthUnit: 'miles',
        primaryAreaUnit: 'acres',
        activeColor: '#ABE67E',
        completedColor: '#C8F2BE',
        captureZIndex: 1e4,
        popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }
      },
      initialize: function(t) {
        L.setOptions(this, t);
        var e = this.options,
          r = e.activeColor,
          n = e.completedColor;
        (this._symbols = new d.default({ activeColor: r, completedColor: n })),
          (this.options.units = L.extend({}, s.default, this.options.units));
      },
      onAdd: function(t) {
        return (
          (this._map = t),
          (this._latlngs = []),
          this._initLayout(),
          t.on('click', this._collapse, this),
          (this._layer = L.layerGroup().addTo(t)),
          this._container
        );
      },
      onRemove: function(t) {
        t.off('click', this._collapse, this), t.removeLayer(this._layer);
      },
      _initLayout: function() {
        var t = this._className,
          e = (this._container = L.DomUtil.create('div', t + ' leaflet-bar'));
        (e.innerHTML = g({ model: { className: t } })),
          e.setAttribute('aria-haspopup', !0),
          L.DomEvent.disableClickPropagation(e),
          L.DomEvent.disableScrollPropagation(e);
        var r = (this.$toggle = (0, c.selectOne)('.js-toggle', e));
        this.$interaction = (0, c.selectOne)('.js-interaction', e);
        var n = (0, c.selectOne)('.js-start', e),
          o = (0, c.selectOne)('.js-cancel', e),
          i = (0, c.selectOne)('.js-finish', e);
        (this.$startPrompt = (0, c.selectOne)('.js-startprompt', e)),
          (this.$measuringPrompt = (0, c.selectOne)('.js-measuringprompt', e)),
          (this.$startHelp = (0, c.selectOne)('.js-starthelp', e)),
          (this.$results = (0, c.selectOne)('.js-results', e)),
          (this.$measureTasks = (0, c.selectOne)('.js-measuretasks', e)),
          this._collapse(),
          this._updateMeasureNotStarted(),
          L.Browser.android ||
            (L.DomEvent.on(e, 'mouseenter', this._expand, this),
            L.DomEvent.on(e, 'mouseleave', this._collapse, this)),
          L.DomEvent.on(r, 'click', L.DomEvent.stop),
          L.Browser.touch
            ? L.DomEvent.on(r, 'click', this._expand, this)
            : L.DomEvent.on(r, 'focus', this._expand, this),
          L.DomEvent.on(n, 'click', L.DomEvent.stop),
          L.DomEvent.on(n, 'click', this._startMeasure, this),
          L.DomEvent.on(o, 'click', L.DomEvent.stop),
          L.DomEvent.on(o, 'click', this._finishMeasure, this),
          L.DomEvent.on(i, 'click', L.DomEvent.stop),
          L.DomEvent.on(i, 'click', this._handleMeasureDoubleClick, this);
      },
      _expand: function() {
        f.hide(this.$toggle), f.show(this.$interaction);
      },
      _collapse: function() {
        this._locked || (f.hide(this.$interaction), f.show(this.$toggle));
      },
      _updateMeasureNotStarted: function() {
        f.hide(this.$startHelp),
          f.hide(this.$results),
          f.hide(this.$measureTasks),
          f.hide(this.$measuringPrompt),
          f.show(this.$startPrompt);
      },
      _updateMeasureStartedNoPoints: function() {
        f.hide(this.$results),
          f.show(this.$startHelp),
          f.show(this.$measureTasks),
          f.hide(this.$startPrompt),
          f.show(this.$measuringPrompt);
      },
      _updateMeasureStartedWithPoints: function() {
        f.hide(this.$startHelp),
          f.show(this.$results),
          f.show(this.$measureTasks),
          f.hide(this.$startPrompt),
          f.show(this.$measuringPrompt);
      },
      _startMeasure: function() {
        (this._locked = !0),
          (this._measureVertexes = L.featureGroup().addTo(this._layer)),
          (this._captureMarker = L.marker(this._map.getCenter(), {
            clickable: !0,
            zIndexOffset: this.options.captureZIndex,
            opacity: 0
          }).addTo(this._layer)),
          this._setCaptureMarkerIcon(),
          this._captureMarker
            .on('mouseout', this._handleMapMouseOut, this)
            .on('dblclick', this._handleMeasureDoubleClick, this)
            .on('click', this._handleMeasureClick, this),
          this._map
            .on('mousemove', this._handleMeasureMove, this)
            .on('mouseout', this._handleMapMouseOut, this)
            .on('move', this._centerCaptureMarker, this)
            .on('resize', this._setCaptureMarkerIcon, this),
          L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this),
          this._updateMeasureStartedNoPoints(),
          this._map.fire('measurestart', null, !1);
      },
      _finishMeasure: function() {
        var t = L.extend({}, this._resultsModel, { points: this._latlngs });
        (this._locked = !1),
          L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this),
          this._clearMeasure(),
          this._captureMarker
            .off('mouseout', this._handleMapMouseOut, this)
            .off('dblclick', this._handleMeasureDoubleClick, this)
            .off('click', this._handleMeasureClick, this),
          this._map
            .off('mousemove', this._handleMeasureMove, this)
            .off('mouseout', this._handleMapMouseOut, this)
            .off('move', this._centerCaptureMarker, this)
            .off('resize', this._setCaptureMarkerIcon, this),
          this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker),
          (this._measureVertexes = null),
          this._updateMeasureNotStarted(),
          this._collapse(),
          this._map.fire('measurefinish', t, !1);
      },
      _clearMeasure: function() {
        (this._latlngs = []),
          (this._resultsModel = null),
          this._measureVertexes.clearLayers(),
          this._measureDrag && this._layer.removeLayer(this._measureDrag),
          this._measureArea && this._layer.removeLayer(this._measureArea),
          this._measureBoundary && this._layer.removeLayer(this._measureBoundary),
          (this._measureDrag = null),
          (this._measureArea = null),
          (this._measureBoundary = null);
      },
      _centerCaptureMarker: function() {
        this._captureMarker.setLatLng(this._map.getCenter());
      },
      _setCaptureMarkerIcon: function() {
        this._captureMarker.setIcon(L.divIcon({ iconSize: this._map.getSize().multiplyBy(2) }));
      },
      _getMeasurementDisplayStrings: function(t) {
        function e(t, e, o, i, a) {
          if (e && n[e]) {
            var s = r(t, n[e], i, a);
            if (o && n[o]) {
              s = s + ' (' + r(t, n[o], i, a) + ')';
            }
            return s;
          }
          return r(t, null, i, a);
        }
        function r(t, e, r, n) {
          var o = {
              acres: 'Acres',
              feet: 'Talampakan',
              kilometers: 'Kilometro',
              hectares: 'Hektarya',
              meters: 'Metro',
              miles: 'Milya',
              sqfeet: 'Talampakang Kwadrado',
              sqmeters: 'Metro Kwadrado',
              sqmiles: 'Milya Kwadrado'
            },
            i = L.extend({ factor: 1, decimals: 0 }, e);
          return [
            (0, h.numberFormat)(t * i.factor, i.decimals, r || '.', n || ','),
            o[i.display] || i.display
          ].join(' ');
        }
        var n = this.options.units;
        return {
          lengthDisplay: e(
            t.length,
            this.options.primaryLengthUnit,
            this.options.secondaryLengthUnit,
            this.options.decPoint,
            this.options.thousandsSep
          ),
          areaDisplay: e(
            t.area,
            this.options.primaryAreaUnit,
            this.options.secondaryAreaUnit,
            this.options.decPoint,
            this.options.thousandsSep
          )
        };
      },
      _updateResults: function() {
        var t = (0, l.default)(this._latlngs),
          e = (this._resultsModel = L.extend({}, t, this._getMeasurementDisplayStrings(t), {
            pointCount: this._latlngs.length
          }));
        this.$results.innerHTML = v({ model: e });
      },
      _handleMeasureMove: function(t) {
        this._measureDrag
          ? this._measureDrag.setLatLng(t.latlng)
          : (this._measureDrag = L.circleMarker(
              t.latlng,
              this._symbols.getSymbol('measureDrag')
            ).addTo(this._layer)),
          this._measureDrag.bringToFront();
      },
      _handleMeasureDoubleClick: function() {
        var t = this._latlngs,
          e = void 0,
          r = void 0;
        if ((this._finishMeasure(), t.length)) {
          t.length > 2 && t.push(t[0]);
          var n = (0, l.default)(t);
          1 === t.length
            ? ((e = L.circleMarker(t[0], this._symbols.getSymbol('resultPoint'))),
              (r = b({ model: n })))
            : 2 === t.length
            ? ((e = L.polyline(t, this._symbols.getSymbol('resultLine'))),
              (r = _({ model: L.extend({}, n, this._getMeasurementDisplayStrings(n)) })))
            : ((e = L.polygon(t, this._symbols.getSymbol('resultArea'))),
              (r = j({ model: L.extend({}, n, this._getMeasurementDisplayStrings(n)) })));
          var o = L.DomUtil.create('div', '');
          o.innerHTML = r;
          var i = (0, c.selectOne)('.js-zoomto', o);
          i &&
            (L.DomEvent.on(i, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              i,
              'click',
              function() {
                e.getBounds
                  ? this._map.fitBounds(e.getBounds(), { padding: [20, 20], maxZoom: 17 })
                  : e.getLatLng && this._map.panTo(e.getLatLng());
              },
              this
            ));
          var a = (0, c.selectOne)('.js-deletemarkup', o);
          a &&
            (L.DomEvent.on(a, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              a,
              'click',
              function() {
                this._layer.removeLayer(e);
              },
              this
            )),
            e.addTo(this._layer),
            e.bindPopup(o, this.options.popupOptions),
            e.getBounds
              ? e.openPopup(e.getBounds().getCenter())
              : e.getLatLng && e.openPopup(e.getLatLng());
        }
      },
      _handleMeasureClick: function(t) {
        var e = this._map.mouseEventToLatLng(t.originalEvent),
          r = this._latlngs[this._latlngs.length - 1],
          n = this._symbols.getSymbol('measureVertex');
        (r && e.equals(r)) ||
          (this._latlngs.push(e),
          this._addMeasureArea(this._latlngs),
          this._addMeasureBoundary(this._latlngs),
          this._measureVertexes.eachLayer(function(t) {
            t.setStyle(n), t._path && t._path.setAttribute('class', n.className);
          }),
          this._addNewVertex(e),
          this._measureBoundary && this._measureBoundary.bringToFront(),
          this._measureVertexes.bringToFront()),
          this._updateResults(),
          this._updateMeasureStartedWithPoints();
      },
      _handleMapMouseOut: function() {
        this._measureDrag &&
          (this._layer.removeLayer(this._measureDrag), (this._measureDrag = null));
      },
      _addNewVertex: function(t) {
        L.circleMarker(t, this._symbols.getSymbol('measureVertexActive')).addTo(
          this._measureVertexes
        );
      },
      _addMeasureArea: function(t) {
        if (t.length < 3)
          return void (
            this._measureArea &&
            (this._layer.removeLayer(this._measureArea), (this._measureArea = null))
          );
        this._measureArea
          ? this._measureArea.setLatLngs(t)
          : (this._measureArea = L.polygon(t, this._symbols.getSymbol('measureArea')).addTo(
              this._layer
            ));
      },
      _addMeasureBoundary: function(t) {
        if (t.length < 2)
          return void (
            this._measureBoundary &&
            (this._layer.removeLayer(this._measureBoundary), (this._measureBoundary = null))
          );
        this._measureBoundary
          ? this._measureBoundary.setLatLngs(t)
          : (this._measureBoundary = L.polyline(
              t,
              this._symbols.getSymbol('measureBoundary')
            ).addTo(this._layer));
      }
    })),
      L.Map.mergeOptions({ measureControl: !1 }),
      L.Map.addInitHook(function() {
        this.options.measureControl && (this.measureControl = new L.Control.Measure().addTo(this));
      }),
      (L.control.measure = function(t) {
        return new L.Control.Measure(t);
      });
  },
  function(t, e) {},
  function(t, e, r) {
    function n(t, e, r) {
      var n = d.imports._.templateSettings || d;
      r && c(t, e, r) && (e = void 0), (t = h(t)), (e = o({}, e, n, s));
      var w,
        k,
        L = o({}, e.imports, n.imports, s),
        O = f(L),
        P = a(L, O),
        E = 0,
        C = e.interpolate || j,
        S = "__p += '",
        A = RegExp(
          (e.escape || j).source +
            '|' +
            C.source +
            '|' +
            (C === p ? _ : j).source +
            '|' +
            (e.evaluate || j).source +
            '|$',
          'g'
        ),
        D = M.call(e, 'sourceURL')
          ? '//# sourceURL=' + (e.sourceURL + '').replace(/\s/g, ' ') + '\n'
          : '';
      t.replace(A, function(e, r, n, o, i, a) {
        return (
          n || (n = o),
          (S += t.slice(E, a).replace(x, u)),
          r && ((w = !0), (S += "' +\n__e(" + r + ") +\n'")),
          i && ((k = !0), (S += "';\n" + i + ";\n__p += '")),
          n && (S += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
          (E = a + e.length),
          e
        );
      }),
        (S += "';\n");
      var T = M.call(e, 'variable') && e.variable;
      if (T) {
        if (b.test(T)) throw new Error(m);
      } else S = 'with (obj) {\n' + S + '\n}\n';
      (S = (k ? S.replace(y, '') : S).replace(g, '$1').replace(v, '$1;')),
        (S =
          'function(' +
          (T || 'obj') +
          ') {\n' +
          (T ? '' : 'obj || (obj = {});\n') +
          "var __t, __p = ''" +
          (w ? ', __e = _.escape' : '') +
          (k
            ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
            : ';\n') +
          S +
          'return __p\n}');
      var $ = i(function() {
        return Function(O, D + 'return ' + S).apply(void 0, P);
      });
      if ((($.source = S), l($))) throw $;
      return $;
    }
    var o = r(32),
      i = r(62),
      a = r(65),
      s = r(66),
      u = r(67),
      l = r(22),
      c = r(15),
      f = r(68),
      p = r(25),
      d = r(71),
      h = r(26),
      m = 'Invalid `variable` option passed into `_.template`',
      y = /\b__p \+= '';/g,
      g = /\b(__p \+=) '' \+/g,
      v = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      b = /[()=,{}\[\]\/\s]/,
      _ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      j = /($^)/,
      x = /['\n\r\u2028\u2029\\]/g,
      w = Object.prototype,
      M = w.hasOwnProperty;
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(33),
      o = r(44),
      i = r(50),
      a = o(function(t, e, r, o) {
        n(e, i(e), t, o);
      });
    t.exports = a;
  },
  function(t, e, r) {
    function n(t, e, r, n) {
      var a = !r;
      r || (r = {});
      for (var s = -1, u = e.length; ++s < u; ) {
        var l = e[s],
          c = n ? n(r[l], t[l], l, r, t) : void 0;
        void 0 === c && (c = t[l]), a ? i(r, l, c) : o(r, l, c);
      }
      return r;
    }
    var o = r(34),
      i = r(8);
    t.exports = n;
  },
  function(t, e, r) {
    function n(t, e, r) {
      var n = t[e];
      (s.call(t, e) && i(n, r) && (void 0 !== r || e in t)) || o(t, e, r);
    }
    var o = r(8),
      i = r(6),
      a = Object.prototype,
      s = a.hasOwnProperty;
    t.exports = n;
  },
  function(t, e, r) {
    function n(t, e) {
      var r = i(t, e);
      return o(r) ? r : void 0;
    }
    var o = r(36),
      i = r(43);
    t.exports = n;
  },
  function(t, e, r) {
    function n(t) {
      return !(!a(t) || i(t)) && (o(t) ? h : l).test(s(t));
    }
    var o = r(10),
      i = r(40),
      a = r(2),
      s = r(42),
      u = /[\\^$.*+?()[\]{}|]/g,
      l = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      f = Object.prototype,
      p = c.toString,
      d = f.hasOwnProperty,
      h = RegExp(
        '^' +
          p
            .call(d)
            .replace(u, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      );
    t.exports = n;
  },
  function(t, e) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (t) {
      'object' == typeof window && (r = window);
    }
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      var e = a.call(t, u),
        r = t[u];
      try {
        t[u] = void 0;
        var n = !0;
      } catch (t) {}
      var o = s.call(t);
      return n && (e ? (t[u] = r) : delete t[u]), o;
    }
    var o = r(4),
      i = Object.prototype,
      a = i.hasOwnProperty,
      s = i.toString,
      u = o ? o.toStringTag : void 0;
    t.exports = n;
  },
  function(t, e) {
    function r(t) {
      return o.call(t);
    }
    var n = Object.prototype,
      o = n.toString;
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      return !!i && i in t;
    }
    var o = r(41),
      i = (function() {
        var t = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || '');
        return t ? 'Symbol(src)_1.' + t : '';
      })();
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(5),
      o = n['__core-js_shared__'];
    t.exports = o;
  },
  function(t, e) {
    function r(t) {
      if (null != t) {
        try {
          return o.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    }
    var n = Function.prototype,
      o = n.toString;
    t.exports = r;
  },
  function(t, e) {
    function r(t, e) {
      return null == t ? void 0 : t[e];
    }
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      return o(function(e, r) {
        var n = -1,
          o = r.length,
          a = o > 1 ? r[o - 1] : void 0,
          s = o > 2 ? r[2] : void 0;
        for (
          a = t.length > 3 && 'function' == typeof a ? (o--, a) : void 0,
            s && i(r[0], r[1], s) && ((a = o < 3 ? void 0 : a), (o = 1)),
            e = Object(e);
          ++n < o;

        ) {
          var u = r[n];
          u && t(e, u, n, a);
        }
        return e;
      });
    }
    var o = r(12),
      i = r(15);
    t.exports = n;
  },
  function(t, e, r) {
    function n(t, e, r) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function() {
          for (var n = arguments, a = -1, s = i(n.length - e, 0), u = Array(s); ++a < s; )
            u[a] = n[e + a];
          a = -1;
          for (var l = Array(e + 1); ++a < e; ) l[a] = n[a];
          return (l[e] = r(u)), o(t, this, l);
        }
      );
    }
    var o = r(14),
      i = Math.max;
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(47),
      o = r(49),
      i = o(n);
    t.exports = i;
  },
  function(t, e, r) {
    var n = r(48),
      o = r(9),
      i = r(13),
      a = o
        ? function(t, e) {
            return o(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: n(e),
              writable: !0
            });
          }
        : i;
    t.exports = a;
  },
  function(t, e) {
    function r(t) {
      return function() {
        return t;
      };
    }
    t.exports = r;
  },
  function(t, e) {
    function r(t) {
      var e = 0,
        r = 0;
      return function() {
        var a = i(),
          s = o - (a - r);
        if (((r = a), s > 0)) {
          if (++e >= n) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    }
    var n = 800,
      o = 16,
      i = Date.now;
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      return a(t) ? o(t, !0) : i(t);
    }
    var o = r(18),
      i = r(60),
      a = r(7);
    t.exports = n;
  },
  function(t, e) {
    function r(t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    }
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(53),
      o = r(1),
      i = Object.prototype,
      a = i.hasOwnProperty,
      s = i.propertyIsEnumerable,
      u = n(
        (function() {
          return arguments;
        })()
      )
        ? n
        : function(t) {
            return o(t) && a.call(t, 'callee') && !s.call(t, 'callee');
          };
    t.exports = u;
  },
  function(t, e, r) {
    function n(t) {
      return i(t) && o(t) == a;
    }
    var o = r(0),
      i = r(1),
      a = '[object Arguments]';
    t.exports = n;
  },
  function(t, e, r) {
    (function(t) {
      var n = r(5),
        o = r(55),
        i = 'object' == typeof e && e && !e.nodeType && e,
        a = i && 'object' == typeof t && t && !t.nodeType && t,
        s = a && a.exports === i,
        u = s ? n.Buffer : void 0,
        l = u ? u.isBuffer : void 0,
        c = l || o;
      t.exports = c;
    }.call(e, r(20)(t)));
  },
  function(t, e) {
    function r() {
      return !1;
    }
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(57),
      o = r(58),
      i = r(59),
      a = i && i.isTypedArray,
      s = a ? o(a) : n;
    t.exports = s;
  },
  function(t, e, r) {
    function n(t) {
      return a(t) && i(t.length) && !!s[o(t)];
    }
    var o = r(0),
      i = r(16),
      a = r(1),
      s = {};
    (s['[object Float32Array]'] = s['[object Float64Array]'] = s['[object Int8Array]'] = s[
      '[object Int16Array]'
    ] = s['[object Int32Array]'] = s['[object Uint8Array]'] = s['[object Uint8ClampedArray]'] = s[
      '[object Uint16Array]'
    ] = s['[object Uint32Array]'] = !0),
      (s['[object Arguments]'] = s['[object Array]'] = s['[object ArrayBuffer]'] = s[
        '[object Boolean]'
      ] = s['[object DataView]'] = s['[object Date]'] = s['[object Error]'] = s[
        '[object Function]'
      ] = s['[object Map]'] = s['[object Number]'] = s['[object Object]'] = s[
        '[object RegExp]'
      ] = s['[object Set]'] = s['[object String]'] = s['[object WeakMap]'] = !1),
      (t.exports = n);
  },
  function(t, e) {
    function r(t) {
      return function(e) {
        return t(e);
      };
    }
    t.exports = r;
  },
  function(t, e, r) {
    (function(t) {
      var n = r(11),
        o = 'object' == typeof e && e && !e.nodeType && e,
        i = o && 'object' == typeof t && t && !t.nodeType && t,
        a = i && i.exports === o,
        s = a && n.process,
        u = (function() {
          try {
            var t = i && i.require && i.require('util').types;
            return t || (s && s.binding && s.binding('util'));
          } catch (t) {}
        })();
      t.exports = u;
    }.call(e, r(20)(t)));
  },
  function(t, e, r) {
    function n(t) {
      if (!o(t)) return a(t);
      var e = i(t),
        r = [];
      for (var n in t) ('constructor' != n || (!e && u.call(t, n))) && r.push(n);
      return r;
    }
    var o = r(2),
      i = r(21),
      a = r(61),
      s = Object.prototype,
      u = s.hasOwnProperty;
    t.exports = n;
  },
  function(t, e) {
    function r(t) {
      var e = [];
      if (null != t) for (var r in Object(t)) e.push(r);
      return e;
    }
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(14),
      o = r(12),
      i = r(22),
      a = o(function(t, e) {
        try {
          return n(t, void 0, e);
        } catch (t) {
          return i(t) ? t : new Error(t);
        }
      });
    t.exports = a;
  },
  function(t, e, r) {
    function n(t) {
      if (!a(t) || o(t) != s) return !1;
      var e = i(t);
      if (null === e) return !0;
      var r = f.call(e, 'constructor') && e.constructor;
      return 'function' == typeof r && r instanceof r && c.call(r) == p;
    }
    var o = r(0),
      i = r(64),
      a = r(1),
      s = '[object Object]',
      u = Function.prototype,
      l = Object.prototype,
      c = u.toString,
      f = l.hasOwnProperty,
      p = c.call(Object);
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(23),
      o = n(Object.getPrototypeOf, Object);
    t.exports = o;
  },
  function(t, e, r) {
    function n(t, e) {
      return o(e, function(e) {
        return t[e];
      });
    }
    var o = r(24);
    t.exports = n;
  },
  function(t, e, r) {
    function n(t, e, r, n) {
      return void 0 === t || (o(t, i[r]) && !a.call(n, r)) ? e : t;
    }
    var o = r(6),
      i = Object.prototype,
      a = i.hasOwnProperty;
    t.exports = n;
  },
  function(t, e) {
    function r(t) {
      return '\\' + n[t];
    }
    var n = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' };
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      return a(t) ? o(t) : i(t);
    }
    var o = r(18),
      i = r(69),
      a = r(7);
    t.exports = n;
  },
  function(t, e, r) {
    function n(t) {
      if (!o(t)) return i(t);
      var e = [];
      for (var r in Object(t)) s.call(t, r) && 'constructor' != r && e.push(r);
      return e;
    }
    var o = r(21),
      i = r(70),
      a = Object.prototype,
      s = a.hasOwnProperty;
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(23),
      o = n(Object.keys, Object);
    t.exports = o;
  },
  function(t, e, r) {
    var n = r(72),
      o = r(77),
      i = r(78),
      a = r(25),
      s = { escape: o, evaluate: i, interpolate: a, variable: '', imports: { _: { escape: n } } };
    t.exports = s;
  },
  function(t, e, r) {
    function n(t) {
      return (t = i(t)), t && s.test(t) ? t.replace(a, o) : t;
    }
    var o = r(73),
      i = r(26),
      a = /[&<>"']/g,
      s = RegExp(a.source);
    t.exports = n;
  },
  function(t, e, r) {
    var n = r(74),
      o = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      i = n(o);
    t.exports = i;
  },
  function(t, e) {
    function r(t) {
      return function(e) {
        return null == t ? void 0 : t[e];
      };
    }
    t.exports = r;
  },
  function(t, e, r) {
    function n(t) {
      if ('string' == typeof t) return t;
      if (a(t)) return i(t, n) + '';
      if (s(t)) return c ? c.call(t) : '';
      var e = t + '';
      return '0' == e && 1 / t == -u ? '-0' : e;
    }
    var o = r(4),
      i = r(24),
      a = r(19),
      s = r(76),
      u = 1 / 0,
      l = o ? o.prototype : void 0,
      c = l ? l.toString : void 0;
    t.exports = n;
  },
  function(t, e, r) {
    function n(t) {
      return 'symbol' == typeof t || (i(t) && o(t) == a);
    }
    var o = r(0),
      i = r(1),
      a = '[object Symbol]';
    t.exports = n;
  },
  function(t, e) {
    var r = /<%-([\s\S]+?)%>/g;
    t.exports = r;
  },
  function(t, e) {
    var r = /<%([\s\S]+?)%>/g;
    t.exports = r;
  },
  function(t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = {
        acres: { factor: 24711e-8, display: 'acres', decimals: 2 },
        feet: { factor: 3.2808, display: 'feet', decimals: 0 },
        kilometers: { factor: 0.001, display: 'kilometers', decimals: 2 },
        hectares: { factor: 1e-4, display: 'hectares', decimals: 2 },
        meters: { factor: 1, display: 'meters', decimals: 0 },
        miles: { factor: 3.2808 / 5280, display: 'miles', decimals: 2 },
        sqfeet: { factor: 10.7639, display: 'sqfeet', decimals: 0 },
        sqmeters: { factor: 1, display: 'sqmeters', decimals: 0 },
        sqmiles: { factor: 3.86102e-7, display: 'sqmiles', decimals: 2 }
      });
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t) {
      return t < 10 ? '0' + t.toString() : t.toString();
    }
    function i(t, e, r) {
      var n = Math.abs(t),
        i = Math.floor(n),
        a = Math.floor(60 * (n - i)),
        s = Math.round(3600 * (n - i - a / 60) * 100) / 100,
        u = n === t ? e : r;
      return o(i) + '&deg; ' + o(a) + "' " + o(s) + '" ' + u;
    }
    function a(t) {
      var e = t[t.length - 1],
        r = t.map(function(t) {
          return [t.lat, t.lng];
        }),
        n = L.polyline(r),
        o = L.polygon(r),
        a = 1e3 * (0, u.default)(n.toGeoJSON(), { units: 'kilometers' }),
        s = (0, c.default)(o.toGeoJSON());
      return {
        lastCoord: {
          dd: { x: e.lng, y: e.lat },
          dms: { x: i(e.lng, 'E', 'W'), y: i(e.lat, 'N', 'S') }
        },
        length: a,
        area: s
      };
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = a);
    var s = r(81),
      u = n(s),
      l = r(84),
      c = n(l);
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (((e = e || {}), !Object(a.d)(e))) throw new Error('options is invalid');
      if (!t) throw new Error('geojson is required');
      return Object(i.b)(
        t,
        function(t, r) {
          var n = r.geometry.coordinates;
          return t + Object(o.a)(n[0], n[1], e);
        },
        0
      );
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var o = r(82),
      i = r(27),
      a = r(3);
    e.default = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e, r) {
      if (((r = r || {}), !Object(i.d)(r))) throw new Error('options is invalid');
      var n = r.units,
        a = Object(o.a)(t),
        s = Object(o.a)(e),
        u = Object(i.a)(s[1] - a[1]),
        l = Object(i.a)(s[0] - a[0]),
        c = Object(i.a)(a[1]),
        f = Object(i.a)(s[1]),
        p = Math.pow(Math.sin(u / 2), 2) + Math.pow(Math.sin(l / 2), 2) * Math.cos(c) * Math.cos(f);
      return Object(i.g)(2 * Math.atan2(Math.sqrt(p), Math.sqrt(1 - p)), n);
    }
    var o = r(83),
      i = r(3);
    e.a = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      if (!t) throw new Error('coord is required');
      if ('Feature' === t.type && null !== t.geometry && 'Point' === t.geometry.type)
        return t.geometry.coordinates;
      if ('Point' === t.type) return t.coordinates;
      if (Array.isArray(t) && t.length >= 2 && void 0 === t[0].length && void 0 === t[1].length)
        return t;
      throw new Error('coord must be GeoJSON Point or an Array of numbers');
    }
    r.d(e, 'a', function() {
      return n;
    });
    r(3);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return Object(u.a)(
        t,
        function(t, e) {
          return t + o(e);
        },
        0
      );
    }
    function o(t) {
      var e,
        r = 0;
      switch (t.type) {
        case 'Polygon':
          return i(t.coordinates);
        case 'MultiPolygon':
          for (e = 0; e < t.coordinates.length; e++) r += i(t.coordinates[e]);
          return r;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
          return 0;
        case 'GeometryCollection':
          for (e = 0; e < t.geometries.length; e++) r += o(t.geometries[e]);
          return r;
      }
    }
    function i(t) {
      var e = 0;
      if (t && t.length > 0) {
        e += Math.abs(a(t[0]));
        for (var r = 1; r < t.length; r++) e -= Math.abs(a(t[r]));
      }
      return e;
    }
    function a(t) {
      var e,
        r,
        n,
        o,
        i,
        a,
        u,
        c = 0,
        f = t.length;
      if (f > 2) {
        for (u = 0; u < f; u++)
          u === f - 2
            ? ((o = f - 2), (i = f - 1), (a = 0))
            : u === f - 1
            ? ((o = f - 1), (i = 0), (a = 1))
            : ((o = u), (i = u + 1), (a = u + 2)),
            (e = t[o]),
            (r = t[i]),
            (n = t[a]),
            (c += (s(n[0]) - s(e[0])) * Math.sin(s(r[1])));
        c = (c * l * l) / 2;
      }
      return c;
    }
    function s(t) {
      return (t * Math.PI) / 180;
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var u = r(27),
      l = 6378137;
    e.default = n;
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      return e || (e = document), e.querySelector(t);
    }
    function o(t, e) {
      return e || (e = document), Array.prototype.slice.call(e.querySelectorAll(t));
    }
    function i(t) {
      if (t) return t.setAttribute('style', 'display:none;'), t;
    }
    function a(t) {
      if (t) return t.removeAttribute('style'), t;
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.selectOne = n),
      (e.selectAll = o),
      (e.hide = i),
      (e.show = a);
  },
  function(t, e, r) {
    'use strict';
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var o = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      i = { activeColor: '#ABE67E', completedColor: '#C8F2BE' },
      a = (function() {
        function t(e) {
          n(this, t), (this._options = L.extend({}, i, this._options, e));
        }
        return (
          o(t, [
            {
              key: 'getSymbol',
              value: function(t) {
                return {
                  measureDrag: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.7,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.5,
                    className: 'layer-measuredrag'
                  },
                  measureArea: {
                    clickable: !1,
                    stroke: !1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.2,
                    className: 'layer-measurearea'
                  },
                  measureBoundary: {
                    clickable: !1,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measureboundary'
                  },
                  measureVertex: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.7,
                    className: 'layer-measurevertex'
                  },
                  measureVertexActive: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 1,
                    className: 'layer-measurevertex active'
                  },
                  resultArea: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 0.9,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.2,
                    className: 'layer-measure-resultarea'
                  },
                  resultLine: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 3,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measure-resultline'
                  },
                  resultPoint: {
                    clickable: !0,
                    radius: 4,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.7,
                    className: 'layer-measure-resultpoint'
                  }
                }[t];
              }
            }
          ]),
          t
        );
      })();
    e.default = a;
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.',
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ',',
        o = t < 0 ? '-' : '',
        i = Math.abs(+t || 0),
        a = parseInt(i.toFixed(e), 10) + '',
        s = a.length > 3 ? a.length % 3 : 0;
      return [
        o,
        s ? a.substr(0, s) + n : '',
        a.substr(s).replace(/(\d{3})(?=\d)/g, '$1' + n),
        e
          ? '' +
            r +
            Math.abs(i - a)
              .toFixed(e)
              .slice(2)
          : ''
      ].join('');
    }
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.numberFormat = n);
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var o = r(89);
    Object.defineProperty(e, 'controlTemplate', {
      enumerable: !0,
      get: function() {
        return n(o).default;
      }
    });
    var i = r(90);
    Object.defineProperty(e, 'resultsTemplate', {
      enumerable: !0,
      get: function() {
        return n(i).default;
      }
    });
    var a = r(91);
    Object.defineProperty(e, 'pointPopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(a).default;
      }
    });
    var s = r(92);
    Object.defineProperty(e, 'linePopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(s).default;
      }
    });
    var u = r(93);
    Object.defineProperty(e, 'areaPopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(u).default;
      }
    });
  },
  function(t, e, r) {
    t.exports =
      '<a class="{{ model.className }}-toggle js-toggle" href=# title="Kalkulahin ang tamang distansya at sukat">Sukat</a> <div class="{{ model.className }}-interaction js-interaction"> <div class="js-startprompt startprompt"> <div class="d-flex justify-content-between pb-2"> <div class="col fw-500"> Kalkulahin ang tamang distansya at sukat </div> <div></div> </div> <div class="js-start mt-1 d-flex align-items-center justify-content-center"> <button class="btn btn-outline-secondary btn-sm" type=button><i class="fa-solid fa-sm fa-check pe-2"></i> Lumikha ng isang bagong pagsukat </button> </div> </div> <div class=js-measuringprompt> <div class="d-flex justify-content-between"> <div class="col fw-500"> Kalkulahin ang tamang distansya at sukat </div> <div> <span class=js-measuretasks> <button class="js-cancel btn btn-close btn-close-min"></button> </span> </div> </div> <p class=js-starthelp>Simulan ang paglikha ng isang pagsukat sa pamamagitan ng pagdaragdag ng mga puntos sa mapa</p> <div class="js-results results"></div> <span class="js-measuretasks tasks mt-0"> <div class="js-finish mt-3 d-flex align-items-center justify-content-center"> <button class="btn btn-outline-secondary btn-sm" type=button><i class="fa-solid fa-sm fa-check pe-2"></i>Tapusin ang pagsukat</button> </div> </span> </div> </div>';
  },
  function(t, e, r) {
    t.exports =
      '<div> <p class=mt-3>Huling punto sa mapa</p> <p class=m-0>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p class=m-0>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> <% if (model.pointCount> 1) { %> <p class=mt-3> Distansya ng daanan: </p> <p class=mt-0> {{ model.lengthDisplay }} </p> <% } %> <% if (model.pointCount> 2) { %> <p class=mt-3>Sukat</p> <p class=m-0> {{ model.areaDisplay }}</p> <% } %> </div> ';
  },
  function(t, e, r) {
    t.exports =
      '<h3>Lokasyon ng punto</h3> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">I-sentro sa lokasyong ito</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Tanggalin</a></li> </ul> ';
  },
  function(t, e, r) {
    t.exports =
      'Pagsukat ng guhitww <p>{{ model.lengthDisplay }}</p> <a href=# class="js-zoomto zoomto">I-sentro sa linya na ito</a> <a href=# class="js-deletemarkup deletemarkup">Tanggalin</a> ';
  },
  function(t, e, r) {
    t.exports =
      '<h3>Kabuuang sukat</h3> <p>{{ model.areaDisplay }}</p> <p>{{ model.lengthDisplay }} Palibot</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">I-sentro sa lugar na ito</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Tanggalin</a></li> </ul> ';
  }
]);
