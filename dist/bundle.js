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

var _init_swiper = __webpack_require__(4);

var _init_swiper2 = _interopRequireDefault(_init_swiper);

var _auto_slide = __webpack_require__(5);

var _auto_slide2 = _interopRequireDefault(_auto_slide);

var _smoothly_navigation = __webpack_require__(6);

var _smoothly_navigation2 = _interopRequireDefault(_smoothly_navigation);

var _stick_topbar = __webpack_require__(7);

var _stick_topbar2 = _interopRequireDefault(_stick_topbar);

var _init_leancloud = __webpack_require__(8);

var _init_leancloud2 = _interopRequireDefault(_init_leancloud);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _Model2.default)();
(0, _View2.default)();
(0, _resume2.default)();
(0, _init_swiper2.default)();
(0, _auto_slide2.default)();
(0, _smoothly_navigation2.default)();
(0, _stick_topbar2.default)();
(0, _init_leancloud2.default)();

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


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
exports.default = fn;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
exports.default = fn;

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

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function fn() {
    !function () {
        var view = 'sectionend';

        var model = Model({ resourceName: 'message' });
        var controller = {
            view: null,
            model: null,
            messageLeave: null,
            init: function init() {
                this.view = view;
                this.model = model;
                this.model.init();
                this.loadingMessage();
                this.bindEvents();
            },
            loadingMessage: function loadingMessage() {
                this.model.fetch().then(function (messages) {
                    console.log(messages);
                    var array = messages.map(function (item) {
                        return item.attributes;
                    });
                    var newArray = array.slice(-10, array.lenght);
                    newArray.forEach(function (item) {
                        var li = document.createElement('li');

                        li.innerText = item.name + ':' + item.content;

                        messageLeave.append(li);
                    });
                });
            },
            bindEvents: function bindEvents() {
                var _this = this;

                formmessage.addEventListener('submit', function (x) {
                    x.preventDefault();
                    _this.savemessage();
                });
            },
            savemessage: function savemessage() {
                var lists = document.querySelectorAll('#messageLeave > li');
                var name = document.getElementById('name').value;
                var savemessage = document.getElementById('input').value;
                console.log(savemessage);
                if (name === '' || savemessage === '') {
                    alert("请填写完整的信息");
                } else {
                    this.model.save({ 'name': name, 'content': savemessage }).then(function (object) {
                        var li = document.createElement('li');
                        li.innerText = name + ':' + savemessage;
                        messageLeave.append(li);
                        document.getElementById('input').value = null;
                        document.getElementById('name').value = null;
                    });
                }
                if (lists.length >= 10) {
                    lists[length].remove();
                }
            }

        };
        controller.init(view, model);
    }.call();
}
exports.default = fn;

