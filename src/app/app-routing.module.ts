import { AddQuestionComponent } from "./community/add-question/add-question.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContainerComponent } from "./container/container.component";
import { RankComponent } from "./rank/rank.component";
import { ContainerRankProfileComponent } from "./container-rank-profile/container-rank-profile.component";
import { ContentProfileComponent } from "./container/content-profile/content-profile.component";
import { CommunityComponent } from "./community/community.component";

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: "",
        component: ContainerRankProfileComponent,
        children: [
          { path: "", component: ContentProfileComponent },
          { path: "rank", component: RankComponent },
          { path: "community", component: CommunityComponent },
          { path: "community/addQuestion", component: AddQuestionComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
