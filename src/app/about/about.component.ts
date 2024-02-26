import { ResizeService } from './../resize.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // data to populate the table, hardcoded since this data will not change much
  dataSource: any;
  cols: string[] =["language", "framework", "editor", "database"];
  skills: {}[] = [
    {
      language: "React", framework: "NodeJS", editor: "AWS", database: "SQL/NoSQL"
    },
    {
      language: "Vue", framework: "Java", editor: "GCP", database: "CI/CD"
    },
    {
      language: "Angular", editor: "Firebase", 
    },
    {
      language: "HTML/CSS", editor: "DynamoDB",
    },
    {
      language: "Material UI", editor: "S3",
    },
    {
      language: "Bootstrap"
    },
    {
      language: "NextJS"
    },
    {
      language: "JavaScript/TypeScript"
    }
  ]

  constructor(public resizeService: ResizeService) { }

  ngOnInit(): void {
    // initializing data source instance
    this.dataSource = new MatTableDataSource(this.skills);
  }

}
