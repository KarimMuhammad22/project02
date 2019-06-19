import { QuestionsService } from "./questions.service";
import { Component, OnInit } from "@angular/core";
import { Question } from "../_Model/question";
import { Answers } from "./../_Model/answer";
import { AnswersService } from "./answers.service";

@Component({
  selector: "app-community",
  templateUrl: "./community.component.html",
  styleUrls: ["./community.component.css"]
})
export class CommunityComponent implements OnInit {
  questions: Question[];
  answers: Answers[];
  isLike: boolean = false;
  constructor(private qs: QuestionsService, private answ: AnswersService) {}

  ngOnInit() {
    this.qs.getQuestions().subscribe(data => {
      this.questions = data;
    });

    this.answ.getAnswers().subscribe(data => {
      this.answers = data;
    });
  }
  // onLike(q) {
  //   q.like = !q.like;
  //   if (q.like) {
  //     q.icon = "fa-heart";
  //   } else {
  //     q.icon = "fa-heart-o";
  //   }
  // }
  aa() {
    console.log(this.questions);
  }
}
