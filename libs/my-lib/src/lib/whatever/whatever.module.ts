import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhateverComponent } from './whatever.component';
import { FooComponentModule } from '../foo/foo.module';

@NgModule({
  declarations: [
    WhateverComponent,
  ],
  imports: [
    CommonModule,
    FooComponentModule
  ],
  exports: [
    WhateverComponent
  ]
})
export class WhateverComponentModule { }
