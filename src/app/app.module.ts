import { QuestionsService } from "./community/questions.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LogInComponent } from "./container/log-in/log-in.component";
import { ContainerComponent } from "./container/container.component";
import { SliderComponent } from "./container/slider/slider.component";
import { SignUpComponent } from "./container/sign-up/sign-up.component";
import { SideBarComponent } from "./container/side-bar/side-bar.component";
import { ContentProfileComponent } from "./container/content-profile/content-profile.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  NgbPaginationModule,
  NgbAlertModule
} from "@ng-bootstrap/ng-bootstrap";
import { CardItemComponent } from "./container/content-profile/card-item/card-item.component";
import { ButtonComponent } from "./container/button/button.component";
import { RankComponent } from "./rank/rank.component";
import { ContainerRankProfileComponent } from "./container-rank-profile/container-rank-profile.component";
import { CommunityComponent } from "./community/community.component";
import { AddQuestionComponent } from "./community/add-question/add-question.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    LogInComponent,
    ContainerComponent,
    SliderComponent,
    SignUpComponent,
    SideBarComponent,
    ContentProfileComponent,
    CardItemComponent,
    ButtonComponent,
    RankComponent,
    ContainerRankProfileComponent,
    CommunityComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
