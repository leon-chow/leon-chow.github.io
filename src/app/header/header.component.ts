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
            style({transform: 'ease-in', opacity: 0}),
            animate('250ms', style({transform: 'ease-in', height: .15, opacity: 1}))
          ]),
          transition(':leave', [
            animate('250ms', style({transform: 'ease-out', height: .15, opacity: 0}))
          ])
        ]
      )
    ],
})

export class HeaderComponent implements OnInit {
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
