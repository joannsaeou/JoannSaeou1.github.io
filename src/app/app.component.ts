
/**
 * Import statements
 */
import { Component } from '@angular/core';
/*app.component.ts*/
//var CanvasJS = require('./canvasjs.min');

/**
 * Export component
 */
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [``]
})
export class AppComponent {

  title: string;
  constructor() {
    this.title = 'Personal Portfolio via angular';
  }
}
