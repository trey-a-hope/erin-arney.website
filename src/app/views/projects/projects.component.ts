import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activeTab: string = "Poetry";

  constructor() { }

  ngOnInit() {
  }

  selectTab = (tab: string): void => {
    this.activeTab = tab;
  }

}
 