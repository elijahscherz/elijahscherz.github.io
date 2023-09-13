"use strict";
(self["webpackChunkelijahscherz_main"] = self["webpackChunkelijahscherz_main"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ 55609);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ 31427);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 11563);
/* harmony import */ var _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boardgames/boardgames.component */ 24672);
/* harmony import */ var _boardgames_stats_boardgames_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boardgames-stats/boardgames-stats.component */ 33975);
/* harmony import */ var _boardgames_tools_boardgames_tools_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boardgames-tools/boardgames-tools.component */ 18631);










const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent
    },
    {
        path: 'experience',
        component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent
    },
    {
        path: 'boardgames',
        component: _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_4__.BoardgamesComponent
    },
    {
        path: 'boardgames/stats',
        component: _boardgames_stats_boardgames_stats_component__WEBPACK_IMPORTED_MODULE_5__.BoardgamesStatsComponent
    },
    {
        path: 'boardgames/tools',
        component: _boardgames_tools_boardgames_tools_component__WEBPACK_IMPORTED_MODULE_6__.BoardgamesToolsComponent
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 33088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'elijahscherz-main';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 66313);
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splash/splash.component */ 65217);
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ 51911);
/* harmony import */ var _showcases_showcases_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcases/showcases.component */ 89944);
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panels/panels.component */ 64801);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ 55609);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experience/experience.component */ 31427);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ 11563);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ 10970);
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./github.service */ 74184);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-highlightjs */ 70090);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project/project.component */ 1417);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _home_intro_home_intro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-intro/home-intro.component */ 15383);
/* harmony import */ var _home_resume_home_resume_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-resume/home-resume.component */ 70947);
/* harmony import */ var _home_skills_home_skills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-skills/home-skills.component */ 23366);
/* harmony import */ var _home_projects_home_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-projects/home-projects.component */ 33712);
/* harmony import */ var _home_interests_home_interests_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home-interests/home-interests.component */ 91220);
/* harmony import */ var _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home-contact/home-contact.component */ 17218);
/* harmony import */ var _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./boardgames/boardgames.component */ 24672);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _boardgames_stats_boardgames_stats_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./boardgames-stats/boardgames-stats.component */ 33975);
/* harmony import */ var _boardgames_tools_boardgames_tools_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./boardgames-tools/boardgames-tools.component */ 18631);

















// Code Highlighting

// FontAwesome

// Mobile detection









// Angular Charts



let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
            _splash_splash_component__WEBPACK_IMPORTED_MODULE_4__.SplashComponent,
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__.IntroComponent,
            _showcases_showcases_component__WEBPACK_IMPORTED_MODULE_6__.ShowcasesComponent,
            _panels_panels_component__WEBPACK_IMPORTED_MODULE_7__.PanelsComponent,
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__.ProjectsComponent,
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__.ExperienceComponent,
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__.ContactComponent,
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent,
            _project_project_component__WEBPACK_IMPORTED_MODULE_13__.ProjectComponent,
            _home_intro_home_intro_component__WEBPACK_IMPORTED_MODULE_14__.HomeIntroComponent,
            _home_resume_home_resume_component__WEBPACK_IMPORTED_MODULE_15__.HomeResumeComponent,
            _home_skills_home_skills_component__WEBPACK_IMPORTED_MODULE_16__.HomeSkillsComponent,
            _home_projects_home_projects_component__WEBPACK_IMPORTED_MODULE_17__.HomeProjectsComponent,
            _home_interests_home_interests_component__WEBPACK_IMPORTED_MODULE_18__.HomeInterestsComponent,
            _home_contact_home_contact_component__WEBPACK_IMPORTED_MODULE_19__.HomeContactComponent,
            _boardgames_boardgames_component__WEBPACK_IMPORTED_MODULE_20__.BoardgamesComponent,
            _boardgames_stats_boardgames_stats_component__WEBPACK_IMPORTED_MODULE_21__.BoardgamesStatsComponent,
            _boardgames_tools_boardgames_tools_component__WEBPACK_IMPORTED_MODULE_22__.BoardgamesToolsComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_27__.HighlightModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__.FontAwesomeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_30__.NgxEchartsModule.forRoot({
                echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 72750))
            })
        ],
        providers: [
            _github_service__WEBPACK_IMPORTED_MODULE_12__.GithubService,
            {
                provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_27__.HIGHLIGHT_OPTIONS,
                useValue: {
                    fullLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js */ 7722)),
                }
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 33975:
/*!****************************************************************!*\
  !*** ./src/app/boardgames-stats/boardgames-stats.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardgamesStatsComponent": () => (/* binding */ BoardgamesStatsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boardgames_stats_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardgames-stats.component.html?ngResource */ 58313);
/* harmony import */ var _boardgames_stats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardgames-stats.component.css?ngResource */ 16682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BoardgamesStatsComponent = class BoardgamesStatsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardgamesStatsComponent.ctorParameters = () => [];
BoardgamesStatsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-boardgames-stats',
        template: _boardgames_stats_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_boardgames_stats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BoardgamesStatsComponent);



/***/ }),

/***/ 18631:
/*!****************************************************************!*\
  !*** ./src/app/boardgames-tools/boardgames-tools.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardgamesToolsComponent": () => (/* binding */ BoardgamesToolsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boardgames_tools_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardgames-tools.component.html?ngResource */ 98997);
/* harmony import */ var _boardgames_tools_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardgames-tools.component.css?ngResource */ 11253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BoardgamesToolsComponent = class BoardgamesToolsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardgamesToolsComponent.ctorParameters = () => [];
BoardgamesToolsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-boardgames-tools',
        template: _boardgames_tools_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_boardgames_tools_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BoardgamesToolsComponent);



/***/ }),

/***/ 24672:
/*!****************************************************!*\
  !*** ./src/app/boardgames/boardgames.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardgamesComponent": () => (/* binding */ BoardgamesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _boardgames_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardgames.component.html?ngResource */ 45394);
/* harmony import */ var _boardgames_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardgames.component.css?ngResource */ 38812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _assets_data_BGStatsExport_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/BGStatsExport.json */ 84297);





