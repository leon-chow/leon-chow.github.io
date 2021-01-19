import { MatSnackBar } from '@angular/material/snack-bar';
import { Form } from './form';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactService } from './../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mobileScreen: boolean = false;
  form = new Form('','');

  constructor(private contactService: ContactService, public snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600 ? true : false;
    this.form.name = '';
    this.form.message = '';
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(`height: ${window.innerHeight}, width: ${window.innerWidth}`);
    this.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
  }

  submitConfirmation() {
    this.snackBar.open("Successfully sent message!", "Dismiss", {
      duration: 3000,
    });
  }

  submitForm() {
    this.submitConfirmation();
    this.contactService.sendMessage(this.form).subscribe(
      res => {
        //console.log(res);
      }, (error) => {
        console.log(error);
      }
    );
    this.form.name = '';
    this.form.message = '';
  }
}
