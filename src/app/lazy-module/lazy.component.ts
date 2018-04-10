import { Component } from '@angular/core'

import compose from 'ramda/src/compose'
import pipe from 'ramda/src/pipe'

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent {
  constructor() {
    console.log('Lazy loaded module')
    console.log(compose)
    console.log(pipe)
  }
}