let BoardgamesComponent = class BoardgamesComponent {
    constructor() {
        this.games = _assets_data_BGStatsExport_json__WEBPACK_IMPORTED_MODULE_2__.games;
        this.stats = _assets_data_BGStatsExport_json__WEBPACK_IMPORTED_MODULE_2__;
        this.isMobile = false;
        this.showGames = true;
        this.showExpansions = false;
        this.sortMethod = "alpha";
        this.gamePlayData = null;
    }
    ngOnInit() {
        // Fairly simple mobile detection method
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
        }
        this.generatePlayData();
        this.refreshListing();
        // Randomize the game page display to start
        this.games.sort(() => Math.random() - 0.5);
        this.generateCharts();
    }
    onClickAlpha() {
        this.sortMethod = "alpha";
        this.games.sort((a, b) => {
            // Sorts alphabetically! (localCompare)
            return a.name.localeCompare(b.name);
        });
    }
    // TODO: outdated
    onClickGeek() {
        this.sortMethod = "geek";
        this.games.sort((a, b) => {
            return a.stats.rating.average.value - b.stats.rating.average.value;
        }).reverse();
    }
    // TODO: outdated
    onClickRating() {
        this.sortMethod = "rating";
        this.games.sort((a, b) => {
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
    onClickPlays() {
        this.sortMethod = "plays";
        this.games.sort((a, b) => {
            // Check and make sure to set plays to 0 if there aren't any plays
            if (!(a.name in this.gamePlayData)) {
                this.gamePlayData[a.name] = 0;
            }
            if (!(b.name in this.gamePlayData)) {
                this.gamePlayData[b.name] = 0;
            }
            return this.gamePlayData[a.name] - this.gamePlayData[b.name];
        }).reverse();
    }
    onClickBoardGames() {
        // Toggle, then refresh the view
        this.showGames = !this.showGames;
        this.refreshListing();
    }
    onClickExpansions() {
        // Toggle, then refresh
        this.showExpansions = !this.showExpansions;
        this.refreshListing();
    }
    generatePlayData() {
        // Check if we have crunched these numbers yet or not
        if (this.gamePlayData === null) {
            this.gamePlayData = {};
            // Get the play data into memory
            // TODO: this seems slow as heck. Might just want to make a script that permanently records this info
            for (let play of this.stats.plays) {
                if (!(this.stats.games[play.gameRefId - 1].name in this.gamePlayData)) {
                    this.gamePlayData[this.stats.games[play.gameRefId - 1].name] = 0;
                }
                this.gamePlayData[this.stats.games[play.gameRefId - 1].name] += 1;
            }
        }
    }
    refreshListing() {
        // First reset the entire listing
        this.games = _assets_data_BGStatsExport_json__WEBPACK_IMPORTED_MODULE_2__.games;
        // Filter based on what the user currently wants to view on the page
        this.games = this.games.filter(game => {
            if (this.showGames && game.name in this.gamePlayData) {
                return true;
            }
            if (this.showExpansions && game.isExpansion === 1 && game.copies.length && game.copies[0].statusOwned === 1) {
                return true;
            }
            return false;
        });
        // Apply the current sorting method
        // TODO: change this to enums
        if (this.sortMethod === "alpha") {
            this.onClickAlpha();
        }
        else if (this.sortMethod === "geek") {
            // this.onClickGeek();
        }
        else if (this.sortMethod === "rating") {
            // this.onClickRating();
        }
        else {
            // Last available category is Plays
            this.onClickPlays();
        }
    }
    generateCharts() {
        // PLAY TIME CHART
        // this.theme = "shine";
        let xAxisLabels = [];
        let timeData = [];
        let playData = [];
        // PREPARE DATA FOR CHART //
        let [currMonth, currDay, currYear] = new Date().toLocaleDateString("en-US").split("/");
        // First recorded plays are in July, we begin there
        let [mString, dString, yString] = new Date(2020, 7, 1).toLocaleDateString("en-US").split("/");
        let m = Number(mString);
        let d = Number(dString);
        let y = Number(yString);
        // Round the current day to either the middle of the month or the end
        if (Number(currDay) > 15) {
            currDay = "30";
        }
        else {
            currDay = "1";
        }
        // Initialize vectors before populating them further
        xAxisLabels.push("7/1/2020");
        timeData.push(0);
        playData.push(0);
        while (m < Number(currMonth) || d < Number(currDay) || y < Number(currYear)) {
            // Update day first
            // If we are using 1 currently, switch to end of the month
            if (d === 1) {
                d = 30;
            }
            else {
                // If we are back at the beginning of the month...
                d = 1;
                // Update the month and potentially the year
                if (m === 12) {
                    m = 1;
                    y += 1;
                }
                else {
                    m += 1;
                }
            }
            // Add entries to vectors
            xAxisLabels.push(String(m) + "/" + String(d) + "/" + String(y));
            timeData.push(0);
            playData.push(0);
        }
        // Aggregate play and time data from recorded plays
        for (let play of this.stats.plays) {
            const date = new Date(play.playDate);
            // const label = date.getMonth() + 1 + "/" + date.getFullYear();
            let [month, day, year] = date.toLocaleDateString("en-US").split("/");
            // Round the date of this play to the needed week
            if (Number(day) > 15) {
                day = "30";
            }
            else {
                day = "1";
            }
            const label = month + "/" + day + "/" + year;
            // Apply updates
            timeData[xAxisLabels.indexOf(label)] += play.durationMin;
            playData[xAxisLabels.indexOf(label)] += 1;
        }
        // Convert times to hours played
        for (let i = 0; i < timeData.length; i++) {
            timeData[i] = Math.ceil(timeData[i] / 60);
        }
        // Adjust legend for mobile rendering
        if (this.isMobile) {
            this.playLegend = {
                data: ['Hours Played', 'Play Count'],
                align: 'left',
                x: 'center',
                y: 'bottom'
            };
        }
        else {
            this.playLegend = {
                data: ['Hours Played', 'Play Count'],
                align: 'left',
                x: '20',
                y: '10'
            };
        }
        this.playOptions = {
            title: {
                text: 'Play Statistics',
                subtext: 'Biweekly Plays and Hours',
                x: 'center'
            },
            legend: this.playLegend,
            tooltip: {},
            xAxis: {
                data: xAxisLabels,
                silent: false,
                splitLine: {
                    show: false,
                },
            },
            yAxis: {},
            series: [
                {
                    name: 'Hours Played',
                    type: 'bar',
                    data: timeData,
                    animationDelay: (idx) => idx * 10,
                },
                {
                    name: 'Play Count',
                    type: 'bar',
                    data: playData,
                    animationDelay: (idx) => idx * 10 + 100,
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5,
        };
        // this.dayOptions = {
        //   title: {
        //     text: 'Day Statistics',
        //     x: 'center'
        //   },
        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b} : {c} ({d}%)'
        //   },
        //   legend: {
        //     x: 'center',
        //     y: 'bottom',
        //     data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        //   },
        //   calculable: true,
        //   series: [
        //     {
        //       name: 'area',
        //       type: 'pie',
        //       radius: [30, 110],
        //       roseType: 'area',
        //       data: [
        //         { value: 10, name: 'rose1' },
        //         { value: 5, name: 'rose2' },
        //         { value: 15, name: 'rose3' },
        //         { value: 25, name: 'rose4' },
        //         { value: 20, name: 'rose5' },
        //         { value: 35, name: 'rose6' },
        //         { value: 30, name: 'rose7' },
        //         { value: 40, name: 'rose8' }
        //       ]
        //     }
        //   ]
        // };
        // this.playerOptions = {
        //   title: {
        //     text: 'Player Statistics',
        //     x: 'center'
        //   },
        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b} : {c} ({d}%)'
        //   },
        //   legend: {
        //     x: 'center',
        //     y: 'bottom',
        //     data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        //   },
        //   calculable: true,
        //   series: [
        //     {
        //       name: 'area',
        //       type: 'pie',
        //       radius: [0, 120],
        //       roseType: 'area',
        //       data: [
        //         { value: 10, name: 'rose1' },
        //         { value: 5, name: 'rose2' },
        //         { value: 15, name: 'rose3' },
        //         { value: 25, name: 'rose4' },
        //         { value: 20, name: 'rose5' },
        //         { value: 35, name: 'rose6' },
        //         { value: 30, name: 'rose7' },
        //         { value: 40, name: 'rose8' }
        //       ]
        //     }
        //   ]
        // };
    }
};
BoardgamesComponent.ctorParameters = () => [];
BoardgamesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-boardgames',
        template: _boardgames_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_boardgames_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BoardgamesComponent);



/***/ }),

/***/ 11563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.html?ngResource */ 52105);
/* harmony import */ var _contact_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.css?ngResource */ 86469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 72186);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);








let ContactComponent = class ContactComponent {
    constructor() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGithub;
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedin;
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEnvelope;
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircle;
    }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [];
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact',
        template: _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactComponent);



/***/ }),

/***/ 31427:
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience.component.html?ngResource */ 64143);
/* harmony import */ var _experience_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.component.css?ngResource */ 61285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperienceComponent.ctorParameters = () => [];
ExperienceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-experience',
        template: _experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_experience_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExperienceComponent);



/***/ }),

/***/ 10970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 82811);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css?ngResource */ 9036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 74184:
/*!***********************************!*\
  !*** ./src/app/github.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubService": () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);



let GithubService = class GithubService {
    constructor(http) {
        this.http = http;
        // Define GitHub API url
        this.apiUrl = 'https://api.github.com/users/elijahscherz';
    }
    getGists() {
        return this.http.get(`${this.apiUrl}/gists`);
    }
    getGistCode(rawUrl) {
        return this.http.get(rawUrl, { responseType: "text" });
    }
    getRepos() {
        return this.http.get(`${this.apiUrl}/repos`);
    }
};
GithubService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
GithubService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GithubService);



/***/ }),

/***/ 17218:
/*!********************************************************!*\
  !*** ./src/app/home-contact/home-contact.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeContactComponent": () => (/* binding */ HomeContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-contact.component.html?ngResource */ 14932);
/* harmony import */ var _home_contact_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-contact.component.css?ngResource */ 15543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let HomeContactComponent = class HomeContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeContactComponent.ctorParameters = () => [];
HomeContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-contact',
        template: _home_contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_contact_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeContactComponent);



/***/ }),

/***/ 91220:
/*!************************************************************!*\
  !*** ./src/app/home-interests/home-interests.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeInterestsComponent": () => (/* binding */ HomeInterestsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_interests_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-interests.component.html?ngResource */ 15368);
/* harmony import */ var _home_interests_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-interests.component.css?ngResource */ 43064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let HomeInterestsComponent = class HomeInterestsComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeInterestsComponent.ctorParameters = () => [];
HomeInterestsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-interests',
        template: _home_interests_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_interests_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeInterestsComponent);



/***/ }),

