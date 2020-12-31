import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  links: Array<string> = ['About', 'Projects', 'Contact'];
  constructor() { }

  ngOnInit(): void {
  }


}
