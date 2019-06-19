import { Component, OnInit } from "@angular/core";
import { jobProfile } from "src/app/_Model/jobProfileCards";

@Component({
  selector: "app-content-profile",
  templateUrl: "./content-profile.component.html",
  styleUrls: ["./content-profile.component.css"]
})
export class ContentProfileComponent implements OnInit {
  data: jobProfile[];
  constructor() {
    this.data = [
      {
        id: 1,
        name: ".NET Developer",
        image: "../../assets/imgs/dotnet.png",
        describtion:
          "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        id: 2,
        name: "Frontend Angular",
        image: "../../assets/imgs/front.png",
        describtion:
          "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        id: 3,
        name: "Frontend React",
        image: "../../assets/imgs/web-development.png",
        describtion:
          "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ];
  }

  ngOnInit() {}
}
