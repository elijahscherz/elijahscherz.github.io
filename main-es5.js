function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header style=\"height: 56px;\"></header>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/boardgames/boardgames.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boardgames/boardgames.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBoardgamesBoardgamesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"bg-charcoal text-center container-fluid p-lg-5 p-3\">\n    <div class=\"p-3\">\n\n        <!-- Desktop sorting button group -->\n        <div *ngIf=\"!isMobile\">\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                <label class=\"btn btn-light btn-lg\">\n                    <input type=\"radio\" (click)=\"onClickAlpha()\" name=\"options\" id=\"option1\" autocomplete=\"off\">\n                    Alphabetical\n                </label>\n                <label class=\"btn btn-light btn-lg\">\n                    <input type=\"radio\" (click)=\"onClickGeek()\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n                    Geek Rating\n                </label>\n                <label class=\"btn btn-light btn-lg\">\n                    <input type=\"radio\" (click)=\"onClickRating()\" name=\"options\" id=\"option3\" autocomplete=\"off\">\n                    My Rating\n                </label>\n                <label class=\"btn btn-light btn-lg\">\n                    <input type=\"radio\" (click)=\"onClickPlays()\" name=\"options\" id=\"option4\" autocomplete=\"off\"> Plays\n                </label>\n            </div>\n        </div>\n\n        <!-- Mobile sorting button group -->\n        <div *ngIf=\"isMobile\">\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                <label class=\"btn btn-light btn-sm\">\n                    <input type=\"radio\" (click)=\"onClickAlpha()\" name=\"options\" id=\"option1\" autocomplete=\"off\">\n                    Alphabetical\n                </label>\n                <label class=\"btn btn-light btn-sm\">\n                    <input type=\"radio\" (click)=\"onClickGeek()\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n                    Geek Rating\n                </label>\n                <label class=\"btn btn-light btn-sm\">\n                    <input type=\"radio\" (click)=\"onClickRating()\" name=\"options\" id=\"option3\" autocomplete=\"off\"> My\n                    Rating\n                </label>\n                <label class=\"btn btn-light btn-sm\">\n                    <input type=\"radio\" (click)=\"onClickPlays()\" name=\"options\" id=\"option4\" autocomplete=\"off\"> Plays\n                </label>\n            </div>\n        </div>\n\n        <div class=\"row h-100 align-items-center\">\n            <div class=\"col-lg-4 col-6 p-3\" *ngFor=\"let game of games\">\n\n                <!-- Render each game -->\n                <div class=\"game p-3\">\n                    <a target=\"_blank\" rel=\"noopener noreferrer\"\n                        href=\"https://boardgamegeek.com/boardgame/{{game.objectid}}\">\n                        <img src=\"{{game.image}}\">\n                    </a>\n                    <h2 *ngIf=\"!isMobile\">{{game.name.text}}</h2>\n                    <h5 *ngIf=\"isMobile\">{{game.name.text}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"screen-fill bg-charcoal container-fluid text-center p-lg-5 p-5\">\n  <div class=\"row h-100 align-items-center\">\n      <h1 class=\"big-title col-12\">Contact Me</h1>\n      <div class=\"col-lg-4 col-12 p-lg-5 p-3\">\n          <a href=\"https://www.linkedin.com/in/elijah-scherz/\">\n          <div class=\"hover-div-dip p-lg-3 p-2\">\n            <div class=\"text-center p-lg-4 p-3\">\n              <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n                <fa-icon [icon]=\"faCircle\"></fa-icon>\n                <fa-icon [inverse]=\"true\" [icon]=\"faLinkedin\" transform=\"shrink-6\"></fa-icon>\n              </fa-layers>\n            </div>\n            <h3>\n              LinkedIn\n            </h3>\n        \n          </div></a>\n      </div>\n      <div class=\"col-lg-4 col-12 p-lg-5 p-3\">\n        <a href=\"mailto:elijahscherz@gmail.com\">\n        <div class=\"hover-div-dip p-lg-5 p-2\">\n            <div class=\"text-center p-lg-4 p-3\">\n              <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n                <fa-icon [icon]=\"faCircle\"></fa-icon>\n                <fa-icon [inverse]=\"true\" [icon]=\"faEnvelope\" transform=\"shrink-6\"></fa-icon>\n              </fa-layers>\n            </div>\n            <h3>Email</h3>\n          </div>\n          </a>\n      </div>\n      <div class=\"col-lg-4 col-12 p-lg-5 p-3\">\n          <a href=\"https://github.com/elijahscherz/\">\n          <div class=\"hover-div-dip p-lg-3 p-2\">\n            <div class=\"text-center p-lg-4 p-3\">\n              <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n                <fa-icon [icon]=\"faCircle\"></fa-icon>\n                <fa-icon [inverse]=\"true\" [icon]=\"faGithub\" transform=\"shrink-6\"></fa-icon>\n              </fa-layers>\n            </div>\n            <h3>\n              Github\n            </h3>\n        \n          </div></a>\n      </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Interactive resume page -->\n<p>experience works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer id=\"footer\" class=\"p-4 my-auto\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <h4>Elijah Scherz</h4>\n                <a>elijahscherz@gmail.com</a>\n            </div>\n        \n            <div class=\"col-8 text-right my-auto\">\n                <a routerLink=\"\">HOME</a>\n                <a routerLink=\"/projects\">PROJECTS</a>\n                <!-- <a routerLink=\"/experience\">EXPERIENCE</a> -->\n                <a routerLink=\"/boardgames\">BOARDGAMES</a>\n                <a routerLink=\"/contact\">CONTACT</a>\n            </div>\n        </div>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-contact/home-contact.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-contact/home-contact.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeContactHomeContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Contact -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      Contact\n    </h2>\n    <p class=\"lead\">\n      Here are a couple cool things about me, my skills, interests, and links to further\n      information if possible.\n    </p>\n  </div>\n</section>\n<!-- /Contact -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-interests/home-interests.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-interests/home-interests.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeInterestsHomeInterestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Interests Summary -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      Interests\n    </h2>\n    <p class=\"lead\">\n      Here are a couple cool things about me, my skills, interests, and links to further\n      information if possible.\n    </p>\n  </div>\n</section>\n<!-- /Interests Summary -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-intro/home-intro.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-intro/home-intro.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeIntroHomeIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Quick Intro -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      A little about me...\n    </h2>\n    <p class=\"lead\">\n      I'm currently an undergraduate computer science student at the University of Michigan. I've worked on projects\n      ranging from React sites to multithreaded file servers and truly enjoy variety. In my spare time, I love to host\n      game nights, play Ultimate, cook new recipes, develop games, and dive into any hobby I can get my hands on.\n    </p>\n  </div>\n</section>\n<!-- /Quick Intro -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-projects/home-projects.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-projects/home-projects.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeProjectsHomeProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Projects Summary -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      Projects\n    </h2>\n    <p class=\"lead\">\n      Here are a couple cool things about me, my skills, interests, and links to further\n      information if possible.\n    </p>\n  </div>\n</section>\n<!-- /Projects Summary -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-resume/home-resume.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-resume/home-resume.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeResumeHomeResumeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Resume Overview -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n\n  <h1 class=\"home-title p-5\">RESUME</h1>\n  <hr>\n\n  <div class=\"home-resume-entry row py-3\" *ngFor=\"let experience of experiences\" style=\"white-space: pre-wrap;\">\n    <div class=\"col-lg-4 col-12 text-center\">\n      <span class=\"icon-item fa-stack fa-4x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-code fa-stack-1x\"></i>\n      </span>\n      <div style=\"margin: auto; background-color:dimgray; width: 0.5em; height: 15em;\"></div>\n    </div>\n    <div class=\"col-lg-8 col-12\">\n      <h4>{{experience.name}}, {{experience.location}} — {{experience.info}}\n      </h4>\n      <p>{{experience.date}}</p>\n      <p class=\"lead\">{{experience.description}}</p>\n    </div>\n  </div>\n</section>\n<!-- /Resume Overview -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-skills/home-skills.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-skills/home-skills.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSkillsHomeSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Skills Summary -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <h1 class=\"home-title p-5\">SKILLS</h1>\n  <hr>\n\n  <div class=\"home-skill-entry row py-3\" *ngFor=\"let skill of skills\" style=\"white-space: pre-wrap;\">\n    <div class=\"col-2 text-center\">\n      <!-- TODO: Icon on bar when it loads? -->\n      <!-- <h3>ICON</h3> -->\n      <span class=\"icon-item fa-stack fa-1x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-code fa-stack-1x\"></i>\n      </span>\n    </div>\n    <div class=\"col-10\">\n      <h4>{{skill.name}}, {{skill.type}}\n      </h4>\n      <p>{{skill.type}}</p>\n      <p class=\"lead\">{{skill.percentage}}</p>\n    </div>\n  </div>\n</section>\n<!-- /Skills Summary -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-splash></app-splash>\n<!-- <app-home-intro></app-home-intro>\n<app-home-resume></app-home-resume>\n<app-home-skills></app-home-skills>\n<app-home-interests></app-home-interests>\n<app-home-contact></app-home-contact> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Quick Intro -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      A little about me...\n    </h2>\n    <p class=\"lead\">\n      I'm currently an undergraduate computer science student at the University of Michigan. I've worked on projects\n      ranging from React sites to multithreaded file servers and truly enjoy variety. In my spare time, I love to host\n      game nights, play Ultimate, cook new recipes, develop games, and dive into any hobby I can get my hands on.\n    </p>\n  </div>\n\n  <!-- <section class=\"icons p-5 d-none d-lg-block\">\n    <div class=\"row\">\n      <span class=\"col-4 icon-item fa-stack fa-2x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-code fa-stack-1x\"></i>\n      </span>\n      <span class=\"col-4 icon-item fa-stack fa-2x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-guitar fa-stack-1x\"></i>\n      </span>\n      <span class=\"col-4 icon-item fa-stack fa-2x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-compact-disc fa-stack-1x\"></i>\n      </span>\n    </div>\n  </section> -->\n</section>\n<!-- /Quick Intro -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top\">\n  <!-- Navbar brand -->\n  <a class=\"navbar-brand\" routerLink=\"\">Elijah Scherz</a>\n\n  <!-- Navbar toggle button-->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n    aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <div class=\"navbar-nav ml-auto\">\n      <a class=\"nav-item nav-link active\" routerLink=\"\">HOME<span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/projects\">PROJECTS</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/boardgames\">BOARDGAMES</a>\n      <!-- <a class=\"nav-item nav-link active\" routerLink=\"/experience\">EXPERIENCE</a> -->\n      <a class=\"nav-item nav-link active\" routerLink=\"/contact\">CONTACT</a>\n    </div>\n  </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPanelsPanelsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"panels container\">\n    <div class=\"row\">\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-right\">\n        <h3>\n            Currently Attending The University of Michigan, Ann Arbor\n        </h3>\n        <p class=\"lead\">It's a great place, honestly.</p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-up\">\n        <h3>Worship Leader</h3>\n        <p class=\"lead\">\n            Using my skills and superpowers of music to play guitar and\n            occasionally sing at\n            <a href=\"https://www.facebook.com/Chelsea-Church-of-The-Nazarene-158323664189170/\">Chelsea Church of the\n            Nazarene</a>.\n        </p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-left\">\n        <h3>Sunday School Teacher</h3>\n        <p class=\"lead\">\n            Also at Chelsea, I take great pride in showing the little ones how\n            amazing God's love can really be. Jealous?\n        </p>\n        </div>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-right\">\n        <h3>Blender</h3>\n        <p class=\"lead\">\n            This\n            <a href=\"https://www.blender.org/\">3D modeling software</a>\n            has to be one of the most fantastic things I've ever played with.\n            With the resources online, I guarantee you can shock yourself at\n            the realism you can make.\n        </p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-up\">\n        <h3>Raspberry Pi</h3>\n        <p class=\"lead\">\n            I've started working with these little devices, and they can be\n            applied in some of the most interesting ways. Recently, I made a\n            system that combines arcade, SNES, NES, SEGA, and even more. It\n            started as a small project inspired by wanting to let my dad play\n            the games he used to play, but grew into a system with thousands\n            of games, multiple controllers, and hopefully a portable version\n            in the near future.\n        </p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-left\">\n        <h3>Movies and TV</h3>\n        <p class=\"lead\">\n            I'm a huge movie and TV fan. I've fancied myself a bit of a critic\n            when it comes to these things, and I very much enjoy analyzing\n            films and pulling them apart to see what either makes them good or\n            garbage. Wonder Woman? Good. Stranger Things? Good. Suicide Squad?\n            Not so good.\n        </p>\n        </div>\n    </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 col-lg-6 p-3\">\n  <div class=\"gist hover-div-dip p-3\" (click)=\"expanded = !expanded\">\n    <div class=\"text-center p-4\">\n      <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n        <fa-icon [icon]=\"faCircle\"></fa-icon>\n        <fa-icon [inverse]=\"true\" [icon]=\"faJira\" transform=\"shrink-6\"></fa-icon>\n      </fa-layers>\n    </div>\n    <h2 class=\"text-center\">{{name}}</h2>\n    <p *ngIf=\"expanded\">{{description}}</p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-charcoal container-fluid p-lg-5 p-3\">\n  <div class=\"p-3\">\n    <h1 class=\"big-title\">School and Work Projects</h1>\n    <div class=\"row\">\n      <!-- <app-project [name]=\"'Jira Duplicator'\" [icon]=\"'faJira'\" [description]=\"'This particular project was done during my time at RightBrain Networks. It started out as a Python\n              script meant to copy simple issues between client boards and company boards. It evolved into its own\n            custom module and class, which leveraged jira-python to access the Jira REST API and\n            pull information from passed in issues. Using an argument system, the program could do multiple issues at\n            once, do a query based on Jira\\'s JQL syntax, or even sync two issues to match one another. I ended up\n            supporting copying comments, priorities, assignees, and subtasks, all depending on the availability of the\n            source and target issues.\\n\\nChallenges\\nThe most difficult part of building this was dealing\n            with the Jira API which would respond with different amounts of information from issues depending on a\n            variety of variables, including who you were logged in as, what type of project you were getting issues\n            from, etc. The solution to this was using checks to see if a field was available on the issue or subtask,\n            and also seeing if required fields were all available on the source issue.'\"></app-project> -->\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faJira\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">Jira Duplicator</h2>\n          <p>This particular project was done during my time at RightBrain Networks. It started out as a <b>Python\n              script</b> meant to copy simple issues between client boards and company boards. It evolved into its own\n            <b>custom module and class</b>, which leveraged <b>jira-python</b> to access the <b>Jira REST API</b> and\n            pull information from passed in issues. Using an argument system, the program could do multiple issues at\n            once, do a query based on <b>Jira's JQL syntax</b>, or even sync two issues to match one another. I ended up\n            supporting copying comments, priorities, assignees, and subtasks, all depending on the availability of the\n            source and target issues.<br><br><b>Challenges</b><br>The most difficult part of building this was dealing\n            with the Jira API which would respond with different amounts of information from issues depending on a\n            variety of variables, including who you were logged in as, what type of project you were getting issues\n            from, etc. The solution to this was using checks to see if a field was available on the issue or subtask,\n            and also seeing if required fields were all available on the source issue.</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faBootstrap\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">RightBrain Website</h2>\n          <p><a href=\"https://rightbrainnetworks.com\">RBN's website</a> started out based in WordPress with some content\n            already available, but it was in need of a modern update. It was previously hosted on <b>AWS Lightsail</b>,\n            but since that platform takes more administration, I moved it to a new provider, and set up <b>three\n              environments</b> (dev, stage, and prod) for a better development workflow. I used <b>Bootstrap and CSS</b>\n            to update some of the pages that were already available, doing a major overhaul on the home page.\n            Additionally, we split up their single solutions page into a suite of pages and created case studies that\n            are more interactive than the pdfs that were previously available. There are more pages that I designed and\n            created which simply need content from their team, and then they will be launched hopefully in the near\n            future.</p>\n        </div>\n      </div>\n      <!-- <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip text-left p-3\">\n          <h2>Template Generator</h2>\n          <p>info</p>\n        </div>\n      </div> -->\n    </div>\n  </div>\n\n  <div class=\"p-3\">\n    <h1 class=\"big-title\">Personal Projects</h1>\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faPython\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">A Night to Remember</h2>\n          <p>I've been working on this one for almost a year and a half at this point. My dad was a huge fan of\n            <b>text-based Infocom games</b> (like Zork) when he was a kid and challenged me to make one. After playing\n            one myself, I got a bit inspired and started working on it in the summer of 2018. I first decided to\n            approach the problem using \"vanilla\" <b>Python</b>. I played a few more of the games and determined which\n            parts of the system I wanted to incorporate. There are multiple ways to interact with the world based on\n            commands and keywords. You can also move in different directions and collect items. While my initial system\n            wasn't as complicated as Infocom's, which could support phrases like \"stand on shoulders and leave hole\",\n            you could get/check items, interact with certain things like doors with those items, and move.<br><br>At\n            this point, I started to get more interested in where I could go with this. I've always enjoyed reading and\n            wanted to make this into a story. I started writing a <b>murder mystery</b> where you need to explore and\n            discover what happened. I decided I wanted to move this project into <b>C# and Unity</b> which would give me\n            easier access to graphics, sounds, and more. Currently, we are working on completing more art, getting some\n            final endings implemented, and brushing up on the details of the story. It's a work in progress, but a fun\n            one.</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faNodeJs\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">Discord Chat Bot</h2>\n          <p>This small project, which is somewhat of a constant work in progress, is a way to learn a bit more about\n            how to we make bots act in a human-like fashion. I picked up the Discord API and started learning about what\n            it can do when I built the foundation of a bot in <b>Node.js</b>. Right now, it doesn't do much, but it uses\n            <b>VADER sentiment analysis</b> to post reactions to certain messages and reacts to other messages based on\n            keywords. I polled friends and those online to see what types of words they typically react to and in what\n            way, and then set up the bot to randomly react to messages.<br><br>I wanted to incorporate more talking\n            ability into the system, but didn't have too much experience with <b>NLP</b> up to this point. I found that\n            <b>Google's Dialogflow had a Node.js SDK</b>, and I got to work hooking up a very basic chat / response\n            system. There is a lot more I can do with it if I take the time to incorporate more responses In the future,\n            using the <b>Intents</b> functionality that Google provides. I also can just let it loose in a couple of\n            servers and <b>use the responses to train</b> it using Google's built in functionality. I'll make it more\n            complex at some point, but it was just a fun little project.</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faAngular\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">My Website</h2>\n          <p>I built this site not too long ago after wanting to change it from my old one. I decided that I wanted to\n            learn <b>Angular and Typescript</b> so took this site as an opportunity. I'm still learning a lot of the\n            concepts, as it is a big framework, but I love the power of it. The Github Gists at the bottom of this page\n            are fetched from a service that utilizes <b>Angular's HTTPClient class</b> and the <b>Github API</b> to pull\n            the code and information of all my public gists. Pretty sweet!<br><br>I make use of <b>CSS for\n              animations</b> and cool transitions, and have been using <b>Font Awesome</b> for icons (as they have a\n            module for Angular now).</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faNodeJs\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">Discord Soundboard Bot</h2>\n          <p>After building one Discord bot, a friend of mine messaged me and wanted me to make something for him: a bot\n            which could <b>join voice chat and play clips</b>. Using the <b>node-opus</b> module, I was able to get the\n            bot to stream clips. Ask requested, I made a method for tagging these clips in the bot, so that you can then\n            search them while in Discord. The bot will direct message you with a list of relevant clips. If you use one\n            of the bots keywords while chatting, it will start playing it's clips for a variety of hilarious outcomes\n            and ridiculous interruptions. We later on extended this functionality to be able to play music!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3\">\n    <h1 class=\"big-title\">Github Gists</h1>\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-6 p-3\" *ngFor=\"let gist of gists\">\n        <div class=\"gist hover-div-dip text-center p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faGithub\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faJira\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <a [href]=\"gist.html_url\">\n            <h2 *ngFor=\"let file of gist.files | keyvalue\">\n              {{ file.value.filename }}\n            </h2>\n          </a>\n          <p>{{ gist.description }}</p>\n          <pre class=\"text-left\"><code [highlight]=\"gist.content\"></code></pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcases/showcases.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcases/showcases.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowcasesShowcasesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- Showcases -->\n  <section class=\"showcase\">\n    <div class=\"container-fluid p-0\">\n      <section class=\"row no-gutters\">\n        <div class=\"col-md-6 order-md-1 showcase-img p-5\"\n          style=\"background-image: url('assets/images/pic01.jpg');\"></div>\n        <div class=\" col-md-6 order-md-2 showcase-text my-auto slide-left\">\n          <h2>Code Development</h2>\n          <p class=\"lead\">\n            I've been programming for a couple years now and have bounced\n            between languages involved with web development to bash scripting.\n            I've been loving C#, specifically as it applies to game creation\n            in <a href=\"https://unity3d.com/\">Unity</a>. Most recently, I've\n            been working with C++ to learn more about the techniques of object\n            oriented programming.\n          </p>\n        </div>\n      </section>\n\n      <section class=\"row no-gutters\">\n        <div class=\"col-md-6 order-md-2 showcase-img p-5\"\n          style=\"background-image: url('assets/images/pic02.jpg');\"></div>\n        <div class=\"col-md-6 order-md-1 showcase-text my-auto slide-right\">\n          <h2>Ultimate Frisbee</h2>\n          <p class=\"lead\">\n            I've played friz for over seven years now. Over the last\n            couple years I've competed in multiple tournaments including the\n            U.S. Open in Minnesota, Club Regional Championships, and College Nationals in Texas. I\n            love the sport, I love the people.\n          </p>\n        </div>\n      </section>\n\n      <section class=\"row no-gutters\">\n        <div class=\"col-md-6 order-md-1 showcase-img p-5\"\n          style=\"background-image: url('assets/images/pic03.jpg');\"></div>\n        <div class=\"col-md-6 order-md-2 showcase-text my-auto slide-left\">\n          <h2>Music</h2>\n          <p class=\"lead\">\n            From a young age, I grew up in a musical household. My parents\n            both play various instruments as well as sing, and those skills\n            have passed down to me. I play guitar and sing, and can carry a\n            beat on drums and play simple chord songs on piano. Can't seem to\n            forget how much of a wonder music is, and that is likely what\n            brings me to listen to so many tunes. I've got pretty wide tastes,\n            from alternative, to classic rock, to punk pop. Take a look at my\n            <a href=\"https://open.spotify.com/user/elijahscherz\">Spotify</a>\n            to find some new bands and some great playlists.\n          </p>\n        </div>\n      </section>\n    </div>\n  </section>\n  <!-- /Showcases -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSplashSplashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Splash -->\n<header id=\"mainSplash\" class=\"splash\">\n  <div class=\"container-fluid h-100\">\n    <div id=\"splashText\" class=\"row h-100 align-items-center text-center\">\n      <!-- <div id=\"splashText\" class=\"text-center\"> -->\n      <div class=\"offset-lg-1 col-lg-4 col-12\">\n        <img src=\"assets/images/headshot.jpg\" alt=\"Elijah Scherz\">\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <h1 class=\"display-2 font-weight-light\">\n          Elijah Scherz\n        </h1>\n        <h2 class=\"font-weight-light\">\n          Developer. Musician. Player.\n        </h2>\n      </div>\n      <!-- </div> -->\n    </div>\n  </div>\n</header>\n<!-- /.Splash-->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./boardgames/boardgames.component */
    "./src/app/boardgames/boardgames.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    }, {
      path: 'experience',
      component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"]
    }, {
      path: 'boardgames',
      component: _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_7__["BoardgamesComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'elijahscherz-main';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: hljsLanguages, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hljsLanguages", function () {
      return hljsLanguages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _splash_splash_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./splash/splash.component */
    "./src/app/splash/splash.component.ts");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/intro/intro.component.ts");
    /* harmony import */


    var _showcases_showcases_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./showcases/showcases.component */
    "./src/app/showcases/showcases.component.ts");
    /* harmony import */


    var _panels_panels_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./panels/panels.component */
    "./src/app/panels/panels.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _github_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./github.service */
    "./src/app/github.service.ts");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! highlight.js/lib/languages/javascript */
    "./node_modules/highlight.js/lib/languages/javascript.js");
    /* harmony import */


    var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! highlight.js/lib/languages/typescript */
    "./node_modules/highlight.js/lib/languages/typescript.js");
    /* harmony import */


    var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! highlight.js/lib/languages/css */
    "./node_modules/highlight.js/lib/languages/css.js");
    /* harmony import */


    var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! highlight.js/lib/languages/xml */
    "./node_modules/highlight.js/lib/languages/xml.js");
    /* harmony import */


    var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! highlight.js/lib/languages/bash */
    "./node_modules/highlight.js/lib/languages/bash.js");
    /* harmony import */


    var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/project/project.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_intro_home_intro_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home-intro/home-intro.component */
    "./src/app/home-intro/home-intro.component.ts");
    /* harmony import */


    var _home_resume_home_resume_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home-resume/home-resume.component */
    "./src/app/home-resume/home-resume.component.ts");
    /* harmony import */


    var _home_skills_home_skills_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home-skills/home-skills.component */
    "./src/app/home-skills/home-skills.component.ts");
    /* harmony import */


    var _home_projects_home_projects_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./home-projects/home-projects.component */
    "./src/app/home-projects/home-projects.component.ts");
    /* harmony import */


    var _home_interests_home_interests_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./home-interests/home-interests.component */
    "./src/app/home-interests/home-interests.component.ts");
    /* harmony import */


    var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./home-contact/home-contact.component */
    "./src/app/home-contact/home-contact.component.ts");
    /* harmony import */


    var _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./boardgames/boardgames.component */
    "./src/app/boardgames/boardgames.component.ts"); // Code Highlighting
    // FontAwesome
    // Mobile detection


    function hljsLanguages() {
      return [{
        name: "typescript",
        func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19___default.a
      }, {
        name: "javascript",
        func: highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_18___default.a
      }, {
        name: "css",
        func: highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_20___default.a
      }, {
        name: "xml",
        func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_21___default.a
      }, {
        name: "bash",
        func: highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_22___default.a
      }];
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _splash_splash_component__WEBPACK_IMPORTED_MODULE_8__["SplashComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"], _showcases_showcases_component__WEBPACK_IMPORTED_MODULE_10__["ShowcasesComponent"], _panels_panels_component__WEBPACK_IMPORTED_MODULE_11__["PanelsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_25__["ProjectComponent"], _home_intro_home_intro_component__WEBPACK_IMPORTED_MODULE_27__["HomeIntroComponent"], _home_resume_home_resume_component__WEBPACK_IMPORTED_MODULE_28__["HomeResumeComponent"], _home_skills_home_skills_component__WEBPACK_IMPORTED_MODULE_29__["HomeSkillsComponent"], _home_projects_home_projects_component__WEBPACK_IMPORTED_MODULE_30__["HomeProjectsComponent"], _home_interests_home_interests_component__WEBPACK_IMPORTED_MODULE_31__["HomeInterestsComponent"], _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_32__["HomeContactComponent"], _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_33__["BoardgamesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_17__["HighlightModule"].forRoot({
        languages: hljsLanguages
      }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_24__["DeviceDetectorModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"]],
      providers: [_github_service__WEBPACK_IMPORTED_MODULE_16__["GithubService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/boardgames/boardgames.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/boardgames/boardgames.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBoardgamesBoardgamesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div.game {\n    color: white;\n}\n\n.game img{\n    max-width: 100%;\n    max-height: 50vh;\n    border-radius: 10%;\n    box-shadow: 0 30px 32px 0 rgba(0, 0, 0, 0.295);\n    /* border: 0px solid transparent; */\n    /* border-width: 0px 0px 0px 0px; */\n    border: 7px solid rgb(255, 255, 255);\n    transform: scale(0.9);\n    transition: all .2s ease-in-out;\n}\n\n.game img:hover {\n    border-radius: 20%;\n    /* border-width: 0px 0px 0px 0px; */\n    border-style: solid;\n    transform: scale(1.1);\n    transition: all .2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmRnYW1lcy9ib2FyZGdhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBSXBDLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUluQixxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvYm9hcmRnYW1lcy9ib2FyZGdhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZ2FtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2FtZSBpbWd7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDUwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMzBweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI5NSk7XG4gICAgLyogYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7ICovXG4gICAgLyogYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7ICovXG4gICAgYm9yZGVyOiA3cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5nYW1lIGltZzpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIC8qIGJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4OyAqL1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/boardgames/boardgames.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/boardgames/boardgames.component.ts ***!
    \****************************************************/

  /*! exports provided: BoardgamesComponent */

  /***/
  function srcAppBoardgamesBoardgamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardgamesComponent", function () {
      return BoardgamesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_data_games_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/data/games.json */
    "./src/assets/data/games.json");

    var _assets_data_games_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/data/games.json */
    "./src/assets/data/games.json", 1);

    var BoardgamesComponent = /*#__PURE__*/function () {
      function BoardgamesComponent() {
        _classCallCheck(this, BoardgamesComponent);

        // https://www.boardgamegeek.com/xmlapi2/collection?username=elijahscherz&stats=1&own=1&excludesubtype=boardgameexpansion
        // Download this XML file
        // Convert to JSON with: https://www.freeformatter.com/xml-to-json-converter.html (change the text field to just "text")
        // Download it and save it as data/games.json
        // Remove the characters before and after the list [] brackets
        this.games = _assets_data_games_json__WEBPACK_IMPORTED_MODULE_2__;
        this.isMobile = false;
      }

      _createClass(BoardgamesComponent, [{
        key: "onClickAlpha",
        value: function onClickAlpha() {
          this.games.sort(function (a, b) {
            return a.name.text.localeCompare(b.name.text);
          });
        }
      }, {
        key: "onClickGeek",
        value: function onClickGeek() {
          this.games.sort(function (a, b) {
            return a.stats.rating.average.value - b.stats.rating.average.value;
          }).reverse();
        }
      }, {
        key: "onClickRating",
        value: function onClickRating() {
          this.games.sort(function (a, b) {
            // If I haven't rated one of the games, then just use the average
            if (a.stats.rating.value === "N/A") {
              a.stats.rating.value = a.stats.rating.average.value;
            }

            if (b.stats.rating.value === "N/A") {
              b.stats.rating.value = b.stats.rating.average.value;
            }

            return a.stats.rating.value - b.stats.rating.value;
          }).reverse();
        }
      }, {
        key: "onClickPlays",
        value: function onClickPlays() {
          this.games.sort(function (a, b) {
            return a.numplays - b.numplays;
          }).reverse();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Fairly simple mobile detection method
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
          } // Randomize the game page display to start


          this.games.sort(function () {
            return Math.random() - 0.5;
          });
        }
      }]);

      return BoardgamesComponent;
    }();

    BoardgamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-boardgames',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./boardgames.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/boardgames/boardgames.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./boardgames.component.css */
      "./src/app/boardgames/boardgames.component.css"))["default"]]
    })], BoardgamesComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".screen-fill {\r\n    min-height: 90vh;\r\n}\r\n\r\n.hover-div-dip {\r\n    word-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tZmlsbCB7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4uaG92ZXItZGl2LWRpcCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"];
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCircle"];
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/experience/experience.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/experience/experience.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExperienceExperienceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.css */
      "./src/app/experience/experience.component.css"))["default"]]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#footer {\r\n    background-color: #212529;\r\n    color: rgb(128, 128, 128);\r\n}\r\n\r\n#footer a {\r\n    display: block;\r\n    color: rgb(128, 128, 128);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59XHJcblxyXG4jZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/github.service.ts":
  /*!***********************************!*\
    !*** ./src/app/github.service.ts ***!
    \***********************************/

  /*! exports provided: GithubService */

  /***/
  function srcAppGithubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubService", function () {
      return GithubService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var GithubService = /*#__PURE__*/function () {
      function GithubService(http) {
        _classCallCheck(this, GithubService);

        this.http = http; // Define GitHub API url

        this.apiUrl = 'https://api.github.com/users/elijahscherz';
      }

      _createClass(GithubService, [{
        key: "getGists",
        value: function getGists() {
          return this.http.get("".concat(this.apiUrl, "/gists"));
        }
      }, {
        key: "getGistCode",
        value: function getGistCode(rawUrl) {
          return this.http.get(rawUrl, {
            responseType: "text"
          });
        }
      }, {
        key: "getRepos",
        value: function getRepos() {
          return this.http.get("".concat(this.apiUrl, "/repos"));
        }
      }]);

      return GithubService;
    }();

    GithubService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GithubService);
    /***/
  },

  /***/
  "./src/app/home-contact/home-contact.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/home-contact/home-contact.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeContactHomeContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29udGFjdC9ob21lLWNvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home-contact/home-contact.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home-contact/home-contact.component.ts ***!
    \********************************************************/

  /*! exports provided: HomeContactComponent */

  /***/
  function srcAppHomeContactHomeContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeContactComponent", function () {
      return HomeContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeContactComponent = /*#__PURE__*/function () {
      function HomeContactComponent() {
        _classCallCheck(this, HomeContactComponent);
      }

      _createClass(HomeContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeContactComponent;
    }();

    HomeContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-contact/home-contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-contact.component.css */
      "./src/app/home-contact/home-contact.component.css"))["default"]]
    })], HomeContactComponent);
    /***/
  },

  /***/
  "./src/app/home-interests/home-interests.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/home-interests/home-interests.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeInterestsHomeInterestsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtaW50ZXJlc3RzL2hvbWUtaW50ZXJlc3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home-interests/home-interests.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/home-interests/home-interests.component.ts ***!
    \************************************************************/

  /*! exports provided: HomeInterestsComponent */

  /***/
  function srcAppHomeInterestsHomeInterestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeInterestsComponent", function () {
      return HomeInterestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeInterestsComponent = /*#__PURE__*/function () {
      function HomeInterestsComponent() {
        _classCallCheck(this, HomeInterestsComponent);
      }

      _createClass(HomeInterestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeInterestsComponent;
    }();

    HomeInterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-interests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-interests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-interests/home-interests.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-interests.component.css */
      "./src/app/home-interests/home-interests.component.css"))["default"]]
    })], HomeInterestsComponent);
    /***/
  },

  /***/
  "./src/app/home-intro/home-intro.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/home-intro/home-intro.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeIntroHomeIntroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtaW50cm8vaG9tZS1pbnRyby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home-intro/home-intro.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/home-intro/home-intro.component.ts ***!
    \****************************************************/

  /*! exports provided: HomeIntroComponent */

  /***/
  function srcAppHomeIntroHomeIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeIntroComponent", function () {
      return HomeIntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeIntroComponent = /*#__PURE__*/function () {
      function HomeIntroComponent() {
        _classCallCheck(this, HomeIntroComponent);
      }

      _createClass(HomeIntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeIntroComponent;
    }();

    HomeIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-intro/home-intro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-intro.component.css */
      "./src/app/home-intro/home-intro.component.css"))["default"]]
    })], HomeIntroComponent);
    /***/
  },

  /***/
  "./src/app/home-projects/home-projects.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/home-projects/home-projects.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeProjectsHomeProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcHJvamVjdHMvaG9tZS1wcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home-projects/home-projects.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home-projects/home-projects.component.ts ***!
    \**********************************************************/

  /*! exports provided: HomeProjectsComponent */

  /***/
  function srcAppHomeProjectsHomeProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeProjectsComponent", function () {
      return HomeProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeProjectsComponent = /*#__PURE__*/function () {
      function HomeProjectsComponent() {
        _classCallCheck(this, HomeProjectsComponent);
      }

      _createClass(HomeProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeProjectsComponent;
    }();

    HomeProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-projects/home-projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-projects.component.css */
      "./src/app/home-projects/home-projects.component.css"))["default"]]
    })], HomeProjectsComponent);
    /***/
  },

  /***/
  "./src/app/home-resume/home-resume.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/home-resume/home-resume.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeResumeHomeResumeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ICONS */\n\n.icon-item {\n  color: white;\n}\n\n.icon-item .fa-circle {\n  color: rgb(33, 37, 41);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1yZXN1bWUvaG9tZS1yZXN1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVOztBQUVWO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1yZXN1bWUvaG9tZS1yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIElDT05TICovXG5cbi5pY29uLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pY29uLWl0ZW0gLmZhLWNpcmNsZSB7XG4gIGNvbG9yOiByZ2IoMzMsIDM3LCA0MSk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-resume/home-resume.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/home-resume/home-resume.component.ts ***!
    \******************************************************/

  /*! exports provided: HomeResumeComponent */

  /***/
  function srcAppHomeResumeHomeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeResumeComponent", function () {
      return HomeResumeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_data_experiences_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/data/experiences.json */
    "./src/assets/data/experiences.json");

    var _assets_data_experiences_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/data/experiences.json */
    "./src/assets/data/experiences.json", 1);

    var HomeResumeComponent = /*#__PURE__*/function () {
      function HomeResumeComponent() {
        _classCallCheck(this, HomeResumeComponent);

        this.experiences = _assets_data_experiences_json__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(HomeResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeResumeComponent;
    }();

    HomeResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-resume.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-resume/home-resume.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-resume.component.css */
      "./src/app/home-resume/home-resume.component.css"))["default"]]
    })], HomeResumeComponent);
    /***/
  },

  /***/
  "./src/app/home-skills/home-skills.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/home-skills/home-skills.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSkillsHomeSkillsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ICONS */\n\n.icon-item {\n  color: white;\n}\n\n.icon-item .fa-circle {\n  color: rgb(33, 37, 41);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1za2lsbHMvaG9tZS1za2lsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVOztBQUVWO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1za2lsbHMvaG9tZS1za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIElDT05TICovXG5cbi5pY29uLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pY29uLWl0ZW0gLmZhLWNpcmNsZSB7XG4gIGNvbG9yOiByZ2IoMzMsIDM3LCA0MSk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-skills/home-skills.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/home-skills/home-skills.component.ts ***!
    \******************************************************/

  /*! exports provided: HomeSkillsComponent */

  /***/
  function srcAppHomeSkillsHomeSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeSkillsComponent", function () {
      return HomeSkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/data/skills.json */
    "./src/assets/data/skills.json");

    var _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/data/skills.json */
    "./src/assets/data/skills.json", 1);

    var HomeSkillsComponent = /*#__PURE__*/function () {
      function HomeSkillsComponent() {
        _classCallCheck(this, HomeSkillsComponent);

        this.skills = _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_2__; // TODO: shuffle skills array?
      }

      _createClass(HomeSkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeSkillsComponent;
    }();

    HomeSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-skills/home-skills.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-skills.component.css */
      "./src/app/home-skills/home-skills.component.css"))["default"]]
    })], HomeSkillsComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/intro/intro.component.css":
  /*!*******************************************!*\
    !*** ./src/app/intro/intro.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntroIntroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ICONS */\r\n\r\n.icon-item {\r\n  color: white;\r\n}\r\n\r\n.icon-item .fa-circle {\r\n  color: rgb(33, 37, 41);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVOztBQUVWO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIElDT05TICovXHJcblxyXG4uaWNvbi1pdGVtIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pY29uLWl0ZW0gLmZhLWNpcmNsZSB7XHJcbiAgY29sb3I6IHJnYigzMywgMzcsIDQxKTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/intro/intro.component.ts":
  /*!******************************************!*\
    !*** ./src/app/intro/intro.component.ts ***!
    \******************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroComponent;
    }();

    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.css */
      "./src/app/intro/intro.component.css"))["default"]]
    })], IntroComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/panels/panels.component.css":
  /*!*********************************************!*\
    !*** ./src/app/panels/panels.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPanelsPanelsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9wYW5lbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/panels/panels.component.ts":
  /*!********************************************!*\
    !*** ./src/app/panels/panels.component.ts ***!
    \********************************************/

  /*! exports provided: PanelsComponent */

  /***/
  function srcAppPanelsPanelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelsComponent", function () {
      return PanelsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PanelsComponent = /*#__PURE__*/function () {
      function PanelsComponent() {
        _classCallCheck(this, PanelsComponent);
      }

      _createClass(PanelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PanelsComponent;
    }();

    PanelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-panels',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./panels.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./panels.component.css */
      "./src/app/panels/panels.component.css"))["default"]]
    })], PanelsComponent);
    /***/
  },

  /***/
  "./src/app/project/project.component.css":
  /*!***********************************************!*\
    !*** ./src/app/project/project.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/project/project.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/project/project.component.ts ***!
    \**********************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");

    var ProjectComponent = /*#__PURE__*/function () {
      function ProjectComponent(deviceService) {
        _classCallCheck(this, ProjectComponent);

        this.deviceService = deviceService;
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCircle"];
        this.faJira = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faJira"];
        this.faBootstrap = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBootstrap"];
        this.faAngular = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngular"];
        this.faPython = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPython"];
        this.faNodeJs = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faNodeJs"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
        this.faRaspberryPi = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRaspberryPi"];
        this.expanded = false;
        this.name = "";
        this.description = "";
        this.icon = "";
        this.isMobile = false;
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isMobile = this.deviceService.isMobile();
        }
      }]);

      return ProjectComponent;
    }();

    ProjectComponent.ctorParameters = function () {
      return [{
        type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectComponent.prototype, "icon", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-project",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project.component.css */
      "./src/app/project/project.component.css"))["default"]]
    })], ProjectComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.css":
  /*!*************************************************!*\
    !*** ./src/app/projects/projects.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".gist code {\r\n  border-radius: 10px;\r\n  height: 30em;\r\n}\r\n\r\n.gist .project-icon {\r\n  transform: scale(1.3);\r\n  opacity: 1;\r\n  transition: .2s all ease-in-out;\r\n}\r\n\r\n.gist:hover .project-icon {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n  transition: .2s all ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFJRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUlFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5naXN0IGNvZGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzMGVtO1xyXG59XHJcblxyXG4uZ2lzdCAucHJvamVjdC1pY29uIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IC4ycyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5naXN0OmhvdmVyIC5wcm9qZWN0LWljb24ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IC4ycyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../github.service */
    "./src/app/github.service.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(githubService, deviceService) {
        _classCallCheck(this, ProjectsComponent);

        this.githubService = githubService;
        this.deviceService = deviceService;
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCircle"];
        this.faJira = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faJira"];
        this.faBootstrap = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBootstrap"];
        this.faAngular = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngular"];
        this.faPython = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPython"];
        this.faNodeJs = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faNodeJs"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"];
        this.faRaspberryPi = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRaspberryPi"];
        this.gists = new Array(); // repos;

        this.isMobile = false;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.isMobile = this.deviceService.isMobile();
          this.githubService.getGists().subscribe(function (gists) {
            gists.forEach(function (gist) {
              var _loop = function _loop() {
                var key = _Object$keys[_i];
                var rawUrl = gist.files[key].raw_url;
                var newGistObj = gist;

                _this.githubService.getGistCode(rawUrl).subscribe(function (value) {
                  newGistObj.content = value;

                  _this.gists.push(newGistObj);
                });
              };

              // Loop through the files to get the rawUrl and the code
              for (var _i = 0, _Object$keys = Object.keys(gist.files); _i < _Object$keys.length; _i++) {
                _loop();
              }
            });
          }); // this.repos = this.githubService.getRepos();
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]
      }, {
        type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-projects",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.css */
      "./src/app/projects/projects.component.css"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/showcases/showcases.component.css":
  /*!***************************************************!*\
    !*** ./src/app/showcases/showcases.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowcasesShowcasesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* SHOWCASE */\r\n\r\n.showcase .showcase-img {\r\n  background-size: cover;\r\n  min-height: 30rem;\r\n  box-shadow: 4px 4px 3px rgba(48, 48, 48, 0.562);\r\n}\r\n\r\n.showcase .showcase-text {\r\n  padding: 3rem;\r\n}\r\n\r\n.panels .panel {\r\n  background-color: rgb(117, 83, 181);\r\n  border-radius: 15px;\r\n}\r\n\r\n.panels .panel:hover {\r\n  background-color: rgb(106, 74, 165);\r\n}\r\n\r\n.panels .panel a {\r\n  color: rgb(191, 172, 224);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2VzL3Nob3djYXNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7O0FBRWI7RUFJRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZXMvc2hvd2Nhc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTSE9XQ0FTRSAqL1xyXG5cclxuLnNob3djYXNlIC5zaG93Y2FzZS1pbWcge1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggM3B4IHJnYmEoNDgsIDQ4LCA0OCwgMC41NjIpO1xyXG59XHJcblxyXG4uc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbi5wYW5lbHMgLnBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCA4MywgMTgxKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ucGFuZWxzIC5wYW5lbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgNzQsIDE2NSk7XHJcbn1cclxuXHJcbi5wYW5lbHMgLnBhbmVsIGEge1xyXG4gIGNvbG9yOiByZ2IoMTkxLCAxNzIsIDIyNCk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/showcases/showcases.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/showcases/showcases.component.ts ***!
    \**************************************************/

  /*! exports provided: ShowcasesComponent */

  /***/
  function srcAppShowcasesShowcasesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcasesComponent", function () {
      return ShowcasesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShowcasesComponent = /*#__PURE__*/function () {
      function ShowcasesComponent() {
        _classCallCheck(this, ShowcasesComponent);
      }

      _createClass(ShowcasesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShowcasesComponent;
    }();

    ShowcasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-showcases',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./showcases.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcases/showcases.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./showcases.component.css */
      "./src/app/showcases/showcases.component.css"))["default"]]
    })], ShowcasesComponent);
    /***/
  },

  /***/
  "./src/app/splash/splash.component.css":
  /*!*********************************************!*\
    !*** ./src/app/splash/splash.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSplashSplashComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/* Splash */\r\n\r\n.splash {\r\n  height: 100vh;\r\n  min-height: 500px;\r\n  background: linear-gradient(to bottom,\r\n      rgba(22, 22, 22, 0.3) 0,\r\n      rgba(22, 22, 22, 0.7) 85%,\r\n      #161616 100%),\r\n    url('trianglify.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  image-rendering: -webkit-optimize-contrast;\r\n\r\n  color: white;\r\n}\r\n\r\n.splash h1 {\r\n  -webkit-animation: 2.5s fadein;\r\n          animation: 2.5s fadein;\r\n}\r\n\r\n@-webkit-keyframes splash-slide {\r\n  from {\r\n    transform: translateX(-400px);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n@keyframes splash-slide {\r\n  from {\r\n    transform: translateX(-400px);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n.splash img {\r\n  border-radius: 50%;\r\n  border: 5px solid white;\r\n  height: auto;\r\n  width: 50%;\r\n  box-shadow: 3px 7px 5px rgba(48, 48, 48, 0.562);\r\n  -webkit-animation: 2s splash-slide;\r\n          animation: 2s splash-slide;\r\n}\r\n\r\n.splash h1.display-3 {\r\n  font-size: 3.5em;\r\n}\r\n\r\n/* sm */\r\n\r\n@media (min-width: 576px) {\r\n  .splash img {\r\n    width: 50%;\r\n  }\r\n\r\n  .splash h1.display-3 {\r\n    font-size: 3.5em;\r\n  }\r\n}\r\n\r\n/* md */\r\n\r\n@media (min-width: 768px) {\r\n  .splash img {\r\n    width: 60%;\r\n  }\r\n\r\n  .splash h1.display-3 {\r\n    font-size: 4em;\r\n  }\r\n}\r\n\r\n/* lg */\r\n\r\n@media (min-width: 992px) {\r\n  .splash img {\r\n    width: 90%;\r\n  }\r\n\r\n  .splash h1.display-3 {\r\n    font-size: 5em;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoL3NwbGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakI7Ozs7eUJBSTJDO0VBSTNDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUIsMENBQTBDOztFQUUxQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1YsK0NBQStDO0VBQy9DLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsT0FBTzs7QUFDUDtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsT0FBTzs7QUFDUDtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBLE9BQU87O0FBQ1A7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogU3BsYXNoICovXHJcblxyXG4uc3BsYXNoIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sXHJcbiAgICAgIHJnYmEoMjIsIDIyLCAyMiwgMC4zKSAwLFxyXG4gICAgICByZ2JhKDIyLCAyMiwgMjIsIDAuNykgODUlLFxyXG4gICAgICAjMTYxNjE2IDEwMCUpLFxyXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsaWZ5LnBuZ1wiKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuICBpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwbGFzaCBoMSB7XHJcbiAgYW5pbWF0aW9uOiAyLjVzIGZhZGVpbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGxhc2gtc2xpZGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zcGxhc2ggaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogM3B4IDdweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjU2Mik7XHJcbiAgYW5pbWF0aW9uOiAycyBzcGxhc2gtc2xpZGU7XHJcbn1cclxuXHJcbi5zcGxhc2ggaDEuZGlzcGxheS0zIHtcclxuICBmb250LXNpemU6IDMuNWVtO1xyXG59XHJcblxyXG4vKiBzbSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuc3BsYXNoIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnNwbGFzaCBoMS5kaXNwbGF5LTMge1xyXG4gICAgZm9udC1zaXplOiAzLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIG1kICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zcGxhc2ggaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAuc3BsYXNoIGgxLmRpc3BsYXktMyB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGxnICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5zcGxhc2ggaW1nIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuc3BsYXNoIGgxLmRpc3BsYXktMyB7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/splash/splash.component.ts":
  /*!********************************************!*\
    !*** ./src/app/splash/splash.component.ts ***!
    \********************************************/

  /*! exports provided: SplashComponent */

  /***/
  function srcAppSplashSplashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashComponent", function () {
      return SplashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SplashComponent = /*#__PURE__*/function () {
      function SplashComponent() {
        _classCallCheck(this, SplashComponent);
      }

      _createClass(SplashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var pattern = Trianglify({
            width: window.screen.width,
            height: window.screen.height
          });
          var splash = document.getElementById("mainSplash");
          var gradientString = "linear-gradient(to bottom,rgba(22, 22, 22, 0.3) 0,rgba(22, 22, 22, 0.7) 85%,#161616 100%), ";
          splash.style.backgroundImage = gradientString + "url(" + pattern.png() + ")";
        }
      }]);

      return SplashComponent;
    }();

    SplashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-splash',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./splash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./splash.component.css */
      "./src/app/splash/splash.component.css"))["default"]]
    })], SplashComponent);
    /***/
  },

  /***/
  "./src/assets/data/experiences.json":
  /*!******************************************!*\
    !*** ./src/assets/data/experiences.json ***!
    \******************************************/

  /*! exports provided: 0, 1, 2, 3, 4, default */

  /***/
  function srcAssetsDataExperiencesJson(module) {
    module.exports = JSON.parse("[{\"name\":\"University of Michigan\",\"location\":\"Ann Arbor, MI\",\"info\":\"Bachelor of Science, Computer Science\",\"description\":\"Current GPA: 3.54\\n\\nRelevant Courses: Data Structures and Algorithms, Foundations of Computer Science, Intro to Computer Organization, Intro to Operating Systems (F ‘19), Web Systems (F’ 19)\\n\\nRelevant Projects: Web Instagram Clone(React, Flask, Python) | Multithreading Library(C++, Linux)\",\"date\":\"MAY 2021\"},{\"name\":\"Washtenaw Technical Middle College\",\"location\":\"Ann Arbor, MI\",\"info\":\"Associate in Applied Science, Occupational Studies (Networking)\",\"date\":\"MAY 2021\"},{\"name\":\"Capital One Bank\",\"location\":\"McLean, VA\",\"info\":\"Software Engineering Intern\",\"date\":\"JUNE-JULY 2020\"},{\"name\":\"RightBrain Networks\",\"location\":\"Ann Arbor, MI\",\"info\":\"Cloud Development Intern\",\"description\":\"Utilized Docker to provision a client’s image in order to build an auto scaling EC2 cluster in AWS ECS for their ticketing system.\\n\\nWrote Python application which integrated with the Jira API to bulk copy and sync issues across projects and boards.\\n\\nDesigned Jenkins pipeline to build and deploy the managed services boilerplate to S3.\\n\\nRe - coded and styled the company website from scratch using HTML, CSS, and jQuery to provide customers with a better experience.\\n\\nWorked with software and configuration management services such as AWS EC2, AWS CloudFormation, AWS RDS, AWS Lambda, Docker, Jenkins, and Salt to learn the fundamentals of cloud architecture.\",\"date\":\"MAY-AUG 2019\"},{\"name\":\"Edwards Brothers Malloy\",\"location\":\"Ann Arbor, MI\",\"info\":\"Web Development Intern\",\"description\":\"Succeeded in designing a .NET site template using AngularJS and Bootstrap which could take in formatted JSON to generate internal web sites dynamically.\\n\\nOrganized and drafted overall structure of both backend and frontend to construct a task - based Agile development plan for the development team.\",\"date\":\"MAY 2018\"}]");
    /***/
  },

  /***/
  "./src/assets/data/games.json":
  /*!************************************!*\
    !*** ./src/assets/data/games.json ***!
    \************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, default */

  /***/
  function srcAssetsDataGamesJson(module) {
    module.exports = JSON.parse("[{\"objecttype\":\"thing\",\"objectid\":\"173346\",\"subtype\":\"boardgame\",\"collid\":\"69733239\",\"name\":{\"sortindex\":\"1\",\"text\":\"7 Wonders Duel\"},\"yearpublished\":\"2015\",\"image\":\"https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__original/img/q_TrwF4VnXgW1dFQgtMJexSXOEA=/0x0/filters:format(jpeg)/pic3376065.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__thumb/img/qGf8-LJx4lsNOgpjS6iCs2TyKts=/fit-in/200x150/filters:strip_icc()/pic3376065.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"2\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"91468\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"58449\"},\"average\":{\"value\":\"8.10435\"},\"bayesaverage\":{\"value\":\"7.97726\"},\"stddev\":{\"value\":\"1.17604\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"17\",\"bayesaverage\":\"7.97726\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"18\",\"bayesaverage\":\"7.94748\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-11-20 12:47:23\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"172818\",\"subtype\":\"boardgame\",\"collid\":\"70547469\",\"name\":{\"sortindex\":\"1\",\"text\":\"Above and Below\"},\"yearpublished\":\"2015\",\"image\":\"https://cf.geekdo-images.com/U0wpvRmBe65e4vwGf0Jbpg__original/img/gIlpowYQ7XzumYO0jZyVldxosBA=/0x0/filters:format(jpeg)/pic2398773.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/U0wpvRmBe65e4vwGf0Jbpg__thumb/img/jHLwKKWiJ-lHoaNIj0TrKAGm7QM=/fit-in/200x150/filters:strip_icc()/pic2398773.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"90\",\"maxplaytime\":\"90\",\"playingtime\":\"90\",\"numowned\":\"19410\",\"rating\":{\"value\":\"9\",\"usersrated\":{\"value\":\"12665\"},\"average\":{\"value\":\"7.4323\"},\"bayesaverage\":{\"value\":\"7.18175\"},\"stddev\":{\"value\":\"1.26585\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"246\",\"bayesaverage\":\"7.18175\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"80\",\"bayesaverage\":\"7.1971\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 10:45:07\"},\"numplays\":\"5\"},{\"objecttype\":\"thing\",\"objectid\":\"257499\",\"subtype\":\"boardgame\",\"collid\":\"69798115\",\"name\":{\"sortindex\":\"1\",\"text\":\"Arkham Horror (Third Edition)\"},\"yearpublished\":\"2018\",\"image\":\"https://cf.geekdo-images.com/ex8DrGtCifqEpkSd2d9ReQ__original/img/4VLnBamAYLhSD6BJLnZraehCPCI=/0x0/filters:format(jpeg)/pic4582151.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/ex8DrGtCifqEpkSd2d9ReQ__thumb/img/a9cLg3IglGjWr0xGrRA-yHUh7Zo=/fit-in/200x150/filters:strip_icc()/pic4582151.jpg\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"6\",\"minplaytime\":\"120\",\"maxplaytime\":\"180\",\"playingtime\":\"180\",\"numowned\":\"8890\",\"rating\":{\"value\":\"8\",\"usersrated\":{\"value\":\"4615\"},\"average\":{\"value\":\"7.76901\"},\"bayesaverage\":{\"value\":\"7.06049\"},\"stddev\":{\"value\":\"1.55351\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"332\",\"bayesaverage\":\"7.06049\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"71\",\"bayesaverage\":\"7.24518\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:06:32\"},\"numplays\":\"3\"},{\"objecttype\":\"thing\",\"objectid\":\"205637\",\"subtype\":\"boardgame\",\"collid\":\"72215987\",\"name\":{\"sortindex\":\"1\",\"text\":\"Arkham Horror: The Card Game\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__original/img/guEKCewM_2e5ugltSN3dTSwdZJI=/0x0/filters:format(jpeg)/pic3122349.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__thumb/img/L8ouPl5jv2Ye9MC4R_Os2zSGigE=/fit-in/200x150/filters:strip_icc()/pic3122349.jpg\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"2\",\"minplaytime\":\"60\",\"maxplaytime\":\"120\",\"playingtime\":\"120\",\"numowned\":\"49399\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"27718\"},\"average\":{\"value\":\"8.18062\"},\"bayesaverage\":{\"value\":\"7.92768\"},\"stddev\":{\"value\":\"1.48498\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"21\",\"bayesaverage\":\"7.92768\"},{\"type\":\"family\",\"id\":\"4667\",\"name\":\"cgs\",\"friendlyname\":\"Customizable Rank\",\"value\":\"1\",\"bayesaverage\":\"8.0219\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"10\",\"bayesaverage\":\"7.953\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"1\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-10-18 12:23:39\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"230802\",\"subtype\":\"boardgame\",\"collid\":\"69733189\",\"name\":{\"sortindex\":\"1\",\"text\":\"Azul\"},\"yearpublished\":\"2017\",\"image\":\"https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__original/img/eFRt3o7W6YltnrkqpiSOKr2rKCw=/0x0/filters:format(jpeg)/pic3718275.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__thumb/img/debo694HgBaIBeNGyxu1ELUbQGA=/fit-in/200x150/filters:strip_icc()/pic3718275.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"30\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"76561\",\"rating\":{\"value\":\"8\",\"usersrated\":{\"value\":\"51763\"},\"average\":{\"value\":\"7.83278\"},\"bayesaverage\":{\"value\":\"7.71291\"},\"stddev\":{\"value\":\"1.14393\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"48\",\"bayesaverage\":\"7.71291\"},{\"type\":\"family\",\"id\":\"4666\",\"name\":\"abstracts\",\"friendlyname\":\"Abstract Game Rank\",\"value\":\"1\",\"bayesaverage\":\"7.68196\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"4\",\"bayesaverage\":\"7.72638\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2021-01-04 12:36:04\"},\"numplays\":\"5\"},{\"objecttype\":\"thing\",\"objectid\":\"143741\",\"subtype\":\"boardgame\",\"collid\":\"69733259\",\"name\":{\"sortindex\":\"1\",\"text\":\"BANG! The Dice Game\"},\"yearpublished\":\"2013\",\"image\":\"https://cf.geekdo-images.com/BLTFau1Ue-gjX6geQdYrjQ__original/img/3CcRDvDttHpWLP6wc_jZHufTfl4=/0x0/filters:format(jpeg)/pic2909713.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/BLTFau1Ue-gjX6geQdYrjQ__thumb/img/IijBpyOQC760F6XIw34WT0ePqe4=/fit-in/200x150/filters:strip_icc()/pic2909713.jpg\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"8\",\"minplaytime\":\"15\",\"maxplaytime\":\"15\",\"playingtime\":\"15\",\"numowned\":\"30617\",\"rating\":{\"value\":\"7.8\",\"usersrated\":{\"value\":\"19568\"},\"average\":{\"value\":\"6.9569\"},\"bayesaverage\":{\"value\":\"6.81534\"},\"stddev\":{\"value\":\"1.30028\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"557\",\"bayesaverage\":\"6.81534\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"49\",\"bayesaverage\":\"6.80093\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:03:26\"},\"numplays\":\"8\"},{\"objecttype\":\"thing\",\"objectid\":\"211534\",\"subtype\":\"boardgame\",\"collid\":\"69534945\",\"name\":{\"sortindex\":\"1\",\"text\":\"Bears vs Babies\"},\"yearpublished\":\"2017\",\"image\":\"https://cf.geekdo-images.com/iJpO2VOezeMXuclGqR_mXg__original/img/FRlzulXsIdRnX_pX2af0Chy9-Wk=/0x0/filters:format(png)/pic3231155.png\",\"thumbnail\":\"https://cf.geekdo-images.com/iJpO2VOezeMXuclGqR_mXg__thumb/img/GrVBkH_kUoL5lszRkFTOZFMCEVg=/fit-in/200x150/filters:strip_icc()/pic3231155.png\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"15\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"8939\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"3237\"},\"average\":{\"value\":\"5.53018\"},\"bayesaverage\":{\"value\":\"5.43486\"},\"stddev\":{\"value\":\"1.72881\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"19640\",\"bayesaverage\":\"5.43486\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"566\",\"bayesaverage\":\"5.23017\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-03-09 09:10:30\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"10547\",\"subtype\":\"boardgame\",\"collid\":\"69733241\",\"name\":{\"sortindex\":\"1\",\"text\":\"Betrayal at House on the Hill\"},\"yearpublished\":\"2004\",\"image\":\"https://cf.geekdo-images.com/lqmt2Oti_qJS65XqHcB8AA__original/img/7R6yYk8A2eUMmSDaxGjae5SceGI=/0x0/filters:format(png)/pic5146864.png\",\"thumbnail\":\"https://cf.geekdo-images.com/lqmt2Oti_qJS65XqHcB8AA__thumb/img/EDOmDbRhLy4za2PHkJ5IbhNxZmk=/fit-in/200x150/filters:strip_icc()/pic5146864.png\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"6\",\"minplaytime\":\"60\",\"maxplaytime\":\"60\",\"playingtime\":\"60\",\"numowned\":\"57996\",\"rating\":{\"value\":\"7\",\"usersrated\":{\"value\":\"36534\"},\"average\":{\"value\":\"7.0611\"},\"bayesaverage\":{\"value\":\"6.85999\"},\"stddev\":{\"value\":\"1.57217\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"511\",\"bayesaverage\":\"6.85999\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"200\",\"bayesaverage\":\"6.75793\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 10:52:21\"},\"numplays\":\"3\"},{\"objecttype\":\"thing\",\"objectid\":\"131835\",\"subtype\":\"boardgame\",\"collid\":\"69534926\",\"name\":{\"sortindex\":\"1\",\"text\":\"Boss Monster: The Dungeon Building Card Game\"},\"yearpublished\":\"2013\",\"image\":\"https://cf.geekdo-images.com/VBwaHyx-NWL3VLcCWKRA0w__original/img/izAmJ81QELl5DoK3y2bzJw55lhA=/0x0/filters:format(jpeg)/pic1732644.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/VBwaHyx-NWL3VLcCWKRA0w__thumb/img/wisLXxKXbo5-Ci-ZjEj8ryyoN2g=/fit-in/200x150/filters:strip_icc()/pic1732644.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"27299\",\"rating\":{\"value\":\"6\",\"usersrated\":{\"value\":\"13666\"},\"average\":{\"value\":\"6.28556\"},\"bayesaverage\":{\"value\":\"6.11252\"},\"stddev\":{\"value\":\"1.45452\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"1965\",\"bayesaverage\":\"6.11252\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"734\",\"bayesaverage\":\"6.06643\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2021-01-04 12:36:34\"},\"numplays\":\"1\"},{\"objecttype\":\"thing\",\"objectid\":\"822\",\"subtype\":\"boardgame\",\"collid\":\"69525471\",\"name\":{\"sortindex\":\"1\",\"text\":\"Carcassonne\"},\"yearpublished\":\"2000\",\"image\":\"https://cf.geekdo-images.com/Z3upN53-fsVPUDimN9SpOA__original/img/9LEvU4EbbBrJB36YgWQXeXQYwjo=/0x0/filters:format(jpeg)/pic2337577.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/Z3upN53-fsVPUDimN9SpOA__thumb/img/_C5pWATlaq3uS8u7IlFb0WMi_ak=/fit-in/200x150/filters:strip_icc()/pic2337577.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"30\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"146996\",\"rating\":{\"value\":\"8\",\"usersrated\":{\"value\":\"100349\"},\"average\":{\"value\":\"7.41894\"},\"bayesaverage\":{\"value\":\"7.30981\"},\"stddev\":{\"value\":\"1.3036\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"179\",\"bayesaverage\":\"7.30981\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"34\",\"bayesaverage\":\"7.30224\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 10:46:11\"},\"numplays\":\"5\"},{\"objecttype\":\"thing\",\"objectid\":\"13\",\"subtype\":\"boardgame\",\"collid\":\"69733146\",\"name\":{\"sortindex\":\"1\",\"text\":\"Catan\"},\"yearpublished\":\"1995\",\"image\":\"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__original/img/xV7oisd3RQ8R-k18cdWAYthHXsA=/0x0/filters:format(jpeg)/pic2419375.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__thumb/img/8a9HeqFydO7Uun_le9bXWPnidcA=/fit-in/200x150/filters:strip_icc()/pic2419375.jpg\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"4\",\"minplaytime\":\"60\",\"maxplaytime\":\"120\",\"playingtime\":\"120\",\"numowned\":\"151941\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"100104\"},\"average\":{\"value\":\"7.1558\"},\"bayesaverage\":{\"value\":\"6.99147\"},\"stddev\":{\"value\":\"1.47965\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"390\",\"bayesaverage\":\"6.99147\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"365\",\"bayesaverage\":\"6.86784\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"114\",\"bayesaverage\":\"6.93673\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-25 22:50:12\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"201808\",\"subtype\":\"boardgame\",\"collid\":\"73152984\",\"name\":{\"sortindex\":\"1\",\"text\":\"Clank!: A Deck-Building Adventure\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__original/img/cXqOdM3BLyIeRt0GP3M3V--gF1M=/0x0/filters:format(jpeg)/pic4449526.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__thumb/img/O2WnqJew5gNjQqPUH3gqmTBc1pQ=/fit-in/200x150/filters:strip_icc()/pic4449526.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"30\",\"maxplaytime\":\"60\",\"playingtime\":\"60\",\"numowned\":\"35204\",\"rating\":{\"value\":\"8\",\"usersrated\":{\"value\":\"27054\"},\"average\":{\"value\":\"7.81194\"},\"bayesaverage\":{\"value\":\"7.63595\"},\"stddev\":{\"value\":\"1.19885\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"62\",\"bayesaverage\":\"7.63595\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"62\",\"bayesaverage\":\"7.6218\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"8\",\"bayesaverage\":\"7.64904\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:00:42\"},\"numplays\":\"7\"},{\"objecttype\":\"thing\",\"objectid\":\"36932\",\"subtype\":\"boardgame\",\"collid\":\"69972356\",\"name\":{\"sortindex\":\"1\",\"text\":\"Claustrophobia\"},\"yearpublished\":\"2009\",\"image\":\"https://cf.geekdo-images.com/OUNLwXPLWGBgqlooTuADeQ__original/img/H5vpyvjR2NkRGDEXDrDBp3L56Kw=/0x0/filters:format(jpeg)/pic570518.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/OUNLwXPLWGBgqlooTuADeQ__thumb/img/_HYYNg_j_lEywSiF2PJEIS2_5WU=/fit-in/200x150/filters:strip_icc()/pic570518.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"2\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"9146\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"6624\"},\"average\":{\"value\":\"7.52617\"},\"bayesaverage\":{\"value\":\"7.11095\"},\"stddev\":{\"value\":\"1.37144\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"295\",\"bayesaverage\":\"7.11095\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"68\",\"bayesaverage\":\"7.24695\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-03-27 11:54:23\"},\"numplays\":\"1\"},{\"objecttype\":\"thing\",\"objectid\":\"178900\",\"subtype\":\"boardgame\",\"collid\":\"69525501\",\"name\":{\"sortindex\":\"1\",\"text\":\"Codenames\"},\"yearpublished\":\"2015\",\"image\":\"https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__original/img/gcX_EfjsRpB5fI4Ug4XV73G4jGI=/0x0/filters:format(jpeg)/pic2582929.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__thumb/img/yl8iXxSNwguMeg3KkmfFO9SMVVc=/fit-in/200x150/filters:strip_icc()/pic2582929.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"8\",\"minplaytime\":\"15\",\"maxplaytime\":\"15\",\"playingtime\":\"15\",\"numowned\":\"105556\",\"rating\":{\"value\":\"9\",\"usersrated\":{\"value\":\"66362\"},\"average\":{\"value\":\"7.62266\"},\"bayesaverage\":{\"value\":\"7.53495\"},\"stddev\":{\"value\":\"1.29713\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"91\",\"bayesaverage\":\"7.53495\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"2\",\"bayesaverage\":\"7.55958\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:04:04\"},\"numplays\":\"15\"},{\"objecttype\":\"thing\",\"objectid\":\"131357\",\"subtype\":\"boardgame\",\"collid\":\"69525439\",\"name\":{\"sortindex\":\"1\",\"text\":\"Coup\"},\"yearpublished\":\"2012\",\"image\":\"https://cf.geekdo-images.com/MWhSY_GOe2-bmlQ2rntSVg__original/img/ayAAWBK1rAEumARNmROsOtvqW-4=/0x0/filters:format(jpeg)/pic2016054.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/MWhSY_GOe2-bmlQ2rntSVg__thumb/img/vuR_0PCX1w2EkjO_LbchOHZPOwU=/fit-in/200x150/filters:strip_icc()/pic2016054.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"6\",\"minplaytime\":\"15\",\"maxplaytime\":\"15\",\"playingtime\":\"15\",\"numowned\":\"58427\",\"rating\":{\"value\":\"8\",\"usersrated\":{\"value\":\"35465\"},\"average\":{\"value\":\"7.00962\"},\"bayesaverage\":{\"value\":\"6.88174\"},\"stddev\":{\"value\":\"1.41767\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"496\",\"bayesaverage\":\"6.88174\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"47\",\"bayesaverage\":\"6.8077\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:07:21\"},\"numplays\":\"1\"},{\"objecttype\":\"thing\",\"objectid\":\"284083\",\"subtype\":\"boardgame\",\"collid\":\"76436028\",\"name\":{\"sortindex\":\"5\",\"text\":\"The Crew: The Quest for Planet Nine\"},\"yearpublished\":\"2019\",\"image\":\"https://cf.geekdo-images.com/98LnQShydr11OBKS46xY-Q__original/img/Q-ZkgnuBu9OTBr7J3qnqPjqamAE=/0x0/filters:format(jpeg)/pic5687013.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/98LnQShydr11OBKS46xY-Q__thumb/img/et-fnuozyOdBOVL-5kSS3_7I8fw=/fit-in/200x150/filters:strip_icc()/pic5687013.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"20\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"27726\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"12851\"},\"average\":{\"value\":\"8.03178\"},\"bayesaverage\":{\"value\":\"7.72523\"},\"stddev\":{\"value\":\"1.22744\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"44\",\"bayesaverage\":\"7.72523\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"39\",\"bayesaverage\":\"7.77077\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"3\",\"bayesaverage\":\"7.80294\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-11-20 12:45:53\"},\"numplays\":\"7\"},{\"objecttype\":\"thing\",\"objectid\":\"250442\",\"subtype\":\"boardgame\",\"collid\":\"70337367\",\"name\":{\"sortindex\":\"1\",\"text\":\"Crypt\"},\"yearpublished\":\"2018\",\"image\":\"https://cf.geekdo-images.com/Wkr5PpxPAdwM93cbkMSzpA__original/img/HZZoqXBNhjcaym7p5Udvc0Jtzhk=/0x0/filters:format(jpeg)/pic4551004.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/Wkr5PpxPAdwM93cbkMSzpA__thumb/img/J8QNQ7af8TkHBwuhiNpMxEivWXA=/fit-in/200x150/filters:strip_icc()/pic4551004.jpg\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"4\",\"minplaytime\":\"20\",\"maxplaytime\":\"35\",\"playingtime\":\"35\",\"numowned\":\"5222\",\"rating\":{\"value\":\"8\",\"usersrated\":{\"value\":\"2087\"},\"average\":{\"value\":\"6.80735\"},\"bayesaverage\":{\"value\":\"6.18038\"},\"stddev\":{\"value\":\"1.2178\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"1749\",\"bayesaverage\":\"6.18038\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"935\",\"bayesaverage\":\"6.25171\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:23:10\"},\"numplays\":\"3\"},{\"objecttype\":\"thing\",\"objectid\":\"156129\",\"subtype\":\"boardgame\",\"collid\":\"69733263\",\"name\":{\"sortindex\":\"1\",\"text\":\"Deception: Murder in Hong Kong\"},\"yearpublished\":\"2014\",\"image\":\"https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__original/img/ZzyzlO15ggCfkLg9ckeM4PWNePI=/0x0/filters:format(jpeg)/pic3033330.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__thumb/img/8IWDjnSYX-tYAVRgfq-W3y1b_Ww=/fit-in/200x150/filters:strip_icc()/pic3033330.jpg\",\"stats\":{\"minplayers\":\"4\",\"maxplayers\":\"12\",\"minplaytime\":\"20\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"23294\",\"rating\":{\"value\":\"7.5\",\"usersrated\":{\"value\":\"15680\"},\"average\":{\"value\":\"7.50007\"},\"bayesaverage\":{\"value\":\"7.28713\"},\"stddev\":{\"value\":\"1.32273\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"188\",\"bayesaverage\":\"7.28713\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"9\",\"bayesaverage\":\"7.36122\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2021-01-04 12:43:03\"},\"numplays\":\"9\"},{\"objecttype\":\"thing\",\"objectid\":\"292363\",\"subtype\":\"boardgame\",\"collid\":\"74559100\",\"name\":{\"sortindex\":\"1\",\"text\":\"Die of the Dead\"},\"image\":\"https://cf.geekdo-images.com/rFuacVLQJNg_qg2n_Jx8bQ__original/img/DmgWmTPShOyHlVetqT6zVigHRAg=/0x0/filters:format(png)/pic5207371.png\",\"thumbnail\":\"https://cf.geekdo-images.com/rFuacVLQJNg_qg2n_Jx8bQ__thumb/img/dIxrbvsBn6_wg48_xMuQTlHE2Xc=/fit-in/200x150/filters:strip_icc()/pic5207371.png\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"30\",\"maxplaytime\":\"50\",\"playingtime\":\"50\",\"numowned\":\"22\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"11\"},\"average\":{\"value\":\"7.22727\"},\"bayesaverage\":{\"value\":\"0\"},\"stddev\":{\"value\":\"1.43596\"},\"median\":{\"value\":\"0\"},\"ranks\":{\"rank\":{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"Not Ranked\",\"bayesaverage\":\"Not Ranked\"}}}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-09-17 21:39:14\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"256382\",\"subtype\":\"boardgame\",\"collid\":\"69733182\",\"name\":{\"sortindex\":\"1\",\"text\":\"Disney Villainous\"},\"yearpublished\":\"2018\",\"image\":\"https://cf.geekdo-images.com/7Ej5V5Dq92QdvVFvISfl_A__original/img/XHykA7cqZ0F4tYiKXw095TvHRno=/0x0/filters:format(jpeg)/pic4216110.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/7Ej5V5Dq92QdvVFvISfl_A__thumb/img/8tU6KCVSI5dlcibYTT6mq3K9ljk=/fit-in/200x150/filters:strip_icc()/pic4216110.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"6\",\"minplaytime\":\"50\",\"maxplaytime\":\"50\",\"playingtime\":\"50\",\"numowned\":\"20638\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"9326\"},\"average\":{\"value\":\"7.06364\"},\"bayesaverage\":{\"value\":\"6.74957\"},\"stddev\":{\"value\":\"1.44132\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"647\",\"bayesaverage\":\"6.74957\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"173\",\"bayesaverage\":\"6.77226\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-11-04 00:41:01\"},\"numplays\":\"2\"},{\"objecttype\":\"thing\",\"objectid\":\"39856\",\"subtype\":\"boardgame\",\"collid\":\"69525416\",\"name\":{\"sortindex\":\"1\",\"text\":\"Dixit\"},\"yearpublished\":\"2008\",\"image\":\"https://cf.geekdo-images.com/uSgzS-SClISqDkYRCdUq6g__original/img/23LAfDYhJW-r5Tfb5uvHswbuh7c=/0x0/filters:format(jpeg)/pic3483909.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/uSgzS-SClISqDkYRCdUq6g__thumb/img/iLgQV17c4xezI4ZeN_hmue_jh40=/fit-in/200x150/filters:strip_icc()/pic3483909.jpg\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"6\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"68732\",\"rating\":{\"value\":\"7.5\",\"usersrated\":{\"value\":\"49939\"},\"average\":{\"value\":\"7.25859\"},\"bayesaverage\":{\"value\":\"7.15166\"},\"stddev\":{\"value\":\"1.38023\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"274\",\"bayesaverage\":\"7.15166\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"19\",\"bayesaverage\":\"7.14117\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:01:40\"},\"numplays\":\"6\"},{\"objecttype\":\"thing\",\"objectid\":\"255618\",\"subtype\":\"boardgame\",\"collid\":\"69534933\",\"name\":{\"sortindex\":\"1\",\"text\":\"dude\"},\"yearpublished\":\"2018\",\"image\":\"https://cf.geekdo-images.com/mg_ICPKMHsQRs_9WzcVcYg__original/img/Rm-7eVQ74k8DL_Os5ygRqkfyA1A=/0x0/filters:format(png)/pic4214871.png\",\"thumbnail\":\"https://cf.geekdo-images.com/mg_ICPKMHsQRs_9WzcVcYg__thumb/img/8a-kErrNW9WEH77Iy_6sPhhlG54=/fit-in/200x150/filters:strip_icc()/pic4214871.png\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"6\",\"minplaytime\":\"1\",\"maxplaytime\":\"5\",\"playingtime\":\"5\",\"numowned\":\"697\",\"rating\":{\"value\":\"4\",\"usersrated\":{\"value\":\"342\"},\"average\":{\"value\":\"5.71167\"},\"bayesaverage\":{\"value\":\"5.5339\"},\"stddev\":{\"value\":\"1.68075\"},\"median\":{\"value\":\"0\"},\"ranks\":{\"rank\":{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"11672\",\"bayesaverage\":\"5.5339\"}}}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:14:03\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"112686\",\"subtype\":\"boardgame\",\"collid\":\"69525450\",\"name\":{\"sortindex\":\"1\",\"text\":\"Epic Spell Wars of the Battle Wizards: Duel at Mt. Skullzfyre\"},\"yearpublished\":\"2012\",\"image\":\"https://cf.geekdo-images.com/Da8TXGBq3UjKINgTRIZY9A__original/img/P7TSglbGEFsDOzWKIo8iMLOzl3c=/0x0/filters:format(jpeg)/pic1170265.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/Da8TXGBq3UjKINgTRIZY9A__thumb/img/QO14rCvP00VkMt9RjHOFTx3ah3s=/fit-in/200x150/filters:strip_icc()/pic1170265.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"6\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"10180\",\"rating\":{\"value\":\"7\",\"usersrated\":{\"value\":\"5485\"},\"average\":{\"value\":\"6.52593\"},\"bayesaverage\":{\"value\":\"6.21311\"},\"stddev\":{\"value\":\"1.58814\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"1664\",\"bayesaverage\":\"6.21311\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"189\",\"bayesaverage\":\"6.124\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:07:01\"},\"numplays\":\"2\"},{\"objecttype\":\"thing\",\"objectid\":\"199792\",\"subtype\":\"boardgame\",\"collid\":\"70018262\",\"name\":{\"sortindex\":\"1\",\"text\":\"Everdell\"},\"yearpublished\":\"2018\",\"image\":\"https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__original/img/HQ1ti16wT9lqja5_h3gUfHUIcVI=/0x0/filters:format(png)/pic3918905.png\",\"thumbnail\":\"https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__thumb/img/Cf_mYxR_VvdjTEPXseSurni2JNI=/fit-in/200x150/filters:strip_icc()/pic3918905.png\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"4\",\"minplaytime\":\"40\",\"maxplaytime\":\"80\",\"playingtime\":\"80\",\"numowned\":\"27580\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"18256\"},\"average\":{\"value\":\"8.07513\"},\"bayesaverage\":{\"value\":\"7.79562\"},\"stddev\":{\"value\":\"1.28425\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"36\",\"bayesaverage\":\"7.79562\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"33\",\"bayesaverage\":\"7.78942\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"2\",\"bayesaverage\":\"7.82136\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"1\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-09-03 12:51:39\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"203420\",\"subtype\":\"boardgame\",\"collid\":\"76436046\",\"name\":{\"sortindex\":\"1\",\"text\":\"Exit: The Game – The Abandoned Cabin\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/r7cZVZMpP28w3-JQ-EYY7g__original/img/t--VcMKvWX2__eZYvZ7d9V13nvw=/0x0/filters:format(jpeg)/pic3332426.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/r7cZVZMpP28w3-JQ-EYY7g__thumb/img/_XH-DqIVWOmaNX9P3CxNt9OpOQ4=/fit-in/200x150/filters:strip_icc()/pic3332426.jpg\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"6\",\"minplaytime\":\"60\",\"maxplaytime\":\"120\",\"playingtime\":\"120\",\"numowned\":\"12556\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"8586\"},\"average\":{\"value\":\"7.54359\"},\"bayesaverage\":{\"value\":\"7.22308\"},\"stddev\":{\"value\":\"1.29701\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"219\",\"bayesaverage\":\"7.22308\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"50\",\"bayesaverage\":\"7.34097\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"33\",\"bayesaverage\":\"7.30982\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-11-20 12:46:28\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"172225\",\"subtype\":\"boardgame\",\"collid\":\"68996919\",\"name\":{\"sortindex\":\"1\",\"text\":\"Exploding Kittens\"},\"yearpublished\":\"2015\",\"image\":\"https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__original/img/0ciN1VZYifUd0qIDO0e8cGXmiss=/0x0/filters:format(png)/pic2691976.png\",\"thumbnail\":\"https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__thumb/img/3tH4pIc1Udzkd0tXc6MgVQ59BC0=/fit-in/200x150/filters:strip_icc()/pic2691976.png\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"15\",\"maxplaytime\":\"15\",\"playingtime\":\"15\",\"numowned\":\"42264\",\"rating\":{\"value\":\"6\",\"usersrated\":{\"value\":\"20903\"},\"average\":{\"value\":\"6.02756\"},\"bayesaverage\":{\"value\":\"5.83743\"},\"stddev\":{\"value\":\"1.79919\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"3337\",\"bayesaverage\":\"5.83743\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"450\",\"bayesaverage\":\"5.57001\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:14:18\"},\"numplays\":\"7\"},{\"objecttype\":\"thing\",\"objectid\":\"172242\",\"subtype\":\"boardgame\",\"collid\":\"69525453\",\"name\":{\"sortindex\":\"1\",\"text\":\"Exploding Kittens: NSFW Deck\"},\"yearpublished\":\"2015\",\"image\":\"https://cf.geekdo-images.com/q1fHQMYtU-aajQKTYDlx7w__original/img/S3qznhrU6QolTOwZoEDiejv8Zu8=/0x0/filters:format(jpeg)/pic2815278.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/q1fHQMYtU-aajQKTYDlx7w__thumb/img/Az8jEnRuHEbXSn2TWVO4i2rE6ZQ=/fit-in/200x150/filters:strip_icc()/pic2815278.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"10\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"20460\",\"rating\":{\"value\":\"6\",\"usersrated\":{\"value\":\"7556\"},\"average\":{\"value\":\"6.22383\"},\"bayesaverage\":{\"value\":\"5.95707\"},\"stddev\":{\"value\":\"1.77943\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"2638\",\"bayesaverage\":\"5.95707\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"333\",\"bayesaverage\":\"5.80167\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:14:49\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"136063\",\"subtype\":\"boardgame\",\"collid\":\"71879510\",\"name\":{\"sortindex\":\"1\",\"text\":\"Forbidden Desert\"},\"yearpublished\":\"2013\",\"image\":\"https://cf.geekdo-images.com/OU26qQZoHJodxSFKiR5IzA__original/img/8smpJMuHROyrbu8FP-EOLXjEi0w=/0x0/filters:format(jpeg)/pic1528722.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/OU26qQZoHJodxSFKiR5IzA__thumb/img/eDUA8LpBqRjlzJWJYIsIenpF_rA=/fit-in/200x150/filters:strip_icc()/pic1528722.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"43196\",\"rating\":{\"value\":\"6.8\",\"usersrated\":{\"value\":\"25283\"},\"average\":{\"value\":\"7.14599\"},\"bayesaverage\":{\"value\":\"7.01253\"},\"stddev\":{\"value\":\"1.16575\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"372\",\"bayesaverage\":\"7.01253\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"84\",\"bayesaverage\":\"7.02666\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2021-01-04 12:38:50\"},\"numplays\":\"5\"},{\"objecttype\":\"thing\",\"objectid\":\"221965\",\"subtype\":\"boardgame\",\"collid\":\"71015307\",\"name\":{\"sortindex\":\"5\",\"text\":\"The Fox in the Forest\"},\"yearpublished\":\"2017\",\"image\":\"https://cf.geekdo-images.com/spcy6nvsfq-hxYgwEpmidQ__original/img/rXKH8tfISrTxPqUKCw1FXIDSBc0=/0x0/filters:format(jpeg)/pic3496085.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/spcy6nvsfq-hxYgwEpmidQ__thumb/img/nR2TKxtWOVJR1OHD6hAF05IHuOI=/fit-in/200x150/filters:strip_icc()/pic3496085.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"2\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"16983\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"8493\"},\"average\":{\"value\":\"7.25418\"},\"bayesaverage\":{\"value\":\"6.96802\"},\"stddev\":{\"value\":\"1.18211\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"409\",\"bayesaverage\":\"6.96802\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"80\",\"bayesaverage\":\"7.04308\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-05-07 14:16:27\"},\"numplays\":\"1\"},{\"objecttype\":\"thing\",\"objectid\":\"174430\",\"subtype\":\"boardgame\",\"collid\":\"70162204\",\"name\":{\"sortindex\":\"1\",\"text\":\"Gloomhaven\"},\"yearpublished\":\"2017\",\"image\":\"https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__original/img/7d-lj5Gd1e8PFnD97LYFah2c45M=/0x0/filters:format(jpeg)/pic2437871.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__thumb/img/veqFeP4d_3zNhFc3GNBkV95rBEQ=/fit-in/200x150/filters:strip_icc()/pic2437871.jpg\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"4\",\"minplaytime\":\"60\",\"maxplaytime\":\"120\",\"playingtime\":\"120\",\"numowned\":\"66360\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"40766\"},\"average\":{\"value\":\"8.79923\"},\"bayesaverage\":{\"value\":\"8.55546\"},\"stddev\":{\"value\":\"1.61152\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"1\",\"bayesaverage\":\"8.55546\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"1\",\"bayesaverage\":\"8.54745\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"1\",\"bayesaverage\":\"8.5268\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"1\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-09-30 11:20:39\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"98778\",\"subtype\":\"boardgame\",\"collid\":\"69624213\",\"name\":{\"sortindex\":\"1\",\"text\":\"Hanabi\"},\"yearpublished\":\"2010\",\"image\":\"https://cf.geekdo-images.com/JDVksMwfcqoem1k_xtZrOA__original/img/5vNHZiTEhK4aRDuGXv5KImp9cmQ=/0x0/filters:format(jpeg)/pic2007286.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/JDVksMwfcqoem1k_xtZrOA__thumb/img/amCeCcEKhYGbVtDvpvIMnu3qTg0=/fit-in/200x150/filters:strip_icc()/pic2007286.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"5\",\"minplaytime\":\"25\",\"maxplaytime\":\"25\",\"playingtime\":\"25\",\"numowned\":\"62855\",\"rating\":{\"value\":\"7\",\"usersrated\":{\"value\":\"38404\"},\"average\":{\"value\":\"7.08963\"},\"bayesaverage\":{\"value\":\"6.99463\"},\"stddev\":{\"value\":\"1.4017\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"384\",\"bayesaverage\":\"6.99463\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"97\",\"bayesaverage\":\"6.98709\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:15:01\"},\"numplays\":\"3\"},{\"objecttype\":\"thing\",\"objectid\":\"199042\",\"subtype\":\"boardgame\",\"collid\":\"69740865\",\"name\":{\"sortindex\":\"1\",\"text\":\"Harry Potter: Hogwarts Battle\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/ugYBvYxyWyx8_BqaFKZlGw__original/img/7ifajkbPyvyn8GUavbNOjWZbNYU=/0x0/filters:format(jpeg)/pic3518231.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/ugYBvYxyWyx8_BqaFKZlGw__thumb/img/dMUeyEvlaSp_x0EoQBuCHfwFCtM=/fit-in/200x150/filters:strip_icc()/pic3518231.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"30\",\"maxplaytime\":\"60\",\"playingtime\":\"60\",\"numowned\":\"23213\",\"rating\":{\"value\":\"9\",\"usersrated\":{\"value\":\"11498\"},\"average\":{\"value\":\"7.46906\"},\"bayesaverage\":{\"value\":\"7.12949\"},\"stddev\":{\"value\":\"1.35345\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"285\",\"bayesaverage\":\"7.12949\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"98\",\"bayesaverage\":\"7.11865\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"243\",\"bayesaverage\":\"7.08517\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 10:46:54\"},\"numplays\":\"11\"},{\"objecttype\":\"thing\",\"objectid\":\"54043\",\"subtype\":\"boardgame\",\"collid\":\"69733121\",\"name\":{\"sortindex\":\"1\",\"text\":\"Jaipur\"},\"yearpublished\":\"2009\",\"image\":\"https://cf.geekdo-images.com/_LTujSe_o16nvjDC-J0seA__original/img/zUnAdsgt4dCxvtoRDc_9DHbic0M=/0x0/filters:format(jpeg)/pic5100947.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/_LTujSe_o16nvjDC-J0seA__thumb/img/82vhODfpxIT03BzW4NkisJ5Unzs=/fit-in/200x150/filters:strip_icc()/pic5100947.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"2\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"52985\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"36428\"},\"average\":{\"value\":\"7.50952\"},\"bayesaverage\":{\"value\":\"7.39497\"},\"stddev\":{\"value\":\"1.1015\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"135\",\"bayesaverage\":\"7.39497\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"21\",\"bayesaverage\":\"7.41359\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-11-04 00:38:49\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"2452\",\"subtype\":\"boardgame\",\"collid\":\"69534975\",\"name\":{\"sortindex\":\"1\",\"text\":\"Jenga\"},\"yearpublished\":\"1983\",\"image\":\"https://cf.geekdo-images.com/YH5C06snaoJtDqKjwMROPw__original/img/gB1mfMGbSkXgYxU5FA4QWForCZk=/0x0/filters:format(jpeg)/pic5140451.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/YH5C06snaoJtDqKjwMROPw__thumb/img/cSHIiN_mZQEqKMI1G7qRbTMp4nk=/fit-in/200x150/filters:strip_icc()/pic5140451.jpg\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"8\",\"minplaytime\":\"20\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"20191\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"11526\"},\"average\":{\"value\":\"5.60117\"},\"bayesaverage\":{\"value\":\"5.54091\"},\"stddev\":{\"value\":\"1.45208\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"10796\",\"bayesaverage\":\"5.54091\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"527\",\"bayesaverage\":\"5.41141\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-03-09 09:11:26\"},\"numplays\":\"5\"},{\"objecttype\":\"thing\",\"objectid\":\"204583\",\"subtype\":\"boardgame\",\"collid\":\"73104583\",\"name\":{\"sortindex\":\"1\",\"text\":\"Kingdomino\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/3h9W8BfB_rltQ48EBmHliw__original/img/DDk3fDr0FkDpkYAcny5LeekB2qg=/0x0/filters:format(png)/pic3132685.png\",\"thumbnail\":\"https://cf.geekdo-images.com/3h9W8BfB_rltQ48EBmHliw__thumb/img/RGpbcY90eBcNLXbHLMBwLrr2uzo=/fit-in/200x150/filters:strip_icc()/pic3132685.png\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"15\",\"maxplaytime\":\"15\",\"playingtime\":\"15\",\"numowned\":\"51932\",\"rating\":{\"value\":\"8.5\",\"usersrated\":{\"value\":\"31271\"},\"average\":{\"value\":\"7.35685\"},\"bayesaverage\":{\"value\":\"7.23121\"},\"stddev\":{\"value\":\"1.12777\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"214\",\"bayesaverage\":\"7.23121\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"39\",\"bayesaverage\":\"7.24703\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 10:59:09\"},\"numplays\":\"14\"},{\"objecttype\":\"thing\",\"objectid\":\"50\",\"subtype\":\"boardgame\",\"collid\":\"76436131\",\"name\":{\"sortindex\":\"1\",\"text\":\"Lost Cities\"},\"yearpublished\":\"1999\",\"image\":\"https://cf.geekdo-images.com/AL5D-dXabY-Lk3PqIFk_0g__original/img/PdGBQ7xc0GA9ndKnnInx_sQwvl4=/0x0/filters:format(jpeg)/pic4597095.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/AL5D-dXabY-Lk3PqIFk_0g__thumb/img/Q-76aN92M3OveMp26t7b0i7V-i4=/fit-in/200x150/filters:strip_icc()/pic4597095.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"2\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"51073\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"36873\"},\"average\":{\"value\":\"7.17671\"},\"bayesaverage\":{\"value\":\"7.07945\"},\"stddev\":{\"value\":\"1.26943\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"320\",\"bayesaverage\":\"7.07945\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"69\",\"bayesaverage\":\"7.09443\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-11-20 12:50:35\"},\"numplays\":\"3\"},{\"objecttype\":\"thing\",\"objectid\":\"181304\",\"subtype\":\"boardgame\",\"collid\":\"69525432\",\"name\":{\"sortindex\":\"1\",\"text\":\"Mysterium\"},\"yearpublished\":\"2015\",\"image\":\"https://cf.geekdo-images.com/wfeAiLK5n5hD1omhnlYLLA__original/img/uhvKoYDfAsLg-nMkjQcbSJTDFmU=/0x0/filters:format(jpeg)/pic2601683.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/wfeAiLK5n5hD1omhnlYLLA__thumb/img/NAl-NrSAmWvklSVr3hKrSwiszNA=/fit-in/200x150/filters:strip_icc()/pic2601683.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"7\",\"minplaytime\":\"42\",\"maxplaytime\":\"42\",\"playingtime\":\"42\",\"numowned\":\"47786\",\"rating\":{\"value\":\"7.7\",\"usersrated\":{\"value\":\"31405\"},\"average\":{\"value\":\"7.311\"},\"bayesaverage\":{\"value\":\"7.17448\"},\"stddev\":{\"value\":\"1.37488\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"247\",\"bayesaverage\":\"7.17448\"},{\"type\":\"family\",\"id\":\"5496\",\"name\":\"thematic\",\"friendlyname\":\"Thematic Rank\",\"value\":\"91\",\"bayesaverage\":\"7.15851\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"49\",\"bayesaverage\":\"7.16889\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2021-01-04 12:39:45\"},\"numplays\":\"2\"},{\"objecttype\":\"thing\",\"objectid\":\"147949\",\"subtype\":\"boardgame\",\"collid\":\"69525464\",\"name\":{\"sortindex\":\"1\",\"text\":\"One Night Ultimate Werewolf\"},\"yearpublished\":\"2014\",\"image\":\"https://cf.geekdo-images.com/KLDb0vR3w8mfaHgIGF0gHw__original/img/9YTYFSMwiRA01ZRNG0R5e9Rq01E=/0x0/filters:format(jpeg)/pic1809823.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/KLDb0vR3w8mfaHgIGF0gHw__thumb/img/ZgQsHsvdxXZr4DbMGUBSTArBp3o=/fit-in/200x150/filters:strip_icc()/pic1809823.jpg\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"10\",\"minplaytime\":\"10\",\"maxplaytime\":\"10\",\"playingtime\":\"10\",\"numowned\":\"36207\",\"rating\":{\"value\":\"7.8\",\"usersrated\":{\"value\":\"21167\"},\"average\":{\"value\":\"7.14194\"},\"bayesaverage\":{\"value\":\"6.9741\"},\"stddev\":{\"value\":\"1.6105\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"403\",\"bayesaverage\":\"6.9741\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"35\",\"bayesaverage\":\"6.96614\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:17:14\"},\"numplays\":\"16\"},{\"objecttype\":\"thing\",\"objectid\":\"163166\",\"subtype\":\"boardgame\",\"collid\":\"69525469\",\"name\":{\"sortindex\":\"1\",\"text\":\"One Night Ultimate Werewolf Daybreak\"},\"yearpublished\":\"2015\",\"image\":\"https://cf.geekdo-images.com/-jMVcPlkpLcs-2nA_htb8g__original/img/akA2sjnFZ_b4DVAF4H-G5pK4m5Q=/0x0/filters:format(jpeg)/pic2225958.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/-jMVcPlkpLcs-2nA_htb8g__thumb/img/W-6ZwWzAaqQw5CGziy7caBAZzQg=/fit-in/200x150/filters:strip_icc()/pic2225958.jpg\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"7\",\"minplaytime\":\"10\",\"maxplaytime\":\"10\",\"playingtime\":\"10\",\"numowned\":\"11896\",\"rating\":{\"value\":\"7.8\",\"usersrated\":{\"value\":\"4794\"},\"average\":{\"value\":\"7.37664\"},\"bayesaverage\":{\"value\":\"6.8758\"},\"stddev\":{\"value\":\"1.53206\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"500\",\"bayesaverage\":\"6.8758\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"20\",\"bayesaverage\":\"7.13396\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:17:17\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"30549\",\"subtype\":\"boardgame\",\"collid\":\"69733058\",\"name\":{\"sortindex\":\"1\",\"text\":\"Pandemic\"},\"yearpublished\":\"2008\",\"image\":\"https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__original/img/IsrvRLpUV1TEyZsO5rC-btXaPz0=/0x0/filters:format(jpeg)/pic1534148.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__thumb/img/oqViRj6nVxK3m36NluTxU1PZkrk=/fit-in/200x150/filters:strip_icc()/pic1534148.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"152567\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"100573\"},\"average\":{\"value\":\"7.60798\"},\"bayesaverage\":{\"value\":\"7.50945\"},\"stddev\":{\"value\":\"1.32789\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"99\",\"bayesaverage\":\"7.50945\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"104\",\"bayesaverage\":\"7.42577\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"11\",\"bayesaverage\":\"7.49311\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-25 22:52:17\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"280789\",\"subtype\":\"boardgame\",\"collid\":\"71651847\",\"name\":{\"sortindex\":\"1\",\"text\":\"Pandemic: Rapid Response\"},\"yearpublished\":\"2019\",\"image\":\"https://cf.geekdo-images.com/iJl9vUgXHrldbYAhFG9u9A__original/img/UUd8MX_6eHiaw4yW3QkMFJGjGmA=/0x0/filters:format(jpeg)/pic4766250.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/iJl9vUgXHrldbYAhFG9u9A__thumb/img/CqMxKWVklUTrwdhDENHLLeb4NXI=/fit-in/200x150/filters:strip_icc()/pic4766250.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"20\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"4663\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"1668\"},\"average\":{\"value\":\"6.73568\"},\"bayesaverage\":{\"value\":\"6.12289\"},\"stddev\":{\"value\":\"1.3745\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"1928\",\"bayesaverage\":\"6.12289\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"534\",\"bayesaverage\":\"6.23707\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-06-01 16:29:27\"},\"numplays\":\"3\"},{\"objecttype\":\"thing\",\"objectid\":\"1258\",\"subtype\":\"boardgame\",\"collid\":\"69642757\",\"name\":{\"sortindex\":\"1\",\"text\":\"Phase 10\"},\"yearpublished\":\"1982\",\"image\":\"https://cf.geekdo-images.com/GxkFWsT_JtPZAPTt79_dCw__original/img/TX0LeOlfRbh7JEsa-QzaYfjVIFc=/0x0/filters:format(jpeg)/pic5885677.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/GxkFWsT_JtPZAPTt79_dCw__thumb/img/96UwqF1wAywdHufudDWazVsQzN4=/fit-in/200x150/filters:strip_icc()/pic5885677.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"6\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"16269\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"7560\"},\"average\":{\"value\":\"5.1279\"},\"bayesaverage\":{\"value\":\"5.10205\"},\"stddev\":{\"value\":\"1.89982\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"20072\",\"bayesaverage\":\"5.10205\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"2135\",\"bayesaverage\":\"5.04809\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-03-13 11:39:40\"},\"numplays\":\"1\"},{\"objecttype\":\"thing\",\"objectid\":\"244521\",\"subtype\":\"boardgame\",\"collid\":\"69733207\",\"name\":{\"sortindex\":\"5\",\"text\":\"The Quacks of Quedlinburg\"},\"yearpublished\":\"2018\",\"image\":\"https://cf.geekdo-images.com/tdnjJI31M1S12L36kw8Yyg__original/img/YTBnULOhyHnCShzYMwikuOFbVO0=/0x0/filters:format(jpeg)/pic4474567.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/tdnjJI31M1S12L36kw8Yyg__thumb/img/fyB75tXevMIM9yoV-WOum4bbAYM=/fit-in/200x150/filters:strip_icc()/pic4474567.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"31858\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"20887\"},\"average\":{\"value\":\"7.81273\"},\"bayesaverage\":{\"value\":\"7.61547\"},\"stddev\":{\"value\":\"1.24859\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"71\",\"bayesaverage\":\"7.61547\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"6\",\"bayesaverage\":\"7.66334\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-11 15:41:40\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"41114\",\"subtype\":\"boardgame\",\"collid\":\"69525482\",\"name\":{\"sortindex\":\"5\",\"text\":\"The Resistance\"},\"yearpublished\":\"2009\",\"image\":\"https://cf.geekdo-images.com/cAPTkL2BR3snLO71dkH8rw__original/img/_UahoIUTqh39xRqzCc2jwgdYbSA=/0x0/filters:format(jpeg)/pic2576459.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/cAPTkL2BR3snLO71dkH8rw__thumb/img/5lDn1W82rlLXtVG7nPIYR9Orn-4=/fit-in/200x150/filters:strip_icc()/pic2576459.jpg\",\"stats\":{\"minplayers\":\"5\",\"maxplayers\":\"10\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"54898\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"35661\"},\"average\":{\"value\":\"7.28735\"},\"bayesaverage\":{\"value\":\"7.16034\"},\"stddev\":{\"value\":\"1.46202\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"261\",\"bayesaverage\":\"7.16034\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"23\",\"bayesaverage\":\"7.10515\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-03-08 23:53:48\"},\"numplays\":\"1\"},{\"objecttype\":\"thing\",\"objectid\":\"194655\",\"subtype\":\"boardgame\",\"collid\":\"73058136\",\"name\":{\"sortindex\":\"1\",\"text\":\"Santorini\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/665Ply7Ho1WVf1v1iZlWeg__original/img/4q6RCxd7st-yW2MyrJwVC_d3ajk=/0x0/filters:format(png)/pic3283110.png\",\"thumbnail\":\"https://cf.geekdo-images.com/665Ply7Ho1WVf1v1iZlWeg__thumb/img/BKnSb6kAhpVFHV8cyUXrs3EF_dw=/fit-in/200x150/filters:strip_icc()/pic3283110.png\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"20\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"44490\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"27073\"},\"average\":{\"value\":\"7.49506\"},\"bayesaverage\":{\"value\":\"7.34343\"},\"stddev\":{\"value\":\"1.30873\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"160\",\"bayesaverage\":\"7.34343\"},{\"type\":\"family\",\"id\":\"4666\",\"name\":\"abstracts\",\"friendlyname\":\"Abstract Game Rank\",\"value\":\"8\",\"bayesaverage\":\"7.32454\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"26\",\"bayesaverage\":\"7.35595\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-08-20 01:32:24\"},\"numplays\":\"13\",\"comment\":\"Lauren’s\"},{\"objecttype\":\"thing\",\"objectid\":\"188834\",\"subtype\":\"boardgame\",\"collid\":\"69525480\",\"name\":{\"sortindex\":\"1\",\"text\":\"Secret Hitler\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__original/img/7oKwNUYakx3-vHUBLHWVuFNKfl4=/0x0/filters:format(jpeg)/pic5164305.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__thumb/img/xA2T7PiwN3Z8pwAksicoCOA1tf0=/fit-in/200x150/filters:strip_icc()/pic5164305.jpg\",\"stats\":{\"minplayers\":\"5\",\"maxplayers\":\"10\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"24200\",\"rating\":{\"value\":\"8.3\",\"usersrated\":{\"value\":\"17734\"},\"average\":{\"value\":\"7.56872\"},\"bayesaverage\":{\"value\":\"7.29584\"},\"stddev\":{\"value\":\"1.58068\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"182\",\"bayesaverage\":\"7.29584\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"14\",\"bayesaverage\":\"7.24979\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:05:28\"},\"numplays\":\"4\"},{\"objecttype\":\"thing\",\"objectid\":\"162886\",\"subtype\":\"boardgame\",\"collid\":\"69733068\",\"name\":{\"sortindex\":\"1\",\"text\":\"Spirit Island\"},\"yearpublished\":\"2017\",\"image\":\"https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__original/img/nuQlvKPSBG3jsVzaTgZTpNSjlTw=/0x0/filters:format(png)/pic3615739.png\",\"thumbnail\":\"https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__thumb/img/SKiHQ4zAj8uVdtwxOYKIveY9jCo=/fit-in/200x150/filters:strip_icc()/pic3615739.png\",\"stats\":{\"minplayers\":\"1\",\"maxplayers\":\"4\",\"minplaytime\":\"90\",\"maxplaytime\":\"120\",\"playingtime\":\"120\",\"numowned\":\"36229\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"24330\"},\"average\":{\"value\":\"8.33847\"},\"bayesaverage\":{\"value\":\"8.09085\"},\"stddev\":{\"value\":\"1.45163\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"13\",\"bayesaverage\":\"8.09085\"},{\"type\":\"family\",\"id\":\"5497\",\"name\":\"strategygames\",\"friendlyname\":\"Strategy Game Rank\",\"value\":\"11\",\"bayesaverage\":\"8.08757\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"1\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-09-30 11:20:29\"},\"numplays\":\"1\"},{\"objecttype\":\"thing\",\"objectid\":\"1917\",\"subtype\":\"boardgame\",\"collid\":\"69525498\",\"name\":{\"sortindex\":\"1\",\"text\":\"Stratego\"},\"yearpublished\":\"1946\",\"image\":\"https://cf.geekdo-images.com/O3JZyf9nB_2tGl4jpj8SPw__original/img/34QfBCivHif7R6G3MTj-CUJRUAE=/0x0/filters:format(jpeg)/pic25644.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/O3JZyf9nB_2tGl4jpj8SPw__thumb/img/Yo80CtI2QTxVEXDWvjhkc6iYsMo=/fit-in/200x150/filters:strip_icc()/pic25644.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"2\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"23524\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"13676\"},\"average\":{\"value\":\"6.08965\"},\"bayesaverage\":{\"value\":\"5.96668\"},\"stddev\":{\"value\":\"1.37566\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"2578\",\"bayesaverage\":\"5.96668\"},{\"type\":\"family\",\"id\":\"4666\",\"name\":\"abstracts\",\"friendlyname\":\"Abstract Game Rank\",\"value\":\"339\",\"bayesaverage\":\"5.85478\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"887\",\"bayesaverage\":\"5.94655\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-03-08 23:54:57\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"139443\",\"subtype\":\"boardgame\",\"collid\":\"69525476\",\"name\":{\"sortindex\":\"1\",\"text\":\"Superfight\"},\"yearpublished\":\"2013\",\"image\":\"https://cf.geekdo-images.com/XT_zIUdnEfKO058ShFJ2VQ__original/img/SeSdxQJbIQpCvsgJLV_jHBsWgUI=/0x0/filters:format(png)/pic2429251.png\",\"thumbnail\":\"https://cf.geekdo-images.com/XT_zIUdnEfKO058ShFJ2VQ__thumb/img/XiFr46oNjn20ZkiiPNIkbWHLHBM=/fit-in/200x150/filters:strip_icc()/pic2429251.png\",\"stats\":{\"minplayers\":\"3\",\"maxplayers\":\"10\",\"minplaytime\":\"30\",\"maxplaytime\":\"30\",\"playingtime\":\"30\",\"numowned\":\"5458\",\"rating\":{\"value\":\"5\",\"usersrated\":{\"value\":\"2076\"},\"average\":{\"value\":\"5.94005\"},\"bayesaverage\":{\"value\":\"5.6685\"},\"stddev\":{\"value\":\"1.74811\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"5276\",\"bayesaverage\":\"5.6685\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"430\",\"bayesaverage\":\"5.61878\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:09:23\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"192291\",\"subtype\":\"boardgame\",\"collid\":\"69733281\",\"name\":{\"sortindex\":\"1\",\"text\":\"Sushi Go Party!\"},\"yearpublished\":\"2016\",\"image\":\"https://cf.geekdo-images.com/2f9uTicUSXkdPp2Yks6zFw__original/img/WQcFmlhYBMIp8f6gNNVhnnue1w4=/0x0/filters:format(jpeg)/pic5885689.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/2f9uTicUSXkdPp2Yks6zFw__thumb/img/_mXR9Tlo0f-i80h6pfhDEOBgvpY=/fit-in/200x150/filters:strip_icc()/pic5885689.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"8\",\"minplaytime\":\"20\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"38927\",\"rating\":{\"value\":\"7.5\",\"usersrated\":{\"value\":\"21659\"},\"average\":{\"value\":\"7.4677\"},\"bayesaverage\":{\"value\":\"7.28925\"},\"stddev\":{\"value\":\"1.13915\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"185\",\"bayesaverage\":\"7.28925\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"32\",\"bayesaverage\":\"7.3106\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:02:29\"},\"numplays\":\"19\"},{\"objecttype\":\"thing\",\"objectid\":\"70919\",\"subtype\":\"boardgame\",\"collid\":\"76860408\",\"name\":{\"sortindex\":\"1\",\"text\":\"Takenoko\"},\"yearpublished\":\"2011\",\"image\":\"https://cf.geekdo-images.com/uvz-5V6A2R6dp2oWIXmj_g__original/img/HxMG1z7bIVGCGPI6u6ciVO0Oubk=/0x0/filters:format(jpeg)/pic1912529.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/uvz-5V6A2R6dp2oWIXmj_g__thumb/img/vz9Ec1xB2b4JJQlZFijUsuCvfkQ=/fit-in/200x150/filters:strip_icc()/pic1912529.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"4\",\"minplaytime\":\"45\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"52423\",\"rating\":{\"value\":\"N/A\",\"usersrated\":{\"value\":\"34600\"},\"average\":{\"value\":\"7.27294\"},\"bayesaverage\":{\"value\":\"7.14584\"},\"stddev\":{\"value\":\"1.18149\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"279\",\"bayesaverage\":\"7.14584\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"53\",\"bayesaverage\":\"7.15331\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 22:41:14\"},\"numplays\":\"0\"},{\"objecttype\":\"thing\",\"objectid\":\"16992\",\"subtype\":\"boardgame\",\"collid\":\"69733159\",\"name\":{\"sortindex\":\"1\",\"text\":\"Tsuro\"},\"yearpublished\":\"2004\",\"image\":\"https://cf.geekdo-images.com/2V3d4ryhxkS3RoPtDrvpUw__original/img/TP5U-O2eujPBK9IVmmifdfkWwdQ=/0x0/filters:format(jpeg)/pic875761.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/2V3d4ryhxkS3RoPtDrvpUw__thumb/img/NWgNhoxUIF7Lmj1apRkZQhFL6NU=/fit-in/200x150/filters:strip_icc()/pic875761.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"8\",\"minplaytime\":\"15\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"32551\",\"rating\":{\"value\":\"7.3\",\"usersrated\":{\"value\":\"23105\"},\"average\":{\"value\":\"6.67239\"},\"bayesaverage\":{\"value\":\"6.55535\"},\"stddev\":{\"value\":\"1.32314\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"927\",\"bayesaverage\":\"6.55535\"},{\"type\":\"family\",\"id\":\"4666\",\"name\":\"abstracts\",\"friendlyname\":\"Abstract Game Rank\",\"value\":\"111\",\"bayesaverage\":\"6.35902\"},{\"type\":\"family\",\"id\":\"5499\",\"name\":\"familygames\",\"friendlyname\":\"Family Game Rank\",\"value\":\"285\",\"bayesaverage\":\"6.54909\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2021-01-04 12:40:32\"},\"numplays\":\"6\"},{\"objecttype\":\"thing\",\"objectid\":\"234190\",\"subtype\":\"boardgame\",\"collid\":\"69525504\",\"name\":{\"sortindex\":\"1\",\"text\":\"Unstable Unicorns\"},\"yearpublished\":\"2017\",\"image\":\"https://cf.geekdo-images.com/8_5xvpsrrX5JVzO7eBLSgw__original/img/XkKaT-quh8xGl2uHD5zULSWTpuM=/0x0/filters:format(jpeg)/pic3912914.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/8_5xvpsrrX5JVzO7eBLSgw__thumb/img/fV4UWCHC1ImGFUN7lcJju9K8_zo=/fit-in/200x150/filters:strip_icc()/pic3912914.jpg\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"8\",\"minplaytime\":\"30\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"10520\",\"rating\":{\"value\":\"6.5\",\"usersrated\":{\"value\":\"3956\"},\"average\":{\"value\":\"6.30668\"},\"bayesaverage\":{\"value\":\"5.93176\"},\"stddev\":{\"value\":\"1.7644\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"2765\",\"bayesaverage\":\"5.93176\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"377\",\"bayesaverage\":\"5.70612\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-01 11:08:03\"},\"numplays\":\"5\"},{\"objecttype\":\"thing\",\"objectid\":\"262543\",\"subtype\":\"boardgame\",\"collid\":\"72940707\",\"name\":{\"sortindex\":\"1\",\"text\":\"Wavelength\"},\"yearpublished\":\"2019\",\"image\":\"https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__original/img/bP1gM8RC-o5iz20_WazBaBNDHnU=/0x0/filters:format(png)/pic4552862.png\",\"thumbnail\":\"https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__thumb/img/bxLuHVLF-Y06jWRSKA-tuQ3YYcE=/fit-in/200x150/filters:strip_icc()/pic4552862.png\",\"stats\":{\"minplayers\":\"2\",\"maxplayers\":\"12\",\"minplaytime\":\"30\",\"maxplaytime\":\"45\",\"playingtime\":\"45\",\"numowned\":\"6203\",\"rating\":{\"value\":\"8\",\"usersrated\":{\"value\":\"3279\"},\"average\":{\"value\":\"7.5315\"},\"bayesaverage\":{\"value\":\"6.85328\"},\"stddev\":{\"value\":\"1.31107\"},\"median\":{\"value\":\"0\"},\"ranks\":[{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"520\",\"bayesaverage\":\"6.85328\"},{\"type\":\"family\",\"id\":\"5498\",\"name\":\"partygames\",\"friendlyname\":\"Party Game Rank\",\"value\":\"15\",\"bayesaverage\":\"7.22837\"}]}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:17:50\"},\"numplays\":\"15\"},{\"objecttype\":\"thing\",\"objectid\":\"246759\",\"subtype\":\"boardgame\",\"collid\":\"69525444\",\"name\":{\"sortindex\":\"1\",\"text\":\"You've Got Crabs\"},\"yearpublished\":\"2018\",\"image\":\"https://cf.geekdo-images.com/CoM8e_rTlygT6O2Xgk9Ekw__original/img/yX5UJN34u19WeMw8_4cTtUpYWcA=/0x0/filters:format(jpeg)/pic5886130.jpg\",\"thumbnail\":\"https://cf.geekdo-images.com/CoM8e_rTlygT6O2Xgk9Ekw__thumb/img/Qie1Vg1gurWyTaI_wRVYsQsaUDc=/fit-in/200x150/filters:strip_icc()/pic5886130.jpg\",\"stats\":{\"minplayers\":\"4\",\"maxplayers\":\"10\",\"minplaytime\":\"15\",\"maxplaytime\":\"20\",\"playingtime\":\"20\",\"numowned\":\"1962\",\"rating\":{\"value\":\"7.5\",\"usersrated\":{\"value\":\"515\"},\"average\":{\"value\":\"6.09507\"},\"bayesaverage\":{\"value\":\"5.60404\"},\"stddev\":{\"value\":\"1.69515\"},\"median\":{\"value\":\"0\"},\"ranks\":{\"rank\":{\"type\":\"subtype\",\"id\":\"1\",\"name\":\"boardgame\",\"friendlyname\":\"Board Game Rank\",\"value\":\"6915\",\"bayesaverage\":\"5.60404\"}}}},\"status\":{\"own\":\"1\",\"prevowned\":\"0\",\"fortrade\":\"0\",\"want\":\"0\",\"wanttoplay\":\"0\",\"wanttobuy\":\"0\",\"wishlist\":\"0\",\"preordered\":\"0\",\"lastmodified\":\"2020-12-03 09:17:56\"},\"numplays\":\"1\"}]");
    /***/
  },

  /***/
  "./src/assets/data/skills.json":
  /*!*************************************!*\
    !*** ./src/assets/data/skills.json ***!
    \*************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

  /***/
  function srcAssetsDataSkillsJson(module) {
    module.exports = JSON.parse("[{\"name\":\"C/C++\",\"percentage\":85,\"type\":\"language\"},{\"name\":\"C#\",\"percentage\":78,\"type\":\"language\"},{\"name\":\"Python\",\"percentage\":70,\"type\":\"language\"},{\"name\":\"HTML/CSS\",\"percentage\":50,\"type\":\"language\"},{\"name\":\"Javascript/Typescript\",\"percentage\":70,\"type\":\"language\"},{\"name\":\"Amazon Web Services\",\"percentage\":65,\"type\":\"technology\"},{\"name\":\"Docker\",\"percentage\":35,\"type\":\"technology\"},{\"name\":\"Git\",\"percentage\":75,\"type\":\"technology\"},{\"name\":\"Shell\",\"percentage\":60,\"type\":\"technology\"},{\"name\":\"Angular\",\"percentage\":68,\"type\":\"technology\"},{\"name\":\"React\",\"percentage\":60,\"type\":\"technology\"},{\"name\":\"Unity\",\"percentage\":60,\"type\":\"technology\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/escherz/Documents/GitKraken/elijahscherz.github.io/elijahscherz-main/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map