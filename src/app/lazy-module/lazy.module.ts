import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { routes } from './lazy.routes'
import { LazyComponent } from './lazy.component'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LazyComponent]
})
export class LazyModule {}
