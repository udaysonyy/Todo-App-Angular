import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: '<h1>404-Page not found</h1>',
  styles: ['h1{ text-content : center; }']
})

export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
