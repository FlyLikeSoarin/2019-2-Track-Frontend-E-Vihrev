/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FormInput.js":
/*!*********************************!*\
  !*** ./components/FormInput.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        input {\\n            border: 0;\\n            outline: none;\\n            font-size: 4vh;\\n            width: calc(100% - 2px);\\n        }\\n\\n        :host {\\n            display: inline-block;\\n            border: 1px solid rgba(25, 25, 25, 0.32);\\n        }\\n    </style>\\n    <input type=\\\"text\\\">\\n\";\n\nvar FormInput =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(FormInput, _HTMLElement);\n\n  function FormInput() {\n    var _this;\n\n    _classCallCheck(this, FormInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this));\n    _this.shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this.shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$input = _this.shadowRoot.querySelector('input');\n    return _this;\n  }\n\n  _createClass(FormInput, [{\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.$input.setAttribute(name, newValue);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.$input.value = '';\n    }\n  }, {\n    key: \"value\",\n    get: function get() {\n      return this.$input.value;\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['name', 'value', 'placeholder', 'disabled'];\n    }\n  }]);\n\n  return FormInput;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('form-input', FormInput);\n\n//# sourceURL=webpack:///./components/FormInput.js?");

/***/ }),

/***/ "./components/MessageForm.js":
/*!***********************************!*\
  !*** ./components/MessageForm.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        form-input {\\n            width: 100%;\\n        }\\n\\n        .result {\\n            color: red;\\n        }\\n\\n        input[type=submit] {\\n            visibility: collapse;\\n        }\\n    </style>\\n    <form>\\n        <div class=\\\"result\\\"></div>\\n        <form-input name=\\\"message-text\\\" placeholder=\\\"Message...\\\"></form-input>\\n    </form>\\n\";\n\nvar MessageForm =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessageForm, _HTMLElement);\n\n  function MessageForm() {\n    var _this;\n\n    _classCallCheck(this, MessageForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageForm).call(this));\n    _this.shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this.shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$form = _this.shadowRoot.querySelector('form');\n    _this.$input = _this.shadowRoot.querySelector('form-input');\n    _this.$message = _this.shadowRoot.querySelector('.result');\n\n    _this.$form.addEventListener('submit', _this.onSubmit.bind(_assertThisInitialized(_this)));\n\n    _this.$form.addEventListener('keypress', _this.onKeyPress.bind(_assertThisInitialized(_this)));\n\n    _this.attachedDisplay = null;\n    return _this;\n  }\n\n  _createClass(MessageForm, [{\n    key: \"attachDisplay\",\n    value: function attachDisplay(display) {\n      this.attachedDisplay = display;\n    }\n  }, {\n    key: \"onSubmit\",\n    value: function onSubmit(event) {\n      event.preventDefault();\n      var message = {\n        name: '',\n        datastamp: '',\n        text: ''\n      };\n      message.text = this.$input.value;\n      message.name = 'sender';\n      message.datastamp = new Date().toLocaleTimeString('en-US', {\n        hour12: false,\n        hour: 'numeric',\n        minute: 'numeric'\n      });\n      this.$input.reset();\n\n      if (this.attachedDisplay == null) {\n        console.log('No attached display!');\n      } else {\n        this.attachedDisplay.addMessage(message);\n      }\n    }\n  }, {\n    key: \"onKeyPress\",\n    value: function onKeyPress(event) {\n      if (event.keyCode === 13) {\n        this.$form.dispatchEvent(new Event('submit'));\n      }\n    }\n  }]);\n\n  return MessageForm;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('message-form', MessageForm);\n\n//# sourceURL=webpack:///./components/MessageForm.js?");

/***/ }),

