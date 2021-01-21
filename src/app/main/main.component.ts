import { ResizeService } from './../resize.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  links: Array<string> = ['About', 'Projects', 'Contact'];

  constructor(public resizeService: ResizeService) { }

  ngOnInit(): void {
  }
}
