import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [{
    "Id":1,
    "Name": "Kunal's",
    "Type": "House",
    "Price": 1200
  },
  {
    "Id":2,
    "Name": "Aakash's",
    "Type": "House",
    "Price": 1340
  },
  {
    "Id":3,
    "Name": "Vaibhav's",
    "Type": "House",
    "Price": 2200
  },
  {
    "Id":4,
    "Name": "Pratyush's",
    "Type": "House",
    "Price": 1034
  },
  {
    "Id":5,
    "Name": "Anil's",
    "Type": "House",
    "Price": 1800
  },
]

  constructor() { }

  ngOnInit() {
  }

}
