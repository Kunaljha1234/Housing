import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  constructor(private router: Router) { }
  propertyTypes: Array<string> = ['House', 'Villa', 'Appartment'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  yesNo: Array<string> = ['YES', 'NO'];
  mainEntrances: Array<string> = ['North','South', 'East', 'West']

  propertyView: IProperty = {
    Id: null,
    SellRent: null,
    Name: "",
    Type: "",
    Price: null
  };

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/'])
  }
  onSubmit(){
    console.log("hello");
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
