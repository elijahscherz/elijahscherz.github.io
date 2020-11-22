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
import { HighlightModule } from "ngx-highlightjs";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";

// FontAwesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// Mobile detection
import { DeviceDetectorModule } from "ngx-device-detector";
import { ProjectComponent } from './project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeResumeComponent } from './home-resume/home-resume.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { HomeInterestsComponent } from './home-interests/home-interests.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { BoardgamesComponent } from './boardgames/boardgames.component';

export function hljsLanguages() {
  return [
    { name: "typescript", func: typescript },
    { name: "javascript", func: javascript },
    { name: "css", func: css },
    { name: "xml", func: xml },
    { name: "bash", func: bash }
  ];
}

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
    BoardgamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    FontAwesomeModule,
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
