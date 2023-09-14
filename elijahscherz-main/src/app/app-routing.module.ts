import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";
import { BoardgamesComponent } from "./boardgames/boardgames.component";
import { BoardgamesStatsComponent } from "./boardgames-stats/boardgames-stats.component";
import { BoardgamesToolsComponent } from "./boardgames-tools/boardgames-tools.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
  },
  {
    path: "experience",
    component: ExperienceComponent,
  },
  {
    path: "boardgames",
    component: BoardgamesComponent,
  },
  {
    path: "boardgames/stats",
    component: BoardgamesStatsComponent,
  },
  {
    path: "boardgames/tools",
    component: BoardgamesToolsComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
