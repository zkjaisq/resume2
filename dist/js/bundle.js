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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Model = __webpack_require__(1);

var _Model2 = _interopRequireDefault(_Model);

var _View = __webpack_require__(2);

var _View2 = _interopRequireDefault(_View);

var _resume = __webpack_require__(3);

var _resume2 = _interopRequireDefault(_resume);

var _initSwiper = __webpack_require__(4);

var _initSwiper2 = _interopRequireDefault(_initSwiper);

var _autoSlide = __webpack_require__(5);

var _autoSlide2 = _interopRequireDefault(_autoSlide);

var _smoothlyNavigation = __webpack_require__(6);

var _smoothlyNavigation2 = _interopRequireDefault(_smoothlyNavigation);

var _stickTopbar = __webpack_require__(7);

var _stickTopbar2 = _interopRequireDefault(_stickTopbar);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Model2.default)();
(0, _View2.default)();
(0, _resume2.default)();
(0, _initSwiper2.default)();
(0, _autoSlide2.default)();
(0, _smoothlyNavigation2.default)();
(0, _stickTopbar2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function fn() {
  window.Model = function (options) {
    var contetent = options.resourceName;
    return {
      init: function init() {
        var APP_ID = 'hacj99zP7mAOC96OgvhJx69h-gzGzoHsz';
        var APP_KEY = 'N7Gy3dV1i5APeDn27MLa0sK6';
        AV.init({ appId: APP_ID, appKey: APP_KEY });
      },
      fetch: function fetch() {
        var query = new AV.Query(contetent);
        return query.find();
        console.log(query.find()); // Promise 对象
      },
      save: function save(object) {
        var X = AV.Object.extend(contetent);
        var x = new X();
        return x.save(object);
      }
    };
  };
}
exports.default = fn;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function fn() {
    window.View = function (selector) {
        return document.querySelector(selector);
    };
}
exports.default = fn;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function fn() {
    !function () {
        setTimeout(function () {
            loadingpage.classList.remove('active');
        }, 200);
        //loading动画
    }.call();
}
exports.default = fn;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fn() {
  !function () {
    var view = document.querySelector('.swiper-parent');
    var controller = {
      view: null,
      swiperoptions: {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        } },
      swiper: null,
      init: function init(view) {
        this.view = view;
        this.initswiper();
      },
      initswiper: function initswiper() {
        this.swiper = new Swiper(view.querySelector('.swiper-container'), this.swiperoptions);
      }
    };

    controller.init(view);
  }.call();
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fn() {
    !function () {
        var speciousTags = document.querySelectorAll('[data-x]');
        console.log(speciousTags);
        for (var i = 0; i < speciousTags.length; i++) {
            speciousTags[i].classList.add('offSet');
        }
        pdd();
        window.addEventListener('scroll', function (x) {
            pdd();
        });

        /* helper */
        function pdd() {
            var speciousTags = document.querySelectorAll('[data-x]');
            var minIndex = 0;
            for (var _i = 1; _i < speciousTags.length; _i++) {
                if (Math.abs(speciousTags[_i].offsetTop - window.scrollY) < Math.abs(speciousTags[minIndex].offsetTop - window.scrollY)) {
                    minIndex = _i;
                }
            }
            speciousTags[minIndex].classList.remove('offSet');
            speciousTags[minIndex].classList.add('active');
            var id = speciousTags[minIndex].id;
            var a = document.querySelector('a[href="#' + id + '"]');
            var li = a.parentNode;
            var brotherAndme = li.parentNode.children;
            for (var _i2 = 0; _i2 < brotherAndme.length; _i2++) {
                brotherAndme[_i2].classList.remove('lightheigh');
            }
            li.classList.add('lightheigh');
        }
        //当滑动到相对应的位置的时候a标签下面的高亮，而且不出现子菜单。
        var liTags = document.querySelectorAll('nav.navbar >ul > li');
        console.log(liTags);
        //遍历数组来进行操作如果aTags是一个数组
        for (var _i3 = 0; _i3 < liTags.length; _i3++) {
            liTags[_i3].onmouseenter = function (x) {
                var li = x.currentTarget;
                console.log(li);
                li.classList.add('active');
            };
            liTags[_i3].onmouseleave = function (x) {
                var li = x.currentTarget;
                li.classList.remove('active');
            };
        }
        setTimeout(function () {
            pdd();
        }, 500);
    }.call();
    //找到距离最近的移除offset类
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function fn() {
    !function () {
        var view = View('nav.navbar');
        var controller = {
            view: null,
            aTags: null,
            init: function init() {
                this.view = view;
                this.initAnimation();
                this.bindEvents();
            },
            initAnimation: function initAnimation() {
                function animate(time) {
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                requestAnimationFrame(animate);
            },
            scrollToElement: function scrollToElement(element) {
                var top = element.offsetTop;
                var currentTop = window.scrollY;
                var targetTop = top - 100;
                var s = targetTop - currentTop; // 路程
                var coords = { y: currentTop }; // 起始位置
                var t = Math.abs(s / 100 * 300); // 时间
                if (t > 500) {
                    t = 500;
                }
                var tween = new TWEEN.Tween(coords) // 起始位置
                .to({ y: targetTop }, t) // 结束位置 和 时间
                .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
                .onUpdate(function () {
                    // coords.y 已经变了
                    window.scrollTo(0, coords.y); // 如何更新界面
                }).start(); // 开始缓动
            },
            bindEvents: function bindEvents() {
                var _this = this;

                var aTags = this.view.querySelectorAll('.navbar > ul >li >a');
                console.log(aTags);
                for (var i = 0; i < aTags.length; i++) {
                    aTags[i].onclick = function (x) {
                        x.preventDefault(); //取消点击跳转到锚点事件
                        var a = x.currentTarget;
                        var href = a.getAttribute('href');
                        var element = document.querySelector(href);
                        _this.scrollToElement(element);
                    };
                }
            }
        };

        controller.init(view);
    }.call();
}
exports.default = fn;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function fn() {
    !function () {
        var view = document.querySelector('#topnavbar');
        var controller = {
            view: null,
            init: function init() {
                this.view = view;
                this.bindEvents();
                //this.bingEnents.call(this)
            },
            bindEvents: function bindEvents() {
                var _this = this;

                var view = this.view;
                window.addEventListener('scroll', function () {
                    if (window.scrollY > 0) {
                        _this.active();
                    } else {
                        _this.deactive();
                    }
                });
            },
            active: function active() {
                this.view.classList.add('sticky');
            },
            deactive: function deactive() {
                this.view.classList.remove('sticky');
            }
        };
        controller.init(view);
        //controller.init.call(controller,view)
    }.call();
}
exports.default = fn;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(11)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./resume.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./resume.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nbody {\n  margin: 0;\n  background-color: #efefef;\n  font-family: cursive; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.swiper-container {\n  width: 736px;\n  height: 552px; }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden; }\n\n.loadingpage.active {\n  display: flex; }\n\n.loadingpage {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  z-index: 2;\n  justify-content: center;\n  align-items: center; }\n\n.loading {\n  height: 200px;\n  width: 200px;\n  position: relative; }\n\n.loading::after, .loading::before {\n  content: '';\n  background-color: #333;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  animation: s 1.5s infinite; }\n\n.loading::after {\n  animation-delay: -1s; }\n\n@keyframes s {\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    width: 100px;\n    height: 100px;\n    opacity: 0; } }\n\n[data-x].offSet {\n  transform: translateY(80px); }\n\n[data-x] {\n  transform: translateY(0);\n  transition: all 0.5s; }\n\n.topnavbar.sticky {\n  background-color: white;\n  color: #3d4451;\n  padding: 8px 0 10px 0;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);\n  transition: all 0.5s; }\n\n.topnavbar {\n  padding: 20px 10px;\n  position: fixed;\n  top: 0;\n  left: o;\n  width: 100%;\n  color: #b7b7b7;\n  z-index: 1;\n  transition: all 0.3s; }\n\n.topnavbar .topnavbar-inner {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.topnavbar .logo {\n  float: left;\n  padding: 1.5px 0px; }\n\n.navbar {\n  float: right;\n  padding-top: 2px; }\n\n.rs {\n  font-size: 24px;\n  font-family: \"Arial Black\";\n  color: #e86767;\n  margin-right: 4px; }\n\n.card {\n  font-size: 24px;\n  font-family: \"Arial Black\";\n  color: #9a9da2; }\n\n.topnavbar .navbar > ul {\n  margin: 0;\n  padding: 0; }\n\n.topnavbar .navbar > ul > li {\n  float: left;\n  list-style: none;\n  margin-left: 17px;\n  margin-right: 17px;\n  position: relative; }\n\n.topnavbar .navbar > ul > li > a {\n  font-size: 12px;\n  font-weight: bold;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid transparent;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  display: block;\n  position: relative; }\n\n.topnavbar .navbar > ul > li.active > a::after,\n.topnavbar .navbar > ul > li.lightheigh > a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: red;\n  animation: slide 0.3s;\n  border-radius: 2px; }\n\n@keyframes slide {\n  0% {\n    width: 0; }\n  100% {\n    width: 100%; } }\n\n.slidemenu {\n  display: none;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  white-space: nowrap;\n  background-color: white;\n  color: #3c4451;\n  font-size: 14px;\n  padding: 10px 10px;\n  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.75); }\n\n@keyframes slidemenu {\n  0% {\n    margin-right: 100%; }\n  100% {\n    margin-right: 0; } }\n\n.navbar li.active > .slidemenu {\n  display: block;\n  animation: slidemenu 0.3s; }\n\n.navbar li.active > .slidemenu > li {\n  position: relative; }\n\n.navbar li.active > .slidemenu > li a:hover::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  border-radius: 3px;\n  background-color: red; }\n\n.banner {\n  height: 515px;\n  background-position: center center;\n  background-size: cover; }\n\n.banner .mask {\n  height: 515px;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.usercard {\n  max-width: 940px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #ffffff;\n  margin-top: -345px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.pictureAndtext {\n  padding: 55px 50px 40px 50px; }\n\n.picture {\n  float: left;\n  margin-right: 60px; }\n\n.usercard .hello {\n  display: inline-block;\n  background-color: #E86767;\n  color: #FFFFFF;\n  padding: 3px 15px 3px 15px;\n  line-height: 22px;\n  position: relative;\n  font-weight: bold; }\n\n.usercard .hello .triangle {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top: 10px solid #E86767;\n  border-right: 10px solid transparent;\n  position: absolute;\n  left: 5px;\n  top: 100%; }\n\n.usercard .text {\n  float: left;\n  width: 481px;\n  margin-bottom: 20px; }\n\n.usercard .text h1 {\n  padding-top: 30px;\n  font-family: cursive; }\n\n.usercard .text hr {\n  height: 0px;\n  border: none;\n  border-top: 1px solid #dedede;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.usercard dl dt,\n.usercard dl dd {\n  float: left;\n  padding: 5px 0px; }\n\n.usercard dl dt {\n  width: 30%;\n  font-weight: bold; }\n\n.usercard dl dd {\n  width: 70%;\n  color: #9da0a7; }\n\n.usercard .footer {\n  border: 1px solid #E86767;\n  background-color: #E86767;\n  text-align: center; }\n\n.usercard .footer a {\n  display: inline-block;\n  border-radius: 50%;\n  width: 40px;\n  padding: 5px 0px;\n  line-height: 30px;\n  margin: 22px; }\n\n.usercard .footer a:hover {\n  background-color: #cf5d5f; }\n\n.usercard svg {\n  width: 30px;\n  height: 30px;\n  fill: white;\n  vertical-align: top; }\n\n.part1 .downloadresume {\n  text-align: center; }\n\n.part1 .download {\n  padding: 21px 55px;\n  font-size: 15px;\n  border: 1px solid #cbcdcf;\n  border-radius: 3%;\n  font-weight: bold;\n  display: inline-block;\n  margin: 35px 0; }\n\n.part1 .download:hover {\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.3s; }\n\n.self {\n  max-width: 940px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  font-size: 20px;\n  line-height: 36px; }\n\n.part2,\n.protfolio,\n.portfolio {\n  max-width: 940px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.part2 .skilltitle,\n.portfolio h2 {\n  padding-top: 70px;\n  font-size: 34px;\n  line-height: 40px;\n  font-weight: 600;\n  text-align: center; }\n\n.part2 .skill {\n  background-color: white;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);\n  padding: 42px 50px 0;\n  margin-top: 30px; }\n\n.part2 .skill li {\n  float: left;\n  width: 48%;\n  box-sizing: border-box;\n  /*50%的宽度是算border的*/ }\n\n.part2 .skill li:nth-child(even) {\n  float: right; }\n\n/*所有的li左浮，只有偶数的li右浮也可以是奇数（odd）*/\n.part2 .progressbar {\n  background-color: #FBE0E0;\n  height: 5px;\n  border-radius: 2px;\n  margin: 4px 0px 40px; }\n\n.part2 .progress {\n  background-color: #E86767;\n  height: 100%;\n  border-radius: 2px; }\n\n.part2.active .progress {\n  animation: bar  1s; }\n\n@keyframes bar {\n  0% {\n    width: 0; }\n  100% {\n    width: data-width; } }\n\n.part2 .skill h3 {\n  font-size: 14px;\n  line-height: 1.1;\n  padding-right: 40px; }\n\n.portfolio {\n  text-align: center; }\n\n.portfolio nav {\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 32px;\n  margin-bottom: 27px; }\n\n.portfolio nav ul {\n  margin: 0px auto;\n  display: inline-block;\n  vertical-align: top; }\n\n.portfolio nav ul li {\n  float: left;\n  margin-left: 40px;\n  cursor: pointer; }\n\n.portfolio nav ul li:nth-child(1) {\n  margin-left: 0px; }\n\n.portfolio .bar {\n  margin-top: 5px;\n  height: 5px;\n  border-radius: 3px;\n  background-color: white;\n  position: relative; }\n\n.portfolio .barinner {\n  width: 10%;\n  background-color: #E86767;\n  height: 100%;\n  border-radius: 3px;\n  position: absolute;\n  left: 70px;\n  top: 0;\n  transition: all 0.4s; }\n\n.portfolio .bar.state-1 .barinner {\n  left: 0px;\n  top: 0;\n  width: 35px; }\n\n.portfolio .bar.state-2 .barinner {\n  top: 0;\n  left: 67px;\n  width: 55px; }\n\n.portfolio .bar.state-3 .barinner {\n  left: 150px;\n  top: 0;\n  width: 100px; }\n\nsection .work {\n  position: relative;\n  height: 597px; }\n\n.portfolio h2 {\n  margin-bottom: 30px; }\n\n.swiper-container {\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.75);\n  border-radius: 2px;\n  margin-bottom: 20px; }\n\n.swiper-button-prev,\n.swiper-button-next {\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);\n  width: 50px;\n  height: 70px;\n  top: calc(50% + 50px);\n  right: 100%;\n  left: auto; }\n\n.swiper-button-next {\n  left: 100%;\n  right: auto; }\n\n.sectionend {\n  max-width: 940px;\n  margin: 0 auto; }\n\n.sectionend h2 {\n  font-size: 34px;\n  margin-top: 70px;\n  text-align: center; }\n\n.sectionend form {\n  margin: 40px 0; }\n\n.sectionend #input:focus {\n  outline: none;\n  border-color: deepskyblue; }\n\n.sectionend input[type=text] {\n  padding: 0px 10px;\n  width: 350px;\n  height: 40px;\n  margin-right: 20px; }\n\n.sectionend #name:focus {\n  outline: none;\n  border-color: deepskyblue; }\n\n.sectionend button {\n  width: 88px;\n  padding: 9px;\n  border: none;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\n  outline: none; }\n\n#messageLeave {\n  background-color: #f9f7f7;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\n  border-radius: 8px; }\n\n#messageLeave li {\n  border-top-color: #b8c1c9;\n  border-bottom-color: #b8c1c9;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n  padding: 10px 120px;\n  font-size: 20px; }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
