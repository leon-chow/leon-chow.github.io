import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dataSource: any;
  cols: string[] =["language", "framework", "editor", "database"];
  skills: {}[] = [
    {
      language: "JavaScript/TypeScript", framework: "Angular", editor: "Visual Studio Code", database: "MySQL"
    },
    {
      language: "HTML/CSS", framework: "Angular Material", editor: "IDEA IntelliJ", database: "MongoDB"
    },
    {
      language: "Java", framework: "RxJS", editor: "Jupyter Notebook", database: "PostgreSQL"
    },
    {
      language: "Dart", framework: "Flutter", editor: "Spyder", database: "Firebase"
    },
    {
      language: "Python", framework: "Bootstrap", editor: "Git"
    },
    {
      language: "PHP"
    },
    {
      language: "C++"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.skills);
  }

}
