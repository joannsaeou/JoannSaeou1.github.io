
/**
 * Import statements
 */
import { Component } from '@angular/core';

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