//bingEvent

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(10);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(12)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--1-2!../node_modules/sass-loader/lib/loader.js!./resume.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--1-2!../node_modules/sass-loader/lib/loader.js!./resume.scss");

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "body{background-color:#efefef;font-family:cursive}*,body{margin:0}*{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}h1,h2,h3,h4,h5,h6{font-weight:400}ul{list-style:none}.clearfix:after{content:\"\";display:block;clear:both}.swiper-container{width:736px;height:552px}.icon{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}.loadingpage.active{display:-webkit-box;display:-ms-flexbox;display:flex}.loadingpage{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:gray;z-index:2;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.loading{height:200px;width:200px;position:relative}.loading:after,.loading:before{content:\"\";background-color:#333;height:10px;width:10px;border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;-webkit-animation:a 1.5s infinite;animation:a 1.5s infinite}.loading:after{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes a{0%{width:0;height:0;opacity:1}to{width:100px;height:100px;opacity:0}}@keyframes a{0%{width:0;height:0;opacity:1}to{width:100px;height:100px;opacity:0}}[data-x].offSet{-webkit-transform:translateY(80px);transform:translateY(80px)}[data-x]{-webkit-transform:translateY(0);transform:translateY(0)}.topnavbar.sticky,[data-x]{-webkit-transition:all .5s;transition:all .5s}.topnavbar.sticky{background-color:#fff;color:#3d4451;padding:8px 0 10px;-webkit-box-shadow:0 0 7px 0 rgba(0,0,0,.75);box-shadow:0 0 7px 0 rgba(0,0,0,.75)}.topnavbar{padding:20px 10px;position:fixed;top:0;left:o;width:100%;color:#b7b7b7;z-index:1;-webkit-transition:all .3s;transition:all .3s}.topnavbar .topnavbar-inner{padding-left:20px;padding-right:20px}.topnavbar .logo{float:left;padding:1.5px 0}.navbar{float:right;padding-top:2px}.rs{color:#e86767;margin-right:4px}.card,.rs{font-size:24px;font-family:Arial Black}.card{color:#9a9da2}.topnavbar .navbar>ul{margin:0;padding:0}.topnavbar .navbar>ul>li{float:left;list-style:none;margin-left:17px;margin-right:17px;position:relative}.topnavbar .navbar>ul>li>a{font-size:12px;font-weight:700;border-bottom:3px solid transparent;border-top:3px solid transparent;padding-bottom:5px;padding-top:5px;display:block;position:relative}.topnavbar .navbar>ul>li.active>a:after,.topnavbar .navbar>ul>li.lightheigh>a:after{content:\"\";display:block;position:absolute;top:100%;left:0;width:100%;height:3px;background:red;-webkit-animation:b .3s;animation:b .3s;border-radius:2px}@-webkit-keyframes b{0%{width:0}to{width:100%}}@keyframes b{0%{width:0}to{width:100%}}.slidemenu{display:none;position:absolute;top:100%;right:0;white-space:nowrap;background-color:#fff;color:#3c4451;font-size:14px;padding:10px;-webkit-box-shadow:0 0 7px 1px rgba(0,0,0,.75);box-shadow:0 0 7px 1px rgba(0,0,0,.75)}@-webkit-keyframes c{0%{margin-right:100%}to{margin-right:0}}@keyframes c{0%{margin-right:100%}to{margin-right:0}}.navbar li.active>.slidemenu{display:block;-webkit-animation:c .3s;animation:c .3s}.navbar li.active>.slidemenu>li{position:relative}.navbar li.active>.slidemenu>li a:hover:after{content:\"\";display:block;position:absolute;top:100%;left:0;width:100%;height:3px;border-radius:3px;background-color:red}.banner{height:515px;background-position:50%;background-size:cover}.banner .mask{height:515px;background-color:rgba(0,0,0,.8)}.usercard{max-width:940px;margin-left:auto;margin-right:auto;background-color:#fff;margin-top:-345px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}.pictureAndtext{padding:55px 50px 40px}.picture{float:left;margin-right:60px}.usercard .hello{display:inline-block;background-color:#e86767;color:#fff;padding:3px 15px;line-height:22px;position:relative;font-weight:700}.usercard .hello .triangle{display:block;width:0;height:0;border-top:10px solid #e86767;border-right:10px solid transparent;position:absolute;left:5px;top:100%}.usercard .text{float:left;width:481px;margin-bottom:20px}.usercard .text h1{padding-top:30px;font-family:cursive}.usercard .text hr{height:0;border:none;border-top:1px solid #dedede;margin-top:20px;margin-bottom:20px}.usercard dl dd,.usercard dl dt{float:left;padding:5px 0}.usercard dl dt{width:30%;font-weight:700}.usercard dl dd{width:70%;color:#9da0a7}.usercard .footer{border:1px solid #e86767;background-color:#e86767;text-align:center}.usercard .footer a{display:inline-block;border-radius:50%;width:40px;padding:5px 0;line-height:30px;margin:22px}.usercard .footer a:hover{background-color:#cf5d5f}.usercard svg{width:30px;height:30px;fill:#fff;vertical-align:top}.part1 .downloadresume{text-align:center}.part1 .download{padding:21px 55px;font-size:15px;border:1px solid #cbcdcf;border-radius:3%;font-weight:700;display:inline-block;margin:35px 0}.part1 .download:hover{-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.3);box-shadow:0 2px 5px 0 rgba(0,0,0,.3);-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s,-webkit-box-shadow .3s}.self{text-align:center;font-size:20px;line-height:36px}.part2,.portfolio,.protfolio,.self{max-width:940px;margin-left:auto;margin-right:auto}.part2 .skilltitle,.portfolio h2{padding-top:70px;font-size:34px;line-height:40px;font-weight:600;text-align:center}.part2 .skill{background-color:#fff;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.3);box-shadow:0 2px 5px 0 rgba(0,0,0,.3);padding:42px 50px 0;margin-top:30px}.part2 .skill li{float:left;width:48%;-webkit-box-sizing:border-box;box-sizing:border-box}.part2 .skill li:nth-child(2n){float:right}.part2 .progressbar{background-color:#fbe0e0;height:5px;border-radius:2px;margin:4px 0 40px}.part2 .progress{background-color:#e86767;height:100%;border-radius:2px}.part2.active .progress{-webkit-animation:d 1s;animation:d 1s}@-webkit-keyframes d{0%{width:0}to{width:data-width}}@keyframes d{0%{width:0}to{width:data-width}}.part2 .skill h3{font-size:14px;line-height:1.1;padding-right:40px}.portfolio{text-align:center}.portfolio nav{text-align:center;margin-top:32px;margin-bottom:27px}.portfolio nav,.portfolio nav ul{display:inline-block;vertical-align:top}.portfolio nav ul{margin:0 auto}.portfolio nav ul li{float:left;margin-left:40px;cursor:pointer}.portfolio nav ul li:first-child{margin-left:0}.portfolio .bar{margin-top:5px;height:5px;border-radius:3px;background-color:#fff;position:relative}.portfolio .barinner{width:10%;background-color:#e86767;height:100%;border-radius:3px;position:absolute;left:70px;top:0;-webkit-transition:all .4s;transition:all .4s}.portfolio .bar.state-1 .barinner{left:0;top:0;width:35px}.portfolio .bar.state-2 .barinner{top:0;left:67px;width:55px}.portfolio .bar.state-3 .barinner{left:150px;top:0;width:100px}section .work{position:relative;height:597px}.portfolio h2{margin-bottom:30px}.swiper-container{-webkit-box-shadow:0 0 3px rgba(0,0,0,.75);box-shadow:0 0 3px rgba(0,0,0,.75);border-radius:2px;margin-bottom:20px}.swiper-button-next,.swiper-button-prev{background-color:rgba(0,0,0,.1);-webkit-box-shadow:0 0 3px rgba(0,0,0,.3);box-shadow:0 0 3px rgba(0,0,0,.3);width:50px;height:70px;top:calc(50% + 50px);right:100%;left:auto}.swiper-button-next{left:100%;right:auto}.sectionend{max-width:940px;margin:0 auto}.sectionend h2{font-size:34px;margin-top:70px;text-align:center}.sectionend form{margin:40px 0}.sectionend #input:focus{outline:none;border-color:#00bfff}.sectionend input[type=text]{padding:0 10px;width:350px;height:40px;margin-right:20px}.sectionend #name:focus{outline:none;border-color:#00bfff}.sectionend button{width:88px;padding:9px;border:none;-webkit-box-shadow:0 0 2px rgba(0,0,0,.3);box-shadow:0 0 2px rgba(0,0,0,.3);outline:none}#messageLeave{background-color:#f9f7f7;-webkit-box-shadow:0 0 3px rgba(0,0,0,.1);box-shadow:0 0 3px rgba(0,0,0,.1);border-radius:8px}#messageLeave li{border-top-color:#b8c1c9;border-bottom-color:#b8c1c9;-webkit-box-shadow:0 0 1px rgba(0,0,0,.3);box-shadow:0 0 1px rgba(0,0,0,.3);padding:10px 120px;font-size:20px}", ""]);

// exports


/***/ }),
/* 11 */
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
/* 12 */
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

var	fixUrls = __webpack_require__(13);

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
/* 13 */
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