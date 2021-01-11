import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  cols: number = 2;
  rowHeight: string = '52rem';
  rowWidth: string = '3rem';
  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(`height: ${window.innerHeight}, width: ${window.innerWidth}`);
    this.cols = window.innerHeight <= 800 && window.innerWidth <= 800 ? 1 : 2;
  }

}
