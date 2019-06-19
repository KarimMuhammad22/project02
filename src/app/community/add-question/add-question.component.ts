import { QuestionsService } from "./../questions.service";
import { Question } from "./../../_Model/question";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"]
})
export class AddQuestionComponent implements OnInit {
  q = {
    // Id: null,
    // Body: "",
    // Type: null,
    // ModelAnswer: null,
    // Course: null,
    // AnswerList: null,
    // Answers: null,
    // like: null
    UserId : 1,
	  questionBody:null
  };

  constructor(private qs: QuestionsService,private router:Router) {}

  ngOnInit() {}
  onAdd(f) {
    this.qs.postQuestion(this.q).subscribe(x =>    { this.router.navigate(['community/']); }  );

  }
}
