import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // used to store the array of links
  links: Array<string> = ['Projects', 'About', 'Contact'];

  constructor() { }

  ngOnInit(): void {

  }

}
