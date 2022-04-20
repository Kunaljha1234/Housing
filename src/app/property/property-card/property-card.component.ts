import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";
import { ɵshimHostAttribute } from "@angular/platform-browser";

@Component({
  selector: 'app-property-card',
  // template: `<h1>I am a card</h1>`,
  templateUrl: "property-card.component.html",
  // styles: ['h1 {font-weight: normal;}']
  styleUrls: ["property-card.component.css"]
}
)
export class PropertyCardComponent {
  Property: any = {
    "Id":1,
    "Name": "Kunal's",
    "Type": "House",
    "Price": 1200
  }
}
