import { ResizeService } from './../resize.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dataSource: any;
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

  constructor(public resizeService: ResizeService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.skills);
  }

}
