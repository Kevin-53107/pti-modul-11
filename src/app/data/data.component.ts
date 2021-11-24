import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { 
    fname = localStorage.getItem(key 'fname');
    lname = localStorage.getItem(key 'lname');
    nim = localStorage.getItem(key 'nim');
    email = localStorage.getItem(key 'email');
  }

  ngOnInit(): void {
  }

}
