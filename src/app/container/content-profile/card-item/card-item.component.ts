import { Component, OnInit, Input } from '@angular/core';
import { jobProfile } from 'src/app/_Model/jobProfileCards';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
 
 @Input() item:jobProfile;


  constructor() {
  }

  ngOnInit() {
  }
  clicked(data){
    alert(data);
  }
}
