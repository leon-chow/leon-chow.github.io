import { ResizeService } from './../resize.service';
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
  form = new Form('','');

  constructor(private contactService: ContactService, public snackBar: MatSnackBar, public resizeService: ResizeService) {
  }

  ngOnInit(): void {
    this.form.name = '';
    this.form.message = '';
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
