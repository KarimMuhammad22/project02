import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-container-rank-profile",
  templateUrl: "./container-rank-profile.component.html",
  styleUrls: ["./container-rank-profile.component.css"]
})
export class ContainerRankProfileComponent implements OnInit {
  @HostBinding("class") x;

  constructor() {
    this.x = "col-md-9";
  }

  ngOnInit() {}
}
