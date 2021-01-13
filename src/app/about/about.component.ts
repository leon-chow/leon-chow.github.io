import { Component, HostListener, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dataSource: any;
  mobileScreen: boolean = false;
  cols: string[] =["language", "framework", "editor", "database"];
  skills: {}[] = [
    {
      language: "TypeScript", framework: "Angular", editor: "Visual Studio Code", database: "MySQL"
    },
    {
      language: "JavaScript", framework: "Angular Material", editor: "IDEA IntelliJ", database: "MongoDB"
    },
    {
      language: "HTML/CSS", framework: "RxJS", editor: "Jupyter Notebook", database: "PostgreSQL"
    },
    {
      language: "Dart", framework: "Flutter", editor: "Eclipse", database: "Firebase"
    },
    {
      language: "Java", framework: "Bootstrap", editor: "Git"
    },
    {
      language: "Python"
    },
    {
      language: "PHP"
    },
    {
      language: "C++"
    }
  ]

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(`height: ${window.innerHeight}, width: ${window.innerWidth}`);
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
  }

  constructor() { }

  ngOnInit(): void {
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
    this.dataSource = new MatTableDataSource(this.skills);
  }

}
