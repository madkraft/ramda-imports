import { Component } from '@angular/core'
import { pathOr } from 'ramda'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    console.log(pathOr)
  }
}
