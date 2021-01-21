import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  // global variable to be used for screen sizes, will look into fixing this in the future when im more experienced
  mobileScreen: boolean = false;

  constructor() { }
}
