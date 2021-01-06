import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://mailthis.to/Leon'

  constructor(private http: HttpClient) { }

  sendMessage(formData: String[]) {
    return this.http.post(this.api, formData, { responseType: 'text'}).pipe(
      (res: any) => {
        if (res) {
          return res;
        }
      },
      (error: any) => {
        console.log(error);
        return error;
      }
    )
  }
}