/***/ 15383:
/*!****************************************************!*\
  !*** ./src/app/home-intro/home-intro.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeIntroComponent": () => (/* binding */ HomeIntroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_intro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-intro.component.html?ngResource */ 14089);
/* harmony import */ var _home_intro_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-intro.component.css?ngResource */ 87848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let HomeIntroComponent = class HomeIntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeIntroComponent.ctorParameters = () => [];
HomeIntroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-intro',
        template: _home_intro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_intro_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeIntroComponent);



/***/ }),

/***/ 33712:
/*!**********************************************************!*\
  !*** ./src/app/home-projects/home-projects.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeProjectsComponent": () => (/* binding */ HomeProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-projects.component.html?ngResource */ 80127);
/* harmony import */ var _home_projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-projects.component.css?ngResource */ 45553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let HomeProjectsComponent = class HomeProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeProjectsComponent.ctorParameters = () => [];
HomeProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-projects',
        template: _home_projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeProjectsComponent);



/***/ }),

/***/ 70947:
/*!******************************************************!*\
  !*** ./src/app/home-resume/home-resume.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeResumeComponent": () => (/* binding */ HomeResumeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_resume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-resume.component.html?ngResource */ 3982);
/* harmony import */ var _home_resume_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-resume.component.css?ngResource */ 70622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _assets_data_experiences_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/experiences.json */ 2200);





let HomeResumeComponent = class HomeResumeComponent {
    constructor() {
        this.experiences = _assets_data_experiences_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
    }
};
HomeResumeComponent.ctorParameters = () => [];
HomeResumeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home-resume',
        template: _home_resume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_resume_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeResumeComponent);



/***/ }),

/***/ 23366:
/*!******************************************************!*\
  !*** ./src/app/home-skills/home-skills.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSkillsComponent": () => (/* binding */ HomeSkillsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_skills_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-skills.component.html?ngResource */ 66330);
/* harmony import */ var _home_skills_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-skills.component.css?ngResource */ 30546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/skills.json */ 1815);





let HomeSkillsComponent = class HomeSkillsComponent {
    constructor() {
        this.skills = _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_2__;
        // TODO: shuffle skills array?
    }
    ngOnInit() {
    }
};
HomeSkillsComponent.ctorParameters = () => [];
HomeSkillsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home-skills',
        template: _home_skills_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_skills_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeSkillsComponent);



/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 64715);
/* harmony import */ var _home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css?ngResource */ 80266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 51911:
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroComponent": () => (/* binding */ IntroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _intro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.component.html?ngResource */ 84146);
/* harmony import */ var _intro_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.component.css?ngResource */ 19652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let IntroComponent = class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroComponent.ctorParameters = () => [];
IntroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-intro',
        template: _intro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_intro_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroComponent);



/***/ }),

/***/ 66313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 78286);
/* harmony import */ var _navbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css?ngResource */ 81828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [];
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-navbar',
        template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_navbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavbarComponent);



/***/ }),

/***/ 64801:
/*!********************************************!*\
  !*** ./src/app/panels/panels.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelsComponent": () => (/* binding */ PanelsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _panels_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panels.component.html?ngResource */ 80342);
/* harmony import */ var _panels_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panels.component.css?ngResource */ 26939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PanelsComponent = class PanelsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PanelsComponent.ctorParameters = () => [];
PanelsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-panels',
        template: _panels_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_panels_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PanelsComponent);



/***/ }),

/***/ 1417:
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _project_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.component.html?ngResource */ 67944);
/* harmony import */ var _project_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.component.css?ngResource */ 47165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 72186);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ 47454);













let ProjectComponent = class ProjectComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCircle;
        this.faJira = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faJira;
        this.faBootstrap = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBootstrap;
        this.faAngular = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngular;
        this.faPython = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPython;
        this.faNodeJs = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faNodeJs;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGithub;
        this.faRaspberryPi = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faRaspberryPi;
        this.expanded = false;
        this.name = "";
        this.description = "";
        this.icon = "";
        this.isMobile = false;
    }
    ngOnInit() {
        this.isMobile = this.deviceService.isMobile();
    }
};
ProjectComponent.ctorParameters = () => [
    { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__.DeviceDetectorService }
];
ProjectComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ProjectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-project",
        template: _project_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectComponent);



/***/ }),

/***/ 55609:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.html?ngResource */ 65390);
/* harmony import */ var _projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.css?ngResource */ 21866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github.service */ 74184);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 70655);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 72186);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ 47454);














let ProjectsComponent = class ProjectsComponent {
    constructor(githubService, deviceService) {
        this.githubService = githubService;
        this.deviceService = deviceService;
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircle;
        this.faJira = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faJira;
        this.faBootstrap = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBootstrap;
        this.faAngular = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngular;
        this.faPython = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPython;
        this.faNodeJs = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faNodeJs;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGithub;
        this.faRaspberryPi = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faRaspberryPi;
        this.gists = new Array();
        // repos;
        this.isMobile = false;
    }
    ngOnInit() {
        this.isMobile = this.deviceService.isMobile();
        this.githubService.getGists().subscribe((gists) => {
            gists.forEach((gist) => {
                // Loop through the files to get the rawUrl and the code
                for (let key of Object.keys(gist.files)) {
                    let rawUrl = gist.files[key].raw_url;
                    let newGistObj = gist;
                    this.githubService.getGistCode(rawUrl).subscribe(value => {
                        newGistObj.content = value;
                        this.gists.push(newGistObj);
                    });
                }
            });
        });
        // this.repos = this.githubService.getRepos();
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _github_service__WEBPACK_IMPORTED_MODULE_2__.GithubService },
    { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__.DeviceDetectorService }
];
ProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-projects",
        template: _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectsComponent);



/***/ }),

/***/ 89944:
/*!**************************************************!*\
  !*** ./src/app/showcases/showcases.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcasesComponent": () => (/* binding */ ShowcasesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _showcases_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showcases.component.html?ngResource */ 54042);
/* harmony import */ var _showcases_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showcases.component.css?ngResource */ 57941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ShowcasesComponent = class ShowcasesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShowcasesComponent.ctorParameters = () => [];
ShowcasesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-showcases',
        template: _showcases_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_showcases_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShowcasesComponent);



/***/ }),

/***/ 65217:
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashComponent": () => (/* binding */ SplashComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _splash_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.component.html?ngResource */ 33396);
/* harmony import */ var _splash_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.component.css?ngResource */ 45132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SplashComponent = class SplashComponent {
    constructor() { }
    ngOnInit() {
        var pattern = Trianglify({
            width: window.screen.width,
            height: window.screen.height
        });
        var splash = document.getElementById("mainSplash");
        var gradientString = "linear-gradient(to bottom,rgba(22, 22, 22, 0.3) 0,rgba(22, 22, 22, 0.7) 85%,#161616 100%), ";
        splash.style.backgroundImage = gradientString + "url(" + pattern.png() + ")";
    }
};
SplashComponent.ctorParameters = () => [];
SplashComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-splash',
        template: _splash_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splash_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 33088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 16682:
/*!****************************************************************************!*\
  !*** ./src/app/boardgames-stats/boardgames-stats.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZGdhbWVzLXN0YXRzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 11253:
/*!****************************************************************************!*\
  !*** ./src/app/boardgames-tools/boardgames-tools.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZGdhbWVzLXRvb2xzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 38812:
/*!****************************************************************!*\
  !*** ./src/app/boardgames/boardgames.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "div.game {\n  color: white;\n}\n\n.game img {\n  max-width: 100%;\n  max-height: 50vh;\n  border-radius: 10%;\n  box-shadow: 0 30px 32px 0 rgba(0, 0, 0, 0.295);\n  /* border: 0px solid transparent; */\n  /* border-width: 0px 0px 0px 0px; */\n  border: 7px solid rgb(255, 255, 255);\n  transform: scale(0.9);\n  transition: all .2s ease-in-out;\n}\n\n.game img:hover {\n  border-radius: 20%;\n  /* border-width: 0px 0px 0px 0px; */\n  border-style: solid;\n  transform: scale(1.1);\n  transition: all .2s ease-in-out;\n}\n\n.btn-group .btn-light.active {\n  background-color: rgb(111, 98, 133);\n  color: white;\n  border-color: rgb(111, 98, 133);\n}\n\n.chart {\n  background-color: white;\n  border-radius: 3%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUlwQyxxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFJbkIscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJib2FyZGdhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZ2FtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdhbWUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJveC1zaGFkb3c6IDAgMzBweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI5NSk7XG4gIC8qIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xuICAvKiBib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDsgKi9cbiAgYm9yZGVyOiA3cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmdhbWUgaW1nOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAvKiBib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDsgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG4tZ3JvdXAgLmJ0bi1saWdodC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCA5OCwgMTMzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHJnYigxMTEsIDk4LCAxMzMpO1xufVxuXG4uY2hhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMyU7XG59XG4iXX0= */";

/***/ }),

/***/ 86469:
/*!**********************************************************!*\
  !*** ./src/app/contact/contact.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".screen-fill {\r\n    min-height: 90vh;\r\n}\r\n\r\n.hover-div-dip {\r\n    word-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NyZWVuLWZpbGwge1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxufVxyXG5cclxuLmhvdmVyLWRpdi1kaXAge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59Il19 */";

/***/ }),

/***/ 61285:
/*!****************************************************************!*\
  !*** ./src/app/experience/experience.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 9036:
/*!********************************************************!*\
  !*** ./src/app/footer/footer.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "#footer {\r\n    background-color: #212529;\r\n    color: rgb(128, 128, 128);\r\n}\r\n\r\n#footer a {\r\n    display: block;\r\n    color: rgb(128, 128, 128);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59XHJcblxyXG4jZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59Il19 */";

/***/ }),

/***/ 15543:
/*!********************************************************************!*\
  !*** ./src/app/home-contact/home-contact.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWNvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 43064:
/*!************************************************************************!*\
  !*** ./src/app/home-interests/home-interests.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWludGVyZXN0cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 87848:
/*!****************************************************************!*\
  !*** ./src/app/home-intro/home-intro.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWludHJvLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 45553:
/*!**********************************************************************!*\
  !*** ./src/app/home-projects/home-projects.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXByb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 70622:
/*!******************************************************************!*\
  !*** ./src/app/home-resume/home-resume.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/* ICONS */\n\n.icon-item {\n  color: white;\n}\n\n.icon-item .fa-circle {\n  color: rgb(33, 37, 41);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJob21lLXJlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSUNPTlMgKi9cblxuLmljb24taXRlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmljb24taXRlbSAuZmEtY2lyY2xlIHtcbiAgY29sb3I6IHJnYigzMywgMzcsIDQxKTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 30546:
/*!******************************************************************!*\
  !*** ./src/app/home-skills/home-skills.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/* ICONS */\n\n.icon-item {\n  color: white;\n}\n\n.icon-item .fa-circle {\n  color: rgb(33, 37, 41);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJob21lLXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSUNPTlMgKi9cblxuLmljb24taXRlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmljb24taXRlbSAuZmEtY2lyY2xlIHtcbiAgY29sb3I6IHJnYigzMywgMzcsIDQxKTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 80266:
/*!****************************************************!*\
  !*** ./src/app/home/home.component.css?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 19652:
/*!******************************************************!*\
  !*** ./src/app/intro/intro.component.css?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/* ICONS */\r\n\r\n.icon-item {\r\n  color: white;\r\n}\r\n\r\n.icon-item .fa-circle {\r\n  color: rgb(33, 37, 41);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSUNPTlMgKi9cclxuXHJcbi5pY29uLWl0ZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmljb24taXRlbSAuZmEtY2lyY2xlIHtcclxuICBjb2xvcjogcmdiKDMzLCAzNywgNDEpO1xyXG59Il19 */";

/***/ }),

/***/ 81828:
/*!********************************************************!*\
  !*** ./src/app/navbar/navbar.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 26939:
/*!********************************************************!*\
  !*** ./src/app/panels/panels.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 47165:
/*!**********************************************************!*\
  !*** ./src/app/project/project.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 21866:
/*!************************************************************!*\
  !*** ./src/app/projects/projects.component.css?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".gist code {\r\n  border-radius: 10px;\r\n  height: 30em;\r\n}\r\n\r\n.gist .project-icon {\r\n  transform: scale(1.3);\r\n  opacity: 1;\r\n  transition: .2s all ease-in-out;\r\n}\r\n\r\n.gist:hover .project-icon {\r\n  transform: scale(1);\r\n  opacity: 1;\r\n  transition: .2s all ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBSUUscUJBQXFCO0VBQ3JCLFVBQVU7RUFDViwrQkFBK0I7QUFDakM7O0FBRUE7RUFJRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLCtCQUErQjtBQUNqQyIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdpc3QgY29kZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDMwZW07XHJcbn1cclxuXHJcbi5naXN0IC5wcm9qZWN0LWljb24ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmdpc3Q6aG92ZXIgLnByb2plY3QtaWNvbiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcclxufSJdfQ== */";

/***/ }),

/***/ 57941:
/*!**************************************************************!*\
  !*** ./src/app/showcases/showcases.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/* SHOWCASE */\r\n\r\n.showcase .showcase-img {\r\n  background-size: cover;\r\n  min-height: 30rem;\r\n  box-shadow: 4px 4px 3px rgba(48, 48, 48, 0.562);\r\n}\r\n\r\n.showcase .showcase-text {\r\n  padding: 3rem;\r\n}\r\n\r\n.panels .panel {\r\n  background-color: rgb(117, 83, 181);\r\n  border-radius: 15px;\r\n}\r\n\r\n.panels .panel:hover {\r\n  background-color: rgb(106, 74, 165);\r\n}\r\n\r\n.panels .panel a {\r\n  color: rgb(191, 172, 224);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3djYXNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7O0FBRWI7RUFJRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic2hvd2Nhc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTSE9XQ0FTRSAqL1xyXG5cclxuLnNob3djYXNlIC5zaG93Y2FzZS1pbWcge1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggM3B4IHJnYmEoNDgsIDQ4LCA0OCwgMC41NjIpO1xyXG59XHJcblxyXG4uc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbi5wYW5lbHMgLnBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCA4MywgMTgxKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ucGFuZWxzIC5wYW5lbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgNzQsIDE2NSk7XHJcbn1cclxuXHJcbi5wYW5lbHMgLnBhbmVsIGEge1xyXG4gIGNvbG9yOiByZ2IoMTkxLCAxNzIsIDIyNCk7XHJcbn0iXX0= */";

/***/ }),

/***/ 45132:
/*!********************************************************!*\
  !*** ./src/app/splash/splash.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n/* Splash */\r\n\r\n.splash {\r\n  height: 100vh;\r\n  min-height: 500px;\r\n  background: linear-gradient(to bottom,\r\n      rgba(22, 22, 22, 0.3) 0,\r\n      rgba(22, 22, 22, 0.7) 85%,\r\n      #161616 100%),\r\n    url('trianglify.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n\r\n  image-rendering: -webkit-optimize-contrast;\r\n\r\n  color: white;\r\n}\r\n\r\n.splash h1 {\r\n  animation: 2.5s fadein;\r\n}\r\n\r\n@keyframes splash-slide {\r\n  from {\r\n    transform: translateX(-400px);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n.splash img {\r\n  border-radius: 50%;\r\n  border: 5px solid white;\r\n  height: auto;\r\n  width: 50%;\r\n  box-shadow: 3px 7px 5px rgba(48, 48, 48, 0.562);\r\n  animation: 2s splash-slide;\r\n}\r\n\r\n.splash h1.display-3 {\r\n  font-size: 3.5em;\r\n}\r\n\r\n/* sm */\r\n\r\n@media (min-width: 576px) {\r\n  .splash img {\r\n    width: 50%;\r\n  }\r\n\r\n  .splash h1.display-3 {\r\n    font-size: 3.5em;\r\n  }\r\n}\r\n\r\n/* md */\r\n\r\n@media (min-width: 768px) {\r\n  .splash img {\r\n    width: 60%;\r\n  }\r\n\r\n  .splash h1.display-3 {\r\n    font-size: 4em;\r\n  }\r\n}\r\n\r\n/* lg */\r\n\r\n@media (min-width: 992px) {\r\n  .splash img {\r\n    width: 90%;\r\n  }\r\n\r\n  .splash h1.display-3 {\r\n    font-size: 5em;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakI7Ozs7eUJBSTJDO0VBSTNDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUIsMENBQTBDOztFQUUxQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLCtDQUErQztFQUMvQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsT0FBTzs7QUFDUDtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsT0FBTzs7QUFDUDtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBLE9BQU87O0FBQ1A7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcGxhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogU3BsYXNoICovXHJcblxyXG4uc3BsYXNoIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sXHJcbiAgICAgIHJnYmEoMjIsIDIyLCAyMiwgMC4zKSAwLFxyXG4gICAgICByZ2JhKDIyLCAyMiwgMjIsIDAuNykgODUlLFxyXG4gICAgICAjMTYxNjE2IDEwMCUpLFxyXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy90cmlhbmdsaWZ5LnBuZ1wiKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuICBpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwbGFzaCBoMSB7XHJcbiAgYW5pbWF0aW9uOiAyLjVzIGZhZGVpbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGxhc2gtc2xpZGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zcGxhc2ggaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogM3B4IDdweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjU2Mik7XHJcbiAgYW5pbWF0aW9uOiAycyBzcGxhc2gtc2xpZGU7XHJcbn1cclxuXHJcbi5zcGxhc2ggaDEuZGlzcGxheS0zIHtcclxuICBmb250LXNpemU6IDMuNWVtO1xyXG59XHJcblxyXG4vKiBzbSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuc3BsYXNoIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnNwbGFzaCBoMS5kaXNwbGF5LTMge1xyXG4gICAgZm9udC1zaXplOiAzLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIG1kICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zcGxhc2ggaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAuc3BsYXNoIGgxLmRpc3BsYXktMyB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGxnICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5zcGxhc2ggaW1nIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuc3BsYXNoIGgxLmRpc3BsYXktMyB7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<header style=\"height: 56px;\"></header>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";

/***/ }),

/***/ 58313:
/*!*****************************************************************************!*\
  !*** ./src/app/boardgames-stats/boardgames-stats.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"screen-fill bg-charcoal container-fluid text-center p-lg-5 p-5\">\n    <div class=\"row h-100 align-items-center\">\n        <h1 class=\"big-title col-12\">Coming Soon...</h1>\n    </div>\n  </div>\n  ";

/***/ }),

/***/ 98997:
/*!*****************************************************************************!*\
  !*** ./src/app/boardgames-tools/boardgames-tools.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"screen-fill bg-charcoal container-fluid text-center p-lg-5 p-5\">\n    <div class=\"row h-100 align-items-center\">\n        <h1 class=\"big-title col-12\">Coming Soon...</h1>\n    </div>\n  </div>\n  ";

/***/ }),

/***/ 45394:
/*!*****************************************************************!*\
  !*** ./src/app/boardgames/boardgames.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"bg-charcoal text-center container-fluid p-lg-5 p-3\">\n  <div class=\"p-3\">\n\n    <div echarts [options]=\"playOptions\" [theme]=\"theme\" class=\"chart\"></div>\n\n    <!-- <div class=\"row h-100 align-items-center\">\n      <div class=\"col-6\">\n        <div echarts [options]=\"dayOptions\" [theme]=\"theme\" class=\"chart\"></div>\n      </div>\n      <div class=\"col-6\">\n        <div echarts [options]=\"playerOptions\" [theme]=\"theme\" class=\"chart\"></div>\n      </div>\n    </div> -->\n\n    <!-- Sorting Toolbar -->\n    <div class=\"py-5\">\n      <!-- Desktop sorting button group -->\n      <div *ngIf=\"!isMobile\">\n        <div class=\"btn-toolbar p-1\" role=\"toolbar\">\n          <div class=\"btn-group btn-group-lg btn-group-toggle mx-auto\" role=\"group\" data-toggle=\"buttons\">\n            <label class=\"btn btn-light btn-lg\">\n              <input type=\"radio\" (click)=\"onClickAlpha()\" name=\"options\" id=\"option1\" autocomplete=\"off\">\n              Alphabetical\n            </label>\n            <label class=\"btn btn-light disabled\">\n              <input type=\"radio\" (click)=\"onClickGeek()\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n              Geek Rating\n            </label>\n            <label class=\"btn btn-light disabled\">\n              <input type=\"radio\" (click)=\"onClickRating()\" name=\"options\" id=\"option3\" autocomplete=\"off\">\n              My Rating\n            </label>\n            <label class=\"btn btn-light\">\n              <input type=\"radio\" (click)=\"onClickPlays()\" name=\"options\" id=\"option4\" autocomplete=\"off\">\n              Plays\n            </label>\n          </div>\n        </div>\n        <div class=\"btn-toolbar p-1\" role=\"toolbar\">\n          <div class=\"type-filter btn-group btn-group-toggle mx-auto\" role=\"group\" data-toggle=\"buttons\">\n            <label class=\"btn btn-light active\">\n              <input type=\"checkbox\" (click)=\"onClickBoardGames()\" checked autocomplete=\"off\"> Board\n              Games\n            </label>\n            <label class=\"btn btn-light\">\n              <input type=\"checkbox\" (click)=\"onClickExpansions()\" autocomplete=\"off\"> Expansions\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <!-- Mobile sorting button group -->\n      <div *ngIf=\"isMobile\">\n        <div class=\"btn-toolbar p-1\" role=\"toolbar\">\n          <div class=\"btn-group btn-group-sm btn-group-toggle mx-auto\" data-toggle=\"buttons\">\n            <label class=\"btn btn-light\">\n              <input type=\"radio\" (click)=\"onClickAlpha()\" name=\"options\" id=\"option1\" autocomplete=\"off\">\n              Alphabetical\n            </label>\n            <label class=\"btn btn-light disabled\">\n              <input type=\"radio\" (click)=\"onClickGeek()\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n              Geek Rating\n            </label>\n            <label class=\"btn btn-light disabled\">\n              <input type=\"radio\" (click)=\"onClickRating()\" name=\"options\" id=\"option3\" autocomplete=\"off\"> My\n              Rating\n            </label>\n            <label class=\"btn btn-light\">\n              <input type=\"radio\" (click)=\"onClickPlays()\" name=\"options\" id=\"option4\" autocomplete=\"off\">\n              Plays\n            </label>\n          </div>\n        </div>\n        <div class=\"btn-toolbar p-1\" role=\"toolbar\">\n          <div class=\"type-filter btn-group btn-group-sm btn-group-toggle mx-auto\" role=\"group\" data-toggle=\"buttons\">\n            <label class=\"btn btn-light active\">\n              <input type=\"checkbox\" (click)=\"onClickBoardGames()\" checked autocomplete=\"off\"> Board\n              Games\n            </label>\n            <label class=\"btn btn-light\">\n              <input type=\"checkbox\" (click)=\"onClickExpansions()\" autocomplete=\"off\"> Expansions\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Sorting Toolbar -->\n\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-lg-4 col-6 p-3\" *ngFor=\"let game of games\">\n\n        <!-- Render each game -->\n        <div class=\"game p-3\">\n          <!-- <h2 *ngIf=\"!isMobile && sortMethod === 'plays'\">{{game.numplays}}</h2>\n                    <h5 *ngIf=\"isMobile && sortMethod === 'plays'\">{{game.numplays}}</h5> -->\n          <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://boardgamegeek.com/boardgame/{{game.bggId}}\">\n            <img src=\"{{game.urlImage}}\">\n          </a>\n          <h2 *ngIf=\"!isMobile\">{{game.name}}</h2>\n          <h5 *ngIf=\"isMobile\">{{game.name}}</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 52105:
/*!***********************************************************!*\
  !*** ./src/app/contact/contact.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"screen-fill bg-charcoal container-fluid text-center p-lg-5 p-5\">\n  <div class=\"row h-100 align-items-center\">\n      <h1 class=\"big-title col-12\">Contact Me</h1>\n      <div class=\"col-lg-4 col-12 p-lg-5 p-3\">\n          <a href=\"https://www.linkedin.com/in/elijah-scherz/\">\n          <div class=\"hover-div-dip p-lg-3 p-2\">\n            <div class=\"text-center p-lg-4 p-3\">\n              <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n                <fa-icon [icon]=\"faCircle\"></fa-icon>\n                <fa-icon [inverse]=\"true\" [icon]=\"faLinkedin\" transform=\"shrink-6\"></fa-icon>\n              </fa-layers>\n            </div>\n            <h3>\n              LinkedIn\n            </h3>\n        \n          </div></a>\n      </div>\n      <div class=\"col-lg-4 col-12 p-lg-5 p-3\">\n        <a href=\"mailto:elijahscherz@gmail.com\">\n        <div class=\"hover-div-dip p-lg-5 p-2\">\n            <div class=\"text-center p-lg-4 p-3\">\n              <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n                <fa-icon [icon]=\"faCircle\"></fa-icon>\n                <fa-icon [inverse]=\"true\" [icon]=\"faEnvelope\" transform=\"shrink-6\"></fa-icon>\n              </fa-layers>\n            </div>\n            <h3>Email</h3>\n          </div>\n          </a>\n      </div>\n      <div class=\"col-lg-4 col-12 p-lg-5 p-3\">\n          <a href=\"https://github.com/elijahscherz/\">\n          <div class=\"hover-div-dip p-lg-3 p-2\">\n            <div class=\"text-center p-lg-4 p-3\">\n              <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n                <fa-icon [icon]=\"faCircle\"></fa-icon>\n                <fa-icon [inverse]=\"true\" [icon]=\"faGithub\" transform=\"shrink-6\"></fa-icon>\n              </fa-layers>\n            </div>\n            <h3>\n              Github\n            </h3>\n        \n          </div></a>\n      </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 64143:
/*!*****************************************************************!*\
  !*** ./src/app/experience/experience.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<!-- Interactive resume page -->\n<p>experience works!</p>\n";

/***/ }),

/***/ 82811:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<!-- Footer -->\n<footer id=\"footer\" class=\"p-4 my-auto\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <h4>Elijah Scherz</h4>\n                <a>elijahscherz@gmail.com</a>\n            </div>\n        \n            <div class=\"col-8 text-right my-auto\">\n                <a routerLink=\"\">HOME</a>\n                <a routerLink=\"/projects\">PROJECTS</a>\n                <!-- <a routerLink=\"/experience\">EXPERIENCE</a> -->\n                <a routerLink=\"/boardgames\">BOARDGAMES</a>\n                <a routerLink=\"/contact\">CONTACT</a>\n            </div>\n        </div>\n    </div>\n</footer>";

/***/ }),

/***/ 14932:
/*!*********************************************************************!*\
  !*** ./src/app/home-contact/home-contact.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Contact -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      Contact\n    </h2>\n    <p class=\"lead\">\n      Here are a couple cool things about me, my skills, interests, and links to further\n      information if possible.\n    </p>\n  </div>\n</section>\n<!-- /Contact -->\n";

/***/ }),

/***/ 15368:
/*!*************************************************************************!*\
  !*** ./src/app/home-interests/home-interests.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Interests Summary -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      Interests\n    </h2>\n    <p class=\"lead\">\n      Here are a couple cool things about me, my skills, interests, and links to further\n      information if possible.\n    </p>\n  </div>\n</section>\n<!-- /Interests Summary -->\n";

/***/ }),

/***/ 14089:
/*!*****************************************************************!*\
  !*** ./src/app/home-intro/home-intro.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<!-- Quick Intro -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      A little about me...\n    </h2>\n    <p class=\"lead\">\n      I'm currently an undergraduate computer science student at the University of Michigan. I've worked on projects\n      ranging from React sites to multithreaded file servers and truly enjoy variety. In my spare time, I love to host\n      game nights, play Ultimate, cook new recipes, develop games, and dive into any hobby I can get my hands on.\n    </p>\n  </div>\n</section>\n<!-- /Quick Intro -->\n";

/***/ }),

/***/ 80127:
/*!***********************************************************************!*\
  !*** ./src/app/home-projects/home-projects.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Projects Summary -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      Projects\n    </h2>\n    <p class=\"lead\">\n      Here are a couple cool things about me, my skills, interests, and links to further\n      information if possible.\n    </p>\n  </div>\n</section>\n<!-- /Projects Summary -->\n";

/***/ }),

/***/ 3982:
/*!*******************************************************************!*\
  !*** ./src/app/home-resume/home-resume.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Resume Overview -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n\n  <h1 class=\"home-title p-5\">RESUME</h1>\n  <hr>\n\n  <div class=\"home-resume-entry row py-3\" *ngFor=\"let experience of experiences\" style=\"white-space: pre-wrap;\">\n    <div class=\"col-lg-4 col-12 text-center\">\n      <span class=\"icon-item fa-stack fa-4x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-code fa-stack-1x\"></i>\n      </span>\n      <div style=\"margin: auto; background-color:dimgray; width: 0.5em; height: 15em;\"></div>\n    </div>\n    <div class=\"col-lg-8 col-12\">\n      <h4>{{experience.name}}, {{experience.location}} — {{experience.info}}\n      </h4>\n      <p>{{experience.date}}</p>\n      <p class=\"lead\">{{experience.description}}</p>\n    </div>\n  </div>\n</section>\n<!-- /Resume Overview -->";

/***/ }),

/***/ 66330:
/*!*******************************************************************!*\
  !*** ./src/app/home-skills/home-skills.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Skills Summary -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <h1 class=\"home-title p-5\">SKILLS</h1>\n  <hr>\n\n  <div class=\"home-skill-entry row py-3\" *ngFor=\"let skill of skills\" style=\"white-space: pre-wrap;\">\n    <div class=\"col-2 text-center\">\n      <!-- TODO: Icon on bar when it loads? -->\n      <!-- <h3>ICON</h3> -->\n      <span class=\"icon-item fa-stack fa-1x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-code fa-stack-1x\"></i>\n      </span>\n    </div>\n    <div class=\"col-10\">\n      <h4>{{skill.name}}, {{skill.type}}\n      </h4>\n      <p>{{skill.type}}</p>\n      <p class=\"lead\">{{skill.percentage}}</p>\n    </div>\n  </div>\n</section>\n<!-- /Skills Summary -->\n";

/***/ }),

/***/ 64715:
/*!*****************************************************!*\
  !*** ./src/app/home/home.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<app-splash></app-splash>\n<!-- <app-home-intro></app-home-intro>\n<app-home-resume></app-home-resume>\n<app-home-skills></app-home-skills>\n<app-home-interests></app-home-interests>\n<app-home-contact></app-home-contact> -->\n";

/***/ }),

/***/ 84146:
/*!*******************************************************!*\
  !*** ./src/app/intro/intro.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<!-- Quick Intro -->\n<section id=\"intro\" class=\"py-5 text-left bg-light container\">\n  <div>\n    <h2 class=\"font-weight-light\">\n      A little about me...\n    </h2>\n    <p class=\"lead\">\n      I'm currently an undergraduate computer science student at the University of Michigan. I've worked on projects\n      ranging from React sites to multithreaded file servers and truly enjoy variety. In my spare time, I love to host\n      game nights, play Ultimate, cook new recipes, develop games, and dive into any hobby I can get my hands on.\n    </p>\n  </div>\n\n  <!-- <section class=\"icons p-5 d-none d-lg-block\">\n    <div class=\"row\">\n      <span class=\"col-4 icon-item fa-stack fa-2x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-code fa-stack-1x\"></i>\n      </span>\n      <span class=\"col-4 icon-item fa-stack fa-2x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-guitar fa-stack-1x\"></i>\n      </span>\n      <span class=\"col-4 icon-item fa-stack fa-2x\">\n        <i class=\"fas fa-circle fa-stack-2x\"></i>\n        <i class=\"fas fa-compact-disc fa-stack-1x\"></i>\n      </span>\n    </div>\n  </section> -->\n</section>\n<!-- /Quick Intro -->\n";

/***/ }),

/***/ 78286:
/*!*********************************************************!*\
  !*** ./src/app/navbar/navbar.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light shadow fixed-top\">\n  <!-- Navbar brand -->\n  <a class=\"navbar-brand\" routerLink=\"\">Elijah Scherz</a>\n\n  <!-- Navbar toggle button-->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n    aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <div class=\"navbar-nav ml-auto\">\n      <a class=\"nav-item nav-link\" routerLink=\"\">HOME<span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" routerLink=\"/projects\">PROJECTS</a>\n      <!-- <a class=\"nav-item nav-link\" routerLink=\"/boardgames\">BOARDGAMES</a> -->\n      <div class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          BOARDGAMES\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/boardgames\">COLLECTION</a>\n          <a class=\"dropdown-item\" routerLink=\"/boardgames/stats\">STATS</a>\n          <a class=\"dropdown-item\" routerLink=\"/boardgames/tools\">TOOLS</a>\n        </div>\n      </div>\n      <!-- <a class=\"nav-item nav-link active\" routerLink=\"/experience\">EXPERIENCE</a> -->\n      <a class=\"nav-item nav-link\" routerLink=\"/contact\">CONTACT</a>\n    </div>\n  </div>\n</nav>\n";

/***/ }),

