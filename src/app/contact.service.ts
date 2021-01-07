import { Form } from './contact/form';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // exposed API, but it should be okay
  private emailApi = 'https://mailthis.to/Leon';

  constructor(private http: HttpClient) { }

  sendMessage(formData: Form) {
    return this.http.post(this.emailApi, formData, { responseType: 'text'}).pipe(
      (res: any) => {
        if (res) {
          return res;
        }
      },
      (error: any) => {
        //console.log(error);
        return error;
      }
    )
  }
}
