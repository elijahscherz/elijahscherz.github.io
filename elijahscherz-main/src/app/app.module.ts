import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { SplashComponent } from "./splash/splash.component";
import { IntroComponent } from "./intro/intro.component";
import { ShowcasesComponent } from "./showcases/showcases.component";
import { PanelsComponent } from "./panels/panels.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { GithubService } from "./github.service";

// Code Highlighting
import { HighlightModule, HIGHLIGHT_OPTIONS } from "ngx-highlightjs";

// FontAwesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// Mobile detection
import { ProjectComponent } from "./project/project.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeIntroComponent } from "./home-intro/home-intro.component";
import { HomeResumeComponent } from "./home-resume/home-resume.component";
import { HomeSkillsComponent } from "./home-skills/home-skills.component";
import { HomeProjectsComponent } from "./home-projects/home-projects.component";
import { HomeInterestsComponent } from "./home-interests/home-interests.component";
import { HomeContactComponent } from "./home-contact/home-contact.component";
import { BoardgamesComponent } from "./boardgames/boardgames.component";

// Angular Charts
import { NgxEchartsModule } from "ngx-echarts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BoardgamesStatsComponent } from "./boardgames-stats/boardgames-stats.component";
import { BoardgamesToolsComponent } from "./boardgames-tools/boardgames-tools.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SplashComponent,
    IntroComponent,
    ShowcasesComponent,
    PanelsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ProjectComponent,
    HomeIntroComponent,
    HomeResumeComponent,
    HomeSkillsComponent,
    HomeProjectsComponent,
    HomeInterestsComponent,
    HomeContactComponent,
    BoardgamesComponent,
    BoardgamesStatsComponent,
    BoardgamesToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    NgxChartsModule,
  ],
  providers: [
    GithubService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import("highlight.js"),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