/***/ "./components/MessagesDisplay.js":
/*!***************************************!*\
  !*** ./components/MessagesDisplay.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement('template');\ntemplate.style.display = 'flex';\ntemplate.innerHTML = \"\\n    <style>\\n        .scroll-body {\\n            overflow-y: scroll;\\n            overflow-x: hidden;\\n            flex-basis: 10;\\n            flex-grow: 1;\\n            text-align: right;\\n        }\\n\\n        .message-box {\\n            display: flex;\\n            flex-direction: column;\\n        }\\n\\n        .message {\\n            background-color: lightblue;\\n            align-self: flex-end;\\n            margin: 0.5vh;\\n            border: 1vh;\\n            border-radius: 1vh;\\n            border-style: solid;\\n            border-color: lightblue;\\n            display: flex;\\n            flex-direction: column;\\n        }\\n\\n        .message-text {\\n            font-size: 3vh;\\n            margin: 0.3vh;\\n        }\\n\\n        .data-text {\\n            align-self: flex-end;\\n            color: grey;\\n            font-size: 2vh;\\n        }\\n    </style>\\n    <div class=\\\"scroll-body\\\">\\n    </div>\\n\";\n\nvar MessagesDisplay =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessagesDisplay, _HTMLElement);\n\n  function MessagesDisplay() {\n    var _this;\n\n    _classCallCheck(this, MessagesDisplay);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessagesDisplay).call(this)); // this.shadowRoot = this.attachShadow({ mode: 'open' });\n\n    _this.appendChild(template.content.cloneNode(true));\n\n    _this.storage = window.localStorage;\n    _this.$scrollBody = _this.querySelector('.scroll-body');\n    _this.style.display = 'flex';\n\n    _this.loadMessages();\n\n    return _this;\n  }\n\n  _createClass(MessagesDisplay, [{\n    key: \"addMessage\",\n    value: function addMessage(message) {\n      this.renderMessage(message);\n      this.saveMessage(message);\n    }\n  }, {\n    key: \"renderMessage\",\n    value: function renderMessage(message) {\n      console.log('Message added to message-display');\n      console.log(message.text);\n      this.$scrollBody.appendChild(document.createElement('div'));\n      this.$scrollBody.lastElementChild.classList.add('message-box');\n      this.$scrollBody.lastElementChild.innerHTML = \"<div class=\\\"message\\\"><div class=\\\"message-text\\\">\".concat(message.text, \"</div><div class=\\\"data-text\\\">\").concat(message.datastamp, \"</div></div>\");\n      this.$scrollBody.scrollTop = this.$scrollBody.scrollHeight;\n    }\n  }, {\n    key: \"saveMessage\",\n    value: function saveMessage(message) {\n      this.storage.setItem(\"Message\".concat(this.count.toString()), JSON.stringify(message));\n      this.count += 1;\n      this.storage.setItem('Messages_count', this.count.toString());\n    }\n  }, {\n    key: \"loadMessages\",\n    value: function loadMessages() {\n      var state = this.storage.getItem('Is_initialized');\n\n      if (state == null) {\n        this.storage.setItem('Is_initialized', 'True');\n        this.storage.setItem('Messages_count', '0');\n      } else if (state === 'True') {\n        this.count = +this.storage.getItem('Messages_count');\n\n        for (var i = 0; i < this.count; i += 1) {\n          var message = JSON.parse(this.storage.getItem(\"Message\".concat(i.toString())));\n          console.log('message loaded:');\n          console.log(message);\n          this.renderMessage(message);\n        }\n      }\n    }\n  }]);\n\n  return MessagesDisplay;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('messages-display', MessagesDisplay);\n\n//# sourceURL=webpack:///./components/MessagesDisplay.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FormInput */ \"./components/FormInput.js\");\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_FormInput__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MessageForm */ \"./components/MessageForm.js\");\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_MessageForm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MessagesDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MessagesDisplay */ \"./components/MessagesDisplay.js\");\n/* harmony import */ var _components_MessagesDisplay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_MessagesDisplay__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar md = document.getElementById('md');\nvar mf = document.getElementById('mf');\nmf.attachDisplay(md);\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });