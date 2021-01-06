import { Form } from './form';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactService } from './../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form = new Form('','','')

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.form.name = '';
    this.form.email = '';
    this.form.message = '';

  }

  submitForm() {
    console.log(`name: ${this.form?.name}, email: ${this.form?.email}, message:${this.form?.email}`);
  }
}
