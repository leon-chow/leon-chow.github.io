import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  mobileScreen: boolean = false;

  constructor() { }
}
