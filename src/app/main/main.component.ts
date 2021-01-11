import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  links: Array<string> = ['About', 'Projects', 'Contact'];
  mobileScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.mobileScreen = window.innerHeight <= 800 && window.innerWidth <= 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(`height: ${window.innerHeight}, width: ${window.innerWidth}`);
    this.mobileScreen = window.innerHeight <= 800 && window.innerWidth <= 800;
  }
}
