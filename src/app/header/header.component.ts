import { ResizeService } from './../resize.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
  toggleDropdown: boolean = false;

  // event to check if page is scrolled vertically of at least 50px, which will make the sticky header appear
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  constructor(public resizeService: ResizeService) { }

  ngOnInit(): void {
  }
}
