// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/img/hqdefault.jpg":[function(require,module,exports) {
module.exports = "/hqdefault.c8d020fe.jpg";
},{}],"assets/img/logo.png":[function(require,module,exports) {
module.exports = "/logo.fb412750.png";
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = container;
exports.row = row;
exports.col = col;
exports.a = a;
exports.css = css;
exports.block = block;
exports.ul_li = ul_li;
exports.toggle_mnu = toggle_mnu;
exports.topmenu = topmenu;

function container(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class=\"container\" style=\"".concat(styles, "\">").concat(content, "</div>");
}

function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class=\"row\" style=\"".concat(styles, "\">").concat(content, "</div>");
}

function col(content) {
  return "<div class=\"col-sm\">".concat(content, "</div>");
}

function a(content) {
  return "<a href=\"#".concat(content.replace(' ', '_').toLowerCase(), "\">").concat(content, "</a>");
}

function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var toString = function toString(key) {
    return "".concat(key, ": ").concat(styles[key]);
  };

  return Object.keys(styles).map(toString).join(';');
}

function block(type) {
  return "\n      <form name=\"".concat(type, "\">\n        <h5>").concat(type, "</h5>\n        <div class=\"form-group\">\n          <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n      </form>\n      <hr />\n    ");
} //T-ORES ADD FUNCTIONS


function ul_li(content) {
  return "<ul><li>".concat(content, "</li></ul>");
} // MENU


function toggle_mnu() {
  return "<button class=\"toggle_mnu\">\n                <span class=\"sandwich\">\n                    <span class=\"sw-topper\"></span>\n                    <span class=\"sw-bottom\"></span>\n                    <span class=\"sw-footer\"></span>\n                </span>             \n            </button>";
}

function topmenu(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  // console.log('cont',content)
  return "<nav class=\"top_mnu\" style=\"".concat(styles, "\">").concat(content, "</nav>");
} // MENU
//T-ORES ADD FUNCTIONS END
},{}],"classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBlock = exports.TopMenuBlock = exports.TextBlock = exports.ColumnsBlock = exports.ImageBlock = exports.TitleBlock = void 0;

var _utils = require("../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value;
    this.options = options;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должен быть реализован');
    }
  }]);

  return Block;
}();

var TitleBlock = /*#__PURE__*/function (_Block) {
  _inherits(TitleBlock, _Block);

  var _super = _createSuper(TitleBlock);

  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);

    return _super.call(this, value, options);
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? 'h1' : _this$options$tag,
          styles = _this$options.styles;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), (0, _utils.css)(styles));
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var ImageBlock = /*#__PURE__*/function (_Block2) {
  _inherits(ImageBlock, _Block2);

  var _super2 = _createSuper(ImageBlock);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _super2.call(this, value, options);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          is = _this$options2.imageStyles,
          _this$options2$alt = _this$options2.alt,
          alt = _this$options2$alt === void 0 ? '' : _this$options2$alt,
          styles = _this$options2.styles;
      return (0, _utils.row)("<img src=\"".concat(this.value, "\" alt=\"").concat(alt, "\" style=\"").concat((0, _utils.css)(is), "\" />"), (0, _utils.css)(styles));
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;

var ColumnsBlock = /*#__PURE__*/function (_Block3) {
  _inherits(ColumnsBlock, _Block3);

  var _super3 = _createSuper(ColumnsBlock);

  function ColumnsBlock(value, options) {
    _classCallCheck(this, ColumnsBlock);

    return _super3.call(this, value, options);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var html = this.value.map(_utils.col).join('');
      return (0, _utils.row)(html, (0, _utils.css)(this.options.styles));
    }
  }]);

  return ColumnsBlock;
}(Block);

exports.ColumnsBlock = ColumnsBlock;

var TextBlock = /*#__PURE__*/function (_Block4) {
  _inherits(TextBlock, _Block4);

  var _super4 = _createSuper(TextBlock);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _super4.call(this, value, options);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)((0, _utils.col)("<p>".concat(this.value, "</p>")), (0, _utils.css)(this.options.styles));
    }
  }]);

  return TextBlock;
}(Block); //T-ORES ADD FUNCTIONS


