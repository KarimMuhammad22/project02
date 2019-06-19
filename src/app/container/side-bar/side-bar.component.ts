import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/_Model/user';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
userInfo: user;
  constructor() {
   this.userInfo={
      id:1,Image:'../../assets/imgs/user.png',UserName:'Israa Mohamed'

    }
  
   }

  ngOnInit() {
  }
  public isCollapsed = true;

}
