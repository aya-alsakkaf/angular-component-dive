import { Component, ContentChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control', //host element
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None //disables the style scoping or encapsulation so that the css becomes global

  // Emaulates the shadow dom behavior, meaning that each component is scoped to it's css
})
export class ControlComponent {
  @Input({ required: true }) lable?: string
  // ContentChild or ContentChildren Gets a hold of the projected content (ng-content) unlike ViewChild which gets hold of the HTML template
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>


  onClick() {
    console.log(this.control)
  }
}