/***/ 80342:
/*!*********************************************************!*\
  !*** ./src/app/panels/panels.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"panels container\">\n    <div class=\"row\">\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-right\">\n        <h3>\n            Currently Attending The University of Michigan, Ann Arbor\n        </h3>\n        <p class=\"lead\">It's a great place, honestly.</p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-up\">\n        <h3>Worship Leader</h3>\n        <p class=\"lead\">\n            Using my skills and superpowers of music to play guitar and\n            occasionally sing at\n            <a href=\"https://www.facebook.com/Chelsea-Church-of-The-Nazarene-158323664189170/\">Chelsea Church of the\n            Nazarene</a>.\n        </p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-left\">\n        <h3>Sunday School Teacher</h3>\n        <p class=\"lead\">\n            Also at Chelsea, I take great pride in showing the little ones how\n            amazing God's love can really be. Jealous?\n        </p>\n        </div>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-right\">\n        <h3>Blender</h3>\n        <p class=\"lead\">\n            This\n            <a href=\"https://www.blender.org/\">3D modeling software</a>\n            has to be one of the most fantastic things I've ever played with.\n            With the resources online, I guarantee you can shock yourself at\n            the realism you can make.\n        </p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-up\">\n        <h3>Raspberry Pi</h3>\n        <p class=\"lead\">\n            I've started working with these little devices, and they can be\n            applied in some of the most interesting ways. Recently, I made a\n            system that combines arcade, SNES, NES, SEGA, and even more. It\n            started as a small project inspired by wanting to let my dad play\n            the games he used to play, but grew into a system with thousands\n            of games, multiple controllers, and hopefully a portable version\n            in the near future.\n        </p>\n        </div>\n    </div>\n    <div class=\"col-md-4 p-2\">\n        <div class=\"panel col-md-12 p-4 slide-left\">\n        <h3>Movies and TV</h3>\n        <p class=\"lead\">\n            I'm a huge movie and TV fan. I've fancied myself a bit of a critic\n            when it comes to these things, and I very much enjoy analyzing\n            films and pulling them apart to see what either makes them good or\n            garbage. Wonder Woman? Good. Stranger Things? Good. Suicide Squad?\n            Not so good.\n        </p>\n        </div>\n    </div>\n    </div>\n</div>";

/***/ }),

/***/ 67944:
/*!***********************************************************!*\
  !*** ./src/app/project/project.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"col-12 col-lg-6 p-3\">\n  <div class=\"gist hover-div-dip p-3\" (click)=\"expanded = !expanded\">\n    <div class=\"text-center p-4\">\n      <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n        <fa-icon [icon]=\"faCircle\"></fa-icon>\n        <fa-icon [inverse]=\"true\" [icon]=\"faJira\" transform=\"shrink-6\"></fa-icon>\n      </fa-layers>\n    </div>\n    <h2 class=\"text-center\">{{name}}</h2>\n    <p *ngIf=\"expanded\">{{description}}</p>\n  </div>\n</div>\n";

/***/ }),

/***/ 65390:
/*!*************************************************************!*\
  !*** ./src/app/projects/projects.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"bg-charcoal container-fluid p-lg-5 p-3\">\n  <div class=\"p-3\">\n    <h1 class=\"big-title\">School and Work Projects</h1>\n    <div class=\"row\">\n      <!-- <app-project [name]=\"'Jira Duplicator'\" [icon]=\"'faJira'\" [description]=\"'This particular project was done during my time at RightBrain Networks. It started out as a Python\n              script meant to copy simple issues between client boards and company boards. It evolved into its own\n            custom module and class, which leveraged jira-python to access the Jira REST API and\n            pull information from passed in issues. Using an argument system, the program could do multiple issues at\n            once, do a query based on Jira\\'s JQL syntax, or even sync two issues to match one another. I ended up\n            supporting copying comments, priorities, assignees, and subtasks, all depending on the availability of the\n            source and target issues.\\n\\nChallenges\\nThe most difficult part of building this was dealing\n            with the Jira API which would respond with different amounts of information from issues depending on a\n            variety of variables, including who you were logged in as, what type of project you were getting issues\n            from, etc. The solution to this was using checks to see if a field was available on the issue or subtask,\n            and also seeing if required fields were all available on the source issue.'\"></app-project> -->\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faJira\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">Jira Duplicator</h2>\n          <p>This particular project was done during my time at RightBrain Networks. It started out as a <b>Python\n              script</b> meant to copy simple issues between client boards and company boards. It evolved into its own\n            <b>custom module and class</b>, which leveraged <b>jira-python</b> to access the <b>Jira REST API</b> and\n            pull information from passed in issues. Using an argument system, the program could do multiple issues at\n            once, do a query based on <b>Jira's JQL syntax</b>, or even sync two issues to match one another. I ended up\n            supporting copying comments, priorities, assignees, and subtasks, all depending on the availability of the\n            source and target issues.<br><br><b>Challenges</b><br>The most difficult part of building this was dealing\n            with the Jira API which would respond with different amounts of information from issues depending on a\n            variety of variables, including who you were logged in as, what type of project you were getting issues\n            from, etc. The solution to this was using checks to see if a field was available on the issue or subtask,\n            and also seeing if required fields were all available on the source issue.</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faBootstrap\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">RightBrain Website</h2>\n          <p><a href=\"https://rightbrainnetworks.com\">RBN's website</a> started out based in WordPress with some content\n            already available, but it was in need of a modern update. It was previously hosted on <b>AWS Lightsail</b>,\n            but since that platform takes more administration, I moved it to a new provider, and set up <b>three\n              environments</b> (dev, stage, and prod) for a better development workflow. I used <b>Bootstrap and CSS</b>\n            to update some of the pages that were already available, doing a major overhaul on the home page.\n            Additionally, we split up their single solutions page into a suite of pages and created case studies that\n            are more interactive than the pdfs that were previously available. There are more pages that I designed and\n            created which simply need content from their team, and then they will be launched hopefully in the near\n            future.</p>\n        </div>\n      </div>\n      <!-- <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip text-left p-3\">\n          <h2>Template Generator</h2>\n          <p>info</p>\n        </div>\n      </div> -->\n    </div>\n  </div>\n\n  <div class=\"p-3\">\n    <h1 class=\"big-title\">Personal Projects</h1>\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faPython\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">A Night to Remember</h2>\n          <p>I've been working on this one for almost a year and a half at this point. My dad was a huge fan of\n            <b>text-based Infocom games</b> (like Zork) when he was a kid and challenged me to make one. After playing\n            one myself, I got a bit inspired and started working on it in the summer of 2018. I first decided to\n            approach the problem using \"vanilla\" <b>Python</b>. I played a few more of the games and determined which\n            parts of the system I wanted to incorporate. There are multiple ways to interact with the world based on\n            commands and keywords. You can also move in different directions and collect items. While my initial system\n            wasn't as complicated as Infocom's, which could support phrases like \"stand on shoulders and leave hole\",\n            you could get/check items, interact with certain things like doors with those items, and move.<br><br>At\n            this point, I started to get more interested in where I could go with this. I've always enjoyed reading and\n            wanted to make this into a story. I started writing a <b>murder mystery</b> where you need to explore and\n            discover what happened. I decided I wanted to move this project into <b>C# and Unity</b> which would give me\n            easier access to graphics, sounds, and more. Currently, we are working on completing more art, getting some\n            final endings implemented, and brushing up on the details of the story. It's a work in progress, but a fun\n            one.</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faNodeJs\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">Discord Chat Bot</h2>\n          <p>This small project, which is somewhat of a constant work in progress, is a way to learn a bit more about\n            how to we make bots act in a human-like fashion. I picked up the Discord API and started learning about what\n            it can do when I built the foundation of a bot in <b>Node.js</b>. Right now, it doesn't do much, but it uses\n            <b>VADER sentiment analysis</b> to post reactions to certain messages and reacts to other messages based on\n            keywords. I polled friends and those online to see what types of words they typically react to and in what\n            way, and then set up the bot to randomly react to messages.<br><br>I wanted to incorporate more talking\n            ability into the system, but didn't have too much experience with <b>NLP</b> up to this point. I found that\n            <b>Google's Dialogflow had a Node.js SDK</b>, and I got to work hooking up a very basic chat / response\n            system. There is a lot more I can do with it if I take the time to incorporate more responses In the future,\n            using the <b>Intents</b> functionality that Google provides. I also can just let it loose in a couple of\n            servers and <b>use the responses to train</b> it using Google's built in functionality. I'll make it more\n            complex at some point, but it was just a fun little project.</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faAngular\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">My Website</h2>\n          <p>I built this site not too long ago after wanting to change it from my old one. I decided that I wanted to\n            learn <b>Angular and Typescript</b> so took this site as an opportunity. I'm still learning a lot of the\n            concepts, as it is a big framework, but I love the power of it. The Github Gists at the bottom of this page\n            are fetched from a service that utilizes <b>Angular's HTTPClient class</b> and the <b>Github API</b> to pull\n            the code and information of all my public gists. Pretty sweet!<br><br>I make use of <b>CSS for\n              animations</b> and cool transitions, and have been using <b>Font Awesome</b> for icons (as they have a\n            module for Angular now).</p>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-6 p-3\">\n        <div class=\"gist hover-div-dip p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faCircle\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faNodeJs\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <h2 class=\"text-center\">Discord Soundboard Bot</h2>\n          <p>After building one Discord bot, a friend of mine messaged me and wanted me to make something for him: a bot\n            which could <b>join voice chat and play clips</b>. Using the <b>node-opus</b> module, I was able to get the\n            bot to stream clips. Ask requested, I made a method for tagging these clips in the bot, so that you can then\n            search them while in Discord. The bot will direct message you with a list of relevant clips. If you use one\n            of the bots keywords while chatting, it will start playing it's clips for a variety of hilarious outcomes\n            and ridiculous interruptions. We later on extended this functionality to be able to play music!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3\">\n    <h1 class=\"big-title\">Github Gists</h1>\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-6 p-3\" *ngFor=\"let gist of gists\">\n        <div class=\"gist hover-div-dip text-center p-3\">\n          <div class=\"text-center p-4\">\n            <fa-layers class=\"project-icon\" size=\"7x\" [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faGithub\"></fa-icon>\n              <fa-icon [inverse]=\"true\" [icon]=\"faJira\" transform=\"shrink-6\"></fa-icon>\n            </fa-layers>\n          </div>\n          <a [href]=\"gist.html_url\">\n            <h2 *ngFor=\"let file of gist.files | keyvalue\">\n              {{ file.value.filename }}\n            </h2>\n          </a>\n          <p>{{ gist.description }}</p>\n          <pre class=\"text-left\"><code [highlight]=\"gist.content\"></code></pre>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 54042:
/*!***************************************************************!*\
  !*** ./src/app/showcases/showcases.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "  <!-- Showcases -->\n  <section class=\"showcase\">\n    <div class=\"container-fluid p-0\">\n      <section class=\"row no-gutters\">\n        <div class=\"col-md-6 order-md-1 showcase-img p-5\"\n          style=\"background-image: url('assets/images/pic01.jpg');\"></div>\n        <div class=\" col-md-6 order-md-2 showcase-text my-auto slide-left\">\n          <h2>Code Development</h2>\n          <p class=\"lead\">\n            I've been programming for a couple years now and have bounced\n            between languages involved with web development to bash scripting.\n            I've been loving C#, specifically as it applies to game creation\n            in <a href=\"https://unity3d.com/\">Unity</a>. Most recently, I've\n            been working with C++ to learn more about the techniques of object\n            oriented programming.\n          </p>\n        </div>\n      </section>\n\n      <section class=\"row no-gutters\">\n        <div class=\"col-md-6 order-md-2 showcase-img p-5\"\n          style=\"background-image: url('assets/images/pic02.jpg');\"></div>\n        <div class=\"col-md-6 order-md-1 showcase-text my-auto slide-right\">\n          <h2>Ultimate Frisbee</h2>\n          <p class=\"lead\">\n            I've played friz for over seven years now. Over the last\n            couple years I've competed in multiple tournaments including the\n            U.S. Open in Minnesota, Club Regional Championships, and College Nationals in Texas. I\n            love the sport, I love the people.\n          </p>\n        </div>\n      </section>\n\n      <section class=\"row no-gutters\">\n        <div class=\"col-md-6 order-md-1 showcase-img p-5\"\n          style=\"background-image: url('assets/images/pic03.jpg');\"></div>\n        <div class=\"col-md-6 order-md-2 showcase-text my-auto slide-left\">\n          <h2>Music</h2>\n          <p class=\"lead\">\n            From a young age, I grew up in a musical household. My parents\n            both play various instruments as well as sing, and those skills\n            have passed down to me. I play guitar and sing, and can carry a\n            beat on drums and play simple chord songs on piano. Can't seem to\n            forget how much of a wonder music is, and that is likely what\n            brings me to listen to so many tunes. I've got pretty wide tastes,\n            from alternative, to classic rock, to punk pop. Take a look at my\n            <a href=\"https://open.spotify.com/user/elijahscherz\">Spotify</a>\n            to find some new bands and some great playlists.\n          </p>\n        </div>\n      </section>\n    </div>\n  </section>\n  <!-- /Showcases -->";

/***/ }),

