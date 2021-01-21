import { Component, HostListener } from '@angular/core';
import { ResizeService } from './resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leon-chow';
  mobileScreen: Boolean = false;

  // onResize, checks if the width and height are less than or equal to 600, will switch to mobile view
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeService.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
    console.log(`Width: ${window.innerHeight}, width: ${window.innerWidth}`);
  }

  ngOnInit() {
    this.resizeService.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
  }

  constructor(public resizeService: ResizeService) {}
}