exports.TextBlock = TextBlock;

var TopMenuBlock = /*#__PURE__*/function (_Block5) {
  _inherits(TopMenuBlock, _Block5);

  var _super5 = _createSuper(TopMenuBlock);

  function TopMenuBlock(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, TopMenuBlock);

    return _super5.call(this, value, options);
  }

  _createClass(TopMenuBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var html = (0, _utils.ul_li)(this.value.map(_utils.a).join('</li><li>'));
      return (0, _utils.topmenu)(html, (0, _utils.css)(this.options.styles));
    }
  }]);

  return TopMenuBlock;
}(Block); //HEDER BLOCK


exports.TopMenuBlock = TopMenuBlock;

var HeaderBlock = /*#__PURE__*/function (_Block6) {
  _inherits(HeaderBlock, _Block6);

  var _super6 = _createSuper(HeaderBlock);

  function HeaderBlock(value, options) {
    _classCallCheck(this, HeaderBlock);

    return _super6.call(this, value, options);
  }

  _createClass(HeaderBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options3 = this.options,
          _this$options3$tag = _this$options3.tag,
          tag = _this$options3$tag === void 0 ? 'div' : _this$options3$tag,
          styles = _this$options3.styles;
      return "<".concat(tag, " class=\"main_head\" data-parallax=\"scroll\" data-image-src=\"assets/img/bg.jpg\" data-z-index=\"1\" styles=\"").concat((0, _utils.css)(styles), "\">").concat((0, _utils.container)((0, _utils.row)((0, _utils.col)(this.value + (0, _utils.toggle_mnu)()))), "</").concat(tag, ">");
    }
  }]);

  return HeaderBlock;
}(Block); // HEDER BLOCK
//T-ORES ADD FUNCTIONS END


exports.HeaderBlock = HeaderBlock;
},{"../utils":"utils.js"}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _hqdefault = _interopRequireDefault(require("./assets/img/hqdefault.jpg"));

var _logo = _interopRequireDefault(require("./assets/img/logo.png"));

var _blocks = require("./classes/blocks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = 'loremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtextloremtext';
var model = [//headerBlock
new _blocks.HeaderBlock('SK-Trans', {
  tag: 'header',
  styles: {
    position: 'relative',
    'min-height': '480px',
    'padding-top': '20px'
  }
}), //headerBlock
// MENU
new _blocks.TopMenuBlock(['About', 'Menu 2', 'Menu 3']), // MENU
new _blocks.TitleBlock('SK-Trans', {
  tag: 'h1',
  styles: {
    //background: 'linear-gradient(to right, #ff0099, #493240)',
    color: 'black',
    padding: '1.5rem',
    'text-align': 'center'
  }
}), new _blocks.TitleBlock('Міжрегіональні вантажні перевезення', {
  tag: 'h4',
  styles: {
    //background: 'linear-gradient(to right, #ff0099, #493240)',
    color: 'black',
    padding: '1.5rem',
    'text-align': 'center'
  }
}), new _blocks.ImageBlock(_hqdefault.default, {
  styles: {
    padding: '2rem 0',
    display: 'flex',
    'justify-content': 'center'
  },
  imageStyles: {
    width: '500px',
    height: 'auto'
  },
  alt: 'Это картинка'
}), new _blocks.ColumnsBlock(['Приложение на чистом JavaScript, без использования библиотек', 'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс', 'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'], {
  styles: {
    //background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
    padding: '2rem',
    color: 'black',
    'font-weight': 'bold'
  }
}), new _blocks.TextBlock(text, {
  styles: {
    padding: '1rem',
    'font-weight': 'bold'
  }
})];
exports.model = model;
},{"./assets/img/hqdefault.jpg":"assets/img/hqdefault.jpg","./assets/img/logo.png":"assets/img/logo.png","./classes/blocks":"classes/blocks.js"}],"classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.$el = document.querySelector(selector);
  }

  _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;

      this.$el.innerHTML = '';
      model.forEach(function (block) {
        _this.$el.insertAdjacentHTML('beforeend', block.toHTML());
      });
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{}],"classes/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _utils = require("../utils");

