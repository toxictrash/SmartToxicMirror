import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mirror-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  hide: boolean;

  constructor() { }

  ngOnInit() {
    this.hide = false;
  }

}
