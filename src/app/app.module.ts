import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { MembersSectionComponent } from './shared/components/members-section/members-section.component';
import { MemberItemComponent } from './shared/components/member-item/member-item.component';
import { ImageViewerComponent } from './shared/components/image-viewer/image-viewer.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, NotFoundPageComponent, MembersSectionComponent, MemberItemComponent, ImageViewerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
