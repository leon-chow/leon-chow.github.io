import { ResizeService } from './../resize.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  cols: number = 2;
  constructor(public resizeService: ResizeService) { }

  ngOnInit(): void {
    this.cols = this.resizeService.mobileScreen ? this.cols = 1 : this.cols = 2;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.cols = this.resizeService.mobileScreen ? this.cols = 1 : this.cols = 2;
  }
}