/***/ 33396:
/*!*********************************************************!*\
  !*** ./src/app/splash/splash.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<!-- Splash -->\n<header id=\"mainSplash\" class=\"splash\">\n  <div class=\"container-fluid h-100\">\n    <div id=\"splashText\" class=\"row h-100 align-items-center text-center\">\n      <!-- <div id=\"splashText\" class=\"text-center\"> -->\n      <div class=\"offset-lg-1 col-lg-4 col-12\">\n        <img src=\"assets/images/headshot.jpg\" alt=\"Elijah Scherz\">\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <h1 class=\"display-2 font-weight-light\">\n          Elijah Scherz\n        </h1>\n        <h2 class=\"font-weight-light\">\n          Developer. Musician. Player.\n        </h2>\n      </div>\n      <!-- </div> -->\n    </div>\n  </div>\n</header>\n<!-- /.Splash-->\n";

/***/ }),

/***/ 84297:
/*!********************************************!*\
  !*** ./src/assets/data/BGStatsExport.json ***!
  \********************************************/
/***/ ((module) => {


/***/ }),

/***/ 2200:
/*!******************************************!*\
  !*** ./src/assets/data/experiences.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"University of Michigan","location":"Ann Arbor, MI","info":"Bachelor of Science, Computer Science","description":"Current GPA: 3.54\\n\\nRelevant Courses: Data Structures and Algorithms, Foundations of Computer Science, Intro to Computer Organization, Intro to Operating Systems (F ‘19), Web Systems (F’ 19)\\n\\nRelevant Projects: Web Instagram Clone(React, Flask, Python) | Multithreading Library(C++, Linux)","date":"MAY 2021"},{"name":"Washtenaw Technical Middle College","location":"Ann Arbor, MI","info":"Associate in Applied Science, Occupational Studies (Networking)","date":"MAY 2021"},{"name":"Capital One Bank","location":"McLean, VA","info":"Software Engineering Intern","date":"JUNE-JULY 2020"},{"name":"RightBrain Networks","location":"Ann Arbor, MI","info":"Cloud Development Intern","description":"Utilized Docker to provision a client’s image in order to build an auto scaling EC2 cluster in AWS ECS for their ticketing system.\\n\\nWrote Python application which integrated with the Jira API to bulk copy and sync issues across projects and boards.\\n\\nDesigned Jenkins pipeline to build and deploy the managed services boilerplate to S3.\\n\\nRe - coded and styled the company website from scratch using HTML, CSS, and jQuery to provide customers with a better experience.\\n\\nWorked with software and configuration management services such as AWS EC2, AWS CloudFormation, AWS RDS, AWS Lambda, Docker, Jenkins, and Salt to learn the fundamentals of cloud architecture.","date":"MAY-AUG 2019"},{"name":"Edwards Brothers Malloy","location":"Ann Arbor, MI","info":"Web Development Intern","description":"Succeeded in designing a .NET site template using AngularJS and Bootstrap which could take in formatted JSON to generate internal web sites dynamically.\\n\\nOrganized and drafted overall structure of both backend and frontend to construct a task - based Agile development plan for the development team.","date":"MAY 2018"}]');

/***/ }),

/***/ 1815:
/*!*************************************!*\
  !*** ./src/assets/data/skills.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"C/C++","percentage":85,"type":"language"},{"name":"C#","percentage":78,"type":"language"},{"name":"Python","percentage":70,"type":"language"},{"name":"HTML/CSS","percentage":50,"type":"language"},{"name":"Javascript/Typescript","percentage":70,"type":"language"},{"name":"Amazon Web Services","percentage":65,"type":"technology"},{"name":"Docker","percentage":35,"type":"technology"},{"name":"Git","percentage":75,"type":"technology"},{"name":"Shell","percentage":60,"type":"technology"},{"name":"Angular","percentage":68,"type":"technology"},{"name":"React","percentage":60,"type":"technology"},{"name":"Unity","percentage":60,"type":"technology"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map