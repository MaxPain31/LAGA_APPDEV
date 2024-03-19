import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {
  group = "Hello, we are group Wonder Pets!"
  constructor() { }

  ngOnInit() {
  }

}
