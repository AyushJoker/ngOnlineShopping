import { Component, OnInit } from '@angular/core';
import { faArrowLeftLong, faBackward, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor() { }
  faArrowLeftLong=faArrowLeftLong
  ngOnInit(): void {
  }

}