var _blocks = require("./blocks");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, updateCallback) {
    _classCallCheck(this, Sidebar);

    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$el.insertAdjacentHTML('afterbegin', this.template);
      this.$el.addEventListener('submit', this.add.bind(this));
    }
  }, {
    key: "template",
    get: function get() {
      return [(0, _utils.block)('text'), (0, _utils.block)('title')].join('');
    }
  }, {
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var type = event.target.name;
      var value = event.target.value.value;
      var styles = event.target.styles.value;
      var newBlock = type === 'text' ? new _blocks.TextBlock(value, {
        styles: styles
      }) : new _blocks.TitleBlock(value, {
        styles: styles
      });
      this.update(newBlock);
      event.target.value.value = '';
      event.target.styles.value = '';
    }
  }]);

  return Sidebar;
}();

exports.Sidebar = Sidebar;
},{"../utils":"utils.js","./blocks":"classes/blocks.js"}],"classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _site = require("./site");

var _sidebar = require("./sidebar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site('#site');
      site.render(this.model);

      var updateCallback = function updateCallback(newBlock) {
        _this.model.push(newBlock);

        site.render(_this.model);
      };

      new _sidebar.Sidebar('#panel', updateCallback);
    }
  }]);

  return App;
}();

exports.App = App;
},{"./site":"classes/site.js","./sidebar":"classes/sidebar.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/libs/animate/animate.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/libs/magnific-popup/magnific-popup.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/libs/linea/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./fonts/linea-basic-10.eot":[["linea-basic-10.350d51a0.eot","assets/libs/linea/fonts/linea-basic-10.eot"],"assets/libs/linea/fonts/linea-basic-10.eot"],"./fonts/linea-basic-10.woff":[["linea-basic-10.d5d9d84c.woff","assets/libs/linea/fonts/linea-basic-10.woff"],"assets/libs/linea/fonts/linea-basic-10.woff"],"./fonts/linea-basic-10.ttf":[["linea-basic-10.a2912d6b.ttf","assets/libs/linea/fonts/linea-basic-10.ttf"],"assets/libs/linea/fonts/linea-basic-10.ttf"],"./fonts/linea-basic-10.svg":[["linea-basic-10.29b2a512.svg","assets/libs/linea/fonts/linea-basic-10.svg"],"assets/libs/linea/fonts/linea-basic-10.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/libs/font-awesome/css/font-awesome.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/fontawesome-webfont.eot":[["fontawesome-webfont.f4b248cb.eot","assets/libs/font-awesome/fonts/fontawesome-webfont.eot"],"assets/libs/font-awesome/fonts/fontawesome-webfont.eot"],"./../fonts/fontawesome-webfont.woff":[["fontawesome-webfont.dbf0549d.woff","assets/libs/font-awesome/fonts/fontawesome-webfont.woff"],"assets/libs/font-awesome/fonts/fontawesome-webfont.woff"],"./../fonts/fontawesome-webfont.ttf":[["fontawesome-webfont.2a46d57f.ttf","assets/libs/font-awesome/fonts/fontawesome-webfont.ttf"],"assets/libs/font-awesome/fonts/fontawesome-webfont.ttf"],"./../fonts/fontawesome-webfont.svg":[["fontawesome-webfont.2f6b8783.svg","assets/libs/font-awesome/fonts/fontawesome-webfont.svg"],"assets/libs/font-awesome/fonts/fontawesome-webfont.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/styles/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/RalewayRegular/RalewayRegular.eot":[["RalewayRegular.eba68c13.eot","assets/fonts/RalewayRegular/RalewayRegular.eot"],"assets/fonts/RalewayRegular/RalewayRegular.eot"],"./../fonts/RalewayRegular/RalewayRegular.woff":[["RalewayRegular.006d802c.woff","assets/fonts/RalewayRegular/RalewayRegular.woff"],"assets/fonts/RalewayRegular/RalewayRegular.woff"],"./../fonts/RalewayRegular/RalewayRegular.ttf":[["RalewayRegular.1da8959e.ttf","assets/fonts/RalewayRegular/RalewayRegular.ttf"],"assets/fonts/RalewayRegular/RalewayRegular.ttf"],"./../fonts/RalewayBold/RalewayBold.eot":[["RalewayBold.6c38d6f1.eot","assets/fonts/RalewayBold/RalewayBold.eot"],"assets/fonts/RalewayBold/RalewayBold.eot"],"./../fonts/RalewayBold/RalewayBold.woff":[["RalewayBold.37803a83.woff","assets/fonts/RalewayBold/RalewayBold.woff"],"assets/fonts/RalewayBold/RalewayBold.woff"],"./../fonts/RalewayBold/RalewayBold.ttf":[["RalewayBold.1fdd93f1.ttf","assets/fonts/RalewayBold/RalewayBold.ttf"],"assets/fonts/RalewayBold/RalewayBold.ttf"],"./../fonts/RalewayLight/RalewayLight.eot":[["RalewayLight.2b0bf7e2.eot","assets/fonts/RalewayLight/RalewayLight.eot"],"assets/fonts/RalewayLight/RalewayLight.eot"],"./../fonts/RalewayLight/RalewayLight.woff":[["RalewayLight.e30b953a.woff","assets/fonts/RalewayLight/RalewayLight.woff"],"assets/fonts/RalewayLight/RalewayLight.woff"],"./../fonts/RalewayLight/RalewayLight.ttf":[["RalewayLight.d6ace252.ttf","assets/fonts/RalewayLight/RalewayLight.ttf"],"assets/fonts/RalewayLight/RalewayLight.ttf"],"./../fonts/RalewaySemiBold/RalewaySemiBold.eot":[["RalewaySemiBold.2abc24b5.eot","assets/fonts/RalewaySemiBold/RalewaySemiBold.eot"],"assets/fonts/RalewaySemiBold/RalewaySemiBold.eot"],"./../fonts/RalewaySemiBold/RalewaySemiBold.woff":[["RalewaySemiBold.4cf6c0cb.woff","assets/fonts/RalewaySemiBold/RalewaySemiBold.woff"],"assets/fonts/RalewaySemiBold/RalewaySemiBold.woff"],"./../fonts/RalewaySemiBold/RalewaySemiBold.ttf":[["RalewaySemiBold.e828505a.ttf","assets/fonts/RalewaySemiBold/RalewaySemiBold.ttf"],"assets/fonts/RalewaySemiBold/RalewaySemiBold.ttf"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../img/preloader.gif":[["preloader.bdfbb002.gif","assets/img/preloader.gif"],"assets/img/preloader.gif"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/styles/skins/blue.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/styles/media.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/styles/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../img/preloader.gif":[["preloader.bdfbb002.gif","assets/img/preloader.gif"],"assets/img/preloader.gif"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");

var _app = require("./classes/app");

require("./assets/libs/animate/animate.min.css");

require("./assets/libs/magnific-popup/magnific-popup.css");

require("./assets/libs/linea/styles.css");

require("./assets/libs/font-awesome/css/font-awesome.min.css");

require("./assets/styles/fonts.css");

require("./assets/styles/main.css");

require("./assets/styles/skins/blue.css");

require("./assets/styles/media.css");

require("./assets/styles/style.css");

//CSS
//CSS
new _app.App(_model.model).init();
},{"./model":"model.js","./classes/app":"classes/app.js","./assets/libs/animate/animate.min.css":"assets/libs/animate/animate.min.css","./assets/libs/magnific-popup/magnific-popup.css":"assets/libs/magnific-popup/magnific-popup.css","./assets/libs/linea/styles.css":"assets/libs/linea/styles.css","./assets/libs/font-awesome/css/font-awesome.min.css":"assets/libs/font-awesome/css/font-awesome.min.css","./assets/styles/fonts.css":"assets/styles/fonts.css","./assets/styles/main.css":"assets/styles/main.css","./assets/styles/skins/blue.css":"assets/styles/skins/blue.css","./assets/styles/media.css":"assets/styles/media.css","./assets/styles/style.css":"assets/styles/style.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46299" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map