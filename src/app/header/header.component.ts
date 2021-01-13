import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    animations: [
      trigger(
        'enterAnimation', [
          transition(':enter', [
            style({opacity: 0}),
            animate('250ms', style({height: .15, opacity: 1}))
          ]),
          transition(':leave', [
            animate('250ms', style({height: .15, opacity: 0}))
          ])
        ]
      )
    ],
})

export class HeaderComponent implements OnInit {
  links: Array<string> = ['Projects', 'About', 'Contact'];
  isSticky: boolean = false;
  mobileScreen: boolean = false;
  toggleDropdown: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(`height: ${window.innerHeight}, width: ${window.innerWidth}`);
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
  }

  constructor() { }

  ngOnInit(): void {
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
  }
}
