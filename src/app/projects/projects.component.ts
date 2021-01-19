import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  cols: number = 2;
  mobileScreen: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600 ? true : false;
    this.cols = this.mobileScreen ? this.cols = 1 : this.cols = 2;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(`height: ${window.innerHeight}, width: ${window.innerWidth}`);
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600 ? true : false;
    this.cols = this.mobileScreen ? this.cols = 1 : this.cols = 2;
  }

}
