import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { OurTeamSectionComponent } from "./home-page/our-team-section/our-team-section.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurTeamSectionComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
